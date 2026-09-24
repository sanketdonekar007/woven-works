import React, { useState, useMemo } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import { Search, Compass, ChevronDown, ChevronRight, Layers, Users, Trophy, DollarSign, Activity, Calendar } from "lucide-react";

// Brand Color Palette
const INDIGO = "#1e1b4b";
const TEAL = "#00a7e1";
const CRIMSON = "#e53e3e";
const MINT = "#10b981";
const PURPLE = "#8b5cf6";
const AMBER = "#f59e0b";

interface ScreenNode {
  name: string;
  refFile?: string;
  desc?: string;
  isPrimary?: boolean;
}

interface SubCategoryNode {
  name: string;
  icon?: React.ReactNode;
  color: string;
  screens: ScreenNode[];
}

interface ModuleNode {
  category: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  subcategories: SubCategoryNode[];
}

export function CricMetrixIA() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<string>("all");
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    "User & Teams": true,
    "Match & Scoring": true,
  });

  const modules: ModuleNode[] = useMemo(() => [
    {
      category: "User & Teams",
      icon: <Users className="w-4 h-4" />,
      color: TEAL,
      description: "Manage academy roster, coach assignments, and external teams.",
      subcategories: [
        {
          name: "User Profiles",
          color: TEAL,
          screens: [
            { name: "Coach List & Profiles", refFile: "Admin - User Management - Coach.png", desc: "Browse, sort, and filter all registered academy coaches" },
            { name: "Add New Coach", refFile: "Admin - User Management - Coach - Add.png", desc: "Onboarding form for coach credentials, specialties, and slots" },
            { name: "Edit Coach Details", refFile: "Admin - User Management - Coach - Edit.png", desc: "Modify coach bio, availability, and active squads" },
            { name: "Player Directory", refFile: "Admin - User Management - Player.png", desc: "Detailed grid of all active players, groups, and contact details" },
            { name: "Update Player Info", refFile: "Admin - User Management -  Update Player.png", desc: "Edit metrics, assigned coach, parental links, and profile pictures" },
          ]
        },
        {
          name: "Team Setup",
          color: TEAL,
          screens: [
            { name: "Team Management Hub", refFile: "Admin - Team Management.png", desc: "Configure squad rosters, assign age-groups, and review overall team size" },
            { name: "Register New Team", refFile: "Admin - Teams - Register New Team.png", desc: "Create a new training batch, select division, and assign admin contacts" },
            { name: "Assign Coach to Squad", refFile: "Admin - Assign Coach - Select.png", desc: "Link coaches to specific squads based on specialization" },
            { name: "Select Coaching Assignment Players", refFile: "Admin - Assign Coach - Select - Select Players.png", desc: "Pinpoint specific student-athletes assigned to the coach's primary oversight" },
          ]
        },
        {
          name: "Outside Teams",
          color: TEAL,
          screens: [
            { name: "Outside Teams Directory", refFile: "Admin - Oustside Team.png", desc: "Directory of non-academy local teams registered for friendly match fixtures" },
            { name: "Register Outside Team", refFile: "Admin - Oustside Team - Register.png", desc: "Onboard guest teams with logo, coach details, and contact info" },
            { name: "Edit Guest Team Details", refFile: "Admin - Oustside Team - Edit.png", desc: "Modify roster or contact information for external clubs" },
            { name: "Quick Transfer Tool", refFile: "Admin - Oustside Team - Quick Transfer.png", desc: "Swap players between internal squads and external guest lists for friendly fixtures" },
          ]
        }
      ]
    },
    {
      category: "Match & Scoring",
      icon: <Trophy className="w-4 h-4" />,
      color: CRIMSON,
      description: "Match fixtures, interactive field setup, and voice-assisted scoring.",
      subcategories: [
        {
          name: "Match Center Hub",
          color: CRIMSON,
          screens: [
            { name: "Match Dashboard", refFile: "Admin - Match Center.png", desc: "List current, upcoming, and past match fixtures with final scores" },
            { name: "Edit Field Setup", refFile: "Admin - Match Center - Edit Field Setup.png", desc: "Interactive field editor to drag and drop fielding positions (e.g. slip, cover, gully)" },
            { name: "Field Analysis Mode", refFile: "Admin - Match Center - Field Analysis.png", desc: "Visual overlay showing scoring zones, boundary frequency, and fielder efficiency" },
          ]
        },
        {
          name: "Pre-Match Operations",
          color: CRIMSON,
          screens: [
            { name: "Toss Screen", refFile: "Admin - Match Center - Toss.png", desc: "Flip the virtual coin to log who won the toss" },
            { name: "Toss Result Confirmation", refFile: "Admin - Match Center - Toss Result.png", desc: "Log decision (Bat/Bowl) and select the opening strategy details" },
            { name: "Select Active Players", refFile: "Admin - Match Center - Select Acgive Players.png", desc: "Select which players on the roster are present and active for the match day" },
            { name: "Select Bench Players B", refFile: "Admin - Match Center - Select Players B.png", desc: "Assign substitution sheets and secondary player groups" },
            { name: "Choose Playing XI", refFile: "Admin - Match Center - Choose Players.png", desc: "Finalize the playing squad positions and batting order" },
            { name: "Final Roster Confirmation", refFile: "Admin - Match Center - Final Choose Players.png", desc: "Lock in playing XI and sub sheets before starting live scorer" },
          ]
        },
        {
          name: "Live Scoring & Records",
          color: CRIMSON,
          screens: [
            { name: "Record Delivery (Voice Scorer)", refFile: "Admin - Match Center - Record Delivery.png", desc: "Live match scoring interface with speech-to-text ball logging", isPrimary: true },
            { name: "Training Session Scoring", refFile: "Admin - Training Records - Session Scoring.png", desc: "Record drill completion scores and speed/accuracy metrics for players" },
          ]
        }
      ]
    },
    {
      category: "Schedules & Attendance",
      icon: <Calendar className="w-4 h-4" />,
      color: MINT,
      description: "Calendar training events and AI facial recognition attendance tracking.",
      subcategories: [
        {
          name: "Scheduler",
          color: MINT,
          screens: [
            { name: "Schedule Master View", refFile: "Admin - Schedule.png", desc: "Calendar dashboard listing academy sessions, holidays, and match days" },
            { name: "Schedule New Training", refFile: "Admin - Schedule - New Training.png", desc: "Create a recurring coaching batch, assign pitch, and set slots" },
            { name: "Schedule New Event", refFile: "Admin - Schedule - New Event.png", desc: "Configure non-training events like parents' meetings or health reviews" },
            { name: "Edit Scheduled Training", refFile: "Admin - Schedule - Edit Training.png", desc: "Modify pitch allocation, time, or assigned coach for a batch" },
            { name: "Historical Schedule Records", refFile: "Admin - Schedule - Historical Record.png", desc: "Audit past logs of scheduled slots, trainer hours, and room bookings" },
          ]
        },
        {
          name: "Attendance System",
          color: MINT,
          screens: [
            { name: "Daily Session Scanner", refFile: "Admin - Attendance - Daily Session.png", desc: "Check-in list matching registered players for a specific date" },
            { name: "Special Event Tracker", refFile: "Admin - Attendance - Event.png", desc: "Attendance records for workshops, friendly matches, or guest coaching" },
            { name: "Attendance Tracking Metrics", refFile: "Admin - Attendance - Tracking.png", desc: "Analyzes player attendance trends and logs excuses or flags consecutive drops" },
            { name: "Training History Log", refFile: "Admin - Training History.png", desc: "Archive of completed sessions and corresponding coach summary logs" },
          ]
        }
      ]
    },
    {
      category: "Financial System",
      icon: <DollarSign className="w-4 h-4" />,
      color: AMBER,
      description: "Tuition structures, automated cashback reward rules, and digital checkout wallet.",
      subcategories: [
        {
          name: "Fees Management",
          color: AMBER,
          screens: [
            { name: "Fee Master Settings", refFile: "Admin - Fees - Fee Master.png", desc: "Define base tuition for training packages, age-groups, and special courses" },
            { name: "Add New Fee Structure", refFile: "Admin - Fees - Add New.png", desc: "Create custom payment models, installment periods, and fine systems" },
            { name: "Assign Fees to Cohorts", refFile: "Admin - Fees - Assign Fees.png", desc: "Assign specific fee models to players or team batches" },
            { name: "Payments Ledger", refFile: "Admin - Fees - Payments.png", desc: "Log offline receipts, review transaction history, and flag outstanding balances" },
            { name: "Wallet Dashboard", refFile: "Admin - Fees - Wallet.png", desc: "Unified ledger view of digital deposits, cashback balance, and bonus balance" },
          ]
        },
        {
          name: "Incentives & Store",
          color: AMBER,
          screens: [
            { name: "Cashback Reward Rules", refFile: "Admin - Fees - Cashback Rules.png", desc: "Configure triggers (e.g. 5% back on early fee payment or active streak)" },
            { name: "Add Cashback Trigger", refFile: "Admin - Fees - Cashback Rules - Add New.png", desc: "Create custom criteria matching academy actions to wallet cashbacks" },
            { name: "Coupons Engine", refFile: "Admin - Fees - Coupons.png", desc: "Manage promo codes, discount percentages, and user referral codes" },
            { name: "Academy Store Manager", refFile: "Admin - Store Management.png", desc: "Sell cricket kits, uniforms, and equipment directly to players via wallet checkout" },
            { name: "Bonuses Ledger", refFile: "Admin - Bonuses.png", desc: "Review seasonal grants, merit bonuses, and coach commissions" },
            { name: "Distribute Merit Bonus", refFile: "Admin - Bonuses - Distribute Bonus.png", desc: "Bulk tool to distribute bonus credits to players or coaches" },
          ]
        }
      ]
    },
    {
      category: "Performance & Wellness",
      icon: <Activity className="w-4 h-4" />,
      color: PURPLE,
      description: "Detailed athletic diagnostics, physical health logs, and goal benchmarks.",
      subcategories: [
        {
          name: "Metrics Tracking",
          color: PURPLE,
          screens: [
            { name: "Batting Performance Diagnostics", refFile: "Admin - Performance Tracking - Batting.png", desc: "Strike rate, run charts, pitch heatmaps, and dismissal patterns" },
            { name: "Bowling Performance Diagnostics", refFile: "Admin - Performance Tracking - Bowling.png", desc: "Log run-up speeds, spin ratios, line-and-length maps, and wickets" },
            { name: "Fielding Performance Logs", refFile: "Admin - Performance Tracking - Fielding.png", desc: "Track catch rates, direct hits, run-out assists, and dynamic reaction time" },
            { name: "Team Overview Metrics", refFile: "Admin - Performance Tracking - Team View.png", desc: "Aggregate team diagnostics showing strengths and training focuses" },
          ]
        },
        {
          name: "Player Health",
          color: PURPLE,
          screens: [
            { name: "Health Overview", refFile: "Admin - Players Health.png", desc: "Central logs of BMI, injuries, physical status, and medical permits" },
            { name: "Wellness Logging", refFile: "Admin - Players Health - Welness.png", desc: "Sleep duration, hydration targets, and physical fatigue self-reports" },
            { name: "Fitness & Strength Tests", refFile: "Admin - Players Health - Fitness Test.png", desc: "Speed sprints, beep test scores, vertical jump, and core strength records" },
            { name: "Wellness Detailed Panel", refFile: "Admin - Players Health - Overview.png", desc: "Aggregated health alerts and coach review prompts for vulnerable players" },
          ]
        },
        {
          name: "Goal Tracking",
          color: PURPLE,
          screens: [
            { name: "Academy Strategic Goals", refFile: "Admin - Goal Tracking - Academy Goals.png", desc: "Global objectives for the entire academy (e.g. increase batting average by 20%)" },
            { name: "Create Academy Goal", refFile: "Admin - Goal Tracking - Create Academy Goals.png", desc: "Define objective, milestone checkpoints, and target metrics" },
            { name: "Team Tactical Goals", refFile: "Admin - Goal Tracking - Team Goals.png", desc: "Filter and view goals assigned to specific team squads" },
            { name: "Assign Team Goals", refFile: "Admin - Goal Tracking - Assign Team Goals.png", desc: "Pick team squad, choose roadmap goals, and set deadlines" },
            { name: "Active Assignments Tracker", refFile: "Admin - Goal Tracking - Assignment.png", desc: "Grid showing which coaches have assigned which homework drills" },
            { name: "Team Assignment Status", refFile: "Admin - Goal Tracking - Team Assignments.png", desc: "Review real-time completion status of tactical goals per squad" },
          ]
        }
      ]
    },
    {
      category: "Engagement & Core Settings",
      icon: <Trophy className="w-4 h-4" />,
      color: "#f43f5e",
      description: "Communication channels, marketing tools, leaderboards, and system settings.",
      subcategories: [
        {
          name: "Social & Recognition",
          color: "#f43f5e",
          screens: [
            { name: "Hall of Fame Hub", refFile: "Admin - Hall of Fame.png", desc: "Gallery of academy graduates playing at state/national levels" },
            { name: "Create Hall of Fame Entry", refFile: "Admin - Hall of Fame - Create New Entry.png", desc: "Upload graduation details, key stats, and honors description" },
            { name: "Batting Master Leaderboard", refFile: "Admin - Master Leaderboard - Batting.png", desc: "Top run-scorers and batting averages across the entire academy" },
            { name: "Bowling Master Leaderboard", refFile: "Admin - Master Leaderboard - Bowling.png", desc: "Top wicket-takers and economy rates ranked across divisions" },
            { name: "Social Media Management", refFile: "Admin - Social Media Management.png", desc: "Integrate matches, player achievements, and schedules directly to Facebook/Instagram" },
          ]
        },
        {
          name: "Settings & System",
          color: "#f43f5e",
          screens: [
            { name: "Communication Center", refFile: "Admin - Communication Center.png", desc: "Send bulk SMS, emails, and app push notifications to cohorts" },
            { name: "Create New Notification", refFile: "Admin - Communication Center - Send Notification.png", desc: "Draft message, choose audience targets, and schedule delivery" },
            { name: "System Settings Panel", refFile: "Admin - System Settings.png", desc: "Configure academy tenants, database backups, API integrations, and branding options" },
          ]
        }
      ]
    }
  ], []);

  const toggleExpand = (category: string) => {
    setExpandedNodes(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const filteredModules = useMemo(() => {
    return modules.map(m => {
      // Filter subcategories and screens based on search query and active tab
      const isTabMatch = activeTab === "all" || m.category === activeTab;
      if (!isTabMatch) return null;

      const filteredSubs = m.subcategories.map(sub => {
        const filteredScreens = sub.screens.filter(screen => {
          if (!searchQuery) return true;
          const query = searchQuery.toLowerCase();
          return (
            screen.name.toLowerCase().includes(query) ||
            (screen.desc && screen.desc.toLowerCase().includes(query)) ||
            (screen.refFile && screen.refFile.toLowerCase().includes(query))
          );
        });

        if (filteredScreens.length === 0 && searchQuery) return null;
        return {
          ...sub,
          screens: filteredScreens,
        };
      }).filter(Boolean) as SubCategoryNode[];

      if (filteredSubs.length === 0 && searchQuery) return null;

      return {
        ...m,
        subcategories: filteredSubs,
      };
    }).filter(Boolean) as ModuleNode[];
  }, [modules, searchQuery, activeTab]);

  return (
    <div className="dark-visual w-full text-white bg-slate-950 rounded-3xl p-6 md:p-8 border border-white/10 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-500/10 blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-widest text-xs">
            <Compass className="w-4 h-4" /> App Map & Navigation Architecture
          </div>
          <h3 className="text-2xl md:text-3xl font-black mt-1 text-white tracking-tight">Admin System Architecture</h3>
          <p className="text-sm text-white/50 mt-1">
            Explore the hierarchical screen structure of the multi-tenant CricMetrix Academy Manager.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            type="text"
            placeholder="Search screens (e.g., Toss, Fees)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 hover:bg-white/10 focus:bg-white/10 text-white rounded-xl pl-10 pr-4 py-2 text-sm border border-white/10 focus:border-cyan-400 focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveTab("all")}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
            activeTab === "all"
              ? "bg-cyan-500 text-black border-cyan-400"
              : "bg-white/5 text-white/70 border-white/5 hover:bg-white/10"
          }`}
        >
          <Layers className="w-3.5 h-3.5" /> All Modules
        </button>
        {modules.map((m, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(m.category)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              activeTab === m.category
                ? "text-black border-transparent"
                : "bg-white/5 text-white/70 border-white/5 hover:bg-white/10"
            }`}
            style={{
              backgroundColor: activeTab === m.category ? m.color : undefined,
            }}
          >
            {m.icon} {m.category}
          </button>
        ))}
      </div>

      {/* Tree Visualization */}
      <div className="space-y-6">
        {filteredModules.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-white/10 rounded-2xl">
            <p className="text-white/40 text-sm">No screens match your search query.</p>
          </div>
        ) : (
          filteredModules.map((m, index) => {
            const isExpanded = expandedNodes[m.category] !== false;
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/5 overflow-hidden transition-all"
                style={{
                  background: "rgba(10, 10, 20, 0.4)",
                  borderColor: isExpanded ? `${m.color}25` : "rgba(255,255,255,0.05)",
                }}
              >
                {/* Module Header */}
                <div
                  onClick={() => toggleExpand(m.category)}
                  className="flex items-center justify-between p-4 md:p-5 cursor-pointer select-none transition-colors hover:bg-white/5"
                  style={{
                    borderBottom: isExpanded ? "1px solid rgba(255, 255, 255, 0.05)" : "none",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-black font-black"
                      style={{ backgroundColor: m.color }}
                    >
                      {m.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base md:text-lg flex items-center gap-2">
                        {m.category}
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-white/60">
                          {m.subcategories.reduce((acc, sub) => acc + sub.screens.length, 0)} Screens
                        </span>
                      </h4>
                      <p className="text-xs text-white/40 mt-0.5">{m.description}</p>
                    </div>
                  </div>
                  <div className="text-white/40 hover:text-white transition-colors">
                    {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </div>
                </div>

                {/* Subcategories (Expanded View) */}
                {isExpanded && (
                  <div className="p-4 md:p-6 space-y-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {m.subcategories.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-5 rounded-2xl border bg-white/[0.02] flex flex-col gap-4 hover:border-white/10 transition-all group"
                          style={{ borderColor: `${m.color}15` }}
                        >
                          <div className="flex items-center gap-2 pb-3 border-b border-white/5">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: m.color }} />
                            <h5 className="font-bold text-white text-sm tracking-wide uppercase">{sub.name}</h5>
                          </div>

                          <div className="flex-1 space-y-3">
                            {sub.screens.map((screen, scrIdx) => (
                              <div
                                key={scrIdx}
                                className="group/screen flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/5 transition-all cursor-default"
                              >
                                <div
                                  className="w-1.5 h-1.5 rounded-full shrink-0 mt-2 transition-all"
                                  style={{
                                    backgroundColor: screen.isPrimary ? m.color : "rgba(255,255,255,0.2)",
                                    boxShadow: screen.isPrimary ? `0 0 8px ${m.color}` : "none",
                                  }}
                                />
                                <div className="flex-1 min-w-0">
                                  <div className="font-bold text-xs text-white/80 group-hover/screen:text-white transition-colors flex flex-wrap items-center gap-1.5">
                                    {screen.name}
                                    {screen.isPrimary && (
                                      <span
                                        className="text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded"
                                        style={{ backgroundColor: `${m.color}20`, color: m.color }}
                                      >
                                        Core Feature
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-[10px] text-white/40 mt-0.5 line-clamp-2 leading-relaxed">
                                    {screen.desc}
                                  </div>
                                  <div className="text-[9px] font-mono text-cyan-400/50 mt-1 opacity-0 group-hover/screen:opacity-100 transition-opacity">
                                    📄 {screen.refFile}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Info card footer */}
      <div className="mt-8 p-5 rounded-2xl border bg-white/[0.02] border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="font-bold text-sm text-white">Interactive Screen Index</div>
          <p className="text-xs text-white/40 mt-1 leading-relaxed">
            Click headers to expand batches. Screen nodes show exact mapping to Figma high-fidelity artboards (`Admin - ... .png`). Use the search bar to locate specific dashboards or modules.
          </p>
        </div>
        <div className="flex gap-4 text-xs font-bold">
          <div className="flex items-center gap-1.5 text-white/50">
            <span className="w-2 h-2 rounded-full bg-cyan-400" /> Web Admin Portal
          </div>
          <div className="flex items-center gap-1.5 text-white/50">
            <span className="w-2 h-2 rounded-full bg-purple-500" /> Multi-Tenant Role Isolation
          </div>
        </div>
      </div>
    </div>
  );
}
