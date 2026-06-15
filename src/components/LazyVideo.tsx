import { useEffect, useRef } from "react";

interface LazyVideoProps {
    src: string;
    className?: string;
}

// Plays only while in (or near) the viewport, pausing off-screen videos so they
// stop decoding/compositing and don't compete with scroll performance.
export const LazyVideo = ({ src, className }: LazyVideoProps) => {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.play().catch(() => {});
                } else {
                    el.pause();
                }
            },
            { rootMargin: "200px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <video
            ref={ref}
            src={src}
            muted
            loop
            playsInline
            preload="metadata"
            className={className}
        />
    );
};
