import { Link } from 'react-router-dom';
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductRangeModal from "./ProductRangeModal";

const products = [
  {
    id: 1,
    name: "Briques Creuses",
    description: "Idéales pour les murs non porteurs et cloisons intérieures",
    image: "/lovable-uploads/c03dbd08-2cca-4422-b778-dc01f808190b.png",
    category: "creuses",
    rangeProducts: [
      {
        title: "Brique Creuse Standard",
        image: "/lovable-uploads/c03dbd08-2cca-4422-b778-dc01f808190b.png",
        details: {
          description: "Conçues pour les murs non porteurs et les cloisons intérieures, les briques creuses sont légères qui favorisent une meilleure isolation thermique et phonique.",
          application: "Parfaites pour des projets résidentiels et tertiaires, elles offrent une solution efficace là où la réduction du poids et l'optimisation de l'isolation sont recherchées."
        }
      }
    ]
  },
  {
    id: 2,
    name: "Briques Pleines",
    description: "Parfaites pour les structures porteuses et les façades",
    image: "/lovable-uploads/c001df33-8dc2-441a-9cf5-d21ae4a96410.png",
    category: "pleines",
    rangeProducts: [
      {
        title: "Brique Pleine Standard",
        image: "/lovable-uploads/c001df33-8dc2-441a-9cf5-d21ae4a96410.png",
        details: {
          description: "Idéales pour les structures porteuses et la réalisation de façades, ces briques offrent une robustesse et une inertie thermique optimales.",
          application: "Conçues pour apporter solidité et stabilité aux constructions, elles garantissent la pérennité des structures où elles sont utilisées."
        }
      }
    ]
  },
  {
    id: 3,
    name: "Hourdis",
    description: "Blocs de construction légers pour planchers et toits",
    image: "/lovable-uploads/9388a76d-9aec-47ab-addd-cc222e0dbfe9.png",
    category: "hourdis",
    rangeProducts: [
      {
        title: "Hourdi Français 16",
        image: "/lovable-uploads/9388a76d-9aec-47ab-addd-cc222e0dbfe9.png",
        details: {
          description: "La solution idéale pour la réalisation de dalles grâce à une inertie thermique remarquable, une excellente résistance au feu et une isolation phonique efficace.",
          technicalSpecs: {
            dimensions: "500 x 160 x 200 mm",
            weight: "15,45 kg",
            loadCapacity: "85 KN"
          },
          application: "Utilisé pour remplir l'espace entre les poutres d'une structure, cet hourdi représente une alternative durable, facile à installer et économique par rapport à d'autres matériaux comme le bois ou le béton coulé."
        }
      }
    ]
  }
];

const ProductsPreview = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (category: string) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const selectedProducts = products.find(p => p.name === selectedCategory)?.rangeProducts || [];

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
                <Button 
                  onClick={() => handleOpenModal(product.name)}
                  className="text-cornerstone-blue hover:text-blue-700 font-medium inline-flex items-center bg-transparent p-0 hover:bg-transparent"
                >
                  Voir la gamme <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <ProductRangeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          category={selectedCategory || ""}
          products={selectedProducts}
        />

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
