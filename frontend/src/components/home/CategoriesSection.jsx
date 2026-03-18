const categories = [
  { icon: "electric_bolt", label: "Electricians", count: "120+ Pros" },
  { icon: "plumbing", label: "Plumbers", count: "85+ Pros" },
  { icon: "carpenter", label: "Carpenters", count: "60+ Pros" },
  { icon: "cleaning_services", label: "Cleaners", count: "200+ Pros" },
  { icon: "format_paint", label: "Painters", count: "45+ Pros" },
];

export default function CategoriesSection() {
  return (
    <section className="py-24 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-[#5a6061] font-bold mb-2 block">Our Expertise</span>
          <h2 className="text-4xl font-bold text-[#2d3435]">Explore Categories</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="bg-[#f2f4f4] aspect-square rounded-[2rem] flex items-center justify-center mb-5 group-hover:bg-[#5f5e5e] transition-all duration-500 overflow-hidden">
                <span
                  className="material-symbols-outlined text-5xl text-[#5a6061] group-hover:text-white group-hover:scale-110 transition-all duration-500"
                >
                  {cat.icon}
                </span>
              </div>
              <h3 className="text-center font-bold text-[#2d3435] text-sm">{cat.label}</h3>
              <p className="text-center text-xs text-[#5a6061] uppercase tracking-tight mt-1">{cat.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}