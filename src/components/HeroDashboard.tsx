const HeroDashboard = () => {
  return (
    <div className="animate-float bg-terra-800/90 border border-terra-700/50 rounded-xl shadow-2xl p-5 w-full max-w-md backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-terra-400 uppercase tracking-wider">Rx Intelligence</span>
        <span className="text-[10px] text-terra-500 bg-terra-950/50 px-2 py-0.5 rounded">Live</span>
      </div>

      {/* Metric tiles */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { value: "1,284", label: "Rxs dispensed" },
          { value: "98.4%", label: "Claim approval" },
          { value: "$94.2K", label: "Revenue MTD" },
        ].map((m) => (
          <div key={m.label} className="bg-terra-950/60 rounded-lg p-3">
            <div className="font-mono text-lg font-bold text-terra-300">{m.value}</div>
            <div className="text-[10px] text-terra-400 mt-0.5">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Sparkline */}
      <div className="mb-4 bg-terra-950/40 rounded-lg p-3">
        <div className="text-[10px] text-terra-400 mb-2">Dispensing Volume — 7 Day</div>
        <svg viewBox="0 0 200 40" className="w-full h-8">
          <polyline
            fill="none"
            stroke="#CC785C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="0,35 30,28 60,30 90,20 120,22 150,12 180,8 200,10"
          />
          <circle cx="200" cy="10" r="3" fill="#CC785C" />
        </svg>
      </div>

      {/* Medication rows */}
      <div className="space-y-2">
        {[
          { name: "Metformin 500mg", din: "02243128", qty: "90", status: "Active" },
          { name: "Lisinopril 10mg", din: "02049384", qty: "30", status: "Active" },
          { name: "Atorvastatin 20mg", din: "02387492", qty: "60", status: "Refill due" },
        ].map((med) => (
          <div key={med.din} className="flex items-center justify-between bg-terra-950/40 rounded-lg px-3 py-2">
            <div className="flex-1 min-w-0">
              <div className="text-sm text-terra-200 truncate">{med.name}</div>
              <div className="text-[10px] font-mono text-terra-500">
                DIN {med.din} · Qty: {med.qty}
              </div>
            </div>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${
                med.status === "Active"
                  ? "bg-emerald-900/50 text-emerald-300"
                  : "bg-amber-900/50 text-amber-300"
              }`}
            >
              {med.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroDashboard;
