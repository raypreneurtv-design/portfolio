"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

// Three main service offerings
const services = [
    {
        icon: "🚀",
        title: "Transformation",
        description: "Complete AI infrastructure overhaul. We audit your operations, identify automation opportunities, and transform your business end-to-end.",
        href: "/services/ai-receptionist",
    },
    {
        icon: "⚙️",
        title: "Engineering",
        description: "Custom AI systems built for your stack. Voice agents, chatbots, workflow automations, and integrations—production-ready.",
        href: "/services/lead-generation",
    },
    {
        icon: "🎯",
        title: "AI Consulting",
        description: "Strategic guidance and hands-on training. Workshops, playbooks, and implementation support to build your AI capability.",
        href: "/services/consultation",
    },
];

// Core solutions grid
const solutions = [
    {
        icon: "📞",
        title: "Voice Agents",
        description: "Handle inbound & outbound calls 24/7 with human-like AI.",
    },
    {
        icon: "💬",
        title: "Chat Agents",
        description: "Intelligent web & WhatsApp bots that qualify and book.",
    },
    {
        icon: "⚙️",
        title: "Custom Automations",
        description: "Tailored backend workflows that save hours daily.",
    },
    {
        icon: "🏢",
        title: "Enterprise Consulting",
        description: "Strategy + integration to scale AI across the org.",
    },
];

// Process steps
const processSteps = [
    {
        num: "01",
        title: "Discovery",
        description: "We uncover opportunities and align goals to build the right AI roadmap.",
    },
    {
        num: "02",
        title: "Design",
        description: "We map workflows and design the blueprint that powers your success.",
    },
    {
        num: "03",
        title: "Build",
        description: "We execute the build and integrate AI seamlessly into operations.",
    },
    {
        num: "04",
        title: "Evolve",
        description: "We monitor, optimize, and evolve your AI as your business grows.",
    },
];

// Stats
const stats = [
    { value: "12+", label: "Months Delivering Agentic AI" },
    { value: "15+", label: "Projects Completed" },
    { value: "$100K+", label: "Avg. ROI in First Year" },
    { value: "20+", label: "Avg. Hours/Week Saved" },
];

function ServiceCard({ service, index, isHovered, onHover, onLeave }: {
    service: typeof services[0];
    index: number;
    isHovered: boolean;
    onHover: () => void;
    onLeave: () => void;
}) {
    return (
        <Link href={service.href}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.15 }}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                className={`rounded-3xl p-8 transition-all duration-300 cursor-pointer h-full ${isHovered
                        ? 'bg-[#00a8ff] text-white'
                        : 'bg-white/5 border border-white/10 text-white'
                    }`}
            >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${isHovered ? 'bg-white/20' : 'bg-white/10'
                    }`}>
                    <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className={`mb-6 ${isHovered ? 'text-white/90' : 'text-white/60'}`}>
                    {service.description}
                </p>
                <div className={`flex items-center gap-2 font-semibold ${isHovered ? 'text-white' : 'text-[#00a8ff]'
                    }`}>
                    Learn More
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </div>
            </motion.div>
        </Link>
    );
}

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(0); // First card highlighted by default

    return (
        <section id="services" className="py-32 relative bg-black">
            <div className="absolute inset-0 bg-gradient-to-b from-[#001020] via-black to-black" />

            <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
                {/* Three Ways We Build */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#00a8ff] text-white text-xs font-bold tracking-wide mb-6">
                        SERVICES
                    </span>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
                        <h2 className="text-4xl md:text-5xl font-light text-white">
                            Three Ways We <span className="font-bold">Build</span>
                        </h2>
                        <p className="text-white/50 max-w-md">
                            Choose the engagement model that fits your stage and goals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={service.title}
                                service={service}
                                index={index}
                                isHovered={hoveredIndex === index}
                                onHover={() => setHoveredIndex(index)}
                                onLeave={() => setHoveredIndex(null)}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Core Solutions */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-32"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#00a8ff] text-white text-xs font-bold tracking-wide mb-6">
                        WHAT WE BUILD
                    </span>
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-12">
                        Core <span className="font-bold">Solutions</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={solution.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00a8ff]/40 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl border border-[#00a8ff]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#00a8ff] group-hover:bg-[#00a8ff]/10 transition-all">
                                    <span className="text-xl">{solution.icon}</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#00a8ff] transition-colors">
                                        {solution.title}
                                    </h3>
                                    <p className="text-white/50 text-sm">{solution.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* How We Work */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-32"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#00a8ff] text-white text-xs font-bold tracking-wide mb-6">
                        PROCESS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-16">
                        How We <span className="font-bold">Work</span>
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="text-6xl font-bold text-white/10 block mb-4">
                                    {step.num}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Measurable Impact */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#00a8ff] text-white text-xs font-bold tracking-wide mb-6">
                        RESULTS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-16">
                        Measurable <span className="font-bold">Impact</span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10"
                            >
                                <span className="text-4xl md:text-5xl font-light text-white block mb-2">
                                    {stat.value}
                                </span>
                                <span className="text-white/50 text-sm">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
