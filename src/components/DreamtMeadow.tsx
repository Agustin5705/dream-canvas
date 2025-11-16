"use client";

import React from "react";

interface DreamtMeadow {
  children: React.ReactNode;
  sceneName: string;
  className?: string;
  // Define a fixed aspect ratio for your drawing space (e.g., 4:3)
  aspectRatio?: string;
}

/**
 * A container designed to host layered, absolutely positioned assets
 * to create a small, immersive, animated scene (vignette).
 * It enforces an aspect ratio to stabilize the drawing canvas.
 */
const DreamtMeadow: React.FC<DreamtMeadow> = ({
  children,
  sceneName,
  className = "",
  aspectRatio = "aspect-[4/3]", // Default to a landscape 4:3 drawing space
}) => {
  return (
    <div
      className={`
        relative 
        w-full 
        overflow-hidden 
        rounded-wobbly 
        shadow-pencil-lg 
        bg-soft-clay 
        border border-pencil-gray/20
        ${aspectRatio}
        ${className}
      `}
      aria-label={`Drawn Scene: ${sceneName}`}
    >
      {/* The children will be absolutely positioned layers (trees, clouds, etc.) */}
      <div className="absolute inset-0">{children}</div>
    </div>
  );
};

export default DreamtMeadow;
