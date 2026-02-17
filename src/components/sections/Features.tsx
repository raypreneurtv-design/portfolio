'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { features } from '@/lib/constants/features';

const iconMap: Record<string, React.ReactNode> = {
  calculator: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="10" y2="10" />
      <line x1="12" y1="10" x2="14" y2="10" />
      <line x1="16" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="10" y2="14" />
      <line x1="12" y1="14" x2="14" y2="14" />
      <line x1="16" y1="14" x2="16" y2="18" />
      <line x1="8" y1="18" x2="10" y2="18" />
      <line x1="12" y1="18" x2="14" y2="18" />
    </svg>
  ),
  phone: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  chat: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

interface FeatureCardProps {
  feature: typeof features[0];
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function FeatureCard({ feature, index, isHovered, onHover, onLeave }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 + index * 0.15 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`rounded-3xl p-8 transition-all duration-300 cursor-pointer h-full ${
        isHovered
          ? 'bg-[#00a8ff] text-white'
          : 'bg-white/5 border border-white/10 text-white'
      }`}
    >
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
          isHovered ? 'bg-white/20' : 'bg-[#00a8ff]/20'
        }`}
      >
        <div className={isHovered ? 'text-white' : 'text-[#00a8ff]'}>
          {iconMap[feature.icon]}
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>

      <p className={`mb-6 leading-relaxed ${isHovered ? 'text-white/90' : 'text-white/60'}`}>
        {feature.description}
      </p>

      <ul className="space-y-3 mb-6">
        {feature.subFeatures.map((subFeature, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center ${
                isHovered ? 'bg-white/20' : 'bg-[#00a8ff]/20'
              }`}
            >
              <svg
                className={`w-3 h-3 ${isHovered ? 'text-white' : 'text-[#00a8ff]'}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className={`text-sm ${isHovered ? 'text-white/90' : 'text-white/70'}`}>
              {subFeature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={feature.ctaLink}
        className={`flex items-center gap-2 font-semibold ${
          isHovered ? 'text-white' : 'text-[#00a8ff]'
        }`}
      >
        {feature.ctaText}
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section id="features" className="py-32 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-[#001020] via-black to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" size="lg" className="mb-6">
            FEATURES
          </Badge>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Everything You Need to{' '}
            <span className="font-bold">Capture More Leads</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Powerful AI tools designed specifically for home service businesses. No tech skills required.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white/50 mb-4">Not sure which tools you need?</p>
          <a
            href="/quote"
            className="inline-flex items-center gap-2 text-[#00a8ff] font-semibold hover:underline"
          >
            Get a free recommendation based on your business
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
