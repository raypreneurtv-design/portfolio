'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/Badge';

const steps = [
  {
    num: '01',
    title: 'Choose Your Tools',
    description:
      'Tell us about your business and which tools you need—instant quotes, AI receptionist, chat widget, or all three.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'We Build & Integrate',
    description:
      'Our team customizes everything for your services, pricing, and brand. We handle the tech—you focus on your business.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Start Converting Leads',
    description:
      'Go live and watch leads roll in. Get real-time notifications, detailed analytics, and ongoing optimization support.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="py-32 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#000810] to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge variant="primary" size="lg" className="mb-6">
            HOW IT WORKS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Live in <span className="font-bold">3 Simple Steps</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            We make it easy to get started. No technical knowledge required.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00a8ff]/30 to-transparent -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Step card */}
                <div className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#00a8ff]/30 transition-all group">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-6xl font-bold text-white/10 group-hover:text-[#00a8ff]/20 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-14 h-14 rounded-xl bg-[#00a8ff]/20 flex items-center justify-center text-[#00a8ff] group-hover:bg-[#00a8ff] group-hover:text-white transition-all">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00a8ff] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-white/60 leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow connector (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className="w-12 h-12 rounded-full bg-[#00a8ff] flex items-center justify-center"
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#00a8ff]/10 to-[#00ff87]/10 border border-[#00a8ff]/20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#00ff87] animate-pulse" />
              <span className="text-white font-semibold">Most businesses go live within 1-2 weeks</span>
            </div>
            <a
              href="/quote"
              className="px-6 py-2 rounded-xl bg-[#00ff87] text-black font-bold hover:bg-[#00e077] transition-colors"
            >
              Get Started Free
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
