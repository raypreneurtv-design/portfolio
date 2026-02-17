"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ChatMessage, QuoteData } from "@/types/quote";
import QuotePreview from "./QuotePreview";

interface StepOption {
  label: string;
  value: string;
}

interface Step {
  id: string;
  question: string;
  options: StepOption[];
}

const STEPS: Step[] = [
  {
    id: "service",
    question:
      "Hi! I'm your quote assistant. What HVAC service do you need?",
    options: [
      { label: "Replacement", value: "Replacement" },
      { label: "Repair", value: "Repair" },
      { label: "Maintenance", value: "Maintenance" },
      { label: "New Installation", value: "New Installation" },
    ],
  },
  {
    id: "system",
    question: "What type of system?",
    options: [
      { label: "Central AC", value: "Central AC" },
      { label: "Heat Pump", value: "Heat Pump" },
      { label: "Furnace", value: "Furnace" },
      { label: "Mini-Split / Ductless", value: "Mini-Split" },
    ],
  },
  {
    id: "size",
    question: "What's the approximate size of your home?",
    options: [
      { label: "Under 1,000 sq ft", value: "Under 1,000 sq ft" },
      { label: "1,000 - 1,500 sq ft", value: "1,000 - 1,500 sq ft" },
      { label: "1,500 - 2,500 sq ft", value: "1,500 - 2,500 sq ft" },
      { label: "2,500 - 3,500 sq ft", value: "2,500 - 3,500 sq ft" },
      { label: "3,500+ sq ft", value: "3,500+ sq ft" },
    ],
  },
  {
    id: "age",
    question: "How old is your current system?",
    options: [
      { label: "Less than 5 years", value: "Less than 5 years" },
      { label: "5 - 10 years", value: "5 - 10 years" },
      { label: "10 - 15 years", value: "10 - 15 years" },
      { label: "15+ years", value: "15+ years" },
      { label: "No existing system", value: "No existing system" },
    ],
  },
  {
    id: "urgency",
    question: "How urgent is this?",
    options: [
      { label: "Emergency (ASAP)", value: "Emergency" },
      { label: "This week", value: "This week" },
      { label: "This month", value: "This month" },
      { label: "Just exploring options", value: "Just exploring" },
    ],
  },
];

// ── Pricing logic ──────────────────────────────────────────────────

interface PriceRange {
  low: number;
  high: number;
}

const BASE_PRICES: Record<string, Record<string, PriceRange>> = {
  Replacement: {
    "Central AC": { low: 3500, high: 7500 },
    "Heat Pump": { low: 4500, high: 8500 },
    Furnace: { low: 2500, high: 6000 },
    "Mini-Split": { low: 3000, high: 5500 },
  },
  Repair: {
    "Central AC": { low: 150, high: 1200 },
    "Heat Pump": { low: 200, high: 1400 },
    Furnace: { low: 150, high: 1000 },
    "Mini-Split": { low: 200, high: 900 },
  },
  Maintenance: {
    "Central AC": { low: 80, high: 200 },
    "Heat Pump": { low: 100, high: 250 },
    Furnace: { low: 80, high: 200 },
    "Mini-Split": { low: 100, high: 220 },
  },
  "New Installation": {
    "Central AC": { low: 5000, high: 12000 },
    "Heat Pump": { low: 6000, high: 13000 },
    Furnace: { low: 4000, high: 9000 },
    "Mini-Split": { low: 4000, high: 8000 },
  },
};

const SIZE_MULTIPLIERS: Record<string, number> = {
  "Under 1,000 sq ft": 0.8,
  "1,000 - 1,500 sq ft": 0.9,
  "1,500 - 2,500 sq ft": 1.0,
  "2,500 - 3,500 sq ft": 1.15,
  "3,500+ sq ft": 1.35,
};

const URGENCY_MULTIPLIERS: Record<string, number> = {
  Emergency: 1.25,
  "This week": 1.1,
  "This month": 1.0,
  "Just exploring": 1.0,
};

