import { useState } from "react";
import { Link } from "react-router-dom";
import { projects as projectData } from "@/data/projects";
import { useMediaQuery } from "./shared";

export type Exploration = {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  category: string;
};

const ExplorationCard = ({
  item,
  active,
  expandable,
  onActivate,
}: {
  item: Exploration;
  active: boolean;
  expandable: boolean;
  onActivate: () => void;
}) => {
  const accent = projectData[item.slug]?.accentColor ?? "hsl(var(--primary))";
  const open = active || !expandable;

  return (
    <Link
      to={`/projects/${item.slug}`}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className={`on-image group relative block overflow-hidden rounded-[22px] border border-white/10 bg-[#0d0d0d] ${
        expandable ? "h-full min-w-0 transition-[flex-grow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" : "aspect-[4/5] sm:aspect-[4/3]"
      }`}
      style={{ ...(expandable && { flexGrow: active ? 2.6 : 1, flexBasis: 0 }), "--edge-accent": accent } as React.CSSProperties}
    >
      <span aria-hidden className={`edge-light ${open ? "edge-light--on" : ""}`} />

      <img
        src={item.image}
        alt={item.alt}
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out ${
          open ? "scale-[1.04]" : "scale-100"
        }`}
      />
      <div
        aria-hidden
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.15) 100%)",
          opacity: open ? 1 : 0.85,
        }}
      />

      <div className="keep-color absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 md:p-7">
        <div className="flex flex-wrap gap-1.5">
          {item.category.split(" · ").map((tag) => (
            <span key={tag} className="pill-dark rounded-full bg-white/15 px-2.5 py-1 text-[12px] font-medium text-white backdrop-blur-md">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-[22px] md:text-[26px] font-medium leading-[1.15] tracking-[-0.01em] text-white">{item.title}</h3>
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="max-w-[520px] text-[15px] leading-[1.55] font-light text-white/75 line-clamp-3">{item.description}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-medium text-white">
              View exploration
              <span className="transition-transform duration-300 group-hover:translate-x-1" style={{ color: accent }}>
                →
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

/* Desktop: one row where the hovered card widens to reveal its brief. Mobile: stacked cards. */
export const ExplorationsRow = ({ items }: { items: Exploration[] }) => {
  const [active, setActive] = useState(0);
  const expandable = useMediaQuery("(min-width: 768px)");

  if (!expandable) {
    return (
      <div className="grid grid-cols-1 gap-4">
        {items.map((item, i) => (
          <ExplorationCard key={item.slug} item={item} active expandable={false} onActivate={() => setActive(i)} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex h-[480px] gap-4">
      {items.map((item, i) => (
        <ExplorationCard key={item.slug} item={item} active={active === i} expandable onActivate={() => setActive(i)} />
      ))}
    </div>
  );
};
