
import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Mail, MapPin, Send, Mic, MicOff, StopCircle, Trash2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"text" | "voice">("text");
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const timerRef = useRef<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé",
        description: "Nous vous contacterons dans les plus brefs délais.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
      setAudioURL(null);
      setIsSubmitting(false);
    }, 1500);
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
        
        // Stop all tracks of the stream
        stream.getTracks().forEach(track => track.stop());
      };
      
      // Start recording
      mediaRecorderRef.current.start();
      setIsRecording(true);
      setRecordingTime(0);
      
      // Set a timer to update the recording time
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
      
      // Clear the timer
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-3 text-cornerstone-darkgray">
              Contactez-Nous
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des questions sur nos produits ou services? N'hésitez pas à nous contacter.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="order-2 lg:order-1">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="font-playfair text-2xl font-semibold mb-6 text-cornerstone-darkgray">
                  Nos Coordonnées
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-cornerstone-blue p-3 rounded-full text-white mr-4">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-cornerstone-darkgray">Adresse</h3>
                      <p className="text-gray-600">
                        Akodessewa, Après les rails, non loin de la station d'essence CM, Lomé, Togo
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-cornerstone-blue p-3 rounded-full text-white mr-4">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-cornerstone-darkgray">Téléphone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+22890964993" className="hover:text-cornerstone-blue">(+228) 90 96 49 93</a>
                      </p>
                      <p className="text-gray-600">
                        <a href="tel:+22899870195" className="hover:text-cornerstone-blue">(+228) 99 87 01 95</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-cornerstone-blue p-3 rounded-full text-white mr-4">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-cornerstone-darkgray">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:cornerstonebriques@gmail.com" className="hover:text-cornerstone-blue">
                          cornerstonebriques@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold text-lg text-cornerstone-darkgray mb-3">
                    Heures d'Ouverture
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <span className="font-medium">Lundi - Vendredi:</span> 8h00 - 18h00
                    </li>
                    <li>
                      <span className="font-medium">Samedi:</span> 8h00 - 16h00
                    </li>
                    <li>
                      <span className="font-medium">Dimanche:</span> Fermé
                    </li>
                  </ul>
                </div>
              </div>

              {/* Map */}
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
            </div>

            {/* Contact Form */}
            <div className="order-1 lg:order-2">
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
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nom Complet <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Votre nom complet"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="votre@email.com"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Téléphone
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Votre numéro de téléphone"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Sujet <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Sujet de votre message"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Votre message..."
                          rows={6}
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-cornerstone-brick hover:bg-red-700"
                        disabled={isSubmitting}
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
                            Envoyer le Message
                          </span>
                        )}
                      </Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="voice">
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
                                    <div className="flex space-x-3">
                                      <Button 
                                        type="button"
                                        onClick={stopRecording}
                                        className="bg-red-500 hover:bg-red-600"
                                      >
                                        <StopCircle className="mr-2 h-4 w-4" />
                                        Arrêter
                                      </Button>
                                    </div>
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
                        type="submit"
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
                  </TabsContent>
                </Tabs>
              </div>
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
