
import { Button } from "@/components/ui/button";
import { Mic, StopCircle, Trash2 } from "lucide-react";
import { useVoiceRecorder } from "@/hooks/useVoiceRecorder";

interface VoiceRecorderProps {
  onRecordingComplete: (url: string | null) => void;
}

const VoiceRecorder = ({ onRecordingComplete }: VoiceRecorderProps) => {
  const {
    isRecording,
    recordingTime,
    audioURL,
    startRecording,
    stopRecording,
    deleteRecording,
    formatTime,
  } = useVoiceRecorder();

  const handleDelete = () => {
    deleteRecording();
    onRecordingComplete(null);
  };

  return (
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
              onClick={handleDelete}
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
  );
};

export default VoiceRecorder;
