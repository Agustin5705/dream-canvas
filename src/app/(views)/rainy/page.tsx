"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { StarField } from "@/components/stars/StarField";
import { generateStars } from "@/components/stars/generateStars";
import { ShootingStar } from "@/components/shooting stars/ShootingStar";
import { RainCurtain1, RainCurtain2 } from "@/components/rain/rainCurtain";
import { useMemo } from "react";

export default function Rainy() {
  const [showRain1, setShowRain1] = useState(false);
  const [showRain2, setShowRain2] = useState(false);
  const [showRain3, setShowRain3] = useState(false);
  const [showRain4, setShowRain4] = useState(false);

  const stars = useMemo(() => generateStars(500), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowRain1(Math.random() > 0.2);
      setShowRain2(Math.random() > 0.4);
      setShowRain3(Math.random() > 0.6);
      setShowRain4(Math.random() > 0.8);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen min-h-screen bg-black overflow-x-hidden overflow-y-auto">
      {/* Stars background */}
      <div className="absolute inset-0 z-10">
        <StarField stars={stars} className="absolute inset-0 animate-fade-in" />
      </div>

      {/* Shooting Star */}
      <ShootingStar className="animate-shooting-star z-20" />

      {/* Rain overlay */}
      <div className="absolute inset-0 z-30 overflow-hidden pointer-events-none">
        {showRain1 && <RainCurtain1 />}
        {showRain2 && <RainCurtain2 />}
        {showRain3 && <RainCurtain1 />}
        {showRain4 && <RainCurtain2 />}
      </div>

      {/* Meadow background */}
      <Image
        src="/assets/meadow3.png"
        alt="Meadow"
        fill
        className="object-bottom object-cover z-5"
      />

      {/* Trees */}
      <Image
        src="/assets/tree3.png"
        alt="Tree"
        width={100}
        height={100}
        className="absolute bottom-[15vh] left-[25vw] z-48"
      />
      <Image
        src="/assets/tree5.png"
        alt="Tree"
        width={120}
        height={120}
        className="absolute bottom-[35vh] left-[30vw] z-40"
      />
      <Image
        src="/assets/tree8.png"
        alt="Tree"
        width={120}
        height={120}
        className="absolute bottom-[20vh] left-[17vw] z-49"
      />

      {/* Moon */}
      <Image
        src="/assets/moon.png"
        alt="Moon"
        width={60}
        height={60}
        className="absolute top-[5vh] left-[10vw] opacity-90 brightness-75 z-40 animate-breathe-slow"
      />

      {/* Clouds */}
      <Image
        src="/assets/clouds3.png"
        alt="Cloud"
        width={900}
        height={900}
        className="absolute top-[-20vh] left-[-20vw] opacity-70 brightness-75 z-50 animate-cloud-roll-short"
      />
      <Image
        src="/assets/clouds3.png"
        alt="Cloud"
        width={900}
        height={900}
        className="absolute top-[-15vh] right-[-20vw] opacity-70 brightness-75 z-50 animate-cloud-roll-short"
      />
      <Image
        src="/assets/clouds3.png"
        alt="Cloud"
        width={900}
        height={900}
        className="absolute top-[-25vh] right-[10vw] opacity-70 brightness-75 z-50 animate-cloud-roll-short"
      />
      <Image
        src="/assets/clouds3.png"
        alt="Cloud"
        width={900}
        height={900}
        className="absolute top-[-15vh] right-[20vw] opacity-70 brightness-75 z-49 animate-cloud-roll-short"
      />
    </div>
  );
}
