"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SkyGradient } from "@/components/sky gradient/skygradient";
import { coordinates } from "@/components/coordinates/coordinates";
import { NightSkyStars } from "@/components/livingcomponents/starfield";
import { ShootingstarsCanvas } from "@/components/livingcomponents/shootingstars";
import MeadowTestModule from "@/components/livingcomponents/rng";
import { useCity } from "@/app/context/CityContext";
import WeatherView from "@/components/WeatherView";
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

export default function SkyView() {
  const { city } = useCity();
  const weather = useWeather(city);
  const [currentHour, setCurrentHour] = useState(new Date().getHours());

  // Refresh hour every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHour(new Date().getHours());
    }, 60 * 1000);
    return () => clearInterval(timer);
  }, []);

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
      {weather?.main === "Rain" && (
        <div className="absolute inset-0 pointer-events-none">
          <RainCurtain1 />
          <RainCurtain2 />
        </div>
      )}

      {/* Clouds */}
      {weather?.main === "Clouds" && (
        <>
          {/* Coverage groups */}
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

          {/* Wildclouds */}
          {weather.clouds >= 15 && <WildClouds1 />}
          {weather.clouds >= 30 && <WildClouds2 />}
          {weather.clouds >= 45 && <WildClouds3 />}
        </>
      )}

      {weather?.main === "Snow" && (
        <div className="absolute inset-0 pointer-events-none">
          <SnowCurtain1 />
          <SnowCurtain2 />
        </div>
      )}

      {/* RNG test */}
      <MeadowTestModule />

      {/* Debug */}
      <p className="absolute bottom-4 left-4 text-blue-800">
        Current hour: {currentHour}
        City: {city}
      </p>
      <div className="absolute bottom-20 left-4 text-blue-800">
        <WeatherView />
      </div>
    </div>
  );
}
