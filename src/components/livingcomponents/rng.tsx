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
        <Image
          src="/assets/living/tree1.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "50%", left: "30%" }}
        />
      )}
      {field === 1 && subResults["1b"] && (
        <Image
          src="/assets/living/tree3.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "50%", left: "50%" }}
        />
      )}
      {field === 1 && subResults["1c"] && (
        <Image
          src="/assets/living/tree5.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "45%", left: "65%" }}
        />
      )}
      {field === 1 && subResults["1d"] && (
        <Image
          src="/assets/living/tree6.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "55%", left: "85%" }}
        />
      )}
      {field === 1 && subResults["1e"] && (
        <Image
          src="/assets/living/tree7.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "40%", left: "30%" }}
        />
      )}
      {field === 1 && subResults["1f"] && (
        <Image
          src="/assets/living/tree8.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "25%", left: "90%" }}
        />
      )}
      {field === 1 && subResults["1g"] && (
        <Image
          src="/assets/living/tree10.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "30%", left: "10%" }}
        />
      )}
      {field === 1 && subResults["1h"] && (
        <Image
          src="/assets/living/tree11.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "50%", left: "85%" }}
        />
      )}
      {field === 1 && subResults["1i"] && (
        <Image
          src="/assets/living/tree12.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "55%", left: "25%" }}
        />
      )}
      {field === 1 && subResults["1j"] && (
        <Image
          src="/assets/living/tree13.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "25%", left: "75%" }}
        />
      )}
      {field === 1 && subResults["1k"] && (
        <Image
          src="/assets/living/tree15.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "40%", left: "75%" }}
        />
      )}

      {/* Field 2 trees */}
      {field === 2 && subResults["2a"] && (
        <Image
          src="/assets/living/tree1.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "50%", left: "30%" }}
        />
      )}
      {field === 2 && subResults["2b"] && (
        <Image
          src="/assets/living/tree3.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "50%", left: "50%" }}
        />
      )}
      {field === 2 && subResults["2c"] && (
        <Image
          src="/assets/living/tree5.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "45%", left: "65%" }}
        />
      )}
      {field === 2 && subResults["2d"] && (
        <Image
          src="/assets/living/tree6.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "55%", left: "85%" }}
        />
      )}
      {field === 2 && subResults["2e"] && (
        <Image
          src="/assets/living/tree7.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "40%", left: "30%" }}
        />
      )}
      {field === 2 && subResults["2f"] && (
        <Image
          src="/assets/living/tree8.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "25%", left: "90%" }}
        />
      )}
      {field === 2 && subResults["2g"] && (
        <Image
          src="/assets/living/tree10.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "30%", left: "10%" }}
        />
      )}
      {field === 2 && subResults["2h"] && (
        <Image
          src="/assets/living/tree11.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "50%", left: "85%" }}
        />
      )}
      {field === 2 && subResults["2i"] && (
        <Image
          src="/assets/living/tree12.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "55%", left: "25%" }}
        />
      )}
      {field === 2 && subResults["2j"] && (
        <Image
          src="/assets/living/tree13.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "25%", left: "75%" }}
        />
      )}
      {field === 2 && subResults["2k"] && (
        <Image
          src="/assets/living/tree15.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "40%", left: "75%" }}
        />
      )}

      {/* Field 3 trees */}
      {field === 3 && subResults["3a"] && (
        <Image
          src="/assets/living/tree1.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "30%", left: "35%" }}
        />
      )}
      {field === 3 && subResults["3b"] && (
        <Image
          src="/assets/living/tree3.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "30%", left: "10%" }}
        />
      )}
      {field === 3 && subResults["3c"] && (
        <Image
          src="/assets/living/tree5.png"
          alt="Tree"
          width={250}
          height={250}
          className="absolute z-10"
          style={{ top: "35%", left: "65%" }}
        />
      )}
      {field === 3 && subResults["3d"] && (
        <Image
          src="/assets/living/tree6.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "45%", left: "90%" }}
        />
      )}
      {field === 3 && subResults["3e"] && (
        <Image
          src="/assets/living/tree7.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "30%", left: "45%" }}
        />
      )}
      {field === 3 && subResults["3f"] && (
        <Image
          src="/assets/living/tree8.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "25%", left: "90%" }}
        />
      )}
      {field === 3 && subResults["3g"] && (
        <Image
          src="/assets/living/tree10.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "30%", left: "10%" }}
        />
      )}
      {field === 3 && subResults["3h"] && (
        <Image
          src="/assets/living/tree11.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "50%", left: "85%" }}
        />
      )}
      {field === 3 && subResults["3i"] && (
        <Image
          src="/assets/living/tree12.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "25%", left: "30%" }}
        />
      )}
      {field === 3 && subResults["3j"] && (
        <Image
          src="/assets/living/tree13.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "25%", left: "75%" }}
        />
      )}
      {field === 3 && subResults["3k"] && (
        <Image
          src="/assets/living/tree15.png"
          alt="Tree"
          width={150}
          height={200}
          className="absolute z-10"
          style={{ top: "40%", left: "75%" }}
        />
      )}

      {/* Debug overlay */}
      <div className="absolute top-4 left-4 z-50 bg-white text-black p-2">
        <p>Field chosen: {field}</p>
        {["a", "b", "c", "d", "e", "f"].map((letter) => (
          <p key={letter}>
            {field}
            {letter}: {subResults[`${field}${letter}`] ? "ON" : "OFF"}
          </p>
        ))}
      </div>
    </div>
  );
}
