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
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LazyVideo } from "./LazyVideo";
import { ProjectBlock } from "@/data/projects";
import { Check, CheckCircle2, AlertCircle, ArrowRight, ImageIcon, Film, GitBranch, Layers } from "lucide-react";

export const BlockRenderer = ({ block, accentColor }: { block: ProjectBlock, accentColor?: string }) => {
    const titleClass = "text-[26px] md:text-[32px] font-medium text-white mb-8 leading-[1.1] tracking-[-0.02em]";
    const subtitleClass = "text-[16px] tracking-[0.18em] mb-3 block uppercase font-light text-white/40";

    switch (block.type) {
        case "rich-text":
            return (
                <RevealOnScroll className="w-full">
                    {block.title && <h2 className={titleClass}>{block.title}</h2>}
                    {block.content && <p className={`text-[16px] md:text-[18px] text-white/50 leading-[1.75] font-light ${block.fullWidth ? "w-full" : "max-w-3xl"}`}>{block.content}</p>}
                </RevealOnScroll>
            );

        case "problem-statement":
            return (
                <RevealOnScroll className="max-w-6xl">
                    <span className={subtitleClass}>{block.title || "The Challenge"}</span>
                    {block.highlight && <h2 className={titleClass}>{block.highlight}</h2>}
                    {block.content && <p className="text-[18px] text-white/50 mb-16 leading-[1.65em] max-w-3xl">{block.content}</p>}

                    <div className="space-y-16">
                        {block.list.map((item, i) => {
                            const [title, desc] = item.includes(":") ? item.split(": ") : [item, ""];
                            return (
                                <div key={i} className="flex gap-8 items-start group">
                                    <div className="text-[44px] font-medium tracking-[-0.02em] text-white/20 group-hover:text-white/30 transition-colors leading-none border-b border-white/10 pb-4">
                                        0{i + 1}
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="text-[20px] font-medium text-white mb-2">{title}</h4>
                                        {desc && <p className="text-white/50 text-[18px] leading-[1.65em] max-w-xl">{desc}</p>}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </RevealOnScroll>
            );

        case "role-list":
            return (
                <RevealOnScroll className="max-w-6xl">
                    <span className={subtitleClass}>Process & Methodology</span>
                    {block.title && <h2 className={titleClass}>{block.title}</h2>}
                    {block.highlight && <p className="text-[20px] text-white/50 mb-16 max-w-4xl leading-[1.65em]">{block.highlight}</p>}

                    <div className="grid md:grid-cols-2 gap-12">
                        {block.roles.map((item, i) => (
                            <div key={i} className="border-l border-white/10 pl-8 py-4 hover:border-gray-900 transition-colors">
                                <span className="text-base font-medium text-white/50 uppercase tracking-[0.1em] block mb-2">0{i + 1}</span>
                                <div className="text-[20px] font-medium text-white leading-tight">{item}</div>
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
                                <h3 className="text-[20px] font-medium tracking-[-0.02em]er text-white border-b border-white/10 pb-6">{trigger.category}</h3>
                                <ul className="space-y-6">
                                    {trigger.terms.map((term, i) => (
                                        <li key={i} className="text-white/50 font-medium text-[18px] flex items-start gap-3">
                                            <ArrowRight className="w-4 h-4 mt-1 shrink-0 text-white/50/50" />
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
                    <ul className="space-y-4">
                        {block.goals.map((goal, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <div
                                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-3"
                                    style={{ backgroundColor: accentColor || '#666' }}
                                />
                                <span className="text-[17px] text-white/60 leading-[1.7] font-light">{goal}</span>
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
                        <p className="text-[20px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.1] text-white max-w-5xl mx-auto italic">
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
                    {block.highlight && <p className="text-[17px] text-white/50 mb-8 leading-[1.7] font-light">{block.highlight}</p>}
                    <ul className="space-y-4">
                        {block.steps.map((step, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <span className="text-[12px] tabular-nums text-white/25 font-light mt-1 flex-shrink-0">0{i + 1}</span>
                                <span className="text-[17px] text-white/60 leading-[1.7] font-light">{step}</span>
                            </li>
                        ))}
                    </ul>
                </RevealOnScroll>
            );

        case "challenges":
            return (
                <RevealOnScroll className="max-w-6xl">
                    <span className={subtitleClass}>{block.title || "Strategic Solutions"}</span>
                    <div className="divide-y divide-white/10">
                        {block.challenges.map((item, index) => (
                            <div key={index} className="py-12 grid md:grid-cols-[1fr_1.5fr] gap-12 group">
                                <div className="space-y-2">
                                    <div className="text-[16px] font-medium uppercase tracking-[0.1em] text-white/30 group-hover:text-rose-400 transition-colors">Challenge</div>
                                    <div className="text-[20px] font-medium text-white">{item.challenge}</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-[16px] font-medium uppercase tracking-[0.1em] text-white/30 group-hover:text-emerald-400 transition-colors">Solution</div>
                                    <div className="text-[20px] font-medium text-white/50 leading-[1.65em]">{item.solution}</div>
                                </div>
                            </div>
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
                        {block.highlight && <h2 className="text-[20px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.1] text-white">{block.highlight}</h2>}
                    </div>

                    <div className="space-y-48">
                        {imageScreens.map((screen, i) => (
                            <RevealOnScroll key={i} delay={i * 100}>
                                <div className="flex flex-col gap-10">
                                    <div className="flex items-start gap-6">
                                        <div className="text-[20px] font-medium tracking-[-0.02em]er text-white/50 mt-1.5">0{i + 1}</div>
                                        <div className="flex flex-col">
                                            <h3 className="text-[20px] md:text-[20px] font-medium tracking-[-0.02em] leading-[1.1] text-white">{screen.title}</h3>
                                            {screen.description && <p className="text-[18px] text-white/50 mt-2 leading-[1.65em] max-w-4xl">{screen.description}</p>}
                                        </div>
                                    </div>
                                    <div className="rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-6 lg:p-8 overflow-hidden shadow-sm bg-[#0d0d0d] group border border-white/10">
                                        {screen.image.endsWith('.mp4') ? (
                                            <LazyVideo
                                                src={screen.image}
                                                className="w-full h-auto block rounded-xl md:rounded-2xl transition-transform duration-[2000ms] group-hover:scale-105"
                                            />
                                        ) : (
                                            <img
                                                src={screen.image}
                                                alt={screen.title}
                                                className="w-full h-auto block rounded-xl md:rounded-2xl transition-transform duration-[2000ms] group-hover:scale-105"
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
                    {block.caption && <div className="mt-6 text-center text-white/50 italic font-medium tracking-[-0.02em]er text-[18px] w-full">{block.caption}</div>}
                </RevealOnScroll>
            );

        case "user-flow-popup":
            return (
                <RevealOnScroll className="max-w-6xl">
                    <span className={subtitleClass}>{block.title || "Functional Mapping"}</span>
                    <p className="text-[20px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.1] text-white max-w-5xl italic mb-20 group cursor-default transition-all hover:text-white">
                        "{block.highlight}"
                    </p>
                    <div className="grid md:grid-cols-2 gap-10 mb-20">
                        {block.steps.map((step, i) => (
                            <div key={i} className="flex gap-3 items-center text-white/50 font-medium text-[18px]">
                                <ArrowRight className="w-4 h-4 shrink-0 text-white/50/50" /> {step}
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
                    {block.content && <p className="text-[17px] text-white/50 mb-8 leading-[1.7] font-light">{block.content}</p>}
                    <ul className="space-y-4">
                        {block.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-3" style={{ backgroundColor: accentColor }} />
                                <span className="text-[17px] text-white/60 leading-[1.7] font-light">{item}</span>
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
                            <h2 className="text-[20px] font-medium tracking-[-0.02em] leading-[1.1] text-white">Universal accessibility standards were integrated from the start.</h2>
                        </div>
                        <div className="space-y-4">
                            {block.items.map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="mt-1">
                                        <Check className="w-5 h-5" style={{ color: accentColor }} />
                                    </div>
                                    <span className="text-white/50 text-[18px]">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>
            );

        case "impact":
            return (
                <RevealOnScroll className="max-w-4xl">
                    <span className={subtitleClass}>{block.title || "Outcomes"}</span>
                    <h2 className={titleClass}>Measuring Success</h2>
                    <ul className="space-y-4">
                        {block.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <div
                                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-3"
                                    style={{ backgroundColor: accentColor || '#666' }}
                                />
                                <span className="text-[17px] text-white/60 leading-[1.7] font-light">{item}</span>
                            </li>
                        ))}
                    </ul>
                </RevealOnScroll>
            );

        case "learnings":
            return (
                <RevealOnScroll className="max-w-6xl space-y-24">
                    <div className="grid md:grid-cols-[1fr_2fr] gap-12">
                        <div>
                            <span className={subtitleClass}>Reflections</span>
                            <h2 className="text-[20px] font-medium tracking-[-0.02em] leading-[1.1] text-white">{block.title || "Learnings"}</h2>
                        </div>
                        <div className="space-y-8">
                            {block.learnings.map((item, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="text-[20px] font-medium tracking-[-0.02em]er text-white/20 group-hover:text-white/30 transition-colors">0{i + 1}</div>
                                    <p className="text-[20px] text-white/50 leading-[1.65em] pt-2">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-16 border-t border-white/10">
                        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
                            <div>
                                <span className={subtitleClass}>Roadmap</span>
                                <h2 className="text-[20px] font-medium tracking-[-0.02em] leading-[1.1] text-white">Future Scope</h2>
                            </div>
                            <ul className="space-y-4">
                                {block.future.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-3" style={{ backgroundColor: accentColor }} />
                                        <span className="text-[17px] text-white/60 leading-[1.7] font-light">{item}</span>
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

        default:
            return null;
    }
};
