"use client";

import React, { useState } from "react";
import WobblyButton from "./WobblyButton";

const StateExample: React.FC = () => {
  // 1. STATE: This is the traditional way to manage data that affects the UI.
  const [isFlagged, setIsFlagged] = useState(false);

  const toggleFlag = () => {
    // This setter tells React: "Data has changed! Please re-render."
    setIsFlagged((prev) => !prev);

    // Console log to show state updates (This runs before re-render)
    console.log(`[Traditional Demo] Flag value is being set to: ${!isFlagged}`);
  };

  return (
    <div className="p-6 border border-dashed border-pencil-gray/50 rounded-lg bg-paper-bg shadow-inner">
      <h3 className="font-sketch text-2xl mb-4 text-accent-dark">
        Traditional State Demonstration (Recommended)
      </h3>

      {/* 2. DIRECT JSX DISPLAY: The value is safe to display here because 
             React tracks 'isFlagged' and forces a re-render when it changes. 
      */}
      <p className="font-sans text-lg text-accent-dark mb-6">
        **Flag Value (useState):** {isFlagged.toString()}
      </p>

      <WobblyButton variant="primary" onClick={toggleFlag} className="mr-4">
        Update Display (Triggers Re-render)
      </WobblyButton>

      <p className="text-sm italic mt-4 text-pencil-gray/70">
        This is the standard pattern: data changes via **useState**, which
        guarantees the screen updates immediately.
      </p>
    </div>
  );
};

export default StateExample;
