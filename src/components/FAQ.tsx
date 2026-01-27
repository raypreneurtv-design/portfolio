"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
    {
        question: "How quickly can you build an AI automation for my business?",
        answer: "Most projects go live within 2-4 weeks. Simple chatbots can be deployed in days, while complex multi-agent workflows take longer. We'll give you a clear timeline during our discovery call.",
    },
    {
        question: "Do I need technical knowledge to use these systems?",
        answer: "Not at all. We build everything with user-friendly interfaces. You'll get a dashboard to monitor performance, but the AI runs autonomously. We also provide training and ongoing support.",
    },
    {
        question: "What's the ROI on AI automation?",
        answer: "Our clients typically see 10-30 hours saved per week and 50-80% reduction in response times. For lead generation, we've seen 2-5x improvements in conversion rates. We'll help you calculate projected ROI during our consultation.",
    },
    {
        question: "Can the AI handle complex conversations?",
        answer: "Yes. We use Claude and other advanced LLMs that can understand context, handle objections, and have natural conversations. They can be trained on your specific products, services, and brand voice.",
    },
    {
        question: "What if the AI makes a mistake or can't help?",
        answer: "We build in smart escalation paths. When the AI is uncertain or the situation requires human touch, it seamlessly hands off to your team with full context. You're always in control.",
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. We follow enterprise security practices, use encrypted connections, and never train public models on your data. We can work within your existing compliance requirements (HIPAA, SOC2, etc).",
    },
    {
        question: "What's included in the free community?",
        answer: "Everything! Access to our resource library, weekly live workshops, direct Q&A with our team, networking with 500+ AI builders, and early access to new tools and templates. No credit card required.",
    },
    {
        question: "How is this different from other AI agencies?",
        answer: "We're builders first, not just consultants. We use these exact systems in our own business. Plus, our community gives you ongoing value and support—not just a one-time deliverable.",
    },
];

function FAQItem({ faq, index, isOpen, onToggle }: {
    faq: typeof faqs[0];
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="border-b border-white/10 last:border-0"
        >
            <button
                onClick={onToggle}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className="text-lg font-semibold text-white group-hover:text-[#00a8ff] transition-colors pr-8">
                    {faq.question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#00a8ff]/20 transition-colors"
                >
                    <svg
                        className={`w-4 h-4 transition-colors ${isOpen ? "text-[#00a8ff]" : "text-white/60"}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-white/60 leading-relaxed pr-12">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQ() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-32 relative bg-black">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#000810] to-black" />

            <div className="relative z-10 max-w-4xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#00a8ff] text-white text-xs font-bold tracking-wide mb-6">
                        FAQ
                    </span>
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                        Got <span className="font-bold">Questions?</span>
                    </h2>
                    <p className="text-xl text-white/50">
                        Here are answers to the most common ones.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 rounded-3xl border border-white/10 p-6 md:p-8"
                >
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            index={index}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </motion.div>

                {/* Still have questions CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-white/50 mb-4">Still have questions?</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://discord.gg/Uag5CdJUwN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#5865F2]/20 border border-[#5865F2]/30 text-[#5865F2] font-semibold hover:bg-[#5865F2]/30 transition-all"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.443.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                            </svg>
                            Ask in Discord
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00a8ff]/20 border border-[#00a8ff]/30 text-[#00a8ff] font-semibold hover:bg-[#00a8ff]/30 transition-all"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Book a Call
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
