
import React from 'react';
import ProductCategory from '../components/ProductCategory';

const IndexPage = () => {
  const categories = [
    {
      title: "Hourdis",
      image: "/lovable-uploads/9388a76d-9aec-47ab-addd-cc222e0dbfe9.png",
      details: {
        title: "Hourdi Français 16",
        description: "La solution idéale pour la réalisation de dalles grâce à une inertie thermique remarquable, une excellente résistance au feu et une isolation phonique efficace.",
        technicalSpecs: {
          dimensions: "500 x 160 x 200 mm",
          weight: "15,45 kg",
          loadCapacity: "85 KN"
        },
        application: "Utilisé pour remplir l'espace entre les poutres d'une structure, cet hourdi représente une alternative durable, facile à installer et économique par rapport à d'autres matériaux comme le bois ou le béton coulé."
      }
    },
    {
      title: "Briques Pleines",
      image: "/lovable-uploads/c001df33-8dc2-441a-9cf5-d21ae4a96410.png",
      details: {
        description: "Idéales pour les structures porteuses et la réalisation de façades, ces briques offrent une robustesse et une inertie thermique optimales.",
        application: "Conçues pour apporter solidité et stabilité aux constructions, elles garantissent la pérennité des structures où elles sont utilisées."
      }
    },
    {
      title: "Briques Creuses",
      image: "/lovable-uploads/c03dbd08-2cca-4422-b778-dc01f808190b.png",
      details: {
        description: "Conçues pour les murs non porteurs et les cloisons intérieures, les briques creuses sont légères qui favorisent une meilleure isolation thermique et phonique.",
        application: "Parfaites pour des projets résidentiels et tertiaires, elles offrent une solution efficace là où la réduction du poids et l'optimisation de l'isolation sont recherchées."
      }
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-playfair font-semibold text-center mb-12">
        Nos Gammes de Produits
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <ProductCategory
            key={category.title}
            title={category.title}
            image={category.image}
            details={category.details}
          />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
