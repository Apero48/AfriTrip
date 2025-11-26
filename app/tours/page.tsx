import { Metadata } from "next";
import { TravelPayoutsWidget } from "@/components/features/TravelPayoutsWidget";
import { Compass, Check, MapPin, Calendar, Star, Ticket } from "lucide-react";

export const metadata: Metadata = {
    title: "Tours & Activités - Réservez vos expériences | AfriTrip",
    description: "Découvrez et réservez les meilleures activités, tours et excursions partout dans le monde. Expériences uniques et prix garantis avec AfriTrip.",
    keywords: ["tours", "activités", "excursions", "visites guidées", "expériences voyage"],
    alternates: {
        canonical: "/tours",
    },
};

export default function ToursPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg">
                        <Compass className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Tours & Activités
                        </h1>
                        <p className="text-muted-foreground mt-1">
                            Découvrez les meilleures expériences et activités en Afrique
                        </p>
                    </div>
                </div>

                {/* City Tours Widget */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <MapPin className="w-5 h-5 text-primary" />
                        <h2 className="text-2xl font-bold">Tours par ville</h2>
                    </div>
                    <TravelPayoutsWidget
                        type="city-tours"
                        title="Explorez les villes"
                        description="Visites guidées, excursions et expériences locales"
                    />
                </div>

                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Popular Tours Widget */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Star className="w-5 h-5 text-secondary" />
                            <h2 className="text-2xl font-bold">Tours populaires</h2>
                        </div>
                        <TravelPayoutsWidget
                            type="popular-tours"
                            description="Les activités les plus réservées"
                        />
                    </div>

                    {/* Availability Calendar Widget */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Calendar className="w-5 h-5 text-primary" />
                            <h2 className="text-2xl font-bold">Disponibilités</h2>
                        </div>
                        <TravelPayoutsWidget
                            type="availability-calendar"
                            description="Vérifiez les dates disponibles"
                        />
                    </div>
                </div>

                {/* Things to Do Widget */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Ticket className="w-5 h-5 text-secondary" />
                        <h2 className="text-2xl font-bold">Que faire ?</h2>
                    </div>
                    <TravelPayoutsWidget
                        type="things-to-do"
                        title="Activités recommandées"
                        description="Sélection d'expériences uniques et inoubliables"
                    />
                </div>

                {/* Features Grid */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Pourquoi réserver avec nous ?
                    </h2>
                    <div className="grid md:grid-cols-4 gap-4">
                        <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border border-primary/20 hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="flex flex-col items-center text-center gap-3">
                                <div className="p-3 bg-primary/10 rounded-full">
                                    <Check className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">🎯 Meilleurs prix</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Garantie du prix le plus bas
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-lg border border-secondary/20 hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="flex flex-col items-center text-center gap-3">
                                <div className="p-3 bg-secondary/10 rounded-full">
                                    <Check className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">⭐ Avis vérifiés</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Commentaires authentiques
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border border-primary/20 hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="flex flex-col items-center text-center gap-3">
                                <div className="p-3 bg-primary/10 rounded-full">
                                    <Check className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">🎫 Réservation facile</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Confirmation instantanée
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-lg border border-secondary/20 hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="flex flex-col items-center text-center gap-3">
                                <div className="p-3 bg-secondary/10 rounded-full">
                                    <Check className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">🔄 Annulation gratuite</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Flexibilité maximale
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 rounded-xl text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Prêt pour l'aventure ?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Découvrez des expériences uniques et créez des souvenirs inoubliables en Afrique
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <div className="px-6 py-3 bg-primary/10 rounded-lg">
                            <div className="text-2xl font-bold text-primary">500+</div>
                            <div className="text-sm text-muted-foreground">Activités</div>
                        </div>
                        <div className="px-6 py-3 bg-secondary/10 rounded-lg">
                            <div className="text-2xl font-bold text-secondary">50+</div>
                            <div className="text-sm text-muted-foreground">Villes</div>
                        </div>
                        <div className="px-6 py-3 bg-primary/10 rounded-lg">
                            <div className="text-2xl font-bold text-primary">10K+</div>
                            <div className="text-sm text-muted-foreground">Avis</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
