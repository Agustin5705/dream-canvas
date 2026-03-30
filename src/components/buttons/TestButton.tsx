"use client";
import React from "react";
import { StarField } from "@/components/stars/StarField";
import { generateStars } from "@/components/stars/generateStars";

type StarButtonProps = {
  label: string;
  starCount?: number; // optional, defaults to 25
};

export default function StarButton({ label, starCount = 25 }: StarButtonProps) {
  const stars = generateStars(starCount);

  return (
    <a className="relative bg-black text-white px-6 py-3 rounded-md overflow-hidden star-button inline-block">
      <StarField stars={stars} className="absolute inset-0 z-0" />
      <span className="relative z-10 hover:animate-pulse">{label}</span>
    </a>
  );
}
