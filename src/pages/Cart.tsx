
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Trash2, Plus, Minus, CreditCard, Truck } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useCart } from "@/context/CartContext";

// Format price to XOF
const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " XOF";
};

// Base price calculation (simulating price calculation logic)
const calculatePrice = (quantity: number): number => {
  const basePriceFor250 = 50000; // 50,000 XOF for 250 bricks
  
  if (quantity <= 0) return 0;
  
  // Apply discounts based on quantity
  if (quantity < 250) {
    return Math.round((basePriceFor250 / 250) * quantity);
  } else if (quantity < 1000) {
    return Math.round((basePriceFor250 / 250) * quantity * 0.95); // 5% discount
  } else if (quantity < 5000) {
    return Math.round((basePriceFor250 / 250) * quantity * 0.9); // 10% discount
  } else {
    return Math.round((basePriceFor250 / 250) * quantity * 0.85); // 15% discount
  }
};

const Cart = () => {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState("");
  
  // Calculate totals
  const subtotal = items.reduce((total, item) => {
    return total + calculatePrice(item.quantity);
  }, 0);
  
  const shipping = subtotal > 0 ? 5000 : 0; // 5,000 XOF shipping fee
  const discount = promoCode === "CORNERSTONE10" ? subtotal * 0.1 : 0; // 10% discount with promo code
  const total = subtotal + shipping - discount;

  const applyPromoCode = () => {
    if (promoCode === "CORNERSTONE10") {
      toast({
        title: "Code promo appliqué",
        description: "Vous avez obtenu une réduction de 10% sur votre commande.",
      });
    } else {
      toast({
        title: "Code promo invalide",
        description: "Le code promo saisi n'est pas valide.",
        variant: "destructive",
      });
    }
  };

  const checkout = () => {
    toast({
      title: "Commande en cours",
      description: "Redirection vers le processus de paiement...",
    });
    // In a real app, this would redirect to a checkout page
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-3 text-cornerstone-darkgray">
              Mon Panier
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Consultez et modifiez les produits dans votre panier avant de finaliser votre commande.
            </p>
          </div>

          {items.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-xl">Produits dans votre panier</CardTitle>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={clearCart}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Vider le panier
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {items.map((item) => (
                        <div key={item.id} className="flex flex-col md:flex-row gap-4 border-b pb-6">
                          <div className="w-full md:w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-medium text-lg">{item.name}</h3>
                            <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                            <div className="flex items-center mt-2">
                              <Button 
                                variant="outline" 
                                size="icon"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="mx-3 min-w-[40px] text-center">{item.quantity}</span>
                              <Button 
                                variant="outline" 
                                size="icon"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="text-right flex flex-col justify-between">
                            <div>
                              <p className="text-lg font-semibold">{formatPrice(calculatePrice(item.quantity))}</p>
                              <p className="text-sm text-gray-500">{formatPrice(calculatePrice(1))} / unité</p>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-600 self-end"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Link to="/boutique">
                      <Button variant="outline">
                        Continuer mes achats
                      </Button>
                    </Link>
                    <Button className="bg-cornerstone-blue hover:bg-blue-600" onClick={checkout}>
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Passer au paiement
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Résumé de la commande</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sous-total</span>
                        <span className="font-medium">{formatPrice(subtotal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Livraison</span>
                        <span className="font-medium">{formatPrice(shipping)}</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Réduction (10%)</span>
                          <span>-{formatPrice(discount)}</span>
                        </div>
                      )}
                      <div className="border-t pt-2 mt-2">
                        <div className="flex justify-between font-semibold text-lg">
                          <span>Total</span>
                          <span>{formatPrice(total)}</span>
                        </div>
                        <p className="text-gray-500 text-xs mt-1">TVA incluse si applicable</p>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="promo" className="block text-sm font-medium text-gray-700 mb-1">
                        Code Promo
                      </label>
                      <div className="flex space-x-2">
                        <Input
                          id="promo"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          placeholder="Entrez votre code"
                          className="flex-grow"
                        />
                        <Button 
                          variant="outline" 
                          onClick={applyPromoCode}
                        >
                          Appliquer
                        </Button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Essayez "CORNERSTONE10" pour obtenir 10% de réduction
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h3 className="font-medium mb-2 flex items-center">
                        <Truck className="h-5 w-5 mr-2 text-cornerstone-brown" />
                        Livraison
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Livraison gratuite à Lomé pour les commandes supérieures à 200 000 XOF.
                      </p>
                      <p className="text-sm text-gray-600">
                        Délai de livraison estimé: <span className="font-medium">2-3 jours ouvrables</span>
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h3 className="font-medium mb-2 flex items-center">
                        <CreditCard className="h-5 w-5 mr-2 text-cornerstone-blue" />
                        Modes de paiement acceptés
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <div className="bg-white px-2 py-1 rounded border text-xs">Carte bancaire</div>
                        <div className="bg-white px-2 py-1 rounded border text-xs">Mobile Money</div>
                        <div className="bg-white px-2 py-1 rounded border text-xs">Virement</div>
                        <div className="bg-white px-2 py-1 rounded border text-xs">Espèces</div>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-cornerstone-brick hover:bg-red-700"
                      onClick={checkout}
                    >
                      Passer au paiement
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm">
              <ShoppingCart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h2 className="text-2xl font-medium text-gray-900 mb-2">Votre panier est vide</h2>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                Vous n'avez aucun produit dans votre panier actuellement. Parcourez notre boutique pour trouver des produits de qualité.
              </p>
              <Link to="/boutique">
                <Button className="bg-cornerstone-blue hover:bg-blue-600">
                  Voir nos produits
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Cart;
