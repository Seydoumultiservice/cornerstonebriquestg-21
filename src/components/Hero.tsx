
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";

const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center bg-white text-white">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        <ImageCarousel />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Cornerstone Briques – Votre partenaire de confiance en matériaux de construction
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Des briques durables et innovantes pour vos projets
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/boutique" 
              className="btn-primary"
            >
              Voir nos produits
            </Link>
            <Link 
              to="/boutique" 
              className="btn-secondary"
            >
              Commander maintenant
            </Link>
            <Link 
              to="/contact" 
              className="btn-outline"
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
