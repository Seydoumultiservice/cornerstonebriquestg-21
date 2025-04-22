
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import OrdersList from "./OrdersList";

const OrdersContent = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mes Commandes</CardTitle>
        <CardDescription>
          Consultez et gérez toutes vos commandes.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <OrdersList />
      </CardContent>
    </Card>
  );
};

export default OrdersContent;
