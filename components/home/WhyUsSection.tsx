"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, CreditCard, Headphones, Award, CheckCircle2 } from "lucide-react";

const features = [
    {
        icon: Shield,
        title: "Réservation sécurisée",
        description: "Paiements 100% sécurisés avec protection des données",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: CreditCard,
        title: "Meilleurs prix garantis",
        description: "Nous nous alignons sur le prix le plus bas trouvé",
        color: "from-amber-500 to-orange-500"
    },
    {
        icon: Headphones,
        title: "Support 24/7",
        description: "Une équipe disponible à tout moment pour vous aider",
        color: "from-emerald-500 to-teal-500"
    },
    {
        icon: Award,
        title: "Partenaires de confiance",
        description: "+500 compagnies aériennes et hôtels partenaires",
        color: "from-purple-500 to-pink-500"
    }
];

const stats = [
    { value: "50K+", label: "Voyageurs satisfaits" },
    { value: "98%", label: "Taux de satisfaction" },
    { value: "500+", label: "Destinations" },
    { value: "15+", label: "Années d'expérience" },
];

export default function WhyUsSection() {
    return (
        <section className="py-20 bg-slate-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-400 rounded-full text-sm font-semibold mb-4"
                    >
                        ✨ Pourquoi AfriTrip
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-black text-white mb-4"
                    >
                        Voyagez en toute <span className="text-amber-500">confiance</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 max-w-2xl mx-auto"
                    >
                        Des milliers de voyageurs nous font confiance pour organiser leurs voyages en Afrique
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-8 sm:p-12"
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl sm:text-5xl font-black text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-white/80 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 flex flex-wrap justify-center gap-6"
                >
                    {["Paiement sécurisé SSL", "Annulation gratuite", "Sans frais cachés", "Service client francophone"].map((badge, index) => (
                        <div key={index} className="flex items-center gap-2 text-slate-400">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span className="text-sm">{badge}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
