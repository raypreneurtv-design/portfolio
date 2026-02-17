"use client";

import { motion } from "framer-motion";
import type { QuoteData } from "@/types/quote";

interface QuotePreviewProps {
  quote: QuoteData;
  onRequestPdf: () => void;
  isGeneratingPdf: boolean;
}

export default function QuotePreview({
  quote,
  onRequestPdf,
  isGeneratingPdf,
}: QuotePreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto my-4"
    >
      <div className="rounded-2xl border border-[#00a8ff]/30 bg-[#0a1628]/90 backdrop-blur-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#00a8ff]/20 to-transparent px-6 py-4 border-b border-[#00a8ff]/20">
          <h3 className="text-lg font-bold text-white">Your HVAC Estimate</h3>
          <p className="text-sm text-white/50">
            {quote.serviceType} &middot; {quote.systemType}
          </p>
        </div>

        {/* Details */}
        <div className="px-6 py-4 space-y-2 border-b border-white/5">
          <div className="flex justify-between text-sm">
            <span className="text-white/50">Home Size</span>
            <span className="text-white">{quote.homeSize}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-white/50">Location</span>
            <span className="text-white">{quote.location}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-white/50">Timeline</span>
            <span className="text-white">{quote.timeline}</span>
          </div>
        </div>

        {/* Breakdown */}
        <div className="px-6 py-4 space-y-3 border-b border-white/5">
          <p className="text-xs font-semibold text-white/40 uppercase tracking-wider">
            Breakdown
          </p>
          {quote.breakdown.map((item, i) => (
            <div key={i} className="flex justify-between items-start gap-4">
              <div className="min-w-0">
                <p className="text-sm text-white truncate">{item.item}</p>
                <p className="text-xs text-white/40 truncate">
                  {item.description}
                </p>
              </div>
              <span className="text-sm text-[#00a8ff] font-medium whitespace-nowrap">
                {item.cost}
              </span>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="px-6 py-4 border-b border-white/5">
          <div className="flex justify-between items-center">
            <span className="text-base font-bold text-white">
              Total Estimate
            </span>
            <span className="text-xl font-black text-[#00a8ff]">
              {quote.totalRange}
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="px-6 py-4">
          <button
            onClick={onRequestPdf}
            disabled={isGeneratingPdf}
            className="w-full btn-accent py-3 rounded-xl text-sm font-bold transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGeneratingPdf ? "Generating PDF..." : "Send Quote to Email"}
          </button>
          <p className="text-xs text-white/30 text-center mt-2">
            AI-generated estimate for planning purposes
          </p>
        </div>
      </div>
    </motion.div>
  );
}
