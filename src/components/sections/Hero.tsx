'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { TrustBadge } from '@/components/ui/Badge';
import { VideoPlayer } from '@/components/ui/VideoPlayer';

const trustIndicators = [
  { icon: '📈', text: '3x More Leads', subtext: 'Average Increase' },
  { icon: '✓', text: '30-Day Guarantee', subtext: 'Risk Free' },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden starry-night">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00a8ff] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00ff87] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />

      {/* Main content */}
      <div className="flex-1 flex items-center relative z-10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Copy */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-6 text-white tracking-tight"
              >
                We Automate{' '}
                <span className="text-shimmer font-semibold">90% of Your Manual Work</span>{' '}
                in 7 Days
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-white/60 mb-8 leading-relaxed"
              >
                Instant quotes, a 24/7 AI receptionist, and smart chat systems that respond to leads immediately, book jobs automatically, and handle customer inquiries so your business never misses a call or an opportunity.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-10"
              >
                <Button
                  variant="cta"
                  size="lg"
                  rightIcon={
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  }
                  onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Instant Quote
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  leftIcon={
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  }
                  onClick={() => window.location.href = '/demo'}
                >
                  See AI Demo
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                {trustIndicators.map((indicator, index) => (
                  <TrustBadge
                    key={index}
                    icon={<span className="text-lg">{indicator.icon}</span>}
                    text={indicator.text}
                    subtext={indicator.subtext}
                  />
                ))}
              </motion.div>
            </div>

            {/* Right side - VSL Video */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                {/* Glow behind video */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#00a8ff]/20 to-[#00ff87]/20 rounded-3xl blur-2xl" />

                <VideoPlayer
                  url={process.env.NEXT_PUBLIC_VSL_VIDEO_URL}
                  thumbnail="/vsl-thumbnail.jpg"
                  title="See How It Works"
                  className="relative z-10 shadow-2xl shadow-black/50"
                />
              </div>

              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#00ff87]/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#00ff87]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">95%</p>
                    <p className="text-sm text-white/50">Call Answer Rate</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#00a8ff]/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#00a8ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">200+</p>
                    <p className="text-sm text-white/50">Quotes Daily</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-sm">Scroll to explore</span>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
