'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { TrustBadge } from '@/components/ui/Badge';

const trustBadges = [
  { text: 'Your data stays yours', icon: '🔒' },
  { text: 'Remote or on-site', icon: '📍' },
  { text: 'No cloud lock-in', icon: '🔓' },
  { text: 'Free scoping call', icon: '📞' },
];

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-[#0a0a0b] to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/10 opacity-[0.1] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/10 opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
            Own your AI.{' '}
            <span className="font-bold">Don&apos;t rent it</span>.
          </h2>

          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Private AI set up on your own systems, your team trained to run it, and the automations that handle the busywork. Remote or on-site.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              variant="cta"
              size="lg"
              className="min-w-[200px]"
              rightIcon={
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              }
              onClick={() => window.location.href = 'mailto:hello@insightoperator.com'}
            >
              Book a call
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="min-w-[200px]"
              leftIcon={
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }
              onClick={() => window.location.href = '/#features'}
            >
              See what I build
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {trustBadges.map((badge, index) => (
              <TrustBadge
                key={index}
                icon={<span className="text-lg">{badge.icon}</span>}
                text={badge.text}
              />
            ))}
          </motion.div>

          {/* Bottom note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-12 text-white/40 text-sm"
          >
            Questions? Call us at{' '}
            <a href="tel:+1234567890" className="text-[#ffffff] hover:underline">
              (123) 456-7890
            </a>{' '}
            or{' '}
            <a href="mailto:hello@insightoperator.com" className="text-[#ffffff] hover:underline">
              hello@insightoperator.com
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
