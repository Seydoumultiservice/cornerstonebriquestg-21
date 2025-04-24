
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Minus, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
  quantity: number;
  onQuantityChange: (id: number, value: string) => void;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onAddToCart: (product: any) => void;
  calculatePrice: (quantity: number) => number;
  formatPrice: (price: number) => string;
}

const ProductCard = ({
  product,
  quantity,
  onQuantityChange,
  onIncrement,
  onDecrement,
  onAddToCart,
  calculatePrice,
  formatPrice
}: ProductCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-3 mb-4">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => onDecrement(product.id)}
            disabled={quantity <= 0}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Input
            type="number"
            value={quantity || ""}
            onChange={(e) => onQuantityChange(product.id, e.target.value)}
            min={0}
            placeholder="Quantité"
            className="text-center"
          />
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => onIncrement(product.id)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {quantity > 0 && (
          <div className="bg-cornerstone-lightgray p-3 rounded-md text-center mb-3">
            <p className="text-sm text-gray-600">Estimation pour {quantity} briques</p>
            <p className="text-lg font-bold text-cornerstone-darkgray">
              {formatPrice(calculatePrice(quantity))}
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-cornerstone-blue hover:bg-blue-600"
          onClick={() => onAddToCart(product)}
          disabled={quantity <= 0}
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> Ajouter au panier
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
