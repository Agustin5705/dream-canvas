"use client";

import React from "react";

// Using relative paths for robustness based on the (views)/meadow directory structure
import DreamtMeadow from "../../../components/DreamtMeadow";
import WobblyCard from "../../../components/WobblyCard";

// The path for the local placeholder asset
const PLACEHOLDER_ASSET = "/assets/placeholder.png";

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
      <div className="w-full max-w-4xl">
        <DreamtMeadow sceneName="Dreamt Meadow">
          {/* Layer 1: Background Clouds (Will replace with your cloud assets) */}
          <img
            src={PLACEHOLDER_ASSET}
            alt="Rolling Cloud Layer"
            className="absolute top-[5%] left-0 w-[50%] h-auto opacity-70 animate-cloud-roll"
          />
          <img
            src={PLACEHOLDER_ASSET}
            alt="Rolling Cloud Layer 2"
            className="absolute top-[10%] right-0 w-[40%] h-auto opacity-70 animate-cloud-roll"
          />

          {/* Layer 2: Coiling Trees (Will replace with your tree assets) */}
          <img
            src={PLACEHOLDER_ASSET}
            alt="Foreground Tree"
            className="absolute bottom-0 left-[5%] w-[30%] h-[70%] transform-origin-bottom animate-tree-sway"
          />
          <img
            src={PLACEHOLDER_ASSET}
            alt="Background Tree"
            className="absolute bottom-0 right-[20%] w-[20%] h-[50%] opacity-80 transform-origin-bottom animate-tree-sway"
          />

          {/* Layer 3: Foreground Meadow Base (Will replace with your meadow base asset) */}
          <div className="absolute bottom-0 left-0 w-full h-[30%] bg-accent-light/50 border-t-8 border-accent-dark/30">
            <p className="text-xs text-center pt-2 text-accent-dark font-sans opacity-70">
              MEADOW BASE (Placeholder)
            </p>
          </div>
        </DreamtMeadow>
      </div>
    </div>
  );
}
