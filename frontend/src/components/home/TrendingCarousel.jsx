import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CW = 300;   // card width px
const GAP = 16;   // gap px
const STEP = CW + GAP;
const AUTO_DELAY = 3000;

const ITEMS = [
  {
    tag: "30% OFF", tagIcon: "↓",
    tagStyle: { background: "rgba(74,222,128,0.15)", color: "#16a34a" },
    title: "Summer Deep Cleaning", cta: "Book Now", num: "01",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrMj7aU-STOA5uo_YqFrf73h4fb9elvkVVX4Qf3P42cKSyl9JzHKK7iWucGPcoD0ybbjlp322Ip0Hr_SW58U34PG9Y6VZ5w43dJeO6qMYlCKiD3PczGr0bDIW2_zGoqwSPkCvatYsFJ3KV8GFTeHDSDTeiMqT49wU-hZx_DSD2nT0WfbS2KPQffEX5Gz0vON2ZO5vf0C7izNYRcjyrITPpuI8fkX_wgwOoarCM4uuvm9XOBALpqxXo6yVtsYC0-_30j-bjqr0DSPIh",
    gray: true, accent: false,
  },
  {
    tag: "NEW SERVICE", tagIcon: "✦",
    tagStyle: { background: "rgba(251,191,36,0.15)", color: "#b45309" },
    title: "AC Maintenance", cta: "Learn More", num: "02",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlN8i0yTIpbHuj2iDS75kTVpg72nuId0c7M4UGi0poES4U13d2zTr5vjnQygrHv3Ju-9tBhRC8MyaN6vAMzIMBsyF3jQxlk3-6ZqKQ5ry1VvDx2yOtlU89Z24fvaAgs9qkxBnu9WIazZRErdU1u4ywMnNvpFyGqYuzH-J76LJ6QiR5inrez2VyZP9wR6qZenA0Sfy4FaDwztnGEUwt6Q56IsuWEE0qYHiL5-SWUP-JxkAtH-6KaoqE2J1UZ8gyUaLC9jCJr-IpqzhH",
    gray: false, accent: true,
  },
  {
    tag: "BEST VALUE", tagIcon: "◆",
    tagStyle: { background: "rgba(129,140,248,0.15)", color: "#4338ca" },
    title: "Plumbing Health Check", cta: "Check Avails", num: "03",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRF49RbQ7l3JBp7c3Ee-wVC0qQlL5Mnjhyd4seT5fdjQcqykv2gM9Sv7yFw_WRliUWDe3pfhFzMNhz1GD99FXSzeNTg0Xk3_bylhLYkwUoIW2iGK5v0Sk4zMBzvbyEZ6wg2oxO0mhEkqC9ofFCsR6lu8EJGKmDaRbcNYnNUQujGQWVDydUr5_VrV11ApD3qPsdXX6zT051qdzQ-2byjIY1oLjX_ddy32k-QXIO6p5wDaYrGVCd4QEIIRaBaAcP2bW-UF5v18QRRVQe",
    gray: true, accent: false,
  },
  {
    tag: "HOT DEAL", tagIcon: "🔥",
    tagStyle: { background: "rgba(248,113,113,0.15)", color: "#dc2626" },
    title: "Electrical Inspection", cta: "Book Now", num: "04",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgfCcl1MrQQk_b2h6B3n-meaQZM2CayMa27GjiLYj5hvv3QZD6AEnjgaEoXQRsN3Dxc7hRp5uqW9vqaOX8JlQAoFAkUm5t_KKV6D-8FoJxR_D7HhUJdXxYlpbUveYaAc090gJWji07NqlEXvdi-QtcaqG8xYWKfFz_e96tTszcwS-1Ksmb0O7rPyOX8Vo8vKqNUAk2wPr5J5P4vCEBMnH00AfEPKGq6D7JmsGGD2Jou1MPoyMKXS0onpoBuPMmilGBSutSFzwG3zhc",
    gray: true, accent: false,
  },
];

// triple-cloned array for infinite illusion: [copy1, ORIGINAL, copy2]
const ORIG = ITEMS.length;
const ALL  = [...ITEMS, ...ITEMS, ...ITEMS];

export default function TrendingCarousel() {
  // pos = index into ALL array (starts in middle copy = index ORIG)
  const [pos, setPos]           = useState(ORIG);
  const [cur, setCur]           = useState(0);         // logical 0..ORIG-1
  const [animated, setAnimated] = useState(false);
  const [paused, setPaused]     = useState(false);
  const transitioning           = useRef(false);
  const autoRef                 = useRef(null);
  const dragStartX              = useRef(null);

  // move by delta (+1 / -1)
  const move = useCallback((dir) => {
    if (transitioning.current) return;
    transitioning.current = true;
    setAnimated(true);

    setPos(p => {
      const next = p + dir;
      setCur(((next - ORIG) % ORIG + ORIG) % ORIG);
      return next;
    });

    setTimeout(() => {
  setAnimated(false);

  setPos(p => {
    if (p >= ORIG * 2) return p - ORIG;
    if (p < ORIG) return p + ORIG;
    return p;
  });

  requestAnimationFrame(() => {
    transitioning.current = false;
  });
}, 450);
  }, []);

  // jump to specific logical index
  const goTo = useCallback((idx) => {
    if (transitioning.current) return;
    transitioning.current = true;
    setAnimated(true);
    const next = ORIG + idx;
    setPos(next);
    setCur(idx);
    setTimeout(() => {
      setAnimated(false);
      transitioning.current = false;
    }, 460);
  }, []);

  // auto-scroll
  const resetAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => move(1), AUTO_DELAY);
  }, [move]);

  useEffect(() => {
    resetAuto();
    return () => clearInterval(autoRef.current);
  }, [resetAuto]);

  useEffect(() => {
    if (paused) clearInterval(autoRef.current);
    else resetAuto();
  }, [paused, resetAuto]);

  const handleArrow = (dir) => { move(dir); resetAuto(); };

  // touch / drag swipe
  const onTouchStart = (e) => { dragStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (dragStartX.current === null) return;
    const dx = dragStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) { move(dx > 0 ? 1 : -1); resetAuto(); }
    dragStartX.current = null;
  };

  const containerPadding = (window.innerWidth - CW) / 2;
