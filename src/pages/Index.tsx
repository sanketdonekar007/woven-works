

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExpertiseCarousel from "@/components/ExpertiseCarousel";
import TextReveal from "@/components/TextReveal";
import { Dribbble, Linkedin, Check, ArrowUpRight, Moon, Sun } from "lucide-react";
import AnimatedLink from "@/components/AnimatedLink";
import { PasswordProtectedProject } from "@/components/PasswordProtectedProject";


const Index = () => {
  // Configuration for GIF backgrounds
  // Replace these paths with your actual GIF paths when you have them
  const heroBackgroundGif = ""; // e.g. "/assets/hero-background.gif"
  const footerBackgroundGif = ""; // e.g. "/assets/footer-background.gif"

  // Use hero GIF background if path is provided
  const heroClassName = `hero-section ${heroBackgroundGif ? "hero-with-gif-bg" : ""}`;
  // Use footer GIF background if path is provided
  const footerClassName = `footer ${footerBackgroundGif ? "footer-with-gif-bg" : ""}`;

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Set dark theme as default
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };


  return (
    <div className="portfolio-container ">
      {/* Header/Navigation */}
      <header className="header">
        <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="logo ">
            <Link to="/"><div className="logo-image" aria-label="SD" /></Link>

          </div>
          <nav className="navigation flex items-center gap-6">
            <ul className="flex items-center gap-6">
              <li><AnimatedLink href="#works">Works</AnimatedLink></li>
              <li><AnimatedLink to="/about">About</AnimatedLink></li>
              <li><AnimatedLink href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</AnimatedLink></li>
            </ul>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-foreground"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className={heroClassName}
        style={heroBackgroundGif ? { backgroundImage: `url(${heroBackgroundGif})` } : {}}
      >
        <div className="hero-content max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col mb-6">
            <img src="/lovable-uploads/cheeze.png" className="w-16 h-16 md:w-[103px] md:h-[103px] rounded-[16px] md:rounded-[32px] object-cover mb-4" alt="cheeze" />
            <div className="greeting flex items-center gap-2">
              <h2 className="text-[24px] font-normal tracking-tight text-foreground">
                Hi <span className="inline-block animate-wave origin-[70%_70%]">👋</span> I'm Sanket,
              </h2>
            </div>
          </div>
          <div className="intro w-full mb-10">
            <TextReveal
              text="A UX Designer making things easy for people and helping businesses grow."
              delay={300}
              className="text-5xl md:text-7xl lg:text-[88px] leading-[1.05] tracking-tight font-medium text-foreground"
              highlightWords={["UX", "Designer"]}
              highlightClassName="text-primary"
            />
          </div>
          <div className="mt-6 mb-16">
            <TextReveal text="I specialize in B2B SaaS, Enterprise Software and Consumer Apps." className="text-muted-foreground text-xl md:text-2xl font-normal tracking-tight" delay={500} />
          </div>
          <div className="scale-100 opacity-100">
            <div className="relative w-full overflow-hidden max-w-[100vw] -ml-4">
              <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
              <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

              <div className="flex animate-scroll whitespace-nowrap min-w-max">
                {[...Array(2)].flatMap(() => [
                  "User Experience Design",
                  "Product Thinking",
                  "User-Centered Design",
                  "Visual Design",
                  "Competitive Analysis",
                  "Responsive Design",
                  "Wireframing",
                  "Interaction Design",
                  "Prototyping",
                  "Design System"
                ]).map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="inline-block px-8 py-4 ml-6 bg-card border border-border shadow-sm hover:shadow-md transition-shadow duration-300 text-foreground rounded-3xl text-lg font-medium whitespace-nowrap shrink-0"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="works-section max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="px-6 mb-16">
          <TextReveal text="Selected Works" className="section-title text-5xl md:text-6xl font-medium tracking-tight" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-content">
              <div className="project-image">
                <img src="/lovable-uploads/langlang.png" alt="LangLang-Language Learning App" />
              </div>
              <div className="project-details">
                <TextReveal text="LangLang-Language Learning App" className="project-title text-3xl md:text-4xl font-medium mb-4 tracking-tight text-foreground block" />
                <p className="text-foreground/60 text-lg font-normal mb-10">A user-centered approach to language learning featuring interactive exercises and AI-driven recommendations.</p>
                <Link to="/projects/langlang" className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-8 py-4 text-sm font-medium hover:opacity-90 transition-opacity self-start mt-auto">
                  View Process <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-content">
              <div className="project-image">
                <img src="/lovable-uploads/Snack Hack Hero.png" alt="SnackHack" />
              </div>
              <div className="project-details">
                <TextReveal text="Snack Hack - Decode Your Snacks, Instantly" className="project-title text-3xl md:text-4xl font-medium mb-4 tracking-tight text-foreground block" />
                <p className="text-foreground/60 text-lg font-normal mb-10">Instant barcode scanning to quickly analyze packaged foods and get personalized health scores.</p>
                <PasswordProtectedProject to="/projects/snackhack">
                  <div className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-8 py-4 text-sm font-medium hover:opacity-90 transition-opacity self-start mt-auto">
                    View Process <ArrowUpRight className="w-4 h-4" />
                  </div>
                </PasswordProtectedProject>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-content">
              <div className="project-image">
                <img src="/lovable-uploads/filenow1.jpg" alt="VState Filings – Compliance Management Platform (B2B)" />
              </div>
              <div className="project-details">
                <TextReveal text="VState Filings – Compliance Management Platform" className="project-title text-3xl md:text-4xl font-medium mb-4 tracking-tight text-foreground block" />
                <p className="text-foreground/60 text-lg font-normal mb-10">A full-fledged web application developed to streamline compliance and filing services for businesses.</p>
                <PasswordProtectedProject to="/projects/vstate">
                  <div className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-8 py-4 text-sm font-medium hover:opacity-90 transition-opacity self-start mt-auto">
                    View Process <ArrowUpRight className="w-4 h-4" />
                  </div>
                </PasswordProtectedProject>
              </div>
            </div>
          </div>


          {/* Project 4 */}
          <div className="project-card">
            <div className="project-content">
              <div className="project-image">
                <img src="/lovable-uploads/whatsapp-feature.jpg" alt="WhatsApp – Quick Voice Note Transcription" />
              </div>
              <div className="project-details">
                <TextReveal text="WhatsApp – Quick Voice Note Transcription" className="project-title text-3xl md:text-4xl font-medium mb-4 tracking-tight text-foreground block" />
                <p className="text-foreground/60 text-lg font-normal mb-10">A UX/UI concept designed to enhance WhatsApp's voice messaging experience with AI-powered transcription.</p>
                <Link to="/projects/whatsapp" className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-8 py-4 text-sm font-medium hover:opacity-90 transition-opacity self-start mt-auto">
                  View Process <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="project-card ">
            <div className="project-content">
              <div className="project-image">
                <img src="/lovable-uploads/Design system.png" alt="Design System" />
              </div>
              <div className="project-details">
                <TextReveal text="AI-Powered UI Design System" className="project-title text-3xl md:text-4xl font-medium mb-4 tracking-tight text-foreground block" />
                <p className="text-foreground/60 text-lg font-normal mb-10">An AI-driven component library created for highly scalable and consistent UI development automation.</p>
                <Link to="/projects/designsystem" className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-8 py-4 text-sm font-medium hover:opacity-90 transition-opacity self-start mt-auto">
                  View Process <ArrowUpRight className="w-4 h-4" />
                </Link>
                {/* <Link to="" className="read-more disabled-link"  onClick={(e) => e.preventDefault()}  aria-disabled="true">
  <span className="lock-icon">🔒</span> Read More
</Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <ExpertiseCarousel /> */}

      {/* Footer */}
      <footer
        className={footerClassName}
        style={footerBackgroundGif ? { backgroundImage: `url(${footerBackgroundGif})` } : {}}
      >
        <div className="footer-content max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="mb-4 text-left">
            <TextReveal text="Like what you see??" className="footer-title text-3xl font-medium tracking-tight text-foreground" />
          </div>
          <h2 className="footer-title">View my <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">resume</a>, get in touch 👋</h2>
          {/* <p className="footer-text">
            View my <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="resume-link">resume</a>, get in touch 👋
          </p> */}
          <div className="social-links flex gap-4 mt-6">
            <a href="https://dribbble.com/sanket_works" target="_blank" rel="noopener noreferrer" aria-label="Dribbble" className="text-foreground/60 hover:text-foreground transition-colors">
              <Dribbble className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sanketworks/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-foreground/60 hover:text-blue-500 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="copyright">© 2025 Sanket • Made with figma + lovable ❤️</p>
        </div>
      </footer>
    </div >
  );
};

export default Index;
