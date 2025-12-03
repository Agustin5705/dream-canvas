"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function TestPage() {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const isDay: boolean = currentHour >= 6 && currentHour < 18;
  const currentDay: string = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });
  const currentDayOfTheMonth: string = new Date().toLocaleDateString("en-US", {
    day: "numeric",
  });
  const currentMonth: string = new Date().toLocaleDateString("en-US", {
    month: "long",
  });
  const currentYear: string = new Date().toLocaleDateString("en-US", {
    year: "numeric",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHour(new Date().getHours());
    }, 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p> {isDay ? "Day" : "Night"} </p>
      <p>
        Today is {currentDay} {currentMonth} {currentDayOfTheMonth}{" "}
        {currentYear}{" "}
      </p>
      <Image
        src={isDay ? "/assets/sun.png" : "/assets/moon.png"}
        alt="The sun or the moon"
        height={300}
        width={300}
      />
    </div>
  );
}
