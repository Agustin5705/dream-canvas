"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { StarField } from "./stars/StarField";
import { generateStars } from "./stars/generateStars";
import Image from "next/image";

// Define the navigation items for the site structure
const navItems = [
  { name: "Home", href: "/" },
  { name: "Gallery & Assets", href: "/gallery" },
  { name: "Living Canvas", href: "/livingcanvas" },
  { name: "Dreamt Meadow", href: "/meadow" },
  { name: "Day In Day Out", href: "/dayindayout" },
  { name: "Rainy", href: "/rainy" },
  { name: "Snowed In", href: "/snowedin" },
];

/**
 * Navigation bar for the Dream Canvas site. It uses placeholder icons
 * and the custom font-sketch class aesthetic.
 */
const Navigation: React.FC = () => {
  // Hook to determine the active route for styling
  const pathname = usePathname();

  return (
    <header className="top-0 left-0 right-0 z-100 relative bg-paper-bg/95 backdrop-blur-sm shadow-sm bg-gradient-to-r from-paper-bg via-soft-clay to-paper-bg bg-[length:200%_100%] bg-no-repeat animate-slow-slide">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 max-w-7xl bg-gradient-to-t from-soft-clay to-stone-600">
        {/* Site Title - Uses the custom sketch font aesthetic for the title */}
        <div className="flex">
          <Link
            href="/"
            className="text-2xl font-sketch text-accent-dark tracking-wider"
          >
            Dream Canvas
          </Link>
          <div className="hidden sm:block relative w-8 h-8 ml-3 animate-breathe-slow cursor-pointer">
            <Image
              src="/assets/eye1.png"
              alt="Dream Canvas Eye"
              fill
              className="object-contain opacity-80"
            />
          </div>
        </div>

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
                  relative text-lg font-sketch transition-all duration-300 rounded-xl p-1 bg-gradient-to-br from-black/60 to-stone-700 shadow-xl text-soft-clay
                  ${
                    isActive
                      ? "text-accent-dark font-bold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-accent-dark after:animate-wiggle"
                      : "text-pencil-gray/70 hover:text-accent-dark hover:scale-105 hover:rotate-1"
                  }
                `}
              >
                {item.name}

                {/* Stars only on active */}
                {isActive && (
                  <div className="absolute inset-0 opacity-30 pointer-events-none rounded-xl overflow-hidden">
                    <StarField stars={generateStars(20)} />
                  </div>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-[3px]
             bg-gradient-to-r from-accent-dark via-soft-clay to-accent-dark
             bg-[length:200%_100%] bg-no-repeat animate-slide"
      ></div>
    </header>
  );
};

export default Navigation;
