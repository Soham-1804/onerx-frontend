import { useState } from "react";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  "Rx Intelligence — AI analytics",
  "Rx Manager — Workflow automation",
  "Rx POS — Integrated point-of-sale",
  "Rx Alert — Real-time notifications",
  "Rx Incident — Compliance reporting",
  "Rx Relief — Relief staffing",
  "Rx Scribe — Clinical documentation",
  "Rx Brands — Purchase optimization",
  "Rx Marketplace — Vendor network",
];

const Pricing = () => {
  const [annual, setAnnual] = useState(true);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="pricing" className="bg-terra-50 section-padding">
      <div ref={ref} className="container-wide">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-terra-950">
            One subscription. Everything included.
          </h2>
        </div>

        <div
          className={`max-w-md mx-auto bg-terra-950 rounded-2xl p-8 shadow-2xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-xs tracking-[0.15em] uppercase text-terra-500 mb-4">Membership</div>

          {/* Toggle */}
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={() => setAnnual(false)}
              className={`text-sm px-3 py-1 rounded-md transition-colors ${!annual ? "bg-terra-800 text-white" : "text-terra-400"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`text-sm px-3 py-1 rounded-md transition-colors ${annual ? "bg-terra-800 text-white" : "text-terra-400"}`}
            >
              Annual
              <span className="ml-1.5 text-[10px] text-terra-500">Save 20%</span>
            </button>
          </div>

          <div className="flex items-baseline gap-1 mb-8">
            <span className="font-display font-bold text-5xl text-white">{annual ? "$299" : "$369"}</span>
            <span className="text-terra-400 text-sm">/month</span>
          </div>

          <ul className="space-y-3 mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-terra-200">
                <Check className="w-4 h-4 text-terra-500 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="block w-full text-center py-3.5 bg-terra-500 text-white font-medium rounded-lg hover:bg-terra-600 transition-colors active:scale-[0.97]"
          >
            Join Now
          </a>
          <p className="text-terra-400 text-xs text-center mt-4">
            No long-term contracts. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
