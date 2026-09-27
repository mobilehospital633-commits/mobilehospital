import React, { useState } from 'react';
import { Phone, Clock, MessageCircle, Menu, X, MapPin } from 'lucide-react';
import { SHOP_INFO as DEFAULT_SHOP_INFO } from '../data/mockData';
import { Language, ShopInfo } from '../types';
import { Logo } from './Logo';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  shopInfo?: ShopInfo;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  lang, 
  onToggleLang, 
  shopInfo = DEFAULT_SHOP_INFO,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', labelBn: 'হোম', labelEn: 'Home' },
    { href: '#services', labelBn: 'সেবাসমূহ', labelEn: 'Services' },
    { href: '#craftsmanship', labelBn: 'ল্যাব ও প্রযুক্তি', labelEn: 'Precision Lab' },
    { href: '#why-us', labelBn: 'কেন আমরা সেরা', labelEn: 'Why Us' },
    { href: '#contact', labelBn: 'যোগাযোগ ও ঠিকানা', labelEn: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 text-slate-800 transition-colors shadow-xs">
      {/* Top Utility Line */}
      <div className="border-b border-slate-850 bg-slate-950 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{lang === 'bn' ? 'সরাসরি সেবা চালু রয়েছে' : 'Open for Live Service Today'}</span>
            </span>

            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>{lang === 'bn' ? shopInfo.workingHoursBn : shopInfo.workingHoursEn}</span>
            </span>

            <span className="hidden lg:inline-flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-slate-400" />
              <span>{lang === 'bn' ? shopInfo.addressBn : shopInfo.addressEn}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={`tel:${shopInfo.phoneRaw}`} 
              className="text-slate-300 hover:text-emerald-400 font-mono tracking-tight flex items-center gap-1 transition-colors"
              id="topbar-phone-link"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{shopInfo.phoneHotline}</span>
            </a>

            <span className="text-slate-700">|</span>

            {/* Language Switch */}
            <button
              onClick={onToggleLang}
              className="text-[11px] font-bold text-slate-200 hover:text-white px-2.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 transition-colors tracking-wide"
              title="Toggle Language"
              id="language-toggle-btn"
            >
              {lang === 'en' ? 'বাংলা' : 'English'}
            </button>
          </div>
        </div>
      </div>

      {/* Main 3-Zone Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Zone 1: Brand Wordmark & Emblem */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-hidden" id="brand-logo-link">
            <Logo 
              variant="emblem" 
              size={42} 
              className="group-hover:scale-105 transition-transform duration-200" 
            />
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
                {lang === 'bn' ? shopInfo.nameBn : shopInfo.nameEn}
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 -mt-0.5 tracking-wider uppercase">
                {lang === 'bn' ? 'স্মার্টফোন কেয়ার ও রিপেয়ারিং সেন্টার' : 'Smartphone Repair Center'}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-emerald-600 after:transition-all after:duration-200"
                id={`nav-link-${link.href.replace('#', '')}`}
              >
                {lang === 'bn' ? link.labelBn : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${shopInfo.whatsappNumber}?text=${encodeURIComponent(
                lang === 'en'
                  ? 'Hello Mobile Hospital, I would like to inquire about my smartphone repair.'
                  : 'নমস্কার, মোবাইল হসপিটালে যোগাযোগ করছি। আমার ফোনের সমস্যা সমাধানের বিষয়ে জানতে চাই।'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide transition-all shadow-xs active:scale-98"
              id="nav-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপ' : 'WhatsApp'}</span>
            </a>

            <a
              href={`tel:${shopInfo.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-200 transition-colors"
              id="nav-phone-btn"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{shopInfo.phoneHotline}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`https://wa.me/${shopInfo.whatsappNumber}?text=${encodeURIComponent(
                lang === 'en'
                  ? 'Hello Mobile Hospital, I would like to inquire about phone repair.'
                  : 'নমস্কার, মোবাইল হসপিটালে যোগাযোগ করছি।'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-600 text-white flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-5 pt-3 pb-6 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 text-sm font-semibold text-slate-700 hover:text-emerald-600 border-b border-slate-100"
            >
              {lang === 'bn' ? link.labelBn : link.labelEn}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-2.5">
            <a
              href={`tel:${shopInfo.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 text-xs font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{lang === 'bn' ? 'সরাসরি কল:' : 'Call:'} {shopInfo.phoneHotline}</span>
            </a>
            <a
              href={`https://wa.me/${shopInfo.whatsappNumber}?text=${encodeURIComponent(
                lang === 'en'
                  ? 'Hello Mobile Hospital, I would like to inquire about phone repair.'
                  : 'নমস্কার, মোবাইল হসপিটালে যোগাযোগ করছি।'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে পরামর্শ নিন' : 'Chat on WhatsApp'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
