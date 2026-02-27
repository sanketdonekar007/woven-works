import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface TextRevealProps {
    text: string;
    className?: string;
    wordClassName?: string;
    delay?: number; // Base delay in ms
    stagger?: number; // Delay between words in ms
    threshold?: number; // Intersection threshold
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
    highlightWords?: string[];
    highlightClassName?: string;
}

export const TextReveal = ({
    text,
    className,
    wordClassName,
    delay = 0,
    stagger = 30, // 30ms default stagger
    threshold = 0.1,
    as: Component = 'span',
    highlightWords,
    highlightClassName
}: TextRevealProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    const words = text.split(" ");

    return (
        <Component
            ref={ref as any}
            className={cn("inline-block", className)}
            aria-label={text}
        >
            {words.map((word, i) => (
                <span
                    key={`${word}-${i}`}
                    className="inline-block overflow-hidden align-bottom mr-[0.25em] last:mr-0 leading-[1.2] pb-[0.1em]"
                >
                    <span
                        className={cn(
                            "inline-block transition-transform duration-700 ease-[cubic-bezier(0.2,0.65,0.3,0.9)] will-change-transform translate-y-[120%]",
                            isVisible && "translate-y-0",
                            wordClassName,
                            highlightWords?.includes(word.replace(/[^a-zA-Z0-9+]/g, '')) && highlightClassName
                        )}
                        style={{ transitionDelay: `${delay + (i * stagger)}ms` }}
                    >
                        {word}
                    </span>
                </span>
            ))}
        </Component>
    );
};

export default TextReveal;

