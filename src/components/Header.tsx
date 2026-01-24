"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Proof", href: "#proof" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-black/95 backdrop-blur-xl py-3 border-b border-[#00a8ff]/20"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <a href="#" className="flex items-center gap-3 group">
                    <div className="relative w-12 h-12">
                        <Image
                            src="/logo-new.png"
                            alt="InsightOperator"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-xl font-black tracking-tight transition-colors ${scrolled ? 'text-white' : 'text-black'}`}>
                            Insight<span className="text-[#00a8ff]">Operator</span>
                        </span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-semibold transition-colors ${scrolled
                                ? 'text-white/70 hover:text-[#00a8ff]'
                                : 'text-black/70 hover:text-[#00a8ff]'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="btn-accent px-6 py-2.5 rounded-full text-sm font-bold transition-transform hover:scale-105"
                    >
                        Let's Talk
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2" aria-label="Menu">
                    <div className="w-6 flex flex-col gap-1.5">
                        <span className={`w-full h-0.5 transition-colors ${scrolled ? 'bg-white' : 'bg-black'}`} />
                        <span className={`w-full h-0.5 transition-colors ${scrolled ? 'bg-white' : 'bg-black'}`} />
                        <span className={`w-4 h-0.5 transition-colors ${scrolled ? 'bg-white' : 'bg-black'}`} />
                    </div>
                </button>
            </div>
        </motion.header>
    );
}
