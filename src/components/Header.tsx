"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
    { name: "How It Works", href: "/#how-it-works" },
    { name: "What I Build", href: "/#features" },
    { name: "Case Studies", href: "/#case-studies" },
    { name: "FAQ", href: "/#faq" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-[#0a0a0b]/90 backdrop-blur-xl py-3 border-b border-white/10"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <a href="/" className="flex items-center gap-3 group">
                    <div className="relative w-9 h-9">
                        <Image
                            src="/logo-new.png"
                            alt="InsightOperator"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-lg font-semibold tracking-tight text-white">
                        Insight<span className="text-white/50">Operator</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-white/60 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://cal.com/ray-ndaula/30min"
                        className="px-5 py-2 rounded-lg text-sm font-semibold bg-white text-black hover:bg-white/90 transition-colors"
                    >
                        Book a call
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2" aria-label="Menu">
                    <div className="w-6 flex flex-col gap-1.5">
                        <span className="w-full h-0.5 bg-white" />
                        <span className="w-full h-0.5 bg-white" />
                        <span className="w-4 h-0.5 bg-white" />
                    </div>
                </button>
            </div>
        </motion.header>
    );
}
