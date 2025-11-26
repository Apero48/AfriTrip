"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plane, Hotel, Car, Clock, Percent, ArrowRight, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AFFILIATE_LINK = "https://wegotrip.tpk.lv/TG8tgZXx";

const deals = [
    {
        id: 1,
        type: "flight",
        title: "Paris → Dakar",
        subtitle: "Vol direct Air Sénégal",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
        originalPrice: 650,
        price: 449,
        discount: 31,
        badge: "Flash",
        timeLeft: "2j 14h",
        icon: Plane
    },
    {
        id: 2,
        type: "hotel",
        title: "Radisson Blu Dakar",
        subtitle: "5★ • Vue mer • Petit-déj inclus",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
        originalPrice: 180,
        price: 119,
        discount: 34,
        badge: "Top Deal",
        timeLeft: "5j 8h",
        icon: Hotel,
        perNight: true
    },
    {
        id: 3,
        type: "flight",
        title: "Paris → Abidjan",
        subtitle: "Vol direct Air Côte d'Ivoire",
        image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070&auto=format&fit=crop",
        originalPrice: 580,
        price: 399,
        discount: 31,
        badge: "Promo",
        timeLeft: "3j 22h",
        icon: Plane
    },
    {
        id: 4,
        type: "car",
        title: "SUV 4x4 Premium",
        subtitle: "Nairobi • Kilométrage illimité",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071&auto=format&fit=crop",
        originalPrice: 89,
        price: 59,
        discount: 34,
        badge: "Safari",
        timeLeft: "6j 16h",
        icon: Car,
        perDay: true
    },
    {
        id: 5,
        type: "hotel",
        title: "Sofitel Abidjan",
        subtitle: "5★ • Centre-ville • Spa",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop",
        originalPrice: 150,
        price: 99,
        discount: 34,
        badge: "Luxe",
        timeLeft: "4j 10h",
        icon: Hotel,
        perNight: true
    },
];

export default function DealsSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full mb-4"
                    >
                        <Flame className="w-4 h-4" />
                        <span className="font-semibold text-sm">Offres limitées</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-black text-slate-900 mb-4"
                    >
                        Offres <span className="text-red-500">exclusives</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 max-w-2xl mx-auto"
                    >
                        Profitez de réductions exceptionnelles sur une sélection de vols, hôtels et locations
                    </motion.p>
                </div>

                {/* Horizontal Scrolling Container */}
                <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
                    <div
                        className="flex gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory scroll-smooth hide-scrollbar"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            WebkitOverflowScrolling: 'touch'
                        }}
                    >
                        {deals.map((deal, index) => (
                            <motion.a
                                key={deal.id}
                                href={AFFILIATE_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group flex-shrink-0 w-[340px] sm:w-[400px] snap-start"
                            >
                                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 h-full">
                                    <div className="flex flex-col">
                                        {/* Image */}
                                        <div className="relative h-48 flex-shrink-0">
                                            <img
                                                src={deal.image}
                                                alt={deal.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/20" />

                                            {/* Badge */}
                                            <div className="absolute top-3 left-3">
                                                <Badge className="bg-red-500 text-white hover:bg-red-600 shadow-lg">
                                                    <Percent className="w-3 h-3 mr-1" />
                                                    -{deal.discount}%
                                                </Badge>
                                            </div>

                                            {/* Type Icon */}
                                            <div className="absolute bottom-3 left-3">
                                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                                                    <deal.icon className="w-5 h-5 text-amber-500" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 p-5 flex flex-col justify-between">
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs font-semibold">
                                                        {deal.badge}
                                                    </span>
                                                    <div className="flex items-center gap-1 text-slate-500 text-xs">
                                                        <Clock className="w-3 h-3" />
                                                        {deal.timeLeft} restant
                                                    </div>
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">
                                                    {deal.title}
                                                </h3>
                                                <p className="text-slate-500 text-sm">{deal.subtitle}</p>
                                            </div>

                                            <div className="flex items-end justify-between mt-4">
                                                <div>
                                                    <span className="text-slate-400 text-sm line-through">
                                                        {deal.originalPrice}€
                                                    </span>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-3xl font-black text-slate-900">{deal.price}</span>
                                                        <span className="text-slate-900 font-bold">€</span>
                                                        {deal.perNight && <span className="text-slate-500 text-sm">/nuit</span>}
                                                        {deal.perDay && <span className="text-slate-500 text-sm">/jour</span>}
                                                    </div>
                                                </div>
                                                <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-full shadow-lg shadow-amber-500/30">
                                                    Réserver
                                                    <ArrowRight className="w-4 h-4 ml-1" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Button variant="outline" size="lg" className="rounded-full group" asChild>
                        <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                            Voir toutes les offres
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Button>
                </motion.div>
            </div>

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
