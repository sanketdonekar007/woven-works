
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  // State to track scroll position for animations
  const [scrollPosition, setScrollPosition] = useState(0);
  const resumeUrl = "https://drive.google.com/your-resume-link"; // Replace with your actual resume link

  // Configuration for GIF backgrounds
  // Replace these paths with your actual GIF paths when you have them
  const heroBackgroundGif = ""; // e.g. "/assets/hero-background.gif"
  const footerBackgroundGif = ""; // e.g. "/assets/footer-background.gif"
  
  // Use hero GIF background if path is provided
  const heroClassName = `hero-section ${heroBackgroundGif ? "hero-with-gif-bg" : ""}`;
  // Use footer GIF background if path is provided
  const footerClassName = `footer ${footerBackgroundGif ? "footer-with-gif-bg" : ""}`;

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Waving hand animation
  const [waveAngle, setWaveAngle] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setWaveAngle((prev) => (prev > 20 ? 0 : prev + 10));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const waveStyle = {
    display: "inline-block",
    transform: `rotate(${waveAngle}deg)`,
    transformOrigin: "bottom center",
    transition: "transform 0.3s ease",
  };

  return (
    <div className="portfolio-container">
      {/* Header/Navigation */}
      <header className="header">
        <div className="logo">
          <Link to="/">S</Link>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#works">Works</a></li>
            <li><Link to="/about" target="_blank" rel="noopener noreferrer">About</Link></li>
            <li><a href={resumeUrl} target="_blank" rel="noopener noreferrer">Resume</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        className={heroClassName}
        style={heroBackgroundGif ? { backgroundImage: `url(${heroBackgroundGif})` } : {}}
      >
        <div className="hero-content">
          <h2 className="greeting">Hello there <span style={waveStyle}>👋</span></h2>
          <h1 className="intro">
            I'm <span className="name">Sanket</span>, a creative product designer focused on crafting functional and visually stunning experiences.
          </h1>
          <p className="position">
            Product Designer @ RedBeryl Tech | Previously @ Esofcode & KnackBe Tech
          </p>
        </div>
        <div className="scroll-indicator">
          <a href="#works" aria-label="Scroll to works">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="works-section">
        <h2 className="section-title">Selected Works</h2>
        
        {/* Project 1 */}
        <div className="project-card">
          <div className="project-content">
            <div className="project-image">
              <img src="/lovable-uploads/99e14d1a-62c3-4b1e-99f5-b50205857b23.png" alt="Norton 360 Design System" />
            </div>
            <div className="project-details">
              <h3 className="project-title">Spam Protection features and design system for Norton 360</h3>
              <ul className="project-highlights">
                <li>Product Designer for Norton 360's UI/UX and design patterns</li>
                <li>Primary designer for new Spam Protection features impacting 100M+ users</li>
                <li>Developed a white-label modular design system allowing one design to work for third-party partners</li>
              </ul>
              <Link to="/projects/norton" target="_blank" rel="noopener noreferrer" className="read-more">Read More →</Link>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div className="project-content">
            <div className="project-image">
              <img src="/lovable-uploads/1348148a-34d9-4c36-82f7-528a102a6dd5.png" alt="Google Ad Manager Design System" />
            </div>
            <div className="project-details">
              <h3 className="project-title">Google - Design System for Ad Manager</h3>
              <ul className="project-highlights">
                <li>Designer for Ad Google Manager Component</li>
                <li>Collaborated with the visual design and UX lead to implement design strategies</li>
                <li>Designed and deployed iterative versions of the design system</li>
              </ul>
              <Link to="/projects/google" target="_blank" rel="noopener noreferrer" className="read-more">Read More →</Link>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <div className="project-content">
            <div className="project-image">
              <img src="/lovable-uploads/e52d6904-806f-4aee-a7c6-6ee1b4fe4a8c.png" alt="Zoho Sheet Mobile Applications" />
            </div>
            <div className="project-details">
              <h3 className="project-title">Zoho - Mobile applications for Zoho Sheet</h3>
              <ul className="project-highlights">
                <li>UX product designer for Zoho Sheet on mobile devices for iOS and Android</li>
                <li>Studied and improved the product in close collaboration with data users on mobile platforms</li>
              </ul>
              <Link to="/projects/zoho" target="_blank" rel="noopener noreferrer" className="read-more">Read More →</Link>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <div className="project-content">
            <div className="project-image">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400" alt="Holachef Ecosystem" />
            </div>
            <div className="project-details">
              <h3 className="project-title">Holachef - Ecosystem of applications for a FoodTech startup</h3>
              <ul className="project-highlights">
                <li>Worked on an ecosystem of consumer-facing and operational applications</li>
                <li>Designed and shipped the primary consumer-facing website, operations, and applications tracking +500 SKUs</li>
              </ul>
              <Link to="/projects/holachef" target="_blank" rel="noopener noreferrer" className="read-more">Read More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className={footerClassName}
        style={footerBackgroundGif ? { backgroundImage: `url(${footerBackgroundGif})` } : {}}
      >
        <div className="footer-content">
          <h2 className="footer-title">Like what you see??</h2>
          <p className="footer-text">
            View my <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="resume-link">resume</a>, get in touch 👋
          </p>
          <div className="social-links">
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C14.32 4 16.45 4.95 18.06 6.44C16.87 8.08 15.16 9.34 13.16 10.21C12.34 8.43 11.37 6.74 10.27 5.13C10.82 5.04 11.41 4 12 4ZM7.68 5.72C8.83 7.38 9.86 9.16 10.74 11.04C8.35 11.74 5.76 12.11 3.08 12.11C3.03 12.08 3 12.04 3 12C3 9.28 4.87 6.97 7.68 5.72ZM4.04 14.12C7.14 14.12 10.13 13.69 12.87 12.85C13.14 13.4 13.4 13.95 13.63 14.5C11.91 15.02 10.36 16.15 9.14 17.57C7.83 18.96 6.88 20.68 6.4 22.55C4.96 21.12 4 19.07 4 16.8C4 15.89 4.07 14.99 4.24 14.12H4.04ZM12 20C11.61 20 11.23 19.98 10.86 19.93C11.4 18.35 12.16 16.95 13.32 15.75C14.38 14.66 15.69 13.76 17.21 13.22C17.65 14.89 17.91 16.64 17.98 18.44C16.4 19.43 14.3 20 12 20ZM19.34 16.38C19.25 15.04 19.04 13.74 18.73 12.5C19.96 12.01 21.34 11.77 22.76 11.76C22.91 11.83 22.99 11.91 22.99 12C23 13.94 22.39 15.75 21.35 17.19C20.97 16.87 20.14 16.68 19.34 16.38Z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM9 17H6.477V10H9V17ZM7.694 8.717C6.923 8.717 6.408 8.203 6.408 7.517C6.408 6.831 6.922 6.317 7.779 6.317C8.55 6.317 9.065 6.831 9.065 7.517C9.065 8.203 8.551 8.717 7.694 8.717ZM18 17H15.558V13.174C15.558 11.116 14.313 10.872 14.024 10.872C13.735 10.872 12.791 11.035 12.791 13.174C12.791 13.585 12.791 17 12.791 17H10.395V10H12.791V10.977C13.153 10.407 13.95 10 15.066 10C16.181 10 18 10.977 18 13.174V17Z"/>
              </svg>
            </a>
          </div>
          <p className="copyright">© 2024 Sanket • Made with ❤️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
