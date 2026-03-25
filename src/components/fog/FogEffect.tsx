// FogEffect.tsx
import Image from "next/image";

export default function FogEffect() {
  return (
    <div className="absolute inset-0 z-50 pointer-events-none">
      <Image
        src="/assets/clouds3.png"
        alt="Fog Cloud 1"
        width={800}
        height={400}
        className="absolute animate-cloud-roll-short"
        style={{
          top: "55%",
          left: "-20%",
          opacity: 0.35,
        }}
      />

      <Image
        src="/assets/clouds3.png"
        alt="Fog Cloud 2"
        width={700}
        height={350}
        className="absolute animate-cloud-roll-short"
        style={{
          top: "58%",
          left: "0%",
          opacity: 0.35,
        }}
      />

      <Image
        src="/assets/clouds3.png"
        alt="Fog Cloud 3"
        width={650}
        height={325}
        className="absolute animate-cloud-roll-medium"
        style={{
          top: "60%",
          left: "20%",
          opacity: 0.35,
        }}
      />

      <Image
        src="/assets/clouds3.png"
        alt="Fog Cloud 4"
        width={600}
        height={300}
        className="absolute animate-cloud-roll-medium"
        style={{
          top: "50%",
          left: "45%",
          opacity: 0.35,
        }}
      />

      <Image
        src="/assets/clouds3.png"
        alt="Fog Cloud 5"
        width={750}
        height={375}
        className="absolute animate-cloud-roll-long"
        style={{
          top: "45%",
          left: "60%",
          opacity: 0.35,
        }}
      />

      <Image
        src="/assets/clouds3.png"
        alt="Fog Cloud 6"
        width={700}
        height={350}
        className="absolute animate-cloud-roll-long"
        style={{
          top: "66%",
          left: "75%",
          opacity: 0.35,
        }}
      />
    </div>
  );
}
