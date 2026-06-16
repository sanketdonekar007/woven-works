
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedLink from "@/components/AnimatedLink";
import { MusicPlayer } from "@/components/MusicPlayer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

/* ── Scroll-reveal ───────────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(28px)",
        transition:
          "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Data ───────────────────────────────────────────────── */
const experience = [
  {
    date: "Mar 2024 – Present",
    company: "RedBeryl Tech",
    role: "Senior UX Designer",
    bullets: [
      "Enterprise supply chain SaaS — cut shipment creation from 45 min to 8 min across 5 stakeholder teams.",
      "Multi-tenant compliance SaaS — 70% less manual work, 45% fewer errors, 50% faster filing.",
      "US HealthTech scanner — reduced scan-to-decision time by 33%.",
      "US EdTech tutor marketplace — improved match accuracy by 55% in usability testing.",
      "3 atomic design systems — 70% team efficiency gain, 50% less developer rework.",
    ],
  },
  {
    date: "Mar 2023 – Feb 2024",
    company: "Esoftcode",
    role: "UI/UX Designer",
    bullets: [
      "B2B CRM — reusable component library across 8 modules, reduced inconsistency and accelerated delivery.",
      "Ran competitive analysis, usability testing & interviews to validate design decisions.",
      "End-to-end design-to-dev handoff across responsive web products.",
    ],
  },
  {
    date: "Jul 2021 – Mar 2023",
    company: "KnackBe Tech",
    role: "UI Designer",
    bullets: [
      "FMCG e-commerce app — restructured IA and visual hierarchy, improved navigation and discoverability.",
      "Brand identity, landing pages, and paid campaigns across Google, Facebook, and Instagram.",
    ],
  },
];

