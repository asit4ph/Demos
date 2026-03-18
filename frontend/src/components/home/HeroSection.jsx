// npm install lucide-react
import { MapPin, Search, ShieldCheck, Zap, Star } from "lucide-react";
import heroimage from "../../assets/heroimage.webp"

const CATEGORIES = [
  { emoji: "⚡", label: "Electrician" },
  { emoji: "🔧", label: "Plumber" },
  { emoji: "🧹", label: "Cleaning" },
  { emoji: "🪵", label: "Carpenter" },
  { emoji: "🎨", label: "Painter" },
];

const AVATARS = [
  { initials: "RK", bg: "#1a2e1a", color: "#4ade80" },
  { initials: "AM", bg: "#2e1a1a", color: "#f87171" },
  { initials: "SJ", bg: "#1a1a2e", color: "#818cf8" },
  { initials: "PV", bg: "#2e2810", color: "#fbbf24" },
];

const TRUST_BADGES = [
  {
    icon: <ShieldCheck size={16} style={{ color: "#4ade80" }} />,
    iconBg: "rgba(74,222,128,0.15)",
    title: "Verified & insured",
    sub: "100% background checked",
  },
  {
    icon: <Zap size={16} style={{ color: "#fbbf24" }} />,
    iconBg: "rgba(251,191,36,0.15)",
    title: "Instant booking",
    sub: "Confirm in under 2 min",
  },
  {
    icon: <Star size={16} style={{ color: "#818cf8" }} />,
    iconBg: "rgba(129,140,248,0.15)",
    title: "Top rated pros",
    sub: "4.9 avg rating",
  },
];

