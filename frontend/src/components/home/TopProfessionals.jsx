import WorkerCard from "../ui/WorkerCard";

const professionals = [
  {
    name: "Marcus Chen",
    role: "Master Electrician",
    rate: 45,
    rating: "4.9",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgfCcl1MrQQk_b2h6B3n-meaQZM2CayMa27GjiLYj5hvv3QZD6AEnjgaEoXQRsN3Dxc7hRp5uqW9vqaOX8JlQAoFAkUm5t_KKV6D-8FoJxR_D7HhUJdXxYlpbUveYaAc090gJWji07NqlEXvdi-QtcaqG8xYWKfFz_e96tTszcwS-1Ksmb0O7rPyOX8Vo8vKqNUAk2wPr5J5P4vCEBMnH00AfEPKGq6D7JmsGGD2Jou1MPoyMKXS0onpoBuPMmilGBSutSFzwG3zhc",
  },
  {
    name: "Sarah Jenkins",
    role: "Deep Clean Specialist",
    rate: 30,
    rating: "5.0",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-erWwXIjNvwwYTF_3MGiR5aSIQQRneWeitfsHSewkegKSUrh8VsZwkdkJvnMlQKSsQvUa0sM6LXVx6nGGTpPM5pcSQTS7Y9Tvh3zmeaxMRkIycYRrN26m89nF562I5E6z3smv0W8ibNLgnYGrvaMswapUDv7nWLxL3cyn-hT-nr8nkXngTNsH0cHXUPFl821kzHSlyvFYBehR1dWnZ4Es_FDlx9zqop4YV6C1atnZxHOPUTF583Myk2fS4-sivu0b3Y_lfIJoyGcR",
  },
  {
    name: "Robert Vance",
    role: "Plumbing & HVAC",
    rate: 55,
    rating: "4.8",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2rCld6Z80xTL2xo5R2wT4M1dWFINjSN_PO9B8hBMHefIaMwdqs12T00sFSbCgIHuFCVoC5cul4aPSwmU2uZbns3jBT4C8pa2zllcQHatm5cl7gSZLMs4i4EMMVDhfQ1DuBPdaYtWjiFkH30jnFvUgpvLeOAwavsj68NJxCTWc8iTFbMOlDzrAyuawLmZMM2OXvNbpiG7ngxLGWqSH0DVkzE7aDZFv62qFKqVrd1e7J0qeKzkzuG9J60eIjeRYT2qULtAopWFC0Yug",
  },
];

export default function TopProfessionals() {
  return (
    <section className="py-24 bg-[#f2f4f4]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-14">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#5a6061] font-bold mb-2 block">The Best of the Best</span>
            <h2 className="text-4xl font-bold text-[#2d3435]">Top-Rated Professionals</h2>
          </div>
          <button className="text-[#5f5e5e] font-bold hover:underline underline-offset-8 transition-all text-sm hidden sm:block">
            View All Pros
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((pro, i) => (
            <WorkerCard key={i} {...pro} />
          ))}
        </div>

        {/* Mobile: View All */}
        <div className="mt-8 text-center sm:hidden">
          <button className="text-[#5f5e5e] font-bold underline underline-offset-4 text-sm">
            View All Pros
          </button>
        </div>
      </div>
    </section>
  );
}