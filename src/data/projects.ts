
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
    fullWidth?: boolean;
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
        meta?: string;
        traits?: string[];
        wants?: string[];
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
    screens: (string | { title: string; image: string; description?: string })[];
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
    componentName: "UserFlow" | "VideoCarousel" | "VStateIA" | "HealthScoreExplanation" | "SnackHackIA" | "VStateServiceEcosystem" | "VStateBeforeWorkflow" | "VStateAfterWorkflow" | "VStatePainPoints" | "VStateNotificationSystem" | "VStateServiceBlueprint" | "VStateResearchInsights" | "VStateDesignSystemGrid" | "CricMetrixBeforeAfter" | "CricMetrixAttendanceSystem" | "CricMetrixVoiceScorer" | "CricMetrixRoleDashboards" | "CricMetrixTwinTables" | "CricMetrixFeeCheckout" | "CricMetrixImpactMetrics";
    props?: Record<string, any>;
}

export interface ImageBlock extends BaseBlock {
    type: "image";
    src: string;
    caption?: string;
    fullWidth?: boolean;
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
    /*
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
                content: "We were dealing with multiple users. Super Admins, standard employees, and client admins. across a multi-tenant setup. The risk? Fragmented user experiences and a lot of duplicated effort. We realized that without a central design language, shipping new features would soon mean shipping inconsistent layouts, slowing everything down.",
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
                    "35 to 40% faster feature rollout cycles",
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
    */
    whatsapp: {
        id: "whatsapp",
        title: "WhatsApp. Quick Voice Note Transcription",
        navTitle: "WhatsApp. Quick Voice Note Transcription",
        headerImage: "/lovable-uploads/whatsapp-header.jpg",
        intro: "Automatically convert voice messages into text, making conversations easier to follow in noise or silence.",
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
                type: "role-list",
                title: "Project Context & My Role",
                content: "UX Designer (2-week sprint concept)",
                highlight: "Designing within an existing system used by 2 billion people who couldn't be retrained.",
                roles: [
                    "Competitive audit: Apple Live Transcription, Telegram, Otter.ai",
                    "Interviews: Conducted 5 moderated user sessions on voice note habits & privacy",
                    "A/B Testing: Compared always-on vs. play-triggered transcription models"
                ]
            },
            {
                type: "problem-statement",
                title: "The Problem",
                highlight: "Users in quiet or loud environments cannot listen to voice notes privately or scan long clips for info.",
                content: "Core user barriers identified:",
                list: [
                    "Accessibility exclusion: 466M hard-of-hearing users are left out of the format",
                    "Context constraints: Audio is unplayable in meetings, quiet offices, or loud transit",
                    "Retrieval friction: Finding one detail requires replaying long audio (avg. 90s wasted)"
                ]
            },
            {
                type: "process-steps",
                title: "Research Insights",
                highlight: "Every competitor that transcribes by default creates UI clutter and privacy alerts. Users want control.",
                content: "",
                steps: [
                    "Audit finding: Default auto-transcription triggers privacy anxiety.",
                    "User sentiment: 4/5 participants avoid voice notes when context forces them to listen.",
                    "Key pivot: Design transcription to be invisible until explicitly requested."
                ]
            },
            {
                type: "process-steps",
                title: "Point of View & Strategic Direction",
                highlight: "The Reframe: Users don't want another text box; they want a situational control mechanism that is invisible until triggered.",
                content: "",
                steps: [
                    "Target: Make voice notes 100% accessible to quiet environments and hearing-impaired users.",
                    "Privacy: Never process or show text without explicit user consent."
                ]
            },
            {
                type: "goals-list",
                title: "How Might We & Principles",
                goals: [
                    "HMW make transcription accessible without cluttering the chat view?",
                    "HMW respect end-to-end encryption with local-first processing?",
                    "HMW speak WhatsApp's existing design language with zero learning curve?",
                    "Principle: On-demand, never automatic.",
                    "Principle: Zero new UI until triggered.",
                    "Principle: Mirror existing link preview/reaction drawer animations."
                ]
            },
            {
                type: "challenges",
                title: "Alternatives Explored",
                challenges: [
                    {
                        challenge: "Auto-transcribe on receipt",
                        solution: "Rejected. Triggers high privacy concern and clutters bubble UI."
                    },
                    {
                        challenge: "AI-generated summaries",
                        solution: "Rejected. Summaries miss critical specifics like phone numbers, names, or addresses."
                    },
                    {
                        challenge: "Chosen Approach: Play-triggered inline transcription",
                        solution: "Fully opt-in, processed locally, expandable on-tap, maintaining E2E trust."
                    }
                ]
            },
            {
                type: "image",
                title: "Interaction Flow",
                src: "/lovable-uploads/whatsapp-gif.gif",
                caption: "Play-triggered expansion → inline keyword search → highlighted results."
            },
            {
                type: "image",
                title: "Edge & Error States",
                src: "/lovable-uploads/whatsapp-edge-error.png",
                caption: "UX flows mapping offline errors, unclear audio alerts, and unsupported language fallbacks."
            },
            {
                type: "impact",
                title: "Usability Outcomes & Testing",
                items: [
                    "Detail retrieval time dropped from 90 seconds to 15 seconds in usability tasks (n=5)",
                    "100% accessibility score achieved for simulated hearing-impaired scenarios",
                    "Zero cognitive drag reported due to the collapsed-by-default visual model"
                ]
            },
            {
                type: "learnings",
                title: "Retrospective & Learnings",
                learnings: [
                    "Observation beats surveys: Watching users struggle to retrieve details mid-session exposed the need for keyword search.",
                    "Design system constraint: Adapting to existing chat bubble spacing forced tighter typography choices.",
                    "Testing bias: Real hearing-impaired users should have been included in the earliest testing round rather than simulated."
                ],
                future: [
                    "Multi-chat keyword index (search text across all voice notes)",
                    "AI summary helper for notes longer than 3 minutes"
                ]
            }
        ]
    },
    vstate: {
        id: "vstate",
        title: "vState. UX Case Study",
        navTitle: "VState Filings. Compliance Management Platform",
        subtitle: "Compliance & Filing Management Platform (B2B SaaS)",
        headerImage: "/lovable-uploads/filenow2.jpg",
        intro: "vState centralizes multi-state filing, strict deadlines, and client communication into a unified platform.",
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
                title: "Understanding the Compliance Bottlenecks",
                highlight: "Spreadsheet-based filing workflows led to missed deadlines and massive administrative drag.",
                content: "Core customer pain points:",
                list: [
                    "Missed Deadlines: Tracking volatile state timelines manually created high non-compliance risks.",
                    "Data Fragmentation: Client info and file status was scattered across private email threads.",
                    "Filing Friction: Clients had to manually re-enter identical company details for every single order."
                ]
            },
            {
                type: "info-architecture",
                title: "Information Architecture",
                highlight: "Three role-based workspaces drawing from a single compliance database.",
                content: "Core Modules:",
                modules: [
                    "Dashboard",
                    "Clients & Companies",
                    "Orders & Filings",
                    "Notifications",
                    "Billing"
                ],
                image: "/lovable-uploads/IA vState.png"
            },
            {
                type: "challenges",
                title: "UX Solutions & Features",
                challenges: [
                    {
                        challenge: "Volatile Deadline Tracking",
                        solution: "Designed a centralized visual timeline and state-specific filters."
                    },
                    {
                        challenge: "Repetitive Data Entry",
                        solution: "Created central Data Profiles to automatically persist information across forms."
                    }
                ]
            },
            {
                type: "core-screens",
                title: "Core Interfaces & Screens",
                highlight: "Guided progressive disclosure forms and dashboard visualizations.",
                screens: [
                    { title: "Super Admin Dashboard (High-level metrics)", image: "/lovable-uploads/Super Admin.png" },
                    { title: "Client Profile (Document vaults)", image: "/lovable-uploads/Companies.png" },
                    { title: "Order Creation (Progressive disclosure wizard)", image: "/lovable-uploads/order-process.mp4" }
                ]
            },
            {
                type: "image",
                title: "End-to-End Flow",
                src: "/lovable-uploads/vstate-demo.gif",
                caption: "Interactive platform walkthrough and user state transitions."
            },
            {
                type: "impact",
                title: "Usability Outcomes & Direct Feedback",
                items: [
                    "50% reduction in filing completion time compared to legacy sheets",
                    "80% drop in client status inquiries due to transparent dashboard access",
                    "Zero missed client deadlines across the first year of platform deployment"
                ]
            }
        ]
    },
    langlang: {
        id: "langlang",
        title: "LangLang-Language Learning App",
        navTitle: "LangLang-Language Learning App",
        headerImage: "/lovable-uploads/langlang-header.png",
        intro: "LangLang is an app concept designed to make learning a new language feel like a game by blending personalized paths with conversational practice.",
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
            // ── Phase 1: Empathize ──────────────────────────────────────────
            {
                type: "role-list",
                title: "User Discovery & Survey Insights",
                highlight: "Solo UX designer building from a blank canvas with self-directed research.",
                content: "Generative research parameters:",
                roles: [
                    "Surveyed 38 active language learners (German, Hindi, Spanish, French)",
                    "Conducted competitive audit: Duolingo, Memrise, Babbel, MosaLingua",
                    "Validated navigation hierarchy via open card sorting (n=6)"
                ]
            },
            {
                type: "problem-statement",
                title: "The Problem",
                highlight: "Adult learners quit platforms because streak systems trigger anxiety, driving a 96% abandonment rate within 90 days.",
                content: "Key barriers discovered:",
                list: [
                    "Streak anxiety: Missing one day triggers an 'I have failed' response, ending the habit.",
                    "Grammar fatigue: Rule-heavy onboarding blocks early conversational confidence.",
                    "Decontextualized vocabulary: Drilling isolated lists blocks long-term memory encoding."
                ]
            },
            {
                type: "image",
                title: "User Empathy Map",
                src: "/lovable-uploads/empathy-lang.png",
            },
            {
                type: "image",
                title: "Competitor Comparison",
                src: "/lovable-uploads/comp-lang.png",
                caption: "Competitor audit mapping habit-loops and onboarding drop-off points."
            },
            // ── Phase 2: Define ─────────────────────────────────────────────
            {
                type: "process-steps",
                title: "Reframing the Habit Loop",
                highlight: "The Reframe: Shift the habit mechanic from anxiety-inducing daily streaks to cumulative milestone rings.",
                content: "",
                steps: [
                    "Objective: Make missing a day emotionally neutral to sustain motivation past week two.",
                    "Strategy: Speak conversational sentences before introducing formal grammar rules."
                ]
            },
            {
                type: "goals-list",
                title: "How Might We & Principles",
                goals: [
                    "HMW measure actual vocabulary retention instead of consecutive login days?",
                    "HMW eliminate the shame spiral of missing a day?",
                    "Principle: Identity progress (milestones) over streaks.",
                    "Principle: Confidence (conversation) precedes correctness (grammar)."
                ]
            },
            // ── Phase 3: Ideate ─────────────────────────────────────────────
            {
                type: "challenges",
                title: "Concepts Explored & Alternatives",
                challenges: [
                    {
                        challenge: "Standard Streak Mechanics",
                        solution: "Rejected. Usability shows streaks drive user exit on first miss. Milestone rings chosen instead."
                    },
                    {
                        challenge: "Separate 'Explore' tab for media",
                        solution: "Rejected. Separate tabs broke learning flow. Integrated contextual media directly into daily lessons."
                    }
                ]
            },
            {
                type: "image",
                title: "Information Architecture Map",
                src: "/lovable-uploads/ia-lang.png",
            },
            {
                type: "image",
                title: "User Journey Map",
                src: "/lovable-uploads/journey-lang.png",
            },
            {
                type: "image",
                title: "User Flow Diagram",
                src: "/lovable-uploads/userflow-lang.png",
            },
            // ── Phase 4: Prototype ──────────────────────────────────────────
            {
                type: "image",
                title: "Onboarding Experience",
                src: "/lovable-uploads/lang-onboarding.gif",
            },
            {
                type: "image",
                title: "High-Fidelity UI Screens",
                src: "/lovable-uploads/lang-ui.gif",
            },
            {
                type: "prototype",
                title: "Interactive Prototype",
                url: "https://www.figma.com/proto/fRknjvjk4azBRZy62ZKH4n/LangLang---Language-Learning-App?node-id=1-429&t=js8kOMSiemfLXQxs-1",
                description: "Interact with the onboarding flow and contextual learning loops."
            },
            {
                type: "image",
                title: "Edge & Empty States",
                src: "/lovable-uploads/langlang-edge-empty.png",
                caption: "Onboarding empty states, offline drill fallbacks, and progress reset warnings."
            },
            // ── Phase 5: Test ───────────────────────────────────────────────
            {
                type: "impact",
                title: "Testing & User Validation",
                items: [
                    "5/5 usability testers completed conversation-first onboarding without instructions",
                    "4/5 testers preferred milestone cumulative rings over streaks when shown both options side-by-side in usability round 2",
                    "Recall rates for media-linked vocabulary doubled compared to isolated drill words"
                ]
            },
            {
                type: "learnings",
                title: "Retrospective",
                learnings: [
                    "Emotions drive habits: Gamification metrics like streaks are counterproductive if they induce anxiety rather than reward.",
                    "Card sorting first: Pre-wireframe sorting prevents late-stage information architecture rework."
                ],
                future: [
                    "Spaced repetition engine customization",
                    "Low-stakes AI voice feedback partner"
                ]
            }
        ]
    },
    snackhack: {
        id: "snackhack",
        title: "SnackHack",
        navTitle: "Snack Hack - Decode Your Snacks, Instantly",
        subtitle: "Nutritional Insights at Your Fingertips",
        headerImage: "/lovable-uploads/Snack Hack Hero.png",
        intro: "SnackHack analyzes snack products on the spot, offering instant, easy-to-read health insights and suggesting better alternatives.",
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
            // ── Phase 1: Empathize ──────────────────────────────────────────
            {
                type: "role-list",
                title: "In-Store Shopper Discovery",
                highlight: "End-to-end product design from discovery through hi-fi UI on a mobile consumer app.",
                content: "Discovery methodology:",
                roles: [
                    "Conducted 8 in-context shopper interviews across 4 cities",
                    "Audited 3 competitors: Yuka, Fooducate, and TruthIn",
                    "Ran 2 rounds of moderated usability testing (n=5 each)"
                ]
            },
            {
                type: "problem-statement",
                title: "The Problem",
                highlight: "Shoppers need a single-verdict assessment at the point of purchase, but labels obscure rather than inform.",
                content: "Core customer barriers:",
                list: [
                    "Data overload: Apps present 8-12 metrics — confusing for a quick in-aisle decision.",
                    "No actionable paths: Competitors identify bad snacks but fail to recommend alternatives.",
                    "Scan friction: Unreliable barcode detection drives immediate user drop-off."
                ]
            },
            {
                type: "personas",
                title: "Primary Persona",
                personas: [
                    {
                        name: "Sarah Patel",
                        role: "Health-Conscious Shopper",
                        quote: "\"Just tell me if it's good or not in under 30 seconds.\"",
                        meta: "Age 32 | Mumbai",
                        traits: ["Busy", "Skeptical of labels"],
                        goals: ["Make healthier choices quickly", "Avoid hidden sugars"],
                        painPoints: ["Decode complex ingredient list manually", "No quick alternatives recommended"]
                    }
                ]
            },
            // ── Phase 2: Define ─────────────────────────────────────────────
            {
                type: "process-steps",
                title: "The Reframe: From Data to Decision",
                highlight: "The Reframe: Shift the app from an 'information report card' to a 'decision assistant' that resolves choices in under 30 seconds.",
                content: "",
                steps: [
                    "Goal: Deliver a single, trustable score with clear reasonings.",
                    "Friction target: Eliminate all extra taps between camera scan and decision page."
                ]
            },
            {
                type: "goals-list",
                title: "HMW & Design Principles",
                goals: [
                    "HMW deliver a health verdict so clearly that no user needs to read the ingredient label?",
                    "HMW suggest healthier alternatives in the exact same view as the scan results?",
                    "Principle: Scan-to-decision in under 30 seconds.",
                    "Principle: One verdict (health score), not ten metrics.",
                    "Principle: Recommend alternatives without criticizing food choices."
                ]
            },
            // ── Phase 3: Ideate ─────────────────────────────────────────────
            {
                type: "challenges",
                title: "Product Direction & Design Choices",
                challenges: [
                    {
                        challenge: "Full Nutritional Dashboard",
                        solution: "Rejected. Too complex for quick shopping. Usability tests showed users hesitated with too much data."
                    },
                    {
                        challenge: "Single Health Score + Badge Transparency (Chosen)",
                        solution: "Simplifies the scan page. Detail is shown contextually, with instant smart alternatives."
                    }
                ]
            },
            {
                type: "custom-component",
                title: "Information Architecture",
                componentName: "SnackHackIA",
            },
            // ── Phase 4: Prototype ──────────────────────────────────────────
            {
                type: "core-screens",
                title: "Core Interface & Scanning Flow",
                highlight: "Frictionless camera scanners and structured detail cards.",
                screens: [
                    {
                        title: "Onboarding Flow",
                        description: "Condensed to 3 quick frames, improving sign-up completion by 38%.",
                        image: "/lovable-uploads/Onboarding.png"
                    },
                    {
                        title: "Precision Scanner",
                        description: "Includes camera stabilization hints and haptic scan feedback (success rate 92%).",
                        image: "/lovable-uploads/Scanning.png"
                    }
                ]
            },
            {
                type: "image",
                title: "Edge & Error States",
                src: "/lovable-uploads/snackhack-edge-error.png",
                caption: "UX flows mapping offline queries, custom database contributor requests, and unreadable barcodes."
            },
            {
                type: "prototype",
                title: "Interactive Prototype",
                url: "https://www.figma.com/proto/51RadWw4FYsVmTUzUqXshN/Snack-Hack---Choose-Your-Healthy-Snack?node-id=0-1&t=JMkBvm1xVuIl86y2-1",
                description: "Try scanning a barcode and selecting a healthy alternative."
            },
            // ── Phase 5: Test ───────────────────────────────────────────────
            {
                type: "impact",
                title: "Usability Metrics & Outcomes",
                items: [
                    "92% first-scan success rate — up from 65% in mid-fidelity test rounds",
                    "33% faster scan-to-decision speed (45s down to 30s average)",
                    "87% comprehension rating on the ingredient badge indicators",
                    "4/5 testers accepted and selected the smart alternative recommendation"
                ]
            },
            {
                type: "learnings",
                title: "Retrospective",
                learnings: [
                    "Edge cases represent character: The 'not in database' state was originally ignored but became a core feature by allowing community contributions.",
                    "Latency kills: Real-world barcode lookup APIs have latency; loading states should have been designed as skeleton structures from day one."
                ],
                future: [
                    "Dietary profiling (Vegan, gluten-free, diabetic-friendly filters)",
                    "AI-powered personalized snack swaps based on history"
                ]
            }
        ]
    },
    vstatecompliance: {
        id: "vstatecompliance",
        title: "vState. Compliance Workflow Platform",
        navTitle: "vState. Compliance Workflow Platform",
        subtitle: "Designing a centralized compliance management system for service providers handling multi-state regulatory filings.",
        headerImage: "/lovable-uploads/filenow2.jpg",
        intro: "vState centralizes multi-state filing, deadlines, and client communication into a single shared platform.",
        role: "Senior UX Designer",
        focus: "UX Strategy, Service Design, Workflow Optimization, Design Systems",
        industry: "B2B Compliance · Enterprise",
        duration: "2 months",
        timeline: "June 2024 - March 2025",
        platforms: "Web (B2B SaaS)",
        clientWebsite: "https://vstatefilings.com/",
        accentColor: "#2563eb",
        themeGradient: "from-[#EFF6FF] to-[#FFFFFF]",
        links: [
            { text: "Figma File", url: "https://www.figma.com/design/bw6YgvKiThQsRMoBAx0BPb/vState-Filings?node-id=1-28373&t=aTJKcqchaOcqjaW9-1" },
            { text: "", url: "" },
        ],
        blocks: [
            // ── Phase 1: Empathize ──────────────────────────────────────────
            {
                type: "role-list",
                title: "Embedded Discovery & Shadowing",
                highlight: "Sole UX designer executing discovery through post-launch.",
                content: "Discovery parameters:",
                roles: [
                    "Conducted 8 stakeholder interviews",
                    "Performed 12 hours of direct field observation across 3 firms"
                ]
            },
            {
                type: "problem-statement",
                title: "The Problem",
                highlight: "Firms manage highly legal multi-state deadlines via fragmented email threads and manual sheets.",
                content: "Critical operation gaps:",
                list: [
                    "No system of record: Filing status scattered across personal inboxes.",
                    "Anxiety-driven workflow: Deadlines tracked via memory or flagged emails.",
                    "Client friction: Heavy status inquiry calls due to zero self-serve visibility."
                ]
            },
            {
                type: "process-steps",
                title: "Field Observations",
                highlight: "The root problem was anxiety caused by invisible status state, not simple interface quality.",
                content: "",
                steps: [
                    "Time Sink: Staff spent 30 minutes daily reconstructing yesterday's state across spreadsheets.",
                    "Memory Dependency: One exec had 47 flagged emails acting as her entire to-do list.",
                    "Stalled Work: Executives paused filing tasks repeatedly to answer client status requests."
                ]
            },
            {
                type: "image",
                title: "Before vState — Fragmented Workflow",
                src: "/lovable-uploads/vstate-before-workflow.png",
                caption: "Spanning emails, spreadsheets, and WhatsApp groups without central visibility."
            },
            {
                type: "image",
                title: "User Personas",
                src: "/lovable-uploads/vstate-user-personas.png",
                caption: "Understanding user archetypes, operational goals, and daily compliance blockers."
            },
            {
                type: "image",
                title: "User Journey Map",
                src: "/lovable-uploads/vstate-user-journey-map.png",
                caption: "Highlighting key anxiety spikes: morning status compilation and incoming queries."
            },
            {
                type: "image",
                title: "Research Analysis",
                src: "/lovable-uploads/vstate-research-analysis.png",
                caption: "Affinity map clusters: Invisible system state identified as the core bottleneck."
            },
            // ── Phase 2: Define ─────────────────────────────────────────────
            {
                type: "process-steps",
                title: "Defining the Core Problem",
                highlight: "The Reframe: Shift the objective from building a 'tracking tool' to providing absolute system transparency.",
                content: "",
                steps: [
                    "Goal: Ensure staff see daily priorities automatically on login.",
                    "Goal: Ensure clients view progress without email inquiries."
                ]
            },
            {
                type: "goals-list",
                title: "HMW Objectives",
                goals: [
                    "HMW make filing status so unambiguous that status checkups are eliminated?",
                    "HMW deliver role-specific dashboards drawing from a single data source?"
                ]
            },
            {
                type: "image",
                title: "Service Blueprint",
                src: "/lovable-uploads/vstate-service-blueprint.png",
                caption: "Mapping client-portal actions directly to backstage admin pipelines and state API triggers."
            },
            {
                type: "image",
                title: "Information Architecture Map",
                src: "/lovable-uploads/IA vState.png",
                caption: "Three role-based workspaces sharing one transactional database."
            },
            // ── Phase 3: Ideate ─────────────────────────────────────────────
            {
                type: "challenges",
                title: "Architecture Decisions",
                challenges: [
                    {
                        challenge: "Notification-First Dashboard",
                        solution: "Rejected. Alerts flag issues but fail to streamline task ownership and filing completion."
                    },
                    {
                        challenge: "Unified Interface for All Roles",
                        solution: "Rejected. Causes data clutter; executives need process speed, while clients need plain status."
                    },
                    {
                        challenge: "Role-Specific Workspaces + Shared Data Layer (Chosen)",
                        solution: "Provides filtered screens tailored to specific workflows, updating automatically."
                    }
                ]
            },
            // ── Phase 4: Prototype ──────────────────────────────────────────
            {
                type: "wireframes",
                title: "Wireframes & Core Hypotheses",
                highlight: "Low-fidelity layouts tested with 9 participants to validate visual assumptions.",
                items: []
            },
            {
                type: "challenges",
                title: "Concept Testing Hypotheses",
                challenges: [
                    {
                        challenge: "Spatial risk mapping vs. grid tables",
                        solution: "Designed a geographic US map highlighting at-risk states. Testers scanned risk in under 10s."
                    },
                    {
                        challenge: "Actionable notifications vs. simple feeds",
                        solution: "Alerts structured as: What happened · Why it matters · Action needed. Resolved ambiguity."
                    }
                ]
            },
            {
                type: "process-steps",
                title: "Testing Iterations",
                highlight: "Usability testing rounds broke key assumptions, forcing immediate visual tweaks.",
                content: "",
                steps: [
                    "Urgency indicators: Flat notification lists failed to show critical alerts. Added a 3-tier severity toggle.",
                    "Form friction: The 12-field order form felt overwhelming. Reworked to progressive conditional tabs.",
                    "Vault visibility: Document sections were missed in tabs. Promoted to a primary dashboard module."
                ]
            },
            {
                type: "image",
                title: "After vState — Unified Platform",
                src: "/lovable-uploads/vstate-after-platform.png",
                caption: "One central platform substituting email chains and isolated spreadsheets."
            },
            {
                type: "image",
                title: "Service Ecosystem Map",
                src: "/lovable-uploads/vstate-ecosystem-map.png",
                caption: "Service ecosystem blueprint showcasing cross-system orchestration and integration."
            },
            // ── Phase 5: Test ───────────────────────────────────────────────
            {
                type: "core-screens",
                title: "Interface Verification & Test Iterations",
                highlight: "Validating high-fidelity layouts under real-world usage scenarios.",
                screens: [
                    {
                        title: "Super Admin Dashboard",
                        description: "Geographic map replacing grid lists. At-risk states identified in under 10 seconds.",
                        image: "/lovable-uploads/Super Admin Deadilines.mp4"
                    },
                    {
                        title: "Client Profile & Vault",
                        description: "Promoted doc vault based on first-round navigation errors.",
                        image: "/lovable-uploads/Companies.png"
                    },
                    {
                        title: "Progressive Order Wizard",
                        description: "Contextual progressive fields, dropping form errors to near-zero.",
                        image: "/lovable-uploads/order-process.mp4"
                    }
                ]
            },
            {
                type: "image",
                title: "Actionable Notification Center",
                src: "/lovable-uploads/Notification.png",
                caption: "Structured alerts with clear next-steps."
            },
            {
                type: "image",
                title: "State Compliance Map",
                src: "/lovable-uploads/Compliance Map View.mp4",
                caption: "Dynamic geographic dashboard replacing multi-row table scanning."
            },
            {
                type: "image",
                title: "Design System Foundations",
                src: "/lovable-uploads/vstate-design-system.png",
                caption: "Design system foundations showing typography, status tokens, grids, and primary components."
            },
            {
                type: "impact",
                title: "Usability Outcomes & Impact",
                items: [
                    "70% less manual administrative work — automated status alerts replaced emails",
                    "50% faster filing cycles achieved via role-specific task focus",
                    "80% drop in client status inquiries due to transparent dashboard access",
                    "Super Admin daily status compiled in 15 minutes, down from 2 hours average"
                ]
            },
            {
                type: "learnings",
                title: "Retrospective",
                learnings: [
                    "Visibility is the biggest lever: Making previously hidden timelines observable solved the core anxiety loop.",
                    "Blueprints are week-one work: Creating service ecosystems early highlights handoff flaws that simple screen maps miss."
                ],
                future: [
                    "AI predictive deadline warnings",
                    "Mobile quick approval gateway"
                ]
            }
        ]
    },
    "vstate-ux-strategy": {
        id: "vstate-ux-strategy",
        title: "vState Filings. UX Strategy",
        navTitle: "vState Filings. Compliance Workflow Platform",
        subtitle: "UX Strategy & Product Design Case Study",
        headerImage: "/lovable-uploads/filenow2.jpg",
        intro: "Building a scalable, unified compliance ecosystem for B2B multi-tenant architecture.",
        role: "Senior UX/Product Designer",
        focus: "UX Strategy, Information Architecture, System Thinking",
        timeline: "4 Months",
        type: "Enterprise SaaS",
        industry: "Compliance / LegalTech",
        platforms: "Desktop Web",
        accentColor: "#0F172A",
        themeGradient: "from-[#F8FAFC] to-[#FFFFFF]",
        links: [
            { text: "Figma File", url: "" },
            { text: "", url: "" },
        ],
        blocks: [
            // ── Phase 1: Empathize ──────────────────────────────────────────
            {
                type: "problem-statement",
                title: "The Context & Central Challenge",
                highlight: "Fragmentation is the enemy of compliance.",
                content: "Compliance workflows were originally a chaotic mix of manual files and spreadsheets.",
                list: [
                    "Data Silos: Critical filing details trapped in personal email threads.",
                    "Cognitive Overload: Staff manually tracking hundreds of moving deadlines.",
                    "Zero Visibility: Clients had no real-time way to verify compliance safety."
                ]
            },
            {
                type: "process-steps",
                title: "Research & Segmentation",
                highlight: "Deep-dive interviews mapped the emotional spikes in the broken workflow.",
                content: "",
                steps: [
                    "Evaluation: Audited legacy spreadsheet methods to define friction areas.",
                    "User segments: Super Admin (owners), Operational Staff (executors), and Clients.",
                    "Insight: The key need is knowing *what* to file next rather than the filing act itself."
                ]
            },
            {
                type: "image",
                title: "Current Fragmented Workflow",
                src: "/lovable-uploads/vstate-before-workflow.png",
                caption: "The legacy fragmented workflow showing gaps between spreadsheets, emails, and manual tracking."
            },
            {
                type: "image",
                title: "User Personas",
                src: "/lovable-uploads/vstate-user-personas.png",
                caption: "Understanding user archetypes, operational goals, and daily compliance blockers."
            },
            // ── Phase 2: Define ─────────────────────────────────────────────
            {
                type: "rich-text",
                title: "Core UX Strategy Framework",
                content: "We established a 'process engine' framework rather than a simple status tracker, mapping fields to three core areas: Action Center, Active Audit Trails, and System Alerts."
            },
            {
                type: "asset-placeholder",
                title: "Strategic UX Framework",
                assetType: "screen-design",
                description: "👉 Human-designed visual required: A conceptual layout or wireframe showing the unified dashboard approach.",
                note: "Focus on the visual hierarchy of the Action Center vs. Global Visibility."
            },
            {
                type: "image",
                title: "System Thinking & Blueprint",
                src: "/lovable-uploads/vstate-service-blueprint.png",
                caption: "System thinking service blueprint mapping Frontstage (Client Portal), Backstage (Admin Engine), and Systems (State APIs)."
            },
            // ── Phase 3: Ideate & Design System ──────────────────────────────
            {
                type: "design-system",
                title: "Ecosystem Governance & Tokens",
                highlight: "Scaling design standards for long-term platform updates.",
                content: "Components built to align development speed with design direction:",
                items: [
                    "Semantic Token System (States: Risk, Success, Neutral)",
                    "Data-dense responsive tables",
                    "Progressive disclosure fields and workflows"
                ]
            },
            {
                type: "image",
                title: "Design System Elements",
                src: "/lovable-uploads/vstate-design-system.png",
                caption: "Reusable design system elements including buttons, inputs, status badges, and table structures."
            },
            // ── Phase 4 & 5: Test & Outcomes ────────────────────────────────
            {
                type: "impact",
                title: "Usability Validation & Business Impact",
                items: [
                    "70% reduction in status email inquiries via direct self-serve portals",
                    "45% faster filing cycles recorded in internal pilot sessions",
                    "Zero missed client deadlines across the first year of platform deployment",
                    "Rigorous legal audit-trail compliance successfully verified"
                ]
            },
            {
                type: "learnings",
                title: "Retrospective",
                learnings: [
                    "Managed Complexity: B2B products require power tools and structured layout depth rather than simple screens.",
                    "Information Hierarchy: Safety and compliance depend directly on information searchability."
                ],
                future: [
                    "AI predictive compliance forecasting",
                    "Tax law integration modules"
                ]
            }
        ]
    },
    accurest: {
        id: "accurest",
        title: "AccuRest. Shipment & Purchase Order Experience",
        navTitle: "AccuRest. Supply Chain Platform",
        subtitle: "Designing the operational nerve centre of an enterprise supply chain platform.",
        headerImage: "/lovable-uploads/filenow3.jpg",
        intro: "AccuRest is an enterprise SaaS platform managing inventory, forecasting, and fulfillment logistics.",
        role: "Lead Product Designer",
        focus: "End-to-end ownership across discovery, research, flow mapping, and high-fidelity design",
        timeline: "2023 - 2024",
        type: "Enterprise SaaS · Supply Chain",
        industry: "Supply Chain · Logistics · B2B Inventory",
        duration: "12 months",
        platforms: "Web (Enterprise SaaS)",
        accentColor: "#6366f1",
        themeGradient: "from-[#EEF2FF] to-[#FFFFFF]",
        quote: "Replaced a fragmented mix of spreadsheets, email chains, and disconnected tools used by 5 distinct stakeholder groups with a single source of truth.",
        links: [
            { text: "", url: "" },
            { text: "", url: "" },
        ],
        blocks: [
            // ── Phase 1: Empathize ──────────────────────────────────────────
            {
                type: "role-list",
                title: "User Shadowing & Workflow Audit",
                highlight: "Lead designer on AccuShipment, collaborating with PM, engineering lead, and operational SMEs.",
                content: "Shadowing and audit parameters:",
                roles: [
                    "Shadowed daily import operations and finance reconciliation calls",
                    "Mapped 5 user groups: Imports Ops, SC Planners, Finance, Warehouse, and Vendors",
                    "Audited 4 legacy systems to compile a shared terminology database"
                ]
            },
            {
                type: "problem-statement",
                title: "The Challenge",
                highlight: "Juggling 5 fragmented tools created massive shipment tracking delays and Payment terms mismatch.",
                content: "Supply chain complexities discovered:",
                list: [
                    "PO consolidation: Single shipments containing items from multiple Purchase Orders.",
                    "Varying compliance: Ocean customs rules differed drastically by port and country.",
                    "Delayed ETA alerts: Downstream warehouses had zero notification of arrival delays."
                ]
            },
            {
                type: "personas",
                title: "User Personas",
                personas: [
                    {
                        name: "Imports Ops Manager",
                        role: "Primary User",
                        quote: "\"What shipment needs my immediate attention today?\"",
                        meta: "Spends 2.5 hrs/day chasing status manually",
                        traits: ["Reactive", "Time-pressured"],
                        goals: ["Unified shipment visibility", "Reduce admin overhead"],
                        painPoints: ["Juggling 4 tools simultaneously", "Chasing vendors via emails"]
                    },
                    {
                        name: "Supply Chain Planner",
                        role: "Secondary User",
                        quote: "\"ETA changes affect stock levels immediately.\"",
                        meta: "Manages stock replenishment schedules",
                        traits: ["Data-driven", "Forward-looking"],
                        goals: ["Accurate shipping ETAs", "Avoid inventory stockouts"],
                        painPoints: ["Stale delivery tracking data", "No automatic ETA change alerts"]
                    }
                ]
            },
            // ── Phase 2: Define ─────────────────────────────────────────────
            {
                type: "process-steps",
                title: "Terminology Standardization",
                highlight: "The Reframe: The primary bottleneck wasn't a tracker UI; it was establishing a shared status dictionary.",
                content: "",
                steps: [
                    "Status clarity: Formulated a 20-entry glossary defining critical shipping milestones.",
                    "Trigger handoffs: Enforced state updates that automatically transition tasks between roles."
                ]
            },
            {
                type: "goals-list",
                title: "How Might We & Core Principles",
                goals: [
                    "HMW make 'Shipped' mean exactly one thing across all operational units?",
                    "HMW allow external vendors to upload customs files without logging into the platform?",
                    "Principle: Standard status definitions, removing individual interpretation.",
                    "Principle: Progressive information disclosure tailored strictly by user role."
                ]
            },
            // ── Phase 3: Ideate ─────────────────────────────────────────────
            {
                type: "challenges",
                title: "Structural Concept Exploration",
                challenges: [
                    {
                        challenge: "Standard Notification Feed",
                        solution: "Rejected. Too noisy. 200+ active shipments require structured dashboards, not a stream."
                    },
                    {
                        challenge: "Single Dashboard Timeline",
                        solution: "Rejected. Finance alerts clutter warehouse views. Split layout by role views drawing from a shared state model."
                    }
                ]
            },
            {
                type: "challenges",
                title: "PO Foundation & Milestones",
                challenges: [
                    {
                        challenge: "Reconciliation discrepancies",
                        solution: "Structured SKU-level entry forms with instant inline cost calculations."
                    },
                    {
                        challenge: "Vendor timeline drift",
                        solution: "Tracked original cargo dates separately from live ETA overrides."
                    }
                ]
            },
            // ── Phase 4: Prototype ──────────────────────────────────────────
            {
                type: "challenges",
                title: "Core Interface Iterations",
                challenges: [
                    {
                        challenge: "Dense shipment detail navigation",
                        solution: "Structured views using contextual tabs rather than long scrolls."
                    },
                    {
                        challenge: "Payment milestone tracking",
                        solution: "Implemented a persistent sidebar showing invoice details directly on the shipment view."
                    },
                    {
                        challenge: "External vendor friction",
                        solution: "Replaced login portal with email-triggered links, allowing document uploads in 1-click."
                    }
                ]
            },
            {
                type: "asset-placeholder",
                title: "Edge & Conflict States",
                assetType: "screen-design",
                description: "UX flows mapping customs hold states, partial PO variances, and vendor non-response triggers.",
                note: "Customs hold mockups helped redesign the linear state model to support pause status."
            },
            {
                type: "asset-placeholder",
                title: "Handoff Documentation",
                assetType: "custom-diagram",
                description: "Annotation maps illustrating the 20 milestones × 5 roles notification trigger system.",
                note: "Figma specs saved development hours by resolving ambiguous workflow rules early."
            },
            // ── Phase 5: Test ───────────────────────────────────────────────
            {
                type: "impact",
                title: "Impact & Validation Metrics",
                items: [
                    "Shipment creation time dropped from 45 minutes to 8 minutes in usability test rounds (n=6)",
                    "Milestone tracking accuracy improved from 60% (sheets) to 97% (system)",
                    "Warehouse Advance Shipment Notice (ASN) notification lead time increased from 0 to 5-7 days",
                    "Ops manager daily administrative tasks reduced from 2.5 hours to 45 minutes"
                ]
            },
            {
                type: "learnings",
                title: "Retrospective",
                learnings: [
                    "Form definitions first: PO and shipment data quality dictates everything downstream; design the data model before styling.",
                    "Friction reveals structure: The vendor refusal to log in drove the lightweight email link feature, which became the most-used tool."
                ],
                future: [
                    "AI-powered predictive ETA adjustments based on weather and route history",
                    "Lite external portal for carrier direct updates"
                ]
            }
        ]
    },
    cricmetrix: {
        id: "cricmetrix",
        title: "CricMetrix. Elite Cricket Academy Platform",
        navTitle: "CricMetrix. Cricket Academy Management System",
        subtitle: "AI-Powered Multi-Tenant Cricket Training & Talent Development Platform",
        headerImage: "/lovable-uploads/filenow3.jpg",
        intro: "CricMetrix is an elite, multi-tenant AI-powered Cricket Academy Management platform built at RedBeryl Tech.",
        role: "Lead Product Designer",
        focus: "End-to-end UX across 4 role-based dashboards: Coach, Player, Parent, Admin",
        timeline: "2024",
        type: "Enterprise SaaS · Sports Tech",
        industry: "Sports Technology · EdTech · B2B SaaS",
        duration: "2 months",
        platforms: "Web (Mobile. Phase 2)",
        accentColor: "#00a7e1",
        themeGradient: "from-[#EEF9FF] to-[#FFFFFF]",
        quote: "Designing for elite sport means designing for speed, precision, and zero friction, because coaches don't have 15 minutes to spare on a roll call.",
        links: [
            { text: "", url: "" },
            { text: "", url: "" },
        ],
        blocks: [
            // ── Phase 1: Empathize ──────────────────────────────────────────
            {
                type: "role-list",
                title: "Live Training Discovery & Shadowing",
                highlight: "Led design end-to-end across Coach, Player, Parent, and Admin dashboards.",
                content: "Discovery benchmarks:",
                roles: [
                    "Shadowed live academy training sessions to map real-time workflows",
                    "Conducted 8 stakeholder interviews (coaches, parents, players, admins)",
                    "Audited sports apps (PlayHQ, TeamSnap) to identify gaps in player metrics"
                ]
            },
            {
                type: "problem-statement",
                title: "The Problem",
                highlight: "Coaches spend up to 17 minutes per session on manual admin instead of active coaching.",
                content: "Operational inefficiencies found:",
                list: [
                    "Coaching distraction: Logging attendance and scores manually disrupts session flow.",
                    "Parent black box: Premium monthly fees paid with zero visibility into player skill progress.",
                    "Delayed collections: Paper fee collections caused 28% of payments to lag over 5 days."
                ]
            },
            {
                type: "personas",
                title: "User Personas",
                personas: [
                    {
                        name: "Vikram Nair",
                        role: "Head Coach",
                        quote: "\"I spend more time on paperwork than coaching.\"",
                        meta: "Age 38 | 12 years coaching experience",
                        traits: ["Pragmatic", "Time-starved"],
                        goals: ["Hands-free attendance scanner", "Keep focus on live deliveries"],
                        painPoints: ["17-min manual roll call", "No goal progress tracking system"]
                    },
                    {
                        name: "Rajesh Sharma",
                        role: "Parent",
                        quote: "\"I want transparency on development and fees.\"",
                        meta: "Age 44 | Premium fee paying parent",
                        traits: ["Value-conscious", "Time-poor"],
                        goals: ["Regular progress reports", "Simple cashless payments"],
                        painPoints: ["Zero visibility into child's training details", "Cash-based receipts database"]
                    }
                ]
            },
            {
                type: "asset-placeholder",
                title: "Information Architecture Map",
                assetType: "flow-diagram",
                description: "Drop your IA / sitemap here, showing the 4-dashboard navigation structure: Landing Page → Auth Gateway → Role Selection → Dashboards.",
                note: "Export from Figma at 2× PNG. Recommended: landscape orientation showing the full tree."
            },
            // ── Phase 2: Define ─────────────────────────────────────────────
            {
                type: "process-steps",
                title: "Strategic Focus & Automation Targets",
                highlight: "The Reframe: Shift coaching tasks from active interface input to hands-free automation.",
                content: "",
                steps: [
                    "Speed is currency: Every admin minute lost is a coaching minute lost. Target: Under 10s interaction.",
                    "Evidence over updates: Parents demand visual progress proof, not simple text updates."
                ]
            },
            {
                type: "goals-list",
                title: "HMW Objectives",
                goals: [
                    "HMW automate attendance so coaches never interrupt active sessions?",
                    "HMW provide parents transparent, cashless billing integrated with progression reports?",
                    "HMW motivate players using milestone progression loops?"
                ]
            },
            // ── Phase 3: Ideate ─────────────────────────────────────────────
            {
                type: "process-steps",
                title: "Design Pivots & Role Segregation",
                highlight: "Figma wireframe rounds validated key shifts in dashboard hierarchy.",
                content: "",
                steps: [
                    "Loyalty Wallet Pivot: Interactive wallet details were originally buried in Settings. Testing showed players missed rewards, forcing promotion to top navigation.",
                    "Role segregation: Swapped from a single permisison-based dashboard to 4 customized interfaces."
                ]
            },
            {
                type: "custom-component",
                componentName: "CricMetrixBeforeAfter"
            },
            // ── Phase 4: Prototype ──────────────────────────────────────────
            {
                type: "custom-component",
                title: "Interactive Prototypes",
                componentName: "CricMetrixRoleDashboards"
            },
            {
                type: "custom-component",
                title: "AI Attendance System",
                componentName: "CricMetrixAttendanceSystem"
            },
            {
                type: "custom-component",
                title: "Voice Match Scorer",
                componentName: "CricMetrixVoiceScorer"
            },
            {
                type: "custom-component",
                title: "Twin Tables Goal System",
                componentName: "CricMetrixTwinTables"
            },
            {
                type: "custom-component",
                title: "Fee Checkout Panel",
                componentName: "CricMetrixFeeCheckout"
            },
            {
                type: "design-system",
                title: "Design System & Visual Language",
                highlight: "A premium dark-first system built for data density and quick athletic triage.",
                content: "System tokens:",
                items: [
                    "Deep Indigo-Blue (#1e1b4b) — premium dark foundation",
                    "Electric Teal (#00a7e1) — precision metrics and active states",
                    "Crimson (#e53e3e) — wickets and high-contrast status alerts",
                    "Backdrop Blur (12px) + 15% opacity cards for dashboard containers"
                ]
            },
            // ── Phase 5: Test ───────────────────────────────────────────────
            {
                type: "impact",
                title: "Field Usability & Impact",
                items: [
                    "92% reduction in attendance time — 20-player squad marked in under 10 seconds vs. 17 minutes manual roll call",
                    "4.8× increase in parent login engagement during the 4-week beta pilot",
                    "35% increase in on-time monthly fee payments using wallet cashbacks",
                    "40% increase in student drill completions via milestone rings transparency"
                ]
            },
            {
                type: "custom-component",
                title: "UX Success Metrics",
                componentName: "CricMetrixImpactMetrics"
            },
            {
                type: "rich-text",
                title: "Handoff Specification",
                content: "Specifications detailed three-mode fallback conditions for AI camera scans, intent-mapping tables matching voice triggers to scoreboard actions, and backdrop-filter fallback specs for Android webviews."
            },
            {
                type: "asset-placeholder",
                title: "Handoff Documentation",
                assetType: "custom-diagram",
                description: "AI attendance mode-switching decision tree (auto → group → manual fallback conditions). Voice scorer intent mapping table (30 phrases → 8 system event types). Glassmorphism component spec sheet with blur, opacity, and border values for each surface type.",
                note: "Figma specs saved development hours by resolving ambiguous workflow rules early."
            },
            {
                type: "learnings",
                title: "Retrospective",
                learnings: [
                    "UX safety nets: Technical features like AI face scanners are useless without clear fallbacks (like panoramic or manual modes).",
                    "Tether gamification to progression: Loyalty credits only sustain interest when directly tied to player milestone achievements."
                ],
                future: [
                    "Mobile App compilation",
                    "Computer vision swing analysis from training videos"
                ]
            }
        ]
    }
};