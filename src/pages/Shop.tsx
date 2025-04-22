
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Utilisation des images réelles chargées par l'utilisateur :
const productImages = [
  "/lovable-uploads/0d785652-336c-4ddb-9369-1a11b73674c1.png",
  "/lovable-uploads/1fbdfa4a-8390-4d00-b613-77c259841a6f.png",
  "/lovable-uploads/3f0cee3a-c66e-454f-afad-9f201c95b3b6.png",
  "/lovable-uploads/b07aa7d4-7fda-47a3-babd-c0ffc56c3d9a.png",
  "/lovable-uploads/eb145d05-2402-4da8-9fbd-34bfdfdecd32.png"
];

// Répartition des images pour les produits (ajustée au nombre de produits de chaque catégorie)
const products = {
  creuses: [
    { id: 1, name: "10 Creux", description: "Brique creuse standard 10cm", image: productImages[0] },
    { id: 2, name: "12 Creux", description: "Brique creuse standard 12cm", image: productImages[1] },
    { id: 3, name: "15 Creux", description: "Brique creuse standard 15cm", image: productImages[2] }
  ],
  pleines: [
    { id: 4, name: "Brique Pleine Standard", description: "Brique pleine pour murs porteurs", image: productImages[3] },
    { id: 5, name: "Brique Pleine Grande", description: "Grande brique pleine pour structures", image: productImages[4] }
  ],
  hourdis: [
    { id: 6, name: "Hourdis Standard", description: "Hourdis pour planchers", image: productImages[1] },
    { id: 7, name: "Hourdis Léger", description: "Hourdis léger pour toitures", image: productImages[2] }
  ]
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

// Format price to XOF
const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " XOF";
};

const Shop = () => {
  const { category = "creuses" } = useParams<{ category?: string }>();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [activeTab, setActiveTab] = useState<string>(
    category === "pleines" ? "pleines" : 
    category === "hourdis" ? "hourdis" : "creuses"
  );
  const [cartOpen, setCartOpen] = useState(false);
  
  const { addToCart, items, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (id: number, value: string) => {
    const quantity = parseInt(value) || 0;
    if (quantity >= 0) {
      setQuantities({ ...quantities, [id]: quantity });
    }
  };

  const incrementQuantity = (id: number) => {
    const currentQuantity = quantities[id] || 0;
    setQuantities({ ...quantities, [id]: currentQuantity + 1 });
  };

  const decrementQuantity = (id: number) => {
    const currentQuantity = quantities[id] || 0;
    if (currentQuantity > 0) {
      setQuantities({ ...quantities, [id]: currentQuantity - 1 });
    }
  };

  const handleAddToCart = (product: any) => {
    const quantity = quantities[product.id] || 0;
    if (quantity <= 0) return;

    addToCart(product, quantity);
    setCartOpen(true);
    // Reset quantity after adding to cart
    setQuantities({ ...quantities, [product.id]: 0 });
  };

  const subtotal = items.reduce((total, item) => {
    return total + calculatePrice(item.quantity);
  }, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-3 text-cornerstone-darkgray">
              Nos Produits
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme complète de briques et matériaux de construction de haute qualité
            </p>
          </div>

          <div className="flex justify-end mb-4">
            <Sheet open={cartOpen} onOpenChange={setCartOpen}>
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
                      onClick={() => setCartOpen(false)}
                    >
                      Continuer mes achats
                    </Button>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          <Tabs 
            defaultValue={activeTab} 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="creuses">Briques Creuses</TabsTrigger>
              <TabsTrigger value="pleines">Briques Pleines</TabsTrigger>
              <TabsTrigger value="hourdis">Hourdis</TabsTrigger>
            </TabsList>
            
            {Object.entries(products).map(([key, productList]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {productList.map((product) => (
                    <Card key={product.id} className="overflow-hidden">
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
                            onClick={() => decrementQuantity(product.id)}
                            disabled={(quantities[product.id] || 0) <= 0}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <Input
                            type="number"
                            value={quantities[product.id] || ""}
                            onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                            min={0}
                            placeholder="Quantité"
                            className="text-center"
                          />
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={() => incrementQuantity(product.id)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        {(quantities[product.id] || 0) > 0 && (
                          <div className="bg-cornerstone-lightgray p-3 rounded-md text-center mb-3">
                            <p className="text-sm text-gray-600">Estimation pour {quantities[product.id]} briques</p>
                            <p className="text-lg font-bold text-cornerstone-darkgray">
                              {formatPrice(calculatePrice(quantities[product.id]))}
                            </p>
                          </div>
                        )}
                      </CardContent>
                      <CardFooter>
                        <Button 
                          className="w-full bg-cornerstone-blue hover:bg-blue-600"
                          onClick={() => handleAddToCart(product)}
                          disabled={(quantities[product.id] || 0) <= 0}
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" /> Ajouter au panier
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Shop;
