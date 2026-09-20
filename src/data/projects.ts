
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
    | "asset-placeholder"
    | "metrics-grid"
    | "trade-offs";

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
    componentName: "UserFlow" | "VideoCarousel" | "VStateIA" | "HealthScoreExplanation" | "SnackHackIA" | "VStateServiceEcosystem" | "VStateBeforeWorkflow" | "VStateAfterWorkflow" | "VStatePainPoints" | "VStateNotificationSystem" | "VStateServiceBlueprint" | "VStateResearchInsights" | "VStateDesignSystemGrid" | "CricMetrixBeforeAfter" | "CricMetrixAttendanceSystem" | "CricMetrixVoiceScorer" | "CricMetrixRoleDashboards" | "CricMetrixTwinTables" | "CricMetrixFeeCheckout" | "CricMetrixImpactMetrics" | "CricMetrixIA";
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

export interface MetricsGridBlock extends BaseBlock {
    type: "metrics-grid";
    metrics: {
        value: string;
        label: string;
        description?: string;
    }[];
}

export interface TradeOffsBlock extends BaseBlock {
    type: "trade-offs";
    items: {
        option: string;
        status: "rejected" | "selected" | "neutral";
        reasoning: string;
        tradeOff: string;
    }[];
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
    | AssetPlaceholderBlock
    | MetricsGridBlock
    | TradeOffsBlock;

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
    isProtected?: boolean;
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
                title: "01. Context & Research",
                content: "Senior UX Designer (2-week sprint concept)",
                highlight: "How do you design an interface modification for 2 billion active users without introducing any cognitive friction or retraining cost?",
                roles: [
                    "Competitive Audit: Evaluated speech-to-text behaviors across Apple Live Transcription, Telegram Premium, and Otter.ai.",
                    "User Context Interviews: Moderated sessions with 5 power users exploring voice note habits, listening constraints, and privacy preferences.",
                    "A/B Hypothesis Testing: Evaluated always-on auto-transcription against play-triggered context-aware transcription."
                ]
            },
            {
                type: "problem-statement",
                title: "02. The Core Problem",
                highlight: "Users in noise-constrained or highly private social environments are excluded from the voice-first format, leading to information retrieval bottlenecks.",
                content: "Three primary user experience barriers identified:",
                list: [
                    "Accessibility Exclusion: 466 million hard-of-hearing or deaf users are systematically excluded from consuming voice messages.",
                    "Situational Constraints: Audio is completely unplayable during active meetings, quiet workspaces, or loud transit environments.",
                    "Information Retrieval Friction: Locating a specific address, name, or phone number requires manual scrub-and-replay (averaging 90 seconds wasted)."
                ]
            },
            {
                type: "process-steps",
                title: "03. Focus & Strategy",
                highlight: "Our Reframe: Users don't need a static speech-to-text translation block. They need a highly responsive, situational control layer that remains invisible until explicitly needed, prioritizing local privacy.",
                content: "Guiding principles established for the sprint:",
                steps: [
                    "On-Demand Execution: Transcription remains 100% hidden unless activated via explicit intent (press-to-reveal or swipe).",
                    "Local-First Privacy: Leverage hardware-level neural engine speech recognition to process audio locally, respecting WhatsApp's E2E encryption trust.",
                    "Invisible Integration: Maintain existing chat bubbles and design systems with zero new structural learning curve."
                ]
            },
            {
                type: "trade-offs",
                title: "04. Alternatives Explored",
                items: [
                    {
                        option: "Auto-transcribe on receipt",
                        status: "rejected",
                        reasoning: "Generates massive visual noise inside chat threads. Users felt anxious about text previews displaying sensitive voice notes automatically on their locked screen or passive scroll.",
                        tradeOff: "High visibility, but severe degradation of privacy controls and visual clutter."
                    },
                    {
                        option: "AI-generated summaries",
                        status: "rejected",
                        reasoning: "Although effective for longer conversations, summaries missed critical micro-details (e.g. phone numbers, specific addresses) that users frequently need to copy and paste.",
                        tradeOff: "Fast overview, but high risk of critical data loss in short-form messaging."
                    },
                    {
                        option: "Play-triggered inline transcription",
                        status: "selected",
                        reasoning: "Processes text locally only when the user interacts, allowing dynamic inline expansion and contextual search highlighting inside the bubble.",
                        tradeOff: "Minor interaction cost to activate, but preserves end-to-end security and keeps UI clean."
                    }
                ]
            },
            {
                type: "image",
                title: "05. Interaction Design",
                src: "/lovable-uploads/whatsapp-gif.gif",
                caption: "Interactive Flow: Play-triggered expansion → inline keyword search → highlighted query matches."
            },
            {
                type: "image",
                title: "06. Robustness & Edge Cases",
                src: "/lovable-uploads/whatsapp-edge-error.png",
                caption: "Defensive UX: Flows mapping low-bandwidth offline mode, overlapping audio/noise warnings, and language pack downloads."
            },
            {
                type: "metrics-grid",
                title: "07. Impact & Usability",
                metrics: [
                    {
                        value: "15s",
                        label: "Detail Retrieval Speed",
                        description: "Average time to locate specific info dropped from 90 seconds (scrubbing audio) to just 15 seconds (using inline text search)."
                    },
                    {
                        value: "100%",
                        label: "Accessibility Score",
                        description: "Evaluated and validated for WCAG compliance across simulated hearing impairment and high-contrast scenarios."
                    },
                    {
                        value: "0.0",
                        label: "UI Cognitive Drag",
                        description: "Zero user friction or interface overload reported during moderated tasks due to the collapsed-by-default visual approach."
                    }
                ]
            },
            {
                type: "learnings",
                title: "08. Key Takeaways",
                learnings: [
                    "Empirical Observation beats assumptions: Watching users struggle to retrieve details in-context exposed the immediate need for keyword search within transcripts.",
                    "Design System Rigor: Designing for a massive global audience means working within incredibly tight screen constraints, prioritizing content over layout ornamentation.",
                    "Testing Inclusivity: Real hearing-impaired users should have been brought into the earliest wireframe stages rather than simulated near the end of the sprint."
                ],
                future: [
                    "Global Voice Index: Searching text queries across all voice notes in the global WhatsApp search bar.",
                    "Contextual Action Triggers: Automatically parsing addresses into maps or dates into calendars from transcription bubbles."
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
        role: "Senior UX Designer · End-to-end project owner",
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
        role: "Senior UX Designer · Product design owner",
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
                        name: "Sneha Patil",
                        role: "Health-Conscious Shopper",
                        image: "/lovable-uploads/sneha-patil.png",
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
        isProtected: true,
        title: "AccuRest. Shipment & Purchase Order Experience",
        navTitle: "AccuRest. Supply Chain Platform",
        subtitle: "Designing the operational nerve centre of an enterprise supply chain platform.",
        headerImage: "/lovable-uploads/filenow3.jpg",
        intro: "AccuRest is an enterprise SaaS platform managing inventory, forecasting, and fulfillment logistics.",
        role: "Senior UX Designer · End-to-end design owner",
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
                highlight: "Five fragmented tools created shipment-tracking delays, inconsistent status definitions, and payment-term mismatches.",
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
                type: "rich-text",
                title: "Edge & Conflict States",
                content: "I mapped customs holds, partial PO variances, ETA overrides, and vendor non-response as first-class workflow states. Testing these exceptions exposed a flaw in the original linear model, so I introduced pause, escalation, and recovery paths before developer handoff."
            },
            {
                type: "rich-text",
                title: "Handoff Documentation",
                content: "The handoff documented 20 shipment milestones across five roles, including state ownership, notification triggers, permissions, validation rules, and failure behavior. Product, engineering, and operational SMEs used the same specification to resolve ambiguous workflow rules before implementation."
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
    },
    tutoronboarding: {
        id: "tutoronboarding",
        title: "Locate Tutors. Tutor Onboarding UX Case Study",
        navTitle: "Locate Tutors. Tutor Onboarding Experience",
        subtitle: "Designing an End-to-End Tutor Verification & Profile Journey",
        headerImage: "/lovable-uploads/locate-tutor-intro-optimized.jpg",
        intro: "An end-to-end tutor onboarding experience balancing business verification needs with a smooth and motivating user journey.",
        role: "Senior UX Designer · End-to-end product design",
        timeline: "2025",
        platforms: "Web Application",
        type: "Product Design · B2B2C",
        industry: "EdTech · Marketplace",
        duration: "4 weeks",
        focus: "Marketplace Trust, Profile Completion, Progressive Disclosure, Verification Flows",
        accentColor: "#4f46e5",
        themeGradient: "from-[#EEF2FF] to-[#FFFFFF]",
        clientWebsite: "https://www.locatetutor.com",
        links: [
            { text: "Figma File", url: "https://www.figma.com/design/4Ai41numD4u5FTinK0hf9c/LT?node-id=7-1217&t=zo87nlplGYKHV5cB-1" }
        ],
        blocks: [
            {
                type: "problem-statement",
                title: "The Problem & Challenge",
                highlight: "Tutors abandoned the platform due to long, overwhelming verification and profile creation processes.",
                content: "Locate Tutors needed a scalable onboarding experience that:",
                list: [
                    "Profile Abandonment: Tutors dropped off during long multi-step data entry forms.",
                    "Verification Friction: Balancing platform safety and student trust with tutor signup effort.",
                    "Low Profile Quality: Capturing teaching expertise and pricing structure without overwhelming tutors."
                ]
            },
            {
                type: "process-steps",
                title: "Design Strategy",
                highlight: "The experience had to make a long, trust-sensitive process feel useful at every step—not merely shorter.",
                content: "Four principles connected the business need for complete, verified profiles with the tutor's need for clarity, motivation, and control.",
                steps: [
                    "Make progress tangible: Show the current step, overall profile strength, and exactly what remains.",
                    "Explain the payoff: Connect every request to trust, visibility, bookings, or profile quality.",
                    "Reduce decision anxiety: Provide contextual recommendations for pricing, content, and availability.",
                    "Build trust progressively: Separate profile completion from verification and make each status visible."
                ]
            },
            {
                type: "core-screens",
                title: "The Confidence Layer",
                highlight: "A persistent layer of progress, verification, and student-facing feedback keeps the value of completion visible throughout the journey.",
                screens: [
                    {
                        title: "Progress that explains itself",
                        image: "/lovable-uploads/tutor-confidence-layer.png",
                        description: "The first step introduces the eight-part journey while the side panel separates profile strength from verification progress. A live student preview shows tutors how their inputs translate into a public profile. Prototype metrics shown in the UI are illustrative, not measured outcomes."
                    },
                    {
                        title: "A review state built for confidence, not correction",
                        image: "/lovable-uploads/tutor-review-submit.png",
                        description: "Before submission, tutors can scan every section, see readiness and verification status, and jump directly back to edit without losing their progress."
                    }
                ]
            },
            {
                type: "challenges",
                title: "Key Product Decisions",
                challenges: [
                    {
                        challenge: "A long process felt endless",
                        solution: "An eight-step journey, persistent completion score, and save-and-continue pattern turned one large form into a sequence of achievable commitments."
                    },
                    {
                        challenge: "Tutors could not judge what a complete profile looked like",
                        solution: "The student-view preview translated abstract form fields into the profile students would eventually evaluate."
                    },
                    {
                        challenge: "Verification created uncertainty",
                        solution: "Identity, education, experience, and background checks were tracked independently so pending reviews did not feel like lost submissions."
                    },
                    {
                        challenge: "High-effort fields slowed completion",
                        solution: "Resume import and assisted writing reduced repetitive entry while keeping tutors in control of every imported or generated field."
                    }
                ]
            },
            {
                type: "core-screens",
                title: "Reducing Pricing Uncertainty",
                highlight: "Instead of asking tutors to guess, the pricing step turns market context into an informed decision.",
                screens: [
                    {
                        title: "Recommendations without removing control",
                        image: "/lovable-uploads/tutor-pricing-guidance.png",
                        description: "Recommended ranges, market averages, top-performer benchmarks, and competitiveness feedback help tutors set rates confidently while leaving the final decision in their hands. Values shown are illustrative prototype data."
                    }
                ]
            },
            {
                type: "core-screens",
                title: "Accelerating Completion with AI",
                highlight: "Assistance is positioned as an optional shortcut—not an opaque replacement for tutor input.",
                screens: [
                    {
                        title: "Import from an existing resume",
                        image: "/lovable-uploads/tutor-resume-import.png",
                        description: "The upload state explains what will be extracted, which file types are supported, and how the document will be handled before processing begins."
                    },
                    {
                        title: "Review before anything is applied",
                        image: "/lovable-uploads/tutor-resume-review.png",
                        description: "Extracted information remains selectable and editable. Tutors choose what enters their profile, preserving agency and reducing the risk of silent AI errors."
                    }
                ]
            },
            {
                type: "core-screens",
                title: "From Setup to Submission",
                highlight: "Eight focused input steps lead to a dedicated success state, keeping completion distinct from the verification that follows.",
                screens: [
                    {
                        title: "Availability designed around real teaching schedules",
                        image: "/lovable-uploads/tutor-onboarding-step7.png",
                        description: "Tutors can define repeatable teaching windows while retaining visibility into how availability will affect student matching."
                    },
                    {
                        title: "A clear handoff into verification",
                        image: "/lovable-uploads/tutor-onboarding-step9.png",
                        description: "The completion state confirms submission and sets expectations for what happens next, preventing the review period from feeling like a dead end."
                    }
                ]
            },
            {
                type: "prototype",
                title: "Explore the Complete Journey",
                description: "The interactive prototype connects all eight input steps, supporting states, and the final submission experience.",
                url: "https://www.figma.com/proto/4Ai41numD4u5FTinK0hf9c/LT?node-id=1-587&viewport=397%2C-339%2C0.51&t=Vgu2xAIyPGiLHssS-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
            },
            {
                type: "impact",
                title: "Projected Impact · Not Yet Measured",
                items: [
                    "Target: reduce onboarding drop-off by 30–40%; requires production measurement.",
                    "Expected: faster profile completion through progressive entry and optional resume import.",
                    "Expected: higher profile quality through live preview, contextual guidance, and review-before-submit.",
                    "Expected: stronger marketplace trust through transparent, separately tracked verification states."
                ]
            },
            {
                type: "learnings",
                title: "Retrospective & Learnings",
                learnings: [
                    "Progress is most motivating when it explains value. A percentage alone is weaker than showing what each completed section contributes to profile quality.",
                    "Profile completion and verification are different mental models. Separating them prevents a complete profile from appearing unfinished while checks are pending.",
                    "AI assistance needs a review boundary. Selective import keeps efficiency from coming at the cost of accuracy or user control."
                ],
                future: [
                    "Validate where tutors pause or abandon across each of the eight input steps.",
                    "Test whether pricing guidance improves completion confidence without anchoring rates too aggressively.",
                    "Measure resume-import accuracy and the percentage of extracted fields tutors accept, edit, or reject."
                ]
            }
        ]
    }
    ,
    bajajpay: {
        id: "bajajpay",
        title: "Bajaj Pay, From One Payment to a Habit",
        navTitle: "Bajaj Pay, Bill Payments",
        subtitle: "Turning a first bill payment into a recurring one, without a louder homepage or more notifications",
        headerImage: "/finance/hero.png",
        intro: "A first bill payment is a transaction, not a relationship. Between that payment and the next due date, nothing gives the user a reason to come back instead of the UPI app already open on his phone. I designed the return trip: keep the biller at the moment of success, send exactly one alert when the bill is actually out, and offer autopay only after he has shown the habit.",
        role: "Design & Testing Member (design assignment, Bajaj Finance)",
        type: "Design Assignment · Concept",
        industry: "FinTech · Bill Payments",
        duration: "Self-directed exercise",
        timeline: "Sep 2026",
        platforms: "Android & iOS",
        focus: "Retention · Behavioural design · Notification economy",
        accentColor: "#EE6A1F",
        themeGradient: "from-[#FFF4EC] to-[#FFFFFF]",
        quote: "Users don't forget the bill. They forget where they paid it.",
        links: [
            { text: "Prototype", url: "https://www.figma.com/proto/v6nRT70XoidMNHfU3xHsE9/Finance?node-id=78-845&page-id=0%3A1&scaling=min-zoom&content-scaling=fixed" },
            { text: "Design File", url: "https://www.figma.com/design/alnuFxWJikeHpqNvOvJiy6/Finance?node-id=0-1" },
        ],
        blocks: [
            {
                type: "rich-text",
                title: "Context",
                highlight: "A design assignment for Bajaj Finance, scoped to one question: why do people pay their first bill here and then not come back?",
                content: "This is a concept study, not shipped work. With no analytics access, I worked from the live Bajaj Pay app as it existed on 17 Sep 2026, publicly documented product behaviour, and competitor teardowns. Every number in the measurement section is a plan, not a result.\n\nI set myself two constraints a real team would face: no new homepage real estate, and no increase in notification volume. A retention win that costs the user more noise is borrowed, not earned — and those two rules ended up driving every decision that follows."
            },
            {
                type: "role-list",
                title: "Role & Constraints",
                highlight: "Solo designer, end to end: problem framing, research plan, flow, wireframes, visual design, component foundations and the measurement plan.",
                content: "The rules I held myself to:",
                roles: [
                    "No new entry point: reuse the Upcoming bills section that already exists rather than adding a badge or tab",
                    "Alert budget of 1 per biller per cycle, bundled when two or more bills fall within three days",
                    "Autopay never offered on a first payment, only after two on-time payments of a steady amount",
                    "Handoffs left untouched: existing payment gateway, UPI AutoPay mandate flow, login, KYC and global nav"
                ]
            },
            {
                type: "image",
                title: "The Problem",
                src: "/finance/problem.png",
                caption: "The loss happens in the silence between payments, not at the second payment — he pays on day 0, then nothing reaches him until the board's SMS does.",
                fullWidth: true
            },
            {
                type: "image",
                title: "How I'd Research It",
                src: "/finance/research.png",
                caption: "Four insights, each tied to the screen it drove. The through-line: users want convenience, but they want control over their money more.",
                fullWidth: true
            },
            {
                type: "image",
                title: "Read of What Exists Today",
                src: "/finance/audit.png",
                caption: "Eleven observations across four live screens. The finding that reframed the brief: the data is already there — the due date, the early-pay price, an Upcoming bills card — it just sits below the promos.",
                fullWidth: true
            },
            {
                type: "image",
                title: "Flow: One Cycle, Three Outcomes",
                src: "/finance/flow.png",
                caption: "The happy path, the failure branch and the waiting state — with the alert budget and the autopay eligibility rules written onto the canvas rather than left implicit.",
                fullWidth: true
            },
            {
                type: "image",
                title: "Wireframes: Structure Before Styling",
                src: "/finance/wireframes.png",
                caption: "Six states, each annotated with the three decisions behind it.",
                fullWidth: true
            },
            {
                type: "core-screens",
                title: "Visual Design",
                highlight: "Three moments carry the whole idea: the moment after success, being found again a month later, and what happens when it fails.",
                screens: [
                    {
                        title: "The moment after success",
                        image: "/finance/visual-design.png",
                        description: "Keeping the biller where attention already is — plus the return a month later, and the failure screen that leads with the money state."
                    },
                    {
                        title: "Autopay, earned — not pushed",
                        image: "/finance/supporting-states.png",
                        description: "Asked once, after two on-time payments, with three controls answering three fears. Alongside it, 'bill not out yet' becomes a plan instead of a dead end."
                    },
                    {
                        title: "Before → after, on the real screens",
                        image: "/finance/before-after.png",
                        description: "The same three changes, set against live screenshots of the current app."
                    }
                ]
            },
            {
                type: "prototype",
                title: "Interactive Prototype",
                url: "https://www.figma.com/proto/v6nRT70XoidMNHfU3xHsE9/Finance?node-id=78-845&page-id=0%3A1&content-scaling=fixed",
                description: "Walk one billing cycle end to end, then the habit — and branch into the failure and bill-not-out-yet states.",
                height: "820px"
            },
            {
                type: "image",
                title: "Foundations",
                src: "/finance/foundations.png",
                caption: "Calm finance, calibrated against the live app: big numbers, short supporting text, because people scan bills rather than read them.",
                fullWidth: true
            },
            {
                type: "trade-offs",
                title: "Trade-offs",
                items: [
                    {
                        option: "Reminder ON by default at the success screen",
                        status: "selected",
                        reasoning: "The feature only works if the reminder exists, and an opt-in checkbox at a moment of celebration gets ignored. The honesty cost is paid by stating the promise inline: one alert, around 16 Oct.",
                        tradeOff: "It's a default the user didn't ask for. I made it one tap to switch off and set an early-warning metric: if more people turn it off than keep it, the default isn't trusted and I'd revisit it before reading anything else."
                    },
                    {
                        option: "Offering autopay at the first payment",
                        status: "rejected",
                        reasoning: "It's the fastest route to an autopay number and the standard growth play. But a first-time payer has no reason to trust a standing debit yet, and asking early converts the hesitant into the resentful.",
                        tradeOff: "Slower autopay adoption, and we give up volume in cycle 1. I'd rather measure autopay stopped within 60 days as a guardrail than book a conversion that churns."
                    },
                    {
                        option: "A new 'My Bills' tab or homepage badge",
                        status: "rejected",
                        reasoning: "The audit showed Upcoming bills already exists and already has the data. The problem was that promos outranked it, not that it was missing.",
                        tradeOff: "Less visible than a dedicated surface. But reordering existing sections costs no new real estate, ships faster, and doesn't fragment where bills live."
                    },
                    {
                        option: "More reminders as the due date approaches",
                        status: "rejected",
                        reasoning: "A reminder ladder would almost certainly lift payment rate in the short term. It would also degrade every other notification the app sends.",
                        tradeOff: "We're betting on one well-timed alert beating three poorly-timed ones. If the bet is wrong, reminder-to-payment will show it, and bundling gives multi-biller users fewer sends than today."
                    }
                ]
            },
            {
                type: "image",
                title: "How I'd Know It Worked",
                src: "/finance/metrics.png",
                caption: "First-payment cohorts split 50/50 into test and holdout, read over two billing cycles — with a stated kill criterion, so the number that would prove me wrong is named before launch.",
                fullWidth: true
            },
            {
                type: "learnings",
                title: "Reflection",
                learnings: [
                    "The audit changed the brief. I expected to design a retention feature and found a prioritisation problem: the due date, the early-pay price and the Upcoming bills card were all already there, just outranked by promos.",
                    "Constraints made the work sharper, not smaller. Banning new homepage real estate and capping notification volume killed the easy answers early and forced the alert budget, which became the most defensible part of the design.",
                    "Writing the eligibility rule for autopay in plain language — who gets asked, who doesn't, and how long a dismissal holds — surfaced more edge cases than the flow diagram did.",
                    "Stating a kill criterion before launch is uncomfortable and worth it. Naming the number that would prove me wrong made the rest of the measurement plan honest."
                ],
                future: [
                    "Verify where the second payment actually happens today: another app, an offline counter, or late. The denominator changes the size of the problem.",
                    "Confirm how early each biller's bill can be fetched, since that alone decides whether the one reminder can land inside the early-pay window.",
                    "Test the reminder-on default against an explicit opt-in, reading switch-off rate rather than payment rate.",
                    "Check whether existing SMS and email receipts already bring people back, and to which screen — that route may be cheaper than anything I designed."
                ]
            }
        ]
    }
};
