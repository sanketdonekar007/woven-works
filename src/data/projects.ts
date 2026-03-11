
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
    | "prototype"
    | "asset-placeholder";

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
    componentName: "UserFlow" | "VideoCarousel" | "VStateIA" | "HealthScoreExplanation" | "SnackHackIA" | "VStateServiceEcosystem" | "VStateBeforeWorkflow" | "VStateAfterWorkflow" | "VStatePainPoints" | "VStateNotificationSystem" | "VStateServiceBlueprint" | "VStateResearchInsights" | "VStateDesignSystemGrid";
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

export interface AssetPlaceholderBlock extends BaseBlock {
    type: "asset-placeholder";
    assetType: "screen-design" | "flow-diagram" | "architecture-diagram" | "wireframe" | "photo" | "data-chart" | "custom-diagram";
    description: string;
    note?: string;
    /** If code-built, this is the componentName to render instead */
    codeBuilt?: string;
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
    | PrototypeBlock
    | AssetPlaceholderBlock;

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
    clientWebsite?: string;
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
        title: "RedBeryl Product Ecosystem",
        navTitle: "RedBeryl Product Ecosystem",
        subtitle: "Designing a Modular, AI-Enabled Enterprise Platform",
        headerImage: "/lovable-uploads/design-system-header.gif",
        intro: "Stop building features. Start building systems.",
        role: "Senior UX Designer (RedBeryl Tech)",
        timeline: "2022 - Present",
        industry: "Enterprise SaaS · Compliance & HRMS",
        type: "Enterprise Tooling",
        duration: "Ongoing",
        platforms: "Figma | Cloud Systems",
        accentColor: "#4f46e5",
        themeGradient: "from-[#F5F3FF] to-[#FFFFFF]",
        links: [
            { text: "Documentation", url: "" },
            { text: "", url: "" },
        ],
        blocks: [
            {
                type: "problem-statement",
                title: "The Context",
                highlight: "RedBeryl was growing fast. As we added compliance tools, HRMS features, and AI automation, the ecosystem started getting complicated.",
                content: "We were dealing with multiple users—Super Admins, standard employees, and client admins—across a multi-tenant setup. The risk? Fragmented user experiences and a lot of duplicated effort. We realized that without a central design language, shipping new features would soon mean shipping inconsistent layouts, slowing everything down.",
                list: [
                    "Inconsistent experiences across expanding features",
                    "Duplicated components and wasted effort",
                    "Scaling inefficiencies without a structured system approach"
                ]
            },
            {
                type: "goals-list",
                title: "The Goal",
                goals: [
                    "Supports multi-tenant enterprise architecture",
                    "Scales across compliance, HRMS, and AI modules",
                    "Reduces operational friction",
                    "Enables faster feature deployment",
                    "Maintains accessibility and governance standards"
                ]
            },
            {
                type: "rich-text",
                title: "The Strategic Shift: From Screens to Systems",
                content: "The goal wasn't just to make things look pretty; it was to build a system that made designing and developing faster. Instead of creating pages in isolation, I advocated for a modular approach. By breaking down the interface into reusable patterns and structured dashboards, we completely shifted RedBeryl's mindset from 'building features' to 'building a product ecosystem.'"
            },
            {
                type: "process-steps",
                title: "Atomic Foundations (Design System Layer)",
                content: "The Solution: Introduced semantic design tokens aligned with product states (Success, Risk, Compliance, Action). The Win: System-wide updates could be rolled out instantly, ensuring long-term scalability and dark mode readiness.",
                highlight: "The foundation: Tokens & Standards",
                steps: [
                    "Color systems (semantic, not hex-based)",
                    "Spacing & grid standards",
                    "Border radius consistency",
                    "Typography hierarchy",
                    "Elevation & interaction states"
                ]
            },
            {
                type: "process-steps",
                title: "Component Architecture",
                highlight: "The Components Library",
                content: "Built a comprehensive Figma component system. The Win: Design-to-development handoff friction reduced significantly. Engineers implemented features using reusable component logic instead of rebuilding patterns.",
                steps: [
                    "Buttons (state-based variants)",
                    "Form inputs & validation logic",
                    "Role-based dashboard layouts",
                    "Navigation patterns",
                    "Notification & status components",
                    "Compliance workflow states"
                ]
            },
            {
                type: "image",
                title: "🎨 Design System Architecture",
                src: "/lovable-uploads/design-system-demo.gif",
                caption: "Animated demo of the unified design system components in action."
            },
            {
                type: "role-list",
                title: "Engineering Collaboration",
                highlight: "Bridging Design & Engineering",
                content: "This reduced ambiguity and increased delivery velocity by aligning effectively with engineering.",
                roles: [
                    "State documentation (Hover, Active, Disabled, Error)",
                    "Accessibility specifications (WCAG alignment)",
                    "Interaction guidelines",
                    "Component usage documentation"
                ]
            },
            {
                type: "impact",
                title: "Final Outcomes",
                items: [
                    "35–40% faster feature rollout cycles",
                    "Reduced component duplication across modules",
                    "Scalable multi-tenant UX structure",
                    "Improved compliance deadline tracking",
                    "AI-assisted task completion efficiency gains",
                    "Stronger cross-team collaboration"
                ]
            },
            {
                type: "learnings",
                title: "The Bigger Picture",
                learnings: [
                    "From Product to Platform: RedBeryl evolved from feature-based tools to structured enterprise systems, to an intelligent, modular ecosystem.",
                    "The UX strategy ensured the platform can expand without requiring UX redesign from scratch."
                ],
                future: [
                    "New jurisdictions",
                    "New AI capabilities",
                    "New enterprise clients",
                    "Increased entity scale"
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
        industry: "Consumer Messaging",
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
                title: "Problem & Context",
                highlight: "Voice notes are incredibly popular—in fact, a recent survey showed over 40% of WhatsApp users rely on them heavily for quick, expressive communication.",
                content: "But there's a catch: they aren't always accessible. Maybe you're in a quiet office, or maybe you're hard of hearing. On top of that, trying to find one specific detail buried in a 3-minute audio clip is frustrating. Voice notes are great for the sender, but not always for the receiver.",
                list: [
                    "Accessibility challenges for hearing-impaired users",
                    "Inability to listen to audio in public or quiet spaces",
                    "Difficulty retrieving specific information from long voice notes",
                    "Time-consuming to listen to long messages just for one detail"
                ]
            },
            {
                type: "rich-text",
                title: "The Solution",
                content: "My solution was straightforward: an integrated voice note transcription feature. I wanted users to effortlessly convert audio to text and even search those transcriptions right inside the chat. The idea was to keep the familiar WhatsApp feel while drastically improving accessibility and convenience."
            },
            {
                type: "triggers",
                title: "Key Features",
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
                title: "Working Prototype",
                src: "/lovable-uploads/whatsapp-gif.gif",
                caption: "Interactive prototype demonstrating the transcription and search flow"
            },
            {
                type: "impact",
                title: "Expected Impact",
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
        intro: "vState is a compliance platform designed to help service providers juggle multi-state filings, strict deadlines, and client communication without the usual chaos.",
        role: "Senior UI/UX Designer",
        focus: "UX Strategy, Information Architecture, User Flows, Design Systems",
        quote: "Designing for compliance means designing for clarity, trust, and zero margin for error.",
        timeline: "June 2024 - March 2025",
        type: "Client Project · B2B SaaS",
        industry: "B2B Compliance",
        duration: "3 months",
        budget: "$45,000",
        platforms: "Web (B2B SaaS)",
        clientWebsite: "https://vstatefilings.com/",
        accentColor: "#2563eb",
        themeGradient: "from-[#EFF6FF] to-[#FFFFFF]",
        links: [
            { text: "Figma File", url: "https://www.figma.com/design/bw6YgvKiThQsRMoBAx0BPb/vState-Filings?node-id=1-28373&t=aTJKcqchaOcqjaW9-1" },
            { text: "", url: "" },
        ],
        blocks: [
            {
                type: "problem-statement",
                title: "Context & Problem Definition",
                highlight: "Compliance workflows were originally managed using spreadsheets, emails, and fragmented tools. This resulted in missed deadlines, a lack of visibility, redundant data entry, and poor collaboration between clients and internal teams.",
                content: "vState Filings was conceived to solve these core pain points by centralizing compliance and filing operations into a unified platform. Our goal was to alleviate both the business pains of scaling operations and the user pains of high cognitive load.",
                list: [
                    "Business Pain: Inefficient scaling, high error rates, and difficulty managing multi-state legal requirements systematically.",
                    "User Pain: Constant context switching between clients, missing real-time visibility, and anxiety over missed compliance penalties.",
                    "Impact Goal: Create a centralized system to ensure zero missed deadlines, automate repetitive tracking, and improve cross-role collaboration."
                ]
            },
            {
                type: "role-list",
                title: "Business Context & Target Users",
                highlight: "Early on, it was clear we needed a unified system that presented distinct, actionable views for different user roles to prevent data overload.",
                content: "Primary User Roles:",
                roles: [
                    "Super Admin: Business owners managing clients, teams, billing, and holistic risk.",
                    "Employee: Compliance executives executing filings and managing daily action items.",
                    "Client Admin: Business owners external to the business tracking their own compliance status."
                ]
            },
            {
                type: "rich-text",
                title: "Research Methodology",
                content: "To bridge the gap between business goals and user needs, we conducted generative research. This involved heuristic evaluations of the company's legacy spreadsheet workflows, as well as direct interviews with working compliance executives to uncover the daily friction impeding their work."
            },
            {
                type: "process-steps",
                title: "Key Insights",
                highlight: "Translating frustrations into actionable design targets.",
                content: "Our research crystallized into three major areas of friction:",
                steps: [
                    "Deadline Anxiety: Users struggled to track moving deadlines across states with highly volatile regulations, leading to compliance anxiety.",
                    "Redundant Labor: Clients were frequently frustrated by having to manually enter the same company data across multiple emails and disparate tools.",
                    "Poor Prioritization: Employees had no unified system to prioritize urgent filings over routine ones, artificially capping their daily output."
                ]
            },
            {
                type: "personas",
                title: "User Personas",
                personas: [
                    {
                        name: "Michael Anderson",
                        role: "Compliance Firm Owner",
                        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
                        quote: "\"I need one system that tells me everything is under control.\"",
                        goals: ["Zero missed deadlines", "Clear business overview", "Scalable operations"],
                        painPoints: ["Manual tracking", "Tool overload", "Limited real-time visibility"]
                    },
                    {
                        name: "Emily Rodriguez",
                        role: "Compliance Executive",
                        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
                        quote: "\"I just want clear tasks and documents in one place.\"",
                        goals: ["Faster filings", "Clear task ownership", "Minimal errors"],
                        painPoints: ["Context switching", "Missing documents", "Repetitive updates"]
                    },
                    {
                        name: "David Thompson",
                        role: "Client Admin",
                        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
                        quote: "\"I want transparency without chasing updates.\"",
                        goals: ["Real-time filing status", "Deadline alerts", "Easy document uploads"],
                        painPoints: ["Unclear progress", "Anxiety around penalties", "Poor communication"]
                    }
                ]
            },
            {
                type: "goals-list",
                title: "UX Strategy & Principles",
                goals: [
                    "Prioritize workflows by urgency: Surface immediate risks immediately.",
                    "Automate data persistence: Eliminate manual data re-entry across forms.",
                    "Role-tailored interfaces: Show users only what they need to act on.",
                    "Provide state predictability: Clear feedback loops on external submissions."
                ]
            },
            {
                type: "info-architecture",
                title: "Information Architecture",
                highlight: "Structuring the navigation to drastically reduce context switching and align with mental models.",
                content: "Key Modules:",
                modules: [
                    "Dashboard",
                    "Clients & Companies",
                    "Orders & Filings",
                    "Notifications",
                    "Billing & Settings"
                ],
                image: "/lovable-uploads/IA vState.png"
            },
            {
                type: "user-flow-popup",
                title: "User Task Flows",
                highlight: "We optimized multi-user task flows to prevent data siloes and to handle document hand-offs seamlessly.",
                content: "Core Flows Mapped:",
                steps: [
                    "Authentication & Role Gateway",
                    "Role-based Action Dashboards",
                    "Global Client & Company Indexing",
                    "Order Creation & Automated Filing Prep",
                    "Centralized Compliance Tracking Map",
                    "Automated Event-Triggered Notifications"
                ]
            },
            {
                type: "challenges",
                title: "UX Moments & Feature Deep Dives",
                challenges: [
                    {
                        challenge: "The Compliance Dashboard (Goal: Unified deadline visibility)",
                        solution: "Problem: Users lacked visibility over tasks spread across states. Solution: Designed status cards, trend charts, and state-specific urgency filters. Benefit: Clients and executives get instant clarity on urgent tasks."
                    },
                    {
                        challenge: "Role-Based Workspaces (Goal: Reduce cognitive load)",
                        solution: "Problem: Employees were overwhelmed seeing all global organizational data. Solution: Tailored the workspace to surface only action-items relevant to the logged-in user's assigned orders."
                    },
                    {
                        challenge: "Automated Data Persistence (Goal: Eliminate redundant entry)",
                        solution: "Problem: Clients had to enter identical company registration data multiple times. Solution: Created central Data Profiles that auto-populate state filing forms."
                    },
                    {
                        challenge: "Centralized Communication (Goal: Maintain context)",
                        solution: "Problem: Compliance documents were lost in disparate email threads. Solution: Integrated contextual messaging directly within the Order view for seamless retrieval."
                    }
                ]
            },
            {
                type: "core-screens",
                title: "Key Screens & Annotations",
                highlight: "Mapping the strategic requirements precisely to interface elements.",
                screens: [
                    { title: "Login & Authentication (Fast onboarding with contextual role hints)", image: "/lovable-uploads/Sign Up.png" },
                    { title: "Super Admin Dashboard (High-level metric visualization)", image: "/lovable-uploads/Super Admin.png" },
                    { title: "Client Profile (Aggregated document vaults)", image: "/lovable-uploads/Companies.png" },
                    { title: "Order Creation (Guided, step-by-step progressive disclosure forms)", image: "/lovable-uploads/order-process.mp4" }
                ]
            },
            {
                type: "image",
                src: "/lovable-uploads/vstate-demo.gif",
                caption: "Full Platform Flow Demonstration"
            },
            {
                type: "design-system",
                title: "Design System & Foundation",
                highlight: "Establishing a unified language to scale features gracefully over the long term.",
                content: "Includes:",
                items: [
                    "Color tokens for precise status mapping",
                    "Typography hierarchy for data-dense tables",
                    "Reusable form and validation patterns",
                    "Standardized feedback and notification banners"
                ]
            },
            {
                type: "impact",
                title: "UX Success Metrics",
                items: [
                    "Reduced manual task dependency, as observed through qualitative pilot sessions.",
                    "Improved operational confidence; employees could complete multi-state filing tasks significantly faster without checking external spreadsheets.",
                    "Usability testing showed reduced confusion in the centralized navigation structure.",
                    "Internal feedback indicated a vastly improved onboarding speed for new compliance employees."
                ]
            },
            {
                type: "learnings",
                title: "Learnings & Future Opportunities",
                learnings: [
                    "What Worked: Implementing role-based views was an immediate win, isolating necessary workflows and shedding cognitive overhead.",
                    "What Didn't: We initially underestimated edge cases in complex multi-state entity variations; upcoming sprints will prioritize expanding these dynamic form validations.",
                    "Process Takeaway: Integrating with state APIs required us to refine our data-model significantly earlier in the UX flow than initially planned, shifting how we structure our research phase."
                ],
                future: [
                    "AI-assisted compliance issue predictions.",
                    "Smart deadline forecasting based on historical processing times.",
                    "Intelligent task prioritization modules for critical filings.",
                    "Chatbot support flows for complex legal compliance exceptions."
                ]
            }
        ],
    },
    langlang: {
        id: "langlang",
        title: "LangLang-Language Learning App",
        navTitle: "LangLang-Language Learning App",
        headerImage: "/lovable-uploads/langlang-header.png",
        intro: "Lang-Lang is an app concept I designed to make picking up a new language feel less like a chore and more like a game. It blends personalized learning paths with practical conversational practice. As the lead UX designer on this concept, my goal was to craft an interface that felt completely natural to a beginner while still offering the depth needed for fluid learning.",
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
                highlight: "Learning a language is exciting at first, but drop-off rates are huge. A lack of real-world context and repetitive exercises often leads to frustration.",
                content: "Most existing platforms treat language like a textbook rather than a living skill. They can feel rigid and one-size-fits-all, failing to keep modern learners engaged over the long haul.",
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
                content: "We looked at several ways to make language acquisition stick. I led the charge on defining solutions to boost user retention, diving deep into where users currently drop off. Working closely with researchers and brand designers, I helped translate our core findings into a visually cohesive and immersive app experience that users actually wanted to return to daily."
            },
            {
                type: "rich-text",
                title: "Competitor Analysis",
                content: "Before wireframing, I dug into the giants: Duolingo, Memrise, Babbel, and MosaLingua. Each has a distinct flavor—Duolingo owns gamification, Memrise focuses on native speakers, and Babbel leans into grammar structure. But they all share common gaps, like a sudden steep learning curve or limited depth for intermediate speakers. Mapping out their strengths and weaknesses gave me a clear blueprint of opportunities for LangLang."
            },
            {
                type: "image",
                src: "/lovable-uploads/comp-lang.png",
                caption: "Competitive Analysis Overview"
            },
            {
                type: "rich-text",
                title: "Quantitative User Research",
                content: "To validate these assumptions, I ran a survey to see exactly where people were struggling. I got responses from 38 participants who were actively trying to learn everything from German and Spanish to various regional languages in India. Hearing their firsthand frustrations shaped our core user flows."
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
        intro: "Ever stood in an aisle staring at a nutrition label and felt totally lost? SnackHack is a mobile app designed to bridge that gap. It analyzes snack products on the spot, offering instant, easy-to-read health insights and suggesting better alternatives.",
        role: "Product Design",
        type: "Product Design · Mobile App",
        industry: "Health & Food Tech",
        duration: "Ongoing",
        timeline: "Feb 2025 - Present",
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
                highlight: "Nutrition labels are notoriously hard to decipher. They're packed with chemical names and convoluted serving sizes. Most of us want to snack healthier, but we simply don't have the time or background to properly evaluate a product while standing in the grocery store aisle.",
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
                        quote: "\"I want to eat better, but I don't have time to read every label.\"",
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
    },
    vstatecompliance: {
        id: "vstatecompliance",
        title: "vState — Compliance Workflow Platform",
        navTitle: "vState — Compliance Workflow Platform",
        subtitle: "Designing a centralized compliance management system for service providers handling multi-state regulatory filings.",
        headerImage: "/lovable-uploads/filenow2.jpg",
        intro: "Compliance service providers deal with a lot. Filing deadlines across multiple states, document requests from clients, and team coordination that happens mostly on email and spreadsheets. This project was about building a platform that brings all of that into one place so teams can focus on the actual work.",
        role: "Senior UX Designer",
        focus: "UX Strategy, Service Design, Workflow Optimization, Design Systems",
        type: "Client Project · B2B SaaS",
        industry: "B2B Compliance · Enterprise",
        duration: "9 months",
        timeline: "June 2024 – March 2025",
        platforms: "Web (B2B SaaS)",
        clientWebsite: "https://vstatefilings.com/",
        accentColor: "#2563eb",
        themeGradient: "from-[#EFF6FF] to-[#FFFFFF]",
        links: [
            { text: "Figma File", url: "https://www.figma.com/design/bw6YgvKiThQsRMoBAx0BPb/vState-Filings?node-id=1-28373&t=aTJKcqchaOcqjaW9-1" },
            { text: "", url: "" },
        ],
        blocks: [
            // ── Problem Context ──────────────────────────────────────────────
            {
                type: "problem-statement",
                title: "Problem Context",
                highlight: "Most compliance teams were juggling spreadsheets, email threads and separate tools to manage what was essentially one workflow.",
                content: "Compliance service providers handle many filings at the same time across different states and clients. The problem is that most of this work happens in disconnected tools. Spreadsheets for tracking, email for communication and document collection. This creates a situation where things fall through the cracks easily.",
                list: [
                    "No single place to see all active filings and their statuses",
                    "Teams had to switch between tools to work on the same client",
                    "Documents were requested by email and tracked manually",
                    "Clients kept following up because they had no visibility into progress"
                ]
            },
            // ── Users & Service Ecosystem ────────────────────────────────────
            {
                type: "role-list",
                title: "Users & Service Ecosystem",
                highlight: "Three types of users needed the platform to work completely differently for each of them.",
                content: "Who uses the platform:",
                roles: [
                    "Super Admin: Runs the compliance firm. Needs a clear view of all clients, teams, and filing deadlines without opening multiple tools.",
                    "Compliance Executive: Does the actual filing work. Needs task lists, document access and clear instructions without having to chase information.",
                    "Client Admin: Business owner or admin on the client side. Needs to track what is happening with their filings and upload documents when asked."
                ]
            },
            {
                type: "custom-component",
                componentName: "VStateServiceEcosystem",
            },
            // ── User Research Insights ───────────────────────────────────────
            {
                type: "rich-text",
                title: "User Research Insights",
                content: "Research was done through stakeholder interviews and workflow observation sessions with compliance professionals. The focus was on understanding how they currently work and what creates the most stress and wasted effort in their day."
            },
            {
                type: "custom-component",
                componentName: "VStateResearchInsights",
            },
            // ── Current Workflow (Before vState) ────────────────────────────
            {
                type: "rich-text",
                title: "Current Workflow (Before vState)",
                content: "Before the platform, compliance teams had no structured process. A client would send an email, someone would log it in a spreadsheet, documents would go back and forth over email, and status updates were given only when someone asked. Everything depended on individual memory and effort."
            },
            {
                type: "custom-component",
                componentName: "VStateBeforeWorkflow",
            },
            // ── Pain Point Analysis ──────────────────────────────────────────
            {
                type: "rich-text",
                title: "Pain Point Analysis",
                content: "We mapped each observable problem back to its root cause. This helped us understand what we were actually solving versus just treating symptoms. Three core problems kept appearing across all research sessions."
            },
            {
                type: "custom-component",
                componentName: "VStatePainPoints",
            },
            // ── Future Workflow (After vState) ───────────────────────────────
            {
                type: "rich-text",
                title: "Future Workflow (After vState)",
                content: "With vState, the entire compliance process runs inside one system. A client creates an order, the platform breaks it into tasks, the compliance team works through guided steps, documents go into one central place and notifications reach everyone automatically at each stage."
            },
            {
                type: "custom-component",
                componentName: "VStateAfterWorkflow",
            },
            // ── Notification System ──────────────────────────────────────────
            {
                type: "rich-text",
                title: "Automated Compliance Monitoring & Notification System",
                content: "Instead of relying on manual compliance calendars, the platform uses event-driven triggers that monitor regulatory workflows. As the UX designer, the notification logic and message content were researched and defined based on user expectations and workflow needs. Notifications follow a structured format: what happened, why it happened, and what action is required."
            },
            {
                type: "custom-component",
                componentName: "VStateNotificationSystem",
            },
            // ── User Personas ────────────────────────────────────────────────
            {
                type: "personas",
                title: "User Personas",
                personas: [
                    {
                        name: "Michael Anderson",
                        role: "Super Admin — Compliance Firm Owner",
                        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
                        quote: "\"I need one system that tells me everything is under control.\"",
                        goals: ["Zero missed deadlines", "Clear business overview", "Scalable operations"],
                        painPoints: ["Manual tracking", "Tool overload", "Limited real-time visibility"]
                    },
                    {
                        name: "Emily Rodriguez",
                        role: "Compliance Executive",
                        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
                        quote: "\"I just want clear tasks and documents in one place.\"",
                        goals: ["Faster filings", "Clear task ownership", "Minimal errors"],
                        painPoints: ["Context switching", "Missing documents", "Repetitive status updates"]
                    },
                    {
                        name: "David Thompson",
                        role: "Client Admin",
                        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
                        quote: "\"I want transparency without chasing updates.\"",
                        goals: ["Real-time filing status", "Deadline alerts", "Easy document uploads"],
                        painPoints: ["Unclear progress", "Anxiety around penalties", "Poor communication"]
                    }
                ]
            },
            // ── Service Blueprint ────────────────────────────────────────────
            {
                type: "rich-text",
                title: "Service Blueprint",
                content: "The service blueprint maps what the user sees and does on the front, what the product interface handles, what the backend does to make it work, and what external tools plug into the system. Each layer connects to the one above to show how the full service actually runs."
            },
            {
                type: "custom-component",
                componentName: "VStateServiceBlueprint",
            },
            // ── Key UX Solutions (Core Screens) ─────────────────────────────
            {
                type: "core-screens",
                title: "Key UX Solutions",
                highlight: "Annotated screens showing how each feature solves a specific user problem.",
                screens: [
                    { title: "Sign-up & Role-Based Access — Context-aware onboarding with role routing", image: "/lovable-uploads/Sign Up.png" },
                    { title: "Super Admin Dashboard — Centralized visibility across all filings and deadlines", image: "/lovable-uploads/Super Admin Deadilines.mp4" },
                    { title: "Client Profile & Document Vault — Aggregated client data with structured document storage", image: "/lovable-uploads/Companies.png" },
                    { title: "Order Creation — Guided step-by-step filing process that reduces errors", image: "/lovable-uploads/order-process.mp4" }
                ]
            },
            // ── Asset Placeholders: Missing screens ──────────────────────────
            {
                type: "image",
                title: "Notification Center",
                src: "/lovable-uploads/Notification.png",
                caption: "Notification Center — compliance alerts organized by trigger type (deadline, document, status), with structured context on what happened, why it happened, and the required action."
            },
            {
                type: "image",
                title: "Compliance Map View",
                src: "/lovable-uploads/Compliance Map View.mp4",
                caption: "Multi-state compliance map — a geographic visualization showing filing statuses across all registered states per client entity, allowing executives to spot at-risk jurisdictions at a glance."
            },
            // ── Platform Demo ────────────────────────────────────────────────
            {
                type: "image",
                src: "/lovable-uploads/vstate-demo.gif",
                caption: "Full Platform Flow — Demonstrating the end-to-end compliance workflow"
            },
            // ── Design System ────────────────────────────────────────────────
            {
                type: "rich-text",
                title: "Design System",
                content: "A shared design system was built to keep the product consistent as it grows. It covers how status is shown in colour, how data-heavy tables are structured, how error messages appear in forms, how notifications look and how navigation is laid out across different screen types."
            },
            {
                type: "custom-component",
                componentName: "VStateDesignSystemGrid",
            },
            // ── Expected Impact ──────────────────────────────────────────────
            {
                type: "impact",
                title: "Expected Impact",
                items: [
                    "Centralized visibility across all compliance workflows and deadlines",
                    "Reduced manual follow-up communication between teams and clients",
                    "Faster filing preparation for compliance executives",
                    "Improved client trust through transparent, real-time status updates",
                    "Automated notifications eliminate missed deadlines and reduce stress",
                    "Structured document management removes repeated document requests"
                ]
            },
            // ── Key Learnings ────────────────────────────────────────────────
            {
                type: "learnings",
                title: "Key Learnings",
                learnings: [
                    "Compliance UX must prioritize clarity over creativity — users need predictability and trust above all.",
                    "Automation reduces operational stress for compliance teams significantly; guided workflows prevented errors without slowing people down.",
                    "Visibility and transparency significantly increase client trust — making progress observable was the single highest-impact design decision."
                ],
                future: [
                    "AI-assisted compliance risk predictions",
                    "Smart deadline forecasting based on historical data",
                    "Intelligent task prioritization for critical filings",
                    "Chatbot support for complex legal compliance exceptions"
                ]
            }
        ]
    }
};
