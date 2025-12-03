"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Dayindayout() {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const isDay: boolean = currentHour >= 6 && currentHour < 18;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHour(new Date().getHours());
    }, 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  return <div></div>;
}
