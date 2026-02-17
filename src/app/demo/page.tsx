'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { businessTypeOptions } from '@/lib/constants/businessTypes';

const chatMessages = [
  { role: 'bot', text: "Hi! 👋 Welcome to Johnson's HVAC. I'm here to help. What can I assist you with today?" },
  { role: 'user', text: 'I need a quote for AC repair' },
  { role: 'bot', text: "I'd be happy to help with that! To give you an accurate quote, could you tell me what's happening with your AC? Is it not cooling, making noise, or something else?" },
  { role: 'user', text: "It's not cooling and making a weird noise" },
  { role: 'bot', text: "Thanks for the details. Based on what you've described, this sounds like it could be a compressor or fan motor issue. Our diagnostic fee is $89 which gets waived if you proceed with repairs. Would you like me to schedule a technician visit? I have availability tomorrow between 9-12pm or 2-5pm." },
];

export default function DemoPage() {
  const [activeDemo, setActiveDemo] = useState<'chat' | 'voice' | 'quote'>('chat');
  const [visibleMessages, setVisibleMessages] = useState(2);
  const [isPlaying, setIsPlaying] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChatContinue = () => {
    if (visibleMessages < chatMessages.length) {
      setVisibleMessages((prev) => prev + 1);
    }
  };

  return (
    <main className="overflow-x-hidden">
      <Header />

      <section className="min-h-screen pt-32 pb-20 relative starry-night">
        {/* Background effects */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00a8ff] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#6366f1] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge variant="primary" size="lg" className="mb-6">
              LIVE DEMO
            </Badge>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
              Experience <span className="font-bold">AI in Action</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              See how our AI tools work in real-time. Try the chat, listen to the voice AI, or generate an instant quote.
            </p>
          </motion.div>

          {/* Demo selector */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { id: 'chat', label: 'Chat Widget', icon: '💬' },
              { id: 'voice', label: 'AI Receptionist', icon: '📞' },
              { id: 'quote', label: 'Quote System', icon: '🧮' },
            ].map((demo) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(demo.id as 'chat' | 'voice' | 'quote')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeDemo === demo.id
                    ? 'bg-[#00a8ff] text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{demo.icon}</span>
                {demo.label}
              </button>
            ))}
          </div>

          {/* Demo content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Demo preview */}
            <motion.div
              key={activeDemo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10"
            >
              {activeDemo === 'chat' && (
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="w-10 h-10 rounded-full bg-[#00a8ff] flex items-center justify-center">
                      <span className="text-lg">❄️</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Johnson's HVAC</p>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#00ff87]" />
                        <span className="text-white/50 text-sm">AI Assistant Online</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 min-h-[300px]">
                    {chatMessages.slice(0, visibleMessages).map((msg, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[85%] px-4 py-3 rounded-2xl ${
                            msg.role === 'user'
                              ? 'bg-[#00a8ff] text-white rounded-br-md'
                              : 'bg-white/10 text-white/90 rounded-bl-md'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {visibleMessages < chatMessages.length && (
                    <button
                      onClick={handleChatContinue}
                      className="mt-4 w-full py-3 rounded-xl bg-[#00a8ff]/20 text-[#00a8ff] font-semibold hover:bg-[#00a8ff]/30 transition-colors"
                    >
                      Continue Conversation →
                    </button>
                  )}
                </div>
              )}

              {activeDemo === 'voice' && (
                <div className="text-center py-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#00a8ff] to-[#6366f1] flex items-center justify-center">
                    <motion.div
                      animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 0.5 }}
                    >
                      <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        <line x1="12" y1="19" x2="12" y2="23" />
                        <line x1="8" y1="23" x2="16" y2="23" />
                      </svg>
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">AI Receptionist Demo</h3>
                  <p className="text-white/60 mb-6">
                    "Hi, thanks for calling Johnson's HVAC. How can I help you today?"
                  </p>

                  <div className="space-y-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-full py-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-white font-semibold flex items-center justify-center gap-2"
                    >
                      {isPlaying ? (
                        <>
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="6" y="4" width="4" height="16" rx="1" />
                            <rect x="14" y="4" width="4" height="16" rx="1" />
                          </svg>
                          Pause Demo
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          Play Demo Call
                        </>
                      )}
                    </button>

                    <p className="text-white/40 text-sm">
                      Or call our demo line: <span className="text-[#00a8ff]">(555) 123-DEMO</span>
                    </p>
                  </div>
                </div>
              )}

              {activeDemo === 'quote' && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Instant Quote Demo</h3>

                  {!formSubmitted ? (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setFormSubmitted(true);
                      }}
                      className="space-y-4"
                    >
                      <Select
                        label="Service Type"
                        options={[
                          { value: 'ac-repair', label: 'AC Repair' },
                          { value: 'ac-install', label: 'AC Installation' },
                          { value: 'furnace-repair', label: 'Furnace Repair' },
                          { value: 'maintenance', label: 'Maintenance' },
                        ]}
                        required
                      />
                      <Input label="Zip Code" placeholder="Enter your zip code" required />
                      <Select
                        label="Home Size"
                        options={[
                          { value: 'small', label: 'Under 1,500 sq ft' },
                          { value: 'medium', label: '1,500 - 2,500 sq ft' },
                          { value: 'large', label: '2,500+ sq ft' },
                        ]}
                        required
                      />
                      <Button type="submit" variant="cta" className="w-full">
                        Get Instant Quote
                      </Button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#00ff87]/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-[#00ff87]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">Your Quote is Ready!</h4>
                      <p className="text-3xl font-black text-[#00ff87] mb-4">$89 - $249</p>
                      <p className="text-white/60 text-sm mb-6">
                        Diagnostic fee: $89 (waived with repair)
                        <br />
                        Estimated repair range based on common issues
                      </p>
                      <Button variant="primary" onClick={() => setFormSubmitted(false)}>
                        Try Another Quote
                      </Button>
                    </motion.div>
                  )}
                </div>
              )}
            </motion.div>

            {/* Right - Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#00a8ff]/10 to-[#6366f1]/10 rounded-2xl p-6 border border-[#00a8ff]/20">
                <h3 className="text-xl font-bold text-white mb-4">Why This Works</h3>
                <ul className="space-y-3">
                  {[
                    'Responds instantly—no waiting for callbacks',
                    'Available 24/7, even on holidays',
                    'Qualifies leads before they reach you',
                    'Books appointments directly to your calendar',
                    'Sounds natural, not robotic',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#00ff87]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#00ff87]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-white/60 mb-6">
                  Get a customized quote for your business. We'll set up everything and have you live in 1-2 weeks.
                </p>
                <Button
                  variant="cta"
                  className="w-full"
                  onClick={() => (window.location.href = '/quote')}
                >
                  Get Your Free Quote
                </Button>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-[#00a8ff]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#00a8ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Questions? Call us</p>
                  <p className="text-[#00a8ff]">(555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
