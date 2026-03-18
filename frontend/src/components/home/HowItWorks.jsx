const steps = [
  {
    icon: "search",
    title: "Choose Your Service",
    desc: "Select from over 50+ professional home services tailored to your needs.",
    filled: false,
  },
  {
    icon: "event_available",
    title: "Book Your Slot",
    desc: "Choose a time that works for you. Our professionals are available 24/7.",
    filled: false,
  },
  {
    icon: "task_alt",
    title: "Relax & Done",
    desc: "Sit back and relax while our expert gets the job done to perfection.",
    filled: true,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-widest text-[#5a6061] font-bold mb-2 block">Simplicity First</span>
          <h2 className="text-4xl font-bold text-[#2d3435]">Your Journey to a Better Home</h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 relative">
          {/* Connector line desktop */}
          <div className="hidden md:block absolute top-10 left-[30%] right-[30%] h-[2px] bg-[#dde4e5]" />

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-md border ${
                  step.filled
                    ? "bg-[#5f5e5e] border-[#5f5e5e]"
                    : "bg-white border-[#f2f4f4]"
                }`}
              >
                <span className={`material-symbols-outlined text-3xl ${step.filled ? "text-white" : "text-[#5f5e5e]"}`}>
                  {step.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#2d3435] mb-3">{step.title}</h3>
              <p className="text-[#5a6061] text-sm leading-relaxed max-w-[220px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}