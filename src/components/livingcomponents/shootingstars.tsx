"use client";
import { ShootingStar } from "../shooting stars/ShootingStar";

type ShootingStarCanvasProps = {
  currentHour: number;
};

export function ShootingstarsCanvas({ currentHour }: ShootingStarCanvasProps) {
  return (
    <div>
      {(currentHour >= 22 || currentHour < 6) && (
        <>
          <ShootingStar className="absolute inset-0 z-20 pointer-events-none animate-shooting-star-slow" />
          {currentHour >= 22 && currentHour < 6 && (
            <ShootingStar className="absolute inset-0 z-20 pointer-events-none animate-shooting-star-fast" />
          )}
          {currentHour >= 23 && currentHour <= 5 && (
            <ShootingStar className="absolute inset-0 z-20 pointer-events-none animate-shooting-star-slow" />
          )}
          {currentHour >= 0 && currentHour <= 4 && (
            <ShootingStar className="absolute inset-0 z-20 pointer-events-none animate-shooting-star-fast" />
          )}
          {currentHour >= 1 && currentHour <= 3 && (
            <ShootingStar className="absolute inset-0 z-20 pointer-events-none animate-shooting-star-slow" />
          )}
          {currentHour === 2 && (
            <ShootingStar className="absolute inset-0 z-20 pointer-events-none animate-shooting-star-fast" />
          )}
        </>
      )}
    </div>
  );
}
