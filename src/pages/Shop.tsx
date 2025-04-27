
import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/context/CartContext";
import ProductGrid from "@/components/shop/ProductGrid";
import CartSheet from "@/components/shop/CartSheet";

// Prix des briques (non affichés directement sur la page)
const productPrices = {
  "10 Creux": 250,
  "12 Creux": 300,
  "15 Creux": 380, 
  "20 Creux": 500,
  "10 Plein": 350,
  "12 Plein": 460,
  "15 Plein": 500,
  "Hourdis 12": 500,
  "Hourdis 15": 600
};

// Utilisation des images réelles chargées par l'utilisateur
const productImages = [
  "/lovable-uploads/19970d785652-336c-4ddb-9369-1a11b73674c1.png", // 10 Creux
  "/lovable-uploads/1997fbdfa4a-8390-4d00-b613-77c259841a6f.png", // 12 Creux
  "/lovable-uploads/1997cee3a-c66e-454f-afad-9f201c95b3b6.png", // 15 Creux
  "/lovable-uploads/1997b07aa7d4-7fda-47a3-babd-c0ffc56c3d9a.png", // 20 Creux
  "/lovable-uploads/c03dbd08-2cca-4422-b778-dc01f808190b.png", // 10 Plein
  "/lovable-uploads/1997eb145d05-2402-4da8-9fbd-34bfdfdecd32.png", // 12 Plein
  "/lovable-uploads/c03dbd08-2cca-4422-b778-dc01f808190b.png", // 15 Plein
  "/lovable-uploads/45a519a7-2e69-4252-a411-65e0051894ce.png", // Hourdis 12
  "/lovable-uploads/aed86bea-eec6-4d26-b96b-e695c4818ad1.png", // Hourdis 15
  "/lovable-uploads/e1997e187c-9474-4c77-b300-95626e8a879b.png"  // Pavé (à venir)
];

// Répartition des produits par catégorie avec dimensions
const products = {
  creuses: [
    { id: 1, name: "10 Creux", description: "Dimensions: 40cm x 20cm x 10cm", image: productImages[0], price: productPrices["10 Creux"] },
    { id: 2, name: "12 Creux", description: "Dimensions: 40cm x 20cm x 12cm", image: productImages[1], price: productPrices["12 Creux"] },
    { id: 3, name: "15 Creux", description: "Dimensions: 40cm x 20cm x 15cm", image: productImages[2], price: productPrices["15 Creux"] },
    { id: 4, name: "20 Creux", description: "Dimensions: 40cm x 20cm x 20cm", image: productImages[3], price: productPrices["20 Creux"] }
  ],
  pleines: [
    { id: 5, name: "10 Plein", description: "Dimensions: 40cm x 20cm x 10cm", image: productImages[4], price: productPrices["10 Plein"] },
    { id: 6, name: "12 Plein", description: "Dimensions: 40cm x 20cm x 12cm", image: productImages[5], price: productPrices["12 Plein"] },
    { id: 7, name: "15 Plein", description: "Dimensions: 40cm x 20cm x 15cm", image: productImages[6], price: productPrices["15 Plein"] }
  ],
  hourdis: [
    { id: 8, name: "Hourdis 12", description: "Dimensions: 60cm x 20cm x 12cm", image: productImages[7], price: productPrices["Hourdis 12"] },
    { id: 9, name: "Hourdis 15", description: "Dimensions: 60cm x 20cm x 15cm", image: productImages[8], price: productPrices["Hourdis 15"] }
  ],
  pave: [
    { id: 10, name: "Pavé", description: "À venir prochainement", image: productImages[9], comingSoon: true }
  ]
};

// Base price calculation based on quantity
const calculatePrice = (quantity: number, unitPrice: number): number => {
  if (quantity <= 0) return 0;
  
  // Apply discounts based on quantity
  if (quantity < 250) {
    return quantity * unitPrice;
  } else if (quantity < 1000) {
    return Math.round(quantity * unitPrice * 0.95); // 5% discount
  } else if (quantity < 5000) {
    return Math.round(quantity * unitPrice * 0.9); // 10% discount
  } else {
    return Math.round(quantity * unitPrice * 0.85); // 15% discount
  }
};

// Format price to XOF
const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " FCFA";
};

const Shop = () => {
  const { category } = useParams<{ category?: string }>();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [activeTab, setActiveTab] = useState<string>(
    category === "pleines" ? "pleines" : 
    category === "hourdis" ? "hourdis" :
    category === "pave" ? "pave" : "creuses"
  );
  const [cartOpen, setCartOpen] = useState(false);
  
  const { addToCart, items, updateQuantity } = useCart();

  // Redirect if old URL format is used
  if (category && !["creuses", "pleines", "hourdis", "pave"].includes(category)) {
    return <Navigate to="/nos-produits" replace />;
  }

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
    if (quantity <= 0 || product.comingSoon) return;

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
              calculatePrice={(quantity, product) => calculatePrice(quantity, product.price)}
              formatPrice={formatPrice}
            />
          </div>

          <Tabs 
            defaultValue={activeTab} 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="creuses">Briques Creuses</TabsTrigger>
              <TabsTrigger value="pleines">Briques Pleines</TabsTrigger>
              <TabsTrigger value="hourdis">Hourdis</TabsTrigger>
              <TabsTrigger value="pave">Pavé</TabsTrigger>
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
                  calculatePrice={(quantity, product) => calculatePrice(quantity, product.price)}
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
