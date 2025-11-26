import React from 'react';

interface StructuredDataProps {
    data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

// Helper functions for common schemas
export function createWebSiteSchema(url: string, name: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url,
        name,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${url}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };
}

export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

export function createFlightReservationSchema(data: {
    from: string;
    to: string;
    departureDate?: string;
    price?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FlightReservation',
        reservationFor: {
            '@type': 'Flight',
            departureAirport: {
                '@type': 'Airport',
                name: data.from,
            },
            arrivalAirport: {
                '@type': 'Airport',
                name: data.to,
            },
            departureTime: data.departureDate,
        },
        ...(data.price && {
            totalPrice: data.price,
            priceCurrency: 'EUR',
        }),
    };
}

export function createLodgingBusinessSchema(data: {
    name: string;
    city: string;
    description?: string;
    rating?: number;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'LodgingBusiness',
        name: data.name,
        address: {
            '@type': 'PostalAddress',
            addressLocality: data.city,
        },
        ...(data.description && { description: data.description }),
        ...(data.rating && {
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: data.rating,
                bestRating: '5',
            },
        }),
    };
}

export function createTouristTripSchema(data: {
    name: string;
    description: string;
    city: string;
    price?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'TouristTrip',
        name: data.name,
        description: data.description,
        touristType: 'Leisure',
        itinerary: {
            '@type': 'Place',
            address: {
                '@type': 'PostalAddress',
                addressLocality: data.city,
            },
        },
        ...(data.price && {
            offers: {
                '@type': 'Offer',
                price: data.price,
                priceCurrency: 'EUR',
            },
        }),
    };
}
