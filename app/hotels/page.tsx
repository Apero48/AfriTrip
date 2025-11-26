import { Metadata } from "next";
import { TravelPayoutsWidget } from "@/components/features/TravelPayoutsWidget";
import { Hotel, Check } from "lucide-react";

export const metadata: Metadata = {
    title: "Hôtels pas chers - Comparez et réservez | AfriTrip",
    description: "Trouvez les meilleurs hôtels au meilleur prix partout dans le monde. Comparez les prix, consultez les avis et réservez votre hébergement avec AfriTrip.",
    keywords: ["hôtels pas chers", "réservation hôtel", "comparateur hôtel", "hébergement"],
    alternates: {
        canonical: "/hotels",
    },
};

export default function HotelsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                        <Hotel className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Recherche d'hôtels</h1>
                        <p className="text-muted-foreground mt-1">
                            Trouvez l'hébergement parfait pour votre séjour
                        </p>
                    </div>
                </div>

                {/* Hotel Search Widget */}
                <div className="mb-8">
                    <TravelPayoutsWidget
                        type="hotel-search"
                        title="Recherche d'hôtels"
                        description="Trouvez l'hébergement parfait pour votre séjour"
                    />
                </div>

                {/* Price Map Widget */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Carte des prix</h2>
                    <TravelPayoutsWidget
                        type="price-map"
                        description="Visualisez les prix des hôtels sur la carte"
                    />
                </div>

                {/* Popular Destinations for Hotels */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Destinations populaires</h2>
                    <TravelPayoutsWidget
                        type="popular-destinations"
                        description="Les meilleures destinations pour votre prochain séjour"
                    />
                </div>

                {/* Features Grid */}
                <div className="mt-8 grid md:grid-cols-3 gap-4">
                    <div className="p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-lg border border-secondary/20 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-secondary/10 rounded-full">
                                <Check className="w-5 h-5 text-secondary" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">🏨 Tous types</h3>
                                <p className="text-sm text-muted-foreground">
                                    Hôtels, appartements, maisons d'hôtes et plus
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
                                <h3 className="font-semibold mb-2">⭐ Avis vérifiés</h3>
                                <p className="text-sm text-muted-foreground">
                                    Consultez les avis de vrais voyageurs
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
                                <h3 className="font-semibold mb-2">🎯 Annulation gratuite</h3>
                                <p className="text-sm text-muted-foreground">
                                    Flexibilité maximale pour vos réservations
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
