import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { PasswordProtectedProject } from "@/components/PasswordProtectedProject";
import { projects as projectData } from "@/data/projects";
import { useMediaQuery, useReducedMotion } from "./shared";

export type ShelfProject = {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  category: string;
  year?: string;
  metric?: string;
};

const ShelfCard = ({ project, index, pinned }: { project: ShelfProject; index: number; pinned: boolean }) => {
  const data = projectData[project.slug];
  const isLocked = data?.isProtected ?? false;
  const accent = data?.accentColor ?? "hsl(var(--primary))";
  const tags = project.category.split(" · ");

  const card = (
    <div
      className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/10 bg-[#0d0d0d] p-3 text-left transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_30px_60px_-24px_rgba(0,0,0,0.8)]"
      style={{ "--edge-accent": accent } as React.CSSProperties}
    >
      <span aria-hidden className="edge-light" style={{ animationDelay: `${index * -1.3}s` }} />

      {/* Cover */}
      <div className={`relative overflow-hidden rounded-[14px] ${pinned ? "min-h-0 flex-1" : "aspect-[4/3]"}`}>
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
            project.slug === "tutoronboarding" ? "scale-[1.5] group-hover:scale-[1.55]" : "group-hover:scale-[1.04]"
          }`}
        />
        <div className="keep-color absolute left-3 right-3 top-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="pill-dark rounded-full bg-black/60 px-2.5 py-1 text-[12px] font-medium text-white backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Text */}
      <div className="flex shrink-0 flex-col gap-2 px-3 pb-3 pt-5">
        <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em]">
          <span className="font-medium" style={{ color: accent }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-white/35">/ {project.year} {isLocked && "· 🔒"}</span>
        </div>
        <h3 className="text-[22px] md:text-[26px] font-medium leading-[1.15] tracking-[-0.01em] text-white transition-colors duration-300 group-hover:text-primary">
          {project.title}
        </h3>
        <p className="line-clamp-3 text-[15px] leading-[1.55] font-light text-white/55">{project.description}</p>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          {project.metric && (
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-[14px] font-medium text-white/80">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
              {project.metric}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 text-[15px] font-light text-white/45 transition-colors group-hover:text-white/80">
            {isLocked ? "Unlock case study" : "Read case study"}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </div>
  );

  return isLocked ? (
    <PasswordProtectedProject to={`/projects/${project.slug}`} className="h-full">{card}</PasswordProtectedProject>
  ) : (
    <Link to={`/projects/${project.slug}`} className="block h-full">
      {card}
    </Link>
  );
};

/* Desktop: the section pins while cards travel sideways, tilting away from the centre. */
const PinnedShelf = ({ projects }: { projects: ShelfProject[] }) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;
    let travel = 0;
    let frame = 0;

    const measure = () => {
      travel = Math.max(0, track.scrollWidth - window.innerWidth);
      outer.style.height = `calc(100vh + ${travel}px)`;
    };

    const update = () => {
      frame = 0;
      const rect = outer.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;
      const x = -progress * travel;
      track.style.transform = `translate3d(${x}px, 0, 0)`;

      const mid = window.innerWidth / 2;
      cardRefs.current.forEach((card) => {
        if (!card) return;
        const center = card.offsetLeft + card.offsetWidth / 2 + x;
        const n = Math.max(-1.5, Math.min(1.5, (center - mid) / mid));
        const d = Math.min(1, Math.abs(n));
        card.style.transform = `perspective(1400px) translateZ(${(-80 * d).toFixed(1)}px) rotateY(${(-n * 22).toFixed(2)}deg) scale(${(1 - d * 0.12).toFixed(3)})`;
        card.style.filter = `brightness(${(1 - d * 0.3).toFixed(3)})`;
        card.style.zIndex = String(100 - Math.round(d * 50));
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();
    const ro = new ResizeObserver(onResize);
    ro.observe(track);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [projects.length]);

  return (
    <div ref={outerRef} className="relative" style={{ height: "100vh" }}>
      <div className="sticky top-0 flex h-screen flex-col justify-end overflow-hidden pb-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(110% 70% at 50% 100%, hsl(var(--primary) / 0.10) 0%, transparent 65%)" }}
        />
        <div
          ref={trackRef}
          className="relative flex w-max items-end gap-8 will-change-transform"
          style={{
            paddingLeft: "calc(50vw - var(--card-w) / 2)",
            paddingRight: "calc(50vw - var(--card-w) / 2)",
          }}
        >
          {projects.map((project, i) => (
            <div
              key={project.slug}
              ref={(el) => (cardRefs.current[i] = el)}
              className="shrink-0 will-change-transform"
              style={{ width: "var(--card-w)", height: "var(--card-h)", transformOrigin: "center bottom" }}
            >
              <ShelfCard project={project} index={i} pinned />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProjectShelf = ({ projects }: { projects: ShelfProject[] }) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const reduced = useReducedMotion();

  if (isDesktop && !reduced) {
    return (
      <div
        style={
          {
            "--card-w": "clamp(360px, 40vw, 600px)",
            "--card-h": "min(calc(100vh - 140px), 700px)",
          } as React.CSSProperties
        }
      >
        <PinnedShelf projects={projects} />
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:px-10">
      {projects.map((project, i) => (
        <ShelfCard key={project.slug} project={project} index={i} pinned={false} />
      ))}
    </div>
  );
};
