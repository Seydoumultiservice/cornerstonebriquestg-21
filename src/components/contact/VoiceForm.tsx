
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import FormField from "./form-fields/FormField";
import VoiceRecorder from "./form-fields/VoiceRecorder";

interface VoiceFormProps {
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

const VoiceForm = ({ isSubmitting, onSubmit }: VoiceFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
  });
  const [audioURL, setAudioURL] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <div className="space-y-6">
      <FormField
        id="voice-name"
        name="name"
        label="Nom Complet"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Votre nom complet"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          id="voice-email"
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="votre@email.com"
        />
        
        <FormField
          id="voice-phone"
          name="phone"
          label="Téléphone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Votre numéro de téléphone"
        />
      </div>
      
      <FormField
        id="voice-subject"
        name="subject"
        label="Sujet"
        value={formData.subject}
        onChange={handleChange}
        required
        placeholder="Sujet de votre message"
      />
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message Vocal <span className="text-red-500">*</span>
        </label>
        <VoiceRecorder onRecordingComplete={setAudioURL} />
      </div>
      
      <Button 
        onClick={handleSubmit}
        className="w-full bg-cornerstone-brick hover:bg-red-700"
        disabled={isSubmitting || !audioURL || !formData.name || !formData.email || !formData.subject}
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Envoi en cours...
          </span>
        ) : (
          <span className="flex items-center">
            <Send className="mr-2 h-4 w-4" />
            Envoyer le Message Vocal
          </span>
        )}
      </Button>
    </div>
  );
};

export default VoiceForm;
