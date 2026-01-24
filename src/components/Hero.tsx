"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const trustedLogos = [
    { src: "/evoqua.png", alt: "Evoqua Water Technologies" },
    { src: "/haartz.png", alt: "Haartz" },
    { src: "/sigcom.png", alt: "Sigcom" },
    { src: "/vti.png", alt: "VTI Vascular Technology" },
];

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col relative overflow-hidden bg-white">
            {/* Subtle grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle, #00a8ff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Blue accent glow - centered */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00a8ff] opacity-[0.06] blur-[200px] rounded-full" />

            {/* Background Logo with gradient fade */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                    className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
                    style={{
                        maskImage: 'radial-gradient(circle, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.08) 40%, transparent 70%)',
                        WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.08) 40%, transparent 70%)',
                    }}
                >
                    <Image
                        src="/logo-new.png"
                        alt=""
                        fill
                        className="object-contain"
                        style={{ opacity: 0.85 }}
                        priority
                    />
                </div>
            </div>

            {/* Main content - centered with proper spacing */}
            <div className="flex-1 flex items-center justify-center relative z-10">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    {/* Badge - hidden on mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00a8ff]/10 border border-[#00a8ff]/20 mb-10"
                    >
                        <span className="text-sm font-semibold text-[#00a8ff] tracking-widest uppercase">
                            AI Transformation Partner
                        </span>
                    </motion.div>

                    {/* Main headline - THIN FONT */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-8 text-black tracking-tight"
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
                        className="text-lg md:text-xl text-black/60 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        We deploy AI automation systems that replace repetitive work, accelerate your workflows, and multiply your team's output by 10x.
                    </motion.p>

                    {/* Single CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg border-2 border-black/20 text-black hover:border-[#00a8ff] hover:text-[#00a8ff] transition-all bg-white shadow-lg hover:shadow-xl"
                        >
                            Get started
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* Trusted By Section - Fixed position at bottom with proper spacing */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative z-10 bg-gradient-to-t from-gray-50 to-transparent pt-8 pb-8"
            >
                <div className="text-center mb-6">
                    <span className="text-xs font-semibold tracking-[0.2em] text-black/40 uppercase">
                        Trusted by forward-thinking teams
                    </span>
                </div>
                <div className="relative overflow-hidden">
                    <div className="marquee-container">
                        <div className="marquee-content items-center">
                            {[...trustedLogos, ...trustedLogos].map((logo, index) => (
                                <div key={index} className="mx-12 flex-shrink-0">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={120}
                                        height={50}
                                        className="object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
