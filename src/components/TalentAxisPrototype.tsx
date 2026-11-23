import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ExternalLink, MousePointerClick, RotateCcw } from "lucide-react";
import { talentaxisPrototype, TALENTAXIS_LIVE_URL, TALENTAXIS_PROTO_START, TALENTAXIS_PROTO_WIDTH } from "@/data/talentaxisPrototype";

const FIGMA_PROTO =
    "https://www.figma.com/proto/DUA2LDGEHCEuzafxOObmk0/Talentaxis-New?node-id=18442-5953&starting-point-node-id=18442-5953";

// Shortcuts into the journey, for people who'd rather jump than tap through.
const chapters = [
    { label: "Sign in", frame: 55 },
    { label: "Dashboard", frame: 0 },
    { label: "AI matches", frame: 4 },
    { label: "Why ranked 92", frame: 5 },
    { label: "Pipeline", frame: 8 },
    { label: "Schedule an interview", frame: 15 },
    { label: "Write feedback", frame: 22 },
    { label: "Post a job with AI", frame: 28 },
    { label: "Add candidates", frame: 40 },
    { label: "Make an offer", frame: 47 },
];

export const TalentAxisPrototype = ({ accentColor = "#1A8CFF" }: { accentColor?: string }) => {
    const [current, setCurrent] = useState(TALENTAXIS_PROTO_START);
    const [history, setHistory] = useState<number[]>([]);
    const [flash, setFlash] = useState(false);
    const [showHotspots, setShowHotspots] = useState(false);
    const viewport = useRef<HTMLDivElement>(null);
    const frame = talentaxisPrototype[current];

    // `replace` skips history, so Back never lands on a timed screen and replays it.
    const go = useCallback(
        (to: number, replace = false) => {
            if (to === -1) {
                if (!history.length) {
                    setCurrent(TALENTAXIS_PROTO_START);
                    return;
                }
                setCurrent(history[history.length - 1]);
                setHistory(history.slice(0, -1));
                return;
            }
            if (!replace) setHistory([...history, current]);
            setCurrent(to);
        },
        [current, history],
    );

    const restart = () => {
        setHistory([]);
        setCurrent(TALENTAXIS_PROTO_START);
    };

    // Each new screen starts at the top, as it would in the app.
    useEffect(() => {
        viewport.current?.scrollTo({ top: 0 });
    }, [current]);

    // Timed transitions (re-ranking → updated matches).
    useEffect(() => {
        if (!frame.auto) return;
        const t = window.setTimeout(() => go(frame.auto!.to, true), frame.auto.after);
        return () => window.clearTimeout(t);
    }, [frame, go]);

    // Preload every screen reachable from this one so taps feel instant.
    useEffect(() => {
        const targets = new Set(frame.hotspots.map((h) => h.to).filter((to) => to >= 0));
        if (frame.auto) targets.add(frame.auto.to);
        targets.forEach((to) => {
            const img = new Image();
            img.src = talentaxisPrototype[to].src;
        });
    }, [frame]);

    // Like Figma: tapping outside a hotspot briefly shows where you can tap.
    const revealHotspots = () => {
        setFlash(true);
        window.setTimeout(() => setFlash(false), 700);
    };

    const pct = (v: number, of: number) => `${(v / of) * 100}%`;

    return (
        <section className="w-full" aria-labelledby="ta-proto-title">
            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
                <div className="max-w-xl">
                    <p className="mb-3 text-[12px] uppercase tracking-[0.18em] text-white/40">Working prototype · Recruiter app</p>
                    <h2 id="ta-proto-title" className="text-[26px] font-semibold leading-tight tracking-[-0.03em] text-white md:text-[36px]">
                        Tap through a recruiter's morning.
                    </h2>
                    <p className="mt-4 text-[15px] leading-7 text-white/55 md:text-[17px]">
                        Sign in (or set up a new workspace), land on the dashboard, open a job's AI matches and ask why
                        someone ranked 92, then move a candidate along and send them a booking link. Or go end to end: post
                        a job with AI, bulk-upload résumés, and build, send and close an offer. These are the real screens,
                        linked the way the Figma prototype links them. Tap anywhere to see what's tappable.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {chapters.map((c) => (
                            <button
                                key={c.label}
                                type="button"
                                onClick={() => {
                                    setHistory([]);
                                    setCurrent(c.frame);
                                }}
                                className="rounded-full border border-white/10 px-4 py-2 text-[13px] text-white/60 transition-colors hover:border-white/30 hover:text-white"
                                style={current === c.frame ? { borderColor: accentColor, color: accentColor } : undefined}
                            >
                                {c.label}
                            </button>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-white/45">
                        <span>
                            {talentaxisPrototype.length} of the recruiter app's screens, from a design that covers 25 flows.
                        </span>
                        <a
                            href={TALENTAXIS_LIVE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-white/70 underline-offset-4 hover:text-white hover:underline"
                        >
                            See it live <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                        <a
                            href={FIGMA_PROTO}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-white/70 underline-offset-4 hover:text-white hover:underline"
                        >
                            Open it in Figma <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                    </div>
                </div>

                {/* Phone */}
                <div className="mx-auto w-full max-w-[340px]">
                    <div className="mb-3 flex items-center gap-1">
                        <button
                            type="button"
                            onClick={() => go(-1)}
                            disabled={!history.length}
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
                        <span className="ml-1 truncate text-[13px] text-white/70" aria-live="polite">
                            {frame.title}
                        </span>
                        <label className="ml-auto flex cursor-pointer select-none items-center gap-2 text-[12px] text-white/50">
                            <input
                                type="checkbox"
                                checked={showHotspots}
                                onChange={(e) => setShowHotspots(e.target.checked)}
                                className="h-3.5 w-3.5"
                                style={{ accentColor }}
                            />
                            <MousePointerClick className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline">Hotspots</span>
                        </label>
                    </div>

                    <div className="rounded-[46px] border border-white/15 bg-[#111] p-[10px] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]">
                        <div
                            ref={viewport}
                            className="ta-phone-scroll relative overflow-y-auto rounded-[36px] bg-white"
                            style={{ aspectRatio: `${TALENTAXIS_PROTO_WIDTH} / 844` }}
                        >
                            <div className="relative" onClick={revealHotspots}>
                                <img
                                    key={frame.src}
                                    src={frame.src}
                                    alt={`TalentAxis recruiter app: ${frame.title}`}
                                    className="block h-auto w-full"
                                    draggable={false}
                                />
                                {frame.hotspots.map((h, i) => (
                                    <button
                                        key={`${current}-${i}`}
                                        type="button"
                                        aria-label={h.to === -1 ? "Back" : `Go to ${talentaxisPrototype[h.to].title}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            go(h.to);
                                        }}
                                        className="absolute cursor-pointer rounded-md transition-colors duration-200 focus-visible:outline focus-visible:outline-2"
                                        style={{
                                            left: pct(h.x, TALENTAXIS_PROTO_WIDTH),
                                            top: pct(h.y, frame.h),
                                            width: pct(h.w, TALENTAXIS_PROTO_WIDTH),
                                            height: pct(h.h, frame.h),
                                            backgroundColor:
                                                (flash || showHotspots) && h.w < TALENTAXIS_PROTO_WIDTH ? `${accentColor}33` : "transparent",
                                            boxShadow:
                                                (flash || showHotspots) && h.w < TALENTAXIS_PROTO_WIDTH ? `inset 0 0 0 2px ${accentColor}99` : "none",
                                            outlineColor: accentColor,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
