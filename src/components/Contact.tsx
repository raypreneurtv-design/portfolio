"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const benefits = [
    "Free 30-min strategy session",
    "Custom AI roadmap for your business",
    "ROI projection & timeline",
    "No obligations, just value",
];

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formState);
        setSubmitted(true);
    };

    return (
        <section id="contact" className="py-32 relative bg-black overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#001020] via-black to-black" />

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00a8ff] opacity-[0.05] blur-[120px] rounded-full" />
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#6366f1] opacity-[0.03] blur-[100px] rounded-full" />

            <div className="relative z-10 max-w-6xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00a8ff] to-[#6366f1] text-white text-xs font-bold tracking-wide mb-6">
                        LET'S BUILD
                    </span>
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                        Ready to <span className="font-bold">Transform?</span>
                    </h2>
                    <p className="text-xl text-white/50 max-w-xl mx-auto">
                        Book a free strategy call and get a custom AI roadmap for your business.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left - Benefits & Community */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                What You'll Get
                            </h3>
                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={benefit}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-[#00a8ff]/20 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-[#00a8ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className="text-white/70">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Community CTA */}
                        <div className="bg-gradient-to-br from-[#00a8ff]/10 to-[#6366f1]/10 rounded-2xl p-6 border border-[#00a8ff]/20">
                            <h4 className="text-lg font-bold text-white mb-2">
                                Not ready for a call?
                            </h4>
                            <p className="text-white/50 text-sm mb-4">
                                Join our free community and start learning today. Get access to resources, workshops, and direct support.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    href="https://discord.gg/Uag5CdJUwN"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#5865F2] text-white font-semibold hover:bg-[#4752c4] transition-colors text-sm"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.443.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                                    </svg>
                                    Join Discord
                                </a>
                                <a
                                    href="https://www.skool.com/trendwheel-automations-5905"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-colors text-sm"
                                >
                                    <span className="w-5 h-5 rounded bg-[#00a8ff] text-white text-xs font-bold flex items-center justify-center">sk</span>
                                    Join Skool
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 }}
                    >
                        {submitted ? (
                            <div className="glass-dark rounded-3xl p-8 md:p-12 text-center">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#00a8ff] to-[#6366f1] flex items-center justify-center">
                                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-white/60 mb-6">
                                    We'll get back to you within 24 hours. In the meantime, join our community to start learning.
                                </p>
                                <a
                                    href="https://discord.gg/Uag5CdJUwN"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#5865F2] text-white font-bold hover:bg-[#4752c4] transition-colors"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.443.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                                    </svg>
                                    Join the Community
                                </a>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="glass-dark rounded-3xl p-8 md:p-10 space-y-5"
                            >
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#00a8ff]/50 focus:outline-none focus:ring-2 focus:ring-[#00a8ff]/20 transition-all text-white placeholder:text-white/30 text-sm"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            value={formState.company}
                                            onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#00a8ff]/50 focus:outline-none focus:ring-2 focus:ring-[#00a8ff]/20 transition-all text-white placeholder:text-white/30 text-sm"
                                            placeholder="Your company"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#00a8ff]/50 focus:outline-none focus:ring-2 focus:ring-[#00a8ff]/20 transition-all text-white placeholder:text-white/30 text-sm"
                                        placeholder="you@email.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                                        What are you looking to automate?
                                    </label>
                                    <textarea
                                        id="message"
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#00a8ff]/50 focus:outline-none focus:ring-2 focus:ring-[#00a8ff]/20 transition-all text-white placeholder:text-white/30 resize-none text-sm"
                                        placeholder="Tell us about your business and what you'd like to automate..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00a8ff] to-[#6366f1] text-white font-bold text-lg hover:shadow-lg hover:shadow-[#00a8ff]/20 transition-all"
                                >
                                    Book Free Strategy Call
                                </motion.button>

                                <p className="text-center text-white/30 text-xs">
                                    No spam. We'll respond within 24 hours.
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
