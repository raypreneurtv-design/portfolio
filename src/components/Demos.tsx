"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const demos = [
    {
        id: "chatbot",
        title: "AI Chatbot",
        subtitle: "Live Demo",
        description: "See how our chatbots qualify leads, answer questions, and book appointments 24/7.",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        preview: "chatbot",
    },
    {
        id: "voice",
        title: "AI Receptionist",
        subtitle: "Voice Preview",
        description: "Listen to how natural our AI voice agents sound when handling real calls.",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        preview: "voice",
    },
    {
        id: "workflow",
        title: "Agentic Workflows",
        subtitle: "See It Work",
        description: "Watch how we chain AI agents to automate entire business processes end-to-end.",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        preview: "workflow",
    },
];

const chatMessages = [
    { role: "bot", text: "Hey! Welcome to InsightOperator. What brings you here today?", delay: 0 },
    { role: "user", text: "I want to automate my customer support", delay: 1.5 },
    { role: "bot", text: "Great choice! Our AI chatbots handle 80% of support tickets automatically. What's your current monthly ticket volume?", delay: 3 },
    { role: "user", text: "Around 500-1000 tickets per month", delay: 5 },
    { role: "bot", text: "Perfect. At that volume, you could save 30+ hours/week. Want me to book a quick demo call to show you exactly how it works?", delay: 6.5 },
];

function ChatbotDemo() {
    const [visibleMessages, setVisibleMessages] = useState(0);

    useState(() => {
        const timer = setInterval(() => {
            setVisibleMessages(prev => {
                if (prev < chatMessages.length) return prev + 1;
                return prev;
            });
        }, 2000);
        return () => clearInterval(timer);
    });

    return (
        <div className="bg-[#0a0a1a] rounded-2xl p-4 h-[320px] flex flex-col">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#00a8ff] animate-pulse" />
                <span className="text-sm text-white/60">AI Assistant Online</span>
            </div>
            <div className="flex-1 overflow-hidden space-y-3">
                {chatMessages.slice(0, visibleMessages).map((msg, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                        <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${msg.role === "user"
                                ? "bg-[#00a8ff] text-white rounded-br-md"
                                : "bg-white/10 text-white/90 rounded-bl-md"
                            }`}>
                            {msg.text}
                        </div>
                    </motion.div>
                ))}
                {visibleMessages < chatMessages.length && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                    >
                        <div className="bg-white/10 px-4 py-2 rounded-2xl rounded-bl-md">
                            <div className="flex gap-1">
                                <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

function VoiceDemo() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        if (!isPlaying) {
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        setIsPlaying(false);
                        clearInterval(interval);
                        return 0;
                    }
                    return prev + 2;
                });
            }, 100);
        }
    };

    return (
        <div className="bg-[#0a0a1a] rounded-2xl p-6 h-[320px] flex flex-col justify-center">
            <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#00a8ff] to-[#6366f1] flex items-center justify-center">
                    <motion.div
                        animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ repeat: Infinity, duration: 0.5 }}
                    >
                        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                            <line x1="12" y1="19" x2="12" y2="23" />
                            <line x1="8" y1="23" x2="16" y2="23" />
                        </svg>
                    </motion.div>
                </div>
                <p className="text-white/60 text-sm mb-2">AI Receptionist Demo Call</p>
                <p className="text-white text-lg font-semibold">"Hi, thanks for calling Acme Corp..."</p>
            </div>

            <div className="space-y-4">
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-[#00a8ff] to-[#6366f1]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <button
                    onClick={togglePlay}
                    className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-white font-semibold flex items-center justify-center gap-2"
                >
                    {isPlaying ? (
                        <>
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <rect x="6" y="4" width="4" height="16" rx="1" />
                                <rect x="14" y="4" width="4" height="16" rx="1" />
                            </svg>
                            Pause
                        </>
                    ) : (
                        <>
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            Play Demo
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}

function WorkflowDemo() {
    return (
        <div className="bg-[#0a0a1a] rounded-2xl p-6 h-[320px] flex flex-col justify-center">
            <div className="relative">
                {/* Workflow nodes */}
                <div className="flex items-center justify-between mb-8">
                    {["Trigger", "AI Agent", "Decision", "Action"].map((step, idx) => (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative"
                        >
                            <motion.div
                                animate={{
                                    boxShadow: [
                                        "0 0 0 0 rgba(0, 168, 255, 0)",
                                        "0 0 0 10px rgba(0, 168, 255, 0.1)",
                                        "0 0 0 0 rgba(0, 168, 255, 0)",
                                    ],
                                }}
                                transition={{ repeat: Infinity, duration: 2, delay: idx * 0.5 }}
                                className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00a8ff]/20 to-[#6366f1]/20 border border-[#00a8ff]/30 flex items-center justify-center"
                            >
                                <span className="text-xs text-white/80 text-center leading-tight">{step}</span>
                            </motion.div>
                            {idx < 3 && (
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: idx * 0.2 + 0.3, duration: 0.3 }}
                                    className="absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-[#00a8ff] to-[#6366f1] origin-left"
                                    style={{ transform: "translateY(-50%)" }}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Description */}
                <div className="text-center">
                    <p className="text-white/60 text-sm mb-4">
                        Automated Lead Qualification Flow
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {["n8n", "Claude AI", "Slack", "HubSpot"].map((tool) => (
                            <span key={tool} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Live indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-6 flex items-center justify-center gap-2"
                >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-green-500 text-xs font-semibold">Running 24/7</span>
                </motion.div>
            </div>
        </div>
    );
}

export default function Demos() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeDemo, setActiveDemo] = useState("chatbot");

    return (
        <section id="demos" className="py-32 relative bg-black">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-black to-black" />

            <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#00a8ff] text-white text-xs font-bold tracking-wide mb-6">
                        LIVE DEMOS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                        See AI <span className="font-bold">In Action</span>
                    </h2>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto">
                        Don't just take our word for it. Experience the power of AI automation yourself.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Demo selector */}
                    <div className="space-y-4">
                        {demos.map((demo, index) => (
                            <motion.button
                                key={demo.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setActiveDemo(demo.id)}
                                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${activeDemo === demo.id
                                        ? "bg-gradient-to-r from-[#00a8ff]/20 to-[#6366f1]/20 border border-[#00a8ff]/40"
                                        : "bg-white/5 border border-white/10 hover:border-white/20"
                                    }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-xl transition-colors ${activeDemo === demo.id
                                            ? "bg-[#00a8ff] text-white"
                                            : "bg-white/10 text-white/60"
                                        }`}>
                                        {demo.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="text-lg font-bold text-white">{demo.title}</h3>
                                            <span className="px-2 py-0.5 rounded-full bg-[#00a8ff]/20 text-[#00a8ff] text-xs font-semibold">
                                                {demo.subtitle}
                                            </span>
                                        </div>
                                        <p className="text-white/50 text-sm">{demo.description}</p>
                                    </div>
                                    <svg
                                        className={`w-5 h-5 transition-transform ${activeDemo === demo.id ? "text-[#00a8ff] rotate-90" : "text-white/30"}`}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Demo preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 }}
                        className="sticky top-24"
                    >
                        {activeDemo === "chatbot" && <ChatbotDemo />}
                        {activeDemo === "voice" && <VoiceDemo />}
                        {activeDemo === "workflow" && <WorkflowDemo />}

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-4 w-full py-4 rounded-xl bg-gradient-to-r from-[#00a8ff] to-[#6366f1] text-white font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#00a8ff]/20 transition-all"
                        >
                            Get This For Your Business
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
