"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const trustedLogos = [
    { src: "/logos/excel.png", alt: "Excel" },
    { src: "/logos/googlesheets.svg", alt: "Google Sheets" },
    { src: "/logos/antigravity.svg", alt: "Antigravity" },
    { src: "/logos/claude.svg", alt: "Claude" },
    { src: "/logos/github.svg", alt: "GitHub" },
    { src: "/logos/gmail.svg", alt: "Gmail" },
    { src: "/logos/vscode.svg", alt: "Claude Code" },
    { src: "/logos/clawdbot.svg", alt: "Clawdbot" },
];

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col relative overflow-hidden starry-night">
            {/* Ambient glow effects */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00a8ff] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#6366f1] opacity-[0.06] blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00a8ff] opacity-[0.04] blur-[200px] rounded-full pointer-events-none" />

            {/* Background Logo with gradient fade */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                    className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
                    style={{
                        maskImage: 'radial-gradient(circle, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.06) 40%, transparent 70%)',
                        WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.06) 40%, transparent 70%)',
                    }}
                >
                    <Image
                        src="/logo-new.png"
                        alt=""
                        fill
                        className="object-contain opacity-60"
                        priority
                    />
                </div>
            </div>

            {/* Main content - centered with proper spacing */}
            <div className="flex-1 flex items-center justify-center relative z-10 pt-24">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    {/* Badge - hidden on mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00a8ff]/15 border border-[#00a8ff]/30 mb-10 backdrop-blur-sm"
                    >
                        <span className="text-sm font-semibold text-[#00a8ff] tracking-widest uppercase">
                            AI Transformation Partner
                        </span>
                    </motion.div>

                    {/* Main headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-8 text-white tracking-tight"
                    >
                        See What Others Miss{" "}
                        <br />
                        <span className="text-shimmer font-light">Automate What Matters</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        We deploy AI automation systems that replace repetitive work, accelerate your workflows, and multiply your team's output by 10x.
                    </motion.p>

                    {/* Single CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg border-2 border-white/20 text-white hover:border-[#00a8ff] hover:text-[#00a8ff] transition-all bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-[#00a8ff]/20"
                        >
                            Get started
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </motion.a>

                        {/* Community Links */}
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-white/40">Join our community:</span>
                            <a
                                href="https://discord.gg/Uag5CdJUwN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#5865F2]/20 border border-[#5865F2]/30 hover:bg-[#5865F2]/30 transition-all group backdrop-blur-sm"
                            >
                                <svg className="w-5 h-5 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.443.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                                </svg>
                                <span className="text-sm font-semibold text-[#5865F2]">Discord</span>
                            </a>
                            <a
                                href="https://www.skool.com/trendwheel-automations-5905"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00a8ff]/15 border border-[#00a8ff]/30 hover:bg-[#00a8ff]/25 transition-all group backdrop-blur-sm"
                            >
                                <span className="w-5 h-5 rounded bg-[#00a8ff] text-white text-xs font-bold flex items-center justify-center">sk</span>
                                <span className="text-sm font-semibold text-[#00a8ff]">Skool</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Tech Stack Section - transparent background */}
            <div className="pt-20 pb-24 relative z-10">
                <div className="text-center mb-12">
                    <span className="text-sm font-semibold tracking-[0.3em] text-white/40 uppercase">
                        BUILD BASED OFF YOUR PREFERRED TECH
                    </span>
                </div>

                {/* Marquee Animation */}
                <div className="relative overflow-visible py-4">
                    <div className="marquee-container">
                        <div className="marquee-content items-center">
                            {[...trustedLogos, ...trustedLogos, ...trustedLogos].map((logo, index) => (
                                <div key={index} className="mx-8 flex-shrink-0 group cursor-pointer">
                                    <div className="w-20 h-20 relative flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105">
                                        {/* Block Background */}
                                        <Image
                                            src="/tech-block.png"
                                            alt=""
                                            fill
                                            className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                        />
                                        {/* Icon */}
                                        <div className="relative z-10 w-9 h-9">
                                            <Image
                                                src={logo.src}
                                                alt={logo.alt}
                                                fill
                                                className="object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
