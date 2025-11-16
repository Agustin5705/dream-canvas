"use client";

import React, { useState, useMemo } from "react";
// We are intentionally not using Next.js Image for placeholders to ensure stability
// import Image from 'next/image';

// Custom Components - FIXED: Using absolute paths for robustness
import WobblyCard from "@/components/WobblyCard";
import WobblyButton from "@/components/WobblyButton";
import GridItem from "@/components/GridItem";
import PictureFrame from "@/components/PictureFrame";

// Data - FIXED: Using absolute paths for robustness
import { MOCK_GALLERY_DATA, GalleryItem } from "@/data/gallery-data";

// Define the available filter categories
const categories = ["All", "sketch", "ui", "concept"] as const;
type Category = (typeof categories)[number];

// Placeholder for your vine frame asset (Change this to your actual path!)
const FRAME_ASSET_PATH = "/assets/vine-frame.png";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") {
      return MOCK_GALLERY_DATA;
    }
    return MOCK_GALLERY_DATA.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="py-10">
      {/* Title Card */}
      <WobblyCard className="mx-auto w-full max-w-6xl mb-10">
        <h1 className="font-sketch text-accent-dark text-4xl sm:text-5xl text-center mb-2">
          The Design Gallery
        </h1>
        <p className="text-pencil-gray text-center max-w-2xl mx-auto">
          A showcase of initial concepts, UI components, and the foundational
          aesthetic assets built for the Dream Canvas.
        </p>
      </WobblyCard>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-12 max-w-6xl mx-auto">
        {categories.map((category) => (
          <WobblyButton
            key={category}
            variant={activeFilter === category ? "primary" : "secondary"}
            onClick={() => setActiveFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </WobblyButton>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {filteredItems.map((item: GalleryItem) => (
          <GridItem key={item.id} title={item.title}>
            {/* --- Image and Frame --- */}
            <div className="flex justify-center items-center mb-3">
              <PictureFrame className="w-full max-w-xs">
                <img
                  src={item.imageUrl}
                  alt={item.altText}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </PictureFrame>
            </div>

            {/* --- Description --- */}
            <p className="text-pencil-gray/70 text-sm italic mt-2">
              {item.description}
            </p>
          </GridItem>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <p className="text-center font-sketch text-2xl text-pencil-gray/50 mt-12">
          No items found in the {activeFilter} category.
        </p>
      )}
    </div>
  );
}
