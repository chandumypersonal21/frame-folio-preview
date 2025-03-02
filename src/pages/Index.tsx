
import React, { useState } from "react";
import Header from "@/components/Header";
import ImageUploader from "@/components/ImageUploader";
import FramePreview from "@/components/FramePreview";
import FrameGallery, { Frame } from "@/components/FrameGallery";
import { frames } from "@/data/frames";
import { toast } from "sonner";

const Index = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedFrameId, setSelectedFrameId] = useState<string | null>(null);
  const [selectedFrame, setSelectedFrame] = useState<Frame | null>(null);

  const handleImageUpload = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
    
    // If no frame is selected, select the first one by default
    if (!selectedFrameId && frames.length > 0) {
      setSelectedFrameId(frames[0].id);
      setSelectedFrame(frames[0]);
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

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container py-8 px-4 sm:px-6 lg:px-8 mx-auto">
        <section className="max-w-4xl mx-auto mb-12 text-center animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Preview Your Photos in Beautiful Frames
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload your image and see how it looks in various frame styles and sizes.
            Find the perfect frame for your memories.
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
                  <h3 className="font-medium mb-2">Available Frame Sizes:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {frames.map(frame => (
                      <li key={frame.id}>{frame.dimensions}</li>
                    ))}
                  </ul>
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
