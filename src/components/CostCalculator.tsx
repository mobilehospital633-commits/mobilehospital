import React, { useState } from 'react';
import { Calculator, CheckCircle, Clock, ShieldCheck, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { POPULAR_BRANDS, PROBLEM_OPTIONS } from '../data/mockData';
import { Language } from '../types';

interface CostCalculatorProps {
  lang: Language;
  onBookWithEstimate: (brand: string, model: string, problem: string, estPrice: number) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ lang, onBookWithEstimate }) => {
  const [selectedBrandId, setSelectedBrandId] = useState<string>(POPULAR_BRANDS[0].id);
  const selectedBrand = POPULAR_BRANDS.find((b) => b.id === selectedBrandId) || POPULAR_BRANDS[0];
  
  const [selectedModel, setSelectedModel] = useState<string>(selectedBrand.models[0]);
  const [selectedProblemId, setSelectedProblemId] = useState<string>(PROBLEM_OPTIONS[0].id);

  // Handle brand change: reset model
  const handleBrandChange = (brandId: string) => {
    setSelectedBrandId(brandId);
    const brand = POPULAR_BRANDS.find((b) => b.id === brandId);
    if (brand && brand.models.length > 0) {
      setSelectedModel(brand.models[0]);
    }
  };

  const selectedProblem = PROBLEM_OPTIONS.find((p) => p.id === selectedProblemId) || PROBLEM_OPTIONS[0];

  // Dynamic cost calculation based on brand tier & issue
  const calculateEstimate = () => {
    let multiplier = 1.0;
    if (selectedBrandId === 'apple') multiplier = 1.6;
    else if (selectedBrandId === 'oneplus' || selectedBrandId === 'samsung') multiplier = 1.25;
    else if (selectedBrandId === 'xiaomi' || selectedBrandId === 'realme') multiplier = 1.0;
    else multiplier = 0.95;

    const base = selectedProblem.basePrice * multiplier;
    const minCost = Math.round(base / 50) * 50;
    const maxCost = Math.round((base * 1.35) / 50) * 50;

    return { minCost, maxCost };
  };

  const { minCost, maxCost } = calculateEstimate();

  return (
    <section id="calculator" className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'bn' ? 'স্বচ্ছ মূল্য তালিকা' : 'Transparent Pricing Calculator'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {lang === 'bn' ? 'রিপেয়ার খরচ হিসাব করুন' : 'Instant Repair Cost Estimator'}
          </h2>
          <p className="mt-2 text-stone-600 text-base">
            {lang === 'bn'
              ? 'আপনার ফোনের ব্র্যান্ড, মডেল ও সমস্যা সিলেক্ট করে আনুমানিক সার্ভিস খরচ ও সময় জেনে নিন।'
              : 'Select your smartphone brand, model, and defect to get a transparent price range.'}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-stone-50 rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Selectors (7 cols) */}
            <div className="md:col-span-7 space-y-5">
              
              {/* Brand Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  ১. {lang === 'bn' ? 'ফোনের ব্র্যান্ড নির্বাচন করুন' : '1. Select Brand'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {POPULAR_BRANDS.map((brand) => (
                    <button
                      key={brand.id}
                      type="button"
                      onClick={() => handleBrandChange(brand.id)}
                      className={`p-2.5 text-xs font-semibold rounded-xl text-center border transition-all truncate ${
                        selectedBrandId === brand.id
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                          : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      {brand.name.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Model Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  ২. {lang === 'bn' ? 'মডেল সিলেক্ট করুন' : '2. Select Model'}
                </label>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full bg-white border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-xs"
                  id="calc-model-select"
                >
                  {selectedBrand.models.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                  <option value={`${selectedBrand.name} Other / অন্যান্য মডেল`}>
                    {lang === 'bn' ? 'অন্যান্য মডেল (অন্যান্য)' : 'Other Model'}
                  </option>
                </select>
              </div>

              {/* Defect / Problem Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  ৩. {lang === 'bn' ? 'সমস্যার ধরন বেছে নিন' : '3. Select Problem / Issue'}
                </label>
                <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                  {PROBLEM_OPTIONS.map((prob) => (
                    <label
                      key={prob.id}
                      onClick={() => setSelectedProblemId(prob.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all text-xs sm:text-sm ${
                        selectedProblemId === prob.id
                          ? 'bg-emerald-50/80 border-emerald-500 text-stone-900 font-semibold'
                          : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          selectedProblemId === prob.id ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-stone-400'
                        }`}>
                          {selectedProblemId === prob.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <span>{lang === 'bn' ? prob.nameBn : prob.nameEn}</span>
                      </div>
                      <span className="text-stone-500 text-xs">
                        ৳{prob.basePrice}+
                      </span>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Result Card (5 cols) */}
            <div className="md:col-span-5 bg-stone-900 text-white rounded-2xl p-6 shadow-md border border-stone-800 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-stone-800 mb-4">
                  <span className="text-xs uppercase tracking-wider font-semibold text-stone-400">
                    {lang === 'bn' ? 'আনুমানিক হিসাব' : 'Quotation Summary'}
                  </span>
                  <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded">
                    {selectedBrand.name.split(' ')[0]}
                  </span>
                </div>

                <h4 className="text-base font-bold text-stone-100 mb-1">
                  {selectedModel}
                </h4>
                <p className="text-sm text-emerald-400 mb-5">
                  {lang === 'bn' ? selectedProblem.nameBn : selectedProblem.nameEn}
                </p>

                {/* Price Display */}
                <div className="bg-stone-800/80 rounded-xl p-4 mb-5 border border-stone-750">
                  <span className="text-xs text-stone-400 block mb-1">
                    {lang === 'bn' ? 'আনুমানিক খরচ সীমা (পার্টস + ফি):' : 'Estimated Cost (Parts + Labor):'}
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    ৳{minCost.toLocaleString()} - ৳{maxCost.toLocaleString()}
                  </div>
                  <span className="text-[11px] text-stone-400 mt-1 block">
                    {lang === 'bn' ? '* চূড়ান্ত পরিদর্শন শেষে নির্ধারিত হবে' : '* Exact price confirmed upon physical check'}
                  </span>
                </div>

                {/* Service Specs */}
                <div className="space-y-2.5 text-xs text-stone-300 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      {lang === 'bn' ? 'প্রয়োজনীয় সময়:' : 'Turnaround:'}{' '}
                      <strong className="text-white">{lang === 'bn' ? selectedProblem.turnaroundBn : selectedProblem.turnaroundEn}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      {lang === 'bn' ? 'ওয়ারেন্টি কভারেজ:' : 'Warranty:'}{' '}
                      <strong className="text-white">{lang === 'bn' ? selectedProblem.warrantyBn : selectedProblem.warrantyEn}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      {lang === 'bn' ? 'চোখের সামনে লাইভ ফিটিং সাপোর্ট' : 'Live visual repair at our counter'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onBookWithEstimate(selectedBrand.name, selectedModel, selectedProblem.nameBn, minCost)}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 active:scale-95 shadow-md"
                id="calc-book-btn"
              >
                <span>{lang === 'bn' ? 'এই খরচে বুকিং কনফার্ম করুন' : 'Book with this Estimate'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
