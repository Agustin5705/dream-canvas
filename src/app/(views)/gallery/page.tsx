"use client";

import React, { useState, useMemo } from "react";

import WobblyCard from "@/components/WobblyCard";
import WobblyButton from "@/components/WobblyButton";
import GridItem from "@/components/GridItem";
import PictureFrame from "@/components/PictureFrame";
import { motion } from "framer-motion";
import Image from "next/image";

import { MOCK_GALLERY_DATA, GalleryItem } from "@/data/gallery-data";

const categories = ["All", "sketch", "ui", "concept"] as const;
type Category = (typeof categories)[number];

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
      <WobblyCard className="mx-auto w-full max-w-6xl mb-10 gradient bg-gradient-to-tr from-soft-clay to-stone-500">
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
            className="gradient bg-gradient-to-t from-soft-clay to-stone-400"
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
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 100, x: 75, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
          >
            <GridItem title={item.title}>
              {/* --- Image and Frame --- */}
              <div className="flex justify-center items-center mb-3">
                <PictureFrame className="w-full max-w-xs bg-gradient-to-tr from-soft-clay to-stone-400 rounded-xl shadow-lg p-2">
                  <Image
                    src={item.imageUrl}
                    alt={item.altText}
                    width={256}
                    height={256}
                    className="w-full h-auto object-contain max-h-64 rounded-lg"
                  />
                </PictureFrame>
              </div>

              {/* --- Description --- */}
              <p className="text-pencil-gray/70 text-sm italic mt-2">
                {item.description}
              </p>
            </GridItem>
          </motion.div>
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
