"use client";

import React from "react";
import { TravelPayoutsWidget } from "@/components/features/TravelPayoutsWidget";
import { PageHero } from "@/components/layout/PageHero";
import { Car, Shield, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function CarsPage() {
    const features = [
        {
            icon: Car,
            title: "Large choix de véhicules",
            description: "De la citadine économique au SUV premium",
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        },
        {
            icon: Shield,
            title: "Assurance incluse",
            description: "Voyagez l'esprit tranquille avec notre couverture complète",
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20"
        },
        {
            icon: MapPin,
            title: "Prise en charge flexible",
            description: "Aéroport, gare ou centre-ville selon vos besoins",
            color: "text-amber-500",
            bg: "bg-amber-500/10",
            border: "border-amber-500/20"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <PageHero
                title="Location de voitures"
                subtitle="Explorez en toute liberté avec notre large gamme de véhicules aux meilleurs prix"
                image="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071&auto=format&fit=crop"
                badge="Liberté Totale"
            >
                <TravelPayoutsWidget
                    type="shuttles"
                    className="!shadow-none !border-0 !bg-transparent"
                />
            </PageHero>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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

                {/* Testimonials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-emerald-100 rounded-xl">
                            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900">Avis clients</h2>
                            <p className="text-slate-500">Ce que nos clients disent de leur expérience</p>
                        </div>
                    </div>
                    <TravelPayoutsWidget
                        type="testimonials"
                        className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
                    />
                </motion.div>

                {/* SEO Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Pourquoi louer avec AfriTrip ?</h2>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Nous travaillons avec les plus grandes agences de location internationales et locales pour vous offrir
                                le plus grand choix de véhicules aux meilleurs prix. Que vous ayez besoin d'une petite citadine pour
                                vos déplacements urbains ou d'un 4x4 robuste pour vos aventures, nous avons le véhicule qu'il vous faut.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-amber-500" />
                                    <span>Support client 24/7 en cas de pépin</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Shield className="w-5 h-5 text-emerald-500" />
                                    <span>Assurances complètes disponibles</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                    <span>Annulation gratuite jusqu'à 48h avant</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop"
                                alt="Voiture de location"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
