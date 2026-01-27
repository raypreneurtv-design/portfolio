"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const resources = [
    {
        title: "AI Automation Starter Kit",
        description: "Complete guide to building your first AI workflow. Includes templates, prompts, and step-by-step tutorials.",
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        tag: "FREE GUIDE",
        color: "from-[#00a8ff] to-[#0077cc]",
    },
    {
        title: "n8n Workflow Templates",
        description: "Pre-built automation workflows for lead gen, customer support, and data processing. Just import and go.",
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        tag: "TEMPLATES",
        color: "from-[#6366f1] to-[#4f46e5]",
    },
    {
        title: "AI Voice Agent Scripts",
        description: "Phone scripts and conversation flows for AI receptionists. Handle appointments, support, and sales calls.",
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        tag: "SCRIPTS",
        color: "from-[#f59e0b] to-[#d97706]",
    },
];

const communityPerks = [
    { icon: "🎓", text: "Weekly live workshops & Q&A" },
    { icon: "🤝", text: "Network with 500+ AI builders" },
    { icon: "🔧", text: "Early access to new tools" },
    { icon: "💬", text: "Direct help from the team" },
];

export default function FreeResources() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="resources" className="py-32 relative bg-black overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#000810] to-black" />

            {/* Decorative glow */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00a8ff] opacity-[0.03] blur-[150px] rounded-full -translate-x-1/2" />
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#6366f1] opacity-[0.03] blur-[150px] rounded-full translate-x-1/2" />

            <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00a8ff] to-[#6366f1] text-white text-xs font-bold tracking-wide mb-6">
                        FREE RESOURCES
                    </span>
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                        Level Up <span className="font-bold">For Free</span>
                    </h2>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto mb-10">
                        Join our community and get instant access to guides, templates, and tools we use to build AI systems.
                    </p>

                    {/* Workflow Animation Video */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#00a8ff]/10 border border-white/10">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto"
                            >
                                <source src="/level-up-video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Resources Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {resources.map((resource, index) => (
                        <motion.div
                            key={resource.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00a8ff]/40 transition-all overflow-hidden"
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

                            <div className="relative z-10 flex items-start gap-4">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${resource.color} text-white flex-shrink-0`}>
                                    {resource.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold bg-gradient-to-r ${resource.color} text-white`}>
                                            {resource.tag}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00a8ff] transition-colors">
                                        {resource.title}
                                    </h3>
                                    <p className="text-white/50 text-sm leading-relaxed">
                                        {resource.description}
                                    </p>
                                </div>
                                <div className="flex-shrink-0 self-center">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#00a8ff]/20 transition-colors">
                                        <svg className="w-4 h-4 text-white/40 group-hover:text-[#00a8ff] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Community CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    className="relative rounded-3xl overflow-hidden"
                >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00a8ff]/20 via-[#6366f1]/20 to-[#00a8ff]/20" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

                    <div className="relative z-10 p-8 md:p-12">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Unlock All Resources
                                </h3>
                                <p className="text-white/60 text-lg mb-6">
                                    Join 500+ AI builders in our free community. Get instant access to all resources, live workshops, and direct support.
                                </p>

                                {/* Perks */}
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {communityPerks.map((perk) => (
                                        <div key={perk.text} className="flex items-center gap-2">
                                            <span className="text-lg">{perk.icon}</span>
                                            <span className="text-white/70 text-sm">{perk.text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <motion.a
                                        href="https://discord.gg/Uag5CdJUwN"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#5865F2] text-white font-bold hover:bg-[#4752c4] transition-colors"
                                    >
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.443.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                                        </svg>
                                        Join Discord (Free)
                                    </motion.a>
                                    <motion.a
                                        href="https://www.skool.com/trendwheel-automations-5905"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-colors"
                                    >
                                        <span className="w-6 h-6 rounded bg-[#00a8ff] text-white text-sm font-bold flex items-center justify-center">sk</span>
                                        Join Skool Community
                                    </motion.a>
                                </div>
                            </div>

                            {/* Visual element */}
                            <div className="hidden lg:block">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#00a8ff] to-[#6366f1] blur-3xl opacity-20" />
                                    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="flex -space-x-2">
                                                {[...Array(4)].map((_, i) => (
                                                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00a8ff] to-[#6366f1] border-2 border-black flex items-center justify-center text-xs text-white font-bold">
                                                        {String.fromCharCode(65 + i)}
                                                    </div>
                                                ))}
                                            </div>
                                            <span className="text-white/60 text-sm">+500 members</span>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-sm">
                                                <span className="w-2 h-2 rounded-full bg-green-500" />
                                                <span className="text-white/70">Live workshop in 2 hours</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <span className="w-2 h-2 rounded-full bg-[#00a8ff]" />
                                                <span className="text-white/70">New template dropped today</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <span className="w-2 h-2 rounded-full bg-[#6366f1]" />
                                                <span className="text-white/70">47 questions answered today</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
