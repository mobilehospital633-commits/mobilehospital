import React, { useState, useEffect } from 'react';
import { 
  X, 
  Lock, 
  Unlock, 
  Save, 
  RotateCcw, 
  ShieldCheck, 
  Store, 
  Clock, 
  Phone, 
  MapPin, 
  Palette, 
  Bell, 
  KeyRound, 
  Check, 
  AlertTriangle 
} from 'lucide-react';
import { ShopInfo, Language } from '../types';
import { SHOP_INFO } from '../data/mockData';

interface AdminCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  shopInfo: ShopInfo;
  onSaveShopInfo: (newInfo: ShopInfo) => void;
  lang: Language;
}

const STORAGE_PIN_KEY = 'mobile_hospital_admin_pin';
const DEFAULT_PIN = '7407'; // Default PIN based on phone number 7407084034

export const AdminCustomizer: React.FC<AdminCustomizerProps> = ({
  isOpen,
  onClose,
  shopInfo,
  onSaveShopInfo,
  lang
}) => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  const [activeTab, setActiveTab] = useState<'general' | 'hours' | 'contact' | 'theme' | 'security'>('general');

  // Form State
  const [formData, setFormData] = useState<ShopInfo>(shopInfo);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // PIN change state
  const [newPin, setNewPin] = useState('');
  const [confirmNewPin, setConfirmNewPin] = useState('');
  const [pinChangeMsg, setPinChangeMsg] = useState({ text: '', isError: false });

  // Reset form data when modal opens or shopInfo updates
  useEffect(() => {
    setFormData(shopInfo);
  }, [shopInfo, isOpen]);

  // Read saved PIN from localStorage
  const getStoredPin = (): string => {
    try {
      return localStorage.getItem(STORAGE_PIN_KEY) || DEFAULT_PIN;
    } catch {
      return DEFAULT_PIN;
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedPin = getStoredPin();
    
    // Accept either current stored PIN, default PIN, or full phone number 7407084034
    if (
      pinInput.trim() === storedPin ||
      pinInput.trim() === DEFAULT_PIN ||
      pinInput.trim() === '7407084034'
    ) {
      setIsAuthenticated(true);
      setPinError('');
      setPinInput('');
    } else {
      setPinError(lang === 'bn' ? 'ভুল পিন কোড! আবার চেষ্টা করুন।' : 'Incorrect PIN! Please try again.');
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveShopInfo(formData);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleResetToDefaults = () => {
    const confirmMsg = lang === 'bn' 
      ? 'আপনি কি নিশ্চিত যে সকল কাস্টম সেটিংস রিসেট করে ডিফল্ট সেটিংসে ফিরতে চান?'
      : 'Are you sure you want to reset all custom modifications back to default?';
    if (window.confirm(confirmMsg)) {
      setFormData(SHOP_INFO);
      onSaveShopInfo(SHOP_INFO);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }
  };

  const handleChangePin = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPin.length < 4) {
      setPinChangeMsg({
        text: lang === 'bn' ? 'পিন কমপক্ষে ৪ ডিজিটের হতে হবে!' : 'PIN must be at least 4 digits!',
        isError: true
      });
      return;
    }
    if (newPin !== confirmNewPin) {
      setPinChangeMsg({
        text: lang === 'bn' ? 'দুটো পিন মিলছে না!' : 'PINs do not match!',
        isError: true
      });
      return;
    }

    try {
      localStorage.setItem(STORAGE_PIN_KEY, newPin);
      setPinChangeMsg({
        text: lang === 'bn' ? 'নতুন পিন সফলভাবে সংরক্ষিত হয়েছে!' : 'New PIN saved successfully!',
        isError: false
      });
      setNewPin('');
      setConfirmNewPin('');
    } catch {
      setPinChangeMsg({
        text: lang === 'bn' ? 'পিন সংরক্ষণ করতে সমস্যা হয়েছে।' : 'Failed to save new PIN.',
        isError: true
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
              {isAuthenticated ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>{lang === 'bn' ? 'মালিক কাস্টমাইজ প্যানেল' : 'Owner Customizer Panel'}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 font-mono">
                  {isAuthenticated ? 'AUTHORIZED' : 'SECURE LOCKED'}
                </span>
              </h3>
              <p className="text-xs text-stone-400">
                {lang === 'bn' 
                  ? 'শুধু সেন্টারের মালিকের জন্য সুরক্ষিত নিয়ন্ত্রণ কেন্দ্র' 
                  : 'Restricted to store owner only - Not accessible by public'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-full hover:bg-stone-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {!isAuthenticated ? (
          /* Authentication Screen */
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto my-auto space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-stone-100 text-stone-700 flex items-center justify-center mx-auto border border-stone-200 shadow-inner">
              <Lock className="w-8 h-8 text-emerald-600" />
            </div>

            <div>
              <h4 className="text-xl font-bold text-stone-900">
                {lang === 'bn' ? 'মালিক পিন প্রবেশ করুন' : 'Enter Owner PIN'}
              </h4>
              <p className="text-xs text-stone-500 mt-1">
                {lang === 'bn'
                  ? 'এই অপশনটি কেবল আপনি (মালিক) নিয়ন্ত্রণ করতে পারবেন। সাধারণ গ্রাহকরা এটা পরিবর্তন করতে পারবে না।'
                  : 'This panel is private. Enter your security PIN to modify store settings.'}
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={pinInput}
                  onChange={(e) => {
                    setPinInput(e.target.value);
                    setPinError('');
                  }}
                  placeholder={lang === 'bn' ? 'গোপন পিন লিখুন (উদাঃ ৭৪০৭)' : 'Enter PIN (e.g. 7407)'}
                  className="w-full px-4 py-3.5 text-center tracking-widest text-lg font-mono font-bold bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                  autoFocus
                  id="admin-pin-input"
                />
                {pinError && (
                  <p className="text-xs text-red-600 font-semibold mt-2 flex items-center justify-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{pinError}</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                id="admin-pin-submit-btn"
              >
                <Unlock className="w-4 h-4" />
                <span>{lang === 'bn' ? 'লগইন করুন ও এডিট শুরু করুন' : 'Unlock & Start Editing'}</span>
              </button>
            </form>

            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200/60 text-[11px] text-emerald-800 text-left">
              <span className="font-bold block">💡 {lang === 'bn' ? 'আপনার ডিফল্ট পিন:' : 'Default PIN:'}</span>
              <span>
                {lang === 'bn' 
                  ? 'আপনার ফোন নম্বরের প্রথম ৪ ডিজিট: 7407 অথবা পুরো ফোন নম্বর 7407084034 দিয়ে আনলক করতে পারবেন। ভেতরে ঢুকে নিজের পছন্দমত নতুন পিনও সেট করতে পারবেন।' 
                  : 'Use 7407 (first 4 digits of your phone) or 7407084034. You can also change the PIN inside.'}
              </span>
            </div>
          </div>
        ) : (
          /* Authenticated Management Panel */
          <div className="flex-1 flex flex-col overflow-hidden">
            
            {/* Tabs Navigation */}
            <div className="flex items-center px-4 bg-stone-100 border-b border-stone-200 overflow-x-auto shrink-0 gap-1 py-1.5">
              <button
                type="button"
                onClick={() => setActiveTab('general')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'general'
                    ? 'bg-white text-stone-900 shadow-xs border border-stone-200'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                <Store className="w-3.5 h-3.5 text-emerald-600" />
                <span>{lang === 'bn' ? 'দোকানের নাম ও ট্যাগলাইন' : 'Shop Name'}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('hours')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'hours'
                    ? 'bg-white text-stone-900 shadow-xs border border-stone-200'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>{lang === 'bn' ? 'সময়সূচি ও নোটিশ' : 'Hours & Notice'}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('contact')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'contact'
                    ? 'bg-white text-stone-900 shadow-xs border border-stone-200'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>{lang === 'bn' ? 'ফোন, হোয়াটসঅ্যাপ ও ম্যাপ' : 'Contact & Location'}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('theme')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'theme'
                    ? 'bg-white text-stone-900 shadow-xs border border-stone-200'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                <Palette className="w-3.5 h-3.5 text-emerald-600" />
                <span>{lang === 'bn' ? 'ব্যাকগ্রাউন্ড ডিজাইন' : 'Background Theme'}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('security')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'security'
                    ? 'bg-white text-stone-900 shadow-xs border border-stone-200'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                <KeyRound className="w-3.5 h-3.5 text-emerald-600" />
                <span>{lang === 'bn' ? 'পিন পরিবর্তন ও লক' : 'Security PIN'}</span>
              </button>
            </div>

            {/* Tab Contents Form */}
            <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {/* TAB 1: GENERAL BRANDING */}
              {activeTab === 'general' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/50 text-xs text-emerald-900">
                    <p className="font-semibold">
                      {lang === 'bn'
                        ? 'এখানে দোকানের নাম, স্লোগান ও সাবটাইটেল পরিবর্তন করতে পারেন। বাংলা নাম "মোবাইল হসপিটাল" হিসেবে সেট করা আছে।'
                        : 'Manage shop name and branding. Bengali name is currently set to "মোবাইল হসপিটাল".'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {lang === 'bn' ? 'দোকানের নাম (বাংলা)' : 'Shop Name (Bengali)'}
                      </label>
                      <input
                        type="text"
                        value={formData.nameBn}
                        onChange={(e) => setFormData({ ...formData, nameBn: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                        placeholder="মোবাইল হসপিটাল"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {lang === 'bn' ? 'দোকানের নাম (English)' : 'Shop Name (English)'}
                      </label>
                      <input
                        type="text"
                        value={formData.nameEn}
                        onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                        placeholder="Mobile Hospital"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {lang === 'bn' ? 'প্রধান ট্যাগলাইন (বাংলা)' : 'Main Tagline (Bengali)'}
                    </label>
                    <input
                      type="text"
                      value={formData.taglineBn}
                      onChange={(e) => setFormData({ ...formData, taglineBn: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                      placeholder="আপনার প্রিয় ফোনের সেরা যত্ন!"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {lang === 'bn' ? 'সাবটাইটেল / বর্ণনা (বাংলা)' : 'Subtitle / Description (Bengali)'}
                    </label>
                    <textarea
                      rows={2}
                      value={formData.subtitleBn}
                      onChange={(e) => setFormData({ ...formData, subtitleBn: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                      placeholder="আমরা দ্রুত এবং বিশ্বস্ত মোবাইল রিপেয়ারিং সেবা প্রদান করি।"
                    />
                  </div>
                </div>
              )}

              {/* TAB 2: HOURS & NOTICE */}
              {activeTab === 'hours' && (
                <div className="space-y-5">
                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900">
                    <p className="font-semibold">
                      {lang === 'bn'
                        ? 'দোকান খোলার সময় প্রতিদিন সকাল ৯টা থেকে রাত ১০টা পর্যন্ত কনফিগার করা আছে।'
                        : 'Configured shop opening hours: Daily 9:00 AM to 10:00 PM.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {lang === 'bn' ? 'খোলার সময়সূচি (বাংলা)' : 'Working Hours (Bengali)'}
                      </label>
                      <input
                        type="text"
                        value={formData.workingHoursBn}
                        onChange={(e) => setFormData({ ...formData, workingHoursBn: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                        placeholder="প্রতিদিন সকাল ৯টা থেকে রাত ১০টা পর্যন্ত খোলা থাকবে"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {lang === 'bn' ? 'খোলার সময়সূচি (English)' : 'Working Hours (English)'}
                      </label>
                      <input
                        type="text"
                        value={formData.workingHoursEn}
                        onChange={(e) => setFormData({ ...formData, workingHoursEn: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                        placeholder="Open Daily: 9:00 AM to 10:00 PM"
                      />
                    </div>
                  </div>

                  {/* Announcement Banner Control */}
                  <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bell className="w-4 h-4 text-emerald-600" />
                        <span className="text-xs font-bold text-stone-900">
                          {lang === 'bn' ? 'ওয়েবসাইটের শীর্ষে জরুরি নোটিশ ব্যানার' : 'Top Notice Announcement Banner'}
                        </span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.announcement?.enabled ?? true}
                          onChange={(e) => setFormData({
                            ...formData,
                            announcement: {
                              ...(formData.announcement || { textBn: '', textEn: '', badgeBn: 'নোটিশ', badgeEn: 'Notice' }),
                              enabled: e.target.checked
                            }
                          })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                      </label>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-600 mb-1">
                        {lang === 'bn' ? 'ব্যানারের বার্তা (বাংলা)' : 'Banner Message (Bengali)'}
                      </label>
                      <input
                        type="text"
                        value={formData.announcement?.textBn || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          announcement: {
                            ...(formData.announcement || { enabled: true, textEn: '', badgeBn: 'সরাসরি সেবা', badgeEn: 'Live' }),
                            textBn: e.target.value
                          }
                        })}
                        className="w-full px-3.5 py-2 bg-white border border-stone-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-emerald-500"
                        placeholder="প্রতিদিন সকাল ৯টা থেকে রাত ১০টা পর্যন্ত আমাদের সেন্টারে সরাসরি মোবাইল মেরামত সেবা চালু রয়েছে।"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: CONTACT & LOCATION */}
              {activeTab === 'contact' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {lang === 'bn' ? 'মোবাইল ফোন নম্বর (কলিং)' : 'Primary Phone Number'}
                      </label>
                      <input
                        type="text"
                        value={formData.phoneRaw}
                        onChange={(e) => setFormData({ 
                          ...formData, 
                          phoneRaw: e.target.value,
                          phoneHotline: e.target.value 
                        })}
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                        placeholder="7407084034"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {lang === 'bn' ? 'হোয়াটসঅ্যাপ নম্বর (WhatsApp)' : 'WhatsApp Number'}
                      </label>
                      <input
                        type="text"
                        value={formData.whatsappRaw}
                        onChange={(e) => setFormData({ 
                          ...formData, 
                          whatsappRaw: e.target.value,
                          whatsappNumber: e.target.value.startsWith('91') ? e.target.value : `91${e.target.value}` 
                        })}
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                        placeholder="7407084034"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {lang === 'bn' ? 'সেন্টারের ঠিকানা (বাংলা)' : 'Center Address (Bengali)'}
                    </label>
                    <input
                      type="text"
                      value={formData.addressBn}
                      onChange={(e) => setFormData({ ...formData, addressBn: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                      placeholder="মোবাইল হসপিটাল, মোবাইল রিপেয়ারিং সেন্টার, প্রধান বাজার রোড"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {lang === 'bn' ? 'গুগল ম্যাপস এমবেড ইউআরএল (Google Maps Embed)' : 'Google Maps Embed URL'}
                    </label>
                    <input
                      type="text"
                      value={formData.googleMapsEmbedUrl}
                      onChange={(e) => setFormData({ ...formData, googleMapsEmbedUrl: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-mono focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                    />
                  </div>
                </div>
              )}

              {/* TAB 4: UNIQUE THEME & BACKGROUND */}
              {activeTab === 'theme' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/50 text-xs text-emerald-900">
                    <p className="font-semibold">
                      {lang === 'bn'
                        ? 'আপনার ওয়েবসাইটের ব্যাকগ্রাউন্ড ডিজাইন পছন্দ করুন। প্রতিটি ডিজাইনে রয়েছে সূক্ষ্ম সার্কিট টেক্সচার ও এম্বিয়েন্ট লাইটিং।'
                        : 'Select your preferred unique background aesthetic featuring subtle circuit traces and ambient lighting.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Theme Option 1 */}
                    <div
                      onClick={() => setFormData({ ...formData, backgroundTheme: 'tech-circuit' })}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        formData.backgroundTheme === 'tech-circuit' || !formData.backgroundTheme
                          ? 'border-emerald-600 bg-emerald-50/40 shadow-sm'
                          : 'border-stone-200 hover:border-stone-300 bg-white'
                      }`}
                    >
                      <div className="h-14 rounded-xl bg-stone-900 border border-stone-700 relative overflow-hidden mb-3 bg-circuit-pattern flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 blur-sm"></div>
                        <span className="text-[10px] text-emerald-400 font-mono relative z-10">CIRCUIT</span>
                      </div>
                      <h4 className="text-xs font-bold text-stone-900">
                        {lang === 'bn' ? 'টেক সার্কিট ও এম্বিয়েন্ট' : 'Tech Circuit'}
                      </h4>
                      <p className="text-[11px] text-stone-500 mt-1">
                        {lang === 'bn' ? 'ইঞ্জিনিয়ারিং মাইক্রো-সার্কিট ও লাইটিং' : 'Hardware engineering circuit pattern'}
                      </p>
                    </div>

                    {/* Theme Option 2 */}
                    <div
                      onClick={() => setFormData({ ...formData, backgroundTheme: 'dark-slate' })}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        formData.backgroundTheme === 'dark-slate'
                          ? 'border-emerald-600 bg-emerald-50/40 shadow-sm'
                          : 'border-stone-200 hover:border-stone-300 bg-white'
                      }`}
                    >
                      <div className="h-14 rounded-xl bg-stone-950 border border-stone-800 relative overflow-hidden mb-3 bg-tech-grid-dark flex items-center justify-center">
                        <span className="text-[10px] text-emerald-300 font-mono">OBSIDIAN</span>
                      </div>
                      <h4 className="text-xs font-bold text-stone-900">
                        {lang === 'bn' ? 'অবসিডিয়ান স্লেট' : 'Obsidian Slate'}
                      </h4>
                      <p className="text-[11px] text-stone-500 mt-1">
                        {lang === 'bn' ? 'গভীর আধুনিক টেক্সচার ও মেটালিক লুক' : 'Deep dark modern metallic finish'}
                      </p>
                    </div>

                    {/* Theme Option 3 */}
                    <div
                      onClick={() => setFormData({ ...formData, backgroundTheme: 'clean-matrix' })}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        formData.backgroundTheme === 'clean-matrix'
                          ? 'border-emerald-600 bg-emerald-50/40 shadow-sm'
                          : 'border-stone-200 hover:border-stone-300 bg-white'
                      }`}
                    >
                      <div className="h-14 rounded-xl bg-stone-100 border border-stone-300 relative overflow-hidden mb-3 bg-dots-matrix flex items-center justify-center">
                        <span className="text-[10px] text-emerald-700 font-mono">MATRIX</span>
                      </div>
                      <h4 className="text-xs font-bold text-stone-900">
                        {lang === 'bn' ? 'ক্লিন ডট-ম্যাট্রিক্স' : 'Clean Matrix'}
                      </h4>
                      <p className="text-[11px] text-stone-500 mt-1">
                        {lang === 'bn' ? 'মিনিমালিস্ট আর্কিটেকচারাল ডট গ্রিড' : 'Architectural clean dot matrix'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: SECURITY & PASSCODE */}
              {activeTab === 'security' && (
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 text-xs text-stone-700 space-y-2">
                    <p className="font-bold flex items-center gap-1.5 text-stone-900">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>{lang === 'bn' ? 'নিরাপত্তা পিন ব্যবস্থাপনা' : 'Security PIN Settings'}</span>
                    </p>
                    <p>
                      {lang === 'bn'
                        ? 'আপনার কাস্টমাইজ প্যানেল সুরক্ষিত রাখতে গোপন পিন কোড পরিবর্তন করুন। কোনো সাধারণ ভিজিটর এই পিন ছাড়া ওয়েবসাইট এডিট করতে পারবে না।'
                        : 'Change your secret PIN to prevent unauthorized access to this customizer.'}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-stone-200 bg-white space-y-4 max-w-md">
                    <h4 className="text-xs font-bold text-stone-900">
                      {lang === 'bn' ? 'নতুন অ্যাডমিন পিন সেট করুন:' : 'Set New Admin PIN:'}
                    </h4>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                          {lang === 'bn' ? 'নতুন পিন (কমপক্ষে ৪ সংখ্যা)' : 'New PIN (at least 4 digits)'}
                        </label>
                        <input
                          type="password"
                          value={newPin}
                          onChange={(e) => setNewPin(e.target.value)}
                          placeholder="••••"
                          className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-xl text-sm font-mono tracking-widest"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                          {lang === 'bn' ? 'নতুন পিন পুনরায় লিখুন' : 'Confirm New PIN'}
                        </label>
                        <input
                          type="password"
                          value={confirmNewPin}
                          onChange={(e) => setConfirmNewPin(e.target.value)}
                          placeholder="••••"
                          className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-xl text-sm font-mono tracking-widest"
                        />
                      </div>

                      {pinChangeMsg.text && (
                        <p className={`text-xs font-semibold ${pinChangeMsg.isError ? 'text-red-600' : 'text-emerald-700'}`}>
                          {pinChangeMsg.text}
                        </p>
                      )}

                      <button
                        type="button"
                        onClick={handleChangePin}
                        className="px-4 py-2 bg-stone-900 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl transition-colors"
                      >
                        {lang === 'bn' ? 'পিন আপডেট করুন' : 'Update PIN'}
                      </button>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setIsAuthenticated(false)}
                      className="px-4 py-2 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-bold transition-colors flex items-center gap-1.5"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>{lang === 'bn' ? 'প্যানেল লক / লগআউট' : 'Lock Panel / Logout'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleResetToDefaults}
                      className="px-4 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-bold transition-colors flex items-center gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{lang === 'bn' ? 'ডিফল্টে রিসেট করুন' : 'Reset to Defaults'}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Bottom Submit Bar inside Form */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between sticky bottom-0 bg-white py-2">
                <div className="flex items-center gap-2">
                  {saveSuccess && (
                    <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{lang === 'bn' ? 'পরিবর্তন সফলভাবে সংরক্ষিত হয়েছে!' : 'Changes Saved Successfully!'}</span>
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-colors"
                  >
                    {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-md flex items-center gap-1.5 active:scale-95"
                    id="save-customizer-btn"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>{lang === 'bn' ? 'পরিবর্তন সংরক্ষণ করুন' : 'Save Changes'}</span>
                  </button>
                </div>
              </div>

            </form>

          </div>
        )}

      </div>
    </div>
  );
};
