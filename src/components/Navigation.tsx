"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Define the navigation items for the site structure
const navItems = [
  { name: "Home", href: "/" },
  { name: "Gallery & Assets", href: "/gallery" },
  { name: "Dreamt Meadow", href: "/meadow" },
  { name: "Day In Day Out", href: "/dayindayout" },
  { name: "Test", href: "/test" },
];

/**
 * Navigation bar for the Dream Canvas site. It uses placeholder icons
 * and the custom font-sketch class aesthetic.
 */
const Navigation: React.FC = () => {
  // Hook to determine the active route for styling
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="top-0 left-0 right-0 z-100 relative bg-paper-bg/95 backdrop-blur-sm shadow-sm border-b border-pencil-gray/20">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 max-w-7xl">
        {/* Site Title - Uses the custom sketch font aesthetic for the title */}
        <Link
          href="/"
          className="text-2xl font-sketch text-accent-dark tracking-wider"
        >
          Dream Canvas
        </Link>
        {/* Mobile Menu Button */}{" "}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-pencil-gray"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="sm:hidden w-full bg-paper-bg/95 backdrop-blur-sm border-t border-pencil-gray/20 px-6 py-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={` block text-lg font-sans transition-colors duration-200 ${
                    isActive
                      ? "text-pencil-gray font-bold underline decoration-2 decoration-pencil-gray/50 underline-offset-4"
                      : "text-pencil-gray/70 hover:text-pencil-gray"
                  } `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
        {/* Navigation Links */}
        <nav className="hidden sm:flex space-x-8">
          {navItems.map((item) => {
            // Check if the link is active
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  text-lg font-sans transition-colors duration-200 
                  ${
                    isActive
                      ? "text-pencil-gray font-bold underline decoration-2 decoration-pencil-gray/50 underline-offset-4"
                      : "text-pencil-gray/70 hover:text-pencil-gray"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        {/* Placeholder for the "Inner Eye" Motif (animate-breathe-slow) */}
        <div
          title="Inner Eye Motif Placeholder"
          className="hidden sm:block text-pencil-gray/80 text-2xl font-sketch animate-breathe-slow cursor-pointer"
        >
          👁️‍🗨️
        </div>
      </div>
    </header>
  );
};

export default Navigation;
