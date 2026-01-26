"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formState);
    };

    return (
        <section id="contact" className="py-32 relative bg-black">
            <div className="absolute inset-0 bg-gradient-to-t from-[#001020] via-black to-black" />

            {/* Blue glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00a8ff] opacity-[0.05] blur-[120px] rounded-full" />

            <div className="relative z-10 max-w-4xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-[#00a8ff] font-bold mb-4 tracking-widest uppercase text-sm">
                        Let's Talk
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Ready to<br />
                        <span className="text-[#00a8ff]">Operate?</span>
                    </h2>
                    <p className="text-xl text-white/50 max-w-xl mx-auto">
                        Book a free consultation to see how AI automation can transform your business.
                    </p>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                    className="glass-dark rounded-3xl p-8 md:p-12 space-y-6"
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#00a8ff]/50 focus:outline-none focus:ring-2 focus:ring-[#00a8ff]/20 transition-all text-white placeholder:text-white/30"
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
                                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#00a8ff]/50 focus:outline-none focus:ring-2 focus:ring-[#00a8ff]/20 transition-all text-white placeholder:text-white/30"
                                placeholder="Your company"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#00a8ff]/50 focus:outline-none focus:ring-2 focus:ring-[#00a8ff]/20 transition-all text-white placeholder:text-white/30"
                            placeholder="you@email.com"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                            What do you need?
                        </label>
                        <textarea
                            id="message"
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            rows={5}
                            className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#00a8ff]/50 focus:outline-none focus:ring-2 focus:ring-[#00a8ff]/20 transition-all text-white placeholder:text-white/30 resize-none"
                            placeholder="Tell us about your project or challenge..."
                            required
                        />
                    </div>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full btn-accent py-5 rounded-xl font-bold text-lg"
                    >
                        Start the Conversation
                    </motion.button>
                </motion.form>

                {/* Community Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-white/40 text-sm mb-4">Or join our community</p>
                    <div className="flex items-center justify-center gap-4">
                        <a
                            href="https://discord.gg/Uag5CdJUwN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#5865F2]/10 border border-[#5865F2]/30 hover:bg-[#5865F2]/20 transition-all group"
                        >
                            <svg className="w-6 h-6 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.443.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                            </svg>
                            <span className="font-semibold text-[#5865F2]">Discord</span>
                        </a>
                        <a
                            href="https://www.skool.com/trendwheel-automations-5905"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#00a8ff]/10 border border-[#00a8ff]/30 hover:bg-[#00a8ff]/20 transition-all group"
                        >
                            <span className="w-6 h-6 rounded bg-[#00a8ff] text-white text-sm font-bold flex items-center justify-center">sk</span>
                            <span className="font-semibold text-[#00a8ff]">Skool</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
