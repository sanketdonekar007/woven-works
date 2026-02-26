
export type BlockType =
    | "rich-text"
    | "problem-statement"
    | "role-list"
    | "personas"
    | "triggers"
    | "goals-list"
    | "info-architecture"
    | "process-steps"
    | "challenges"
    | "wireframes"
    | "core-screens"
    | "design-system"
    | "accessibility"
    | "impact"
    | "learnings"
    | "custom-component"
    | "image"
    | "user-flow-popup"
    | "prototype";

export interface BaseBlock {
    type: BlockType;
    title?: string;
    id?: string;
}

export interface RichTextBlock extends BaseBlock {
    type: "rich-text";
    content: string;
    highlight?: string;
    align?: "left" | "center";
}

export interface ProblemStatementBlock extends BaseBlock {
    type: "problem-statement";
    content: string;
    highlight: string;
    list: string[];
}

export interface RoleListBlock extends BaseBlock {
    type: "role-list";
    content: string; // The subtitle/description
    highlight: string;
    roles: string[]; // Format: "Role: Description"
}

export interface PersonasBlock extends BaseBlock {
    type: "personas";
    personas: {
        name: string;
        role: string;
        quote: string;
        goals: string[];
        painPoints: string[];
        image?: string;
        details?: { label: string; value: string }[];
    }[];
}

export interface TriggersBlock extends BaseBlock {
    type: "triggers";
    triggers: {
        category: string;
        terms: string[];
    }[];
}

export interface GoalsListBlock extends BaseBlock {
    type: "goals-list";
    goals: string[];
}

export interface InfoArchitectureBlock extends BaseBlock {
    type: "info-architecture";
    highlight: string;
    content: string; // "Key Modules"
    modules: string[];
    image?: string; // Optional image for popup
}

export interface ProcessStepsBlock extends BaseBlock {
    type: "process-steps";
    content: string;
    highlight: string;
    steps: string[];
}

export interface ChallengesBlock extends BaseBlock {
    type: "challenges";
    challenges: {
        challenge: string;
        solution: string;
    }[];
}

export interface WireframesBlock extends BaseBlock {
    type: "wireframes";
    highlight: string;
    items: string[];
}

export interface CoreScreensBlock extends BaseBlock {
    type: "core-screens";
    highlight: string;
    screens: (string | { title: string; image: string })[];
}

export interface DesignSystemBlock extends BaseBlock {
    type: "design-system";
    highlight: string;
    content: string;
    items: string[];
}

export interface AccessibilityBlock extends BaseBlock {
    type: "accessibility";
    items: string[];
}

export interface ImpactBlock extends BaseBlock {
    type: "impact";
    items: string[];
}

export interface LearningsBlock extends BaseBlock {
    type: "learnings";
    learnings: string[];
    future: string[];
}

export interface CustomComponentBlock extends BaseBlock {
    type: "custom-component";
    componentName: "UserFlow" | "VideoCarousel" | "VStateIA" | "HealthScoreExplanation" | "SnackHackIA";
    props?: Record<string, any>;
}

export interface ImageBlock extends BaseBlock {
    type: "image";
    src: string;
    caption?: string;
}

export interface UserFlowPopupBlock extends BaseBlock {
    type: "user-flow-popup";
    title: string;
    highlight: string;
    content: string;
    steps: string[];
}

export interface PrototypeBlock extends BaseBlock {
    type: "prototype";
    url: string;
    description?: string;
    height?: string;
}

export type ProjectBlock =
    | RichTextBlock
    | ProblemStatementBlock
    | RoleListBlock
    | PersonasBlock
    | TriggersBlock
    | GoalsListBlock
    | InfoArchitectureBlock
    | ProcessStepsBlock
    | ChallengesBlock
    | WireframesBlock
    | CoreScreensBlock
    | DesignSystemBlock
    | AccessibilityBlock
    | ImpactBlock
    | LearningsBlock
    | CustomComponentBlock
    | ImageBlock
    | UserFlowPopupBlock
    | PrototypeBlock;

