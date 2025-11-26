import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AfriTrip - Comparateur de vols, hôtels et transferts dans le monde",
  description: "Trouvez les meilleurs vols, hôtels et transferts partout dans le monde. Comparez les prix et réservez facilement avec AfriTrip.",
  keywords: ["vols pas chers", "hôtels", "comparateur voyage", "réservation vol", "transferts aéroport", "voyage monde"],
  openGraph: {
    title: "AfriTrip - Comparateur de voyage mondial",
    description: "Comparez et réservez vos vols, hôtels et transferts aux meilleurs prix partout dans le monde.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "AfriTrip - Comparateur de voyage mondial",
    description: "Trouvez les meilleurs prix pour vos voyages dans le monde entier.",
  },
};

import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
