import React from 'react';
import { ShieldCheck, Zap, Award, CheckCircle2, ArrowRight, PhoneCall, Sparkles, AlertCircle } from 'lucide-react';
import { SHOP_INFO as DEFAULT_SHOP_INFO } from '../data/mockData';
import { Language, ShopInfo } from '../types';

interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
  shopInfo?: ShopInfo;
}

export const Hero: React.FC<HeroProps> = ({ 
  lang, 
  onOpenBooking,
  shopInfo = DEFAULT_SHOP_INFO
}) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-850 to-stone-900 text-white pt-10 pb-16 sm:pt-16 sm:pb-24">
      {/* Subtle modern background glow and circuit grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Container directly implementing the screenshot code with modern craftsmanship */}
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-medium mb-5 shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>
              {lang === 'bn' 
                ? '★ মোবাইল রিপেয়ারিং সেন্টার - দ্রুত ও নির্ভরযোগ্য সেবা' 
                : '★ Mobile Repairing Center - Fast & Reliable Service'}
            </span>
          </div>

          {/* Screenshot H1 Match */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
            {lang === 'bn' ? shopInfo.nameBn : shopInfo.nameEn}
          </h1>

          {/* Screenshot H2 Match: আপনার প্রিয় ফোনের সেরা যত্ন! */}
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-emerald-400 mb-6">
            {lang === 'bn' ? shopInfo.taglineBn : shopInfo.taglineEn}
          </h2>

          {/* Screenshot P Match */}
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 leading-relaxed max-w-2xl mx-auto mb-8">
            {lang === 'bn' ? shopInfo.subtitleBn : shopInfo.subtitleEn}
            <span className="block mt-2 text-sm text-stone-400 font-normal">
              {lang === 'bn'
                ? 'ডিসপ্লে, ব্যাটারি, চার্জিং পোর্ট থেকে শুরু করে জটিল মাদারবোর্ড আইসি লেভেল পর্যন্ত অভিজ্ঞ ইঞ্জিনিয়ার দ্বারা আপনার চোখের সামনে মেরামত করা হয়।'
                : 'From displays, batteries, and charging ports to intricate motherboard IC chips, repaired transparently by master technicians.'}
            </span>
          </p>

          {/* Screenshot CTA Button Match: এখনই যোগাযোগ করুন (#contact btn) + Secondary actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-base font-bold transition-all shadow-lg hover:shadow-emerald-600/25 active:scale-95"
              id="hero-contact-btn"
            >
              <span>{lang === 'bn' ? 'এখনই যোগাযোগ করুন' : 'Contact Us Now'}</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-750 border border-stone-700 text-stone-100 text-base font-semibold transition-all hover:border-emerald-500/50"
              id="hero-booking-btn"
            >
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'bn' ? 'অনলাইন রিপেয়ার বুকিং' : 'Book Online Repair'}</span>
            </button>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-stone-300 hover:text-white text-sm font-medium transition-colors"
              id="hero-services-btn"
            >
              <span>{lang === 'bn' ? 'আমাদের সেবা দেখুন' : 'View Services'}</span>
              <span className="text-emerald-400">→</span>
            </a>
          </div>

          {/* Quick 4 Trust Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
            <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-750 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-100">
                  {lang === 'bn' ? '৩০ মিনিটে সার্ভিস' : '30-Min Express'}
                </h4>
                <p className="text-xs text-stone-400">
                  {lang === 'bn' ? 'অধিকাংশ সাধারণ রিপেয়ার' : 'For common screen/battery'}
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-750 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-100">
                  {lang === 'bn' ? '১০০% অরিজিনাল পার্টস' : 'Original Parts'}
                </h4>
                <p className="text-xs text-stone-400">
                  {lang === 'bn' ? 'অথেনটিক কোয়ালিটি নিশ্চয়তা' : 'OEM verified components'}
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-750 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-100">
                  {lang === 'bn' ? 'ওয়ারেন্টি কার্ড' : 'Written Warranty'}
                </h4>
                <p className="text-xs text-stone-400">
                  {lang === 'bn' ? '৩০ থেকে ১৮০ দিন পর্যন্ত' : '30 to 180 days coverage'}
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-750 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-100">
                  {lang === 'bn' ? 'ফ্রি ডায়াগনসিস' : 'Free Diagnosis'}
                </h4>
                <p className="text-xs text-stone-400">
                  {lang === 'bn' ? 'সমস্যা নির্ণয়ে কোনো ফি নেই' : 'No fix, no fee policy'}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Emergency Phone Call Banner */}
      <div className="mt-12 border-t border-stone-800 bg-stone-950/60 py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-stone-300">
          <span className="flex items-center gap-2 text-emerald-400 font-semibold">
            <AlertCircle className="w-4 h-4" />
            {lang === 'bn' ? 'ফোন হঠাৎ বন্ধ বা চালু হচ্ছে না?' : 'Phone dead or won’t power on?'}
          </span>
          <span className="hidden sm:inline text-stone-500">|</span>
          <span>{lang === 'bn' ? 'সরাসরি হেড টেকনিশিয়ান হটলাইন:' : 'Call Master Tech:'}</span>
          <a
            href={`tel:${shopInfo.phoneRaw}`}
            className="font-bold text-white hover:text-emerald-400 underline underline-offset-4 flex items-center gap-1.5"
            id="hero-call-link"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
            {shopInfo.phoneHotline}
          </a>
        </div>
      </div>
    </section>
  );
};
