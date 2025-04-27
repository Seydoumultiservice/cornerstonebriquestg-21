
import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface OrderSearchProps {
  orderId: string;
  onOrderIdChange: (value: string) => void;
  onSearch: () => void;
}

const OrderSearch = ({ orderId, onOrderIdChange, onSearch }: OrderSearchProps) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center">Suivi de commande</h2>
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Entrez votre numéro de commande"
          value={orderId}
          onChange={(e) => onOrderIdChange(e.target.value)}
          className="flex-1"
        />
        <Button onClick={onSearch}>Rechercher</Button>
      </div>
    </div>
  );
};

export default OrderSearch;
