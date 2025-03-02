
import React, { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Upload, Image as ImageIcon } from "lucide-react";

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
  className?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, className }) => {
  const [isDragging, setIsDragging] = useState(false);
  
  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);
  
  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);
  
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0];
        validateAndUpload(file);
      }
    },
    [onImageUpload]
  );
  
  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];
        validateAndUpload(file);
      }
    },
    [onImageUpload]
  );
  
  const validateAndUpload = (file: File) => {
    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file");
      return;
    }
    
    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error("Image size should be less than 10MB");
      return;
    }
    
    toast.success("Image uploaded successfully");
    onImageUpload(file);
  };
  
  return (
    <div 
      className={cn(
        "image-upload-container bg-card rounded-xl border-2 border-dashed border-muted transition-all overflow-hidden",
        isDragging ? "border-primary bg-secondary/50 drop-zone active" : "drop-zone",
        className
      )}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <label htmlFor="image-upload" className="flex flex-col items-center justify-center w-full h-full py-12 cursor-pointer">
        <div className="flex flex-col items-center justify-center text-center px-6">
          <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-muted">
            {isDragging ? (
              <Upload className="w-8 h-8 text-primary animate-pulse" />
            ) : (
              <ImageIcon className="w-8 h-8 text-muted-foreground" />
            )}
          </div>
          <h3 className="mb-2 text-xl font-medium text-foreground">
            {isDragging ? "Drop your image here" : "Upload your image"}
          </h3>
          <p className="mb-6 text-sm text-muted-foreground max-w-md">
            Drag and drop your image here, or click to browse. We support JPG, PNG and WebP files up to 10MB.
          </p>
          <div 
            className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Browse files
          </div>
        </div>
        <input 
          id="image-upload" 
          type="file" 
          accept="image/*" 
          className="hidden" 
          onChange={handleFileChange} 
        />
      </label>
    </div>
  );
};

export default ImageUploader;
