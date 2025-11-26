"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Destination {
    name: string;
    theme: string;
    image: string;
    price: string;
}

const AFFILIATE_LINK = "https://wegotrip.tpk.lv/TG8tgZXx";

export function ThemedDestinationsGrid() {
    const destinations: Destination[] = [
        {
            name: "Zanzibar",
            theme: "Plage",
            image: "https://images.unsplash.com/photo-1590523278191-995cbcda646b?q=80&w=2070&auto=format&fit=crop",
            price: "À partir de 450€"
        },
        {
            name: "Marrakech",
            theme: "Culture",
            image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=2073&auto=format&fit=crop",
            price: "À partir de 280€"
        },
        {
            name: "Mont Kilimandjaro",
            theme: "Aventure",
            image: "https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?q=80&w=2070&auto=format&fit=crop",
            price: "À partir de 1200€"
        },
        {
            name: "Serengeti",
            theme: "Nature",
            image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop",
            price: "À partir de 890€"
        },
        {
            name: "Le Caire",
            theme: "Ville",
            image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=2070&auto=format&fit=crop",
            price: "À partir de 380€"
        },
        {
            name: "Seychelles",
            theme: "Plage",
            image: "https://images.unsplash.com/photo-1589273576025-34ba9d9d4098?q=80&w=2074&auto=format&fit=crop",
            price: "À partir de 950€"
        },
        {
            name: "Nairobi",
            theme: "Safari",
            image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=2067&auto=format&fit=crop",
            price: "À partir de 520€"
        },
        {
            name: "Dubai",
            theme: "Luxe",
            image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
            price: "À partir de 680€"
        }
    ];

    return (
        <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">
                        Découvrez votre prochaine destination
                    </h2>
                    <p className="text-lg text-slate-600">
                        Explorez nos offres par thématique et trouvez l'inspiration pour votre prochain voyage
                    </p>
                </motion.div>

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
                        {destinations.map((destination, index) => (
                            <motion.a
                                key={index}
                                href={AFFILIATE_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group relative flex-shrink-0 w-[320px] sm:w-[380px] overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer snap-start"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={destination.image}
                                        alt={destination.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                    {/* Theme Badge */}
                                    <div className="self-start">
                                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                                            {destination.theme}
                                        </span>
                                    </div>

                                    {/* Destination Info */}
                                    <div className="text-white">
                                        <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">
                                            {destination.name}
                                        </h3>
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm text-white/90">{destination.price}</p>
                                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-amber-500 transition-all duration-300">
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-amber-600/0 to-amber-600/0 group-hover:from-amber-600/30 group-hover:to-transparent transition-all duration-500" />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-8"
                >
                    <a
                        href={AFFILIATE_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors duration-300 shadow-xl hover:shadow-2xl"
                    >
                        Voir toutes les destinations
                        <ArrowRight className="w-5 h-5" />
                    </a>
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
