
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import ProductCategory from './ProductCategory';

interface ProductRangeModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
  products: Array<{
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
  }>;
}

const ProductRangeModal: React.FC<ProductRangeModalProps> = ({ 
  isOpen, 
  onClose, 
  category,
  products 
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between mb-6">
            <DialogTitle className="text-2xl font-playfair">{category}</DialogTitle>
            <img 
              src="/lovable-uploads/047e5b62-f0cc-4e54-99c5-c60c456f6bfb.png" 
              alt="Cornerstone Logo" 
              className="h-16 object-contain"
            />
          </div>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {products.map((product) => (
            <ProductCategory
              key={product.title}
              title={product.title}
              image={product.image}
              details={product.details}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductRangeModal;
