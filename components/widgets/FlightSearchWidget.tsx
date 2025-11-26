"use client";

import { TravelPayoutsWidget } from "@/components/features/TravelPayoutsWidget";

export default function FlightSearchWidget() {
    return (
        <div className="w-full">
            <TravelPayoutsWidget
                type="search"
                priority={true}
                className="!shadow-none !border-0 !bg-transparent"
            />
        </div>
    );
}
