import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Reusable hook — element visible hone pe class add karta hai
function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("revealed"); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Refs for scroll-reveal
  const headingRef = useScrollReveal();
  const subRef = useScrollReveal();
  const field1Ref = useScrollReveal();
  const field2Ref = useScrollReveal();
  const btnRef = useScrollReveal();
  const googleRef = useScrollReveal();
  const footerRef = useScrollReveal();

  return (
    <>
      {/* Global animation styles injected once */}
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-left {
          opacity: 0;
          transform: translateX(-28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal-left.revealed {
          opacity: 1;
          transform: translateX(0);
        }
        .delay-1 { transition-delay: 0.05s; }
        .delay-2 { transition-delay: 0.15s; }
        .delay-3 { transition-delay: 0.25s; }
        .delay-4 { transition-delay: 0.35s; }
        .delay-5 { transition-delay: 0.42s; }
        .delay-6 { transition-delay: 0.50s; }
      `}</style>

      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#f9f9f9]">

        {/* ── Left Panel ── */}
        <LeftPanel />

        {/* ── Right Panel: Form ── */}
        <div className="flex items-center justify-center px-6 py-16">
          <div className="w-full max-w-[400px]">

            {/* Heading */}
            <div ref={headingRef} className="reveal delay-1 mb-1">
              <h1 className="text-[28px] font-black tracking-tight text-[#1a1a1a] leading-tight">
                Sign in
              </h1>
            </div>

            {/* Sub */}
            <div ref={subRef} className="reveal delay-2 mb-8">
              <p className="text-sm text-[#5a6061]">
                Don't have an account?{" "}
                <button
                  onClick={() => navigate("/signup")}
                  className="text-[#2d3435] font-bold hover:underline underline-offset-2 transition"
                >
                  Sign up
                </button>
              </p>
            </div>

            {/* Email Field */}
            <div ref={field1Ref} className="reveal delay-2 mb-4">
              <label className="block text-[11px] font-bold uppercase tracking-widest text-[#5a6061] mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border-[1.5px] border-[#e4e9ea] bg-white text-sm text-[#1a1a1a] placeholder:text-[#adb3b4] focus:outline-none focus:border-[#5f5e5e] focus:ring-2 focus:ring-[#5f5e5e]/10 transition"
              />
            </div>

            {/* Password Field */}
            <div ref={field2Ref} className="reveal delay-3 mb-2">
              <label className="block text-[11px] font-bold uppercase tracking-widest text-[#5a6061] mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border-[1.5px] border-[#e4e9ea] bg-white text-sm text-[#1a1a1a] placeholder:text-[#adb3b4] focus:outline-none focus:border-[#5f5e5e] focus:ring-2 focus:ring-[#5f5e5e]/10 transition"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right mb-6">
              <button className="text-xs font-semibold text-[#5f5e5e] hover:underline underline-offset-2 transition">
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <div ref={btnRef} className="reveal delay-4">
              <button
                className="w-full py-3.5 rounded-xl text-[14.5px] font-bold text-white transition-all hover:opacity-85 hover:-translate-y-px active:scale-[0.99]"
                style={{ background: "linear-gradient(135deg, #5f5e5e 0%, #3a3a3a 100%)" }}
              >
                Continue
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-[#e4e9ea]" />
              <span className="text-xs text-[#adb3b4] font-medium">or</span>
              <div className="flex-1 h-px bg-[#e4e9ea]" />
            </div>

            {/* Google */}
            <div ref={googleRef} className="reveal delay-5">
              <button className="w-full py-3 rounded-xl border-[1.5px] border-[#e4e9ea] bg-white text-sm font-semibold text-[#2d3435] flex items-center justify-center gap-3 hover:border-[#5f5e5e] hover:bg-[#f9f9f9] transition-all">
                <GoogleIcon />
                Continue with Google
              </button>
            </div>

            {/* Footer */}
            <div ref={footerRef} className="reveal delay-6 mt-6 text-center text-xs text-[#adb3b4] leading-relaxed">
              By signing in, you agree to our{" "}
              <a href="#" className="text-[#5a6061] font-semibold hover:underline">Terms</a>{" "}
              &amp;{" "}
              <a href="#" className="text-[#5a6061] font-semibold hover:underline">Privacy Policy</a>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

// ── Left branding panel ──
function LeftPanel() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    [ref1, ref2, ref3].forEach((ref, i) => {
      const el = ref.current;
      if (!el) return;
      setTimeout(() => el.classList.add("revealed"), 100 + i * 140);
    });
  }, []);

  return (
    <div
      className="hidden lg:flex flex-col justify-between p-12 relative overflow-hidden"
      style={{ background: "linear-gradient(145deg, #2d3435 0%, #5f5e5e 100%)" }}
    >
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/[0.04]" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/[0.04]" />

      {/* Brand */}
      <div ref={ref1} className="reveal-left z-10">
        <span className="text-xl font-black text-white tracking-tight">Concierge</span>
      </div>

      {/* Tagline */}
      <div ref={ref2} className="reveal-left z-10">
        <h2 className="text-4xl font-black text-white leading-[1.15] tracking-tight mb-4">
          Welcome<br />back.
        </h2>
        <p className="text-[15px] text-white/60 leading-relaxed max-w-xs">
          Your trusted home service platform. Book verified pros in minutes.
        </p>
      </div>

      {/* Trust items */}
      <div ref={ref3} className="reveal-left z-10 flex gap-6 flex-wrap">
        {["Verified Pros", "Secure Payments", "24/7 Support"].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <div className="w-[6px] h-[6px] rounded-full bg-white/40" />
            <span className="text-xs text-white/55 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Google SVG icon
function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}