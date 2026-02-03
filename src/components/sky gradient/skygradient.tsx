"use client";

import React from "react";

const skyGradients = [
  "bg-gradient-to-b from-black via-black to-black", // 0
  "bg-gradient-to-b from-black via-black to-gray-900", // 1
  "bg-gradient-to-b from-black via-gray-900 to-gray-800", // 2
  "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700", // 3
  "bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600", // 4
  "bg-gradient-to-b from-gray-700 via-gray-600 to-gray-500", // 5
  "bg-gradient-to-b from-gray-600 via-gray-500 to-gray-400", // 6
  "bg-gradient-to-b from-gray-500 via-gray-400 to-gray-300", // 7
  "bg-gradient-to-b from-gray-400 via-gray-300 to-gray-200", // 8
  "bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100", // 9
  "bg-gradient-to-b from-gray-200 via-gray-100 to-white", // 10
  "bg-gradient-to-b from-gray-100 via-white to-white", // 11
  "bg-gradient-to-b from-white via-white to-white", // 12
  "bg-gradient-to-b from-gray-100 via-white to-white", // 13
  "bg-gradient-to-b from-gray-200 via-gray-100 to-white", // 14
  "bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100", // 15
  "bg-gradient-to-b from-gray-400 via-gray-300 to-gray-200", // 16
  "bg-gradient-to-b from-gray-500 via-gray-400 to-gray-300", // 17
  "bg-gradient-to-b from-gray-600 via-gray-500 to-gray-400", // 18
  "bg-gradient-to-b from-gray-700 via-gray-600 to-gray-500", // 19
  "bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600", // 20
  "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700", // 21
  "bg-gradient-to-b from-black via-gray-900 to-gray-800", // 22
  "bg-gradient-to-b from-black via-black to-gray-900", // 23
];

export function SkyGradient({ hour }: { hour: number }) {
  return (
    <div
      className={`absolute inset-0 transition-colors duration-2000 ${skyGradients[hour]}`}
    />
  );
}
