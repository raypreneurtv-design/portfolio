"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LeadGenerationPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#001020] via-black to-black" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00a8ff] opacity-[0.08] blur-[150px] rounded-full" />

                <div className="relative z-10 max-w-5xl mx-auto px-6">
                    <Link href="/" className="inline-flex items-center gap-2 text-[#00a8ff] mb-8 hover:underline">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-6xl mb-6 block">📈</span>
                        <h1 className="text-5xl md:text-6xl font-light mb-6">
                            Lead Generation
                        </h1>
                        <p className="text-xl text-[#00a8ff] font-semibold mb-4">
                            Tactics that actually convert
                        </p>
                        <p className="text-xl text-white/60 max-w-3xl leading-relaxed">
                            Proven strategies we've used to grow audiences and capture high-quality leads that turn into paying customers.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Video Section Placeholder */}
            <section className="py-20 bg-black/50">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center">See It In Action</h2>
                    <div className="aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                        <p className="text-white/40 text-lg">Video examples coming soon</p>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">What You Get</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: "Lead Magnets That Work", desc: "Create valuable resources that people actually want to download" },
                            { title: "Value Positioning", desc: "Messaging that cuts through the noise and resonates with your ideal customer" },
                            { title: "Marketing Automation", desc: "Nurture sequences that convert leads into sales on autopilot" },
                            { title: "YouTube & TikTok Growth", desc: "Platform-specific strategies to grow your audience organically" },
                        ].map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10"
                            >
                                <h3 className="text-xl font-bold mb-2 text-[#00a8ff]">{feature.title}</h3>
                                <p className="text-white/60">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-4">Ready to Generate More Leads?</h2>
                    <p className="text-white/60 mb-8">Let's build a lead generation system that works for your business.</p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg bg-[#00a8ff] text-white hover:bg-[#0077cc] transition-colors"
                    >
                        Get Started
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>
        </main>
    );
}
