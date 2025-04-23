
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
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

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, category, details }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair">{category}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          {details.title && (
            <div>
              <h3 className="font-semibold text-xl mb-2">{details.title}</h3>
            </div>
          )}
          <div>
            <h4 className="font-semibold mb-2">Description</h4>
            <p className="text-gray-700">{details.description}</p>
          </div>
          {details.technicalSpecs && (
            <div>
              <h4 className="font-semibold mb-2">Caractéristiques Techniques</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {details.technicalSpecs.dimensions && (
                  <li>Dimensions : {details.technicalSpecs.dimensions}</li>
                )}
                {details.technicalSpecs.weight && (
                  <li>Poids : {details.technicalSpecs.weight}</li>
                )}
                {details.technicalSpecs.loadCapacity && (
                  <li>Capacité de Charge : {details.technicalSpecs.loadCapacity}</li>
                )}
              </ul>
            </div>
          )}
          <div>
            <h4 className="font-semibold mb-2">Application</h4>
            <p className="text-gray-700">{details.application}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
