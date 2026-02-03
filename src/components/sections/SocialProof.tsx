'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/Badge';
import { metrics, problemSolutions } from '@/lib/constants/testimonials';

export default function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="proof" className="py-32 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#000810] to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" size="lg" className="mb-6">
            PROBLEM & SOLUTION
          </Badge>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Built for <span className="font-bold">Home Service Pros</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            We solve the biggest challenges keeping you from growing your business.
          </p>
        </motion.div>

        {/* Metrics banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#00a8ff]/10 to-[#00ff87]/10 border border-[#00a8ff]/20"
            >
              <span className="text-4xl md:text-5xl font-bold text-white block mb-2">
                {metric.value}
              </span>
              <span className="text-white/50 text-sm">{metric.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Problem & Solution Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {problemSolutions.map((item, index) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.15 }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 border border-white/10 hover:border-[#00a8ff]/30 transition-all group"
            >
              {/* Icon */}
              <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-[#ff4757]/20 to-[#ff6b81]/10 border border-[#ff4757]/20 flex items-center justify-center group-hover:from-[#00a8ff]/20 group-hover:to-[#00ff87]/10 group-hover:border-[#00a8ff]/20 transition-all">
                <span className="text-2xl">{item.icon}</span>
              </div>

              {/* Problem */}
              <div className="mb-6">
                <Badge variant="secondary" size="sm" className="mb-3 bg-[#ff4757]/10 text-[#ff6b81] border-[#ff4757]/20">
                  THE PROBLEM
                </Badge>
                <h3 className="text-xl font-bold text-white mb-2">{item.problem}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.problemDetail}</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

              {/* Solution */}
              <div>
                <Badge variant="primary" size="sm" className="mb-3">
                  THE SOLUTION
                </Badge>
                <h4 className="text-lg font-semibold text-[#00ff87] mb-2">{item.solution}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{item.solutionDetail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
