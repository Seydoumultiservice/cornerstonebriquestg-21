
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

const HistoryContent = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="text-center py-8">
          <Clock className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">Aucun historique</h3>
          <p className="mt-1 text-sm text-gray-500">
            Vous n'avez pas encore d'historique d'activité.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default HistoryContent;
