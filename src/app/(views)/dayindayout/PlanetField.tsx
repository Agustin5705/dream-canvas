"use client";
import React from "react";
import type { Planet } from "@/app/(views)/dayindayout/generatePlanets";

type Props = {
  planets: Planet[];
  className?: string;
};

export function PlanetField({ planets, className }: Props) {
  return (
    <div className={className}>
      {planets.map((planet) =>
        planet.link ? (
          <a
            key={planet.id}
            href={planet.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute"
            style={{
              top: planet.top,
              left: planet.left,
              width: planet.size,
              height: planet.size,
              borderRadius: "50%",
              backgroundColor: planet.color,
              zIndex: 6,
            }}
          />
        ) : (
          <div
            key={planet.id}
            className="absolute"
            style={{
              top: planet.top,
              left: planet.left,
              width: planet.size,
              height: planet.size,
              borderRadius: "50%",
              backgroundColor: planet.color,
              zIndex: 6,
            }}
          />
        )
      )}
    </div>
  );
}
