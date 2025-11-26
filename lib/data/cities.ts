export interface PopularCity {
    slug: string;
    name: string;
    country: string;
    continent: string;
    description: string;
    attractions: string[];
}

export const popularCities: PopularCity[] = [
    {
        slug: "paris",
        name: "Paris",
        country: "France",
        continent: "Europe",
        description: "La Ville Lumière, capitale de la France, célèbre pour la Tour Eiffel, le Louvre et ses monuments historiques.",
        attractions: ["Tour Eiffel", "Musée du Louvre", "Arc de Triomphe", "Notre-Dame"]
    },
    {
        slug: "abidjan",
        name: "Abidjan",
        country: "Côte d'Ivoire",
        continent: "Afrique",
        description: "Capitale économique de la Côte d'Ivoire, ville dynamique avec ses quartiers modernes et ses plages.",
        attractions: ["Plateau", "Basilique Saint-Paul", "Parc du Banco", "Marché de Cocody"]
    },
    {
        slug: "dakar",
        name: "Dakar",
        country: "Sénégal",
        continent: "Afrique",
        description: "Capitale du Sénégal, ville côtière vibrante connue pour son histoire, sa culture et ses plages.",
        attractions: ["Île de Gorée", "Monument de la Renaissance", "Marché Sandaga", "Lac Rose"]
    },
    {
        slug: "lagos",
        name: "Lagos",
        country: "Nigeria",
        continent: "Afrique",
        description: "Mégapole nigériane, centre économique de l'Afrique de l'Ouest, ville dynamique et cosmopolite.",
        attractions: ["Victoria Island", "Lekki Beach", "National Museum", "Freedom Park"]
    },
    {
        slug: "accra",
        name: "Accra",
        country: "Ghana",
        continent: "Afrique",
        description: "Capitale du Ghana, ville côtière alliant modernité et traditions, porte d'entrée de l'Afrique de l'Ouest.",
        attractions: ["Kwame Nkrumah Memorial", "Labadi Beach", "Makola Market", "Independence Square"]
    },
    {
        slug: "casablanca",
        name: "Casablanca",
        country: "Maroc",
        continent: "Afrique",
        description: "Plus grande ville du Maroc, centre économique avec son architecture art déco et sa mosquée Hassan II.",
        attractions: ["Mosquée Hassan II", "Corniche", "Quartier Habous", "Place Mohammed V"]
    },
    {
        slug: "new-york",
        name: "New York",
        country: "États-Unis",
        continent: "Amérique du Nord",
        description: "La ville qui ne dort jamais, métropole mondiale célèbre pour ses gratte-ciels et sa diversité culturelle.",
        attractions: ["Statue de la Liberté", "Times Square", "Central Park", "Empire State Building"]
    },
    {
        slug: "london",
        name: "Londres",
        country: "Royaume-Uni",
        continent: "Europe",
        description: "Capitale britannique, ville historique mêlant tradition et modernité, centre culturel et financier mondial.",
        attractions: ["Big Ben", "Tower Bridge", "British Museum", "Buckingham Palace"]
    },
    {
        slug: "dubai",
        name: "Dubaï",
        country: "Émirats Arabes Unis",
        continent: "Asie",
        description: "Ville futuriste du désert, connue pour ses gratte-ciels, son luxe et ses attractions modernes.",
        attractions: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Dubai Marina"]
    },
    {
        slug: "tokyo",
        name: "Tokyo",
        country: "Japon",
        continent: "Asie",
        description: "Capitale japonaise, mégapole ultra-moderne alliant technologie de pointe et traditions ancestrales.",
        attractions: ["Tour de Tokyo", "Shibuya Crossing", "Senso-ji", "Palais Impérial"]
    },
];
