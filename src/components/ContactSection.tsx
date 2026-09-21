import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Calendar,
  Smartphone,
  Navigation,
  ExternalLink
} from 'lucide-react';
import { SHOP_INFO as DEFAULT_SHOP_INFO, PROBLEM_OPTIONS, POPULAR_BRANDS } from '../data/mockData';
import { Language, ShopInfo } from '../types';

interface ContactSectionProps {
  lang: Language;
  shopInfo?: ShopInfo;
  prefillData?: {
    brand?: string;
    model?: string;
    problem?: string;
  };
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  lang, 
  prefillData,
  shopInfo = DEFAULT_SHOP_INFO
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    brandModel: prefillData?.model || '',
    issue: prefillData?.problem || 'ডিসপ্লে পরিবর্তন',
    notes: '',
    serviceMethod: 'shop' as 'shop' | 'pickup',
  });

  const [submittedToken, setSubmittedToken] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Generate token
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newToken = `MH-${randomNum}`;
    setSubmittedToken(newToken);
  };

  const faqs = [
    {
      qBn: 'আমার ফোনের পার্টস রিপ্লেস করতে কত সময় লাগবে?',
      qEn: 'How long does a typical smartphone repair take?',
      aBn: 'ডিসপ্লে, ব্যাটারি এবং চার্জিং পোর্টের মত সাধারণ কাজগুলো আমাদের মোবাইল রিপেয়ারিং সেন্টারে গড়ে ২০ থেকে ৪৫ মিনিটের মধ্যে আপনার চোখের সামনেই সম্পন্ন করা হয়। মাদারবোর্ড আইসি লেভেল কাজের জন্য ২ থেকে ৪ ঘণ্টার মতো সময় লাগতে পারে।',
      aEn: 'Common jobs like display, battery, and charging port replacements take 20 to 45 minutes right in front of you at our mobile repairing center. Intricate motherboard work takes 2 to 4 hours.'
    },
    {
      qBn: 'রিপেয়ারের পর ফোনের পার্টসে কি ওয়ারেন্টি থাকে?',
      qEn: 'Is there a warranty provided on replacement parts?',
      aBn: 'হ্যাঁ, অবশ্যই! মোবাইল হাসপাতালে প্রতিটি জেনুইন ডিসপ্লেতে ৯০ দিন, ব্যাটারিতে ৬ মাস এবং অন্যান্য স্পেয়ার পার্টসে ৩০ থেকে ৬০ দিনের অফিশিয়াল মানি-ব্যাক ও রিপ্লেসমেন্ট ওয়ারেন্টি কার্ড প্রদান করা হয়।',
      aEn: 'Yes! We provide 90-day warranty on original displays, 6-month warranty on batteries, and 30-60 days on other certified components.'
    },
    {
      qBn: 'মেরামতের সময় কি আমার ফোনের ছবি বা পার্সোনাল ডেটা ডিলিট হবে?',
      qEn: 'Will my personal photos or data be wiped during hardware repair?',
      aBn: 'না। ডিসপ্লে, ব্যাটারি বা চার্জিং পোর্ট রিপ্লেসমেন্টের ক্ষেত্রে আপনার ব্যক্তিগত ছবি, হোয়াটসঅ্যাপ বা তথ্যের কোনো ক্ষতি হয় না। তাছাড়া আমাদের ওপেন কাউন্টারে আপনার সামনেই কাজ করা হয়।',
      aEn: 'No. Hardware repairs (screen, battery, ports) do not touch your stored data. You also get to watch the repair at our open transparent counter.'
    },
    {
      qBn: 'আমি কি ঢাকার বাইরে থেকে কুরিয়ারের মাধ্যমে পাঠাতে পারি?',
      qEn: 'Can I courier my phone from outside Dhaka?',
      aBn: 'হ্যাঁ, সুন্দরবন বা এসএ পরিবহনের মাধ্যমে যেকোনো জেলা থেকে ফোন পাঠিয়ে নিরাপদে রিপেয়ার করিয়ে নেওয়া সম্ভব। ফোন রিসিভ হওয়া থেকে ডেলিভারি পর্যন্ত ভিডিও রেকর্ড ও ট্র্যাকিং আইডি দেওয়া হয়।',
      aEn: 'Yes, we accept courier deliveries nationwide with video unboxing records and tracking updates.'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-stone-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'bn' ? 'সার্ভিস বুকিং ও যোগাযোগ' : 'Direct Booking & Inquiries'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {lang === 'bn' ? 'এখনই যোগাযোগ ও অ্যাপয়েন্টমেন্ট বুক করুন' : 'Book Your Repair Today'}
          </h2>
          <p className="mt-2 text-stone-600 text-base">
            {lang === 'bn'
              ? 'ফোন নিয়ে আসার আগে ফর্মটি পূরণ করুন বা সরাসরি কল দিয়ে কনফার্ম করুন।'
              : 'Fill out the repair request below or reach out directly to our helpdesk.'}
          </p>
        </div>

        {/* Main Grid: Form (7 cols) + Direct Contact Cards (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Booking / Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
            
            {submittedToken ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900">
                  {lang === 'bn' ? 'বুকিং সফলভাবে গৃহীত হয়েছে!' : 'Booking Request Received!'}
                </h3>
                <p className="text-stone-600 text-sm max-w-md mx-auto">
                  {lang === 'bn'
                    ? `ধন্যবাদ ${formData.name}! আপনার বুকিং টোকেন নম্বর নিচে দেওয়া হলো। আমাদের প্রতিনিধি শীঘ্রই আপনাকে কনফার্ম করবেন।`
                    : `Thank you ${formData.name}! Your repair token is generated below. Our support engineer will contact you shortly.`}
                </p>

                <div className="inline-block p-4 rounded-2xl bg-stone-900 text-white font-mono text-xl font-bold tracking-widest my-2">
                  {submittedToken}
                </div>

                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/${shopInfo.whatsappNumber}?text=${encodeURIComponent(
                      `হ্যালো মোবাইল হসপিটাল, আমি একটি রিপেয়ার বুক করেছি। আমার বুকিং টোকেন: ${submittedToken}। ফোন মডেল: ${formData.brandModel}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে টোকেন পাঠান' : 'Send via WhatsApp'}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedToken(null);
                      setFormData({
                        name: '',
                        phone: '',
                        brandModel: '',
                        issue: 'ডিসপ্লে পরিবর্তন',
                        notes: '',
                        serviceMethod: 'shop',
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-semibold transition-colors"
                  >
                    {lang === 'bn' ? 'নতুন রিকুয়েস্ট করুন' : 'New Request'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="repair-booking-form">
                <div className="border-b border-stone-100 pb-3 mb-2">
                  <h3 className="text-lg font-bold text-stone-900">
                    {lang === 'bn' ? 'মোবাইল রিপেয়ার রিকোয়েস্ট ফর্ম' : 'Smartphone Repair Booking'}
                  </h3>
                  <p className="text-xs text-stone-500">
                    {lang === 'bn' ? 'ফর্ম পূরণ করলে এক্সপ্রেস কিউতে অগ্রাধিকার দেওয়া হয়।' : 'Priority queue assigned upon online reservation.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {lang === 'bn' ? 'আপনার নাম *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={lang === 'bn' ? 'যেমন: মোহাম্মদ শফিকুল ইসলাম' : 'e.g. John Doe'}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                      id="form-name-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {lang === 'bn' ? 'মোবাইল নম্বর *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={lang === 'bn' ? 'যেমন: 017xxxxxxxx' : 'e.g. 017xxxxxxxx'}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                      id="form-phone-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {lang === 'bn' ? 'ফোনের ব্র্যান্ড ও মডেল *' : 'Device Brand & Model *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.brandModel}
                      onChange={(e) => setFormData({ ...formData, brandModel: e.target.value })}
                      placeholder={lang === 'bn' ? 'যেমন: Samsung A54 / iPhone 13' : 'e.g. Samsung A54 / iPhone 13'}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                      id="form-model-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {lang === 'bn' ? 'প্রধান সমস্যা *' : 'Service Defect *'}
                    </label>
                    <select
                      value={formData.issue}
                      onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                      id="form-issue-select"
                    >
                      <option value="ডিসপ্লে পরিবর্তন">ডিসপ্লে পরিবর্তন (Display Screen)</option>
                      <option value="ব্যাটারি রিপ্লেসমেন্ট">ব্যাটারি রিপ্লেসমেন্ট (Battery Change)</option>
                      <option value="চার্জিং পোর্ট সমস্যা সমাধান">চার্জিং পোর্ট সমস্যা সমাধান (Charging Port)</option>
                      <option value="মাদারবোর্ড ও আইসি সমস্যা">মাদারবোর্ড ও আইসি সমস্যা (Motherboard)</option>
                      <option value="ওয়াটার ড্যামেজ">ওয়াটার ড্যামেজ রিকভারি (Water Damage)</option>
                      <option value="ক্যামেরা বা স্পিকার">ক্যামেরা বা স্পিকার সমস্যা (Camera/Speaker)</option>
                      <option value="সফটওয়্যার বা লক">সফটওয়্যার বা পাসওয়ার্ড লক (Software/Unlock)</option>
                      <option value="অন্যান্য সমস্যা">অন্যান্য সমস্যা (Other Issue)</option>
                    </select>
                  </div>
                </div>

                {/* Service Method Radio */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">
                    {lang === 'bn' ? 'সেবা নেওয়ার মাধ্যম:' : 'Service Preference:'}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer text-xs sm:text-sm ${
                      formData.serviceMethod === 'shop' 
                        ? 'bg-emerald-50/80 border-emerald-600 font-semibold text-emerald-950' 
                        : 'bg-stone-50 border-stone-200 text-stone-700'
                    }`}>
                      <input
                        type="radio"
                        name="method"
                        checked={formData.serviceMethod === 'shop'}
                        onChange={() => setFormData({ ...formData, serviceMethod: 'shop' })}
                        className="text-emerald-600 focus:ring-emerald-500"
                      />
                      <span>{lang === 'bn' ? 'শপে সরাসরি আসব' : 'Visit Shop in Person'}</span>
                    </label>

                    <label className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer text-xs sm:text-sm ${
                      formData.serviceMethod === 'pickup' 
                        ? 'bg-emerald-50/80 border-emerald-600 font-semibold text-emerald-950' 
                        : 'bg-stone-50 border-stone-200 text-stone-700'
                    }`}>
                      <input
                        type="radio"
                        name="method"
                        checked={formData.serviceMethod === 'pickup'}
                        onChange={() => setFormData({ ...formData, serviceMethod: 'pickup' })}
                        className="text-emerald-600 focus:ring-emerald-500"
                      />
                      <span>{lang === 'bn' ? 'হোম পিকআপ / কুরিয়ার' : 'Pickup / Courier Service'}</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {lang === 'bn' ? 'সমস্যার বিস্তারিত বিবরণ (ঐচ্ছিক)' : 'Problem Details (Optional)'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={lang === 'bn' ? 'কীভাবে সমস্যা হয়েছে, পানিতে পড়েছে কিনা ইত্যাদি লিখুন...' : 'Add any specific symptoms or accidental drops...'}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                    id="form-notes-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
                  id="form-submit-btn"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'বুকিং সাবমিট করুন' : 'Submit Repair Appointment'}</span>
                </button>
              </form>
            )}

          </div>

          {/* Right Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone & WhatsApp Hotline Card */}
            <div className="bg-stone-900 text-white rounded-3xl p-6 border border-stone-800 shadow-md">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>{lang === 'bn' ? 'সরাসরি হেল্পলাইন ও পরামর্শ' : 'Direct Helpline & Inquiries'}</span>
              </h3>

              <div className="space-y-3">
                {/* Primary Phone 7407084034 */}
                <a
                  href={`tel:${shopInfo.phoneRaw}`}
                  className="p-3.5 rounded-2xl bg-stone-800 hover:bg-stone-750 flex items-center justify-between transition-colors border border-stone-700 group"
                  id="direct-call-link-1"
                >
                  <div>
                    <span className="text-xs text-stone-400 block font-medium">
                      {lang === 'bn' ? 'মোবাইল ও হেল্পলাইন:' : 'Phone & Hotline:'}
                    </span>
                    <span className="text-lg font-extrabold text-emerald-400 tracking-wide">
                      {shopInfo.phoneHotline}
                    </span>
                  </div>
                  <span className="px-3.5 py-1.5 bg-emerald-600 group-hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-colors shadow-xs">
                    {lang === 'bn' ? 'সরাসরি কল' : 'Call Now'}
                  </span>
                </a>

                {/* WhatsApp 7407084034 button */}
                <a
                  href={`https://wa.me/${shopInfo.whatsappNumber}?text=${encodeURIComponent('আসসালামু আলাইকুম, মোবাইল হসপিটাল থেকে ফোন মেরামতের জন্য পরামর্শ চাই।')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-between transition-colors shadow-md group"
                  id="direct-whatsapp-btn"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-700/80 flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <span className="text-[11px] block text-emerald-100 font-normal">
                        {lang === 'bn' ? 'হোয়াটসঅ্যাপ চ্যাট ও ছবি পাঠান:' : 'WhatsApp Support:'}
                      </span>
                      <span className="text-sm font-bold tracking-wide">
                        {shopInfo.phoneHotline}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-700 px-2.5 py-1 rounded-lg text-emerald-100 group-hover:text-white">
                    {lang === 'bn' ? 'চ্যাট শুরু' : 'Chat'}
                  </span>
                </a>
              </div>
            </div>

            {/* Email & Address Card */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-xs space-y-4">
              
              {/* User email from metadata */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-stone-500 block uppercase tracking-wider">
                    {lang === 'bn' ? 'অফিসিয়াল ইমেইল' : 'Official Email'}
                  </span>
                  <a
                    href={`mailto:${shopInfo.email}`}
                    className="text-sm font-semibold text-emerald-700 hover:underline"
                    id="contact-email-link"
                  >
                    {shopInfo.email}
                  </a>
                </div>
              </div>

              {/* Shop Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-stone-500 block uppercase tracking-wider">
                    {lang === 'bn' ? 'মোবাইল রিপেয়ারিং সেন্টারের অবস্থান' : 'Mobile Repairing Center Location'}
                  </span>
                  <p className="text-sm text-stone-800 font-semibold">
                    {lang === 'bn' ? shopInfo.addressBn : shopInfo.addressEn}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-stone-500 block uppercase tracking-wider">
                    {lang === 'bn' ? 'সার্ভিস সময়সূচি' : 'Working Hours'}
                  </span>
                  <p className="text-xs text-stone-700 font-medium leading-relaxed">
                    {lang === 'bn' ? shopInfo.workingHoursBn : shopInfo.workingHoursEn}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Location with Interactive Google Map Card */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden mb-16" id="location-map-section">
          <div className="p-6 sm:p-8 border-b border-stone-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>{lang === 'bn' ? 'সেন্টারের লোকেশন ও গুগল ম্যাপ' : 'Center Location & Map'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                {lang === 'bn' ? 'মোবাইল রিপেয়ারিং সেন্টারে আসুন' : 'Visit Our Mobile Repairing Center'}
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm mt-1">
                {lang === 'bn' 
                  ? `${shopInfo.addressBn} • ফোন ও হোয়াটসঅ্যাপ: ${shopInfo.phoneHotline}`
                  : `${shopInfo.addressEn} • Phone & WhatsApp: ${shopInfo.phoneHotline}`}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={shopInfo.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
                id="get-directions-btn"
              >
                <Navigation className="w-4 h-4" />
                <span>{lang === 'bn' ? 'ডিরেকশন পান' : 'Get Directions'}</span>
              </a>

              <a
                href={shopInfo.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs sm:text-sm font-semibold transition-colors border border-stone-200"
                id="open-maps-btn"
              >
                <ExternalLink className="w-4 h-4 text-stone-600" />
                <span>{lang === 'bn' ? 'গুগল ম্যাপে বড় দেখুন' : 'Open in Google Maps'}</span>
              </a>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="relative w-full h-80 sm:h-96 bg-stone-100">
            <iframe
              title="Mobile Hospital Location Map"
              src={shopInfo.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              id="google-maps-embed-iframe"
            ></iframe>

            {/* Quick Floating Map Card */}
            <div className="absolute top-4 left-4 hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-xs p-3.5 rounded-2xl shadow-lg border border-stone-200 text-left max-w-sm pointer-events-auto">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
                +
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900 leading-tight">
                  {shopInfo.nameBn} - {lang === 'bn' ? 'মোবাইল রিপেয়ারিং সেন্টার' : 'Mobile Repairing Center'}
                </h4>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  {lang === 'bn' ? shopInfo.addressBn : shopInfo.addressEn}
                </p>
                <div className="mt-1 flex items-center gap-2 text-[11px] font-semibold text-emerald-700">
                  <Phone className="w-3 h-3" />
                  <span>{shopInfo.phoneHotline}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-5 h-5 text-emerald-600" />
            <h3 className="text-xl font-bold text-stone-900">
              {lang === 'bn' ? 'সাধারণ জিজ্ঞাসা (FAQ)' : 'Frequently Asked Questions'}
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-stone-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 text-left font-semibold text-stone-900 hover:bg-stone-50 flex items-center justify-between gap-4 text-sm sm:text-base"
                  >
                    <span>{lang === 'bn' ? faq.qBn : faq.qEn}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-emerald-600 shrink-0" /> : <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed bg-stone-50/50 border-t border-stone-100 pt-3">
                      {lang === 'bn' ? faq.aBn : faq.aEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
