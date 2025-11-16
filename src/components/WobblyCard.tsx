import React from "react";

// Defines the props for the WobblyCard component
interface WobblyCardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A reusable container that applies the organic, hand-drawn aesthetic
 * using custom Tailwind utilities (wobbly corners and pencil shadows).
 */
const WobblyCard: React.FC<WobblyCardProps> = ({
  children,
  className = "",
}) => {
  // Uses custom 'rounded-wobbly', 'shadow-pencil', and color utilities from tailwind.config.js
  return (
    <div
      className={`
        rounded-wobbly 
        shadow-pencil 
        bg-soft-clay 
        p-6 
        border border-pencil-gray/20 
        transition-all duration-300 
        hover:scale-[1.01] hover:shadow-xl 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default WobblyCard;
