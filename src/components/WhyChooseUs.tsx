import React from 'react';
import { Eye, ShieldCheck, Clock, BadgeDollarSign } from 'lucide-react';
import { Language } from '../types';

interface WhyChooseUsProps {
  lang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  const pillars = [
    {
      num: '01',
      icon: Eye,
      titleBn: 'উন্মুক্ত কাউন্টারে চোখের সামনে মেরামত',
      titleEn: 'Live Open-Counter Repair',
      descBn: 'কোনো গোপন বা বন্ধ ঘর নেই। আপনার ফোনের যাবতীয় কাজ সম্পন্ন হয় আপনার উপস্থিতিতেই—যাতে আপনার ব্যক্তিগত ছবি, হোয়াটসঅ্যাপ ও ডেটা থাকে শতভাগ নিরাপদ।',
      descEn: 'Full data privacy and transparency. Watch the technician open and service your smartphone right in front of you.'
    },
    {
      num: '02',
      icon: ShieldCheck,
      titleBn: '১০০% জেনুইন পার্টসের নিশ্চয়তা',
      titleEn: '100% Genuine Spare Parts',
      descBn: 'আমরা কোনো নিম্নমানের ক্লোন বা নকল পার্টস ব্যবহার করি না। নিখুঁত রঙের নিশ্চয়তা ও দীর্ঘস্থায়ী পারফরম্যান্সের জন্য বাছাইকৃত আসল স্পেয়ার পার্টস ইনস্টল করি।',
      descEn: 'We strictly reject substandard counterfeits. Authentic color reproduction screens and certified battery cells only.'
    },
    {
      num: '03',
      icon: Clock,
      titleBn: 'এক্সপ্রেস ২০-৩০ মিনিট সার্ভিস',
      titleEn: 'Express 20-30 Minute Turnaround',
      descBn: 'দিনের পর দিন অপেক্ষায় থাকার দিন শেষ। ডিসপ্লে, ব্যাটারি ও চার্জিং জ্যাক প্রতিস্থাপনের মতো কাজগুলো আপনি দোকানে অপেক্ষা করার মাঝেই তাৎক্ষণিক সেরে দেওয়া হয়।',
      descEn: 'Don’t wait for days. Screen, battery, and port replacements are routinely completed within 20 to 45 minutes.'
    },
    {
      num: '04',
      icon: BadgeDollarSign,
      titleBn: 'বিনামূল্যে পরীক্ষা ও লিখিত ওয়ারেন্টি',
      titleEn: 'Free Diagnostic & Written Warranty',
      descBn: 'কাজ শুরুর পূর্বে সমস্যা শনাক্ত করতে কোনো চার্জ নেওয়া হয় না। কাজ সন্তোষজনক হলে তবেই বিল এবং প্রতিটি সার্ভিসের সাথে থাকছে সুনির্দিষ্ট লিখিত ওয়ারেন্টি স্লিপ।',
      descEn: 'No fix, no fee policy. Transparent estimates before servicing with official stamped replacement warranty cards.'
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Kicker */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-semibold">
            <span className="text-emerald-700 tracking-wide font-display font-bold">
              {lang === 'bn' ? 'কেন আমরা সেরা' : 'Why Choose Us'}
            </span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span>{lang === 'bn' ? 'দত্তপুলিয়া ও নদীয়ার পরম আস্থার ঠিকানা' : 'Nadia’s Trusted Smartphone Care'}</span>
          </div>

          <div className="font-script text-emerald-800 text-xl font-bold">
            {lang === 'bn' ? '🤝 সততা, দক্ষতা ও গ্রাহক সন্তুষ্টির ৮+ বছর' : '🤝 8+ Years of Trusted Service'}
          </div>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            {lang === 'bn' 
              ? 'কেন নিশ্চিন্ত মনে আপনার প্রিয় ফোনটি আমাদের হাতে তুলে দেবেন?' 
              : 'Built on Trust, Precision, and Absolute Transparency'}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            {lang === 'bn'
              ? 'কাজের সততা, আধুনিক সরঞ্জাম আর গ্রাহকের গভীর সন্তুষ্টিই বিগত আট বছর ধরে দত্তপুলিয়ার কালীতলায় আমাদের পথচলার মূল চালিকাশক্তি। প্রতিটি হ্যান্ডসেটের প্রতি আমরা যত্ন নিই যেন তা আমাদের নিজস্ব ফোন।'
              : 'Over 8 years serving Duttapulia and surrounding Nadia regions with genuine parts and patient, certified repair craftsmanship.'}
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-emerald-500/50 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {lang === 'bn' ? item.titleBn : item.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {lang === 'bn' ? item.descBn : item.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
