"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SkyGradient } from "@/components/sky gradient/skygradient";
import { coordinates } from "@/components/coordinates/coordinates";

export default function SkyView() {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());

  // Refresh hour every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHour(new Date().getHours());
    }, 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  // Daytime: 6–22, Nighttime: 22–6
  const isDay = currentHour >= 6 && currentHour < 22;

  return (
    <div className={`relative w-full h-screen overflow-hidden`}>
      <SkyGradient hour={currentHour} />
      {/* Sun or Moon */}
      <Image
        src={isDay ? "/assets/sun.png" : "/assets/moon.png"}
        alt={isDay ? "Sun" : "Moon"}
        width={isDay ? 200 : 75}
        height={isDay ? 200 : 75}
        className="absolute animate-breathe-slow"
        style={{
          top: coordinates[currentHour].top,
          left: coordinates[currentHour].left,
        }}
      />

      {/* Debug: show current hour */}
      <p className="absolute bottom-4 left-4 text-blue-800">
        Current hour: {currentHour}
      </p>
    </div>
  );
}
