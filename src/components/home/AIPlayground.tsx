import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Volume2, VolumeX } from "lucide-react";
import { aiExperiments, type AIExperiment } from "@/data/aiExperiments";
import { useMediaQuery, useReducedMotion } from "./shared";

const MEDIA_H = 440; // px, tablet and up
const MEDIA_H_PHONE = 300; // px, below 768px wide
const SPEED = 40; // px per second
const RESUME_AFTER = 1400; // ms after a drag or wheel before auto-scroll resumes
const DRAG_THRESHOLD = 5;

type CardProps = {
  item: AIExperiment;
  mediaH: number;
  soundOn: boolean;
  onToggleSound: () => void;
};

const ExperimentCard = ({ item, mediaH, soundOn, onToggleSound }: CardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  const narrow = item.ratio < 1;
  const withSound = !!item.hasAudio && soundOn;

  // React does not keep the `muted` attribute in sync, so set the property directly.
  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = !withSound;
  }, [withSound]);

  const play = () => videoRef.current?.play().catch(() => {});
  const stop = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      // Cards without a poster keep showing the video, so rest on the same frame as before.
      v.currentTime = item.image ? 0 : 1;
    }
  };

  return (
    <article
      className="ai-card group relative flex-none overflow-hidden rounded-[18px] border border-white/10 bg-[#0d0d0d] transition-[border-color,box-shadow] duration-300 hover:border-primary/60 hover:shadow-[0_0_0_1px_hsl(var(--primary)/0.25)]"
      style={{ width: mediaH * item.ratio }}
      onMouseEnter={play}
      onMouseLeave={stop}
      onClick={() => item.href && navigate(item.href)}
      role={item.href ? "link" : undefined}
      tabIndex={item.href ? 0 : undefined}
      onKeyDown={(e) => e.key === "Enter" && item.href && navigate(item.href)}
    >
      <div className="relative overflow-hidden bg-black" style={{ height: mediaH }}>
        {item.image && (
          <img src={item.image} alt={item.title} loading="lazy" draggable={false} className={`h-full w-full object-cover ${narrow ? "object-center" : "object-top"}`} />
        )}
        {item.video && (
          <video
            ref={videoRef}
            // With no poster image, load just enough to show a frame 1s in.
            src={item.image ? item.video : `${item.video}#t=1`}
            muted={!withSound}
            loop
            playsInline
            preload={item.image ? "none" : "metadata"}
            aria-label={item.image ? undefined : item.title}
            className={`absolute inset-0 h-full w-full object-cover ${item.image ? "ai-card-video" : ""}`}
          />
        )}
        <span className="pill-dark keep-color absolute left-3 top-3 rounded-full bg-black/65 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-white backdrop-blur-md">
          {item.kind}
        </span>
        {item.video && (
          <span className="pill-dark keep-color absolute right-3 top-3 rounded-full bg-black/65 px-2.5 py-1 text-[11px] text-white/80 backdrop-blur-md transition-opacity group-hover:opacity-0">
            {narrow ? "▶" : "▶ Hover to play"}
          </span>
        )}
        {item.video && item.hasAudio && (
          <button
            type="button"
            data-no-drag
            onClick={(e) => {
              e.stopPropagation();
              onToggleSound();
            }}
            onKeyDown={(e) => e.stopPropagation()}
            aria-pressed={soundOn}
            aria-label={soundOn ? "Turn sound off" : "Turn sound on"}
            title={soundOn ? "Sound on" : "Sound off"}
            className="pill-dark keep-color absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/65 text-white/85 backdrop-blur-md transition-colors hover:bg-black/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {soundOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </button>
        )}
      </div>
    </article>
  );
};

/* Auto-scrolling, draggable belt. Copies of the list keep the loop seamless. */
const Belt = ({ items }: { items: AIExperiment[] }) => {
  const beltRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const mediaH = useMediaQuery("(min-width: 768px)") ? MEDIA_H : MEDIA_H_PHONE;
  // Enough copies that a short list still fills wide screens without a gap.
  const COPIES = items.length < 4 ? 4 : 3;
  // One preference for every card. Starts muted: browsers only allow sound after a click.
  const [soundOn, setSoundOn] = useState(false);
  const toggleSound = () => setSoundOn((on) => !on);

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
      // Buttons inside a card (e.g. the sound toggle) should click, not start a drag.
      if ((e.target as Element).closest("[data-no-drag]")) return;
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
              <ExperimentCard
                key={`${copy}-${item.title}`}
                item={item}
                mediaH={mediaH}
                soundOn={soundOn}
                onToggleSound={toggleSound}
              />
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
