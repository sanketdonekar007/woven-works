
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AnimatedLink from "@/components/AnimatedLink";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TextReveal } from "@/components/TextReveal";
import { ProjectShelf } from "@/components/home/ProjectShelf";
import { ProcessStrip } from "@/components/home/ProcessStrip";
import { ExpertiseBento } from "@/components/home/ExpertiseBento";
import { AIPlayground } from "@/components/home/AIPlayground";
import { ExplorationsRow } from "@/components/home/ExplorationsRow";
import { FloatingChipRow, FloatingChips, RowLabel, type FloatingChip } from "@/components/home/shared";

/* ─── Data ───────────────────────────────────────────── */

const projects = [
  {
    slug: "tutoronboarding",
    year: "2025",
    metric: "8-step verification · Shipped",
    title: "Locate Tutors, Onboarding & Verification",
    description:
      "I designed an end-to-end tutor onboarding and credential verification experience, building marketplace trust through eight focused input steps and a clear success state.",
    image: "/lovable-uploads/locate-tutor-intro-optimized.jpg",
    alt: "Locate Tutors Onboarding Experience",
    category: "EdTech · Marketplace · Web",
    featured: true,
  },
  {
    slug: "vstatecompliance",
    year: "2024–25",
    metric: "45% faster filing cycles",
    title: "vState, Workflow Platform",
    description:
      "I led end-to-end service design for a multi-tenant compliance SaaS, from stakeholder research and service blueprints to high-fidelity flows that cut filing cycles by 45% and client status inquiries by 70% in pilot sessions.",
    image: "/lovable-uploads/filenow3.jpg",
    alt: "vState Compliance Workflow Platform",
    category: "B2B SaaS · Compliance",
    featured: true,
  },
  {
    slug: "snackhack",
    year: "2025",
    metric: "92% first-scan success",
    title: "Snack Hack, Decode Your Snacks",
    description:
      "I designed the scanner core, results flow, and onboarding for a HealthTech app. In usability testing, first-scan success reached 92% and scan-to-decision time improved by 33%.",
    image: "/lovable-uploads/Snack Hack Hero.png",
    alt: "SnackHack, Decode Your Snacks",
    category: "HealthTech · Mobile",
    featured: true,
  },
  {
    slug: "redberylwebsite",
    year: "2026",
    metric: "7 products, one connected IA",
    title: "RedBeryl, Website Redesign",
    description:
      "I redesigned a growing technology company's website around seven products, AI capabilities, and scalable discovery—turning a flat service catalogue into a connected enterprise platform.",
    image: "/redberyl/new-homepage.png",
    alt: "RedBeryl website redesign",
    category: "B2B Technology · Website · AI",
    featured: true,
  },
  {
    slug: "checkalt",
    year: "2026",
    metric: "AI prototype → 3 products, 1 system",
    title: "CheckAlt, Operations Platform",
    description:
      "I turned an AI-generated prototype into a governed operations platform for a US payments processor—building the design system first, then designing Nexus and ObservabilityOS on top of it.",
    image: "/checkalt/checkalt-home-mockup.webp",
    alt: "CheckAlt Nexus and ObservabilityOS",
    category: "FinTech · Enterprise SaaS · Design System",
    featured: true,
  },
  {
    slug: "accurest",
    year: "2026",
    metric: "Shipment creation 45 → 8 min",
    title: "AccuRest, Supply Chain Platform",
    description:
      "I designed the operational nerve centre of an enterprise supply chain platform, reducing shipment creation from 45 to 8 minutes in usability testing (n=6) across five stakeholder groups.",
    image: "/lovable-uploads/accurest-hero-optimized.jpg",
    alt: "AccuRest Supply Chain Platform",
    category: "Enterprise SaaS · Supply Chain",
    featured: true,
  },
  /* {
    slug: "cricmetrix",
    title: "CricMetrix, Cricket Academy Platform",
    description:
      "AI-powered multi-tenant academy management for coaches, players, parents, and admins, replacing spreadsheets with an immersive training ecosystem across 4 role dashboards.",
    image: "/lovable-uploads/filenow3.jpg",
    alt: "CricMetrix Cricket Academy Platform",
    category: "Sports Tech · AI · SaaS",
  }, */
  {
    slug: "bajajpay",
    title: "Bajaj Pay, From One Payment to a Habit",
    description:
      "A design assignment on bill-payment retention: keep the biller at the moment of success, spend exactly one well-timed alert per cycle, and earn autopay instead of pushing it — all without new homepage space or extra notifications.",
    image: "/finance/cover-phones.webp",
    alt: "Bajaj Pay bill payments case study",
    category: "FinTech · Mobile · Assignment",
    featured: false,
  },
  {
    slug: "whatsapp",
    title: "WhatsApp, Voice NLP",
    description:
      "I designed a UX concept enhancing WhatsApp's voice messaging with AI-powered transcription, cutting time-to-detail from 90 seconds to 15 in concept testing across 5 rounds.",
    image: "/lovable-uploads/whatsapp-feature.jpg",
    alt: "WhatsApp Voice NLP Concept",
    category: "Concept · Social UX",
    featured: false,
  },
  {
    slug: "langlang",
    title: "LangLang, Language Learning App",
    description:
      "A concept exploring calmer language-learning habits, accessible onboarding, interactive exercises, and AI-guided recommendations.",
    image: "/lovable-uploads/langlang.png",
    alt: "LangLang Language Learning App",
    category: "EdTech · Mobile",
    featured: false,
  },
];

