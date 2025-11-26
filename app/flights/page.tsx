"use client";

import React from "react";
import { Metadata } from "next";
import { TravelPayoutsWidget } from "@/components/features/TravelPayoutsWidget";
import { PageHero } from "@/components/layout/PageHero";
import { Check, Plane, TrendingUp, Shield, Bell } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function FlightsPage() {
    const features = [
        {
            icon: Plane,
            title: "Vols directs",
            description: "Trouvez des vols directs vers vos destinations préférées",
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        },
        {
            icon: TrendingUp,
            title: "Meilleurs prix",
            description: "Comparez les prix de centaines de compagnies aériennes",
            color: "text-green-500",
            bg: "bg-green-500/10",
            border: "border-green-500/20"
        },
        {
            icon: Bell,
            title: "Alertes prix",
            description: "Recevez des notifications pour les meilleures offres",
            color: "text-amber-500",
            bg: "bg-amber-500/10",
            border: "border-amber-500/20"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <PageHero
                title="Vols pas chers"
                subtitle="Comparez des milliers de vols vers l'Afrique et le monde entier aux meilleurs prix garantis"
                image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
                badge="Meilleurs Tarifs"
            >
                <TravelPayoutsWidget
                    type="search"
                    className="!shadow-none !border-0 !bg-transparent"
                />
            </PageHero>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Popular Routes */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-amber-100 rounded-xl">
                            <TrendingUp className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900">Routes populaires</h2>
                            <p className="text-slate-500">Les itinéraires les plus recherchés par nos voyageurs</p>
                        </div>
                    </div>
                    <TravelPayoutsWidget
                        type="popular-routes"
                        className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
                    />
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className={`p-6 h-full hover:shadow-lg transition-all duration-300 border ${feature.border} bg-white`}>
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-xl ${feature.bg}`}>
                                        <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2 text-slate-900">{feature.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* SEO Content */}
                {/* Why Us - Premium Dark Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Pourquoi réserver vos vols avec AfriTrip ?</h2>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                AfriTrip est votre comparateur de vols intelligent qui analyse en temps réel les prix de centaines
                                de compagnies aériennes pour vous garantir les meilleurs tarifs. Que vous planifiez un voyage d'affaires,
                                des vacances en famille ou une escapade romantique, notre plateforme vous aide à économiser sur vos billets d'avion.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Comparaison en temps réel",
                                    "Prix transparents sans frais cachés",
                                    "Support client 24/7",
                                    "Partenaires certifiés IATA"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-emerald-500" />
                                        <span className="text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1542296332-2e44a996aa0d?q=80&w=2070&auto=format&fit=crop"
                                alt="Voyage avion"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
