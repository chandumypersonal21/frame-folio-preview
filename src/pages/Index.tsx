
import React, { useState } from "react";
import Header from "@/components/Header";
import ImageUploader from "@/components/ImageUploader";
import FramePreview from "@/components/FramePreview";
import FrameGallery, { Frame } from "@/components/FrameGallery";
import { frames, frameSizes, FrameSize } from "@/data/frames";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const Index = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedFrameId, setSelectedFrameId] = useState<string | null>(null);
  const [selectedFrame, setSelectedFrame] = useState<Frame | null>(null);
  const [selectedSizeId, setSelectedSizeId] = useState<string | null>("square-8x8"); // Default to square

  const handleImageUpload = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
    
    // If no frame is selected, select the first one by default
    if (!selectedFrameId && frames.length > 0) {
      const defaultFrame = frames.find(f => f.sizeId === selectedSizeId) || frames[0];
      setSelectedFrameId(defaultFrame.id);
      setSelectedFrame(defaultFrame);
    }
  };

  const handleSelectFrame = (frameId: string) => {
    setSelectedFrameId(frameId);
    const frame = frames.find((f) => f.id === frameId) || null;
    setSelectedFrame(frame);
    
    if (frame) {
      toast(`Selected ${frame.name} frame`);
    }
  };

  const handleSelectSize = (sizeId: string) => {
    setSelectedSizeId(sizeId);
    
    // Find the first frame with the selected size
    const firstFrameOfSize = frames.find(f => f.sizeId === sizeId);
    if (firstFrameOfSize) {
      setSelectedFrameId(firstFrameOfSize.id);
      setSelectedFrame(firstFrameOfSize);
      
      const size = frameSizes.find(s => s.id === sizeId);
      if (size) {
        toast(`Selected ${size.name} size: ${size.dimensions}`);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container py-8 px-4 sm:px-6 lg:px-8 mx-auto">
        <section className="max-w-4xl mx-auto mb-12 text-center animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Preview Your Photos in Beautiful Frames
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload your image and see how it looks in various frame designs and sizes.
          </p>
        </section>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-3 space-y-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <FramePreview 
              image={uploadedImage} 
              selectedFrame={selectedFrame} 
              className="w-full aspect-auto min-h-[400px] max-h-[600px]"
            />
            
            {!uploadedImage && (
              <div className="rounded-lg bg-muted/30 p-6 text-center">
                <p className="text-muted-foreground">
                  Upload an image to see how it will look in different frames
                </p>
              </div>
            )}
          </div>
          
          <div className="lg:col-span-2 space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <ImageUploader 
              onImageUpload={handleImageUpload} 
              className={uploadedImage ? "bg-muted/10 border-dashed" : ""}
            />
            
            {uploadedImage && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Current Image</h3>
                  <button 
                    onClick={() => setUploadedImage(null)}
                    className="text-sm text-primary hover:underline"
                  >
                    Change Image
                  </button>
                </div>
                <div className="rounded-lg overflow-hidden border h-36">
                  <img 
                    src={uploadedImage} 
                    alt="Preview" 
                    className="w-full h-full object-contain" 
                  />
                </div>
                
                <div className="rounded-lg bg-muted/30 p-4">
                  <h3 className="font-medium mb-3">Available Frame Sizes:</h3>
                  <div className="flex flex-wrap gap-2">
                    {frameSizes.map((size) => (
                      <button
                        key={size.id}
                        onClick={() => handleSelectSize(size.id)}
                        className={cn(
                          "px-3 py-2 text-sm rounded-md transition-colors",
                          selectedSizeId === size.id 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-muted hover:bg-muted/80"
                        )}
                      >
                        {size.name}
                      </button>
                    ))}
                  </div>
                  {selectedSizeId && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {frameSizes.find(s => s.id === selectedSizeId)?.dimensions}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <section className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <FrameGallery 
            frames={frames}
            selectedFrameId={selectedFrameId}
            onSelectFrame={handleSelectFrame}
            previewImage={uploadedImage}
            filteredSizeId={selectedSizeId}
          />
        </section>
      </main>
      
      <footer className="border-t py-6 mt-12">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} FramePreview. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
