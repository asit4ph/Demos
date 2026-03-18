export default function Footer() {
  return (
    <footer className="bg-[#f2f4f4] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <span className="text-xl font-black text-[#2d3435] tracking-tight block mb-4">Concierge</span>
          <p className="text-[#5a6061] text-xs leading-relaxed uppercase tracking-wider">
            Providing premium home services with a touch of luxury and trust.
          </p>
        </div>

        {/* Marketplace */}
        <div>
          <h4 className="font-bold text-[#2d3435] mb-5">Marketplace</h4>
          <ul className="space-y-3 text-xs uppercase tracking-widest">
            {["About Us", "Contact", "Careers"].map(item => (
              <li key={item}>
                <a href="#" className="text-[#5a6061] hover:text-[#2d3435] transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold text-[#2d3435] mb-5">Legal</h4>
          <ul className="space-y-3 text-xs uppercase tracking-widest">
            {["Terms", "Privacy", "Cookies"].map(item => (
              <li key={item}>
                <a href="#" className="text-[#5a6061] hover:text-[#2d3435] transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-[#2d3435] mb-5">Newsletter</h4>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="bg-[#dde4e5] border-none rounded-xl px-4 py-2 w-full text-sm focus:outline-none focus:ring-1 focus:ring-[#5f5e5e]"
            />
            <button className="bg-[#5f5e5e] text-white p-2 rounded-xl hover:opacity-90 transition">
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-16 pt-8 border-t border-[#ebeeef] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-[#5a6061] uppercase tracking-widest text-center md:text-left">
          © 2024 Concierge Marketplace. All rights reserved.
        </p>
        <div className="flex gap-5">
          <a href="#" className="text-[#5a6061] hover:text-[#2d3435] transition-colors">
            <span className="material-symbols-outlined">public</span>
          </a>
          <a href="#" className="text-[#5a6061] hover:text-[#2d3435] transition-colors">
            <span className="material-symbols-outlined">share</span>
          </a>
        </div>
      </div>
    </footer>
  );
}