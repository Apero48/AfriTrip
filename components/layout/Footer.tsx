import Link from "next/link";

export function Footer() {
    return (
        <footer className="hidden md:block bg-slate-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                                <span className="text-xl font-black text-white">A</span>
                            </div>
                            <span className="text-xl font-black">
                                Afri<span className="text-amber-500">Trip</span>
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Votre partenaire de confiance pour explorer l'Afrique et le monde entier aux meilleurs prix.
                        </p>
                        <div className="flex gap-3">
                            {["facebook", "twitter", "instagram", "youtube"].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    aria-label={social}
                                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-amber-500 flex items-center justify-center transition-colors"
                                >
                                    <span className="text-xs uppercase">{social[0]}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-4">Nos Services</h4>
                        <ul className="space-y-2">
                            {[
                                { name: "Vols", href: "/flights" },
                                { name: "Hôtels", href: "/hotels" },
                                { name: "Location de voitures", href: "/cars" },
                                { name: "Tours guidés", href: "/tours" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-slate-400 hover:text-amber-500 transition-colors text-sm">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Destinations */}
                    <div>
                        <h4 className="font-bold mb-4">Destinations</h4>
                        <ul className="space-y-2">
                            {["Sénégal", "Côte d'Ivoire", "Maroc", "Kenya", "Afrique du Sud", "Tanzanie"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li>📧 raoufni48@gmail.com</li>
                            <li>📞 +229 01 43 80 21 71</li>
                            <li>📍 Paris, France</li>
                        </ul>
                        <div className="mt-4 p-4 bg-slate-800 rounded-xl">
                            <p className="text-xs text-slate-400 mb-2">Newsletter</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Votre email"
                                    aria-label="Email pour newsletter"
                                    className="flex-1 px-3 py-2 bg-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                                />
                                <button className="px-4 py-2 bg-amber-500 rounded-lg text-sm font-medium hover:bg-amber-600 transition-colors">
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © 2024 AfriTrip. Tous droits réservés.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <a href="#" className="hover:text-amber-500 transition-colors">Mentions légales</a>
                        <a href="#" className="hover:text-amber-500 transition-colors">CGV</a>
                        <a href="#" className="hover:text-amber-500 transition-colors">Confidentialité</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
