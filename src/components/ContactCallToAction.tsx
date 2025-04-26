
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsApp, Phone, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const ContactCallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show the CTA when location changes
    setIsVisible(true);
    
    // Hide after 30 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 30000);

    return () => clearTimeout(timer);
  }, [location]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 max-w-sm w-full md:w-auto"
        >
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
          
          <h3 className="text-xl font-bold text-cornerstone-brick mb-3">
            Contactez-nous
          </h3>
          
          <div className="space-y-4">
            <a
              href="tel:+22890964993"
              className="flex items-center gap-2 text-gray-700 hover:text-cornerstone-brick"
            >
              <Phone className="w-5 h-5" />
              +228 90 96 49 93
            </a>
            <a
              href="tel:+22899870195"
              className="flex items-center gap-2 text-gray-700 hover:text-cornerstone-brick"
            >
              <Phone className="w-5 h-5" />
              +228 99 87 01 95
            </a>
            <a
              href="https://wa.me/22890964993"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors"
            >
              <WhatsApp className="w-5 h-5" />
              Nous contacter sur WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactCallToAction;
