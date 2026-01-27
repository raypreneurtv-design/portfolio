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
                            href="https://calendly.com/rayndaula/free-discovery-call"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg border-2 border-white/20 text-white hover:border-[#00a8ff] hover:text-[#00a8ff] transition-all bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-[#00a8ff]/20"
                        >
                            Get started
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </motion.a>

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
