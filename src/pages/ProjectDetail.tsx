
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { RevealOnScroll } from "../components/RevealOnScroll";
import AnimatedLink from "@/components/AnimatedLink";
import { projects } from "@/data/projects";
import { BlockRenderer } from "@/components/ProjectBlocks";
import { VideoCarousel } from "@/components/VideoCarousel";
import { Dribbble, Linkedin } from "lucide-react";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const resumeUrl = "https://drive.google.com/file/d/1p0QgBKIbkBFpyf8r9aY4qmHxXZScjgtb/view?usp=drive_link"; // Replace with your actual resume link

  const project = projectId ? projects[projectId] : null;

  useEffect(() => {
    // Scroll to top when project page loads
    window.scrollTo(0, 0);

    // Log error if project doesn't exist
    if (!project && projectId) {
      console.error(`Project with ID ${projectId} not found`);
    }
  }, [projectId, project]);

  if (!project) {
    return (
      <div className="error-container">
        <h1>Project Not Found</h1>
        <p>Sorry, the project you're looking for doesn't exist.</p>
        <Link to="/" className="back-link">Back to Home</Link>
      </div>
    );
  }


  return (
    <div className={`project-detail-container ${['vstate', 'whatsapp'].includes(projectId || '') ? 'bg-slate-50' : ''}`}>

      {/* Header/Navigation */}
      <header className="header project-header ">
        <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="logo">
            <Link to="/"><img className="w-12" src="/lovable-uploads/logo.png" alt="SD" /></Link>

          </div>
          <nav className="navigation">
            <ul>
              <li><AnimatedLink to="/#works">Works</AnimatedLink></li>
              <li><AnimatedLink to="/about">About</AnimatedLink></li>
              <li><AnimatedLink href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</AnimatedLink></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Project Hero */}
      {['vstate', 'whatsapp'].includes(projectId || '') ? (
        <div className="pt-32 pb-16 max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="container mx-auto">
            <div className="mb-12">
              <RevealOnScroll>
                <div className="w-20 h-1 bg-blue-600 mb-8 rounded-full"></div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900 mb-4">{project.title}</h1>
                {project.subtitle && <h2 className="text-xl md:text-2xl text-slate-500 mb-8 font-light">{project.subtitle}</h2>}
                <p className="text-lg md:text-xl text-slate-600 w-full leading-relaxed mb-8 max-w-3xl">{project.intro}</p>
                {project.quote && (
                  <blockquote className="border-l-4 border-blue-500 pl-6 italic text-xl text-slate-700 my-8 py-2 bg-slate-50/50 rounded-r-2xl">
                    "{project.quote}"
                  </blockquote>
                )}
              </RevealOnScroll>
            </div>

            <div className="mb-20 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
              <RevealOnScroll delay={200}>
                <img src={project.headerImage} alt={project.title} className="w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-700" />
              </RevealOnScroll>
            </div>

            <RevealOnScroll delay={400} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8 w-full">
              {project.role && (
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-2 h-full justify-center text-center items-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
                  <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Role</h2>
                  <div className="text-slate-800 font-bold text-base leading-snug">{project.role}</div>
                </div>
              )}

              {project.industry && (
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-2 h-full justify-center text-center items-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
                  <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Industry</h2>
                  <div className="text-slate-800 font-bold text-base leading-snug">{project.industry}</div>
                </div>
              )}

              {(project.duration || project.timeline) && (
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-2 h-full justify-center text-center items-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
                  <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{project.duration ? "Duration" : "Timeline"}</h2>
                  <div className="text-slate-800 font-bold text-base leading-snug">{project.duration || project.timeline}</div>
                </div>
              )}

              {project.type && (
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-2 h-full justify-center text-center items-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
                  <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Type</h2>
                  <div className="text-slate-800 font-bold text-base leading-snug">{project.type}</div>
                </div>
              )}

              {project.budget && (
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-2 h-full justify-center text-center items-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
                  <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Budget</h2>
                  <div className="text-slate-800 font-bold text-base leading-snug">{project.budget}</div>
                </div>
              )}

              {project.platforms && (
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-2 h-full justify-center text-center items-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
                  <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Platform</h2>
                  <div className="text-slate-800 font-bold text-base leading-snug">{project.platforms}</div>
                </div>
              )}

              {/* {project.focus && ( // Removed Focus to make 5 cols symmetrical or just keep using grid 
                 <div className="...">...</div>
              )} */}
            </RevealOnScroll>
          </div>
        </div>
      ) : (
        <div className="project-hero max-w-[1200px] mx-auto px-4 md:px-8">
          <RevealOnScroll>
            <img src={project.headerImage} alt={project.title} className="project-hero-image " />
          </RevealOnScroll>
          <div className="project-hero-content ">
            <div>
              <div className=" project-meta ">
                <div className=" w-full">
                  <RevealOnScroll delay={200}>
                    <h1 className="project-title ">{project.title}</h1>
                    <p className="project-intro ">{project.intro}</p>
                  </RevealOnScroll>
                </div>

                {/* <div className="project-meta ">
  
            </div> */}
                <div className="">
                  <RevealOnScroll delay={400}>
                    {project.role && <div className="project-role"><strong>Role:</strong> {project.role}</div>}
                    {project.timeline && <div className="project-timeline"><strong>Timeline:</strong> {project.timeline}</div>}
                    {project.timeline && <div className="project-timeline"><strong>Platforms:</strong> {project.platforms}</div>}
                    {project.links && project.links.length > 0 && (
                      <div className="project-timeline">
                        <strong>Links:</strong>{" "}
                        {project.links.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline ml-2"
                          >
                            {link.text}
                          </a>
                        ))}
                      </div>
                    )}
                  </RevealOnScroll>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project Content */}
      {project.blocks && project.blocks.length > 0 ? (
        <div className="vstate-content min-[1400px]:px-72 max-[1400px]:px-4 space-y-24 pb-24">
          {project.blocks.map((block, index) => (
            <BlockRenderer key={index} block={block} />
          ))}
        </div>
      ) : (
        <div className="min-[1400px]:px-72 max-[1400px]:px-4">

          {/* Legacy Section Rendering */}
          {project.sections && project.sections.map((section, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="project-section">
                {section.title && <h2 className="section-title">{section.title}</h2>}

                <p className="section-content">{section.content}</p>
                {section.heighlight && <p className="section-heighlight">{section.heighlight}</p>}

                {section.links && (
                  <div className="section-links ">
                    {section.links.map((link, idx) => (
                      <p key={idx}>
                        <a href={link.url} className="text-blue-500 hover:underline">
                          {link.text}
                        </a>
                      </p>
                    ))}
                  </div>
                )}

                <ul className="section-lists">
                  {section.lists?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {section.image && (
                  <div className="section-image  max-h-[800px] object-fit:contain">
                    <img className="object-fit:fill max-h-[800px]" src={section.image} alt={section.title || `Project section ${index + 1}`} />
                  </div>

                )}

              </div>
            </RevealOnScroll>
          ))}


        </div>
      )}

      {/* More Projects */}
      <div className="more-projects min-[1400px]:px-72 max-[1400px]:px-4">
        <h2>More Projects</h2>
        <div className="project-grid ">
          {Object.values(projects)
            .filter(p => p.id !== project.id)
            .slice(0, 3)
            .map(p => (
              <Link to={`/projects/${p.id}`} key={p.id} className="related-project">
                <img src={p.headerImage} alt={p.title} />
                <h3>{p.title}</h3>

              </Link>
            ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer project-footer">
        <div className="footer-content min-[1400px]:px-72">
          <h2 className="footer-title">Like what you see??</h2>
          <p className="footer-text text-left ">
            View my <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">resume</a>, get in touch 👋
          </p>
          <div className="social-links flex gap-4 mt-4">
            <a href="https://dribbble.com/sanket_works" target="_blank" rel="noopener noreferrer" aria-label="Dribbble" className="text-gray-400 hover:text-pink-500 transition-colors">
              <Dribbble className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sanketworks/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="copyright">© 2025 Sanket • Made with figma + lovable ❤️</p>
        </div>
      </footer>
    </div >
  );

};



export default ProjectDetail;
