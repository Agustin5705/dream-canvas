"use client";
import React from "react";
import { StarField } from "../stars/StarField";
import { generateStars } from "../stars/generateStars";

const stars1 = generateStars(200);
const stars2 = generateStars(250);
const stars3 = generateStars(300);

type NightSkyStarsProps = {
  currentHour: number;
};

export function NightSkyStars({ currentHour }: NightSkyStarsProps) {
  return (
    <>
      {(currentHour >= 22 || currentHour < 6) && (
        <StarField
          stars={stars1}
          className="absolute inset-0 z-10 pointer-events-none"
        />
      )}
      {(currentHour >= 23 || currentHour < 5) && (
        <StarField
          stars={stars2}
          className="absolute inset-0 z-10 pointer-events-none"
        />
      )}
      {currentHour >= 0 && currentHour < 4 && (
        <StarField
          stars={stars3}
          className="absolute inset-0 z-10 pointer-events-none"
        />
      )}
    </>
  );
}
