// Items for the home page "Playground" gallery.
// `tool` is shown in the accent colour — only name a tool that was actually used.
export type AIExperiment = {
  title: string;
  kind: string;
  tool?: string;
  image?: string; // poster; when omitted the card shows an early frame of `video`
  video?: string;
  href?: string;
  ratio: number; // media width / height
  hasAudio?: boolean; // shows a sound on/off toggle on the card
};

export const aiExperiments: AIExperiment[] = [
  {
    title: "The Story of the Golden Deer",
    kind: "AI short film",
    image: "/playground/golden-deer-poster.webp",
    video: "/playground/golden-deer.mp4",
    ratio: (9 / 16) * 1.5, // shown 50% wider than the source; the top and bottom crop slightly
    hasAudio: true,
  },
  {
    title: "RedBeryl — 7 intelligent products",
    kind: "Product film",
    video: "/playground/redberyl-intelligent-products.mp4",
    ratio: 16 / 9,
    hasAudio: true,
  },
  {
    title: "Learning Body Parts",
    kind: "AI animation",
    video: "/playground/learning-body-parts.mp4",
    ratio: 16 / 9,
    hasAudio: true,
  },
  {
    title: "RedBeryl HRMS — product promo",
    kind: "Promo film",
    video: "/playground/redberyl-hrms-promo.mp4",
    ratio: 16 / 9,
    hasAudio: true,
  },
  {
    title: "RedBeryl — introductory video",
    kind: "Intro film",
    video: "/playground/redberyl-intro.mp4",
    ratio: 16 / 9,
    hasAudio: true,
  },
  {
    title: "Yellow Duck Waving",
    kind: "AI animation",
    video: "/playground/yellow-duck-waving.mp4",
    ratio: 16 / 9,
    hasAudio: true,
  },
];
