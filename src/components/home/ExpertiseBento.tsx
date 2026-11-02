import { useState } from "react";

/* Each mock is a 240×132 illustration. Direct children animate in one after another
   (set --i for the order) when the card becomes active. */

const Panel = ({ className = "", style, children }: { className?: string; style?: React.CSSProperties; children: React.ReactNode }) => (
  <div
    className={`absolute rounded-lg border border-black/10 bg-white shadow-[0_6px_16px_-8px_rgba(11,18,32,0.4)] ${className}`}
    style={style}
  >
    {children}
  </div>
);

const Bar = ({ w, h = 5, color = "rgba(11,18,32,0.1)", className = "" }: { w: string | number; h?: number; color?: string; className?: string }) => (
  <div className={className} style={{ width: w, height: h, borderRadius: 3, background: color }} />
);

const order = (i: number) => ({ "--i": i } as React.CSSProperties);

const ProductMock = () => (
  <>
    <Panel className="left-0 top-0 w-[150px] p-3" style={order(0)}>
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-bold text-[#0B1220]">New shipment</span>
        <span className="text-[7px] font-bold tracking-[0.08em] text-[#0B1220]/45">STEP 2 OF 4</span>
      </div>
      <div className="mt-2 flex gap-1">
        {[1, 1, 0, 0].map((on, i) => (
          <div key={i} className="h-[3px] flex-1 rounded" style={{ background: on ? "#FF5900" : "rgba(11,18,32,0.1)" }} />
        ))}
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <Bar w="40%" h={4} color="rgba(11,18,32,0.35)" />
        <div className="h-[14px] rounded border border-black/10" />
        <Bar w="32%" h={4} color="rgba(11,18,32,0.35)" />
        <div className="h-[14px] rounded border border-[#FF5900]/60 shadow-[0_0_0_2px_rgba(255,89,0,0.12)]" />
      </div>
      <div className="mt-3 grid h-[16px] place-items-center rounded-full bg-[#FF5900] text-[7px] font-bold tracking-[0.06em] text-white">
        CONTINUE
      </div>
    </Panel>
    <Panel className="left-[160px] top-[18px] w-[80px] p-2.5" style={order(2)}>
      <span className="block text-[7px] font-bold tracking-[0.06em] text-[#0B1220]/45">TIME TO CREATE</span>
      <span className="mt-1 block text-[15px] font-extrabold leading-none text-[#0B1220]">8 min</span>
      <span className="mt-1 block text-[7px] font-semibold text-emerald-600">was 45 min</span>
    </Panel>
    <Panel className="left-[160px] top-[86px] flex w-[80px] items-center gap-1.5 px-2.5 py-2" style={order(4)}>
      <span className="h-[7px] w-[7px] rounded-full bg-emerald-500" />
      <span className="text-[7px] font-bold text-[#0B1220]">Usability tested</span>
    </Panel>
  </>
);

const ServiceMock = () => {
  const lanes = ["Client", "Ops team", "System"];
  const dots = [
    [0, 18],
    [1, 62],
    [2, 104],
    [1, 148],
    [0, 192],
  ];
  return (
    <>
      <Panel className="inset-x-0 top-0 h-[132px] p-3" style={order(0)}>
        {lanes.map((lane, i) => (
          <div key={lane} className="relative flex h-[36px] items-center border-b border-dashed border-black/10 last:border-0">
            <span className="w-[44px] text-[7px] font-bold uppercase tracking-[0.06em] text-[#0B1220]/50">{lane}</span>
            <div className="relative h-full flex-1" />
          </div>
        ))}
      </Panel>
      <svg className="absolute left-[56px] top-[12px]" width="180" height="108" style={order(2)}>
        <polyline
          points={dots.map(([lane, x]) => `${x - 4},${lane * 36 + 18}`).join(" ")}
          fill="none"
          stroke="#2563eb"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        {dots.map(([lane, x], i) => (
          <circle key={i} cx={x - 4} cy={lane * 36 + 18} r="5" fill={i === 2 ? "#FF5900" : "#2563eb"} stroke="#fff" strokeWidth="2" />
        ))}
      </svg>
      <Panel className="right-[4px] -top-[14px] px-2 py-1.5" style={order(4)}>
        <span className="text-[7px] font-bold text-[#FF5900]">Pain point · status calls</span>
      </Panel>
    </>
  );
};

const AIMock = () => {
  const variants = [
    { label: "KEPT", color: "#10b981", g: "linear-gradient(140deg,#2563eb,#7c3aed)" },
    { label: "REPLACED", color: "#e11d48", g: "linear-gradient(140deg,#f59e0b,#ec4899)" },
    { label: "HUMAN", color: "#7c3aed", g: "linear-gradient(140deg,#38bdf8,#10b981)" },
  ];
  return (
    <>
      <Panel className="inset-x-0 top-0 flex items-center gap-2 px-2.5 py-2" style={{ ...order(0), borderColor: "rgba(124,58,237,0.35)" }}>
        <div className="h-[11px] w-[11px] rounded bg-gradient-to-br from-violet-600 to-sky-400" />
        <span className="whitespace-nowrap text-[7px] font-semibold text-[#0B1220]/60">ops dashboard — 3 directions</span>
        <span className="ml-auto rounded-full bg-violet-600 px-2 py-[2px] text-[6px] font-bold tracking-[0.08em] text-white">RUN</span>
      </Panel>
      {variants.map((v, i) => (
        <div key={v.label} className="absolute top-[44px] w-[72px]" style={{ ...order(i + 1), left: i * 84 }}>
          <div
            className="h-[52px] rounded-lg"
            style={{ background: v.g, boxShadow: i === 0 ? `0 0 0 1.5px #fff, 0 0 0 3px ${v.color}` : "none" }}
          />
          <div className="mt-1.5 flex items-center gap-1">
            <span className="h-[6px] w-[6px] rounded-full" style={{ background: v.color }} />
            <span className="text-[7px] font-extrabold tracking-[0.06em]" style={{ color: v.color }}>
              {v.label}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

const DevMock = () => {
  const specs = [
    { token: "space-2 · 8px", ok: true },
    { token: "status-error", ok: true },
    { token: "focus-ring", ok: true },
    { token: "radius 14 → 12", ok: false },
  ];
  return (
    <>
      <Panel className="left-0 top-0 w-[112px] p-2.5" style={order(0)}>
        <span className="text-[8px] font-bold text-[#0B1220]">Button · primary</span>
        <div className="mt-2 grid h-[16px] place-items-center rounded-full bg-[#0d9488] text-[7px] font-bold text-white">Publish</div>
        <div className="mt-2 rounded bg-[#0B1220] px-2 py-1.5 font-mono text-[6.5px] leading-[1.5] text-emerald-300">
          {'<Button variant="primary"'}
          <br />
          {'  size="md" />'}
        </div>
      </Panel>
      <Panel className="left-[122px] top-0 w-[118px] p-2.5" style={order(2)}>
        <div className="mb-1.5 flex items-center justify-between">
          <Bar w={36} h={4} color="#0B1220" />
          <span className="text-[6.5px] font-extrabold tracking-[0.08em] text-[#0d9488]">SPEC</span>
        </div>
        {specs.map((s) => (
          <div key={s.token} className="mb-1 flex items-center gap-1.5 last:mb-0">
            <span
              className="grid h-[10px] w-[10px] place-items-center rounded text-[7px] font-extrabold"
              style={{ background: s.ok ? "rgba(13,148,136,0.15)" : "rgba(225,29,72,0.15)", color: s.ok ? "#0d9488" : "#e11d48" }}
            >
              {s.ok ? "✓" : "✕"}
            </span>
            <span className="rounded bg-black/5 px-1 py-[1px] text-[6.5px] font-bold text-[#0B1220]/60">{s.token}</span>
          </div>
        ))}
      </Panel>
      <Panel className="left-[122px] top-[100px] flex w-[118px] items-center gap-1.5 px-2.5 py-2" style={order(4)}>
        <div className="h-[5px] flex-1 overflow-hidden rounded-full bg-black/10">
          <div className="h-full w-[92%] bg-[#0d9488]" />
        </div>
        <span className="text-[6.5px] font-extrabold text-[#0d9488]">12/13</span>
      </Panel>
    </>
  );
};

const ResearchMock = () => {
  const tasks = [
    { task: "Scan a product", time: "0:14" },
    { task: "Read the verdict", time: "0:09" },
    { task: "Compare alternative", time: "0:21" },
    { task: "Save to list", time: "0:31", fail: true },
  ];
  return (
    <>
      <Panel className="left-0 top-0 w-[142px] p-2.5" style={order(0)}>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[8px] font-bold text-[#0B1220]">Usability test</span>
          <span className="text-[6.5px] font-extrabold tracking-[0.08em] text-[#db2777]">n = 6</span>
        </div>
        {tasks.map((t) => (
          <div key={t.task} className="mb-1.5 flex items-center gap-1.5 last:mb-0">
            <span
              className="grid h-[10px] w-[10px] place-items-center rounded text-[7px] font-extrabold"
              style={{ background: t.fail ? "rgba(225,29,72,0.15)" : "rgba(16,185,129,0.15)", color: t.fail ? "#e11d48" : "#059669" }}
            >
              {t.fail ? "!" : "✓"}
            </span>
            <span className="flex-1 text-[6.5px] font-semibold text-[#0B1220]/65">{t.task}</span>
            <span className="font-mono text-[6.5px] font-bold text-[#0B1220]/45">{t.time}</span>
          </div>
        ))}
      </Panel>
      <Panel className="left-[152px] top-[6px] w-[88px] p-2.5" style={order(2)}>
        <span className="block text-[6.5px] font-bold tracking-[0.06em] text-[#0B1220]/45">SCAN → DECISION</span>
        <span className="mt-1 block text-[16px] font-extrabold leading-none text-[#db2777]">−33%</span>
        <div className="mt-2 flex flex-col gap-1">
          <Bar w="100%" h={4} color="rgba(11,18,32,0.15)" />
          <Bar w="67%" h={4} color="#db2777" />
        </div>
      </Panel>
      <Panel className="left-[152px] top-[90px] flex w-[88px] items-center gap-1.5 px-2.5 py-2" style={order(4)}>
        <span className="h-[7px] w-[7px] rounded-full bg-[#db2777]" />
        <span className="text-[7px] font-bold text-[#0B1220]">1 fix → next sprint</span>
      </Panel>
    </>
  );
};

const cards = [
  {
    number: "01",
    title: "Product & UX Design",
    metric: "35+ projects shipped",
    accent: "#FF5900",
    tint: "rgba(255, 89, 0, 0.14)",
    span: "md:col-span-2",
    Mock: ProductMock,
  },
  {
    number: "02",
    title: "AI-Driven Design",
    metric: "AI prototype → 3 governed products",
    accent: "#7c3aed",
    tint: "rgba(124, 58, 237, 0.14)",
    span: "md:col-span-1",
    Mock: AIMock,
  },
  {
    number: "03",
    title: "Design Systems & Dev Handoff",
    metric: "3 design systems shipped",
    accent: "#0d9488",
    tint: "rgba(13, 148, 136, 0.14)",
    span: "md:col-span-1",
    Mock: DevMock,
  },
  {
    number: "04",
    title: "Service Design & Journeys",
    metric: "70% fewer client status inquiries",
    accent: "#2563eb",
    tint: "rgba(37, 99, 235, 0.14)",
    span: "md:col-span-2",
    Mock: ServiceMock,
  },
  {
    number: "05",
    title: "Research & Usability Testing",
    metric: "Scan-to-decision time −33%",
    accent: "#db2777",
    tint: "rgba(219, 39, 119, 0.14)",
    span: "md:col-span-2",
    Mock: ResearchMock,
  },
];

export const ExpertiseBento = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4" onMouseLeave={() => setActive(null)}>
      {cards.map((card, i) => {
        const { Mock } = card;
        return (
          <article
            key={card.number}
            tabIndex={0}
            data-active={active === i || undefined}
            onMouseEnter={() => setActive(i)}
            className={`xp-card group relative flex min-h-[340px] flex-col rounded-[22px] border border-white/10 bg-[#0d0d0d] p-3 outline-none transition-[border-color,box-shadow] duration-300 ${card.span}`}
            style={{ "--xp-accent": card.accent, "--xp-tint": card.tint } as React.CSSProperties}
          >
            <div className="xp-card__stage relative min-h-[200px] flex-1 overflow-hidden rounded-[14px]">
              <div className="xp-card__mock keep-color absolute left-1/2 top-1/2 -ml-[120px] -mt-[66px] h-[132px] w-[240px]" aria-hidden>
                <Mock />
              </div>
              <span className="xp-card__veil pointer-events-none absolute inset-0" aria-hidden />
              <span
                className="pill-dark absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-medium tracking-[0.16em] backdrop-blur"
                style={{ color: card.accent }}
              >
                {card.number}
              </span>
            </div>
            <div className="flex flex-col gap-1.5 px-2 pb-2 pt-4">
              <h3 className="xp-card__title text-[20px] font-medium tracking-[-0.01em] text-white transition-colors duration-300">{card.title}</h3>
              <span className="xp-card__metric text-[13px] uppercase tracking-[0.08em] text-white/45 transition-colors duration-300">{card.metric}</span>
            </div>
          </article>
        );
      })}
    </div>
  );
};
