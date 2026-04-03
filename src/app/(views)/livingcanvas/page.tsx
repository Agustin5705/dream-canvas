"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SkyGradient } from "@/components/sky gradient/skygradient";
import { coordinates } from "@/components/coordinates/coordinates";
import { NightSkyStars } from "@/components/livingcomponents/starfield";
import { ShootingstarsCanvas } from "@/components/livingcomponents/shootingstars";
import MeadowTestModule from "@/components/livingcomponents/rng";
import { useCity } from "@/app/context/CityContext";
import { useWeather } from "@/services/useWeather";
import { RainCurtain1, RainCurtain2 } from "@/components/rain/rainCurtain";
import {
  Clouds1,
  Clouds2,
  Clouds3,
  Clouds4,
  Clouds5,
  WildClouds1,
  WildClouds2,
  WildClouds3,
} from "@/components/clouds/Clouds";
import { SnowCurtain1, SnowCurtain2 } from "@/components/snow/snowCurtain";
import FogEffect from "@/components/fog/FogEffect";
import { PlanetField } from "@/components/planets/PlanetField";
import { generatePlanets } from "@/components/planets/generatePlanets";

export default function SkyView() {
  const { city } = useCity();
  const weather = useWeather(city);
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const planets = generatePlanets();

  // Refresh hour every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHour(new Date().getHours());
    }, 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  // Loading screen
  if (!weather) {
    return (
      <div className="absolute inset-0 flex items-center justify-center border rounded-3xl bg-gradient-to-br from-soft-clay to-stone-800">
        {/* Center content: text + person side by side */}
        <div className="relative flex flex-row items-center gap-4">
          <p className="text-lg font-sketch">Your view is loading</p>
          <Image
            src="/assets/person3.png"
            alt="Person"
            height={100}
            width={50}
            className="opacity-80"
          />

          {/* Sun near top-left of this block */}
          <Image
            src="/assets/sun.png"
            alt="Sun"
            width={60}
            height={60}
            className="absolute -top-12 -left-12 opacity-80 animate-breathe-fast"
          />

          {/* Moon near bottom-right of this block */}
          <Image
            src="/assets/moon.png"
            alt="Moon"
            width={50}
            height={50}
            className="absolute -top-12 -right-12 opacity-80 animate-breathe-fast"
          />
        </div>
      </div>
    );
  }

  // Error catcher
  if (!weather.main) {
    return (
      <div className="absolute inset-0 flex items-center justify-center text-red-600">
        <p>Weather data unavailable for {city}. Please try another city.</p>
      </div>
    );
  }

  // Daytime: 6–22, Nighttime: 22–6
  const isDay = currentHour >= 6 && currentHour < 22;

  return (
    <div className={`relative w-full h-screen overflow-hidden`}>
      <SkyGradient hour={currentHour} />

      {/* Sun or Moon */}
      <Image
        src={isDay ? "/assets/sun.png" : "/assets/moon.png"}
        alt={isDay ? "Sun" : "Moon"}
        width={isDay ? 200 : 75}
        height={isDay ? 200 : 75}
        className="absolute animate-breathe-slow"
        style={{
          bottom: coordinates[currentHour].bottom,
          left: coordinates[currentHour].left,
        }}
      />

      {/* Starsfields */}
      <NightSkyStars currentHour={currentHour} />

      {/* Shootingstars */}
      <ShootingstarsCanvas currentHour={currentHour} />

      {/* Conditional weather rendering */}

      {/* Rain */}
      {(weather?.main === "Rain" || weather?.rainVolume > 0) && (
        <div className="absolute inset-0 pointer-events-none z-50">
          <RainCurtain1 />
          <RainCurtain2 />
        </div>
      )}

      {/* Clouds */}
      {weather?.clouds > 0 && (
        <>
          <div
            className={`absolute inset-0 ${
              weather.windSpeed < 2
                ? "animate-cloud-roll-short"
                : weather.windSpeed < 6
                  ? "animate-cloud-roll-medium"
                  : "animate-cloud-roll-long"
            }`}
          >
            {weather.clouds > 0 && <Clouds1 />}
            {weather.clouds > 20 && <Clouds2 />}
            {weather.clouds > 40 && <Clouds3 />}
            {weather.clouds > 60 && <Clouds4 />}
            {weather.clouds > 80 && <Clouds5 />}
          </div>

          {weather.clouds >= 15 && <WildClouds1 />}
          {weather.clouds >= 30 && <WildClouds2 />}
          {weather.clouds >= 45 && <WildClouds3 />}
        </>
      )}

      {(weather?.main === "Snow" || weather?.snowVolume > 0) && (
        <div className="absolute inset-0 pointer-events-none">
          <SnowCurtain1 />
          <SnowCurtain2 />
        </div>
      )}

      {["Fog", "Mist", "Haze"].includes(weather?.main) && (
        <div className="absolute inset-0 pointer-events-none">
          <FogEffect />
        </div>
      )}

      {/* Planets Layer */}
      {(currentHour >= 22 || currentHour < 6) && (
        <PlanetField
          planets={planets}
          className="absolute inset-0 z-5 animate-twinkle"
        />
      )}

      {/* RNG test */}
      {weather && <MeadowTestModule windSpeed={weather.windSpeed} />}
    </div>
  );
}
