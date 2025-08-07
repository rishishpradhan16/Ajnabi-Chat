import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  title: string;
  image: string;
  className?: string;
  onPlay?: () => void;
}

const ContentCard = ({ title, image, className, onPlay }: ContentCardProps) => {
  return (
    <div className={cn("group relative overflow-hidden rounded-xl horror-card", className)}>
      <div className="aspect-[2/3] relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-semibold text-lg mb-3 horror-text-glow">
            {title}
          </h3>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="lg"
            onClick={onPlay}
            className="w-16 h-16 rounded-full bg-horror-red hover:bg-horror-red-dark border-2 border-white/20 horror-glow"
          >
            <Play className="w-6 h-6 ml-1" fill="currentColor" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
