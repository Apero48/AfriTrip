"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AFFILIATE_LINK = "https://wegotrip.tpk.lv/TG8tgZXx";

const destinations = [
    {
        id: 1,
        name: "Dakar",
        country: "Sénégal",
        image: "https://images.unsplash.com/photo-1569974498163-1d322c4cde78?q=80&w=2070&auto=format&fit=crop",
        price: "450",
        rating: 4.8,
        tag: "Populaire"
    },
    {
        id: 2,
        name: "Marrakech",
        country: "Maroc",
        image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=2073&auto=format&fit=crop",
        price: "320",
        rating: 4.9,
        tag: "Tendance"
    },
    {
        id: 3,
        name: "Cape Town",
        country: "Afrique du Sud",
        image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=2071&auto=format&fit=crop",
        price: "680",
        rating: 4.7,
        tag: "Aventure"
    },
    {
        id: 4,
        name: "Zanzibar",
        country: "Tanzanie",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071&auto=format&fit=crop",
        price: "590",
        rating: 4.9,
        tag: "Paradis"
    },
    {
        id: 5,
        name: "Abidjan",
        country: "Côte d'Ivoire",
        image: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?q=80&w=2073&auto=format&fit=crop",
        price: "420",
        rating: 4.6,
        tag: "Business"
    },
    {
        id: 6,
        name: "Nairobi",
        country: "Kenya",
        image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=2067&auto=format&fit=crop",
        price: "520",
        rating: 4.8,
        tag: "Safari"
    },
];

export default function DestinationsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4"
                        >
                            🌍 Destinations
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl font-black text-slate-900"
                        >
                            Destinations <span className="text-amber-500">populaires</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-600 mt-2"
                        >
                            Découvrez les joyaux de l'Afrique
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Button variant="outline" className="group rounded-full" asChild>
                            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                                Voir toutes les destinations
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                    </motion.div>
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
                        {destinations.map((dest, index) => (
                            <motion.a
                                key={dest.id}
                                href={AFFILIATE_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group cursor-pointer flex-shrink-0 w-[280px] sm:w-[320px] snap-start"
                            >
                                <div className="relative rounded-3xl overflow-hidden bg-slate-100 aspect-[4/5]">
                                    <img
                                        src={dest.image}
                                        alt={dest.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                                    {/* Tag */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-900">
                                            {dest.tag}
                                        </span>
                                    </div>

                                    {/* Rating */}
                                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                                        <span className="text-xs font-semibold">{dest.rating}</span>
                                    </div>

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <div className="flex items-center gap-1 text-white/70 text-sm mb-1">
                                            <MapPin className="w-3 h-3" />
                                            {dest.country}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3">{dest.name}</h3>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="text-white/70 text-sm">À partir de</span>
                                                <div className="text-2xl font-black text-white">
                                                    {dest.price}€
                                                </div>
                                            </div>
                                            <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-amber-500 transition-all duration-300">
                                                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
