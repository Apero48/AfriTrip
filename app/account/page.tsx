import { User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AccountPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                        <User className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Mon compte</h1>
                        <p className="text-muted-foreground mt-1">
                            Gérez vos réservations et préférences
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Connexion</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">
                                Connectez-vous pour accéder à vos réservations et alertes de prix.
                            </p>
                            <div className="flex gap-4">
                                <Button className="flex-1">Se connecter</Button>
                                <Button variant="outline" className="flex-1">S'inscrire</Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Fonctionnalités à venir</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>✓ Historique des recherches</li>
                                <li>✓ Alertes de prix personnalisées</li>
                                <li>✓ Favoris et listes de souhaits</li>
                                <li>✓ Gestion des réservations</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
