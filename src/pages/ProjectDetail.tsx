
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { projects } from "@/data/projects";
import { BlockRenderer } from "@/components/ProjectBlocks";
import { ExternalLink, ChevronLeft, Dribbble, Linkedin } from "lucide-react";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectId ? projects[projectId] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project && projectId) {
      console.error(`Project with ID ${projectId} not found`);
    }
  }, [projectId, project]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-8 bg-[#F6F3EF]">
        <h1 className="text-4xl font-bold tracking-tighter text-[#0F0F0F] mb-4">Project Not Found</h1>
        <p className="text-gray-500 mb-8">Sorry, the project you're looking for doesn't exist.</p>
        <Link to="/" className="text-[#0F0F0F] font-bold border-b-2 border-gray-900 pb-1">Back to Home</Link>
      </div>
    );
  }

  const isSnackHack = project.id === 'snackhack';

  return (
    <div
      className="project-detail-container transition-colors duration-700 min-h-screen"
      style={{
        background: isSnackHack ? '#FFF9F5' : '#FFFFFF',
        //@ts-ignore
        '--accent-color': project.accentColor || '#3b82f6'
      }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-5 flex items-center group bg-white/70 backdrop-blur-md border-b border-gray-100/50 shadow-sm transition-all duration-300">
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center gap-2 text-[#0F0F0F]">
            <div className="w-10 h-10 border border-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all duration-500">
              <ChevronLeft className="w-5 h-5" />
            </div>
            <span className="font-bold tracking-tight uppercase text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">Back</span>
          </Link>
        </div>
        <div className="flex-1 flex justify-center text-center text-xs font-bold tracking-widest uppercase text-gray-400">
          Project Case Study
        </div>
        <div className="flex-1 flex justify-end"></div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-40 pb-20">
        {/* Project Hero Title */}
        <div className="mb-24">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#0F0F0F] mb-12 tracking-tighter">
              {project.title}
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-16">
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl leading-relaxed">
                {project.intro}
              </p>

              <div className="flex flex-col gap-3 min-w-[200px] border-l border-gray-200 pl-8 pb-2">
                <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Role</div>
                <div className="text-xl font-bold text-[#0F0F0F]">{project.role}</div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* HERO IMAGE */}
        <RevealOnScroll delay={200}>
          <div className={`rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 mb-32 group ${isSnackHack ? 'p-5 bg-white/50 w-fit mx-auto' : 'bg-gray-100 aspect-[16/9] w-full'}`}>
            <img
              src={project.headerImage}
              alt={project.title}
              className={`w-full transition-transform duration-[3000ms] group-hover:scale-105 ${isSnackHack ? 'h-auto object-contain' : 'h-full object-cover'}`}
            />
          </div>
        </RevealOnScroll>

        {/* METADATA GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16 mb-40 border-t border-gray-200 pt-20">
          {project.industry && (
            <div className="space-y-3">
              <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Industry</div>
              <div className="text-lg font-bold text-[#0F0F0F]">{project.industry}</div>
            </div>
          )}
          {project.duration && (
            <div className="space-y-3">
              <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Duration</div>
              <div className="text-lg font-bold text-[#0F0F0F]">{project.duration || project.timeline}</div>
            </div>
          )}
          {project.type && (
            <div className="space-y-3">
              <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Type</div>
              <div className="text-lg font-bold text-[#0F0F0F]">{project.type}</div>
            </div>
          )}
          {project.platforms && (
            <div className="space-y-3">
              <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Platform</div>
              <div className="text-lg font-bold text-[#0F0F0F]">{project.platforms}</div>
            </div>
          )}
          {project.links && project.links[0]?.url && (
            <div className="space-y-3">
              <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Resources</div>
              <a
                href={project.links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-[#0F0F0F] flex items-center gap-2 group/link"
              >
                {project.links[0].text}
                <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </a>
            </div>
          )}
        </div>

        {/* CONTENT BLOCKS */}
        {project.blocks && project.blocks.length > 0 && (
          <div className="space-y-40 pb-40">
            {project.blocks.map((block, index) => (
              <BlockRenderer key={index} block={block} accentColor={project.accentColor} />
            ))}
          </div>
        )}

        {/* LEGACY CONTENT (Fall-back) */}
        {!project.blocks && project.sections && (
          <div className="max-w-4xl mx-auto space-y-24 pb-40">
            {project.sections.map((section, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold tracking-tighter text-[#0F0F0F]">{section.title}</h2>
                  <p className="text-xl text-gray-600 leading-relaxed leading-relaxed">{section.content}</p>
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
              <h2 className="text-3xl font-medium text-[#0F0F0F]">Like what you see??</h2>
            </RevealOnScroll>
          </div>
          <h2 className="footer-title">
            View my <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">resume</a>, get in touch 👋
          </h2>
          <div className="social-links flex gap-4 mt-4">
            <a href="https://dribbble.com/sanket_works" target="_blank" rel="noopener noreferrer" aria-label="Dribbble" className="text-gray-600 hover:text-black transition-colors">
              <Dribbble className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sanketworks/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-600 transition-colors">
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
