import { RevealOnScroll } from "./RevealOnScroll";
import { UserFlow } from "./UserFlow";
import { VideoCarousel } from "./VideoCarousel";
import { VStateArchitecture } from "./VStateArchitecture";
import { HealthScoreExplanation } from "./HealthScoreExplanation";
import { SnackHackIA } from "./SnackHackIA";
import { PersonaCarousel } from "./PersonaCarousel";
import {
    VStateServiceEcosystem,
    VStateBeforeWorkflow,
    VStateAfterWorkflow,
    VStatePainPoints,
    VStateNotificationSystem,
    VStateServiceBlueprint,
    VStateResearchInsights,
    VStateDesignSystemGrid,
} from "./VStateCompliance";
import {
    CricMetrixBeforeAfter,
    CricMetrixAttendanceSystem,
    CricMetrixVoiceScorer,
    CricMetrixRoleDashboards,
    CricMetrixTwinTables,
    CricMetrixFeeCheckout,
    CricMetrixImpactMetrics,
} from "./CricMetrix";
import { CricMetrixIA } from "./CricMetrixIA";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LazyVideo } from "./LazyVideo";
import { ProjectBlock } from "@/data/projects";
import { Check, CheckCircle2, AlertCircle, ArrowRight, ImageIcon, Film, GitBranch, Layers } from "lucide-react";

