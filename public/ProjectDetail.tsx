
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";


interface ProjectData {
  id: string;
  title: string;
  headerImage: string;
  intro: string;
  role?: string;
  timeline?: string;
  platforms: string;
  lists?: string[]; 
  links: [
    { text: string, url: string },
    { text: string; url: string },
   
  ]
  sections: {
    title?: string;
    content: string;
    image?: string;
    media?: {
      type: "image" | "video";
      url: string;
    };
    lists?: string[] ;
    links?: { text: string; url: string }[];
    layout?: "image-left" | "image-right";
    
  }[];
 
  
}

const projects: Record<string, ProjectData> = {
  designsystem: {
    id: "designsystem",
    title: "AI-Powered UI Design System",
    headerImage: "/lovable-uploads/design-system-header.gif",
    intro: "An intelligent system to automate UI component creation, documentation, and collaboration",
    role: "Design System Specialist",
    timeline: "October 2024 - December 2024",
    platforms: "Figma | Lovable | Supabase",
    links: [
      { text: "", url: "" },
      { text: "", url: "" },
     
    ],
    
    sections: [
      
      {
        title: "About the Project",
        content: "In today’s fast-paced product development landscape, design consistency and efficiency are crucial for teams working across multiple platforms. However, srctaining a scalable and adaptable design system requires constant updates, documentation, and collaboration. To address this challenge, I created an AI-powered UI Design System Generator, integrating Lovable.ai and Supabase to streamline component generation, versioning, and documentation automation. This system enables teams to generate, store, and automate UI components—reducing manual work and accelerating design workflows."
      },


      {
        title: "Component Audit & Standardization",
        content: "",
        lists: [
          "✅Conducted an audit of existing design components across different projects.",
          "✅Identified inconsistencies in spacing, typography, button styles, input fields, and interactions.",
          "✅Categorized common UI elements (buttons, modals, tooltips, input fields, etc.).",
          "✅Established a set of design tokens (colors, shadows, spacing, typography) to ensure consistency.",
          "✅Created theme variations (light mode, dark mode, accessibility-friendly).",
          "✅Defined usage guidelines for all components to ensure scalability.",
          "✅Created a component hierarchy to streamline implementation."   
      ],
        image: "",



        // links: [
        //   { text: "Learn More", url: "https://example.com" },
        //   { text: "Documentation", url: "https://docs.example.com" }
        // ],
        //  layout: "image-left"


      },

      {
        title: "AI-Powered Component Generation (Lovable.ai Integration)",
        content: "",
        lists: [
          "✅Integrated Lovable.ai to dynamically generate UI components based on predefined rules.",
          "✅Allowed users to input design requirements (e.g., “Generate a responsive card component”).",
          "✅AI suggested the best design patterns based on industry standards.",
          "✅Enabled customization for corner radius, padding, shadows, and states.",
          "✅AI recommended adaptive layouts for web and mobile responsiveness.",
          "✅AI ensured components met WCAG accessibility standards.",
          "✅Suggested color contrast improvements and alternative text options."   
      ],
        image: ""
      },


      {
        title: "Storage & Versioning (Supabase)",
        content: "",
        lists: [
          "✅Implemented Supabase as a backend to store UI components.",
          "✅Enabled real-time updates for design changes across teams.",
          "✅Allowed version tracking of each component update.",
          "✅Built an API that allows developers to retrieve design system components.",
          "✅Ensured seamless synchronization between Figma and development environments.",
           
      ],
        image: ""
      },




      {
        title: "Testing, Documentation & Collaboration",
        content: "",
        lists: [
          "✅Conducted usability testing to validate AI-generated components.",
          "✅Gathered feedback from design and development teams for improvements.",
          "✅Built a documentation site with live component previews.",
          "✅Included usage guidelines, code snippets, and interactive demos.",
          "✅Based on testing feedback, refined AI-generated components.",
          "✅Improved component adaptability for different design systems.",
           
      ],
        image: ""
      },

      {
        title: "Design System Components",
        content: "",
        lists: [
          "",
           
      ],
        image: "/lovable-uploads/design-system-demo.gif"
      },
      
    ],

   
  },


  whatsapp: {
    id: "whatsapp",
    title: "WhatsApp – Quick Voice Note Transcription",
    headerImage: "/lovable-uploads/whatsapp-header.jpg",
    intro: "A Quick Voice Note Transcription feature will be introduced, allowing users to automatically transcribe voice messages into text.",
    role: "UI/UX Designer",
    timeline: "January 2025",
    platforms: "Figma | WhatsApp Design System",
    links: [
      { text: "", url: "" },
      { text: "", url: "" },
      
    ],
    sections: [
      {
        title: "About the Project",
        content: "Voice notes are a convenient way for WhatsApp users to communicate, but they present accessibility challenges for users who cannot listen to them immediately. Additionally, users often struggle to find specific information within long voice messages."
      },
      {
        title: "",
        content: "To solve this, I designed a Quick Voice Note Transcription feature that allows users to generate and search transcriptions of voice messages seamlessly within chat conversations. This feature enhances accessibility, usability, and overall user experience by providing searchable, toggleable transcriptions within the chat interface."
      },
      {
        title: "Key Features",
        content: "🔍 In-Message Transcription Search",
        image: "",
        lists: [
          "✅ Transcription search appears only after clicking the play button of a voice note.",
          "✅ Users can search within a specific transcribed voice note.",
          "✅ Found keywords get highlighted for easy identification.",           
      ]
      },
      {
        title: "",
        content: "🎙️ Enable/Disable Transcription",
        image: "",
        lists: [
          "✅ Users can toggle transcription on or off for individual voice messages.",
          "✅ Option to set default transcription behavior in WhatsApp settings.",
          "✅ Ensures privacy by allowing users to opt-out of transcriptions.",           
      ]
      },

      {
        title: "",
        content: "📄 Optimized UI for WhatsApp Design System",
        image: "",
        lists: [
          "✅ The search bar appears below the voice note, srctaining UI consistency.",
          "✅ Follows WhatsApp’s chat bubble structure—received voice notes (left) and sent voice notes (right).",
          "✅ Ensures minimal UI disruption and an intuitive user experience.",           
      ]
      },


      {
        title: "",
        content: "🔄 Seamless Integration with WhatsApp Features",
        image: "",
        lists: [
          "✅ Works with existing voice note playback controls.",
          "✅ Supports multiple languages for wider accessibility.",        
      ]
      },

      {
        title: "Working Prototype",
        content: "",
        image: "/lovable-uploads/whatsapp-gif.gif",
        
      },

      {
        title: "Expected Impact",
        content: "",
        image: "",
        lists: [
          "✅ Increases accessibility for users who cannot listen to voice messages immediately.",
          "✅ Improves searchability, allowing users to retrieve key information from voice notes quickly.",    
          "✅ Enhances privacy control, ensuring users can choose when and how transcriptions appear.",  
          "✅ srctains WhatsApp's minimalist UI, preventing unnecessary clutter.",     
      ]
      },

    ]
  },


  vstate: {
    id: "vstate",
    title: "VState Filings – Compliance Management Platform (B2B)",
    headerImage: "/lovable-uploads/filenow2.jpg",
    intro: "A comprehensive web application designed to streamline compliance and business filing services, ensuring efficiency in order management and regulatory adherence.",
    role: "Product Designer",
    timeline: "June 2024 - March 2025",
    platforms: "Web/Mobile",
    links: [
      { text: "", url: "" },
      { text: "", url: "" },
     
    ],
    sections: [
      {
        title: "📌 Project Overview",
        content: "vState Filings is a web-based platform that simplifies corporate filings, compliance tracking, and order fulfillment. It enables businesses to efficiently manage entity formation, annual reporting, and other regulatory requirements while ensuring smooth collaboration between clients, employees, and administrators."
      },
      {
        title: "The platform is further enhanced with HubSpot and QuickBooks integrations, enabling:",
        content: "",
        lists: [
          "✔ Seamless CRM management by auto-creating companies and contacts in HubSpot.",
          "✔ Automated financial tracking by syncing orders and invoices with QuickBooks.",
        ]
      },
      {
        title: "🛠️ Problem Statement",
        content: "Managing compliance filings is a complex and time-sensitive process. Businesses often struggle with:",
        image: "",
        lists: [
          "🔹 Tracking multiple filing deadlines across different regulatory bodies.",
          "🔹 Assigning and managing compliance-related tasks efficiently between employees.",
          "🔹 Ensuring timely notifications for order status updates and compliance reminders.",
          "🔹 Handling client requests and subscriptions for ongoing compliance services.",
          "🔹 Manually srctaining client records and financial data across multiple systems.",
        ]
      },
      {
        title: "💡 Solution",
        content: "We designed VState Filings, a centralized compliance management system that:",
        image: "",
        lists: [
          "✔ Provides an intuitive dashboard to track and manage filings and deadlines.",
          "✔ Offers role-based access control for clients, employees, and business admins.",
          "✔ Enables real-time order tracking, status updates, and automated compliance reminders.",
          "✔ Supports seamless communication between businesses and service providers.",
          "✔ Automates client management by syncing client and company details to HubSpot CRM.",
          "✔ Simplifies invoicing and financial reconciliation through QuickBooks integration.",
        ]
      },
      {
        title: "🎨 UX/UI Design Approach",
        content: "",
        image: "",
        lists: [
          "✅ Developed an intuitive dashboard with a clear visual hierarchy for compliance tracking.",
          "✅ Designed an order management system with advanced filtering and categorization.",
          "✅ Created a structured workflow for assigning employees and managing multiple client orders.",
          "✅ Integrated HubSpot CRM elements for better client visibility within the platform.",
          "✅ Ensured mobile responsiveness for accessibility on all devices.",
        ]
      },
      {
        title: "🚀 Project Features",
        content: "✅ Order & Compliance Management",
        image: "",
        lists: [
          "Businesses can place, track, and manage compliance orders efficiently.",
          "Orders categorized by status (Pending, In Progress, Completed, etc.).",
          "Subscription-based services for recurring compliance requirements.",
        ]
      },
      {
        title: "",
        content: "✅ HubSpot Integration (CRM & Client Management)",
        image: "",
        lists: [
          "Automatically creates companies & contacts when new orders are placed.",
          "Syncs client details & updates directly to HubSpot CRM.",
          "Streamlines lead management by keeping compliance orders linked with client profiles.",
        ]
      },
      {
        title: "",
        content: "✅ QuickBooks Integration (Order & Invoice Management)",
        image: "",
        lists: [
          "Syncs orders and invoices automatically with QuickBooks.",
          "Tracks client payments & outstanding balances in real-time.",
          "Improves financial accuracy by srctaining up-to-date invoicing records.",
        ]
      },
      {
        title: "",
        content: "✅ Role-Based Access & User Management",
        image: "",
        lists: [
          "Employees, clients, and admins have controlled access to relevant tasks.",
          "Admins can assign employees to manage specific clients and orders.",
        ]
      },
      {
        title: "",
        content: "✅ Automated Notifications & Reminders",
        image: "",
        lists: [
          "Ensures timely updates for order approvals, rejections, and compliance deadlines.",
          "Employees receive task assignments and escalations automatically.",
        ]
      },
      {
        title: "",
        content: "✅ Multi-Tenant Supports",
        image: "",
        lists: [
          "Businesses can manage multiple companies and their compliance filings.",
          "Each company has its own orders, users, and permissions.",
        ]
      },
      {
        title: "",
        content: "✅ Seamless Integration with Compliance Systems",
        image: "",
        lists: [
          "Connects with external regulatory databases for real-time updates.",
          "Provides real-time tracking on order processing and legal requirements.",
        ]
      },
      {
        title: "🔍 Component Audit & Standardization",
        content: "",
        image: "",
        lists: [
          "✔ Conducted an audit of order management workflows across different filing service providers.",
          "✔ Standardized compliance tracking elements for a more structured UX.",
          "✔ Designed variations for company management modules, ensuring scalability.",
          "✔ Created a structured navigation for intuitive access to orders and reports.",
        ]
      },
      {
        title: "🤖 AI-Powered Compliance Management (Future Scope)",
        content: "",
        image: "",
        lists: [
          "🚀 Exploring AI-powered automation for compliance filings and deadline predictions.",
          "🚀 Building AI-driven document recognition to auto-fill filing forms.",
          "🚀 Implementing chatbot support for compliance-related queries.",
        ]
      },
      {
        title: "💾 Storage & Versioning (Database & API Management)",
        content: "",
        image: "",
        lists: [
          "✔ Implemented structured order storage with real-time tracking.",
          "✔ Enabled version control for order status changes across teams.",
          "✔ Built an API-driven system for retrieving compliance reports and document filings.",
          "✔ Ensured seamless synchronization between the client dashboard and backend.",
        ]
      },
      {
        title: "🛠️ Testing, Documentation & Collaboration",
        content: "",
        image: "/lovable-uploads/vstate-demo.gif",
        lists: [
          "✔ Conducted usability testing to validate order-tracking UX.",
          "✔ Gathered feedback from early users and iterated on workflow improvements.",
          "✔ Built detailed documentation for service providers and clients.",
          "✔ Included API documentation for third-party integrations.",
        ]
      },
    ]
  },
  langlang: {
    id: "langlang",
    title: "LangLang - Language learning app concept",
    headerImage: "/lovable-uploads/langlang-header.png",
    intro: "Lang-Lang is a conceptual language-learning app designed to provide an engaging and structured way to master new languages. The app integrates AI-driven personalized learning, gamification, and real-world conversational practice to enhance user experience. As a product designer, I was responsible for crafting an intuitive interface that not only makes learning seamless for users but also streamlines the overall functionality for educators and administrators.",
    role: "Project Type & Involvement",
    timeline: "Jan 2021 - May 2021",
    platforms: "iOS & Android",
    links: [
      { text: "Prototype", url: "https://www.figma.com/proto/8tQQEnCfg5cWwzx6ah1cNL/Lang-Lang-(A-Language-Learning-App)?node-id=109-6377&p=f&t=wR9di3FquUeu0qBb-0&scaling=min-zoom&content-scaling=fixed&page-id=60%3A835&starting-point-node-id=109%3A6377" },
      { text: "Design File", url: "https://www.figma.com/design/8tQQEnCfg5cWwzx6ah1cNL/Lang-Lang-(A-Language-Learning-App)?node-id=60-835&p=f&t=wR9di3FquUeu0qBb-0" },
    ],
    sections: [
      {
        title: "Problem Statement",
        content: "The problem is that current language learning platforms need to provide a practical and personalized learning experience for users. Many apps rely on a more traditional approach, with limited customization options and a lack of progress tracking. Additionally, many apps need to provide the opportunity for users to practice their language skills with mediums like music, books, web series, or movie, which they consume a greater amount. This leads to users becoming frustrated with their progress and ultimately giving up on their language learning goals. As a result, there is a need for a language learning platform that addresses these issues and provides a personalized, engaging, and effective learning experience."
      },
      {
        title: "Thinking of digital solutions",
        content: "As a team, we explored various digital solutions to enhance the language-learning experience while making the platform intuitive and engaging. I played a key role in shaping solutions that streamlined the learning process and improved user retention. My involvement included collaborating closely fellow designers to understand user needs, identify pain points, and create an immersive experience. Working alongside brand designers, I helped craft a visually cohesive product that not only aligned with the platform’s goals but also elevated the overall user experience."
      },
      {
        title: "Competitor analysis",
        content: "The competitive analysis highlights the strengths, advantages, and limitations of major language-learning platforms like Duolingo, Memrise, Babbel, and MosaLingua. Each competitor has a unique value proposition, such as Duolingo’s gamified quizzes, Memrise’s real native speaker interactions, Babbel’s strong grammar integration, and MosaLingua’s flashcard-based learning. While advantages include freemium models, structured programs, and engaging content, key drawbacks include limited lesson depth, restricted language offerings, and a lack of advanced learning options. This analysis helps identify gaps and opportunities to create a more effective and well-rounded language-learning experience.",
        image: "/lovable-uploads/comp-lang.png"
      },
      {
        title: "Quantitative user research",
        content: "I decided to perform the user survey to gain quantitative data on how users learn a new language and the struggles many share. 38 users participate in my user survey. They were learning a variety of different languages, from German to Spanish, French, and the local languages of India. Here are the important questions from the surveys, you can check all surveys here."
      },
      
      {
       title: "Qualitative user research (Interviews)",
        content: ""
      },
      {
        title: "Empathy Map",
        image: "/lovable-uploads/empathy-lang.png",
        content:"",
      },
      {
        title: "Information Architecture (IA)",
        content: "Information Architecture (IA) is a crucial aspect of User Experience (UX) design. It involves organizing and structuring the content and information on a website or application in a logical and intuitive way.",
        image: "/lovable-uploads/ia-lang.png"
      },
      {
        title: "User Journey",
        image: "/lovable-uploads/journey-lang.png",
        content:"",
      },
      {
        title: "User Flow",
        image: "/lovable-uploads/userflow-lang.png",
        content:"",
      },
      {
        title: "Onboarding Screens",
        image: "/lovable-uploads/lang-onboarding.gif",
        content:"",
      },
      {
        title: "Hi-Fi Prototype",
        image: "/lovable-uploads/lang-ui.gif",
        content:"",
      },
    ]
  },

  holachef: {
    id: "holachef",
    title: "Holachef - Ecosystem of applications for a FoodTech startup",
    headerImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800",
    intro: "I designed an integrated ecosystem of applications for Holachef, a FoodTech startup, including consumer-facing interfaces and operational tools.",
    role: "Product Design Lead",
    timeline: "2019 - 2020",
    platforms:"",
    links: [
      { text: "Project Website", url: "https://example.com" },
      { text: "", url: "" },
      
     
    ],
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
        content: "In parallel, I created operational applications for managing inventory, orders, and deliveries. These tools needed to handle complex workflows and large amounts of data while resrcing easy to use in a fast-paced environment.",
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


  const listContainer = document.querySelector(".section-lists") as HTMLUListElement;


  
  

  if (listContainer) {
    listContainer.innerHTML = projects.lists.map((group) =>   
          `<ul class="list-disc pl-5 space-y-2 border-b border-gray-300 pb-4">
             ${group.map((item) => `<li>${item}</li>`).join("")}
           </ul>`
      )
      .join("");
  }
  
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
    <div className="project-detail-container ">
      {/* Header/Navigation */}
      <header className="header project-header ">
        <div className="logo">
        <Link to="/"><img src="/lovable-uploads/logo.png" alt="SD" /></Link>

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
      <div className="project-hero min-[1400px]:px-72 max-[1400px]:px-4 ">
        <img src={project.headerImage} alt={project.title} className="project-hero-image " />
        <div className="project-hero-content ">
          <div>
            <div className=" project-meta ">
            <div className=" w-full">
            <h1 className="project-title ">{project.title}</h1>
            <p className="project-intro ">{project.intro}</p>
            </div>
           
          {/* <div className="project-meta ">

          </div> */}
          <div className="">
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
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="min-[1400px]:px-72 max-[1400px]:px-4">
        
        {project.sections.map((section, index) => (
          <div key={index} className="project-section">
            {section.title && <h2 className="section-title">{section.title}</h2>}
            <p className="section-content">{section.content}</p>
            {/* <ul  className="section-lists ">{section.lists}</ul> */}

            {section.links && (
        <div className="section-links ">
          {section.links.map((link, idx) => (
            <p key={index}>
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
                <img  className="object-fit:fill max-h-[800px]"  src={section.image} alt={section.title || `Project section ${index + 1}`} />
              </div>
              
            )}
         
          </div>
          
        ))}
      
       
      </div>

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
            View my <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="resume-link">resume</a>, get in touch 👋
          </p>
          <div className="social-links">
          <a href="hhttps://dribbble.com/sanket_works" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C14.32 4 16.45 4.95 18.06 6.44C16.87 8.08 15.16 9.34 13.16 10.21C12.34 8.43 11.37 6.74 10.27 5.13C10.82 5.04 11.41 4 12 4ZM7.68 5.72C8.83 7.38 9.86 9.16 10.74 11.04C8.35 11.74 5.76 12.11 3.08 12.11C3.03 12.08 3 12.04 3 12C3 9.28 4.87 6.97 7.68 5.72ZM4.04 14.12C7.14 14.12 10.13 13.69 12.87 12.85C13.14 13.4 13.4 13.95 13.63 14.5C11.91 15.02 10.36 16.15 9.14 17.57C7.83 18.96 6.88 20.68 6.4 22.55C4.96 21.12 4 19.07 4 16.8C4 15.89 4.07 14.99 4.24 14.12H4.04ZM12 20C11.61 20 11.23 19.98 10.86 19.93C11.4 18.35 12.16 16.95 13.32 15.75C14.38 14.66 15.69 13.76 17.21 13.22C17.65 14.89 17.91 16.64 17.98 18.44C16.4 19.43 14.3 20 12 20ZM19.34 16.38C19.25 15.04 19.04 13.74 18.73 12.5C19.96 12.01 21.34 11.77 22.76 11.76C22.91 11.83 22.99 11.91 22.99 12C23 13.94 22.39 15.75 21.35 17.19C20.97 16.87 20.14 16.68 19.34 16.38Z"/>
                </svg>
              </a>
              {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"/>
                </svg>
              </a> */}
              <a href="https://www.linkedin.com/in/sanketworks/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM9 17H6.477V10H9V17ZM7.694 8.717C6.923 8.717 6.408 8.203 6.408 7.517C6.408 6.831 6.922 6.317 7.779 6.317C8.55 6.317 9.065 6.831 9.065 7.517C9.065 8.203 8.551 8.717 7.694 8.717ZM18 17H15.558V13.174C15.558 11.116 14.313 10.872 14.024 10.872C13.735 10.872 12.791 11.035 12.791 13.174C12.791 13.585 12.791 17 12.791 17H10.395V10H12.791V10.977C13.153 10.407 13.95 10 15.066 10C16.181 10 18 10.977 18 13.174V17Z"/>
                </svg>
              </a>
          </div>
          <p className="copyright">© 2025 Sanket • Made with figma + lovable ❤️</p>
        </div>
      </footer>
    </div>
  );
  
};



export default ProjectDetail;

