"use client";

import React from "react";
import { TravelPayoutsWidget } from "@/components/features/TravelPayoutsWidget";
import { PageHero } from "@/components/layout/PageHero";
import { Compass, MapPin, Calendar, Star, Ticket, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function ToursPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <PageHero
                title="Tours & Activités"
                subtitle="Vivez des expériences inoubliables : safaris, visites guidées, excursions et plus encore"
                image="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071&auto=format&fit=crop"
                badge="Expériences Uniques"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    {[
                        { label: "Safaris", icon: Compass },
                        { label: "Visites", icon: MapPin },
                        { label: "Culture", icon: Star },
                        { label: "Aventure", icon: Ticket },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-50 hover:bg-amber-50 transition-colors cursor-pointer group">
                            <item.icon className="w-6 h-6 text-slate-400 group-hover:text-amber-500 transition-colors" />
                            <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">{item.label}</span>
                        </div>
                    ))}
                </div>
            </PageHero>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* City Tours */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-amber-100 rounded-xl">
                            <MapPin className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900">Explorez par ville</h2>
                            <p className="text-slate-500">Découvrez les meilleures activités dans chaque destination</p>
                        </div>
                    </div>
                    <TravelPayoutsWidget
                        type="city-tours"
                        className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
                    />
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Popular Tours */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-purple-100 rounded-xl">
                                <Star className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">Les plus populaires</h2>
                                <p className="text-slate-500">Activités plébiscitées par les voyageurs</p>
                            </div>
                        </div>
                        <TravelPayoutsWidget
                            type="popular-tours"
                            className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 h-full"
                        />
                    </motion.div>

                    {/* Availability Calendar */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-blue-100 rounded-xl">
                                <Calendar className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">Calendrier</h2>
                                <p className="text-slate-500">Vérifiez les disponibilités en temps réel</p>
                            </div>
                        </div>
                        <TravelPayoutsWidget
                            type="availability-calendar"
                            className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 h-full"
                        />
                    </motion.div>
                </div>

                {/* Things to Do */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-emerald-100 rounded-xl">
                            <Ticket className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900">Activités recommandées</h2>
                            <p className="text-slate-500">Une sélection d'expériences à ne pas manquer</p>
                        </div>
                    </div>
                    <TravelPayoutsWidget
                        type="things-to-do"
                        className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
                    />
                </motion.div>

                {/* Why Us - Premium Dark Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Vivez des expériences inoubliables</h2>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Découvrez le monde autrement avec nos activités sélectionnées. Des visites guidées aux aventures
                                extrêmes, nous vous proposons les meilleures expériences pour enrichir votre voyage.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Guides locaux experts",
                                    "Billets coupe-file",
                                    "Annulation flexible",
                                    "Support client 24/7"
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
                                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop"
                                alt="Safari aventure"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
