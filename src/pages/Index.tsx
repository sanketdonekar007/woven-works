
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layers, GitBranch, Cpu, Code2 } from "lucide-react";
import AnimatedLink from "@/components/AnimatedLink";
import { MusicPlayer } from "@/components/MusicPlayer";

/* ─── Data ───────────────────────────────────────────── */

const projects = [
  {
    slug: "vstatecompliance",
    title: "vState, Workflow Platform",
    description:
      "I led end-to-end service design for a multi-tenant compliance SaaS, from stakeholder research and service blueprints to high-fidelity flows that reduced manual work by 70% for 200+ clients.",
    image: "/lovable-uploads/filenow3.jpg",
    alt: "vState Compliance Workflow Platform",
    category: "B2B SaaS · Compliance",
  },
  {
    slug: "snackhack",
    title: "Snack Hack, Decode Your Snacks",
    description:
      "I designed the scanner core, results flow, and onboarding for a HealthTech app, synthesising 8 user interviews to cut scan-to-insight time by 92%.",
    image: "/lovable-uploads/Snack Hack Hero.png",
    alt: "SnackHack, Decode Your Snacks",
    category: "HealthTech · Mobile",
  },
  {
    slug: "accurest",
    title: "AccuRest, Supply Chain Platform",
    description:
      "I designed the operational nerve centre of an enterprise supply chain platform, from PO to warehouse delivery across 5 stakeholder teams in under 8 minutes per shipment.",
    image: "/lovable-uploads/filenow3.jpg",
    alt: "AccuRest Supply Chain Platform",
    category: "Enterprise SaaS · Supply Chain",
  },
  {
    slug: "cricmetrix",
    title: "CricMetrix, Cricket Academy Platform",
    description:
      "AI-powered multi-tenant academy management for coaches, players, parents, and admins, replacing spreadsheets with an immersive training ecosystem across 4 role dashboards.",
    image: "/lovable-uploads/filenow3.jpg",
    alt: "CricMetrix Cricket Academy Platform",
    category: "Sports Tech · AI · SaaS",
  },
  {
    slug: "whatsapp",
    title: "WhatsApp, Voice NLP",
    description:
      "I designed a UX concept enhancing WhatsApp's voice messaging with AI-powered transcription, cutting time-to-detail from 90 seconds to 15 across 5 usability test rounds.",
    image: "/lovable-uploads/whatsapp-feature.jpg",
    alt: "WhatsApp Voice NLP Concept",
    category: "Concept · Social UX",
  },
  {
    slug: "langlang",
    title: "LangLang, Language Learning App",
    description:
      "A user-centred approach to language learning featuring interactive exercises and AI-driven recommendations, improving engagement 40% and onboarding speed 3×.",
    image: "/lovable-uploads/langlang.png",
    alt: "LangLang Language Learning App",
    category: "EdTech · Mobile",
  },
];

const services = [
  {
    Icon: Layers,
    title: "UX & Product Design",
    description:
      "Crafting intuitive, scalable digital products through UX research, wireframing, prototyping, and high-fidelity UI, optimised for clarity, speed, and engagement.",
  },
  {
    Icon: GitBranch,
    title: "Service Design",
    description:
      "Mapping end-to-end service ecosystems, stakeholder journeys, and omnichannel experiences that deliver strategic and operational impact across teams.",
  },
  {
    Icon: Cpu,
    title: "AI-Powered Workflows",
    description:
      "Leveraging AI tools for research synthesis, content strategy, and workflow automation to reduce design cycles and increase innovation velocity.",
  },
  {
    Icon: Code2,
    title: "UX + Dev Integration",
    description:
      "Bridging design with frontend development through clean handoffs, dev-ready assets, and HTML/CSS/JS knowledge, minimising SDLC friction and rework.",
  },
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
  },
  {
    name: "Ravi Salunkhe",
    role: "CEO · KnackBe Tech",
    text: "We needed a mobile product for a large, diverse FMCG audience across Pune and Sanket nailed it. He balanced simplicity with depth, making the app accessible to a wide range of users without dumbing it down. Exactly what we were looking for.",
    rating: 5,
    avatar: "/lovable-uploads/ravi-salunkhe.jpg",
  },
  {
    name: "Santosh Narate",
    role: "Project Manager · RedBeryl Tech",
    text: "Sanket has worked across multiple products for us, spanning enterprise SaaS, consumer apps, and both local Pune and international clients. His ability to shift between complex B2B systems and consumer-facing products while maintaining quality is rare and invaluable.",
    rating: 5,
    avatar: "/lovable-uploads/santosh-narate.png",
  },
  {
    name: "Gaurav Phadke",
    role: "Project Coordinator · SnackHack, US",
    text: "SnackHack needed to turn something genuinely confusing (nutrition labels) into something anyone could understand in seconds. Sanket cracked that. The scan flow, the results layout, the way alternatives are surfaced; it all felt obvious after he designed it, which is exactly the point. Great to work with across time zones too.",
    rating: 5,
    avatar: "/lovable-uploads/gaurav-phadke.jpg",
  },
  {
    name: "Sunil R. Nair",
    role: "Co-Founder & CEO · SoftC, Dubai",
    text: "Building SoftC's digital identity meant communicating a complex enterprise AI proposition to a sophisticated, global audience. Sanket delivered. He grasped the positioning immediately and produced a website that carries the authority and clarity the brand demands. For someone who has built digital ecosystems across billion-dollar organisations, I know sharp, purposeful design when I see it.",
    rating: 5,
    avatar: "/lovable-uploads/sunil-nair.jpg",
  },
];

