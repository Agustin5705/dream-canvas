"use client";
import { useState } from "react";
import Image from "next/image";

type RngProps = { windSpeed: number };

export default function FieldTestModule({ windSpeed }: RngProps) {
  // 1. Pick field (1–3) once on mount
  const [field] = useState(() => Math.floor(Math.random() * 3) + 1);
  const [delay1] = useState(() => `${Math.random() * 2}s`);
  const [delay2] = useState(() => `${Math.random() * 2}s`);
  const [delay3] = useState(() => `${Math.random() * 2}s`);

  // 2. Roll sub-results once on mount (binary ON/OFF)
  const [subResults] = useState(() => {
    const results: { [key: string]: boolean } = {};
    [1, 2, 3].forEach((m) => {
      ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"].forEach(
        (letter) => {
          results[`${m}${letter}`] = Math.random() < 0.5;
        },
      );
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

      {/* Field 1 trees */}
      {field === 1 && subResults["1a"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "50%", left: "30%", animationDelay: delay1 }}
        >
          <Image
            src="/assets/living/tree1.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 1 && subResults["1b"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "50%", left: "50%", animationDelay: delay2 }}
        >
          <Image
            src="/assets/living/tree3.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 1 && subResults["1c"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "45%", left: "65%", animationDelay: delay3 }}
        >
          <Image
            src="/assets/living/tree5.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 1 && subResults["1d"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "55%", left: "85%", animationDelay: delay1 }}
        >
          <Image
            src="/assets/living/tree6.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 1 && subResults["1e"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "40%", left: "30%", animationDelay: delay2 }}
        >
          <Image
            src="/assets/living/tree7.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 1 && subResults["1f"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "25%", left: "90%", animationDelay: delay3 }}
        >
          <Image
            src="/assets/living/tree8.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 1 && subResults["1g"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "30%", left: "10%", animationDelay: delay1 }}
        >
          <Image
            src="/assets/living/tree10.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 1 && subResults["1h"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "50%", left: "85%", animationDelay: delay2 }}
        >
          <Image
            src="/assets/living/tree11.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 1 && subResults["1i"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "55%", left: "25%", animationDelay: delay3 }}
        >
          <Image
            src="/assets/living/tree12.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 1 && subResults["1j"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "25%", left: "75%", animationDelay: delay1 }}
        >
          <Image
            src="/assets/living/tree13.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 1 && subResults["1k"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "40%", left: "75%", animationDelay: delay2 }}
        >
          <Image
            src="/assets/living/tree15.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {/* Field 2 trees */}
      {field === 2 && subResults["2a"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "60%", left: "0%", animationDelay: delay1 }}
        >
          <Image
            src="/assets/living/tree1.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 2 && subResults["2b"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "50%", left: "50%", animationDelay: delay2 }}
        >
          <Image
            src="/assets/living/tree3.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 2 && subResults["2c"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "45%", left: "65%", animationDelay: delay3 }}
        >
          <Image
            src="/assets/living/tree5.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 2 && subResults["2d"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "75%", left: "25%", animationDelay: delay1 }}
        >
          <Image
            src="/assets/living/tree6.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 2 && subResults["2e"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "40%", left: "30%", animationDelay: delay2 }}
        >
          <Image
            src="/assets/living/tree7.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 2 && subResults["2f"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "25%", left: "90%", animationDelay: delay3 }}
        >
          <Image
            src="/assets/living/tree8.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 2 && subResults["2g"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "35%", left: "10%", animationDelay: delay1 }}
        >
          <Image
            src="/assets/living/tree10.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 2 && subResults["2h"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "50%", left: "85%", animationDelay: delay2 }}
        >
          <Image
            src="/assets/living/tree11.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 2 && subResults["2i"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "55%", left: "25%", animationDelay: delay3 }}
        >
          <Image
            src="/assets/living/tree12.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 2 && subResults["2j"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "20%", left: "70%", animationDelay: delay1 }}
        >
          <Image
            src="/assets/living/tree13.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 2 && subResults["2k"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "25%", left: "60%", animationDelay: delay2 }}
        >
          <Image
            src="/assets/living/tree15.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {/* Field 3 trees */}
      {field === 3 && subResults["3a"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "30%", left: "55%", animationDelay: delay1 }}
        >
          <Image
            src="/assets/living/tree1.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 3 && subResults["3b"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "29%", left: "0%", animationDelay: delay2 }}
        >
          <Image
            src="/assets/living/tree3.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 3 && subResults["3c"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "35%", left: "65%", animationDelay: delay3 }}
        >
          <Image
            src="/assets/living/tree5.png"
            alt="Tree"
            width={250}
            height={250}
          />
        </div>
      )}

      {field === 3 && subResults["3d"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "45%", left: "85%", animationDelay: delay1 }}
        >
          <Image
            src="/assets/living/tree6.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 3 && subResults["3e"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "30%", left: "45%", animationDelay: delay2 }}
        >
          <Image
            src="/assets/living/tree7.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 3 && subResults["3f"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "25%", left: "90%", animationDelay: delay3 }}
        >
          <Image
            src="/assets/living/tree8.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 3 && subResults["3g"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "30%", left: "10%", animationDelay: delay1 }}
        >
          <Image
            src="/assets/living/tree10.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 3 && subResults["3h"] && (
        <div
          className={`absolute z-15 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "30%", left: "70%", animationDelay: delay2 }}
        >
          <Image
            src="/assets/living/tree11.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 3 && subResults["3i"] && (
        <div
          className={`absolute z-10 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "25%", left: "30%", animationDelay: delay3 }}
        >
          <Image
            src="/assets/living/tree12.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 3 && subResults["3j"] && (
        <div
          className={`absolute z-20 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "25%", left: "60%", animationDelay: delay1 }}
        >
          <Image
            src="/assets/living/tree13.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

      {field === 3 && subResults["3k"] && (
        <div
          className={`absolute z-15 ${windSpeed > 2 ? "animate-tree-sway" : ""}`}
          style={{ top: "20%", left: "40%", animationDelay: delay2 }}
        >
          <Image
            src="/assets/living/tree15.png"
            alt="Tree"
            width={150}
            height={200}
          />
        </div>
      )}

    </div>
  );
}
