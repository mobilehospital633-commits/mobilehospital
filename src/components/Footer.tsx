import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { SHOP_INFO as DEFAULT_SHOP_INFO } from '../data/mockData';
import { Language, ShopInfo } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  lang: Language;
  shopInfo?: ShopInfo;
}

export const Footer: React.FC<FooterProps> = ({ 
  lang, 
  shopInfo = DEFAULT_SHOP_INFO,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-850 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-850 text-xs sm:text-sm">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo 
                variant="emblem" 
                size={40} 
              />
              <div>
                <span className="text-lg font-bold text-white block">
                  {lang === 'bn' ? shopInfo.nameBn : shopInfo.nameEn}
                </span>
                <span className="text-xs text-slate-400 font-sans">
                  {lang === 'bn' ? 'স্মার্টফোন কেয়ার ও রিপেয়ারিং সেন্টার' : 'Smartphone Repairing Center'}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              {lang === 'bn'
                ? 'কালীতলা, দত্তপুলিয়ার প্রাণকেন্দ্রে আপনার প্রিয় মুঠোফোনের বিশ্বস্ত ও নির্ভরযোগ্য চিকিৎসা কেন্দ্র। ডিসপ্লে, ব্যাটারি, চার্জিং পোর্ট ও মাদারবোর্ড আইসি লেভেলের নিখুঁত কারিগরি সমাধান।'
                : 'Your trustworthy smartphone hospital in Kalitala, Duttapulia. Fast diagnosis, original parts, and transparent customer care.'}
            </p>
            <div className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>{lang === 'bn' ? '১০০% গ্রাহক ডেটা ও তথ্যের গোপনীয়তার নিশ্চয়তা' : '100% Customer Data Privacy Guarantee'}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 pb-2 border-b border-slate-850">
              {lang === 'bn' ? 'নেভিগেশন মেন্যু' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  {lang === 'bn' ? 'হোম' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  {lang === 'bn' ? 'আমাদের সেবাসমূহ' : 'Our Services'}
                </a>
              </li>
              <li>
                <a href="#craftsmanship" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  {lang === 'bn' ? 'ল্যাব ও প্রযুক্তি' : 'Precision Lab'}
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  {lang === 'bn' ? 'কেন আমরা সেরা' : 'Why Choose Us'}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  {lang === 'bn' ? 'যোগাযোগ ও ঠিকানা' : 'Contact & Address'}
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 pb-2 border-b border-slate-850">
              {lang === 'bn' ? 'প্রধান সেবাসমূহ' : 'Key Services'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• {lang === 'bn' ? 'অরিজিনাল ডিসপ্লে প্রতিস্থাপন' : 'Display & Screen Replacement'}</li>
              <li>• {lang === 'bn' ? 'জেনুইন ব্যাটারি রিপ্লেসমেন্ট (৬ মাস গ্যারান্টি)' : 'Battery Replacement (6-Mo Warranty)'}</li>
              <li>• {lang === 'bn' ? 'চার্জিং পোর্ট ও পিন মেরামত' : 'Charging Port & Jack Fix'}</li>
              <li>• {lang === 'bn' ? 'মাদারবোর্ড ও ডেড ফোন রিকভারি' : 'Motherboard IC & Dead Phone Fix'}</li>
              <li>• {lang === 'bn' ? 'তরল ও পানিজনিত ক্ষয় নিরাময়' : 'Liquid Damage Ultrasonic Recovery'}</li>
              <li>• {lang === 'bn' ? 'ক্যামেরা লেন্স ও সাউন্ড সিস্টেম' : 'Camera Lens & Speaker Audio'}</li>
              <li>• {lang === 'bn' ? 'সফটওয়্যার ও সিস্টেম আনলকিং' : 'Software & System Unlocking'}</li>
            </ul>
          </div>

          {/* Direct Address & Contact */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 pb-2 border-b border-slate-850">
              {lang === 'bn' ? 'ঠিকানা ও যোগাযোগ' : 'Direct Contact'}
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href={`tel:${shopInfo.phoneRaw}`}
                className="flex items-start gap-2 text-emerald-400 font-bold hover:underline"
              >
                <Phone className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{shopInfo.phoneHotline}</span>
              </a>

              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-slate-500" />
                <span>{lang === 'bn' ? shopInfo.addressBn : shopInfo.addressEn}</span>
              </div>

              <div className="flex items-start gap-2 text-slate-400">
                <Clock className="w-4 h-4 shrink-0 mt-0.5 text-slate-500" />
                <span>{lang === 'bn' ? shopInfo.workingHoursBn : shopInfo.workingHoursEn}</span>
              </div>

              <a
                href={`mailto:${shopInfo.email}`}
                className="flex items-start gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0 mt-0.5 text-slate-500" />
                <span className="break-all">{shopInfo.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 {shopInfo.nameEn} ({shopInfo.nameBn}). সর্বস্বত্ব সংরক্ষিত (All rights reserved).
          </p>
          <div className="flex items-center gap-3">
            <span>{lang === 'bn' ? 'কালীতলা, দত্তপুলিয়া, নদিয়া — পিন: ৭৪১৫০৪' : 'Kalitala, Duttapulia, Nadia — Pin: 741504'}</span>
          </div>
        </div>

      </div>

      {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${shopInfo.whatsappNumber}?text=${encodeURIComponent(
          lang === 'en'
            ? 'Hello Mobile Hospital, I would like to inquire about smartphone repair.'
            : 'নমস্কার, মোবাইল হসপিটালে যোগাযোগ করছি। আমার ফোনের সমস্যার বিষয়ে জানতে চাই।'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-xs font-bold">
          {lang === 'bn' ? 'হোয়াটসঅ্যাপে চ্যাট করুন' : 'WhatsApp Us'}
        </span>
      </a>
    </footer>
  );
};
