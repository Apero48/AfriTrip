"use client";

import { useState } from "react";
import { Plane, Hotel, Car } from "lucide-react";
import { cn } from "@/lib/utils";
import { TravelPayoutsWidget } from "@/components/features/TravelPayoutsWidget";

export function SearchTabs() {
    const [activeTab, setActiveTab] = useState<"flights" | "hotels" | "cars">("flights");

    const tabs = [
        { id: "flights", label: "Vols", icon: Plane },
        { id: "hotels", label: "Hôtels", icon: Hotel },
        { id: "cars", label: "Voitures", icon: Car },
    ] as const;

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="flex p-1 space-x-1 bg-muted/50 rounded-t-lg overflow-x-auto">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-all rounded-md flex-1 sm:flex-none",
                                isActive
                                    ? "bg-background text-primary shadow-sm"
                                    : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
                            )}
                        >
                            <Icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    );
                })}
            </div>
            <div className="rounded-b-lg overflow-hidden shadow-lg">
                <div className="min-h-[400px]">
                    {activeTab === "flights" && (
                        <TravelPayoutsWidget
                            type="search"
                            title="Trouvez votre vol"
                            description="Comparez des milliers de vols vers l'Afrique et le monde entier"
                        />
                    )}
                    {activeTab === "hotels" && (
                        <TravelPayoutsWidget
                            type="search"
                            title="Trouvez votre hôtel"
                            description="Des offres exclusives pour votre séjour"
                        />
                    )}
                    {activeTab === "cars" && (
                        <TravelPayoutsWidget
                            type="shuttles"
                            title="Location de voiture & Transferts"
                            description="Louez un véhicule ou réservez un transfert"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
