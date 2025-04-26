
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="py-16 relative bg-gray-900 text-white">
      {/* Image d'arrière-plan avec superposition */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
        style={{ 
          backgroundImage: "url('/lovable-uploads/81b06260-a5d2-4692-9f08-65cdad35910f.png')",
        }}
      >
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Prêt à Démarrer Votre Projet de Construction?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Rejoignez des milliers de clients satisfaits qui font confiance à Cornerstone Briques pour leurs projets de construction
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/panier" 
              className="bg-cornerstone-brick hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Commander Maintenant
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cornerstone-darkgray px-8 py-3 rounded-md font-medium transition-colors"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
