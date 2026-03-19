

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExpertiseCarousel from "@/components/ExpertiseCarousel";
import TextReveal from "@/components/TextReveal";
import { Dribbble, Linkedin, Check, ArrowUpRight, Moon, Sun } from "lucide-react";
import AnimatedLink from "@/components/AnimatedLink";
import { RevealOnScroll } from "@/components/RevealOnScroll";
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

  const [isDark, setIsDark] = useState(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') === 'dark';
    }
    return true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
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
              className="text-5xl md:text-7xl lg:text-[88px] leading-[1.05] tracking-tight text-foreground font-heading"
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
          <TextReveal text="Selected Works" className="section-title text-5xl md:text-6xl font-medium tracking-tight font-heading" />
        </div>

        <div className="flex flex-col gap-12 md:gap-24 w-full relative pb-12">
          {/* Project 1 */}
          <div className="w-full sticky top-24 z-10">
            <div className="group relative w-full flex flex-col md:flex-row gap-8 lg:gap-12 items-center p-6 md:p-8 lg:p-10 bg-card dark:bg-[#1A1A1A] border border-border/50 dark:border-white/5 rounded-[40px] hover:shadow-xl transition-all duration-500 overflow-hidden">
              
              <div className="w-full md:w-1/2 lg:w-[55%] h-full shrink-0 order-1">
                <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[450px] rounded-[30px] overflow-hidden bg-muted/20">
                  <img src="/lovable-uploads/langlang.png" alt="LangLang-Language Learning App" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-[45%] flex flex-col justify-center order-2">
                <div className="flex gap-3 mb-6 flex-wrap">
                   <span className="px-4 py-1.5 opacity-80 bg-foreground text-background text-xs font-bold tracking-widest uppercase rounded-full">EdTech</span>
                   <span className="px-4 py-1.5 bg-muted dark:bg-white/5 border border-border dark:border-white/10 text-foreground dark:text-muted-foreground text-xs font-bold tracking-widest uppercase rounded-full">Mobile App</span>
                </div>
                
                <h3 className="project-title text-3xl md:text-4xl lg:text-5xl font-medium mb-6 tracking-tight text-foreground font-heading">
                  LangLang-Language Learning App
                </h3>
                <p className="text-foreground/70 text-lg md:text-xl font-normal mb-8 leading-relaxed">
                  A user-centered approach to language learning featuring interactive exercises and AI-driven recommendations.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10 w-full max-w-sm">
                   <div className="bg-muted/40 dark:bg-white/5 border border-border/40 dark:border-white/5 rounded-2xl p-4 flex flex-col justify-center">
                       <h4 className="text-3xl font-bold text-foreground font-heading mb-1">+40%</h4>
                       <span className="text-xs font-medium text-muted-foreground">User Engagement</span>
                   </div>
                   <div className="bg-muted/40 dark:bg-white/5 border border-border/40 dark:border-white/5 rounded-2xl p-4 flex flex-col justify-center">
                       <h4 className="text-3xl font-bold text-foreground font-heading mb-1">3x</h4>
                       <span className="text-xs font-medium text-muted-foreground">Faster Onboarding</span>
                   </div>
                </div>

                <Link to="/projects/langlang" className="inline-flex items-center gap-2 bg-foreground dark:bg-transparent text-background dark:text-foreground border border-transparent dark:border-foreground rounded-full px-8 py-4 text-sm font-medium transition-all self-start group/btn">
                  <span className="relative overflow-hidden h-[1.2em] block">
                    <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/btn:-translate-y-full">
                      <span className="block">View Process</span>
                      <span className="block absolute top-full left-0 opacity-50">View Process</span>
                    </span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="w-full sticky top-32 z-20">
            <div className="group relative w-full flex flex-col md:flex-row gap-8 lg:gap-12 items-center p-6 md:p-8 lg:p-10 bg-card dark:bg-[#1A1A1A] border border-border/50 dark:border-white/5 rounded-[40px] hover:shadow-xl transition-all duration-500 overflow-hidden">
              
              <div className="w-full md:w-1/2 lg:w-[55%] h-full shrink-0 order-1">
                <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[450px] rounded-[30px] overflow-hidden bg-muted/20">
                  <img src="/lovable-uploads/Snack Hack Hero.png" alt="SnackHack" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-[45%] flex flex-col justify-center order-2">
                <div className="flex gap-3 mb-6 flex-wrap">
                   <span className="px-4 py-1.5 opacity-80 bg-foreground text-background text-xs font-bold tracking-widest uppercase rounded-full">HealthTech</span>
                   <span className="px-4 py-1.5 bg-muted dark:bg-white/5 border border-border dark:border-white/10 text-foreground dark:text-muted-foreground text-xs font-bold tracking-widest uppercase rounded-full">Scanner Core</span>
                </div>
                
                <h3 className="project-title text-3xl md:text-4xl lg:text-5xl font-medium mb-6 tracking-tight text-foreground font-heading">
                  Snack Hack - Decode Your Snacks
                </h3>
                <p className="text-foreground/70 text-lg md:text-xl font-normal mb-8 leading-relaxed">
                  Instant barcode scanning to quickly analyze packaged foods and get personalized health scores.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10 w-full max-w-sm">
                   <div className="bg-muted/40 dark:bg-white/5 border border-border/40 dark:border-white/5 rounded-2xl p-4 flex flex-col justify-center">
                       <h4 className="text-3xl font-bold text-foreground font-heading mb-1">4.8</h4>
                       <span className="text-xs font-medium text-muted-foreground">Average App Rating</span>
                   </div>
                   <div className="bg-muted/40 dark:bg-white/5 border border-border/40 dark:border-white/5 rounded-2xl p-4 flex flex-col justify-center">
                       <h4 className="text-3xl font-bold text-foreground font-heading mb-1">10k+</h4>
                       <span className="text-xs font-medium text-muted-foreground">Scans Processed</span>
                   </div>
                </div>

                <PasswordProtectedProject to="/projects/snackhack">
                  <div className="inline-flex items-center gap-2 bg-foreground dark:bg-transparent text-background dark:text-foreground border border-transparent dark:border-foreground rounded-full px-8 py-4 text-sm font-medium transition-all self-start group/btn">
                    <span className="relative overflow-hidden h-[1.2em] block">
                      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/btn:-translate-y-full">
                        <span className="block">🔒 View Process</span>
                        <span className="block absolute top-full left-0 opacity-50">🔒 View Process</span>
                      </span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </div>
                </PasswordProtectedProject>
              </div>
            </div>
          </div>

          {/* Project 3b */}
          <div className="w-full sticky top-40 z-30">
            <div className="group relative w-full flex flex-col md:flex-row gap-8 lg:gap-12 items-center p-6 md:p-8 lg:p-10 bg-card dark:bg-[#1A1A1A] border border-border/50 dark:border-white/5 rounded-[40px] hover:shadow-xl transition-all duration-500 overflow-hidden">
              
              <div className="w-full md:w-1/2 lg:w-[55%] h-full shrink-0 order-1">
                <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[450px] rounded-[30px] overflow-hidden bg-muted/20">
                  <img src="/lovable-uploads/filenow3.jpg" alt="vState — Compliance Workflow Platform UX Case Study" className="w-full h-full object-cover top mb transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-[45%] flex flex-col justify-center order-2">
                <div className="flex gap-3 mb-6 flex-wrap">
                   <span className="px-4 py-1.5 opacity-80 bg-foreground text-background text-xs font-bold tracking-widest uppercase rounded-full">B2B SaaS</span>
                   <span className="px-4 py-1.5 bg-muted dark:bg-white/5 border border-border dark:border-white/10 text-foreground dark:text-muted-foreground text-xs font-bold tracking-widest uppercase rounded-full">Compliance</span>
                </div>
                
                <h3 className="project-title text-3xl md:text-4xl lg:text-5xl font-medium mb-6 tracking-tight text-foreground font-heading">
                  vState — Workflow Platform
                </h3>
                <p className="text-foreground/70 text-lg md:text-xl font-normal mb-8 leading-relaxed">
                  A service design case study covering research, workflow design, and UX strategy for a B2B compliance SaaS.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10 w-full max-w-sm">
                   <div className="bg-muted/40 dark:bg-white/5 border border-border/40 dark:border-white/5 rounded-2xl p-4 flex flex-col justify-center">
                       <h4 className="text-3xl font-bold text-foreground font-heading mb-1">-50%</h4>
                       <span className="text-xs font-medium text-muted-foreground">Compliance Errors</span>
                   </div>
                   <div className="bg-muted/40 dark:bg-white/5 border border-border/40 dark:border-white/5 rounded-2xl p-4 flex flex-col justify-center">
                       <h4 className="text-3xl font-bold text-foreground font-heading mb-1">2.5x</h4>
                       <span className="text-xs font-medium text-muted-foreground">Filing Speed</span>
                   </div>
                </div>

                <PasswordProtectedProject to="/projects/vstatecompliance">
                  <div className="inline-flex items-center gap-2 bg-foreground dark:bg-transparent text-background dark:text-foreground border border-transparent dark:border-foreground rounded-full px-8 py-4 text-sm font-medium transition-all self-start group/btn">
                    <span className="relative overflow-hidden h-[1.2em] block">
                      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/btn:-translate-y-full">
                        <span className="block">🔒 View Case Study</span>
                        <span className="block absolute top-full left-0 opacity-50">🔒 View Case Study</span>
                      </span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </div>
                </PasswordProtectedProject>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="w-full sticky top-48 z-40">
            <div className="group relative w-full flex flex-col md:flex-row gap-8 lg:gap-12 items-center p-6 md:p-8 lg:p-10 bg-card dark:bg-[#1A1A1A] border border-border/50 dark:border-white/5 rounded-[40px] hover:shadow-xl transition-all duration-500 overflow-hidden">
              
              <div className="w-full md:w-1/2 lg:w-[55%] h-full shrink-0 order-1">
                <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[450px] rounded-[30px] overflow-hidden bg-muted/20">
                  <img src="/lovable-uploads/whatsapp-feature.jpg" alt="WhatsApp – Quick Voice Note Transcription" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-[45%] flex flex-col justify-center order-2">
                <div className="flex gap-3 mb-6 flex-wrap">
                   <span className="px-4 py-1.5 opacity-80 bg-foreground text-background text-xs font-bold tracking-widest uppercase rounded-full">Concept</span>
                   <span className="px-4 py-1.5 bg-muted dark:bg-white/5 border border-border dark:border-white/10 text-foreground dark:text-muted-foreground text-xs font-bold tracking-widest uppercase rounded-full">Social UX</span>
                </div>
                
                <h3 className="project-title text-3xl md:text-4xl lg:text-5xl font-medium mb-6 tracking-tight text-foreground font-heading">
                  WhatsApp – Voice NLP
                </h3>
                <p className="text-foreground/70 text-lg md:text-xl font-normal mb-8 leading-relaxed">
                  A UX/UI concept designed to enhance WhatsApp's voice messaging experience with AI-powered transcription.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10 w-full max-w-sm">
                   <div className="bg-muted/40 dark:bg-white/5 border border-border/40 dark:border-white/5 rounded-2xl p-4 flex flex-col justify-center">
                       <h4 className="text-3xl font-bold text-foreground font-heading mb-1">1 Tap</h4>
                       <span className="text-xs font-medium text-muted-foreground">Voice to Text</span>
                   </div>
                   <div className="bg-muted/40 dark:bg-white/5 border border-border/40 dark:border-white/5 rounded-2xl p-4 flex flex-col justify-center">
                       <h4 className="text-3xl font-bold text-foreground font-heading mb-1">98%</h4>
                       <span className="text-xs font-medium text-muted-foreground">NLP Integrity</span>
                   </div>
                </div>

                <Link to="/projects/whatsapp" className="inline-flex items-center gap-2 bg-foreground dark:bg-transparent text-background dark:text-foreground border border-transparent dark:border-foreground rounded-full px-8 py-4 text-sm font-medium transition-all self-start group/btn">
                  <span className="relative overflow-hidden h-[1.2em] block">
                    <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/btn:-translate-y-full">
                      <span className="block">View Process</span>
                      <span className="block absolute top-full left-0 opacity-50">View Process</span>
                    </span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="w-full sticky top-56 z-50">
            <div className="group relative w-full flex flex-col md:flex-row gap-8 lg:gap-12 items-center p-6 md:p-8 lg:p-10 bg-card dark:bg-[#1A1A1A] border border-border/50 dark:border-white/5 rounded-[40px] hover:shadow-xl transition-all duration-500 overflow-hidden">
              
              <div className="w-full md:w-1/2 lg:w-[55%] h-full shrink-0 order-1">
                <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[450px] rounded-[30px] overflow-hidden bg-muted/20">
                  <img src="/lovable-uploads/Design system.png" alt="Design System" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-[45%] flex flex-col justify-center order-2">
                <div className="flex gap-3 mb-6 flex-wrap">
                   <span className="px-4 py-1.5 opacity-80 bg-foreground text-background text-xs font-bold tracking-widest uppercase rounded-full">System</span>
                   <span className="px-4 py-1.5 bg-muted dark:bg-white/5 border border-border dark:border-white/10 text-foreground dark:text-muted-foreground text-xs font-bold tracking-widest uppercase rounded-full">Automation</span>
                </div>
                
                <h3 className="project-title text-3xl md:text-4xl lg:text-5xl font-medium mb-6 tracking-tight text-foreground font-heading">
                  AI-Powered UI System
                </h3>
                <p className="text-foreground/70 text-lg md:text-xl font-normal mb-8 leading-relaxed">
                  An AI-driven component library created for highly scalable and consistent UI development automation.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10 w-full max-w-sm">
                   <div className="bg-muted/40 dark:bg-white/5 border border-border/40 dark:border-white/5 rounded-2xl p-4 flex flex-col justify-center">
                       <h4 className="text-3xl font-bold text-foreground font-heading mb-1">200+</h4>
                       <span className="text-xs font-medium text-muted-foreground">Tokens Configured</span>
                   </div>
                   <div className="bg-muted/40 dark:bg-white/5 border border-border/40 dark:border-white/5 rounded-2xl p-4 flex flex-col justify-center">
                       <h4 className="text-3xl font-bold text-foreground font-heading mb-1">20hrs</h4>
                       <span className="text-xs font-medium text-muted-foreground">Saved Per Week</span>
                   </div>
                </div>

                <Link to="/projects/designsystem" className="inline-flex items-center gap-2 bg-foreground dark:bg-transparent text-background dark:text-foreground border border-transparent dark:border-foreground rounded-full px-8 py-4 text-sm font-medium transition-all self-start group/btn">
                  <span className="relative overflow-hidden h-[1.2em] block">
                    <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/btn:-translate-y-full">
                      <span className="block">View Process</span>
                      <span className="block absolute top-full left-0 opacity-50">View Process</span>
                    </span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
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
            <TextReveal text="Like what you see??" className="footer-title text-3xl font-medium tracking-tight text-foreground font-heading" />
          </div>
          <h2 className="footer-title font-heading">View my <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">resume</a>, get in touch 👋</h2>
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
