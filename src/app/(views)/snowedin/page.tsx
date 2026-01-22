"use client";

import Image from "next/image";
import { StarField } from "@/components/stars/StarField";
import { generateStars } from "@/components/stars/generateStars";
import { ShootingStar } from "@/components/shooting stars/ShootingStar";
import { SnowCurtain1, SnowCurtain2 } from "@/components/snow/snowCurtain";

export default function TestPage() {
  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 z-10">
        <StarField
          stars={generateStars(500)}
          className="absolute inset-0 animate-fade-in"
        />
      </div>

      {/* Shooting Star */}
      <ShootingStar className="animate-shooting-star z-20" />

      {/* Rain overlay */}
      <div className="absolute inset-0 z-30 overflow-hidden">
        <SnowCurtain1 />
        <SnowCurtain2 />
      </div>

      {/* Meadow background */}
      <Image
        src="/assets/meadow3.png"
        alt="Meadow"
        fill
        className="object-bottom object-cover z-5"
      />

      {/* Person */}
      <Image
        src="/assets/person2.png"
        alt="Person"
        width={60}
        height={60}
        className="absolute bottom-[40vh] left-[45vw] z-50"
      />

      {/* Moon */}
      <Image
        src="/assets/moon.png"
        alt="Moon"
        width={150}
        height={150}
        className="absolute top-[5vh] left-[10vw] opacity-90 brightness-75 z-40 animate-breathe-slow"
      />

      {/* Cloud */}
      <Image
        src="/assets/clouds3.png"
        alt="Cloud"
        width={250}
        height={250}
        className="absolute top-[5vh] left-[40vw] opacity-90 brightness-75 z-40 animate-cloud-roll-short"
      />
      <Image
        src="/assets/clouds3.png"
        alt="Cloud"
        width={250}
        height={250}
        className="absolute top-[10vh] left-[30vw] opacity-90 brightness-75 z-40 animate-cloud-roll-short"
      />
      <Image
        src="/assets/clouds3.png"
        alt="Cloud"
        width={275}
        height={275}
        className="absolute top-[17vh] left-[50vw] opacity-90 brightness-75 z-40 animate-cloud-roll-short"
      />
      <Image
        src="/assets/clouds3.png"
        alt="Cloud"
        width={260}
        height={260}
        className="absolute top-[3vh] left-[25vw] opacity-90 brightness-75 z-40 animate-cloud-roll-short"
      />
      <Image
        src="/assets/clouds3.png"
        alt="Cloud"
        width={175}
        height={175}
        className="absolute top-[25vh] left-[70vw] opacity-90 brightness-75 z-40 animate-cloud-roll-short"
      />
    </div>
  );
}
