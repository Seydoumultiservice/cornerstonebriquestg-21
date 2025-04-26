
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <ContactHeader />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="order-2 lg:order-1">
              <ContactInfo />
              <ContactMap />
            </div>
            
            <div className="order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Contact;
