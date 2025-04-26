
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  
  const cartItemCount = getTotalItems();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/be477d43-9690-4e2b-afb6-016905d4bb17.png"
              alt="Cornerstone Briques Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-cornerstone-darkgray hover:text-cornerstone-brick transition-colors">
              Accueil
            </Link>
            <Link to="/nos-produits" className="text-cornerstone-darkgray hover:text-cornerstone-brick transition-colors">
              Nos Produits
            </Link>
            <Link to="/a-propos" className="text-cornerstone-darkgray hover:text-cornerstone-brick transition-colors">
              À Propos
            </Link>
            <Link to="/suivi" className="text-cornerstone-darkgray hover:text-cornerstone-brick transition-colors">
              Suivi
            </Link>
            <Link to="/contact" className="text-cornerstone-darkgray hover:text-cornerstone-brick transition-colors">
              Contact
            </Link>
            <Link to="/avis" className="text-cornerstone-darkgray hover:text-cornerstone-brick transition-colors">
              Avis
            </Link>
            <Link to="/panier" className="relative">
              <ShoppingCart className="h-6 w-6 text-cornerstone-blue" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-cornerstone-brick text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <Link to="/mon-compte">
              <Button 
                variant="default" 
                className="bg-cornerstone-blue hover:bg-blue-600 text-white"
              >
                <User className="h-4 w-4 mr-2" />
                Mon Compte
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Link to="/panier" className="relative mr-4">
              <ShoppingCart className="h-6 w-6 text-cornerstone-blue" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-cornerstone-brick text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
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
              to="/nos-produits" 
              className="text-cornerstone-darkgray hover:text-cornerstone-brick transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Nos Produits
            </Link>
            <Link 
              to="/a-propos" 
              className="text-cornerstone-darkgray hover:text-cornerstone-brick transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              À Propos
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
            <Link 
              to="/avis" 
              className="text-cornerstone-darkgray hover:text-cornerstone-brick transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2" />
                Avis
              </div>
            </Link>
            <Link 
              to="/mon-compte" 
              className="text-cornerstone-darkgray hover:text-cornerstone-brick transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button 
                variant="default" 
                className="bg-cornerstone-blue hover:bg-blue-600 text-white w-full"
              >
                <User className="h-4 w-4 mr-2" />
                Mon Compte
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
