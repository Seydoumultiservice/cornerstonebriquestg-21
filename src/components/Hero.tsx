import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cornerstone-darkgray overflow-hidden">
        <img 
          src="/lovable-uploads/e9fadad0-2262-4b40-9c15-ca07037e2928.png" 
          alt="Cornerstone Briques Construction" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cornerstone-darkgray/80 to-cornerstone-darkgray/40" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 animate-fade-in">
            Cornerstone Briques
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in delay-100">
            Votre partenaire de Confiance en fabrication de Briques
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-200">
            <Link to="/nos-produits">
              <Button 
                size="lg" 
                className="bg-cornerstone-brick hover:bg-red-700 text-white font-bold px-8 py-6"
              >
                Découvrir nos produits
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-6"
              >
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
