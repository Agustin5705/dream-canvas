"use client";

import React from "react";

import WobblyCard from "../../../components/WobblyCard";
import Image from "next/image";

const meadowHeight = "400px";
const meadowWidth = "600px";

export default function MeadowPage() {
  return (
    <div className="flex flex-col items-center py-10 px-4">
      {/* Main Title Card */}
      <WobblyCard className="max-w-4xl w-full mb-10 text-center">
        <h1 className="font-sketch text-4xl text-accent-dark">
          The Dreamt Meadow Vignette
        </h1>
        <p className="text-pencil-gray/80 text-sm mt-2">
          A layered, animated scene showcasing organic asset composition and
          custom CSS motion.
        </p>
      </WobblyCard>

      {/* The Dreamt Meadow Component (The Canvas) */}

      <div
        className="relative"
        style={{ width: 600, height: 400, isolation: "isolate" }}
      >
        {/* VINES */}

        <Image
          src="/assets/vine4.png"
          alt="Vine ornament"
          width={50}
          height={100}
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "-4%",
            transform: "translateY(-50%)",
            zIndex: 30,
            width: "50px",
            height: "450px",
            objectFit: "fill",
          }}
        />
        <Image
          src="/assets/vine4.png"
          alt="Vine ornament"
          width={50}
          height={100}
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "-4%",
            transform: "translateY(-50%) scaleX(-1)",
            zIndex: 30,
            width: "50px",
            height: "450px",
            objectFit: "fill",
          }}
        />

        <Image
          src="/assets/vine4.png"
          alt="Vine ornament"
          width={50}
          height={100}
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "95%",
            transform: "translateY(-50%) scaleX(-1)",
            zIndex: 30,
            width: "50px",
            height: "450px",
            objectFit: "fill",
          }}
        />
        <Image
          src="/assets/vine4.png"
          alt="Vine ornament"
          width={50}
          height={100}
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "95%",
            transform: "translateY(-50%)",
            zIndex: 30,
            width: "50px",
            height: "450px",
            objectFit: "fill",
          }}
        />

        <Image
          src="/assets/vine1.png"
          alt="Vine ornament"
          width={50}
          height={100}
          className="absolute pointer-events-none"
          style={{
            top: "1%",
            left: "44%",
            transform: "translateY(-50%) rotate(90deg) scaleY(-1)",
            zIndex: 30,
            width: "70px",
            height: "600px",
            objectFit: "fill",
          }}
        />
        <Image
          src="/assets/vine1.png"
          alt="Vine ornament"
          width={50}
          height={100}
          className="absolute pointer-events-none"
          style={{
            top: "1%",
            left: "44%",
            transform: "translateY(-50%) rotate(90deg)",
            zIndex: 30,
            width: "70px",
            height: "600px",
            objectFit: "fill",
          }}
        />

        <Image
          src="/assets/vine1.png"
          alt="Vine ornament"
          width={50}
          height={100}
          className="absolute pointer-events-none"
          style={{
            top: "100%",
            left: "44%",
            transform: "translateY(-50%) rotate(90deg)",
            zIndex: 30,
            width: "70px",
            height: "600px",
            objectFit: "fill",
          }}
        />
        <Image
          src="/assets/vine1.png"
          alt="Vine ornament"
          width={50}
          height={100}
          className="absolute pointer-events-none"
          style={{
            top: "100%",
            left: "44%",
            transform: "translateY(-50%) rotate(90deg) scaleY(-1)",
            zIndex: 30,
            width: "70px",
            height: "600px",
            objectFit: "fill",
          }}
        />

        <div
          className="relative border-4 border-pencil-gray/10 bg-soft-clay/50 overflow-hidden shadow-pencil"
          style={{
            height: meadowHeight,
            width: meadowWidth,
          }}
        >
          {/* 1. MEADOW/HILL: Background layer */}
          <Image
            src="/assets/meadow4.png"
            alt="Layered meadow background"
            fill
            sizes="600px"
            className="object-cover"
            style={{ zIndex: 10 }}
            priority
          />

          {/* 2. PERSON: Foreground element */}
          <div
            className="absolute animate-breathe-fast" // 👈 animation goes here
            style={{
              zIndex: 20,
              bottom: "5%",
              left: "40%",
              transform: "translateX(-50%)", // positioning transform
            }}
          >
            <Image
              src="/assets/person4.png"
              alt="Person standing on the hill"
              height={240}
              width={120}
              className="opacity-50" // 👈 keep opacity here
            />
          </div>

          {/* 3. TREES */}
          <div
            className="absolute"
            style={{
              zIndex: 15,
              bottom: "40%",
              left: "35%",
              transform: "translateX(-50%)",
            }}
          >
            <Image
              src="/assets/tree6.png"
              alt="Tree swaying in the wind"
              height={70}
              width={120}
              className="opacity-90 animate-tree-sway origin-bottom"
            />
          </div>
          <div
            className="absolute"
            style={{
              zIndex: 14,
              bottom: "30%",
              left: "14%",
              transform: "translateX(-50%)",
            }}
          >
            <Image
              src="/assets/tree15.png"
              alt="Tree swaying in the wind"
              height={50}
              width={100}
              className="opacity-90 animate-tree-sway origin-bottom"
            />
          </div>
          <div
            className="absolute"
            style={{
              zIndex: 16,
              bottom: "35%",
              left: "28%",
              transform: "translateX(-50%)",
            }}
          >
            <Image
              src="/assets/tree8.png"
              alt="Tree swaying in the wind"
              height={120}
              width={60}
              className="opacity-90 animate-tree-sway origin-bottom"
            />
          </div>

          {/* 4. BIRDS */}
          <Image
            src="/assets/birds1.png"
            alt="Birds flying"
            height={200}
            width={150}
            className="absolute opacity-50"
            style={{
              zIndex: 20,
              bottom: "50%",
              left: "60%",
              transform: "translateX(-50%)",
            }}
          />

          {/* 5. CLOUDS */}
          <Image
            src="/assets/clouds3.png"
            alt="Cloud floating in the sky"
            height={300}
            width={150}
            className="absolute animate-cloud-roll-short opacity-65"
            style={{ zIndex: 10, top: "15%", left: "15%" }}
          />
          <Image
            src="/assets/clouds3.png"
            alt="Cloud floating in the sky"
            height={200}
            width={100}
            className="absolute animate-cloud-roll-medium opacity-65"
            style={{ zIndex: 10, top: "30%", left: "1%" }}
          />
          <Image
            src="/assets/clouds3.png"
            alt="Cloud floating in the sky"
            height={200}
            width={100}
            className="absolute animate-cloud-roll-long opacity-70"
            style={{ zIndex: 10, top: "15%", left: "10%" }}
          />
          <Image
            src="/assets/clouds3.png"
            alt="Cloud floating in the sky"
            height={200}
            width={100}
            className="absolute animate-cloud-roll-short opacity-70"
            style={{ zIndex: 10, top: "25%", left: "50%" }}
          />
          <Image
            src="/assets/clouds3.png"
            alt="Cloud floating in the sky"
            height={200}
            width={100}
            className="absolute animate-cloud-roll-long opacity-70"
            style={{ zIndex: 10, top: "13%", left: "45%" }}
          />

          {/* 6. SUN */}
          <div className="opacity-60">
            <Image
              src="/assets/sun.png"
              alt="The moon in the sky"
              height={100}
              width={100}
              className="absolute w-32 h-auto animate-sun-radiate"
              style={{ zIndex: 1, top: "10%", left: "70%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
