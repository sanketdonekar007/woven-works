import { RevealOnScroll } from "./RevealOnScroll";
import { UserFlow } from "./UserFlow";
import { VideoCarousel } from "./VideoCarousel";
import { VStateArchitecture } from "./VStateArchitecture";
import { HealthScoreExplanation } from "./HealthScoreExplanation";
import { SnackHackIA } from "./SnackHackIA";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ProjectBlock } from "@/data/projects";
import { Check } from "lucide-react";

export const BlockRenderer = ({ block, accentColor }: { block: ProjectBlock, accentColor?: string }) => {
    const titleClass = "text-4xl md:text-5xl font-bold tracking-tighter text-[#0F0F0F] mb-10";
    const subtitleClass = "text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block";

    switch (block.type) {
        case "rich-text":
            return (
                <RevealOnScroll className="max-w-3xl mx-auto py-12">
                    {block.title && <h2 className={titleClass}>{block.title}</h2>}
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">{block.content}</p>
                </RevealOnScroll>
            );

        case "problem-statement":
            return (
                <RevealOnScroll className="max-w-5xl mx-auto py-20">
                    <span className={subtitleClass}>{block.title || "The Challenge"}</span>
                    {block.highlight && <h2 className={titleClass}>{block.highlight}</h2>}
                    {block.content && <p className="text-lg text-gray-500 mb-16 leading-relaxed max-w-2xl">{block.content}</p>}

                    <div className="space-y-16">
                        {block.list.map((item, i) => {
                            const [title, desc] = item.includes(":") ? item.split(": ") : [item, ""];
                            return (
                                <div key={i} className="flex gap-8 items-start group">
                                    <div className="text-6xl font-bold tracking-tighter text-gray-200 group-hover:text-gray-300 transition-colors leading-none border-b border-gray-100 pb-4">
                                        0{i + 1}
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="text-2xl font-bold text-[#0F0F0F] mb-2">{title}</h4>
                                        {desc && <p className="text-gray-500 text-lg leading-relaxed max-w-xl">{desc}</p>}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </RevealOnScroll>
            );

        case "role-list":
            return (
                <RevealOnScroll className="max-w-5xl mx-auto py-20">
                    <span className={subtitleClass}>Process & Methodology</span>
                    {block.title && <h2 className={titleClass}>{block.title}</h2>}
                    {block.highlight && <p className="text-xl text-gray-600 mb-16 max-w-3xl leading-relaxed">{block.highlight}</p>}

                    <div className="grid md:grid-cols-2 gap-12">
                        {block.roles.map((item, i) => (
                            <div key={i} className="border-l border-gray-200 pl-8 py-4 hover:border-gray-900 transition-colors">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest block mb-2">0{i + 1}</span>
                                <div className="text-xl font-bold text-gray-800 leading-tight">{item}</div>
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>
            );

        case "personas":
            return (
                <RevealOnScroll className="max-w-6xl mx-auto py-20">
                    <span className={subtitleClass}>{block.title || "User Profile"}</span>
                    <div className="space-y-32">
                        {block.personas.map((persona, index) => (
                            <div key={index} className="flex flex-col lg:grid lg:grid-cols-[1fr_1.5fr] gap-20">
                                <div className="space-y-10">
                                    <div className="aspect-[4/5] w-full max-w-[280px] md:max-w-md lg:max-w-none mx-auto lg:mx-0 rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-xl shadow-gray-100">
                                        <img
                                            src={persona.image || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"}
                                            alt={persona.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-4xl font-bold tracking-tighter text-[#0F0F0F] mb-2">{persona.name}</h3>
                                        <p className="text-lg text-gray-500 font-medium">{persona.role}</p>
                                        {persona.details && (
                                            <div className="flex flex-wrap gap-x-8 gap-y-2 mt-6">
                                                {persona.details.map((detail, i) => (
                                                    <div key={i} className="text-sm">
                                                        <span className="text-gray-400 mr-2 uppercase tracking-tighter text-[10px] font-bold">{detail.label}</span>
                                                        <span className="text-gray-800 font-medium">{detail.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center">
                                    <p className="text-3xl md:text-5xl font-bold tracking-tighter text-gray-800 leading-tight mb-20 text-gray-600">
                                        "{persona.quote}"
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-16">
                                        <div className="space-y-8">
                                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-4">Goals</h4>
                                            <ul className="space-y-4">
                                                {persona.goals.map((g, i) => (
                                                    <li key={i} className="flex gap-4 text-gray-700 font-medium text-lg leading-relaxed">
                                                        <span className="text-gray-300">/</span> {g}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="space-y-8">
                                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-4">Pain Points</h4>
                                            <ul className="space-y-4">
                                                {persona.painPoints.map((p, i) => (
                                                    <li key={i} className="flex gap-4 text-gray-700 font-medium text-lg leading-relaxed">
                                                        <span className="text-gray-300">/</span> {p}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>
            );

        case "triggers":
            return (
                <RevealOnScroll className="max-w-5xl mx-auto py-20">
                    <span className={subtitleClass}>{block.title || "User Dynamics"}</span>
                    <div className="grid md:grid-cols-2 gap-x-20 gap-y-24">
                        {block.triggers.map((trigger, index) => (
                            <div key={index} className="space-y-8 animate-in fade-in slide-in-from-bottom duration-700">
                                <h3 className="text-2xl font-bold tracking-tighter text-[#0F0F0F] border-b border-gray-200 pb-6">{trigger.category}</h3>
                                <ul className="space-y-6">
                                    {trigger.terms.map((term, i) => (
                                        <li key={i} className="text-gray-500 font-medium text-lg flex items-start gap-3">
                                            <span className="text-gray-300 mt-1.5">•</span>
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
                <RevealOnScroll className="max-w-4xl mx-auto py-20">
                    <span className={subtitleClass}>{block.title || "Strategic Intent"}</span>
                    <div className="grid gap-4">
                        {block.goals.map((goal, i) => (
                            <div key={i} className="bg-white/50 backdrop-blur-md p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-6 hover:bg-white transition-all">
                                <div
                                    className="w-4 h-4 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: accentColor || '#333' }}
                                />
                                <span className="text-xl font-medium text-gray-800 leading-relaxed">{goal}</span>
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>
            );

        case "info-architecture":
            return (
                <RevealOnScroll className="max-w-5xl mx-auto py-24">
                    <div className="text-center space-y-12">
                        <span className={subtitleClass}>Structure & Flow</span>
                        <p className="text-3xl md:text-5xl font-bold tracking-tighter text-gray-800 leading-tight max-w-4xl mx-auto italic">
                            "{block.highlight}"
                        </p>
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 pt-10">
                            {block.modules.map((module, i) => (
                                <div key={i} className="text-lg font-bold text-gray-400 hover:text-[#0F0F0F] transition-colors cursor-default">
                                    {module}
                                </div>
                            ))}
                        </div>
                        {block.image && (
                            <div className="pt-20">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button className="group flex flex-col items-center gap-4 mx-auto">
                                            <div className="w-1 px-10 border-b border-gray-300 group-hover:border-gray-900 transition-all"></div>
                                            <span className="text-sm font-bold uppercase tracking-widest text-gray-500 group-hover:text-[#0F0F0F] transition-colors">
                                                View Architecture Diagram
                                            </span>
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
                <RevealOnScroll className="max-w-6xl mx-auto py-24">
                    <span className={subtitleClass}>The Workflow</span>
                    {block.title && <h2 className={titleClass}>{block.title}</h2>}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {block.steps.map((step, i) => (
                            <div key={i} className="space-y-4 bg-white/50 backdrop-blur-md p-8 rounded-3xl border border-gray-100 shadow-sm hover:bg-white transition-all flex flex-col h-full">
                                <div className="text-sm font-bold tracking-widest text-gray-400">0{i + 1}</div>
                                <div className="text-xl font-medium text-gray-800 leading-relaxed pt-2">
                                    {step}
                                </div>
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>
            );

        case "challenges":
            return (
                <RevealOnScroll className="max-w-5xl mx-auto py-24">
                    <span className={subtitleClass}>{block.title || "Strategic Solutions"}</span>
                    <div className="divide-y divide-slate-200">
                        {block.challenges.map((item, index) => (
                            <div key={index} className="py-12 grid md:grid-cols-[1fr_1.5fr] gap-12 group">
                                <div className="space-y-2">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-300 group-hover:text-rose-400 transition-colors">Challenge</div>
                                    <div className="text-xl font-bold text-[#0F0F0F]">{item.challenge}</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-300 group-hover:text-emerald-400 transition-colors">Solution</div>
                                    <div className="text-xl font-medium text-gray-600 leading-relaxed">{item.solution}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>
            );

        case "core-screens":
            const imageScreens = block.screens.filter(s => typeof s === 'object') as { title: string, image: string }[];
            const labelScreens = block.screens.filter(s => typeof s === 'string') as string[];

            return (
                <RevealOnScroll className="w-full max-w-7xl mx-auto py-32">
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <span className={subtitleClass}>{block.title || "Final Product"}</span>
                        {block.highlight && <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gray-800 leading-tight">{block.highlight}</h2>}
                    </div>

                    <div className="space-y-48">
                        {imageScreens.map((screen, i) => (
                            <RevealOnScroll key={i} delay={i * 100}>
                                <div className="flex flex-col gap-10">
                                    <div className="flex items-center gap-6">
                                        <div className="text-2xl font-bold tracking-tighter text-gray-400">0{i + 1}</div>
                                        <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0F0F0F]">{screen.title}</h3>
                                    </div>
                                    <div className="rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-lg shadow-gray-200/50 bg-white group">
                                        <img
                                            src={screen.image}
                                            alt={screen.title}
                                            className="w-full h-auto block transition-transform duration-[2000ms] group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}

                        {labelScreens.length > 0 && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 pt-24 border-t border-gray-200">
                                {labelScreens.map((screen, i) => (
                                    <div key={i} className="space-y-4">
                                        <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Detail 0{i + 1}</span>
                                        <div className="text-xl font-bold text-gray-800 leading-tight">{screen}</div>
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
                    <RevealOnScroll className="max-w-7xl mx-auto my-32">
                        <UserFlow />
                    </RevealOnScroll>
                );
            }
            if (block.componentName === "VideoCarousel" && block.props?.videos) {
                return (
                    <RevealOnScroll className="max-w-7xl mx-auto my-32">
                        <VideoCarousel videos={block.props.videos} />
                    </RevealOnScroll>
                )
            }
            if (block.componentName === "VStateIA") {
                return (
                    <RevealOnScroll className="max-w-7xl mx-auto my-32">
                        <VStateArchitecture accentColor={accentColor} />
                    </RevealOnScroll>
                );
            }
            if (block.componentName === "HealthScoreExplanation") {
                return <HealthScoreExplanation accentColor={accentColor} />;
            }
            if (block.componentName === "SnackHackIA") {
                return (
                    <RevealOnScroll className="max-w-6xl mx-auto my-32">
                        <SnackHackIA accentColor={accentColor} />
                    </RevealOnScroll>
                );
            }
            return null;

        case "image":
            const isUnpaddedMedia = block.src.toLowerCase().endsWith('.gif') || block.src.toLowerCase().endsWith('.mp4');
            return (
                <RevealOnScroll className="max-w-5xl mx-auto my-24">
                    <div className={`rounded-[2rem] overflow-hidden shadow-lg shadow-gray-200/40 bg-white ${!isUnpaddedMedia ? 'p-8 md:p-12 lg:p-16 border border-gray-100' : ''}`}>
                        <img
                            src={block.src}
                            alt={block.title || "Project Image"}
                            className={`w-full h-auto ${!isUnpaddedMedia ? 'rounded-2xl border border-gray-100/50' : ''}`}
                        />
                    </div>
                    {block.caption && <div className="mt-6 text-center text-gray-400 italic font-bold tracking-tighter text-lg">{block.caption}</div>}
                </RevealOnScroll>
            );

        case "user-flow-popup":
            return (
                <RevealOnScroll className="max-w-5xl mx-auto py-24">
                    <span className={subtitleClass}>{block.title || "Functional Mapping"}</span>
                    <p className="text-3xl md:text-5xl font-bold tracking-tighter text-gray-800 leading-tight max-w-4xl italic mb-20 group cursor-default transition-all hover:text-[#0F0F0F]">
                        "{block.highlight}"
                    </p>
                    <div className="grid md:grid-cols-2 gap-10 mb-20">
                        {block.steps.map((step, i) => (
                            <div key={i} className="flex gap-4 items-center text-gray-500 font-medium text-lg">
                                <span className="text-gray-300">•</span> {step}
                            </div>
                        ))}
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <button className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-[#0F0F0F] transition-colors border-b border-transparent hover:border-gray-900 pb-2">
                                View User Task Flow Diagram
                            </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-7xl w-[95vw] h-[85vh] p-0 border-none bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50">
                            <UserFlow />
                        </DialogContent>
                    </Dialog>
                </RevealOnScroll>
            );

        case "prototype":
            return (
                <RevealOnScroll className="w-full max-w-7xl mx-auto py-32">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className={subtitleClass}>{block.title || "Interactive Prototype"}</span>
                        {block.description && <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-800 leading-tight italic">{block.description}</h2>}
                    </div>

                    <div
                        className="rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-lg shadow-gray-200/50 bg-white border border-gray-100 relative h-[80vh] md:h-[800px]"
                        style={block.height ? { height: block.height } : undefined}
                    >
                        <iframe
                            src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(block.url + '&scaling=scale-down')}`}
                            className="absolute inset-0 w-full h-full border-none"
                            allowFullScreen
                        />
                    </div>
                </RevealOnScroll>
            );

        case "design-system":
            return (
                <RevealOnScroll className="max-w-5xl mx-auto py-24">
                    <span className={subtitleClass}>{block.title || "Design Language"}</span>
                    <h2 className={titleClass}>{block.highlight}</h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-3xl">{block.content}</p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {block.items.map((item, i) => (
                            <div key={i} className="flex items-center gap-6 bg-white/50 backdrop-blur-md p-6 rounded-3xl border border-gray-100 shadow-sm hover:bg-white transition-all h-full">
                                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: accentColor }} />
                                <span className="text-xl font-medium text-gray-800 leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>
            );

        case "accessibility":
            return (
                <RevealOnScroll className="max-w-5xl mx-auto py-24">
                    <span className={subtitleClass}>{block.title || "Inclusive Design"}</span>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tighter text-[#0F0F0F]">Universal accessibility standards were integrated from the start.</h2>
                        </div>
                        <div className="space-y-4">
                            {block.items.map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="mt-1">
                                        <Check className="w-5 h-5" style={{ color: accentColor }} />
                                    </div>
                                    <span className="text-gray-600 text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>
            );

        case "impact":
            return (
                <RevealOnScroll className="max-w-5xl mx-auto py-24">
                    <div
                        className="rounded-[3rem] p-12 md:p-20 text-center space-y-12"
                        style={{ backgroundColor: accentColor ? `${accentColor}10` : '#f8fafc' }}
                    >
                        <span className={subtitleClass}>{block.title || "Outcomes"}</span>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#0F0F0F]">Measuring Success</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 text-center">
                            {block.items.map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full flex items-center justify-center hover:shadow-md transition-shadow min-h-[160px]">
                                    <p className="text-xl font-medium text-gray-800 leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>
            );

        case "learnings":
            return (
                <RevealOnScroll className="max-w-5xl mx-auto py-24 space-y-24">
                    <div className="grid md:grid-cols-[1fr_2fr] gap-12">
                        <div>
                            <span className={subtitleClass}>Reflections</span>
                            <h2 className="text-4xl font-bold tracking-tighter text-[#0F0F0F]">{block.title || "Learnings"}</h2>
                        </div>
                        <div className="space-y-8">
                            {block.learnings.map((item, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="text-4xl font-bold tracking-tighter text-gray-200 group-hover:text-gray-300 transition-colors">0{i + 1}</div>
                                    <p className="text-xl text-gray-600 leading-relaxed pt-2">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-24 border-t border-gray-200">
                        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
                            <div>
                                <span className={subtitleClass}>Roadmap</span>
                                <h2 className="text-4xl font-bold tracking-tighter text-[#0F0F0F]">Future Scope</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {block.future.map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 bg-white/50 backdrop-blur-md p-6 rounded-3xl border border-gray-100 shadow-sm hover:bg-white transition-all h-full">
                                        <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: accentColor }} />
                                        <span className="text-xl font-medium text-gray-800 leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            );

        case "wireframes":
            return (
                <RevealOnScroll className="max-w-6xl mx-auto py-24">
                    <span className={subtitleClass}>{block.title || "Early Concepts"}</span>
                    <h2 className={titleClass}>{block.highlight}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {block.items.map((item, i) => (
                            <div key={i} className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white aspect-[9/16]">
                                <img src={item} alt={`Wireframe ${i + 1}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>
            );

        default:
            return null;
    }
};
