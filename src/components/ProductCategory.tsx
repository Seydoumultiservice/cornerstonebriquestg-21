
import React, { useState } from 'react';
import { Card } from './ui/card';
import ProductModal from './ProductModal';

interface ProductCategoryProps {
  title: string;
  image: string;
  details: {
    title?: string;
    description: string;
    technicalSpecs?: {
      dimensions?: string;
      weight?: string;
      loadCapacity?: string;
    };
    application: string;
  };
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ title, image, details }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card 
        className="group cursor-pointer hover:shadow-lg transition-shadow duration-300"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-center font-playfair">{title}</h3>
        </div>
      </Card>
      
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        category={title}
        details={details}
      />
    </>
  );
};

export default ProductCategory;