const chipIcon = (bg: string, glyph: React.ReactNode, color = "#fff") => (
  <span className="keep-color grid h-7 w-7 place-items-center rounded-lg text-[13px] font-bold" style={{ background: bg, color }}>
    {glyph}
  </span>
);

const vscodeGlyph = (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M8 7 3 12l5 5M16 7l5 5-5 5" />
  </svg>
);
const analyticsGlyph = (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
    <rect x="4" y="13" width="4" height="7" rx="2" fill="#E37400" />
    <rect x="10" y="8" width="4" height="12" rx="2" fill="#F9AB00" />
    <rect x="16" y="3" width="4" height="17" rx="2" fill="#F9AB00" />
  </svg>
);

const toolChips: FloatingChip[] = [
  { label: "Figma", note: "Flows, UI, prototypes", accent: "#a259ff", icon: chipIcon("linear-gradient(135deg,#f24e1e,#a259ff)", "F"), className: "left-[4%] top-[9%]", duration: 8.5 },
  { label: "Notion", note: "Research notes & specs", accent: "#d4d4d4", icon: chipIcon("#ffffff", "N", "#111"), className: "left-[24%] top-[4%]", duration: 9.8, delay: -3 },
  { label: "Claude", note: "Prototypes & synthesis", accent: "#d97757", icon: chipIcon("#d97757", "✳"), className: "right-[5%] top-[7%]", duration: 7.2, delay: -2 },
  { label: "Maze", note: "Unmoderated usability tests", accent: "#3b82f6", icon: chipIcon("#3b82f6", "M"), className: "right-[25%] top-[3%]", duration: 8.8, delay: -5 },
  { label: "VS Code", note: "Build what I design", accent: "#007acc", icon: chipIcon("#007acc", vscodeGlyph), className: "left-[6%] bottom-[8%]", duration: 9.4, delay: -4 },
  { label: "Google Analytics", note: "Did the design work?", accent: "#f9ab00", icon: chipIcon("#ffffff", analyticsGlyph), className: "left-[40%] bottom-[5%]", duration: 10.6, delay: -6 },
  { label: "React", note: "Live, coded prototypes", accent: "#61dafb", icon: chipIcon("#0b1220", "⚛", "#61dafb"), className: "right-[4%] bottom-[10%]", duration: 10.2, delay: -1 },
];

