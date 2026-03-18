import { Send, Globe, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer 
      className="pt-20 pb-10"
      style={{ 
        fontFamily: "system-ui, -apple-system, sans-serif",
        background: "#000000" // Jet Black
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <span className="text-2xl font-black text-white tracking-tighter">
              Concierge<span className="text-indigo-500">.</span>
            </span>
            <p className="text-slate-500 text-[11px] leading-relaxed uppercase tracking-[0.15em] font-bold max-w-[200px]">
              Providing premium home services with a touch of luxury and trust.
            </p>
          </div>

          {/* Marketplace Column */}
          <div>
            <h4 className="font-black text-white text-xs uppercase tracking-[0.2em] mb-8">Marketplace</h4>
            <ul className="space-y-4">
              {["About Us", "Contact", "Careers"].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-widest">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-black text-white text-xs uppercase tracking-[0.2em] mb-8">Legal</h4>
            <ul className="space-y-4">
              {["Terms", "Privacy", "Cookies"].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-widest">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-black text-white text-xs uppercase tracking-[0.2em] mb-8">Newsletter</h4>
            <div className="flex flex-col gap-4">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Join our elite circle.</p>
              <div className="flex gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md focus-within:border-indigo-500/50 transition-all duration-300">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent border-none px-3 py-2 w-full text-sm text-white focus:outline-none placeholder:text-slate-600"
                />
                <button className="bg-indigo-600 text-white p-2.5 rounded-xl hover:bg-indigo-500 transition-all active:scale-95 shadow-[0_0_15px_rgba(79,70,229,0.3)]">
                  <Send size={16} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Copyright */}
          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em] text-center md:text-left">
            © 2026 Concierge Marketplace. Designed for the bold.
          </p>

          {/* Social Icons with Brand Colors on Hover */}
          <div className="flex gap-6 items-center">
            {[
              { 
                icon: <Instagram size={20} />, 
                label: "Instagram", 
                hoverClass: "hover:text-[#E4405F] hover:drop-shadow-[0_0_8px_rgba(228,64,95,0.5)]" 
              },
              { 
                icon: <Twitter size={20} />, 
                label: "Twitter", 
                hoverClass: "hover:text-[#1DA1F2] hover:drop-shadow-[0_0_8px_rgba(29,161,242,0.5)]" 
              },
              { 
                icon: <Linkedin size={20} />, 
                label: "LinkedIn", 
                hoverClass: "hover:text-[#0A66C2] hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.5)]" 
              },
              { 
                icon: <Globe size={20} />, 
                label: "Global", 
                hoverClass: "hover:text-indigo-400 hover:drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]" 
              }
            ].map((social, i) => (
              <a 
                key={i} 
                href="#" 
                className={`text-slate-500 transition-all duration-400 transform hover:-translate-y-1.5 ${social.hoverClass}`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}