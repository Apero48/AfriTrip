import { Metadata } from "next";
import { TravelPayoutsWidget } from "@/components/features/TravelPayoutsWidget";
import { Car, Check } from "lucide-react";

export const metadata: Metadata = {
    title: "Location de voitures & Transferts - Meilleurs prix | AfriTrip",
    description: "Louez une voiture ou réservez un transfert aéroport aux meilleurs prix. Comparez les offres et réservez facilement avec AfriTrip.",
    keywords: ["location voiture", "transfert aéroport", "navette", "location auto"],
    alternates: {
        canonical: "/cars",
    },
};

export default function CarsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                        <Car className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Location de voitures & Transferts</h1>
                        <p className="text-muted-foreground mt-1">
                            Louez une voiture ou réservez un transfert pour explorer en toute liberté
                        </p>
                    </div>
                </div>

                {/* Shuttles Widget */}
                <div className="mb-8">
                    <TravelPayoutsWidget
                        type="shuttles"
                        title="Location de voitures & Transferts"
                        description="Transferts aéroport, navettes et location de voitures"
                    />
                </div>

                {/* Testimonials Widget */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Témoignages</h2>
                    <TravelPayoutsWidget
                        type="testimonials"
                        description="Ce que nos clients disent de nous"
                    />
                </div>

                {/* Features Grid */}
                <div className="mt-8 grid md:grid-cols-3 gap-4">
                    <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border border-primary/20 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-primary/10 rounded-full">
                                <Check className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">🚗 Large choix</h3>
                                <p className="text-sm text-muted-foreground">
                                    Économiques, SUV, luxe - tous types de véhicules
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-lg border border-secondary/20 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-secondary/10 rounded-full">
                                <Check className="w-5 h-5 text-secondary" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">🛡️ Assurance incluse</h3>
                                <p className="text-sm text-muted-foreground">
                                    Protection complète pour votre tranquillité
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border border-primary/20 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-primary/10 rounded-full">
                                <Check className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">📍 Prise en charge</h3>
                                <p className="text-sm text-muted-foreground">
                                    Aéroport ou centre-ville, à votre convenance
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
