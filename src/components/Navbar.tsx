
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-cornerstone-brick font-playfair font-bold text-2xl">Cornerstone</span>
            <span className="text-cornerstone-brown font-playfair font-medium text-xl">Briques</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-cornerstone-darkgray hover:text-cornerstone-brick transition-colors">
              Accueil
            </Link>
            <Link to="/boutique" className="text-cornerstone-darkgray hover:text-cornerstone-brick transition-colors">
              Boutique
            </Link>
            <Link to="/suivi" className="text-cornerstone-darkgray hover:text-cornerstone-brick transition-colors">
              Suivi
            </Link>
            <Link to="/contact" className="text-cornerstone-darkgray hover:text-cornerstone-brick transition-colors">
              Contact
            </Link>
            <Link to="/panier" className="relative">
              <ShoppingCart className="h-6 w-6 text-cornerstone-blue" />
              <span className="absolute -top-2 -right-2 bg-cornerstone-brick text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Button 
              variant="default" 
              className="bg-cornerstone-blue hover:bg-blue-600 text-white"
            >
              Mon Compte
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Link to="/panier" className="relative mr-4">
              <ShoppingCart className="h-6 w-6 text-cornerstone-blue" />
              <span className="absolute -top-2 -right-2 bg-cornerstone-brick text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cornerstone-darkgray hover:text-cornerstone-brick focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-cornerstone-darkgray hover:text-cornerstone-brick transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/boutique" 
              className="text-cornerstone-darkgray hover:text-cornerstone-brick transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Boutique
            </Link>
            <Link 
              to="/suivi" 
              className="text-cornerstone-darkgray hover:text-cornerstone-brick transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Suivi
            </Link>
            <Link 
              to="/contact" 
              className="text-cornerstone-darkgray hover:text-cornerstone-brick transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              variant="default" 
              className="bg-cornerstone-blue hover:bg-blue-600 text-white w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Mon Compte
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
