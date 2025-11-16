"use client";

import React from "react";

interface PictureFrameProps {
  children: React.ReactNode;
  className?: string;
  imageClassName?: string;
}

const PictureFrame: React.FC<PictureFrameProps> = ({
  children,
  className = "",
  imageClassName = "",
}) => {
  return (
    <div
      className={`
        relative 
        inline-block 
        p-4  
        aspect-square 
        overflow-hidden
        transition-transform duration-300 hover:scale-[1.02]
        bg-soft-clay/20 border border-pencil-gray/30 rounded-xl
        ${className}
      `}
    >
      <div
        className={`absolute inset-0 m-[10%] flex items-center justify-center overflow-hidden rounded-md ${imageClassName}`}
      >
        {children}
      </div>
    </div>
  );
};

export default PictureFrame;
