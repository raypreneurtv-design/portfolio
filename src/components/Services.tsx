"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const services = [
    {
        title: "Smart Quote Generation",
        description: "Turn website visitors into qualified leads with instant, accurate quotes tailored to your services.",
        features: [
            "Service-specific pricing logic",
            "Zip code coverage validation",
            "Instant email delivery",
            "CRM integration ready"
        ],
        href: "#quote-demo"
    },
    {
        title: "24/7 AI Receptionist",
        description: "Never miss a call again. Our AI answers, qualifies leads, and books appointments around the clock.",
        features: [
            "Natural voice conversations",
            "Appointment scheduling",
            "Call transcripts & summaries",
            "Overflow & after-hours routing"
        ],
        href: "/demo"
    },
    {
        title: "Intelligent Chat System",
        description: "Engage every website visitor instantly with an AI chat that understands your business.",
        features: [
            "Lead qualification",
            "Service recommendations",
            "FAQ automation",
            "Human handoff when needed"
        ],
        href: "#chat-demo"
    }
];

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="services" className="py-32 relative bg-black">
            <div className="absolute inset-0 bg-gradient-to-b from-[#001020] via-black to-black" />

            <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#00a8ff] text-white text-xs font-bold tracking-wide mb-6">
                        SERVICES
                    </span>
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                        Everything You Need to <br />
                        <span className="font-bold">Capture More Leads</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.15 }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#00a8ff]/40 transition-all group"
                        >
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00a8ff] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-white/60 mb-8 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                                        <span className="text-[#00a8ff] mt-1">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={service.href}
                                className="inline-flex items-center text-[#00a8ff] font-semibold hover:text-white transition-colors"
                            >
                                Learn More →
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-white/60 mb-4">Not sure which tools you need?</p>
                    <Link
                        href="#quote-form"
                        className="text-[#00a8ff] underline hover:text-white transition-colors"
                    >
                        Get a free recommendation based on your business
                    </Link>
                </div>
            </div>
        </section>
    );
}
