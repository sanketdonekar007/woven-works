import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";
import { TalentAxisPrototype } from "./TalentAxisPrototype";

/* TalentAxis · Recruiter app (mobile).
   Chapter structure: the problem → the decisions → what we built, with a fold-out for detail.
   Every screen here is exported from the Figma file; every number is counted from it. */

const ACCENT = "#1A8CFF";
const img = (name: string) => `/talentaxis/${name}.webp`;
const proto = (n: number) => `/talentaxis/proto/${String(n).padStart(2, "0")}.webp`;

/* ── Small building blocks ──────────────────────────────────────────── */

const Screen = ({ src, alt, label, note }: { src: string; alt: string; label?: string; note?: string }) => (
    <figure className="min-w-0">
        <div className="overflow-hidden rounded-[22px] border border-white/10 bg-white shadow-[0_24px_48px_-28px_rgba(0,0,0,0.9)]">
            <img src={src} alt={alt} loading="lazy" className="block aspect-[390/844] w-full object-cover object-top" />
        </div>
        {label && (
            <figcaption className="mt-3 flex flex-col gap-1">
                <span className="text-[14px] font-medium text-white/85">{label}</span>
                {note && <span className="text-[13px] leading-5 text-white/45">{note}</span>}
            </figcaption>
        )}
    </figure>
);

const ChapterHead = ({ n, title, thesis, id }: { n: string; title: string; thesis: string; id: string }) => (
    <RevealOnScroll>
        <header id={id} className="scroll-mt-28 border-t border-white/10 pt-10 md:pt-14">
            <p className="text-[13px] font-medium tabular-nums tracking-[0.2em] text-white/35">{n}</p>
            <h2 className="mt-3 text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-[52px]">{title}</h2>
            <p className="mt-4 max-w-3xl text-[19px] leading-[1.5] text-white/60 md:text-[22px]">{thesis}</p>
        </header>
    </RevealOnScroll>
);

const Step = ({ n, title, children }: { n: number; title: string; children: React.ReactNode }) => (
    <section className="mt-14 md:mt-20">
        <RevealOnScroll>
            <h3 className="flex items-baseline gap-3 text-[13px] font-medium uppercase tracking-[0.18em] text-white/40">
                <span
                    className="grid h-6 w-6 place-items-center rounded-full text-[12px] font-semibold tracking-normal text-black"
                    style={{ background: ACCENT }}
                >
                    {n}
                </span>
                {title}
            </h3>
        </RevealOnScroll>
        <div className="mt-6">{children}</div>
    </section>
);

const Lead = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <RevealOnScroll>
        <h4 className="text-[24px] font-semibold leading-tight tracking-[-0.02em] text-white md:text-[30px]">{title}</h4>
        <div className="mt-4 max-w-3xl space-y-4 text-[16px] leading-[1.75] text-white/60 md:text-[17px]">{children}</div>
    </RevealOnScroll>
);

const Notes = ({ title, items }: { title: string; items: string[] }) => (
    <div>
        <p className="mb-4 text-[12px] uppercase tracking-[0.18em] text-white/35">{title}</p>
        <ol className="space-y-4">
            {items.map((item, i) => (
                <li key={item} className="flex gap-4 text-[15px] leading-6 text-white/70">
                    <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border border-white/15 text-[12px] text-white/50">
                        {i + 1}
                    </span>
                    <span>{item}</span>
                </li>
            ))}
        </ol>
    </div>
);

const Decisions = ({ items }: { items: { title: string; body: string }[] }) => (
    <div className="grid gap-3 sm:grid-cols-2">
        {items.map((c, i) => (
            <RevealOnScroll key={c.title}>
                <article className="h-full rounded-[18px] border border-white/10 bg-white/[0.025] p-5 md:p-6">
                    <span
                        className="ta-accent-text inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.12em]"
                        style={{ background: `${ACCENT}26` }}
                    >
                        Decision {i + 1}
                    </span>
                    <h5 className="mt-3 text-[17px] font-medium leading-snug text-white">{c.title}</h5>
                    <p className="mt-2 text-[14px] leading-6 text-white/50">{c.body}</p>
                </article>
            </RevealOnScroll>
        ))}
    </div>
);

