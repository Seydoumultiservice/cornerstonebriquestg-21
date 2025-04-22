
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/components/ui/use-toast";
import { Search, Clock, ShoppingBag, Truck } from "lucide-react";

// Mock order data
const mockOrder = {
  id: "ORD-2023-7895",
  customer: "Client Test",
  products: [
    { name: "10 Creux", quantity: 500 },
    { name: "Hourdis Standard", quantity: 200 },
  ],
  status: "En production",
  stage: 2, // 0: commandé, 1: confirmé, 2: en production, 3: prêt, 4: livré
  created: "2023-09-15",
  estimatedCompletion: "2023-09-25",
  responsiblePerson: "Jean Kokou",
  progress: 65,
  statusHistory: [
    { date: "2023-09-15", status: "Commande passée", completed: true },
    { date: "2023-09-16", status: "Commande confirmée", completed: true },
    { date: "2023-09-18", status: "En production", completed: true },
    { date: "2023-09-25", status: "Prêt pour livraison", completed: false },
    { date: "2023-09-27", status: "Livré", completed: false },
  ],
  totalAmount: 640000, // XOF
};

const OrderTracking = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [order, setOrder] = useState<typeof mockOrder | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!orderNumber.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer un numéro de commande",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (orderNumber.toLowerCase().includes("test") || orderNumber === "ORD-2023-7895") {
        setOrder(mockOrder);
      } else {
        toast({
          title: "Commande non trouvée",
          description: "Aucune commande ne correspond à ce numéro. Essayez avec 'test' ou 'ORD-2023-7895' pour la démo.",
          variant: "destructive",
        });
        setOrder(null);
      }
      
      setIsLoading(false);
    }, 1500);
  };

  // Format price
  const formatPrice = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " XOF";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-3 text-cornerstone-darkgray">
              Suivi de Commande
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Suivez l'état de votre commande en temps réel grâce à notre système de suivi innovant
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl">Entrez votre numéro de commande</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSearch} className="flex items-stretch gap-2">
                  <Input
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    placeholder="Ex: ORD-2023-7895"
                    className="flex-1"
                  />
                  <Button 
                    type="submit" 
                    className="bg-cornerstone-blue hover:bg-blue-600"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Recherche...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Search className="mr-2 h-4 w-4" />
                        Rechercher
                      </span>
                    )}
                  </Button>
                </form>
                <p className="text-sm text-gray-500 mt-2">
                  Pour tester, utilisez "test" ou "ORD-2023-7895"
                </p>
              </CardContent>
            </Card>

            {order && (
              <div className="space-y-6">
                <Card>
                  <CardHeader className="border-b">
                    <div className="flex justify-between items-center">
                      <CardTitle>Commande #{order.id}</CardTitle>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {order.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Progression de la commande</h3>
                      <div className="mb-2">
                        <Progress value={order.progress} className="h-2" />
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Commandé</span>
                        <span>Production</span>
                        <span>Livraison</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Détails de la commande</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Clock className="h-5 w-5 mr-2 text-cornerstone-blue" />
                            <div>
                              <span className="font-medium block">Date de commande:</span>
                              <span className="text-gray-600">{order.created}</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <ShoppingBag className="h-5 w-5 mr-2 text-cornerstone-blue" />
                            <div>
                              <span className="font-medium block">Produits:</span>
                              <ul className="text-gray-600 list-disc list-inside">
                                {order.products.map((product, index) => (
                                  <li key={index}>
                                    {product.name} - {product.quantity} unités
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <Truck className="h-5 w-5 mr-2 text-cornerstone-blue" />
                            <div>
                              <span className="font-medium block">Livraison estimée:</span>
                              <span className="text-gray-600">{order.estimatedCompletion}</span>
                            </div>
                          </li>
                          <li className="font-medium">
                            Montant total: <span className="text-cornerstone-brick">{formatPrice(order.totalAmount)}</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3">État de la production</h3>
                        <p className="mb-2">
                          <span className="font-medium">Responsable:</span> {order.responsiblePerson}
                        </p>
                        
                        <div className="border rounded-md p-4 bg-gray-50">
                          <h4 className="font-medium mb-2">Historique de statut</h4>
                          <ul className="space-y-3">
                            {order.statusHistory.map((status, index) => (
                              <li key={index} className="flex items-center">
                                <div className={`h-4 w-4 rounded-full mr-2 ${status.completed ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                                <span className={`${status.completed ? 'text-gray-800' : 'text-gray-500'}`}>
                                  {status.date} - {status.status}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 border-t pt-6">
                      <h3 className="text-lg font-semibold mb-3">Surveillance de la Production</h3>
                      <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">
                          Flux vidéo ou photos horodatées de production (simulé)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default OrderTracking;
