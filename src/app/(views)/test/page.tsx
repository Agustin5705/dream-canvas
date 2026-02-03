"use client";
import { useWeather } from "@/services/useWeather";

export default function TestPage() {
  const weather = useWeather("Montevideo");

  if (!weather) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-black">
      <h1 className="text-4xl">Current Weather: {weather.main}</h1>

      {/* ☀️ Sunny */}
      {weather.main === "Clear" && (
        <div className="text-yellow-400 text-2xl">☀️ It is sunny</div>
      )}

      {/* ☁️ Clouds */}
      {weather.main === "Clouds" && (
        <div className="text-gray-300 text-2xl">☁️ Cloudy skies</div>
      )}

      {/* 🌧️ Rain */}
      {weather.main === "Rain" && (
        <div className="text-blue-400 text-2xl">🌧️ Rain falling</div>
      )}

      {/* ❄️ Snow */}
      {weather.main === "Snow" && (
        <div className="text-white text-2xl">❄️ Snowing</div>
      )}

      {/* 🌫️ Fog / Mist */}
      {(weather.main === "Fog" || weather.main === "Mist") && (
        <div className="text-gray-400 text-2xl">🌫️ Foggy</div>
      )}

      {/* 🌬️ Wind thresholds */}
      {weather.windSpeed < 2 && <p>Wind: calm</p>}
      {weather.windSpeed >= 2 && weather.windSpeed < 6 && (
        <p>Wind: short cloud roll</p>
      )}
      {weather.windSpeed >= 6 && <p>Wind: long cloud roll</p>}

      {/* 🕒 Show refresh time from the hook */}

      <p className="mt-4 text-lg">
        Weather last fetched at: {weather.fetchedAt.toLocaleTimeString()}
      </p>
    </div>
  );
}
