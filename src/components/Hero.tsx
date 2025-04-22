
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";

const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center bg-white text-white">
      {/* Fond avec Carrousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <ImageCarousel />
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl backdrop-blur-sm bg-black/20 p-6 rounded-lg">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Cornerstone Briques – Votre partenaire de confiance en matériaux de construction
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Des briques durables et innovantes pour vos projets
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/boutique" 
              className="bg-cornerstone-brick hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Voir nos produits
            </Link>
            <Link 
              to="/boutique" 
              className="bg-cornerstone-brown hover:bg-amber-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Commander maintenant
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cornerstone-darkgray px-6 py-3 rounded-md font-medium transition-colors"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