const MoreDetail = ({ summary, children }: { summary: string; children: React.ReactNode }) => (
    <details className="ta-more group mt-14 rounded-[20px] border border-white/10 bg-white/[0.02]">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 md:px-7">
            <span>
                <span className="block text-[12px] uppercase tracking-[0.18em] text-white/35">More detail</span>
                <span className="mt-1 block text-[16px] text-white/80">{summary}</span>
            </span>
            <ChevronDown className="h-5 w-5 flex-shrink-0 text-white/50 transition-transform group-open:rotate-180" />
        </summary>
        <div className="border-t border-white/10 px-5 py-8 md:px-7 md:py-10">{children}</div>
    </details>
);

// Problem layout: the situation on the left of a screen that shows where we landed.
const ProblemRow = ({ screen, children }: { screen: React.ReactNode; children: React.ReactNode }) => (
    <div className="grid gap-10 md:grid-cols-[1fr_280px] md:items-start md:gap-14">
        <div className="space-y-10">{children}</div>
        <div className="mx-auto w-full max-w-[280px]">{screen}</div>
    </div>
);

/* ── Page ───────────────────────────────────────────────────────────── */

const chapters = [
    { id: "ta-dashboard", n: "01", name: "Dashboard", line: "Recruiters open the app for a minute, between two meetings." },
    { id: "ta-matching", n: "02", name: "AI matching", line: "Nobody acts on a ranking they can't question." },
    { id: "ta-interviews", n: "03", name: "Pipeline & interviews", line: "Most of hiring is waiting on someone else." },
];

const facts = [
    ["My role", "Led design, with a PM and the dev team"],
    ["Scope", "Candidate, Recruiter and Super Admin mobile apps"],
    ["Timeline", "2026"],
    ["Platform", "iOS and Android"],
];

const scale = [
    ["3", "apps"],
    ["51", "flows"],
    ["~750", "screens"],
];

