
import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { toast } from "@/hooks/use-toast";
import { Upload, File, Video, Word, Pdf } from "lucide-react";

interface ProjectUploadFormProps {
  onClose: () => void;
}

const MAX_FILE_SIZE = 45 * 1024 * 1024; // 45MB in bytes
const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'video/mp4',
  'video/quicktime'
];

const ProjectUploadForm: React.FC<ProjectUploadFormProps> = ({ onClose }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [description, setDescription] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    
    const validFiles = selectedFiles.filter(file => {
      if (file.size > MAX_FILE_SIZE) {
        toast({
          title: "Fichier trop volumineux",
          description: `${file.name} dépasse la limite de 45 Mo`,
          variant: "destructive"
        });
        return false;
      }
      if (!ALLOWED_TYPES.includes(file.type)) {
        toast({
          title: "Type de fichier non supporté",
          description: `${file.name} n'est pas un type de fichier accepté`,
          variant: "destructive"
        });
        return false;
      }
      return true;
    });

    setFiles(prev => [...prev, ...validFiles]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Demande envoyée",
      description: "Nous vous contacterons bientôt avec votre devis.",
    });
    onClose();
  };

  const getFileIcon = (type: string) => {
    if (type.includes('pdf')) return <Pdf className="h-5 w-5" />;
    if (type.includes('word')) return <Word className="h-5 w-5" />;
    if (type.includes('video')) return <Video className="h-5 w-5" />;
    return <File className="h-5 w-5" />;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Décrivez votre projet</label>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Détaillez votre projet de construction..."
          className="min-h-[150px]"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Documents du projet</label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <Input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
            multiple
            accept=".pdf,.doc,.docx,.mp4,.mov"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-500">
              Cliquez pour ajouter des fichiers ou glissez-les ici
            </p>
            <p className="text-xs text-gray-400 mt-1">
              PDF, Word, Vidéos (max 45Mo)
            </p>
          </label>
        </div>

        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            {files.map((file, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded">
                {getFileIcon(file.type)}
                <span>{file.name}</span>
                <span className="text-xs text-gray-400">
                  ({Math.round(file.size / 1024 / 1024)}Mo)
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={onClose}>
          Annuler
        </Button>
        <Button type="submit">
          Recevoir mon devis
        </Button>
      </div>
    </form>
  );
};

export default ProjectUploadForm;
