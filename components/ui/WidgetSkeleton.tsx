import { Card } from "@/components/ui/card";

export function WidgetSkeleton() {
    return (
        <Card className="w-full overflow-hidden bg-white shadow-md">
            <div className="p-4 border-b bg-gradient-to-r from-primary/5 to-secondary/5 animate-pulse">
                <div className="h-6 bg-muted rounded w-1/3 mb-2"></div>
                <div className="h-4 bg-muted rounded w-2/3"></div>
            </div>
            <div className="p-4 space-y-4">
                <div className="h-12 bg-muted rounded animate-pulse"></div>
                <div className="h-64 bg-muted rounded animate-pulse"></div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-muted rounded animate-pulse"></div>
                    <div className="h-32 bg-muted rounded animate-pulse"></div>
                </div>
            </div>
        </Card>
    );
}
