"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
    {
        title: "Missed calls and messages",
        description: "When you're on a job or after hours, leads slip through the cracks."
    },
    {
        title: "Slow follow-ups",
        description: "Ready-to-book customers move on to competitors who respond faster."
    },
    {
        title: "Manual quoting and scheduling",
        description: "Wastes time and kills momentum when customers are ready to commit."
    },
    {
        title: "Too much admin work",
        description: "Pulling you out of the field and away from revenue-generating work."
    }
];

export default function Problem() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Why Leads Get Missed <br />
                        <span className="text-[#00a8ff]">And How We Fix It</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((prob, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#00a8ff]/50 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">{prob.title}</h3>
                            <p className="text-white/60">{prob.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
