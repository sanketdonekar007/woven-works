
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in ms
  threshold?: number; // Intersection threshold (0 to 1)
  id?: string;
}

export const RevealOnScroll = ({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  id
}: RevealOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Very tall blocks can never reach the ratio threshold on short viewports,
        // so also reveal once they cover a quarter of the visible area.
        const coversViewport = !!entry.rootBounds && entry.intersectionRect.height >= entry.rootBounds.height * 0.25;
        if (entry.isIntersecting && (entry.intersectionRatio >= threshold || coversViewport)) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => (threshold * i) / 10),
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is fully in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      id={id}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
