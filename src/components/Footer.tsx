"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const footerLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Results", href: "#proof" },
    { name: "FAQ", href: "#faq" },
    { name: "Get Quote", href: "/quote" },
    { name: "AI Demo", href: "/demo" },
];

const businessTypeLinks = [
    { name: "HVAC", href: "/preview/hvac" },
    { name: "Plumbing", href: "/preview/plumbing" },
    { name: "Roofing", href: "/preview/roofing" },
    { name: "Landscaping", href: "/preview/landscaping" },
    { name: "Electrical", href: "/preview/electrical" },
    { name: "Cleaning", href: "/preview/cleaning" },
];

export default function Footer() {
    return (
        <footer className="py-16 border-t border-white/10 bg-black relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#000510] to-black" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Top section */}
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/logo-new.png"
                                    alt="InsightOperator"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <span className="text-lg font-bold text-white">
                                    Insight<span className="text-[#00a8ff]">Operator</span>
                                </span>
                            </div>
                        </motion.div>
                        <p className="text-white/40 text-sm mb-4 max-w-xs">
                            AI-powered lead generation tools built for home service businesses. Instant quotes, 24/7 receptionist, smart chat.
                        </p>
                        <p className="text-xs text-white/20">
                            Building AI since Feb 2024
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <nav className="grid grid-cols-2 gap-2">
                            {footerLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm text-white/50 hover:text-[#00a8ff] transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Industries */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Industries We Serve</h4>
                        <nav className="grid grid-cols-2 gap-2 mb-4">
                            {businessTypeLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm text-white/50 hover:text-[#00a8ff] transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                        <h4 className="text-white font-semibold mb-4 mt-6">Connect With Us</h4>
                        <div className="flex gap-3">
                            <a
                                href="https://discord.gg/Uag5CdJUwN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#5865F2]/20 border border-[#5865F2]/30 hover:bg-[#5865F2]/30 transition-all group"
                            >
                                <svg className="w-5 h-5 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.443.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.skool.com/trendwheel-automations-5905"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#00a8ff]/20 border border-[#00a8ff]/30 hover:bg-[#00a8ff]/30 transition-all"
                            >
                                <span className="text-[#00a8ff] text-sm font-bold">sk</span>
                            </a>
                            <a
                                href="https://tiktok.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                            >
                                <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-white/30">
                        © {new Date().getFullYear()} InsightOperator. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
