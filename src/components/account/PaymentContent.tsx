
import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PaymentContent = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mes Paiements</CardTitle>
        <CardDescription>
          Consultez et gérez vos méthodes de paiement.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8">
          <CreditCard className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">Aucun moyen de paiement</h3>
          <p className="mt-1 text-sm text-gray-500">
            Vous n'avez pas encore ajouté de moyen de paiement.
          </p>
          <div className="mt-6">
            <Button variant="default" className="bg-cornerstone-blue hover:bg-blue-600">
              Ajouter un moyen de paiement
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentContent;
