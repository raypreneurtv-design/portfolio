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
          Private, local AI for your business
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="io-h1"
        >
          Private AI, installed and trained, living in your own systems
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="io-sub"
        >
          It&apos;s your private AI, on your own hardware, with your data staying put. If you
          want help getting it set up and your team trained, that&apos;s where I come in.
          Remote or on-site.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="io-cta-row"
        >
          <a href="https://cal.com/ray-ndaula/30min" className="io-btn io-btn-primary">Book a call</a>
          <a href="/#features" className="io-btn io-btn-secondary">See what I build</a>
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