export const BlockRenderer = ({ block, accentColor }: { block: ProjectBlock, accentColor?: string }) => {
    const titleClass = "text-[21px] sm:text-[26px] md:text-[32px] font-medium text-white mb-8 leading-[1.25] tracking-[-0.02em]";
    const subtitleClass = "text-[14px] sm:text-[16px] tracking-[0.18em] mb-3 block uppercase font-light text-white/40";
    const bodyClass = "text-[15px] sm:text-[16px] md:text-[18px] text-white/50 leading-[1.75] font-light";
    const listClass = "text-[15px] sm:text-[16px] md:text-[17px] text-white/60 leading-[1.7] font-light";
    const splitStatement = (value: string) => {
        const separator = value.indexOf(": ");
        return separator > -1
            ? { label: value.slice(0, separator), detail: value.slice(separator + 2) }
            : { label: value, detail: "" };
    };

    switch (block.type) {
        case "rich-text":
            return (
                <RevealOnScroll className="w-full">
                    {block.title && <h2 className={titleClass}>{block.title}</h2>}
                    {block.content && <p className={`${bodyClass} ${block.fullWidth ? "w-full" : "max-w-3xl"}`}>{block.content}</p>}
                </RevealOnScroll>
            );

        case "problem-statement":
            return (
                <RevealOnScroll className="max-w-6xl">
                    <div className="grid lg:grid-cols-[0.75fr_1.5fr] gap-5 lg:gap-16 items-start mb-10 md:mb-14">
                        <div>
                            <span className={subtitleClass}>Problem framing</span>
                            <p className="text-sm leading-6 text-white/35 max-w-xs">What users were trying to accomplish, where the experience broke down, and why it mattered.</p>
                        </div>
                        <div>
                            <h2 className="text-[25px] sm:text-[30px] md:text-[38px] font-medium text-white leading-[1.25] tracking-[-0.03em] mb-5">{block.highlight || block.title}</h2>
                            {block.content && <p className={`${bodyClass} max-w-2xl`}>{block.content}</p>}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
                        {block.list.map((item, i) => {
                            const { label, detail } = splitStatement(item);
                            return (
                                <article key={i} className="group rounded-[20px] border border-white/10 bg-white/[0.025] p-5 md:p-6 min-h-[190px] flex flex-col hover:bg-white/[0.045] hover:border-white/20 transition-colors">
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="text-xs uppercase tracking-[0.16em] text-white/30">User friction</span>
                                        <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs text-white/35">{String(i + 1).padStart(2, "0")}</span>
                                    </div>
                                    <div className="mt-auto">
                                        <h3 className="text-[18px] font-medium text-white mb-2 leading-snug">{label}</h3>
                                        {detail && <p className="text-[15px] leading-6 text-white/50">{detail}</p>}
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </RevealOnScroll>
            );

        case "role-list":
            return (
                <RevealOnScroll className="max-w-6xl">
                    <span className={subtitleClass}>Research approach</span>
                    {block.title && <h2 className={titleClass}>{block.title}</h2>}
                    {block.highlight && <p className="text-[17px] md:text-[19px] text-white/50 mb-10 max-w-3xl leading-[1.7] font-light">{block.highlight}</p>}

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
                        {block.roles.map((item, i) => (
                            <div key={i} className="rounded-[18px] border border-white/10 bg-white/[0.02] p-5 md:p-6 hover:border-white/20 transition-colors">
                                <span className="text-xs text-white/30 uppercase tracking-[0.14em] block mb-5">Method {String(i + 1).padStart(2, "0")}</span>
                                <div className="text-[16px] leading-7 font-medium text-white/75">{item}</div>
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>
            );

        case "personas": {
            return (
                <RevealOnScroll className="max-w-5xl">
                    <span className={subtitleClass}>{block.title || "User Personas"}</span>
                    <PersonaCarousel personas={block.personas} accentColor={accentColor} />
                </RevealOnScroll>
            );
        }

        case "triggers":
            return (
                <RevealOnScroll className="max-w-6xl">
                    <span className={subtitleClass}>{block.title || "User Dynamics"}</span>
                    <div className="grid md:grid-cols-2 gap-x-20 gap-y-24">
                        {block.triggers.map((trigger, index) => (
                            <div key={index} className="space-y-8 animate-in fade-in slide-in-from-bottom duration-700">
                                <h3 className="text-[18px] sm:text-[20px] font-medium tracking-[-0.02em] text-white border-b border-white/10 pb-6">{trigger.category}</h3>
                                <ul className="space-y-6">
                                    {trigger.terms.map((term, i) => (
                                        <li key={i} className={`${bodyClass} flex items-start gap-3`}>
                                            <ArrowRight className="w-4 h-4 mt-1 shrink-0 text-white/30" />
                                            <span>{term}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>
            );

        case "goals-list":
            return (
                <RevealOnScroll className="max-w-5xl">
                    <span className={subtitleClass}>{block.title || "Strategic Intent"}</span>
                    <ul className="grid md:grid-cols-2 gap-3">
                        {block.goals.map((goal, i) => (
                            <li key={i} className="rounded-[18px] border border-white/10 bg-white/[0.02] p-5 flex items-start gap-4">
                                <span className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs" style={{ color: accentColor, backgroundColor: `${accentColor || '#666'}18` }}>{i + 1}</span>
                                <span className="text-[15px] sm:text-[16px] text-white/60 leading-7 font-light">{goal}</span>
                            </li>
                        ))}
                    </ul>
                </RevealOnScroll>
            );

        case "info-architecture":
            return (
                <RevealOnScroll className="max-w-6xl">
                    <div className="text-center space-y-12">
                        <span className={subtitleClass}>Structure & Flow</span>
                        <p className="text-[18px] sm:text-[22px] md:text-[32px] font-medium tracking-[-0.02em] leading-relaxed text-white max-w-5xl mx-auto italic">
                            "{block.highlight}"
                        </p>
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 pt-10">
                            {block.modules.map((module, i) => (
                                <div key={i} className="text-[18px] font-medium text-white/50 hover:text-white transition-colors cursor-default">
                                    {module}
                                </div>
                            ))}
                        </div>
                        {block.image && (
                            <div className="pt-20">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button className="flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-full transition-all hover:scale-105 active:scale-95 font-medium text-base tracking-[0.1em] uppercase shadow-[0_8px_32px_-4px_rgba(0,0,0,0.35),0_2px_8px_-1px_rgba(0,0,0,0.20)] mx-auto">
                                            View Architecture Diagram
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-7xl w-[95vw] p-0 border-none bg-white rounded-[2rem] overflow-hidden">
                                        <img src={block.image} alt="IA Diagram" className="w-full h-auto" />
                                    </DialogContent>
                                </Dialog>
                            </div>
                        )}
                    </div>
                </RevealOnScroll>
            );

        case "process-steps":
            return (
                <RevealOnScroll className="max-w-4xl">
                    <span className={subtitleClass}>The Workflow</span>
                    {block.title && <h2 className={titleClass}>{block.title}</h2>}
                    {block.highlight && <p className={`${bodyClass} mb-8`}>{block.highlight}</p>}
                    <ol className="grid md:grid-cols-2 gap-3">
                        {block.steps.map((step, i) => (
                            <li key={i} className="rounded-[18px] border border-white/10 p-5 md:p-6 bg-white/[0.02] flex gap-4 items-start">
                                <span className="text-[12px] tabular-nums text-white/30 font-light flex-shrink-0 mt-1">{String(i + 1).padStart(2, "0")}</span>
                                <span className="text-[15px] sm:text-[16px] text-white/60 leading-7 font-light">{step}</span>
                            </li>
                        ))}
                    </ol>
                </RevealOnScroll>
            );

        case "challenges":
            return (
                <RevealOnScroll className="max-w-6xl">
                    <span className={subtitleClass}>{block.title || "Strategic Solutions"}</span>
                    <div className="grid gap-3">
                        {block.challenges.map((item, index) => (
                            <article key={index} className="rounded-[20px] border border-white/10 bg-white/[0.02] p-5 md:p-7 grid md:grid-cols-[0.8fr_1.2fr] gap-6 md:gap-10 group hover:border-white/20 transition-colors">
                                <div>
                                    <div className="text-xs font-medium uppercase tracking-[0.14em] text-rose-300/55 mb-3">Friction</div>
                                    <h3 className="text-[18px] font-medium text-white leading-snug">{item.challenge}</h3>
                                </div>
                                <div className="md:border-l md:border-white/10 md:pl-10">
                                    <div className="text-xs font-medium uppercase tracking-[0.14em] text-emerald-300/55 mb-3">Design response</div>
                                    <p className="text-[16px] text-white/55 leading-7">{item.solution}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </RevealOnScroll>
            );

        case "core-screens":
            const imageScreens = block.screens.filter(s => typeof s === 'object') as { title: string, image: string, description?: string }[];
            const labelScreens = block.screens.filter(s => typeof s === 'string') as string[];

            return (
                <RevealOnScroll className="w-full py-32">
                    <div className="mb-24 max-w-4xl">
                        <span className={subtitleClass}>{block.title || "Final Product"}</span>
                        {block.highlight && <h2 className="text-[18px] sm:text-[22px] md:text-[32px] font-medium tracking-[-0.02em] leading-snug text-white">{block.highlight}</h2>}
                    </div>

                    <div className="space-y-48">
                        {imageScreens.map((screen, i) => (
                            <RevealOnScroll key={i} delay={i * 100}>
                                <div className="flex flex-col gap-10">
                                    <div className="flex items-start gap-6">
                                        <div className="text-[20px] font-medium tracking-[-0.02em] text-white/50 mt-1.5">0{i + 1}</div>
                                        <div className="flex flex-col">
                                            <h3 className="text-[18px] sm:text-[20px] font-medium tracking-[-0.02em] leading-snug text-white">{screen.title}</h3>
                                            {screen.description && <p className={`${bodyClass} mt-2 max-w-4xl`}>{screen.description}</p>}
                                        </div>
                                    </div>
                                    <div className="rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-6 lg:p-8 overflow-hidden shadow-sm bg-[#0d0d0d] group border border-white/10">
                                        {screen.image.endsWith('.mp4') ? (
                                            <LazyVideo
                                                src={screen.image}
                                                className="w-full h-auto block rounded-xl md:rounded-2xl transition-transform [transition-duration:2000ms] group-hover:scale-105"
                                            />
                                        ) : (
                                            <img
                                                src={screen.image}
                                                alt={screen.title}
                                                className="w-full h-auto block rounded-xl md:rounded-2xl transition-transform [transition-duration:2000ms] group-hover:scale-105"
                                            />
                                        )}
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}

                        {labelScreens.length > 0 && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 pt-24 border-t border-white/10">
                                {labelScreens.map((screen, i) => (
                                    <div key={i} className="space-y-4">
                                        <span className="text-[16px] font-medium text-white/30 uppercase tracking-[0.1em]">Detail 0{i + 1}</span>
                                        <div className="text-[20px] font-medium text-white leading-tight">{screen}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </RevealOnScroll>
            );

        case "custom-component":
            if (block.componentName === "UserFlow") {
                return (
                    <RevealOnScroll className="max-w-7xl my-32">
                        <UserFlow />
                    </RevealOnScroll>
                );
            }
            if (block.componentName === "VideoCarousel" && block.props?.videos) {
                return (
                    <RevealOnScroll className="max-w-7xl my-32">
                        <VideoCarousel videos={block.props.videos} />
                    </RevealOnScroll>
                )
            }
            if (block.componentName === "VStateIA") {
                return (
                    <RevealOnScroll className="max-w-7xl my-32">
                        <VStateArchitecture accentColor={accentColor} />
                    </RevealOnScroll>
                );
            }
            if (block.componentName === "HealthScoreExplanation") {
                return <HealthScoreExplanation accentColor={accentColor} />;
            }
            if (block.componentName === "SnackHackIA") {
                return (
                    <RevealOnScroll className="max-w-7xl my-32">
                        <SnackHackIA accentColor={accentColor} />
                    </RevealOnScroll>
                );
            }
            if (block.componentName === "VStateServiceEcosystem") {
                return (
                    <RevealOnScroll className="w-full my-10">
                        <VStateServiceEcosystem accentColor={accentColor} />
                    </RevealOnScroll>
                );
            }
            if (block.componentName === "VStateBeforeWorkflow") {
                return (
                    <RevealOnScroll className="w-full my-8">
                        <VStateBeforeWorkflow accentColor={accentColor} />
                    </RevealOnScroll>
                );
            }
            if (block.componentName === "VStateAfterWorkflow") {
                return (
                    <RevealOnScroll className="w-full my-8">
                        <VStateAfterWorkflow accentColor={accentColor} />
                    </RevealOnScroll>
                );
            }
            if (block.componentName === "VStatePainPoints") {
                return (
                    <RevealOnScroll className="w-full my-8">
                        <VStatePainPoints accentColor={accentColor} />
                    </RevealOnScroll>
                );
            }
            if (block.componentName === "VStateNotificationSystem") {
                return (
                    <RevealOnScroll className="w-full my-8">
                        <VStateNotificationSystem accentColor={accentColor} />
                    </RevealOnScroll>
                );
            }
            if (block.componentName === "VStateServiceBlueprint") {
                return (
                    <RevealOnScroll className="w-full my-8">
                        <VStateServiceBlueprint accentColor={accentColor} />
                    </RevealOnScroll>
                );
            }
            if (block.componentName === "VStateResearchInsights") {
                return (
                    <RevealOnScroll className="w-full my-8">
                        <VStateResearchInsights accentColor={accentColor} />
                    </RevealOnScroll>
                );
            }
            if (block.componentName === "VStateDesignSystemGrid") {
                return (
                    <RevealOnScroll className="w-full my-8">
                        <VStateDesignSystemGrid accentColor={accentColor} />
                    </RevealOnScroll>
                );
            }
            if (block.componentName === "CricMetrixBeforeAfter") {
                return (
                    <RevealOnScroll className="w-full my-8">
                        <CricMetrixBeforeAfter />
                    </RevealOnScroll>
                );
            }
            if (block.componentName === "CricMetrixAttendanceSystem") {
                return (
                    <RevealOnScroll className="w-full my-8">
                        <CricMetrixAttendanceSystem />
                    </RevealOnScroll>
                );
            }
            if (block.componentName === "CricMetrixVoiceScorer") {
                return (
                    <RevealOnScroll className="w-full my-8">
                        <CricMetrixVoiceScorer />
                    </RevealOnScroll>
                );
            }
            if (block.componentName === "CricMetrixRoleDashboards") {
                return (
                    <RevealOnScroll className="w-full my-8">
                        <CricMetrixRoleDashboards />
                    </RevealOnScroll>
                );
            }
            if (block.componentName === "CricMetrixTwinTables") {
                return (
                    <RevealOnScroll className="w-full my-8">
                        <CricMetrixTwinTables />
                    </RevealOnScroll>
                );
            }
            if (block.componentName === "CricMetrixFeeCheckout") {
                return (
                    <RevealOnScroll className="w-full my-8">
                        <CricMetrixFeeCheckout />
                    </RevealOnScroll>
                );
            }
            if (block.componentName === "CricMetrixImpactMetrics") {
                return (
                    <RevealOnScroll className="w-full my-8">
                        <CricMetrixImpactMetrics />
                    </RevealOnScroll>
                );
            }
            if (block.componentName === "CricMetrixIA") {
                return (
                    <RevealOnScroll className="w-full my-8">
                        <CricMetrixIA />
                    </RevealOnScroll>
                );
            }
            return null;

        case "image":
            return (
                <RevealOnScroll className={block.fullWidth ? "w-full" : "max-w-6xl"}>
                    {block.title && <h2 className={titleClass}>{block.title}</h2>}
                    <div className={`overflow-hidden shadow-sm bg-[#0d0d0d] border border-white/10 ${block.fullWidth ? "rounded-[1.5rem] md:rounded-[2rem]" : "rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-8 lg:p-12"}`}>
                        {block.src.endsWith('.mp4') ? (
                            <LazyVideo
                                src={block.src}
                                className="w-full h-auto block rounded-xl"
                            />
                        ) : (
                            <img
                                src={block.src}
                                alt={block.title || "Project Image"}
                                className="w-full h-auto rounded-xl"
                            />
                        )}
                    </div>
                    {block.caption && <div className="mt-6 text-center text-white/50 italic font-medium tracking-[-0.02em] text-[16px] md:text-[18px] w-full">{block.caption}</div>}
                </RevealOnScroll>
            );

        case "user-flow-popup":
            return (
                <RevealOnScroll className="max-w-6xl">
                    <span className={subtitleClass}>{block.title || "Functional Mapping"}</span>
                    <p className="text-[18px] sm:text-[22px] md:text-[32px] font-medium tracking-[-0.02em] leading-relaxed text-white max-w-5xl italic mb-20 group cursor-default transition-all hover:text-white">
                        "{block.highlight}"
                    </p>
                    <div className="grid md:grid-cols-2 gap-10 mb-20">
                        {block.steps.map((step, i) => (
                            <div key={i} className={`${bodyClass} flex gap-3 items-center`}>
                                <ArrowRight className="w-4 h-4 shrink-0 text-white/30" /> {step}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center w-full mt-10">
                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-full transition-all hover:scale-105 active:scale-95 font-medium text-base tracking-[0.1em] uppercase shadow-[0_8px_32px_-4px_rgba(0,0,0,0.35),0_2px_8px_-1px_rgba(0,0,0,0.20)]">
                                    View User Task Flow Diagram
                                </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-7xl w-[95vw] h-[85vh] p-0 border-none bg-white rounded-3xl overflow-y-auto shadow-lg shadow-gray-200/50">
                                <UserFlow />
                            </DialogContent>
                        </Dialog>
                    </div>
                </RevealOnScroll>
            );

        case "prototype":
            return (
                <RevealOnScroll className="w-full">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <span className={subtitleClass}>{block.title || "Interactive Prototype"}</span>
                        {block.description && <h2 className="text-[20px] md:text-[20px] font-medium tracking-[-0.02em] leading-[1.1] text-white italic">{block.description}</h2>}
                    </div>

                    <div
                        className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-sm bg-[#0d0d0d] border border-white/10 relative h-[80vh] md:h-[800px]"
                        style={block.height ? { height: block.height } : undefined}
                    >
                        <iframe
                            src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(block.url + '&scaling=scale-down')}`}
                            className="absolute inset-0 w-full h-full border-none"
                            allowFullScreen
                        />
                    </div >
                </RevealOnScroll >
            );

        case "design-system":
            return (
                <RevealOnScroll className="max-w-4xl">
                    <span className={subtitleClass}>{block.title || "Design Language"}</span>
                    <h2 className={titleClass}>{block.highlight}</h2>
                    {block.content && <p className={`${bodyClass} mb-8`}>{block.content}</p>}
                    <ul className="space-y-4">
                        {block.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-3" style={{ backgroundColor: accentColor }} />
                                <span className={listClass}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </RevealOnScroll>
            );

        case "accessibility":
            return (
                <RevealOnScroll className="max-w-6xl">
                    <span className={subtitleClass}>{block.title || "Inclusive Design"}</span>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h2 className="text-[18px] sm:text-[20px] font-medium tracking-[-0.02em] leading-snug text-white">Universal accessibility standards were integrated from the start.</h2>
                        </div>
                        <div className="space-y-4">
                            {block.items.map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="mt-1">
                                        <Check className="w-5 h-5" style={{ color: accentColor }} />
                                    </div>
                                    <span className={bodyClass}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>
            );

        case "impact":
            return (
                <RevealOnScroll className="max-w-6xl rounded-[24px] border border-white/10 bg-white/[0.025] p-6 md:p-9">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                        <div>
                            <span className={subtitleClass}>{block.title || "Outcomes"}</span>
                            <h2 className="text-[25px] md:text-[34px] font-medium text-white tracking-[-0.03em]">What changed</h2>
                        </div>
                        <p className="text-sm leading-6 text-white/35 max-w-xs">Results retain their original validation context, including test sample sizes and projected status.</p>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-3">
                        {block.items.map((item, i) => (
                            <li key={i} className="rounded-[16px] border border-white/10 bg-black/20 p-5 flex items-start gap-4">
                                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: accentColor || '#fff' }} />
                                <span className="text-[15px] sm:text-[16px] text-white/65 leading-7">{item}</span>
                            </li>
                        ))}
                    </ul>
                </RevealOnScroll>
            );

        case "learnings":
            return (
                <RevealOnScroll className="max-w-6xl space-y-8">
                    <div className="rounded-[24px] border border-white/10 p-6 md:p-9 grid md:grid-cols-[0.7fr_1.5fr] gap-8 md:gap-12">
                        <div>
                            <span className={subtitleClass}>Reflections</span>
                            <h2 className="text-[24px] md:text-[30px] font-medium tracking-[-0.03em] text-white">{block.title || "Learnings"}</h2>
                        </div>
                        <div className="space-y-3">
                            {block.learnings.map((item, i) => (
                                <div key={i} className="rounded-[16px] bg-white/[0.025] border border-white/10 p-5 flex gap-4 group">
                                    <span className="text-xs text-white/30 mt-1">{String(i + 1).padStart(2, "0")}</span>
                                    <p className="text-[15px] sm:text-[16px] leading-7 text-white/60">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[24px] border border-white/10 bg-white/[0.02] p-6 md:p-9">
                        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
                            <div>
                                <span className={subtitleClass}>Roadmap</span>
                                <h2 className="text-[20px] font-medium tracking-[-0.02em] text-white">Future Scope</h2>
                            </div>
                            <ul className="space-y-3">
                                {block.future.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 rounded-[14px] border border-white/10 p-4">
                                        <ArrowRight className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: accentColor }} />
                                        <span className="text-[15px] text-white/55 leading-6">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </RevealOnScroll>
            );

        case "wireframes":
            return (
                <RevealOnScroll className="max-w-7xl">
                    <span className={subtitleClass}>{block.title || "Early Concepts"}</span>
                    <h2 className={titleClass}>{block.highlight}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {block.items.map((item, i) => (
                            <div key={i} className="rounded-3xl overflow-hidden shadow-sm border border-white/10 bg-[#0d0d0d] aspect-[9/16]">
                                <img src={item} alt={`Wireframe ${i + 1}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>
            );

        case "asset-placeholder": {
            const assetIcons: Record<string, string> = {
                "screen-design": "🖥️",
                "flow-diagram": "🔄",
                "architecture-diagram": "🏗️",
                "wireframe": "📐",
                "photo": "📷",
                "data-chart": "📊",
                "custom-diagram": "✏️",
            };
            const assetLabels: Record<string, string> = {
                "screen-design": "Screen Design Required",
                "flow-diagram": "Flow Diagram Required",
                "architecture-diagram": "Architecture Diagram Required",
                "wireframe": "Wireframe Required",
                "photo": "Photo / Image Required",
                "data-chart": "Data Chart Required",
                "custom-diagram": "Custom Diagram Required",
            };
            const assetIconComponents: Record<string, React.ReactNode> = {
                "screen-design": <ImageIcon size={40} className="text-white/50/40" />,
                "flow-diagram": <GitBranch size={40} className="text-white/50/40" />,
                "video": <Film size={40} className="text-white/50/40" />,
                "diagram": <Layers size={40} className="text-white/50/40" />,
            };
            const iconNode = assetIconComponents[block.assetType] || <ImageIcon size={40} className="text-white/50/40" />;
            const label = assetLabels[block.assetType] || "Asset Required";
            return (
                <RevealOnScroll className="max-w-6xl">
                    {block.title && <h2 className="text-[20px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.1] text-white mb-8">{block.title}</h2>}
                    <div className="rounded-2xl border-2 border-dashed border-white/10 bg-white/[0.03] p-8 md:p-12 flex flex-col items-center text-center gap-5">
                        <div>{iconNode}</div>
                        <div
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-base font-medium tracking-wide"
                            style={{ color: accentColor, background: `${accentColor}12`, border: `1px solid ${accentColor}30` }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: accentColor }} />
                            {label}
                        </div>
                        <p className="text-[18px] font-medium text-white max-w-lg">{block.description}</p>
                        {block.note && (
                            <p className="text-base text-white/50 italic max-w-md border-t border-white/10 pt-4 mt-1">{block.note}</p>
                        )}
                    </div>
                </RevealOnScroll>
            );
        }

        case "metrics-grid":
            return (
                <RevealOnScroll className="max-w-6xl">
                    {block.title && <span className={subtitleClass}>{block.title}</span>}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                        {block.metrics.map((m, idx) => (
                            <div key={idx} className="border border-white/10 rounded-[20px] p-8 bg-white/[0.02] flex flex-col justify-between hover:border-white/20 transition-all">
                                <div className="text-[48px] md:text-[64px] font-semibold tracking-tight leading-none mb-4" style={{ color: accentColor || '#fff' }}>
                                    {m.value}
                                </div>
                                <div>
                                    <h4 className="text-[18px] font-medium text-white mb-2">{m.label}</h4>
                                    {m.description && <p className="text-white/50 text-[15px] leading-relaxed">{m.description}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>
            );

        case "trade-offs":
            return (
                <RevealOnScroll className="max-w-6xl">
                    {block.title && <span className={subtitleClass}>{block.title}</span>}
                    <div className="flex flex-col gap-6 mt-6">
                        {block.items.map((item, idx) => {
                            const isSelected = item.status === "selected";
                            const isRejected = item.status === "rejected";
                            return (
                                <div key={idx} className="border border-white/10 rounded-[20px] p-6 md:p-8 bg-white/[0.01] hover:bg-white/[0.02] transition-all grid md:grid-cols-[1fr_2fr_1.5fr] gap-6 items-start">
                                    <div>
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${
                                            isSelected ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                            isRejected ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' :
                                            'bg-white/10 text-white/50 border border-white/15'
                                        }`}>
                                            {item.status}
                                        </span>
                                        <h4 className="text-[18px] font-medium text-white leading-tight">{item.option}</h4>
                                    </div>
                                    <div className="text-white/50 text-[15px] leading-relaxed">
                                        <strong className="text-white/80 block mb-1">Reasoning & Feedback</strong>
                                        {item.reasoning}
                                    </div>
                                    <div className="text-white/50 text-[15px] leading-relaxed">
                                        <strong className="text-white/80 block mb-1">UX Trade-Off</strong>
                                        {item.tradeOff}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </RevealOnScroll>
            );

        default:
            return null;
    }
};