function generateQuote(answers: Record<string, string>): QuoteData {
  const service = answers.service;
  const system = answers.system;
  const size = answers.size;
  const urgency = answers.urgency;

  const base = BASE_PRICES[service]?.[system] ?? { low: 3000, high: 7000 };
  const sizeMul = SIZE_MULTIPLIERS[size] ?? 1.0;
  const urgMul = URGENCY_MULTIPLIERS[urgency] ?? 1.0;

  const low = Math.round(base.low * sizeMul * urgMul / 100) * 100;
  const high = Math.round(base.high * sizeMul * urgMul / 100) * 100;

  const equipLow = Math.round(low * 0.6 / 100) * 100;
  const equipHigh = Math.round(high * 0.6 / 100) * 100;
  const laborLow = Math.round(low * 0.35 / 100) * 100;
  const laborHigh = Math.round(high * 0.35 / 100) * 100;
  const miscLow = low - equipLow - laborLow;
  const miscHigh = high - equipHigh - laborHigh;

  const fmt = (n: number) => `$${n.toLocaleString()}`;

  const isSmallJob = service === "Maintenance" || service === "Repair";
  const timeline = isSmallJob
    ? service === "Maintenance"
      ? "2 - 4 hours"
      : urgency === "Emergency"
        ? "Same day"
        : "1 - 3 days"
    : urgency === "Emergency"
      ? "1 - 2 days"
      : "2 - 5 days";

  const breakdown = isSmallJob
    ? [
        {
          item: service === "Maintenance" ? "Service Visit" : "Diagnostic & Repair",
          description: `Professional ${service.toLowerCase()} by certified technicians`,
          cost: `${fmt(laborLow)} - ${fmt(laborHigh)}`,
        },
        {
          item: "Parts & Materials",
          description: "Replacement parts if needed",
          cost: `${fmt(equipLow)} - ${fmt(equipHigh)}`,
        },
      ]
    : [
        {
          item: `${system} Unit`,
          description: `High-efficiency rated ${system.toLowerCase()} unit sized for ${size}`,
          cost: `${fmt(equipLow)} - ${fmt(equipHigh)}`,
        },
        {
          item: "Installation Labor",
          description: "Professional installation by certified technicians",
          cost: `${fmt(laborLow)} - ${fmt(laborHigh)}`,
        },
        {
          item: "Materials & Permits",
          description: "Refrigerant, fittings, permits, and inspection fees",
          cost: `${fmt(miscLow)} - ${fmt(miscHigh)}`,
        },
        {
          item: "Thermostat",
          description: "Smart thermostat upgrade included",
          cost: "$150 - $300",
        },
      ];

  return {
    serviceType: service,
    systemType: system,
    homeSize: size,
    location: "Your area",
    equipmentCost: `${fmt(equipLow)} - ${fmt(equipHigh)}`,
    laborCost: `${fmt(laborLow)} - ${fmt(laborHigh)}`,
    totalRange: `${fmt(low)} - ${fmt(high)}`,
    timeline,
    breakdown,
  };
}

// ── Component ──────────────────────────────────────────────────────

