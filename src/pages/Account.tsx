
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { User, Package, Clock, Settings, CreditCard, History } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import ProfileContent from "@/components/account/ProfileContent";
import OrdersContent from "@/components/account/OrdersContent";
import TrackingContent from "@/components/account/TrackingContent";
import PaymentContent from "@/components/account/PaymentContent";
import HistoryContent from "@/components/account/HistoryContent";
import SettingsContent from "@/components/account/SettingsContent";

const Account = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-3 text-cornerstone-darkgray">
              Mon Compte
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Gérez vos informations personnelles et suivez vos commandes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <Tabs
                  value={activeTab}
                  onValueChange={setActiveTab}
                  orientation="vertical"
                  className="w-full"
                >
                  <TabsList className="flex flex-col h-auto w-full justify-start items-stretch bg-white border-r-0">
                    <TabsTrigger value="profile" className="justify-start text-left py-3 px-4 data-[state=active]:bg-gray-100">
                      <User className="h-4 w-4 mr-2" />
                      Mon Profil
                    </TabsTrigger>
                    <TabsTrigger value="orders" className="justify-start text-left py-3 px-4 data-[state=active]:bg-gray-100">
                      <Package className="h-4 w-4 mr-2" />
                      Mes Commandes
                    </TabsTrigger>
                    <TabsTrigger value="tracking" className="justify-start text-left py-3 px-4 data-[state=active]:bg-gray-100">
                      <Clock className="h-4 w-4 mr-2" />
                      Suivi de Production
                    </TabsTrigger>
                    <TabsTrigger value="payment" className="justify-start text-left py-3 px-4 data-[state=active]:bg-gray-100">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Paiements
                    </TabsTrigger>
                    <TabsTrigger value="history" className="justify-start text-left py-3 px-4 data-[state=active]:bg-gray-100">
                      <History className="h-4 w-4 mr-2" />
                      Historique
                    </TabsTrigger>
                    <TabsTrigger value="settings" className="justify-start text-left py-3 px-4 data-[state=active]:bg-gray-100">
                      <Settings className="h-4 w-4 mr-2" />
                      Paramètres
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsContent value="profile" className="mt-0">
                  <ProfileContent />
                </TabsContent>
                <TabsContent value="orders" className="mt-0">
                  <OrdersContent />
                </TabsContent>
                <TabsContent value="tracking" className="mt-0">
                  <TrackingContent />
                </TabsContent>
                <TabsContent value="payment" className="mt-0">
                  <PaymentContent />
                </TabsContent>
                <TabsContent value="history" className="mt-0">
                  <HistoryContent />
                </TabsContent>
                <TabsContent value="settings" className="mt-0">
                  <SettingsContent />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Account;
