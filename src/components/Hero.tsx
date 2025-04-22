
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center bg-gray-800 text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1621957548614-13f530e69e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
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
