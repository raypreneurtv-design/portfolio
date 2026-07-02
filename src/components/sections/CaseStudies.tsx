'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/Badge';

// The live portfolio lives in Notion and Ray keeps it current.
// TODO: swap this for the PUBLIC notion.site URL after publishing the
// "AI Implementation Portfolio" database to web (Notion: Share -> Publish).
const NOTION_PORTFOLIO_URL = 'https://www.notion.so/456888d77c63453aba6a93e320e46c4c';

const caseStudies = [
  {
    status: 'Shipped',
    title: 'Private AI on a normal PC',
    tags: ['Odysseus', 'Docker', 'Ollama', 'local model'],
    summary:
      'Set up a fully private AI on a regular 16GB Windows PC with no dedicated GPU. The model runs locally, so prompts and files never leave the machine. It answers with the internet switched off.',
  },
  {
    status: 'Runs daily',
    title: 'A private AI operating system',
    tags: ['Claude', 'Notion', 'n8n', 'memory'],
    summary:
      'I run my whole business on a private AI cockpit that knows my work, remembers across sessions, and handles the busywork instead of just chatting. When I set it up for a client, they get the same.',
  },
  {
    status: 'Built + tested',
    title: 'Speed-to-Lead automation',
    tags: ['n8n', 'Claude', 'webhooks'],
    summary:
      'The second a lead submits a form, AI qualifies it and fires an instant personalized reply with a booking link, logs it, and alerts the owner. A lead comes in at 11pm, the owner wakes up to a booked call.',
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="case-studies" className="py-32 relative bg-[#0a0a0b] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0b] to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Badge variant="primary" size="lg">
              CASE STUDIES
            </Badge>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/60">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Updated regularly
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Real systems I&apos;ve built,{' '}
            <span className="font-bold">not slides</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Each one is a working build I can walk you through. The full portfolio lives in my
            Notion and I keep it current.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs, index) => (
            <motion.a
              key={cs.title}
              href={NOTION_PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="group flex flex-col bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#ffffff]/30 hover:bg-white/[0.07] transition-all"
            >
              <div className="mb-5">
                <Badge variant="outline" size="sm">
                  {cs.status}
                </Badge>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ffffff] transition-colors">
                {cs.title}
              </h3>

              <p className="text-white/60 leading-relaxed mb-6 flex-1">{cs.summary}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-2 text-[#ffffff] font-semibold text-sm">
                Read the build
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </motion.a>
          ))}
        </div>

        {/* Full portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-14 text-center"
        >
          <a
            href={NOTION_PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ffffff] text-black font-bold hover:bg-white/90 transition-colors"
          >
            View the full portfolio
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
          <p className="mt-4 text-sm text-white/40">Kept up to date as I ship new builds.</p>
        </motion.div>
      </div>
    </section>
  );
}
