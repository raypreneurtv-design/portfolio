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
            </div>
        </section>
    );
}
