import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ModuleCTA from "../components/ModuleCTA";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Pricing() {
  useEffect(() => {
    document.title = "Membership Plans & Pricing | OneRx";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Transparent membership plans tailored for independent Canadian pharmacies. No hidden fees, just pure data-driven growth.');
  }, []);

  const [isAnnual, setIsAnnual] = useState(true);
  const navigate = useNavigate();

  const { ref: headerRef, isVisible: headerVis } = useScrollAnimation();
  const { ref: pricingRef, isVisible: pricingVis } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVis } = useScrollAnimation();

  const pricingPlans = [
    {
      name: "Rx Starts",
      subtitle: 'The "Autonomy" Tier',
      price: isAnnual ? "49" : "59",
      description: "Designed for independent owners who want group buying power without interference. Keep full control of your purchasing strategy.",
      idealFor: "Independent-minded owners who value privacy.",
      features: [
        { label: "Core Philosophy", value: "You keep full control" },
        { label: "Formulary", value: "Non-Formulary (Order what you want)" },
        { label: "Benefits Flow", value: "Direct to your pharmacy" },
        { label: "Data Sharing", value: "Private (Basic setup only)" },
      ],
      ctaText: "Start with Autonomy",
      highlighted: false
    },
    {
      name: "Rx Empowered",
      subtitle: 'The "Performance" Tier',
      price: isAnnual ? "149" : "179",
      description: "Maximize profitability through automation, compliance, and analytics. Trade some autonomy for highly optimized purchasing.",
      idealFor: "Owners wanting a 'set it and forget it' model.",
      features: [
        { label: "Core Philosophy", value: "Optimized efficiency & rebates" },
        { label: "Formulary", value: "Formulary Model (Guided purchasing)" },
        { label: "Benefits Flow", value: "Consolidated OneRx payment" },
        { label: "Data Sharing", value: "Shared for deep analytics & alerts" },
      ],
      ctaText: "Maximize Performance",
      highlighted: true,
      badge: "RECOMMENDED"
    },
    {
      name: "Rx Flex",
      subtitle: 'The "Enterprise" Tier',
      price: "299+",
      description: "Built for multi-store owners or regional groups who need centralized decision-making and full network visibility.",
      idealFor: "Small chains and groups with 3+ locations.",
      features: [
        { label: "Core Philosophy", value: "Centralized Network Control" },
        { label: "Formulary", value: "Group-Managed Strategy" },
        { label: "Benefits Flow", value: "Customizable (HQ or Direct)" },
        { label: "Data Sharing", value: "Admin-Level Rollup Visibility" },
      ],
      ctaText: "Contact for Enterprise",
      highlighted: false
    }
  ];

  const faqs = [
    {
      question: "Why does OneRx charge a membership fee?",
      answer: "We charge a transparent software/membership fee so we don't have to hide costs elsewhere. Unlike traditional models where you pay hidden markups in a 'dimly lit room,' our model ensures you get maximum benefits with minimal overhead. Clear communication, honest pricing, and zero hidden fees."
    },
    {
      question: "Is OneRx a banner or a buying group?",
      answer: "Neither. OneRx is a purchasing-intelligence ecosystem and technology provider. We give independent pharmacies the data and tools to compete with large chains while allowing you to keep your brand, your identity, and your autonomy."
    },
    {
      question: "Will OneRx review my purchases to suggest savings?",
      answer: "Yes (on applicable tiers). We run monthly or quarterly reviews to identify overspend, missed savings, and shifting opportunities. The platform provides targeted recommendations and high-impact substitution options."
    },
    {
      question: "Do you support new pharmacy startups?",
      answer: "Absolutely. We support first-time owners with procurement setup, vendor onboarding, branding support, and pricing intelligence to ensure you launch with maximum margin efficiency."
    }
  ];

  return (
    <div className="page-fade bg-terra-50 min-h-screen flex flex-col">
     

      {/* Hero Section */}
      <header className="pt-32 pb-16 bg-white">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <div ref={headerRef as any} className={`${headerVis ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="uppercase tracking-widest text-[11px] text-terra-500 mb-4 font-medium">MEMBERSHIP PLANS</div>
            <h1 className="font-display text-[48px] md:text-[56px] text-terra-950 leading-tight mb-6">
              Unmatched transparency.<br />Honest pricing.
            </h1>
            <p className="text-[18px] text-terra-600 mb-10">
              Rooted in Canada, we understand the unique needs of independent pharmacies. Our lean model means more savings, zero hidden fees, and tools that give you chain-level leverage without corporate overhead.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 text-sm font-medium">
              <span className={`transition-colors ${!isAnnual ? "text-terra-950" : "text-terra-400"}`}>Monthly billing</span>
              <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className="w-14 h-7 rounded-full bg-terra-200 relative transition-colors focus:outline-none focus:ring-2 focus:ring-terra-500 focus:ring-offset-2"
                aria-label="Toggle annual billing"
              >
                <div className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-terra-950 transition-transform duration-300 ${isAnnual ? "translate-x-7 bg-terra-500" : ""}`} />
              </button>
              <span className={`transition-colors flex items-center gap-2 ${isAnnual ? "text-terra-950" : "text-terra-400"}`}>
                Annual billing <span className="bg-green-100 text-green-700 text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-sm">Save 15%</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pb-24">
        {/* Pricing Cards */}
        <section ref={pricingRef as any} className={`container-wide -mt-4 relative z-10 ${pricingVis ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {pricingPlans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${
                  plan.highlighted 
                    ? "bg-terra-950 text-white shadow-2xl scale-100 md:scale-105 border-none z-20" 
                    : "bg-white text-terra-950 border border-terra-200 shadow-sm hover:border-terra-400 z-10"
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-terra-500 text-white text-[10px] uppercase tracking-widest px-4 py-1 rounded-full font-medium">
                    {plan.badge}
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className={`font-display text-[28px] ${plan.highlighted ? "text-white" : "text-terra-950"}`}>{plan.name}</h3>
                  <div className={`text-[12px] uppercase tracking-widest mt-1 ${plan.highlighted ? "text-terra-400" : "text-terra-500"}`}>
                    {plan.subtitle}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[20px] font-medium">$</span>
                    <span className="font-display text-[56px] leading-none">{plan.price}</span>
                    <span className={`text-[14px] ${plan.highlighted ? "text-terra-400" : "text-terra-500"}`}>/mo</span>
                  </div>
                  {plan.price.includes("+") && (
                    <div className={`text-[12px] mt-1 ${plan.highlighted ? "text-terra-400" : "text-terra-500"}`}>Starting price. Custom quoted.</div>
                  )}
                </div>

                <p className={`text-[15px] mb-8 flex-grow ${plan.highlighted ? "text-terra-200" : "text-terra-600"}`}>
                  {plan.description}
                </p>

                <div className="mb-8 space-y-4 flex-grow">
                  <div className={`text-[11px] uppercase tracking-widest font-medium border-b pb-2 ${plan.highlighted ? "text-terra-300 border-terra-800" : "text-terra-400 border-terra-100"}`}>
                    Plan Details
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex flex-col gap-1">
                        <span className={`text-[12px] font-medium ${plan.highlighted ? "text-white" : "text-terra-950"}`}>{feature.label}</span>
                        <span className={`text-[14px] ${plan.highlighted ? "text-terra-300" : "text-terra-600"}`}>{feature.value}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className={`mt-6 pt-4 border-t ${plan.highlighted ? "border-terra-800" : "border-terra-100"}`}>
                    <span className={`text-[12px] block font-medium mb-1 ${plan.highlighted ? "text-white" : "text-terra-950"}`}>Best For:</span>
                    <span className={`text-[14px] italic ${plan.highlighted ? "text-terra-300" : "text-terra-600"}`}>{plan.idealFor}</span>
                  </div>
                </div>

                <button 
                onClick={() => navigate('/pricing')}
                  className={`w-full py-4 rounded-lg font-medium transition-colors mt-auto ${
                    plan.highlighted 
                      ? "bg-terra-500 text-white hover:bg-terra-400" 
                      : "bg-terra-50 text-terra-950 border border-terra-200 hover:bg-terra-100"
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Joining Process */}
        <section className="py-24 bg-terra-50">
          <div className="container-wide">
            <h2 className="font-display text-[32px] text-center text-terra-950 mb-12">Joining OneRx is simple and transparent.</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Sign a No-Obligation NDA",
                "Review Potential Savings",
                "Choose Your Membership Tier",
                "Select a Switch-Over Date",
                "Notify Existing Banner",
                "We Handle Pushback"
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-terra-200 text-center flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-terra-100 text-terra-600 font-display flex items-center justify-center mb-4">
                    {idx + 1}
                  </div>
                  <div className="text-[14px] text-terra-950 font-medium leading-snug">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section ref={faqRef as any} className={`py-16 bg-white ${faqVis ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-[36px] text-terra-950">Common Questions</h2>
              <p className="text-terra-600 mt-2">Everything you need to know about billing, autonomy, and switching.</p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-terra-200 rounded-lg p-6 hover:border-terra-300 transition-colors bg-terra-50/50">
                  <h3 className="font-display text-[20px] text-terra-950 mb-3">{faq.question}</h3>
                  <p className="text-[15px] text-terra-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/contact" className="text-terra-500 font-medium hover:text-terra-700 flex items-center justify-center gap-2">
                Have a different question? Contact Sales <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <ModuleCTA />
     
    </div>
  );
}