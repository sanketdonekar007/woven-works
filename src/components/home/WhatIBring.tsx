import { useEffect, useRef } from "react";

/* Four cards, each with a small drawn scene of the habit at work:
   ink outlines on paper, offset shadows, one orange highlight per scene.
   Numbers shown here are real results from the case studies, nothing invented. */

const BlueprintScene = () => (
  <div className="wib-sc wib-sc-blue" aria-hidden>
    <div className="wib-card wib-blue__board">
      {["Client", "Ops team", "System"].map((lane) => (
        <div key={lane} className="wib-blue__lane">
          <span>{lane}</span>
        </div>
      ))}
      <div className="wib-blue__plot">
        <svg viewBox="0 0 100 108" preserveAspectRatio="none">
          <polyline points="5,18 27.5,54 50,90 72.5,54 95,18" />
        </svg>
        {[
          [5, 18],
          [27.5, 54],
          [50, 90],
          [72.5, 54],
          [95, 18],
        ].map(([x, y], i) => (
          <i key={i} className={`wib-blue__dot${i === 2 ? " is-pain" : ""}`} style={{ left: `${x}%`, top: `${y}px` }} />
        ))}
      </div>
    </div>
    <div className="wib-card wib-tip wib-blue__tip">
      <b>Pain point</b>
      <span>Clients calling for status</span>
    </div>
  </div>
);

const OutcomeScene = () => (
  <div className="wib-sc wib-sc-out" aria-hidden>
    <svg viewBox="0 0 400 160" preserveAspectRatio="none">
      <path d="M0 30 C 60 32, 90 52, 140 60 S 210 104, 260 110 S 340 128, 400 136" />
    </svg>
    <div className="wib-card wib-tip wib-out__tip">
      <b>Shipment creation</b>
      <span>45 → 8 min in usability testing</span>
    </div>
    <span className="wib-dot wib-out__dot" />
  </div>
);

const AIScene = () => (
  <div className="wib-sc wib-sc-ai" aria-hidden>
    <div className="wib-card wib-ai__prompt">
      <span>Three directions for the ops dashboard</span>
      <i>↑</i>
    </div>
    <div className="wib-card wib-ai__answer">
      <span className="wib-chip is-on">A</span>
      <span className="wib-chip">B</span>
      <span className="wib-chip">C</span>
      <em />
      <em />
    </div>
  </div>
);

const ShipScene = () => (
  <div className="wib-sc wib-sc-ship" aria-hidden>
    <div className="wib-card wib-ship__back" />
    <div className="wib-card wib-ship__front">
      <div className="wib-ship__row">
        <b>Button · primary</b>
        <span className="wib-ship__btn">Publish</span>
      </div>
      <ul className="wib-ship__tokens">
        <li>space-2</li>
        <li>radius-12</li>
        <li>focus-ring</li>
        <li className="is-on">Matches build ✓</li>
      </ul>
    </div>
  </div>
);

const cards = [
  {
    title: "Systems first",
    body: "I map the people, handoffs and systems behind a workflow before I draw a single screen.",
    Scene: BlueprintScene,
  },
  {
    title: "Outcomes, not output",
    body: "I agree what the business needs to move, then test whether the design actually moved it.",
    Scene: OutcomeScene,
  },
  {
    title: "AI every day",
    body: "I use Claude and other AI tools to prototype, synthesise and build, so ideas get tested sooner.",
    Scene: AIScene,
  },
  {
    title: "Ships as designed",
    body: "Design systems, clear specs and design QA, so what goes live matches what was designed.",
    Scene: ShipScene,
  },
];

export const WhatIBring = () => {
  const gridRef = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const items = Array.from(grid.querySelectorAll<HTMLElement>(".wib-item"));
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.2 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <dl ref={gridRef} className="wib-grid">
      {cards.map(({ title, body, Scene }, i) => (
        <div key={title} className="wib-item keep-color" style={{ "--i": i } as React.CSSProperties}>
          <dt>{title}</dt>
          <dd>{body}</dd>
          <Scene />
        </div>
      ))}
    </dl>
  );
};
