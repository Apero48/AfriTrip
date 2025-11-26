"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Aminata Diallo",
        location: "Paris, France",
        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop",
        rating: 5,
        text: "Service exceptionnel ! J'ai trouvé un vol Paris-Dakar à un prix imbattable. L'équipe m'a accompagnée tout au long du processus. Je recommande vivement !",
        trip: "Vol Paris → Dakar"
    },
    {
        id: 2,
        name: "Jean-Pierre Kouassi",
        location: "Lyon, France",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        rating: 5,
        text: "Hôtel magnifique réservé via AfriTrip. Le prix était vraiment compétitif et le service client très réactif quand j'ai eu besoin de modifier ma réservation.",
        trip: "Hôtel 5★ Abidjan"
    },
    {
        id: 3,
        name: "Fatou Ndiaye",
        location: "Bruxelles, Belgique",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
        rating: 5,
        text: "Ma première expérience avec AfriTrip et certainement pas la dernière ! J'ai économisé plus de 200€ sur mon billet d'avion. Merci pour ce service formidable.",
        trip: "Vol Bruxelles → Casablanca"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-amber-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4"
                    >
                        💬 Témoignages
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-black text-slate-900 mb-4"
                    >
                        Ce que disent nos <span className="text-amber-500">voyageurs</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 max-w-2xl mx-auto"
                    >
                        Des milliers de clients satisfaits partagent leur expérience avec AfriTrip
                    </motion.p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                                {/* Quote Icon */}
                                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                                    <Quote className="w-6 h-6 text-amber-500" />
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-slate-700 leading-relaxed flex-1 mb-6">
                                    "{testimonial.text}"
                                </p>

                                {/* Trip Badge */}
                                <div className="mb-6">
                                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                                        {testimonial.trip}
                                    </span>
                                </div>

                                {/* Author */}
                                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-200"
                                    />
                                    <div>
                                        <div className="font-bold text-slate-900">{testimonial.name}</div>
                                        <div className="text-slate-500 text-sm">{testimonial.location}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Score */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-2xl shadow-lg">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 text-amber-500 fill-amber-500" />
                            ))}
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-slate-900">4.9/5 Excellent</div>
                            <div className="text-slate-500 text-sm">Basé sur 2,847 avis</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
