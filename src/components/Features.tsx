
import { Truck, Clock, Award, CreditCard } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Qualité Premium",
    description: "Nos briques sont fabriquées avec des matériaux de première qualité, garantissant durabilité et résistance."
  },
  {
    icon: Truck,
    title: "Livraison Rapide",
    description: "Nous assurons une livraison rapide et sécurisée de vos commandes partout à Lomé et ses environs."
  },
  {
    icon: CreditCard,
    title: "Options de Paiement Flexibles",
    description: "Nous offrons plusieurs options de paiement : immédiat, à crédit ou échelonné pour s'adapter à vos besoins."
  },
  {
    icon: Clock,
    title: "Suivi en Temps Réel",
    description: "Suivez l'état de votre commande en temps réel grâce à notre système de suivi de production innovant."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-cornerstone-darkgray">
            Pourquoi Choisir Cornerstone Briques?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous nous engageons à fournir des produits de qualité et un service exceptionnel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-cornerstone-lightgray rounded-lg p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center p-3 bg-cornerstone-blue rounded-full text-white mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-cornerstone-darkgray">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
