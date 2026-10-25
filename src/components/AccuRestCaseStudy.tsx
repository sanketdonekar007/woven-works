import { ArrowRight, BarChart3, Box, LayoutGrid, RefreshCw, Ship, SlidersHorizontal } from "lucide-react";

const eyebrow = "mb-3 text-[13px] uppercase tracking-[0.2em] text-white/35";
const heading = "text-[26px] font-medium tracking-[-0.03em] text-white md:text-[36px]";
const lead = "mt-4 text-[15px] leading-7 text-white/50 md:text-[17px]";
const card = "accurest-card rounded-[22px] border border-white/10 bg-white/[0.025]";

/* ─── 1. Where AccuShipments sits in the platform ─── */

const chain = [
  { name: "Global Master", job: "SKUs and reference data every module uses", icon: SlidersHorizontal, screens: 36 },
  { name: "AccuForecast", job: "What each channel will sell", icon: BarChart3, screens: 40 },
  { name: "AccuStock", job: "How much stock can be planned and sold", icon: Box, screens: 35 },
  { name: "AccuEngine", job: "What to order, filled to the container", icon: RefreshCw, screens: 27 },
  { name: "AccuShipments", job: "Where every PO and shipment is, and what is late", icon: Ship, screens: 79 },
];

const shipmentsJobs = [
  "Track POs → shipments → milestones",
  "Create shipments from PO lines",
  "Resolve exceptions from the Workbench",
  "Manage documents, quotes and payments",
];

export const AccuRestPlatform = ({ accentColor = "#3B74E0" }: { accentColor?: string }) => (
  <section className="w-full" aria-labelledby="accurest-platform-title">
    <div className="mb-10 max-w-3xl">
      <p className={eyebrow}>The platform · AccuShipments in context</p>
      <h2 id="accurest-platform-title" className={heading}>
        The last link in the supply chain, and the one everything else waits on.
      </h2>
      <p className={lead}>
        Accurest plans inventory for multi-channel brands across seven modules. Forecasts and stock decide what AccuEngine
        orders; AccuShipments carries those orders from vendor to warehouse. When a shipment slips, every module upstream
        has to know.
      </p>
    </div>

    <div className={`${card} p-5 md:p-8`}>
      <div className="mb-6 flex flex-wrap items-center justify-center gap-2 text-[12px] uppercase tracking-[0.16em] text-white/35">
        <LayoutGrid className="h-3.5 w-3.5" /> Client Dashboard watches every module · Customers & admin configure them
      </div>

      <ol className="grid gap-3 md:grid-cols-5">
        {chain.map(({ name, job, icon: Icon, screens }, i) => {
          const focus = name === "AccuShipments";
          return (
            <li key={name} className="relative">
              <article
                className="accurest-card h-full rounded-[18px] border p-5"
                style={focus ? { borderColor: accentColor, background: `${accentColor}1A` } : undefined}
              >
                <Icon className="mb-5 h-5 w-5" style={{ color: focus ? accentColor : undefined }} />
                <h3 className={`mb-2 text-[15px] font-medium ${focus ? "text-white" : "text-white/70"}`}>{name}</h3>
                <p className="mb-4 text-[13px] leading-5 text-white/45">{job}</p>
                <p className="text-[12px] tabular-nums text-white/35">{screens} screens</p>
              </article>
              {i < chain.length - 1 && (
                <ArrowRight className="absolute -right-[11px] top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-white/30 md:block" />
              )}
            </li>
          );
        })}
      </ol>

      <div className="mt-4 flex items-center gap-3 text-[13px] text-white/45">
        <RefreshCw className="h-4 w-4 shrink-0" style={{ color: accentColor }} />
        A new ETA recorded in AccuShipments flows back into planning stock and the forecast’s inbound — the loop closes.
      </div>
    </div>

    <div className={`${card} mt-6 grid gap-6 p-5 md:grid-cols-[1fr_1fr] md:p-8`}>
      <div>
        <p className="mb-2 text-[12px] uppercase tracking-[0.16em] text-white/35">AccuShipments · logistics coordinators, finance</p>
        <p className="mb-5 text-[20px] leading-7 tracking-[-0.01em]" style={{ color: accentColor }}>
          “Where is every order and shipment, what is late, and what do I do next?”
        </p>
        <ul className="space-y-1.5 text-[14px] leading-6 text-white/60">
          {shipmentsJobs.map((j) => <li key={j}>· {j}</li>)}
        </ul>
      </div>
      <div className="space-y-3 text-[14px] leading-6">
        <div className="accurest-card rounded-[14px] border border-white/10 bg-black/20 p-4">
          <p className="mb-1 text-[11px] uppercase tracking-[0.14em] text-rose-400">Before</p>
          <p className="text-white/50">A 25-column shipment list with exceptions buried inside milestones, and 17 menu items mixing daily work with calculators, reports and settings.</p>
        </div>
        <div className="accurest-card rounded-[14px] border border-white/10 bg-black/20 p-4">
          <p className="mb-1 text-[11px] uppercase tracking-[0.14em] text-emerald-400">After</p>
          <p className="text-white/75">An exception-first overview, a seven-stage pipeline, a milestone timeline per shipment, wizard-based creation from PO lines and a Workbench task inbox.</p>
        </div>
      </div>
    </div>
  </section>
);

