
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductsPreview from '../components/ProductsPreview';
import Features from '../components/Features';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const IndexPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductsPreview />
        <Features />
        <Cta />
        <div className="container mx-auto px-4 py-8 text-center">
          <a
            href="https://www.diaspora.cornerstonebrique.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline" 
              className="gap-2 text-lg border-2 border-cornerstone-brick text-cornerstone-brick hover:bg-cornerstone-brick hover:text-white transition-colors"
            >
              Visiter l'espace diaspora
              <ExternalLink className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default IndexPage;