const translateX = -(pos * STEP) + containerPadding; // 32px left padding so first card peeks nicely

  return (
    <section
      style={{ background: "#ffffff", padding: "80px 0", overflow: "hidden", position: "relative" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        @keyframes tcUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .tc-section::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(0,0,0,0.06),transparent)}
        .tc-card:hover{transform:translateY(-6px)!important;box-shadow:0 20px 48px rgba(15,23,42,0.1)!important}
        .tc-card:hover .tc-img{transform:scale(1.06)!important}
        .tc-card.tc-gray:hover .tc-img{filter:grayscale(0) brightness(0.95)!important}
        .tc-arr:hover{background:#f8fafc!important;border-color:#cbd5e1!important;color:#0f172a!important}
        .tc-cta-light:hover{background:#e2e8f0!important;color:#0f172a!important}
        .tc-cta-dark:hover{background:rgba(255,255,255,0.2)!important;color:#fff!important}
        .tc-dot:hover{background:#94a3b8!important}
      `}</style>

      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }} className="tc-section" />

      {/* Header — constrained width */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
        <div
          className="flex justify-between items-center mb-10"
          style={{ animation: "tcUp 0.5s ease 0.1s both", opacity: 0 }}
        >
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <div style={{ width: "24px", height: "1px", background: "rgba(0,0,0,0.2)" }} />
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)" }}>
                Special Offers
              </p>
            </div>
            <h2 style={{ fontSize: "34px", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.04em", lineHeight: 1 }}>
              Trending This Week
            </h2>
          </div>
          <div className="flex gap-2">
            {[{ icon: <ArrowLeft size={17} />, dir: -1 }, { icon: <ArrowRight size={17} />, dir: 1 }].map((btn, i) => (
              <button key={i} onClick={() => handleArrow(btn.dir)}
                className="tc-arr flex items-center justify-center rounded-full transition-all"
                style={{ width: "42px", height: "42px", border: "1.5px solid #e2e8f0", background: "#fff", color: "#64748b", cursor: "pointer" }}>
                {btn.icon}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Full-width track — no inner padding */}
      <div
        style={{ overflow: "hidden", width: "100%", cursor: "grab", userSelect: "none", animation: "tcUp 0.55s ease 0.2s both", opacity: 0 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          style={{
            display: "flex",
            gap: `${GAP}px`,
            transform: `translateX(${translateX}px)`,
            transition: animated ? "transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)" : "none",
            willChange: "transform",
            paddingBottom: "8px",   // so hover shadow isn't clipped
          }}
        >
          {ALL.map((item, i) => (
            <div
              key={i}
              className={`tc-card${item.gray ? " tc-gray" : ""}`}
              style={{
                flexShrink: 0,
                width: `${CW}px`,
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                background: item.accent ? "#0f172a" : "#f8fafc",
                border: `1.5px solid ${item.accent ? "#0f172a" : "#f1f5f9"}`,
              }}
            >
              {/* Image */}
              <div style={{ height: "176px", overflow: "hidden" }}>
                <img src={item.img} alt={item.title} className="tc-img"
                  style={{
                    width: "100%", height: "176px", objectFit: "cover", display: "block",
                    transition: "transform 0.6s ease, filter 0.5s ease",
                    filter: item.gray ? "grayscale(1) brightness(0.85)" : "brightness(0.9)",
                  }}
                />
              </div>

              {/* Gradient blend */}
              <div style={{
                position: "absolute", top: "120px", left: 0, right: 0, height: "80px",
                background: `linear-gradient(to bottom, transparent, ${item.accent ? "#0f172a" : "#f8fafc"})`,
                pointerEvents: "none",
              }} />

              {/* Body */}
              <div style={{ padding: "18px 20px 20px", position: "relative" }}>
                <span className="inline-flex items-center gap-1.5 rounded-full text-[10.5px] font-bold"
                  style={{ ...item.tagStyle, padding: "4px 10px", letterSpacing: "0.05em", marginBottom: "10px", display: "inline-flex" }}>
                  {item.tagIcon} {item.tag}
                </span>
                <h3 style={{ fontSize: "17px", fontWeight: 800, color: item.accent ? "#fff" : "#0f172a", letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: "14px" }}>
                  {item.title}
                </h3>
                <div className="flex items-center justify-between">
                  <button
                    className={`inline-flex items-center gap-1.5 rounded-full transition-all ${item.accent ? "tc-cta-dark" : "tc-cta-light"}`}
                    style={{
                      fontSize: "12px", fontWeight: 600, border: "none", padding: "7px 14px", cursor: "pointer",
                      fontFamily: "'DM Sans', sans-serif",
                      background: item.accent ? "rgba(255,255,255,0.12)" : "#f1f5f9",
                      color: item.accent ? "rgba(255,255,255,0.7)" : "#475569",
                    }}
                  >
                    {item.cta} <ArrowRight size={11} />
                  </button>
                  <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.04em", color: item.accent ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.12)" }}>
                    {item.num}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
        <div className="flex justify-center gap-1.5 mt-7">
          {ITEMS.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} className="tc-dot transition-all"
              style={{
                height: "5px",
                width: cur === i ? "20px" : "5px",
                borderRadius: "3px",
                background: cur === i ? "#0f172a" : "#e2e8f0",
                border: "none", cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}