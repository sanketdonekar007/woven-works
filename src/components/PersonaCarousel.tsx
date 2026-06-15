import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PersonasBlock } from "@/data/projects";

type Persona = PersonasBlock["personas"][number];

const getInitials = (name: string) =>
    name
        .split(/\s+/)
        .filter((part) => /^[A-Za-z]/.test(part))
        .map((part) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

const ListGroup = ({ label, items, dotColor }: { label: string; items: string[]; dotColor: string }) => (
    <div>
        <p className="text-[11px] font-medium text-white/30 uppercase tracking-[0.18em] mb-3">{label}</p>
        <ul className="space-y-2.5">
            {items.map((item, i) => (
                <li key={i} className="flex gap-2.5 items-start">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[7px]" style={{ backgroundColor: dotColor }} />
                    <span className="text-[14px] text-white/55 leading-[1.6]">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

export const PersonaCarousel = ({ personas, accentColor = "#3b82f6" }: { personas: Persona[]; accentColor?: string }) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;
        setCurrent(api.selectedScrollSnap());
        api.on("select", () => setCurrent(api.selectedScrollSnap()));
    }, [api]);

    const showNav = personas.length > 1;

    return (
        <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
            <CarouselContent>
                {personas.map((persona, index) => (
                    <CarouselItem key={index}>
                        <div className="rounded-[1.75rem] md:rounded-[2rem] border border-white/[0.07] bg-white/[0.02] overflow-hidden">

                            {/* Header */}
                            <div className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
                                <span className="text-[12px] tracking-[0.22em] uppercase font-light text-white/30">
                                    Persona {String(index + 1).padStart(2, "0")}
                                </span>
                                {showNav && (
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => api?.scrollPrev()}
                                            aria-label="Previous persona"
                                            className="w-8 h-8 rounded-full flex items-center justify-center border border-white/15 text-white/60 hover:bg-white/10 hover:text-white transition-all duration-300"
                                        >
                                            <ChevronLeft className="w-3.5 h-3.5" />
                                        </button>
                                        <button
                                            onClick={() => api?.scrollNext()}
                                            aria-label="Next persona"
                                            className="w-8 h-8 rounded-full flex items-center justify-center border border-white/15 text-white/60 hover:bg-white/10 hover:text-white transition-all duration-300"
                                        >
                                            <ChevronRight className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Body */}
                            <div className="grid md:grid-cols-[240px_1fr] gap-8 md:gap-14 p-6 md:p-10 pt-6">

                                {/* Photo + meta */}
                                <div className="flex flex-row md:flex-col gap-5 md:gap-5">
                                    <div className="w-28 h-28 md:w-full md:h-auto md:aspect-[4/5] rounded-2xl overflow-hidden flex-shrink-0 bg-white/[0.04]">
                                        {persona.image ? (
                                            <img src={persona.image} alt={persona.name} className="w-full h-full object-cover object-top" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-[28px] md:text-[40px] font-medium text-white/70" style={{ background: `linear-gradient(135deg, ${accentColor}33, ${accentColor}0d)` }}>
                                                {getInitials(persona.name)}
                                            </div>
                                        )}
                                    </div>
                                    {persona.meta && (
                                        <div className="flex flex-col justify-center md:justify-start">
                                            <p className="text-[11px] font-medium text-white/30 uppercase tracking-[0.18em] mb-1.5">Profile</p>
                                            <p className="text-[14px] text-white/55 font-light leading-[1.6]">{persona.meta}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-7 min-w-0">
                                    <div>
                                        <span className="text-[12px] tracking-[0.22em] uppercase font-medium" style={{ color: accentColor }}>
                                            {persona.role}
                                        </span>
                                        <h3 className="text-[26px] md:text-[34px] font-medium text-white leading-[1.1] tracking-[-0.01em] mt-2">
                                            {persona.name}
                                        </h3>
                                        {persona.quote && (
                                            <p className="text-[15px] md:text-[16px] text-white/45 italic font-light leading-[1.7] mt-4 border-l-2 pl-4" style={{ borderColor: `${accentColor}60` }}>
                                                {persona.quote}
                                            </p>
                                        )}
                                    </div>

                                    {persona.traits && persona.traits.length > 0 && (
                                        <div>
                                            <p className="text-[11px] font-medium text-white/30 uppercase tracking-[0.18em] mb-2">Personality Traits</p>
                                            <p className="text-[15px] md:text-[16px] text-white/65 font-light leading-[1.6]">
                                                {persona.traits.join(", ")}
                                            </p>
                                        </div>
                                    )}

                                    <div className="grid sm:grid-cols-2 gap-x-10 gap-y-7 pt-1 border-t border-white/[0.07]">
                                        <div className="flex flex-col gap-7 pt-7">
                                            <ListGroup label="Goals" items={persona.goals} dotColor={accentColor} />
                                            {persona.wants && persona.wants.length > 0 && (
                                                <ListGroup label="Wants & Needs" items={persona.wants} dotColor={accentColor} />
                                            )}
                                        </div>
                                        <div className="pt-7">
                                            <ListGroup label="Pain Points" items={persona.painPoints} dotColor="rgba(255,255,255,0.25)" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            {/* Dots */}
            {showNav && (
                <div className="flex justify-center items-center gap-2 mt-6">
                    {personas.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => api?.scrollTo(i)}
                            aria-label={`Go to persona ${i + 1}`}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-white" : "w-1.5 bg-white/20 hover:bg-white/35"}`}
                        />
                    ))}
                </div>
            )}
        </Carousel>
    );
};
