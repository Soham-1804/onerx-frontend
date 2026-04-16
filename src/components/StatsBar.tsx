import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { number: "4,200+", label: "Independent pharmacies across Canada" },
  { number: "9", label: "Integrated modules" },
  { number: "6–8×", label: "Vendor systems replaced" },
  { number: "100%", label: "Savings passed directly to you" },
];

const StatsBar = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="bg-terra-800 py-12 lg:py-16">
      <div className="container-wide grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-terra-700">
        {stats.map((stat, i) => (
          <div
            key={stat.number}
            className={`text-center lg:px-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-terra-300">{stat.number}</div>
            <div className="text-xs sm:text-sm text-terra-400 mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
