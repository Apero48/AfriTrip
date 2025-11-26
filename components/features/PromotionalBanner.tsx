"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function PromotionalBanner() {
    const [timeLeft, setTimeLeft] = useState({
        hours: 23,
        minutes: 59,
        seconds: 59
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 overflow-hidden relative"
        >
            {/* Animated background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-start gap-4 text-white">
                        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                Offres exclusives - Jusqu'à 35% de réduction
                            </h3>
                            <p className="text-white/90">
                                Réservez maintenant et économisez sur vos vols, hôtels et activités
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Countdown Timer */}
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                                <div className="text-xs text-white/70">heures</div>
                            </div>
                            <div className="text-white text-2xl">:</div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                                <div className="text-xs text-white/70">min</div>
                            </div>
                            <div className="text-white text-2xl">:</div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
                                <div className="text-xs text-white/70">sec</div>
                            </div>
                        </div>

                        <Button
                            size="lg"
                            className="bg-white text-amber-600 hover:bg-slate-100 font-bold shadow-xl"
                            asChild
                        >
                            <a href="https://wegotrip.tpk.lv/TG8tgZXx" target="_blank" rel="noopener noreferrer">
                                Voir les offres
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
