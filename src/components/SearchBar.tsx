"use client";
import { useState, useEffect } from "react";
import { useCity } from "@/app/context/CityContext";

interface CitySuggestion {
  name: string;
  country: string;
  state?: string;
  lat: number;
  lon: number;
}

export default function SearchBar() {
  const { setCity } = useCity();
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<CitySuggestion[]>([]);

  useEffect(() => {
    if (input.trim().length < 2) return; // no state update here

    const handler = setTimeout(() => {
      async function fetchSuggestions() {
        try {
          const res = await fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`,
          );
          const data: CitySuggestion[] = await res.json();
          setSuggestions(data);
        } catch (err) {
          console.error("Error fetching suggestions:", err);
        }
      }

      fetchSuggestions();
    }, 300);

    return () => clearTimeout(handler);
  }, [input]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setCity(input.trim());
    setInput("");
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            const value = e.target.value;
            setInput(value);
            if (value.trim().length < 2) {
              setSuggestions([]); // clear here instead of inside useEffect
            }
          }}
          placeholder="Enter city..."
          className="border p-2 rounded w-64"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Set City
        </button>
      </form>

      {suggestions.length > 0 && (
        <ul className="absolute bg-white border rounded mt-1 w-64 max-h-40 overflow-y-auto">
          {suggestions.map((s, idx) => (
            <li
              key={idx}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setCity(s.name);
                setInput("");
                setSuggestions([]);
              }}
            >
              {s.name}, {s.state ? `${s.state}, ` : ""}
              {s.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
