// Clickable prototype of the TalentAxis recruiter app (mobile V2), generated from
// the Figma prototype's own links. Hotspots are in frame pixels (390 wide);
// `to` is a frame index, or -1 for "back". `auto` advances after a delay.
// Only links between these 70 screens are kept; the full prototype is in Figma.
// Starts on Sign in (R-01). Dropped from R-01: pickers/toasts/system overlays and
// links to team-member screens (R-04) that aren't in this set.
// Site-only wiring fixes (Figma links point outside this set): Offer approval → Approve
// opens Preview & send; Import summary → View candidates opens a candidate profile;
// "Close" on builder steps returns to Create job instead of the leave-confirm sheet.

import type { ProtoFrame } from "./vstatePrototype";

export const TALENTAXIS_PROTO_WIDTH = 390;

// The product in production (web; the iOS and Android apps share the design).
export const TALENTAXIS_LIVE_URL = "https://talentaxis.thesourcecode.in/";

export const talentaxisPrototype: ProtoFrame[] = [
    { title: "Dashboard", src: "/talentaxis/proto/00.webp", h: 1781, hotspots: [{ x: 16, y: 1352, w: 358, h: 146, to: 3 }, { x: 16, y: 1514, w: 358, h: 146, to: 3 }, { x: 16, y: 808, w: 358, h: 144, to: 26 }, { x: 16, y: 968, w: 358, h: 144, to: 22 }, { x: 16, y: 1128, w: 358, h: 144, to: 14 }, { x: 33, y: 1215, w: 324, h: 40, to: 14 }, { x: 33, y: 895, w: 157, h: 40, to: 26 }, { x: 200, y: 1055, w: 157, h: 40, to: 22 }, { x: 89, y: 1697, w: 70, h: 52, to: 2 }, { x: 230, y: 1697, w: 70, h: 52, to: 13 }, { x: 97, y: 672, w: 94, h: 38, to: 14 }, { x: 34, y: 673, w: 55, h: 36, to: 14 }, { x: 330, y: 125, w: 44, h: 44, to: 25 }, { x: 324, y: 1313, w: 50, h: 20, to: 2 }, { x: 329, y: 769, w: 45, h: 20, to: 1 }] },
    { title: "Waiting on you", src: "/talentaxis/proto/01.webp", h: 915, hotspots: [{ x: 16, y: 166, w: 358, h: 128, to: 26 }, { x: 16, y: 310, w: 358, h: 128, to: 26 }, { x: 16, y: 598, w: 358, h: 128, to: 22 }, { x: 16, y: 742, w: 358, h: 128, to: 22 }, { x: 33, y: 669, w: 324, h: 40, to: 22 }, { x: 33, y: 813, w: 324, h: 40, to: 22 }, { x: 33, y: 237, w: 157, h: 40, to: 26 }, { x: 16, y: 51, w: 38, h: 38, to: 0 }] },
    { title: "Jobs", src: "/talentaxis/proto/02.webp", h: 1077, hotspots: [{ x: 16, y: 324, w: 358, h: 146, to: 3 }, { x: 16, y: 486, w: 358, h: 146, to: 3 }, { x: 16, y: 648, w: 358, h: 146, to: 3 }, { x: 16, y: 810, w: 358, h: 146, to: 3 }, { x: 19, y: 993, w: 70, h: 52, to: 0 }, { x: 230, y: 993, w: 70, h: 52, to: 13 }, { x: 330, y: 144, w: 44, h: 44, to: 28 }] },
    { title: "Job detail", src: "/talentaxis/proto/03.webp", h: 1365, hotspots: [{ x: 16, y: 1276, w: 174, h: 44, to: 8 }, { x: 200, y: 1276, w: 174, h: 44, to: 4 }, { x: 113, y: 188, w: 112, h: 34, to: 8 }, { x: 229, y: 188, w: 83, h: 34, to: 4 }, { x: 16, y: 51, w: 38, h: 38, to: 2 }] },
    { title: "AI matches", src: "/talentaxis/proto/04.webp", h: 844, hotspots: [{ x: 16, y: 244, w: 358, h: 160, to: 24 }, { x: 16, y: 420, w: 358, h: 160, to: 5 }, { x: 16, y: 596, w: 358, h: 160, to: 5 }, { x: 33, y: 347, w: 157, h: 40, to: 5 }, { x: 200, y: 347, w: 157, h: 40, to: 8 }, { x: 33, y: 523, w: 157, h: 40, to: 5 }, { x: 200, y: 523, w: 157, h: 40, to: 8 }, { x: 326, y: 46, w: 48, h: 48, to: 6 }, { x: 16, y: 51, w: 38, h: 38, to: 3 }] },
    { title: "Why ranked 92", src: "/talentaxis/proto/05.webp", h: 929, hotspots: [{ x: 16, y: 51, w: 38, h: 38, to: 4 }] },
    { title: "Matching weights", src: "/talentaxis/proto/06.webp", h: 844, hotspots: [{ x: 273, y: 52, w: 51, h: 36, to: 7 }, { x: 336, y: 51, w: 38, h: 38, to: 4 }] },
    { title: "Re-ranking matches", src: "/talentaxis/proto/07.webp", h: 844, hotspots: [{ x: 326, y: 46, w: 48, h: 48, to: 6 }, { x: 16, y: 51, w: 38, h: 38, to: 3 }], auto: { after: 1600, to: 4 } },
    { title: "Pipeline", src: "/talentaxis/proto/08.webp", h: 844, hotspots: [{ x: 16, y: 200, w: 358, h: 161, to: 27 }, { x: 16, y: 377, w: 358, h: 147, to: 27 }, { x: 16, y: 540, w: 358, h: 147, to: 27 }, { x: 16, y: 51, w: 38, h: 38, to: 3 }, { x: 337, y: 233, w: 20, h: 28, to: 9 }, { x: 337, y: 403, w: 20, h: 28, to: 9 }, { x: 337, y: 566, w: 20, h: 28, to: 9 }] },
    { title: "Move stage", src: "/talentaxis/proto/09.webp", h: 844, hotspots: [{ x: 0, y: 0, w: 390, h: 844, to: 8 }, { x: 20, y: 763, w: 350, h: 44, to: 12 }, { x: 330, y: 253, w: 40, h: 40, to: 8 }, { x: 16, y: 51, w: 38, h: 38, to: 3 }] },
    { title: "Reject with reason", src: "/talentaxis/proto/10.webp", h: 844, hotspots: [{ x: 0, y: 0, w: 390, h: 844, to: -1 }, { x: 20, y: 709, w: 350, h: 44, to: 11 }, { x: 20, y: 763, w: 350, h: 44, to: 8 }, { x: 16, y: 51, w: 38, h: 38, to: 3 }] },
    { title: "Undo after reject", src: "/talentaxis/proto/11.webp", h: 844, hotspots: [{ x: 16, y: 166, w: 358, h: 161, to: 27 }, { x: 16, y: 51, w: 38, h: 38, to: 3 }, { x: 337, y: 199, w: 20, h: 28, to: 9 }] },
    { title: "Moved to Offer", src: "/talentaxis/proto/12.webp", h: 844, hotspots: [{ x: 16, y: 166, w: 358, h: 80, to: 24 }, { x: 16, y: 51, w: 38, h: 38, to: 3 }] },
    { title: "Interviews", src: "/talentaxis/proto/13.webp", h: 920, hotspots: [{ x: 16, y: 375, w: 358, h: 120, to: 14 }, { x: 16, y: 679, w: 358, h: 120, to: 20 }, { x: 19, y: 836, w: 70, h: 52, to: 0 }, { x: 89, y: 836, w: 70, h: 52, to: 2 }, { x: 330, y: 144, w: 44, h: 44, to: 15 }] },
    { title: "Interview detail", src: "/talentaxis/proto/14.webp", h: 1030, hotspots: [{ x: 16, y: 286, w: 358, h: 94, to: 24 }, { x: 152, y: 214, w: 130, h: 38, to: -1 }, { x: 16, y: 51, w: 38, h: 38, to: 13 }] },
    { title: "Schedule · candidate & round", src: "/talentaxis/proto/15.webp", h: 840, hotspots: [{ x: 20, y: 765, w: 350, h: 44, to: 16 }, { x: 336, y: 51, w: 38, h: 38, to: 13 }] },
    { title: "Schedule · panel", src: "/talentaxis/proto/16.webp", h: 840, hotspots: [{ x: 20, y: 765, w: 350, h: 44, to: 17 }, { x: 336, y: 51, w: 38, h: 38, to: 15 }] },
    { title: "Schedule · booking method", src: "/talentaxis/proto/17.webp", h: 840, hotspots: [{ x: 20, y: 765, w: 350, h: 44, to: 19 }, { x: 336, y: 51, w: 38, h: 38, to: 16 }] },
    { title: "Schedule · pick a slot", src: "/talentaxis/proto/18.webp", h: 840, hotspots: [{ x: 20, y: 765, w: 350, h: 44, to: 21 }, { x: 336, y: 51, w: 38, h: 38, to: 17 }] },
    { title: "Schedule · self-booking link", src: "/talentaxis/proto/19.webp", h: 840, hotspots: [{ x: 20, y: 765, w: 350, h: 44, to: 20 }, { x: 336, y: 51, w: 38, h: 38, to: 17 }] },
    { title: "Booking link sent", src: "/talentaxis/proto/20.webp", h: 844, hotspots: [{ x: 16, y: 579, w: 358, h: 44, to: 18 }, { x: 16, y: 51, w: 38, h: 38, to: 13 }] },
    { title: "Interview scheduled", src: "/talentaxis/proto/21.webp", h: 844, hotspots: [{ x: 16, y: 547, w: 358, h: 44, to: 14 }, { x: 16, y: 601, w: 358, h: 44, to: 13 }] },
    { title: "Feedback scorecard", src: "/talentaxis/proto/22.webp", h: 900, hotspots: [{ x: 20, y: 825, w: 350, h: 44, to: 23 }, { x: 336, y: 51, w: 38, h: 38, to: 13 }] },
    { title: "Feedback submitted", src: "/talentaxis/proto/23.webp", h: 844, hotspots: [{ x: 16, y: 214, w: 358, h: 158, to: 24 }, { x: 33, y: 315, w: 324, h: 40, to: 9 }, { x: 16, y: 51, w: 38, h: 38, to: 13 }] },
    { title: "Candidate profile", src: "/talentaxis/proto/24.webp", h: 1302, hotspots: [{ x: 33, y: 872, w: 324, h: 99, to: 8 }, { x: 20, y: 1228, w: 170, h: 44, to: 10 }, { x: 200, y: 1228, w: 170, h: 44, to: 9 }, { x: 254, y: 249, w: 103, h: 40, to: 15 }, { x: 58, y: 456, w: 98, h: 18, to: 5 }] },
    { title: "Create", src: "/talentaxis/proto/25.webp", h: 808, hotspots: [{ x: 0, y: 0, w: 390, h: 808, to: 0 }, { x: 37, y: 452, w: 316, h: 62, to: 28 }, { x: 37, y: 514, w: 316, h: 63, to: 40 }, { x: 37, y: 577, w: 316, h: 63, to: 15 }, { x: 19, y: 724, w: 70, h: 52, to: 0 }, { x: 89, y: 724, w: 70, h: 52, to: 2 }, { x: 230, y: 724, w: 70, h: 52, to: 13 }, { x: 330, y: 125, w: 44, h: 44, to: -1 }, { x: 330, y: 389, w: 40, h: 40, to: 0 }] },
    { title: "Offer approval", src: "/talentaxis/proto/26.webp", h: 908, hotspots: [{ x: 16, y: 114, w: 358, h: 78, to: 24 }, { x: 16, y: 51, w: 38, h: 38, to: 47 }, { x: 20, y: 834, w: 170, h: 44, to: 47 }, { x: 200, y: 834, w: 170, h: 44, to: 50 }] },
    { title: "Candidate timeline", src: "/talentaxis/proto/27.webp", h: 844, hotspots: [{ x: 34, y: 215, w: 124, h: 36, to: 14 }, { x: 166, y: 214, w: 71, h: 38, to: 24 }, { x: 16, y: 51, w: 38, h: 38, to: 8 }] },

    // ── Post a job with AI (R-05) ──
    { title: "Create job", src: "/talentaxis/proto/28.webp", h: 844, hotspots: [{ x: 336, y: 51, w: 38, h: 38, to: 2 }, { x: 33, y: 521, w: 324, h: 63, to: 39 }, { x: 33, y: 584, w: 324, h: 63, to: 39 }, { x: 33, y: 710, w: 324, h: 20, to: 29 }, { x: 20, y: 769, w: 350, h: 44, to: 38 }] },
    { title: "Write with AI", src: "/talentaxis/proto/29.webp", h: 844, hotspots: [{ x: 336, y: 51, w: 38, h: 38, to: 28 }, { x: 33, y: 251, w: 324, h: 64, to: 30 }, { x: 33, y: 315, w: 324, h: 65, to: 30 }, { x: 33, y: 380, w: 324, h: 65, to: 30 }, { x: 330, y: 771, w: 40, h: 40, to: 30 }] },
    { title: "AI chat", src: "/talentaxis/proto/30.webp", h: 844, hotspots: [{ x: 336, y: 51, w: 38, h: 38, to: 29 }, { x: 330, y: 771, w: 40, h: 40, to: 31 }] },
    { title: "AI chat · draft ready", src: "/talentaxis/proto/31.webp", h: 836, hotspots: [{ x: 336, y: 51, w: 38, h: 38, to: 30 }, { x: 20, y: 707, w: 350, h: 44, to: 32 }, { x: 20, y: 761, w: 350, h: 44, to: 30 }] },
    { title: "Review the AI draft", src: "/talentaxis/proto/32.webp", h: 840, hotspots: [{ x: 241, y: 52, w: 83, h: 36, to: -1 }, { x: 336, y: 51, w: 38, h: 38, to: 28 }, { x: 20, y: 765, w: 350, h: 44, to: 33 }] },
    { title: "Create job · 2 Requirements", src: "/talentaxis/proto/33.webp", h: 840, hotspots: [{ x: 336, y: 51, w: 38, h: 38, to: 28 }, { x: 20, y: 765, w: 350, h: 44, to: 34 }] },
    { title: "Create job · 3 Description", src: "/talentaxis/proto/34.webp", h: 840, hotspots: [{ x: 336, y: 51, w: 38, h: 38, to: 28 }, { x: 16, y: 557, w: 174, h: 44, to: 38 }, { x: 200, y: 557, w: 174, h: 44, to: 38 }, { x: 20, y: 765, w: 350, h: 44, to: 35 }] },
    { title: "Create job · 4 Screening & rounds", src: "/talentaxis/proto/35.webp", h: 948, hotspots: [{ x: 336, y: 51, w: 38, h: 38, to: 28 }, { x: 20, y: 873, w: 350, h: 44, to: 36 }] },
    { title: "Create job · 5 Review & publish", src: "/talentaxis/proto/36.webp", h: 1047, hotspots: [{ x: 336, y: 51, w: 38, h: 38, to: 28 }, { x: 20, y: 918, w: 350, h: 44, to: 37 }, { x: 20, y: 972, w: 350, h: 44, to: 2 }] },
    { title: "Job published", src: "/talentaxis/proto/37.webp", h: 844, hotspots: [{ x: 116, y: 340, w: 158, h: 44, to: 4 }, { x: 16, y: 460, w: 358, h: 44, to: 2 }] },
    { title: "AI drafting the job", src: "/talentaxis/proto/38.webp", h: 840, hotspots: [{ x: 336, y: 51, w: 38, h: 38, to: 28 }], auto: { after: 1600, to: 34 } },
    { title: "Create job · 1 Basics", src: "/talentaxis/proto/39.webp", h: 840, hotspots: [{ x: 336, y: 51, w: 38, h: 38, to: 28 }, { x: 20, y: 765, w: 350, h: 44, to: 33 }] },

    // ── Add candidates & résumé parsing (R-06) ──
    { title: "Add candidates", src: "/talentaxis/proto/40.webp", h: 844, hotspots: [{ x: 336, y: 51, w: 38, h: 38, to: -1 }, { x: 33, y: 209, w: 324, h: 62, to: 41 }, { x: 33, y: 521, w: 324, h: 63, to: 41 }] },
    { title: "Upload résumés", src: "/talentaxis/proto/41.webp", h: 914, hotspots: [{ x: 336, y: 51, w: 38, h: 38, to: 40 }, { x: 20, y: 839, w: 350, h: 44, to: 42 }] },
    { title: "Parsing résumés", src: "/talentaxis/proto/42.webp", h: 840, hotspots: [{ x: 336, y: 51, w: 38, h: 38, to: 40 }, { x: 33, y: 292, w: 324, h: 63, to: 43 }], auto: { after: 1800, to: 46 } },
    { title: "Parse review", src: "/talentaxis/proto/43.webp", h: 861, hotspots: [{ x: 284, y: 52, w: 40, h: 36, to: 45 }, { x: 336, y: 51, w: 38, h: 38, to: 46 }, { x: 20, y: 787, w: 170, h: 44, to: 46 }, { x: 200, y: 787, w: 170, h: 44, to: 44 }] },
    { title: "Duplicate detected", src: "/talentaxis/proto/44.webp", h: 832, hotspots: [{ x: 336, y: 51, w: 38, h: 38, to: 43 }, { x: 20, y: 649, w: 350, h: 44, to: 45 }, { x: 20, y: 703, w: 350, h: 44, to: 45 }, { x: 20, y: 757, w: 350, h: 44, to: 45 }] },
    { title: "Import summary", src: "/talentaxis/proto/45.webp", h: 844, hotspots: [{ x: 16, y: 641, w: 358, h: 44, to: 24 }, { x: 16, y: 695, w: 358, h: 44, to: 40 }] },
    { title: "Parsed · needs review", src: "/talentaxis/proto/46.webp", h: 840, hotspots: [{ x: 336, y: 51, w: 38, h: 38, to: 40 }, { x: 16, y: 242, w: 358, h: 78, to: 43 }, { x: 20, y: 765, w: 350, h: 44, to: 45 }] },

    // ── Offers (R-12) ──
    { title: "Offers", src: "/talentaxis/proto/47.webp", h: 844, hotspots: [{ x: 16, y: 51, w: 38, h: 38, to: 0 }, { x: 336, y: 51, w: 38, h: 38, to: 48 }, { x: 16, y: 166, w: 358, h: 108, to: 26 }, { x: 16, y: 290, w: 358, h: 108, to: 52 }, { x: 16, y: 414, w: 358, h: 108, to: 54 }] },
    { title: "Build an offer", src: "/talentaxis/proto/48.webp", h: 840, hotspots: [{ x: 336, y: 51, w: 38, h: 38, to: 47 }, { x: 20, y: 765, w: 350, h: 44, to: 49 }] },
    { title: "Offer terms", src: "/talentaxis/proto/49.webp", h: 840, hotspots: [{ x: 336, y: 51, w: 38, h: 38, to: 47 }, { x: 20, y: 765, w: 350, h: 44, to: 26 }] },
    { title: "Preview & send", src: "/talentaxis/proto/50.webp", h: 836, hotspots: [{ x: 336, y: 51, w: 38, h: 38, to: 47 }, { x: 20, y: 707, w: 350, h: 44, to: 51 }] },
    { title: "Offer sent", src: "/talentaxis/proto/51.webp", h: 844, hotspots: [{ x: 16, y: 51, w: 38, h: 38, to: 47 }, { x: 137, y: 372, w: 116, h: 44, to: 52 }] },
    { title: "Offer tracking", src: "/talentaxis/proto/52.webp", h: 844, hotspots: [{ x: 16, y: 51, w: 38, h: 38, to: 47 }, { x: 336, y: 51, w: 38, h: 38, to: 53 }] },
    { title: "Record response", src: "/talentaxis/proto/53.webp", h: 844, hotspots: [{ x: 0, y: 0, w: 390, h: 844, to: 52 }, { x: 330, y: 189, w: 40, h: 40, to: 52 }, { x: 20, y: 763, w: 350, h: 44, to: 54 }] },
    { title: "Offer accepted", src: "/talentaxis/proto/54.webp", h: 840, hotspots: [{ x: 16, y: 51, w: 38, h: 38, to: 47 }] },

    // ── Sign in & workspace setup (R-01) — prototype starts here ──
    { title: "Sign in", src: "/talentaxis/proto/55.webp", h: 844, hotspots: [{ x: 24, y: 524, w: 107, h: 20, to: 56 }, { x: 244, y: 524, w: 122, h: 20, to: 57 }, { x: 24, y: 562, w: 342, h: 52, to: 68 }, { x: 24, y: 666, w: 165, h: 50, to: 0 }, { x: 201, y: 666, w: 165, h: 50, to: 59 }, { x: 193, y: 783, w: 135, h: 20, to: 61 }] },
    { title: "Sign in · mobile OTP", src: "/talentaxis/proto/56.webp", h: 844, hotspots: [{ x: 24, y: 428, w: 149, h: 20, to: 55 }, { x: 24, y: 466, w: 342, h: 52, to: 67 }, { x: 24, y: 570, w: 165, h: 50, to: 0 }, { x: 201, y: 570, w: 165, h: 50, to: 59 }, { x: 193, y: 783, w: 135, h: 20, to: 61 }] },
    { title: "Forgot password", src: "/talentaxis/proto/57.webp", h: 839, hotspots: [{ x: 16, y: 51, w: 38, h: 38, to: 55 }, { x: 20, y: 764, w: 350, h: 44, to: 58 }] },
    { title: "Reset link sent", src: "/talentaxis/proto/58.webp", h: 844, hotspots: [{ x: 16, y: 51, w: 38, h: 38, to: 55 }, { x: 146, y: 417, w: 99, h: 20, to: 55 }] },
    { title: "Sign in with SSO", src: "/talentaxis/proto/59.webp", h: 839, hotspots: [{ x: 16, y: 51, w: 38, h: 38, to: 55 }, { x: 32, y: 326, w: 326, h: 62, to: 0 }, { x: 32, y: 388, w: 326, h: 61, to: 0 }, { x: 32, y: 449, w: 326, h: 61, to: 0 }, { x: 20, y: 764, w: 350, h: 44, to: 60 }] },
    { title: "Two-factor verification", src: "/talentaxis/proto/60.webp", h: 839, hotspots: [{ x: 16, y: 51, w: 38, h: 38, to: 55 }, { x: 20, y: 764, w: 350, h: 44, to: 0 }] },
    { title: "Create workspace · company", src: "/talentaxis/proto/61.webp", h: 839, hotspots: [{ x: 16, y: 51, w: 38, h: 38, to: 55 }, { x: 20, y: 764, w: 350, h: 44, to: 62 }] },
    { title: "Create workspace · your hiring", src: "/talentaxis/proto/62.webp", h: 839, hotspots: [{ x: 16, y: 51, w: 38, h: 38, to: 61 }, { x: 20, y: 764, w: 350, h: 44, to: 63 }] },
    { title: "Create workspace · invite team", src: "/talentaxis/proto/63.webp", h: 835, hotspots: [{ x: 16, y: 51, w: 38, h: 38, to: 62 }, { x: 20, y: 706, w: 350, h: 44, to: 69 }, { x: 20, y: 760, w: 350, h: 44, to: 69 }] },
    { title: "Sign up", src: "/talentaxis/proto/64.webp", h: 849, hotspots: [{ x: 16, y: 51, w: 38, h: 38, to: 55 }, { x: 260, y: 726, w: 46, h: 20, to: 55 }, { x: 20, y: 774, w: 350, h: 44, to: 65 }] },
    { title: "Choose a plan", src: "/talentaxis/proto/65.webp", h: 839, hotspots: [{ x: 16, y: 51, w: 38, h: 38, to: 64 }, { x: 20, y: 764, w: 350, h: 44, to: 66 }] },
    { title: "Verify email", src: "/talentaxis/proto/66.webp", h: 839, hotspots: [{ x: 16, y: 51, w: 38, h: 38, to: 65 }, { x: 16, y: 324, w: 358, h: 20, to: 64 }, { x: 20, y: 764, w: 350, h: 44, to: 67 }] },
    { title: "Verify mobile · OTP", src: "/talentaxis/proto/67.webp", h: 839, hotspots: [{ x: 16, y: 51, w: 38, h: 38, to: 66 }, { x: 20, y: 764, w: 350, h: 44, to: 61 }] },
    { title: "Dashboard · loading", src: "/talentaxis/proto/68.webp", h: 808, hotspots: [{ x: 330, y: 125, w: 44, h: 44, to: 25 }, { x: 19, y: 724, w: 70, h: 52, to: 0 }, { x: 89, y: 724, w: 70, h: 52, to: 2 }, { x: 230, y: 724, w: 70, h: 52, to: 13 }], auto: { after: 1600, to: 0 } },
    { title: "Dashboard · new workspace", src: "/talentaxis/proto/69.webp", h: 840, hotspots: [{ x: 32, y: 310, w: 326, h: 80, to: 28 }, { x: 32, y: 390, w: 326, h: 63, to: 28 }, { x: 32, y: 453, w: 326, h: 63, to: 40 }, { x: 19, y: 756, w: 70, h: 52, to: 0 }, { x: 89, y: 756, w: 70, h: 52, to: 2 }, { x: 230, y: 756, w: 70, h: 52, to: 13 }] },
];

// Starts on R-01.01 Sign in (Figma node 18442:5953).
export const TALENTAXIS_PROTO_START = 55;
