import { ShieldCheck, Headset, CreditCard, Award } from "lucide-react";

export function TrustSection() {
    const features = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-primary" />,
            title: "Paiement Sécurisé",
            description: "Transactions cryptées et sécurisées",
        },
        {
            icon: <Headset className="w-8 h-8 text-secondary" />,
            title: "Support 24/7",
            description: "Une équipe à votre écoute",
        },
        {
            icon: <CreditCard className="w-8 h-8 text-primary" />,
            title: "Meilleurs Prix",
            description: "Garantie des tarifs les plus bas",
        },
        {
            icon: <Award className="w-8 h-8 text-secondary" />,
            title: "Service Premium",
            description: "Plus de 1000+ clients satisfaits",
        },
    ];

    return (
        <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-background/50 transition-colors">
                            <div className="mb-4 p-3 bg-background rounded-full shadow-sm">
                                {feature.icon}
                            </div>
                            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
