
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-3 text-cornerstone-darkgray">
              À Propos de Cornerstone Briques
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez notre histoire, notre mission et notre engagement envers la qualité et l'innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            <div>
              <h2 className="font-playfair text-2xl font-semibold mb-4 text-cornerstone-brick">
                Notre Histoire
              </h2>
              <p className="text-gray-700 mb-4">
                Fondée en 2015, Cornerstone Briques est née de la vision d'entrepreneurs togolais déterminés à révolutionner le secteur de la construction au Togo. Face à la demande croissante de matériaux de construction de qualité, nous avons mis en place une usine moderne à Lomé pour produire des briques répondant aux normes internationales.
              </p>
              <p className="text-gray-700 mb-4">
                Aujourd'hui, nous sommes fiers d'être devenus le partenaire de confiance de nombreux professionnels et particuliers pour leurs projets de construction, grâce à notre engagement indéfectible envers l'excellence et l'innovation.
              </p>
              
              <div className="mt-6">
                <img 
                  src="/lovable-uploads/698e39df-85c4-4a81-9cbc-ef7070ab8913.png" 
                  alt="Cornerstone Briques Factory" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
            
            <div>
              <h2 className="font-playfair text-2xl font-semibold mb-4 text-cornerstone-brick">
                Notre Mission
              </h2>
              <p className="text-gray-700 mb-4">
                Chez Cornerstone Briques, notre mission est de fournir des matériaux de construction durables et innovants qui contribuent à bâtir un Togo plus solide et plus beau. Nous nous engageons à:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-cornerstone-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Produire des briques de la plus haute qualité, fabriquées avec précision pour garantir résistance et durabilité.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-cornerstone-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Innover constamment pour améliorer nos produits et processus de fabrication.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-cornerstone-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Offrir un service client exceptionnel à chaque étape, de la commande à la livraison.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-cornerstone-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Contribuer au développement économique du Togo en créant des emplois locaux.</span>
                </li>
              </ul>
              
              <h2 className="font-playfair text-2xl font-semibold mb-4 text-cornerstone-brick mt-8">
                Nos Valeurs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-cornerstone-blue mb-2">Qualité</h3>
                  <p className="text-gray-700 text-sm">Nous ne faisons jamais de compromis sur la qualité de nos produits.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-cornerstone-blue mb-2">Innovation</h3>
                  <p className="text-gray-700 text-sm">Nous recherchons constamment de nouvelles façons d'améliorer nos produits.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-cornerstone-blue mb-2">Intégrité</h3>
                  <p className="text-gray-700 text-sm">Nous agissons avec honnêteté et transparence dans toutes nos relations.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-cornerstone-blue mb-2">Service</h3>
                  <p className="text-gray-700 text-sm">Nous plaçons la satisfaction client au cœur de tout ce que nous faisons.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-cornerstone-brown/10 rounded-xl p-8 mb-14">
            <div className="text-center mb-8">
              <h2 className="font-playfair text-2xl font-semibold mb-3 text-cornerstone-darkgray">
                Pourquoi Choisir Cornerstone Briques?
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Nous nous engageons à fournir des produits de qualité et un service exceptionnel pour tous vos projets de construction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-cornerstone-brick/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-cornerstone-brick text-xl">★</span>
                </div>
                <h3 className="font-semibold text-lg text-cornerstone-darkgray mb-2">Qualité supérieure</h3>
                <p className="text-gray-600 text-sm">
                  Des briques fabriquées selon les normes les plus strictes pour garantir durabilité et performance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-cornerstone-brown/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-cornerstone-brown text-xl">⚡</span>
                </div>
                <h3 className="font-semibold text-lg text-cornerstone-darkgray mb-2">Livraison rapide</h3>
                <p className="text-gray-600 text-sm">
                  Service de livraison efficace gratuit à Lomé et ses environs, avec possibilité d'expédition partout au Togo.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-cornerstone-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-cornerstone-blue text-xl">🔍</span>
                </div>
                <h3 className="font-semibold text-lg text-cornerstone-darkgray mb-2">Suivi en temps réel</h3>
                <p className="text-gray-600 text-sm">
                  Suivi de production et de livraison de votre commande en temps réel grâce à notre système innovant.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-cornerstone-brick/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-cornerstone-brick text-xl">👥</span>
                </div>
                <h3 className="font-semibold text-lg text-cornerstone-darkgray mb-2">Service client dédié</h3>
                <p className="text-gray-600 text-sm">
                  Une équipe à votre écoute pour vous conseiller et répondre à toutes vos questions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl font-semibold mb-3 text-cornerstone-darkgray">
              Notre Équipe
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Des professionnels passionnés qui travaillent ensemble pour vous offrir le meilleur service.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-40 w-40 mx-auto rounded-full bg-gray-200 overflow-hidden mb-4">
                  <div className="w-full h-full flex items-center justify-center bg-cornerstone-brick/20 text-cornerstone-brick">
                    <span className="text-6xl">JD</span>
                  </div>
                </div>
                <h3 className="font-semibold text-xl text-cornerstone-darkgray">Jean Dupont</h3>
                <p className="text-cornerstone-brick">Fondateur & PDG</p>
                <p className="text-gray-600 mt-3">
                  Visionnaire et expert en construction avec plus de 20 ans d'expérience dans le secteur.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-40 w-40 mx-auto rounded-full bg-gray-200 overflow-hidden mb-4">
                  <div className="w-full h-full flex items-center justify-center bg-cornerstone-blue/20 text-cornerstone-blue">
                    <span className="text-6xl">MK</span>
                  </div>
                </div>
                <h3 className="font-semibold text-xl text-cornerstone-darkgray">Marie Koffi</h3>
                <p className="text-cornerstone-brick">Directrice des Opérations</p>
                <p className="text-gray-600 mt-3">
                  Experte en gestion de production et en optimisation des processus industriels.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-40 w-40 mx-auto rounded-full bg-gray-200 overflow-hidden mb-4">
                  <div className="w-full h-full flex items-center justify-center bg-cornerstone-brown/20 text-cornerstone-brown">
                    <span className="text-6xl">PA</span>
                  </div>
                </div>
                <h3 className="font-semibold text-xl text-cornerstone-darkgray">Pierre Amouzou</h3>
                <p className="text-cornerstone-brick">Responsable Qualité</p>
                <p className="text-gray-600 mt-3">
                  Ingénieur certifié avec une passion pour l'innovation et le contrôle qualité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default About;
