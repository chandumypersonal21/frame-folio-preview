
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Frame {
  id: string;
  name: string;
  aspectRatio: number;
  dimensions: string;
  borderStyle?: string;
  matColor?: string;
  frameWidth?: number;
  matWidth?: number;
}

interface FramePreviewProps {
  image: string | null;
  selectedFrame: Frame | null;
  className?: string;
}

const FramePreview: React.FC<FramePreviewProps> = ({
  image,
  selectedFrame,
  className,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
    if (image) {
      const img = new Image();
      img.onload = () => setImageLoaded(true);
      img.src = image;
    }
  }, [image]);

  if (!image || !selectedFrame) {
    return (
      <div className={cn("rounded-xl overflow-hidden bg-muted/30 flex items-center justify-center", className)}>
        <p className="text-muted-foreground text-sm">
          Upload an image and select a frame to see the preview
        </p>
      </div>
    );
  }

  const {
    aspectRatio,
    borderStyle = "border-2 border-black",
    matColor = "bg-white",
    frameWidth = 20,
    matWidth = 40,
  } = selectedFrame;

  return (
    <div className={cn("frame-preview relative rounded-xl overflow-hidden shadow-lg transition-all", className)}>
      <div className={cn("absolute inset-0 bg-secondary/50 backdrop-blur-sm", imageLoaded ? "animate-fade-out opacity-0" : "opacity-100")} />
      
      <div className={cn(
        "relative",
        borderStyle,
        "transition-transform duration-300"
      )}>
        <div
          className={cn(
            matColor,
            "p-[40px]"
          )}
        >
          <AspectRatio ratio={aspectRatio} className="overflow-hidden bg-black/5">
            <img
              src={image}
              alt="Framed artwork"
              className={cn(
                "w-full h-full object-cover transition-opacity duration-300",
                imageLoaded ? "opacity-100" : "opacity-0"
              )}
              onLoad={() => setImageLoaded(true)}
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};

export default FramePreview;
