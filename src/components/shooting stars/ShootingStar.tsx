"use client";
import React, { useEffect, useState } from "react";
import {
  generateShootingStar,
  ShootingStar as ShootingStarType,
} from "@/components/shooting stars/generateShootingStar";

type ShootingStarProps = {
  className?: string; // allow external animation classes
};

export function ShootingStar({ className }: ShootingStarProps) {
  const [star, setStar] = useState<ShootingStarType | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const interval = setInterval(() => {
      if (Math.random() > 0.1) {
        setStar(generateShootingStar());
        setTimeout(() => setStar(null), 6000);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  if (!star) return null;

  return (
    <div
      className={`shooting-star ${className ?? ""}`}
      style={{ top: star.top, left: star.left, zIndex: 1 }}
    />
  );
}
