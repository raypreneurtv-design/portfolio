'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteChat from '@/components/QuoteChat';
import QuoteForm from '@/components/forms/QuoteForm';

export default function QuotePage() {
  const [activeTab, setActiveTab] = useState<'instant' | 'custom'>('instant');

  return (
    <main className="overflow-x-hidden">
      <Header />

      <section className="min-h-screen pt-28 pb-20 relative starry-night">
        {/* Background effects */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00a8ff] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00ff87] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00a8ff]/20 text-[#00a8ff] text-xs font-bold tracking-wide mb-6">
              FREE QUOTE
            </span>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
              Get Your <span className="font-bold">Free Estimate</span>
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Try our instant HVAC quote tool or request a custom quote for any service.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white/5 border border-white/10 rounded-2xl p-1.5">
              <button
                onClick={() => setActiveTab('instant')}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'instant'
                    ? 'bg-[#00a8ff] text-white shadow-lg shadow-[#00a8ff]/20'
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                Instant HVAC Quote
              </button>
              <button
                onClick={() => setActiveTab('custom')}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'custom'
                    ? 'bg-[#00a8ff] text-white shadow-lg shadow-[#00a8ff]/20'
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                Custom Quote Request
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'instant' ? (
              <motion.div
                key="instant"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                id="instant-quote"
              >
                {/* Instant quote agent */}
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
                  {/* Agent header */}
                  <div className="px-6 py-4 border-b border-white/5 flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#00ff87] animate-pulse" />
                    <div>
                      <p className="text-sm font-semibold text-white">HVAC Quote Agent</p>
                      <p className="text-xs text-white/40">Answer a few questions for an instant estimate</p>
                    </div>
                  </div>

                  {/* Chat interface */}
                  <div className="h-[520px] flex flex-col">
                    <QuoteChat />
                  </div>
                </div>

                {/* Instant quote trust note */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#00ff87]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                    <span>Results in under 2 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#00ff87]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>No account needed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#00ff87]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Download PDF quote</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="custom"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                id="quote-form"
              >
                {/* Custom quote form */}
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
                  <QuoteForm />
                </div>

                {/* Trust indicators */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#00ff87]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span>Your data is secure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#00ff87]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#00ff87]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>No obligation</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}
