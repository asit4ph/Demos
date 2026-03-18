import { ArrowUpRight } from "lucide-react";

const categories = [
  { 
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=500&auto=format&fit=crop", 
    label: "Electricians", 
    count: "120+ Pros" 
  },
  { 
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=500&auto=format&fit=crop", 
    label: "Plumbers", 
    count: "85+ Pros" 
  },
  { 
    img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=500&auto=format&fit=crop", 
    label: "Carpenters", 
    count: "60+ Pros" 
  },
  { 
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=500&auto=format&fit=crop", 
    label: "Cleaners", 
    count: "200+ Pros" 
  },
  { 
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=500&auto=format&fit=crop", 
    label: "Painters", 
    count: "45+ Pros" 
  },
];

export default function CategoriesSection() {
  return (
    <section 
      className="pb-2 pt-4 md:pb-2"
      style={{ 
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        background: "#000000" // Yahan ekdum pure black set kar diya hai
      }}
    >
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        
        {/* Sleek Header Section */}
        <div className="flex justify-center mb-10 md:mb-12">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ 
              background: "rgba(255,255,255,0.03)", 
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)" 
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-300">
              Our Expertise
            </span>
          </div>
        </div>

        {/* Premium Full-Bleed Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="group cursor-pointer relative w-full h-[220px] md:h-[260px] rounded-[32px] overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.8)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.boxShadow = "0 20px 40px -10px rgba(0,0,0,1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.boxShadow = "0 10px 30px -10px rgba(0,0,0,0.8)";
              }}
            >
              {/* Full Bleed Image */}
              <img 
                src={cat.img} 
                alt={cat.label} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ filter: "brightness(0.9)" }} 
              />
              
              {/* Deep Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

              {/* Text & Icon Content (Bottom aligned) */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex items-end justify-between z-10">
                
                {/* Text Side */}
                <div className="flex flex-col transform transition-transform duration-500 group-hover:-translate-y-1">
                  <h3 className="font-extrabold text-white text-lg md:text-[20px] tracking-tight mb-0.5 md:mb-1 drop-shadow-md">
                    {cat.label}
                  </h3>
                  <p className="text-[11px] md:text-xs text-white/60 font-bold tracking-wider uppercase drop-shadow-sm">
                    {cat.count}
                  </p>
                </div>

                {/* Hover Glassmorphism Icon */}
                <div 
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out"
                  style={{ 
                    background: "rgba(255,255,255,0.15)", 
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.2)"
                  }}
                >
                  <ArrowUpRight size={18} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}