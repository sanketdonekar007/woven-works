import { RevealOnScroll } from "./RevealOnScroll";
import { UserFlow } from "./UserFlow";
import { VideoCarousel } from "./VideoCarousel";
import { VStateArchitecture } from "./VStateArchitecture";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const BlockRenderer = ({ block }: { block: ProjectBlock }) => {
    switch (block.type) {
        case "rich-text":
            return (
                <RevealOnScroll className="max-w-4xl mx-auto text-center">
                    {block.title && <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{block.title}</h2>}
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">{block.content}</p>
                </RevealOnScroll>
            );

        case "problem-statement":
            return (
                <RevealOnScroll className="max-w-5xl mx-auto">
                    {block.title && <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">{block.title}</h2>}
                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
                        <p className="text-2xl text-slate-700 font-medium mb-10 italic leading-relaxed">"{block.highlight}"</p>

                        <div className="bg-red-50/50 rounded-2xl p-8">
                            <h3 className="text-sm font-bold text-red-600 mb-6 uppercase tracking-widest flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                {block.content}
                            </h3>
                            <ul className="grid md:grid-cols-2 gap-6">
                                {block.list.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                        <span className="text-red-500 mt-1.5 text-lg">✕</span>
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </RevealOnScroll>
            );

        case "role-list":
            return (
                <RevealOnScroll className="max-w-5xl mx-auto">
                    {block.title && <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">{block.title}</h2>}
                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
                        <p className="text-xl text-slate-600 mb-10 text-center max-w-3xl mx-auto">{block.highlight}</p>
                        <h3 className="text-lg font-bold text-slate-900 mb-8 text-center">{block.content}</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {block.roles.map((item, i) => {
                                const [role, desc] = item.includes(":") ? item.split(":") : [item, ""];
                                return (
                                    <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:bg-blue-50 hover:border-blue-100 transition-colors duration-300 group text-center">
                                        <div className="font-bold text-blue-600 mb-3 text-lg group-hover:scale-105 transition-transform">{role}</div>
                                        {desc && <div className="text-slate-600 leading-relaxed">{desc}</div>}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </RevealOnScroll>
            );

        case "personas":
            return (
                <RevealOnScroll className="max-w-7xl mx-auto">
                    {block.title && <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{block.title}</h2>}
                    <div className="grid md:grid-cols-3 gap-8">
                        {block.personas.map((persona, index) => (
                            <div key={index} className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col h-full hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-2">
                                <div className="mb-8 pb-8 border-b border-slate-100">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{persona.name}</h3>
                                    <div className="text-blue-600 font-medium bg-blue-50 inline-block px-3 py-1 rounded-full text-sm">{persona.role}</div>
                                </div>
                                <blockquote className="italic text-slate-600 mb-8 flex-grow text-lg leading-relaxed">"{persona.quote}"</blockquote>
                                <div className="space-y-8">
                                    <div>
                                        <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Goals
                                        </div>
                                        <ul className="space-y-3">
                                            {persona.goals.map((g, i) => (
                                                <li key={i} className="text-slate-700 flex items-start gap-3">
                                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0"></span>
                                                    {g}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span> Pain Points
                                        </div>
                                        <ul className="space-y-3">
                                            {persona.painPoints.map((p, i) => (
                                                <li key={i} className="text-slate-700 flex items-start gap-3">
                                                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2 shrink-0"></span>
                                                    {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>
            );

        case "triggers":
            return (
                <RevealOnScroll className="max-w-7xl mx-auto">
                    {block.title && <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{block.title}</h2>}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {block.triggers.map((trigger, index) => (
                            <div key={index} className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-xl transition-shadow duration-300 group">
                                <h3 className="text-lg font-bold text-slate-900 mb-6 pb-4 border-b-2 border-slate-100 group-hover:border-blue-500 transition-colors">{trigger.category}</h3>
                                <ul className="space-y-4">
                                    {trigger.terms.map((term, i) => (
                                        <li key={i} className="text-slate-600 leading-relaxed flex items-start gap-3 text-sm">
                                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0"></span>
                                            {term}
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
                <RevealOnScroll className="max-w-5xl mx-auto">
                    {block.title && <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">{block.title}</h2>}
                    <div className="grid md:grid-cols-2 gap-6">
                        {block.goals.map((goal, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl flex items-center gap-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-xl shrink-0">
                                    ✓
                                </div>
                                <span className="text-slate-700 font-medium text-lg">{goal}</span>
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>
            );

        case "info-architecture":
            return (
                <RevealOnScroll className="max-w-5xl mx-auto">
                    {block.title && <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">{block.title}</h2>}
                    <div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 text-center relative">
                        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-50"></div>
                        <p className="text-xl md:text-2xl text-slate-700 mb-12 max-w-3xl mx-auto font-light leading-relaxed">"{block.highlight}"</p>
                        <h3 className="text-sm font-bold text-slate-400 mb-8 uppercase tracking-[0.2em]">{block.content}</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {block.modules.map((module, i) => (
                                <span key={i} className="px-8 py-4 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-700 font-medium border border-slate-200 transition-colors duration-300">
                                    {module}
                                </span>
                            ))}
                        </div>
                        {block.image && (
                            <div className="mt-12">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button className="text-blue-600 hover:text-blue-800 font-medium border-b border-blue-600 hover:border-blue-800 transition-colors pb-0.5">
                                            View Visual Architecture Diagram
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-5xl w-full p-0 overflow-hidden bg-transparent border-none shadow-none">
                                        <img
                                            src={block.image}
                                            alt="Information Architecture Diagram"
                                            className="w-full h-auto rounded-lg shadow-2xl"
                                        />
                                    </DialogContent>
                                </Dialog>
                            </div>
                        )}
                        <p className="mt-10 text-slate-400 italic text-sm">This structure reduces noise and improves task focus.</p>
                    </div>
                </RevealOnScroll>
            );

        case "process-steps":
            return (
                <RevealOnScroll className="max-w-5xl mx-auto">
                    {block.title && <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">{block.title}</h2>}
                    <div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 pb-6 border-b border-slate-100">{block.content}</h3>
                        <div className="space-y-4">
                            {block.steps.map((flow, i) => (
                                <div key={i} className="flex gap-6 p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-slate-100">
                                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-lg shadow-blue-200">{i + 1}</div>
                                    <span className="text-slate-700 text-lg leading-relaxed pt-1.5">{flow}</span>
                                </div>
                            ))}
                        </div>
                        {block.highlight && <p className="mt-8 text-center text-slate-500 italic">{block.highlight}</p>}
                    </div>
                </RevealOnScroll>
            );

        case "custom-component":
            if (block.componentName === "UserFlow") {
                return (
                    <RevealOnScroll className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 my-16">
                        <UserFlow />
                    </RevealOnScroll>
                );
            }
            if (block.componentName === "VideoCarousel" && block.props?.videos) {
                return (
                    <RevealOnScroll className="max-w-7xl mx-auto my-16">
                        <VideoCarousel videos={block.props.videos} />
                    </RevealOnScroll>
                )
            }
            if (block.componentName === "VStateIA") {
                return (
                    <RevealOnScroll className="max-w-7xl mx-auto my-16 overflow-hidden">
                        {block.title && <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">{block.title}</h2>}
                        <VStateArchitecture />
                    </RevealOnScroll>
                );
            }
            return null;

        case "challenges":
            return (
                <RevealOnScroll className="max-w-7xl mx-auto">
                    {block.title && <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{block.title}</h2>}
                    <div className="grid md:grid-cols-2 gap-8">
                        {block.challenges.map((item, index) => (
                            <div key={index} className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden flex flex-col">
                                <div className="p-8 bg-rose-50 border-b border-rose-100">
                                    <div className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-2 flex items-center gap-2">
                                        <span className="w-2 h-0.5 bg-rose-500"></span> Challenge
                                    </div>
                                    <div className="text-xl font-bold text-slate-900 leading-snug">{item.challenge}</div>
                                </div>
                                <div className="p-8 bg-white flex-grow">
                                    <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2 flex items-center gap-2">
                                        <span className="w-2 h-0.5 bg-emerald-500"></span> Solution
                                    </div>
                                    <div className="text-lg text-slate-700 leading-relaxed">{item.solution}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>
            );

        case "wireframes":
            return (
                <RevealOnScroll className="max-w-5xl mx-auto">
                    {block.title && <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">{block.title}</h2>}
                    <div className="bg-slate-900 p-10 md:p-14 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 blur-[100px] opacity-20 rounded-full"></div>
                        <p className="text-xl text-slate-300 mb-10 text-center relative z-10 leading-relaxed">"{block.highlight}"</p>
                        <div className="space-y-4 relative z-10">
                            {block.items.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                                    <span className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shrink-0">W</span>
                                    <span className="text-slate-100 font-medium text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>
            );

        case "core-screens":
            return (
                <RevealOnScroll className="max-w-7xl mx-auto">
                    {block.title && <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">{block.title}</h2>}
                    {block.highlight && <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto text-xl">{block.highlight}</p>}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {block.screens.map((screen, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group aspect-square justify-center">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">📱</div>
                                <h3 className="font-bold text-slate-800 text-lg leading-tight">{screen}</h3>
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>
            );

        case "design-system":
            return (
                <RevealOnScroll className="max-w-5xl mx-auto">
                    {block.title && <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">{block.title}</h2>}
                    <div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
                        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto text-center">{block.highlight}</p>
                        <h3 className="font-bold text-slate-400 mb-6 uppercase tracking-wider text-sm text-center">Includes</h3>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {block.items.map((item, i) => (
                                <span key={i} className="px-6 py-3 bg-fuchsia-50 text-fuchsia-700 rounded-xl font-medium border border-fuchsia-100 shadow-sm hover:shadow-md transition-shadow">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>
            );

        case "accessibility":
            return (
                <RevealOnScroll className="max-w-5xl mx-auto">
                    {block.title && <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">{block.title}</h2>}
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
                        <div className="grid md:grid-cols-2 gap-6">
                            {block.items.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-6 bg-teal-50/50 rounded-2xl border border-teal-100 hover:bg-teal-50 transition-colors">
                                    <span className="text-teal-600 font-bold text-2xl">♿</span>
                                    <span className="text-slate-700 font-medium text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>
            );

        case "impact":
            return (
                <RevealOnScroll className="max-w-7xl mx-auto">
                    {block.title && <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{block.title}</h2>}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {block.items.map((item, i) => (
                            <div key={i} className="bg-gradient-to-br from-violet-500 to-purple-600 p-8 rounded-[2rem] shadow-xl shadow-purple-900/20 text-white transform hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full justify-between">
                                <div className="text-4xl mb-6 bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm">🚀</div>
                                <p className="font-bold text-xl leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>
            );

        case "learnings":
            return (
                <RevealOnScroll className="max-w-7xl mx-auto">
                    {block.title && <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{block.title}</h2>}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-amber-50/80 p-10 rounded-[2.5rem] border border-amber-100">
                            <h3 className="text-2xl font-bold text-amber-900 mb-8 flex items-center gap-3">
                                <span className="text-3xl">💡</span> Key Learnings
                            </h3>
                            <ul className="space-y-6">
                                {block.learnings.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-amber-900/80 text-lg leading-relaxed">
                                        <span className="mt-2.5 w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-indigo-50/80 p-10 rounded-[2.5rem] border border-indigo-100">
                            <h3 className="text-2xl font-bold text-indigo-900 mb-8 flex items-center gap-3">
                                <span className="text-3xl">🔮</span> Future Scope
                            </h3>
                            <ul className="space-y-6">
                                {block.future.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-indigo-900/80 text-lg leading-relaxed">
                                        <span className="mt-2.5 w-2 h-2 rounded-full bg-indigo-500 shrink-0"></span>
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </RevealOnScroll>
            );

        case "image":
            return (
                <RevealOnScroll className="max-w-5xl mx-auto my-16">
                    {block.title && <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">{block.title}</h2>}
                    <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100">
                        <img src={block.src} alt={block.title || "Project Image"} className="w-full h-auto" />
                        {block.caption && <div className="p-4 bg-slate-50 border-t border-slate-100 text-center text-slate-500 italic">{block.caption}</div>}
                    </div>
                </RevealOnScroll>
            );

        case "user-flow-popup":
            return (
                <RevealOnScroll className="max-w-5xl mx-auto">
                    {block.title && <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">{block.title}</h2>}
                    <div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 text-center relative">
                        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 opacity-50"></div>
                        <p className="text-xl md:text-2xl text-slate-700 mb-12 max-w-3xl mx-auto font-light leading-relaxed">"{block.highlight}"</p>
                        <h3 className="text-sm font-bold text-slate-400 mb-8 uppercase tracking-[0.2em]">{block.content}</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {block.steps.map((step, i) => (
                                <span key={i} className="px-8 py-4 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-700 font-medium border border-slate-200 transition-colors duration-300">
                                    {step}
                                </span>
                            ))}
                        </div>
                        <div className="mt-12">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <button className="text-blue-600 hover:text-blue-800 font-medium border-b border-blue-600 hover:border-blue-800 transition-colors pb-0.5">
                                        View User Task Flow Diagram
                                    </button>
                                </DialogTrigger>
                                <DialogContent className="max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-white border-none shadow-2xl p-0">
                                    <UserFlow />
                                </DialogContent>
                            </Dialog>
                        </div>
                        <p className="mt-10 text-slate-400 italic text-sm">Visualizing the complexity to ensure simplicity.</p>
                    </div>
                </RevealOnScroll>
            );

        default:
            return null;
    }
};
