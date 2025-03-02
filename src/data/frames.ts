
import { Frame } from "@/components/FrameGallery";

// Define frame sizes
export type FrameSize = {
  id: string;
  name: string;
  dimensions: string;
};

export const frameSizes: FrameSize[] = [
  {
    id: "square-8x8",
    name: "Square",
    dimensions: "8\" × 8\" (20.3cm × 20.3cm)"
  },
  {
    id: "rectangle-5x7",
    name: "Rectangle",
    dimensions: "5\" × 7\" (12.7cm × 17.8cm)"
  },
  {
    id: "panoramic-10x4",
    name: "Panoramic",
    dimensions: "10\" × 4\" (25.4cm × 10.2cm)"
  }
];

export const frames: Frame[] = [
  // Square 8x8 frames
  {
    id: "classic-frame-8x8",
    name: "Classic Frame",
    aspectRatio: 1,
    dimensions: "8\" × 8\" (20.3cm × 20.3cm)",
    sizeId: "square-8x8",
    borderStyle: "border-2 border-black",
    matColor: "bg-white",
    frameWidth: 14,
    matWidth: 32,
    frameImageUrl: "https://printposters.in/public/uploads/category-frames/frame_171922385542.png"
  },
  {
    id: "modern-frame-8x8",
    name: "Modern Frame",
    aspectRatio: 1,
    dimensions: "8\" × 8\" (20.3cm × 20.3cm)",
    sizeId: "square-8x8",
    borderStyle: "border-2 border-zinc-800",
    matColor: "bg-stone-50",
    frameWidth: 14,
    matWidth: 32,
    frameImageUrl: "https://printposters.in/public/uploads/category-frames/frame_171922387828.png"
  },
  {
    id: "panoramic-frame-8x8",
    name: "Panoramic Frame",
    aspectRatio: 1,
    dimensions: "8\" × 8\" (20.3cm × 20.3cm)",
    sizeId: "square-8x8",
    borderStyle: "border-2 border-zinc-900",
    matColor: "bg-zinc-50",
    frameWidth: 14,
    matWidth: 32,
    frameImageUrl: "https://printposters.in/public/uploads/category-frames/frame_17192239138.png"
  },
  {
    id: "portrait-frame-8x8",
    name: "Portrait Frame",
    aspectRatio: 1,
    dimensions: "8\" × 8\" (20.3cm × 20.3cm)",
    sizeId: "square-8x8",
    borderStyle: "border-2 border-neutral-800",
    matColor: "bg-neutral-50",
    frameWidth: 14,
    matWidth: 32,
    frameImageUrl: "https://printposters.in/public/uploads/category-frames/frame_17193751424.png"
  },
  {
    id: "landscape-frame-8x8",
    name: "Landscape Frame",
    aspectRatio: 1,
    dimensions: "8\" × 8\" (20.3cm × 20.3cm)",
    sizeId: "square-8x8",
    borderStyle: "border-2 border-zinc-800",
    matColor: "bg-gray-50",
    frameWidth: 14,
    matWidth: 32,
    frameImageUrl: "https://printposters.in/public/uploads/category-frames/frame_171937517915.png"
  },
  {
    id: "classic-5x7-frame-8x8",
    name: "Classic 5×7 Frame",
    aspectRatio: 1,
    dimensions: "8\" × 8\" (20.3cm × 20.3cm)",
    sizeId: "square-8x8",
    borderStyle: "border-2 border-black",
    matColor: "bg-stone-50",
    frameWidth: 14,
    matWidth: 32,
    frameImageUrl: "https://printposters.in/public/uploads/category-frames/frame_171937521027.png"
  },
  
  // Rectangle 5x7 frames
  {
    id: "classic-frame-5x7",
    name: "Classic Frame",
    aspectRatio: 5/7,
    dimensions: "5\" × 7\" (12.7cm × 17.8cm)",
    sizeId: "rectangle-5x7",
    borderStyle: "border-2 border-black",
    matColor: "bg-white",
    frameWidth: 14,
    matWidth: 32,
    frameImageUrl: "https://printposters.in/public/uploads/category-frames/frame_171922385542.png"
  },
  {
    id: "modern-frame-5x7",
    name: "Modern Frame",
    aspectRatio: 5/7,
    dimensions: "5\" × 7\" (12.7cm × 17.8cm)",
    sizeId: "rectangle-5x7",
    borderStyle: "border-2 border-zinc-800",
    matColor: "bg-stone-50",
    frameWidth: 14,
    matWidth: 32,
    frameImageUrl: "https://printposters.in/public/uploads/category-frames/frame_171922387828.png"
  },
  
  // Panoramic 10x4 frames
  {
    id: "panoramic-frame-10x4",
    name: "Panoramic Frame",
    aspectRatio: 10/4,
    dimensions: "10\" × 4\" (25.4cm × 10.2cm)",
    sizeId: "panoramic-10x4",
    borderStyle: "border-2 border-zinc-900",
    matColor: "bg-zinc-50",
    frameWidth: 14,
    matWidth: 32,
    frameImageUrl: "https://printposters.in/public/uploads/category-frames/frame_17192239138.png"
  },
  {
    id: "modern-frame-10x4",
    name: "Modern Frame",
    aspectRatio: 10/4,
    dimensions: "10\" × 4\" (25.4cm × 10.2cm)",
    sizeId: "panoramic-10x4",
    borderStyle: "border-2 border-zinc-800",
    matColor: "bg-stone-50",
    frameWidth: 14,
    matWidth: 32,
    frameImageUrl: "https://printposters.in/public/uploads/category-frames/frame_171922387828.png"
  }
];
