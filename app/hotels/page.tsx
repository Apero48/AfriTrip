"use client";

import React from "react";
import { TravelPayoutsWidget } from "@/components/features/TravelPayoutsWidget";
import { PageHero } from "@/components/layout/PageHero";
import { Hotel, Map, Star, Shield, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function HotelsPage() {
    const features = [
        {
            icon: Hotel,
            title: "Tous types d'hébergements",
            description: "Hôtels, appartements, villas, maisons d'hôtes et plus",
            color: "text-indigo-500",
            bg: "bg-indigo-500/10",
            border: "border-indigo-500/20"
        },
        {
            icon: Star,
            title: "Avis vérifiés",
            description: "Consultez les avis authentiques de vrais voyageurs",
            color: "text-amber-500",
            bg: "bg-amber-500/10",
            border: "border-amber-500/20"
        },
        {
            icon: Shield,
            title: "Annulation gratuite",
            description: "Flexibilité maximale sur la plupart des réservations",
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <PageHero
                title="Hôtels & Hébergements"
                subtitle="Trouvez l'hébergement parfait pour votre séjour parmi plus de 2 millions d'établissements"
                image="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
                badge="Meilleure Sélection"
            >
                <TravelPayoutsWidget
                    type="hotel-search"
                    className="!shadow-none !border-0 !bg-transparent"
                />
            </PageHero>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Price Map */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-indigo-100 rounded-xl">
                            <Map className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900">Carte des prix</h2>
                            <p className="text-slate-500">Explorez les tarifs par quartier sur la carte interactive</p>
                        </div>
                    </div>
                    <TravelPayoutsWidget
                        type="price-map"
                        className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden"
                    />
                </motion.div>

                {/* Popular Destinations */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-amber-100 rounded-xl">
                            <Star className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900">Destinations populaires</h2>
                            <p className="text-slate-500">Les villes préférées de nos voyageurs</p>
                        </div>
                    </div>
                    <TravelPayoutsWidget
                        type="popular-destinations"
                        className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
                    />
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-6">
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

                {/* Why Us - Premium Dark Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Pourquoi réserver votre hôtel avec AfriTrip ?</h2>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Trouvez l'hébergement idéal au meilleur prix. Des hôtels de luxe aux auberges de jeunesse,
                                nous comparons des millions d'offres pour vous garantir le séjour parfait, où que vous alliez.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Meilleurs prix garantis",
                                    "Avis clients vérifiés",
                                    "Annulation gratuite sur la plupart des chambres",
                                    "Service client 24/7"
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
                                src="https://images.unsplash.com/photo-1571896349842-6e5c48dc52e3?q=80&w=2070&auto=format&fit=crop"
                                alt="Hôtel de luxe"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
