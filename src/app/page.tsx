"use client";

// Imports using local paths (assuming your environment fixed the routing)
import WobblyCard from "@/components/WobblyCard";
import WobblyButton from "@/components/WobblyButton";
import GridItem from "@/components/GridItem";

export default function Home() {
  // Local placeholder image path (assuming your fix makes this work)
  const LOCAL_PLACEHOLDER = "/assets/placeholder.png";

  const highlightData = [
    {
      title: "Organic Texture",
      description:
        "The core philosophy is based on hand-drawn, imperfect elements, visible in our paper and clay backgrounds.",
    },
    {
      title: "Wobbly Interaction",
      description:
        "Focus on soft, yielding feedback. Components feature subtle animations and organic edge rounding.",
    },
    {
      title: "Earth Tones Palette",
      description:
        "Color system derived from nature: soft clays, deep pencil grays, and parchment paper.",
    },
  ];

  return (
    // The main container wrapper from layout.tsx centers content.
    <div className="flex flex-col items-center py-10 px-4">
      {/* 1. MAIN HERO SECTION */}
      <WobblyCard className="max-w-4xl w-full mb-16">
        <div className="text-center p-6 sm:p-10">
          <h1 className="font-sketch text-5xl sm:text-7xl text-accent-dark mb-4">
            Dream Canvas
          </h1>
          <h2 className="font-sans text-xl sm:text-2xl text-pencil-gray/80 mb-8">
            The Frontend Showcase: Design Meets Whimsy
          </h2>

          <p className="font-sans text-lg text-pencil-gray max-w-2xl mx-auto mb-10 leading-relaxed">
            This project explores an organic, hand-drawn aesthetic using custom
            Tailwind CSS utilities and unique React components. Dive into the
            gallery to see our custom cards, buttons, and frames—each designed
            to feel like it was sketched on a piece of clay paper.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
            {/* These buttons will eventually link using next/link */}
            <WobblyButton variant="primary">Explore the Gallery</WobblyButton>
            <WobblyButton variant="secondary">
              View Component Tests
            </WobblyButton>
          </div>
        </div>
      </WobblyCard>

      {/* 2. PROJECT HIGHLIGHTS */}
      <div className="w-full max-w-7xl mb-16">
        <h3 className="font-sketch text-4xl text-pencil-gray mb-8 text-center">
          Core Design Pillars
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlightData.map((item, index) => (
            <GridItem key={index} title={item.title}>
              {/* Using a simple <img> tag with a local source */}
              <img
                src={LOCAL_PLACEHOLDER}
                alt={item.title}
                className="w-full h-auto object-cover rounded-md mb-4"
              />
              <p className="text-pencil-gray/70 text-sm">{item.description}</p>
            </GridItem>
          ))}
        </div>
      </div>

      {/* 3. GET STARTED FOOTER CARD */}
      <WobblyCard className="max-w-xl w-full text-center p-6">
        <h3 className="font-sketch text-2xl text-pencil-gray mb-4">
          Ready to Sketch?
        </h3>
        <p className="text-pencil-gray/80 mb-6">
          Check out the source code and documentation to start building with the
          Dream Canvas design system.
        </p>
        <WobblyButton variant="primary">View on GitHub</WobblyButton>
      </WobblyCard>
    </div>
  );
}
