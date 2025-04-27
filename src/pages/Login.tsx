
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const loginSchema = z.object({
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  password: z.string().min(6, {
    message: "Le mot de passe doit contenir au moins 6 caractères.",
  }),
  rememberMe: z.boolean().default(false),
});

type LoginValues = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useNavigate();
  
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data: LoginValues) => {
    console.log("Login attempt:", data);
    // Simulating login
    setTimeout(() => {
      localStorage.setItem("isAuthenticated", "true");
      toast.success("Connexion réussie!");
      navigate("/mon-compte");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <Card className="w-full max-w-md p-8 shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-cornerstone-darkgray">Connexion</h1>
            <p className="mt-2 text-gray-600">
              Accédez à votre compte Cornerstone Briques
            </p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="votreemail@exemple.com" 
                        type="email" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mot de passe</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Votre mot de passe" 
                        type="password" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex items-center justify-between">
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-sm cursor-pointer">Se souvenir de moi</FormLabel>
                    </FormItem>
                  )}
                />
                
                <Link 
                  to="/mot-de-passe-oublie" 
                  className="text-sm text-cornerstone-blue hover:text-blue-700"
                >
                  Mot de passe oublié?
                </Link>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-cornerstone-blue hover:bg-blue-700"
              >
                Se connecter
              </Button>
              
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Vous n'avez pas de compte?{" "}
                  <Link 
                    to="/inscription" 
                    className="text-cornerstone-blue hover:text-blue-700"
                  >
                    S'inscrire
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
