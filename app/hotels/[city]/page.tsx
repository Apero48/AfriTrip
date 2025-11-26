import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hotel, Star, MapPin, Check } from "lucide-react";
import { TravelPayoutsWidget } from "@/components/features/TravelPayoutsWidget";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { StructuredData, createLodgingBusinessSchema, createBreadcrumbSchema } from "@/components/seo/StructuredData";
import { popularCities } from "@/lib/data/cities";

interface HotelCityPageProps {
    params: {
        city: string;
    };
}

export async function generateStaticParams() {
    return popularCities.map((city) => ({
        city: city.slug,
    }));
}

export async function generateMetadata({ params }: HotelCityPageProps): Promise<Metadata> {
    const { city } = await params;
    const cityData = popularCities.find((c) => c.slug === city);

    if (!cityData) {
        return {
            title: "Ville non trouvée - AfriTrip",
        };
    }

    const title = `Hôtels à ${cityData.name} pas chers | Comparez et réservez`;
    const description = `Découvrez les meilleurs hôtels à ${cityData.name}, ${cityData.country}. Comparez les prix, consultez les avis et réservez votre hébergement au meilleur tarif avec AfriTrip.`;

    return {
        title,
        description,
        keywords: [
            `hôtels ${cityData.name}`,
            `hébergement ${cityData.name}`,
            `hôtels pas chers ${cityData.name}`,
            `réservation hôtel ${cityData.country}`,
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

export default async function HotelCityPage({ params }: HotelCityPageProps) {
    const { city } = await params;
    const cityData = popularCities.find((c) => c.slug === city);

    if (!cityData) {
        notFound();
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const breadcrumbItems = [
        { label: "Hôtels", href: "/hotels" },
        { label: cityData.name, href: `/hotels/${params.city}` },
    ];

    return (
        <>
            <StructuredData
                data={createLodgingBusinessSchema({
                    name: `Hôtels à ${cityData.name}`,
                    city: cityData.name,
                    description: cityData.description,
                })}
            />
            <StructuredData
                data={createBreadcrumbSchema([
                    { name: "Accueil", url: baseUrl },
                    { name: "Hôtels", url: `${baseUrl}/hotels` },
                    { name: cityData.name, url: `${baseUrl}/hotels/${params.city}` },
                ])}
            />

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-5xl mx-auto">
                    <Breadcrumbs items={breadcrumbItems} />

                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-secondary/10 rounded-lg">
                            <Hotel className="w-8 h-8 text-secondary" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                                Hôtels à {cityData.name}
                            </h1>
                            <p className="text-muted-foreground mt-1 flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {cityData.country} • {cityData.continent}
                            </p>
                        </div>
                    </div>

                    {/* SEO Content */}
                    <div className="prose prose-lg max-w-none mb-8">
                        <p className="text-lg leading-relaxed">
                            {cityData.description} Trouvez l'hébergement parfait pour votre séjour à {cityData.name}
                            en comparant les prix de centaines d'hôtels, appartements et maisons d'hôtes.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">Pourquoi réserver votre hôtel à {cityData.name} avec AfriTrip ?</h2>
                        <p>
                            AfriTrip vous permet de comparer en temps réel les prix de tous les types d'hébergements à {cityData.name}.
                            Que vous recherchiez un hôtel de luxe, une auberge économique ou un appartement avec cuisine,
                            notre plateforme vous aide à trouver l'option idéale pour votre budget et vos préférences.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">Trouvez votre hébergement idéal à {cityData.name}</h2>
                    </div>

                    {/* Search Widget */}
                    <div className="mb-8">
                        <TravelPayoutsWidget
                            type="search"
                            title="Comparez les prix des hôtels"
                            description="Réservez maintenant et économisez jusqu'à 30%"
                        />
                    </div>

                    {/* Popular Destinations Widget */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Autres destinations populaires</h2>
                        <TravelPayoutsWidget
                            type="popular-destinations"
                            description="Découvrez d'autres villes à explorer"
                        />
                    </div>

                    {/* Additional SEO Content */}
                    <div className="prose prose-lg max-w-none mb-8">
                        <h2 className="text-2xl font-bold mt-8 mb-4">Que voir et faire à {cityData.name} ?</h2>
                        <p>
                            {cityData.name} offre de nombreuses attractions et activités pour tous les goûts.
                            Voici quelques incontournables à ne pas manquer lors de votre visite :
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            {cityData.attractions.map((attraction, index) => (
                                <li key={index}>{attraction}</li>
                            ))}
                        </ul>

                        <h3 className="text-xl font-bold mt-6 mb-3">Meilleurs quartiers où séjourner</h3>
                        <p>
                            Le choix du quartier est essentiel pour profiter pleinement de votre séjour.
                            Utilisez notre comparateur pour trouver des hôtels dans les zones les plus prisées,
                            proches des attractions principales et bien desservies par les transports en commun.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="mt-12 grid md:grid-cols-4 gap-4">
                        <div className="p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-lg text-center">
                            <Star className="w-8 h-8 mx-auto mb-3 text-secondary" />
                            <h3 className="font-semibold mb-2">Avis vérifiés</h3>
                            <p className="text-sm text-muted-foreground">Commentaires authentiques</p>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg text-center">
                            <Check className="w-8 h-8 mx-auto mb-3 text-primary" />
                            <h3 className="font-semibold mb-2">Meilleurs prix</h3>
                            <p className="text-sm text-muted-foreground">Garantie du tarif le plus bas</p>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-lg text-center">
                            <Hotel className="w-8 h-8 mx-auto mb-3 text-secondary" />
                            <h3 className="font-semibold mb-2">Large choix</h3>
                            <p className="text-sm text-muted-foreground">Tous types d'hébergement</p>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg text-center">
                            <MapPin className="w-8 h-8 mx-auto mb-3 text-primary" />
                            <h3 className="font-semibold mb-2">Bien situés</h3>
                            <p className="text-sm text-muted-foreground">Proche des attractions</p>
                        </div>
                    </div>

                    {/* Related Links */}
                    <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                        <h3 className="text-xl font-bold mb-4">Planifiez votre voyage à {cityData.name} :</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <a href="/flights" className="text-primary hover:underline">
                                → Vols vers {cityData.name}
                            </a>
                            <a href={`/tours/${params.city}`} className="text-primary hover:underline">
                                → Activités et tours à {cityData.name}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
