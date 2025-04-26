import { useState } from "react";
import { Link } from 'react-router-dom';
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
    image: "/lovable-uploads/0663235b-c07d-46b1-a48d-26e49576db7c.png",
    category: "hourdis",
    rangeProducts: [
      {
        title: "Hourdi Standard",
        image: "/lovable-uploads/45a519a7-2e69-4252-a411-65e0051894ce.png",
        details: {
          description: "Nos hourdis sont conçus pour offrir une excellente isolation thermique et acoustique tout en garantissant une résistance optimale. Idéals pour la construction de planchers et de toitures.",
          technicalSpecs: {
            dimensions: "60cm x 20cm",
            weight: "15-18 kg",
            loadCapacity: "Supporte jusqu'à 250 kg/m²"
          },
          application: "Parfait pour la construction de planchers intermédiaires et de toitures. Offre une excellente isolation thermique et acoustique."
        }
      }
    ]
  },
  {
    id: 4,
    name: "Pavés",
    description: "Idéaux pour les allées et espaces extérieurs",
    image: "/lovable-uploads/e35e187c-9474-4c77-b300-95626e8a879b.png",
    category: "pave",
    comingSoon: true,
    rangeProducts: [
      {
        title: "Pavés (Bientôt disponible)",
        image: "/lovable-uploads/e35e187c-9474-4c77-b300-95626e8a879b.png",
        details: {
          description: "Nos pavés sont conçus pour offrir une finition élégante et durable à vos espaces extérieurs.",
          application: "Parfaits pour les allées de jardin, les terrasses et les entrées de garage."
        }
      }
    ]
  }
];

const ProductsPreview = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);

  const handleOpenModal = (category: string) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleShowAllProducts = () => {
    setShowAllProducts(true);
  };

  const selectedProducts = products.find(p => p.category === selectedCategory)?.rangeProducts || [];
  const allProducts = showAllProducts ? products.flatMap(p => p.rangeProducts) : [];

  return (
    <section className="py-16 bg-cornerstone-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-cornerstone-darkgray animate-fade-in">
            Nos Produits de Qualité
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in">
            Découvrez notre gamme complète de briques et matériaux de construction fabriqués avec les meilleurs standards de qualité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px] animate-scale-in relative"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
                {product.comingSoon && (
                  <div className="absolute top-0 right-0 bg-yellow-500 text-white px-3 py-1 rounded-bl-lg">
                    À venir
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-cornerstone-darkgray">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <Button 
                  onClick={() => handleOpenModal(product.category)}
                  className="text-cornerstone-blue hover:text-blue-700 font-medium inline-flex items-center bg-transparent p-0 hover:bg-transparent"
                  disabled={product.comingSoon}
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
          <Link to="/nos-produits">
            <Button 
              className="bg-cornerstone-brick hover:bg-red-700 text-white animate-pulse"
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
