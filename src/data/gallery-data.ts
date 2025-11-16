export type GalleryItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string; // Will hold the ImageKit URL
  altText: string;
  category: "sketch" | "ui" | "concept";
};

export const MOCK_GALLERY_DATA: GalleryItem[] = [
  {
    id: 1,
    title: "Sunrise Sketch",
    description:
      "A detailed study of morning light and texture, rendered on digital paper.",
    imageUrl: "https://placehold.co/800x600/b5c9a1/2e3d36?text=Image+1",
    altText: "Sunrise lighting sketch",
    category: "sketch",
  },
  {
    id: 2,
    title: "The Wobbly Card",
    description:
      "Showcasing the core aesthetic of soft, rounded, imperfect clay forms.",
    imageUrl: "https://placehold.co/600x800/d7d2c1/2e3d36?text=Image+2",
    altText: "Wobbly UI component preview",
    category: "ui",
  },
  {
    id: 3,
    title: "Vine Frame Concept",
    description:
      "Initial concept drawing for the organic, image-based frame asset.",
    imageUrl: "/assets/placeholder.png",
    altText: "Hand-drawn vine frame concept",
    category: "concept",
  },
  {
    id: 4,
    title: "Palette Test",
    description:
      "Testing color combinations derived from natural earth tones and pencil grays.",
    imageUrl: "https://placehold.co/800x400/8d8a7a/2e3d36?text=Image+4",
    altText: "Color palette preview",
    category: "ui",
  },
  {
    id: 5,
    title: "Forest Path",
    description: "An abstract, mood-based conceptual piece.",
    imageUrl: "https://placehold.co/600x600/c7a978/2e3d36?text=Image+5",
    altText: "Conceptual art piece",
    category: "concept",
  },
];
