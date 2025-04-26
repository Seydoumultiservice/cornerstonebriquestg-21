
const ContactMap = () => {
  return (
    <div className="mt-8 rounded-lg overflow-hidden shadow-md h-[300px] bg-gray-100">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521614501017!2d1.2209843152280705!3d6.193397295512755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1c113c5eb15%3A0x3224b5422caf411d!2sLom%C3%A9%2C%20Togo!5e0!3m2!1sen!2sus!4v1650447883429!5m2!1sen!2sus" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Cornerstone Briques Map Location"
      />
    </div>
  );
};

export default ContactMap;
