"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface PageHeroProps {
    title: string;
    subtitle: string;
    image: string;
    badge?: string;
    children?: React.ReactNode;
}

export function PageHero({ title, subtitle, image, badge, children }: PageHeroProps) {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 w-full text-center">
                {badge && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span className="text-white/90 text-sm font-medium">{badge}</span>
                    </motion.div>
                )}

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight"
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed"
                >
                    {subtitle}
                </motion.p>

                {children && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/20 p-6 sm:p-8">
                            {children}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
