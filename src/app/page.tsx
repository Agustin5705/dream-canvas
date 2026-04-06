"use client";

// Imports using local paths (assuming your environment fixed the routing)
import WobblyCard from "@/components/WobblyCard";
import SearchBar from "@/components/SearchBar";
import { ShowcaseCard } from "@/components/showcase/ShowcaseCard";
import { SnowCurtain1, SnowCurtain2 } from "@/components/snow/snowCurtain";
import { RainCurtain1, RainCurtain2 } from "@/components/rain/rainCurtain";
import { useState, useEffect } from "react";
import { SkyGradient } from "@/components/sky gradient/skygradient";
import { StarField } from "@/components/stars/StarField";
import { generateStars } from "@/components/stars/generateStars";
import { PlanetField } from "@/components/planets/PlanetField";
import { generatePlanets } from "@/components/planets/generatePlanets";
import { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHour(new Date().getHours());
    }, 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  const planets = useMemo(() => generatePlanets(), []);

  return (
    // The main container wrapper from layout.tsx centers content.
    <div className="flex flex-col items-center py-10 px-4">
      {/* 1. MAIN HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0.6 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <WobblyCard className="relative max-w-4xl w-full mb-16 overflow-hidden bg-soft-clay/90">
          {/* Decorative assets */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Stars */}
            <div className="absolute inset-0 z-10 bg-black opacity-30">
              <StarField stars={generateStars(250)} />
            </div>

            {/* Sun */}
            <div className="absolute top-2 right-10 w-[150px] h-[150px] animate-pulse opacity-70">
              <Image src="/assets/sun.png" alt="Sun" fill />
            </div>

            {/* Person */}
            <div className="absolute bottom-10 right-2 w-[150px] h-[200px] opacity-70">
              <Image src="/assets/person5.png" alt="Person" fill />
            </div>

            {/* Birds */}
            <div className="absolute top-6 left-10 w-[200px] h-[150px] opacity-70">
              <Image src="/assets/birds1.png" alt="Person" fill />
            </div>

            {/* Moon */}
            <div className="absolute bottom-10 left-3 w-[150px] h-[150px] animate-pulse opacity-70">
              <Image src="/assets/moon.png" alt="Moon" fill />
            </div>
          </div>

          {/* Hero content */}
          <div className="relative z-10 text-center p-6 sm:p-10">
            <h1 className="font-sketch text-5xl sm:text-7xl text-accent-dark mb-4">
              Dream Canvas
            </h1>
            <h2 className="font-sans text-xl sm:text-2xl text-pencil-gray/90 mb-8">
              A living gallery of frontend artistry — hand-sketched assets
              polished with AI, animated in real time.
            </h2>
            <p className="font-sans text-lg text-pencil-gray/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Explore custom cards, buttons, and frames, each designed with
              organic textures and whimsical motion. Every effect is a technical
              showcase, optimized to run together in real time.
            </p>
          </div>
        </WobblyCard>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100, scale: 0.6 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-4xl  bg-gradient-to-br from-soft-clay to-stone-600 text-gray-800 rounded-3xl p-6 mb-10">
          <h2 className="font-sketch text-3xl mb-4">
            Frontend Techniques Showcase
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            This project is a curated gallery of frontend experiments, blending
            hand-sketched assets refined with AI into polished interactive
            components. Each effect demonstrates a different technical
            approach—React hooks, Tailwind animations, global utilities, and
            layered compositions—all optimized to run together in real time.
          </p>
          <p className="text-sm leading-relaxed">
            The culmination of these experiments is the{" "}
            <strong>Living Canvas</strong>, a feature that combines rain, snow,
            gradients, stars, planets, and wind into a single dynamic
            environment. It represents the core idea of this showcase: pushing
            frontend techniques beyond isolated demos into a cohesive,
            responsive visual system.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0.6 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-4xl text-gray-800 rounded-3xl p-6 mb-10 bg-gradient-to-br from-soft-clay to-stone-600">
          <h2 className="font-sketch text-3xl mb-4">City Selector</h2>
          <p className="text-sm leading-relaxed mb-4">
            Choose a city and watch the <strong>Living Canvas</strong> transform
            in real time. Weather data from the OpenWeather API is translated
            into hand‑drawn skies, rain, snow, and wind — each effect layered
            together to create a living illustration of the world outside. This
            isn’t just a forecast; it’s a visual story that changes minute by
            minute with the atmosphere.
          </p>
          <p className="text-sm leading-relaxed mb-6">
            Select your location below to see the canvas breathe with your
            city’s weather.
          </p>
          <div className="flex justify-center mb-8">
            <SearchBar />
          </div>
          <div className="flex justify-center">
            <a
              href="/livingcanvas"
              className="bg-gradient-to-r from-soft-clay to-stone-500 text-black px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              Click here to see the drawing come to life based on the chosen
              location.
            </a>
          </div>
        </div>
      </motion.div>

      {/* Introduction */}

      <motion.div
        initial={{ opacity: 0, x: -100, scale: 0.6 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-4xl  bg-gradient-to-br from-soft-clay to-stone-600 text-gray-800 rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Technical Showcase Overview
          </h2>
          <p className="text-sm leading-relaxed mb-2">
            Each visual effect in this gallery is not just aesthetic—it
            demonstrates distinct engineering patterns in React and Tailwind
            CSS.
          </p>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>
              <strong>Rain:</strong> Raindrops styled in{" "}
              <code>globals.css</code>, generated via{" "}
              <code>generateRaindrop</code>, each using <code>useState</code> +
              <code>useEffect</code> with staggered timers and keyframe classes
              (<code>animate-rain-animation-*</code>) to avoid uniform lines.
            </li>
            <li>
              <strong>Snow:</strong> Similar to Rain but slower, with opacity
              tweaks and layered speed variants to create depth and softness in
              the fall.
            </li>
            <li>
              <strong>Sky Gradient:</strong> A simple array of 24 Tailwind
              gradient strings indexed by the current hour, updated via props
              and smoothed with
              <code>transition-colors</code> for an elegant day/night illusion.
            </li>
            <li>
              <strong>Stars & Planets:</strong> Stars generated globally and
              passed as props into <code>StarField</code> (state-driven
              twinkle), while planets are memoized with <code>useMemo</code> and
              animated with orbital keyframes.
            </li>
            <li>
              <strong>Wind:</strong> Clouds animated with multiple roll speeds
              tied to API wind data or randomized, while trees sway via wrapper
              divs to separate layout transforms from animation classes (
              <code>animate-tree-sway</code>).
            </li>
          </ul>
          <p className="text-sm mt-4">
            Together these effects illustrate how hooks, props, global
            utilities, and custom Tailwind animations combine to produce
            naturalistic motion and responsive visual systems.
          </p>
        </div>
      </motion.div>

      {/* Showcases */}
      {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="relative w-full max-w-5xl mx-auto py-16 rounded-3xl bg-gradient-to-bl from-soft-clay to-stone-600">
          {/* Vine background */}
          <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
            <Image
              src="/assets/vine3.png"
              alt="Vine Frame"
              fill
              className="opacity-80"
            />
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-12 relative z-10 pl-32">
            {/* Card 1 - Left */}
            <div className="mr-auto w-full max-w-3xl">
              <ShowcaseCard
                title="Rain"
                description="Raindrops are styled globally in globals.css and instantiated via generateRaindrop.tsx. Each drop component (RainDropSuperSlow through RainDropSuperFast) initializes its position with useState(generateRaindrop()) and refreshes via useEffect + setTimeout at different intervals (1300ms down to 700ms). The left property is randomized per drop, while vertical motion is handled by CSS keyframes (animate-rain-animation-*). By importing groups of these components into RainCurtain, the staggered speeds prevent uniform lines and create the illusion of natural rainfall."
                href="/rainy"
                preview={
                  <div className="w-full h-full relative">
                    <RainCurtain1 />
                    <RainCurtain2 />
                  </div>
                }
              />
            </div>

            {/* Card 2 - Right */}
            <div className="ml-auto w-full max-w-3xl">
              <ShowcaseCard
                title="Sky Gradient"
                description="SkyGradient maps the current hour (0-23) directly to an index in a predefined gradient array. Each gradient is a Tailwind utility string (bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700, etc.), fine-tuned to simulate the sky's transition from midnight black to midday white and back. The component receives hour as a prop, which is updated every minute via useState + useEffect in the parent. The gradient is applied with absolute inset-0 to cover the preview container, and transitions are smoothed with transition-colors duration-2000 for a subtle fade. Midnight corresponds to index 0, noon to index 12, and so on, creating a continuous illusion of the sun's position without complex math or external assets."
                href="/livingcanvas"
                preview={
                  <div className="w-full h-full relative">
                    <SkyGradient hour={currentHour} />
                  </div>
                }
              />
            </div>

            {/* Card 3 - Left */}
            <div className="mr-auto w-full max-w-3xl">
              <ShowcaseCard
                title="Snow"
                description="Snowflakes are styled globally in globals.css with lighter opacity and larger radii than raindrops to simulate softness. Each curtain imports multiple flake components (SnowRegular, SnowSlow, SnowVerySlow, SnowSuperSlow, and SnowFast), each initialized with randomized horizontal positions. Like Rain, they use useState(generateSnowflake()) and refresh via useEffect + setTimeout, but with longer intervals to slow the descent. Vertical motion is handled by CSS keyframes (animate-snow-animation-*), tuned for gentler fall speeds. Transparency (opacity-70 to opacity-50) ensures flakes overlap naturally without harsh edges. By mixing speeds and opacities across the curtain, the composition avoids synchronized lines and creates depth, mimicking natural snowfall."
                href="/snowedin"
                preview={
                  <div className="w-full h-full relative">
                    <SnowCurtain1 />
                    <SnowCurtain2 />
                  </div>
                }
              />
            </div>

            {/* Card 4 - Right */}
            <div className="ml-auto w-full max-w-3xl">
              <ShowcaseCard
                title="Stars"
                description="Stars are generated via a global utility (generateStars) and passed as props into StarField, which uses randomized Image attributes for size, location and color, it also employs a short randomized delay set upon generation to make each star twinkle at a different rate. Planets are created with generatePlanets and memoized using useMemo to avoid regeneration on re renders on the actual showcase. In this case, 100 stars are being generted for the preview, but more or less can be generated as needed."
                href="/dayindayout"
                preview={
                  <div className="w-full h-full relative">
                    <StarField stars={generateStars(100)} />
                    <PlanetField planets={planets} />
                  </div>
                }
              />
            </div>

            {/* Card 5 - Left */}
            <div className="mr-auto w-full max-w-3xl">
              <ShowcaseCard
                title="Wind"
                description="Cloud assets are animated with Tailwind keyframes (animate-cloud-roll-short, animate-cloud-roll-medium, animate-cloud-roll-long), each tied either to live wind speed values from the API or set arbitrarily to prevent synchronized motion. This layering ensures clouds drift at different rates, mimicking natural variability. Tree sway was more complex: applying transforms directly to the <Image> conflicted with positioning classes. The solution was to wrap each tree asset in a container <div> and apply the sway animation (animate-tree-sway) to the wrapper instead. This separation preserved layout positioning while allowing independent transform animations. The curtain composition blends multiple cloud speeds with tree sway, producing a cohesive illusion of wind-driven movement."
                href="/meadow"
                preview={
                  <div className="w-full h-full relative">
                    {/* Clouds */}
                    <div className="absolute top-4 left-1/4 animate-cloud-roll-short">
                      <Image
                        src="/assets/clouds3.png"
                        alt="Cloud"
                        width={70}
                        height={35}
                        className="opacity-60"
                      />
                    </div>
                    <div className="absolute top-10 right-1/4 animate-cloud-roll-medium">
                      <Image
                        src="/assets/clouds3.png"
                        alt="Cloud"
                        width={60}
                        height={30}
                        className="opacity-60"
                      />
                    </div>
                    <div className="absolute top-2 left-1/2 animate-cloud-roll-long">
                      <Image
                        src="/assets/clouds3.png"
                        alt="Cloud"
                        width={50}
                        height={25}
                        className="opacity-60"
                      />
                    </div>
                    {/* Trees */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 animate-tree-sway">
                      <Image
                        src="/assets/living/tree7.png"
                        alt="Tree"
                        width={50}
                        height={25}
                      />
                    </div>
                    <div className="absolute -bottom-6 left-1/3 -translate-x-1/2 animate-tree-sway">
                      <Image
                        src="/assets/living/tree8.png"
                        alt="Tree"
                        width={50}
                        height={25}
                      />
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
