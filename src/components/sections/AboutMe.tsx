'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/Badge';
import Image from 'next/image';

const trackRecord = [
  {
    year: '2020-2023',
    title: 'Plumbing Business Experience',
    description:
      'Worked in the field and saw firsthand how quoting bottlenecks and missed calls cost jobs. Learned exactly where home service businesses lose revenue.',
  },
  {
    year: '2023-2024',
    title: 'AI Chatbots & Receptionists',
    description:
      'Started deploying AI chatbots and AI receptionists for service businesses. Tested what actually converts leads vs. what just looks impressive.',
  },
  {
    year: '2025-Present',
    title: 'Automated Front Office Systems',
    description:
      'Building and refining automated instant quote and front office systems actively used by home service businesses. Real systems, real results.',
  },
];

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about-me" className="py-32 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#001020] to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="primary" size="lg" className="mb-6">
              ABOUT ME
            </Badge>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Built By Someone Who&apos;s{' '}
              <span className="font-bold text-[#00a8ff]">Actually Done It</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Photos */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              {/* Headshot */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  {/* Frame glow */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#00a8ff]/30 to-[#00ff87]/30 rounded-3xl blur-xl" />

                  {/* Photo frame */}
                  <div className="relative w-80 h-96 rounded-2xl border-4 border-[#00a8ff]/50 overflow-hidden bg-white/5 backdrop-blur-sm">
                    {/* Headshot image */}
                    <Image
                      src="/headshot.jpg"
                      alt="Founder headshot"
                      fill
                      className="object-cover object-top"
                      priority
                    />

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00ff87]" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00ff87]" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00ff87]" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00ff87]" />
                  </div>
                </div>
              </div>

              {/* Plumbing Experience Photo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="flex justify-center lg:justify-start"
              >
                <div className="relative">
                  <div className="relative w-80 rounded-2xl border-2 border-white/20 overflow-hidden bg-white/5 backdrop-blur-sm">
                    {/* Plumbing image */}
                    <div className="relative w-full h-48">
                      <Image
                        src="/plumbing-experience.png"
                        alt="Plumbing field experience"
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Caption */}
                    <div className="p-4 bg-black/60">
                      <p className="text-sm text-white/80 font-medium">In the Field</p>
                      <p className="text-xs text-white/50 mt-1">
                        2020-2023: Hands-on plumbing experience where I learned firsthand the pain points of quoting, scheduling, and missed calls.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Track Record */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
              >
                <span className="w-2 h-8 bg-[#00a8ff] rounded-full" />
                Track Record
              </motion.h3>

              <div className="space-y-6">
                {trackRecord.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.15 }}
                    className="relative pl-8 border-l-2 border-white/10 hover:border-[#00a8ff]/50 transition-colors"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#00a8ff] border-4 border-black" />

                    <span className="inline-block px-3 py-1 rounded-full bg-[#00a8ff]/20 text-[#00a8ff] text-sm font-semibold mb-2">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-white/60 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
