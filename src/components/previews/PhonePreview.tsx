'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BusinessTypeInfo } from '@/types/business';

interface PhonePreviewProps {
  businessName: string;
  businessType: BusinessTypeInfo;
}

export function PhonePreview({ businessName, businessType }: PhonePreviewProps) {
  const [isRinging, setIsRinging] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [callDuration, setCallDuration] = useState(0);

  const handleCall = () => {
    setIsRinging(true);
    setTimeout(() => {
      setIsRinging(false);
      setIsConnected(true);

      const interval = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(interval);
        setIsConnected(false);
        setCallDuration(0);
      }, 10000);
    }, 2000);
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-72 bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl">
      {/* Phone frame */}
      <div className="bg-black rounded-[2.5rem] overflow-hidden">
        {/* Notch */}
        <div className="h-8 bg-black flex justify-center items-end pb-1">
          <div className="w-24 h-5 bg-black rounded-b-xl" />
        </div>

        {/* Screen */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-[400px] p-6">
          {!isRinging && !isConnected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <div
                className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: businessType.color + '30' }}
              >
                <span className="text-4xl">{businessType.icon}</span>
              </div>
              <h3 className="text-white font-semibold mb-1">{businessName}</h3>
              <p className="text-gray-400 text-sm mb-8">AI Receptionist</p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCall}
                className="w-16 h-16 mx-auto rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30"
              >
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
              </motion.button>
              <p className="text-gray-500 text-xs mt-4">Tap to simulate call</p>
            </motion.div>
          )}

          {isRinging && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: businessType.color + '30' }}
              >
                <span className="text-4xl">{businessType.icon}</span>
              </motion.div>
              <h3 className="text-white font-semibold mb-1">{businessName}</h3>
              <p className="text-green-400 text-sm animate-pulse">Connecting...</p>
            </motion.div>
          )}

          {isConnected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <div
                className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: businessType.color }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                >
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  </svg>
                </motion.div>
              </div>
              <h3 className="text-white font-semibold mb-1">AI Receptionist</h3>
              <p className="text-green-400 text-lg font-mono mb-4">
                {formatDuration(callDuration)}
              </p>
              <div className="bg-gray-800 rounded-xl p-4 mb-4">
                <p className="text-white text-sm italic">
                  "Hi, thanks for calling {businessName}. How can I help you today?"
                </p>
              </div>
              <button
                onClick={() => {
                  setIsConnected(false);
                  setCallDuration(0);
                }}
                className="w-14 h-14 mx-auto rounded-full bg-red-500 flex items-center justify-center"
              >
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08a.956.956 0 01-.29-.7c0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28a11.27 11.27 0 00-2.67-1.85.996.996 0 01-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z" />
                </svg>
              </button>
            </motion.div>
          )}
        </div>

        {/* Home indicator */}
        <div className="h-8 bg-black flex justify-center items-center">
          <div className="w-32 h-1 bg-gray-600 rounded-full" />
        </div>
      </div>
    </div>
  );
}
