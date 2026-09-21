import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Heart, Shield, Lock } from 'lucide-react';
import { SHOP_INFO as DEFAULT_SHOP_INFO } from '../data/mockData';
import { Language, ShopInfo } from '../types';

interface FooterProps {
  lang: Language;
  shopInfo?: ShopInfo;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  lang,
  shopInfo = DEFAULT_SHOP_INFO,
  onOpenAdmin 
}) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-stone-800 text-sm">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-xs">
                +
              </div>
              <div>
                <span className="text-xl font-bold text-white block">
                  {shopInfo.nameBn}
                </span>
                <span className="text-xs text-stone-400 font-sans">
                  {shopInfo.nameEn}
                </span>
              </div>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              {lang === 'bn'
                ? 'আপনার প্রিয় ফোনের বিশ্বস্ত ও নিরাপদ চিকিৎসা কেন্দ্র। ডিসপ্লে, ব্যাটারি, চার্জিং পোর্ট ও মাদারবোর্ড আইসি লেভেলের দক্ষ সমাধান।'
                : 'Your trustworthy smartphone hospital. Fast diagnosis, original parts, and transparent customer care.'}
            </p>
            <div className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
              <Shield className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? '১০০% গ্রাহক ডেটা গোপনীয়তার নিশ্চয়তা' : '100% Data Privacy Guarantee'}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              {lang === 'bn' ? 'প্রধান মেন্যু' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-emerald-400 transition-colors">
                  {lang === 'bn' ? 'হোম (Home)' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  {lang === 'bn' ? 'আমাদের সেবা (Services)' : 'Our Services'}
                </a>
              </li>
              <li>
                <a href="#tracker" className="hover:text-emerald-400 transition-colors">
                  {lang === 'bn' ? 'কাজের অবস্থা জানুন (Tracker)' : 'Track Repair Job'}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-emerald-400 transition-colors">
                  {lang === 'bn' ? 'কেন আমরা সেরা' : 'Why Choose Us'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  {lang === 'bn' ? 'যোগাযোগ (Contact)' : 'Contact Us'}
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Services from Screenshot */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              {lang === 'bn' ? 'জনপ্রিয় সেবাসমূহ' : 'Top Services'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li className="hover:text-stone-200">
                • {lang === 'bn' ? 'ডিসপ্লে পরিবর্তন (OLED / IPS)' : 'Display Replacement'}
              </li>
              <li className="hover:text-stone-200">
                • {lang === 'bn' ? 'ব্যাটারি রিপ্লেসমেন্ট (100% Health)' : 'Battery Replacement'}
              </li>
              <li className="hover:text-stone-200">
                • {lang === 'bn' ? 'চার্জিং পোর্ট ও জ্যাক সমাধান' : 'Charging Port Repair'}
              </li>
              <li className="hover:text-stone-200">
                • {lang === 'bn' ? 'মাদারবোর্ড ও ডেড ফোন ফিক্স' : 'Motherboard IC Repair'}
              </li>
              <li className="hover:text-stone-200">
                • {lang === 'bn' ? 'ওয়াটার ড্যামেজ আল্ট্রাসনিক সার্ভিস' : 'Water Damage Recovery'}
              </li>
              <li className="hover:text-stone-200">
                • {lang === 'bn' ? 'ক্যামেরা লেন্স ও স্পিকার মেরামত' : 'Camera & Audio Fix'}
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              {lang === 'bn' ? 'সরাসরি যোগাযোগ' : 'Direct Helpdesk'}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={`tel:${shopInfo.phoneRaw}`}
                className="flex items-start gap-2 text-emerald-400 font-bold hover:underline"
              >
                <Phone className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{shopInfo.phoneHotline}</span>
              </a>
              <a
                href={`mailto:${shopInfo.email}`}
                className="flex items-start gap-2 text-stone-300 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0 mt-0.5 text-stone-500" />
                <span className="break-all">{shopInfo.email}</span>
              </a>
              <div className="flex items-start gap-2 text-stone-400">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-stone-500" />
                <span>{lang === 'bn' ? shopInfo.addressBn : shopInfo.addressEn}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © ২০২৬ {shopInfo.nameBn} ({shopInfo.nameEn}). সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span>{lang === 'bn' ? 'আপনার প্রিয় ফোনের সেরা যত্ন' : 'Best Care for Your Phone'}</span>
              <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500 inline" />
            </div>
            {onOpenAdmin && (
              <button
                type="button"
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1 text-stone-600 hover:text-emerald-400 transition-colors cursor-pointer border-l border-stone-800 pl-4 py-0.5"
                title={lang === 'bn' ? 'মালিক কাস্টমাইজেশন প্যানেল' : 'Owner Customizer'}
                id="footer-owner-admin-btn"
              >
                <Lock className="w-3 h-3 text-stone-500 hover:text-emerald-400" />
                <span>{lang === 'bn' ? 'মালিক প্যানেল' : 'Owner Panel'}</span>
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Floating Action Button for WhatsApp */}
      <a
        href={`https://wa.me/${shopInfo.whatsappNumber}?text=${encodeURIComponent('আসসালামু আলাইকুম মোবাইল হসপিটাল, আমার একটি ফোন রিপেয়ার সম্পর্কে জানতে চাই।')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-xs font-bold">
          {lang === 'bn' ? 'হোয়াটসঅ্যাপ চ্যাট' : 'WhatsApp'}
        </span>
      </a>
    </footer>
  );
};
