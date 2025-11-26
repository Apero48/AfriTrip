"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Plane, Hotel, Car, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Vols", icon: Plane, href: "/flights" },
        { name: "Hôtels", icon: Hotel, href: "/hotels" },
        { name: "Voitures", icon: Car, href: "/cars" },
        { name: "Tours", icon: MapPin, href: "/tours" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isScrolled ? "bg-gradient-to-br from-amber-500 to-orange-600" : "bg-white/20 backdrop-blur-sm"
                            }`}>
                            <span className="text-xl font-black text-white">A</span>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                                <Plane className="w-2.5 h-2.5 text-white" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-xl font-black tracking-tight transition-colors duration-300 ${isScrolled ? "text-slate-900" : "text-white"
                                }`}>
                                Afri<span className="text-amber-500">Trip</span>
                            </span>
                            <span className={`text-[10px] font-medium -mt-1 transition-colors duration-300 ${isScrolled ? "text-slate-500" : "text-white/70"
                                }`}>
                                Explorez l'Afrique
                            </span>
                        </div>
                    </Link>

                    {/* Navigation Desktop */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 ${isScrolled
                                        ? "text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                                        : "text-white/90 hover:bg-white/20 hover:text-white"
                                    }`}
                            >
                                <link.icon className="w-4 h-4" />
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <Button
                            className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${isScrolled
                                    ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5"
                                    : "bg-white text-slate-900 hover:bg-amber-50"
                                }`}
                        >
                            <User className="w-4 h-4" />
                            Mon Compte
                        </Button>

                        {/* Mobile Menu Button - Hidden on mobile (using bottom nav) */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/20"
                                }`}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
