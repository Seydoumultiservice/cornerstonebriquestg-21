import { useState } from "react";
import { useForm } from "react-hook-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { User, Package, Clock, Settings, CreditCard, History } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Validation schemas
const profileFormSchema = z.object({
  firstName: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères" }),
  lastName: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide" }),
  phone: z.string().min(8, { message: "Veuillez entrer un numéro de téléphone valide" }),
  address: z.string().min(5, { message: "L'adresse doit contenir au moins 5 caractères" }),
});

const passwordFormSchema = z.object({
  currentPassword: z.string().min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" }),
  newPassword: z.string().min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" }),
  confirmPassword: z.string().min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" }),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;
type PasswordFormValues = z.infer<typeof passwordFormSchema>;

// Mock orders data
const orders = [
  {
    id: "CMD-2023-001",
    date: "15/04/2023",
    status: "Livré",
    total: "350 000 XOF",
    items: [
      { name: "Brique Creuse 15", quantity: 1000 },
      { name: "Hourdis Standard", quantity: 200 },
    ]
  },
  {
    id: "CMD-2023-002",
    date: "22/05/2023",
    status: "En production",
    total: "150 000 XOF",
    items: [
      { name: "Brique Pleine Standard", quantity: 500 },
    ]
  },
];

const Account = () => {
  const [activeTab, setActiveTab] = useState("profile");
  
  // Profile form
  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      firstName: "Jean",
      lastName: "Dupont",
      email: "jean.dupont@example.com",
      phone: "90123456",
      address: "Quartier Tokoin, Lomé, Togo",
    },
  });

  // Password form
  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onProfileSubmit = (data: ProfileFormValues) => {
    // In a real app, this would update the user profile in the database
    console.log("Profile data submitted:", data);
    toast({
      title: "Profil mis à jour",
      description: "Vos informations ont été mises à jour avec succès.",
    });
  };

  const onPasswordSubmit = (data: PasswordFormValues) => {
    // In a real app, this would update the user's password
    console.log("Password data submitted:", data);
    toast({
      title: "Mot de passe modifié",
      description: "Votre mot de passe a été modifié avec succès.",
    });
    passwordForm.reset();
  };

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
                      <Form {...profileForm}>
                        <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={profileForm.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Prénom</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={profileForm.control}
                              name="lastName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Nom</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={profileForm.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input {...field} type="email" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={profileForm.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Téléphone</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <FormField
                            control={profileForm.control}
                            name="address"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Adresse</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button type="submit" className="bg-cornerstone-blue hover:bg-blue-600">
                            Enregistrer les modifications
                          </Button>
                        </form>
                      </Form>
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
                      <Form {...passwordForm}>
                        <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-6">
                          <FormField
                            control={passwordForm.control}
                            name="currentPassword"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Mot de passe actuel</FormLabel>
                                <FormControl>
                                  <Input {...field} type="password" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={passwordForm.control}
                              name="newPassword"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Nouveau mot de passe</FormLabel>
                                  <FormControl>
                                    <Input {...field} type="password" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={passwordForm.control}
                              name="confirmPassword"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Confirmer le mot de passe</FormLabel>
                                  <FormControl>
                                    <Input {...field} type="password" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <Button type="submit" className="bg-cornerstone-blue hover:bg-blue-600">
                            Changer le mot de passe
                          </Button>
                        </form>
                      </Form>
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
                      {orders.length > 0 ? (
                        <div className="space-y-4">
                          {orders.map((order) => (
                            <Card key={order.id}>
                              <CardHeader className="pb-2">
                                <div className="flex justify-between items-center">
                                  <CardTitle className="text-lg">Commande #{order.id}</CardTitle>
                                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    order.status === "Livré" 
                                      ? "bg-green-100 text-green-800" 
                                      : "bg-amber-100 text-amber-800"
                                  }`}>
                                    {order.status}
                                  </span>
                                </div>
                                <CardDescription>
                                  Date: {order.date} | Total: {order.total}
                                </CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="text-sm text-gray-700">
                                  <h4 className="font-medium mb-2">Produits:</h4>
                                  <ul className="list-disc list-inside space-y-1 pl-2">
                                    {order.items.map((item, idx) => (
                                      <li key={idx}>
                                        {item.name} x {item.quantity}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </CardContent>
                              <CardFooter className="flex justify-end space-x-2">
                                <Button variant="outline" size="sm">Détails</Button>
                                {order.status !== "Livré" && (
                                  <Button size="sm" className="bg-cornerstone-blue hover:bg-blue-600">
                                    Suivre
                                  </Button>
                                )}
                              </CardFooter>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <Package className="mx-auto h-12 w-12 text-gray-400" />
                          <h3 className="mt-2 text-lg font-medium text-gray-900">Aucune commande</h3>
                          <p className="mt-1 text-sm text-gray-500">
                            Vous n'avez pas encore passé de commande.
                          </p>
                          <div className="mt-6">
                            <Button className="bg-cornerstone-brick hover:bg-red-700">
                              Voir nos produits
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Other tabs would go here. For brevity, I'm only implementing the main ones */}
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
                          <Button className="bg-cornerstone-blue hover:bg-blue-600">
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
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Notifications par email</h3>
                            <p className="text-sm text-gray-500">Recevez des notifications par email sur vos commandes</p>
                          </div>
                          <Button variant="outline" size="sm">Configurer</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Notifications par SMS</h3>
                            <p className="text-sm text-gray-500">Recevez des notifications par SMS sur vos commandes</p>
                          </div>
                          <Button variant="outline" size="sm">Configurer</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Supprimer mon compte</h3>
                            <p className="text-sm text-gray-500">Supprimer définitivement votre compte et toutes vos données</p>
                          </div>
                          <Button variant="destructive" size="sm">Supprimer</Button>
                        </div>
                      </div>
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
