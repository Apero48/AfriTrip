"use client";

import React from "react";
import { Shield, Clock, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export function TrustBanner() {
    const trustSignals = [
        {
            icon: Shield,
            text: "Aucun frais caché",
            color: "text-emerald-500"
        },
        {
            icon: TrendingUp,
            text: "Comparaison en temps réel",
            color: "text-blue-500"
        },
        {
            icon: Clock,
            text: "Support 24/7",
            color: "text-amber-500"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-gradient-to-r from-slate-50 to-slate-100 border-y border-slate-200 py-4"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {trustSignals.map((signal, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center justify-center gap-3"
                        >
                            <div className={`p-2 rounded-lg bg-white shadow-sm ${signal.color}`}>
                                <signal.icon className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-medium text-slate-700">
                                {signal.text}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
