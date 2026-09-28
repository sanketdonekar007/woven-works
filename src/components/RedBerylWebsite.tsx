import { ArrowUpRight, ArrowRight, Building2, Boxes, BriefcaseBusiness, Cpu, LayoutGrid, Sparkles } from "lucide-react";
import { LazyVideo } from "./LazyVideo";

const navigationGroups = [
  { label: "Products", count: "07", icon: Boxes, items: "Nexus · DataFlux · ObservabilityOS · TalentAxis" },
  { label: "Services", count: "12", icon: BriefcaseBusiness, items: "AI automation · Cloud · Modernization · UI/UX" },
  { label: "Industries", count: "09", icon: Building2, items: "Finance · Retail · Aviation · Manufacturing" },
  { label: "AI Solutions", count: "02", icon: Sparkles, items: "AI capabilities · Production accelerators" },
  { label: "Company", count: "05", icon: LayoutGrid, items: "About · Case studies · Careers · Blog · Contact" },
];

export const RedBerylBeforeAfter = () => (
  <section className="w-full" aria-labelledby="redberyl-before-after-title">
    <div className="mb-9 max-w-3xl">
      <p className="mb-3 text-[13px] uppercase tracking-[0.2em] text-white/35">Experience audit</p>
      <h2 id="redberyl-before-after-title" className="text-[26px] font-medium tracking-[-0.03em] text-white md:text-[36px]">
        From a rotating service banner to a navigable product ecosystem.
      </h2>
    </div>

    <div className="grid gap-4 lg:grid-cols-2">
      {[
        {
          eyebrow: "Before",
          title: "Offer-led and fragmented",
          image: "/redberyl/old-homepage.png",
          note: "A campaign-style hero exposed one offer at a time and gave visitors little sense of the full business.",
        },
        {
          eyebrow: "Redesign",
          title: "Product-led and connected",
          image: "/redberyl/new-homepage.png",
          note: "The new hero makes the seven-product portfolio visible as a system and creates direct paths to product detail or a demo.",
        },
      ].map((item) => (
        <article key={item.eyebrow} className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.025]">
          <div className="flex items-end justify-between gap-4 border-b border-white/10 p-5 md:p-6">
            <div>
              <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-white/35">{item.eyebrow}</p>
              <h3 className="text-[18px] font-medium text-white">{item.title}</h3>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-white/30" />
          </div>
          <div className="flex aspect-[16/10] items-center overflow-hidden bg-white">
            <img src={item.image} alt={`${item.eyebrow}: RedBeryl homepage`} className="max-h-full w-full object-contain object-center" />
          </div>
          <p className="p-5 text-[14px] leading-6 text-white/50 md:p-6">{item.note}</p>
        </article>
      ))}
    </div>
  </section>
);

export const RedBerylIA = ({ accentColor = "#1554C0" }: { accentColor?: string }) => (
  <section className="w-full" aria-labelledby="redberyl-ia-title">
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-[13px] uppercase tracking-[0.2em] text-white/35">Information architecture</p>
      <h2 id="redberyl-ia-title" className="text-[26px] font-medium tracking-[-0.03em] text-white md:text-[36px]">
        Five clear entry points replaced one expanding list.
      </h2>
      <p className="mt-4 text-[15px] leading-7 text-white/50 md:text-[17px]">
        The structure separates what RedBeryl owns, what it delivers, where it has experience, and how buyers can evaluate the company.
      </p>
    </div>

    <div className="rounded-[24px] border border-white/10 bg-white/[0.02] p-5 md:p-8">
      <div className="mx-auto mb-10 flex max-w-sm items-center justify-center gap-3 rounded-2xl border px-5 py-4 text-center text-[17px] font-medium text-white"
        style={{ borderColor: `${accentColor}70`, background: `${accentColor}22` }}>
        <Cpu className="h-5 w-5" style={{ color: accentColor }} />
        RedBeryl digital ecosystem
      </div>

      <div className="relative grid gap-3 md:grid-cols-5 md:pt-10">
        <div className="absolute left-[10%] right-[10%] top-0 hidden h-px md:block" style={{ background: `${accentColor}70` }} />
        {navigationGroups.map(({ label, count, icon: Icon, items }) => (
          <article key={label} className="relative rounded-[18px] border border-white/10 bg-black/20 p-5">
            <div className="absolute bottom-full left-1/2 hidden h-10 w-px -translate-x-1/2 md:block" style={{ background: `${accentColor}70` }} />
            <div className="mb-8 flex items-center justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: `${accentColor}20`, color: accentColor }}>
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-[12px] tabular-nums text-white/30">{count}</span>
            </div>
            <h3 className="mb-3 text-[16px] font-medium text-white">{label}</h3>
            <p className="text-[13px] leading-5 text-white/40">{items}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export const RedBerylDesignDev = () => (
  <section className="w-full" aria-labelledby="redberyl-design-dev-title">
    <div className="grid items-start gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
      <div className="lg:sticky lg:top-28">
        <p className="mb-3 text-[13px] uppercase tracking-[0.2em] text-white/35">Design → development</p>
        <h2 id="redberyl-design-dev-title" className="text-[26px] font-medium tracking-[-0.03em] text-white md:text-[36px]">
          One implementation-ready source of truth.
        </h2>
        <p className="mt-5 text-[15px] leading-7 text-white/50 md:text-[17px]">
          The Figma Dev Design established the source of truth; the working build brought it to life through product transitions, animated capability maps, scroll-led storytelling, proof, content, conversion, and responsive behavior.
        </p>

        <div className="mt-8 space-y-3">
          {[
            "Named Figma sections and layers preserved layout intent for engineering.",
            "Reusable navigation, CTA, card, and content patterns reduced one-off implementation.",
            "The live build adds timing, transitions, scroll behavior, and responsive motion that a static frame cannot communicate.",
          ].map((item, index) => (
            <div key={item} className="redberyl-handoff-point flex gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
              <span className="text-[11px] tabular-nums text-white/30">0{index + 1}</span>
              <p className="text-[14px] leading-6 text-white/55">{item}</p>
            </div>
          ))}
        </div>

        <a
          href="https://www.figma.com/design/DjRecUkxb6YMzLlzFikQfA/RedBeryl-Website-Design?node-id=6843-5166"
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[14px] font-medium text-white/70 transition-colors hover:border-white/30 hover:text-white"
        >
          Open Dev Design in Figma <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0d0d0d] p-2 md:p-3">
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-3 md:px-4">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
          </div>
          <span className="text-[11px] uppercase tracking-[0.16em] text-white/30">Figma → Working build</span>
          <span className="text-[11px] text-white/25">Live walkthrough</span>
        </div>
        <div className="overflow-hidden rounded-b-[16px] bg-white">
          <LazyVideo
            src="/redberyl/website-walkthrough-final.webm"
            poster="/redberyl/website-walkthrough-final-poster.png"
            className="block h-auto w-full"
          />
        </div>
        <p className="px-4 py-3 text-center text-[11px] uppercase tracking-[0.16em] text-white/25">Autoplays and repeats · complete homepage walkthrough</p>
      </div>
    </div>
  </section>
);
