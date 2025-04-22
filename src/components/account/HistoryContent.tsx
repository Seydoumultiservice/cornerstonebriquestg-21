
import { History } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HistoryContent = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Historique</CardTitle>
        <CardDescription>
          Consultez l'historique de vos activités.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8">
          <History className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">Aucune activité récente</h3>
          <p className="mt-1 text-sm text-gray-500">
            Votre historique d'activités apparaîtra ici.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default HistoryContent;
