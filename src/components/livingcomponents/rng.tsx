"use client";
import { useState } from "react";
import Image from "next/image";

export default function FieldTestModule() {
  // 1. Pick field (1–3) once on mount
  const [field] = useState(() => Math.floor(Math.random() * 3) + 1);

  // 2. Roll sub-results once on mount (binary ON/OFF)
  const [subResults] = useState(() => {
    const results: { [key: string]: boolean } = {};
    [1, 2, 3].forEach((m) => {
      ["a", "b", "c"].forEach((letter) => {
        results[`${m}${letter}`] = Math.random() < 0.5;
      });
    });
    return results;
  });

  // Debug logs
  console.log("Field chosen:", field);
  console.log("Subgroup rolls:", subResults);

  // Map field number to asset path
  const fieldSrc = `/assets/field${field}.png`;

  return (
    <div className="absolute bottom-[-100px] w-full z-5">
      {/* Field image */}
      <Image
        src={fieldSrc}
        alt={`Field ${field}`}
        width={1920}
        height={400}
        className="object-bottom object-cover z-5"
      />

      {/* Trees: explicit blocks per subgroup */}
      {field === 1 && subResults["1a"] && (
        <Image
          src="/assets/tree1a.png"
          alt="Tree 1a"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "50%", left: "30%" }}
        />
      )}
      {field === 1 && subResults["1b"] && (
        <Image
          src="/assets/tree1b.png"
          alt="Tree 1a"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "50%", left: "50%" }}
        />
      )}
      {field === 1 && subResults["1c"] && (
        <Image
          src="/assets/tree1c.png"
          alt="Tree 1a"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "50%", left: "70%" }}
        />
      )}
      {field === 2 && subResults["2a"] && (
        <Image
          src="/assets/tree2a.png"
          alt="Tree 1a"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "50%", left: "30%" }}
        />
      )}
      {field === 2 && subResults["2b"] && (
        <Image
          src="/assets/tree2b.png"
          alt="Tree 1a"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "50%", left: "50%" }}
        />
      )}
      {field === 2 && subResults["2c"] && (
        <Image
          src="/assets/tree2c.png"
          alt="Tree 1a"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "50%", left: "70%" }}
        />
      )}
      {field === 3 && subResults["3a"] && (
        <Image
          src="/assets/tree3a.png"
          alt="Tree 1a"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "50%", left: "30%" }}
        />
      )}
      {field === 3 && subResults["3b"] && (
        <Image
          src="/assets/tree3b.png"
          alt="Tree 1a"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "50%", left: "50%" }}
        />
      )}
      {field === 3 && subResults["3c"] && (
        <Image
          src="/assets/tree3c.png"
          alt="Tree 1a"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "50%", left: "70%" }}
        />
      )}

      {/* Debug overlay */}
      <div className="absolute top-4 left-4 z-50 bg-white text-black p-2">
        <p>Field chosen: {field}</p>
        {["a", "b", "c"].map((letter) => (
          <p key={letter}>
            {field}
            {letter}: {subResults[`${field}${letter}`] ? "ON" : "OFF"}
          </p>
        ))}
      </div>
    </div>
  );
}
