
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TogoFlag from "@/components/TogoFlag";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <TogoFlag />
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-[#F25C05]">
                Bâtissons l'avenir, une brique à la fois
              </h1>
              <p className="text-[#424242] text-lg md:text-xl leading-relaxed mb-8">
                Chez Cornerstone Briques, nous ne fabriquons pas simplement des briques – nous créons les fondations de vos projets. 
                Grâce à notre expertise et notre engagement en faveur de la qualité, nous nous sommes imposés comme une référence 
                incontournable en matière de matériaux de construction.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-6 text-[#F25C05]">
                  Notre mission
                </h2>
                <div className="bg-[#F5F5F5] p-8 rounded-xl shadow-sm">
                  <p className="text-center text-lg italic">
                    <span className="text-2xl">💡</span> Offrir des matériaux fiables, résistants et esthétiques pour bâtir l'avenir avec confiance.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-[#F5F5F5]">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-8 text-[#F25C05]">
                Nos valeurs
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-lg bg-white shadow-md"
                >
                  <h3 className="font-semibold text-xl mb-3 text-[#D32F2F]">✔ Qualité</h3>
                  <p className="text-[#424242]">
                    Un contrôle rigoureux pour des produits solides et durables.
                  </p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-lg bg-white shadow-md"
                >
                  <h3 className="font-semibold text-xl mb-3 text-[#D32F2F]">✔ Engagement</h3>
                  <p className="text-[#424242]">
                    La satisfaction client au cœur de notre activité.
                  </p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-lg bg-white shadow-md"
                >
                  <h3 className="font-semibold text-xl mb-3 text-[#D32F2F]">✔ Innovation</h3>
                  <p className="text-[#424242]">
                    Des procédés améliorés pour une meilleure performance.
                  </p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-lg bg-white shadow-md"
                >
                  <h3 className="font-semibold text-xl mb-3 text-[#D32F2F]">✔ Responsabilité</h3>
                  <p className="text-[#424242]">
                    Un impact environnemental réduit grâce à une production raisonnée.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-8 text-[#F25C05]">
                  🎯 Pourquoi choisir Cornerstone Briques ?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  <div className="flex items-center bg-[#F5F5F5] p-4 rounded-lg">
                    <span className="text-[#D32F2F] text-xl mr-3">✅</span>
                    <span className="text-[#424242]">Produits testés et certifiés</span>
                  </div>
                  <div className="flex items-center bg-[#F5F5F5] p-4 rounded-lg">
                    <span className="text-[#D32F2F] text-xl mr-3">✅</span>
                    <span className="text-[#424242]">Livraison rapide et sécurisée</span>
                  </div>
                  <div className="flex items-center bg-[#F5F5F5] p-4 rounded-lg">
                    <span className="text-[#D32F2F] text-xl mr-3">✅</span>
                    <span className="text-[#424242]">Équipe réactive et à l'écoute</span>
                  </div>
                  <div className="flex items-center bg-[#F5F5F5] p-4 rounded-lg">
                    <span className="text-[#D32F2F] text-xl mr-3">✅</span>
                    <span className="text-[#424242]">Service personnalisé selon vos besoins</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-[#F25C05] to-[#D32F2F]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white space-y-6">
              <h2 className="text-3xl font-bold mb-6">🛒 Passez votre commande dès aujourd'hui !</h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
                <a href="tel:+22890964993" className="flex items-center bg-white bg-opacity-20 px-6 py-3 rounded-lg hover:bg-opacity-30 transition-all">
                  <Phone className="mr-2" />
                  +228 90 96 49 93
                </a>
                <a href="tel:+22899870195" className="flex items-center bg-white bg-opacity-20 px-6 py-3 rounded-lg hover:bg-opacity-30 transition-all">
                  <Phone className="mr-2" />
                  +228 99 87 01 95
                </a>
              </div>
              
              <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                <Link to="/panier">
                  <Button 
                    className="bg-white text-[#F25C05] hover:bg-[#F5F5F5] text-lg px-8 py-6 rounded-full shadow-lg"
                  >
                    Commander maintenant
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default About;
