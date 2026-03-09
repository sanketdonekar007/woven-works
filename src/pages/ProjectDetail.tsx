
import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { projects } from "@/data/projects";
import { BlockRenderer } from "@/components/ProjectBlocks";
import { ExternalLink, ChevronLeft, Dribbble, Linkedin } from "lucide-react";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectId ? projects[projectId] : null;

  const [activeSection, setActiveSection] = useState<number>(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project && projectId) {
      console.error(`Project with ID ${projectId} not found`);
    }
  }, [projectId, project]);

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
        <h1 className="text-4xl font-bold tracking-tight leading-[1.1] text-foreground mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">Sorry, the project you're looking for doesn't exist.</p>
        <Link to="/" className="text-foreground font-bold border-b-2 border-foreground pb-1">Back to Home</Link>
      </div>
    );
  }

  const isSnackHack = project.id === 'snackhack';

  return (
    <div
      className="project-detail-container transition-colors duration-700 min-h-screen bg-background text-foreground"
      style={{
        //@ts-ignore
        '--accent-color': project.accentColor || '#3b82f6'
      }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-5 flex items-center group bg-background/80 backdrop-blur-md border-b border-border shadow-sm transition-all duration-300">
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center gap-2 text-foreground">
            <div className="w-10 h-10 border border-foreground rounded-full flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-500">
              <ChevronLeft className="w-5 h-5" />
            </div>
            <span className="font-bold tracking-tight uppercase text-xs opacity-0 group-hover:opacity-100 group-hover:text-primary transition-opacity duration-500">Back</span>
          </Link>
        </div>
        <div className="flex-1 flex justify-center text-center text-xs font-bold tracking-widest uppercase text-muted-foreground">
          {project.navTitle || project.title}
        </div>
        <div className="flex-1 flex justify-end"></div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-40 pb-20">
        {/* Project Hero Title */}
        <div className="mb-24">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-12 tracking-tight leading-[1.1]">
              {project.title}
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-16">
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl leading-relaxed">
                {project.intro}
              </p>

              <div className="flex flex-col gap-3 min-w-[200px] border-l border-border pl-8 pb-2">
                <div className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">Role</div>
                <div className="text-xl font-bold text-foreground">{project.role}</div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* HERO IMAGE */}
        <RevealOnScroll delay={200}>
          <div className={`rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl dark:shadow-none mb-32 group ${isSnackHack ? 'p-5 bg-background w-fit mx-auto' : 'bg-muted aspect-[16/9] w-full'}`}>
            <img
              src={project.headerImage}
              alt={project.title}
              className={`w-full transition-transform duration-[3000ms] group-hover:scale-105 ${isSnackHack ? 'h-auto object-contain' : 'h-full object-cover'}`}
            />
          </div>
        </RevealOnScroll>

        {/* METADATA GRID */}
        <div className="flex flex-wrap justify-center gap-x-12 md:gap-x-20 gap-y-16 mb-40 border-t border-border pt-20">
          {project.industry && (
            <div className="space-y-3">
              <div className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">Industry</div>
              <div className="text-lg font-bold text-foreground">{project.industry}</div>
            </div>
          )}
          {project.duration && (
            <div className="space-y-3">
              <div className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">Duration</div>
              <div className="text-lg font-bold text-foreground">{project.duration || project.timeline}</div>
            </div>
          )}
          {project.type && (
            <div className="space-y-3">
              <div className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">Type</div>
              <div className="text-lg font-bold text-foreground">{project.type}</div>
            </div>
          )}
          {project.platforms && (
            <div className="space-y-3">
              <div className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">Platform</div>
              <div className="text-lg font-bold text-foreground">{project.platforms}</div>
            </div>
          )}
          {project.clientWebsite && (
            <div className="space-y-3">
              <div className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">Client Website</div>
              <a
                href={project.clientWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-foreground flex items-center gap-2 group/link hover:text-blue-600 transition-colors"
              >
                {project.clientWebsite.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </a>
            </div>
          )}
          {project.links && project.links[0]?.url && (
            <div className="space-y-3">
              <div className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">Resources</div>
              <a
                href={project.links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-foreground flex items-center gap-2 group/link"
              >
                {project.links[0].text}
                <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </a>
            </div>
          )}
        </div>

        {/* CONTENT BLOCKS */}
        {project.blocks && project.blocks.length > 0 && (
          <div className="flex relative gap-12 lg:gap-24">
            {/* Sidebar Navigation */}
            <div className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-40 flex flex-col gap-4">
                {(() => {
                  let lastTitledIndex = 0;
                  const activeTitledIndex = project.blocks.reduce((acc, block, idx) => {
                    if (block.title) lastTitledIndex = idx;
                    if (idx === activeSection) return lastTitledIndex;
                    return acc;
                  }, 0);

                  return project.blocks.map((block, index) => {
                    if (!block.title) return null;

                    const isActive = activeTitledIndex === index;
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}
                        className={`flex items-center gap-4 cursor-pointer group transition-all duration-500 py-1 ${isActive ? 'opacity-100 translate-x-2' : 'opacity-40 hover:opacity-70 hover:translate-x-1'
                          }`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 flex-shrink-0 ${isActive ? 'bg-foreground scale-[1.75]' : 'bg-transparent group-hover:bg-gray-400'
                          }`} />
                        <span className={`text-xs font-bold uppercase transition-all duration-500 leading-tight ${isActive ? 'text-foreground tracking-[0.15em]' : 'text-muted-foreground tracking-[0.1em]'
                          }`}>
                          {block.title}
                        </span>
                      </div>
                    );
                  });
                })()}
              </div>
            </div>

            {/* Blocks Content */}
            <div className="flex-1 space-y-40 pb-40 max-w-5xl">
              {project.blocks.map((block, index) => (
                <div
                  key={index}
                  id={`section-${index}`}
                  data-index={index}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className="scroll-mt-32"
                >
                  <BlockRenderer block={block} accentColor={project.accentColor} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LEGACY CONTENT (Fall-back) */}
        {!project.blocks && project.sections && (
          <div className="max-w-4xl mx-auto space-y-24 pb-40">
            {project.sections.map((section, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold tracking-tight leading-[1.1] text-foreground">{section.title}</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed leading-relaxed">{section.content}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="mb-4 text-left">
            <RevealOnScroll>
              <h2 className="text-3xl font-medium text-foreground">Like what you see??</h2>
            </RevealOnScroll>
          </div>
          <h2 className="footer-title">
            View my <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">resume</a>, get in touch 👋
          </h2>
          <div className="social-links flex gap-4 mt-4">
            <a href="https://dribbble.com/sanket_works" target="_blank" rel="noopener noreferrer" aria-label="Dribbble" className="text-muted-foreground hover:text-black transition-colors">
              <Dribbble className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sanketworks/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-blue-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="copyright">© 2025 Sanket • Made with figma + lovable ❤️</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