export interface ProjectData {
    id: string;
    title: string;
    navTitle?: string;
    headerImage: string;
    intro: string;
    subtitle?: string;
    role?: string;
    timeline?: string;
    platforms: string;
    type?: string;
    industry?: string;
    budget?: string;
    duration?: string;
    focus?: string;
    quote?: string;
    accentColor?: string;
    themeGradient?: string;
    lists?: string[];
    links: [
        { text: string, url: string },
        { text: string; url: string },
    ]
    // Legacy sections support
    sections?: {
        title?: string;
        content: string;
        heighlight: string;
        image?: string;
        media?: {
            type: "image" | "video";
            url: string;
        };
        lists?: string[];
        links?: { text: string; url: string }[];
        layout?: "image-left" | "image-right";
        videos?: string[];
        personas?: {
            name: string;
            role: string;
            quote: string;
            goals: string[];
            painPoints: string[];
        }[];
        triggers?: {
            category: string;
            terms: string[];
        }[];
        challenges?: {
            challenge: string;
            solution: string;
        }[];
        future?: string[];
    }[];
    // New block-based structure
    blocks?: ProjectBlock[];
}

export const projects: Record<string, ProjectData> = {
    designsystem: {
        id: "designsystem",
        title: "AI-Powered UI Design System",
        navTitle: "AI-Powered UI Design System",
        headerImage: "/lovable-uploads/design-system-header.gif",
        intro: "An intelligent system to automate UI component creation, documentation, and collaboration",
        role: "Design System Specialist",
        timeline: "October 2024 - December 2024",
        industry: "AI & Productivity",
        type: "Enterprise Tooling",
        duration: "3 months",
        platforms: "Figma | Lovable | Supabase",
        accentColor: "#4f46e5",
        themeGradient: "from-[#F5F3FF] to-[#FFFFFF]",
        links: [
            { text: "Documentation", url: "" },
            { text: "", url: "" },
        ],
        blocks: [
            {
                type: "problem-statement",
                title: "1️⃣ Problem & Context",
                highlight: "Maintaining a scalable and adaptable design system requires constant updates, documentation, and collaboration.",
                content: "In today’s fast-paced product development landscape, design consistency and efficiency are crucial. However, manual processes often lead to:",
                list: [
                    "Inconsistencies across different platforms",
                    "Outdated or missing documentation",
                    "Slow component handover to developers",
                    "Duplicate work due to lack of a central source"
                ]
            },
            {
                type: "rich-text",
                title: "2️⃣ The Solution",
                content: "To address these challenges, I created an AI-powered UI Design System Generator. By integrating Lovable.ai and Supabase, this system streamlines component generation, versioning, and documentation automation, ensuring a single source of truth for both designers and developers."
            },
            {
                type: "process-steps",
                title: "3️⃣ Component Audit & Standardization",
                content: "Key steps taken to standardize the design system:",
                highlight: "Establishing a solid foundation for consistency.",
                steps: [
                    "Conducted an audit of existing design components across different projects.",
                    "Identified inconsistencies in spacing, typography, button styles, input fields, and interactions.",
                    "Categorized common UI elements (buttons, modals, tooltips, input fields, etc.).",
                    "Established a set of design tokens (colors, shadows, spacing, typography) to ensure consistency.",
                    "Created theme variations (light mode, dark mode, accessibility-friendly).",
                    "Defined usage guidelines for all components to ensure scalability.",
                    "Created a component hierarchy to streamline implementation."
                ]
            },
            {
                type: "triggers",
                title: "4️⃣ AI-Powered Generation",
                triggers: [
                    {
                        category: "🤖 Generative Capabilities",
                        terms: [
                            "Integrated Lovable.ai to dynamically generate UI components based on predefined rules.",
                            "Allowed users to input design requirements (e.g., “Generate a responsive card component”).",
                            "AI suggested the best design patterns based on industry standards."
                        ]
                    },
                    {
                        category: "🎨 Customization",
                        terms: [
                            "Enabled customization for corner radius, padding, shadows, and states.",
                            "AI recommended adaptive layouts for web and mobile responsiveness."
                        ]
                    },
                    {
                        category: "♿ Accessibility & Quality",
                        terms: [
                            "AI ensured components met WCAG accessibility standards.",
                            "Suggested color contrast improvements and alternative text options."
                        ]
                    }
                ]
            },
            {
                type: "process-steps",
                title: "5️⃣ Storage & Versioning",
                content: "Leveraging Supabase for backend reliability:",
                highlight: "Ensuring a single source of truth for all components.",
                steps: [
                    "Implemented Supabase as a backend to store UI components.",
                    "Enabled real-time updates for design changes across teams.",
                    "Allowed version tracking of each component update.",
                    "Built an API that allows developers to retrieve design system components.",
                    "Ensured seamless synchronization between Figma and development environments."
                ]
            },
            {
                type: "process-steps",
                title: "6️⃣ Testing & Documentation",
                content: "Validating and documenting the system:",
                highlight: "Bridging the gap between design and development.",
                steps: [
                    "Conducted usability testing to validate AI-generated components.",
                    "Gathered feedback from design and development teams for improvements.",
                    "Built a documentation site with live component previews.",
                    "Included usage guidelines, code snippets, and interactive demos.",
                    "Refined AI-generated components based on testing feedback.",
                    "Improved component adaptability for different design systems."
                ]
            },
            {
                type: "image",
                title: "7️⃣ Design System Demo",
                src: "/lovable-uploads/design-system-demo.gif",
                caption: "Animated demo of the design system components in action."
            },
            {
                type: "impact",
                title: "8️⃣ Expected Impact",
                items: [
                    "Reduced manual documentation time by 40%",
                    "Ensured 100% consistency between design and code",
                    "Accelerated component creation with AI automation",
                    "Seamless collaboration via Supabase backend"
                ]
            }
        ],
    },
    whatsapp: {
        id: "whatsapp",
        title: "WhatsApp – Quick Voice Note Transcription",
        navTitle: "WhatsApp – Quick Voice Note Transcription",
        headerImage: "/lovable-uploads/whatsapp-header.jpg",
        intro: "The Quick Voice Note Transcription feature will automatically convert voice messages into text, making conversations easier to follow.",
        role: "UI/UX Designer",
        type: "Conceptual Case Study",
        duration: "2 weeks",
        platforms: "Figma | WhatsApp Design System",
        accentColor: "#10b981",
        themeGradient: "from-[#F0FDF4] to-[#FFFFFF]",
        links: [
            { text: "", url: "" },
            { text: "", url: "" },
        ],
        blocks: [
            {
                type: "problem-statement",
                title: "1️⃣ Problem & Context",
                highlight: "📢 A 2024 WhatsApp Usage Survey conducted in multiple countries, including India, found that over 40% of respondents regularly use WhatsApp voice notes for communication, citing convenience and expressiveness as key reasons. 🚀",
                content: "Voice notes are a convenient way for WhatsApp users to communicate, but they present accessibility challenges for users who cannot listen to them immediately. Additionally, users often struggle to find specific information within long voice messages.",
                list: [
                    "Accessibility challenges for hearing-impaired users",
                    "Inability to listen to audio in public or quiet spaces",
                    "Difficulty retrieving specific information from long voice notes",
                    "Time-consuming to listen to long messages just for one detail"
                ]
            },
            {
                type: "rich-text",
                title: "2️⃣ The Solution",
                content: "To solve this, I designed a Quick Voice Note Transcription feature that allows users to generate and search transcriptions of voice messages seamlessly within chat conversations. This feature enhances accessibility, usability, and overall user experience by providing searchable, toggleable transcriptions within the chat interface."
            },
            {
                type: "triggers",
                title: "3️⃣ Key Features",
                triggers: [
                    {
                        category: "🔍 In-Message Transcription Search",
                        terms: [
                            "Transcription search appears only after clicking the play button",
                            "Users can search within a specific transcribed voice note",
                            "Found keywords get highlighted for easy identification"
                        ]
                    },
                    {
                        category: "🎙️ Enable/Disable Transcription",
                        terms: [
                            "Users can toggle transcription on or off for individual voice messages",
                            "Option to set default transcription behavior in settings",
                            "Ensures privacy by allowing users to opt-out",
                        ]
                    },
                    {
                        category: "📄 Optimized UI",
                        terms: [
                            "Search bar appears below the voice note, sustaining UI consistency",
                            "Follows WhatsApp’s chat bubble structure",
                            "Ensures minimal UI disruption and intuitive UX"
                        ]
                    },
                    {
                        category: "🔄 Seamless Integration",
                        terms: [
                            "Works with existing voice note playback controls",
                            "Supports multiple languages for wider accessibility",
                            "Maintains the lightweight feel of the app"
                        ]
                    }
                ]
            },
            {
                type: "image",
                title: "4️⃣ Working Prototype",
                src: "/lovable-uploads/whatsapp-gif.gif",
                caption: "Interactive prototype demonstrating the transcription and search flow"
            },
            {
                type: "impact",
                title: "5️⃣ Expected Impact",
                items: [
                    "Increases accessibility for users who cannot listen to voice messages",
                    "Improves searchability for quick information retrieval",
                    "Enhances privacy control for user comfort",
                    "Sustains WhatsApp's minimalist UI, preventing clutter"
                ]
            }
        ]
    },
    vstate: {
        id: "vstate",
        title: "vState — UX Case Study",
        navTitle: "VState Filings – Compliance Management Platform",
        subtitle: "Compliance & Filing Management Platform (B2B SaaS)",
        headerImage: "/lovable-uploads/filenow2.jpg",
        intro: "vState is a role-based compliance and filing management platform designed to help service providers manage multi-state filings, deadlines, and client communication with confidence.",
        role: "Senior UI/UX Designer",
        focus: "UX Strategy, Information Architecture, User Flows, Design Systems",
        quote: "Designing for compliance means designing for clarity, trust, and zero margin for error.",
        timeline: "June 2024 - March 2025",
        industry: "B2B Compliance",
        duration: "3 months",
        budget: "$45,000",
        platforms: "Web (B2B SaaS)",
        accentColor: "#2563eb",
        themeGradient: "from-[#EFF6FF] to-[#FFFFFF]",
        links: [
            { text: "Figma File", url: "https://www.figma.com/design/bw6YgvKiThQsRMoBAx0BPb/vState-Filings?node-id=1-28373&t=aTJKcqchaOcqjaW9-1" },
            { text: "", url: "" },
        ],
        blocks: [
            {
                type: "problem-statement",
                title: "2️⃣ Problem Statement",
                highlight: "Compliance service providers manage hundreds of filings across clients, states, and regulatory timelines. Most teams rely on spreadsheets, emails, and disconnected tools—leading to missed deadlines, poor visibility, and constant stress.",
                content: "Key Challenges:",
                list: [
                    "Tracking multiple state-specific compliance deadlines",
                    "Switching between clients and companies efficiently",
                    "Managing document-heavy workflows",
                    "Keeping clients informed without manual follow-ups",
                ]
            },
            {
                type: "role-list",
                title: "3️⃣ Business & User Context",
                highlight: "vState is used by US-based compliance service providers working with SMBs and enterprises. The platform supports multiple roles, each with distinct responsibilities and expectations.",
                content: "Primary User Roles:",
                roles: [
                    "Super Admin: Business owners managing clients, teams, and revenue",
                    "Employee: Compliance executives executing filings",
                    "Client Admin: Business owners tracking their compliance status",
                ]
            },
            {
                type: "personas",
                title: "4️⃣ User Personas",
                personas: [
                    {
                        name: "Michael Anderson",
                        role: "Compliance Firm Owner",
                        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
                        quote: "“I need one system that tells me everything is under control.”",
                        goals: ["Zero missed deadlines", "Clear business overview", "Scalable operations"],
                        painPoints: ["Manual tracking", "Tool overload", "Limited real-time visibility"]
                    },
                    {
                        name: "Emily Rodriguez",
                        role: "Compliance Executive",
                        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
                        quote: "“I just want clear tasks and documents in one place.”",
                        goals: ["Faster filings", "Clear task ownership", "Minimal errors"],
                        painPoints: ["Context switching", "Missing documents", "Repetitive updates"]
                    },
                    {
                        name: "David Thompson",
                        role: "Client Admin",
                        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
                        quote: "“I want transparency without chasing updates.”",
                        goals: ["Real-time filing status", "Deadline alerts", "Easy document uploads"],
                        painPoints: ["Unclear progress", "Anxiety around penalties", "Poor communication"]
                    }
                ]
            },
            {
                type: "triggers",
                title: "5️⃣ Behavioral Triggers",
                triggers: [
                    {
                        category: "Emotional Triggers",
                        terms: ["Fear of penalties and missed deadlines", "Stress caused by regulatory complexity", "Relief when compliance is clearly “completed”"]
                    },
                    {
                        category: "Cognitive Triggers",
                        terms: ["Need for accuracy and validation", "Trust built through audit trails and history", "Clear ownership and accountability"]
                    },
                    {
                        category: "Time vs Effort Triggers",
                        terms: ["Preference for automation over manual entry", "Reuse of previous data and documents", "Fast client switching"]
                    },
                    {
                        category: "Expectation Triggers",
                        terms: ["Real-time status updates", "Proactive notifications", "Secure, enterprise-grade behavior"]
                    }
                ]
            },
            {
                type: "goals-list",
                title: "6️⃣ UX Goals & Design Principles",
                goals: [
                    "Reduce compliance anxiety",
                    "Improve visibility and trust",
                    "Minimize cognitive load",
                    "Enable scalability without complexity",
                    "Design around status-driven workflows"
                ]
            },
            {
                type: "info-architecture",
                title: "7️⃣ Information Architecture",
                highlight: "The platform uses role-based information architecture to ensure users only see what matters to them.",
                content: "Key Modules:",
                modules: [
                    "Dashboard",
                    "Clients & Companies",
                    "Orders & Filings",
                    "Compliance Calendar",
                    "Notifications",
                    "Billing & Settings"
                ],
                image: "/lovable-uploads/IA vState.png"
            },
            {
                type: "user-flow-popup",
                title: "8️⃣ User Task Flows",
                highlight: "Each flow was optimized to reduce steps, prevent errors, and maintain clarity.",
                content: "Core Flows Designed:",
                steps: [
                    "Authentication & Onboarding",
                    "Role-based Dashboard Access",
                    "Client & Company Management",
                    "Order Creation & Filing",
                    "Compliance Tracking",
                    "Notifications & Billing"
                ]
            },

            {
                type: "challenges",
                title: "9️⃣ Key UX Challenges & Solutions",
                challenges: [
                    {
                        challenge: "Tracking Multiple Deadlines",
                        solution: "Centralized compliance calendar with alerts"
                    },
                    {
                        challenge: "Client Context Switching",
                        solution: "Persistent client list with quick switch"
                    },
                    {
                        challenge: "Manual Follow-Ups",
                        solution: "Automated notifications and status updates"
                    },
                    {
                        challenge: "Filing Errors",
                        solution: "Step-based workflows with validation"
                    }
                ]
            },

            {
                type: "core-screens",
                title: "10️⃣ Core Screens",
                highlight: "Each screen is designed to support fast decision-making and high trust.",
                screens: [
                    "Login & Authentication",
                    "Super Admin Dashboard",
                    "Client Profile",
                    "Order Creation",
                    "Compliance Calendar",
                    "Notifications",
                    "Roles & Permissions"
                ]
            },
            {
                type: "custom-component",
                componentName: "VideoCarousel",
                props: {
                    videos: ["/lovable-uploads/order-process.mp4"]
                }
            },
            {
                type: "image",
                src: "/lovable-uploads/vstate-demo.gif",
                caption: "Full Platform Walkthrough"
            },
            {
                type: "design-system",
                title: "11️⃣ Design System",
                highlight: "A scalable design system ensures consistency across the platform. This system supports rapid feature expansion.",
                content: "Includes:",
                items: [
                    "Color tokens for statuses",
                    "Typography hierarchy",
                    "Button & input components",
                    "Tables and badges",
                    "Notification patterns"
                ]
            },
            {
                type: "accessibility",
                title: "12️⃣ Accessibility & Usability",
                items: [
                    "High-contrast UI for data-heavy screens",
                    "Clear error and success states",
                    "Readable tables and forms",
                    "Predictable navigation patterns"
                ]
            },
            {
                type: "impact",
                title: "13️⃣ Impact & Outcomes",
                items: [
                    "Improved visibility across compliance workflows",
                    "Reduced manual follow-ups",
                    "Faster task completion for employees",
                    "Increased client confidence and trust"
                ]
            },
            {
                type: "learnings",
                title: "14️⃣ Learnings & Future Scope",
                learnings: [
                    "Compliance UX must prioritize clarity over creativity",
                    "Status and feedback are critical trust signals",
                    "Automation dramatically reduces cognitive load"
                ],
                future: [
                    "AI-powered compliance insights",
                    "Predictive deadline risk alerts",
                    "Deeper accounting and CRM integrations"
                ]
            },

        ],
    },
    langlang: {
        id: "langlang",
        title: "LangLang - Language learning app concept",
        navTitle: "Concept - Language learning app",
        headerImage: "/lovable-uploads/langlang-header.png",
        intro: "Lang-Lang is a conceptual language-learning app designed to provide an engaging and structured way to master new languages. The app integrates AI-driven personalized learning, gamification, and real-world conversational practice to enhance user experience. As a ux designer, I was responsible for crafting an intuitive interface that not only makes learning seamless for users but also streamlines the overall functionality for educators and administrators.",
        role: "UI/UX Designer",
        type: "Conceptual Case Study",
        industry: "EdTech",
        duration: "4 months",
        timeline: "Jan 2021 - May 2021",
        platforms: "iOS & Android",
        accentColor: "#f97316",
        themeGradient: "from-[#FFF7ED] to-[#FFFFFF]",
        links: [
            { text: "Prototype", url: "https://www.figma.com/proto/8tQQEnCfg5cWwzx6ah1cNL/Lang-Lang-(A-Language-Learning-App)?node-id=109-6377&p=f&t=wR9di3FquUeu0qBb-0&scaling=min-zoom&content-scaling=fixed&page-id=60%3A835&starting-point-node-id=109%3A6377" },
            { text: "Design File", url: "https://www.figma.com/design/8tQQEnCfg5cWwzx6ah1cNL/Lang-Lang-(A-Language-Learning-App)?node-id=60-835&p=f&t=wR9di3FquUeu0qBb-0" },
        ],
        blocks: [
            {
                type: "problem-statement",
                title: "Problem Statement",
                highlight: "Users become frustrated with their progress and ultimately give up on their language learning goals due to a lack of engaging, real-world practice mediums.",
                content: "Current language learning platforms often fail to provide a practical and personalized experience. Many rely on traditional methods that lack versatility and engagement.",
                list: [
                    "Limited customization options for learners",
                    "Lack of effective progress tracking",
                    "No integration with media (music, movies, books)",
                    "Disengaging, traditional learning methods"
                ]
            },
            {
                type: "rich-text",
                title: "Thinking of digital solutions",
                content: "As a team, we explored various digital solutions to enhance the language-learning experience while making the platform intuitive and engaging. I played a key role in shaping solutions that streamlined the learning process and improved user retention. My involvement included collaborating closely fellow designers to understand user needs, identify pain points, and create an immersive experience. Working alongside brand designers, I helped craft a visually cohesive product that not only aligned with the platform’s goals but also elevated the overall user experience."
            },
            {
                type: "rich-text",
                title: "Competitor Analysis",
                content: "The competitive analysis highlights the strengths, advantages, and limitations of major language-learning platforms like Duolingo, Memrise, Babbel, and MosaLingua. Each competitor has a unique value proposition, such as Duolingo’s gamified quizzes, Memrise’s real native speaker interactions, Babbel’s strong grammar integration, and MosaLingua’s flashcard-based learning. While advantages include freemium models, structured programs, and engaging content, key drawbacks include limited lesson depth, restricted language offerings, and a lack of advanced learning options. This analysis helps identify gaps and opportunities to create a more effective and well-rounded language-learning experience."
            },
            {
                type: "image",
                src: "/lovable-uploads/comp-lang.png",
                caption: "Competitive Analysis Overview"
            },
            {
                type: "rich-text",
                title: "Quantitative User Research",
                content: "I decided to perform the user survey to gain quantitative data on how users learn a new language and the struggles many share. 38 users participate in my user survey. They were learning a variety of different languages, from German to Spanish, French, and the local languages of India."
            },
            {
                type: "image",
                title: "Empathy Map",
                src: "/lovable-uploads/empathy-lang.png",
            },
            {
                type: "rich-text",
                title: "Information Architecture (IA)",
                content: "Information Architecture (IA) is a crucial aspect of User Experience (UX) design. It involves organizing and structuring the content and information on a website or application in a logical and intuitive way."
            },
            {
                type: "image",
                src: "/lovable-uploads/ia-lang.png",
            },
            {
                type: "image",
                title: "User Journey",
                src: "/lovable-uploads/journey-lang.png",
            },
            {
                type: "image",
                title: "User Flow",
                src: "/lovable-uploads/userflow-lang.png",
            },
            {
                type: "image",
                title: "Onboarding Screens",
                src: "/lovable-uploads/lang-onboarding.gif",
            },
            {
                type: "image",
                title: "Hi-Fi Prototype",
                src: "/lovable-uploads/lang-ui.gif",
            },
            {
                type: "prototype",
                title: "Interactive Prototype",
                url: "https://www.figma.com/proto/fRknjvjk4azBRZy62ZKH4n/LangLang---Language-Learning-App?node-id=1-429&t=js8kOMSiemfLXQxs-1",
                description: "Explore the interactive prototype of the Language Learning App."
            }
        ]
    },
    snackhack: {
        id: "snackhack",
        title: "SnackHack",
        navTitle: "Snack Hack - Decode Your Snacks, Instantly",
        subtitle: "Nutritional Insights at Your Fingertips",
        headerImage: "/lovable-uploads/Snack Hack Hero.png",
        intro: "SnackHack is a mobile application designed to help users make healthier snacking decisions by instantly analyzing snack products and presenting simplified health insights and smarter alternatives.",
        role: "Product Design",
        industry: "Health & Food",
        timeline: "Feb 2025 - Progress",
        platforms: "iOS | Android",
        accentColor: "#FF6B01",
        themeGradient: "from-[#FFF7ED] to-[#FFFFFF]",
        links: [
            { text: "Case Study", url: "" },
            { text: "", url: "" },
        ],
        blocks: [
            {
                type: "problem-statement",
                title: "The Problem",
                highlight: "Snack labels are often complex, filled with unfamiliar ingredients and confusing nutritional data. While many users want to eat healthier, they lack quick and reliable information at the moment they're choosing snacks—especially in-store.",
                content: "Key Challenges:",
                list: [
                    "Nutritional information is difficult to interpret: Complex data makes it hard to understand what's actually healthy.",
                    "Marketing claims are misleading: Products often use deceptive language to appear healthier than they are."
                ]
            },
            {
                type: "role-list",
                title: "Who We're Designing For",
                highlight: "SnackHack is designed for everyday consumers navigating grocery stores, convenience shops, or online snack purchases.",
                content: "User Groups:",
                roles: [
                    "Health-conscious individuals",
                    "Busy professionals",
                    "Fitness focused users",
                    "Parents & families"
                ]
            },
            {
                type: "personas",
                title: "User Persona",
                personas: [
                    {
                        name: "Sarah Patel",
                        role: "Health-Conscious Shopper",
                        quote: "I want to eat better, but I don't have time to read every label.",
                        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
                        details: [
                            { label: "Age", value: "32" },
                            { label: "Location", value: "Urban" },
                            { label: "Occupation", value: "Marketing Manager" }
                        ],
                        goals: [
                            "Make healthier choices quickly",
                            "Avoid hidden sugars and additives",
                            "Trust product information"
                        ],
                        painPoints: [
                            "Confusing ingredient lists",
                            "Too much nutritional data",
                            "Limited time while shopping"
                        ]
                    }
                ]
            },
            {
                type: "triggers",
                title: "Behavioral Triggers",
                triggers: [
                    {
                        category: "Emotional Triggers",
                        terms: [
                            "Guilt after unhealthy snacking",
                            "Anxiety around hidden ingredients",
                            "Motivation to build healthier habits"
                        ]
                    },
                    {
                        category: "Cognitive Triggers",
                        terms: [
                            "Overload from nutritional information",
                            "Difficulty comparing products"
                        ]
                    },
                    {
                        category: "Time vs Effort",
                        terms: [
                            "Preference for instant insights",
                            "Minimal tolerance for complex flows"
                        ]
                    },
                    {
                        category: "Expectation Triggers",
                        terms: [
                            "Fast barcode scanning",
                            "Simple scoring system"
                        ]
                    }
                ]
            },
            {
                type: "goals-list",
                title: "UX Goals & Design Principles",
                goals: [
                    "Empower through transparency",
                    "Simplicity over complexity",
                    "Personalization at scale",
                    "Instant feedback loop",
                    "High trust visualization"
                ]
            },
            {
                type: "custom-component",
                componentName: "SnackHackIA"
            },
            {
                type: "process-steps",
                title: "Core User Flow",
                content: "Designed to support decisions in under 10 seconds.",
                highlight: "Frictionless path from scan to decision.",
                steps: [
                    "Open the app",
                    "Scan snack barcode",
                    "View health score",
                    "Review ingredient breakdown",
                    "Explore healthier alternatives",
                    "Save or scan another"
                ]
            },
            {
                type: "challenges",
                title: "UX Challenges & Solutions",
                challenges: [
                    {
                        challenge: "Complex nutritional data",
                        solution: "A single, color-coded health score"
                    },
                    {
                        challenge: "Low trust in scores",
                        solution: "Transparent ingredient-level explanations"
                    },
                    {
                        challenge: "Decision fatigue",
                        solution: "Smart alternative recommendations"
                    }
                ]
            },
            {
                type: "core-screens",
                title: "Core Screens",
                highlight: "A glimpse into the simplified UI.",
                screens: [
                    { title: "Onboarding Flow", image: "/lovable-uploads/Onboarding.png" },
                    { title: "Precision Scanner", image: "/lovable-uploads/Scanning.png" }
                ]
            },
            {
                type: "prototype",
                title: "Interactive Prototype",
                url: "https://www.figma.com/proto/51RadWw4FYsVmTUzUqXshN/Snack-Hack---Choose-Your-Healthy-Snack?node-id=0-1&t=JMkBvm1xVuIl86y2-1",
                description: "Experience the frictionless flow from scanning a product to making an informed decision."
            },
            {
                type: "custom-component",
                componentName: "HealthScoreExplanation"
            },
            {
                type: "accessibility",
                title: "Accessibility & Usability",
                items: [
                    "Large touch targets: Easy to tap with precision",
                    "High-contrast colors: Readable for all users",
                    "Simple language: Clear, jargon-free communication",
                    "Clear iconography: Universal visual language",
                    "One-hand usage: Optimized for mobile convenience"
                ]
            },
            {
                type: "impact",
                title: "Impact & Outcomes",
                items: [
                    "Faster snack selection",
                    "Increased nutritional awareness",
                    "Reduced reliance on guesswork",
                    "Encouraged healthier eating habits"
                ]
            },
            {
                type: "learnings",
                title: "Learnings & Future Enhancements",
                learnings: [
                    "Simplicity builds user trust",
                    "Visual cues outperform text-heavy data",
                    "Speed is critical in real-world usage"
                ],
                future: [
                    "Personalized health profiles",
                    "Dietary preference filters",
                    "AI-based snack recommendations",
                    "Brand-level comparisons"
                ]
            }
        ]
    }
};
