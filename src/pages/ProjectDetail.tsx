
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

interface ProjectData {
  id: string;
  title: string;
  headerImage: string;
  intro: string;
  role?: string;
  timeline?: string;
  sections: {
    title?: string;
    content: string;
    image?: string;
  }[];
}

const projects: Record<string, ProjectData> = {
  norton: {
    id: "norton",
    title: "Spam Protection features and design system for Norton 360",
    headerImage: "/lovable-uploads/99e14d1a-62c3-4b1e-99f5-b50205857b23.png",
    intro: "I worked on the design system and spam protection features for Norton 360, creating a flexible and modular system that could be used across multiple products and partners.",
    role: "Lead Product Designer",
    timeline: "2022 - 2023",
    sections: [
      {
        title: "Project Overview",
        content: "As the lead product designer for Norton 360's UI/UX, I was responsible for creating and implementing design patterns that would be used across the platform. The spam protection features were a key part of this, as they impacted over 100 million users worldwide."
      },
      {
        title: "Design Challenges",
        content: "The main challenge was to create a design system that was modular enough to work for both Norton's own products and their third-party partners. This required a white-label approach that could be easily adapted to different branding guidelines and user interfaces.",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&h=800"
      },
      {
        title: "Process and Methodology",
        content: "I started by conducting extensive user research to understand how people interact with security features in their digital lives. This informed a design approach that balanced security with usability, ensuring that the spam protection features were both effective and easy to use.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=800"
      },
      {
        content: "The final design system included a comprehensive set of components, patterns, and guidelines that could be adapted to different products and partner needs. The spam protection features were integrated seamlessly into the Norton 360 interface, providing users with a sense of security without disrupting their workflow."
      }
    ]
  },
  google: {
    id: "google",
    title: "Google - Design System for Ad Manager",
    headerImage: "/lovable-uploads/1348148a-34d9-4c36-82f7-528a102a6dd5.png",
    intro: "I worked with the Google Ad Manager team to develop a comprehensive design system that improved usability and maintained visual consistency across the platform.",
    role: "Design System Specialist",
    timeline: "2021 - 2022",
    sections: [
      {
        title: "Project Overview",
        content: "As a designer for Google Ad Manager, I was tasked with creating a cohesive design system that would improve the user experience while maintaining Google's visual language. This involved close collaboration with visual designers, UX leads, and engineering teams."
      },
      {
        title: "Design Process",
        content: "My approach began with a thorough audit of existing components and user workflows. I identified inconsistencies and areas for improvement, then worked to create standardized components that could be used across the platform.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800"
      },
      {
        title: "Implementation and Iteration",
        content: "After establishing the core components, I worked with engineers to implement the design system iteratively. This allowed us to gather feedback and make adjustments as needed, ensuring that the system met the needs of both users and internal teams.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=800"
      },
      {
        content: "The final design system for Google Ad Manager improved user satisfaction and reduced development time by providing a clear set of guidelines and reusable components. It continues to evolve based on user feedback and changing business needs."
      }
    ]
  },
  zoho: {
    id: "zoho",
    title: "Zoho - Mobile applications for Zoho Sheet",
    headerImage: "/lovable-uploads/e52d6904-806f-4aee-a7c6-6ee1b4fe4a8c.png",
    intro: "I designed the mobile experience for Zoho Sheet, creating intuitive interfaces for complex spreadsheet functionality on iOS and Android devices.",
    role: "UX Product Designer",
    timeline: "2020 - 2021",
    sections: [
      {
        title: "Project Overview",
        content: "As the UX product designer for Zoho Sheet's mobile applications, I was responsible for translating complex spreadsheet functionality into intuitive mobile interfaces. This project required a deep understanding of user needs and technical constraints across iOS and Android platforms."
      },
      {
        title: "Research and Discovery",
        content: "I began by studying how users interact with spreadsheets on mobile devices, identifying the most common tasks and pain points. This research informed a design approach that prioritized ease of use while preserving the power and flexibility of Zoho Sheet.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=800"
      },
      {
        title: "Design and Collaboration",
        content: "Working closely with data users and mobile development teams, I created and refined design solutions that made complex spreadsheet tasks manageable on small screens. This involved careful consideration of touch interactions, screen real estate, and cross-platform consistency.",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&h=800"
      },
      {
        content: "The final design for Zoho Sheet's mobile applications successfully balanced power with simplicity, allowing users to create, edit, and analyze spreadsheets effectively on their mobile devices. User feedback has been overwhelmingly positive, with many noting the intuitive interface and smooth performance."
      }
    ]
  },
  holachef: {
    id: "holachef",
    title: "Holachef - Ecosystem of applications for a FoodTech startup",
    headerImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800",
    intro: "I designed an integrated ecosystem of applications for Holachef, a FoodTech startup, including consumer-facing interfaces and operational tools.",
    role: "Product Design Lead",
    timeline: "2019 - 2020",
    sections: [
      {
        title: "Project Overview",
        content: "As a designer for Holachef, I was responsible for creating a cohesive ecosystem of applications that supported the company's food delivery service. This included the consumer-facing website, mobile apps, and internal tools for operations management."
      },
      {
        title: "Consumer Interface Design",
        content: "I designed the primary consumer-facing website and mobile applications, focusing on creating an intuitive and appetizing browsing and ordering experience. The design needed to showcase food items effectively while making the ordering process simple and efficient.",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&h=800"
      },
      {
        title: "Operational Tools",
        content: "In parallel, I created operational applications for managing inventory, orders, and deliveries. These tools needed to handle complex workflows and large amounts of data while remaining easy to use in a fast-paced environment.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=800"
      },
      {
        content: "The completed ecosystem successfully supported Holachef's business model, connecting customers with a wide range of food options while providing the operational backbone needed to fulfill orders efficiently. The system tracked over 500 SKUs and processed thousands of orders daily."
      }
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const resumeUrl = "https://drive.google.com/your-resume-link"; // Replace with your actual resume link
  
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
    <div className="project-detail-container">
      {/* Header/Navigation */}
      <header className="header project-header">
        <div className="logo">
          <Link to="/">S</Link>
        </div>
        <nav className="navigation">
          <ul>
            <li><Link to="/#works">Works</Link></li>
            <li><Link to="/about" target="_blank" rel="noopener noreferrer">About</Link></li>
            <li><a href={resumeUrl} target="_blank" rel="noopener noreferrer">Resume</a></li>
          </ul>
        </nav>
      </header>

      {/* Project Hero */}
      <div className="project-hero">
        <img src={project.headerImage} alt={project.title} className="project-hero-image" />
        <div className="project-hero-content">
          <h1 className="project-title">{project.title}</h1>
          <div className="project-meta">
            {project.role && <div className="project-role"><strong>Role:</strong> {project.role}</div>}
            {project.timeline && <div className="project-timeline"><strong>Timeline:</strong> {project.timeline}</div>}
          </div>
          <p className="project-intro">{project.intro}</p>
        </div>
      </div>

      {/* Project Content */}
      <div className="project-content">
        {project.sections.map((section, index) => (
          <div key={index} className="project-section">
            {section.title && <h2 className="section-title">{section.title}</h2>}
            <p className="section-content">{section.content}</p>
            {section.image && (
              <div className="section-image">
                <img src={section.image} alt={section.title || `Project section ${index + 1}`} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* More Projects */}
      <div className="more-projects">
        <h2>More Projects</h2>
        <div className="project-grid">
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

export default ProjectDetail;
