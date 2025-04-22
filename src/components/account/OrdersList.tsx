
import { Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Mock orders data
const orders = [
  {
    id: "CMD-2023-001",
    date: "15/04/2023",
    status: "Livré",
    total: "350 000 XOF",
    items: [
      { name: "Brique Creuse 15", quantity: 1000 },
      { name: "Hourdis Standard", quantity: 200 },
    ]
  },
  {
    id: "CMD-2023-002",
    date: "22/05/2023",
    status: "En production",
    total: "150 000 XOF",
    items: [
      { name: "Brique Pleine Standard", quantity: 500 },
    ]
  },
];

const OrdersList = () => {
  return (
    <>
      {orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Commande #{order.id}</CardTitle>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    order.status === "Livré" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-amber-100 text-amber-800"
                  }`}>
                    {order.status}
                  </span>
                </div>
                <CardDescription>
                  Date: {order.date} | Total: {order.total}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-700">
                  <h4 className="font-medium mb-2">Produits:</h4>
                  <ul className="list-disc list-inside space-y-1 pl-2">
                    {order.items.map((item, idx) => (
                      <li key={idx}>
                        {item.name} x {item.quantity}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Button variant="outline" size="sm">Détails</Button>
                {order.status !== "Livré" && (
                  <Button size="sm" className="bg-cornerstone-blue hover:bg-blue-600">
                    Suivre
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <Package className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">Aucune commande</h3>
          <p className="mt-1 text-sm text-gray-500">
            Vous n'avez pas encore passé de commande.
          </p>
          <div className="mt-6">
            <Button className="bg-cornerstone-brick hover:bg-red-700">
              Voir nos produits
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default OrdersList;
