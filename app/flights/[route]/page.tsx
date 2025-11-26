import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Plane, Calendar, DollarSign, Users } from "lucide-react";
import { TravelPayoutsWidget } from "@/components/features/TravelPayoutsWidget";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { StructuredData, createFlightReservationSchema, createBreadcrumbSchema } from "@/components/seo/StructuredData";
import { popularRoutes } from "@/lib/data/routes";

interface FlightRoutePageProps {
    params: {
        route: string;
    };
}

export async function generateStaticParams() {
    return popularRoutes.map((route) => ({
        route: route.slug,
    }));
}

export async function generateMetadata({ params }: FlightRoutePageProps): Promise<Metadata> {
    const { route } = await params;
    const routeData = popularRoutes.find((r) => r.slug === route);

    if (!routeData) {
        return {
            title: "Route non trouvée - AfriTrip",
        };
    }

    const title = `Vols ${routeData.fromName} → ${routeData.toName} pas chers | Comparez les prix`;
    const description = `Trouvez les meilleurs vols de ${routeData.fromName} à ${routeData.toName}. Comparez les prix des compagnies aériennes et réservez votre billet d'avion au meilleur tarif avec AfriTrip.`;

    return {
        title,
        description,
        keywords: [
            `vols ${routeData.fromName} ${routeData.toName}`,
            `billet avion ${routeData.fromName} ${routeData.toName}`,
            `vols pas chers ${routeData.toName}`,
            `comparer prix vols ${routeData.fromName}`,
        ],
        openGraph: {
            title,
            description,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}

export default async function FlightRoutePage({ params }: FlightRoutePageProps) {
    const { route } = await params;
    const routeData = popularRoutes.find((r) => r.slug === route);

    if (!routeData) {
        notFound();
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const breadcrumbItems = [
        { label: "Vols", href: "/flights" },
        { label: `${routeData.fromName} → ${routeData.toName}`, href: `/flights/${params.route}` },
    ];

    return (
        <>
            <StructuredData
                data={createFlightReservationSchema({
                    from: routeData.fromName,
                    to: routeData.toName,
                })}
            />
            <StructuredData
                data={createBreadcrumbSchema([
                    { name: "Accueil", url: baseUrl },
                    { name: "Vols", url: `${baseUrl}/flights` },
                    { name: `${routeData.fromName} → ${routeData.toName}`, url: `${baseUrl}/flights/${params.route}` },
                ])}
            />

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-5xl mx-auto">
                    <Breadcrumbs items={breadcrumbItems} />

                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-primary/10 rounded-lg">
                            <Plane className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                                Vols {routeData.fromName} → {routeData.toName}
                            </h1>
                            <p className="text-muted-foreground mt-1">
                                Comparez les prix et trouvez les meilleures offres
                            </p>
                        </div>
                    </div>

                    {/* SEO Content */}
                    <div className="prose prose-lg max-w-none mb-8">
                        <p className="text-lg leading-relaxed">
                            {routeData.description} Notre comparateur vous permet de trouver rapidement les vols les moins chers
                            et de réserver en toute confiance.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">Pourquoi choisir AfriTrip pour votre vol {routeData.fromName} → {routeData.toName} ?</h2>
                        <p>
                            AfriTrip compare en temps réel les prix de centaines de compagnies aériennes pour vous garantir
                            les meilleurs tarifs. Que vous recherchiez un vol direct ou avec escale, un billet en classe économique
                            ou en business, notre plateforme vous aide à trouver l'option qui correspond à vos besoins et à votre budget.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">Comparez les prix des vols {routeData.fromName} → {routeData.toName}</h2>
                    </div>

                    {/* Search Widget */}
                    <div className="mb-8">
                        <TravelPayoutsWidget
                            type="search"
                            title="Trouvez votre vol au meilleur prix"
                            description="Comparez les prix et réservez maintenant"
                        />
                    </div>

                    {/* Popular Routes Widget */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Routes populaires</h2>
                        <TravelPayoutsWidget
                            type="popular-routes"
                            description="Découvrez d'autres destinations populaires"
                        />
                    </div>

                    {/* Additional SEO Content */}
                    <div className="prose prose-lg max-w-none mb-8">
                        <h2 className="text-2xl font-bold mt-8 mb-4">Conseils pour votre voyage {routeData.fromName} → {routeData.toName}</h2>
                        <p>
                            Pour obtenir les meilleurs prix, nous vous recommandons de réserver votre vol au moins 2 à 3 mois à l'avance.
                            Les tarifs varient selon la saison, les jours de la semaine et les événements locaux. Utilisez notre comparateur
                            pour suivre l'évolution des prix et réserver au moment le plus opportun.
                        </p>

                        <h3 className="text-xl font-bold mt-6 mb-3">Meilleurs moments pour réserver</h3>
                        <p>
                            Les vols en milieu de semaine (mardi et mercredi) sont généralement moins chers que les vols du week-end.
                            Évitez les périodes de vacances scolaires et les jours fériés pour bénéficier de tarifs plus avantageux.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="mt-12 grid md:grid-cols-4 gap-4">
                        <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg text-center">
                            <Calendar className="w-8 h-8 mx-auto mb-3 text-primary" />
                            <h3 className="font-semibold mb-2">Flexibilité</h3>
                            <p className="text-sm text-muted-foreground">Dates modifiables</p>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-lg text-center">
                            <DollarSign className="w-8 h-8 mx-auto mb-3 text-secondary" />
                            <h3 className="font-semibold mb-2">Meilleurs prix</h3>
                            <p className="text-sm text-muted-foreground">Garantie du prix le plus bas</p>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg text-center">
                            <Users className="w-8 h-8 mx-auto mb-3 text-primary" />
                            <h3 className="font-semibold mb-2">Support 24/7</h3>
                            <p className="text-sm text-muted-foreground">Assistance disponible</p>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-lg text-center">
                            <Plane className="w-8 h-8 mx-auto mb-3 text-secondary" />
                            <h3 className="font-semibold mb-2">Toutes compagnies</h3>
                            <p className="text-sm text-muted-foreground">Comparaison complète</p>
                        </div>
                    </div>

                    {/* Related Links */}
                    <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                        <h3 className="text-xl font-bold mb-4">Vous pourriez aussi être intéressé par :</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <a href={`/hotels/${routeData.to}`} className="text-primary hover:underline">
                                → Hôtels à {routeData.toName}
                            </a>
                            <a href={`/tours/${routeData.to}`} className="text-primary hover:underline">
                                → Activités et tours à {routeData.toName}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
