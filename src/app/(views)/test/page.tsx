"use client";

import { useState } from "react";
import { RainCurtain1, RainCurtain2 } from "@/components/rain/rainCurtain";
import Image from "next/image";
import { StarField } from "@/components/stars/StarField";
import { generateStars } from "@/components/stars/generateStars";
import { ShootingStar } from "@/components/shooting stars/ShootingStar";

export default function TestPage() {
  const [rainEnabled, setRainEnabled] = useState(true);

  return (
    <div className="relative w-full aspect-[16/9] bg-black overflow-hidden">
      <div className="bg-red-500 sm:bg-blue-500 h-10 w-10"></div>

      {/* Stars */}
      <div className="absolute inset-0 z-10">
        <StarField
          stars={generateStars(500)}
          className="absolute inset-0 animate-fade-in"
        />
      </div>

      {/* Shooting Stars */}

      <ShootingStar className="animate-shooting-star" />

      {/* Clouds */}
      <div className="absolute inset-0 z-20">
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          height={250}
          width={250}
          className="absolute opacity-90 top-[-5%] left-[40%] brightness-75 animate-cloud-roll-short"
        />
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          height={230}
          width={230}
          className="absolute opacity-90 top-[-7%] left-[42%] brightness-75 animate-cloud-roll-short"
        />
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          height={260}
          width={260}
          className="absolute opacity-90 top-[-11%] left-[30%] brightness-75 animate-cloud-roll-short"
        />
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          height={210}
          width={210}
          className="absolute opacity-90 top-[-1%] left-[45%] brightness-75 animate-cloud-roll-short"
        />
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          height={240}
          width={240}
          className="absolute opacity-85 top-[-6%] left-[20%] brightness-75 animate-cloud-roll-short"
        />
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          height={270}
          width={270}
          className="absolute opacity-90 top-[-9%] left-[55%] brightness-75 animate-cloud-roll-short"
        />
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          height={220}
          width={220}
          className="absolute opacity-80 top-[-12%] left-[70%] brightness-75 animate-cloud-roll-short"
        />
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          height={260}
          width={260}
          className="absolute opacity-85 top-[-4%] left-[15%] brightness-75 animate-cloud-roll-short"
        />
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          height={260}
          width={260}
          className="absolute opacity-85 top-[-4%] left-[5%] brightness-75 animate-cloud-roll-short"
        />
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          height={270}
          width={270}
          className="absolute opacity-90 top-[-2%] left-[95%] brightness-75 animate-cloud-roll-short"
        />
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          height={220}
          width={220}
          className="absolute opacity-80 top-[-2%] left-[970%] brightness-75 animate-cloud-roll-short"
        />
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          height={260}
          width={260}
          className="absolute opacity-85 top-[-4%] left-[75%] brightness-75 animate-cloud-roll-short"
        />
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          height={200}
          width={200}
          className="absolute opacity-85 top-[-6%] left-[2%] brightness-75 animate-cloud-roll-short"
        />
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          height={200}
          width={200}
          className="absolute opacity-90 top-[-2%] left-[1%] brightness-75 animate-cloud-roll-short"
        />
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          height={200}
          width={200}
          className="absolute opacity-80 top-[-4%] left-[80%] brightness-75 animate-cloud-roll-short"
        />
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          height={200}
          width={200}
          className="absolute opacity-85 top-[-4%] left-[1%] brightness-75 animate-cloud-roll-short"
        />
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={320}
          height={320}
          className="absolute opacity-95 top-[-6%] left-[25%] brightness-70 animate-cloud-roll-short"
        />{" "}
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={350}
          height={350}
          className="absolute opacity-90 top-[-8%] left-[60%] brightness-70 animate-cloud-roll-short"
        />{" "}
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={300}
          height={300}
          className="absolute opacity-85 top-[-2%] left-[10%] brightness-70 animate-cloud-roll-short"
        />{" "}
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={280}
          height={280}
          className="absolute opacity-90 top-[-4%] left-[75%] brightness-70 animate-cloud-roll-short"
        />
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={340}
          height={340}
          className="absolute opacity-95 top-[-1%] left-[-5%] brightness-70 animate-cloud-roll-short"
        />{" "}
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={250}
          height={250}
          className="absolute opacity-90 top-[-2%] left-[90%] brightness-70 animate-cloud-roll-short"
        />{" "}
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={400}
          height={400}
          className="absolute opacity-85 top-[-2%] left-[40%] brightness-70 animate-cloud-roll-short"
        />{" "}
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={380}
          height={380}
          className="absolute opacity-90 top-[-4%] left-[55%] brightness-70 animate-cloud-roll-short"
        />
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={350}
          height={350}
          className="absolute opacity-95 top-[-1%] left-[-20%] brightness-70 animate-cloud-roll-short"
        />{" "}
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={350}
          height={350}
          className="absolute opacity-90 top-[-8%] left-[-2%] brightness-70 animate-cloud-roll-short"
        />{" "}
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={350}
          height={350}
          className="absolute opacity-85 top-[-10%] left-[-1%] brightness-70 animate-cloud-roll-short"
        />{" "}
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={180}
          height={180}
          className="absolute opacity-90 top-[-4%] left-[-5%] brightness-70 animate-cloud-roll-short"
        />
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={380}
          height={380}
          className="absolute opacity-95 top-[-3%] left-[100%] brightness-70 animate-cloud-roll-short"
        />{" "}
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={275}
          height={275}
          className="absolute opacity-90 top-[-8%] left-[98%] brightness-70 animate-cloud-roll-short"
        />{" "}
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={320}
          height={320}
          className="absolute opacity-85 top-[-2%] left-[99%] brightness-70 animate-cloud-roll-short"
        />{" "}
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={280}
          height={280}
          className="absolute opacity-90 top-[-1%] left-[100%] brightness-70 animate-cloud-roll-short"
        />
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={320}
          height={320}
          className="absolute opacity-95 top-[-6%] left-[95%] brightness-70 animate-cloud-roll-short"
        />{" "}
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={350}
          height={350}
          className="absolute opacity-90 top-[-8%] left-[96%] brightness-70 animate-cloud-roll-short"
        />{" "}
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={300}
          height={300}
          className="absolute opacity-85 top-[-1%] left-[90%] brightness-70 animate-cloud-roll-short"
        />{" "}
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={280}
          height={280}
          className="absolute opacity-90 top-[-4%] left-[97%] brightness-70 animate-cloud-roll-short"
        />
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={320}
          height={320}
          className="absolute opacity-95 top-[-6%] left-[102%] brightness-70 animate-cloud-roll-short"
        />{" "}
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={350}
          height={350}
          className="absolute opacity-90 top-[-8%] left-[106%] brightness-70 animate-cloud-roll-short"
        />{" "}
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={300}
          height={300}
          className="absolute opacity-85 top-[-1%] left-[110%] brightness-70 animate-cloud-roll-short"
        />{" "}
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={280}
          height={280}
          className="absolute opacity-90 top-[-4%] left-[107%] brightness-70 animate-cloud-roll-short"
        />
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={320}
          height={320}
          className="absolute opacity-95 top-[-1%] left-[105%] brightness-70 animate-cloud-roll-short"
        />{" "}
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={350}
          height={350}
          className="absolute opacity-90 top-[-2%] left-[110%] brightness-70 animate-cloud-roll-short"
        />{" "}
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={300}
          height={300}
          className="absolute opacity-85 top-[-3%] left-[115%] brightness-70 animate-cloud-roll-short"
        />{" "}
        <Image
          src="/assets/clouds3.png"
          alt="Cloud"
          width={280}
          height={280}
          className="absolute opacity-90 top-[-6%] left-[117%] brightness-70 animate-cloud-roll-short"
        />
      </div>

      {/* Rain */}
      {rainEnabled && (
        <div className="absolute inset-0 z-30 overflow-hidden">
          <RainCurtain1 />
          <RainCurtain2 />
          <RainCurtain1 />
          <RainCurtain2 />
          <RainCurtain1 />
          <RainCurtain2 />
          <RainCurtain1 />
          <RainCurtain2 />
          <RainCurtain1 />
          <RainCurtain2 />
          <RainCurtain1 />
          <RainCurtain2 />
        </div>
      )}

      {/* Meadow */}
      <div className="absolute inset-0 z-20">
        <Image
          src="/assets/meadow3.png"
          alt="Hill"
          fill
          className="object-bottom object-cover"
        />
      </div>

      {/* Moon */}
      <div className="absolute top-[20%] left-[15%] z-5 animate-breathe-fast">
        <Image src="/assets/moon.png" alt="Moon" width={150} height={150} />
      </div>

      {/* Trees */}
      <div className="absolute inset-0 z-30">
        <Image
          src="/assets/tree2.png"
          alt="Tree"
          width={100}
          height={100}
          className="absolute left-[40%] top-[23%] z-35 animate-tree-sway"
        />
        <Image
          src="/assets/tree1.png"
          alt="Tree"
          width={150}
          height={150}
          className="absolute left-[45%] top-[32%] z-40 animate-tree-sway"
        />
        <Image
          src="/assets/tree3.png"
          alt="Tree"
          width={100}
          height={100}
          className="absolute left-[35%] top-[20%] z-35 animate-tree-sway"
        />
        <Image
          src="/assets/tree5.png"
          alt="Tree"
          width={150}
          height={150}
          className="absolute left-[51%] top-[20%] z-30 animate-tree-sway"
        />
      </div>
    </div>
  );
}