const skillChips = [
  { icon: "🔍", label: "User Research" },
  { icon: "🧪", label: "Usability Testing" },
  { icon: "🗺️", label: "Service Blueprinting" },
  { icon: "🏗️", label: "Design Systems & IA" },
  { icon: "✏️", label: "Wireframing & Prototyping" },
  { icon: "🎨", label: "High-Fidelity UI" },
  { icon: "👁️", label: "Visual Design" },
  { icon: "🖱️", label: "Interaction Design" },
  { icon: "🔀", label: "User Flows" },
  { icon: "🤝", label: "Stakeholder Facilitation" },
  { icon: "🧩", label: "Cross-functional Workshops" },
  { icon: "💻", label: "Dev Handoff" },
  { icon: "♿", label: "Accessibility (WCAG)" },
  { icon: "📱", label: "Responsive Design" },
  { icon: "🤖", label: "AI Tools in Design" },
];

const reviews = [
  {
    name: "Artee Kale",
    role: "Director · Digital Marketing Startup",
    text: "Sanket designed high-converting landing pages for our real estate campaigns that genuinely moved the needle. He understood the audience immediately and delivered pages that were both visually sharp and optimised to convert. Our lead quality improved significantly.",
    rating: 5,
    avatar: "/lovable-uploads/artee-kale.jpg",
    project: "Real estate landing pages",
    accent: "#FF5900",
    tint: "rgba(255, 89, 0, 0.14)",
  },
  {
    name: "Ravi Salunkhe",
    role: "CEO · KnackBe Tech",
    text: "We needed a mobile product for a large, diverse FMCG audience across Pune and Sanket nailed it. He balanced simplicity with depth, making the app accessible to a wide range of users without dumbing it down. Exactly what we were looking for.",
    rating: 5,
    avatar: "/lovable-uploads/ravi-salunkhe.jpg",
    project: "FMCG mobile app",
    accent: "#2563eb",
    tint: "rgba(37, 99, 235, 0.14)",
  },
  {
    name: "Santosh Narate",
    role: "Project Manager · RedBeryl Tech",
    text: "Sanket has worked across multiple products for us, spanning enterprise SaaS, consumer apps, and both local Pune and international clients. His ability to shift between complex B2B systems and consumer-facing products while maintaining quality is rare and invaluable.",
    rating: 5,
    avatar: "/lovable-uploads/santosh-narate.png",
    project: "SaaS · Consumer apps",
    accent: "#7c3aed",
    tint: "rgba(124, 58, 237, 0.14)",
  },
  {
    name: "Gaurav Phadke",
    role: "Project Coordinator · SnackHack, US",
    text: "SnackHack needed to turn something genuinely confusing (nutrition labels) into something anyone could understand in seconds. Sanket cracked that. The scan flow, the results layout, the way alternatives are surfaced; it all felt obvious after he designed it, which is exactly the point. Great to work with across time zones too.",
    rating: 5,
    avatar: "/lovable-uploads/gaurav-phadke.jpg",
    project: "SnackHack app",
    accent: "#0d9488",
    tint: "rgba(13, 148, 136, 0.14)",
  },
  {
    name: "Sunil R. Nair",
    role: "Co-Founder & CEO · SoftC, Dubai",
    text: "Building SoftC's digital identity meant communicating a complex enterprise AI proposition to a sophisticated, global audience. Sanket delivered. He grasped the positioning immediately and produced a website that carries the authority and clarity the brand demands. For someone who has built digital ecosystems across billion-dollar organisations, I know sharp, purposeful design when I see it.",
    rating: 5,
    avatar: "/lovable-uploads/sunil-nair.jpg",
    project: "SoftC website",
    accent: "#d97706",
    tint: "rgba(217, 119, 6, 0.14)",
  },
];

const experience = [
  {
    date: "2024 – Present",
    company: "RedBeryl Tech",
    role: "Senior UX Designer",
    metric: "45 → 8 min",
    metricLabel: "Shipment creation time in usability testing (n=6), plus 3 design systems shipped",
  },
  {
    date: "2023 – 2024",
    company: "Esoftcode",
    role: "UI/UX Designer",
    metric: "8 modules",
    metricLabel: "Unified on one reusable component library for a B2B CRM",
  },
  {
    date: "2021 – 2023",
    company: "KnackBe Tech",
    role: "UI Designer",
    metric: "IA rebuild",
    metricLabel: "Restructured navigation and hierarchy for an FMCG e-commerce app",
  },
];

