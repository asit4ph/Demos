export default function Testimonials() {
  return (
    <section className="py-24 bg-[#f2f4f4]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: Text + Testimonial Card */}
          <div>
            <span className="text-xs uppercase tracking-widest text-[#5a6061] font-bold mb-2 block">Customer Stories</span>
            <h2 className="text-4xl font-bold text-[#2d3435] mb-10 leading-tight">
              What our community <br /> is saying
            </h2>

            <div className="bg-white p-7 rounded-[2.5rem] shadow-sm relative">
              <span className="material-symbols-outlined text-[#dde4e5] text-6xl absolute top-4 right-7 opacity-60">format_quote</span>
              <p className="text-[#2d3435] text-base leading-relaxed mb-6 italic">
                "Concierge transformed the way I handle home maintenance. The electricians they sent were professional, punctual, and highly skilled. Highly recommended!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#e4e9ea]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFWc0MUUQH_-xp6IAH1wj0IqZ7HhvpOCO9-UN3LSsZVIGXlBKw8JilGrjaFpiGaK06V9Ws7OujJrWVC40L_3Infk_NxoGEuYnGY75In1PHy4bJdayDvWkZKFON_fln9rl_7_xmIiSbdBO44NN99RNuXJkQ3rPf6OMmX-OpcNOAV54nLxOkvFlscol3QSk6kn6xf4c08Z_GDl3Br0lieMlZY3e9rJ3VEsexHAyCUjuTrXQ5a7Qg7v1qypzrq6WacGCGEqoquYfYmoVt"
                    alt="Eleanor P."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#2d3435]">Eleanor P.</p>
                  <p className="text-xs text-[#5a6061] uppercase tracking-widest">Homeowner</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image Grid + Stats */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaAiESbD-XJncW3U4sJPiaAmTQ8B7JSNT1w-gYE-dh7JJHpo326e8YXJGSsHlbsLOrYsaACDx9muEGFsVG1x1v37yN6FZekeBgVBjxkU5_0fqNloHZ0MDdvUhMqRBxftJoc7DUySjWCMMG5vdnoDoc4MdWyglmArc9m3LlnXSmSiz_rur_Racwho41ZHi8KYQwFK7ztoJ8Z715oD314fTumfZopx5hEfgjnpWofLExQpnmx-iQpt5hJlhnOqRJTUO6SoL2rMMolLEq"
                alt="Clean kitchen"
                className="rounded-3xl w-full h-60 object-cover mt-8"
              />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADv9oBVXLipyR_F6pYe4Y3QiyPlNI3IJYRTjBsRutC5SEs5v3QcnhVhbP15KKWn46jLaitb96T2FKdnexC3drUwM24od1-zVYKiKEUblJm7Mhx-B4zZe1DFS4WVBnzzuAxwgHJ4ar-w212Of8EWru6GbirTYi2T3KXNMHSw4eypv6KKtJNhHHrpAbOa_7nMOor-z1KThIDB5Lg7Licsw5A23WhKfC-MZ9hPdyUqFM2iLwpfXFbk8yzP2Y0OKcvBwOHhWhIy-tYukCS"
                alt="Customer handshake"
                className="rounded-3xl w-full h-60 object-cover"
              />
            </div>

            {/* Stats Card */}
            <div
              className="absolute -bottom-6 -right-4 md:-right-6 text-white p-7 rounded-[2rem] shadow-2xl max-w-[200px]"
              style={{ background: "linear-gradient(135deg, #5f5e5e 0%, #535252 100%)" }}
            >
              <p className="text-4xl font-bold mb-1">15k+</p>
              <p className="text-sm opacity-90 leading-snug">Happy customers served this year across the city.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}