
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-[#F25C05]">
                Une solution innovante pour les Togolais et la diaspora
              </h1>
              <p className="text-[#424242] text-lg md:text-xl leading-relaxed mb-8">
                Nous comprenons les défis auxquels font face nos compatriotes lors de leurs projets de construction, 
                particulièrement ceux de la diaspora. Les difficultés liées à l'envoi d'argent, la gestion à distance 
                des projets, et les risques associés sont des préoccupations que nous prenons à cœur.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="w-16 h-16 bg-[#F25C05]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#F25C05] text-2xl">🏗️</span>
                  </div>
                  <h3 className="text-[#D32F2F] font-semibold text-lg mb-2">Matériaux Premium</h3>
                  <p className="text-[#424242]">Des matériaux locaux sélectionnés avec soin pour une qualité optimale.</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="w-16 h-16 bg-[#F25C05]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#F25C05] text-2xl">⚙️</span>
                  </div>
                  <h3 className="text-[#D32F2F] font-semibold text-lg mb-2">Techniques Modernes</h3>
                  <p className="text-[#424242]">Des processus de fabrication à la pointe de la technologie.</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="w-16 h-16 bg-[#F25C05]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#F25C05] text-2xl">📊</span>
                  </div>
                  <h3 className="text-[#D32F2F] font-semibold text-lg mb-2">Normes Internationales</h3>
                  <p className="text-[#424242]">Conformité aux standards internationaux de construction.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4 text-[#F25C05]">
                Nos valeurs
              </h2>
              <p className="text-center text-[#424242] text-lg mb-12">
                Nos valeurs guident chaque aspect de notre entreprise, de la fabrication au service client.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-lg bg-[#F5F5F5]"
                >
                  <h3 className="font-semibold text-xl mb-3 text-[#D32F2F]">Qualité</h3>
                  <p className="text-[#424242]">
                    Nous ne compromettons jamais sur la qualité de nos produits, en utilisant les meilleurs matériaux et techniques.
                  </p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-lg bg-[#F5F5F5]"
                >
                  <h3 className="font-semibold text-xl mb-3 text-[#D32F2F]">Communauté</h3>
                  <p className="text-[#424242]">
                    Nous investissons dans notre communauté locale, en créant des emplois et en soutenant le développement.
                  </p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-lg bg-[#F5F5F5]"
                >
                  <h3 className="font-semibold text-xl mb-3 text-[#D32F2F]">Fiabilité</h3>
                  <p className="text-[#424242]">
                    Nous respectons nos engagements, livrant toujours à temps et selon les spécifications convenues.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#F25C05] to-[#D32F2F]">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <Button 
                  className="bg-white text-[#F25C05] hover:bg-[#F5F5F5] text-lg px-8 py-6 rounded-full shadow-lg"
                  onClick={() => window.location.href = '/espace-diaspora'}
                >
                  Découvrir l'espace diaspora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
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
