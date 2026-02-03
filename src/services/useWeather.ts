import { useEffect, useState } from "react";

export type WeatherData = {
  main: string;
  description: string;
  windSpeed: number;
  clouds: number;
  fetchedAt: Date;
};

export function useWeather(city: string) {
  const [data, setData] = useState<WeatherData | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`,
      );
      const json = await res.json();

      if (json.cod !== 200) {
        console.error("Weather API error:", json);
        return;
      }

      setData({
        main: json.weather[0].main,
        description: json.weather[0].description,
        windSpeed: json.wind.speed,
        clouds: json.clouds.all,
        fetchedAt: new Date(),
      });
    }

    fetchWeather();

    const intervalId = setInterval(fetchWeather, 60000);

    return () => clearInterval(intervalId);
  }, [city]);

  return data;
}