export default function QuoteChat() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: STEPS[0].question,
      timestamp: Date.now(),
    },
  ]);
  const [quote, setQuote] = useState<QuoteData | null>(null);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [pdfSent, setPdfSent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, showEmailForm, quote, scrollToBottom]);

  const handleSelect = (option: StepOption) => {
    const step = STEPS[currentStep];
    const newAnswers = { ...answers, [step.id]: option.value };
    setAnswers(newAnswers);

    // Add user "message"
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: option.label,
      timestamp: Date.now(),
    };

    const nextStep = currentStep + 1;

    if (nextStep < STEPS.length) {
      // Next question
      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: STEPS[nextStep].question,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, userMsg, assistantMsg]);
      setCurrentStep(nextStep);
    } else {
      // Generate quote
      const quoteData = generateQuote(newAnswers);
      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: `Great — here's your instant estimate for a ${newAnswers.system} ${newAnswers.service.toLowerCase()}. This is based on a ${newAnswers.size} home. Scroll down to see the full breakdown!`,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, userMsg, assistantMsg]);
      setQuote(quoteData);
    }
  };

  const handleRequestPdf = () => {
    setShowEmailForm(true);
  };

  const handleSendPdf = async () => {
    if (!email.trim() || !quote) return;

    setIsGeneratingPdf(true);
    try {
      const res = await fetch("/api/quote/pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quote, email: email.trim() }),
      });

      if (!res.ok) throw new Error("PDF generation failed");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "HVAC-Quote-InsightOperator.pdf";
      a.click();
      URL.revokeObjectURL(url);

      setPdfSent(true);
      console.log(`[Quote] Email captured: ${email.trim()}`);
    } catch (error) {
      console.error("PDF download failed:", error);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const resetConversation = () => {
    setCurrentStep(0);
    setAnswers({});
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content: STEPS[0].question,
        timestamp: Date.now(),
      },
    ]);
    setQuote(null);
    setShowEmailForm(false);
    setEmail("");
    setPdfSent(false);
  };

  const activeStep = currentStep < STEPS.length ? STEPS[currentStep] : null;

  return (
    <div className="flex flex-col h-full">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 md:px-6 py-6 space-y-4">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] md:max-w-[70%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-[#00a8ff] text-white rounded-br-sm"
                    : "bg-white/10 text-white/90 rounded-bl-sm border border-white/5"
                }`}
              >
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Quote Preview */}
        {quote && (
          <QuotePreview
            quote={quote}
            onRequestPdf={handleRequestPdf}
            isGeneratingPdf={isGeneratingPdf}
          />
        )}

        {/* Email Form */}
        {showEmailForm && !pdfSent && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg mx-auto"
          >
            <div className="rounded-2xl border border-[#00a8ff]/30 bg-[#0a1628]/90 backdrop-blur-xl p-6">
              <p className="text-sm text-white/70 mb-4">
                Enter your email to download the detailed PDF quote:
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00a8ff]/50 transition-colors"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSendPdf();
                  }}
                />
                <button
                  onClick={handleSendPdf}
                  disabled={!email.trim() || isGeneratingPdf}
                  className="btn-accent px-6 py-3 rounded-xl text-sm font-bold whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGeneratingPdf ? "..." : "Download"}
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* PDF Success */}
        {pdfSent && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg mx-auto"
          >
            <div className="rounded-2xl border border-green-500/30 bg-green-500/10 backdrop-blur-xl p-6 text-center">
              <p className="text-sm text-green-400 font-medium">
                Your quote PDF has been downloaded! A copy will also be sent to{" "}
                <span className="text-white">{email}</span>.
              </p>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Option Selector / Bottom Bar */}
      <div className="sticky bottom-0 border-t border-white/10 bg-black/80 backdrop-blur-xl px-4 md:px-6 py-4">
        <div className="max-w-3xl mx-auto">
          {activeStep && !quote ? (
            <div className="flex flex-wrap gap-2 items-center">
              <button
                onClick={resetConversation}
                className="shrink-0 text-xs text-white/30 hover:text-white/60 transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
                title="Start Over"
              >
                Start Over
              </button>
              <div className="flex flex-wrap gap-2 flex-1 justify-center">
                {activeStep.options.map((opt) => (
                  <motion.button
                    key={opt.value}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => handleSelect(opt)}
                    className="px-4 py-2.5 rounded-xl text-sm font-medium bg-white/5 border border-white/10 text-white/80 hover:bg-white/20 hover:border-white/30 hover:text-white active:bg-white/25 transition-all cursor-pointer"
                  >
                    {opt.label}
                  </motion.button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                onClick={resetConversation}
                className="text-sm text-white/40 hover:text-white/70 transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
              >
                Start Over
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
