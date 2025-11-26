import { Metadata } from "next";
import { TravelPayoutsWidget } from "@/components/features/TravelPayoutsWidget";
import { Plane, Check } from "lucide-react";

export const metadata: Metadata = {
    title: "Vols pas chers - Comparez les prix | AfriTrip",
    description: "Trouvez les meilleurs vols au meilleur prix. Comparez des centaines de compagnies aériennes et réservez votre billet d'avion en quelques clics avec AfriTrip.",
    keywords: ["vols pas chers", "billet avion", "comparateur vol", "réservation vol"],
    alternates: {
        canonical: "/flights",
    },
};

export default function FlightsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                        <Plane className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Recherche de vols</h1>
                        <p className="text-muted-foreground mt-1">
                            Comparez des milliers de vols vers l'Afrique et le monde entier
                        </p>
                    </div>
                </div>

                {/* SEO Content */}
                <div className="prose prose-lg max-w-none mb-8">
                    <h2 className="text-2xl font-bold mb-4">Trouvez les vols les moins chers avec AfriTrip</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        AfriTrip est votre comparateur de vols intelligent qui analyse en temps réel les prix de centaines
                        de compagnies aériennes pour vous garantir les meilleurs tarifs. Que vous planifiez un voyage d'affaires,
                        des vacances en famille ou une escapade romantique, notre plateforme vous aide à économiser sur vos billets d'avion.
                    </p>
                    <p className="mb-4">
                        Comparez facilement les vols directs et avec escales, choisissez parmi différentes classes de voyage
                        (économique, premium, business, première classe) et réservez en toute confiance avec nos partenaires de confiance.
                    </p>
                </div>

                {/* Main Search Widget */}
                <div className="mb-8">
                    <TravelPayoutsWidget
                        type="search"
                        title="Trouvez les meilleurs prix"
                        description="Recherchez et comparez les vols de centaines de compagnies aériennes"
                    />
                </div>

                {/* Popular Routes */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Routes populaires</h2>
                    <TravelPayoutsWidget
                        type="popular-routes"
                        description="Découvrez les itinéraires les plus recherchés"
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
                                <h3 className="font-semibold mb-2">✈️ Vols directs</h3>
                                <p className="text-sm text-muted-foreground">
                                    Trouvez des vols directs vers vos destinations préférées
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
                                <h3 className="font-semibold mb-2">💰 Meilleurs prix</h3>
                                <p className="text-sm text-muted-foreground">
                                    Comparez les prix de centaines de compagnies aériennes
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
                                <h3 className="font-semibold mb-2">🔔 Alertes prix</h3>
                                <p className="text-sm text-muted-foreground">
                                    Recevez des notifications pour les meilleures offres
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
