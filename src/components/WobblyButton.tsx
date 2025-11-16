"use client";

import React from "react";

// Define the two visual states (variants) for the button
type ButtonVariant = "primary" | "secondary";

interface WobblyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

/**
 * A custom button component using the wobbly aesthetic and simple hover/active effects.
 */
const WobblyButton: React.FC<WobblyButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  // Define base and variant styles
  const baseClasses = `
    rounded-wobbly 
    shadow-pencil 
    border border-pencil-gray/30
    font-sketch 
    text-lg 
    py-3 px-6 
    transition-all duration-150 
    ease-in-out
    cursor-pointer
    w-fit
    active:scale-[0.98]
  `;

  const primaryClasses = `
    bg-pencil-gray 
    text-paper-bg 
    hover:bg-accent-dark 
    hover:shadow-xl
  `;

  const secondaryClasses = `
    bg-soft-clay 
    text-pencil-gray 
    hover:bg-soft-clay/70 
    hover:border-pencil-gray/50
  `;

  // Select classes based on the variant prop
  const variantClasses =
    variant === "primary" ? primaryClasses : secondaryClasses;

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default WobblyButton;
