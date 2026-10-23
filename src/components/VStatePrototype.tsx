import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, MousePointerClick, RotateCcw } from "lucide-react";
import { vstatePrototype, VSTATE_PROTO_START, VSTATE_PROTO_WIDTH } from "@/data/vstatePrototype";

// Shortcuts into the journey, for viewers who'd rather jump than click through.
const chapters = [
    { label: "Sign in", frame: VSTATE_PROTO_START },
    { label: "Dashboard", frame: 0 },
    { label: "Filing form", frame: 1 },
    { label: "Cart & checkout", frame: 8 },
    { label: "Track an order", frame: 16 },
    { label: "Answer a query", frame: 19 },
    { label: "Pay an invoice", frame: 21 },
];

export const VStatePrototype = ({ accentColor = "#2563EB" }: { accentColor?: string }) => {
    const [current, setCurrent] = useState(VSTATE_PROTO_START);
    const [history, setHistory] = useState<number[]>([]);
    const [flash, setFlash] = useState(false);
    const [showHotspots, setShowHotspots] = useState(false);
    const viewport = useRef<HTMLDivElement>(null);
    const frame = vstatePrototype[current];

    // `replace` skips history, so Back never lands on a timed screen and replays it.
    const go = useCallback((to: number, replace = false) => {
        if (to === -1) {
            if (!history.length) {
                // Entered via a chapter shortcut: Back/Cancel returns to the dashboard.
                setCurrent(0);
                return;
            }
            setCurrent(history[history.length - 1]);
            setHistory(history.slice(0, -1));
            return;
        }
        if (!replace) setHistory([...history, current]);
        setCurrent(to);
    }, [current, history]);

    const restart = () => {
        setHistory([]);
        setCurrent(VSTATE_PROTO_START);
    };

    // Scroll back to the top of each new screen, as a page load would.
    useEffect(() => {
        viewport.current?.scrollTo({ top: 0 });
    }, [current]);

    // Timed transitions (e.g. "Processing payment" → confirmation).
    useEffect(() => {
        if (!frame.auto) return;
        const t = window.setTimeout(() => go(frame.auto!.to, true), frame.auto.after);
        return () => window.clearTimeout(t);
    }, [frame, go]);

    // Preload every screen reachable from this one so clicks feel instant.
    useEffect(() => {
        const targets = new Set(frame.hotspots.map((h) => h.to).filter((to) => to >= 0));
        if (frame.auto) targets.add(frame.auto.to);
        targets.forEach((to) => {
            const img = new Image();
            img.src = vstatePrototype[to].src;
        });
    }, [frame]);

    // Like Figma: clicking outside a hotspot briefly reveals where you can click.
    const revealHotspots = () => {
        setFlash(true);
        window.setTimeout(() => setFlash(false), 700);
    };

    const pct = (v: number, of: number) => `${(v / of) * 100}%`;

    return (
        <section className="w-full" aria-labelledby="vstate-proto-title">
            <div className="mb-10 max-w-3xl">
                <p className="mb-3 text-[12px] uppercase tracking-[0.18em] text-white/40">Working prototype · Client admin</p>
                <h2 id="vstate-proto-title" className="text-[24px] font-medium leading-tight tracking-[-0.03em] text-white md:text-[34px]">
                    Try the client journey yourself.
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-white/55 md:text-[17px]">
                    Sign in, start a filing from the dashboard, step through the form, check out, then track the order and answer a
                    query, all through the same links as the design prototype. Click anywhere to see what's clickable.
                </p>
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
                {chapters.map((c) => (
                    <button
                        key={c.label}
                        type="button"
                        onClick={() => { setHistory([]); setCurrent(c.frame); }}
                        className="rounded-full border border-white/10 px-4 py-2 text-[13px] text-white/60 transition-colors hover:border-white/30 hover:text-white"
                        style={current === c.frame ? { borderColor: accentColor, color: accentColor } : undefined}
                    >
                        {c.label}
                    </button>
                ))}
            </div>

            <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#0d0d0d] md:rounded-[1.75rem]">
                <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5 md:px-4">
                    <button
                        type="button"
                        onClick={() => go(-1)}
                        disabled={!history.length && (current === 0 || current === VSTATE_PROTO_START)}
                        aria-label="Back"
                        className="rounded-lg p-2 text-white/60 transition-colors hover:text-white disabled:opacity-30"
                    >
                        <ArrowLeft className="h-4 w-4" />
                    </button>
                    <button
                        type="button"
                        onClick={restart}
                        aria-label="Restart prototype"
                        className="rounded-lg p-2 text-white/60 transition-colors hover:text-white"
                    >
                        <RotateCcw className="h-4 w-4" />
                    </button>
                    <span className="ml-1 truncate text-[13px] text-white/70" aria-live="polite">{frame.title}</span>
                    <label className="ml-auto flex cursor-pointer select-none items-center gap-2 text-[12px] text-white/50">
                        <input
                            type="checkbox"
                            checked={showHotspots}
                            onChange={(e) => setShowHotspots(e.target.checked)}
                            className="h-3.5 w-3.5"
                            style={{ accentColor }}
                        />
                        <MousePointerClick className="h-3.5 w-3.5" />
                        <span className="hidden sm:inline">Show hotspots</span>
                    </label>
                </div>

                <div
                    ref={viewport}
                    className="relative overflow-y-auto bg-white"
                    style={{ aspectRatio: `${VSTATE_PROTO_WIDTH} / 1024` }}
                >
                    <div className="relative" onClick={revealHotspots}>
                        <img
                            key={frame.src}
                            src={frame.src}
                            alt={`vState prototype — ${frame.title}`}
                            className="block h-auto w-full"
                            draggable={false}
                        />
                        {frame.hotspots.map((h, i) => (
                            <button
                                key={`${current}-${i}`}
                                type="button"
                                aria-label={h.to === -1 ? "Back" : `Go to ${vstatePrototype[h.to].title}`}
                                onClick={(e) => { e.stopPropagation(); go(h.to); }}
                                className="absolute cursor-pointer rounded-md transition-colors duration-200 focus-visible:outline focus-visible:outline-2"
                                style={{
                                    left: pct(h.x, VSTATE_PROTO_WIDTH),
                                    top: pct(h.y, frame.h),
                                    width: pct(h.w, VSTATE_PROTO_WIDTH),
                                    height: pct(h.h, frame.h),
                                    backgroundColor: flash || showHotspots ? `${accentColor}33` : "transparent",
                                    boxShadow: flash || showHotspots ? `inset 0 0 0 2px ${accentColor}99` : "none",
                                    outlineColor: accentColor,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <p className="mt-4 text-[13px] text-white/40">
                {vstatePrototype.length} screens from the client admin role, linked as in the Figma prototype.
            </p>
        </section>
    );
};