const BG_IMAGE = heroimage;

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100vh", minHeight: "620px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        @keyframes heroUp    { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .hero-cat:hover   { background:rgba(255,255,255,0.18)!important; color:#fff!important; }
        .hero-find:hover  { opacity:0.88; transform:translateY(-1px); }

        /* ── Mobile tweaks ── */
        @media (max-width: 640px) {
          .hero-search { flex-direction: column !important; border-radius: 16px !important; }
          .hero-search-divider { display: none !important; }
          .hero-find-btn { width: 100% !important; text-align: center; border-radius: 10px !important; padding: 12px !important; }
          .hero-badges { gap: 8px !important; }
          .hero-badge-sep { display: none !important; }
          .hero-bottom { flex-direction: column !important; align-items: flex-start !important; gap: 10px !important; }
          .hero-cats { display: flex !important; flex-wrap: wrap !important; gap: 6px !important; }
        }
      `}</style>

      {/* Full-screen BG image */}
      <img
        src={BG_IMAGE}
        alt="Professional home service"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Overlays */}
      <div className="absolute inset-0" style={{ background: "rgba(10,12,14,0.42)" }} />
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(160deg,rgba(10,12,14,0.68) 0%,rgba(10,12,14,0.15) 55%,rgba(10,12,14,0.5) 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0"
        style={{ height: "55%", background: "linear-gradient(to top,rgba(10,12,14,0.92),transparent)" }} />

      {/* All content — bottom aligned */}
      <div
        className="absolute inset-0 flex flex-col justify-end"
        style={{ padding: "clamp(20px, 4vw, 48px) clamp(18px, 5vw, 52px)" }}
      >
        {/* Live pill */}
        <div
          className="inline-flex items-center gap-2 w-fit rounded-full px-4 py-1.5 mb-5"
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(8px)",
            animation: "heroUp 0.5s ease 0.15s both",
            opacity: 0,
          }}
        >
          <span className="w-[7px] h-[7px] rounded-full flex-shrink-0"
            style={{ background: "#4ade80", boxShadow: "0 0 0 3px rgba(74,222,128,0.25)" }} />
          {/* Mobile pe short text */}
          <span className="text-[12px] font-semibold hidden sm:inline"
            style={{ color: "rgba(255,255,255,0.8)", letterSpacing: "0.03em" }}>
            1,200+ verified pros available now
          </span>
          <span className="text-[12px] font-semibold sm:hidden"
            style={{ color: "rgba(255,255,255,0.8)", letterSpacing: "0.03em" }}>
            1,200+ pros near you
          </span>
        </div>

        {/* Headline */}
        <h1
          className="mb-3"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(32px, 5.2vw, 64px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: "#ffffff",
            maxWidth: "700px",
            animation: "heroUp 0.6s ease 0.25s both",
            opacity: 0,
          }}
        >
          Your home,<br />
          handled by{" "}
          <em style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "1.06em",
            color: "rgba(255,255,255,0.65)",
          }}>
            experts.
          </em>
        </h1>

        {/* Subtext — hidden on very small screens to save space */}
        <p
          className="mb-5 hidden sm:block"
          style={{
            fontSize: "clamp(13px, 1.4vw, 15.5px)",
            color: "rgba(255,255,255,0.52)",
            lineHeight: 1.65,
            maxWidth: "440px",
            fontWeight: 300,
            animation: "heroUp 0.6s ease 0.35s both",
            opacity: 0,
          }}
        >
          From last-minute repairs to weekly cleaning — find trusted,
          background-checked professionals without the hassle.
        </p>

        {/* Search bar */}
        <div
          className="hero-search flex items-stretch gap-1.5 rounded-2xl p-1.5 mb-4"
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.18)",
            backdropFilter: "blur(16px)",
            maxWidth: "520px",
            animation: "heroUp 0.6s ease 0.45s both",
            opacity: 0,
          }}
        >
          <div className="flex items-center gap-2 px-3 py-2.5 flex-1">
            <MapPin size={14} style={{ color: "rgba(255,255,255,0.35)", flexShrink: 0 }} />
            <input type="text" placeholder="Your location"
              className="bg-transparent border-none focus:outline-none focus:ring-0 w-full"
              style={{ fontSize: "13px", color: "#fff", fontFamily: "'DM Sans', sans-serif" }} />
          </div>
          <div className="hero-search-divider hidden md:block w-px h-6 self-center"
            style={{ background: "rgba(255,255,255,0.15)" }} />
          <div className="flex items-center gap-2 px-3 py-2.5 flex-1">
            <Search size={14} style={{ color: "rgba(255,255,255,0.35)", flexShrink: 0 }} />
            <input type="text" placeholder="Electrician, Plumber..."
              className="bg-transparent border-none focus:outline-none focus:ring-0 w-full"
              style={{ fontSize: "13px", color: "#fff", fontFamily: "'DM Sans', sans-serif" }} />
          </div>
          <button className="hero-find hero-find-btn rounded-[13px] px-5 py-2.5 font-bold whitespace-nowrap transition-all"
            style={{
              background: "#ffffff", color: "#0a0c0e",
              fontSize: "13px", border: "none", cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.01em",
            }}>
            Find Help
          </button>
        </div>

        {/* Trust badges row */}
        <div
          className="hero-badges flex flex-wrap items-center gap-2 mb-3"
          style={{ animation: "heroUp 0.6s ease 0.52s both", opacity: 0 }}
        >
          {TRUST_BADGES.map((badge, i) => (
            <div key={i} className="flex items-center gap-2">
              {i > 0 && (
                <div className="hero-badge-sep hidden sm:block w-px h-7 mx-1"
                  style={{ background: "rgba(255,255,255,0.1)" }} />
              )}
              <div
                className="flex items-center gap-2.5 rounded-[13px] px-3 py-2"
                style={{
                  background: "rgba(10,12,14,0.6)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div
                  className="w-7 h-7 rounded-[8px] flex items-center justify-center flex-shrink-0"
                  style={{ background: badge.iconBg }}
                >
                  {badge.icon}
                </div>
                <div>
                  <p className="text-[12px] font-semibold leading-tight"
                    style={{ color: "rgba(255,255,255,0.9)" }}>{badge.title}</p>
                  <p className="text-[10.5px] mt-0.5 hidden sm:block"
                    style={{ color: "rgba(255,255,255,0.36)" }}>{badge.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: trust stats + category pills */}
        <div
          className="hero-bottom flex flex-wrap items-center justify-between gap-3"
          style={{ animation: "heroUp 0.6s ease 0.6s both", opacity: 0 }}
        >
          {/* Stats */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex">
              {AVATARS.map((av, i) => (
                <div key={i}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold"
                  style={{
                    marginLeft: i === 0 ? 0 : "-7px",
                    border: "2px solid rgba(255,255,255,0.3)",
                    background: av.bg, color: av.color,
                    zIndex: AVATARS.length - i,
                  }}>
                  {av.initials}
                </div>
              ))}
            </div>
            <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.45)" }}>
              <strong style={{ color: "#fff", fontWeight: 600 }}>15,000+</strong> happy clients
            </span>
            <div className="hidden sm:block w-px h-4" style={{ background: "rgba(255,255,255,0.15)" }} />
            <span className="hidden sm:inline text-[11.5px]" style={{ color: "#fbbf24" }}>★★★★★</span>
            <span className="hidden sm:inline text-[12px]" style={{ color: "rgba(255,255,255,0.45)" }}>
              <strong style={{ color: "#fff", fontWeight: 600 }}>4.9</strong> avg rating
            </span>
          </div>

          {/* Category pills — mobile pe bhi dikhenge */}
          <div className="hero-cats flex gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button key={cat.label}
                className="hero-cat rounded-full px-3 py-1.5 text-[11px] sm:text-[11.5px] font-medium transition-all cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.09)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "rgba(255,255,255,0.65)",
                  backdropFilter: "blur(8px)",
                  fontFamily: "'DM Sans', sans-serif",
                  padding: "5px 12px",
                }}>
                {cat.emoji} {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}