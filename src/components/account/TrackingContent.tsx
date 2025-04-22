
import { Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TrackingContent = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Suivi de Production</CardTitle>
        <CardDescription>
          Suivez l'avancement de vos commandes en temps réel.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8">
          <Clock className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">Aucune commande en cours</h3>
          <p className="mt-1 text-sm text-gray-500">
            Vous n'avez pas de commande en cours de production.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrackingContent;
