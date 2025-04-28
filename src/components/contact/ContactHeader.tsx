
import TogoFlag from "@/components/TogoFlag";

const ContactHeader = () => {
  return (
    <div className="mb-10 text-center">
      <div className="mb-8">
        <TogoFlag />
      </div>
      <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-3 text-cornerstone-darkgray">
        Contactez-Nous
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Cornerstone Briques – Votre partenaire de confiance en matériaux de construction
      </p>
    </div>
  );
};

export default ContactHeader;
