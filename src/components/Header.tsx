
import React from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("w-full py-6 px-4 sm:px-6 lg:px-8 border-b", className)}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold tracking-tight">FramePreview</h1>
          <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
            Beta
          </span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a 
            href="#" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </a>
          <a 
            href="#" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Gallery
          </a>
          <a 
            href="#" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
