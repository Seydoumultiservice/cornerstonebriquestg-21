
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const images = [
  "/lovable-uploads/dcea2990-4842-413e-93da-d20880beba51.png",
  "/lovable-uploads/127e4ffa-7afc-4ee0-ac18-f037fc31f377.png",
  "/lovable-uploads/cb336614-2f01-411b-9a54-d393f321fef1.png",
  "/lovable-uploads/63c49fa0-42af-4afe-8c10-b4cef0193b31.png",
  "/lovable-uploads/4d868688-dd1c-4537-bca8-80a23fc3e52f.png",
  "/lovable-uploads/aed86bea-eec6-4d26-b96b-e695c4818ad1.png",
  "/lovable-uploads/d916edf3-d8aa-4b38-83fc-cb851342fd5c.png",
  "/lovable-uploads/daa88119-0787-491c-babb-3de9c11eed31.png"
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Notre Galerie
        </motion.h1>
        <ScrollArea className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Gallery;
