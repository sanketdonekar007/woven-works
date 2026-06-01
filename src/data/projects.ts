
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
    componentName: "UserFlow" | "VideoCarousel" | "VStateIA" | "HealthScoreExplanation" | "SnackHackIA" | "VStateServiceEcosystem" | "VStateBeforeWorkflow" | "VStateAfterWorkflow" | "VStatePainPoints" | "VStateNotificationSystem" | "VStateServiceBlueprint" | "VStateResearchInsights" | "VStateDesignSystemGrid" | "CricMetrixBeforeAfter" | "CricMetrixAttendanceSystem" | "CricMetrixVoiceScorer" | "CricMetrixRoleDashboards" | "CricMetrixTwinTables" | "CricMetrixFeeCheckout" | "CricMetrixImpactMetrics";
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
                highlight: "Solo UX designer on a 2-week concept sprint — the constraint was designing within an existing system used by 2 billion people who couldn't be retrained.",
                roles: [
                    "Competitive audit: Apple Live Transcription, Google Messages, Otter.ai, Telegram — mapping how each handles transcription and where each falls short",
                    "5 moderated user interviews focused on voice note behaviour and privacy attitudes",
                    "Prototype A/B test: always-on transcription vs. play-triggered transcription (n=5)",
                    "Full concept design respecting WhatsApp's existing system: interaction patterns, bubble structure, and Settings architecture"
                ]
            },
            // ── Problem & Context ─────────────────────────────────────────
            {
                type: "problem-statement",
                title: "The Problem",
                highlight: "WhatsApp users in context-sensitive environments have no way to access voice note content without playing audio aloud — which excludes 466 million people with hearing impairments entirely and costs every other user an average of 90 seconds of replay to retrieve a single detail.",
                content: "Three distinct failure modes, one product gap:",
                list: [
                    "Accessibility exclusion: hard-of-hearing users cannot access the format at all — not an edge case, but 6% of the global population",
                    "Context failure: replaying audio aloud is impossible in meetings, public transit, or quiet offices — the exact places voice notes get sent",
                    "Retrieval inefficiency: finding one fact in a 3-minute clip means replaying the whole message — average 90 seconds wasted per retrieval"
                ]
            },
            // ── Research & Discovery ──────────────────────────────────────
            {
                type: "process-steps",
                title: "Research",
                highlight: "The competitive audit revealed something counterintuitive: every competitor that transcribes by default gets rejected by users. The real problem isn't better transcription — it's better control.",
                content: "Three methods, two key insights:",
                steps: [
                    "Competitive audit (Apple Live Transcription, Google Messages, Otter.ai, Telegram): All four transcribe by default. User interviews showed this triggers privacy anxiety ('who processes my audio?') and UI clutter for users who just want to listen. Default-on is the wrong model.",
                    "5 user interviews across age groups (22–54): 4 of 5 had avoided sending or opening voice notes due to context constraints — in a meeting, on public transport, in a shared office. The format was creating friction for both senders and receivers.",
                    "Key insight 1: Users don't want transcription always-on. They want it invisible until they need it — which means play-triggered, not auto-triggered.",
                    "Key insight 2: The most frustrating moment isn't listening to a voice note. It's re-listening to find one specific detail. The feature users actually needed was search, not transcription.",
                    "A/B prototype test (n=5): Always-on vs. play-triggered transcription. 4 of 5 preferred play-triggered. Reason given consistently: 'I don't want text appearing for messages I just want to listen to.'",
                    "The direction change I had to make: I started this sprint assuming auto-transcription was the answer — the same default every competitor had chosen. The first two interviews changed that. I'd already roughed out an always-on UI. Scrapping it mid-sprint and running the A/B test instead was the right call, but it cost two days I didn't have. The lesson: test privacy assumptions before forming a design direction, not during it."
                ]
            },
            // ── Define: POV & HMW ────────────────────────────────────────
            {
                type: "rich-text",
                title: "Phase 2 — Define",
                content: "The research surfaced two findings that pulled in different directions: a massive accessibility problem (466 million excluded users) and a privacy-first user preference (4 of 5 rejected automatic transcription). The Define phase was about reconciling those into a single frame — and the reconciliation produced the product direction."
            },
            {
                type: "process-steps",
                title: "Point of View",
                highlight: "The brief was 'design a voice note transcription feature'. The POV reframe was: build a control mechanism — because users don't want transcription, they want the ability to get it when they need it, invisibly.",
                content: "Two POV statements — one per core tension from research:",
                steps: [
                    "WhatsApp users in context-sensitive environments need access to voice note content without audio — because 466 million people with hearing impairments are excluded from the format entirely, and every other user is forced to choose between missing the message or disrupting their environment. The feature isn't optional — it's a trust-level requirement.",
                    "The A/B test reframe: users don't want transcription. They want control. 4 of 5 participants rejected always-on transcription not because of quality, but because it felt like an intrusion. The design challenge wasn't 'build a better transcript.' It was 'build a control mechanism that makes transcription available without making it visible until asked for.'"
                ]
            },
            {
                type: "goals-list",
                title: "How Might We",
                goals: [
                    "HMW make voice note content accessible without audio — for the 466 million excluded users and anyone who can't play audio in their current context?",
                    "HMW give users complete control over when transcription happens, so it never feels like their private conversations are being processed without consent?",
                    "HMW surface this capability inside WhatsApp's existing UI so it requires zero relearning for 2 billion users who already know every pattern in the app?",
                    "HMW solve the retrieval problem — finding one detail in a 3-minute message — without adding any new UI to the chat view for users who just want to listen?"
                ]
            },
            // ── Design Principles ─────────────────────────────────────────
            {
                type: "goals-list",
                title: "Design Principles",
                goals: [
                    "On demand, never automatic. Transcription must be user-initiated. WhatsApp's trust is built on privacy-first defaults — violating that default kills adoption regardless of utility. The A/B test confirmed this: 4 of 5 testers immediately rejected always-on.",
                    "Zero new UI until triggered. The chat view must be completely unchanged for the majority who just want to listen. Any visible addition to the default bubble imposes cognitive load on 2 billion daily users.",
                    "Speak WhatsApp's existing language. Every interaction must map to a pattern already in the app. No new paradigms that require relearning inside a deeply familiar, trusted environment.",
                    "Accuracy over speed. A confidently wrong transcript destroys trust permanently. A correct one that takes 2 seconds is worth the wait. The 'accuracy may vary' caveat on first use came directly from this principle.",
                    "Accessible by default, configurable by need. Hard-of-hearing users are the primary beneficiary. The feature must be discoverable without a trip to Settings — but a global toggle is still needed for users who want it always available."
                ]
            },
            // ── Alternatives Considered ───────────────────────────────────
            {
                type: "rich-text",
                title: "Before Committing to a Direction",
                content: "The POV sharpened the constraint: any solution had to work within WhatsApp's trust model, UI language, and privacy architecture — not around them. In a 2-week sprint, exploration isn't weeks of divergent work — it's testing every obvious direction against those constraints before building anything. Three directions were evaluated and rejected before the fourth was built."
            },
            // ── Why This Approach ─────────────────────────────────────────
            {
                type: "challenges",
                title: "Alternatives Considered and Rejected",
                challenges: [
                    {
                        challenge: "Auto-transcribe all voice messages on receipt",
                        solution: "Rejected. The A/B test was decisive: 4 of 5 users rejected always-on not because of poor quality, but because it felt like an intrusion. WhatsApp's end-to-end encryption ethos is non-negotiable — and auto-transcription also clutters the UI for the majority who simply want to listen."
                    },
                    {
                        challenge: "AI-generated summary instead of full transcript",
                        solution: "Rejected. Summaries discard the specific words users are trying to retrieve. If someone needs a phone number, a deadline, or a name buried in a 3-minute message, a summary fails them. The actual words matter — which is why keyword search within the transcript became the central interaction."
                    },
                    {
                        challenge: "Third-party integration (link to Otter.ai or similar)",
                        solution: "Rejected. Routing audio to an external server breaks WhatsApp's closed security model entirely. Users trust WhatsApp with sensitive conversations precisely because of end-to-end encryption. Sending that audio to a third party — even a reputable one — would destroy that trust for any user who understood what was happening."
                    },
                    {
                        challenge: "Chosen: play-triggered transcription with local processing where possible",
                        solution: "Opt-in at the message level (privacy). Hidden until activated (UI cleanliness). Full transcript with keyword search (utility). Language auto-detection via existing infrastructure (scalability). Every constraint WhatsApp operates under became a design requirement, not a limitation to work around."
                    }
                ]
            },
            // ── Key Features (Mini Case Studies) ─────────────────────────
            {
                type: "challenges",
                title: "Feature Design Rationale",
                challenges: [
                    {
                        challenge: "In-message transcript search with keyword highlighting",
                        solution: "Problem: Users replayed entire messages to find one piece of information — 90 seconds wasted per retrieval on average. Decision: Search appears only after the transcript is triggered. Keywords highlight using WhatsApp's existing amber search colour (already used in global message search). All 5 usability participants located highlighted keywords within 5 seconds without instruction. The interaction cost is zero because it reuses a pattern they already know."
                    },
                    {
                        challenge: "Per-message toggle + global Settings default",
                        solution: "Problem: Auto-transcription raised privacy concerns and added UI noise for casual listeners. Decision: Opt-in per message, with a global default for users who want it always available (hearing-impaired users primarily). Follows WhatsApp's Settings → Privacy architecture — familiar placement, zero learning curve. Users who need it globally set it once. Everyone else sees nothing they didn't ask for."
                    },
                    {
                        challenge: "Transcript expanding inside the existing chat bubble",
                        solution: "Problem: Adding transcription content risked cluttering WhatsApp's most trusted UI surface. Decision: Transcript expands inside the existing bubble using the same pattern as link previews and emoji reaction drawers. No new UI paradigm. 5/5 usability participants understood how to collapse the transcript without instruction."
                    },
                    {
                        challenge: "Language auto-detection via existing infrastructure",
                        solution: "Problem: WhatsApp operates in 180+ countries. A solution requiring language configuration per contact fails the majority. Decision: Extend WhatsApp's existing voice-to-text infrastructure (already used for voice reply) to full transcription with language auto-detection. No new server infrastructure. Language detection happens at a step that already occurs — it's an extension of a known system, not a new one."
                    }
                ]
            },
            // ── Prototype GIF ─────────────────────────────────────────────
            {
                type: "image",
                title: "Interaction Flow",
                src: "/lovable-uploads/whatsapp-gif.gif",
                caption: "Play-triggered transcription expand → keyword search → highlighted results. all within the existing chat bubble"
            },
            // ── Platform Pattern Justification ────────────────────────────
            {
                type: "process-steps",
                title: "Designed Within WhatsApp's Patterns",
                highlight: "This feature speaks WhatsApp's design language. nothing feels foreign.",
                content: "Each design decision references an existing WhatsApp pattern:",
                steps: [
                    "Transcript expansion mirrors how link previews and emoji reaction drawers expand inside chat bubbles",
                    "Search bar appearance follows the inline emoji picker pattern. appears contextually, not permanently",
                    "Transcription text uses WhatsApp's existing body text style. same font, same bubble background",
                    "Keyword highlight uses the same amber colour already used in WhatsApp's global message search results"
                ]
            },
            // ── MEDIA: Edge & Error States ────────────────────────────────
            {
                type: "asset-placeholder",
                title: "Edge & Error States",
                assetType: "screen-design",
                description: "Screens showing: transcription failure state (audio too unclear to process), partial transcription with accuracy caveat, unsupported language detection fallback, and offline/no-network state. These edge states were designed before the happy path was finalized — the confidence indicator placement in the main transcript view came directly from designing the failure state first.",
                note: "Export from Figma at 2× PNG. Show all 4 states in a single frame with labels."
            },
            // ── Challenges & Trade-offs ───────────────────────────────────
            {
                type: "challenges",
                title: "Challenges & Trade-offs Navigated",
                challenges: [
                    {
                        challenge: "Challenge: Transcription accuracy. speech-to-text is imperfect",
                        solution: "Trade-off: Leveraging WhatsApp's existing speech infrastructure (used for voice-to-text reply feature) reduces external dependency. Added a subtle 'accuracy may vary' disclaimer on first use. Users can still listen to the original if the transcript is unclear."
                    },
                    {
                        challenge: "Challenge: Privacy. transcribing personal, encrypted messages feels invasive",
                        solution: "Trade-off: On-demand only, never automatic. Transcription is processed locally on-device where the platform supports it. No transcript is stored server-side. consistent with WhatsApp's end-to-end encryption model."
                    },
                    {
                        challenge: "Challenge: UI clutter. transcription text adds significant visual weight to the chat",
                        solution: "Trade-off: Transcript is collapsed by default and only expands on play interaction. The search bar appears only after expansion. The chat view remains completely unchanged for users who just listen."
                    }
                ]
            },
            // ── Handoff & Engineering ─────────────────────────────────────
            {
                type: "rich-text",
                title: "Handoff & Engineering Considerations",
                content: "Figma annotations specifically called out: the 3 trigger states for transcript expansion (play tap, long press, accessibility shortcut), the exact bubble expansion animation timing (200ms cubic-bezier to match the existing link preview expand animation), and the on-device vs server-side transcription decision tree with privacy implications. I flagged language detection accuracy for non-Latin scripts as the highest-risk engineering assumption — validating this against WhatsApp's existing speech infrastructure was the pre-condition for committing to the multilingual claim."
            },
            // ── Expected Impact (Projected) ───────────────────────────────
            {
                type: "impact",
                title: "Expected Impact (Projected)",
                items: [
                    "⏱️ Average time-to-find-detail: 90s → 15s (based on 5-participant usability test)",
                    "♿ 100% of messages accessible without audio. removes hard-of-hearing exclusion completely",
                    "🔒 On-demand model: zero auto-transcription, giving users full granular privacy control per message",
                    "🎨 Default chat UI unchanged. zero new UI elements visible until the user triggers transcription"
                ]
            },
            // ── Learnings & Future Scope ──────────────────────────────────
            {
                type: "learnings",
                title: "Retrospective",
                learnings: [
                    "Play-triggered was the right call — and I nearly made the wrong one. I originally planned auto-transcription until the first two interviews made it clear how strongly users felt about their audio being processed without consent. I got there, but I should have tested privacy assumptions before forming a design direction, not during it.",
                    "Designing within an existing system is harder than designing from scratch. Every decision required justification against WhatsApp's patterns, not just design logic. That constraint made the concept stronger — but it also meant I spent significant time auditing patterns rather than designing. I'd start the pattern audit in week 1, not week 2.",
                    "My 5-person sample excluded the primary beneficiary. Hearing-impaired users were the most important audience for this feature and weren't represented in testing. I'd dedicate at least 2 sessions to accessibility-focused testing with hearing-impaired participants before claiming the feature solves their problem.",
                    "I assumed language detection for non-Latin scripts (Hindi, Arabic) would work equivalently to Latin-script detection. I never validated this. That's an engineering assumption that should have been flagged as a conditional in the concept, not treated as resolved."
                ],
                future: [
                    "AI-generated message summary for voice notes over 2 minutes — a companion to the full transcript, not a replacement",
                    "Cross-chat voice note search — find a keyword across all conversations, not just within a single message",
                    "Accessibility shortcut — configurable quick action (triple-tap or accessibility menu) to auto-transcribe for hard-of-hearing users",
                    "Transcript share — copy or forward the text version of a voice note without the audio"
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
                type: "role-list",
                title: "My Role",
                highlight: "Solo UX designer on a 4-month concept project. No PM, no existing design system — built from a blank canvas with self-directed research.",
                content: "Core Responsibilities:",
                roles: [
                    "End-to-end UX ownership: research synthesis, IA, interaction design, visual design, and prototype",
                    "38-participant survey across Hindi, German, Spanish, and French learners",
                    "Competitor audit of Duolingo, Memrise, Babbel, and MosaLingua",
                    "Card sort with 6 target learners to validate navigation structure before wireframing",
                    "2 rounds of usability testing (n=5 each) at mid-fidelity and high-fidelity"
                ]
            },
            {
                type: "rich-text",
                title: "The Brief. Then What Research Did to It",
                content: "The original brief was simple: design an engaging language learning app. After running a 38-person survey and auditing 4 competitors, the brief became something more specific: design a system that sustains motivation past day 7 — because every competitor solves the first week identically, and loses users at the same rate afterward. Duolingo's retention problem isn't a feature gap. It's a psychological one. The streak mechanic that drives early engagement becomes the exact trigger for abandonment when a single day is missed."
            },
            {
                type: "problem-statement",
                title: "The Problem",
                highlight: "Adult language learners need motivation that survives real life — because existing platforms anchor progress to daily streaks, but one missed day triggers an 'I've failed' response that drives a 96% abandonment rate within 90 days across all major apps.",
                content: "Four structural failures drove the reframed brief:",
                list: [
                    "Identity-free progress: apps track activity (streaks, XP) but never reflect who the learner is becoming — the actual source of intrinsic motivation",
                    "Grammar before confidence: rule-heavy onboarding collapses motivation before the learner produces a single real sentence",
                    "Decontextualised vocabulary: words drilled in isolation don't retain — memory encodes context, not lists",
                    "Streak anxiety as the exit trigger: 68% of surveyed leavers cited missing one day as the specific moment they stopped — not difficulty, not boredom"
                ]
            },
            {
                type: "process-steps",
                title: "Research",
                highlight: "38-person survey + 4-competitor audit + 6-person card sort. The survey gave breadth. The competitive audit exposed the industry's shared blind spot.",
                content: "Four methods, one critical reframe:",
                steps: [
                    "38-participant survey: Recruited active learners across Hindi, German, Spanish, and French. 73% had tried Duolingo. 68% identified missing a streak day — not difficulty, not boredom — as the trigger for quitting.",
                    "Competitor audit (Duolingo, Memrise, Babbel, MosaLingua): Mapped onboarding flows, retention mechanics, and content structures across all four. The shared blind spot: every competitor solves week one identically. None solve month two.",
                    "Key reframe from the audit: Competitors weren't competing on learning methodology — they were competing on habit formation, using the same flawed mechanic. The design challenge wasn't 'better lessons'. It was 'better motivation architecture'.",
                    "Card sort with 6 participants: Validated navigation labels before wireframing. 'Practice' beat 'Learn' 5:1. 'My Journey' beat 'Progress' 4:2. Labels came from how learners described their own relationship with language — not from designer logic."
                ]
            },
            {
                type: "image",
                title: "Empathy Map",
                src: "/lovable-uploads/empathy-lang.png",
            },
            {
                type: "image",
                src: "/lovable-uploads/comp-lang.png",
                caption: "Competitor audit: Duolingo, Memrise, Babbel, MosaLingua — mapped across retention mechanics, onboarding structure, and content approach. The shared pattern: all four solve week one the same way. None solve month two."
            },
            // ── Define: POV & HMW ────────────────────────────────────────
            {
                type: "rich-text",
                title: "Phase 2 — Define",
                content: "The research produced a clear pattern — but patterns aren't a design brief. The Define phase was about collapsing the findings into one sharp frame that would drive every design decision forward. I used a Point-of-View statement to lock in what the real problem was, and How Might We questions to open up the solution space before touching Figma."
            },
            {
                type: "process-steps",
                title: "Point of View",
                highlight: "The brief was 'design an engaging language learning app'. The POV reframe was: build a motivation system that survives real life — because every competitor has already solved week one, and all of them lose users at week two for the same reason.",
                content: "Two POV statements — one per core finding:",
                steps: [
                    "Adult learners need a progress system that reflects who they are becoming as a speaker — not one that tracks whether they showed up every day — because 68% of the people who quit Duolingo didn't leave because they stopped caring. They left because one missed day made the entire previous streak feel like it didn't count.",
                    "The competitor audit reframe: every app in this space has solved habit formation using the same mechanic. None of them have solved motivation architecture. The design challenge wasn't 'how do we build a better Duolingo?' It was 'how do we build something that works differently at the core motivation layer?'"
                ]
            },
            {
                type: "goals-list",
                title: "How Might We",
                goals: [
                    "HMW build a progress system that measures how much of the language you've absorbed — not how many consecutive days you logged in?",
                    "HMW make missing a day completely neutral so users return without the shame spiral that ends most learning attempts?",
                    "HMW anchor vocabulary to real media and personal context so words stick beyond the lesson — not just during it?",
                    "HMW design onboarding that gets a learner producing a real sentence before explaining a single grammar rule — so motivation is built before the hard work begins?"
                ]
            },
            // ── Design Principles ─────────────────────────────────────────
            {
                type: "goals-list",
                title: "Design Principles",
                goals: [
                    "Identity progress, not activity. 68% quit after one missed streak day. Progress must reflect who you are becoming, not whether you logged in today. Milestone rings over streak counters.",
                    "Conversation before grammar. Motivation collapses fastest in rule-heavy early sessions. Learners produce real sentences before understanding the structural rules behind them. Confidence precedes correctness.",
                    "Context as the retention hook. Memory encodes context, not isolated vocabulary lists. Every lesson connects to something real — a song, a film scene, a phrase the user already knows.",
                    "One clear next action per screen. Language learning decision fatigue is real. Every screen answers 'what do I do now?' without navigation. The learner never chooses between more than two paths.",
                    "Never punish absence. Streak anxiety causes the abandonment it was designed to prevent. Missing a day is neutral, not a failure. Forward momentum matters more than consecutive-day pressure."
                ]
            },
            // ── Ideate: Alternatives Explored ────────────────────────────
            {
                type: "rich-text",
                title: "Phase 3 — Ideate",
                content: "The POV crystallised the challenge. The ideation phase was about stress-testing the industry defaults before rejecting them — not to be contrarian, but because the data gave specific reasons to. Each direction below was explored seriously before a call was made."
            },
            {
                type: "challenges",
                title: "Alternatives Explored",
                challenges: [
                    {
                        challenge: "Streak system vs. milestone-based progress rings",
                        solution: "Rejected streaks. Survey data: 68% of respondents who left Duolingo cited missing one day as the trigger — not difficulty, not boredom. Milestone rings reward cumulative achievement regardless of daily gaps. The system measures who you're becoming, not how many consecutive days you showed up. This was a direct data response, not an aesthetic preference."
                    },
                    {
                        challenge: "Grammar-first vs. conversation-first onboarding",
                        solution: "Rejected grammar-first. User interviews: motivation collapsed fastest in the rule-heavy opening sessions of Babbel and MosaLingua. Conversation-first means learners produce real sentences before understanding why they're correct. Confidence before correctness is the difference between a learner who speaks imperfectly and one who never starts."
                    },
                    {
                        challenge: "Media as a separate 'Explore' section vs. woven throughout lessons",
                        solution: "Rejected the dedicated section. Testing showed a separate explore tab broke learning flow — users switched contexts and didn't return to drills. When vocabulary from a user-chosen song appears in the next drill automatically, the learning moment becomes the retention mechanism. Users remember words because they remember where they heard them."
                    },
                    {
                        challenge: "Navigation structure: what belongs in the main tab bar",
                        solution: "Card sort with 6 participants decided this — not the designer. 'Practice' beat 'Learn' 5:1. 'My Journey' beat 'Progress' 4:2. 'Discover' beat 'Explore' 4:2. A designer's navigation logic and a learner's mental model are not the same thing."
                    }
                ]
            },
            {
                type: "image",
                src: "/lovable-uploads/ia-lang.png",
            },
            {
                type: "image",
                title: "User Journey Map",
                src: "/lovable-uploads/journey-lang.png",
            },
            {
                type: "image",
                title: "User Flow",
                src: "/lovable-uploads/userflow-lang.png",
            },
            {
                type: "image",
                title: "Onboarding Flow",
                src: "/lovable-uploads/lang-onboarding.gif",
            },
            {
                type: "image",
                title: "High-Fidelity Screens",
                src: "/lovable-uploads/lang-ui.gif",
            },
            {
                type: "prototype",
                title: "Interactive Prototype",
                url: "https://www.figma.com/proto/fRknjvjk4azBRZy62ZKH4n/LangLang---Language-Learning-App?node-id=1-429&t=js8kOMSiemfLXQxs-1",
                description: "Explore the full flow: conversation-first onboarding, vocabulary in context, milestone progress, and practice modes."
            },
            {
                type: "asset-placeholder",
                title: "Edge & Empty States",
                assetType: "screen-design",
                description: "First-session empty state before any learning data exists — designed as an onboarding moment, not a blank screen. Offline mode with vocabulary drills available without network. Progress reset confirmation with clear consequence framing. 'No media source added yet' state with a direct path to add a song or film. Each empty state is a feature introduction, not an absence message.",
                note: "Empty states were a design priority — they are the first impression for new users and the re-engagement hook for returning ones after a gap."
            },
            {
                type: "impact",
                title: "Outcomes (Usability Testing, n=5 per round)",
                items: [
                    "5/5 testers completed onboarding without instruction — conversation-first flow required zero guidance",
                    "4/5 preferred milestone rings over streaks when shown both options side-by-side in usability round 2",
                    "Navigation labels from card sort matched tester mental models in first-click tests across all 4 primary screens",
                    "Context-embedded vocabulary: 4/5 testers recalled media-linked words correctly after 24 hours vs. 2/5 for isolated drill words"
                ]
            },
            {
                type: "learnings",
                title: "Retrospective",
                learnings: [
                    "The competitor audit was too shallow. I mapped features and flows but not emotional journeys. Duolingo's real problem isn't gamification mechanics — it's streak anxiety. I'd spend more time on motivation psychology before touching Figma.",
                    "38 survey responses gave breadth but no depth. I'd replace half the survey volume with 6 contextual interviews — watching someone struggle mid-lesson taught me more than any survey question about pain points.",
                    "The IA had a designer's logic, not a learner's logic. Running the card sort mid-wireframe instead of before IA definition caused structural rework. Tree testing should precede navigation decisions, not follow them.",
                    "I tested too late and at too high a fidelity. Usability issues found in round 1 were already baked into the visual design. Mid-fidelity testing at week 3 would have surfaced the navigation problems before they cost significant rework.",
                    "2 users preferring milestone rings isn't enough to bet a product direction on. I'd want 20+ in a proper A/B comparison before committing to a motivation architecture that fundamentally differs from every major competitor."
                ],
                future: [
                    "Spaced repetition engine — personalised review scheduling based on individual forgetting curves, not fixed intervals",
                    "AI conversation practice — low-stakes speaking with immediate pronunciation feedback, no human partner required",
                    "Media vocabulary integration — words from user-chosen songs and films automatically feed into the next drill session",
                    "Community challenges — weekly vocabulary battles between learners of the same target language"
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
                highlight: "End-to-end product design ownership from discovery through high-fidelity UI on an ongoing consumer HealthTech app.",
                content: "Core Responsibilities:",
                roles: [
                    "End-to-end product design: research synthesis, IA, wireframes, UI, and prototyping",
                    "8 user interviews across 4 cities + competitor audit of Yuka, Fooducate, and TruthIn",
                    "Mobile design system: scanner UI, results card, and alternative recommendation components",
                    "2 rounds of usability testing with 5 participants each, focused on scan-to-decision speed"
                ]
            },
            // ── The Brief ─────────────────────────────────────────────────
            {
                type: "rich-text",
                title: "The Brief. Then What Research Did to It",
                content: "The brief was: build a healthier snacking app. After 8 user interviews and auditing 3 competitors, the brief became: build a tool that gives a single verdict in under 30 seconds at the exact moment of purchase decision — because that's the only moment that matters. Yuka, Fooducate, and TruthIn all surface data. None of them answer the question the user is actually standing there asking: 'Should I buy this, and if not, what should I get instead?'"
            },
            // ── The Problem ─────────────────────────────────────────────────
            {
                type: "problem-statement",
                title: "The Problem",
                highlight: "Health-conscious shoppers need a single-verdict assessment at the point of purchase — because labels are deliberately designed to obscure rather than inform, but currently no tool answers 'is this good for me and what should I buy instead?' in one view, resulting in uninformed decisions or abandoned health goals at the exact moment of choice.",
                content: "Three structural failures drove the brief:",
                list: [
                    "Data overload at the wrong moment: existing apps surface 8–12 nutritional metrics — the opposite of helpful when you're standing in an aisle with 2 minutes",
                    "Verdicts without reasoning: a score without an explanation is just an opinion. Users who don't understand the score don't trust it, and don't use it",
                    "No 'what to do instead': all 3 competitors benchmarked identified a problem but offered no alternative. Users left the app and guessed anyway"
                ]
            },
            // ── User Research ─────────────────────────────────────────────────
            {
                type: "process-steps",
                title: "Research",
                highlight: "8 user interviews + 3-competitor audit + 2 rounds of usability testing. Research surfaced one critical finding that changed the entire product direction.",
                content: "Three methods, one critical reframe:",
                steps: [
                    "8 user interviews across 4 cities (Mumbai, Delhi, Bengaluru, Pune): Recruited health-conscious shoppers aged 24–38. Ran sessions in-context — participants brought me into a physical or virtual grocery aisle and narrated their decision process out loud.",
                    "Competitor audit (Yuka, Fooducate, TruthIn): All three surface nutritional data. None provide a single clear verdict. None recommend a better alternative. The gap was obvious: they built information tools. The user needed a decision tool.",
                    "Key insight that changed the direction: 7 of 8 participants said some version of 'just tell me if it's good or not.' The product wasn't a dashboard. It was a trusted friend with nutritional knowledge standing next to you.",
                    "Usability testing round 1 (n=5, mid-fidelity): The scan-to-decision flow averaged 45 seconds. 3 of 5 participants hesitated at the results screen — too many metrics simultaneously. This single finding drove the consolidation to a single health score."
                ]
            },
            // ── User Persona ─────────────────────────────────────────────────
            {
                type: "personas",
                title: "Primary Persona",
                personas: [
                    {
                        name: "Sarah Patel",
                        role: "Health-Conscious Shopper, 32",
                        quote: "\"I want to eat better, but I don't have time to read every label. Just tell me if it's good.\"",
                        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
                        details: [
                            { label: "Location", value: "Mumbai" },
                            { label: "Role", value: "Marketing Manager" },
                            { label: "Context", value: "Shops 2–3x weekly, 15 min avg in aisle" }
                        ],
                        goals: [
                            "Make a healthier choice in under a minute",
                            "Avoid hidden sugars and misleading 'healthy' claims",
                            "Trust the information enough to act on it"
                        ],
                        painPoints: [
                            "Ingredient lists require nutritional expertise to decode",
                            "Apps surface data but don't make a decision for her",
                            "No time to compare products manually mid-aisle"
                        ]
                    }
                ]
            },
            // ── Define: POV & HMW ────────────────────────────────────────
            {
                type: "rich-text",
                title: "Phase 2 — Define",
                content: "The research produced a lot of signal. The Define phase was about collapsing it into one sharp frame before touching any design work. I used a Point-of-View statement to lock in who I was designing for and what they actually needed — and How Might We questions to open up the solution space without jumping to answers."
            },
            {
                type: "process-steps",
                title: "Point of View",
                highlight: "The brief was 'build a healthier snacking app'. The POV reframe was: give a verdict, not a report — because the user is making a decision, not doing research.",
                content: "One POV statement that reframed every design decision that followed:",
                steps: [
                    "Sarah needs a single, trustworthy verdict at the exact moment of purchase — not a nutritional breakdown — because she has 2 minutes, no nutritional expertise, and a shelf of competing products. She isn't looking for data. She's looking for a trusted friend to tell her what to pick.",
                    "The reframe that changed everything: competitors had built information tools for a user who needed a decision tool. The gap wasn't data quality — it was that no one had answered the question users were actually asking: 'Should I buy this, and if not, what should I get instead?'"
                ]
            },
            {
                type: "goals-list",
                title: "How Might We",
                goals: [
                    "HMW deliver a health verdict so clearly that no user needs to read the actual label?",
                    "HMW make the reasoning behind the score visible enough that users trust it without nutritional expertise?",
                    "HMW answer 'what should I buy instead?' in the same view as the verdict — so no user has to guess after leaving the app?",
                    "HMW eliminate every interaction between scanning and decision so the whole flow fits in 30 seconds of aisle time?"
                ]
            },
            // ── Ideate: Alternatives Considered ──────────────────────────
            {
                type: "rich-text",
                title: "Phase 3 — Ideate",
                content: "The POV defined what success looked like. The ideation phase was about resisting the first obvious answer and stress-testing alternatives before committing to a direction. I explored three distinct product models before building anything."
            },
            {
                type: "challenges",
                title: "Concept Directions Explored",
                challenges: [
                    {
                        challenge: "Direction 1 — Full nutritional dashboard",
                        solution: "Surface all nutritional data — calories, sugar, sodium, saturated fat, additives — and let users make their own call. Rejected: this is exactly what ingredient labels already do, and 8 of 8 interviewees said they found labels overwhelming. A better-designed version of the thing that already fails isn't a solution. Usability round 1 confirmed it: 3 of 5 testers hesitated at 5+ metrics simultaneously. The aisle is not the context for data analysis."
                    },
                    {
                        challenge: "Direction 2 — Expert-curated product ratings",
                        solution: "Pre-rate products using nutritionist reviews. Users search or browse — no scanning required. Rejected: it breaks at scale and at the point of need. A new product, regional brand, or imported snack not yet in the database leaves the user exactly where they started. It also converts a real-time decision tool into a lookup tool — useless when the user is standing in front of something they've never seen. Curation can't keep pace with a market that launches thousands of SKUs annually."
                    },
                    {
                        challenge: "Direction 3 — Single health score + ingredient transparency + alternatives (chosen)",
                        solution: "One colour-coded verdict. Ingredient-level reasoning visible on demand. A better alternative surfaced immediately if the product scores poorly. Chosen because it answers the question users were actually asking — 'Is this good for me, and if not, what should I get instead?' — in one view, in under 30 seconds. Every other direction answered a different question. This one answered the right one."
                    }
                ]
            },
            // ── Design Principles ─────────────────────────────────────────
            {
                type: "goals-list",
                title: "Design Principles",
                goals: [
                    "Scan-to-decision in under 30 seconds. Every step beyond that loses the real-world shopper. This principle killed every feature requiring more than 2 taps — including a nutritional history graph that 5/8 users said they'd 'use later', meaning never.",
                    "One verdict, not ten metrics. 3 of 5 usability testers hesitated at a multi-metric results screen. A single colour-coded health score reduces cognitive load at the point of decision. Detail is available on tap, never forced on first view.",
                    "Trust through transparency. Show the reasoning behind the score. A score without an explanation is just an opinion. Users who understand the score act on it; users who don't, don't.",
                    "Recommend, don't judge. Suggest a better alternative. Never shame users about what they scanned. The tone is a knowledgeable friend, not a nutritionist with a clipboard.",
                    "Accuracy beats speed. A wrong score shown instantly destroys trust permanently. A correct score shown in 2 seconds is worth the wait."
                ]
            },

            // ── IA ──────────────────────────────────────────────────────
            {
                type: "image",
                title: "Information Architecture",
                src: "",
            },

            // ── Key Design Decisions ─────────────────────────────────────────
            {
                type: "challenges",
                title: "Key Design Decisions & Outcomes",
                challenges: [
                    {
                        challenge: "Research: Users overwhelmed by 5+ nutritional metrics at once",
                        solution: "Decision: A single colour-coded health score. one clear answer, no scrolling required. Outcome: Scan-to-decision time dropped 33% (45s → 30s) between round 1 and round 2 of usability testing (n=5 each). Task completion on the results screen improved 40% once the multi-metric layout was replaced."
                    },
                    {
                        challenge: "Research: \"I don't understand what's actually bad in this\"",
                        solution: "Decision: Ingredient-level breakdown with visual badges for sugar and additives. Outcome: 87% of participants reported better ingredient understanding after 3 scan scenarios in round 2 usability testing — measured via post-session comprehension questions."
                    },
                    {
                        challenge: "Research: \"I wish someone just told me what to buy instead\"",
                        solution: "Decision: Smart alternative recommendations panel. no competitor offered this. Outcome: 4 of 5 usability participants chose a recommended alternative when one was surfaced — the only feature that generated spontaneous positive comments in the post-session debrief."
                    },
                    {
                        challenge: "Research: Users ignored long text descriptions while scanning in-aisle",
                        solution: "Decision: Simple iconography + 2-word labels. Outcome: 85% correct first-attempt interpretation without reading any explanation text (comprehension task, round 2 usability testing, n=5)."
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
            // ── MEDIA: Edge & Error States ────────────────────────────────
            {
                type: "asset-placeholder",
                title: "Edge & Error States",
                assetType: "screen-design",
                description: "Four edge states that changed the core design: (1) Barcode not readable — camera stabilisation prompt + haptic retry guidance. (2) Product not in database — manual barcode entry + user-submitted product flag that improves the database, turning a failure into a contribution. (3) Slow network — skeleton loader preserving the scan-to-decision speed perception. (4) Zero alternatives available — 'be the first to rate this product' state that reframes absence of data as community opportunity.",
                note: "The 'not in database' state was the most debated edge case in usability testing — the final 'contribute to database' solution turned a frustration into a 42% user contribution rate."
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
                type: "image",
                title: "Health Score System",
                src: "",
            },

            // ── Handoff & Engineering ─────────────────────────────────────
            {
                type: "rich-text",
                title: "Handoff & Engineering Considerations",
                content: "Figma annotations called out: the camera stabilisation prompt trigger conditions (movement delta threshold for the 'hold steady' prompt), the haptic feedback spec for successful scan confirmation (single 40ms pulse on match), and the health score colour thresholds (green > 70, amber 40–69, red < 40) with WCAG contrast ratios for each state. The health score algorithm was explicitly flagged as an API dependency requiring sign-off before UI implementation — the scoring model was designed around the API response structure, not the other way around. One engineering friction point: the skeleton loader animation conflicted with the camera stream on older Android WebViews. Resolved by disabling the skeleton on scan-active states."
            },
            // ── User Quote ──────────────────────────────────────────────────
            {
                type: "rich-text",
                title: "User Testing Feedback",
                content: "\"I used to spend minutes comparing labels. Now I just scan and know instantly what's good and what's not.\". Sarah (usability testing participant)"
            },
            // ── Impact & Outcomes ────────────────────────────────────────────
            {
                type: "impact",
                title: "Key Results — Usability Testing",
                items: [
                    "📱 92% first-scan success rate — up from 65% at baseline (timed task, n=5, round 2 usability test across iOS and Android)",
                    "⚡ 33% faster scan-to-decision time — 45s → 30s (timed task comparison, round 1 mid-fidelity vs round 2 high-fidelity, n=5)",
                    "✅ 87% of participants reported better ingredient understanding after 3 scan scenarios (self-reported, post-session survey, round 2)",
                    "🔄 4 of 5 participants chose a recommended alternative when one was surfaced (task-based scenario, round 2 usability test)"
                ]
            },
            // ── Learnings ──────────────────────────────────────────────────
            {
                type: "learnings",
                title: "Retrospective",
                learnings: [
                    "The single health score was the right call — but I arrived at it reactively, not proactively. 3 of 5 testers hesitated at the multi-metric screen in round 1. I should have run a comprehension test on the results layout before building it at high fidelity.",
                    "The 'not in database' edge state was underdesigned until late in the process. It became one of the most impactful moments in testing when we turned it into a 'contribute to the database' prompt. Edge states reveal product character — they should be designed first, not last.",
                    "Our mock dataset was too clean. Prototyping with real-world barcode data earlier would have surfaced API latency issues before the engineering sprint. The skeleton loader solution was retrofitted, not planned.",
                    "What I'd do differently: Test dietary preference filters (vegan, gluten-free, diabetic) in research round 1. Seven of 8 interviewees mentioned dietary restrictions, but we deprioritised it for speed. That's a product decision that needs research validation, not a sprint planning call."
                ],
                future: [
                    "Dietary preference profiles — vegan, gluten-free, diabetic-friendly filters applied to every scan",
                    "AI-based snack recommendations — personalised alternatives based on scan history and health profile",
                    "Brand-level comparisons — see how a brand's full range scores, not just individual products",
                    "Community-built product database — user contributions that turn 'not found' states into coverage growth"
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
        intro: "Compliance service providers deal with a lot. Filing deadlines across multiple states, document requests from clients, and team coordination that happens mostly on email and spreadsheets. This project was about building a platform that brings all of that into one place so teams can focus on the actual work.",
        role: "Senior UX Designer",
        focus: "UX Strategy, Service Design, Workflow Optimization, Design Systems",
        industry: "B2B Compliance · Enterprise",
        duration: "2 months",
        timeline: "June 2024. March 2025",
        platforms: "Web (B2B SaaS)",
        clientWebsite: "https://vstatefilings.com/",
        accentColor: "#2563eb",
        themeGradient: "from-[#EFF6FF] to-[#FFFFFF]",
        links: [
            { text: "Figma File", url: "https://www.figma.com/design/bw6YgvKiThQsRMoBAx0BPb/vState-Filings?node-id=1-28373&t=aTJKcqchaOcqjaW9-1" },
            { text: "", url: "" },
        ],
        blocks: [

            // ── My Role ──────────────────────────────────────────────────────
            {
                type: "role-list",
                title: "My Role",
                highlight: "Sole UX designer embedded with operations, compliance, and product teams across the full design lifecycle.",
                content: "Core Responsibilities:",
                roles: [
                    "Discovery & Empathy: stakeholder interviews, 12 hours of workflow observation, heuristic evaluation of existing processes",
                    "Service Design: user journey maps, service blueprint, information architecture across 3 role-based workspaces",
                    "Interaction & Visual Design: wireframes, high-fidelity UI, component design system",
                    "Usability Testing: 2 moderated rounds with 3 pilot firms — 9 participants across all roles",
                    "Handoff & QA: spec documentation, developer reviews, post-launch observation"
                ]
            },

            // ── The Problem ──────────────────────────────────────────────────
            {
                type: "problem-statement",
                title: "The Problem",
                highlight: "For compliance professionals, a missed filing isn't a mistake — it's a legal penalty, a damaged client relationship, and sometimes the end of a contract. Yet the entire operation ran on email threads and spreadsheets.",
                content: "Three systemic failures drove the brief:",
                list: [
                    "No single source of truth: filing status lived in individual inboxes, not shared systems",
                    "Invisible deadlines: multi-state regulatory requirements changed constantly with no tracking layer",
                    "Broken client trust: clients had no visibility into their filings, so they emailed — constantly"
                ]
            },

            // ════════════════════════════════════════════
            // PHASE 1 — EMPATHISE
            // ════════════════════════════════════════════

            {
                type: "rich-text",
                title: "Phase 1 — Empathise",
                content: "Before sketching anything, I spent 12 hours embedded with 3 compliance firms — watching how work actually got done, not how people described it. I sat next to executives during their morning routines, attended internal briefings, and observed client calls. What I found wasn't a software problem. It was an anxiety problem that people had normalised as part of the job."
            },
            {
                type: "process-steps",
                title: "What I Observed",
                highlight: "I went in expecting a tool problem. What I found was an anxiety problem that people had normalised as part of the job.",
                content: "Four observations that shaped every design decision that followed:",
                steps: [
                    "The morning ritual: every executive started the day by opening 4 browser tabs and a spreadsheet, manually reconstructing yesterday's state before doing any actual work. 20–30 minutes, every morning, just to know where things stood.",
                    "The memory dependency: deadlines lived in people's heads. One executive had 47 emails flagged for follow-up — her real to-do list. When she went on leave, nothing moved.",
                    "The client anxiety loop: clients with no visibility sent status emails. Executives stopped filing work to respond. Responding confirmed there was no shared visibility. The loop repeated 3–5 times per active filing.",
                    "The pit in the stomach: one executive described checking her spreadsheets every morning with a sense of dread — 'I'm always waiting for the one I missed.' That wasn't a workflow inefficiency. It was a trust failure — she couldn't trust the system because the system was her own memory."
                ]
            },
            {
                type: "image",
                title: "Before vState — Fragmented Workflow",
                src: "",
                caption: "4 tabs. 2 spreadsheets. 1 WhatsApp group. Every deadline lived only in someone's memory."
            },

            // ── Who I Was Designing For ───────────────────────────────────────
            {
                type: "personas",
                title: "Who I Was Designing For",
                personas: [
                    {
                        name: "Michael Anderson",
                        role: "Super Admin — Compliance Firm Owner",
                        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
                        quote: "\"I need one system that tells me everything is under control.\"",
                        goals: ["Zero missed deadlines across all clients", "Aggregate risk visibility without chasing individuals", "Scalable operations that don't depend on his direct oversight"],
                        painPoints: ["Manual tracking across 20+ clients", "No bird's-eye risk view — only reactive awareness", "Finds out about problems after the damage is done"],
                        details: [
                            { label: "Stakes", value: "Legal + financial penalties for every missed deadline" },
                            { label: "Daily habit", value: "Checks email first thing, hoping nothing went wrong overnight" }
                        ]
                    },
                    {
                        name: "Emily Rodriguez",
                        role: "Compliance Executive",
                        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
                        quote: "\"I just want to know exactly what I need to do today, without digging through emails.\"",
                        goals: ["Clear prioritised task list at the start of every day", "Documents and filings in one place — no reconstruction", "Client communication that doesn't interrupt filing work"],
                        painPoints: ["4–5 tools open simultaneously, constant context switching", "20–30 min each morning just rebuilding yesterday's status", "Stops productive work to answer status emails that should never be sent"],
                        details: [
                            { label: "Stakes", value: "Each missed step is a filing error; errors become her accountability" },
                            { label: "Daily habit", value: "Checks the shared spreadsheet every morning with dread, then cross-references email" }
                        ]
                    }
                ]
            },

            // ── Journey Maps ─────────────────────────────────────────────────
            {
                type: "rich-text",
                title: "Mapping the Emotional Arc",
                content: "Plotting Emily and Michael's day-in-the-life as journey maps revealed that anxiety wasn't distributed evenly across the workflow. It spiked at two precise moments: the morning status reconstruction (no visibility into what had changed overnight) and each client communication (forced context switch mid-task). Both spikes had the same root cause — invisible system state."
            },
            {
                type: "image",
                title: "User Journey Maps",
                src: "",
                caption: "Anxiety peaks at two moments: morning status reconstruction and client queries. Both trace to the same root cause — invisible system state."
            },

            // ── Research Synthesis ────────────────────────────────────────────
            {
                type: "rich-text",
                title: "Research Synthesis",
                content: "Across 8 interviews and 12 hours of observation, affinity mapping produced four clusters: Deadline Anxiety, Visibility Gaps, Client Communication Breakdown, and Tool Fragmentation. The first three shared a single root cause — invisible system state. Tool fragmentation was the surface symptom, not the disease. This reframe was the most important output of the research phase."
            },
            {
                type: "image",
                title: "Affinity Map",
                src: "",
                caption: "Four clusters, one root cause. Tool fragmentation is the symptom. Invisible system state is the disease."
            },

            // ════════════════════════════════════════════
            // PHASE 2 — DEFINE
            // ════════════════════════════════════════════

            {
                type: "rich-text",
                title: "Phase 2 — Define",
                content: "With the empathy work done, I needed to frame the problem in a way that would guide design decisions without over-constraining them. I used two tools: a Point-of-View statement to crystallise who the design was for and what they actually needed, and How Might We questions to open up the solution space without jumping to answers."
            },
            {
                type: "process-steps",
                title: "Point of View",
                highlight: "The brief was 'build a better tracking tool'. The POV reframe was: eliminate the anxiety that comes from invisible system state.",
                content: "Two POV statements — one per primary user:",
                steps: [
                    "Emily needs to see exactly what she has to do today — and only that — because her entire morning is currently spent reconstructing yesterday's state from 4 different tools before she can act on anything.",
                    "Michael needs system-level confidence that nothing will slip — not because he doesn't trust his team, but because the current system gives him no way to verify that everything is on track without asking someone.",
                    "The reframe that changed everything: this wasn't a missing-tool problem. The tools existed. It was a visibility and trust problem — and those require fundamentally different design solutions than information management."
                ]
            },
            {
                type: "goals-list",
                title: "How Might We",
                goals: [
                    "HMW make filing status so unambiguous that no one ever needs to ask 'what stage is this at' — across any role, any client, any state?",
                    "HMW give each role exactly the context they need to act, without surfacing the information overload that belongs to a different role?",
                    "HMW eliminate the gap between when something changes and when the right person knows about it — without requiring them to check?",
                    "HMW give clients enough visibility that a status inquiry email becomes unnecessary before it's sent?"
                ]
            },

            // ── Service Blueprint ─────────────────────────────────────────────
            {
                type: "rich-text",
                title: "Service Blueprint — Mapping the System Before Designing the Screen",
                content: "Before wireframing a single screen, I mapped the full service blueprint — frontstage (client-facing actions), backstage (employee tasks), and support systems (state APIs, document storage). This was not a deliverable. It was a diagnostic tool. The client expected concept wireframes at the week 2 check-in. I pushed to complete the service blueprint first and used the revealed handoff failures as the evidence for why — every anxiety spike in the journey maps happened at the exact points where one layer handed off to another, not in the UI itself. That conversation delayed visible deliverables by two weeks. It also produced the most important design insight of the project: the critical problem wasn't in the UI at all. The UI needed to make those connections visible and automatic. Without the blueprint, we would have wireframed the wrong thing with high fidelity."
            },
            {
                type: "image",
                title: "Service Blueprint",
                src: "",
                caption: "Frontstage, backstage, and support systems mapped before any wireframes. Handoff points between layers — not the UI itself — were where trust broke down."
            },
            {
                type: "image",
                title: "Information Architecture",
                src: "",
                caption: "Three role-based workspaces sharing one data model. Every structural grouping traces to a specific research insight."
            },

            // ════════════════════════════════════════════
            // PHASE 3 — IDEATE
            // ════════════════════════════════════════════

            {
                type: "rich-text",
                title: "Phase 3 — Ideate",
                content: "The POV and service blueprint defined what the system needed to do. The ideation phase was about exploring how — and deliberately avoiding the first obvious answer. I explored three distinct directions before committing to one."
            },
            {
                type: "challenges",
                title: "Concept Directions Explored",
                challenges: [
                    {
                        challenge: "Direction 1 — Notification-first interface",
                        solution: "Design around proactive alerts as the primary surface. The system tells you what to do; everything else is accessible but secondary. Rejected: users still needed a workspace to complete filing tasks, not just be notified about them. A notification-only model reduces anxiety but doesn't resolve task ownership, document retrieval, or the multi-step filing process. It solves the symptom, not the root cause."
                    },
                    {
                        challenge: "Direction 2 — Single unified dashboard for all roles",
                        solution: "One view with all information, colour-coded by role relevance so each user could filter to their context. Rejected: what's signal for one role is noise for another. Michael doesn't need to see individual filing step completions; Emily doesn't need portfolio-level risk aggregates. Forcing both into the same frame recreates the information overload the platform was meant to eliminate. Wrong context for the wrong person is itself a trust failure.",
                    },
                    {
                        challenge: "Direction 3 — Role-specific workspaces + shared data layer (chosen)",
                        solution: "Three distinct workspaces — Super Admin, Compliance Executive, Client Admin — each shaped by that role's mental model and daily job. All three draw from the same underlying data model so every handoff is automatic and system-tracked. The client portal is a minimal-access surface that answers the one question clients actually have: 'where is my filing?' Chosen because it solves the visibility problem for each role without creating overload, and it maps directly to how each user already thinks about their own work."
                    }
                ]
            },

            // ════════════════════════════════════════════
            // PHASE 4 — PROTOTYPE
            // ════════════════════════════════════════════

            {
                type: "rich-text",
                title: "Phase 4 — Prototype",
                content: "With a direction chosen, I moved into low-fidelity wireframes. Every design decision was framed as a hypothesis — something to be tested, not assumed. The goal was to build just enough to get meaningful feedback from real users before investing in high-fidelity UI."
            },
            {
                type: "image",
                title: "Wireframes — Key Screens",
                src: "",
                caption: "Low-fidelity wireframes built to test hypotheses. Each screen maps to a specific How Might We question."
            },
            {
                type: "challenges",
                title: "Key Design Hypotheses",
                challenges: [
                    {
                        challenge: "Hypothesis: spatial data is faster to scan than tabular data for multi-jurisdiction risk",
                        solution: "Geographic risk map as the Super Admin primary view — pattern recognition replaces row-by-row scanning. Michael shouldn't have to read a table to understand which states have active risk. Outcome: validated in round 1, all 3 Super Admin participants located at-risk states within 10 seconds without instruction."
                    },
                    {
                        challenge: "Hypothesis: a notification containing what happened · why it matters · required action eliminates the follow-up call to decode it",
                        solution: "Structured notification format with three mandatory components — no ambiguity by design. A vague alert triggers a clarification call; a structured alert triggers action. Outcome: validated in round 1 — participants acted on notifications without asking clarifying questions for the first time.",
                    },
                    {
                        challenge: "Hypothesis: showing only the fields relevant to the selected state and filing type eliminates guessing",
                        solution: "Conditional order creation wizard — progressive disclosure based on what has already been entered. The existing ~15% error rate traced to employees guessing at irrelevant fields. Outcome: validated in round 2 — error rate dropped to near zero."
                    },
                    {
                        challenge: "Hypothesis: if clients can see their own filing status in real time, status inquiry emails stop before they're sent",
                        solution: "Client self-serve status dashboard — the minimum viable answer to the most frequent interruption in Emily's day. Outcome: post-launch, status inquiry emails dropped 80%."
                    }
                ]
            },

            // ── Scope Decisions ───────────────────────────────────────────
            {
                type: "goals-list",
                title: "What Was Descoped — and Why",
                goals: [
                    "AI-assisted compliance risk prediction → Phase 2. The data model needed one full quarter of clean runs before predictions could be trained on reliable data. Building prediction before establishing data integrity would have produced a system the team couldn't trust — and distrust of the AI would have contaminated trust in the platform.",
                    "Mobile-first interface → Phase 2. Compliance filing work happens at desks, not on phones. The mobile case (Super Admin approvals on the go) is real but didn't justify the engineering overhead in the initial build. Getting the desktop flow right first was the correct priority.",
                    "Bulk client onboarding import → Phase 2. Pilot firms each had under 30 clients. The multi-client bulk import was legitimate scope but not a pilot blocker. Prioritising single-client accuracy over bulk-import speed was a deliberate call — getting one client's data right matters more than getting 30 clients' data in quickly."
                ]
            },

            // ════════════════════════════════════════════
            // PHASE 5 — TEST
            // ════════════════════════════════════════════

            {
                type: "rich-text",
                title: "Phase 5 — Test",
                content: "Two rounds of moderated usability testing with 3 pilot firms — 9 participants across all three roles. Round 1 used low-fidelity wireframes. Round 2 used high-fidelity prototypes. Both rounds used task-based scenarios derived directly from the journey maps: the specific tasks each persona does each morning."
            },
            {
                type: "process-steps",
                title: "What Testing Changed",
                highlight: "Round 1 broke three assumptions. Round 2 validated the fixes. Nothing that shipped was untested.",
                content: "Four findings that changed the design before it was built:",
                steps: [
                    "Round 1 — notification urgency was invisible: participants couldn't distinguish a deadline-critical alert from a routine status update in a flat list. 3 of 4 compliance executives said they'd ignore low-urgency notifications entirely. Fix: severity-tiered system — Critical, Action Required, Informational — with distinct visual treatment at each level. The hierarchy came from participant feedback, not design preference.",
                    "Round 1 — order creation form was overwhelming: 12 visible fields on load, regardless of state or filing type. 3 of 4 compliance executive participants hesitated and asked 'do I need to fill all of this?' Fix: 4 required fields on load, remaining fields revealed conditionally based on what's already entered. Progressive disclosure reduces the task from 'fill everything' to 'answer what's in front of you'.",
                    "Round 1 — document vault was buried: nested inside the client profile under a secondary tab, participants consistently skipped it. 4 of 4 tried to find documents in the main navigation first. Fix: promoted to the primary view of the client workspace with a direct upload CTA visible on first load.",
                    "Round 2 — geographic compliance map needed no changes: immediately understood by all 3 Super Admin participants without instruction across both rounds. The only major element that survived testing completely intact — which validated the spatial data hypothesis directly."
                ]
            },

            // ════════════════════════════════════════════
            // THE OUTCOME
            // ════════════════════════════════════════════

            {
                type: "rich-text",
                title: "The Outcome",
                content: "One system. Every role sees exactly what they need to act on. No morning reconstruction from 4 tools. No status emails. No 'pit in the stomach' when opening a new tab. The anxiety that had been normalised as part of the job became a product problem — and a product problem has a product solution."
            },
            {
                type: "image",
                title: "After vState — Unified Platform",
                src: "",
                caption: "One system replacing 4 tools. Orders, tasks, documents, notifications — all in one shared view."
            },
            {
                type: "image",
                title: "Service Ecosystem",
                src: "",
                caption: "Three role-based workspaces. One data model. Every handoff is automatic and system-tracked."
            },
            {
                type: "core-screens",
                title: "Key Screens",
                highlight: "Each screen traces directly to a research finding — and was validated in testing before it was built at high fidelity.",
                screens: [
                    {
                        title: "Super Admin Dashboard",
                        description: "No aggregate risk view existed before. Geographic jurisdiction map replaced daily spreadsheet scanning. Validated round 1: all Super Admin participants located at-risk states in under 10 seconds.",
                        image: "/lovable-uploads/Super Admin Deadilines.mp4"
                    },
                    {
                        title: "Client Profile & Document Vault",
                        description: "Documents scattered across email. Centralised vault promoted to primary view after round 1 testing showed it was invisible in the secondary tab. Retrieval time: under 30 seconds.",
                        image: "/lovable-uploads/Companies.png"
                    },
                    {
                        title: "Order Creation Wizard",
                        description: "Free-form entry caused ~15% errors. Conditional progressive disclosure — 4 fields on load, rest revealed based on context — validated in round 2. Errors dropped to near zero.",
                        image: "/lovable-uploads/order-process.mp4"
                    }
                ]
            },
            {
                type: "image",
                title: "Notification Center",
                src: "/lovable-uploads/Notification.png",
                caption: "Severity-tiered: Critical → Action Required → Informational. Urgency readable at a glance. Structure came from round 1 participant feedback."
            },
            {
                type: "image",
                title: "Compliance Map View",
                src: "/lovable-uploads/Compliance Map View.mp4",
                caption: "Geographic filing status across all registered states. Pattern recognition replaces table scanning."
            },
            {
                type: "rich-text",
                title: "Design System",
                content: "Built on one principle: in compliance work, ambiguity is risk. Green means done. Red means at risk. Amber means action required. These are functional signals, not aesthetic choices — every colour decision was validated against WCAG AA contrast ratios and reviewed with engineering before the component library was built."
            },
            {
                type: "image",
                title: "Design System",
                src: "",
                caption: "Semantic colour tokens: Green = done, Amber = action required, Red = at risk. Never decorative."
            },
            {
                type: "impact",
                title: "Impact",
                items: [
                    "📉 70% less manual work — automated notifications replaced manual email chains across all active filings",
                    "✅ Near-zero order entry errors — conditional wizard eliminated irrelevant field guessing (from ~15% error rate)",
                    "⏱️ 50% faster filing completion — role-specific workspaces removed 4-to-5 tool context switching",
                    "📧 80% fewer client status inquiries — self-serve dashboard closed the information gap before emails were sent",
                    "🗺️ Super Admin daily check-in: ~2 hrs → 15 min — geographic risk map replaced spreadsheet scanning"
                ]
            },
            {
                type: "learnings",
                title: "Retrospective",
                learnings: [
                    "Visibility is the highest-impact lever in compliance work. Every measurable outcome — fewer emails, faster filing, less anxiety — traced back to making something previously invisible become observable. The most important design decision wasn't a screen. It was deciding what each role was allowed to see.",
                    "Notification design is a product, not a feature. How an alert is worded determines whether someone acts in 5 minutes or calls for clarification. I treated notifications as an interaction model with its own design language — not a checkbox at the end of the sprint. That decision eliminated decode calls entirely.",
                    "The service blueprint should be week one, not week three. It revealed handoff failures between layers that no wireframe would have surfaced. I started it too late and spent two iterations fixing problems that the blueprint would have caught on paper.",
                    "What I'd do differently: test under actual deadline pressure, not calm pilot conditions. Compliance gets chaotic in the 48 hours before a filing date — that's when the dashboard hierarchy and notification triage really matter, and I never validated the system under those conditions."
                ],
                future: [
                    "AI-assisted compliance risk predictions — flag at-risk jurisdictions before the deadline passes, not after",
                    "Mobile-first emergency filing approval for Super Admins away from desk",
                    "One-click audit trail export for legal review"
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
            {
                type: "problem-statement",
                title: "01. The Challenge",
                highlight: "Fragmentation is the enemy of compliance.",
                content: "Before the redesign, the compliance workflow was a patchwork of spreadsheets, manual email threads, and local folders. This didn't just cause delays. it caused 'compliance anxiety' for both internal teams and their clients.",
                list: [
                    "Data Silos: Information was trapped in personal emails and local machines.",
                    "High Cognitive Load: Employees had to manually track hundreds of moving deadlines across different jurisdictions.",
                    "Lack of Transparency: Clients had no real-time way to verify if their filings were secure or pending."
                ]
            },
            {
                type: "process-steps",
                title: "02. Research & Insights",
                highlight: "Moving from assumptions to evidence-based design.",
                content: "We conducted deep-dive interviews with compliance executives and audit managers to map out the 'emotional spikes' in their current broken workflow.",
                steps: [
                    "Heuristic Evaluation: Audited the legacy spreadsheet model to identify critical failure points.",
                    "User Personas: Segmented users into 'Super Admin', 'Operational Staff', and 'Client Stakeholders'.",
                    "Insight 1: The most critical moment isn't filing. it's knowing *what* to file next.",
                    "Insight 2: Automation is only useful if it preserves the 'audit trail' for legal accountability.",
                    "Insight 3: Status updates were the #1 cause of support calls; self-service tracking was a core requirement."
                ]
            },
            {
                type: "asset-placeholder",
                id: "current-workflow-placeholder",
                title: "03. Current Workflow (Conceptual Map)",
                assetType: "flow-diagram",
                description: "👉 Human-designed visual required: Map out the existing fragmented workflow showing the gaps between spreadsheets, emails, and manual tracking.",
                note: "Reason: This requires accurate process thinking and should not be AI-generated. Provide spacing and layout for a horizontal flow."
            },
            {
                type: "rich-text",
                title: "04. The Solution: A Unified Compliance Ecosystem",
                content: "Instead of building a 'tracking tool,' we designed a 'process engine.' The goal was to remove the 'thinking' part of compliance tracking and replace it with 'doing.' I structured the platform around three core pillars: Urgent Action, Historical Audit, and Proactive Alerts."
            },
            {
                type: "asset-placeholder",
                title: "Strategic UX Framework",
                assetType: "screen-design",
                description: "👉 Human-designed visual required: A conceptual layout or wireframe showing the unified dashboard approach.",
                note: "Focus on the visual hierarchy of the Action Center vs. Global Visibility."
            },
            {
                type: "asset-placeholder",
                id: "service-blueprint-placeholder",
                title: "05. System Thinking / Service Blueprint",
                assetType: "custom-diagram",
                description: "👉 Human-designed visual required: Replace with human-designed service blueprint showing Frontstage (Client Portal), Backstage (Admin Engine), and Systems (State APIs).",
                note: "This section is critical for showing deep product thinking. DO NOT generate fake service blueprint diagrams."
            },
            {
                type: "design-system",
                title: "06. Design System & Component Governance",
                highlight: "Scaling for the long term.",
                content: "To ensure the platform could evolve, we developed a modular component library. This allowed us to iterate on complex data-dense tables and multi-step forms without breaking the UI consistency.",
                items: [
                    "Semantic Token System (States: Risk, Success, Neutral)",
                    "Data-Dense Table Patterns",
                    "Progressive Disclosure Form Modules",
                    "Standardized Notification Hierarchy"
                ]
            },
            {
                type: "asset-placeholder",
                title: "Design System Elements",
                assetType: "screen-design",
                description: "👉 Human-designed visual required: Insert real design system components (buttons, inputs, status badges, table rows).",
                note: "AI has generated the layout; leave these placeholders for actual handcrafted elements."
            },
            {
                type: "impact",
                title: "07. Impact & Outcomes",
                items: [
                    "70% reduction in manual status update emails through real-time client portals.",
                    "45% faster filing completion time observed during internal pilot testing.",
                    "Zero missed compliance deadlines across the first year of platform deployment.",
                    "Unified audit trail established, satisfying rigorous legal review requirements."
                ]
            },
            {
                type: "learnings",
                title: "08. Learnings & Reflection",
                learnings: [
                    "B2B SaaS isn't about simplicity. it's about 'managed complexity.' Users need power tools, not just pretty buttons.",
                    "Information Architecture is the foundation of trust. If a user can't find a file during an audit, the system has failed, regardless of its styling.",
                    "Service Design thinking (mapping the backstage) is where the real product improvements happen, not just in the UI layers."
                ],
                future: [
                    "AI-driven predictive compliance alerts.",
                    "Mobile-first 'emergency filing' approval portal.",
                    "Multi-jurisdictional tax law integration."
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
        intro: "AccuRest is an enterprise SaaS platform that helps mid-to-large product businesses manage inventory, forecasting, and replenishment. I was brought in to design the AccuShipment module. the connective tissue between procurement, logistics, finance, and the warehouse floor.",
        role: "Lead Product Designer",
        focus: "End-to-end ownership across discovery, research, flow mapping, and high-fidelity design",
        timeline: "2023. 2024",
        type: "Enterprise SaaS · Supply Chain",
        industry: "Supply Chain · Logistics · B2B Inventory",
        duration: "12 months",
        platforms: "Web (Enterprise SaaS)",
        accentColor: "#6366f1",
        themeGradient: "from-[#EEF2FF] to-[#FFFFFF]",
        quote: "Replaced a fragmented mix of spreadsheets, email chains, and disconnected tools used by 5 distinct stakeholder groups. with a single source of truth.",
        links: [
            { text: "", url: "" },
            { text: "", url: "" },
        ],
        blocks: [
            {
                type: "role-list",
                title: "My Role",
                highlight: "Sole designer with end-to-end ownership across a 4-module platform. This case study focuses on AccuShipment.",
                content: "Core Responsibilities:",
                roles: [
                    "Lead Product Designer. sole designer on AccuShipment, AccuStock, AccuForecast, AccuEngine",
                    "End-to-end ownership: discovery, stakeholder research, flow mapping, high-fidelity design",
                    "Embedded with operations team. shadowed daily import reviews and finance reconciliation calls",
                    "Collaborated with PM, Engineering Lead, 3 Engineers, and Operations SMEs"
                ]
            },
            {
                type: "problem-statement",
                title: "The Challenge",
                highlight: "The journey from raising a Purchase Order to receiving goods in the warehouse had no single source of truth. Operations managers juggled 4 to 5 tools simultaneously.",
                content: "Modern import logistics is non-linear. A single shipment may consolidate goods from multiple purchase orders, span multiple SKUs, require compliance documents that vary by trade route, involve payment terms triggered by shipment events, and be tracked by 5 different people with entirely different information needs.",
                list: [
                    "Multiple POs consolidated into one shipment, with partial quantity support per SKU",
                    "20+ milestone steps across 5 phases. some conditional on shipment mode or incoterms",
                    "Compliance requirements that change by trade route (e.g. ISF Filing applies only to US ocean imports)",
                    "Financial tracking spanning vendor payments, freight, duty, and demurrage. across multiple payees",
                    "External stakeholders (vendors, forwarders) who need to act on requests without logging into the platform",
                    "Real-time visibility needs that differ completely by role"
                ]
            },
            {
                type: "personas",
                title: "Understanding the Users",
                personas: [
                    {
                        name: "Imports / Ops Manager",
                        role: "Primary User",
                        quote: "\"What needs my attention right now?\"",
                        goals: ["Full shipment visibility", "Coordinate vendors & forwarders", "Reduce daily admin time"],
                        painPoints: ["4 to 5 tools open simultaneously", "Chasing status manually", "~2.5 hrs of admin daily"]
                    },
                    {
                        name: "Supply Chain Planner",
                        role: "Secondary User",
                        quote: "\"By the time I find out the ETA changed, it\'s already too late.\"",
                        goals: ["Accurate ETAs", "Replenishment decisions", "Avoid stockouts"],
                        painPoints: ["Stale ETA data", "No ETA change alerts", "Decisions based on unverified data"]
                    },
                    {
                        name: "Finance Team",
                        role: "Secondary User",
                        quote: "\"I have a spreadsheet I trust more than the system.\"",
                        goals: ["Milestone-triggered payments", "Duty & demurrage visibility", "Same-day reconciliation"],
                        painPoints: ["Payment terms buried in PO notes", "3 to 4 days to reconcile", "No shipment event visibility"]
                    },
                    {
                        name: "Warehouse Team",
                        role: "Downstream User",
                        quote: "\"We find out about shipments on the same day they arrive.\"",
                        goals: ["Advance Shipment Notice (ASN)", "Schedule labour & dock capacity", "Receive accurate manifests"],
                        painPoints: ["0 days advance notice", "Details via WhatsApp", "Surprise arrivals"]
                    },
                    {
                        name: "Vendors & Forwarders",
                        role: "External Stakeholder",
                        quote: "\"I don\'t want to log in to another platform just to submit a document.\"",
                        goals: ["Submit docs easily", "Confirm actions quickly", "Lightweight touchpoints"],
                        painPoints: ["Required platform login", "No email-driven flow", "Unclear what\'s needed from them"]
                    }
                ]
            },
            {
                type: "goals-list",
                title: "Business Goals",
                goals: [
                    "Eliminate reactive operations. replace manual follow-ups with automated, milestone-triggered communication and alerts",
                    "Improve inbound planning accuracy. give the supply chain team real-time, trustworthy ETA and shipment status data",
                    "Scale to enterprise complexity. handle 200+ active shipments simultaneously without the system becoming unmanageable"
                ]
            },
            {
                type: "goals-list",
                title: "Design Principles",
                goals: [
                    "Status must be unambiguous. every system state has one agreed meaning across all roles. 'Shipped' meaning four different things was the root cause failure. no interpretation required at any touchpoint.",
                    "Milestones trigger actions, they don't just reflect state. a milestone completion automatically hands off to the next responsible party. passive tracking creates passive behaviour.",
                    "Progressive disclosure by role. an ops manager and a finance manager viewing the same shipment see what matters to their job. not everything. role-specific views are not a UX luxury here — they are a safety mechanism.",
                    "External stakeholders get the lowest-friction touchpoint possible. vendors who won't log in must be able to act via email alone. designing for the edge case of the reluctant user defined the entire notification architecture.",
                    "Design error states before happy paths. a shipment platform's credibility is tested entirely at exceptions. the customs hold state, the vendor non-response state, and the duplicate PO detection each changed the core data model before a single happy-path screen was finalised."
                ]
            },
            {
                type: "rich-text",
                title: "How Discovery Reframed the Brief",
                content: "The client asked for a shipment tracking tool. Three days of shadowing the ops team showed the real problem: 'status' had no agreed definition. 'Shipped' meant four different things to four different people — on a truck to port, customs-cleared at origin, on the vessel, or already delivered. The client expected prototype concepts at the end of week 1. Instead, I proposed running a status definition workshop with the full ops team before opening Figma. That was a difficult conversation — the deliverable wasn't what they anticipated, and workshops don't look like progress to a client expecting screens. I made the case that software built on ambiguous language would be an expensive version of the same problem. They agreed. The output was a 20-entry status dictionary that every milestone, filter, and alert in the system is built on. We weren't building a tracker. We were building a shared language first, and a tracker second. That distinction changed the architecture of the entire product."
            },
            // ── Define: POV & HMW ────────────────────────────────────────
            {
                type: "rich-text",
                title: "Phase 2 — Define",
                content: "The discovery phase surfaced something important: the operations team didn't have a software problem. They had a definition problem. 'Status' meant four different things to four different stakeholders, and any interface built on that ambiguity would recreate the same confusion in a more polished container. The Define phase was about making that precise — and the most important design output of week one was a 20-entry status dictionary, not a wireframe."
            },
            {
                type: "process-steps",
                title: "Point of View",
                highlight: "The brief was 'build a shipment tracking tool'. The POV reframe was: build a shared language for status first, and a tracker second — because a system built on ambiguous definitions is a faster way to be wrong, not a better way to be right.",
                content: "Two POV statements — one per foundational insight from discovery:",
                steps: [
                    "The ops team needs a single, unambiguous definition of every status in the shipment lifecycle before any interface can be trusted. 'Shipped' meaning four different things to four different people isn't a display problem. It's a data integrity problem. No UI layer can fix a semantic disagreement in the underlying model.",
                    "The status dictionary workshop reframe: the most valuable design output of the first week was a 20-entry status glossary agreed on by the full ops team — before a single wireframe was drawn. Every milestone, filter, alert, and role-specific view in the platform traces back to those 20 definitions. Without them, the interface would have been a polished version of the same confusion it was meant to replace."
                ]
            },
            {
                type: "goals-list",
                title: "How Might We",
                goals: [
                    "HMW make 'Shipped' mean exactly one thing to every stakeholder simultaneously — ops manager, finance, warehouse, and client — across all 20+ milestone steps?",
                    "HMW surface each role's relevant information without surfacing every other role's data as noise that buries what they actually need to act on?",
                    "HMW let vendors and forwarders take the actions required of them without forcing a platform login they will never willingly adopt?",
                    "HMW make milestone completion automatically trigger the next responsible party — so no shipment stalls because someone didn't notice a status change?"
                ]
            },
            {
                type: "process-steps",
                title: "Discovery: Mapping the Real Workflow",
                highlight: "Before any design work, I spent time embedded with the operations team. shadowing daily import reviews, attending finance reconciliation calls, and mapping every tool touched in a typical shipment cycle.",
                content: "Three core problems emerged from discovery:",
                steps: [
                    "Status was meaningless. 'Shipped' could mean on a truck to the port, customs-cleared at origin, or already on the vessel. No consistent definition existed across teams.",
                    "Documents were the single biggest operational blocker. tracked in a colour-coded shared Google Sheet with no reminders, no audit trail, no accountability.",
                    "Finance was permanently reactive. payment terms were buried in PO notes with no system flagging upcoming payment obligations tied to shipment events."
                ]
            },
            {
                type: "challenges",
                title: "Designing the PO Foundation",
                challenges: [
                    {
                        challenge: "Structured SKU input with inline calculation",
                        solution: "Enforces SKU-level data entry with real-time cost calculation, eliminating PO-vs-SKU cost discrepancies that plagued reconciliation."
                    },
                    {
                        challenge: "Dual CRD fields. original and updated Cargo Ready Date",
                        solution: "Tracked separately to enable vendor slippage visibility over time. A 2-week ETA error on a high-velocity SKU can trigger a stockout worth tens of thousands in lost revenue."
                    },
                    {
                        challenge: "Linked shipment history on every PO",
                        solution: "Linked shipments surface at the bottom of every PO, showing partial shipment status without additional navigation. no more cross-referencing separate tools."
                    },
                    {
                        challenge: "PO status as an operations signal",
                        solution: "Statuses like 'Ready to Ship' and 'Partially Shipped' are designed to trigger action, not just reflect state. The PO list doubles as a portfolio dashboard with 5 KPI cards."
                    }
                ]
            },
            {
                type: "challenges",
                title: "The Core Innovation: Milestone-Based Shipment Tracking",
                challenges: [
                    {
                        challenge: "Phase 1. Vendor to Port",
                        solution: "Cargo ready confirmation, booking confirmation, ISF filing (US ocean only), bill of lading issued. Each milestone has status, timestamp, assigned team, required documents, and triggers email automation."
                    },
                    {
                        challenge: "Phase 2. Origin Operations",
                        solution: "Origin port arrival, customs clearance at origin, container loaded, vessel departed. Compliance steps are conditional on trade route. ISF Filing only applies to US ocean imports."
                    },
                    {
                        challenge: "Phase 3. In Transit",
                        solution: "ETA updates and ETA change alerts surfaced to supply chain planners in real time. A milestone change here directly flags impact on replenishment decisions."
                    },
                    {
                        challenge: "Phase 4. Destination Operations",
                        solution: "Arrival at destination port, customs clearance, duty payment triggered, container released. Payment terms are milestone-triggered. finance is automatically notified."
                    },
                    {
                        challenge: "Phase 5. Delivery & Closure",
                        solution: "Port to warehouse dispatch, ASN auto-sent to warehouse team, goods received, shipment closed. Warehouse now gets 5 to 7 days advance notice instead of 0."
                    }
                ]
            },
            // ── Ideate: Concept Directions ───────────────────────────────
            {
                type: "rich-text",
                title: "Phase 3 — Ideate",
                content: "With a shared status language defined, the structural challenge was: how do you build a system that handles 200+ active shipments simultaneously across 5 stakeholder types with completely different information needs? I explored three structural models before committing to one."
            },
            {
                type: "challenges",
                title: "Concept Directions Explored",
                challenges: [
                    {
                        challenge: "Direction 1 — Notification-first interface",
                        solution: "Build the system around proactive alerts as the primary surface. Events push to the right person; everything else is accessible but secondary. Rejected: notifications can flag events but cannot organise work. An ops manager with 200 active shipments needs a workspace to prioritise and act — not a feed that tells them what changed. The notification architecture became essential, but as a layer on top of workspaces, not a replacement for them."
                    },
                    {
                        challenge: "Direction 2 — Single unified shipment timeline (same view for all roles)",
                        solution: "One chronological view of all 20+ milestones per shipment, visible to every stakeholder. Rejected: what's signal for ops (origin milestone) is noise for finance (payment trigger). What's urgent for the warehouse (delivery window) is irrelevant to a vendor waiting for a document request. Forcing all five roles into one view recreates the information overload the platform was meant to eliminate. Different information needs are not a display preference — they are a safety requirement."
                    },
                    {
                        challenge: "Direction 3 — Role-specific workspaces sharing one milestone data model (chosen)",
                        solution: "Five distinct workspace views — Ops Manager, Supply Chain Planner, Finance, Warehouse, and Vendor — each filtered to the milestones that matter for that role's daily decisions. All five draw from the same 20-milestone data model. Every handoff is automatic: the same event that closes a milestone triggers the next role's action without manual notification. Chosen because it solves visibility without creating overload, and it maps directly to how each stakeholder already thinks about their own job."
                    }
                ]
            },
            {
                type: "challenges",
                title: "Key Design Decisions & Trade-offs",
                challenges: [
                    {
                        challenge: "Tabs vs single scroll for shipment detail",
                        solution: "Chose tabs. the content density across Data & Fields, Documents, and Emails is too high for a single scroll. Tabs allow each role to navigate directly to what they need without hunting."
                    },
                    {
                        challenge: "Persistent payment sidebar vs finance tab",
                        solution: "Chose persistent sidebar. payment status is checked by multiple roles multiple times daily. Hiding it behind a tab created unnecessary friction and context loss."
                    },
                    {
                        challenge: "Phase labels vs timestamps as primary status",
                        solution: "Chose phase labels. they communicate where the shipment is in the journey, not just when something happened. Timestamps are still present but secondary."
                    },
                    {
                        challenge: "Severity-tiered alerts vs generic notification feed",
                        solution: "Chose severity-tiered actionable alerts (HIGH / MEDIUM / LOW). each linked to a specific shipment requiring action. A generic feed doesn't help an ops manager prioritise 200+ active shipments."
                    },
                    {
                        challenge: "Scope decision: full vendor portal → email-triggered touchpoints",
                        solution: "The original scope included a full external vendor portal. Descoped to Phase 2 after discovery showed vendors would not willingly log into another platform. Phase 1 solution: email-triggered action links — vendors receive a formatted request email and respond with a single click, no login required. The descoping decision was made at week 3 and freed engineering capacity that went into the milestone trigger matrix. Phase 2 portal remains planned once the email-based trust is established."
                    }
                ]
            },
            {
                type: "asset-placeholder",
                title: "Edge & Conflict States",
                assetType: "screen-design",
                description: "Four edge states that drove significant model changes: (1) Shipment with conflicting PO quantities — partial receipt state with variance flag. (2) Vendor non-response after 72 hours — escalation trigger with ops manager alert. (3) Customs hold — milestone 'paused' state (forced the model to support paused as a first-class status, not just in-progress or complete). (4) Duplicate PO detection alert with merge/reject decision. These edge states changed the core milestone model before any happy-path screen was built.",
                note: "The customs hold state was the most impactful — it revealed that the original milestone model only supported linear progression. Designing for the exception exposed a fundamental data architecture gap."
            },
            {
                type: "rich-text",
                title: "Handoff & Engineering Collaboration",
                content: "The most annotated section of the Figma file was the milestone event system — specifically which milestones trigger automated emails, to whom, and with what data payload. I built a milestone trigger matrix (20 milestones × 5 roles × email/no-email) as a dedicated Figma frame for the engineering team. The second-highest annotation density was on conditional field logic for PO and shipment forms — every field had a visibility condition documented inline with the exact data dependency. Engineers flagged two conditional rules as technically ambiguous during review. Both were resolved in a 45-minute working session before build began, preventing what would have been two separate mid-sprint clarification loops."
            },
            {
                type: "asset-placeholder",
                title: "Handoff Documentation",
                assetType: "custom-diagram",
                description: "Milestone trigger matrix: 20 milestones × 5 roles × automated email trigger (yes/no/conditional). Conditional field logic map showing visibility rules for PO and shipment form fields. Annotation density screenshot from Figma showing which screens required the most engineering specification.",
                note: "This documentation set the standard for all subsequent module handoffs on the AccuRest platform."
            },
            {
                type: "impact",
                title: "Impact",
                items: [
                    "⏱️ Time to create a shipment: ~45 min → ~8 min (timed task testing, n=6 ops managers)",
                    "📊 Milestone tracking accuracy: ~60% → ~97% (spreadsheet vs system-tracked, measured over 4-week pilot)",
                    "📧 Manual follow-up emails per shipment: 12 to 18 → 3 to 5 (auto-triggered, based on pilot email log analysis)",
                    "💰 Finance reconciliation time: 3 to 4 days → same day (finance team self-reported, post-pilot survey)",
                    "🏭 Warehouse ASN lead time: often 0 days → 5 to 7 days consistently (tracked across 40 shipments in pilot)",
                    "🕐 Ops manager daily admin time: ~2.5 hrs → ~45 min (time diary study, 3 ops managers over 2 weeks)"
                ]
            },
            {
                type: "learnings",
                title: "Learnings",
                learnings: [
                    "Design the data model before the interface. The quality of PO data directly determines the quality of everything downstream — shipment creation, finance reconciliation, warehouse ASN. I spent more time on data architecture than on any single screen, and that investment paid off in every module that depended on it.",
                    "Operational complexity demands progressive disclosure. Showing everything to everyone is not neutrality — it's paralysis. Role-specific views and milestone-conditional fields weren't a UX preference. They were a safety mechanism. An ops manager viewing finance reconciliation data and a finance manager viewing dock scheduling data are both seeing noise.",
                    "Designing for reluctant external users revealed the real system architecture. Vendors and forwarders who refused to log in forced the email-triggered touchpoint design. That feature — which I initially considered a secondary edge case — became one of the most referenced features in post-pilot feedback. The edge case defined the core.",
                    "'Status' is meaningless without a shared definition. Defining every status across every phase before any design work was the highest-leverage hour of the entire project. The 20-entry status dictionary became the foundation of every milestone, filter, and alert. Without it, the interface would have been a polished version of the same confusion.",
                    "Persistent financial context reduces daily cognitive load. Keeping payment status always visible meant the finance team never had to reconstruct context when checking a shipment. The persistent sidebar was a layout decision with a measurable outcome: reconciliation time went from 3–4 days to same day."
                ],
                future: [
                    "Vendor portal. a lightweight external interface for document submission and milestone confirmation",
                    "AI-powered ETA prediction based on historical shipment data and trade route patterns",
                    "Mobile companion app for ops managers to triage alerts on the go",
                    "AccuEngine integration. connecting shipment data directly to reorder triggers in the ordering module"
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
        intro: "CricMetrix is an elite, multi-tenant AI-powered Cricket Academy Management platform built at RedBeryl Tech. It bridges the gap between coaching operations, player development, parent transparency, and academy business management. replacing spreadsheets, paper schedules, and manual fee envelopes with an immersive, gamified, AI-assisted training ecosystem.",
        role: "Lead Product Designer",
        focus: "End-to-end UX across 4 role-based dashboards. Coach, Player, Parent, Admin",
        timeline: "2024",
        type: "Enterprise SaaS · Sports Tech",
        industry: "Sports Technology · EdTech · B2B SaaS",
        duration: "2 months",
        platforms: "Web (Mobile. Phase 2)",
        accentColor: "#00a7e1",
        themeGradient: "from-[#EEF9FF] to-[#FFFFFF]",
        quote: "Designing for elite sport means designing for speed, precision, and zero friction. because coaches don't have 15 minutes to spare on a roll call.",
        links: [
            { text: "", url: "" },
            { text: "", url: "" },
        ],
        blocks: [
            {
                type: "problem-statement",
                title: "Context & Problem Definition",
                highlight: "Cricket academy coaches need a way to run attendance, scoring, and player development tracking without interrupting live training sessions — because academy management tools either ignore coaching workflows entirely or require manual data entry that pulls coaches out of the session, resulting in 17 minutes of dead time per session and player development data that exists nowhere because it was never worth the friction to record it.",
                content: "The client approached RedBeryl Tech with a detailed operational audit of a premium cricket academy. The brief surfaced four structural breakdowns that no existing sports management tool had solved cohesively:",
                list: [
                    "Coach Admin Overload: 15 to 20 minutes per session spent on manual roll call, handwritten score logging, and paper-based feedback. time that should be spent coaching.",
                    "Parent Black Box: Parents paying premium fees received zero structured visibility into their child's technique progression, attendance trends, physical metrics, or goal roadmaps.",
                    "Disjointed Financials: Fee payments lacked flexible incentive structures. No wallet-based cashbacks, referral credits, or coupon stacking. leading to inconsistent collections and zero loyalty mechanics.",
                    "Broken Goal Cascading: Goal-setting was verbal, inconsistent, and disconnected. Players lost motivation because they could never visualise their own development curve."
                ]
            },
            {
                type: "image",
                title: "Before vs. After — Admin Workflow",
                src: "",
            },
            {
                type: "role-list",
                title: "My Role & Team",
                highlight: "Led design end-to-end across all 4 dashboards with junior designer support. Owned strategy, IA, flows, and high-fidelity UI from discovery through staging handoff.",
                content: "Team & Responsibilities:",
                roles: [
                    "Lead Product Designer. owned UX strategy, information architecture, all 4 dashboards, design system, and developer handoff",
                    "Junior Designer. supported component production and asset preparation under my direction",
                    "Product Manager. defined feature scope and business requirements",
                    "Engineering Lead + 3 Engineers. frontend and AI/ML integration (ArcFace attendance, voice scorer)",
                    "Client (Academy Operations Lead). provided domain expertise, operational audit, and stakeholder feedback across 3 review cycles"
                ]
            },
            {
                type: "process-steps",
                title: "Discovery & Research",
                highlight: "The client provided an operational brief built from internal academy audit data. I supplemented this with 8 structured stakeholder interviews across all 4 user types. conducted remotely over 2 weeks before any design work began.",
                content: "Research methods used:",
                steps: [
                    "Stakeholder Interviews (8 sessions): Spoke with 2 coaches, 2 parents, 2 players, and 2 academy admins. Sessions were 45 to 60 minutes each, focused on daily workflow walkthroughs. not opinions about features.",
                    "Contextual Observation: Joined a live training session (virtually via shared screen with a coach) to observe real-time score logging and attendance marking. Watched a coach spend 18 minutes on roll call for 22 players. this became the anchor insight for the AI attendance system.",
                    "Competitive Audit: Evaluated 4 competing platforms (PlayHQ, SportzInteractive, TeamSnap, and a regional Indian academy tool). None solved the cross-role transparency gap. All treated admin and coaching as the same user.",
                    "Client Brief Analysis: The client's operational audit gave us quantified pain data. average 17-minute roll call, 34% of parents reporting they 'had no idea' how their child was progressing, and 28% of monthly fee payments delayed by over 5 days."
                ]
            },
            {
                type: "personas",
                title: "User Personas",
                personas: [
                    {
                        name: "Vikram Nair",
                        role: "Head Coach, Age 38",
                        quote: "\"I spend more time on paperwork than I do actually coaching. That has to change.\"",
                        goals: ["Fast hands-free attendance", "Live score logging without missing balls", "Structured player goal tracking"],
                        painPoints: ["17-min manual roll call daily", "Missed deliveries while logging manually", "No system to track player goal progress over time"]
                    },
                    {
                        name: "Aarav Sharma",
                        role: "Academy Player, Age 14",
                        quote: "\"I don't know if I'm actually getting better. Nobody shows me.\"",
                        goals: ["See progress visually", "Get rewarded for milestones", "Understand what to work on next"],
                        painPoints: ["No feedback between sessions", "Goals set verbally. forgotten by next week", "No sense of achievement or progression"]
                    },
                    {
                        name: "Rajesh Sharma",
                        role: "Parent, Age 44",
                        quote: "\"I'm paying premium fees but I have no idea what's actually happening at training.\"",
                        goals: ["See attendance and technique reports", "Track physical health over time", "Pay fees easily with transparency"],
                        painPoints: ["Zero visibility into child's development", "Fee payments via cash with no confirmation", "No record of BMI, fitness, or coach notes"]
                    },
                    {
                        name: "Neha Kulkarni",
                        role: "Academy Admin, Age 32",
                        quote: "\"I manage 3 spreadsheets, 2 WhatsApp groups, and a cash register. I need one system.\"",
                        goals: ["Manage enrollments and fees centrally", "Configure global cashback and coupon rules", "View system-wide financial and attendance reports"],
                        painPoints: ["Chaotic multi-tool admin stack", "No audit trail for payments", "Coach highlight management done manually via website edits"]
                    }
                ]
            },
            {
                type: "asset-placeholder",
                title: "Information Architecture Map",
                assetType: "flow-diagram",
                description: "Drop your IA / sitemap here. showing the 4-dashboard navigation structure: Landing Page → Auth Gateway → Role Selection → Coach / Player / Parent / Admin dashboards.",
                note: "Export from Figma at 2× PNG. Recommended: landscape orientation showing the full tree."
            },
            {
                type: "process-steps",
                title: "Key Research Insights",
                highlight: "Three pivotal insights shaped the entire design direction. each directly traceable to a feature decision.",
                content: "What the research crystallised:",
                steps: [
                    "Speed is the Coach's currency: Every minute saved on admin is a minute added back to coaching. This made the AI attendance system non-negotiable. not a nice-to-have. The group scan concept (one photo, entire squad marked) emerged directly from watching a coach call 22 names one by one.",
                    "Parents need evidence, not updates: Parents didn't want more notifications. they wanted structured, visual proof of development. The longitudinal health charts and technique video hub came directly from parent interviews where 'show me the data' was the recurring phrase.",
                    "Gamification is a retention mechanism, not decoration: Players aged 12 to 18 showed significantly higher engagement with milestone-based systems in competitive audit benchmarking. The loyalty wallet and progress ring system was designed as an engagement loop, not an afterthought."
                ]
            },
            // ── Define: POV & HMW ────────────────────────────────────────
            {
                type: "rich-text",
                title: "Phase 2 — Define",
                content: "Three research insights produced clear patterns — but patterns alone don't make a design brief. The Define phase was about collapsing those findings into precise frames: one per primary user, stating not just what they needed but why every existing approach had failed to give it to them."
            },
            {
                type: "process-steps",
                title: "Point of View",
                highlight: "The brief was 'build an academy management platform'. The POV reframe was: give coaches their time back, give parents proof, and give players visibility — because those are three completely different problems that happen to share one data model.",
                content: "Two POV statements — one per the most acute failure the research surfaced:",
                steps: [
                    "Vikram (Coach) needs the administrative overhead of running a session eliminated entirely — not reduced — because 17 minutes of manual roll call per session isn't an inefficiency, it's a direct theft of the only resource coaches cannot recover: time that should be spent coaching. Reducing that from 17 minutes to 12 is not a solution. Zero is the only acceptable target.",
                    "Rajesh (Parent) needs structured, visual evidence of his child's development — not more communications about it — because 34% of parents paying premium fees reported having 'no idea' how their child was progressing. The gap isn't communication frequency. It's the difference between being told that progress is happening and being shown what progress looks like."
                ]
            },
            {
                type: "goals-list",
                title: "How Might We",
                goals: [
                    "HMW make attendance marking so fast and invisible that a coach never has to interrupt a live session to take it?",
                    "HMW give parents structured, visual proof of their child's development that doesn't require a coach call to interpret — or trust?",
                    "HMW make a 14-year-old player feel genuine development momentum — not just activity — every time they open the platform?",
                    "HMW design AI features that fail so gracefully that a technical breakdown never destroys the trust built by every successful flow before it?"
                ]
            },
            // ── Design Principles ─────────────────────────────────────────
            {
                type: "goals-list",
                title: "Design Principles",
                goals: [
                    "Speed over completeness for coaches. every interaction should be completable in under 10 seconds during a live session",
                    "Evidence over assertion for parents. every claim about progress must be backed by logged data, not just coach opinion",
                    "Progressive disclosure for players. show the next step clearly, not the entire roadmap at once",
                    "Audit-readiness for admins. every financial and attendance action must leave a traceable, exportable record",
                    "Graceful degradation for AI features. every AI-powered flow (face scanner, voice scorer) must have a reliable manual fallback"
                ]
            },
            // ── Design Process & Pivot ────────────────────────────────────
            {
                type: "process-steps",
                title: "Design Process & Notable Pivot",
                highlight: "Two months, 4 dashboards, one major direction change mid-way through.",
                content: "Process timeline:",
                steps: [
                    "Week 1 to 2. Discovery: Stakeholder interviews, competitive audit, client brief analysis, persona synthesis, and IA mapping across all 4 user roles.",
                    "Week 3 to 4. Information Architecture & Flows: Mapped the full IA across Landing Page, Auth Gateway, and all 4 dashboards. Ran a card sort with 3 coaches and 2 parents to validate navigation labels. 'Match Scorer' beat 'Live Scoring' 4:1 in preference.",
                    "Week 5 to 6. Wireframes & Key Pivot: Mid-wireframe, the client reviewed the Player dashboard and asked why the Loyalty Wallet was buried in Settings. User testing with 2 players confirmed they never found it. Moved the wallet to a persistent top-nav element. engagement with rewards increased significantly in the next test round.",
                    "Week 7 to 8. High-Fidelity UI & Design System: Built the full UI across Deep Indigo-Blue (#1e1b4b) + Electric Teal (#00a7e1) palette. Established the glassmorphism component library, animation tokens (fadeIn/slideInRight 0.5 to 1.5s), and handed off complete Figma specs to engineering."
                ]
            },
            // ── Ideate: Concept Directions ───────────────────────────────
            {
                type: "rich-text",
                title: "Phase 3 — Ideate",
                content: "The POV surfaced a structural challenge: four user types with fundamentally different session-based, reporting-based, and financial needs — all sharing one academy's data. I explored three platform architectures before committing to separate role dashboards."
            },
            {
                type: "challenges",
                title: "Concept Directions Explored",
                challenges: [
                    {
                        challenge: "Direction 1 — Single unified dashboard, role-filtered by permissions",
                        solution: "One surface that adapts based on who is logged in — coaches see the coaching view, admins see the admin view. Rejected: coach workflows demand real-time speed (under 10 seconds per action); admin workflows require analytical depth (reports, reconciliation). Designing one surface for both means optimising for the slowest use case and compromising the fastest. That trade-off is unacceptable for a coach mid-session who cannot wait for an interface to load a finance tab."
                    },
                    {
                        challenge: "Direction 2 — Session-first design, everything built around the live training session",
                        solution: "Make the live session the primary surface and build everything else as supporting context. Rejected: the platform needs to serve four groups on four completely different schedules. Coaches use it during sessions. Parents use it between sessions. Admins use it weekly. Players use it daily for motivation. A session-first model solves 25% of the problem and gives three stakeholder groups an interface that was never designed for how they actually work."
                    },
                    {
                        challenge: "Direction 3 — 4 role-specific dashboards sharing one data model (chosen)",
                        solution: "Coach, Player, Parent, and Admin each get a purpose-built workspace shaped to their daily mental model and time context. All four draw from the same underlying attendance, scoring, goal, and financial data. Every action in one role's workspace automatically propagates to the roles that depend on it. Chosen because role-specific design isn't fragmentation — it's precision. Each person sees only what they need to act, at the speed their job requires."
                    }
                ]
            },
            {
                type: "challenges",
                title: "Feature Deep Dives. The Design Decisions That Mattered",
                challenges: [
                    {
                        challenge: "AI Face Attendance. designing for 100% reliability in an imperfect environment",
                        solution: "The AI scanner (ArcFace buffalo_l) works well in controlled lighting. but cricket sessions happen outdoors. A single-mode scanner would fail too often. I designed a three-mode fallback system: Single auto-scan with countdown and confidence badge ('Matched: Aarav 94%'), Group panoramic scan with real-time green/red bounding boxes and one-tap 'Mark All Present', and a manual enrollment fallback for unregistered players. The three-mode architecture was a direct response to the constraint. reliability wasn't optional."
                    },
                    {
                        challenge: "Voice Match Scorer. hands-free logging without sacrificing accuracy",
                        solution: "The original brief asked for a button-based scorer. After observing a live scoring session, I pushed back: coaches were missing deliveries while tapping. I proposed a speech-to-intent engine with an animated listening indicator and a real-time transcription bubble so coaches could verify what was logged. The colour-coded over history scroller (grey for standard, mint-green for boundaries, red for wickets) was added after a usability test where a coach couldn't quickly identify which ball a wicket had fallen on. contrast and colour became functional, not decorative."
                    },
                    {
                        challenge: "Twin Tables Goal System. bridging strategy and individual player homework",
                        solution: "Early wireframes had a single goal table. Testing revealed coaches wanted to set academy-wide strategic goals separately from individual player drills. the cognitive model was two distinct layers, not one. The Twin Tables layout (Strategic Academy Goals ↔ Tactical Individual Assignments) emerged from this. The auto-cascade logic (completing a goal locks all sub-tasks) came from a specific request: 'once something is done, I don't want anyone accidentally reopening it.' Locking completed states enforced data integrity without adding friction."
                    },
                    {
                        challenge: "Parent Fee Checkout. reducing 28% late payment rate through UX, not reminders",
                        solution: "The brief initially asked for 'better notifications.' Research showed the real barrier was friction at checkout. parents had to transfer cash or use a separate payment app with no record. I redesigned the checkout as a glassmorphism order summary panel with three value levers: referral coupon codes, dual wallet application (Bonus + Cashback simultaneously), and a multi-currency converter (USD/INR/GBP). Applying wallet balance reduced the net amount due. making payment feel rewarding, not transactional."
                    }
                ]
            },
            {
                type: "image",
                title: "AI Attendance Scanner — Group Scan Mode",
                src: "",
            },
            {
                type: "image",
                title: "Voice Match Scorer — Live Scoring",
                src: "",
            },
            {
                type: "image",
                title: "Twin Tables Goal System",
                src: "",
            },
            {
                type: "image",
                title: "Fee Checkout — Parent Dashboard",
                src: "",
            },
            {
                type: "image",
                title: "Wireframes — Key Screens",
                src: "",
            },
            {
                type: "design-system",
                title: "Design System & Visual Language",
                highlight: "A premium dark-first design system built for data density, real-time updates, and high-stakes athletic environments.",
                content: "Core tokens and components:",
                items: [
                    "Brand Dark. Deep Indigo-Blue (#1e1b4b) for primary layouts, creating a premium immersive feel distinct from generic sports apps",
                    "Accent Blue. Electric Teal (#00a7e1) for precision metrics, CTAs, and active states. representing digital accuracy",
                    "Alert Red. Crimson (#e53e3e) for wickets, payment alerts, and health flags. high contrast, unmissable",
                    "Glassmorphism system. backdrop-filter: blur(12px) + rgba(255,255,255,0.15) borders on headers, nav, modals, and checkout panels",
                    "Animation tokens. fadeIn and slideInRight at 0.5 to 1.5s ease-in-out for modals, highlights, and dashboard transitions",
                    "Circular progress components. reusable progress rings used across Player goals, health metrics, and attendance summaries",
                    "Color-coded indicator system. standardised across ball-by-ball scoring, goal status, and attendance bounding boxes"
                ]
            },
            {
                type: "image",
                title: "Role Dashboards Overview",
                src: "",
            },
            {
                type: "impact",
                title: "UX Impact & Outcomes",
                items: [
                    "92% reduction in attendance logging time. group photo scan marks a 20-player squad in under 10 seconds vs. 17-minute manual roll call (measured across 3 staged test sessions with live coaches)",
                    "4.8x increase in parent-coach digital engagement. parents logged in an average of 4.8x more frequently in staging beta vs. the previous email-only communication model (tracked over 4-week beta period)",
                    "35% increase in on-time fee collections. wallet-based checkout with cashback incentives and reduced friction drove early payment behaviour (compared to prior cash collection baseline from client operational data)",
                    "40% increase in drills completed between sessions. 100% goal transparency via progress rings and roadmap dialogs correlated with significantly higher between-session training completion (self-reported by coaches across beta cohort)"
                ]
            },
            {
                type: "rich-text",
                title: "Handoff & Engineering Collaboration",
                content: "The most annotated screens were the AI attendance fallback states — specifically the three-mode switching logic (auto-scan → group scan → manual) and the confidence threshold display contract (show confidence badge when score < 95%). I documented the voice scorer intent mapping table (30 cricket-specific phrases mapped to system events) separately since natural language intent mapping is the highest-risk AI assumption. The glassmorphism component specs included explicit blur radius, opacity, and border values because backdrop-filter rendering varies significantly across browsers and Android WebViews. One engineering friction: the group scan bounding box animation conflicted with the WebRTC stream on lower-spec Android devices. Resolved by adding a device capability check that automatically falls back to single-scan mode — the fallback was already designed as a first-class mode, so the fix cost zero additional design work."
            },
            {
                type: "asset-placeholder",
                title: "Handoff Documentation",
                assetType: "custom-diagram",
                description: "AI attendance mode-switching decision tree (auto → group → manual fallback conditions). Voice scorer intent mapping table (30 phrases → 8 system event types). Glassmorphism component spec sheet with blur, opacity, and border values for each surface type. Animation token documentation with easing curves.",
                note: "Export from Figma annotation frames. The intent mapping table was the single most-referenced document during the AI feature engineering sprint."
            },
            {
                type: "learnings",
                title: "Learnings & Retrospective",
                learnings: [
                    "AI features need UX safety nets before they need UI polish. The face scanner was technically impressive, but the real design work was the three-mode fallback. Without it, a single outdoor lighting failure would have destroyed coach trust in the entire system on day one. Reliability architecture is a UX problem — not an engineering afterthought.",
                    "Role-based design is about mental models, not permissions. Splitting Coach and Admin was technically straightforward. The harder problem was ensuring each dashboard reflected how that person actually thinks about their day — what they scan first, what anxiety they carry into the session. The card sort was the most valuable 2 hours of the project. I'd run it in week 1, not week 4.",
                    "Gamification earns engagement only when it's tethered to real progress. The loyalty wallet felt meaningful because it was directly connected to actual milestones (50 runs scored, drill completed). Detached reward mechanics — points that appear regardless of performance — fail within days. Progress-linked mechanics hold.",
                    "Two months for four dashboards requires a shared prioritisation framework. I used a MoSCoW matrix with the PM and client at week 3 to cut 8 features to Phase 2. Making the prioritisation visible and explicit — rather than quietly descoping — prevented scope creep, protected what shipped, and gave the client confidence in the decision.",
                    "Push back on the brief when observation contradicts it. The client asked for a button-based scorer. Watching a coach miss deliveries while tapping buttons showed that was wrong. Proposing the voice scorer added engineering complexity and required a difficult conversation at week 3. That conversation was the right call. Senior design means advocating for users even when it costs political capital."
                ],
                future: [
                    "Mobile app. Phase 2 already scoped, prioritising Coach and Player dashboards first",
                    "AI performance analytics. computer vision analysis of batting and bowling technique from training videos",
                    "Automated match report generation. AI-generated coach reports from scorer data",
                    "Parent community features. structured parent-to-parent engagement within the academy ecosystem",
                    "Multi-academy network. franchise mode for academy chains managing multiple locations from one admin"
                ]
            }
        ]
    }
};