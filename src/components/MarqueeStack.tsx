import React from 'react';
import TextReveal from './TextReveal';
import { Heart, Terminal, Video, Route, Search } from 'lucide-react';

export const techStack = [
    { 
        name: "Figma", 
        description: "Go to design tool", 
        img: "https://api.iconify.design/logos/figma.svg" 
    },
    { 
        name: "Lovable", 
        description: "MVP designing", 
        icon: <Heart className="w-5 h-5 text-[#FF5A5F] fill-[#FF5A5F]" />
    },
    { 
        name: "Framer", 
        description: "Web design", 
        img: "https://api.iconify.design/logos/framer.svg" 
    },
    { 
        name: "GPT", 
        description: "Planning & Ideation", 
        img: "https://api.iconify.design/logos/openai-icon.svg" 
    },
    { 
        name: "Claude code", 
        description: "Bring my design to codebase", 
        icon: <Terminal className="w-5 h-5 text-[#D97757]" />
    },
    { 
        name: "Jitter", 
        description: "Bring motion to add flair", 
        icon: <Video className="w-5 h-5 text-[#A56EFF] fill-[#A56EFF]" />
    },
    { 
        name: "Magic path", 
        description: "Playing around new tool", 
        icon: <Route className="w-5 h-5 text-[#10B981]" />
    },
    { 
        name: "Searching", 
        description: "Exploring every tool helps design", 
        icon: <Search className="w-5 h-5 text-[#3B82F6]" />
    }
];

export const MarqueeStack = () => {
    return (
        <section className="mb-32 w-full pt-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
                <div className="lg:col-span-4">
                    <TextReveal
                        as="h3"
                        text="My Toolkit & Stack"
                        className="text-4xl font-bold tracking-tight block text-foreground leading-[1.1] font-heading"
                    />
                </div>
                <div className="lg:col-span-8">
                    <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                        The tools I use daily to bridge the gap between human needs and business objectives.
                    </p>
                    
                    {/* Replaced overlapping carousel with a precision static grid to match layout bounds */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                        {techStack.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4 px-5 py-4 rounded-[16px] bg-card dark:bg-[#1A1A1A] border border-border/50 dark:border-white/5 transition-transform hover:-translate-y-1 hover:shadow-xl group"
                            >
                                <div className="w-12 h-12 flex shrink-0 items-center justify-center rounded-xl bg-muted dark:bg-black/40 border border-border/50 dark:border-white/5 group-hover:bg-background dark:group-hover:bg-white/10 transition-colors">
                                    {item.img ? (
                                        <img src={item.img} alt={item.name} className="w-6 h-6 object-contain" />
                                    ) : (
                                        item.icon
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-foreground font-semibold text-sm">{item.name}</span>
                                    <span className="text-muted-foreground text-xs mt-0.5">{item.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarqueeStack;
