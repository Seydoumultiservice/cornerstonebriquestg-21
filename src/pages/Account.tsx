import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Package, Clock, Settings, CreditCard, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import ProfileForm from "@/components/account/ProfileForm";
import PasswordForm from "@/components/account/PasswordForm";
import OrdersList from "@/components/account/OrdersList";
import AccountSettings from "@/components/account/AccountSettings";

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
                <CardHeader>
                  <CardTitle className="text-xl">Menu</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
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
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                {/* Profile */}
                <TabsContent value="profile" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Informations Personnelles</CardTitle>
                      <CardDescription>
                        Mettez à jour vos informations personnelles ici.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ProfileForm />
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Sécurité</CardTitle>
                      <CardDescription>
                        Mettez à jour votre mot de passe.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PasswordForm />
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Orders */}
                <TabsContent value="orders" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Mes Commandes</CardTitle>
                      <CardDescription>
                        Consultez et gérez toutes vos commandes.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <OrdersList />
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Other tabs would go here */}
                <TabsContent value="tracking" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Suivi de Production</CardTitle>
                      <CardDescription>
                        Suivez l'avancement de vos commandes en temps réel.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8">
                        <Clock className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-lg font-medium text-gray-900">Aucune commande en cours</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Vous n'avez pas de commande en cours de production.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="payment" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Mes Paiements</CardTitle>
                      <CardDescription>
                        Consultez et gérez vos méthodes de paiement.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8">
                        <CreditCard className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-lg font-medium text-gray-900">Aucun moyen de paiement</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Vous n'avez pas encore ajouté de moyen de paiement.
                        </p>
                        <div className="mt-6">
                          <Button variant="default" className="bg-cornerstone-blue hover:bg-blue-600">
                            Ajouter un moyen de paiement
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="history" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Historique</CardTitle>
                      <CardDescription>
                        Consultez l'historique de vos activités.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8">
                        <History className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-lg font-medium text-gray-900">Aucune activité récente</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Votre historique d'activités apparaîtra ici.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="settings" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Paramètres</CardTitle>
                      <CardDescription>
                        Gérez les paramètres de votre compte.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <AccountSettings />
                    </CardContent>
                  </Card>
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
