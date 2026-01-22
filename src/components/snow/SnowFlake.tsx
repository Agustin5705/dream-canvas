"use client";
import { useEffect, useState } from "react";

import { generateSnowflake } from "./generateSnowflake";
import { SnowflakeData } from "./generateSnowflake";

export function SnowfallSlow({ className }: { className?: string }) {
  const [drop, setDrop] = useState<SnowflakeData>(() => generateSnowflake());

  useEffect(() => {
    const id = setTimeout(() => {
      setDrop(generateSnowflake());
    }, 6000);

    return () => clearTimeout(id);
  }, [drop]);

  return (
    <div
      className={`snowflake animate-snowfallslow ${className ?? ""}`}
      style={{
        left: drop.left,
      }}
    />
  );
}

export function Snowfall({ className }: { className?: string }) {
  const [drop, setDrop] = useState<SnowflakeData>(() => generateSnowflake());

  useEffect(() => {
    const id = setTimeout(() => {
      setDrop(generateSnowflake());
    }, 5000);

    return () => clearTimeout(id);
  }, [drop]);

  return (
    <div
      className={`snowflake animate-snowfall ${className ?? ""}`}
      style={{
        left: drop.left,
      }}
    />
  );
}

export function SnowfallFast({ className }: { className?: string }) {
  const [drop, setDrop] = useState<SnowflakeData>(() => generateSnowflake());

  useEffect(() => {
    const id = setTimeout(() => {
      setDrop(generateSnowflake());
    }, 4000);

    return () => clearTimeout(id);
  }, [drop]);

  return (
    <div
      className={`snowflake animate-snowfallfast ${className ?? ""}`}
      style={{
        left: drop.left,
      }}
    />
  );
}

export function SnowfallVerySlow({ className }: { className?: string }) {
  const [drop, setDrop] = useState<SnowflakeData>(() => generateSnowflake());

  useEffect(() => {
    const id = setTimeout(() => {
      setDrop(generateSnowflake());
    }, 7000);

    return () => clearTimeout(id);
  }, [drop]);

  return (
    <div
      className={`snowflake animate-snowfallveryslow ${className ?? ""}`}
      style={{
        left: drop.left,
      }}
    />
  );
}

export function SnowfallSuperSlow({ className }: { className?: string }) {
  const [drop, setDrop] = useState<SnowflakeData>(() => generateSnowflake());

  useEffect(() => {
    const id = setTimeout(() => {
      setDrop(generateSnowflake());
    }, 8000);

    return () => clearTimeout(id);
  }, [drop]);

  return (
    <div
      className={`snowflake animate-snowfallsuperslow ${className ?? ""}`}
      style={{
        left: drop.left,
      }}
    />
  );
}
