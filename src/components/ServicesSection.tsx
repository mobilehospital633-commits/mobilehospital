import React, { useState } from 'react';
import { 
  Smartphone, 
  BatteryCharging, 
  Zap, 
  Cpu, 
  Droplets, 
  Camera, 
  ShieldCheck, 
  Wrench, 
  Check, 
  Clock, 
  Shield, 
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { Language, ServiceCategory } from '../types';

interface ServicesSectionProps {
  lang: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-4 h-4 text-emerald-300" />;
      case 'BatteryCharging':
        return <BatteryCharging className="w-4 h-4 text-emerald-300" />;
      case 'Zap':
        return <Zap className="w-4 h-4 text-emerald-300" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-emerald-300" />;
      case 'Droplets':
        return <Droplets className="w-4 h-4 text-emerald-300" />;
      case 'Camera':
        return <Camera className="w-4 h-4 text-emerald-300" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-emerald-300" />;
      case 'Wrench':
      default:
        return <Wrench className="w-4 h-4 text-emerald-300" />;
    }
  };

  const filteredServices = SERVICES_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Kicker */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-semibold">
            <span className="text-emerald-700 tracking-wide font-display font-bold">
              {lang === 'bn' ? 'আমাদের বিশেষায়িত সেবাসমূহ' : 'Our Specialized Services'}
            </span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span>{lang === 'bn' ? 'বাস্তব কাজের ছবি ও নিখুঁত বিবরণী' : 'Live Workbench & Genuine Precision Care'}</span>
          </div>

          <div className="font-script text-emerald-800 text-xl font-bold">
            {lang === 'bn' ? '✓ দ্রুততম ডেলিভারি ও ১০০% জেনুইন পার্টস' : '✓ 100% Genuine Parts & Written Warranty'}
          </div>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              {lang === 'bn' 
                ? 'স্মার্টফোনের প্রতিটি গুরুত্বপূর্ণ সমস্যার চিত্রভিত্তিক সমাধান' 
                : 'Comprehensive Precision Care for Every Smartphone Issue'}
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
              {lang === 'bn'
                ? 'প্রতিটি কাজের জন্য রয়েছে বিশেষায়িত যন্ত্রপাতি, দক্ষ কারিগর এবং খাঁটি জেনুইন পার্টস। কোনো হিডেন চার্জ ছাড়াই উন্মুক্ত কাউন্টারে সরাসরি মেরামত ও লিখিত ওয়ারেন্টি।'
                : 'Equipped with dedicated lab equipment, master hardware technicians, and genuine replacement parts. Open counter service with full diagnostic transparency.'}
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-xl overflow-x-auto shrink-0 max-w-full">
            {[
              { key: 'all' as ServiceCategory, labelBn: 'সকল সেবা', labelEn: 'All Services' },
              { key: 'screen' as ServiceCategory, labelBn: 'ডিসপ্লে ও গ্লাস', labelEn: 'Screen & Glass' },
              { key: 'power' as ServiceCategory, labelBn: 'ব্যাটারি ও চার্জিং', labelEn: 'Battery & Power' },
              { key: 'hardware' as ServiceCategory, labelBn: 'মাদারবোর্ড ও চিপ', labelEn: 'Motherboard & Chips' },
              { key: 'software' as ServiceCategory, labelBn: 'সফটওয়্যার ও আনলক', labelEn: 'Software & OS' },
            ].map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === cat.key
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                id={`service-cat-${cat.key}`}
              >
                {lang === 'bn' ? cat.labelBn : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid with Visual Images for Each Work Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-emerald-500/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              id={`service-card-${service.id}`}
            >
              <div>
                {/* Visual Image Container with Dynamic Scrim & Badges */}
                {service.imageSrc && (
                  <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-950">
                    <img
                      src={service.imageSrc}
                      alt={lang === 'bn' ? service.titleBn : service.titleEn}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                    
                    {/* Top Floating Badges */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <Clock className="w-3 h-3 text-slate-300" />
                        <span>{lang === 'bn' ? service.turnaroundBn : service.turnaroundEn}</span>
                      </span>

                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold shadow-xs">
                        <Shield className="w-3 h-3" />
                        <span>{lang === 'bn' ? service.warrantyBn : service.warrantyEn}</span>
                      </span>
                    </div>

                    {/* Bottom Title strip inside image scrim */}
                    <div className="absolute bottom-2.5 inset-x-3.5 flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-600/90 text-white flex items-center justify-center shrink-0 shadow-xs">
                        {getServiceIcon(service.iconName)}
                      </div>
                      <span className="text-slate-200 text-xs font-medium truncate drop-shadow-xs">
                        {lang === 'bn' ? service.titleEn : service.titleBn}
                      </span>
                    </div>
                  </div>
                )}

                {/* Card Content Area */}
                <div className="p-5 sm:p-6">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors leading-snug">
                    {lang === 'bn' ? service.titleBn : service.titleEn}
                  </h3>

                  {/* Detailed Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {lang === 'bn' ? service.descBn : service.descEn}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 text-xs text-slate-700 font-medium pt-3 border-t border-slate-100">
                    {(lang === 'bn' ? service.featuresBn : service.featuresEn).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Action Footer */}
              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    {lang === 'bn' ? 'সমস্যা নির্ণয়' : 'Diagnostic Check'}
                  </span>
                  <span className="text-xs font-bold text-emerald-700">
                    {lang === 'bn' ? '✓ সম্পূর্ণ ফ্রি' : '✓ 100% Free'}
                  </span>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-semibold transition-all shadow-xs active:scale-95 group/btn"
                  id={`contact-service-${service.id}`}
                >
                  <span>{lang === 'bn' ? 'পরামর্শ ও সেবা নিন' : 'Inquire Now'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* 4-Step Transparent Repair Process */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <div className="text-xs sm:text-sm font-semibold text-emerald-700 uppercase tracking-wider mb-2">
            {lang === 'bn' ? 'আমাদের কার্যপ্রণালী' : 'Our Service Workflow'}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
            {lang === 'bn' ? 'যে সুশৃঙ্খল ধাপে আপনার ফোন ফিরে পায় নতুন জীবন' : 'How We Fix Your Smartphone Transparently'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <span className="font-mono text-emerald-600 text-sm font-bold">01.</span>
              <h4 className="text-sm font-bold text-slate-900">
                {lang === 'bn' ? 'বিনামূল্যে সমস্যা নির্ণয়' : 'Free Diagnosis'}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {lang === 'bn' 
                  ? 'ফোনটি নিয়ে আসলে আধুনিক টেস্টিং ডিভাইসে সমস্যা পুঙ্খানুপুঙ্খ পরীক্ষা করে স্বচ্ছ খরচের হিসাব জানানো হয়।' 
                  : 'We test your phone with diagnostic tools and provide a clear quote before touching it.'}
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-emerald-600 text-sm font-bold">02.</span>
              <h4 className="text-sm font-bold text-slate-900">
                {lang === 'bn' ? 'উন্মুক্ত কাউন্টারে মেরামত' : 'Open-Counter Fix'}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {lang === 'bn' 
                  ? 'আপনার চোখের সামনেই সম্পূর্ণ স্বচ্ছতায় কাজ করা হয়—ব্যক্তিগত ডেটা বা ছবির কোনো ঝুঁকি থাকে না।' 
                  : 'Repaired right in front of you with zero risk to personal photos or private data.'}
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-emerald-600 text-sm font-bold">03.</span>
              <h4 className="text-sm font-bold text-slate-900">
                {lang === 'bn' ? 'মাল্টিপয়েন্ট কোয়ালিটি টেস্ট' : 'Multi-Point Testing'}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {lang === 'bn' 
                  ? 'টাচ সেন্সিটিভিটি, ডিসপ্লে কালার, সাউন্ড স্পিকার ও চার্জিং স্থায়িত্ব নিখুঁতভাবে পরীক্ষা করা হয়।' 
                  : 'Sensors, charging stability, audio, and touch sensitivity fully verified before handover.'}
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-emerald-600 text-sm font-bold">04.</span>
              <h4 className="text-sm font-bold text-slate-900">
                {lang === 'bn' ? 'ওয়ারেন্টি সহ সসম্মানে হস্তান্তর' : 'Delivery & Warranty'}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {lang === 'bn' 
                  ? 'সুনির্দিষ্ট লিখিত রিপ্লেসমেন্ট ওয়ারেন্টি কার্ড ও মানি রসিদ সহ প্রিয় ফোনটি আপনার হাতে তুলে দেওয়া হয়।' 
                  : 'Handed back with cash memo and official stamped written replacement warranty.'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