const stats = [
  { value: "35+", label: "Design projects completed" },
  { value: "5+", label: "Years of experience" },
  { value: "97%", label: "Client satisfaction rate" },
];

/* ─── Page ───────────────────────────────────────────── */

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

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
            </ul>
          </nav>
        </div>
      </header>

      <MusicPlayer />

      {/* ── Hero ────────────────────────────────────── */}
      <section className="hero-section relative overflow-hidden" id="hero">

        {/* Spline background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* @ts-ignore */}
          <spline-viewer
            url="https://prod.spline.design/Ewb8vIqWFjVZn1-c/scene.splinecode"
            style={{ width: "100%", height: "100%", display: "block" }}
          />
          {/* Centred vignette */}
          <div className="absolute inset-0 z-[1]"
            style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(0,0,0,0.60) 0%, transparent 75%)" }} />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-48 z-10"
            style={{ background: "linear-gradient(to bottom, transparent, #000)" }} />
        </div>

        <div className="hero-content relative z-10 max-w-[1200px] mx-auto w-full flex flex-col items-center text-center">

          {/* Intro text */}
          <div className="flex flex-col gap-1 mb-10">
            <p className="text-[36px] md:text-[52px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.01em] text-white/65">
              Hey, I'm{" "}
              <img
                src="/lovable-uploads/cheeze.png"
                className="inline-block w-9 h-9 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full object-cover align-middle mx-1"
                alt=""
              />{" "}
              Sanket,
            </p>
            <h1 className="text-[36px] md:text-[52px] lg:text-[60px] font-medium leading-[1.1] tracking-[-0.01em] text-white">
              A UX Designer making things easy ✨
            </h1>
            <h2 className="text-[36px] md:text-[52px] lg:text-[60px] font-medium leading-[1.1] tracking-[-0.01em] text-white/50">
              for people and helping businesses grow.
            </h2>
          </div>

          {/* Social row — icon only */}
          <div className="flex items-center gap-5 mb-16">
            <a
              href="https://www.linkedin.com/in/sanketworks/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/40 hover:text-white/70 transition-colors"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <span className="w-px h-4 bg-white/15" />
            <a
              href="mailto:sanket.donekar@gmail.com"
              aria-label="Email"
              className="text-white/40 hover:text-white/70 transition-colors"
            >
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
            <span className="w-px h-4 bg-white/15" />
            <a
              href="https://dribbble.com/sanket_works"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
              className="text-white/40 hover:text-white/70 transition-colors"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="flex items-center gap-3 opacity-35">
            <span className="text-[16px] font-light tracking-[0.12em] uppercase text-white">Scroll down</span>
            <div className="flex items-center gap-1">
              <span className="block w-8 h-px bg-white/60" />
              <svg className="w-4 h-5 text-white" viewBox="0 0 16 20" fill="none" stroke="currentColor" strokeWidth={1.2}>
                <rect x="1" y="1" width="14" height="18" rx="7" />
                <line x1="8" y1="5" x2="8" y2="8" strokeLinecap="round" />
              </svg>
              <span className="block w-8 h-px bg-white/60" />
            </div>
            <span className="text-[16px] font-light tracking-[0.12em] uppercase text-white">to see projects</span>
          </div>

        </div>
      </section>

      {/* ── Featured Projects ────────────────────────── */}
      <section id="works" className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">

        <p className="text-base font-light tracking-[0.1em] uppercase text-white/40 mb-0">Featured Projects</p>

        <div className="mt-0 border-t border-white/10">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-6 py-16 md:py-[80px] border-b border-white/10"
            >
              {/* Text column */}
              <div className="w-full md:flex-1 md:min-w-[400px] flex flex-col gap-5 md:pr-10 order-2 md:order-1">
                <span className="text-base font-light tracking-[-0.01em] text-white/35">{project.category}</span>
                <h3 className="text-[26px] md:text-[32px] font-medium leading-[1.2em] tracking-[-0.01em] text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[16px] leading-[1.5em] font-light tracking-[-0.02em] text-white/55 max-w-[520px]">
                  {project.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-base font-light tracking-[-0.02em] text-white/35 group-hover:text-white/55 transition-colors mt-1">
                  Read Case Study
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </span>
              </div>

              {/* Image column */}
              <div className="w-full md:flex-1 md:min-w-[400px] overflow-hidden rounded-[18px] order-1 md:order-2">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Services / Expertise ─────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 border-t border-white/10">

        <div className="mb-16">
          <p className="text-[16px] font-light tracking-[0.14em] uppercase text-white/35 mb-5">Design services</p>
          <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-medium leading-[1.2] tracking-[-0.02em] text-white w-full">
            Helping teams ship products that users actually love.
          </h2>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {services.map((s) => (
            <div key={s.title} className="bg-[#0d0d0d] rounded-[18px] p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-1">
                <s.Icon className="w-[18px] h-[18px] text-white/35" strokeWidth={1.5} />
                <h3 className="text-[17px] font-medium leading-[1.2em] tracking-[-0.02em] text-white">{s.title}</h3>
              </div>
              <p className="text-[16px] leading-[1.65em] font-light tracking-[-0.01em] text-white/45">{s.description}</p>
            </div>
          ))}
        </div>

        {/* Skill chips — two-row horizontal carousel */}
        <div className="relative overflow-hidden -mx-6 lg:-mx-10 px-0">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
            style={{ background: "linear-gradient(to right, #000 0%, transparent 100%)" }} />
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
            style={{ background: "linear-gradient(to left, #000 0%, transparent 100%)" }} />

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
      <section className="py-20 border-t border-white/10">

        {/* Header */}
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="overflow-hidden rounded-[18px] aspect-[4/3]">
              <img
                src="/lovable-uploads/me.png"
                alt="Working session"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="flex flex-col gap-5">
              <span className="inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full border border-white/15 text-[16px] font-light tracking-[0.08em] text-white/50">
                @ Reviews
              </span>
              <h2 className="text-[40px] md:text-[52px] lg:text-[64px] font-medium leading-[1.05] tracking-[-0.02em] text-white">
                Client Reviews
              </h2>
              <p className="text-[16px] leading-[1.65em] font-light tracking-[-0.01em] text-white/45 max-w-[400px]">
                Real feedback from people I have worked with who trusted my design expertise and judgements to elevate the performances in the corporate industry.
              </p>
            </div>
          </div>
        </div>

        {/* Carousel — auto-scrolling marquee, pauses on hover */}
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 z-10"
            style={{ background: "linear-gradient(to right, #000 0%, transparent 100%)" }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 z-10"
            style={{ background: "linear-gradient(to left, #000 0%, transparent 100%)" }}
          />

          {/* Duplicated track for seamless loop */}
          <div className="flex w-max reviews-track">
            {[...reviews, ...reviews].map((review, i) => (
              <div
                key={`${review.name}-${i}`}
                className="flex-shrink-0 mr-4 w-[300px] md:w-[340px] bg-[#0d0d0d] rounded-[18px] p-7 flex flex-col gap-5"
              >
                {/* Avatar */}
                {review.avatar ? (
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0 border border-white/10"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/55 text-lg font-medium flex-shrink-0">
                    {review.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                  </div>
                )}

                {/* Name + role */}
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-[18px] font-medium tracking-[-0.02em] text-white">{review.name}</h3>
                  <p className="text-[16px] font-light tracking-[-0.01em] text-white/40">{review.role}</p>
                </div>

                {/* Review text */}
                <p className="text-[16px] leading-[1.7em] font-light tracking-[-0.01em] text-white/55 flex-1">
                  {review.text}
                </p>

                {/* Stars */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span className="ml-1.5 text-[16px] font-light text-white/40">5.0</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>

      </section>

      {/* ── Stats ────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex-1 flex flex-col gap-2 ${i < stats.length - 1 ? "md:border-r md:border-white/10 md:pr-12" : ""} ${i > 0 ? "md:pl-12" : ""}`}
            >
              <span className="text-[44px] md:text-[54px] font-medium leading-none tracking-[-0.01em] text-white">{stat.value}</span>
              <span className="text-base font-light tracking-[-0.02em] text-white/40">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA / Footer ─────────────────────────────── */}
      <footer className="relative min-h-screen flex flex-col overflow-hidden border-t border-white/10">

        {/* Spline background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* @ts-ignore */}
          <spline-viewer
            url="https://prod.spline.design/Ewb8vIqWFjVZn1-c/scene.splinecode"
            style={{ width: "100%", height: "100%", display: "block" }}
          />
          {/* Dark overlay so text stays readable */}
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)" }} />
        </div>

        {/* Center content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 gap-8 py-24">

          {/* Available pill */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-base font-light tracking-[-0.01em] text-white/60">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available For Work
          </span>

          {/* Heading */}
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-medium leading-[1.2] tracking-[-0.02em] text-white max-w-[720px]">
            Good ideas deserve great design ✨ Let's bring yours to life 🚀
          </h2>

          {/* CTA */}
          <a
            href="mailto:sanket.donekar@gmail.com"
            className="relative overflow-hidden px-8 py-3.5 rounded-full border border-white/30 text-base font-medium tracking-[-0.01em] text-white hover:bg-white/8 transition-colors"
          >
            <span className="btn-shine pointer-events-none absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            Book a Free Call
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
