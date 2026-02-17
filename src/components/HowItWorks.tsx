"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        num: "01",
        title: "Choose Your Tools",
        description: "Select the AI agents that fit your business needs."
    },
    {
        num: "02",
        title: "We Build & Integrate",
        description: "We customize and deploy your system in 7 days."
    },
    {
        num: "03",
        title: "Start Converting Leads",
        description: "Watch as your AI handles quotes and bookings automatically."
    }
];

export default function HowItWorks() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
                        Here is how we fix it in <br />
                        <span className="text-[#00a8ff]">3 simple steps</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-8"
                        >
                            <div className="w-16 h-16 bg-[#00a8ff]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#00a8ff] font-bold text-xl">
                                {step.num}
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                            <p className="text-black/60">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
