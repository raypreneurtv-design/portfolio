'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BusinessTypeInfo } from '@/types/business';

interface ChatWidgetPreviewProps {
  businessName: string;
  businessType: BusinessTypeInfo;
  autoPlay?: boolean;
}

const defaultMessages = [
  { role: 'bot', text: "Hi! 👋 How can I help you today?", delay: 0 },
  { role: 'user', text: "I need a quote", delay: 2000 },
  { role: 'bot', text: "I'd be happy to help with that! What service are you interested in?", delay: 4000 },
];

export function ChatWidgetPreview({
  businessName,
  businessType,
  autoPlay = true,
}: ChatWidgetPreviewProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [visibleMessages, setVisibleMessages] = useState(autoPlay ? 0 : defaultMessages.length);

  useEffect(() => {
    if (!autoPlay) return;

    const timers: NodeJS.Timeout[] = [];

    defaultMessages.forEach((msg, index) => {
      const timer = setTimeout(() => {
        setVisibleMessages(index + 1);
      }, msg.delay);
      timers.push(timer);
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [autoPlay]);

  return (
    <div className="relative">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-80 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div
              className="px-4 py-3 flex items-center justify-between"
              style={{ backgroundColor: businessType.color }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-lg">{businessType.icon}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{businessName}</p>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-white/70 text-xs">Online now</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 h-64 overflow-y-auto bg-gray-50">
              <div className="space-y-3">
                {defaultMessages.slice(0, visibleMessages).map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                        msg.role === 'user'
                          ? 'rounded-br-md text-white'
                          : 'bg-white rounded-bl-md text-gray-800 shadow-sm'
                      }`}
                      style={msg.role === 'user' ? { backgroundColor: businessType.color } : {}}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {visibleMessages < defaultMessages.length && (
                  <div className="flex justify-start">
                    <div className="bg-white px-4 py-2 rounded-2xl rounded-bl-md shadow-sm">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-200 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:border-gray-300"
                  disabled
                />
                <button
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: businessType.color }}
                >
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button when closed */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
          style={{ backgroundColor: businessType.color }}
        >
          <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </motion.button>
      )}
    </div>
  );
}
