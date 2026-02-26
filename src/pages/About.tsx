import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextReveal from "@/components/TextReveal";
import { Star, Layout, BarChart, Lightbulb, Users, MessageSquare, Clock, ArrowUpRight, Dribbble, Linkedin } from "lucide-react";
import AnimatedLink from "@/components/AnimatedLink";

const VideoCard = ({
  src,
  isMobile,
  activeVideoSrc,
  onPlay
}: {
  src: string;
  isMobile: boolean;
  activeVideoSrc: string | null;
  onPlay: (src: string | null) => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isActive = activeVideoSrc === src;

  useEffect(() => {
    if (!isMobile || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;

    if (videoRef.current) {
      if (isActive) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => {
          // Auto-play might fail if not interacted, but click handler ensures interaction
        });
      } else {
        videoRef.current.pause();
        videoRef.current.muted = true;
      }
    }
  }, [isActive, isMobile]);

  const handleMobileClick = () => {
    if (!isMobile) return;

    if (isActive) {
      onPlay(null); // Pause if clicking active
    } else {
      onPlay(src); // Play this one
    }
  };

  return (
    <div ref={containerRef} className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 group relative" onClick={handleMobileClick}>
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loop
        playsInline
        muted={isMobile ? !isActive : !isHovered} // Mobile: only unmute if active, Desktop: unmute on hover
        onMouseEnter={(e) => {
          if (!isMobile) {
            setIsHovered(true);
            e.currentTarget.play();
          }
        }}
        onMouseLeave={(e) => {
          if (!isMobile) {
            setIsHovered(false);
            e.currentTarget.pause();
          }
        }}
      />
      <div
        className={`absolute inset-0 bg-black/70 transition-opacity duration-300 pointer-events-none 
          ${isMobile
            ? (isInView || isActive ? 'opacity-0' : 'opacity-100')
            : 'group-hover:opacity-0'
          }`}
      />
    </div>
  );
};

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeVideoSrc, setActiveVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="about-container bg-white min-h-screen font-sans selection:bg-black selection:text-white">
      {/* Header/Navigation */}
      <header className="header about-header border-b border-gray-100/50">
        <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="logo">
            <Link to="/"><img className="w-12" src="/lovable-uploads/logo.png" alt="SD" /></Link>
          </div>
          <nav className="navigation">
            <ul>
              <li><AnimatedLink href="/#works">Works</AnimatedLink></li>
              <li><AnimatedLink to="/about" className="active">About</AnimatedLink></li>
              <li>
                <AnimatedLink
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </AnimatedLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="pt-40 pb-20 px-8 lg:px-12 max-w-[1200px] mx-auto w-full">

        {/* Intro Section - Split Layout */}
        <section className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="order-2 lg:order-1">
            <TextReveal
              as="h1"
              text="About me"
              className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 block text-[#0F0F0F]"
              delay={0}
            />
            <div className="text-lg text-gray-600 leading-relaxed space-y-6 max-w-xl">
              <TextReveal
                as="p"
                text="I'm Sanket, a UX Designer based in Pune with a background in Engineering and Business Analytics."
                delay={100}
              />
              <TextReveal
                as="p"
                text="My background in Information Technology and MBA in Business Analytics gives me a unique perspective on product design. I don't just see pixels; I see systems, business goals, and user needs working in harmony."
                delay={200}
              />
              <TextReveal
                as="p"
                text="I specialize in creating visually refined, highly usable interfaces that elevate both product value and user satisfaction. My process blends hands-on collaboration with users, continuous iteration, and a sharp eye for detail."
                delay={300}
              />
              <TextReveal
                as="p"
                text="Beyond my professional work, I have a deep love for music. When I'm not designing, you'll find me singing or playing the guitar, indulging in my creative side."
                delay={400}
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col justify-end h-full pt-12 lg:pt-32">
            <TextReveal
              as="h2"
              text="I'm driven by curiosity, creativity, and the belief that great design always starts with empathy."
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tighter text-right text-[#0F0F0F] ml-auto max-w-2xl"
              delay={200}
              stagger={20}
            />
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <VideoCard
            src="/videos/Azzur.mp4"
            isMobile={isMobile}
            activeVideoSrc={activeVideoSrc}
            onPlay={setActiveVideoSrc}
          />
          <VideoCard
            src="/videos/Show.mp4"
            isMobile={isMobile}
            activeVideoSrc={activeVideoSrc}
            onPlay={setActiveVideoSrc}
          />
          <VideoCard
            src="/videos/College.mp4"
            isMobile={isMobile}
            activeVideoSrc={activeVideoSrc}
            onPlay={setActiveVideoSrc}
          />
          <VideoCard
            src="/videos/Song.mov"
            isMobile={isMobile}
            activeVideoSrc={activeVideoSrc}
            onPlay={setActiveVideoSrc}
          />
        </section>

        {/* Experience Section */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-gray-100 pt-20">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <TextReveal
                as="h3"
                text="My experience"
                className="text-3xl font-bold tracking-tighter mb-4 block text-[#0F0F0F]"
              />
              <TextReveal
                as="p"
                text="A quick look at my path so far, from startups to enterprises, leading design projects that connect real user needs with meaningful business results."
                className="text-gray-500 leading-relaxed max-w-sm"
                delay={100}
              />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            <div className="group">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-1 pt-1">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold text-xs">
                    RB
                  </div>
                </div>
                <div className="md:col-span-11 border-b border-gray-100 pb-12 group-last:border-0">
                  <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
                    <div className="md:col-span-7">
                      <h4 className="text-xl font-bold text-[#0F0F0F] mb-1">RedBeryl Tech</h4>
                      <h5 className="text-lg font-medium text-gray-800 mb-4">UX Designer</h5>
                      <p className="text-gray-600 leading-relaxed text-base">Design and improve the complete user experience for our digital products, focusing on creating interfaces that are easy to use, accessible to everyone, and visually appealing.</p>
                    </div>
                    <div className="md:col-span-3 md:text-right">
                      <span className="text-sm text-gray-500 font-mono">2024 - Present</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-1 pt-1">
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xs">
                    EC
                  </div>
                </div>
                <div className="md:col-span-11 border-b border-gray-100 pb-12 group-last:border-0">
                  <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
                    <div className="md:col-span-7">
                      <h4 className="text-xl font-bold text-[#0F0F0F] mb-1">Esofcode</h4>
                      <h5 className="text-lg font-medium text-gray-800 mb-4">UI/UX Designer</h5>
                      <p className="text-gray-600 leading-relaxed text-base">Ensure the creation of user-friendly & intuitively understandable interfaces for our users. Conduct research on competitors & industry best practices to optimize readability, comprehension, accessibility & usability.</p>
                    </div>
                    <div className="md:col-span-3 md:text-right">
                      <span className="text-sm text-gray-500 font-mono">2023 - 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-1 pt-1">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs">
                    KB
                  </div>
                </div>
                <div className="md:col-span-11 border-b border-gray-100 pb-12 group-last:border-0">
                  <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
                    <div className="md:col-span-7">
                      <h4 className="text-xl font-bold text-[#0F0F0F] mb-1">KnackBe</h4>
                      <h5 className="text-lg font-medium text-gray-800 mb-4">UI Designer</h5>
                      <p className="text-gray-600 leading-relaxed text-base">Manage the entire design process, from initial sketches & wireframes to interactive prototypes & polished final designs.</p>
                    </div>
                    <div className="md:col-span-3 md:text-right">
                      <span className="text-sm text-gray-500 font-mono">2021 - 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-gray-100 pt-20">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <TextReveal
                as="h3"
                text="My education"
                className="text-3xl font-bold tracking-tighter mb-4 block text-[#0F0F0F]"
              />
              <TextReveal
                as="p"
                text="Formal training that shaped my analytical and design thinking."
                className="text-gray-500 leading-relaxed max-w-sm"
                delay={100}
              />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-1 pt-1">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                  PU
                </div>
              </div>
              <div className="md:col-span-11 border-b border-gray-100 pb-12 group-last:border-0">
                <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
                  <div className="md:col-span-7">
                    <h4 className="text-xl font-bold text-[#0F0F0F] mb-1">Pune University</h4>
                    <h5 className="text-lg font-medium text-gray-800 mb-4">MBA in Business Analytics</h5>
                    <p className="text-gray-600 leading-relaxed text-base">Focused on data-driven decision-making and strategic business insights, complementing my design skills with a strong analytical foundation.</p>
                  </div>
                  <div className="md:col-span-3 md:text-right">
                    <span className="text-sm text-gray-500 font-mono">2022 - 2024</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-1 pt-1">
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xs">
                  MIT
                </div>
              </div>
              <div className="md:col-span-11 border-b border-gray-100 pb-12 group-last:border-0">
                <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
                  <div className="md:col-span-7">
                    <h4 className="text-xl font-bold text-[#0F0F0F] mb-1">MIT Pune</h4>
                    <h5 className="text-lg font-medium text-gray-800 mb-4">B.E. in Information Technology</h5>
                    <p className="text-gray-600 leading-relaxed text-base">Gained a solid understanding of software development, system architecture, and technology principles, providing a technical backbone to my design approach.</p>
                  </div>
                  <div className="md:col-span-3 md:text-right">
                    <span className="text-sm text-gray-500 font-mono">2016 - 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section - Full Width */}
        <section className="mb-32 -mx-8 lg:-mx-12 px-8 lg:px-12 py-24 bg-gray-50">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-12 mb-8 flex justify-end">
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400">MY VISION OF GREAT DESIGN</span>
            </div>

            <div className="lg:col-span-4">
              <TextReveal
                as="h4"
                text="Product design is not just pixels or flows, but a shared language between disciplines."
                className="text-2xl font-semibold leading-tight text-[#0F0F0F]"
                delay={0}
              />
            </div>
            <div className="lg:col-span-4">
              <TextReveal
                as="h4"
                text="A strong foundation of reusable systems supports meaningful, human-centered experiences."
                className="text-2xl font-semibold leading-tight text-[#0F0F0F]"
                delay={100}
              />
            </div>
            <div className="lg:col-span-4">
              <TextReveal
                as="h4"
                text="Great product design turns ideas chaos into coherence."
                className="text-2xl font-semibold leading-tight text-[#0F0F0F]"
                delay={200}
              />
            </div>
          </div>
        </section>

        {/* Hard Skills Section */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <TextReveal
              as="h3"
              text="What do I specialize as a designer?"
              className="text-4xl font-bold tracking-tighter mb-8 block text-[#0F0F0F] leading-tight"
            />
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400 block mb-8">HARD SKILLS</span>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="mb-6"><Star className="w-8 h-8 text-[#0F0F0F]" strokeWidth={1.5} /></div>
                <h4 className="text-lg font-bold mb-3">Conversational AI</h4>
                <p className="text-gray-600 text-sm leading-relaxed">I design human-centered AI experiences by unifying tools and making complex logic feel intuitive.</p>
              </div>
              <div>
                <div className="mb-6"><Layout className="w-8 h-8 text-[#0F0F0F]" strokeWidth={1.5} /></div>
                <h4 className="text-lg font-bold mb-3">Design Systems</h4>
                <p className="text-gray-600 text-sm leading-relaxed">I build robust, token-based systems with clear documentation and accessibility standards.</p>
              </div>
              <div>
                <div className="mb-6"><BarChart className="w-8 h-8 text-[#0F0F0F]" strokeWidth={1.5} /></div>
                <h4 className="text-lg font-bold mb-3">Dashboards</h4>
                <p className="text-gray-600 text-sm leading-relaxed">I craft dashboards that go beyond data display, turning complex metrics into actionable insights.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Soft Skills Section */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-20 border-t border-gray-100">
          <div className="lg:col-span-4">
            <TextReveal
              as="h3"
              text="What are my skills beyond craft & execution?"
              className="text-4xl font-bold tracking-tighter mb-8 block text-[#0F0F0F] leading-tight"
            />
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400 block mb-8">SOFT SKILLS</span>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="mb-6"><Lightbulb className="w-6 h-6 text-[#0F0F0F]" strokeWidth={1.5} /></div>
                <h4 className="text-base font-bold mb-2">Strategy</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Uncover product vision in ambiguous environments.</p>
              </div>
              <div>
                <div className="mb-6"><Users className="w-6 h-6 text-[#0F0F0F]" strokeWidth={1.5} /></div>
                <h4 className="text-base font-bold mb-2">Collaboration</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Align stakeholders with clarity and respect.</p>
              </div>
              <div>
                <div className="mb-6"><MessageSquare className="w-6 h-6 text-[#0F0F0F]" strokeWidth={1.5} /></div>
                <h4 className="text-base font-bold mb-2">Communication</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Translate technical decisions into user value.</p>
              </div>
              <div>
                <div className="mb-6"><Clock className="w-6 h-6 text-[#0F0F0F]" strokeWidth={1.5} /></div>
                <h4 className="text-base font-bold mb-2">Prioritization</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Smart, timely decisions that keep the team moving.</p>
              </div>
            </div>
          </div>
        </section>


      </main>

      {/* Footer */}
      <footer className="footer" style={{ backgroundImage: "url('/lovable-uploads/gradient.gif')" }}>
        <div className="footer-content max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="mb-4 text-left">
            <TextReveal text="Like what you see??" className="footer-title text-3xl font-medium" />
          </div>
          <h2 className="footer-title">View my <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">resume</a>, get in touch 👋</h2>
          <div className="social-links flex gap-4 mt-4">
            <a href="https://dribbble.com/sanket_works" target="_blank" rel="noopener noreferrer" aria-label="Dribbble" className="text-gray-600 hover:text-[#0F0F0F] transition-colors">
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

export default About;