export const TalentAxisCaseStudy = () => (
    <article className="pb-10">
        {/* ── Hero ── */}
        <header id="ta-top" className="scroll-mt-28 pt-16">
            <RevealOnScroll>
                <p className="mb-5 text-[13px] font-light uppercase tracking-[0.22em] text-white/40">
                    TalentAxis · Recruiter app · In development
                </p>
                <h1 className="dt-display w-full text-white">
                    A recruiter's day, sorted by <span className="dt-accent">what can't wait.</span>
                </h1>
                <p className="mt-7 max-w-3xl text-[18px] font-light leading-[1.6] text-white/60 md:text-[21px]">
                    TalentAxis is RedBeryl's hiring platform for in-house teams and staffing agencies. The web app covers the
                    whole hiring process. On a phone, between two interviews, a recruiter needs to know one thing: what needs me right
                    now?
                </p>
            </RevealOnScroll>

            <RevealOnScroll delay={80}>
                <dl className="mt-10 grid grid-cols-2 border-y border-white/10 lg:grid-cols-4">
                    {facts.map(([k, v]) => (
                        <div key={k} className="border-b border-r border-white/10 px-5 py-5 last:border-r-0 md:px-6 lg:border-b-0">
                            <dt className="mb-1.5 text-[12px] uppercase tracking-[0.2em] text-white/30">{k}</dt>
                            <dd className="text-[15px] font-medium leading-snug text-white">{v}</dd>
                        </div>
                    ))}
                </dl>
            </RevealOnScroll>

            <RevealOnScroll delay={120}>
                <div className="ta-hero-stage mt-12 overflow-hidden rounded-[28px] border border-white/10 px-6 pt-10 md:px-12 md:pt-14">
                    <div className="mx-auto grid max-w-[880px] grid-cols-3 items-end gap-3 sm:gap-6 md:gap-10">
                        {[
                            [proto(4), "AI matches for a job, ranked by fit", "translate-y-10"],
                            [proto(0), "The recruiter dashboard", ""],
                            [proto(8), "The pipeline, by stage", "translate-y-10"],
                        ].map(([src, alt, shift]) => (
                            <div key={src} className={`overflow-hidden rounded-t-[26px] border border-b-0 border-white/15 bg-white ${shift}`}>
                                <img src={src} alt={alt} className="block aspect-[390/760] w-full object-cover object-top" />
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>

            <RevealOnScroll delay={140}>
                <div className="mt-10 grid gap-8 rounded-[24px] border border-white/10 bg-white/[0.025] p-6 md:grid-cols-[auto_1fr] md:items-center md:gap-12 md:p-10">
                    <div className="flex items-end gap-6 md:gap-8">
                        {scale.map(([v, l], i) => (
                            <div key={l}>
                                <span
                                    className="block text-[44px] font-semibold leading-none tracking-[-0.04em] md:text-[60px]"
                                    style={i === scale.length - 1 ? { color: ACCENT } : { color: "#fff" }}
                                >
                                    {v}
                                </span>
                                <span className="mt-2 block text-[12px] uppercase tracking-[0.18em] text-white/40">{l}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-[16px] leading-7 text-white/60 md:text-[17px]">
                        Candidate, Recruiter and Super Admin, drawn as one system, down to the awkward moments: an
                        expired trial, the last admin who can't be removed, a job taken down by moderation, a candidate's consent
                        running out.{" "}
                        <span className="text-white">
                            The ask: put the whole hiring loop in a recruiter's pocket, without shrinking the website onto a
                            phone.
                        </span>
                    </p>
                </div>
            </RevealOnScroll>

            {/* Chapter cards */}
            <nav aria-label="Chapters" className="mt-10 grid gap-3 md:grid-cols-3">
                {chapters.map((c) => (
                    <a
                        key={c.id}
                        href={`#${c.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(c.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                        className="group flex flex-col rounded-[20px] border border-white/10 p-5 transition-colors hover:border-white/25 md:p-6"
                    >
                        <span className="text-[13px] tabular-nums text-white/35">{c.n}</span>
                        <span className="mt-3 text-[20px] font-medium text-white">{c.name}</span>
                        <span className="mt-1 flex-1 text-[14px] leading-6 text-white/50">{c.line}</span>
                        <span className="mt-4 text-white/40 transition-transform group-hover:translate-y-0.5">↓</span>
                    </a>
                ))}
            </nav>
        </header>

        {/* ── 01 Dashboard ── */}
        <div className="mt-24 md:mt-32">
            <ChapterHead
                id="ta-dashboard"
                n="01"
                title="Dashboard"
                thesis="The first screen should answer one question: what needs me right now? Not how much, but what."
            />

            <Step n={1} title="The problem">
                <ProblemRow screen={<Screen src={proto(1)} alt="Waiting on you: offers, feedback and booked slots" label="Waiting on you" />}>
                    <Lead title="Hiring happens in the gaps">
                        <p>
                            Recruiters spend their day in calls and interviews. They open the app for a minute in between, often
                            one-handed, and that minute decides whether an offer gets approved today or a panel waits until
                            tomorrow. A home screen of totals makes them go hunting. A count of things waiting is a number, not a
                            to-do list.
                        </p>
                    </Lead>
                    <Notes
                        title="What a recruiter needs in that minute"
                        items={[
                            "What's waiting on me, and a way to deal with it without opening five screens.",
                            "When the next interview is, with the link and the brief.",
                            "How each open role is doing, because that's what hiring managers ask.",
                            "A screen that still makes sense on a first day, a quiet day, or with no signal.",
                        ]}
                    />
                </ProblemRow>
            </Step>

            <Step n={2} title="The decisions">
                <Lead title="Lead with the work, then the numbers">
                    <p>
                        I built the screen around a “Waiting on you” list with the action right on the card. The numbers shrank to
                        four small tiles with a trend line each. Everything else had to earn its place by answering “what do I do
                        next?”
                    </p>
                </Lead>
                <div className="mt-8">
                    <Decisions
                        items={[
                            { title: "Waiting on you, with the action on the card", body: "Approve an offer or write feedback without opening anything. Each card says why it's there: “₹22 LPA · 8% above band · raised by Priya Nair”." },
                            { title: "Your jobs, with pipeline health", body: "Each open role shows a bar and a plain status: “2 of 3 openings left”, “needs sourcing”. The answer to “how's that role going?” is on the home screen." },
                            { title: "The next interview, with Join and View brief", body: "Twenty-five minutes before a call is when you need the link and the brief. Both are one tap from the dashboard." },
                            { title: "Tabs for where the day goes", body: "Dashboard, Jobs, Candidates, Interviews, Profile. Creating anything lives in the + in the header, so it doesn't cost a tab." },
                        ]}
                    />
                </div>
            </Step>

            <Step n={3} title="What we built">
                <div className="grid gap-10 md:grid-cols-[1fr_300px] md:items-start md:gap-14">
                    <Lead title="A morning, at a glance">
                        <p>
                            From the top: four numbers with their trend, the next interview with Join and View brief, three things
                            waiting with their buttons, then each open job with its pipeline health. A recruiter can clear the
                            urgent part of the day without scrolling past the second card.
                        </p>
                    </Lead>
                    <div className="mx-auto w-full max-w-[300px]">
                        <Screen src={proto(0)} alt="The recruiter dashboard" label="Dashboard" />
                    </div>
                </div>

                <div className="mt-20">
                    <Lead title="One screen, eleven versions">
                        <p>
                            A dashboard is only as good as its worst day. I drew it for a brand-new workspace with nothing in it, a
                            slow load, a clear queue, no signal, a trial about to end, and for an interviewer who should only see
                            their own interviews. Each one keeps the same layout, so nothing jumps when the real data arrives.
                        </p>
                    </Lead>
                    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
                        <Screen src={img("state-setup")} alt="Dashboard for a new workspace" label="New workspace" note="A setup checklist instead of empty tiles." />
                        <Screen src={img("state-loading")} alt="Dashboard loading" label="Loading" note="Skeletons while the numbers load." />
                        <Screen src={img("state-allclear")} alt="Dashboard with nothing waiting" label="All clear" note="Says so, then offers the new applicants." />
                        <Screen src={img("state-offline")} alt="Dashboard offline" label="Offline" note="Shows what loaded at 9:12; actions sync later." />
                        <Screen src={img("state-trial")} alt="Dashboard with trial ending" label="Trial ending" note="A banner, not a wall." />
                        <Screen src={img("state-interviewer")} alt="Dashboard for an interviewer" label="Interviewer" note="View-only: their interviews and feedback." />
                    </div>
                </div>

                <MoreDetail summary="The full queue, and one place to create anything">
                    <div className="grid gap-10 md:grid-cols-[1fr_260px] md:items-start">
                        <div className="max-w-md space-y-4 text-[15px] leading-7 text-white/60">
                            <p>
                                “See all” opens the whole queue, grouped by what kind of decision it is: offers to approve,
                                feedback to write, slots candidates have booked. The cards keep their buttons, so a recruiter can
                                clear the list from top to bottom without leaving it.
                            </p>
                            <p>
                                The + in the header opens one sheet for every kind of “new”: a job, a candidate, an interview. It
                                sits in the same place on every screen.
                            </p>
                        </div>
                        <Screen src={proto(25)} alt="Create sheet with quick actions" label="Create" />
                    </div>
                </MoreDetail>
            </Step>
        </div>

        {/* ── 02 AI matching ── */}
        <div className="mt-28 md:mt-40">
            <ChapterHead
                id="ta-matching"
                n="02"
                title="AI matching"
                thesis="A fit score is a suggestion. The screen should make it easy to agree with it, and just as easy to disagree."
            />

            <Step n={1} title="The problem">
                <ProblemRow screen={<Screen src={proto(24)} alt="Candidate profile with a fit score of 92" label="Candidate profile" note="The score is the first thing a recruiter sees." />}>
                    <Lead title="A number on its own doesn't get trusted">
                        <p>
                            AI ranking is how a recruiter gets from hundreds of applicants to the ten worth a call. But a bare “92”
                            hides the part that matters. Recruiters don't hire on totals. They want to know what this person has,
                            what they're missing, and whether the missing part matters for this job. If they can't see that, they
                            either ignore the score or follow it blindly. Neither is good.
                        </p>
                    </Lead>
                    <Notes
                        title="What recruiters needed from a score"
                        items={[
                            "Every factor on the same scale, so the weak spot shows at a glance.",
                            "The gaps shown as clearly as the matches, not in small print.",
                            "A sense of rank: 92 out of what, against how many applicants?",
                            "Control over what matters for this job, and the decision left with them.",
                        ]}
                    />
                </ProblemRow>
            </Step>

            <Step n={2} title="The decisions">
                <Lead title="Show the evidence, keep the decision with people">
                    <p>
                        The score stays, because it's a fast way to sort. Everything around it is there to be checked: one scale
                        for every factor, what matched and what didn't side by side, and weights the recruiter can change for
                        this job. The last line on the screen says it plainly: scores are suggestions.
                    </p>
                </Lead>
                <div className="mt-8">
                    <Decisions
                        items={[
                            { title: "Every factor on one scale", body: "Skills 96%, experience 90%, domain 72%. The weak spot is visible in a glance, and coloured differently." },
                            { title: "What matched, and the gaps, with equal weight", body: "“No fintech or payments experience” sits in its own card, not in small print. A recruiter can raise it in the interview." },
                            { title: "Weights the recruiter owns", body: "Skills 40%, experience 25%, domain 15%, location 10%, salary 10%, per job. Apply re-ranks the list straight away." },
                            { title: "The decision next to the reason", body: "Every match has two buttons side by side: “Why 92?” and “Add to pipeline”. The recruiter decides about the candidate, not about the AI." },
                        ]}
                    />
                </div>
            </Step>

            <Step n={3} title="What we built">
                <div className="grid gap-10 md:grid-cols-[1fr_300px] md:items-start md:gap-14">
                    <Lead title="A score you can argue with">
                        <p>
                            The match breakdown opens with the score and where it ranks: #1 of 64 applicants. Under it, each
                            factor as a bar, then two short lists, what matched and the gaps. At the very bottom, one line:
                            “Scores are suggestions. Final decisions are made by your team.”
                        </p>
                    </Lead>
                    <div className="mx-auto w-full max-w-[300px]">
                        <Screen src={proto(5)} alt="Match breakdown for a score of 92" label="Match breakdown" />
                    </div>
                </div>

                <div className="mt-20 grid gap-10 md:grid-cols-[1fr_260px_260px] md:items-start">
                    <Lead title="Matches you can act on from the list">
                        <p>
                            The matches list splits into Strong, Good, and Already in pipeline, so nobody gets suggested twice.
                            Skills show as chips with a tick or a cross. Passive candidates, people not looking, get “Invite to
                            apply” instead of “Add to pipeline”, because adding them to a pipeline they never applied to would be
                            odd for everyone.
                        </p>
                    </Lead>
                    <Screen src={proto(4)} alt="AI matches for a job" label="AI matches" note="38 strong matches across the database and two talent pools." />
                    <Screen src={proto(6)} alt="Matching weights" label="Matching weights" note="Tune what matters for this job. Re-ranks instantly." />
                </div>

                <div className="mt-20 grid gap-10 md:grid-cols-[1fr_260px] md:items-start">
                    <Lead title="Every claim shows where it came from">
                        <p>
                            On a candidate's profile, AI insights has three tabs: Summary, Evaluation, Evidence. Evidence lists
                            where each claim came from: a line in the résumé, something said in interview round 1, a portfolio
                            link. If the AI says someone built a design system, you can see who said so.
                        </p>
                    </Lead>
                    <div className="mx-auto w-full max-w-[260px]">
                        <Screen src={img("ai-evidence")} alt="AI insights evidence tab" label="AI insights · Evidence" />
                    </div>
                </div>

                <div className="mt-20 grid gap-10 md:grid-cols-[1fr_260px_260px] md:items-start">
                    <Lead title="The AI asks before it writes">
                        <p>
                            Writing a job description works the same way. The AI asks first: which client, what budget, which
                            must-haves. The recruiter answers in a chat, then edits a real draft, step by step, before reviewing
                            and publishing. It never posts anything on its own.
                        </p>
                    </Lead>
                    <Screen src={img("ai-jd-chat")} alt="Writing a job description with AI" label="Write with AI" note="The assistant asks follow-ups before drafting." />
                    <Screen src={proto(34)} alt="AI-drafted job description, ready to edit" label="Edit the AI draft" note="Change the tone or regenerate. Nothing is posted yet." />
                </div>
            </Step>
        </div>

        {/* ── 03 Pipeline & interviews ── */}
        <div className="mt-28 md:mt-40">
            <ChapterHead
                id="ta-interviews"
                n="03"
                title="Pipeline & interviews"
                thesis="A pipeline card should say who's stuck, and who they're waiting on."
            />

            <Step n={1} title="The problem">
                <ProblemRow screen={<Screen src={proto(20)} alt="Booking link sent, waiting for the candidate to book" label="Waiting on a booking" />}>
                    <Lead title="Most of hiring is waiting on someone else">
                        <p>
                            A candidate waits on the panel. The panel waits on the recruiter. The recruiter waits on the candidate
                            to say whether Thursday at 11 works. Experience, notice period and salary are all on the profile
                            already; what a recruiter scans a pipeline for is movement: who's booked, who's overdue, who hasn't
                            replied.
                        </p>
                        <p>
                            Scheduling is where most of that waiting starts. When the recruiter picks a slot, every interview
                            begins with a few messages back and forth.
                        </p>
                    </Lead>
                    <Notes
                        title="What recruiters needed"
                        items={[
                            "See at a glance which candidates are stuck, and on whom.",
                            "Know when feedback is overdue, and whose it is.",
                            "Schedule without the back-and-forth.",
                            "Do all of it one-handed, with the main button in reach.",
                        ]}
                    />
                </ProblemRow>
            </Step>

            <Step n={2} title="The decisions">
                <Lead title="Put the next step on the card, and let candidates book">
                    <p>
                        Each card says where that candidate is stuck, in words: “Booked by candidate”, “Feedback due”, “Booking
                        link sent”, with the person or deadline underneath. And when it's time to schedule, the recommended option
                        is to stop picking times at all: send the candidate the panel's common free slots and let them choose.
                    </p>
                </Lead>
                <div className="mt-8">
                    <Decisions
                        items={[
                            { title: "Cards show the next step and who owns it", body: "“Feedback due · Waiting on Saurabh Tenpe”. “Booking link sent · Link expires in 48 h”. The pipeline reads like a to-do list." },
                            { title: "Swipe to advance or reject, with undo", body: "The fastest way through a stage. The screen says which way is which: right to advance, left to reject. A rejection can be undone." },
                            { title: "Self-booking links, recommended", body: "The candidate picks from slots the whole panel has free. The link expires, and the candidate gets a reminder after 24 hours if they haven't booked." },
                            { title: "Scheduling in four short steps", body: "Candidate and round, panel, how to book, confirm. Each step fits on one screen with the button in reach." },
                        ]}
                    />
                </div>
            </Step>

            <Step n={3} title="What we built">
                <div className="grid gap-10 md:grid-cols-[1fr_300px] md:items-start md:gap-14">
                    <Lead title="A pipeline that reads like a to-do list">
                        <p>
                            Stages run across the top with their counts. Every card carries the fit score, a status in plain
                            words, how long it's been in the stage, and a last line that names who or what it's waiting on. The
                            three dots move a candidate to another stage in one step.
                        </p>
                    </Lead>
                    <div className="mx-auto w-full max-w-[300px]">
                        <Screen src={proto(8)} alt="The pipeline, by stage" label="Pipeline · Interview stage" />
                    </div>
                </div>

                <div className="mt-20">
                    <Lead title="Scheduling, one step at a time">
                        <p>
                            The four steps share one layout: a progress bar, one decision, one button at the thumb. Picking a time
                            is still there for the recruiter who wants it, with busy slots crossed out from everyone's synced
                            calendars. But the self-booking link is the recommended path, because it takes the recruiter out of the
                            middle.
                        </p>
                    </Lead>
                    <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                        <Screen src={proto(15)} alt="Schedule step 1: candidate and round" label="1 · Candidate & round" />
                        <Screen src={proto(16)} alt="Schedule step 2: panel" label="2 · Panel" />
                        <Screen src={proto(17)} alt="Schedule step 3: how to book" label="3 · How to book" note="Self-booking is the recommended option." />
                        <Screen src={proto(19)} alt="Schedule step 4: booking link" label="4 · Send the link" note="Expiry, a message, and a 24-hour reminder." />
                    </div>
                </div>

                <div className="mt-20 grid gap-10 md:grid-cols-[1fr_260px_260px] md:items-start">
                    <Lead title="The other end of the link">
                        <p>
                            The booking link opens in the Candidate app. The candidate sees the company, the round, who they'll
                            meet and how long it takes, then picks a slot. It's confirmed straight away, and the recruiter's
                            pipeline card shows “Booked by candidate”. Nobody sent a message.
                        </p>
                    </Lead>
                    <Screen src={img("cand-booking")} alt="Candidate app: book your interview" label="Candidate app · Book" />
                    <Screen src={img("cand-booked")} alt="Candidate app: interview booked" label="Candidate app · Booked" />
                </div>

                <MoreDetail summary="The calendar, picking a time, and feedback">
                    <div className="grid gap-8 sm:grid-cols-3">
                        <Screen src={img("calendar-week")} alt="Interviews calendar, week view" label="Interviews · week" note="Every panel, every round, by day." />
                        <Screen src={proto(18)} alt="Pick a time from common free slots" label="Pick a time" note="Common free slots; busy ones crossed out." />
                        <Screen src={proto(22)} alt="Feedback scorecard" label="Feedback scorecard" note="It stays on the dashboard as “Feedback due” until it's written." />
                    </div>
                </MoreDetail>
            </Step>
        </div>

        {/* ── Three apps ── */}
        <section id="ta-system" className="mt-28 scroll-mt-28 border-t border-white/10 pt-14 md:mt-40">
            <RevealOnScroll>
                <p className="text-[13px] uppercase tracking-[0.2em] text-white/35">The wider system</p>
                <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.03em] text-white md:text-[44px]">
                    Three apps, one hiring loop.
                </h2>
                <p className="mt-4 max-w-3xl text-[16px] leading-[1.75] text-white/60 md:text-[17px]">
                    The recruiter app is the one I've shown, but it only works because the other two answer it. A booking link
                    sent from a pipeline lands in the Candidate app. A company the recruiter works for was verified in Super
                    Admin. All three share one component set and the same habit: lead with what needs attention.
                </p>
            </RevealOnScroll>
            <div className="mt-12 grid gap-12 sm:grid-cols-3 sm:gap-8">
                {[
                    { src: img("cand-home"), app: "Candidate", flows: "11 flows · ~230 screens", body: "Find and apply for jobs, track applications, book interviews straight from email links, compare and accept offers." },
                    { src: proto(0), app: "Recruiter", flows: "25 flows · ~390 screens", body: "Jobs and the AI job builder, candidates and résumé parsing, AI matching, pipeline, interviews, offers, onboarding, reports." },
                    { src: img("admin-overview"), app: "Super Admin", flows: "15 flows · ~130 screens", body: "Tenants and employer verification, plans and credits, moderation, templates, audit logs, system health." },
                ].map((a) => (
                    <RevealOnScroll key={a.app}>
                        <div className="mx-auto flex h-full w-full max-w-[280px] flex-col">
                            <div className="overflow-hidden rounded-[22px] border border-white/10 bg-white shadow-[0_24px_48px_-28px_rgba(0,0,0,0.9)]">
                                <img src={a.src} alt={`${a.app} app home screen`} loading="lazy" className="block aspect-[390/844] w-full object-cover object-top" />
                            </div>
                            <p className="mt-5 text-[20px] font-medium text-white">{a.app}</p>
                            <p className="ta-accent-text mt-1 text-[13px] uppercase tracking-[0.14em]">
                                {a.flows}
                            </p>
                            <p className="mt-3 text-[14px] leading-6 text-white/55">{a.body}</p>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </section>

        {/* ── Prototype ── */}
        <section id="ta-prototype" className="mt-28 scroll-mt-28 border-t border-white/10 pt-14 md:mt-40">
            <TalentAxisPrototype accentColor={ACCENT} />
        </section>

        {/* ── Ending ── */}
        <section id="ta-end" className="mt-28 scroll-mt-28 border-t border-white/10 pt-14 md:mt-40">
            <RevealOnScroll>
                <h2 className="text-[30px] font-semibold leading-tight tracking-[-0.03em] text-white md:text-[44px]">
                    Where it landed, and what it taught me
                </h2>
            </RevealOnScroll>
            <div className="mt-10 grid gap-4 md:grid-cols-4">
                <RevealOnScroll>
                    <div className="h-full rounded-[20px] border p-6" style={{ borderColor: `${ACCENT}55`, background: `${ACCENT}10` }}>
                        <p className="ta-accent-text text-[12px] uppercase tracking-[0.18em]">
                            Status
                        </p>
                        <p className="mt-3 text-[17px] font-medium text-white">In development</p>
                        <p className="mt-2 text-[14px] leading-6 text-white/55">
                            All three apps are designed and handed over, and the team is building them now. No launch numbers yet, so
                            I'm not quoting any.
                        </p>
                    </div>
                </RevealOnScroll>
                {[
                    ["Draw the bad days first", "Eleven versions of one dashboard did more for the layout than the happy path did. If it holds up empty, slow and offline, it holds up."],
                    ["Make the AI easy to overrule", "The breakdown, the gaps and the weights matter more than the score. People trust a suggestion they're allowed to argue with."],
                    ["Remove the middle step", "The best scheduling screen is the one the recruiter never opens, because the candidate booked themselves."],
                ].map(([t, b]) => (
                    <RevealOnScroll key={t}>
                        <div className="h-full rounded-[20px] border border-white/10 p-6">
                            <p className="text-[17px] font-medium text-white">{t}</p>
                            <p className="mt-2 text-[14px] leading-6 text-white/55">{b}</p>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>

            <RevealOnScroll>
                <Link
                    to="/projects/vstatecompliance"
                    className="group mt-14 flex flex-col gap-6 overflow-hidden rounded-[24px] border border-white/10 p-6 transition-colors hover:border-white/25 md:flex-row md:items-center md:p-8"
                >
                    <img src="/lovable-uploads/filenow3.jpg" alt="" className="h-40 w-full rounded-[16px] object-cover md:h-32 md:w-56" />
                    <div className="flex-1">
                        <p className="text-[12px] uppercase tracking-[0.18em] text-white/35">Next case study · 2024–25</p>
                        <p className="mt-2 text-[22px] font-medium text-white">vState, Workflow Platform</p>
                        <p className="mt-1 text-[14px] leading-6 text-white/50">
                            Service design for a multi-tenant compliance SaaS, from blueprints to the screens that cut filing cycles
                            by 45% in pilot sessions.
                        </p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-[14px] text-white/60 group-hover:text-white">
                        Open case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                </Link>
            </RevealOnScroll>
        </section>
    </article>
);

/* Sidebar chapters for ProjectDetail, highlighted as you scroll. */
const navItems = [
    { id: "ta-top", label: "Overview" },
    { id: "ta-dashboard", label: "Dashboard" },
    { id: "ta-matching", label: "AI matching" },
    { id: "ta-interviews", label: "Pipeline & interviews" },
    { id: "ta-system", label: "Three apps" },
    { id: "ta-prototype", label: "Prototype" },
    { id: "ta-end", label: "Where it landed" },
];

export const TalentAxisSidebar = () => {
    const [active, setActive] = useState(navItems[0].id);
    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
            { rootMargin: "-20% 0px -60% 0px" },
        );
        navItems.forEach((n) => {
            const el = document.getElementById(n.id);
            if (el) io.observe(el);
        });
        return () => io.disconnect();
    }, []);
    return (
        <>
            {navItems.map((n, i) => {
                const on = active === n.id;
                return (
                    <div
                        key={n.id}
                        onClick={() => document.getElementById(n.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                        className={`case-study-chapter flex cursor-pointer items-start gap-3 py-1 transition-all duration-300 ${on ? "is-active opacity-100" : "opacity-40 hover:opacity-65"}`}
                    >
                        <span className="flex-shrink-0 pt-px text-[13px] font-light tabular-nums" style={{ color: on ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.3)" }}>
                            {String(i).padStart(2, "0")}
                        </span>
                        <span className="text-[13px] font-light uppercase leading-tight tracking-[0.12em]" style={{ color: on ? "#fff" : "rgba(255,255,255,0.5)" }}>
                            {n.label}
                        </span>
                    </div>
                );
            })}
        </>
    );
};
