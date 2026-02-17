'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface VideoPlayerProps {
  url?: string;
  thumbnail?: string;
  title?: string;
  autoPlay?: boolean;
  onPlay?: () => void;
  className?: string;
}

export function VideoPlayer({
  url,
  thumbnail,
  title = 'Watch Demo',
  autoPlay = false,
  onPlay,
  className = '',
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    onPlay?.();
  };

  const handleLoadedData = () => {
    setIsLoaded(true);
    if (autoPlay && videoRef.current) {
      videoRef.current.play();
    }
  };

  if (!url) {
    return (
      <div className={`relative aspect-video rounded-2xl overflow-hidden bg-[#0a0a1a] ${className}`}>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00a8ff] to-[#6366f1] flex items-center justify-center mb-4">
            <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="text-white/60 text-sm">Video coming soon</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative aspect-video rounded-2xl overflow-hidden bg-[#0a0a1a] ${className}`}>
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10"
          >
            {thumbnail && (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${thumbnail})` }}
              />
            )}
            <div className="absolute inset-0 bg-black/40" />
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex flex-col items-center justify-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00a8ff] to-[#6366f1] flex items-center justify-center shadow-2xl shadow-[#00a8ff]/30 group-hover:shadow-[#00a8ff]/50 transition-all"
              >
                <svg className="w-8 h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
              <span className="mt-4 text-white font-semibold text-lg">{title}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {isPlaying && (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a1a]">
              <div className="w-12 h-12 border-4 border-[#00a8ff] border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <video
            ref={videoRef}
            src={url}
            controls
            autoPlay
            onLoadedData={handleLoadedData}
            className={`w-full h-full object-cover transition-opacity ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </>
      )}
    </div>
  );
}
