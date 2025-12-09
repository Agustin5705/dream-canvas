"use client";

import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { StarField } from "./StarField";
import { generateStars } from "./generateStars";
import { PlanetField } from "./PlanetField";
import { generatePlanets } from "./generatePlanets";
import { ShootingStar } from "./ShootingStar";

function getTimeOfDay(
  hour: number
): "morning" | "afternoon" | "evening" | "night" {
  if (hour >= 6 && hour < 12) return "morning";
  if (hour >= 12 && hour < 18) return "afternoon";
  if (hour >= 18 && hour < 21) return "evening";
  return "night";
}

export default function Dayindayout() {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const timeOfDay = getTimeOfDay(currentHour);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHour(new Date().getHours());
    }, 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  const planets = useMemo(() => generatePlanets(), []);

  return (
    <div
      className={
        timeOfDay === "evening" || timeOfDay === "night"
          ? "relative w-full h-[100vh] overflow-hidden bg-gray-900"
          : "relative w-full h-[100vh] overflow-hidden"
      }
    >
      {/* Sun and Moon */}

      <Image
        src={
          timeOfDay === "morning" || timeOfDay === "afternoon"
            ? "/assets/sun.png"
            : "/assets/moon.png"
        }
        alt="The sun or the moon"
        height={timeOfDay === "morning" || timeOfDay === "afternoon" ? 200 : 75}
        width={timeOfDay === "morning" || timeOfDay === "afternoon" ? 200 : 75}
        style={{
          zIndex: 1,
          top:
            timeOfDay === "morning"
              ? "25%"
              : timeOfDay === "afternoon"
              ? "0%"
              : timeOfDay === "evening"
              ? "15%"
              : "5%",
          right:
            timeOfDay === "morning"
              ? "25%"
              : timeOfDay === "afternoon"
              ? "40%"
              : timeOfDay === "evening"
              ? "15%"
              : "50%",
        }}
        className="absolute animate-sun-radiate"
      />
      {/* Stars layer 1 (evening + night) */}
      {(timeOfDay === "evening" || timeOfDay === "night") && (
        <StarField
          stars={generateStars(250)}
          className="absolute inset-0 z-5 animate-fade-in"
        />
      )}

      {/* Stars layer 2 (night only) */}
      {timeOfDay === "night" && (
        <StarField
          stars={generateStars(500)}
          className="absolute inset-0 z-5 animate-fade-in"
        />
      )}

      {/* Shooting Stars */}
      {timeOfDay === "night" && (
        <ShootingStar className="animate-shooting-star" />
      )}
      {timeOfDay === "night" && (
        <ShootingStar className="animate-shooting-star-slow" />
      )}
      {(timeOfDay === "night" || timeOfDay === "evening") && (
        <ShootingStar className="animate-shooting-star-slow" />
      )}
      {(timeOfDay === "night" || timeOfDay === "evening") && (
        <ShootingStar className="animate-shooting-star-fast" />
      )}
      {timeOfDay === "night" && (
        <ShootingStar className="animate-shooting-star-fast" />
      )}

      {/* Planets Layer */}
      {(timeOfDay === "evening" || timeOfDay === "night") && (
        <PlanetField
          planets={planets}
          className="absolute inset-0 z-5 animate-twinkle"
        />
      )}

      {/* Clouds */}
      <Image
        alt="Cloud"
        src="/assets/clouds2.png"
        height={150}
        width={150}
        className="absolute animate-cloud-left-quick opacity-60"
        style={{ zIndex: 15, top: "20%", left: "110%" }}
      />
      <Image
        alt="Cloud"
        src="/assets/clouds8.png"
        height={200}
        width={200}
        className="absolute animate-cloud-left-medium opacity-60"
        style={{ zIndex: 14, top: "5%", left: "103%" }}
      />
      <Image
        alt="Cloud"
        src="/assets/clouds9.png"
        height={250}
        width={250}
        className="absolute animate-cloud-left-slow opacity-60"
        style={{ zIndex: 14, top: "-5%", left: "113%" }}
      />
      <Image
        alt="Cloud"
        src="/assets/clouds3.png"
        height={200}
        width={200}
        className="absolute animate-cloud-left-medium opacity-60"
        style={{ zIndex: 15, top: "20%", left: "115%" }}
      />
      <Image
        alt="Cloud"
        src="/assets/clouds3.png"
        height={175}
        width={175}
        className="absolute animate-cloud-left-medium opacity-60"
        style={{ zIndex: 15, top: "25%", left: "110%" }}
      />
      <Image
        alt="Cloud"
        src="/assets/clouds3.png"
        height={120}
        width={120}
        className="absolute animate-cloud-left-medium opacity-60"
        style={{ zIndex: 15, top: "27%", left: "118%" }}
      />
      <Image
        alt="Cloud"
        src="/assets/clouds5.png"
        height={55}
        width={55}
        className="absolute animate-cloud-left-very-quick opacity-60"
        style={{ zIndex: 15, top: "19%", left: "101%" }}
      />
      <Image
        alt="Cloud"
        src="/assets/clouds6.png"
        height={125}
        width={125}
        className="absolute animate-cloud-left-very-slow opacity-60"
        style={{ zIndex: 14, top: "35%", left: "105%" }}
      />
      <Image
        alt="Cloud"
        src="/assets/clouds7.png"
        height={150}
        width={150}
        className="absolute animate-cloud-left-medium opacity-60"
        style={{ zIndex: 13, top: "20%", left: "102%" }}
      />
      <Image
        alt="Cloud"
        src="/assets/clouds2.png"
        height={55}
        width={55}
        className="absolute animate-cloud-left-very-slow opacity-60"
        style={{ zIndex: 15, top: "31%", left: "102%" }}
      />
      <Image
        alt="Cloud"
        src="/assets/clouds2.png"
        height={100}
        width={100}
        className="absolute animate-cloud-left-quick opacity-60"
        style={{ zIndex: 15, top: "27%", left: "107%" }}
      />
      <Image
        alt="Cloud"
        src="/assets/clouds9.png"
        height={300}
        width={300}
        className="absolute animate-cloud-left-very-slow opacity-60"
        style={{ zIndex: 14, top: "25%", left: "109%" }}
      />
      <Image
        alt="Cloud"
        src="/assets/clouds3.png"
        height={300}
        width={300}
        className="absolute animate-cloud-left-slow opacity-60"
        style={{ zIndex: 14, top: "25%", left: "105%" }}
      />
      <Image
        alt="Cloud"
        src="/assets/clouds3.png"
        height={150}
        width={150}
        className="absolute animate-cloud-left-very-slow opacity-60"
        style={{ zIndex: 15, top: "30%", left: "105%" }}
      />

      {/* Hill */}
      <Image
        src="/assets/hill1.png"
        alt="Hill"
        fill
        style={{ zIndex: 10 }}
        className=""
      />

      {/* Person */}
      <div className="relative w-full h-[100vh] overflow-hidden">
        {/* Person changes by time of day */}
        {timeOfDay === "morning" && (
          <Image
            src="/assets/person2.png"
            alt="Morning Person"
            height={35}
            width={35}
            className="absolute opacity-80"
            style={{ zIndex: 11, bottom: "50%", left: "60%" }}
          />
        )}
        {timeOfDay === "afternoon" && (
          <Image
            src="/assets/person4.png"
            alt="Afternoon Person"
            height={60}
            width={60}
            className="absolute opacity-80"
            style={{ zIndex: 11, bottom: "35%", left: "43%" }}
          />
        )}
        {timeOfDay === "evening" && (
          <Image
            src="/assets/person1.png"
            alt="Evening Person"
            height={60}
            width={60}
            className="absolute opacity-80"
            style={{ zIndex: 11, bottom: "55%", left: "80%" }}
          />
        )}
        {timeOfDay === "night" && (
          <Image
            src="/assets/person6.png"
            alt="Night Person"
            height={35}
            width={35}
            className="absolute opacity-80"
            style={{ zIndex: 11, bottom: "37%", left: "45%" }}
          />
        )}
      </div>
    </div>
  );
}
