import { ArrowRight, ArrowUpRight, Boxes, Building2, CreditCard, FileStack, Landmark, Layers, ShieldCheck, Sparkles } from "lucide-react";

const eyebrow = "mb-3 text-[13px] uppercase tracking-[0.2em] text-white/35";
const heading = "text-[26px] font-medium tracking-[-0.03em] text-white md:text-[36px]";
const lead = "mt-4 text-[15px] leading-7 text-white/50 md:text-[17px]";
const card = "checkalt-card rounded-[22px] border border-white/10 bg-white/[0.025]";

const Shot = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <div className={`relative overflow-hidden bg-white ${className}`}>
    <img src={src} alt={alt} loading="lazy" className={`block w-full ${className.includes("aspect") ? "h-full object-cover object-left-top" : "h-auto"}`} />
  </div>
);

/* ─── 1. Context: three platforms → 17 use cases → 6 workflow families ─── */

const platforms = [
  { name: "KLIK", job: "Payments processing", icon: CreditCard },
  { name: "ERAS", job: "Remittance & multi-bank transmission", icon: Landmark },
  { name: "ClearingWorks", job: "ACH & check processing", icon: Building2 },
];

const families = [
  { key: "WF-MONITOR", label: "Evidence monitoring" },
  { key: "WF-TRANSMIT", label: "Bank file delivery" },
  { key: "WF-ACH", label: "ACH parsing & rules" },
  { key: "WF-RECONCILE", label: "Two-source reconciliation" },
  { key: "WF-CONFIG", label: "Versioned configuration" },
  { key: "WF-ITIL", label: "Incident & governed recovery" },
];

