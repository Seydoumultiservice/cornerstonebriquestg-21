import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cornerstone-darkgray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-playfair text-xl mb-4 font-semibold">Cornerstone Briques</h3>
            <p className="mb-4 text-gray-300">
              Votre partenaire de confiance en matériaux de construction au Togo. Des briques durables et innovantes pour tous vos projets.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/cornerstonebriques" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-300 hover:text-cornerstone-brick" />
              </a>
              <a href="https://instagram.com/cornerstonebriques" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-300 hover:text-cornerstone-brick" />
              </a>
              <a href="https://twitter.com/cornerstonebriques" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-300 hover:text-cornerstone-brick" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl mb-4 font-semibold">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-cornerstone-brick transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/boutique" className="text-gray-300 hover:text-cornerstone-brick transition-colors">
                  Nos Produits
                </Link>
              </li>
              <li>
                <Link to="/suivi" className="text-gray-300 hover:text-cornerstone-brick transition-colors">
                  Suivi de Production
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-cornerstone-brick transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-xl mb-4 font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 text-cornerstone-brick" />
                <span className="text-gray-300">
                  Akodessewa, Après les rails, non loin de la station d'essence CM, Lomé.
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-cornerstone-brick" />
                <span className="text-gray-300">(+228) 90 96 49 93 / 99 87 01 95</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-cornerstone-brick" />
                <a 
                  href="mailto:cornerstonebriques@gmail.com" 
                  className="text-gray-300 hover:text-cornerstone-brick transition-colors"
                >
                  cornerstonebriques@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-playfair text-xl mb-4 font-semibold">Heures d'Ouverture</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <span className="font-medium">Lundi - Vendredi:</span> 8h00 - 18h00
              </li>
              <li>
                <span className="font-medium">Samedi:</span> 8h00 - 16h00
              </li>
              <li>
                <span className="font-medium">Dimanche:</span> Fermé
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Cornerstone Briques. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