const education = [
  {
    num: "01",
    icon: (
      <svg className="w-5 h-5 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    degree: "MBA, Business Analytics",
    institution: "Pune University",
    detail: "2022 – 2024",
  },
  {
    num: "02",
    icon: (
      <svg className="w-5 h-5 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    degree: "B.E., Information Technology",
    institution: "MIT Pune",
    detail: "2016 – 2019",
  },
];

const skills = [
  "Design Systems", "Agentic AI Design", "Service Blueprinting", "Journey Mapping",
  "UX Research", "Usability Testing", "Prototyping", "Accessibility (WCAG)",
  "AI Workflows", "Agile / Scrum", "HTML/CSS/JS", "Information Architecture",
  "High-Fidelity UI", "Interaction Design", "Dev Handoff", "Design Management",
];

const tools = [
  { name: "Figma",     category: "Product design",        img: "https://api.iconify.design/logos/figma.svg" },
  { name: "Framer",    category: "Web design",            img: "https://api.iconify.design/logos/framer.svg" },
  { name: "Miro",      category: "Whiteboarding",         img: "https://api.iconify.design/logos/miro.svg" },
  { name: "Adobe CC",  category: "Creative suite",        img: "https://api.iconify.design/logos/adobe.svg" },
  { name: "Claude",    category: "AI research & writing", img: "https://api.iconify.design/simple-icons/anthropic.svg" },
  { name: "Cursor",    category: "AI code editor",        img: "https://api.iconify.design/devicon/cursor.svg" },
  { name: "Gemini",    category: "Storyboarding & Media",  img: "https://api.iconify.design/logos/google-gemini.svg" },
  { name: "ChatGPT",   category: "AI workflows",          img: "https://api.iconify.design/logos/openai-icon.svg" },
  { name: "VS Code",   category: "HTML/CSS/JS",           img: "https://api.iconify.design/logos/visual-studio-code.svg" },
  { name: "Notion",    category: "Documentation",         img: "https://api.iconify.design/logos/notion-icon.svg" },
  { name: "Jira",      category: "Agile / Scrum",         img: "https://api.iconify.design/logos/jira.svg" },
  { name: "Zapier",    category: "Automation",            img: "https://api.iconify.design/logos/zapier-icon.svg" },
];

/* ── Heights for the photo collage ─────────────────────── */
/* ── Photo carousel slides ───────────────────────────────── */
const collagePhotos = [
  { src: "/lovable-uploads/cricket.png", alt: "Sanket playing cricket" },
  { src: "/lovable-uploads/image-200.png", alt: "Sanket Donekar" },
  { src: "/lovable-uploads/Finch.JPG",   alt: "Sanket Donekar" },
  { src: "/lovable-uploads/figma-design.png", alt: "Figma design work" },
];

const roles = ["UX Designer ✦", "Cricket Player", "Performer", "Gamer"];

/* ── Page ───────────────────────────────────────────────── */
const About = () => {
  const [scrolled, setScrolled] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [heroApi, setHeroApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    if (!heroApi) return;
    const onSelect = () => {
      setActiveIndex(heroApi.selectedScrollSnap());
    };
    heroApi.on("select", onSelect);
    onSelect();
    return () => {
      heroApi.off("select", onSelect);
    };
  }, [heroApi]);

  useEffect(() => {
    if (!heroApi) return;
    const interval = setInterval(() => {
      heroApi.scrollNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [heroApi]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliding(true);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setSliding(false);
      }, 480);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-vietnam">

      <MusicPlayer />

      {/* ── Nav ─────────────────────────────────────── */}
      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="logo">
            <Link to="/"><div className="logo-image" aria-label="SD" /></Link>
          </div>
          <nav className="navigation">
            <ul>
              <li><AnimatedLink href="/#works">Works</AnimatedLink></li>
              <li><AnimatedLink to="/about" className="active">About Me</AnimatedLink></li>
              <li><AnimatedLink href="/Sanket Donekar Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</AnimatedLink></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ── Hero (Collage + Name) ────────────────────── */}
      <div className="relative w-full overflow-hidden">

        {/* Photo Carousel */}
        <div className="relative z-10 pt-[64px] w-full">
          <div className="px-4 md:px-8 lg:px-12 pt-10 max-w-[1200px] mx-auto">
            <Carousel setApi={setHeroApi} opts={{ loop: true, align: "start" }} className="w-full">
              <CarouselContent className="items-end -ml-2">
                {collagePhotos.map((photo, i) => (
                  <CarouselItem key={i} className="pl-2 basis-[55%] sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div className="overflow-hidden rounded-t-2xl aspect-[9/16]">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full rounded-t-2xl object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* Name + Bio */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 pt-12 pb-20 text-center">
        <Reveal>
          <h1 className="text-[40px] md:text-[52px] lg:text-[60px] font-medium tracking-[-0.03em] leading-[1.05] text-white mb-2">
            Sanket Donekar
          </h1>
        </Reveal>
        <Reveal delay={80}>
          {/* Double-stack vertical slide — same mechanic as AnimatedLink */}
          <div className="overflow-hidden mb-8" style={{ height: "1.6em" }}>
            <div
              style={{
                transform: sliding ? "translateY(-100%)" : "translateY(0%)",
                transition: sliding ? "transform 0.48s cubic-bezier(0.76,0,0.24,1)" : "none",
              }}
            >
              <span className="block text-[17px] font-light tracking-[0.06em] text-white italic leading-[1.6]">
                {roles[roleIndex]}
              </span>
              <span className="block text-[17px] font-light tracking-[0.06em] text-white italic leading-[1.6]">
                {roles[(roleIndex + 1) % roles.length]}
              </span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-[17px] md:text-[18px] leading-[1.75] font-light text-white/50 max-w-[680px] mx-auto">
            I enjoy taking messy, complicated systems and making them feel effortless for users. Based in Pune, I blend service design, user research, and AI-powered workflows to ship products that actually move the needle.
          </p>
        </Reveal>
        </div>{/* end name+bio */}
      </div>{/* end hero wrapper */}

      {/* ── Work Experience ──────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 border-t border-white/10">
        <Reveal>
          <h2 className="text-[28px] md:text-[34px] font-medium tracking-[-0.02em] text-white mb-14">
            Work Experience
          </h2>
        </Reveal>

        <div className="flex flex-col divide-y divide-white/[0.07]">
          {experience.map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 py-10">
                {/* Company + Role + Date */}
                <div>
                  <p className="text-[16px] font-medium text-white leading-snug">{item.company}</p>
                  <p className="text-[13px] font-light text-white/40 mt-0.5">{item.role}</p>
                  <p className="text-[13px] font-light text-white/40 mt-2">{item.date}</p>
                </div>
                {/* Bullets */}
                <ul className="flex flex-col gap-2.5">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2.5 text-[14px] leading-[1.65] font-light text-white/45">
                      <span className="mt-[6px] w-1 h-1 rounded-full bg-white/25 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Education ────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 border-t border-white/10">
        <Reveal>
          <h2 className="text-[28px] md:text-[34px] font-medium tracking-[-0.02em] text-white mb-14">
            Education
          </h2>
        </Reveal>

        <div className="flex flex-col gap-4">
          {education.map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="relative bg-[#0d0d0d] rounded-2xl px-8 py-7 flex items-start gap-5"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
                {/* Number badge */}
                <span className="absolute top-5 right-6 text-[13px] font-light tabular-nums text-white/20 tracking-[0.08em]">
                  {item.num}
                </span>
                {/* Icon */}
                <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                {/* Content */}
                <div>
                  <h3 className="text-[17px] font-medium text-white leading-snug mb-1">
                    {item.degree}
                  </h3>
                  <p className="text-[14px] font-light text-white/40 tracking-[0.02em]">
                    {item.institution} | {item.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 border-t border-white/10">
        <Reveal>
          <h2 className="text-[28px] md:text-[34px] font-medium tracking-[-0.02em] text-white mb-10">
            Skills
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full text-[14px] font-light tracking-[-0.01em] text-white/55 transition-colors hover:text-white/80 hover:border-white/20"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Toolkit ──────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 border-t border-white/10">
        <Reveal>
          <h2 className="text-[28px] md:text-[34px] font-medium tracking-[-0.02em] text-white mb-10">
            Toolkit
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {tools.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 40}>
              <div
                className="flex items-center gap-3.5 px-4 py-4 rounded-2xl transition-colors hover:bg-white/[0.04]"
                style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl"
                  style={{ background: "rgba(255,255,255,0.05)" }}>
                  <img
                    src={tool.img}
                    alt={tool.name}
                    className="w-5 h-5 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[14px] font-medium text-white leading-snug truncate">{tool.name}</span>
                  <span className="text-[12px] font-light text-white/35 leading-snug truncate">{tool.category}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>



      {/* ── Footer CTA ───────────────────────────────── */}
      <footer className="relative min-h-[80vh] flex flex-col overflow-hidden border-t border-white/10">

        {/* Spline background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* @ts-ignore */}
          <spline-viewer
            url="https://prod.spline.design/Ewb8vIqWFjVZn1-c/scene.splinecode"
            style={{ width: "100%", height: "100%", display: "block" }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)" }} />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 gap-8 py-24">

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[14px] font-light tracking-[-0.01em] text-white/60"
            style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available For Work
          </span>

          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-medium leading-[1.2] tracking-[-0.02em] text-white max-w-[680px]">
            If you've made it this far, we're either meant to work together, or you just really like great design.
          </h2>

          <a
            href="mailto:sanket.donekar@gmail.com"
            className="relative overflow-hidden px-8 py-3.5 rounded-full text-[15px] font-medium tracking-[-0.01em] text-white hover:bg-white/[0.08] transition-colors"
            style={{ border: "1px solid rgba(255,255,255,0.3)" }}
          >
            <span className="btn-shine pointer-events-none absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            Book a Free Call
          </a>

          <div className="flex items-center gap-5 mt-2">
            <a href="https://www.linkedin.com/in/sanketworks/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/40 hover:text-white/70 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <span className="w-px h-4 bg-white/20" />
            <a href="mailto:sanket.donekar@gmail.com" aria-label="Email" className="text-white/40 hover:text-white/70 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
            <span className="w-px h-4 bg-white/20" />
            <a href="https://dribbble.com/sanket_works" target="_blank" rel="noopener noreferrer" aria-label="Dribbble" className="text-white/40 hover:text-white/70 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" /></svg>
            </a>
          </div>

        </div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-0 px-8 lg:px-16 py-5 border-t border-white/10">
          <a href="mailto:sanket.donekar@gmail.com" className="text-[13px] font-light tracking-[-0.01em] text-white/35 hover:text-white/55 transition-colors lg:pr-5">
            sanket.donekar@gmail.com
          </a>
          <span className="hidden lg:block w-px h-3.5 bg-white/20 flex-shrink-0" />
          <span className="text-[13px] font-light tracking-[-0.01em] text-white/35 lg:px-5">
            © 2026 Sanket Donekar
          </span>
          <span className="hidden lg:block w-px h-3.5 bg-white/20 flex-shrink-0" />
          <a href="/Sanket Donekar Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-[13px] font-light tracking-[-0.01em] text-white/35 hover:text-white/55 transition-colors lg:pl-5">
            Resume →
          </a>
        </div>

      </footer>

    </div>
  );
};

export default About;
