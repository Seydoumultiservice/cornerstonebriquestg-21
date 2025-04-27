
import React from 'react';

interface OrderDetailsProps {
  orderInfo: {
    id: string;
    status: string;
    estimatedDelivery: string;
    address: string;
    items: Array<{
      name: string;
      quantity: number;
    }>;
  };
}

const OrderDetails = ({ orderInfo }: OrderDetailsProps) => {
  return (
    <div className="mt-8 w-full max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4">Détails de la commande</h3>
      <div className="space-y-4">
        <div>
          <p className="font-medium">Numéro de commande:</p>
          <p className="text-gray-600">{orderInfo.id}</p>
        </div>
        <div>
          <p className="font-medium">Livraison estimée:</p>
          <p className="text-gray-600">{orderInfo.estimatedDelivery}</p>
        </div>
        <div>
          <p className="font-medium">Adresse de livraison:</p>
          <p className="text-gray-600">{orderInfo.address}</p>
        </div>
        <div>
          <p className="font-medium">Articles:</p>
          <ul className="list-disc list-inside text-gray-600">
            {orderInfo.items.map((item, index) => (
              <li key={index}>
                {item.name} x{item.quantity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
