"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Proof", href: "#proof" },
    { name: "Contact", href: "#contact" },
];

export default function Footer() {
    return (
        <footer className="py-12 border-t border-[#00a8ff]/10 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                    >
                        <div className="relative w-10 h-10">
                            <Image
                                src="/logo.png"
                                alt="InsightOperator"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <span className="text-lg font-bold text-white">
                                Insight<span className="text-[#00a8ff]">Operator</span>
                            </span>
                            <p className="text-xs text-white/30 mt-0.5">
                                AI Automation Since Feb 2024
                            </p>
                        </div>
                    </motion.div>

                    <nav className="flex flex-wrap items-center justify-center gap-8">
                        {footerLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-white/50 hover:text-[#00a8ff] transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <p className="text-sm text-white/30">
                        © {new Date().getFullYear()} InsightOperator
                    </p>
                </div>
            </div>
        </footer>
    );
}
