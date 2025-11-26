"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plane, Hotel, Car, Sparkles } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import FlightSearchWidget from "@/components/widgets/FlightSearchWidget";

export default function HeroSection() {
    const [activeTab, setActiveTab] = useState("flights");

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072&auto=format&fit=crop"
                    alt="Safari Africain"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 w-full">
                <div className="text-center mb-8">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span className="text-white/90 text-sm font-medium">Meilleurs prix garantis</span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
                    >
                        Explorez l'
                        <span className="relative">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400">
                                Afrique
                            </span>
                            <motion.svg
                                className="absolute -bottom-2 left-0 w-full"
                                viewBox="0 0 200 12"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <motion.path
                                    d="M0 6 Q50 0 100 6 T200 6"
                                    fill="none"
                                    stroke="url(#gradient)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient id="gradient">
                                        <stop offset="0%" stopColor="#F59E0B" />
                                        <stop offset="100%" stopColor="#EA580C" />
                                    </linearGradient>
                                </defs>
                            </motion.svg>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-6 leading-relaxed"
                    >
                        Comparez et réservez vos vols, hôtels et voitures aux meilleurs prix
                        vers les plus belles destinations africaines
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-8 mb-8"
                    >
                        {[
                            { value: "500+", label: "Destinations" },
                            { value: "50K+", label: "Clients satisfaits" },
                            { value: "24/7", label: "Support client" },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl font-black text-white">{stat.value}</div>
                                <div className="text-white/60 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Search Widget Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/20 p-6 sm:p-8">
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                            <TabsList className="grid grid-cols-3 gap-2 bg-slate-100 p-1.5 rounded-2xl mb-6">
                                <TabsTrigger
                                    value="flights"
                                    className="flex items-center gap-2 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-md py-3 transition-all"
                                >
                                    <Plane className="w-4 h-4" />
                                    <span className="hidden sm:inline">Vols</span>
                                </TabsTrigger>
                                <TabsTrigger
                                    value="hotels"
                                    className="flex items-center gap-2 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-md py-3 transition-all"
                                >
                                    <Hotel className="w-4 h-4" />
                                    <span className="hidden sm:inline">Hôtels</span>
                                </TabsTrigger>
                                <TabsTrigger
                                    value="cars"
                                    className="flex items-center gap-2 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-md py-3 transition-all"
                                >
                                    <Car className="w-4 h-4" />
                                    <span className="hidden sm:inline">Voitures</span>
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="flights" className="mt-0">
                                <FlightSearchWidget />
                            </TabsContent>

                            <TabsContent value="hotels" className="mt-0">
                                <div className="text-center py-12 text-slate-500">
                                    <Hotel className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                                    <p className="font-medium">Recherche d'hôtels</p>
                                    <p className="text-sm">Bientôt disponible</p>
                                </div>
                            </TabsContent>

                            <TabsContent value="cars" className="mt-0">
                                <div className="text-center py-12 text-slate-500">
                                    <Car className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                                    <p className="font-medium">Location de voitures</p>
                                    <p className="text-sm">Bientôt disponible</p>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex justify-center mt-8"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
                    >
                        <div className="w-1.5 h-3 bg-white/60 rounded-full" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
