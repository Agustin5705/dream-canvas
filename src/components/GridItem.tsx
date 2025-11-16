"use client";

import React from "react";

interface GridItemProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

/**
 * A container component for repeated items (like in a gallery or list).
 * It uses the 'paper' aesthetic and includes a standard header.
 */
const GridItem: React.FC<GridItemProps> = ({
  children,
  title,
  className = "",
}) => {
  return (
    <div
      className={`
        rounded-lg 
        bg-paper-light 
        shadow-sm 
        border border-pencil-gray/10
        overflow-hidden 
        transition-shadow duration-300 
        hover:shadow-pencil-lg
        ${className}
      `}
    >
      {/* Item Header - Uses the sketch font for emphasis */}
      <div className="bg-soft-clay p-4 border-b border-pencil-gray/20">
        <h3 className="font-sketch text-pencil-gray text-xl tracking-wider">
          {title}
        </h3>
      </div>

      {/* Item Body - Content goes here */}
      <div className="p-4">{children}</div>
    </div>
  );
};

export default GridItem;
