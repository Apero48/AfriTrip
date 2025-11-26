import { SearchTabs } from "@/components/features/SearchTabs";
import { DealCard } from "@/components/features/DealCard";
import { TravelPayoutsWidget } from "@/components/features/TravelPayoutsWidget";
import { Card } from "@/components/ui/card";
import { MapPin, TrendingUp, Star, Sparkles } from "lucide-react";

export default function Home() {
  const popularDestinations = [
    { name: "Abidjan", country: "Côte d'Ivoire", image: "/placeholder-abidjan.jpg" },
    { name: "Dakar", country: "Sénégal", image: "/placeholder-dakar.jpg" },
    { name: "Lagos", country: "Nigeria", image: "/placeholder-lagos.jpg" },
    { name: "Accra", country: "Ghana", image: "/placeholder-accra.jpg" },
  ];

  const deals = [
    {
      title: "Vol Paris - Abidjan",
      location: "Côte d'Ivoire",
      price: "450€",
      image: "/placeholder-flight.jpg",
    },
    {
      title: "Hôtel 5★ Dakar",
      location: "Sénégal",
      price: "89€/nuit",
      image: "/placeholder-hotel.jpg",
    },
    {
      title: "Location SUV Lagos",
      location: "Nigeria",
      price: "35€/jour",
      image: "/placeholder-car.jpg",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Meilleurs prix garantis</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Voyagez <span className="text-primary">dans le monde</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comparez et réservez vos vols, hôtels et voitures aux meilleurs prix partout dans le monde
            </p>
          </div>

          <SearchTabs />
        </div>
      </section>

      {/* Popular Routes Widget Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Routes populaires</h2>
          </div>
          <TravelPayoutsWidget
            type="popular-routes"
            description="Les itinéraires les plus recherchés vers et depuis l'Afrique"
          />
        </div>
      </section>

      {/* Best Offers Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-6 h-6 text-secondary" />
            <h2 className="text-3xl font-bold tracking-tight">Meilleures offres</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal, index) => (
              <DealCard key={index} {...deal} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations Widget */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Destinations populaires</h2>
          </div>
          <TravelPayoutsWidget
            type="popular-destinations"
            description="Découvrez les destinations les plus prisées en Afrique"
          />
        </div>
      </section>
    </div>
  );
}
