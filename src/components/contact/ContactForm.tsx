
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import TextForm from "./TextForm";
import VoiceForm from "./VoiceForm";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageType, setMessageType] = useState<"text" | "voice">("text");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Message envoyé",
        description: "Nous vous contacterons dans les plus brefs délais.",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="font-playfair text-2xl font-semibold mb-6 text-cornerstone-darkgray">
        Envoyez-nous un Message
      </h2>
      
      <Tabs defaultValue="text" onValueChange={(value) => setMessageType(value as "text" | "voice")}>
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="text">Message Texte</TabsTrigger>
          <TabsTrigger value="voice">Message Vocal</TabsTrigger>
        </TabsList>
        
        <TabsContent value="text">
          <TextForm isSubmitting={isSubmitting} onSubmit={handleSubmit} />
        </TabsContent>
        
        <TabsContent value="voice">
          <VoiceForm isSubmitting={isSubmitting} onSubmit={handleSubmit} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContactForm;
