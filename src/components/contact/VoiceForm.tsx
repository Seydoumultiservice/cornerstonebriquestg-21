
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, StopCircle, Trash2, Send } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

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
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const timerRef = useRef<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      
      mediaRecorderRef.current.ondataavailable = (e) => {
        chunksRef.current.push(e.data);
      };
      
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
        chunksRef.current = [];
        
        stream.getTracks().forEach(track => track.stop());
      };
      
      mediaRecorderRef.current.start();
      setIsRecording(true);
      setRecordingTime(0);
      
      timerRef.current = window.setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
      
    } catch (error) {
      console.error("Error accessing microphone:", error);
      toast({
        title: "Erreur",
        description: "Impossible d'accéder au microphone. Veuillez vérifier les permissions.",
        variant: "destructive",
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const deleteRecording = () => {
    if (audioURL) {
      URL.revokeObjectURL(audioURL);
      setAudioURL(null);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="voice-name" className="block text-sm font-medium text-gray-700 mb-1">
          Nom Complet <span className="text-red-500">*</span>
        </label>
        <Input
          id="voice-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Votre nom complet"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="voice-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            id="voice-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="votre@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="voice-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone
          </label>
          <Input
            id="voice-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Votre numéro de téléphone"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="voice-subject" className="block text-sm font-medium text-gray-700 mb-1">
          Sujet <span className="text-red-500">*</span>
        </label>
        <Input
          id="voice-subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="Sujet de votre message"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message Vocal <span className="text-red-500">*</span>
        </label>
        <div className="border border-gray-300 rounded-md p-4 bg-gray-50">
          {!audioURL ? (
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="text-center">
                {isRecording ? (
                  <div className="flex flex-col items-center">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="h-4 w-4 rounded-full bg-red-500 animate-pulse"></div>
                      <span className="text-red-500 font-medium">Enregistrement en cours</span>
                    </div>
                    <div className="text-lg font-mono mb-4">{formatTime(recordingTime)}</div>
                    <Button 
                      type="button"
                      onClick={stopRecording}
                      className="bg-red-500 hover:bg-red-600"
                    >
                      <StopCircle className="mr-2 h-4 w-4" />
                      Arrêter
                    </Button>
                  </div>
                ) : (
                  <>
                    <Button 
                      type="button"
                      onClick={startRecording}
                      className="bg-cornerstone-brick hover:bg-red-700 flex items-center"
                      size="lg"
                    >
                      <Mic className="mr-2 h-5 w-5" />
                      Enregistrer un message vocal
                    </Button>
                    <p className="mt-2 text-sm text-gray-500">
                      Cliquez pour commencer l'enregistrement
                    </p>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-4">
              <audio src={audioURL} controls className="w-full" />
              <div className="flex space-x-3">
                <Button 
                  type="button"
                  onClick={deleteRecording}
                  variant="outline"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Supprimer
                </Button>
                <Button 
                  type="button"
                  onClick={startRecording}
                  className="bg-cornerstone-blue hover:bg-blue-600"
                >
                  <Mic className="mr-2 h-4 w-4" />
                  Réenregistrer
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Button 
        onClick={onSubmit}
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
