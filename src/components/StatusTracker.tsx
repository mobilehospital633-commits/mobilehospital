import React, { useState } from 'react';
import { Search, CheckCircle2, Clock, Wrench, ShieldCheck, AlertCircle, Phone, Sparkles } from 'lucide-react';
import { INITIAL_TICKETS } from '../data/mockData';
import { Language, RepairStage, RepairTicket } from '../types';

interface StatusTrackerProps {
  lang: Language;
}

export const StatusTracker: React.FC<StatusTrackerProps> = ({ lang }) => {
  const [searchQuery, setSearchQuery] = useState('MH-8021');
  const [currentTicket, setCurrentTicket] = useState<RepairTicket | null>(INITIAL_TICKETS[0]);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMsg('');

    const clean = searchQuery.trim().toUpperCase();
    const found = INITIAL_TICKETS.find(
      (t) => t.ticketId.toUpperCase() === clean || t.phoneLast4 === clean.slice(-4)
    );

    if (found) {
      setCurrentTicket(found);
    } else {
      setErrorMsg(
        lang === 'bn'
          ? `দুঃখিত, "${searchQuery}" স্লিপ নম্বর বা শেষ ৪ ডিজিটের কোনো রেকর্ড পাওয়া যায়নি। অনুগ্রহ করে যাচাই করুন বা আমাদের হটলাইনে কল দিন।`
          : `No repair record found for "${searchQuery}". Please check your ticket slip or call our helpline.`
      );
      setCurrentTicket(null);
    }
  };

  const stages: { key: RepairStage; labelBn: string; labelEn: string }[] = [
    { key: 'received', labelBn: 'ডিভাইস রিসিভ', labelEn: 'Device Received' },
    { key: 'inspecting', labelBn: 'ডায়াগনসিস', labelEn: 'Diagnosis' },
    { key: 'repairing', labelBn: 'মেরামত চলছে', labelEn: 'In Repair' },
    { key: 'testing', labelBn: 'কোয়ালিটি টেস্ট', labelEn: 'Quality Testing' },
    { key: 'ready', labelBn: 'ডেলিভারি প্রস্তুত', labelEn: 'Ready for Pickup' },
  ];

  const getStageIndex = (stage: RepairStage) => {
    switch (stage) {
      case 'received': return 0;
      case 'inspecting': return 1;
      case 'repairing': return 2;
      case 'testing': return 3;
      case 'ready':
      case 'delivered': return 4;
      default: return 0;
    }
  };

  const currentStageIndex = currentTicket ? getStageIndex(currentTicket.stage) : 0;

  return (
    <section id="tracker" className="py-16 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'bn' ? 'লাইভ জব স্ট্যাটাস' : 'Live Job Tracker'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {lang === 'bn' ? 'আপনার ফোনের কাজের অবস্থা জানুন' : 'Track Your Device Repair'}
          </h2>
          <p className="mt-2 text-stone-600 text-base">
            {lang === 'bn'
              ? 'মোবাইল হসপিটালে জমা দেওয়া স্লিপ নম্বর (যেমন: MH-8021) দিয়ে তাৎক্ষণিক লাইভ অগ্রগতি দেখুন।'
              : 'Enter your repair slip token number or the last 4 digits of your phone to check repair status.'}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'bn' ? 'স্লিপ নম্বর লিখুন (যেমন: MH-8021)...' : 'Enter Slip No (e.g. MH-8021)...'}
                className="w-full pl-11 pr-4 py-3 bg-white border border-stone-300 rounded-xl text-stone-900 font-medium placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-xs"
                id="tracker-input"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-stone-900 hover:bg-emerald-600 text-white font-semibold text-sm rounded-xl transition-colors shadow-xs active:scale-95 shrink-0"
              id="tracker-search-btn"
            >
              {lang === 'bn' ? 'স্ট্যাটাস খুঁজুন' : 'Track'}
            </button>
          </form>

          {/* Sample Token Helper Chips */}
          <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-stone-500">
            <span>{lang === 'bn' ? 'নমুনা স্লিপ দেখুন:' : 'Try sample slips:'}</span>
            {INITIAL_TICKETS.map((t) => (
              <button
                key={t.ticketId}
                type="button"
                onClick={() => {
                  setSearchQuery(t.ticketId);
                  setCurrentTicket(t);
                  setErrorMsg('');
                }}
                className={`px-2.5 py-1 rounded-lg border text-xs font-mono transition-colors ${
                  currentTicket?.ticketId === t.ticketId
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-white border-stone-200 text-stone-700 hover:border-emerald-500'
                }`}
              >
                {t.ticketId} ({t.stage})
              </button>
            ))}
          </div>

          {errorMsg && (
            <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
              <span>{errorMsg}</span>
            </div>
          )}
        </div>

        {/* Current Ticket Result Box */}
        {currentTicket && (
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
            
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-stone-100">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-stone-500 block">
                  {lang === 'bn' ? 'রিপেয়ার স্লিপ নং' : 'Repair Job ID'}
                </span>
                <div className="text-xl sm:text-2xl font-mono font-extrabold text-stone-900">
                  {currentTicket.ticketId}
                </div>
              </div>

              <div className="text-right">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                  currentTicket.stage === 'ready' 
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-900'
                }`}>
                  <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                  {currentTicket.stage === 'ready' 
                    ? (lang === 'bn' ? 'ডেলিভারির জন্য প্রস্তুত!' : 'Ready for Pickup!')
                    : (lang === 'bn' ? 'মেরামত প্রক্রিয়াধীন' : 'In Progress')}
                </span>
                <span className="text-xs text-stone-400 block mt-1">
                  {lang === 'bn' ? currentTicket.receivedDateBn : currentTicket.receivedDateEn}
                </span>
              </div>
            </div>

            {/* Device & Issue Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 p-4 rounded-2xl bg-stone-50 border border-stone-200/60 text-sm">
              <div>
                <span className="text-xs text-stone-500 block">{lang === 'bn' ? 'গ্রাহকের নাম:' : 'Customer:'}</span>
                <span className="font-semibold text-stone-900">{currentTicket.customerName}</span>
              </div>
              <div>
                <span className="text-xs text-stone-500 block">{lang === 'bn' ? 'ডিভাইসের মডেল:' : 'Device Model:'}</span>
                <span className="font-semibold text-stone-900">{currentTicket.device}</span>
              </div>
              <div>
                <span className="text-xs text-stone-500 block">{lang === 'bn' ? 'সমস্যা / সেবা:' : 'Defect / Service:'}</span>
                <span className="font-semibold text-stone-900">
                  {lang === 'bn' ? currentTicket.issueBn : currentTicket.issueEn}
                </span>
              </div>
              <div>
                <span className="text-xs text-stone-500 block">{lang === 'bn' ? 'কোয়ালিটি নিশ্চয়তা:' : 'Assurance:'}</span>
                <span className="font-bold text-emerald-700">{lang === 'bn' ? '১০০% অরিজিনাল ও ওয়ারেন্টিযুক্ত' : '100% Genuine with Warranty'}</span>
              </div>
            </div>

            {/* Stepper Progress Bar */}
            <div className="my-8">
              <div className="relative">
                {/* Connecting horizontal line */}
                <div className="absolute top-4 left-4 right-4 h-1 bg-stone-200 -z-0">
                  <div 
                    className="h-full bg-emerald-600 transition-all duration-500"
                    style={{ width: `${(currentStageIndex / (stages.length - 1)) * 100}%` }}
                  />
                </div>

                {/* Steps */}
                <div className="relative z-10 flex justify-between items-start">
                  {stages.map((stage, idx) => {
                    const isCompleted = idx < currentStageIndex;
                    const isCurrent = idx === currentStageIndex;

                    return (
                      <div key={stage.key} className="flex flex-col items-center text-center max-w-[70px] sm:max-w-[100px]">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                          isCompleted
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : isCurrent
                            ? 'bg-stone-900 text-white ring-4 ring-emerald-100'
                            : 'bg-stone-200 text-stone-500'
                        }`}>
                          {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                        </div>
                        <span className={`text-[11px] sm:text-xs mt-2 leading-tight ${
                          isCurrent ? 'font-bold text-stone-900' : 'text-stone-500'
                        }`}>
                          {lang === 'bn' ? stage.labelBn : stage.labelEn}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Technician Note */}
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Wrench className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-emerald-950 block mb-0.5">
                    {lang === 'bn' ? 'টেকনিশিয়ান আপডেট ও নোট:' : 'Technician Note:'}
                  </span>
                  <p className="text-emerald-900">
                    {lang === 'bn' ? currentTicket.technicianNoteBn : currentTicket.technicianNoteEn}
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