const featuredProjects = projects.filter((project) => project.featured);
const explorations = projects.filter((project) => !project.featured);

/* ─── Page ───────────────────────────────────────────── */

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Disable native scroll restoration so we control it ourselves
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    return () => { window.history.scrollRestoration = 'auto'; };
  }, []);

  // Restore scroll when coming back from a project/about page, otherwise go to top
  useEffect(() => {
    if (location.state?.restoreScroll) {
      const savedY = sessionStorage.getItem('homeScrollY');
      if (savedY) {
        const y = parseInt(savedY, 10);
        // Two rAFs to let layout settle before scrolling
        requestAnimationFrame(() => requestAnimationFrame(() => window.scrollTo(0, y)));
        return;
      }
    }
    window.scrollTo(0, 0);
  }, []);

  // Save scroll position while browsing the home page
  useEffect(() => {
    const onScroll = () => {
      sessionStorage.setItem('homeScrollY', String(window.scrollY));
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <div className="portfolio-container">

      {/* ── Nav ─────────────────────────────────────── */}
      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="logo">
            <Link to="/"><div className="logo-image" aria-label="SD" /></Link>
          </div>
          <nav className="navigation">
            <ul>
              <li><AnimatedLink href="#works">Works</AnimatedLink></li>
              <li><AnimatedLink to="/about">About</AnimatedLink></li>
              <li><AnimatedLink href="/Sanket Donekar Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</AnimatedLink></li>
              <li><ThemeToggle /></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────── */}
      <section className="hero-section relative overflow-hidden" id="hero">

        {/* Background glow */}
        <div className="cinematic-bg absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0" style={{ background: "radial-gradient(60% 55% at 50% 45%, hsl(var(--primary) / 0.10) 0%, transparent 70%)" }} />
          {/* Centred vignette */}
          <div className="absolute inset-0 z-[1]"
            style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(0,0,0,0.60) 0%, transparent 75%)" }} />
          {/* Overall dark overlay to improve text contrast */}
          <div className="absolute inset-0 z-[2] bg-black/45" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-48 z-10"
            style={{ background: "linear-gradient(to bottom, transparent, #000)" }} />
        </div>

        <div className="hero-content relative z-10 max-w-[1200px] mx-auto w-full flex flex-col items-center text-center">

          {/* Intro text */}
          <div className="flex flex-col gap-1 mb-10">
            <p className="text-[26px] sm:text-[36px] md:text-[52px] lg:text-[60px] font-light leading-[1.2] tracking-[-0.01em] text-white/65">
              Hey, I'm{" "}
              <img
                src="/lovable-uploads/me.png"
                className="inline-block w-9 h-9 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full object-cover align-middle mx-1"
                alt="Sanket Donekar"
              />{" "}
              Sanket,
            </p>
            <h1 className="text-[26px] sm:text-[36px] md:text-[52px] lg:text-[60px] font-medium leading-[1.2] tracking-[-0.01em] text-white">
              Senior Product Designer simplifying complex systems.
            </h1>
            <h2 className="text-[26px] sm:text-[36px] md:text-[52px] lg:text-[60px] font-medium leading-[1.2] tracking-[-0.01em] text-white/50">
              B2B SaaS, service design, and scalable product experiences.
            </h2>
            <p className="mt-5 text-sm sm:text-base font-light text-white/45 tracking-[0.02em]">
              5+ years · Pune, India · Enterprise SaaS, compliance, supply chain and HealthTech
            </p>
          </div>

          {/* Social row — icon only */}
          <div className="flex items-center gap-5 mb-16">
            <a
              href="https://www.linkedin.com/in/sanketworks/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <span className="w-px h-4 bg-white/25" />
            <a
              href="mailto:sanket.donekar@gmail.com"
              aria-label="Email"
              className="text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
            <span className="w-px h-4 bg-white/25" />
            <a
              href="https://dribbble.com/sanket_works"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
              className="text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="flex items-center gap-3 opacity-65">
            <span className="text-[16px] font-light tracking-[0.12em] uppercase text-white">Scroll down</span>
            <div className="flex items-center gap-1">
              <span className="block w-8 h-px bg-white/60" />
              <svg className="w-4 h-5 text-white animate-bounce" viewBox="0 0 16 20" fill="none" stroke="currentColor" strokeWidth={1.2}>
                <rect x="1" y="1" width="14" height="18" rx="7" />
                <line x1="8" y1="5" x2="8" y2="8" strokeLinecap="round" />
              </svg>
              <span className="block w-8 h-px bg-white/60" />
            </div>
            <span className="text-[16px] font-light tracking-[0.12em] uppercase text-white">to see projects</span>
          </div>

        </div>
      </section>

      {/* ── Featured Projects: pinned shelf ───────────── */}
      <section id="works" className="theme-section pt-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 mb-10 lg:mb-0 text-center">
          <p className="text-base font-light tracking-[0.14em] uppercase text-white/40">Featured case studies</p>
          <TextReveal
            as="h2"
            text="Work that shipped."
            className="mt-3 text-[40px] md:text-[64px] lg:text-[80px] font-medium leading-none tracking-[-0.03em] text-white"
          />
        </div>
        <ProjectShelf projects={featuredProjects} />
      </section>

      {/* ── Playground: AI experiments ───────────────── */}
      <section id="ai-experiments" className="theme-section relative overflow-hidden py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-base font-light tracking-[0.14em] uppercase text-white/40">Built with AI</p>
          <TextReveal
            as="h2"
            text="Playground."
            className="mt-3 text-[40px] md:text-[64px] lg:text-[80px] font-medium leading-none tracking-[-0.03em] text-white"
          />
          <p className="mt-5 mx-auto max-w-[680px] text-[17px] leading-[1.6] font-light text-white/50">
            Experiments with Claude Code and other AI tools: prototypes, motion and ideas I build to explore what these tools can do.
          </p>
        </div>
        <RowLabel className="mt-12 px-6">AI experiments</RowLabel>
        <AIPlayground />
      </section>

      {/* ── How I think: floating tools + process strip ── */}
      <section className="theme-section relative overflow-hidden py-14 md:py-44 border-t border-white/10">
        <FloatingChips chips={toolChips} />
        <FloatingChipRow chips={toolChips.slice(0, 4)} className="mb-10" />
        <div className="relative px-6 lg:px-10">
          <ProcessStrip />
        </div>
        <FloatingChipRow chips={toolChips.slice(4)} className="mt-10" />
      </section>

      {/* ── Expertise ────────────────────────────────── */}
      <section className="theme-section max-w-[1200px] mx-auto px-6 lg:px-10 py-20 border-t border-white/10">

        <div className="mb-12 md:mb-16 text-center">
          <p className="text-[16px] font-light tracking-[0.14em] uppercase text-white/35 mb-3">What I bring</p>
          <TextReveal
            as="h2"
            text="Expertise."
            className="text-[40px] md:text-[64px] lg:text-[80px] font-medium leading-none tracking-[-0.03em] text-white"
          />
        </div>

        <div className="mb-12">
          <ExpertiseBento />
        </div>

        {/* Skill chips — two-row horizontal carousel */}
        <div className="relative overflow-hidden -mx-6 lg:-mx-10 px-0">
          {/* Left fade */}
          <div className="carousel-edge carousel-edge-left pointer-events-none absolute left-0 top-0 h-full w-24 z-10" />
          {/* Right fade */}
          <div className="carousel-edge carousel-edge-right pointer-events-none absolute right-0 top-0 h-full w-24 z-10" />

          {/* Row 1 */}
          <div className="flex gap-2 mb-2 skill-row-1">
            {[...skillChips.slice(0, 8), ...skillChips.slice(0, 8)].map((chip, i) => (
              <span
                key={`r1-${i}`}
                className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 text-base font-light tracking-[-0.01em] text-white/40 whitespace-nowrap"
              >
                <span className="text-[16px] leading-none grayscale opacity-40">{chip.icon}</span>
                {chip.label}
              </span>
            ))}
          </div>

          {/* Row 2 — reversed direction */}
          <div className="flex gap-2 skill-row-2">
            {[...skillChips.slice(8), ...skillChips.slice(8)].map((chip, i) => (
              <span
                key={`r2-${i}`}
                className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 text-base font-light tracking-[-0.01em] text-white/40 whitespace-nowrap"
              >
                <span className="text-[16px] leading-none grayscale opacity-40">{chip.icon}</span>
                {chip.label}
              </span>
            ))}
          </div>
        </div>

      </section>

      {/* ── Client Reviews ───────────────────────────── */}
      <section className="theme-section py-20 border-t border-white/10">

        {/* Header */}
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,320px)_1fr] gap-8 md:gap-12 items-center">
            <div className="overflow-hidden rounded-[18px] w-full max-w-[280px] md:max-w-none mx-auto md:mx-0">
              <img
                src="/lovable-uploads/sanket-portrait.jpg"
                alt="Sanket Donekar"
                className="w-full h-auto grayscale"
              />
            </div>
            <div className="flex flex-col gap-5">
              <span className="inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full border border-white/15 text-[16px] font-light tracking-[0.08em] text-white/50">
                @ Reviews
              </span>
              <h2 className="text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-medium leading-[1.15] tracking-[-0.02em] text-white">
                What collaborators say
              </h2>
              <p className="text-[16px] leading-[1.65em] font-light tracking-[-0.01em] text-white/45 max-w-[400px]">
                Feedback from clients and cross-functional collaborators on product thinking, execution, and working together.
              </p>
            </div>
          </div>
        </div>

        {/* Carousel — auto-scrolling marquee, pauses on hover */}
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="relative overflow-hidden">
          <div className="carousel-edge carousel-edge-left pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 z-10" />
          <div className="carousel-edge carousel-edge-right pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 z-10" />

          {/* Duplicated track for seamless loop */}
          <div className="flex w-max reviews-track">
            {[...reviews, ...reviews].map((review, i) => (
              <article
                key={`${review.name}-${i}`}
                aria-hidden={i >= reviews.length || undefined}
                className="rv-card xp-card flex-shrink-0 mr-4 w-[300px] md:w-[360px] flex flex-col rounded-[22px] border border-white/10 bg-[#0d0d0d] p-3 transition-[border-color,box-shadow] duration-300"
                style={{ "--xp-accent": review.accent, "--xp-tint": review.tint } as React.CSSProperties}
              >
                {/* Quote stage */}
                <div className="xp-card__stage relative flex flex-1 flex-col gap-4 overflow-hidden rounded-[14px] p-6">
                  <div className="flex items-center justify-between">
                    <span aria-hidden className="keep-color font-serif text-[56px] leading-[0.6] h-[26px]" style={{ color: review.accent }}>
                      &ldquo;
                    </span>
                    <div className="flex items-center gap-1" aria-label={`Rated ${review.rating} out of 5`}>
                      {Array.from({ length: review.rating }).map((_, s) => (
                        <svg key={s} aria-hidden className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="rv-card__quote text-[16px] leading-[1.7em] font-light tracking-[-0.01em] text-white/60 transition-colors duration-300">
                    {review.text}
                  </p>
                </div>

                {/* Reviewer */}
                <div className="flex min-h-[124px] items-center gap-3.5 px-2 pb-2 pt-4">
                  {review.avatar ? (
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0 border border-white/10"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/55 text-base font-medium flex-shrink-0">
                      {review.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                    </div>
                  )}
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <h3 className="xp-card__title text-[18px] font-medium tracking-[-0.02em] text-white transition-colors duration-300">{review.name}</h3>
                    <p className="text-[14px] font-light tracking-[-0.01em] text-white/45">{review.role}</p>
                    <span className="xp-card__metric mt-1 text-[12px] uppercase tracking-[0.08em] text-white/35 transition-colors duration-300">{review.project}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        </div>

      </section>

      {/* ── Experience ───────────────────────────────── */}
      <section className="theme-section max-w-[1200px] mx-auto px-6 lg:px-10 py-20 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-base font-light tracking-[0.1em] uppercase text-white/40 mb-3">Experience</p>
            <h2 className="text-[24px] md:text-[32px] font-medium tracking-[-0.02em] text-white">A track record of shipped work.</h2>
          </div>
          <p className="text-base font-light text-white/40">5+ years · 3 companies · 35+ projects · 3 design systems</p>
        </div>
        <div className="border-t border-white/10">
          {experience.map((job) => (
            <div
              key={job.company}
              className="grid grid-cols-1 md:grid-cols-[160px_1fr_1.4fr] gap-3 md:gap-8 py-8 border-b border-white/10 md:items-center"
            >
              <span className="text-base font-light text-white/40">{job.date}</span>
              <div>
                <p className="text-[20px] font-medium tracking-[-0.01em] text-white">{job.company}</p>
                <p className="text-base font-light text-white/45">{job.role}</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[28px] md:text-[32px] font-medium leading-none tracking-[-0.01em] text-white">{job.metric}</span>
                <span className="text-[15px] font-light leading-snug text-white/45">{job.metricLabel}</span>
              </div>
            </div>
          ))}
        </div>
        <Link to="/about" className="inline-block mt-8 text-base font-light text-white/55 hover:text-white transition-colors">
          Full experience on About ↗
        </Link>
      </section>

      {/* ── Sprints & concepts ───────────────────────── */}
      <section className="theme-section max-w-[1200px] mx-auto px-6 lg:px-10 py-20 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-base font-light tracking-[0.1em] uppercase text-white/40 mb-3">Sprints & concepts</p>
            <h2 className="text-[28px] md:text-[40px] font-medium tracking-[-0.02em] text-white">Short briefs, real constraints.</h2>
          </div>
          <p className="text-base font-light text-white/40 max-w-md">Assignments and concept sprints on retention, voice and learning habits, outside client work.</p>
        </div>
        <ExplorationsRow items={explorations} />
      </section>

      {/* ── CTA / Footer ─────────────────────────────── */}
      <footer className="relative min-h-screen flex flex-col overflow-hidden border-t border-white/10">

        {/* Background glow */}
        <div className="cinematic-bg absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0" style={{ background: "radial-gradient(60% 55% at 50% 45%, hsl(var(--primary) / 0.10) 0%, transparent 70%)" }} />
          {/* Dark overlay so text stays readable */}
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)" }} />
        </div>

        {/* Center content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 gap-8 py-24">

          {/* Available pill */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-base font-light tracking-[-0.01em] text-white/60">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to Senior Product Design opportunities
          </span>

          {/* Heading */}
          <h2 className="text-[22px] sm:text-[28px] md:text-[40px] lg:text-[48px] font-medium leading-[1.25] tracking-[-0.02em] text-white max-w-[720px]">
            Looking for a designer who can bring clarity to complex products?
          </h2>

          {/* CTA */}
          <a
            href="mailto:sanket.donekar@gmail.com"
            className="light-footer-cta relative overflow-hidden px-8 py-3.5 rounded-full border border-white/30 text-base font-medium tracking-[-0.01em] text-white hover:bg-white/8 transition-colors"
          >
            <span className="btn-shine pointer-events-none absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            Discuss a product design role
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-5 mt-2">
            <a href="https://www.linkedin.com/in/sanketworks/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/40 hover:text-white/70 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <span className="w-px h-4 bg-white/20" />
            <a href="mailto:sanket.donekar@gmail.com" aria-label="Email" className="text-white/40 hover:text-white/70 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
            <span className="w-px h-4 bg-white/20" />
            <a href="https://dribbble.com/sanket_works" target="_blank" rel="noopener noreferrer" aria-label="Dribbble" className="text-white/40 hover:text-white/70 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>
            </a>
          </div>

        </div>

        {/* Bottom bar */}
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

export default Index;
