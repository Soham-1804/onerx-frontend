import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X, Check } from "lucide-react";

const without = [
  "Solo Negotiations, Weaker Terms",
  "Manual Molecule Selection",
  "No Priority Allocations",
  "Manual Cost Comparison",
  "Urgent, Price-Blind Purchasing",
  "Missed Targets & Fragmented Payments",
];

const withRx = [
  "United Negotiation Power",
  "Smarter Molecule Selection",
  "Priority Access Like the Big Chains",
  "Instant Net Cost Transparency",
  "Data-Driven Purchase Planning",
  "Consolidated Payments & Target Tracking",
];

const Comparison = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="w-full">
      <div className="grid md:grid-cols-2">
        {/* Without */}
        <div className="bg-warm-100 section-padding">
          <div className="max-w-md ml-auto mr-8 lg:mr-16">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-terra-950 mb-8">Without OneRx</h3>
            <div className="space-y-4">
              {without.map((item, i) => (
                <div
                  key={item}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-error" />
                  </div>
                  <span className="text-warm-800 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* With */}
        <div className="bg-terra-950 section-padding">
          <div className="max-w-md mr-auto ml-8 lg:ml-16">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-terra-300 mb-8">With OneRx</h3>
            <div className="space-y-4">
              {withRx.map((item, i) => (
                <div
                  key={item}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-terra-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-terra-500" />
                  </div>
                  <span className="text-terra-200 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
