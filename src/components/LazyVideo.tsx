import { useEffect, useRef } from "react";

interface LazyVideoProps {
    src: string;
    className?: string;
    poster?: string;
}

// Plays only while in (or near) the viewport, pausing off-screen videos so they
// stop decoding/compositing and don't compete with scroll performance.
export const LazyVideo = ({ src, className, poster }: LazyVideoProps) => {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Reassert the properties before every play attempt. Some browsers
        // restore media state without preserving the autoplay eligibility.
        el.muted = true;
        el.defaultMuted = true;
        el.loop = true;

        const play = () => {
            if (!document.hidden) el.play().catch(() => {});
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    play();
                } else {
                    el.pause();
                }
            },
            { rootMargin: "200px" }
        );

        observer.observe(el);
        el.addEventListener("canplay", play);
        el.addEventListener("loadeddata", play);
        const onEnded = () => {
            el.currentTime = 0;
            play();
        };
        const onVisibilityChange = () => {
            if (!document.hidden) play();
        };
        el.addEventListener("ended", onEnded);
        document.addEventListener("visibilitychange", onVisibilityChange);

        play();

        return () => {
            observer.disconnect();
            el.removeEventListener("canplay", play);
            el.removeEventListener("loadeddata", play);
            el.removeEventListener("ended", onEnded);
            document.removeEventListener("visibilitychange", onVisibilityChange);
        };
    }, []);

    return (
        <video
            ref={ref}
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={className}
        />
    );
};
