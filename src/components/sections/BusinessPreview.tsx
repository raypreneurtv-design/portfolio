'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Select } from '@/components/ui/Select';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { businessTypes, getBusinessTypeById } from '@/lib/constants/businessTypes';

const businessTypeOptions = businessTypes.map((bt) => ({
  value: bt.id,
  label: `${bt.icon} ${bt.name}`,
}));

export default function BusinessPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [businessType, setBusinessType] = useState('hvac');
  const [businessName, setBusinessName] = useState('Your Business');

  const selectedBusiness = getBusinessTypeById(businessType);

  return (
    <section id="preview" className="py-32 relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#000815] to-black" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#00a8ff] opacity-[0.05] blur-[150px] rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#00ff87] opacity-[0.03] blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" size="lg" className="mb-6">
            LIVE PREVIEW
          </Badge>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            See How It Looks for{' '}
            <span className="font-bold">Your Business</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Customize and preview your lead capture tools in real-time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Customize Your Preview</h3>

              <div className="space-y-4">
                <Input
                  label="Business Name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Enter your business name"
                />

                <Select
                  label="Business Type"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  options={businessTypeOptions}
                />
              </div>
            </div>

            {/* Business info */}
            {selectedBusiness && (
              <motion.div
                key={selectedBusiness.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-[#00a8ff]/10 to-[#6366f1]/10 rounded-2xl p-6 border border-[#00a8ff]/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{selectedBusiness.icon}</span>
                  <div>
                    <h4 className="text-lg font-bold text-white">{selectedBusiness.name} Businesses</h4>
                    <p className="text-white/50 text-sm">Popular services you can quote</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedBusiness.commonServices.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            <Button
              variant="cta"
              size="lg"
              className="w-full"
              onClick={() => window.location.href = '/quote'}
            >
              Get This For Your Business
            </Button>
          </motion.div>

          {/* Right - Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            {/* Browser frame */}
            <div className="bg-[#1a1a2e] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Browser header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0d0d1a] border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/10 rounded-lg px-4 py-1.5 text-center">
                    <span className="text-white/50 text-sm">www.{businessName.toLowerCase().replace(/\s+/g, '')}.com</span>
                  </div>
                </div>
              </div>

              {/* Website preview */}
              <div className="p-6 space-y-6 min-h-[400px]" style={{ backgroundColor: selectedBusiness?.color + '10' }}>
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{selectedBusiness?.icon}</span>
                    <span className="text-white font-bold">{businessName}</span>
                  </div>
                  <button
                    className="px-4 py-2 rounded-lg text-white text-sm font-semibold"
                    style={{ backgroundColor: selectedBusiness?.color }}
                  >
                    Get Quote
                  </button>
                </div>

                {/* Hero */}
                <div className="text-center py-8">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {selectedBusiness?.name} Services You Can Trust
                  </h2>
                  <p className="text-white/60 text-sm mb-4">
                    Professional service • Fair pricing • 24/7 availability
                  </p>
                  <button
                    className="px-6 py-3 rounded-xl text-white font-bold"
                    style={{ backgroundColor: selectedBusiness?.color }}
                  >
                    Get Instant Quote
                  </button>
                </div>

                {/* Chat widget preview */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-4 right-4 w-72"
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div
                      className="px-4 py-3 flex items-center gap-3"
                      style={{ backgroundColor: selectedBusiness?.color }}
                    >
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{businessName}</p>
                        <p className="text-white/70 text-xs">Online now</p>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50">
                      <div className="bg-white rounded-xl p-3 shadow-sm mb-2">
                        <p className="text-gray-800 text-sm">
                          Hi! 👋 Need a quick quote? I can help you right now.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Type a message..."
                          className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-800"
                          disabled
                        />
                        <button
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: selectedBusiness?.color }}
                        >
                          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-4 left-4 bg-[#00ff87] text-black px-4 py-2 rounded-xl font-bold text-sm shadow-lg"
            >
              ✓ Works on any website
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
