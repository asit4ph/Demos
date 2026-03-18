import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section 
      className="py-20 md:py-28 overflow-hidden"
      style={{ 
        fontFamily: "system-ui, -apple-system, sans-serif",
        background: "#0a0a0a" // Jet Black Base
      }}
    >
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Side: Content */}
          <div className="relative z-10">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ 
                background: "rgba(255,255,255,0.03)", 
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)" 
              }}
            >
              <div className="w-1 h-1 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                Customer Stories
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-12 leading-[1.1] tracking-tighter">
              Trusted by the <br /> <span className="text-indigo-500">Community.</span>
            </h2>

            {/* Testimonial Card */}
            <div 
              className="p-8 md:p-12 rounded-[40px] relative group transition-all duration-500"
              style={{ 
                background: "rgba(255,255,255,0.02)", 
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <Quote 
                size={60} 
                className="absolute top-8 right-8 text-indigo-500/20 transition-transform duration-700 group-hover:rotate-12" 
              />
              
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 font-medium italic relative z-10">
                "Concierge transformed the way I handle home maintenance. The team was professional, punctual, and highly skilled. It's the only service I trust now."
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
                    alt="Eleanor P."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Eleanor P.</p>
                  <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest">Verified Homeowner</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Image Grid + Stats */}
          <div className="relative group">
            <div className="grid grid-cols-2 gap-5">
              <div className="pt-16">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=500&auto=format&fit=crop"
                  alt="Service Professional"
                  className="rounded-[32px] w-full h-72 object-cover border border-white/5 transition-all duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=500&auto=format&fit=crop"
                  alt="Modern Home"
                  className="rounded-[32px] w-full h-[400px] object-cover border border-white/5 transition-all duration-700 group-hover:scale-[0.98]"
                />
              </div>
            </div>

            {/* Stats Glassmorphism Card */}
            <div
              className="absolute -bottom-10 -left-6 md:-left-12 p-10 rounded-[40px] shadow-2xl backdrop-blur-3xl"
              style={{ 
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="flex flex-col">
                <span className="text-6xl font-black text-white tracking-tighter mb-1">15k+</span>
                <p className="text-[11px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-3">Happy Users</p>
                <div className="h-[1px] w-12 bg-white/10 mb-3" />
                <p className="text-xs text-slate-400 leading-relaxed max-w-[140px] font-medium">
                  Premium services delivered across the city.
                </p>
              </div>
              
              {/* Blue Glow Background */}
              <div className="absolute inset-0 -z-10 bg-indigo-500/5 blur-[60px] rounded-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}