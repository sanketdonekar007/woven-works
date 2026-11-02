import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { aiExperiments, type AIExperiment } from "@/data/aiExperiments";
import { useReducedMotion } from "./shared";

const MEDIA_H = 300; // px
const SPEED = 40; // px per second
const RESUME_AFTER = 1400; // ms after a drag or wheel before auto-scroll resumes
const DRAG_THRESHOLD = 5;

const ExperimentCard = ({ item }: { item: AIExperiment }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  const play = () => videoRef.current?.play().catch(() => {});
  const stop = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <article
      className="ai-card group relative flex-none overflow-hidden rounded-[18px] border border-white/10 bg-[#0d0d0d] transition-[border-color,box-shadow] duration-300 hover:border-primary/60 hover:shadow-[0_0_0_1px_hsl(var(--primary)/0.25)]"
      style={{ width: MEDIA_H * item.ratio }}
      onMouseEnter={play}
      onMouseLeave={stop}
      onClick={() => item.href && navigate(item.href)}
      role={item.href ? "link" : undefined}
      tabIndex={item.href ? 0 : undefined}
      onKeyDown={(e) => e.key === "Enter" && item.href && navigate(item.href)}
    >
      <div className="relative overflow-hidden bg-black" style={{ height: MEDIA_H }}>
        <img src={item.image} alt={item.title} loading="lazy" draggable={false} className="h-full w-full object-cover object-top" />
        {item.video && (
          <video
            ref={videoRef}
            src={item.video}
            muted
            loop
            playsInline
            preload="none"
            className="ai-card-video absolute inset-0 h-full w-full object-cover"
          />
        )}
        <span className="pill-dark keep-color absolute left-3 top-3 rounded-full bg-black/65 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-white backdrop-blur-md">
          {item.kind}
        </span>
        {item.video && (
          <span className="pill-dark keep-color absolute right-3 top-3 rounded-full bg-black/65 px-2.5 py-1 text-[11px] text-white/80 backdrop-blur-md transition-opacity group-hover:opacity-0">
            ▶ Hover to play
          </span>
        )}
      </div>
      <div className="border-t border-white/10 px-4 py-3.5">
        <p className="text-[15px] font-medium leading-snug text-white/90">{item.title}</p>
        {item.tool && <p className="keep-color mt-1 text-[13px] font-medium text-primary">{item.tool}</p>}
      </div>
    </article>
  );
};

/* Auto-scrolling, draggable belt. Copies of the list keep the loop seamless. */
const Belt = ({ items }: { items: AIExperiment[] }) => {
  const beltRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const COPIES = 3;

  useEffect(() => {
    const belt = beltRef.current;
    if (!belt) return;
    let pos = belt.scrollLeft;
    let hovering = false;
    let dragging = false;
    let resumeAt = 0;
    let last = performance.now();
    let frame = 0;
    let startX = 0;
    let startScroll = 0;
    let moved = 0;

    const loopWidth = () => belt.scrollWidth / COPIES;

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      const w = loopWidth();
      if (!reduced && !hovering && !dragging && now >= resumeAt && w > 0) pos += SPEED * dt;
      else pos = belt.scrollLeft;
      if (w > 0) {
        if (pos >= w) pos -= w;
        else if (pos < 0) pos += w;
      }
      if (Math.abs(pos - belt.scrollLeft) > 0.01) belt.scrollLeft = pos;
      frame = requestAnimationFrame(tick);
    };

    const pauseBriefly = () => (resumeAt = performance.now() + RESUME_AFTER);
    const onEnter = () => (hovering = true);
    const onLeave = () => (hovering = false);
    const onDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      dragging = true;
      moved = 0;
      startX = e.clientX;
      startScroll = belt.scrollLeft;
      belt.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      belt.scrollLeft = startScroll - dx;
    };
    const onUp = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      pauseBriefly();
      if (belt.hasPointerCapture(e.pointerId)) belt.releasePointerCapture(e.pointerId);
    };
    // A drag should not count as a click on the card underneath.
    const onClick = (e: MouseEvent) => {
      if (moved > DRAG_THRESHOLD) {
        e.preventDefault();
        e.stopPropagation();
        moved = 0;
      }
    };

    belt.addEventListener("pointerenter", onEnter);
    belt.addEventListener("pointerleave", onLeave);
    belt.addEventListener("pointerdown", onDown);
    belt.addEventListener("pointermove", onMove);
    belt.addEventListener("pointerup", onUp);
    belt.addEventListener("pointercancel", onUp);
    belt.addEventListener("wheel", pauseBriefly, { passive: true });
    belt.addEventListener("touchstart", pauseBriefly, { passive: true });
    belt.addEventListener("click", onClick, true);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      belt.removeEventListener("pointerenter", onEnter);
      belt.removeEventListener("pointerleave", onLeave);
      belt.removeEventListener("pointerdown", onDown);
      belt.removeEventListener("pointermove", onMove);
      belt.removeEventListener("pointerup", onUp);
      belt.removeEventListener("pointercancel", onUp);
      belt.removeEventListener("wheel", pauseBriefly);
      belt.removeEventListener("touchstart", pauseBriefly);
      belt.removeEventListener("click", onClick, true);
    };
  }, [reduced, items.length]);

  return (
    <div className="relative w-full">
      <div ref={beltRef} className="ai-belt">
        {Array.from({ length: COPIES }, (_, copy) => (
          <div key={copy} className="flex flex-none gap-5" aria-hidden={copy > 0 || undefined}>
            {items.map((item) => (
              <ExperimentCard key={`${copy}-${item.title}`} item={item} />
            ))}
          </div>
        ))}
      </div>
      <div className="ai-fade-left pointer-events-none absolute inset-y-0 left-0 w-[12%] min-w-[3rem]" style={{ background: "linear-gradient(to right, #000, transparent)" }} />
      <div className="ai-fade-right pointer-events-none absolute inset-y-0 right-0 w-[12%] min-w-[3rem]" style={{ background: "linear-gradient(to left, #000, transparent)" }} />
    </div>
  );
};

export const AIPlayground = () => <Belt items={aiExperiments} />;
