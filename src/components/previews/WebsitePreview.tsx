'use client';

import { motion } from 'framer-motion';
import { BusinessTypeInfo } from '@/types/business';

interface WebsitePreviewProps {
  businessName: string;
  businessType: BusinessTypeInfo;
  showQuoteButton?: boolean;
  showChatWidget?: boolean;
}

export function WebsitePreview({
  businessName,
  businessType,
  showQuoteButton = true,
  showChatWidget = true,
}: WebsitePreviewProps) {
  return (
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
            <span className="text-white/50 text-sm">
              www.{businessName.toLowerCase().replace(/\s+/g, '')}.com
            </span>
          </div>
        </div>
      </div>

      {/* Website content */}
      <div
        className="p-6 space-y-6 min-h-[350px] relative"
        style={{ backgroundColor: businessType.color + '10' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{businessType.icon}</span>
            <span className="text-white font-bold">{businessName}</span>
          </div>
          {showQuoteButton && (
            <button
              className="px-4 py-2 rounded-lg text-white text-sm font-semibold"
              style={{ backgroundColor: businessType.color }}
            >
              Get Quote
            </button>
          )}
        </div>

        {/* Hero */}
        <div className="text-center py-6">
          <h2 className="text-xl font-bold text-white mb-2">
            {businessType.name} Services You Can Trust
          </h2>
          <p className="text-white/60 text-sm mb-4">
            Professional service • Fair pricing • 24/7 availability
          </p>
          <button
            className="px-6 py-3 rounded-xl text-white font-bold"
            style={{ backgroundColor: businessType.color }}
          >
            Get Instant Quote
          </button>
        </div>

        {/* Services */}
        <div className="flex flex-wrap justify-center gap-2">
          {businessType.commonServices.slice(0, 3).map((service) => (
            <span
              key={service}
              className="px-3 py-1 rounded-full text-sm"
              style={{
                backgroundColor: businessType.color + '20',
                color: businessType.color,
              }}
            >
              {service}
            </span>
          ))}
        </div>

        {/* Chat widget */}
        {showChatWidget && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-4 right-4"
          >
            <div
              className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
              style={{ backgroundColor: businessType.color }}
            >
              <svg
                className="w-7 h-7 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
