
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-9xl font-bold text-cornerstone-brick mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-cornerstone-darkgray mb-6">
            Page Non Trouvée
          </h2>
          <p className="text-xl text-gray-600 max-w-lg mx-auto mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link to="/">
            <Button className="bg-cornerstone-blue hover:bg-blue-600">
              <Home className="mr-2 h-5 w-5" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default NotFound;
