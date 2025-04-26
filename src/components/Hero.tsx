
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center bg-white text-white">
      {/* Fond blanc + galerie */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-white">
        <ImageCarousel />
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl backdrop-blur-sm bg-black/20 p-6 rounded-lg"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-playfair text-4xl md:text-5xl font-bold mb-4 leading-tight"
          >
            Cornerstone Briques – Votre partenaire de confiance en matériaux de construction
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl mb-8 text-gray-200"
          >
            Des briques durables et innovantes pour vos projets
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link 
              to="/nos-produits" 
              className="bg-cornerstone-brick hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors hover:scale-105 transform duration-200"
            >
              Voir nos produits
            </Link>
            <Link 
              to="/panier" 
              className="bg-cornerstone-brown hover:bg-amber-800 text-white px-6 py-3 rounded-md font-medium transition-colors hover:scale-105 transform duration-200"
            >
              Commander maintenant
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cornerstone-darkgray px-6 py-3 rounded-md font-medium transition-colors hover:scale-105 transform duration-200"
            >
              Contactez-nous
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
