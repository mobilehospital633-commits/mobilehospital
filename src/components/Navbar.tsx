import React, { useState } from 'react';
import { Phone, Mail, Clock, MessageCircle, Menu, X, Sparkles, Lock } from 'lucide-react';
import { SHOP_INFO as DEFAULT_SHOP_INFO } from '../data/mockData';
import { Language, ShopInfo } from '../types';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenBooking: (serviceId?: string) => void;
  shopInfo?: ShopInfo;
  onOpenAdmin?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  lang, 
  onToggleLang, 
  onOpenBooking,
  shopInfo = DEFAULT_SHOP_INFO,
  onOpenAdmin
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', labelBn: 'হোম', labelEn: 'Home' },
    { href: '#services', labelBn: 'আমাদের সেবা', labelEn: 'Our Services' },
    { href: '#why-us', labelBn: 'কেন আমরা', labelEn: 'Why Us' },
    { href: '#contact', labelBn: 'যোগাযোগ ও ম্যাপ', labelEn: 'Contact & Map' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-stone-900 text-white">
      {/* Top announcement bar */}
      <div className="bg-emerald-700 text-emerald-50 px-4 py-1.5 text-xs sm:text-sm font-medium border-b border-emerald-600">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-100"></span>
              </span>
              <span>
                {shopInfo.announcement?.enabled 
                  ? (lang === 'bn' ? shopInfo.announcement.textBn : shopInfo.announcement.textEn)
                  : (lang === 'bn' ? 'সরাসরি সেবা চালু আছে' : 'Center Open Now')}
              </span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-emerald-100 font-normal">
              <Clock className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? shopInfo.workingHoursBn : shopInfo.workingHoursEn}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <a 
              href={`mailto:${shopInfo.email}`} 
              className="hover:underline hidden lg:flex items-center gap-1"
              id="topbar-email-link"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{shopInfo.email}</span>
            </a>
            <a 
              href={`tel:${shopInfo.phoneRaw}`} 
              className="font-bold flex items-center gap-1 hover:text-white"
              id="topbar-phone-link"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{shopInfo.phoneHotline}</span>
            </a>

            {/* Language Toggle */}
            <button
              onClick={onToggleLang}
              className="px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-xs font-semibold tracking-wider transition-colors"
              title="Toggle Language"
              id="language-toggle-btn"
            >
              {lang === 'bn' ? 'English' : 'বাংলা'}
            </button>

            {/* Discreet Owner / Customizer Button */}
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="px-2 py-0.5 rounded bg-emerald-900/80 hover:bg-emerald-800 text-emerald-200 hover:text-white text-[11px] font-semibold flex items-center gap-1 transition-colors border border-emerald-500/30"
                title={lang === 'bn' ? 'মালিক কাস্টমাইজেশন (পিন সুরক্ষিত)' : 'Owner Customize (PIN Protected)'}
                id="topbar-admin-btn"
              >
                <Lock className="w-3 h-3 text-emerald-400" />
                <span className="hidden sm:inline">{lang === 'bn' ? 'কাস্টমাইজ' : 'Customize'}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo with Medical Cross + Smartphone Badge */}
          <a href="#home" className="flex items-center gap-3 group" id="brand-logo-link">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md group-hover:bg-emerald-500 transition-colors">
              <div className="relative">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                  <path d="M12 18h.01"/>
                  <path d="M12 7v6"/>
                  <path d="M9 10h6"/>
                </svg>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {shopInfo.nameBn}
                </span>
                <span className="hidden sm:inline-block text-[11px] font-semibold bg-emerald-950 border border-emerald-500/30 text-emerald-300 px-1.5 py-0.5 rounded">
                  {lang === 'bn' ? 'মোবাইল রিপেয়ারিং সেন্টার' : 'Repair Center'}
                </span>
              </div>
              <p className="text-xs text-stone-400 font-sans tracking-wide">
                {shopInfo.nameEn} • {lang === 'bn' ? 'মোবাইল রিপেয়ারিং সেন্টার' : 'Mobile Repairing Center'}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
                id={`nav-link-${link.href.replace('#', '')}`}
              >
                {lang === 'bn' ? link.labelBn : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`https://wa.me/${shopInfo.whatsappNumber}?text=${encodeURIComponent('আসসালামু আলাইকুম, মোবাইল হসপিটাল থেকে ফোন মেরামত সম্পর্কে জানতে চাই।')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-emerald-400 font-medium text-sm transition-colors border border-stone-700"
              id="nav-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপ' : 'WhatsApp'}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-sm active:scale-95"
              id="nav-book-repair-btn"
            >
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'bn' ? 'রিপেয়ার বুক করুন' : 'Book Repair'}</span>
            </button>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 text-xs font-semibold rounded-md bg-emerald-600 text-white"
            >
              {lang === 'bn' ? 'বুকিং' : 'Book'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-stone-300 hover:text-white hover:bg-stone-800"
              aria-label="Open menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-950 border-t border-stone-800 px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-stone-200 hover:text-white hover:bg-stone-800"
            >
              {lang === 'bn' ? link.labelBn : link.labelEn}
            </a>
          ))}
          <div className="pt-4 border-t border-stone-800 flex flex-col gap-2">
            <a
              href={`tel:${shopInfo.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-stone-800 text-white text-sm font-medium"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'bn' ? 'সরাসরি কল করুন:' : 'Call:'} {shopInfo.phoneHotline}</span>
            </a>
            <a
              href={`https://wa.me/${shopInfo.whatsappNumber}?text=${encodeURIComponent('আসসালামু আলাইকুম, মোবাইল হসপিটাল থেকে ফোন মেরামতের তথ্য চাই।')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-emerald-700 text-white text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে চ্যাট করুন' : 'Chat on WhatsApp'}</span>
            </a>

            {onOpenAdmin && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-300 text-xs font-medium"
              >
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === 'bn' ? 'মালিক কাস্টমাইজ প্যানেল (লগইন)' : 'Owner Customize Panel'}</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
