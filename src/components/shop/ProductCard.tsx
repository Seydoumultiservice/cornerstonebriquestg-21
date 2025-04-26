
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Minus, ShoppingCart, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price?: number;
  comingSoon?: boolean;
}

interface ProductCardProps {
  product: Product;
  quantity: number;
  onQuantityChange: (id: number, value: string) => void;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onAddToCart: (product: Product) => void;
  calculatePrice: (quantity: number, product: Product) => number;
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
      <div className="h-48 overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.comingSoon && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <Badge variant="secondary" className="text-md py-2 px-4 bg-yellow-500 text-white">
              <Clock className="mr-2 h-4 w-4" /> À venir
            </Badge>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {!product.comingSoon && (
          <>
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

            {quantity > 0 && product.price && (
              <div className="bg-cornerstone-lightgray p-3 rounded-md text-center mb-3">
                <p className="text-sm text-gray-600">Estimation pour {quantity} briques</p>
                <p className="text-lg font-bold text-cornerstone-darkgray">
                  {formatPrice(calculatePrice(quantity, product))}
                </p>
                {quantity >= 250 && quantity < 1000 && (
                  <p className="text-xs text-green-600 mt-1">5% de réduction appliquée</p>
                )}
                {quantity >= 1000 && quantity < 5000 && (
                  <p className="text-xs text-green-600 mt-1">10% de réduction appliquée</p>
                )}
                {quantity >= 5000 && (
                  <p className="text-xs text-green-600 mt-1">15% de réduction appliquée</p>
                )}
              </div>
            )}
          </>
        )}
        
        {product.comingSoon && (
          <p className="text-center text-gray-500 italic">Ce produit sera bientôt disponible. Restez informés !</p>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-cornerstone-blue hover:bg-blue-600"
          onClick={() => onAddToCart(product)}
          disabled={quantity <= 0 || product.comingSoon}
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> 
          {product.comingSoon ? "Indisponible" : "Ajouter au panier"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
