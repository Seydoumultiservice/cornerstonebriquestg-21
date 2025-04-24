import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/context/CartContext";
import ProductGrid from "@/components/shop/ProductGrid";
import CartSheet from "@/components/shop/CartSheet";

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

          <div className="flex justify-end mb-4">
            <CartSheet
              items={items}
              open={cartOpen}
              onOpenChange={setCartOpen}
              updateQuantity={updateQuantity}
              calculatePrice={calculatePrice}
              formatPrice={formatPrice}
            />
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
                <ProductGrid
                  products={productList}
                  quantities={quantities}
                  onQuantityChange={handleQuantityChange}
                  onIncrement={incrementQuantity}
                  onDecrement={decrementQuantity}
                  onAddToCart={handleAddToCart}
                  calculatePrice={calculatePrice}
                  formatPrice={formatPrice}
                />
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
