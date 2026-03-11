import React from "react";
import {
    Mail, BarChart2, Paperclip, PenLine, Phone,
    Monitor, Settings, CheckSquare, FolderOpen, Search, Bell,
    Clock, AlertTriangle, LayoutDashboard, Link2, RefreshCw, Pin, CheckCircle,
    Megaphone, Lightbulb, ArrowRight, FileText, ShieldAlert,
    User, Users, Briefcase, Workflow, Database, CreditCard,
    Filter, TrendingUp, Layers
} from "lucide-react";

// ─── Service Ecosystem ─────────────────────────────────────────────────────
export const VStateServiceEcosystem: React.FC<{ accentColor?: string }> = ({ accentColor = "#2563eb" }) => {
    const roles = [
        {
            number: "01",
            title: "Super Admin",
            subtitle: "Compliance Firm",
            desc: "Manages all clients, teams, and compliance operations. Tracks deadlines and monitors business health from a central dashboard.",
            connects: ["Compliance Executive", "Client Admin"],
            Icon: Briefcase,
        },
        {
            number: "02",
            title: "Compliance Executive",
            subtitle: "Internal Team",
            desc: "Handles filings, collects documents, and completes assigned tasks within the platform guided workflows.",
            connects: ["Super Admin", "Client Admin"],
            Icon: Workflow,
        },
        {
            number: "03",
            title: "Client Admin",
            subtitle: "Business Client",
            desc: "Monitors the progress of their filings, uploads required documents, and receives status notifications.",
            connects: ["Compliance Executive"],
            Icon: User,
        },
    ];

    const systems = [
        { label: "CRM Systems", Icon: Database },
        { label: "Document Storage", Icon: FolderOpen },
        { label: "Accounting Tools", Icon: CreditCard },
        { label: "Regulatory Database", Icon: Layers },
    ];

    return (
        <div className="w-full space-y-10">
            <div className="grid md:grid-cols-3 gap-6">
                {roles.map((role, i) => (
                    <div
                        key={i}
                        className="border border-border rounded-2xl p-6 bg-card/40 hover:bg-card transition-all space-y-4"
                    >
                        <div className="flex items-start justify-between gap-2">
                            <span
                                className="text-xs font-black tracking-[0.2em] uppercase"
                                style={{ color: accentColor }}
                            >
                                {role.number}
                            </span>
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                {role.subtitle}
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${accentColor}12` }}>
                                <role.Icon size={18} style={{ color: accentColor }} />
                            </div>
                            <h4 className="text-base font-bold text-foreground">{role.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{role.desc}</p>
                        <div className="pt-3 border-t border-border">
                            <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold block mb-2">Interacts with</span>
                            <div className="flex flex-wrap gap-1.5">
                                {role.connects.map((c, j) => (
                                    <span
                                        key={j}
                                        className="text-xs font-semibold px-2.5 py-1 rounded-full border"
                                        style={{ borderColor: `${accentColor}40`, color: accentColor, background: `${accentColor}08` }}
                                    >
                                        {c}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase block mb-3">Connected External Systems</span>
                <div className="flex flex-wrap gap-3">
                    {systems.map((s, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-border text-muted-foreground bg-card/50"
                        >
                            <s.Icon size={14} />
                            {s.label}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

// ─── Before Workflow Journey (Fragmented) ─────────────────────────────────
export const VStateBeforeWorkflow: React.FC<{ accentColor?: string }> = ({ accentColor = "#2563eb" }) => {
    const steps = [
        { Icon: Mail, label: "Client sends request", sub: "via email", friction: false },
        { Icon: BarChart2, label: "Team logs manually", sub: "in spreadsheets", friction: true },
        { Icon: Paperclip, label: "Documents exchanged", sub: "via email attachments", friction: true },
        { Icon: PenLine, label: "Filing prepared", sub: "manually", friction: true },
        { Icon: Phone, label: "Status communicated", sub: "manually", friction: false },
    ];

    return (
        <div className="w-full py-2">
            <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase block mb-6">Before vState — Fragmented Workflow</span>

            {/* Responsive grid — no horizontal scroll */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {steps.map((step, i) => (
                    <div key={i} className="relative flex flex-col items-center gap-3 text-center">
                        {/* Arrow connector — desktop only, except last */}
                        {i < steps.length - 1 && (
                            <div className="hidden md:flex absolute top-6 left-[calc(50%+2.5rem)] items-center">
                                <ArrowRight size={16} className="text-border" />
                            </div>
                        )}
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border ${step.friction
                                ? "border-amber-300/70 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-700/50"
                                : "border-border bg-card"
                            }`}>
                            <step.Icon size={22} className={step.friction ? "text-amber-500" : "text-muted-foreground"} />
                        </div>
                        <span className="text-sm font-semibold text-foreground leading-tight">{step.label}</span>
                        <span className="text-xs text-muted-foreground leading-snug">{step.sub}</span>
                        {step.friction && (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 bg-amber-100 dark:bg-amber-950/40 px-2 py-0.5 rounded-full">
                                <AlertTriangle size={11} />
                                Friction
                            </span>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <span className="inline-block w-3 h-3 rounded-full bg-amber-400/60 border border-amber-400 flex-shrink-0" />
                <span>Steps marked as friction points indicate manual handoffs and error-prone processes</span>
            </div>
        </div>
    );
};

// ─── After Workflow Journey (Streamlined with vState) ─────────────────────
export const VStateAfterWorkflow: React.FC<{ accentColor?: string }> = ({ accentColor = "#2563eb" }) => {
    const steps = [
        { Icon: Monitor, label: "Client creates order", sub: "in the platform" },
        { Icon: Settings, label: "Tasks auto-generated", sub: "by the system" },
        { Icon: CheckSquare, label: "Guided workflows", sub: "executed by team" },
        { Icon: FolderOpen, label: "Documents uploaded", sub: "centralized system" },
        { Icon: Search, label: "Deadlines monitored", sub: "compliance engine" },
        { Icon: Bell, label: "Notifications sent", sub: "automated alerts" },
    ];

    return (
        <div className="w-full py-2">
            <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase block mb-6">After vState — Streamlined Workflow</span>

            {/* Responsive grid — no horizontal scroll */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {steps.map((step, i) => (
                    <div key={i} className="relative flex flex-col items-center gap-3 text-center">
                        {i < steps.length - 1 && (
                            <div className="hidden md:flex absolute top-6 left-[calc(50%+2.5rem)] items-center">
                                <ArrowRight size={16} style={{ color: `${accentColor}80` }} />
                            </div>
                        )}
                        <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border border-border"
                            style={{ background: `${accentColor}12` }}
                        >
                            <step.Icon size={22} style={{ color: accentColor }} />
                        </div>
                        <span className="text-sm font-semibold text-foreground leading-tight">{step.label}</span>
                        <span className="text-xs text-muted-foreground leading-snug">{step.sub}</span>
                        <span
                            className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                            style={{ backgroundColor: accentColor }}
                        >
                            <CheckCircle size={11} />
                            Automated
                        </span>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <span className="inline-block w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: accentColor }} />
                <span>Every step is tracked, automated and transparent — reducing manual dependency</span>
            </div>
        </div>
    );
};

// ─── Pain Point Analysis Cards ─────────────────────────────────────────────
export const VStatePainPoints: React.FC<{ accentColor?: string }> = ({ accentColor = "#2563eb" }) => {
    const items = [
        {
            problem: "Missed deadlines",
            rootCause: "Manual tracking and fragmented tools",
            opportunity: "Automated compliance monitoring",
            ProblemIcon: Clock,
        },
        {
            problem: "Client anxiety about filing status",
            rootCause: "Lack of transparency",
            opportunity: "Centralised compliance dashboard",
            ProblemIcon: ShieldAlert,
        },
        {
            problem: "Repeated document requests",
            rootCause: "Email-based communication",
            opportunity: "Structured document management",
            ProblemIcon: FileText,
        },
    ];

    return (
        <div className="w-full space-y-5">
            {items.map((item, i) => (
                <div
                    key={i}
                    className="grid md:grid-cols-3 gap-0 rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                    {/* Problem */}
                    <div className="flex flex-col gap-3 p-6 bg-rose-50/60 dark:bg-rose-950/10 border-r border-border">
                        <span className="text-xs font-bold tracking-[0.18em] text-rose-400 uppercase">Problem</span>
                        <div className="w-9 h-9 rounded-xl bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center">
                            <item.ProblemIcon size={18} className="text-rose-500" />
                        </div>
                        <p className="text-sm font-bold text-foreground leading-snug">{item.problem}</p>
                    </div>
                    {/* Root Cause */}
                    <div className="flex flex-col gap-3 p-6 bg-amber-50/60 dark:bg-amber-950/10 border-r border-border">
                        <span className="text-xs font-bold tracking-[0.18em] text-amber-500 uppercase">Root Cause</span>
                        <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950/30 flex items-center justify-center">
                            <Filter size={18} className="text-amber-500" />
                        </div>
                        <p className="text-sm font-medium text-muted-foreground leading-snug">{item.rootCause}</p>
                    </div>
                    {/* Opportunity */}
                    <div className="flex flex-col gap-3 p-6" style={{ background: `${accentColor}08` }}>
                        <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: accentColor }}>Opportunity</span>
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${accentColor}18` }}>
                            <TrendingUp size={18} style={{ color: accentColor }} />
                        </div>
                        <p className="text-sm font-bold text-foreground leading-snug">{item.opportunity}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

// ─── Notification System Diagram ───────────────────────────────────────────
export const VStateNotificationSystem: React.FC<{ accentColor?: string }> = ({ accentColor = "#2563eb" }) => {
    const triggers = [
        { Icon: Clock, name: "Deadline Triggers", desc: "Alert when filings approach regulatory deadlines", color: "#ef4444" },
        { Icon: FileText, name: "Document Triggers", desc: "Notify when additional documents are required", color: "#f59e0b" },
        { Icon: RefreshCw, name: "Status Triggers", desc: "Inform stakeholders when filing progress changes", color: "#2563eb" },
        { Icon: Pin, name: "Task Assignment", desc: "Notify executives when new tasks are created", color: "#8b5cf6" },
        { Icon: CheckCircle, name: "Completion Triggers", desc: "Notify clients and admins when filings complete", color: "#10b981" },
    ];

    const format = [
        { label: "What happened", Icon: Megaphone, desc: "Clear event description" },
        { label: "Why it happened", Icon: Lightbulb, desc: "System context" },
        { label: "What to do", Icon: ArrowRight, desc: "Actionable next step" },
    ];

    return (
        <div className="w-full space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {triggers.map((t, i) => (
                    <div
                        key={i}
                        className="flex gap-4 p-5 rounded-2xl border border-border bg-card/50 hover:bg-card transition-all shadow-sm"
                    >
                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ background: `${t.color}18` }}
                        >
                            <t.Icon size={18} style={{ color: t.color }} />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-foreground mb-1">{t.name}</div>
                            <div className="text-sm text-muted-foreground leading-relaxed">{t.desc}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="rounded-2xl border border-border bg-card/30 p-6">
                <p className="text-xs font-bold tracking-[0.18em] text-muted-foreground uppercase mb-5">Notification Content Format</p>
                <div className="flex flex-col md:flex-row gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
                    {format.map((f, i) => (
                        <div key={i} className="flex-1 flex items-start gap-3 p-4 md:p-5">
                            <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <f.Icon size={16} className="text-muted-foreground" />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-foreground">{f.label}</div>
                                <div className="text-sm text-muted-foreground mt-0.5">{f.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// ─── Service Blueprint Diagram ─────────────────────────────────────────────
export const VStateServiceBlueprint: React.FC<{ accentColor?: string }> = ({ accentColor = "#2563eb" }) => {
    const layers = [
        {
            tier: "Customer Actions",
            Icon: User,
            color: "#2563eb",
            items: ["Client logs in and views dashboard", "Creates compliance order", "Uploads required documents", "Tracks filing status in real-time"],
        },
        {
            tier: "Frontstage Interactions",
            Icon: Monitor,
            color: "#8b5cf6",
            items: ["Dashboard views and status cards", "Order creation interface", "Document upload portal", "Notification messages and alerts"],
        },
        {
            tier: "Backstage Processes",
            Icon: Settings,
            color: "#f59e0b",
            items: ["Task generation engine", "Compliance rule validation", "Notification automation", "Deadline monitoring service"],
        },
        {
            tier: "Supporting Systems",
            Icon: Link2,
            color: "#10b981",
            items: ["CRM integrations", "Document storage services", "Billing and accounting tools", "Regulatory database sync"],
        },
    ];

    return (
        <div className="w-full space-y-3">
            {layers.map((layer, i) => (
                <div
                    key={i}
                    className="rounded-2xl border border-border overflow-hidden"
                    style={{ background: `${layer.color}05` }}
                >
                    <div
                        className="flex items-center gap-3 px-5 py-3 border-b border-border"
                        style={{ background: `${layer.color}10` }}
                    >
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${layer.color}20` }}>
                            <layer.Icon size={15} style={{ color: layer.color }} />
                        </div>
                        <span className="text-xs font-bold tracking-[0.16em] uppercase" style={{ color: layer.color }}>
                            {layer.tier}
                        </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-border">
                        {layer.items.map((item, j) => (
                            <div key={j} className="px-4 py-4 text-sm text-muted-foreground font-medium leading-relaxed">
                                <span className="inline-block w-1.5 h-1.5 rounded-full mr-2 mb-0.5" style={{ backgroundColor: layer.color, opacity: 0.7 }} />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <p className="text-sm text-muted-foreground mt-3 px-1">
                The blueprint shows how the frontstage experience connects to backstage processes and third-party systems underneath.
            </p>
        </div>
    );
};

// ─── Research Insights ─────────────────────────────────────────────────────
export const VStateResearchInsights: React.FC<{ accentColor?: string }> = ({ accentColor = "#2563eb" }) => {
    const insights = [
        {
            Icon: AlertTriangle,
            insight: "Compliance professionals experience constant stress due to the risk of missed regulatory deadlines.",
            principle: "Design for calm — surface only what matters now.",
            color: "#ef4444",
        },
        {
            Icon: Search,
            insight: "Clients feel anxious because they cannot easily see compliance progress.",
            principle: "Visibility is the primary trust-building mechanism.",
            color: "#f59e0b",
        },
        {
            Icon: Settings,
            insight: "Teams prefer automation over manual tracking because the operational load is too high.",
            principle: "Automate the routine so humans can focus on exceptions.",
            color: "#8b5cf6",
        },
        {
            Icon: LayoutDashboard,
            insight: "Users expect compliance platforms to provide audit trails and predictable system behaviour.",
            principle: "Accountability through transparency and traceability.",
            color: "#10b981",
        },
    ];

    return (
        <div className="grid md:grid-cols-2 gap-5">
            {insights.map((item, i) => (
                <div
                    key={i}
                    className="rounded-2xl border border-border bg-card/50 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}16` }}>
                            <item.Icon size={18} style={{ color: item.color }} />
                        </div>
                        <span
                            className="text-xs font-black tracking-[0.2em] uppercase"
                            style={{ color: item.color }}
                        >
                            Research Finding
                        </span>
                    </div>
                    <p className="text-sm text-foreground font-medium leading-relaxed">{item.insight}</p>
                    <div className="pt-3 border-t border-border">
                        <span className="text-xs font-bold tracking-[0.15em] text-muted-foreground uppercase block mb-1">Design Principle</span>
                        <p className="text-sm font-semibold italic" style={{ color: item.color }}>{item.principle}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

// ─── Design System Components Grid ─────────────────────────────────────────
export const VStateDesignSystemGrid: React.FC<{ accentColor?: string }> = ({ accentColor = "#2563eb" }) => {
    return (
        <div className="w-full space-y-8">
            {/* Status Badges */}
            <div>
                <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase block mb-3">Status Badges</span>
                <div className="flex flex-wrap gap-2">
                    {[
                        { label: "Compliant", color: "#10b981", bg: "#f0fdf4" },
                        { label: "Pending", color: "#f59e0b", bg: "#fffbeb" },
                        { label: "Overdue", color: "#ef4444", bg: "#fef2f2" },
                        { label: "In Review", color: "#2563eb", bg: "#eff6ff" },
                        { label: "Draft", color: "#6b7280", bg: "#f9fafb" },
                    ].map((b, i) => (
                        <span
                            key={i}
                            className="px-3 py-1.5 rounded-full text-sm font-bold"
                            style={{ color: b.color, backgroundColor: b.bg, border: `1px solid ${b.color}30` }}
                        >
                            {b.label}
                        </span>
                    ))}
                </div>
            </div>

            {/* Compliance Table Row */}
            <div>
                <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase block mb-3">Compliance Table Row</span>
                <div className="rounded-xl border border-border overflow-hidden bg-card">
                    <div className="grid grid-cols-4 gap-4 px-5 py-2.5 bg-muted/30 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        <span>Client</span>
                        <span>Filing Type</span>
                        <span>Deadline</span>
                        <span>Status</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 px-5 py-3.5 text-sm border-t border-border items-center">
                        <span className="font-medium text-foreground">Acme Corp</span>
                        <span className="text-muted-foreground">Annual Report — Delaware</span>
                        <span className="font-medium text-foreground">Mar 31, 2025</span>
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 w-fit">Pending</span>
                    </div>
                </div>
            </div>

            {/* Form Validation */}
            <div>
                <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase block mb-3">Form Validation Pattern</span>
                <div className="grid md:grid-cols-2 gap-3 max-w-lg">
                    <div>
                        <label className="text-sm font-bold text-muted-foreground block mb-1">Company Name</label>
                        <div className="px-3.5 py-2.5 rounded-xl border border-border text-sm text-muted-foreground bg-card/50">Acme Corporation</div>
                    </div>
                    <div>
                        <label className="text-sm font-bold text-red-500 block mb-1">State of Filing <span className="text-red-400">*</span></label>
                        <div className="px-3.5 py-2.5 rounded-xl border border-red-300 text-sm text-red-400 bg-red-50/50 dark:bg-red-950/10">Required field</div>
                        <p className="text-xs text-red-500 mt-1">Please select a state to proceed</p>
                    </div>
                </div>
            </div>

            {/* Notification Component */}
            <div>
                <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase block mb-3">Notification Component</span>
                <div
                    className="flex items-start gap-3 px-4 py-3.5 rounded-2xl border text-sm max-w-md"
                    style={{ borderColor: `${accentColor}40`, background: `${accentColor}08` }}
                >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${accentColor}18` }}>
                        <Bell size={16} style={{ color: accentColor }} />
                    </div>
                    <div>
                        <div className="font-bold text-foreground text-sm">Filing deadline approaching</div>
                        <div className="text-sm text-muted-foreground mt-0.5">Acme Corp's Delaware Annual Report is due in <strong>3 days</strong>. Review documents and submit.</div>
                    </div>
                    <button
                        className="ml-auto text-sm font-bold px-3 py-1.5 rounded-lg text-white flex-shrink-0"
                        style={{ backgroundColor: accentColor }}
                    >
                        Review
                    </button>
                </div>
            </div>
        </div>
    );
};
