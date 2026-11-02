import { useEffect, useRef, useState } from "react";
import { Crosshair, FlaskConical, Map as MapIcon, PenTool, Rocket, Search } from "lucide-react";
import { useReducedMotion } from "./shared";

const steps = [
  { n: "01", verb: "Dig in", note: "Users, data,\ndomain rules", Icon: Search },
  { n: "02", verb: "Map", note: "Journeys,\nservice blueprints", Icon: MapIcon },
  { n: "03", verb: "Focus", note: "The problem\nworth solving", Icon: Crosshair },
  { n: "04", verb: "Design", note: "Flows, UI,\ndesign systems", Icon: PenTool },
  { n: "05", verb: "Test", note: "Usability tests,\nreal users", Icon: FlaskConical },
  { n: "06", verb: "Ship", note: "Handoff, then\nmeasure impact", Icon: Rocket },
];

/* "How I think": six process steps in one glass strip, with a return arrow back to the start.
   Steps stagger in and a light sweeps across the first time the strip scrolls into view. */
export const ProcessStrip = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      setRun(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  return (
    <div ref={ref} className="process-strip mx-auto max-w-[1200px]" data-run={run || undefined}>
      <p className="process-fade mb-6 text-center text-[13px] font-medium uppercase tracking-[0.2em] text-white/40">How I think</p>

      <div className="process-panel relative overflow-hidden rounded-[22px]">
        <span aria-hidden className="edge-light edge-light--on" style={{ animationDuration: "5s" }} />
        <span aria-hidden className="process-sweep pointer-events-none absolute inset-y-0 z-10 w-1/3" />

        <ol className="no-scrollbar relative flex snap-x snap-mandatory overflow-x-auto md:grid md:grid-cols-6 md:overflow-visible">
          <span aria-hidden className="process-line pointer-events-none absolute hidden h-px md:block" />
          {steps.map(({ n, verb, note, Icon }, i) => (
            <li
              key={verb}
              className="process-step group relative min-w-[40vw] shrink-0 snap-start overflow-hidden px-5 py-6 sm:min-w-[30vw] sm:px-6 md:min-w-0 md:px-5 md:py-7"
              style={{ "--i": i, "--step-tint": i === steps.length - 1 ? 0.1 : i * 0.018 } as React.CSSProperties}
            >
              <span aria-hidden className="process-step__hover pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span
                aria-hidden
                className="process-step__num keep-color pointer-events-none absolute bottom-0 right-2 font-black leading-none"
                style={{ "--num-alpha": 0.06 + i * 0.012 } as React.CSSProperties}
              >
                {n}
              </span>
              <span className="process-step__icon relative flex h-8 w-8 items-center justify-center rounded-[10px]">
                <Icon size={16} strokeWidth={1.8} className="text-primary" />
              </span>
              <h3 className="relative mt-5 text-[15px] md:text-[17px] font-medium uppercase leading-none tracking-[0.05em] text-white">{verb}</h3>
              <p className="relative mt-2 min-h-[35px] whitespace-pre-line text-[13px] leading-[1.45] text-white/45">{note}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Return path: from the last step back to the first */}
      <div aria-hidden className="relative hidden h-14 md:block">
        <div className="process-return absolute inset-x-0 top-0 h-[44px]" />
        <span className="process-arrow process-fade-late absolute left-0 top-[36px]" />
        <span className="process-fade-late process-return-label absolute left-1/2 top-[24px] -translate-x-1/2 bg-background px-3 text-[12px] font-medium uppercase tracking-[0.2em] text-white/40">
          and back again
        </span>
      </div>
    </div>
  );
};
