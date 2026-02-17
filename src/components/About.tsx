"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
    { number: "Feb 2024", label: "Building AI Automations" },
    { number: "30K+", label: "TikTok Followers (AI Content)" },
    { number: "5+", label: "Years Building Digital Solutions" },
];

const highlights = [
    "YouTube creator growth strategies that increased audience retention",
    "Proven lead magnets that actually convert",
    "Value positioning that cuts through market noise",
    "AI content systems we use ourselves (and teach in our guides)",
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-32 section-dark relative scanlines">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#001020] to-black" />

            <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    {/* Section header */}
                    <div className="text-center mb-20">
                        <p className="text-[#00a8ff] font-bold mb-4 tracking-widest uppercase text-sm">
                            The Team
                        </p>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                            Built By Someone Who's<br />
                            <span className="text-[#00a8ff]">Actually Done It</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Left - Story */}
                        <div>
                            <p className="text-xl text-white/80 mb-8 leading-relaxed">
                                We're a small team that's been deep in AI automation since <span className="text-[#00a8ff] font-semibold">February 2024</span>.
                                Not just experimenting—building real systems for real businesses.
                            </p>

                            <p className="text-lg text-white/60 mb-8 leading-relaxed">
                                With 5+ years of digital solutions and growth operations experience,
                                we've helped YouTube creators boost retention, built lead magnets that convert,
                                and positioned brands to stand out in crowded markets.
                            </p>

                            {/* Highlights */}
                            <div className="space-y-4">
                                {highlights.map((item, index) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-[#00a8ff] mt-2 flex-shrink-0" />
                                        <span className="text-white/70">{item}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* TikTok Proof Placeholder */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.8 }}
                                className="mt-12 glass-dark rounded-2xl p-6"
                            >
                                <p className="text-sm text-[#00a8ff] font-semibold mb-3">PROOF: TikTok Growth</p>
                                <div className="aspect-video bg-white/5 rounded-xl border border-dashed border-white/20 flex items-center justify-center">
                                    <div className="text-center">
                                        <p className="text-white/40 text-sm">[TikTok 30K+ Screenshot]</p>
                                        <p className="text-white/20 text-xs mt-1">Add your proof image here</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right - Stats */}
                        <div className="space-y-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, x: 40 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.2 + index * 0.15 }}
                                    className="glass-dark rounded-2xl p-8"
                                >
                                    <span className="text-4xl md:text-5xl font-black text-[#00a8ff] block mb-2">
                                        {stat.number}
                                    </span>
                                    <span className="text-white/60 text-lg">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
