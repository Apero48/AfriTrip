import Link from "next/link";
import { Plane, Hotel, Car, User, Home } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hidden md:block">
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block text-primary text-xl">
                            AfriTrip
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link
                            href="/flights"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Vols
                        </Link>
                        <Link
                            href="/hotels"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Hôtels
                        </Link>
                        <Link
                            href="/cars"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Voitures
                        </Link>
                        <Link
                            href="/tours"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Tours
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <nav className="flex items-center">
                        <Link
                            href="/account"
                            className="transition-colors hover:text-foreground/80 text-foreground/60 flex items-center gap-2"
                        >
                            <User className="h-4 w-4" />
                            <span>Compte</span>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
