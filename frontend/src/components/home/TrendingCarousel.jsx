import { useState, useRef, useEffect, useCallback } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Wind,     
  Wrench,   
  Zap       
} from "lucide-react";

const AUTO_DELAY = 1500;

const ITEMS = [
  // ... (Aapka ITEMS array same rahega)
  {
    tag: "30% OFF", tagIcon: "↓",
    tagStyle: { background: "rgba(74,222,128,0.15)", color: "#4ade80" },
    title: "Summer Deep Cleaning", cta: "Book Now",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
    serviceIcon: <Sparkles size={18} color="#4ade80" />, 
    gray: true, accent: false,
  },
  {
    tag: "NEW SERVICE", tagIcon: "✦",
    tagStyle: { background: "rgba(251,191,36,0.15)", color: "#fbbf24" },
    title: "AC Maintenance Pro", cta: "Learn More",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    serviceIcon: <Wind size={18} color="#fbbf24" />,
    gray: false, accent: true,
  },
  {
    tag: "BEST VALUE", tagIcon: "◆",
    tagStyle: { background: "rgba(129,140,248,0.15)", color: "#818cf8" },
    title: "Plumbing Health Check", cta: "Check Avails",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    serviceIcon: <Wrench size={18} color="#818cf8" />,
    gray: true, accent: false,
  },
  {
    tag: "HOT DEAL", tagIcon: "🔥",
    tagStyle: { background: "rgba(248,113,113,0.15)", color: "#f87171" },
    title: "Electrical Inspection", cta: "Book Now",
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop",
    serviceIcon: <Zap size={18} color="#f87171" />,
    gray: true, accent: false,
  },
];

const ORIG = ITEMS.length;
const ALL = [...ITEMS, ...ITEMS, ...ITEMS];

