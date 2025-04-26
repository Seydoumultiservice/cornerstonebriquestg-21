
import React from 'react';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price?: number;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartSheetProps {
  items: CartItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  updateQuantity: (id: number, quantity: number) => void;
  calculatePrice: (quantity: number, product: Product) => number;
  formatPrice: (price: number) => string;
}

const CartSheet = ({ items, open, onOpenChange, updateQuantity, calculatePrice, formatPrice }: CartSheetProps) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  
  const totalPrice = items.reduce((sum, item) => {
    if (!item.price) return sum;
    return sum + calculatePrice(item.quantity, item);
  }, 0);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <ShoppingCart className="mr-2 h-5 w-5" />
          Panier
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-cornerstone-brick">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader className="mb-6">
          <SheetTitle>Votre Panier</SheetTitle>
          <SheetDescription>
            {items.length > 0 
              ? `Vous avez ${totalItems} produit${totalItems > 1 ? 's' : ''} dans votre panier.`
              : 'Votre panier est vide.'}
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-300px)]">
          {items.map((item) => (
            <div 
              key={item.id}
              className="flex space-x-4 border-b pb-4"
            >
              <div className="h-16 w-16 overflow-hidden rounded-md bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h4 className="text-sm font-medium">{item.name}</h4>
                  <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-7 w-7"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span>{item.quantity}</span>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-7 w-7"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-medium">
                      {item.price && formatPrice(calculatePrice(item.quantity, item))}
                    </span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-7 w-7 text-red-500 hover:text-red-700 hover:bg-red-100"
                      onClick={() => updateQuantity(item.id, 0)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {items.length === 0 && (
            <div className="py-10 text-center">
              <ShoppingCart className="h-12 w-12 mx-auto text-gray-400" />
              <p className="mt-4 text-gray-600">Votre panier est vide</p>
              <Button className="mt-6" asChild>
                <Link to="/nos-produits">Voir nos produits</Link>
              </Button>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="mt-6 flex-col">
            <div className="flex justify-between items-center py-2 font-medium">
              <span>Total</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>

            <div className="space-y-2 w-full">
              <Button className="w-full bg-cornerstone-blue hover:bg-blue-600" asChild>
                <Link to="/panier">Procéder au paiement</Link>
              </Button>
              <Button variant="outline" className="w-full" onClick={() => onOpenChange(false)}>
                Continuer vos achats
              </Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
