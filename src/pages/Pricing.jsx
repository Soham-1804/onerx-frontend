import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TrustFeaturesRow from "../components/TrustFeaturesRow";
import ModuleCTA from "../components/ModuleCTA";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Pricing() {
  useEffect(() => {
    document.title = "Pricing | OneRx";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Transparent pricing for Canadian independent pharmacies. No hidden fees, ever."
      );
    }
  }, []);

  const { ref: headerRef, isVisible: headerVis } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVis } = useScrollAnimation();
  const { ref: tableRef, isVisible: tableVis } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVis } = useScrollAnimation();

  const plans = [
    {
      name: "Rx Starts",
      subtitle: "The Sovereign Model",
      price: "49",
      period: "/mo",
      philosophy: "You keep full control. Absolute Independence. Zero Noise.",
      idealFor: "Owners who value privacy and prefer to manage their own purchasing strategy.",
      highlight: false,
      features: [
        { label: "Formulary", value: "Non-Formulary" },
        { label: "Benefits Flow", value: "Direct" },
        { label: "Data", value: "Private" },
      ],
    },
    {
      name: "Rx Empowered",
      subtitle: "The Efficiency Engine",
      price: "149",
      period: "/mo",
      philosophy: "Trade some autonomy for higher efficiency and optimized purchasing.",
      idealFor: "Owners who want a 'set it and forget it' purchasing model and minimal admin work.",
      highlight: true,
      features: [
        { label: "Formulary", value: "Formulary Model" },
        { label: "Benefits Flow", value: "Consolidated" },
        { label: "Data", value: "Shared for Value" },
      ],
    },
    {
      name: "Rx Flex",
      subtitle: "The Centralized Hub",
      price: "299+",
      period: "/mo",
      philosophy: "Centralized Control. Set purchasing rules and oversight across all stores.",
      idealFor: "Small chains or owners with 3+ stores who need unified purchasing and analytics.",
      highlight: false,
      features: [
        { label: "Formulary", value: "Group-Managed" },
        { label: "Benefits Flow", value: "Customizable" },
        { label: "Data", value: "Admin-Level Visibility" },
      ],
    },
  ];

  const valueProps = [
    {
      title: "Proudly Canadian",
      description: "Rooted in Canada, we understand the unique needs of independent Canadian pharmacies.",
    },
    {
      title: "Unmatched Transparency",
      description: "Clear communication, honest pricing, and no hidden fees—ever. You get the true net cost.",
    },
    {
      title: "Maximum Benefits",
      description: "Our lean model strips out middleman bureaucracy, meaning more savings directly for you.",
    },
  ];

  return (
    <div className="page-fade bg-terra-50 font-sans overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-terra-950 to-terra-800 text-white pt-32 pb-32 overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div
          ref={headerRef}
          className={`container-wide relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-6 transition-all duration-700 ${
            headerVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="uppercase tracking-widest text-[11px] text-terra-400 mb-6 font-medium">
            Membership Plans
          </span>
          <h1 className="font-display text-4xl md:text-[64px] leading-tight mb-6">
            Transparent Pricing.<br /> No Hidden Fees.
          </h1>
          <p className="text-lg md:text-[18px] text-terra-300 max-w-2xl">
            Whether you want a fortress of privacy or an engine of profit, we have the build for you.
            Our lean model means more savings and growth for your pharmacy.
          </p>
        </div>
      </header>

      <main>
        {/* Pricing Cards Layout */}
        <section
          ref={cardsRef}
          className={`pb-24 -mt-16 relative z-20 px-6 transition-all duration-700 ${
            cardsVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="container-wide max-w-6xl mx-auto">
            {/* Grid Container for Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
              {plans.map((plan, idx) => (
                <article
                  key={idx}
                  className={`relative flex flex-col h-full bg-white rounded-2xl p-8 transition-shadow duration-300 ${
                    plan.highlight
                      ? "border-2 border-terra-500 shadow-xl z-10"
                      : "border border-terra-200 shadow-sm hover:shadow-md z-0"
                  }`}
                >
                  {/* Highlight Badge */}
                  {plan.highlight && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-terra-500 text-white text-[11px] font-bold uppercase tracking-widest py-1.5 px-6 rounded-full whitespace-nowrap shadow-sm">
                      Most Popular
                    </div>
                  )}

                  {/* Card Header */}
                  <header className="mb-6">
                    <h3 className="font-display text-[26px] text-terra-950 mb-1">{plan.name}</h3>
                    <p className="text-[14px] font-medium text-terra-500">{plan.subtitle}</p>
                  </header>

                  {/* Card Price */}
                  <div className="flex items-baseline mb-6 pb-6 border-b border-terra-100">
                    <span className="text-[20px] text-terra-950 font-medium mr-1" aria-hidden="true">$</span>
                    <span className="font-display text-[56px] leading-none text-terra-950">
                      {plan.price}
                    </span>
                    <span className="text-[16px] text-terra-500 ml-1">{plan.period}</span>
                  </div>

                  {/* Card Body - Uses flex-grow to push the button to the bottom */}
                  <div className="flex-grow space-y-6 mb-8">
                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-widest text-terra-400 mb-2">
                        Philosophy
                      </span>
                      <p className="text-[14px] text-terra-700 leading-relaxed">{plan.philosophy}</p>
                    </div>

                    <ul className="space-y-3">
                      {plan.features.map((feat, i) => (
                        <li
                          key={i}
                          className="flex justify-between items-center border-b border-terra-50 pb-2 last:border-0 last:pb-0"
                        >
                          <span className="text-[14px] text-terra-500">{feat.label}</span>
                          <span className="text-[14px] font-medium text-terra-950 text-right">
                            {feat.value}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-terra-50 p-4 rounded-lg">
                      <span className="block text-[11px] font-bold uppercase tracking-widest text-terra-500 mb-1">
                        Best For
                      </span>
                      <p className="text-[13px] text-terra-700 leading-relaxed">{plan.idealFor}</p>
                    </div>
                  </div>

                  {/* Action Button - stays at the bottom due to flex-grow on the container above */}
                  <button
                    type="button"
                    className={`mt-auto w-full py-4 rounded-full font-medium text-[15px] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terra-500 ${
                      plan.highlight
                        ? "bg-terra-950 text-white hover:bg-terra-800"
                        : "bg-white border border-terra-200 text-terra-950 hover:bg-terra-50"
                    }`}
                  >
                    Select Plan
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications Table */}
        <section
          ref={tableRef}
          className={`py-24 px-6 bg-white border-y border-terra-200 transition-all duration-700 ${
            tableVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="container-wide max-w-5xl mx-auto">
            <header className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-[36px] text-terra-950">
                Technical Specifications
              </h2>
              <p className="text-terra-600 mt-3">Compare features across all OneRx membership tiers.</p>
            </header>

            <div className="bg-white rounded-2xl border border-terra-200 overflow-x-auto shadow-sm w-full">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-terra-50 border-b border-terra-200">
                    <th scope="col" className="py-5 px-8 font-display text-[16px] text-terra-950 font-semibold w-1/4">
                      Feature Set
                    </th>
                    <th scope="col" className="py-5 px-8 font-display text-[16px] text-terra-950 font-semibold">
                      Rx Starts
                    </th>
                    <th scope="col" className="py-5 px-8 font-display text-[16px] text-terra-950 font-semibold">
                      Rx Empowered
                    </th>
                    <th scope="col" className="py-5 px-8 font-display text-[16px] text-terra-950 font-semibold">
                      Rx Flex
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[14px] divide-y divide-terra-100">
                  {[
                    { feature: "Formulary Control", vals: ["Member Decides", "Open Formulary", "OneRx Optimized"] },
                    { feature: "Benefits Flow", vals: ["Vendor → Member", "Vendor → Member", "Vendor → OneRx → Member"] },
                    { feature: "Distributor Auto-Sub", vals: [<span className="italic text-terra-400">None</span>, "Member Managed", "Full Automated Substitution"] },
                    { feature: "Reporting", vals: ["Optional (Privacy Mode)", "Optional (Privacy Mode)", "Comprehensive Dashboard"] },
                    { feature: "Opportunity Analysis", vals: ["Monthly", "Monthly", "Monthly (Continuous)"] }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-terra-50/50 transition-colors">
                      <td scope="row" className="py-5 px-8 font-medium text-terra-950">{row.feature}</td>
                      <td className="py-5 px-8 text-terra-600">{row.vals[0]}</td>
                      <td className="py-5 px-8 text-terra-600">{row.vals[1]}</td>
                      <td className="py-5 px-8 text-terra-600">{row.vals[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section
          ref={valuesRef}
          className={`py-24 px-6 bg-white transition-all duration-700 ${
            valuesVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
              {valueProps.map((value, idx) => (
                <article key={idx} className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-terra-50 rounded-full flex items-center justify-center mb-6 text-terra-500 border border-terra-100 shadow-sm">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-[20px] text-terra-950 mb-3">{value.title}</h3>
                  <p className="text-[14px] text-terra-600 leading-relaxed max-w-xs">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <TrustFeaturesRow />
        <ModuleCTA />
      </main>

      <Footer />
    </div>
  );
}