/* ─── 2. Navigation model ─── */

const navRules = [
  { title: "Three groups, one mental model", body: "Overview → Modules → Administration. Users always know whether they are looking at data, doing work, or configuring." },
  { title: "Client scope lives in the Workspace Switcher", body: "“L3ADV · All clients” or a single client. Every module respects it, so a planner never mixes two clients’ stock or forecasts." },
  { title: "Module menus are short and task-named", body: "AccuShipment had 17 menu items. Daily work stays in the menu; calculators and reports move into a Reports hub; each module’s “Master Settings” becomes one Settings item." },
  { title: "One page pattern everywhere", body: "Breadcrumb → title + one-line purpose + primary action → filter bar → content. Detail opens in a drawer (quick look) or a full page (deep work) — never a new tab." },
  { title: "Cross-module links are first-class", body: "A SKU ID opens the same stock drawer from any module; a stock-out risk on the Client Dashboard deep-links to the filtered AccuStock list." },
  { title: "Global search & notifications", body: "⌘K searches SKUs, shipments, POs, customers and settings. The bell aggregates Workbench tasks, failed imports, forecast runs and stock-out alerts." },
];

export const AccuRestNavigation = ({ accentColor = "#3B74E0" }: { accentColor?: string }) => (
  <section className="w-full" aria-labelledby="accurest-nav-title">
    <div className="mb-10 max-w-3xl">
      <p className={eyebrow}>Information architecture</p>
      <h2 id="accurest-nav-title" className={heading}>
        Four prototypes, four navigations. I made it one.
      </h2>
      <p className={lead}>
        Each module had grown its own sidebar, menu depth and idea of where settings live. The new model is six rules that
        hold on every screen.
      </p>
    </div>

    <div className="grid items-start gap-6 lg:grid-cols-[260px_1fr]">
      <figure className={`${card} mx-auto w-full max-w-[260px] overflow-hidden bg-white`}>
        <img src="/accurest/sidebar.webp" alt="Accurest sidebar with Overview, Modules and Administration groups" loading="lazy" className="block h-auto w-full" />
      </figure>
      <ol className="grid gap-3 md:grid-cols-2">
        {navRules.map((r, i) => (
          <li key={r.title} className={`${card} p-5`}>
            <span className="mb-3 block text-[12px] tabular-nums" style={{ color: accentColor }}>0{i + 1}</span>
            <h3 className="mb-2 text-[15px] font-medium text-white">{r.title}</h3>
            <p className="text-[13px] leading-5 text-white/50">{r.body}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

/* ─── 3. Key user flows ─── */

type StepKind = "screen" | "decision" | "system" | "outcome" | "error";

const kinds: Record<StepKind, { label: string; color: string }> = {
  screen: { label: "Screen", color: "#9CA3AF" },
  decision: { label: "Decision / validation", color: "#EAB308" },
  system: { label: "System action", color: "#3B82F6" },
  error: { label: "Error / edge case", color: "#EF4444" },
  outcome: { label: "Outcome", color: "#22C55E" },
};

const flows: { name: string; steps: [StepKind, string][] }[] = [
  {
    name: "Create a shipment from POs",
    steps: [
      ["screen", "Purchase Orders → select open lines"],
      ["screen", "Wizard 1 · Lines & quantities"],
      ["screen", "2 · Logistics (mode, forwarder, incoterm, ports)"],
      ["decision", "Qty ≤ open qty? CBM fits container?"],
      ["screen", "3 · Review"],
      ["system", "Shipment + milestone plan generated"],
      ["outcome", "Shipment detail opens · Workbench tasks created"],
    ],
  },
  {
    name: "Resolve an exception",
    steps: [
      ["screen", "Overview “Needs attention” / bell"],
      ["screen", "Workbench task (e.g. ETA slipped 4 days)"],
      ["screen", "Shipment detail at that milestone"],
      ["system", "Record new ETA + reason"],
      ["decision", "Downstream dates move?"],
      ["outcome", "Stock & forecast see new ETA · task auto-closes"],
    ],
  },
];

export const AccuRestFlows = () => (
  <section className="w-full" aria-labelledby="accurest-flows-title">
    <div className="mb-8 max-w-3xl">
      <p className={eyebrow}>AccuShipments · key user flows</p>
      <h2 id="accurest-flows-title" className={heading}>
        Designed for the unhappy path, not just the demo.
      </h2>
      <p className={lead}>
        Every screen maps to a step in a flow. Validation, system actions and edge cases are steps too — so the container
        that doesn’t fit and the ETA that slips are designed before anyone has to ask for them.
      </p>
    </div>

    <div className="mb-6 flex flex-wrap gap-x-5 gap-y-2">
      {Object.values(kinds).map((k) => (
        <span key={k.label} className="inline-flex items-center gap-2 text-[12px] text-white/50">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: k.color }} />
          {k.label}
        </span>
      ))}
    </div>

    <div className="space-y-4">
      {flows.map((f) => (
        <article key={f.name} className={`${card} p-5`}>
          <h3 className="mb-4 text-[15px] font-medium text-white">{f.name}</h3>
          <ol className="flex flex-wrap items-stretch gap-2">
            {f.steps.map(([kind, text], i) => (
              <li key={text} className="flex items-center gap-2">
                <div
                  className="accurest-card h-full w-[180px] rounded-[12px] border border-white/10 bg-black/20 p-3"
                  style={{ borderTop: `3px solid ${kinds[kind].color}` }}
                >
                  <p className="mb-1 text-[11px] text-white/35">{i + 1} · {kinds[kind].label}</p>
                  <p className="text-[13px] leading-5 text-white/75">{text}</p>
                </div>
                {i < f.steps.length - 1 && <ArrowRight className="h-3.5 w-3.5 shrink-0 text-white/25" />}
              </li>
            ))}
          </ol>
        </article>
      ))}
    </div>
  </section>
);

/* ─── 4. Design system ─── */

const principles = [
  { title: "Clarity over decoration", body: "Flat surfaces, hairlines and one brand blue. Colour carries meaning — status, action — never decoration." },
  { title: "Data first", body: "Tables, amounts and dates are the product. Right-align numbers, show sources and “as of” dates, never hide precision." },
  { title: "Traceable actions", body: "Every posting, payment and milestone shows who and when, and links back to its source record." },
  { title: "Consistent status language", body: "One tone per state across all modules — Posted is always green, Failed always red, Held always blue." },
];

const unify = [
  { was: "Each module had its own sidebar; Milestone had no icons, Accounting no workspace switcher", now: "One sidebar spec: 272px, logo + workspace switcher, section labels, icon nav items, user card pinned bottom" },
  { was: "Button heights of 30, 36, 40 and 48px", now: "32 / 36 / 40px only, radius 4" },
  { was: "Input radius and height drifted; Milestone used 8px / 36px fields", now: "Radius 10, height 40 everywhere; Milestone’s fields map to Size = Small" },
  { was: "Native browser selects and date pickers", now: "Select + Menu and Date Range Trigger + date presets" },
  { was: "Yellow warning text failing contrast", now: "Warning text uses yellow/700 for AA; yellow/600 stays for icons and borders" },
  { was: "KPI values wrapping mid-number on narrow cards", now: "Compact size or abbreviated values ($614.8K) — never a broken number" },
];

const tones = [
  { tone: "Success", means: "Done, healthy, on track", color: "#22C55E" },
  { tone: "Info", means: "In progress or needs a look", color: "#3B82F6" },
  { tone: "Warning", means: "At risk — act soon", color: "#EAB308" },
  { tone: "Danger", means: "Broken or late — act now", color: "#EF4444" },
  { tone: "Neutral", means: "Inactive or informational", color: "#9CA3AF" },
  { tone: "Accent", means: "Special category, not a state", color: "#F97316" },
];

const dsStats = [
  ["≈160", "Tokens in 3 variable collections"],
  ["21", "Text styles"],
  ["60+", "Components with full state coverage"],
  ["65", "Icons"],
];

export const AccuRestDesignSystem = ({ accentColor = "#3B74E0" }: { accentColor?: string }) => (
  <section className="w-full" aria-labelledby="accurest-ds-title">
    <div className="mb-10 max-w-3xl">
      <p className={eyebrow}>Accurest Design System</p>
      <h2 id="accurest-ds-title" className={heading}>
        Extracted from four live prototypes, then made to agree.
      </h2>
      <p className={lead}>
        Accounting v0.4, Reports v0.9 and Milestone Tracker v5 each solved the same problems differently. I pulled their
        patterns and token files into one library, then wrote down every decision that resolved a conflict.
      </p>
    </div>

    <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
      {dsStats.map(([value, label]) => (
        <div key={label} className={`${card} p-5`}>
          <p className="mb-1 text-[28px] font-medium tracking-[-0.02em]" style={{ color: accentColor }}>{value}</p>
          <p className="text-[13px] leading-5 text-white/50">{label}</p>
        </div>
      ))}
    </div>

    <div className="mb-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
      {principles.map((p) => (
        <article key={p.title} className={`${card} p-5`}>
          <h3 className="mb-2 text-[15px] font-medium text-white">{p.title}</h3>
          <p className="text-[13px] leading-5 text-white/50">{p.body}</p>
        </article>
      ))}
    </div>

    <div className={`${card} mb-6 overflow-hidden`}>
      <p className="border-b border-white/10 p-5 text-[12px] uppercase tracking-[0.16em] text-white/35">Decisions that unify the prototypes</p>
      <div className="divide-y divide-white/10">
        {unify.map((u) => (
          <div key={u.now} className="grid gap-2 p-5 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6">
            <p className="text-[14px] leading-6 text-rose-400">{u.was}</p>
            <ArrowRight className="hidden h-4 w-4 text-white/30 md:block" />
            <p className="text-[14px] leading-6 text-white/75">{u.now}</p>
          </div>
        ))}
      </div>
    </div>

    <div className={`${card} p-5 md:p-6`}>
      <p className="mb-1 text-[12px] uppercase tracking-[0.16em] text-white/35">Status vocabulary</p>
      <p className="mb-5 text-[14px] leading-6 text-white/50">One meaning per colour across every module. Colour is never used alone — every status carries a text label.</p>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {tones.map((t) => (
          <div key={t.tone} className="accurest-card rounded-[14px] border p-4" style={{ borderColor: `${t.color}55`, background: `${t.color}12` }}>
            <p className="mb-1 text-[13px] font-medium" style={{ color: t.color }}>{t.tone}</p>
            <p className="text-[12px] leading-5 text-white/50">{t.means}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── 5. Auditing the system against the screens ─── */

const auditStats = [
  ["8 / 6,306", "Colour fills not bound to a token"],
  ["5 of 7", "Progress-pip colours under 3:1 contrast"],
  ["143", "Hand-built card headers in AccuShipments"],
];

const componentFixes = [
  { name: "Progress Pip → Status Segment", problem: "4px dots, colour-only meaning, five of seven colours under 3:1; Blocked in near-black.", fix: "6px segments on status tokens (all ≥3:1), dashed outline for Not started, grey for Blocked." },
  { name: "Stage Card", problem: "“Current” reused for aggregate stages, so the stage with a customs hold was the quietest card.", fix: "New In flight state for healthy stages; Attention gets a danger border and count badge; Selected state for the clicked stage." },
  { name: "Milestone Row", problem: "Ready and Overdue both shipped a Primary action; outline badges; row heights from 26 to 44px.", fix: "Only Overdue is Primary; Subtle status badges (Outline kept for owner tags); fixed 44px rows; sentence case." },
  { name: "Alert", problem: "Whole paragraph in red or green; the fix action was a text link.", fix: "Tone lives in icon, border and title; body is text/body; the action is a Secondary button." },
  { name: "KPI Card", problem: "Negative turned the entire number red; no way to show change.", fix: "Value stays neutral; a Delta line with arrow and signed text carries the tone; Positive tone added." },
  { name: "New: Wizard Step · Route Stop", problem: "Steppers and shipment routes rebuilt by hand on every screen; Section Card had no subtitle.", fix: "Two new components with text properties, plus an optional subtitle on Section Card." },
];

export const AccuRestSystemAudit = ({ accentColor = "#3B74E0" }: { accentColor?: string }) => (
  <section className="w-full" aria-labelledby="accurest-audit-title">
    <div className="mb-10 max-w-3xl">
      <p className={eyebrow}>Auditing the system against the screens</p>
      <h2 id="accurest-audit-title" className={heading}>
        Tokens were clean. The drift was in the components.
      </h2>
      <p className={lead}>
        Once AccuShipments was designed, I audited all 79 screens against the library. Colour and type were almost perfectly
        bound — the problems were components that didn’t fit how the screens used them, so designers rebuilt or misused them.
        I proposed v2 components on a separate page and applied them to the screens shown here.
      </p>
    </div>

    <div className="mb-6 grid gap-3 md:grid-cols-3">
      {auditStats.map(([value, label]) => (
        <div key={label} className={`${card} p-5`}>
          <p className="mb-1 text-[26px] font-medium tracking-[-0.02em]" style={{ color: accentColor }}>{value}</p>
          <p className="text-[13px] leading-5 text-white/50">{label}</p>
        </div>
      ))}
    </div>

    <div className="mb-6 space-y-4">
      {[
        { src: "/accurest/ds-pipeline-before.webp", tag: "Before", tone: "text-rose-400", note: "Five healthy stages in the loud “Current” style; the stage with a customs hold is the quietest card. Pips rely on colour alone." },
        { src: "/accurest/ds-pipeline-after.webp", tag: "After", tone: "text-emerald-400", note: "Healthy stages recede as “In flight”; the held stage is the only one with a danger border and a “1 hold” badge. Segments meet 3:1 contrast." },
      ].map((s) => (
        <figure key={s.src} className={`${card} overflow-hidden`}>
          <div className="overflow-x-auto bg-white p-3 md:p-4">
            <img src={s.src} alt={`Shipments pipeline — ${s.tag.toLowerCase()} the Stage Card changes`} loading="lazy" className="block h-auto w-full min-w-[720px]" />
          </div>
          <figcaption className="border-t border-white/10 p-4 text-[13px] leading-5 text-white/50">
            <span className={`mr-2 text-[11px] uppercase tracking-[0.14em] ${s.tone}`}>{s.tag}</span>{s.note}
          </figcaption>
        </figure>
      ))}
    </div>

    <div className={`${card} overflow-hidden`}>
      <p className="border-b border-white/10 p-5 text-[12px] uppercase tracking-[0.16em] text-white/35">Component changes · proposed as v2</p>
      <div className="divide-y divide-white/10">
        {componentFixes.map((c) => (
          <div key={c.name} className="grid gap-2 p-5 md:grid-cols-[0.28fr_0.36fr_auto_0.36fr] md:items-center md:gap-6">
            <p className="text-[14px] text-white">{c.name}</p>
            <p className="text-[13px] leading-5 text-rose-400">{c.problem}</p>
            <ArrowRight className="hidden h-4 w-4 text-white/30 md:block" />
            <p className="text-[13px] leading-5 text-white/75">{c.fix}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── 6. Handoff & specs ─── */

const behaviour = [
  { pattern: "Validation", rule: "Validate on blur and submit. Error under the field, count in the footer, primary action disabled with the reason beside it." },
  { pattern: "Autosave", rule: "Save after 800ms of no change and show Saving → Saved. Never lose input on navigation." },
  { pattern: "Destructive actions", rule: "Confirmation names the object and its consequences; customer-level actions need type-to-confirm." },
  { pattern: "Exceptions", rule: "Pinned callout above content with one primary fix action, repeated in the Workbench as a task." },
  { pattern: "Tables", rule: "Sorted by the main metric, sticky header, row click opens detail; a bulk bar replaces filters when rows are selected." },
  { pattern: "Loading", rule: "Skeleton after 300ms, inline spinner for refresh; filters and header stay interactive." },
  { pattern: "Permissions", rule: "Hide modules a role can’t use; show view-only actions disabled with a tooltip." },
];

const screenIndex = [
  ["AccuShipments", 79],
  ["Global patterns & states", 47],
  ["AccuForecast", 40],
  ["Global Master", 36],
  ["AccuStock", 35],
  ["AccuEngine (planning)", 27],
  ["Platform & Admin", 24],
  ["Customers", 15],
  ["Client Dashboard", 2],
] as const;

const breakpoints = [
  { name: "Desktop", range: "≥ 1280 · designed at 1440", nav: "Full 272px sidebar" },
  { name: "Tablet", range: "768–1279 · designed at 834", nav: "64px icon rail, overlay on tap" },
  { name: "Mobile", range: "< 768 · designed at 390", nav: "App bar + bottom tabs" },
];

export const AccuRestHandoff = ({ accentColor = "#3B74E0" }: { accentColor?: string }) => {
  const max = screenIndex[0][1];
  return (
    <section className="w-full" aria-labelledby="accurest-handoff-title">
      <div className="mb-10 max-w-3xl">
        <p className={eyebrow}>Handoff & specs</p>
        <h2 id="accurest-handoff-title" className={heading}>
          Written so engineers never had to guess.
        </h2>
        <p className={lead}>
          Every value in the handoff maps to a variable, text style or component. Behaviour is specified once and applies
          everywhere unless a screen says otherwise.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className={`${card} overflow-hidden`}>
          <p className="border-b border-white/10 p-5 text-[12px] uppercase tracking-[0.16em] text-white/35">Behaviour rules</p>
          <div className="divide-y divide-white/10">
            {behaviour.map((b) => (
              <div key={b.pattern} className="grid gap-1 p-5 md:grid-cols-[0.32fr_1fr] md:gap-6">
                <p className="text-[14px] text-white">{b.pattern}</p>
                <p className="text-[13px] leading-5 text-white/50">{b.rule}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className={`${card} p-5`}>
            <p className="mb-4 text-[12px] uppercase tracking-[0.16em] text-white/35">Screen index · 305 designed screens</p>
            <div className="space-y-2.5">
              {screenIndex.map(([name, count]) => (
                <div key={name} className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1">
                  <span className="text-[13px] text-white/65">{name}</span>
                  <span className="text-[13px] tabular-nums text-white/45">{count}</span>
                  <span className="col-span-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <span
                      className="block h-full rounded-full"
                      style={{ width: `${Math.max(2, (count / max) * 100)}%`, background: accentColor, opacity: name === "AccuShipments" ? 1 : 0.35 }}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={`${card} p-5`}>
            <p className="mb-4 text-[12px] uppercase tracking-[0.16em] text-white/35">Breakpoints</p>
            <div className="space-y-3">
              {breakpoints.map((b) => (
                <div key={b.name} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <span className="text-[14px] text-white">{b.name} <span className="text-[12px] text-white/35">{b.range}</span></span>
                  <span className="text-[13px] text-white/50">{b.nav}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
