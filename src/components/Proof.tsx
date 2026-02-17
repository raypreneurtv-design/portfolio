"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const caseStudies = [
    {
        title: "AI Receptionist for Real Estate",
        result: "85% of calls handled automatically",
        description: "Deployed a 24/7 AI voice agent that qualifies leads, books viewings, and answers property questions.",
        metrics: [
            { label: "Calls Handled", value: "500+/mo" },
            { label: "Time Saved", value: "40hrs/wk" },
            { label: "Lead Conversion", value: "+35%" },
        ],
        tag: "Voice AI",
    },
    {
        title: "Lead Gen Automation for Agency",
        result: "3x qualified leads per month",
        description: "Built an end-to-end system: scraping, enrichment, personalized outreach, and CRM sync—all automated.",
        metrics: [
            { label: "Leads Generated", value: "2,000+/mo" },
            { label: "Response Rate", value: "12%" },
            { label: "Pipeline Value", value: "$180K" },
        ],
        tag: "Automation",
    },
    {
        title: "Customer Support Chatbot for SaaS",
        result: "70% ticket deflection rate",
        description: "Trained a Claude-powered chatbot on product docs. Handles support, upsells features, and escalates smartly.",
        metrics: [
            { label: "Tickets Deflected", value: "70%" },
            { label: "CSAT Score", value: "4.8/5" },
            { label: "Response Time", value: "<30s" },
        ],
        tag: "Chatbot",
    },
];

const testimonials = [
    {
        quote: "These guys actually know what they're doing. Not just theory—they shipped a working system in 2 weeks that's been running flawlessly.",
        author: "Marcus T.",
        role: "Founder, Tech Startup",
        avatar: "M",
    },
    {
        quote: "The Discord community alone is worth it. Got answers to questions that would've taken me days to figure out on my own.",
        author: "Sarah K.",
        role: "Marketing Director",
        avatar: "S",
    },
    {
        quote: "Finally, an AI team that speaks business, not just tech. They understood our goals and built exactly what we needed.",
        author: "David R.",
        role: "Operations Manager",
        avatar: "D",
    },
];

export default function Proof() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeCase, setActiveCase] = useState(0);

    return (
        <section id="proof" className="py-32 relative bg-black">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#000810] to-black" />

            <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#00a8ff] text-white text-xs font-bold tracking-wide mb-6">
                        PROOF
                    </span>
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                        Real Results, <span className="font-bold">Real Businesses</span>
                    </h2>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto">
                        Don't just take our word for it. See what we've built and what our clients say.
                    </p>
                </motion.div>

                {/* Case Studies */}
                <div className="mb-24">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold text-white">Case Studies</h3>
                        <div className="flex gap-2">
                            {caseStudies.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveCase(idx)}
                                    className={`w-3 h-3 rounded-full transition-all ${activeCase === idx
                                            ? "bg-[#00a8ff] w-8"
                                            : "bg-white/20 hover:bg-white/40"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    <motion.div
                        key={activeCase}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid lg:grid-cols-2 gap-8"
                    >
                        {/* Left - Details */}
                        <div className="bg-gradient-to-br from-[#00a8ff]/10 to-[#6366f1]/10 rounded-3xl p-8 border border-[#00a8ff]/20">
                            <span className="inline-block px-3 py-1 rounded-full bg-[#00a8ff]/20 text-[#00a8ff] text-xs font-bold mb-4">
                                {caseStudies[activeCase].tag}
                            </span>
                            <h4 className="text-2xl font-bold text-white mb-2">
                                {caseStudies[activeCase].title}
                            </h4>
                            <p className="text-3xl font-black text-[#00a8ff] mb-4">
                                {caseStudies[activeCase].result}
                            </p>
                            <p className="text-white/60 mb-8">
                                {caseStudies[activeCase].description}
                            </p>

                            <div className="grid grid-cols-3 gap-4">
                                {caseStudies[activeCase].metrics.map((metric) => (
                                    <div key={metric.label} className="text-center">
                                        <div className="text-2xl font-bold text-white mb-1">
                                            {metric.value}
                                        </div>
                                        <div className="text-xs text-white/40">
                                            {metric.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right - Visual */}
                        <div className="bg-white/5 rounded-3xl p-8 border border-white/10 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#00a8ff] to-[#6366f1] flex items-center justify-center">
                                    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-white/40 text-sm mb-4">Video case study coming soon</p>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 text-[#00a8ff] font-semibold hover:underline"
                                >
                                    Want similar results?
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Case study navigation */}
                    <div className="flex gap-4 mt-6 overflow-x-auto pb-2">
                        {caseStudies.map((cs, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveCase(idx)}
                                className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeCase === idx
                                        ? "bg-[#00a8ff] text-white"
                                        : "bg-white/5 text-white/60 hover:bg-white/10"
                                    }`}
                            >
                                {cs.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">What People Say</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#00a8ff]/30 transition-all"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-[#00a8ff]" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-white/80 mb-6 leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00a8ff] to-[#6366f1] flex items-center justify-center text-white font-bold">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-sm">
                                            {testimonial.author}
                                        </div>
                                        <div className="text-white/40 text-xs">
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Social Proof Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-8 py-8 border-t border-b border-white/10"
                >
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white">500+</div>
                        <div className="text-sm text-white/40">Community Members</div>
                    </div>
                    <div className="w-px h-12 bg-white/10 hidden sm:block" />
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white">30K+</div>
                        <div className="text-sm text-white/40">Social Following</div>
                    </div>
                    <div className="w-px h-12 bg-white/10 hidden sm:block" />
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white">15+</div>
                        <div className="text-sm text-white/40">Projects Delivered</div>
                    </div>
                    <div className="w-px h-12 bg-white/10 hidden sm:block" />
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white">100%</div>
                        <div className="text-sm text-white/40">Client Satisfaction</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
