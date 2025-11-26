"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Plane, Hotel, Car, User, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

export function BottomNav() {
    const pathname = usePathname();

    const items = [
        { href: "/", label: "Accueil", icon: Home },
        { href: "/flights", label: "Vols", icon: Plane },
        { href: "/hotels", label: "Hôtels", icon: Hotel },
        { href: "/cars", label: "Autos", icon: Car },
        { href: "/tours", label: "Tours", icon: Compass },
        { href: "/account", label: "Compte", icon: User },
    ];

    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-background border-t border-border md:hidden">
            <div className="grid h-full grid-cols-7 mx-auto font-medium text-xs">
                {items.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "inline-flex flex-col items-center justify-center px-5 hover:bg-muted group",
                                isActive ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            <Icon className={cn("w-6 h-6 mb-1", isActive && "text-primary")} />
                            <span className="text-xs">{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
