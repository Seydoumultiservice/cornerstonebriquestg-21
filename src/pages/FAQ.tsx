
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-playfair font-bold text-center mb-12 text-cornerstone-darkgray">
            Questions Fréquentes
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Comment puis-je passer une commande ?</AccordionTrigger>
                <AccordionContent>
                  Vous pouvez passer commande directement sur notre site web en sélectionnant vos produits et en ajoutant la quantité souhaitée au panier. Vous pouvez également nous contacter par téléphone au +228 90 96 49 93 ou +228 99 87 01 95.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Quel est le délai de livraison ?</AccordionTrigger>
                <AccordionContent>
                  Les délais de livraison varient selon votre localisation et la quantité commandée. En général, nous livrons dans un délai de 24 à 48 heures après confirmation de la commande dans la région de Lomé.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Proposez-vous un service de stockage ?</AccordionTrigger>
                <AccordionContent>
                  Oui, nous offrons un service de stockage gratuit pendant six mois pour vos briques. C'est particulièrement utile pour les clients de la diaspora qui planifient leurs projets de construction.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Comment puis-je suivre mon projet à distance ?</AccordionTrigger>
                <AccordionContent>
                  Nous fournissons des mises à jour régulières avec photos et vidéos de l'avancement de votre projet. Notre système de suivi en temps réel vous permet de visualiser chaque étape de la construction, où que vous soyez dans le monde.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Quelles sont vos méthodes de paiement ?</AccordionTrigger>
                <AccordionContent>
                  Nous acceptons plusieurs modes de paiement : virement bancaire, paiement mobile (Flooz, T-Money), et paiement en espèces. Nous proposons également des options de paiement flexibles adaptées aux besoins de nos clients.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default FAQ;
