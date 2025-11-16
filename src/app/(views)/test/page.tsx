"use client";

import React from "react";
import WobblyCard from "@/components/WobblyCard";
import RefExample from "@/components/RefExample";

export default function TestPage() {
  return (
    <div className="flex flex-col items-center py-10 px-4">
      <WobblyCard className="max-w-4xl w-full mb-10 text-center">
        <h1 className="font-sketch text-4xl text-accent-dark">
          Component Test Bench
        </h1>
        <p className="text-pencil-gray/80 text-sm mt-2">
          A showcase and demonstration area for custom components and React
          concepts.
        </p>
      </WobblyCard>

      <div className="w-full max-w-4xl space-y-8">
        {/* --- Demonstration Section --- */}
        <h2 className="font-sketch text-3xl text-pencil-gray">
          React Hooks: useRef vs. useState
        </h2>
        <RefExample />

        {/* --- Future Component Showcase Area --- */}
        <div className="p-6 border border-pencil-gray/30 rounded-wobbly bg-soft-clay/50">
          <p className="font-sans italic text-pencil-gray/70">
            This is where future components (like WobblyButton, WobblyCard) will
            be displayed.
          </p>
        </div>
      </div>
    </div>
  );
}
