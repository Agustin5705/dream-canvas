"use client";
import { useEffect, useState } from "react";

import { generateRaindrop } from "./generateRaindrop";
import { RaindropData } from "./generateRaindrop";

export function RainDropSuperSlow({ className }: { className?: string }) {
  const [drop, setDrop] = useState<RaindropData>(() => generateRaindrop());

  useEffect(() => {
    const id = setTimeout(() => {
      setDrop(generateRaindrop());
    }, 1300);

    return () => clearTimeout(id);
  }, [drop]);

  return (
    <div
      className={`raindrop animate-rain-animation-super-slow ${
        className ?? ""
      }`}
      style={{
        left: drop.left,
      }}
    />
  );
}

export function RainDropVerySlow({ className }: { className?: string }) {
  const [drop, setDrop] = useState<RaindropData>(() => generateRaindrop());

  useEffect(() => {
    const id = setTimeout(() => {
      setDrop(generateRaindrop());
    }, 1200);

    return () => clearTimeout(id);
  }, [drop]);

  return (
    <div
      className={`raindrop animate-rain-animation-very-slow ${className ?? ""}`}
      style={{
        left: drop.left,
      }}
    />
  );
}

export function RainDropSlow({ className }: { className?: string }) {
  const [drop, setDrop] = useState<RaindropData>(() => generateRaindrop());

  useEffect(() => {
    const id = setTimeout(() => {
      setDrop(generateRaindrop());
    }, 1100);

    return () => clearTimeout(id);
  }, [drop]);

  return (
    <div
      className={`raindrop animate-rain-animation-slow ${className ?? ""}`}
      style={{
        left: drop.left,
      }}
    />
  );
}

export function RainDropMedium({ className }: { className?: string }) {
  const [drop, setDrop] = useState<RaindropData>(() => generateRaindrop());

  useEffect(() => {
    const id = setTimeout(() => {
      setDrop(generateRaindrop());
    }, 1000);

    return () => clearTimeout(id);
  }, [drop]);

  return (
    <div
      className={`raindrop animate-rain-animation-medium ${className ?? ""}`}
      style={{
        left: drop.left,
      }}
    />
  );
}

export function RainDropFast({ className }: { className?: string }) {
  const [drop, setDrop] = useState<RaindropData>(() => generateRaindrop());

  useEffect(() => {
    const id = setTimeout(() => {
      setDrop(generateRaindrop());
    }, 900);

    return () => clearTimeout(id);
  }, [drop]);

  return (
    <div
      className={`raindrop animate-rain-animation-fast ${className ?? ""}`}
      style={{
        left: drop.left,
      }}
    />
  );
}

export function RainDropVeryFast({ className }: { className?: string }) {
  const [drop, setDrop] = useState<RaindropData>(() => generateRaindrop());

  useEffect(() => {
    const id = setTimeout(() => {
      setDrop(generateRaindrop());
    }, 800);

    return () => clearTimeout(id);
  }, [drop]);

  return (
    <div
      className={`raindrop animate-rain-animation-very-fast ${className ?? ""}`}
      style={{
        left: drop.left,
      }}
    />
  );
}

export function RainDropSuperFast({ className }: { className?: string }) {
  const [drop, setDrop] = useState<RaindropData>(() => generateRaindrop());

  useEffect(() => {
    const id = setTimeout(() => {
      setDrop(generateRaindrop());
    }, 700);

    return () => clearTimeout(id);
  }, [drop]);

  return (
    <div
      className={`raindrop animate-rain-animation-super-fast ${
        className ?? ""
      }`}
      style={{
        left: drop.left,
      }}
    />
  );
}
