"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Proof() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="proof" className="py-32 relative bg-black">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#000810] to-black" />

            <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-[#00a8ff] font-bold mb-4 tracking-widest uppercase text-sm">
                        Proof
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Results Speak<br />
                        <span className="text-[#00a8ff]">Louder Than Promises</span>
                    </h2>
                </motion.div>

                {/* 3 Proof Image Blocks */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((num, index) => (
                        <motion.div
                            key={num}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + index * 0.15 }}
                            className="glass-dark rounded-3xl p-4 aspect-square flex items-center justify-center group hover:border-[#00a8ff]/40 transition-colors"
                        >
                            <div className="w-full h-full rounded-2xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center group-hover:border-[#00a8ff]/30 transition-colors">
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                    <span className="text-2xl text-white/20">{num}</span>
                                </div>
                                <p className="text-white/30 text-sm font-medium">Proof Image {num}</p>
                                <p className="text-white/15 text-xs mt-1">1:1 ratio recommended</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
