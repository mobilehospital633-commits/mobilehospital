import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Language, ShopInfo } from '../types';
import { SHOP_INFO as DEFAULT_SHOP_INFO } from '../data/mockData';
import microscopeImg from '../assets/images/microscope_ic_repair_1790325378945.jpg';

interface CraftsmanshipSectionProps {
  lang: Language;
  shopInfo?: ShopInfo;
}

export const CraftsmanshipSection: React.FC<CraftsmanshipSectionProps> = ({
  lang,
  shopInfo = DEFAULT_SHOP_INFO
}) => {
  const capabilities = [
    {
      num: '01',
      titleBn: 'স্টেরিও মাইক্রোস্কোপ আইসি রিপেয়ার',
      titleEn: 'Stereo Microscope IC Micro-Soldering',
      descBn: 'উচ্চ ক্ষমতার অপটিক্যাল ট্রাইনোকুলার মাইক্রোস্কোপের সাহায্যে ডেড ফোনের সূক্ষ্ম সার্কিট ট্রেসিং, পাওয়ার আইসি, নেটওয়ার্ক আইসি এবং সিপিইউ রিবলিংয়ের মতো জটিল কাজ নিখুঁতভাবে সম্পন্ন করা হয়।',
      descEn: 'Precision micro-soldering for dead motherboards, power ICs, network chips, and CPU reballing under optical magnification.'
    },
    {
      num: '02',
      titleBn: 'ভ্যাকুয়াম ওসিএ গ্লাস রিস্টোরেশন',
      titleEn: 'OCA Display Glass Restoration',
      descBn: 'ডিসপ্লের শুধু ওপরের কাঁচ ক্ষতিগ্রস্ত হলে সম্পূর্ণ ব্যয়বহুল ডিসপ্লে বদলানোর প্রয়োজন নেই। আধুনিক ভ্যাকুয়াম ওসিএ ল্যামিনেশন প্রযুক্তিতে মূল অরিজিনাল প্যানেল বজায় রেখেই কাঁচ নতুনের মতো করা হয়।',
      descEn: 'If only outer glass is cracked, save money by replacing just the glass layer with vacuum OCA lamination while keeping the original OLED panel.'
    },
    {
      num: '03',
      titleBn: 'আল্ট্রাসনিক কেমিক্যাল ডিপ-ওয়াশ',
      titleEn: 'Ultrasonic Liquid Damage Recovery',
      descBn: 'পানিতে পড়ে যাওয়া হ্যান্ডসেটের লুক্কায়িত জারণ ও মরিচা দ্রুত দূর করতে বিশেষ আল্ট্রাসনিক কেমিক্যাল বাথ এবং নিয়ন্ত্রিত থার্মাল ড্রাইং চেম্বারে সার্কিট বোর্ড সম্পূর্ণ সুরক্ষিত করা হয়।',
      descEn: 'Thorough chemical ultrasonic cavitation and controlled thermal baking to strip oxidation from liquid-submerged circuit boards.'
    },
    {
      num: '04',
      titleBn: 'ডিজিটাল ডিসি পাওয়ার ও থার্মাল ডায়াগনোসিস',
      titleEn: 'DC Power & Thermal Diagnostics',
      descBn: 'প্রোগ্রামেবল হাই-প্রিসিশন ডিসি পাওয়ার সাপ্লাই ও থার্মাল অ্যানালাইজারের সাহায্যে মাত্র কয়েক মিনিটেই সুপ্ত শর্ট সার্কিট বা অতিরিক্ত ব্যাটারি খরচের মূল উৎস নির্ভুলভাবে চিহ্নিত করা হয়।',
      descEn: 'Instant micro-short detection and current leakage diagnosis using precision digital DC power analyzers.'
    }
  ];

  return (
    <section id="craftsmanship" className="py-16 sm:py-24 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Kicker */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-semibold">
            <span className="text-emerald-400 tracking-wide font-display font-bold">
              {lang === 'bn' ? 'ল্যাব ও প্রযুক্তি' : 'Precision Technology'}
            </span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span>{lang === 'bn' ? 'আধুনিক সরঞ্জাম ও মাইক্রো-ইঞ্জিনিয়ারিং' : 'Advanced Diagnostic Tools & Lab'}</span>
          </div>

          <div className="font-script text-emerald-400 text-xl font-bold">
            {lang === 'bn' ? '✨ চিপ লেভেল ইঞ্জিনিয়ারিং ও নিবিড় পরিচর্যা' : '✨ Expert Chip-Level Engineering'}
          </div>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight text-balance">
            {lang === 'bn' 
              ? 'সাধারণ মোবাইল মেরামতের চেয়ে আমাদের ল্যাব কেন অনন্য?' 
              : 'Why Our Precision Diagnostic Lab Stands Out'}
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed font-normal">
            {lang === 'bn'
              ? 'দত্তপুলিয়ার কালীতলায় অবস্থিত মোবাইল হসপিটাল ল্যাবটি আন্তর্জাতিক মানের মাইক্রো-সোল্ডারিং ও আধুনিক ডায়াগনস্টিক যন্ত্রপাতিতে সমৃদ্ধ। অন্য কোথাও নিরাশ হওয়া জটিল ডেড হ্যান্ডসেটও আমরা বিজ্ঞানসম্মত সূক্ষ্মতায় মেরামত করে তুলি।'
              : 'Equipped with digital micro-soldering stations, optical stereoscopic microscopes, and dust-free lamination setups for complex hardware challenges.'}
          </p>
        </div>

        {/* Grid: Visual Showcase + Capability List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          
          {/* Left: Macro Microscope Image Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-750 bg-slate-950 shadow-xl group">
              <img
                src={microscopeImg}
                alt={lang === 'bn' ? 'মাইক্রোস্কোপের নিচে মাদারবোর্ড আইসি রিপেয়ার' : 'Motherboard IC chip micro-soldering under microscope'}
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest mb-1">
                  {lang === 'bn' ? 'মাদারবোর্ড স্পেশালিস্ট' : 'Chip-Level Engineering'}
                </div>
                <h4 className="text-base font-bold text-white">
                  {lang === 'bn' ? 'আইসি লেভেল মাইক্রো-সোল্ডারিং ও রি-বলিং' : 'Microscopic Circuit Diagnostics'}
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  {lang === 'bn'
                    ? 'অন্য কোথাও না ঠিক হওয়া ফোনও আমরা গভীর যত্ন ও বৈজ্ঞানিক পদ্ধতিতে পরীক্ষা করি।'
                    : 'We diagnose complex issues with board schematics and thermal tools.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right: 4 Editorial Capabilities */}
          <div className="lg:col-span-7 space-y-4">
            {capabilities.map((cap) => (
              <div 
                key={cap.num}
                className="p-5 rounded-xl bg-slate-800/70 border border-slate-750 hover:border-emerald-500/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-emerald-400 text-sm font-bold pt-0.5">
                    {cap.num}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">
                      {lang === 'bn' ? cap.titleBn : cap.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {lang === 'bn' ? cap.descBn : cap.descEn}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Quick Help Strip */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-white">
              {lang === 'bn' ? 'আপনার ফোনে কি কোনো ডিসপ্লে বা সাড়াশব্দ নেই?' : 'Is your smartphone completely dead or screen unreadable?'}
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              {lang === 'bn' ? 'সরাসরি দোকানে ফোনটি নিয়ে আসুন। সমস্যা পরীক্ষা ও প্রাথমিক পরামর্শের জন্য কোনো চার্জ নেওয়া হয় না।' : 'Bring it to our lab for a no-cost, transparent diagnostic check.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${shopInfo.whatsappNumber}?text=${encodeURIComponent(
                lang === 'en'
                  ? 'Hello, I want to diagnose a dead/water damaged phone at Mobile Hospital.'
                  : 'নমস্কার, আমার ফোনের মাদারবোর্ড বা ডিসপ্লে সমস্যা চেক করাতে চাই।'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে পরামর্শ নিন' : 'Chat on WhatsApp'}</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-semibold transition-colors"
            >
              <span>{lang === 'bn' ? 'দোকানের ঠিকানা' : 'View Address'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
