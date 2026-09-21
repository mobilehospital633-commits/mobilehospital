/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { StatusTracker } from './components/StatusTracker';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { AdminCustomizer } from './components/AdminCustomizer';
import { SHOP_INFO } from './data/mockData';
import { Language, ServiceItem, ShopInfo } from './types';

const STORAGE_SHOP_KEY = 'mobile_hospital_shop_info';

export default function App() {
  const [lang, setLang] = useState<Language>('bn');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [contactPrefill] = useState<{
    brand?: string;
    model?: string;
    problem?: string;
  }>({});

  // Owner Customizer State & Persistent Shop Data
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [shopInfo, setShopInfo] = useState<ShopInfo>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_SHOP_KEY);
      if (saved) {
        return { ...SHOP_INFO, ...JSON.parse(saved) };
      }
    } catch {
      // Fallback to default mockData
    }
    return SHOP_INFO;
  });

  // Shortcut for owner: Ctrl+Shift+A or Cmd+Shift+A
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        setIsAdminOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'bn' ? 'en' : 'bn'));
  };

  const handleOpenBooking = (serviceItem?: ServiceItem) => {
    setSelectedService(serviceItem || null);
    setIsBookingModalOpen(true);
  };

  const handleSaveShopInfo = (newInfo: ShopInfo) => {
    setShopInfo(newInfo);
    try {
      localStorage.setItem(STORAGE_SHOP_KEY, JSON.stringify(newInfo));
    } catch {
      // Storage error ignored
    }
  };

  // Determine dynamic background styling based on owner's chosen theme
  const getBackgroundThemeClass = () => {
    switch (shopInfo.backgroundTheme) {
      case 'dark-slate':
        return 'bg-stone-900 text-stone-100 bg-tech-grid-dark';
      case 'clean-matrix':
        return 'bg-stone-50 text-stone-900 bg-dots-matrix';
      case 'tech-circuit':
      default:
        return 'bg-stone-50 text-stone-900 bg-tech-grid bg-circuit-pattern';
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 selection:bg-emerald-500 selection:text-white ${getBackgroundThemeClass()}`}>
      {/* Top Navbar with live status and discreet owner button */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenBooking={() => handleOpenBooking()}
        shopInfo={shopInfo}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
          shopInfo={shopInfo}
        />

        {/* Services Section */}
        <ServicesSection
          lang={lang}
          onSelectService={(service) => handleOpenBooking(service)}
        />

        {/* Job Status Tracker */}
        <StatusTracker lang={lang} />

        {/* Why Choose Us & Customer Reviews */}
        <WhyChooseUs lang={lang} />

        {/* Contact & Interactive Map Section */}
        <ContactSection
          lang={lang}
          shopInfo={shopInfo}
          prefillData={contactPrefill}
        />
      </main>

      {/* Footer with discreet owner access trigger */}
      <Footer 
        lang={lang} 
        shopInfo={shopInfo}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Quick Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        lang={lang}
        prefillService={selectedService}
        shopInfo={shopInfo}
      />

      {/* Owner Private Customizer (PIN Protected) */}
      <AdminCustomizer
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        shopInfo={shopInfo}
        onSaveShopInfo={handleSaveShopInfo}
        lang={lang}
      />
    </div>
  );
}


