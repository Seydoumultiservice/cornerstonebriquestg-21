
import React, { useState } from 'react';
import { useToast } from '../hooks/use-toast';
import OrderSearch from '../components/tracking/OrderSearch';
import OrderStatus from '../components/tracking/OrderStatus';
import OrderDetails from '../components/tracking/OrderDetails';

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');
  const [orderInfo, setOrderInfo] = useState<any>(null);
  const { toast } = useToast();

  const mockOrderData = {
    id: '123456',
    status: 'preparation',
    estimatedDelivery: '15 mai 2025',
    address: '123 Rue de la République, 75001 Paris',
    items: [
      { name: 'Brique creuse 20x20x40', quantity: 100 },
      { name: 'Hourdis 16x20x40', quantity: 50 }
    ]
  };

  const handleSearch = () => {
    if (!orderId) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer un numéro de commande",
        variant: "destructive"
      });
      return;
    }

    // Simuler une recherche
    if (orderId === '123456') {
      setOrderInfo(mockOrderData);
    } else {
      toast({
        title: "Commande non trouvée",
        description: "Aucune commande ne correspond à ce numéro",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <OrderSearch 
        orderId={orderId}
        onOrderIdChange={setOrderId}
        onSearch={handleSearch}
      />
      
      {orderInfo && (
        <>
          <OrderStatus currentStatus={orderInfo.status} />
          <OrderDetails orderInfo={orderInfo} />
        </>
      )}
    </div>
  );
};

export default OrderTracking;
