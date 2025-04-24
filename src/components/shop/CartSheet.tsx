
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CartItem } from '@/context/CartContext';

interface CartSheetProps {
  items: CartItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  updateQuantity: (id: number, quantity: number) => void;
  calculatePrice: (quantity: number) => number;
  formatPrice: (price: number) => string;
}

const CartSheet = ({ 
  items, 
  open, 
  onOpenChange, 
  updateQuantity,
  calculatePrice,
  formatPrice 
}: CartSheetProps) => {
  const subtotal = items.reduce((total, item) => {
    return total + calculatePrice(item.quantity);
  }, 0);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button className="bg-cornerstone-blue hover:bg-blue-600">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Voir le panier ({items.length})
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[350px] sm:w-[450px]">
        <SheetHeader>
          <SheetTitle>Votre Panier</SheetTitle>
          <SheetDescription>
            {items.length > 0 
              ? `Vous avez ${items.length} produit(s) dans votre panier.`
              : "Votre panier est vide."
            }
          </SheetDescription>
        </SheetHeader>
        
        <div className="py-6">
          {items.length > 0 ? (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b">
                  <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-500 text-sm mb-1">{item.description}</p>
                    <div className="flex items-center mt-1">
                      <Button 
                        variant="outline" 
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="mx-2 text-sm">{item.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <span className="ml-auto text-sm font-medium">
                        {formatPrice(calculatePrice(item.quantity))}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="pt-4">
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Sous-total:</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <p className="text-xs text-gray-500 mb-6">
                  Livraison et taxes calculées à l'étape suivante
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <ShoppingCart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Votre panier est vide.</p>
            </div>
          )}
        </div>
        
        <SheetFooter className="sm:justify-start">
          <div className="space-y-3 w-full">
            <Link to="/panier" className="w-full block">
              <Button className="w-full bg-cornerstone-brick hover:bg-red-700">
                Voir le panier complet
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => onOpenChange(false)}
            >
              Continuer mes achats
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
