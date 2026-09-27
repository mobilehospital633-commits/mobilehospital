/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SHOP_INFO } from './data/mockData';
import { Language } from './types';

export default function App() {
  // English format opens first by default as requested
  const [lang, setLang] = useState<Language>('en');
  const [contactPrefill] = useState<{
    brand?: string;
    model?: string;
    problem?: string;
  }>({});

  const shopInfo = SHOP_INFO;

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 selection:bg-emerald-500 selection:text-white bg-[#f8fafc] text-slate-900 bg-canvas-clean bg-dot-mesh-clean">
      {/* Top Navbar adhering to Top Bar Contract */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        shopInfo={shopInfo}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with High-Fidelity Visual Anchor */}
        <Hero
          lang={lang}
          shopInfo={shopInfo}
        />

        {/* Services & Capabilities Section */}
        <ServicesSection
          lang={lang}
        />

        {/* Precision Lab & Micro-Soldering Craftsmanship Section */}
        <CraftsmanshipSection
          lang={lang}
          shopInfo={shopInfo}
        />

        {/* Why Choose Us Pillars */}
        <WhyChooseUs lang={lang} />

        {/* Contact, Inquiry Form & Google Maps Embed */}
        <ContactSection
          lang={lang}
          shopInfo={shopInfo}
          prefillData={contactPrefill}
        />
      </main>

      {/* Footer */}
      <Footer 
        lang={lang} 
        shopInfo={shopInfo}
      />
    </div>
  );
}
