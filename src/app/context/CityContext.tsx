"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type CityContextType = {
  city: string;
  setCity: (c: string) => void;
};

const CityContext = createContext<CityContextType | undefined>(undefined);

export function CityProvider({ children }: { children: ReactNode }) {
  const [city, setCity] = useState("Montevideo"); // default

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  const ctx = useContext(CityContext);
  if (!ctx) throw new Error("useCity must be used within CityProvider");
  return ctx;
}
