export default function WorkerCard({ name, role, rate, rating, img }) {
  return (
    <div className="bg-white p-5 rounded-[2rem] shadow-md hover:-translate-y-2 transition-transform duration-500">
      {/* Image */}
      <div className="relative mb-5">
        <img
          src={img}
          alt={name}
          className="w-full h-60 object-cover rounded-2xl"
        />
        <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <span className="material-symbols-outlined text-yellow-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="text-xs font-bold text-[#2d3435]">{rating}</span>
        </div>
      </div>

      {/* Info */}
      <div className="flex justify-between items-start mb-1">
        <div>
          <h4 className="text-lg font-bold text-[#2d3435]">{name}</h4>
          <p className="text-sm text-[#5a6061]">{role}</p>
        </div>
        <p className="text-[#5f5e5e] font-bold text-sm">
          ${rate}<span className="text-[#5a6061] font-normal text-xs">/hr</span>
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-4 pt-4 border-t border-[#ebeeef]">
        <button
          className="flex-1 text-white py-3 rounded-xl font-medium text-sm hover:opacity-90 transition"
          style={{ background: "linear-gradient(135deg, #5f5e5e 0%, #535252 100%)" }}
        >
          Book {name.split(" ")[0]}
        </button>
        <button className="p-3 rounded-xl bg-[#f2f4f4] text-[#5a6061] hover:bg-[#dde4e5] transition">
          <span className="material-symbols-outlined">chat</span>
        </button>
      </div>
    </div>
  );
}