export default function PremiumCarousel() {
  const [pos, setPos] = useState(ORIG);
  const [cur, setCur] = useState(0);
  const [animated, setAnimated] = useState(false);
  const [paused, setPaused] = useState(false);
  
  const [windowWidth, setWindowWidth] = useState(1200);
  const [isMounted, setIsMounted] = useState(false);

  const transitioning = useRef(false);
  const autoRef = useRef(null);
  const dragStartX = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const CW = isMobile ? windowWidth * 0.82 : 340; 
  const GAP = isMobile ? 16 : 24;
  const STEP = CW + GAP;
  
  const maxContainerWidth = 1100;
  const sidePadding = isMobile ? 20 : 32;
  const containerPadding = windowWidth > maxContainerWidth 
    ? (windowWidth - maxContainerWidth) / 2 + sidePadding 
    : sidePadding;

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
    }, 500);
  }, []);

  const goTo = useCallback((idx) => {
    if (transitioning.current) return;
    transitioning.current = true;
    setAnimated(true);
    setPos(ORIG + idx);
    setCur(idx);
    setTimeout(() => {
      setAnimated(false);
      transitioning.current = false;
    }, 500);
  }, []);

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

  const onTouchStart = (e) => { dragStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (dragStartX.current === null) return;
    const dx = dragStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) { move(dx > 0 ? 1 : -1); resetAuto(); }
    dragStartX.current = null;
  };

  const translateX = -(pos * STEP) + containerPadding;

  if (!isMounted) return null;

  return (
    <section 
      className="relative overflow-hidden pt-6 pb-16 md:pt-10 md:pb-10"
      style={{ 
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", // Apple-style system font
        background: "#0a0a0a" 
      }}
    >
      <style>{`
        @keyframes fadeInSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-enter { animation: fadeInSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        
        /* Gen-Z Glint Effect for Title */
        .text-glint {
          background: linear-gradient(to right, #ffffff 20%, #888888 40%, #888888 60%, #ffffff 80%);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          animation: shine 4s linear infinite;
        }
        @keyframes shine {
          to { background-position: 200% center; }
        }
      `}</style>

      {/* Top Divider Subtlety */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Header with iPhone/Gen-Z Styling */}
      <div className="relative mx-auto max-w-[1100px] px-5 md:px-8 mb-10 md:mb-12 opacity-0 animate-enter">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Invisible spacer to perfectly center the title on desktop */}
          <div className="hidden md:block w-[100px]"></div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-center text-glint py-2">
            Trending This Week
          </h2>
          
          {/* Gen-Z / iPhone Style Minimal Arrows */}
          <div className="flex gap-4 mt-6 md:mt-0 w-full md:w-auto justify-center md:justify-end md:min-w-[100px]">
            <button 
              onClick={() => handleArrow(-1)}
              className="group flex items-center justify-center text-slate-400 transition-all duration-300 hover:text-white active:scale-90"
              aria-label="Previous"
            >
              <div className="flex items-center gap-2 px-3 py-2 rounded-2xl hover:bg-white/5 transition-colors">
                 <ArrowLeft size={28} strokeWidth={2} className="transition-transform duration-300 group-hover:-translate-x-1" />
                 <span className="text-sm font-semibold tracking-wide hidden sm:block">Left</span>
              </div>
            </button>

            <button 
              onClick={() => handleArrow(1)}
              className="group flex items-center justify-center text-slate-400 transition-all duration-300 hover:text-white active:scale-90"
              aria-label="Next"
            >
              <div className="flex items-center gap-2 px-3 py-2 rounded-2xl hover:bg-white/5 transition-colors">
                 <span className="text-sm font-semibold tracking-wide hidden sm:block">Right</span>
                 <ArrowRight size={28} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Track Container (Same as before) */}
      <div
        className="w-full cursor-grab active:cursor-grabbing select-none opacity-0 animate-enter"
        style={{ animationDelay: "150ms" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex pb-12 pt-4"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(${translateX}px)`,
            transition: animated ? "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)" : "none",
            willChange: "transform",
          }}
        >
          {ALL.map((item, i) => (
            <div
              key={i}
              className="group relative flex-shrink-0 overflow-hidden cursor-pointer"
              style={{
                width: `${CW}px`,
                borderRadius: "28px", // Slightly rounder for iOS feel
                boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.8)",
                transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                border: "1px solid rgba(255,255,255,0.05)", // Ultra thin glass border
                background: "#121212", 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)"; 
                e.currentTarget.style.boxShadow = "0 30px 60px -15px rgba(0, 0, 0, 1)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 40px -10px rgba(0, 0, 0, 0.8)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
              }}
            >
              {/* Image Container */}
              <div style={{ height: "220px", position: "relative", overflow: "hidden" }}>
                
                <div 
                  className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10"
                  style={{ 
                    border: "1px solid rgba(255,255,255,0.1)", 
                    backgroundColor: "rgba(0,0,0,0.4)", 
                    backdropFilter: "blur(12px)", // Stronger blur for iOS frosted glass
                    WebkitBackdropFilter: "blur(12px)"
                  }}
                >
                  {item.serviceIcon}
                </div>

                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), filter 0.5s ease",
                    filter: item.gray ? "grayscale(100%) brightness(0.7)" : "brightness(0.85)",
                  }}
                  className="group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-105" 
                />
                
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, #121212 0%, transparent 60%)",
                  pointerEvents: "none"
                }}/>
              </div>

              {/* Content Body */}
              <div style={{ 
                  padding: "24px", 
                  position: "relative", 
                  zIndex: 10,
                  background: "#121212" 
                }}>
                
                <span
                  style={{
                    ...item.tagStyle,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 14px",
                    borderRadius: "100px",
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    marginBottom: "18px",
                    textTransform: "uppercase"
                  }}
                >
                  {item.tagIcon} {item.tag}
                </span>

                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.2,
                    marginBottom: "24px",
                    color: "#f8fafc", 
                  }}
                >
                  {item.title}
                </h3>

                {/* CTA and Number */}
                <div className="flex items-center justify-between mt-auto">
                  <button
                    className="group/btn flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold tracking-wide transition-all duration-300 bg-white/5 text-slate-300 hover:bg-white hover:text-black border border-white/10 hover:border-white"
                    style={{ fontFamily: "inherit" }}
                  >
                    {item.cta} 
                    <ArrowRight size={16} strokeWidth={2.5} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                  
                  <span
                    style={{
                      fontSize: "20px",
                      fontFamily: "system-ui, sans-serif",
                      fontWeight: 800,
                      color: "rgba(255,255,255,0.08)",
                      letterSpacing: "-0.04em"
                    }}
                  >
                    
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots - Sleek iOS Style */}
      <div className="mx-auto max-w-[1100px] px-5 md:px-8 mt-2">
        <div className="flex justify-center gap-2.5">
          {ITEMS.map((_, i) => (
            <button 
              key={i} 
              onClick={() => goTo(i)}
              className="h-1.5 rounded-full transition-all duration-500 ease-out focus:outline-none"
              style={{
                width: cur === i ? "32px" : "6px",
                background: cur === i ? "#ffffff" : "rgba(255,255,255,0.15)", 
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}