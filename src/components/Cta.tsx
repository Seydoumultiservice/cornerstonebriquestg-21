
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="py-16 relative bg-gray-900 text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1635001103334-ab2f96a1c19f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80')",
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
              to="/boutique" 
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
