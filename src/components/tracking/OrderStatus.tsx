
import React from 'react';
import { Package, Route, Flag } from 'lucide-react';

interface OrderStatusProps {
  currentStatus: string;
}

const OrderStatus = ({ currentStatus }: OrderStatusProps) => {
  return (
    <div className="mt-8 w-full max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col items-center gap-2">
          <div className={`p-3 rounded-full ${currentStatus === 'preparation' ? 'bg-primary text-white' : 'bg-gray-200'}`}>
            <Package className="h-6 w-6" />
          </div>
          <span className="text-sm">Préparation</span>
        </div>
        <div className="flex-1 h-1 bg-gray-200 mx-2">
          <div className={`h-full bg-primary ${currentStatus === 'livraison' || currentStatus === 'livree' ? 'w-full' : 'w-0'} transition-all duration-500`} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className={`p-3 rounded-full ${currentStatus === 'livraison' ? 'bg-primary text-white' : 'bg-gray-200'}`}>
            <Route className="h-6 w-6" />
          </div>
          <span className="text-sm">En livraison</span>
        </div>
        <div className="flex-1 h-1 bg-gray-200 mx-2">
          <div className={`h-full bg-primary ${currentStatus === 'livree' ? 'w-full' : 'w-0'} transition-all duration-500`} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className={`p-3 rounded-full ${currentStatus === 'livree' ? 'bg-primary text-white' : 'bg-gray-200'}`}>
            <Flag className="h-6 w-6" />
          </div>
          <span className="text-sm">Livrée</span>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