export const CheckAltContext = ({ accentColor = "#233E76" }: { accentColor?: string }) => (
  <section className="w-full" aria-labelledby="checkalt-context-title">
    <div className="mb-10 max-w-3xl">
      <p className={eyebrow}>The operating reality</p>
      <h2 id="checkalt-context-title" className={heading}>
        One operations team, three platforms, seventeen daily processes.
      </h2>
      <p className={lead}>
        Operators watched file arrivals, SLA cut-offs, ACH runs and reconciliations across separate systems. The product
        model reduced that sprawl to six reusable workflow families — the UI had to make that model legible.
      </p>
    </div>

    <div className={`${card} p-5 md:p-8`}>
      <div className="grid gap-3 md:grid-cols-3">
        {platforms.map(({ name, job, icon: Icon }) => (
          <article key={name} className="checkalt-card rounded-[18px] border border-white/10 bg-black/20 p-5">
            <span className="mb-6 flex h-9 w-9 items-center justify-center rounded-full" style={{ background: `${accentColor}26`, color: accentColor }}>
              <Icon className="h-4 w-4" />
            </span>
            <h3 className="mb-2 text-[17px] font-medium text-white">{name}</h3>
            <p className="text-[13px] leading-5 text-white/45">{job}</p>
          </article>
        ))}
      </div>

      <div className="my-6 flex items-center justify-center gap-3 text-[12px] uppercase tracking-[0.18em] text-white/35">
        <span className="h-px flex-1 bg-white/10" />
        17 use cases · files · money movement · ACH · transmission · DB · billing · end-of-day
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {families.map((f) => (
          <div key={f.key} className="checkalt-card rounded-[14px] border p-4" style={{ borderColor: `${accentColor}55`, background: `${accentColor}14` }}>
            <p className="mb-2 text-[11px] font-semibold tracking-[0.08em]" style={{ color: accentColor }}>{f.key}</p>
            <p className="text-[13px] leading-5 text-white/65">{f.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-[13px] text-white/40">
        High-risk actions — resend to a bank, quarantine, restart, data correction — always pass a human approval gate (HITL).
      </p>
    </div>
  </section>
);

/* ─── 2. Prototype audit ─── */

const findings = [
  { title: "Everything at once", body: "The Command Center opened on an eight-stage pipeline, four KPI cards, a 12-metric scorecard, a live feed, five sparklines and two more panels — all at equal weight." },
  { title: "Green meant everything", body: "One green was the primary button, the active nav item, success status and a chart series. Every catalog card carried a full-width green Run bar." },
  { title: "No colour discipline", body: "80 distinct hex values plus 57 rgba variants, with no token rules for what each colour was allowed to mean." },
  { title: "Jargon as interface", body: "HITL, KEDB, MCP, HOOTL, C×R and ABAC were page titles, labels and badges — HITL alone appears 89 times." },
  { title: "Navigation sprawl", body: "20 always-visible items in 4 groups, mixing daily operator work with builder tooling and tenant admin." },
  { title: "Not reusable", body: "A single 315 KB HTML file with hard-coded and randomised data — nothing could carry into the other products." },
];

export const CheckAltPrototypeAudit = () => (
  <section className="w-full" aria-labelledby="checkalt-audit-title">
    <div className="mb-9 max-w-3xl">
      <p className={eyebrow}>Starting point · AI-generated prototype</p>
      <h2 id="checkalt-audit-title" className={heading}>
        It proved the features. It wasn't a place operators could work.
      </h2>
      <p className={lead}>
        The PM and backend team generated a working prototype with Claude to validate the CEO's requirements quickly. After
        living with it, the CEO asked for the UX and UI to be rethought. I started with an audit.
      </p>
    </div>

    <div className="grid items-start gap-6 lg:grid-cols-[1.35fr_0.65fr]">
      <figure className={`${card} overflow-hidden`}>
        <Shot src="/checkalt/before-studio-overview.webp" alt="Original AI-generated CheckAlt AI Platform Studio command center" />
        <figcaption className="border-t border-white/10 p-4 text-[12px] uppercase tracking-[0.16em] text-white/35">
          Before · AI Platform Studio command center (names anonymised)
        </figcaption>
      </figure>
      <ol className="space-y-3">
        {findings.map((f, i) => (
          <li key={f.title} className={`${card} flex gap-4 p-4`}>
            <span className="text-[12px] tabular-nums text-rose-400">0{i + 1}</span>
            <div>
              <h3 className="mb-1 text-[15px] font-medium text-white">{f.title}</h3>
              <p className="text-[13px] leading-5 text-white/50">{f.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>

    <div className="mt-6 grid gap-4 md:grid-cols-3">
      {[
        ["/checkalt/before-studio-incidents.webp", "Incidents"],
        ["/checkalt/before-studio-usecases.webp", "Use case catalog"],
        ["/checkalt/before-studio-canvas.webp", "Workflow canvas"],
      ].map(([src, label]) => (
        <figure key={src} className={`${card} overflow-hidden`}>
          <Shot src={src} alt={`Prototype ${label}`} className="aspect-[16/11]" />
          <figcaption className="p-3 text-[12px] uppercase tracking-[0.14em] text-white/35">Before · {label}</figcaption>
        </figure>
      ))}
    </div>
  </section>
);

/* ─── 3. System rules: problem → rule ─── */

const rules = [
  { problem: "Green everywhere", rule: "No green buttons, anywhere. Success green is reserved for status." },
  { problem: "Competing actions", rule: "Four button tiers — Primary (one per view), Secondary, Tertiary (Back/Cancel), Link." },
  { problem: "Neutrals doing every job", rule: "One job per neutral: Light Grey is borders only — never text, never a fill." },
  { problem: "Inconsistent popups", rule: "One modal contract: 20px left-aligned title, no subtitles, mandatory close, right-aligned 40px actions." },
  { problem: "Forms vs. filters blur", rule: "Two field heights by context — 50px form fields, 40px filter fields." },
  { problem: "Invisible keyboard focus", rule: "Visible focus rings are mandatory; documented the CSS specificity trap that hid them." },
];

const dsFrames = [
  { src: "/checkalt/ds-foundations.webp", label: "Foundations" },
  { src: "/checkalt/ds-buttons.webp", label: "Buttons & actions" },
  { src: "/checkalt/ds-modals.webp", label: "Modals & drawers" },
  { src: "/checkalt/ds-data-display.webp", label: "Data display" },
  { src: "/checkalt/ds-inputs.webp", label: "Inputs & forms" },
];

export const CheckAltDesignSystem = ({ accentColor = "#233E76" }: { accentColor?: string }) => (
  <section className="w-full" aria-labelledby="checkalt-ds-title">
    <div className="mb-10 max-w-3xl">
      <p className={eyebrow}>System before screens</p>
      <h2 id="checkalt-ds-title" className={heading}>
        Every prototype problem became a written rule.
      </h2>
      <p className={lead}>
        The issues were systemic, so the fix was a system: a Figma library, a living documentation portal, and a
        <span className="text-white/80"> DESIGN.md</span> precise enough for developers <em>and</em> their AI coding assistants to follow.
      </p>
    </div>

    <div className={`${card} mb-6 divide-y divide-white/10 overflow-hidden`}>
      {rules.map((r) => (
        <div key={r.problem} className="grid gap-2 p-5 md:grid-cols-[0.38fr_auto_1fr] md:items-center md:gap-6">
          <p className="text-[14px] text-rose-400">{r.problem}</p>
          <ArrowRight className="hidden h-4 w-4 text-white/30 md:block" />
          <p className="text-[15px] leading-6 text-white/75">{r.rule}</p>
        </div>
      ))}
    </div>

    <div className="grid gap-4 md:grid-cols-3">
      {dsFrames.map((f, i) => (
        <figure key={f.src} className={`${card} flex flex-col overflow-hidden ${i === 0 ? "md:row-span-2" : ""}`}>
          <Shot src={f.src} alt={`CheckAlt design system — ${f.label}`} className={i === 0 ? "aspect-[4/5] md:aspect-auto md:flex-1" : "aspect-[16/10]"} />
          <figcaption className="border-t border-white/10 p-3 text-[12px] uppercase tracking-[0.14em] text-white/35">{f.label}</figcaption>
        </figure>
      ))}
    </div>

    <div className="mt-6 grid gap-3 md:grid-cols-3">
      {[
        { icon: Layers, title: "One library, four portals", body: "Merchant, Genie, Documentation and Consumer share tokens and components; they differ only in layout chrome." },
        { icon: ShieldCheck, title: "Audits its own debt", body: "The doc names known gaps — e.g. 447+ hard-coded hex values — so remediation is visible, scoped work." },
        { icon: Sparkles, title: "Written for AI builders", body: "Explicit, testable rules kept AI-assisted implementation from drifting the way the prototype had." },
      ].map(({ icon: Icon, title, body }) => (
        <article key={title} className={`${card} p-5`}>
          <Icon className="mb-5 h-5 w-5" style={{ color: accentColor }} />
          <h3 className="mb-2 text-[15px] font-medium text-white">{title}</h3>
          <p className="text-[13px] leading-5 text-white/50">{body}</p>
        </article>
      ))}
    </div>
  </section>
);

/* ─── 4. Nexus scorecard evolution ─── */

const iterations = [
  {
    tag: "Iteration 1",
    title: "Client bars per workflow",
    src: "/checkalt/nexus-scorecard-v1.webp",
    note: "Stacked status bars per client. Compact — but the numbers lived in hover tooltips, and small failure slices were easy to miss.",
  },
  {
    tag: "Iteration 2",
    title: "Status rows you can act on",
    src: "/checkalt/nexus-scorecard-v2.webp",
    note: "Feedback: every status count must be visible and lead to its report. Each workflow became a ranked list of six business outcomes, with a client filter on top.",
  },
  {
    tag: "Iteration 3",
    title: "Human approvals made visible",
    src: "/checkalt/nexus-scorecard-v3.webp",
    note: "Feedback: add “HITL Approval” as its own status with a clearly distinct colour — so work waiting on a person never hides inside Warning.",
  },
];

export const CheckAltScorecardEvolution = ({ accentColor = "#233E76" }: { accentColor?: string }) => (
  <section className="w-full" aria-labelledby="checkalt-scorecard-title">
    <div className="mb-10 max-w-3xl">
      <p className={eyebrow}>Nexus · Operations Scorecard</p>
      <h2 id="checkalt-scorecard-title" className={heading}>
        The first screen an operator sees, shaped by three rounds of feedback.
      </h2>
      <p className={lead}>
        The brief: show file, transmission and money-movement runs for KLIK, ERAS and ClearingWorks by business outcome —
        Success, No Work, Warning, Late, Failure, Rejected — and let every number open its report.
      </p>
    </div>

    <div className="space-y-6">
      {iterations.map((it, i) => (
        <article key={it.tag} className={`${card} grid overflow-hidden lg:grid-cols-[0.36fr_0.64fr]`}>
          <div className="flex flex-col justify-center p-6 md:p-8">
            <span className="mb-4 inline-flex w-fit rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.16em]"
              style={{ background: `${accentColor}22`, color: accentColor }}>
              {it.tag}
            </span>
            <h3 className="mb-3 text-[20px] font-medium tracking-[-0.02em] text-white">{it.title}</h3>
            <p className="text-[14px] leading-6 text-white/50">{it.note}</p>
            {i < iterations.length - 1 && <ArrowRight className="mt-6 hidden h-4 w-4 rotate-90 text-white/30 lg:block" />}
          </div>
          <Shot src={it.src} alt={`Nexus operations scorecard — ${it.title}`} className="border-t border-white/10 lg:border-l lg:border-t-0" />
        </article>
      ))}
    </div>

    <div className="mt-6 grid gap-4 md:grid-cols-[1.4fr_0.6fr]">
      <figure className={`${card} overflow-hidden`}>
        <Shot src="/checkalt/nexus-cxo-scorecard.webp" alt="Nexus CxO scorecard" />
        <figcaption className="border-t border-white/10 p-4 text-[13px] leading-5 text-white/50">
          <span className="text-white/80">CxO Scorecard</span> — the same system at executive altitude: governance compliance, AI-vs-human triage, MTTR drift and a plain-language narrative.
        </figcaption>
      </figure>
      <figure className={`${card} overflow-hidden`}>
        <Shot src="/checkalt/nexus-hitl-email.webp" alt="HITL approval email template" />
        <figcaption className="border-t border-white/10 p-4 text-[13px] leading-5 text-white/50">
          <span className="text-white/80">HITL approval email</span> — approvals reach people where they are, in the same visual language.
        </figcaption>
      </figure>
    </div>
  </section>
);

/* ─── 5. One platform ─── */

const apps = [
  { name: "Genie", role: "Host · AI document & knowledge portal", icon: Sparkles },
  { name: "Nexus", role: "Business operations · workflows, SLAs, approvals", icon: Boxes },
  { name: "ObservabilityOS", role: "Telemetry control plane · pipelines & health", icon: FileStack },
];

export const CheckAltPlatform = ({ accentColor = "#233E76" }: { accentColor?: string }) => (
  <section className="w-full" aria-labelledby="checkalt-platform-title">
    <div className="mb-10 max-w-3xl">
      <p className={eyebrow}>Platform coherence</p>
      <h2 id="checkalt-platform-title" className={heading}>Three products that feel like tabs, not vendors.</h2>
      <p className={lead}>
        A shared header and a configuration-driven app switcher connect every product on one origin and one session —
        same tokens, same components, same navigation chrome.
      </p>
    </div>
    <div className={`${card} p-5 md:p-8`}>
      <div className="mb-8 flex flex-wrap items-center gap-1 rounded-2xl border border-white/10 bg-black/20 p-1.5">
        {apps.map((a, i) => (
          <span key={a.name} className="rounded-xl px-4 py-2 text-[14px] font-medium"
            style={i === 2 ? { background: accentColor, color: "#fff" } : undefined}>
            <span className={i === 2 ? "" : "text-white/50"}>{a.name}</span>
          </span>
        ))}
        <span className="ml-auto hidden px-3 text-[12px] uppercase tracking-[0.16em] text-white/30 md:block">Shared app switcher</span>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {apps.map(({ name, role, icon: Icon }) => (
          <article key={name} className="checkalt-card rounded-[18px] border border-white/10 bg-black/20 p-5">
            <Icon className="mb-6 h-5 w-5" style={{ color: accentColor }} />
            <h3 className="mb-2 text-[16px] font-medium text-white">{name}</h3>
            <p className="text-[13px] leading-5 text-white/45">{role}</p>
          </article>
        ))}
      </div>
      <a href="https://www.figma.com/design/7DbKcY1WQWPLkPI7AyWn1W/Check-Alt" target="_blank" rel="noreferrer"
        className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[14px] font-medium text-white/70 transition-colors hover:border-white/30 hover:text-white">
        Open the CheckAlt design system in Figma <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  </section>
);
