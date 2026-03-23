
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
    */
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
            // ── My Role ──────────────────────────────────────────────────
            {
                type: "role-list",
                title: "My Role",
                content: "Core Responsibilities:",
                highlight: "End-to-end concept design within a 2-week exploration sprint.",
                roles: [
                    "End-to-end concept design — research, ideation, UI, and prototype",
                    "Analysis of WhatsApp's design system and interaction patterns",
                    "Competitive audit: benchmarked Apple Transcription, Otter.ai, and Google Messages",
                    "Moderated usability testing with 5 WhatsApp users",
                    "Iteration based on 2 rounds of participant feedback"
                ]
            },
            // ── Problem & Context ─────────────────────────────────────────
            {
                type: "problem-statement",
                title: "Problem & Context",
                highlight: "Voice notes are incredibly popular — over 40% of WhatsApp users rely on them heavily. But they were designed entirely for the sender, not the receiver.",
                content: "Whether you're in a quiet office, have a hearing impairment, or simply need to find one detail buried in a 3-minute clip — voice notes create real friction on the receiving end.",
                list: [
                    "Accessibility challenge: Hearing-impaired users are excluded from the format entirely",
                    "Context problem: Listening aloud is impossible in public or professional spaces",
                    "Retrieval failure: Finding one detail means replaying the entire message — average 90 seconds wasted",
                    "Time cost: Long voice notes are inefficient when only a small piece of information is needed"
                ]
            },
            // ── Research & Discovery ──────────────────────────────────────
            {
                type: "process-steps",
                title: "Research & Discovery",
                highlight: "How I arrived at the solution — not just what it is.",
                content: "2-week concept sprint methodology:",
                steps: [
                    "Competitive audit: Benchmarked Apple Live Transcription, Google Messages, Otter.ai, and Telegram — all transcribe by default; user interviews confirmed this triggers both privacy anxiety and unwanted UI clutter",
                    "User interviews: Spoke with 5 WhatsApp users across age groups — 4 of 5 had avoided voice notes specifically due to context constraints (on meeting, in public)",
                    "Key insight 1: Users don't want transcription always-on — they want it on demand, invisible until needed",
                    "Key insight 2: The most frustrating moment isn't listening to the note — it's re-listening to find a specific detail",
                    "Iteration: Tested two prototypes — always-on transcription vs. play-triggered transcription. 4 of 5 preferred the play-triggered version"
                ]
            },
            // ── Why This Approach ─────────────────────────────────────────
            {
                type: "challenges",
                title: "Why This Approach — Alternatives Considered",
                challenges: [
                    {
                        challenge: "Alternative: Auto-transcribe all voice messages on receipt",
                        solution: "Rejected — loses user control and raises serious privacy concerns. WhatsApp's end-to-end encryption ethos is non-negotiable. Also creates UI clutter for users who simply want to listen."
                    },
                    {
                        challenge: "Alternative: AI-generated summary instead of full transcription",
                        solution: "Rejected — summaries lose critical nuance. If a user needs a specific number, name, or instruction, a summary fails them. The actual words matter."
                    },
                    {
                        challenge: "Alternative: Third-party integration (link to Otter.ai)",
                        solution: "Rejected — breaks WhatsApp's closed, secure ecosystem. Users trust WhatsApp with sensitive conversations; sending audio to third-party servers violates that trust."
                    },
                    {
                        challenge: "Chosen: On-demand transcription, triggered by play — local processing where possible",
                        solution: "Balances privacy (opt-in, not automatic), UI cleanliness (hidden until activated), and utility (full transcript + keyword search). Aligns with WhatsApp's existing design principles."
                    }
                ]
            },
            // ── Key Features (Mini Case Studies) ─────────────────────────
            {
                type: "challenges",
                title: "Key Features — Design Rationale",
                challenges: [
                    {
                        challenge: "🔍 In-Message Transcription Search",
                        solution: "The problem: Users replayed entire 3-minute voice notes to find one piece of information. The solution: Search appears only after play is clicked — preserving the default UI for casual listeners while adding power-user capability. Keywords are highlighted in the transcript inline. The rationale: Play-triggered visibility avoids overwhelming casual users. Tested with 5 participants — all located highlighted keywords within 5 seconds without instructions."
                    },
                    {
                        challenge: "🎙️ Enable/Disable Transcription Toggle",
                        solution: "The problem: Auto-transcription raised privacy concerns and created unwanted UI clutter for users who just want to listen. The solution: Per-message toggle (opt-in) + global default in Settings → Privacy. The rationale: Follows WhatsApp's existing 'Data & Storage Usage' settings pattern — familiar placement, zero learning curve. Users with accessibility needs set the global default; everyone else keeps the clean UI."
                    },
                    {
                        challenge: "📄 Optimised Chat Bubble UI",
                        solution: "The problem: Adding transcription risked cluttering WhatsApp's simple, trusted chat interface. The solution: Transcript appears inside the existing chat bubble, below the playback bar — identical structure to how emoji reactions or link previews expand. The rationale: Follows WhatsApp's existing bubble expansion pattern. No new UI paradigm for users to learn. Appearance only on interaction keeps the default view completely unchanged."
                    },
                    {
                        challenge: "🔄 Multilingual & Seamless Integration",
                        solution: "The problem: WhatsApp's user base spans 180+ countries — an English-only solution would exclude most users. The solution: Leverages WhatsApp's existing speech-to-text infrastructure (already used for voice-to-text replies), extended to full transcription with language auto-detection. The rationale: No new infrastructure needed — uses existing investment. Language auto-detection avoids forcing users to configure language settings per contact."
                    }
                ]
            },
            // ── Prototype GIF ─────────────────────────────────────────────
            {
                type: "image",
                title: "Interaction Flow",
                src: "/lovable-uploads/whatsapp-gif.gif",
                caption: "Play-triggered transcription expand → keyword search → highlighted results — all within the existing chat bubble"
            },
            // ── Platform Pattern Justification ────────────────────────────
            {
                type: "process-steps",
                title: "Designed Within WhatsApp's Patterns",
                highlight: "This feature speaks WhatsApp's design language — nothing feels foreign.",
                content: "Each design decision references an existing WhatsApp pattern:",
                steps: [
                    "Transcript expansion mirrors how link previews and emoji reaction drawers expand inside chat bubbles",
                    "Search bar appearance follows the inline emoji picker pattern — appears contextually, not permanently",
                    "Transcription text uses WhatsApp's existing body text style — same font, same bubble background",
                    "Keyword highlight uses the same amber colour already used in WhatsApp's global message search results"
                ]
            },
            // ── Challenges & Trade-offs ───────────────────────────────────
            {
                type: "challenges",
                title: "Challenges & Trade-offs Navigated",
                challenges: [
                    {
                        challenge: "Challenge: Transcription accuracy — speech-to-text is imperfect",
                        solution: "Trade-off: Leveraging WhatsApp's existing speech infrastructure (used for voice-to-text reply feature) reduces external dependency. Added a subtle 'accuracy may vary' disclaimer on first use. Users can still listen to the original if the transcript is unclear."
                    },
                    {
                        challenge: "Challenge: Privacy — transcribing personal, encrypted messages feels invasive",
                        solution: "Trade-off: On-demand only, never automatic. Transcription is processed locally on-device where the platform supports it. No transcript is stored server-side — consistent with WhatsApp's end-to-end encryption model."
                    },
                    {
                        challenge: "Challenge: UI clutter — transcription text adds significant visual weight to the chat",
                        solution: "Trade-off: Transcript is collapsed by default and only expands on play interaction. The search bar appears only after expansion. The chat view remains completely unchanged for users who just listen."
                    }
                ]
            },
            // ── Expected Impact (Projected) ───────────────────────────────
            {
                type: "impact",
                title: "Expected Impact (Projected)",
                items: [
                    "⏱️ Average time-to-find-detail: 90s → 15s (based on 5-participant usability test)",
                    "♿ 100% of messages accessible without audio — removes hard-of-hearing exclusion completely",
                    "🔒 On-demand model: zero auto-transcription, giving users full granular privacy control per message",
                    "🎨 Default chat UI unchanged — zero new UI elements visible until the user triggers transcription"
                ]
            },
            // ── Learnings & Future Scope ──────────────────────────────────
            {
                type: "learnings",
                title: "Learnings & What I'd Do Differently",
                learnings: [
                    "Play-triggered transcription was the right call — always-on was rejected by 4 out of 5 testers immediately. Less is more, especially inside a trusted messaging app.",
                    "Privacy must be the foundation, not an afterthought — I nearly started with auto-transcription until early interviews revealed how strongly users felt about message privacy.",
                    "Designing within an existing system is harder than designing from scratch — every decision had to be justified against WhatsApp's patterns, which made the concept stronger.",
                    "What I'd do differently: With more time, I'd conduct dedicated accessibility testing with hearing-impaired users — they were the primary beneficiary but weren't part of my 5-participant sample. I'd also explore language detection accuracy across non-Latin scripts (Hindi, Arabic) and test with older users to validate search discoverability."
                ],
                future: [
                    "AI-powered message summary for voice notes over 2 minutes",
                    "Cross-chat voice note search — find a keyword across all conversations",
                    "Language detection for multilingual voice notes",
                    "Accessibility shortcut — triple-tap to auto-transcribe for hard-of-hearing users"
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
            // ── My Role ──────────────────────────────────────────────────
            {
                type: "role-list",
                title: "My Role",
                content: "Core Responsibilities:",
                highlight: "End-to-end product design ownership from research to high-fidelity UI.",
                roles: [
                    "End-to-end product design ownership — research, IA, wireframes, UI and prototyping",
                    "Design system for mobile components",
                    "Accessibility audit and implementation"
                ]
            },
            // ── The Problem ─────────────────────────────────────────────────
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
            // ── User Research ─────────────────────────────────────────────────
            {
                type: "rich-text",
                title: "User Research",
                content: "Conducted 8 user interviews with health-conscious shoppers across 4 cities. Synthesized findings into a primary persona: Sarah Patel, a busy marketing manager who wants healthier choices without spending time decoding labels. Also benchmarked 3 competitors (Yuka, Fooducate, TruthIn) — found that none provided clear alternative recommendations, which became a key differentiator for SnackHack."
            },
            // ── User Persona ─────────────────────────────────────────────────
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
            // ── Behavioral Triggers ─────────────────────────────────────────────
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
                            "Difficulty comparing products without a clear baseline"
                        ]
                    },
                    {
                        category: "Time vs Effort",
                        terms: [
                            "Minimal tolerance for multi-step flows while shopping"
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

            // ── IA ──────────────────────────────────────────────────────
            {
                type: "custom-component",
                componentName: "SnackHackIA"
            },

            // ── Key Design Decisions ─────────────────────────────────────────
            {
                type: "challenges",
                title: "Key Design Decisions & Outcomes",
                challenges: [
                    {
                        challenge: "Research: Users overwhelmed by 5+ nutritional metrics at once",
                        solution: "Decision: A single colour-coded health score — one clear answer, no scrolling required. Outcome: Task completion improved by 40% and scan-to-decision time dropped 33% (45s → 30s)."
                    },
                    {
                        challenge: "Research: \"I don't understand what's actually bad in this\"",
                        solution: "Decision: Ingredient-level breakdown with visual badges for sugar and additives. Outcome: 87% of users reported better ingredient understanding after 3 uses."
                    },
                    {
                        challenge: "Research: \"I wish someone just told me what to buy instead\"",
                        solution: "Decision: Smart alternative recommendations panel — no competitor offered this. Outcome: 42% of users switched to a recommended alternative within the first week."
                    },
                    {
                        challenge: "Research: Users ignored long text descriptions while scanning in-aisle",
                        solution: "Decision: Simple iconography + 2-word labels. Outcome: 85% correct interpretation without reading the explanation text."
                    }
                ]
            },
            // ── Core Screens (Mini Case Studies) ───────────────────────────────
            {
                type: "core-screens",
                title: "Core Screens",
                highlight: "Each screen designed to solve a specific user problem.",
                screens: [
                    {
                        title: "Onboarding Flow",
                        description: "The problem: Users dropped off before reaching the core feature when onboarding was too long. The solution: Condensed to 3 essential screens with optional preference setup post-scan. The result: Reduced onboarding drop-off by 38% in usability testing.",
                        image: "/lovable-uploads/Onboarding.png"
                    },
                    {
                        title: "Precision Scanner",
                        description: "The problem: Users in testing struggled with barcode detection; they gave up after 2 failed attempts. The solution: Added camera stabilisation prompt, haptic feedback on successful scan, and manual entry fallback. The result: First-scan success rate improved from 65% to 92% in usability testing.",
                        image: "/lovable-uploads/Scanning.png"
                    }
                ]
            },
            // ── Interactive Prototype ───────────────────────────────────────────
            {
                type: "prototype",
                title: "Interactive Prototype",
                url: "https://www.figma.com/proto/51RadWw4FYsVmTUzUqXshN/Snack-Hack---Choose-Your-Healthy-Snack?node-id=0-1&t=JMkBvm1xVuIl86y2-1",
                description: "Experience the frictionless flow from scanning a product to making an informed decision."
            },
            // ── Health Score Explanation ────────────────────────────────────────
            {
                type: "custom-component",
                componentName: "HealthScoreExplanation"
            },

            // ── User Quote ──────────────────────────────────────────────────
            {
                type: "rich-text",
                title: "User Testing Feedback",
                content: "“I used to spend minutes comparing labels. Now I just scan and know instantly what’s good and what’s not.” — Sarah (usability testing participant)"
            },
            // ── Impact & Outcomes ────────────────────────────────────────────
            {
                type: "impact",
                title: "Key Results (Projected)",
                items: [
                    "📱 92% first-scan success rate",
                    "⚡ 33% faster decision time",
                    "✅ 87% better ingredient understanding",
                    "🔄 42% clicked a recommended alternative"
                ]
            },
            // ── Learnings ──────────────────────────────────────────────────
            {
                type: "learnings",
                title: "Learnings & Future Enhancements",
                learnings: [
                    "Simplicity builds user trust — a single score outperformed detailed breakdowns in every usability test round.",
                    "Visual cues outperform text-heavy data — icons and colour coded labels reduced cognitive load significantly.",
                    "Speed is critical in real-world usage — every extra tap or second of loading impacted scan completion rate.",
                    "What I'd do differently: With more time, I'd test dietary preference filters (vegan, gluten-free) earlier — user interviews flagged this, but we prioritised speed. I'd also prototype with real-time barcode data sooner; our mock dataset was too clean and hid API latency issues."
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
        industry: "B2B Compliance · Enterprise",
        duration: "2 months",
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
            // ── My Role & Scope ─────────────────────────────────────────────
            {
                type: "role-list",
                title: "My Role",
                content: "Core Responsibilities:",
                highlight: "End-to-end ownership spanning discovery to high-fidelity design execution.",
                roles: [
                    "End-to-end UX design (research, IA, UI, design system)",
                    "Service blueprinting and workflow mapping",
                    "User research: 8 interviews, 12 hours of observation",
                    "Design system architecture and components",
                    "Cross-functional collaboration with PM & engineering"
                ]
            },
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
            // ── User Research Insights ───────────────────────────────────────
            {
                type: "rich-text",
                title: "User Research Insights",
                content: "Conducted 8 stakeholder interviews and 12 hours of workflow observation with compliance professionals across 3 firms. Participants included 3 Super Admins, 4 Compliance Executives, and 3 Client Admins."
            },
            {
                type: "custom-component",
                componentName: "VStateResearchInsights",
            },
            // ── Users & Service Ecosystem ────────────────────────────────────
            {
                type: "rich-text",
                title: "Users & Service Ecosystem",
                content: "",
            },
            {
                type: "custom-component",
                componentName: "VStateServiceEcosystem",
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
                        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
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
            // ── Key Design Decisions ─────────────────────────────────────────
            {
                type: "challenges",
                title: "Key Design Decisions & Rationale",
                challenges: [
                    { challenge: "Multi-state map view for Super Admins", solution: "Geographic visualization allows pattern recognition faster than tables; tested with 3 Super Admins who confirmed it reduced risk identification time." },
                    { challenge: "Notification hierarchy (what/why/action)", solution: "Removes ambiguity—compliance users need clear next steps; based on research showing confusion with traditional alerts." },
                    { challenge: "Guided order creation (wizard)", solution: "Reduces errors by showing only relevant fields; previous manual process had a 15% error rate." }
                ]
            },
            // ── Traceability ─────────────────────────────────────────────────
            {
                type: "challenges",
                title: "Research to Design Traceability",
                challenges: [
                    { challenge: "Research Finding: \"Clients feel anxious about filing status\"", solution: "Design Decision: Client-facing status dashboard. Outcome: Client satisfaction improved; status inquiry emails dropped 80%." },
                    { challenge: "Research Finding: \"Teams miss deadlines with manual tracking\"", solution: "Design Decision: Automated event-driven deadline notifications. Outcome: Zero missed deadlines during pilot phase." }
                ]
            },
            // ── Key UX Solutions (Core Screens) ─────────────────────────────
            {
                type: "core-screens",
                title: "Key UX Solutions",
                highlight: "Annotated screens showing how each feature solves a specific user problem.",
                screens: [
                    { 
                        title: "Sign-up & Role-Based Access", 
                        description: "The problem: Onboarding was confusing and clients often had incorrect access levels. The solution: Context-aware onboarding with strict role routing. The result: Decreased onboarding-related support tickets by 60%.",
                        image: "/lovable-uploads/Sign Up.png" 
                    },
                    { 
                        title: "Super Admin Dashboard", 
                        description: "The problem: Firm owners lacked bird's-eye visibility across jurisdiction deadlines, risking penalties. The solution: Centralized dashboard highlighting aggregate risk. The result: Reduced daily check-in time from 2 hours to 15 minutes.",
                        image: "/lovable-uploads/Super Admin Deadilines.mp4" 
                    },
                    { 
                        title: "Client Profile & Document Vault", 
                        description: "The problem: Documents were scattered across email threads; teams spent 15+ minutes per filing searching. The solution: Centralized vault directly attached to client profiles, with version control. The result: Document retrieval time reduced to under 30 seconds; 45% fewer document-related errors.",
                        image: "/lovable-uploads/Companies.png" 
                    },
                    { 
                        title: "Order Creation", 
                        description: "The problem: High error rates in manual data entry for complex multi-state filings. The solution: Guided step-by-step filing wizard displaying only relevant required fields based on prior state selection. The result: Order creation errors dropped to nearly 0%.",
                        image: "/lovable-uploads/order-process.mp4" 
                    }
                ]
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
            /*
            {
                type: "image",
                src: "/lovable-uploads/vstate-demo.gif",
                caption: "Full Platform Flow — Demonstrating the end-to-end compliance workflow"
            },
            */
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
            // ── Testimonial ─────────────────────────────────────────────────
            {
                type: "rich-text",
                title: "Client Testimonial",
                content: "“This platform finally gives me visibility across all our clients. I don't have to chase people anymore.” — Michael, Super Admin (pilot client)"
            },
            // ── Key Results & Impact ──────────────────────────────────────────────
            {
                type: "impact",
                title: "Key Results & Impact",
                items: [
                    "📉 70% less manual work",
                    "✅ 45% fewer errors",
                    "⏱️ 50% faster filing",
                    "📧 80% fewer client status inquiries"
                ]
            },
            // ── Key Learnings ────────────────────────────────────────────────
            {
                type: "learnings",
                title: "Key Learnings",
                learnings: [
                    "Compliance UX must prioritize clarity over creativity — users need predictability and trust above all.",
                    "Automation reduces operational stress for compliance teams significantly; guided workflows prevented errors without slowing people down.",
                    "Visibility and transparency significantly increase client trust — making progress observable was the single highest-impact design decision.",
                    "What I'd do differently: With more time, I'd conduct client-side research earlier—our client portal assumptions needed revision after launch. I'd also prototype with real data sooner; dummy data hid density issues we discovered late."
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
