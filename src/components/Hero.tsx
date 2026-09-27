import React from 'react';
import { ArrowRight, PhoneCall, CheckCircle2 } from 'lucide-react';
import { SHOP_INFO as DEFAULT_SHOP_INFO } from '../data/mockData';
import { Language, ShopInfo } from '../types';
import heroWorkbenchImg from '../assets/images/hero_repair_workbench_1790325363654.jpg';

interface HeroProps {
  lang: Language;
  shopInfo?: ShopInfo;
}

export const Hero: React.FC<HeroProps> = ({ 
  lang, 
  shopInfo = DEFAULT_SHOP_INFO
}) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-slate-200">
      {/* Background ambient accents */}
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Kicker - Zero Pill Discipline + Refined Script Flourish */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
            <span className="text-emerald-700 tracking-wide font-display font-bold">
              {lang === 'bn' ? 'কালীতলা, দত্তপুলিয়া' : 'Kalitala, Duttapulia'}
            </span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span>{lang === 'bn' ? 'নদিয়া জেলা (পিন - ৭৪১৫০৪)' : 'Nadia District (Pin 741504)'}</span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span className="text-emerald-800 font-semibold">{lang === 'bn' ? '৮+ বছরের বিশ্বস্ত সেবা' : '8+ Years of Trusted Care'}</span>
          </div>

          {/* Script style signature tagline */}
          <div className="font-script text-emerald-800 text-2xl sm:text-3xl font-bold tracking-wide -rotate-1 drop-shadow-xs">
            {lang === 'bn' ? '✨ আস্থা ও ভালোবাসায় আপনার প্রিয় মুঠোফোনের নতুন জীবন' : '✨ Bringing New Life to Your Beloved Phone'}
          </div>
        </div>

        {/* 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Action */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[4rem] font-black tracking-tight text-slate-900 leading-[1.12] text-balance">
              {lang === 'bn' ? (
                <>
                  অভিজ্ঞ হাতের নিখুঁত ছোঁয়ায় আপনার প্রিয় ফোনের <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">আস্থার চিকিৎসা ও নতুন জীবন</span>
                </>
              ) : (
                <>
                  Fast & Precision <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">Smartphone Care</span> You Can Trust
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {lang === 'bn'
                ? 'কালীতলা, দত্তপুলিয়ার প্রাণকেন্দ্রে অবস্থিত মোবাইল হাসপাতালে আপনার চোখের সামনেই সম্পন্ন হয় ডিসপ্লে, ব্যাটারি, চার্জিং পোর্ট থেকে শুরু করে জটিল মাদারবোর্ড আইসি লেভেল রিপেয়ার। কোনো গোপনীয়তা বা ভয় নেই—উন্মুক্ত কাউন্টার, শতভাগ জেনুইন পার্টস এবং প্রতিটি কাজের সাথে সুনির্দিষ্ট লিখিত ওয়ারেন্টি।'
                : 'From original screen and battery replacements to micro-soldering and motherboard IC repairs. Fixed transparently in front of your eyes with genuine parts and official written replacement warranty.'}
            </p>

            {/* Clear Core Promises */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'bn' ? 'উন্মুক্ত কাউন্টারে চোখের সামনে সরাসরি মেরামত' : 'Open-counter live repairs in front of you'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'bn' ? 'শতভাগ খাঁটি ও পরীক্ষিত জেনুইন স্পেয়ার পার্টস' : '100% genuine & verified parts'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'bn' ? 'সমস্যা নির্ণয়ে কোনো ফি নেই (সম্পূর্ণ ফ্রি ডায়াগনসিস)' : 'Free inspection & zero diagnosis fee'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'bn' ? 'নির্দিষ্ট মেয়াদের লিখিত রিপ্লেসমেন্ট ওয়ারেন্টি কার্ড' : 'Written replacement warranty card on every job'}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide transition-all shadow-md active:scale-98"
                id="hero-contact-btn"
              >
                <span>{lang === 'bn' ? 'সরাসরি যোগাযোগ ও দিকনির্দেশনা' : 'Get Location & Directions'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-sm transition-colors shadow-xs"
                id="hero-services-btn"
              >
                <span>{lang === 'bn' ? 'আমাদের সেবাসমূহ বিস্তারিত দেখুন' : 'Explore Services'}</span>
              </a>

              <a
                href={`tel:${shopInfo.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-slate-800 hover:text-emerald-600 font-mono text-sm font-semibold transition-colors"
                id="hero-call-link"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>{shopInfo.phoneHotline}</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-Fidelity Visual Anchor (Workbench Photo) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle Ambient Back-Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-sky-500/10 to-transparent rounded-2xl blur-lg opacity-80"></div>

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl">
                <img
                  src={heroWorkbenchImg}
                  alt={lang === 'bn' ? 'মোবাইল হসপিটালের প্রফেশনাল ওয়ার্কবেঞ্চ ও টেকনিশিয়ান সরঞ্জাম' : 'Mobile Hospital professional precision repair workbench'}
                  className="w-full h-80 sm:h-96 object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Dark gradient scrim at the bottom for crystal-clear readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent"></div>

                {/* Bottom Overlay Info Card */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
                    <span className="font-mono text-emerald-400 font-bold uppercase tracking-wider">
                      {lang === 'bn' ? 'দত্তপুলিয়া সার্ভিস সেন্টার' : 'Duttapulia Service Lab'}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-300 font-medium">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                      {lang === 'bn' ? 'লাইভ কাউন্টার চালু' : 'Workshop Active'}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug">
                    {lang === 'bn' ? 'প্রিসিশন সরঞ্জাম ও ডিজিটাল মাইক্রোস্কোপিক রিপেয়ার' : 'Precision Micro-Soldering & Display Lamination'}
                  </h3>

                  <p className="text-xs text-slate-300 mt-1">
                    {lang === 'bn' 
                      ? 'কালীতলা, দত্তপুলিয়া, নদিয়া — প্রতিদিন সকাল ৯:০০ টা থেকে রাত ১০:০০ টা পর্যন্ত উন্মুক্ত।' 
                      : 'Kalitala, Duttapulia, Nadia — Open 9:00 AM to 10:00 PM Daily.'}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Tabular Numerical KPIs Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">
              ১৫,০০০<span className="text-emerald-600">+</span>
            </div>
            <div className="text-xs text-slate-600 font-medium">
              {lang === 'bn' ? 'সফল ডিভাইস মেরামত ও সন্তুষ্ট গ্রাহক' : 'Smartphones Repaired Successfully'}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">
              ৩০ <span className="text-emerald-600 text-lg sm:text-xl font-sans font-bold">{lang === 'bn' ? 'মিনিট' : 'Min'}</span>
            </div>
            <div className="text-xs text-slate-600 font-medium">
              {lang === 'bn' ? 'গড় ডিসপ্লে ও ব্যাটারি এক্সপ্রেস সার্ভিস' : 'Average Express Repair Time'}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">
              ১০০<span className="text-emerald-600">%</span>
            </div>
            <div className="text-xs text-slate-600 font-medium">
              {lang === 'bn' ? 'খাঁটি জেনুইন ও পরীক্ষিত যন্ত্রাংশ' : 'Original Certified Parts'}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">
              {lang === 'bn' ? '০ টাকা' : '₹0 Free'}
            </div>
            <div className="text-xs text-slate-600 font-medium">
              {lang === 'bn' ? 'সম্পূর্ণ বিনামূল্যে প্রাথমিক সমস্যা নির্ণয়' : 'Diagnosis & Inspection Fee'}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
