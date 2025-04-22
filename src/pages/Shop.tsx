
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
import { toast } from "@/components/ui/use-toast";

// Product data
const products = {
  creuses: [
    { id: 1, name: "10 Creux", description: "Brique creuse standard 10cm", image: "https://images.unsplash.com/photo-1590406167775-b0bcef7df0de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80" },
    { id: 2, name: "12 Creux", description: "Brique creuse standard 12cm", image: "https://images.unsplash.com/photo-1638417387566-561817977758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80" },
    { id: 3, name: "15 Creux", description: "Brique creuse standard 15cm", image: "https://images.unsplash.com/photo-1534081333815-ae5019106622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80" },
  ],
  pleines: [
    { id: 4, name: "Brique Pleine Standard", description: "Brique pleine pour murs porteurs", image: "https://images.unsplash.com/photo-1599861258082-0a92469ceb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
    { id: 5, name: "Brique Pleine Grande", description: "Grande brique pleine pour structures", image: "https://images.unsplash.com/photo-1581011065967-0ebb55167e17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" },
  ],
  hourdis: [
    { id: 6, name: "Hourdis Standard", description: "Hourdis pour planchers", image: "https://images.unsplash.com/photo-1657558459655-27accf89b507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
    { id: 7, name: "Hourdis Léger", description: "Hourdis léger pour toitures", image: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1889&q=80" },
  ]
};

type ProductWithQuantity = {
  id: number;
  name: string;
  description: string;
  image: string;
  quantity: number;
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

  const addToCart = (product: any) => {
    const quantity = quantities[product.id] || 0;
    if (quantity <= 0) {
      toast({
        title: "Erreur",
        description: "Veuillez spécifier une quantité valide.",
        variant: "destructive",
      });
      return;
    }

    const productWithQuantity: ProductWithQuantity = {
      ...product,
      quantity
    };

    // Here we would normally add to cart state and/or localStorage
    console.log("Produit ajouté:", productWithQuantity);
    
    toast({
      title: "Produit ajouté au panier",
      description: `${quantity} ${product.name} - ${formatPrice(calculatePrice(quantity))}`,
    });

    // Reset quantity
    setQuantities({ ...quantities, [product.id]: 0 });
  };

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
                          onClick={() => addToCart(product)}
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
