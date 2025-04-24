
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
              src="/lovable-uploads/e9fadad0-2262-4b40-9c15-ca07037e2928.png" 
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
