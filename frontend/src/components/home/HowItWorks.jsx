import { Search, CalendarCheck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: <Search size={32} className="text-indigo-400" />,
    title: "Choose Your Service",
    desc: "Select from over 50+ professional home services tailored to your needs.",
  },
  {
    icon: <CalendarCheck size={32} className="text-emerald-400" />,
    title: "Book Your Slot",
    desc: "Choose a time that works for you. Our professionals are available 24/7.",
  },
  {
    icon: <CheckCircle2 size={32} className="text-amber-400" />,
    title: "Relax & Done",
    desc: "Sit back and relax while our expert gets the job done to perfection.",
  },
];

export default function HowItWorks() {
  return (
    <section 
      // 👇 Spacing maintain rakha hai taaki upar wale section se gap bana rahe
      className="relative z-10 pt-16 pb-20 md:pt-24 md:pb-28"
      style={{ 
        fontFamily: "system-ui, -apple-system, sans-serif",
        background: "#000000" // 🚀 PURE BLACK FIXED HERE
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ 
              background: "rgba(255,255,255,0.03)", 
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)" 
            }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">
              Simplicity First
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight w-full max-w-none text-center">
            Your Journey to a Better Home
          </h2>
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          
          {/* Animated Connector Line (Desktop) */}
          <div 
            className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px]" 
            style={{
              background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), rgba(52,211,153,0.2), transparent)"
            }}
          />

          {steps.map((step, i) => (
            <div key={i} className="group flex flex-col items-center text-center relative z-10">
              
              {/* Icon Wrapper with Glassmorphism */}
              <div
                className="w-24 h-24 rounded-[32px] flex items-center justify-center mb-8 transition-all duration-500 group-hover:-translate-y-2"
                style={{ 
                  background: "rgba(255,255,255,0.03)", 
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)"
                }}
              >
                <div className="transition-transform duration-500 group-hover:scale-110">
                  {step.icon}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                {step.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed max-w-[240px] font-medium transition-colors duration-300 group-hover:text-slate-200">
                {step.desc}
              </p>

              {/* Bottom Glow Indicator */}
              <div className="mt-8 w-1 h-1 rounded-full bg-indigo-500 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-[8] shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}