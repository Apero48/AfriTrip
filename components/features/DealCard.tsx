import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface DealCardProps {
    title: string;
    location: string;
    price: string;
    image: string;
}

export function DealCard({ title, location, price, image }: DealCardProps) {
    return (
        <Card className="overflow-hidden group cursor-pointer transition-all hover:shadow-lg">
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-bold">
                    Promo
                </div>
            </div>
            <CardHeader className="p-4">
                <CardTitle className="text-lg">{title}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <MapPin className="w-3 h-3 mr-1" />
                    {location}
                </div>
            </CardHeader>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">À partir de</span>
                    <span className="text-xl font-bold text-secondary">{price}</span>
                </div>
                <Button size="sm" variant="outline">Voir</Button>
            </CardFooter>
        </Card>
    );
}
