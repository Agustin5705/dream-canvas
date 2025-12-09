"use client";
import React from "react";
import type { Star } from "@/app/(views)/dayindayout/generateStars";

type Props = {
  stars: Star[];
  className?: string; // e.g., "absolute inset-0 z-5"
};

export function StarField({ stars, className }: Props) {
  return (
    <div className={className}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-twinkle"
          style={{
            width: star.size,
            height: star.size,
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
