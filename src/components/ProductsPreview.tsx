
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Briques Creuses",
    description: "Idéales pour les murs non porteurs et cloisons intérieures",
    image: "https://images.unsplash.com/photo-1534081333815-ae5019106622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80",
    category: "creuses"
  },
  {
    id: 2,
    name: "Briques Pleines",
    description: "Parfaites pour les structures porteuses et les façades",
    image: "https://images.unsplash.com/photo-1581011065967-0ebb55167e17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "pleines"
  },
  {
    id: 3,
    name: "Hourdis",
    description: "Blocs de construction légers pour planchers et toits",
    image: "https://images.unsplash.com/photo-1657558459655-27accf89b507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "hourdis"
  }
];

const ProductsPreview = () => {
  return (
    <section className="py-16 bg-cornerstone-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-cornerstone-darkgray">
            Nos Produits de Qualité
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de briques et matériaux de construction fabriqués avec les meilleurs standards de qualité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-cornerstone-darkgray">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <Link 
                  to={`/boutique/${product.category}`}
                  className="text-cornerstone-blue hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Voir la gamme <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/boutique">
            <Button 
              className="bg-cornerstone-brick hover:bg-red-700 text-white"
            >
              Voir tous nos produits
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
