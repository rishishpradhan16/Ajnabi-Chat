import { Play, Pause, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface AudioPlayerProps {
  title: string;
  currentTime?: string;
  duration?: string;
}

const AudioPlayer = ({ title, currentTime = "0:00", duration = "2:56" }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const waveformBars = Array.from({ length: 40 }, (_, i) => (
    <div
      key={i}
      className="w-1 bg-horror-red opacity-60 rounded-full"
      style={{
        height: `${Math.random() * 30 + 10}px`,
        animation: isPlaying ? `pulse ${Math.random() * 2 + 1}s infinite` : 'none'
      }}
    />
  ));

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background-secondary border-t border-border p-4">
      <div className="flex items-center gap-4">
        <Button
          size="sm"
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-12 h-12 rounded-full bg-horror-red hover:bg-horror-red-dark horror-glow"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" fill="currentColor" />
          ) : (
            <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
          )}
        </Button>
        
        <div className="flex-1">
          <div className="mb-2">
            <span className="text-sm font-medium text-foreground">{title}</span>
            <span className="text-xs text-horror-red ml-2">Pause</span>
          </div>
          
          <div className="flex items-center gap-2 h-8">
            <div className="flex items-end gap-1 flex-1 h-full">
              {waveformBars}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
