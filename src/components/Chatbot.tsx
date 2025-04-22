
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, X } from "lucide-react";

type Message = {
  text: string;
  isUser: boolean;
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    text: "Bonjour ! Je suis l'assistant virtuel de Cornerstone Briques. Comment puis-je vous aider aujourd'hui ?",
    isUser: false,
    timestamp: new Date(),
  }
];

const getBotResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  if (message.includes("produit") || message.includes("brique") || message.includes("catalogue")) {
    return "Nous proposons trois gammes de produits : briques creuses, briques pleines et hourdis. Vous pouvez consulter notre catalogue complet dans la section Boutique.";
  } else if (message.includes("prix") || message.includes("coût") || message.includes("tarif")) {
    return "Nos prix sont calculés automatiquement en fonction de la quantité commandée, sur la base d'un tarif de référence pour 250 briques. Pour obtenir un devis précis, veuillez ajouter les produits souhaités à votre panier.";
  } else if (message.includes("paiement") || message.includes("payé") || message.includes("payer")) {
    return "Nous proposons plusieurs options de paiement : immédiat (Mobile Money, carte bancaire, virement), à crédit, ou échelonné. Vous pouvez choisir l'option qui vous convient lors de la validation de votre commande.";
  } else if (message.includes("livraison") || message.includes("délai") || message.includes("délais")) {
    return "Les délais de livraison dépendent de votre localisation et de la disponibilité des produits. Vous pouvez suivre l'état de votre commande en temps réel dans la section 'Suivi de Production'.";
  } else if (message.includes("contact") || message.includes("joindre") || message.includes("téléphone")) {
    return "Vous pouvez nous contacter par téléphone au (+228) 90 96 49 93 / 99 87 01 95, par email à cornerstonebriques@gmail.com, ou en visitant notre usine à Akodessewa, Lomé.";
  } else if (message.includes("merci") || message.includes("aurevoir") || message.includes("au revoir")) {
    return "Merci de votre intérêt pour Cornerstone Briques ! N'hésitez pas à nous contacter pour toute autre question.";
  } else {
    return "Je ne suis pas sûr de comprendre votre demande. Pourriez-vous reformuler ou poser une question sur nos produits, nos prix, nos options de paiement ou notre service de livraison ?";
  }
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      text: newMessage,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botMessage: Message = {
        text: getBotResponse(newMessage),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <Button 
          onClick={() => setIsOpen(true)} 
          className="w-14 h-14 rounded-full bg-cornerstone-blue hover:bg-blue-600 shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col border border-gray-200">
          {/* Chat Header */}
          <div className="bg-cornerstone-blue text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="font-medium">Assistant Cornerstone</h3>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)} 
              className="h-8 w-8 text-white hover:bg-blue-600 hover:text-white rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-3 overflow-y-auto max-h-96 min-h-64">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-3 ${message.isUser ? "text-right" : "text-left"}`}
              >
                <div 
                  className={`inline-block p-3 rounded-lg ${
                    message.isUser 
                      ? "bg-cornerstone-blue text-white rounded-tr-none" 
                      : "bg-gray-100 text-gray-800 rounded-tl-none"
                  }`}
                >
                  {message.text}
                </div>
                <div className={`text-xs text-gray-500 mt-1 ${message.isUser ? "text-right" : "text-left"}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div className="border-t border-gray-200 p-3 flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Écrivez votre message..."
              className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-cornerstone-blue"
            />
            <Button
              onClick={handleSendMessage}
              className="bg-cornerstone-blue hover:bg-blue-600 text-white rounded-l-none"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
