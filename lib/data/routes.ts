export interface PopularRoute {
    slug: string;
    from: string;
    to: string;
    fromName: string;
    toName: string;
    fromCountry: string;
    toCountry: string;
    description: string;
}

export const popularRoutes: PopularRoute[] = [
    {
        slug: "paris-to-abidjan",
        from: "paris",
        to: "abidjan",
        fromName: "Paris",
        toName: "Abidjan",
        fromCountry: "France",
        toCountry: "Côte d'Ivoire",
        description: "Trouvez les meilleurs vols de Paris à Abidjan. Comparez les prix des compagnies aériennes et réservez votre billet d'avion au meilleur tarif."
    },
    {
        slug: "paris-to-dakar",
        from: "paris",
        to: "dakar",
        fromName: "Paris",
        toName: "Dakar",
        fromCountry: "France",
        toCountry: "Sénégal",
        description: "Vols pas chers Paris → Dakar. Comparez les prix et trouvez les meilleures offres pour votre voyage au Sénégal."
    },
    {
        slug: "new-york-to-lagos",
        from: "new-york",
        to: "lagos",
        fromName: "New York",
        toName: "Lagos",
        fromCountry: "États-Unis",
        toCountry: "Nigeria",
        description: "Réservez votre vol New York → Lagos aux meilleurs prix. Comparez les compagnies aériennes et économisez sur votre billet."
    },
    {
        slug: "london-to-accra",
        from: "london",
        to: "accra",
        fromName: "Londres",
        toName: "Accra",
        fromCountry: "Royaume-Uni",
        toCountry: "Ghana",
        description: "Vols Londres → Accra : comparez les prix et réservez votre vol pour le Ghana au meilleur tarif."
    },
    {
        slug: "brussels-to-kinshasa",
        from: "brussels",
        to: "kinshasa",
        fromName: "Bruxelles",
        toName: "Kinshasa",
        fromCountry: "Belgique",
        toCountry: "RD Congo",
        description: "Trouvez les vols les moins chers de Bruxelles à Kinshasa. Comparez et réservez facilement."
    },
    {
        slug: "paris-to-casablanca",
        from: "paris",
        to: "casablanca",
        fromName: "Paris",
        toName: "Casablanca",
        fromCountry: "France",
        toCountry: "Maroc",
        description: "Vols Paris → Casablanca pas chers. Trouvez les meilleures offres pour votre voyage au Maroc."
    },
    {
        slug: "paris-to-tunis",
        from: "paris",
        to: "tunis",
        fromName: "Paris",
        toName: "Tunis",
        fromCountry: "France",
        toCountry: "Tunisie",
        description: "Comparez les vols Paris → Tunis et réservez au meilleur prix pour la Tunisie."
    },
    {
        slug: "montreal-to-abidjan",
        from: "montreal",
        to: "abidjan",
        fromName: "Montréal",
        toName: "Abidjan",
        fromCountry: "Canada",
        toCountry: "Côte d'Ivoire",
        description: "Vols Montréal → Abidjan : trouvez les meilleurs tarifs pour votre voyage en Côte d'Ivoire."
    },
    {
        slug: "washington-to-addis-ababa",
        from: "washington",
        to: "addis-ababa",
        fromName: "Washington",
        toName: "Addis-Abeba",
        fromCountry: "États-Unis",
        toCountry: "Éthiopie",
        description: "Réservez votre vol Washington → Addis-Abeba aux meilleurs prix vers l'Éthiopie."
    },
    {
        slug: "paris-to-douala",
        from: "paris",
        to: "douala",
        fromName: "Paris",
        toName: "Douala",
        fromCountry: "France",
        toCountry: "Cameroun",
        description: "Vols pas chers Paris → Douala. Comparez et réservez pour le Cameroun."
    },
];
