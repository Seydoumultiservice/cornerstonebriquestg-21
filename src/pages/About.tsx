
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ContactCallToAction from "@/components/ContactCallToAction";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section avec le nouveau drapeau */}
        <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <img 
                src="/lovable-uploads/41ee7fc3-6a74-4211-adaa-2f710dde09bb.png"
                alt="Drapeau du Togo"
                className="w-32 h-20 mx-auto mb-8 rounded-lg shadow-lg object-cover"
              />
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-[#F25C05]">
                L'histoire de Cornerstone Briques : Bâtir l'avenir avec confiance
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="prose prose-lg">
                <p className="text-lg leading-relaxed mb-8">
                  Chez Cornerstone Briques, nous ne fabriquons pas seulement des briques. Nous bâtissons des rêves, nous renforçons des liens familiaux, et nous garantissons que chaque projet de construction prenne vie avec transparence et fiabilité.
                </p>

                <h2 className="font-playfair text-2xl font-bold text-[#F25C05] mb-4">
                  Une réponse aux défis de la diaspora togolaise
                </h2>
                <p className="text-lg leading-relaxed mb-8">
                  Chaque année, des milliers de Togolais de la diaspora investissent dans la construction d'un foyer sûr et pérenne pour leurs proches. Mais trop souvent, ces projets ne voient pas le jour comme prévu. Maisons inachevées, budgets détournés, investissements perdus… des réalités amères qui engendrent frustration et découragement.
                </p>
                <p className="text-lg leading-relaxed mb-8">
                  Face à cette situation, notre fondateur, fort de son expérience personnelle, a décidé d'agir. Il a créé Cornerstone Briques afin de proposer une solution fiable et technologique qui redonne aux Togolais de la diaspora le contrôle total sur leurs projets immobiliers.
                </p>

                <h2 className="font-playfair text-2xl font-bold text-[#F25C05] mb-4">
                  Technologie et transparence : suivre votre projet à distance
                </h2>
                <p className="text-lg leading-relaxed mb-8">
                  Grâce à notre système de suivi en temps réel, vous pouvez visualiser chaque avancée de votre construction, où que vous soyez dans le monde.
                </p>
                <ul className="list-none space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">🔹</span>
                    Mises à jour régulières sous forme de photos et vidéos de votre projet
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">🔹</span>
                    Contrôle transparent des matériaux et des coûts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">🔹</span>
                    Traçabilité complète pour éviter les mauvaises surprises
                  </li>
                </ul>
                <p className="text-lg leading-relaxed italic mb-8">
                  Avec Cornerstone Briques, vous ne confiez plus votre rêve au hasard – vous le supervisez avec sérénité et assurance.
                </p>

                <h2 className="font-playfair text-2xl font-bold text-[#F25C05] mb-4">
                  Nos engagements pour une construction sans compromis
                </h2>
                <ul className="list-none space-y-6 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">📌</span>
                    <div>
                      <strong>Qualité supérieure :</strong> Nos briques respectent des standards rigoureux pour une durabilité optimale.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">📌</span>
                    <div>
                      <strong>Solutions sur mesure :</strong> Stockage gratuit de vos briques pendant six mois et options de paiement flexibles adaptées aux besoins des Togolais de la diaspora et aux résidents du pays.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">📌</span>
                    <div>
                      <strong>Livraison fiable et rapide :</strong> Chaque commande est traitée avec soin pour garantir une disponibilité immédiate des matériaux.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">📌</span>
                    <div>
                      <strong>Accompagnement personnalisé :</strong> Une équipe à votre écoute pour vous conseiller, sécuriser votre investissement et garantir votre satisfaction.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-[#F25C05] to-[#D32F2F]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white space-y-6">
              <h2 className="text-3xl font-bold mb-6">Bâtissons ensemble votre projet dès aujourd'hui !</h2>
              
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
      <ContactCallToAction />
    </div>
  );
};

export default About;
