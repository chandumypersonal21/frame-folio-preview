
import React from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export interface Frame {
  id: string;
  name: string;
  aspectRatio: number;
  dimensions: string;
  sizeId: string;
  borderStyle?: string;
  matColor?: string;
  frameWidth?: number;
  matWidth?: number;
  frameImageUrl?: string;
}

interface FrameGalleryProps {
  frames: Frame[];
  selectedFrameId: string | null;
  onSelectFrame: (frameId: string) => void;
  previewImage: string | null;
  className?: string;
  filteredSizeId?: string | null;
}

const FrameGallery: React.FC<FrameGalleryProps> = ({
  frames,
  selectedFrameId,
  onSelectFrame,
  previewImage,
  className,
  filteredSizeId,
}) => {
  // Filter frames by selected size
  const filteredFrames = filteredSizeId 
    ? frames.filter(frame => frame.sizeId === filteredSizeId)
    : frames;

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Select Frame Style</h3>
        <span className="text-sm text-muted-foreground">
          {filteredFrames.length} templates available
        </span>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {filteredFrames.map((frame) => {
          const isSelected = selectedFrameId === frame.id;
          
          return (
            <div
              key={frame.id}
              className={cn(
                "frame-card relative rounded-lg overflow-hidden border bg-card",
                isSelected ? "ring-2 ring-primary ring-offset-2" : "hover:border-primary/50",
                "cursor-pointer transition-all"
              )}
              onClick={() => onSelectFrame(frame.id)}
            >
              <div className="p-3">
                <div className="relative">
                  <AspectRatio ratio={frame.aspectRatio} className="overflow-hidden bg-secondary/50 mb-2">
                    {previewImage ? (
                      <img 
                        src={previewImage}
                        alt="Frame preview" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">No image</span>
                      </div>
                    )}
                  </AspectRatio>
                  
                  {frame.frameImageUrl && (
                    <div className="absolute inset-0 pointer-events-none">
                      <img 
                        src={frame.frameImageUrl} 
                        alt={`${frame.name} frame`}
                        className="w-full h-full object-contain" 
                      />
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col">
                  <span className="font-medium text-sm">{frame.name}</span>
                  <span className="text-xs text-muted-foreground">{frame.dimensions}</span>
                </div>
              </div>
              
              {isSelected && (
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FrameGallery;
