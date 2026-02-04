

import { Link } from "react-router-dom";
import ExpertiseCarousel from "@/components/ExpertiseCarousel";
import TextReveal from "@/components/TextReveal";
import { Dribbble, Linkedin, Check } from "lucide-react";
import AnimatedLink from "@/components/AnimatedLink";


const Index = () => {
  // Configuration for GIF backgrounds
  // Replace these paths with your actual GIF paths when you have them
  const heroBackgroundGif = ""; // e.g. "/assets/hero-background.gif"
  const footerBackgroundGif = ""; // e.g. "/assets/footer-background.gif"

  // Use hero GIF background if path is provided
  const heroClassName = `hero-section ${heroBackgroundGif ? "hero-with-gif-bg" : ""}`;
  // Use footer GIF background if path is provided
  const footerClassName = `footer ${footerBackgroundGif ? "footer-with-gif-bg" : ""}`;


  return (
    <div className="portfolio-container ">
      {/* Header/Navigation */}
      <header className="header">
        <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="logo ">
            <Link to="/"><img className="w-12" src="/lovable-uploads/logo.png" alt="SD" /></Link>

          </div>
          <nav className="navigation">
            <ul>
              <li><AnimatedLink href="#works">Works</AnimatedLink></li>
              <li><AnimatedLink to="/about" target="_blank" rel="noopener noreferrer">About</AnimatedLink></li>
              <li><AnimatedLink href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</AnimatedLink></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className={heroClassName}
        style={heroBackgroundGif ? { backgroundImage: `url(${heroBackgroundGif})` } : {}}
      >
        <div className="hero-content max-w-[1200px] mx-auto w-full">
          <div className="greeting flex items-center gap-2 mb-4">
            <TextReveal text="Hello there" className="text-xl md:text-2xl lg:text-4xl font-normal text-black" />
            <span className="text-xl md:text-2xl lg:text-4xl animate-wave origin-bottom-right inline-block">👋</span>
          </div>
          <span className="intro">
            <TextReveal text="I'm" />
            <span className="name opacity-0 animate-fade-in inline-block ml-2 mr-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>Sanket</span>
            <TextReveal text=" a creative ux designer focused on crafting functional and visually stunning experiences." delay={300} />
          </span>
          <div className="position">
            <TextReveal text="UX Designer @ RedBeryl Tech | Previously @ Esofcode & KnackBe Tech" className="text-gray-700 text-xl mt-16" delay={600} />
          </div>
        </div>
        <div className="scroll-indicator">
          <a href="#works" aria-label="Scroll to works">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="works-section max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="px-12 mb-12">
          <TextReveal text="Selected Works" className="section-title text-3xl font-medium" />
        </div>

        {/* Project 1 */}
        <div className="project-card ">
          <div className="project-content">
            <div className="project-image">
              <img src="/lovable-uploads/Design system.png" alt="Design System" />
            </div>
            <div className="project-details">
              <TextReveal text="AI-Powered UI Design System" className="project-title text-2xl font-bold mb-4 block" />
              <div className="project-highlights mb-6 space-y-2 text-gray-700">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-black/60 mt-1 shrink-0" strokeWidth={2} />
                  <TextReveal text="Designed an AI-driven component library for scalable and consistent UI development." delay={200} />
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-black/60 mt-1 shrink-0" strokeWidth={2} />
                  <TextReveal text="Automated 80% of the manual component design process using AI-driven tools." delay={300} />
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-black/60 mt-1 shrink-0" strokeWidth={2} />
                  <TextReveal text="Reduced design-to-development handoff time by 50%." delay={400} />
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-black/60 mt-1 shrink-0" strokeWidth={2} />
                  <TextReveal text="Integrated Lovable.ai and Supabase to create a seamless design-to-development workflow." delay={500} />
                </div>
              </div>
              <Link to="/projects/designsystem" target="_blank" rel="noopener noreferrer" className="read-more">Read More →</Link>
              {/* <Link to="" className="read-more disabled-link"  onClick={(e) => e.preventDefault()}  aria-disabled="true">
  <span className="lock-icon">🔒</span> Read More
</Link> */}
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div className="project-content">
            <div className="project-image">
              <img src="/lovable-uploads/filenow1.jpg" alt="VState Filings – Compliance Management Platform (B2B)" />
            </div>
            <div className="project-details">
              <TextReveal text="VState Filings – Compliance Management Platform" className="project-title text-2xl font-bold mb-4 block" />
              <div className="project-highlights mb-6 space-y-2 text-gray-700">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-black/60 mt-1 shrink-0" strokeWidth={2} />
                  <TextReveal text="Developed a full-fledged web application to streamline compliance and filing services for businesses." delay={200} />
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-black/60 mt-1 shrink-0" strokeWidth={2} />
                  <TextReveal text="Engineered an efficient order management system for handling client filings, tracking compliance deadlines, and assigning tasks." delay={300} />
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-black/60 mt-1 shrink-0" strokeWidth={2} />
                  <TextReveal text="Implemented a structured role-based access system for seamless collaboration between employees, clients, and admins." delay={400} />
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-black/60 mt-1 shrink-0" strokeWidth={2} />
                  <TextReveal text="Integrated automated notifications, order status updates, and compliance reminders to enhance operational efficiency." delay={500} />
                </div>
              </div>
              <Link to="/projects/vstate" target="_blank" rel="noopener noreferrer" className="read-more">Read More →</Link>
            </div>
          </div>
        </div>


        {/* Project 3 */}
        <div className="project-card">
          <div className="project-content">
            <div className="project-image">
              <img src="/lovable-uploads/whatsapp-feature.jpg" alt="WhatsApp – Quick Voice Note Transcription" />
            </div>
            <div className="project-details">
              <TextReveal text="WhatsApp – Quick Voice Note Transcription" className="project-title text-2xl font-bold mb-4 block" />
              <div className="project-highlights mb-6 space-y-2 text-gray-700">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-black/60 mt-1 shrink-0" strokeWidth={2} />
                  <TextReveal text="Developed a UX/UI concept to enhance WhatsApp's voice messaging experience with AI-powered transcription." delay={200} />
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-black/60 mt-1 shrink-0" strokeWidth={2} />
                  <TextReveal text="Designed a frictionless transcription toggle for improved accessibility and user control." delay={300} />
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-black/60 mt-1 shrink-0" strokeWidth={2} />
                  <TextReveal text="Ensured seamless integration within WhatsApp’s chat interface while srctaining design consistency." delay={400} />
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-black/60 mt-1 shrink-0" strokeWidth={2} />
                  <TextReveal text="Refined the user flow to display transcriptions dynamically upon voice note playback." delay={500} />
                </div>
              </div>
              <Link to="/projects/whatsapp" target="_blank" rel="noopener noreferrer" className="read-more">Read More →</Link>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <div className="project-content">
            <div className="project-image">
              <img src="/lovable-uploads/langlang.png" alt="LangLang - Language learning app concept" />
            </div>
            <div className="project-details">
              <TextReveal text="Concept - Language learning app" className="project-title text-2xl font-bold mb-4 block" />
              <div className="project-highlights mb-6 space-y-2 text-gray-700">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-black/60 mt-1 shrink-0" strokeWidth={2} />
                  <TextReveal text="User-centered learning approach with interactive exercises, personalized learning paths, and AI-driven recommendations." delay={200} />
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-black/60 mt-1 shrink-0" strokeWidth={2} />
                  <TextReveal text="Gamification & engagement strategies." delay={300} />
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-black/60 mt-1 shrink-0" strokeWidth={2} />
                  <TextReveal text="Practice through voice recognition, and contextual quizzes, making learning immersive and enjoyable." delay={400} />
                </div>
              </div>
              <Link to="/projects/langlang" target="_blank" rel="noopener noreferrer" className="read-more">Read More →</Link>
            </div>
          </div>
        </div>


        <div className="project-card">
          <div className="project-content">
            <div className="project-image">
              <img src="/lovable-uploads/snackhackheader.jpg" alt="Holachef Ecosystem" />
            </div>
            <div className="project-details">
              <TextReveal text="Snack Hack - Decode Your Snacks, Instantly" className="project-title text-2xl font-bold mb-4 block" />
              <div className="project-highlights mb-6 space-y-2 text-gray-700">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-black/60 mt-1 shrink-0" strokeWidth={2} />
                  <TextReveal text="Instant Barcode Scanning: Quickly analyzes packaged foods and returns results in seconds." delay={200} />
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-black/60 mt-1 shrink-0" strokeWidth={2} />
                  <TextReveal text="Personalized Health Scoring: Adjusts food ratings based on individual dietary needs, restrictions, or goals." delay={300} />
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-black/60 mt-1 shrink-0" strokeWidth={2} />
                  <TextReveal text="Ingredient Transparency: Flags harmful or controversial ingredients like trans fats, high fructose corn syrup, or synthetic additives." delay={400} />
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-black/60 mt-1 shrink-0" strokeWidth={2} />
                  <TextReveal text="Clean UI for Quick Decisions: Minimalist, color-coded product cards simplify comparison shopping." delay={500} />
                </div>
              </div>
              <Link to="/projects/snackhack" target="_blank" rel="noopener noreferrer" className="read-more">Read More →</Link>
            </div>
          </div>
        </div>
      </section>

      <ExpertiseCarousel />

      {/* Footer */}
      <footer
        className={footerClassName}
        style={footerBackgroundGif ? { backgroundImage: `url(${footerBackgroundGif})` } : {}}
      >
        <div className="footer-content max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="mb-4 text-left">
            <TextReveal text="Like what you see??" className="footer-title text-3xl font-medium" />
          </div>
          <h2 className="footer-title">View my <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">resume</a>, get in touch 👋</h2>
          {/* <p className="footer-text">
            View my <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="resume-link">resume</a>, get in touch 👋
          </p> */}
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

export default Index;
