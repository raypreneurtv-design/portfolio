"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteChat from "@/components/QuoteChat";

export default function QuotePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />

      {/* Main chat area - offset for fixed header */}
      <main className="flex-1 flex flex-col pt-20">
        {/* Page title bar */}
        <div className="border-b border-white/5 px-6 py-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-lg font-bold text-white">
              Instant HVAC Quote
            </h1>
            <p className="text-sm text-white/40">
              Get a free AI-powered estimate in under 2 minutes
            </p>
          </div>
        </div>

        {/* Chat interface fills remaining space */}
        <div className="flex-1 flex flex-col max-w-3xl w-full mx-auto">
          <QuoteChat />
        </div>
      </main>

      <Footer />
    </div>
  );
}
