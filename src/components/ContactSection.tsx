import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  ChevronDown, 
  ChevronUp, 
  Navigation,
  ExternalLink
} from 'lucide-react';
import { SHOP_INFO as DEFAULT_SHOP_INFO } from '../data/mockData';
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
    issue: prefillData?.problem || 'Screen / Display Replacement',
    notes: '',
  });

  const [submittedToken, setSubmittedToken] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newToken = `MH-${randomNum}`;
    setSubmittedToken(newToken);
  };

  const faqs = [
    {
      qBn: 'আমার ফোনের ডিসপ্লে বা ব্যাটারি পরিবর্তন করতে ঠিক কত সময় লাগবে?',
      qEn: 'How long does a typical screen or battery replacement take?',
      aBn: 'ডিসপ্লে, ব্যাটারি এবং চার্জিং পোর্টের মতো সাধারণ সার্ভিসগুলো আমাদের সেন্টারে গড়ে ২০ থেকে ৪৫ মিনিটের মধ্যে আপনার চোখের সামনে সরাসরি সম্পন্ন করা হয়। জটিল মাদারবোর্ড আইসি লেভেলের কাজের ক্ষেত্রে ২ থেকে ৪ ঘণ্টার মতো সময় প্রয়োজন হতে পারে।',
      aEn: 'Common services like screen, battery, and charging port replacements take 20 to 45 minutes right in front of you at our center. Complex motherboard IC work takes 2 to 4 hours.'
    },
    {
      qBn: 'রিপেয়ারের পর ফোনের পার্টসে কি নির্দিষ্ট ওয়ারেন্টি কার্ড দেওয়া হয়?',
      qEn: 'Is there an official warranty provided on replacement parts?',
      aBn: 'হ্যাঁ, অবশ্যই! মোবাইল হাসপাতালে প্রতিটি জেনুইন ডিসপ্লেতে ৯০ দিন, ব্যাটারিতে ৬ মাস এবং অন্যান্য স্পেয়ার পার্টসে ৩০ থেকে ৬০ দিনের সুনির্দিষ্ট লিখিত রিপ্লেসমেন্ট ওয়ারেন্টি কার্ড প্রদান করা হয়।',
      aEn: 'Yes! We provide an official 90-day warranty on original displays, 6 months on batteries, and 30-60 days on other certified components.'
    },
    {
      qBn: 'মেরামতের সময় কি আমার ফোনের ছবি বা ব্যক্তিগত তথ্যের কোনো ক্ষতি হবে?',
      qEn: 'Will my personal photos or data be safe during repair?',
      aBn: 'বিন্দুমাত্র না। ডিসপ্লে, ব্যাটারি বা চার্জিং পিন পরিবর্তনের সময় ফোনের অভ্যন্তরীণ মেমোরি বা ব্যক্তিগত ডেটায় কোনো হস্তক্ষেপ করা হয় না। তাছাড়া সম্পূর্ণ প্রক্রিয়া আপনার চোখের সামনে উন্মুক্ত কাউন্টারে সম্পন্ন হওয়ায় তথ্যের শতভাগ নিরাপত্তা নিশ্চিত থাকে।',
      aEn: 'Your data is 100% safe. Hardware repairs do not touch your stored files or apps. The entire repair is performed openly in front of your eyes.'
    },
    {
      qBn: 'দত্তপুলিয়ার বাইরের এলাকা থেকে কীভাবে সেবা গ্রহণ করতে পারি?',
      qEn: 'How can I visit your center from outside Duttapulia?',
      aBn: 'রানাঘাট, হাঁসখালী, শান্তিপুর, মাজদিয়া বা পার্শ্ববর্তী যেকোনো অঞ্চল থেকে খুব সহজেই আমাদের সেন্টারে সরাসরি চলে আসতে পারেন। আসার পূর্বে কল বা হোয়াটসঅ্যাপ করে পার্টসের প্রাপ্যতা নিশ্চিত করে নিলে সময় সাশ্রয় হবে।',
      aEn: 'You can visit our center directly from Ranaghat, Hanskhali, Santipur, or neighboring areas. Call or message us before visiting to confirm component stock.'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Kicker */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-semibold">
            <span className="text-emerald-700 tracking-wide font-display font-bold">
              {lang === 'bn' ? 'সরাসরি যোগাযোগ ও দিকনির্দেশনা' : 'Direct Contact & Location'}
            </span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span>{lang === 'bn' ? 'কালীতলা, দত্তপুলিয়া, নদিয়া (৭৪১৫০৪)' : 'Kalitala, Duttapulia, Nadia (741504)'}</span>
          </div>

          <div className="font-script text-emerald-800 text-xl font-bold">
            {lang === 'bn' ? '📍 সহজে আমাদের খুঁজে পাওয়ার অবস্থান' : '📍 Direct Helpline & Maps'}
          </div>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            {lang === 'bn' ? 'আমাদের সাথে সরাসরি যোগাযোগ করুন বা দোকানে চলে আসুন' : 'Get in Touch with Our Engineers'}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            {lang === 'bn'
              ? 'আপনার প্রিয় ফোনের যেকোনো সমস্যা বা আনুমানিক খরচ জানতে নিচের ফর্মটি পূরণ করুন, অথবা আমাদের হেল্পলাইনে সরাসরি ফোন বা হোয়াটসঅ্যাপ করুন। আমরা আপনাকে আন্তরিকভাবে সহায়তা করতে সদা প্রস্তুত।'
              : 'Submit an inquiry below or reach out directly via phone or WhatsApp for instant advice and repair cost estimates.'}
          </p>
        </div>

        {/* 2-Column Grid: Inquiry Form (7 cols) + Direct Info (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            
            {submittedToken ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {lang === 'bn' ? 'আপনার বার্তা সফলভাবে গ্রহণ করা হয়েছে!' : 'Inquiry Received Successfully!'}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                  {lang === 'bn'
                    ? `ধন্যবাদ শ্রদ্ধেয় ${formData.name}! আপনার ইনকোয়ারি রেফারেন্স নিচে তৈরি হয়েছে। আমাদের অভিজ্ঞ টেকনিশিয়ান দ্রুত আপনার সাথে যোগাযোগ করবেন।`
                    : `Thank you ${formData.name}! Your reference number is generated below. Our technician will review and get in touch with you shortly.`}
                </p>

                <div className="inline-block px-4 py-2 rounded-xl bg-slate-900 text-emerald-400 font-mono text-lg font-bold tracking-widest my-2">
                  {submittedToken}
                </div>

                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/${shopInfo.whatsappNumber}?text=${encodeURIComponent(
                      lang === 'en'
                        ? `Hello Mobile Hospital. Name: ${formData.name}, Ref: ${submittedToken}, Model: ${formData.brandModel}, Issue: ${formData.issue}.`
                        : `নমস্কার, মোবাইল হসপিটাল। নাম: ${formData.name}, রেফারেন্স: ${submittedToken}, মডেল: ${formData.brandModel}, সমস্যা: ${formData.issue}।`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে সরাসরি পাঠান' : 'Send via WhatsApp'}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedToken(null);
                      setFormData({
                        name: '',
                        phone: '',
                        brandModel: '',
                        issue: lang === 'en' ? 'Screen / Display Replacement' : 'ডিসপ্লে পরিবর্তন',
                        notes: '',
                      });
                    }}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold transition-colors"
                  >
                    {lang === 'bn' ? 'নতুন বার্তা পাঠান' : 'New Inquiry'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="repair-inquiry-form">
                <div className="border-b border-slate-100 pb-3 mb-2">
                  <h3 className="text-base font-bold text-slate-900">
                    {lang === 'bn' ? 'মোবাইল মেরামত ও পরামর্শ বার্তা' : 'Smartphone Service Inquiry'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {lang === 'bn' ? 'সঠিক তথ্য জানালে আমাদের অভিজ্ঞ ইঞ্জিনিয়ার আপনাকে দ্রুত নিখুঁত খরচের ধারণা প্রদান করবেন।' : 'Fill out details to receive a fast diagnostic estimate.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'bn' ? 'আপনার শুভ নাম *' : 'Your Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={lang === 'bn' ? 'যেমন: সুজয় বিশ্বাস' : 'e.g. John Doe'}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                      id="form-name-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'bn' ? 'যোগাযোগের মোবাইল নম্বর *' : 'Phone / Mobile Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={lang === 'bn' ? 'যেমন: 74070xxxxx' : 'e.g. 7407084034'}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                      id="form-phone-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'bn' ? 'ফোনের ব্র্যান্ড ও সঠিক মডেল *' : 'Brand & Model *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.brandModel}
                      onChange={(e) => setFormData({ ...formData, brandModel: e.target.value })}
                      placeholder={lang === 'bn' ? 'যেমন: Samsung A54 / Redmi Note 12' : 'e.g. Samsung A52 / iPhone 13'}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                      id="form-model-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'bn' ? 'সমস্যার ধরন নির্বাচন করুন *' : 'Issue Category *'}
                    </label>
                    <select
                      value={formData.issue}
                      onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                      id="form-issue-select"
                    >
                      <option value={lang === 'bn' ? 'ডিসপ্লে পরিবর্তন' : 'Screen / Display Replacement'}>
                        {lang === 'bn' ? 'ডিসপ্লে ও টাচ স্ক্রিন পরিবর্তন' : 'Display / Screen Replacement'}
                      </option>
                      <option value={lang === 'bn' ? 'ব্যাটারি রিপ্লেসমেন্ট' : 'Battery Replacement'}>
                        {lang === 'bn' ? 'ব্যাটারি রিপ্লেসমেন্ট ও ব্যাকআপ সমস্যা' : 'Battery Replacement (Backup Issue)'}
                      </option>
                      <option value={lang === 'bn' ? 'চার্জিং পোর্ট সমস্যা' : 'Charging Port Repair'}>
                        {lang === 'bn' ? 'চার্জিং পোর্ট ও পিন সমস্যা সমাধান' : 'Charging Port / Jack Repair'}
                      </option>
                      <option value={lang === 'bn' ? 'মাদারবোর্ড ও ডেড ফোন' : 'Motherboard IC Repair'}>
                        {lang === 'bn' ? 'মাদারবোর্ড, ডেড ফোন ও আইসি রিপেয়ার' : 'Motherboard IC / Dead Phone Recovery'}
                      </option>
                      <option value={lang === 'bn' ? 'ওয়াটার ড্যামেজ' : 'Water Damage Treatment'}>
                        {lang === 'bn' ? 'পানিতে পড়া বা তরলজনিত সমস্যা' : 'Liquid / Water Damage Ultrasonic Recovery'}
                      </option>
                      <option value={lang === 'bn' ? 'ক্যামেরা বা সাউন্ড' : 'Camera or Speaker Issue'}>
                        {lang === 'bn' ? 'ক্যামেরা বা সাউন্ড স্পিকার ত্রুটি' : 'Camera Lens or Speaker Audio Issue'}
                      </option>
                      <option value={lang === 'bn' ? 'সফটওয়্যার ও আনলক' : 'Software & System Unlock'}>
                        {lang === 'bn' ? 'সফটওয়্যার, হ্যাং বা পাসওয়ার্ড আনলক' : 'Software, Bootloop & System Unlock'}
                      </option>
                      <option value={lang === 'bn' ? 'অন্যান্য সমস্যা' : 'Other Problem'}>
                        {lang === 'bn' ? 'অন্যান্য হার্ডওয়্যার সমস্যা' : 'Other Hardware Issue'}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'bn' ? 'সমস্যার বিস্তারিত বিবরণ (যদি থাকে)' : 'Problem Description (Optional)'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={lang === 'bn' ? 'যেমন: হাত থেকে পড়ে স্ক্রিনে দাগ এসেছে, চার্জিং কেবল লুজ হয়ে গেছে ইত্যাদি...' : 'Any details like accidental drop, liquid exposure, restarting loops...'}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                    id="form-notes-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-sm active:scale-98 flex items-center justify-center gap-2"
                  id="form-submit-btn"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'বার্তা পাঠান / জিজ্ঞাসা করুন' : 'Send Inquiry Message'}</span>
                </button>
              </form>
            )}

          </div>

          {/* Right: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Hotline Card */}
            <div className="bg-slate-950 text-white rounded-2xl p-6 border border-slate-800 shadow-md">
              <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider mb-2">
                {lang === 'bn' ? 'সরাসরি হেল্পলাইন' : 'Direct Master Helpline'}
              </div>
              
              <div className="space-y-4">
                <div>
                  <span className="text-xs text-slate-400 block mb-1">
                    {lang === 'bn' ? 'প্রধান টেকনিশিয়ান হটলাইন:' : 'Master Tech Phone:'}
                  </span>
                  <a
                    href={`tel:${shopInfo.phoneRaw}`}
                    className="text-xl sm:text-2xl font-bold font-mono text-white hover:text-emerald-400 flex items-center gap-2 transition-colors"
                    id="direct-phone-link"
                  >
                    <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>{shopInfo.phoneHotline}</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-slate-800 flex gap-2">
                  <a
                    href={`https://wa.me/${shopInfo.whatsappNumber}?text=${encodeURIComponent(
                      lang === 'en'
                        ? 'Hello Mobile Hospital, I would like to inquire about smartphone repair.'
                        : 'নমস্কার, মোবাইল হসপিটালে যোগাযোগ করছি।'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${shopInfo.phoneRaw}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-medium transition-colors border border-slate-700"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{lang === 'bn' ? 'কল করুন' : 'Call'}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Hours Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">
                    {lang === 'bn' ? 'সেন্টারের সঠিক ঠিকানা' : 'Official Center Address'}
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">
                    {lang === 'bn' ? shopInfo.addressBn : shopInfo.addressEn}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {lang === 'bn' ? 'দত্তপুলিয়া প্রধান বাজার সংলগ্ন কালীতলা মোড়' : 'Kalitala, Duttapulia, Nadia - 741504'}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">
                    {lang === 'bn' ? 'কাজের সময়' : 'Working Hours'}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">
                    {lang === 'bn' ? shopInfo.workingHoursBn : shopInfo.workingHoursEn}
                  </p>
                  <span className="text-xs text-emerald-700 font-medium">
                    {lang === 'bn' ? '✓ সপ্তাহের প্রতিদিন (রবিবার সহ) নিরবচ্ছিন্ন খোলা থাকে' : '✓ Open 7 days a week (9:00 AM - 10:00 PM)'}
                  </span>
                </div>
              </div>

              {/* Directions Button */}
              <div className="pt-2">
                <a
                  href={shopInfo.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'গুগল ম্যাপে দিকনির্দেশনা দেখুন' : 'Get Directions on Google Maps'}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* Live Interactive Map Frame */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden mb-16 shadow-xs">
          <div className="p-4 sm:p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs text-emerald-700 font-semibold uppercase tracking-wider">
                {lang === 'bn' ? 'ইন্টারঅ্যাক্টিভ লোকেশন ম্যাপ' : 'Interactive Location Map'}
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {lang === 'bn' ? 'কালীতলা, দত্তপুলিয়া ম্যাপ ভিউ' : 'Kalitala, Duttapulia Map View'}
              </h3>
            </div>

            <a
              href={shopInfo.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors shrink-0"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'গুগল ম্যাপে ওপেন করুন' : 'Open in Maps'}</span>
            </a>
          </div>

          <div className="relative w-full h-80 sm:h-96 bg-slate-100">
            <iframe
              title="Mobile Hospital Duttapulia Location"
              src={shopInfo.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              {lang === 'bn' ? 'সাধারণ জিজ্ঞাসা' : 'Frequently Asked Questions'}
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              {lang === 'bn' ? 'গ্রাহকদের সাধারণ জিজ্ঞাসার স্বচ্ছ উত্তর' : 'Common Customer Questions'}
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 text-left font-semibold text-slate-900 text-xs sm:text-sm flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span>{lang === 'bn' ? faq.qBn : faq.qEn}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {lang === 'bn' ? faq.aBn : faq.aEn}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
