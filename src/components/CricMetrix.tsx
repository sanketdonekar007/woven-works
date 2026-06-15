import { useEffect, useRef, useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Shared tokens matching the CricMetrix brand
// ─────────────────────────────────────────────────────────────────────────────
const INDIGO = "#1e1b4b";
const TEAL = "#00a7e1";
const CRIMSON = "#e53e3e";
const MINT = "#10b981";

// ─────────────────────────────────────────────────────────────────────────────
// 1. BEFORE / AFTER WORKFLOW
// ─────────────────────────────────────────────────────────────────────────────
const beforeSteps = [
  { icon: "📋", label: "Manual Roll Call", sub: "17 min per session · 22 names called one by one" },
  { icon: "📱", label: "WhatsApp Updates", sub: "Fee reminders, session notes, schedule changes" },
  { icon: "📊", label: "Excel Tracking", sub: "Attendance, fees, performance — 3 separate sheets" },
  { icon: "✉️", label: "Email Feedback", sub: "Coach sends typed notes days after training" },
  { icon: "💵", label: "Cash Envelope", sub: "No receipts, no trail, no on-time enforcement" },
];

const afterSteps = [
  { icon: "🤖", label: "AI Face Scan", sub: "Full squad marked in under 10 seconds" },
  { icon: "🎙️", label: "Voice Scorer", sub: "Hands-free delivery logging during live play" },
  { icon: "📈", label: "Live Dashboard", sub: "Coach, parent, player, admin — real-time data" },
  { icon: "💳", label: "Wallet Checkout", sub: "Cashback, coupons, digital receipts — instant" },
  { icon: "🏆", label: "Progress Rings", sub: "Goals visible to everyone, locked when done" },
];

export function CricMetrixBeforeAfter() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full overflow-x-auto">
      <div className="grid md:grid-cols-2 gap-6 min-w-[640px]">
        {/* BEFORE */}
        <div
          className="rounded-3xl p-6 md:p-8 border"
          style={{ background: "rgba(229,62,62,0.06)", borderColor: "rgba(229,62,62,0.2)" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "rgba(229,62,62,0.12)", color: CRIMSON }}>Before CricMetrix</span>
            <span className="text-muted-foreground text-sm font-medium">The fragmented stack</span>
          </div>
          <div className="space-y-3">
            {beforeSteps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-2xl border transition-all duration-500"
                style={{
                  background: "rgba(229,62,62,0.04)",
                  borderColor: "rgba(229,62,62,0.15)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-16px)",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <span className="text-2xl shrink-0">{step.icon}</span>
                <div>
                  <div className="font-bold text-foreground text-base">{step.label}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{step.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-2xl text-center" style={{ background: "rgba(229,62,62,0.1)", color: CRIMSON }}>
            <span className="text-2xl font-black">~17 min</span>
            <div className="text-xs font-bold uppercase tracking-widest mt-1">per session lost to admin</div>
          </div>
        </div>

        {/* AFTER */}
        <div
          className="rounded-3xl p-6 md:p-8 border"
          style={{ background: "rgba(0,167,225,0.06)", borderColor: "rgba(0,167,225,0.2)" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "rgba(0,167,225,0.12)", color: TEAL }}>After CricMetrix</span>
            <span className="text-muted-foreground text-sm font-medium">One unified platform</span>
          </div>
          <div className="space-y-3">
            {afterSteps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-2xl border transition-all duration-500"
                style={{
                  background: "rgba(0,167,225,0.04)",
                  borderColor: "rgba(0,167,225,0.15)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(16px)",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <span className="text-2xl shrink-0">{step.icon}</span>
                <div>
                  <div className="font-bold text-foreground text-base">{step.label}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{step.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-2xl text-center" style={{ background: "rgba(16,185,129,0.1)", color: MINT }}>
            <span className="text-2xl font-black">&lt; 10 sec</span>
            <div className="text-xs font-bold uppercase tracking-widest mt-1">full squad marked with AI scan</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. AI ATTENDANCE — 3-MODE UI
// ─────────────────────────────────────────────────────────────────────────────
const attendanceModes = [
  {
    mode: "01",
    label: "Single Auto-Scan",
    desc: "Player steps into frame. ArcFace matches in real-time with a confidence badge.",
    badge: "Matched: Aarav  94%",
    badgeColor: MINT,
    elements: [
      { label: "Confidence badge", color: MINT },
      { label: "Countdown timer (3s)", color: TEAL },
      { label: "Name overlay on match", color: "#fff" },
    ],
    bg: "rgba(16,185,129,0.06)",
    border: "rgba(16,185,129,0.2)",
    mockup: (
      <div className="relative w-full aspect-[9/16] max-w-[160px] mx-auto rounded-[24px] overflow-hidden" style={{ background: "#0a0a14", border: "2px solid rgba(16,185,129,0.3)" }}>
        {/* Face placeholder */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full" style={{ background: "rgba(255,255,255,0.06)", border: "2px solid rgba(16,185,129,0.5)" }} />
        {/* Scan corners */}
        {["top-[28%] left-[18%]", "top-[28%] right-[18%]", "bottom-[28%] left-[18%]", "bottom-[28%] right-[18%]"].map((pos, i) => (
          <div key={i} className={`absolute w-4 h-4 ${pos}`} style={{
            borderTop: i < 2 ? `2px solid ${MINT}` : "none",
            borderBottom: i >= 2 ? `2px solid ${MINT}` : "none",
            borderLeft: i % 2 === 0 ? `2px solid ${MINT}` : "none",
            borderRight: i % 2 === 1 ? `2px solid ${MINT}` : "none",
          }} />
        ))}
        {/* Badge */}
        <div className="absolute bottom-4 left-2 right-2 rounded-xl px-2 py-1.5 text-center" style={{ background: "rgba(16,185,129,0.2)", border: "1px solid rgba(16,185,129,0.4)" }}>
          <div className="text-[9px] font-black" style={{ color: MINT }}>✓ Matched: Aarav</div>
          <div className="text-[8px] font-bold text-white/60">94% confidence</div>
        </div>
        {/* Timer */}
        <div className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black" style={{ background: TEAL, color: "#fff" }}>3</div>
      </div>
    ),
  },
  {
    mode: "02",
    label: "Group Panoramic Scan",
    desc: "One photo marks the entire squad. Green = present, Red = unrecognised.",
    badge: "20/22 Marked  91%",
    badgeColor: TEAL,
    elements: [
      { label: "Real-time bounding boxes", color: MINT },
      { label: "Red box = unrecognised", color: CRIMSON },
      { label: "One-tap Mark All Present", color: TEAL },
    ],
    bg: "rgba(0,167,225,0.06)",
    border: "rgba(0,167,225,0.2)",
    mockup: (
      <div className="relative w-full aspect-[9/16] max-w-[160px] mx-auto rounded-[24px] overflow-hidden" style={{ background: "#0a0a14", border: `2px solid rgba(0,167,225,0.3)` }}>
        {/* Squad silhouettes */}
        {[
          { top: "20%", left: "12%", c: MINT }, { top: "20%", left: "35%", c: MINT },
          { top: "20%", left: "58%", c: MINT }, { top: "20%", left: "76%", c: CRIMSON },
          { top: "45%", left: "22%", c: MINT }, { top: "45%", left: "48%", c: MINT },
          { top: "45%", left: "70%", c: MINT },
        ].map((p, i) => (
          <div key={i} className="absolute" style={{ top: p.top, left: p.left }}>
            <div className="w-7 h-7 rounded-sm" style={{ border: `2px solid ${p.c}`, background: `${p.c}15` }} />
          </div>
        ))}
        {/* CTA */}
        <div className="absolute bottom-4 left-2 right-2 rounded-xl px-2 py-2 text-center" style={{ background: TEAL }}>
          <div className="text-[9px] font-black text-white">Mark All Present →</div>
        </div>
        <div className="absolute top-3 left-2 right-2 rounded-lg px-2 py-1" style={{ background: "rgba(0,167,225,0.2)" }}>
          <div className="text-[8px] font-black text-white/80 text-center">20 / 22 Detected</div>
        </div>
      </div>
    ),
  },
  {
    mode: "03",
    label: "Manual Fallback",
    desc: "Reliable backup for unregistered players or outdoor lighting failures.",
    badge: "Manual Entry",
    badgeColor: "#f59e0b",
    elements: [
      { label: "Search + enroll new player", color: "#f59e0b" },
      { label: "One-tap present/absent", color: "#fff" },
      { label: "Always available — no AI lock-in", color: "rgba(255,255,255,0.5)" },
    ],
    bg: "rgba(245,158,11,0.06)",
    border: "rgba(245,158,11,0.2)",
    mockup: (
      <div className="relative w-full aspect-[9/16] max-w-[160px] mx-auto rounded-[24px] overflow-hidden" style={{ background: "#0a0a14", border: "2px solid rgba(245,158,11,0.3)" }}>
        {/* Search bar */}
        <div className="absolute top-4 left-2 right-2 rounded-lg px-2 py-1.5" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(245,158,11,0.3)" }}>
          <div className="text-[8px] text-white/40">🔍 Search player…</div>
        </div>
        {/* List items */}
        {["Aarav Sharma", "Rohan Mehta", "Dev Patil", "Karan Joshi"].map((name, i) => (
          <div key={i} className="absolute left-2 right-2 flex items-center justify-between px-2 py-1.5 rounded-lg" style={{ top: `${26 + i * 14}%`, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <span className="text-[8px] font-medium text-white/80">{name}</span>
            <div className="w-4 h-4 rounded-full" style={{ background: i < 3 ? `${MINT}30` : "rgba(255,255,255,0.06)", border: `1px solid ${i < 3 ? MINT : "rgba(255,255,255,0.1)"}` }}>
              {i < 3 && <div className="w-full h-full rounded-full flex items-center justify-center text-[7px]" style={{ color: MINT }}>✓</div>}
            </div>
          </div>
        ))}
        <div className="absolute bottom-4 left-2 right-2 rounded-xl px-2 py-1.5 text-center" style={{ background: "rgba(245,158,11,0.2)", border: "1px solid rgba(245,158,11,0.4)" }}>
          <div className="text-[9px] font-black" style={{ color: "#f59e0b" }}>+ Enroll New Player</div>
        </div>
      </div>
    ),
  },
];

export function CricMetrixAttendanceSystem() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full">
      <div className="grid md:grid-cols-3 gap-5">
        {attendanceModes.map((m, i) => (
          <div
            key={i}
            className="rounded-3xl p-6 border flex flex-col gap-5 transition-all duration-700"
            style={{
              background: m.bg,
              borderColor: m.border,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transitionDelay: `${i * 120}ms`,
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Mode {m.mode}</span>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: `${m.badgeColor}18`, color: m.badgeColor }}>{m.badge}</span>
            </div>

            <h4 className="text-xl font-bold text-foreground">{m.label}</h4>

            {/* Phone mockup */}
            {m.mockup}

            <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>

            <div className="space-y-2 pt-2 border-t" style={{ borderColor: m.border }}>
              {m.elements.map((el, j) => (
                <div key={j} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: el.color }} />
                  <span style={{ color: el.color }}>{el.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Design rationale bar */}
      <div className="mt-5 p-5 rounded-2xl border" style={{ background: "rgba(30,27,75,0.4)", borderColor: "rgba(0,167,225,0.15)" }}>
        <div className="flex flex-wrap gap-8 justify-around text-center">
          {[
            { stat: "3 Modes", desc: "Single · Group · Manual" },
            { stat: "< 10s", desc: "Full squad, Group Scan" },
            { stat: "94%+", desc: "ArcFace confidence threshold" },
            { stat: "0 Dependency", desc: "Works without AI if needed" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-2xl font-black" style={{ color: TEAL }}>{s.stat}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. VOICE MATCH SCORER
// ─────────────────────────────────────────────────────────────────────────────
const overHistory = [
  { ball: 1, runs: 1, type: "normal" },
  { ball: 2, runs: 4, type: "boundary" },
  { ball: 3, runs: 0, type: "normal" },
  { ball: 4, runs: "W", type: "wicket" },
  { ball: 5, runs: 2, type: "normal" },
  { ball: 6, runs: 6, type: "boundary" },
];

function BallChip({ b }: { b: typeof overHistory[0] }) {
  const bg = b.type === "boundary" ? MINT : b.type === "wicket" ? CRIMSON : "rgba(255,255,255,0.08)";
  const fg = b.type === "normal" ? "rgba(255,255,255,0.7)" : "#fff";
  return (
    <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black transition-transform hover:scale-110" style={{ background: bg, color: fg, border: b.type === "normal" ? "1px solid rgba(255,255,255,0.12)" : "none" }}>
      {b.runs}
    </div>
  );
}

export function CricMetrixVoiceScorer() {
  const [listening, setListening] = useState(true);
  const [wave, setWave] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWave(v => (v + 1) % 3), 500);
    const toggle = setInterval(() => setListening(v => !v), 3000);
    return () => { clearInterval(id); clearInterval(toggle); };
  }, []);

  return (
    <div className="w-full grid md:grid-cols-2 gap-6">
      {/* Left: Phone UI */}
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full max-w-[300px] rounded-[40px] overflow-hidden shadow-2xl" style={{ background: INDIGO, border: "2px solid rgba(0,167,225,0.25)" }}>
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-5 pb-2">
            <span className="text-[10px] font-bold text-white/40">9:41 AM</span>
            <span className="text-[10px] font-bold" style={{ color: TEAL }}>● LIVE</span>
          </div>

          {/* Score header */}
          <div className="px-6 pb-4">
            <div className="text-xs font-bold uppercase tracking-widest text-white/30 mb-1">Over 12 · Vikram Nair Coaching</div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-white">147</span>
              <span className="text-lg font-bold text-white/40">/ 6</span>
            </div>
          </div>

          {/* Over history scroller */}
          <div className="mx-4 mb-4 p-3 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">This Over</div>
            <div className="flex gap-2 justify-between">
              {overHistory.map((b, i) => <BallChip key={i} b={b} />)}
            </div>
            <div className="flex gap-4 mt-3 text-[9px] font-bold uppercase tracking-wider">
              <span style={{ color: MINT }}>■ Boundary</span>
              <span style={{ color: CRIMSON }}>■ Wicket</span>
              <span className="text-white/30">■ Standard</span>
            </div>
          </div>

          {/* Voice indicator */}
          <div className="mx-4 mb-4 p-4 rounded-2xl text-center" style={{ background: listening ? "rgba(0,167,225,0.12)" : "rgba(255,255,255,0.04)", border: `1px solid ${listening ? "rgba(0,167,225,0.3)" : "rgba(255,255,255,0.08)"}`, transition: "all 0.5s" }}>
            {/* Waveform */}
            <div className="flex items-center justify-center gap-1 mb-2 h-6">
              {[3, 7, 5, 9, 4, 8, 6, 3, 7, 5, 9, 4].map((h, i) => (
                <div
                  key={i}
                  className="rounded-full transition-all duration-200"
                  style={{
                    width: 2,
                    background: listening ? TEAL : "rgba(255,255,255,0.2)",
                    height: listening ? `${h + (wave === i % 3 ? 4 : 0)}px` : "3px",
                  }}
                />
              ))}
            </div>
            <div className="text-xs font-black" style={{ color: listening ? TEAL : "rgba(255,255,255,0.3)" }}>
              {listening ? "● Listening…" : "Tap mic to start"}
            </div>
          </div>

          {/* Transcription bubble */}
          {listening && (
            <div className="mx-4 mb-4 px-4 py-3 rounded-2xl" style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)" }}>
              <div className="text-[10px] font-black uppercase tracking-wider mb-1" style={{ color: MINT }}>Transcribed</div>
              <div className="text-sm font-medium text-white">"Six — Rohit, over-pitched delivery"</div>
            </div>
          )}

          {/* Mic button */}
          <div className="flex justify-center pb-8">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl cursor-pointer transition-all duration-300"
              style={{
                background: listening ? `radial-gradient(circle, ${TEAL}, #0077a8)` : "rgba(255,255,255,0.08)",
                boxShadow: listening ? `0 0 30px ${TEAL}50` : "none",
              }}
            >
              🎙️
            </div>
          </div>
        </div>
      </div>

      {/* Right: Design rationale */}
      <div className="flex flex-col justify-center gap-6">
        <div>
          <div className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: TEAL }}>Why Voice, Not Buttons</div>
          <p className="text-muted-foreground leading-relaxed">
            After observing a live scoring session, I pushed back on the original button-based brief. Coaches were <strong className="text-foreground">missing deliveries</strong> while tapping. The voice scorer lets them watch the ball — the system handles the log.
          </p>
        </div>

        <div className="space-y-3">
          {[
            { label: "Animated listening indicator", detail: "Visual confirmation of what's being captured without looking away", color: TEAL },
            { label: "Real-time transcription bubble", detail: "Coach verifies the last logged delivery at a glance", color: MINT },
            { label: "Colour-coded over history", detail: "Wickets (red) and boundaries (green) scannable in under 1 second", color: CRIMSON },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-2xl border" style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
              <div className="w-1 rounded-full shrink-0 self-stretch" style={{ background: item.color }} />
              <div>
                <div className="font-bold text-foreground text-sm">{item.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-2xl" style={{ background: "rgba(229,62,62,0.08)", border: "1px solid rgba(229,62,62,0.2)" }}>
          <div className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: CRIMSON }}>Original Brief vs. Research Finding</div>
          <div className="text-sm text-muted-foreground">Client asked for <span className="line-through text-muted-foreground/60">button-based scorer</span>. Observation showed coaches miss deliveries while tapping. Voice scorer proposed and approved after 1 usability round.</div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. ROLE DASHBOARDS OVERVIEW
// ─────────────────────────────────────────────────────────────────────────────
const roles = [
  {
    id: "01",
    role: "Coach",
    persona: "Vikram Nair",
    color: TEAL,
    bg: "rgba(0,167,225,0.07)",
    border: "rgba(0,167,225,0.2)",
    keyFeatures: ["AI attendance scanner", "Voice match scorer", "Twin Tables goal system", "Player comparison view"],
    primaryNeed: "Speed — every interaction under 10 seconds during a live session",
    widgets: [
      { label: "Today's Squad", value: "22", sub: "3 absent" },
      { label: "Over 12", value: "147/6", sub: "Run rate 6.2" },
      { label: "Goals Active", value: "8", sub: "2 completed" },
    ],
  },
  {
    id: "02",
    role: "Player",
    persona: "Aarav Sharma, 14",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.07)",
    border: "rgba(139,92,246,0.2)",
    keyFeatures: ["Progress rings & roadmap", "Loyalty wallet (top-nav)", "Drill library & assignments", "Match stats timeline"],
    primaryNeed: "Motivation — show growth visually, reward consistently",
    widgets: [
      { label: "XP Level", value: "Lv 7", sub: "+240 this week" },
      { label: "Goals", value: "3/5", sub: "2 remaining" },
      { label: "Wallet", value: "₹120", sub: "Cashback earned" },
    ],
  },
  {
    id: "03",
    role: "Parent",
    persona: "Rajesh Sharma, 44",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.07)",
    border: "rgba(245,158,11,0.2)",
    keyFeatures: ["Attendance trend charts", "Technique video hub", "BMI & health timeline", "Fee portal + receipts"],
    primaryNeed: "Evidence — structured, visual proof of development",
    widgets: [
      { label: "Attendance", value: "92%", sub: "This month" },
      { label: "BMI", value: "21.4", sub: "Healthy range" },
      { label: "Fees", value: "Paid", sub: "Auto-receipt sent" },
    ],
  },
  {
    id: "04",
    role: "Admin",
    persona: "Neha Kulkarni, 32",
    color: MINT,
    bg: "rgba(16,185,129,0.07)",
    border: "rgba(16,185,129,0.2)",
    keyFeatures: ["Enrollment management", "Cashback & coupon engine", "System-wide reports", "Coach highlight control"],
    primaryNeed: "Audit-readiness — every action traceable and exportable",
    widgets: [
      { label: "Enrollments", value: "148", sub: "12 pending" },
      { label: "Revenue", value: "₹2.4L", sub: "This month" },
      { label: "Coupons", value: "6 Live", sub: "2 expiring soon" },
    ],
  },
];

export function CricMetrixRoleDashboards() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const r = roles[active];

  return (
    <div ref={ref} className="w-full">
      {/* Tab switcher */}
      <div className="flex flex-wrap gap-3 mb-6">
        {roles.map((role, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 border"
            style={{
              background: active === i ? role.color : "transparent",
              color: active === i ? "#fff" : role.color,
              borderColor: role.color + "40",
            }}
          >
            <span className="text-xs opacity-60">{role.id}</span>
            {role.role}
          </button>
        ))}
      </div>

      {/* Dashboard preview */}
      <div
        className="rounded-3xl border overflow-hidden transition-all duration-500"
        style={{
          background: r.bg,
          borderColor: r.border,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
        }}
      >
        {/* Header bar */}
        <div className="p-5 border-b flex items-center justify-between" style={{ borderColor: r.border, background: "rgba(0,0,0,0.15)" }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black" style={{ background: r.color, color: "#fff" }}>{r.id}</div>
            <div>
              <div className="font-black text-foreground">{r.role} Dashboard</div>
              <div className="text-xs text-muted-foreground">{r.persona}</div>
            </div>
          </div>
          <div className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: `${r.color}20`, color: r.color }}>
            {r.role} View
          </div>
        </div>

        <div className="p-5 grid md:grid-cols-2 gap-6">
          {/* KPI widgets */}
          <div className="space-y-3">
            <div className="text-xs font-black uppercase tracking-widest mb-3 text-muted-foreground">Key Metrics</div>
            {r.widgets.map((w, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl" style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div>
                  <div className="text-xs text-muted-foreground font-medium">{w.label}</div>
                  <div className="text-2xl font-black text-foreground mt-0.5">{w.value}</div>
                </div>
                <div className="text-xs font-medium text-muted-foreground">{w.sub}</div>
              </div>
            ))}
          </div>

          {/* Features + principle */}
          <div className="space-y-4">
            <div>
              <div className="text-xs font-black uppercase tracking-widest mb-3 text-muted-foreground">Key Features</div>
              <div className="space-y-2">
                {r.keyFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: r.color }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 rounded-2xl mt-4" style={{ background: `${r.color}12`, border: `1px solid ${r.color}30` }}>
              <div className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: r.color }}>Design Principle</div>
              <div className="text-sm text-foreground font-medium">{r.primaryNeed}</div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-4 italic">Click each role tab to explore the dashboard focus — same platform, entirely different mental models.</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. TWIN TABLES GOAL SYSTEM
// ─────────────────────────────────────────────────────────────────────────────
const academyGoals = [
  { title: "Improve batting average by 20%", status: "In Progress", assignee: "All Batters", tasks: 3 },
  { title: "Master medium-pace bowling line", status: "Completed", assignee: "Bowling Unit", tasks: 5 },
  { title: "Fielding drills — 90% catch rate", status: "Planned", assignee: "All Players", tasks: 2 },
];

const playerDrills = [
  { player: "Aarav Sharma", drill: "Cover drive — off-stump line", status: "In Progress", due: "This week" },
  { player: "Rohan Mehta", drill: "Googly variation — 10 reps", status: "Completed", due: "Done ✓" },
  { player: "Dev Patil", drill: "Mid-wicket boundary catch drills", status: "Planned", due: "Next session" },
];

function StatusPill({ status }: { status: string }) {
  const map: Record<string, { bg: string; color: string }> = {
    "Completed": { bg: "rgba(16,185,129,0.15)", color: MINT },
    "In Progress": { bg: "rgba(0,167,225,0.15)", color: TEAL },
    "Planned": { bg: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" },
  };
  const s = map[status] || map["Planned"];
  return (
    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-full" style={{ background: s.bg, color: s.color }}>
      {status === "Completed" ? "🔒 " : ""}{status}
    </span>
  );
}

export function CricMetrixTwinTables() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Table A: Academy Goals */}
        <div
          className="rounded-3xl border overflow-hidden transition-all duration-700"
          style={{ borderColor: "rgba(0,167,225,0.2)", opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-20px)" }}
        >
          <div className="px-5 py-4 flex items-center justify-between" style={{ background: "rgba(0,167,225,0.1)", borderBottom: "1px solid rgba(0,167,225,0.2)" }}>
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">Table A</div>
              <div className="font-black text-foreground mt-0.5">Strategic Academy Goals</div>
            </div>
            <div className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "rgba(0,167,225,0.2)", color: TEAL }}>Coach ↔ Academy</div>
          </div>
          <div className="divide-y" style={{ divideColor: "rgba(255,255,255,0.05)" }}>
            {academyGoals.map((g, i) => (
              <div key={i} className="p-4 flex flex-col gap-2" style={{ background: g.status === "Completed" ? "rgba(16,185,129,0.04)" : "transparent" }}>
                <div className="flex items-start justify-between gap-2">
                  <div className={`text-sm font-bold ${g.status === "Completed" ? "line-through text-muted-foreground/50" : "text-foreground"}`}>{g.title}</div>
                  <StatusPill status={g.status} />
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>👤 {g.assignee}</span>
                  <span>📋 {g.tasks} sub-tasks</span>
                  {g.status === "Completed" && <span style={{ color: MINT }}>🔒 Locked</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table B: Individual Drills */}
        <div
          className="rounded-3xl border overflow-hidden transition-all duration-700"
          style={{ borderColor: "rgba(139,92,246,0.2)", opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(20px)", transitionDelay: "100ms" }}
        >
          <div className="px-5 py-4 flex items-center justify-between" style={{ background: "rgba(139,92,246,0.1)", borderBottom: "1px solid rgba(139,92,246,0.2)" }}>
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">Table B</div>
              <div className="font-black text-foreground mt-0.5">Tactical Player Drills</div>
            </div>
            <div className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "rgba(139,92,246,0.2)", color: "#8b5cf6" }}>Coach ↔ Player</div>
          </div>
          <div className="divide-y" style={{ divideColor: "rgba(255,255,255,0.05)" }}>
            {playerDrills.map((d, i) => (
              <div key={i} className="p-4 flex flex-col gap-2" style={{ background: d.status === "Completed" ? "rgba(16,185,129,0.04)" : "transparent" }}>
                <div className="flex items-start justify-between gap-2">
                  <div className={`text-sm font-bold ${d.status === "Completed" ? "line-through text-muted-foreground/50" : "text-foreground"}`}>{d.drill}</div>
                  <StatusPill status={d.status} />
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>🏏 {d.player}</span>
                  <span>📅 {d.due}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Design insight */}
      <div className="mt-5 p-5 rounded-2xl border" style={{ background: "rgba(30,27,75,0.4)", borderColor: "rgba(0,167,225,0.12)" }}>
        <div className="flex flex-col md:flex-row gap-6 md:items-center">
          <div className="flex-1">
            <div className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: TEAL }}>Why Two Separate Tables</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Early wireframes had a single goal table. Testing revealed coaches think about <strong className="text-foreground">academy strategy</strong> and <strong className="text-foreground">individual player homework</strong> as two distinct cognitive layers — combining them created confusion. The split was the right IA decision.
            </p>
          </div>
          <div className="flex gap-4 text-center shrink-0">
            <div className="p-3 rounded-2xl" style={{ background: "rgba(229,62,62,0.1)", border: "1px solid rgba(229,62,62,0.2)" }}>
              <div className="text-lg font-black" style={{ color: CRIMSON }}>🔒</div>
              <div className="text-[10px] font-bold text-muted-foreground mt-1">Completed goals lock all sub-tasks</div>
            </div>
            <div className="p-3 rounded-2xl" style={{ background: "rgba(0,167,225,0.1)", border: "1px solid rgba(0,167,225,0.2)" }}>
              <div className="text-lg font-black" style={{ color: TEAL }}>↕️</div>
              <div className="text-[10px] font-bold text-muted-foreground mt-1">Auto-cascades from strategy → player</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. GLASSMORPHISM FEE CHECKOUT
// ─────────────────────────────────────────────────────────────────────────────
export function CricMetrixFeeCheckout() {
  const [couponApplied, setCouponApplied] = useState(false);
  const [walletApplied, setWalletApplied] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const baseFee = 5000;
  const couponDisc = couponApplied ? 500 : 0;
  const walletDisc = walletApplied ? 250 : 0;
  const total = baseFee - couponDisc - walletDisc;

  return (
    <div ref={ref} className="w-full grid md:grid-cols-2 gap-6 items-start">
      {/* Checkout panel */}
      <div
        className="rounded-3xl overflow-hidden transition-all duration-700"
        style={{
          background: "linear-gradient(135deg, rgba(30,27,75,0.95) 0%, rgba(10,10,30,0.98) 100%)",
          border: "1px solid rgba(0,167,225,0.25)",
          backdropFilter: "blur(24px)",
          boxShadow: "0 32px 64px -12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="text-xs font-black uppercase tracking-widest text-white/40 mb-1">Monthly Fee Checkout</div>
          <div className="text-2xl font-black text-white">Aarav Sharma — May 2025</div>
        </div>

        <div className="p-6 space-y-4">
          {/* Base fee */}
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm font-bold text-white">Academy Monthly Fee</div>
              <div className="text-xs text-white/40">Premium Batting Programme</div>
            </div>
            <div className="text-lg font-black text-white">₹{baseFee.toLocaleString()}</div>
          </div>

          {/* Referral coupon */}
          <div className="p-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">Referral Coupon</div>
            <div className="flex gap-2">
              <div className="flex-1 px-3 py-2 rounded-xl text-sm font-mono font-bold text-white/60" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                {couponApplied ? "REFER500 ✓" : "Enter code…"}
              </div>
              <button
                onClick={() => setCouponApplied(v => !v)}
                className="px-4 py-2 rounded-xl text-sm font-black transition-all"
                style={{ background: couponApplied ? MINT : TEAL, color: "#fff" }}
              >
                {couponApplied ? "Remove" : "Apply"}
              </button>
            </div>
            {couponApplied && (
              <div className="mt-2 text-xs font-bold" style={{ color: MINT }}>✓ REFER500 — ₹500 discount applied</div>
            )}
          </div>

          {/* Dual wallet */}
          <div className="p-4 rounded-2xl space-y-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="text-xs font-black uppercase tracking-widest text-white/40">Apply Wallet Balance</div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-white">Cashback Wallet</div>
                <div className="text-xs text-white/40">Balance: ₹150</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold" style={{ color: TEAL }}>- ₹150</span>
                <input type="checkbox" className="w-4 h-4 cursor-pointer accent-teal-500" checked={walletApplied} onChange={() => setWalletApplied(v => !v)} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-white">Bonus Wallet</div>
                <div className="text-xs text-white/40">Balance: ₹100</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold" style={{ color: "#8b5cf6" }}>- ₹100</span>
                <input type="checkbox" className="w-4 h-4 cursor-pointer accent-purple-500" checked={walletApplied} onChange={() => setWalletApplied(v => !v)} />
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="p-4 rounded-2xl" style={{ background: "rgba(0,167,225,0.08)", border: "1px solid rgba(0,167,225,0.2)" }}>
            <div className="flex justify-between items-center">
              <div className="text-sm font-bold text-white/60">Total Due</div>
              <div className="flex items-baseline gap-2">
                {(couponApplied || walletApplied) && (
                  <span className="text-sm text-white/30 line-through">₹{baseFee.toLocaleString()}</span>
                )}
                <span className="text-3xl font-black text-white">₹{total.toLocaleString()}</span>
              </div>
            </div>
            {(couponApplied || walletApplied) && (
              <div className="text-xs font-bold mt-1" style={{ color: MINT }}>You save ₹{(couponDisc + walletDisc).toLocaleString()} 🎉</div>
            )}
          </div>

          {/* Currency converter */}
          <div className="flex gap-2 text-xs">
            {[{ label: "INR", active: true }, { label: "USD", active: false }, { label: "GBP", active: false }].map((c, i) => (
              <div key={i} className="px-3 py-1.5 rounded-xl font-black cursor-pointer transition-all" style={{ background: c.active ? "rgba(0,167,225,0.2)" : "rgba(255,255,255,0.04)", color: c.active ? TEAL : "rgba(255,255,255,0.3)", border: `1px solid ${c.active ? "rgba(0,167,225,0.3)" : "rgba(255,255,255,0.06)"}` }}>
                {c.label}
              </div>
            ))}
          </div>

          {/* Pay button */}
          <button className="w-full py-4 rounded-2xl text-white font-black text-base transition-all hover:opacity-90 hover:scale-[1.01]" style={{ background: `linear-gradient(135deg, ${TEAL}, #0077a8)`, boxShadow: `0 8px 24px ${TEAL}40` }}>
            Pay ₹{total.toLocaleString()} →
          </button>
        </div>
      </div>

      {/* Design rationale */}
      <div
        className="flex flex-col gap-5 transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transitionDelay: "150ms" }}
      >
        <div>
          <div className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: TEAL }}>The Original Brief vs. Research</div>
          <div className="p-4 rounded-2xl mb-4" style={{ background: "rgba(229,62,62,0.08)", border: "1px solid rgba(229,62,62,0.2)" }}>
            <div className="text-sm font-bold" style={{ color: CRIMSON }}>Client asked for "better notifications"</div>
            <div className="text-sm text-muted-foreground mt-1">Research showed the real barrier was checkout friction — parents used cash or separate apps with no record.</div>
          </div>
          <div className="p-4 rounded-2xl" style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}>
            <div className="text-sm font-bold" style={{ color: MINT }}>Design decision: Make payment feel rewarding</div>
            <div className="text-sm text-muted-foreground mt-1">Applying wallet balance reduces the total due in real-time — payment becomes an achievement, not a transaction.</div>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { icon: "🎟️", label: "Referral coupon codes", detail: "Drives parent-to-parent referrals organically", color: TEAL },
            { icon: "💰", label: "Dual wallet (Bonus + Cashback)", detail: "Both wallets apply simultaneously — stacking rewards", color: "#8b5cf6" },
            { icon: "🌍", label: "Multi-currency converter", detail: "USD · INR · GBP — global NRI parent support", color: "#f59e0b" },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-4 rounded-2xl border" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
              <span className="text-xl">{item.icon}</span>
              <div>
                <div className="font-bold text-foreground text-sm">{item.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-2xl text-center" style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}>
          <div className="text-3xl font-black" style={{ color: MINT }}>+35%</div>
          <div className="text-sm text-muted-foreground mt-1">on-time fee collections vs. prior cash-only baseline</div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. IMPACT METRICS WALL
// ─────────────────────────────────────────────────────────────────────────────
const impactMetrics = [
  {
    stat: "92%",
    label: "Attendance time saved",
    detail: "17-min manual roll call → under 10 seconds with group AI scan",
    icon: "⚡",
    color: TEAL,
    bg: "rgba(0,167,225,0.08)",
    border: "rgba(0,167,225,0.2)",
    linked: "AI Face Attendance",
  },
  {
    stat: "4.8×",
    label: "Parent engagement increase",
    detail: "Parents logged in 4.8× more frequently vs. email-only model (4-week beta)",
    icon: "👨‍👩‍👦",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
    linked: "Parent Dashboard",
  },
  {
    stat: "+35%",
    label: "On-time fee collections",
    detail: "Wallet-based checkout with cashback incentives drove early payment",
    icon: "💳",
    color: MINT,
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.2)",
    linked: "Glassmorphism Checkout",
  },
  {
    stat: "+40%",
    label: "Drills completed between sessions",
    detail: "Progress ring transparency + roadmap dialog correlated with higher self-training",
    icon: "🏏",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
    linked: "Player Progress Rings",
  },
];

export function CricMetrixImpactMetrics() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full">
      <div className="grid sm:grid-cols-2 gap-5">
        {impactMetrics.map((m, i) => (
          <div
            key={i}
            className="rounded-3xl p-6 border transition-all duration-700 group hover:scale-[1.02]"
            style={{
              background: m.bg,
              borderColor: m.border,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transitionDelay: `${i * 100}ms`,
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">{m.icon}</span>
              <span className="text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ background: `${m.color}18`, color: m.color }}>
                ↳ {m.linked}
              </span>
            </div>
            <div className="text-5xl md:text-6xl font-black mb-2 leading-none" style={{ color: m.color }}>{m.stat}</div>
            <div className="text-lg font-bold text-foreground mb-2">{m.label}</div>
            <div className="text-sm text-muted-foreground leading-relaxed">{m.detail}</div>
          </div>
        ))}
      </div>

      {/* Context note */}
      <div className="mt-6 p-5 rounded-2xl text-center" style={{ background: "rgba(30,27,75,0.4)", border: "1px solid rgba(0,167,225,0.12)" }}>
        <div className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: TEAL }}>Measurement Methods</div>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Attendance measured across 3 staged test sessions with live coaches. Parent engagement tracked over 4-week staging beta. Fee collections compared against prior cash collection baseline from client operational data. Drill completion self-reported by coaches across beta cohort.
        </p>
      </div>
    </div>
  );
}
