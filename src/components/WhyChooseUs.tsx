import React from 'react';
import { Eye, ShieldCheck, Clock, BadgeDollarSign, Star, CheckCircle, ThumbsUp } from 'lucide-react';
import { SHOP_INFO, REVIEWS_DATA } from '../data/mockData';
import { Language } from '../types';

interface WhyChooseUsProps {
  lang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  const pillars = [
    {
      icon: Eye,
      titleBn: 'চোখের সামনে সরাসরি মেরামত',
      titleEn: 'Live Open Counter Repair',
      descBn: 'কোনো হিডেন বা গোপন রুম নেই। আপনার ব্যক্তিগত ছবি ও তথ্যের পূর্ণ সুরক্ষায় আপনার সামনেই ফোন মেরামত করা হয়।',
      descEn: 'Full data security and transparency. Watch the technician open and fix your phone right in front of you.'
    },
    {
      icon: ShieldCheck,
      titleBn: '১০০% অরিজিনাল পার্টস নিশ্চয়তা',
      titleEn: '100% Genuine Spare Parts',
      descBn: 'আমরা কোনো নিম্নমানের ক্লোন ব্যবহার করি না। ব্র্যান্ড টেস্টেড ও কোয়ালিটি সার্টিফাইড ডিসপ্লে ও ব্যাটারি সরবরাহ করি।',
      descEn: 'We strictly reject low-quality counterfeits. High-color accuracy screens and certified battery cells only.'
    },
    {
      icon: Clock,
      titleBn: 'এক্সপ্রেস ৩০ মিনিট ডেলিভারি',
      titleEn: 'Express 30-Minute Turnaround',
      descBn: 'জরুরি কাজের ক্ষতি না করে স্ক্রিন ও ব্যাটারি পরিবর্তন করে নিন নিমেষেই। চা খাওয়ার সময়েই ফোন রেডি!',
      descEn: 'Don’t wait days. Most common screen, battery, and jack replacements are completed in under an hour.'
    },
    {
      icon: BadgeDollarSign,
      titleBn: 'সবার আগে ফ্রি ডায়াগনসিস',
      titleEn: 'Free Diagnostic & Fair Pricing',
      descBn: 'আগে কোনো অগ্রিম ফি নেই। কাজ ঠিক হলে তবেই বিল। লিখিত ক্যাশ মেমো ও রিপ্লেসমেন্ট ওয়ারেন্টি কার্ড প্রদান।',
      descEn: 'No fix, no fee. Transparent quotes before starting any work with official stamped warranty cards.'
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <ThumbsUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'bn' ? 'কেন আমাদের নির্বাচন করবেন' : 'Why Choose Mobile Hospital'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {lang === 'bn' ? 'স্মার্টফোন মেরামতে আপনার আস্থার ঠিকানা' : 'The Most Trusted Mobile Repairing Center'}
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            {lang === 'bn'
              ? 'গত ৮ বছর ধরে সততা, দক্ষতা ও আধুনিক প্রযুক্তির সমন্বয়ে গ্রাহকদের আস্থার সাথে সেবা দিয়ে আসছি।'
              : 'Delivering honesty, precision, and state-of-the-art repair craftsmanship for over 8 years.'}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-stone-50 rounded-2xl p-6 border border-stone-200/80 transition-all hover:-translate-y-1 hover:shadow-md hover:border-emerald-500/40"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-stone-900 mb-2">
                  {lang === 'bn' ? item.titleBn : item.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {lang === 'bn' ? item.descBn : item.descEn}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Strip */}
        <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {SHOP_INFO.stats.map((stat, i) => (
              <div key={i} className="p-2">
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-stone-300 font-medium">
                  {lang === 'bn' ? stat.labelBn : stat.labelEn}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-stone-900">
              {lang === 'bn' ? 'সন্তুষ্ট গ্রাহকদের মতামত' : 'What Our Customers Say'}
            </h3>
            <p className="text-sm text-stone-500 mt-1">
              {lang === 'bn' ? 'বাস্তব অভিজ্ঞতা ও রিভিউ' : 'Real feedback from regular customers'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS_DATA.map((rev) => (
              <div
                key={rev.id}
                className="bg-stone-50 rounded-2xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-stone-700 leading-relaxed italic mb-4">
                    "{lang === 'bn' ? rev.commentBn : rev.commentEn}"
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200/80 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-stone-900 block">
                      {lang === 'bn' ? rev.authorBn : rev.authorEn}
                    </span>
                    <span className="text-stone-500">
                      {lang === 'bn' ? rev.locationBn : rev.locationEn} • {rev.device}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium">
                    <CheckCircle className="w-3 h-3" />
                    {lang === 'bn' ? 'ভেরিফাইড' : 'Verified'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
