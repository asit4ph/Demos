import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// npm install framer-motion lucide-react

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const cur = window.scrollY;
      setScrolled(cur > 40);
      if (cur > lastY && cur > 80) setShowNavbar(false);
      else setShowNavbar(true);
      lastY = cur;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // ✅ Sirf yahi wrap add kiya — baaki sab same
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      style={{ padding: "14px 20px" }}
    >
      <motion.nav
        className="w-full rounded-3xl z-50 transition-all duration-300"
        style={{
          maxWidth: "95%",
          borderRadius: "999px",
          background: scrolled ? "transparent" : "transparent",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: scrolled
            ? "1px solid rgba(0,0,0,0.06)"
            : "1px solid rgba(255,255,255,0.08)",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.07)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-[72px] grid grid-cols-3 items-center">

          {/* Logo */}
          <div>
            <span
              className="text-xl font-black tracking-tight transition-colors duration-300"
              style={{ color: scrolled ? "#1a1a1a" : "#ffffff" }}
            >
              Concierge
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex justify-center items-center gap-8">
            {[
              { label: "Home", active: true },
              { label: "Services", active: false },
              { label: "Become a Worker", active: false },
            ].map(({ label, active }) => (
              <a
                key={label}
                href="#"
                className="text-[13.5px] transition-colors relative pb-1"
                style={{
                  color: scrolled
                    ? active ? "#1a1a1a" : "#5a6061"
                    : active ? "#ffffff" : "rgba(255,255,255,0.65)",
                  fontWeight: active ? 700 : 500,
                }}
              >
                {label}
                {active && (
                  <span
                    className="absolute bottom-[-2px] left-0 right-0 h-[2px] rounded-full transition-colors duration-300"
                    style={{ background: scrolled ? "#1a1a1a" : "#ffffff" }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Get Started Button */}
          <div className="hidden md:flex justify-end items-center">
            <button
              onClick={() => navigate("/login")}
              className="text-[13.5px] font-semibold px-5 py-2.5 rounded-full transition-all hover:opacity-85 hover:-translate-y-px duration-300"
              style={{
                background: scrolled
                  ? "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)"
                  : "rgba(255,255,255,0.15)",
                color: "#ffffff",
                border: scrolled ? "none" : "1px solid rgba(255,255,255,0.3)",
                backdropFilter: "blur(8px)",
              }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex justify-end col-span-2">
            <button
              className="p-2 rounded-lg transition"
              style={{ color: scrolled ? "#5a6061" : "rgba(255,255,255,0.8)" }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="md:hidden border-t px-6 py-6 flex flex-col items-center gap-5 text-center"
              style={{
                background: "rgba(255,255,255,0.96)",
                backdropFilter: "blur(20px)",
                borderColor: "rgba(0,0,0,0.06)",
              }}
            >
              <a href="#" className="font-bold text-[#1a1a1a] text-sm w-full text-center">Home</a>
              <a href="#" className="text-[#5a6061] text-sm hover:text-[#1a1a1a] transition-colors w-full text-center">Services</a>
              <a href="#" className="text-[#5a6061] text-sm hover:text-[#1a1a1a] transition-colors w-full text-center">Become a Worker</a>
              <hr className="border-[#f0f0f0] w-full" />
              <button
                onClick={() => navigate("/login")}
                className="text-sm font-semibold text-white px-6 py-2.5 rounded-full hover:opacity-90 transition"
                style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)" }}
              >
                Get Started
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.div>
  );
}