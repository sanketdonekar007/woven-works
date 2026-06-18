
import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { projects } from "@/data/projects";
import { BlockRenderer } from "@/components/ProjectBlocks";
import { ExternalLink, ChevronLeft } from "lucide-react";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectId ? projects[projectId] : null;

  const [activeSection, setActiveSection] = useState<number>(-1);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project && projectId) {
      console.error(`Project with ID ${projectId} not found`);
    }
  }, [projectId, project]);

  // Reset to overview (-1) when near top
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 120) setActiveSection(-1);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!project) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveSection(index);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-8 bg-background">
        <h1 className="text-[28px] font-medium tracking-tight leading-[1.1] text-foreground mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">Sorry, the project you're looking for doesn't exist.</p>
        <Link to="/" className="text-foreground font-medium border-b-2 border-foreground pb-1">Back to Home</Link>
      </div>
    );
  }

  const isSnackHack = project.id === 'snackhack';

  // Resolve the active titled block index for sidebar highlighting
  const getActiveTitledIndex = () => {
    if (activeSection === -1) return -1;
    let lastTitledIndex = 0;
    project.blocks?.forEach((block, idx) => {
      if (block.title) lastTitledIndex = idx;
      if (idx === activeSection) return;
    });
    return project.blocks?.reduce((acc, block, idx) => {
      if (block.title) lastTitledIndex = idx;
      if (idx === activeSection) return lastTitledIndex;
      return acc;
    }, 0) ?? 0;
  };

  const activeTitledIndex = getActiveTitledIndex();

  return (
    <div
      data-cs="true"
      className="project-detail-container min-h-screen font-vietnam"
      style={{ background: '#000000', color: '#FFFFFF', ['--accent-color' as any]: project.accentColor || '#3b82f6' }}
    >

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-5 flex items-center backdrop-blur-[12px] transition-all duration-300"
        style={{ background: 'rgba(0,0,0,0.8)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="flex-1 flex justify-start">
          <Link to="/" state={{ restoreScroll: true }} className="flex items-center gap-2.5" style={{ color: '#fff' }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
              <ChevronLeft className="w-3.5 h-3.5" />
            </div>
            <span className="text-[16px] tracking-[0.18em] uppercase font-light" style={{ color: 'rgba(255,255,255,0.45)' }}>Back</span>
          </Link>
        </div>
        <div className="flex-1 flex justify-center text-center text-[16px] tracking-[0.18em] uppercase font-light" style={{ color: 'rgba(255,255,255,0.4)' }}>
          {project.navTitle || project.title}
        </div>
        <div className="flex-1 flex justify-end" />
      </nav>

      {/* Full-width layout with padding */}
      <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 pt-24 pb-20">

        {/* Two-column layout: sidebar + content — from the very top */}
        <div className="flex gap-10 lg:gap-14 xl:gap-20 relative">

          {/* LEFT SIDEBAR — sticky, visible from hero */}
          <aside className="hidden lg:block w-44 xl:w-52 flex-shrink-0">
            <div className="sticky top-28 flex flex-col gap-1">

              {/* pt spacer to roughly align with hero title */}
              <div className="h-14" />

              {/* Overview — active during hero */}
              <div
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`flex items-start gap-3 cursor-pointer transition-all duration-300 py-1 ${
                  activeSection === -1 ? 'opacity-100' : 'opacity-40 hover:opacity-65'
                }`}
              >
                <span className="text-[13px] tabular-nums pt-px flex-shrink-0 font-light" style={{ color: activeSection === -1 ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.3)' }}>
                  00
                </span>
                <span className="text-[13px] uppercase leading-tight tracking-[0.12em] font-light" style={{ color: activeSection === -1 ? '#fff' : 'rgba(255,255,255,0.5)' }}>
                  Overview
                </span>
              </div>

              {/* Block-based nav items */}
              {(() => {
                let navCounter = 0;
                return project.blocks?.map((block, index) => {
                  if (!block.title) return null;
                  navCounter++;
                  const chapterNum = String(navCounter).padStart(2, '0');
                  const isActive = activeTitledIndex === index;
                  return (
                    <div
                      key={index}
                      onClick={() => sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                      className={`flex items-start gap-3 cursor-pointer transition-all duration-300 py-1 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-65'}`}
                    >
                      <span className="text-[13px] tabular-nums pt-px flex-shrink-0 font-light" style={{ color: isActive ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.3)' }}>
                        {chapterNum}
                      </span>
                      <span className="text-[13px] uppercase leading-tight tracking-[0.12em] font-light" style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.5)' }}>
                        {block.title}
                      </span>
                    </div>
                  );
                });
              })()}
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="flex-1 min-w-0">

            {/* Project Hero */}
            <div className="mb-20 pt-16">
              <RevealOnScroll>
                <p className="text-[13px] tracking-[0.22em] uppercase font-light mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {project.type || project.industry} · Case Study
                </p>
                <h1 className="text-[44px] md:text-[60px] lg:text-[72px] font-semibold text-white leading-[1.02] mb-10"
                  style={{ letterSpacing: '-0.03em', fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  {project.title}
                </h1>
              </RevealOnScroll>

              <RevealOnScroll delay={100}>
                <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16 pt-10"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <p className="text-[16px] leading-[1.75] font-light max-w-2xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {project.intro}
                  </p>
                  <div className="flex flex-col gap-1.5 min-w-[160px] md:pl-10 flex-shrink-0" style={{ borderLeft: '1px solid rgba(255,255,255,0.08)', paddingLeft: '2.5rem' }}>
                    <span className="text-[13px] tracking-[0.22em] uppercase font-light mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>Role</span>
                    <span className="text-[16px] font-medium text-white leading-snug">{project.role}</span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Hero Image */}
            <RevealOnScroll delay={200}>
              <div className={`overflow-hidden mb-20 group ${isSnackHack ? 'w-fit mx-auto p-5 rounded-[24px]' : 'rounded-[24px] aspect-[16/9] w-full'}`}
                style={{ background: '#161819' }}>
                <img
                  src={project.headerImage}
                  alt={project.title}
                  className={`w-full transition-transform duration-[3000ms] group-hover:scale-105 ${isSnackHack ? 'h-auto object-contain' : 'h-full object-cover'}`}
                />
              </div>
            </RevealOnScroll>

            {/* Metadata Strip */}
            <div className="flex flex-wrap mb-20" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              {project.industry && (
                <div className="py-6 pr-10 mr-10" style={{ borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="text-[13px] tracking-[0.22em] uppercase font-light mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>Industry</div>
                  <div className="text-[15px] font-medium text-white">{project.industry}</div>
                </div>
              )}
              {project.duration && (
                <div className="py-6 pr-10 mr-10" style={{ borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="text-[13px] tracking-[0.22em] uppercase font-light mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>Duration</div>
                  <div className="text-[15px] font-medium text-white">{project.duration}</div>
                </div>
              )}
              {project.type && (
                <div className="py-6 pr-10 mr-10" style={{ borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="text-[13px] tracking-[0.22em] uppercase font-light mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>Type</div>
                  <div className="text-[15px] font-medium text-white">{project.type}</div>
                </div>
              )}
              {project.platforms && (
                <div className="py-6 pr-10 mr-10" style={{ borderRight: project.clientWebsite || project.links?.[0]?.url ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                  <div className="text-[13px] tracking-[0.22em] uppercase font-light mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>Platform</div>
                  <div className="text-[15px] font-medium text-white">{project.platforms}</div>
                </div>
              )}
              {project.clientWebsite && (
                <div className="py-6 pr-10 mr-10" style={{ borderRight: project.links?.[0]?.url ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                  <div className="text-[13px] tracking-[0.22em] uppercase font-light mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>Client</div>
                  <a href={project.clientWebsite} target="_blank" rel="noopener noreferrer"
                    className="text-[15px] font-medium text-white flex items-center gap-1.5 hover:opacity-60 transition-opacity group/link">
                    {project.clientWebsite.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                    <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              )}
              {project.links?.[0]?.url && (
                <div className="py-6">
                  <div className="text-[13px] tracking-[0.22em] uppercase font-light mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>Resources</div>
                  <a href={project.links[0].url} target="_blank" rel="noopener noreferrer"
                    className="text-[15px] font-medium text-white flex items-center gap-1.5 hover:opacity-60 transition-opacity group/link">
                    {project.links[0].text}
                    <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              )}
            </div>

            {/* Content Blocks */}
            {project.blocks && project.blocks.length > 0 && (
              <div className="pb-40 pt-4">
                {project.blocks.map((block, index) => {
                  const getDynamicMargin = () => {
                    if (index === 0) return '';
                    const isVstate = project.id?.includes('vstate');
                    const isNewSection = !!block.title;
                    if (isVstate) return isNewSection ? 'mt-24 md:mt-32' : 'mt-8 md:mt-12';
                    if (isNewSection) return 'mt-32 md:mt-48';
                    if (['image', 'prototype', 'wireframes', 'user-flow-popup'].includes(block.type)) return 'mt-16 md:mt-24';
                    return 'mt-10 md:mt-16';
                  };
                  return (
                    <div
                      key={index}
                      id={`section-${index}`}
                      data-index={index}
                      ref={(el) => (sectionRefs.current[index] = el)}
                      className={`scroll-mt-32 ${getDynamicMargin()}`}
                    >
                      <BlockRenderer block={block} accentColor={project.accentColor} />
                    </div>
                  );
                })}
              </div>
            )}

            {/* Legacy content fallback */}
            {!project.blocks && project.sections && (
              <div className="max-w-3xl space-y-24 pb-40">
                {project.sections.map((section, index) => (
                  <RevealOnScroll key={index} delay={index * 100}>
                    <div className="space-y-6">
                      <h2 className="text-[28px] font-semibold text-white" style={{ letterSpacing: '-0.02em' }}>{section.title}</h2>
                      <p className="text-[16px] leading-[1.75] font-light" style={{ color: 'rgba(255,255,255,0.5)' }}>{section.content}</p>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative min-h-screen flex flex-col overflow-hidden border-t border-white/10">

        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* @ts-ignore */}
          <spline-viewer
            url="https://prod.spline.design/Ewb8vIqWFjVZn1-c/scene.splinecode"
            style={{ width: "100%", height: "100%", display: "block" }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)" }} />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 gap-8 py-24">

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-base font-light tracking-[-0.01em] text-white/60">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available For Work
          </span>

          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-medium leading-[1.2] tracking-[-0.02em] text-white max-w-[720px]">
            Good ideas deserve great design ✨ Let's bring yours to life 🚀
          </h2>

          <a
            href="mailto:sanket.donekar@gmail.com"
            className="relative overflow-hidden px-8 py-3.5 rounded-full text-base font-medium tracking-[-0.01em] text-white hover:bg-white/[0.08] transition-colors"
            style={{ border: '1px solid rgba(255,255,255,0.3)' }}
          >
            <span className="btn-shine pointer-events-none absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            Book a Free Call
          </a>

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

export default ProjectDetail;
