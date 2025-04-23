
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductsPreview from '../components/ProductsPreview';
import Features from '../components/Features';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const IndexPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductsPreview />
        <Features />
        <Cta />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default IndexPage;
