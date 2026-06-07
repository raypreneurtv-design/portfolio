'use client';

import { motion } from 'framer-motion';
import DotGridBackground from '@/components/DotGridBackground';
import LogoMarquee from '@/components/LogoMarquee';

export default function Hero() {
  return (
    <section className="io-hero">
      <DotGridBackground />

      <div className="io-hero-inner">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="io-eyebrow"
        >
          AI systems for home-service businesses
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="io-h1"
        >
          Turn missed calls into booked jobs
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="io-sub"
        >
          An AI receptionist that answers every call, qualifies the lead, and books the job,
          24/7, so you never lose work to a missed call again.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="io-cta-row"
        >
          <a href="/quote" className="io-btn io-btn-primary">Get an instant quote</a>
          <a href="/demo" className="io-btn io-btn-secondary">See a live demo</a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="io-hero-marquee"
      >
        <p className="io-marquee-label">Runs on</p>
        <LogoMarquee />
      </motion.div>
    </section>
  );
}
