import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, Send, Sparkles } from 'lucide-react';
import { Language, ServiceItem, ShopInfo } from '../types';
import { SHOP_INFO as DEFAULT_SHOP_INFO } from '../data/mockData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  prefillService?: ServiceItem | null;
  shopInfo?: ShopInfo;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  lang,
  prefillService,
  shopInfo = DEFAULT_SHOP_INFO,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [brandModel, setBrandModel] = useState('');
  const [issue, setIssue] = useState('ডিসপ্লে পরিবর্তন');
  const [serviceType, setServiceType] = useState<'shop' | 'pickup'>('shop');
  const [tokenResult, setTokenResult] = useState<string | null>(null);

  useEffect(() => {
    if (prefillService) {
      setIssue(prefillService.titleBn);
    }
  }, [prefillService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    const num = Math.floor(1000 + Math.random() * 9000);
    const token = `MH-${num}`;
    setTokenResult(token);
  };

  const handleClose = () => {
    setTokenResult(null);
    setName('');
    setPhone('');
    setBrandModel('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {tokenResult ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-stone-900">
              {lang === 'bn' ? 'বুকিং টোকেন কনফার্ম!' : 'Booking Confirmed!'}
            </h3>
            
            <p className="text-sm text-stone-600 max-w-sm mx-auto">
              {lang === 'bn'
                ? `ধন্যবাদ ${name}! আপনার ফোনের জন্য সার্ভিস টোকেন তৈরি করা হয়েছে। এই স্লিপটি শপে দেখালে সরাসরি কাউন্টারে অগ্রাধিকার পাবেন।`
                : `Thank you ${name}! Your repair token has been generated. Present this token at our counter for VIP priority.`}
            </p>

            <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-2xl font-black tracking-widest inline-block shadow-inner">
              {tokenResult}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/${shopInfo.whatsappNumber}?text=${encodeURIComponent(
                  `আসসালামু আলাইকুম মোবাইল হসপিটাল, আমি একটি বুকিং দিয়েছি। টোকেন নং: ${tokenResult}। নাম: ${name}, ফোন মডেল: ${brandModel}, সমস্যা: ${issue}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে টোকেন পাঠান' : 'Send via WhatsApp'}</span>
              </a>

              <button
                type="button"
                onClick={handleClose}
                className="w-full py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-sm transition-colors"
              >
                {lang === 'bn' ? 'ঠিক আছে, সম্পন্ন করুন' : 'Close'}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-stone-900">
                {lang === 'bn' ? 'এক্সপ্রেস রিপেয়ার বুকিং' : 'Express Repair Booking'}
              </h3>
            </div>
            <p className="text-xs text-stone-500 mb-5">
              {lang === 'bn'
                ? 'মোবাইল হসপিটাল - আপনার প্রিয় ফোনের সেরা যত্ন!'
                : 'Mobile Hospital - The Best Care for Your Beloved Phone'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {lang === 'bn' ? 'আপনার নাম *' : 'Your Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang === 'bn' ? 'যেমন: আরিফুল ইসলাম' : 'e.g. John Doe'}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {lang === 'bn' ? 'মোবাইল নম্বর *' : 'Phone Number *'}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={lang === 'bn' ? '017xxxxxxxx' : '017xxxxxxxx'}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {lang === 'bn' ? 'ফোনের মডেল ও ব্র্যান্ড *' : 'Device Brand & Model *'}
                </label>
                <input
                  type="text"
                  required
                  value={brandModel}
                  onChange={(e) => setBrandModel(e.target.value)}
                  placeholder={lang === 'bn' ? 'যেমন: Samsung S22 Ultra বা iPhone 14' : 'e.g. Samsung S22 Ultra or iPhone 14'}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {lang === 'bn' ? 'সমস্যার ধরন *' : 'Select Issue *'}
                </label>
                <select
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                >
                  <option value="ডিসপ্লে পরিবর্তন">ডিসপ্লে পরিবর্তন (Display Screen)</option>
                  <option value="ব্যাটারি রিপ্লেসমেন্ট">ব্যাটারি রিপ্লেসমেন্ট (Battery Change)</option>
                  <option value="চার্জিং পোর্ট সমস্যা সমাধান">চার্জিং পোর্ট সমস্যা সমাধান (Charging Port)</option>
                  <option value="মাদারবোর্ড ও আইসি সমস্যা">মাদারবোর্ড ও আইসি সমস্যা (Motherboard)</option>
                  <option value="ওয়াটার ড্যামেজ">ওয়াটার ড্যামেজ রিকভারি (Water Damage)</option>
                  <option value="ক্যামেরা বা স্পিকার">ক্যামেরা বা স্পিকার সমাধান (Camera/Audio)</option>
                  <option value="অন্যান্য সমস্যা">অন্যান্য সমস্যা (Other Defect)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <label className={`p-2.5 rounded-xl border text-xs flex items-center gap-2 cursor-pointer ${
                  serviceType === 'shop' ? 'bg-emerald-50 border-emerald-600 font-bold text-emerald-950' : 'bg-stone-50 border-stone-200 text-stone-700'
                }`}>
                  <input
                    type="radio"
                    name="modal-type"
                    checked={serviceType === 'shop'}
                    onChange={() => setServiceType('shop')}
                  />
                  <span>{lang === 'bn' ? 'শপে আসব' : 'Visit Center'}</span>
                </label>

                <label className={`p-2.5 rounded-xl border text-xs flex items-center gap-2 cursor-pointer ${
                  serviceType === 'pickup' ? 'bg-emerald-50 border-emerald-600 font-bold text-emerald-950' : 'bg-stone-50 border-stone-200 text-stone-700'
                }`}>
                  <input
                    type="radio"
                    name="modal-type"
                    checked={serviceType === 'pickup'}
                    onChange={() => setServiceType('pickup')}
                  />
                  <span>{lang === 'bn' ? 'পিকআপ / কুরিয়ার' : 'Home Courier'}</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'bn' ? 'বুকিং টোকেন তৈরি করুন' : 'Confirm & Generate Slip'}</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
