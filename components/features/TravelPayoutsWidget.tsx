"use client";

import React, { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

interface TravelPayoutsWidgetProps {
    type: "search" | "popular-routes" | "popular-destinations" | "shuttles" | "tours" | "city-tours" | "availability-calendar" | "popular-tours" | "things-to-do" | "hotel-search" | "price-map" | "testimonials";
    className?: string;
    title?: string;
    description?: string;
}

export function TravelPayoutsWidget({ type, className, title, description }: TravelPayoutsWidgetProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Small delay to ensure DOM is ready
        const timer = setTimeout(() => {
            if (!containerRef.current) return;

            // Remove any existing scripts in this container
            const existingScripts = containerRef.current.querySelectorAll('script');
            existingScripts.forEach(script => script.remove());

            // Create and inject the appropriate script
            const script = document.createElement('script');
            script.async = true;
            script.charset = 'utf-8';

            // Widget configurations
            const widgets = {
                "search": "https://tpemd.com/content?currency=usd&trs=384758&shmarker=441208&powered_by=true&locale=en&show_header=true&limit=4&primary_color=0066CC&results_background_color=FFFFFF&form_background_color=FFFFFF&campaign_id=111&promo_id=4478",
                "popular-routes": "https://tpemd.com/content?currency=usd&trs=384758&shmarker=441208&from_name=new-york-city_ny_us&to_name=toronto_on_ca&locale=en&powered_by=true&limit=4&primary_color=00AE98&results_background_color=FFFFFF&form_background_color=FFFFFF&campaign_id=111&promo_id=3411",
                "popular-destinations": "https://tpemd.com/content?currency=usd&trs=384758&shmarker=441208&locale=en&powered_by=true&from_name=TPE&to_name=tokyo_jp&limit=4&primary_color=00AE98&results_background_color=FFFFFF&form_background_color=FFFFFF&promo_id=4563&campaign_id=111",
                "shuttles": "https://tpemd.com/content?trs=384758&powered_by=true&shmarker=441208&from=new%20york&to=gatwick&language=en&display_currency=USD&transfer_type=economy&hide_form_extras=true&hide_external_links=true&disable_currency_selector=true&campaign_id=1&promo_id=691",
                "tours": "https://tpemd.com/content?currency=USD&trs=384758&shmarker=441208&product=973698%2C974155%2C1116725%2C1041116%2C1117285%2C1097924&language=en&layout=vertical&powered_by=true&campaign_id=89&promo_id=3948",
                "city-tours": "https://tpemd.com/content?currency=USD&trs=384758&shmarker=441208&product=973698%2C974155%2C1116725%2C1041116%2C1117285%2C1097924&language=en&layout=vertical&powered_by=true&campaign_id=89&promo_id=3948",
                "availability-calendar": "https://tpemd.com/content?currency=USD&trs=384758&shmarker=441208&language=en&layout=compact&orientation=vertical&powered_by=true&campaign_id=89&promo_id=3984",
                "popular-tours": "https://tpemd.com/content?currency=USD&trs=384758&shmarker=441208&language=en&locale=260937&layout=vertical&cards=1&powered_by=true&campaign_id=89&promo_id=3947",
                "things-to-do": "https://tpemd.com/content?trs=384758&shmarker=441208&locale=en&city_id=745044&tours=2&powered_by=true&campaign_id=150&promo_id=4489",
                "hotel-search": "https://tpemd.com/content?trs=384758&shmarker=441208&lang=www&layout=S10391&powered_by=true&campaign_id=121&promo_id=4038",
                "price-map": "https://tpemd.com/content?currency=usd&trs=384758&shmarker=441208&lat=51.51&lng=0.06&powered_by=true&search_host=www.aviasales.com%2Fsearch&locale=en&origin=LON&value_min=0&value_max=1000000&round_trip=true&only_direct=false&radius=1&draggable=true&disable_zoom=false&show_logo=false&scrollwheel=false&primary=%233FABDB&secondary=%233FABDB&light=%23ffffff&width=1500&height=500&zoom=2&promo_id=4054&campaign_id=100",
                "testimonials": "https://tpemd.com/content?currency=USD&trs=384758&shmarker=441208&locale=en&from=new%20york&to=gatwick&powered_by=true&show_logo=true&limit=10&bg_color=%23FFFFFF&font_color=%234a4a4a&stars_color=%23dcdcdc&stars_active_color=%23f8bb15&dots_color=%238c8c8c&loader_color=%23ffb300&arrows_color=%238c8c8c&autoscroll=false&autoscroll_delay=5000&promo_id=2948&campaign_id=1"
            };

            script.src = widgets[type];

            // Append script to container
            if (containerRef.current) {
                containerRef.current.appendChild(script);
            }
        }, 100);

        // Cleanup function
        return () => {
            clearTimeout(timer);
            if (containerRef.current) {
                const scripts = containerRef.current.querySelectorAll('script');
                scripts.forEach(s => s.remove());
            }
        };
    }, [type]);

    return (
        <Card className={`macos-card w-full overflow-hidden transition-all duration-300 hover:shadow-2xl ${className}`}>
            {(title || description) && (
                <div className="p-4 border-b border-white/20 bg-gradient-to-r from-primary/5 to-secondary/5">
                    {title && (
                        <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
                    )}
                    {description && (
                        <p className="text-sm text-muted-foreground">{description}</p>
                    )}
                </div>
            )}
            <div
                ref={containerRef}
                className="p-4 min-h-[300px] widget-container"
                style={{
                    position: 'relative',
                    zIndex: 1
                }}
            />
        </Card>
    );
}
