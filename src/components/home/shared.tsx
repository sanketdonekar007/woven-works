import { useEffect, useRef, useState } from "react";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
};

export const useReducedMotion = () => useMediaQuery("(prefers-reduced-motion: reduce)");

/* ─── Section divider: rule · sparkle · LABEL · sparkle · rule ─── */

const Sparkle = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="w-[0.85em] h-[0.85em] flex-none text-primary">
    <path
      d="M12 0c.55 6.6 4.85 10.9 11.45 11.45C16.85 12 12.55 16.3 12 22.9c-.55-6.6-4.85-10.9-11.45-11.45C7.15 10.9 11.45 6.6 12 0Z"
      fill="currentColor"
    />
  </svg>
);

export const RowLabel = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto flex max-w-[860px] items-center gap-3 text-[15px] md:text-[17px] ${className}`}>
    <span aria-hidden className="row-label-rule row-label-rule--left" />
    <Sparkle />
    <span className="uppercase tracking-[0.16em] font-medium text-white/85 whitespace-nowrap">{children}</span>
    <Sparkle />
    <span aria-hidden className="row-label-rule row-label-rule--right" />
  </div>
);

/* ─── Scroll-linked text: words brighten as the paragraph scrolls through view ─── */

const DIM = 0.22;

export const ScrollTextReveal = ({
  paragraphs,
}: {
  paragraphs: { text: string; className?: string }[];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const words = Array.from(root.querySelectorAll<HTMLSpanElement>("[data-word]"));
    if (reduced) {
      words.forEach((w) => (w.style.opacity = "1"));
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = root.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the top reaches 80% of the viewport, 1 when the bottom reaches 45%.
      const start = vh * 0.8;
      const end = vh * 0.45;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end + rect.height)));
      const lit = progress * words.length;
      words.forEach((w, i) => {
        const t = Math.min(1, Math.max(0, lit - i));
        w.style.opacity = String(DIM + (1 - DIM) * t);
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduced]);

  return (
    <div ref={ref} className="flex flex-col gap-7">
      {paragraphs.map((p) => (
        <p key={p.text} className={p.className} aria-label={p.text}>
          {p.text.split(" ").map((word, i) => (
            <span key={i} aria-hidden data-word-wrap>
              {i > 0 && " "}
              <span data-word className="transition-opacity duration-150" style={{ opacity: DIM }}>
                {word}
              </span>
            </span>
          ))}
        </p>
      ))}
    </div>
  );
};

/* ─── Floating chips that drift on their own and lean toward the cursor ─── */

export type FloatingChip = {
  label: string;
  icon: React.ReactNode;
  className: string; // absolute position (desktop)
  note: string; // revealed on hover / tap
  accent: string;
  duration?: number;
  delay?: number;
};

const MAGNET_RADIUS = 300;
const MAGNET_PULL = 16;

/* Hover (or tap) lifts the chip, lights its border in the tool's colour and reveals the note. */
const ChipBody = ({
  chip,
  compact = false,
  open: controlledOpen,
  onOpenChange,
}: {
  chip: FloatingChip;
  compact?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) => {
  const [localOpen, setLocalOpen] = useState(false);
  const open = controlledOpen ?? localOpen;
  const setOpen = onOpenChange ?? setLocalOpen;
  return (
    <button
      type="button"
      aria-expanded={open}
      onPointerEnter={(e) => e.pointerType === "mouse" && setOpen(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setOpen(false)}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
      data-open={open || undefined}
      className={`tool-chip pointer-events-auto relative block cursor-pointer text-left outline-none ${open ? "z-20" : ""}`}
      style={{ "--chip-accent": chip.accent } as React.CSSProperties}
    >
      <div
        className={`float-chip float-chip-body tool-chip__body border border-white/10 bg-white/[0.04] backdrop-blur-md ${
          compact ? "rounded-xl px-3 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.4)]" : "rounded-2xl px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
        }`}
        style={{ "--float-duration": `${chip.duration ?? 8}s`, "--float-delay": `${chip.delay ?? 0}s` } as React.CSSProperties}
      >
        <div className={`flex items-center ${compact ? "gap-2" : "gap-2.5"}`}>
          <span className={compact ? "origin-left scale-[0.85]" : ""}>{chip.icon}</span>
          <span className={`font-medium text-white/80 ${compact ? "-ml-1 text-[13px]" : "text-[15px]"}`}>{chip.label}</span>
        </div>
        {!compact && (
          <div className="tool-chip__note grid">
            <span className="overflow-hidden whitespace-nowrap text-[13px] font-light text-white/55">
              <span className="block pt-1.5">{chip.note}</span>
            </span>
          </div>
        )}
      </div>
      {/* Mobile: the note pops out under the chip so the rows never reflow. */}
      {compact && (
        <span className="tool-chip__pop keep-color pointer-events-none absolute left-1/2 top-full z-30 mt-2 whitespace-nowrap rounded-lg px-2.5 py-1.5 text-[12px] font-light text-white">
          {chip.note}
        </span>
      )}
    </button>
  );
};

const Chip = ({ chip }: { chip: FloatingChip }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    let target = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };
    let frame = 0;

    const tick = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      el.style.transform = `translate3d(${current.x.toFixed(2)}px, ${current.y.toFixed(2)}px, 0)`;
      frame = Math.abs(target.x - current.x) + Math.abs(target.y - current.y) > 0.05 ? requestAnimationFrame(tick) : 0;
    };
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const dist = Math.hypot(dx, dy);
      const pull = dist > MAGNET_RADIUS ? 0 : (1 - dist / MAGNET_RADIUS) * MAGNET_PULL;
      target = { x: (dx / (dist || 1)) * pull, y: (dy / (dist || 1)) * pull };
      if (!frame) frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [reduced]);

  return (
    <div className={`pointer-events-none absolute z-10 hidden md:block ${chip.className}`}>
      <div ref={ref}>
        <ChipBody chip={chip} />
      </div>
    </div>
  );
};

const AUTO_CLOSE_MS = 4000;
const PEEK_MS = 2600;

/* Mobile: chips in staggered rows above and below the content. Tap a chip to reveal its note.
   One chip is open at a time; it closes on a tap elsewhere or after a few seconds. The first
   chip opens briefly when the section first scrolls into view, to show the chips respond. */
export const MobileChipFrame = ({
  chips,
  split,
  children,
}: {
  chips: FloatingChip[];
  split: number; // chips before the content; the rest go after it
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const touched = useRef(false);
  const reduced = useReducedMotion();
  const mobile = useMediaQuery("(max-width: 767px)");

  // Tap anywhere outside the open chip closes it (focus/blur is unreliable on iOS).
  useEffect(() => {
    if (openIdx === null) return;
    const onDown = (e: PointerEvent) => {
      const target = e.target as Element | null;
      if (!target?.closest(`[data-chip-index="${openIdx}"]`)) setOpenIdx(null);
    };
    const timer = window.setTimeout(() => setOpenIdx(null), AUTO_CLOSE_MS);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      window.clearTimeout(timer);
    };
  }, [openIdx]);

  // One-time peek at the first chip.
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced || !mobile) return;
    let timer = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        timer = window.setTimeout(() => {
          if (touched.current) return;
          setOpenIdx(0);
          window.setTimeout(() => !touched.current && setOpenIdx((cur) => (cur === 0 ? null : cur)), PEEK_MS);
        }, 600);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, [reduced, mobile]);

  const row = (items: FloatingChip[], offset: number, className: string) => (
    <div className={`flex flex-wrap items-start justify-center gap-x-3 gap-y-4 px-6 md:hidden ${className}`}>
      {items.map((chip, j) => {
        const i = offset + j;
        return (
          <div key={chip.label} data-chip-index={i} className={j % 2 ? "translate-y-2" : "-translate-y-1"}>
            <ChipBody
              chip={chip}
              compact
              open={openIdx === i}
              onOpenChange={(next) => {
                touched.current = true;
                setOpenIdx((cur) => (next ? i : cur === i ? null : cur));
              }}
            />
          </div>
        );
      })}
    </div>
  );

  return (
    <div ref={ref}>
      <p className="mb-6 text-center text-[12px] font-light tracking-[0.08em] text-white/35 md:hidden">Tap a tool to see how I use it</p>
      {row(chips.slice(0, split), 0, "mb-16")}
      {children}
      {row(chips.slice(split), split, "mt-10")}
    </div>
  );
};

export const FloatingChips = ({ chips }: { chips: FloatingChip[] }) => (
  <>
    {chips.map((chip) => (
      <Chip key={chip.label} chip={chip} />
    ))}
  </>
);
