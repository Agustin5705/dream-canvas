"use client";
import { useCity } from "@/app/context/CityContext";
import { useWeather } from "@/services/useWeather";

export default function WeatherView() {
  const { city } = useCity(); // get current city from context
  const weather = useWeather(city);

  if (!weather) return <div>Loading...</div>;

  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-bold mb-4">Current Weather in {city}</h2>

      <p className="text-lg mb-2">
        Condition: {weather.main} ({weather.description})
      </p>

      <p className="text-lg mb-2">Wind speed: {weather.windSpeed} m/s</p>
      <p className="text-lg mb-2">Cloud coverage: {weather.clouds}%</p>

      <p className="text-sm text-gray-500 mt-4">
        Last updated: {weather.fetchedAt.toLocaleTimeString()}
      </p>
    </div>
  );
}
