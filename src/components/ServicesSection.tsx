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
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { Language, ServiceCategory, ServiceItem } from '../types';

interface ServicesSectionProps {
  lang: Language;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-emerald-600" />;
      case 'BatteryCharging':
        return <BatteryCharging className="w-6 h-6 text-emerald-600" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-emerald-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-emerald-600" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-emerald-600" />;
      case 'Camera':
        return <Camera className="w-6 h-6 text-emerald-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Wrench':
      default:
        return <Wrench className="w-6 h-6 text-emerald-600" />;
    }
  };

  const filteredServices = SERVICES_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="services" className="py-16 sm:py-20 bg-stone-100/70 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header from Screenshot: আমাদের সেবাসমূহ (id="services") */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'bn' ? 'মোবাইল রিপেয়ারিং সেন্টার' : 'Mobile Repairing Center'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {lang === 'bn' ? 'আমাদের সেবাসমূহ' : 'Our Comprehensive Services'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            {lang === 'bn'
              ? 'মোবাইল হাসপাতালে সব ধরনের ব্র্যান্ডের স্মার্টফোনের নির্ভরযোগ্য সমাধান। জেনুইন পার্টস ও লিখিত ওয়ারেন্টি।'
              : 'Reliable repair solutions for all major smartphone brands. 100% genuine parts & written warranty.'}
          </p>

          {/* Core Screenshot Highlights Pill */}
          <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-stone-600 bg-white p-2 rounded-xl shadow-xs border border-stone-200">
            <span className="font-semibold text-stone-900">{lang === 'bn' ? 'জনপ্রিয় সেবা:' : 'Core Services:'}</span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-medium">✓ {lang === 'bn' ? 'ডিসপ্লে পরিবর্তন' : 'Display Replacement'}</span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-medium">✓ {lang === 'bn' ? 'ব্যাটারি রিপ্লেসমেন্ট' : 'Battery Replacement'}</span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-medium">✓ {lang === 'bn' ? 'চার্জিং পোর্ট সমস্যা সমাধান' : 'Charging Port Repair'}</span>
          </div>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
          {[
            { key: 'all' as ServiceCategory, labelBn: 'সকল সার্ভিস', labelEn: 'All Services' },
            { key: 'screen' as ServiceCategory, labelBn: 'ডিসপ্লে ও বডি', labelEn: 'Screen & Body' },
            { key: 'power' as ServiceCategory, labelBn: 'ব্যাটারি ও চার্জিং', labelEn: 'Battery & Power' },
            { key: 'hardware' as ServiceCategory, labelBn: 'মাদারবোর্ড ও হার্ডওয়্যার', labelEn: 'Motherboard & Hardware' },
            { key: 'software' as ServiceCategory, labelBn: 'সফটওয়্যার ও আনলক', labelEn: 'Software & Unlock' },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === cat.key
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-white text-stone-600 hover:bg-stone-200 hover:text-stone-900 border border-stone-200'
              }`}
              id={`service-cat-${cat.key}`}
            >
              {lang === 'bn' ? cat.labelBn : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`relative bg-white rounded-2xl p-6 shadow-xs border transition-all duration-200 hover:shadow-md hover:border-emerald-500/40 flex flex-col justify-between ${
                service.highlight ? 'border-emerald-500/40 ring-1 ring-emerald-500/10' : 'border-stone-200'
              }`}
              id={`service-card-${service.id}`}
            >
              {/* Highlight Tag */}
              {service.highlight && (
                <div className="absolute -top-3 right-5 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs uppercase tracking-wide">
                  {lang === 'bn' ? 'বেস্টসেলার সেবা' : 'Popular Service'}
                </div>
              )}

              <div>
                {/* Icon & Title */}
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 leading-tight">
                      {lang === 'bn' ? service.titleBn : service.titleEn}
                    </h3>
                    <p className="text-xs text-stone-500 font-sans">
                      {lang === 'bn' ? service.titleEn : service.titleBn}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  {lang === 'bn' ? service.descBn : service.descEn}
                </p>

                {/* Turnaround & Warranty Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-medium">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-100 text-stone-700">
                    <Clock className="w-3.5 h-3.5 text-stone-500" />
                    {lang === 'bn' ? service.turnaroundBn : service.turnaroundEn}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 font-semibold">
                    <Shield className="w-3.5 h-3.5 text-emerald-600" />
                    {lang === 'bn' ? service.warrantyBn : service.warrantyEn}
                  </span>
                </div>

                {/* Features list */}
                <ul className="space-y-1.5 mb-6 text-xs sm:text-sm text-stone-600">
                  {(lang === 'bn' ? service.featuresBn : service.featuresEn).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action and Free Diagnostic Assurance */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-semibold">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === 'bn' ? 'ফ্রি ডায়াগনসিস ও চেকআপ' : 'Free Inspection'}</span>
                </div>

                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 hover:bg-emerald-600 text-white text-xs sm:text-sm font-semibold transition-colors active:scale-95"
                  id={`book-service-${service.id}`}
                >
                  <span>{lang === 'bn' ? 'বুক করুন' : 'Book Now'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Free consultation banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-stone-900">
                {lang === 'bn' ? 'ফোনের সঠিক সমস্যা বুঝতে পারছেন না?' : 'Unsure what the exact issue is?'}
              </h4>
              <p className="text-sm text-stone-600">
                {lang === 'bn'
                  ? 'আমাদের মোবাইল রিপেয়ারিং সেন্টারে নিয়ে আসুন। সম্পূর্ণ বিনামূল্যে আমাদের ডিজিটাল টেস্ট ডিভাইসের মাধ্যমে প্রবলেম চেক করা হবে।'
                  : 'Bring it to our mobile repairing center. We diagnose hardware and software issues using diagnostic tools for 100% free.'}
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow-xs"
          >
            {lang === 'bn' ? 'শপের ঠিকানা ও ম্যাপ দেখুন' : 'Get Location & Directions'}
          </a>
        </div>

      </div>
    </section>
  );
};
