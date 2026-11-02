// Items for the home page "Playground" gallery.
// `tool` is shown in the accent colour — only name a tool that was actually used.
export type AIExperiment = {
  title: string;
  kind: string;
  tool?: string;
  image: string;
  video?: string;
  href?: string;
  ratio: number; // media width / height
};

export const aiExperiments: AIExperiment[] = [
  {
    title: "vState — working client & provider prototype",
    kind: "Interactive prototype",
    tool: "Built with Claude Code",
    image: "/vstate/client-dashboard.webp",
    href: "/projects/vstatecompliance",
    ratio: 1.6,
  },
  {
    title: "RedBeryl — mega-menu navigation prototype",
    kind: "Coded prototype",
    image: "/redberyl/navigation-prototype-final-poster.png",
    video: "/redberyl/navigation-prototype-final.webm",
    href: "/projects/redberylwebsite",
    ratio: 1.6,
  },
  {
    title: "This portfolio — designed and built in code",
    kind: "Website",
    tool: "Built with Claude Code + React",
    image: "/playground/portfolio-hero.png",
    href: "/",
    ratio: 1.6,
  },
  {
    title: "RedBeryl — website walkthrough",
    kind: "Walkthrough film",
    image: "/redberyl/website-walkthrough-final-poster.png",
    video: "/redberyl/website-walkthrough-final.webm",
    href: "/projects/redberylwebsite",
    ratio: 1.6,
  },
];
