import { useState, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const MODULE_DATA = [
  {
    id: "intelligence",
    label: "Rx Intelligence",
    tag: "AI & ANALYTICS",
    headline: "Your data tells a story. Rx Intelligence reads it for you.",
    body: "See claim approval rates, dispensing trends, and revenue gaps — automatically surfaced. No pivot tables. No manual exports. ODB reconciliation flags discrepancies before they cost you.",
    bullets: [
      "Real-time ODB claim reconciliation",
      "Multi-store dashboard in one view",
      "AI-flagged savings opportunities",
    ],
    cta: "Explore Rx Intelligence →",
    link: "/rx-intelligence", // Added redirect link
    image: "/public/pexels-rdne-6129881.jpg", 
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-terra-500">
        <polyline points="4,30 12,22 20,26 28,14 36,10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="36" cy="10" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "manager",
    label: "Rx Manager",
    tag: "OPERATIONS",
    headline: "Every purchase decision. One place.",
    body: "Rx Manager centralizes your ordering, formulary management, and purchase history. Know your best vendors, best timing, and best pricing — before you order, not after.",
    bullets: [
      "Centralized order management dashboard",
      "Dynamic formulary & purchasing strategy",
      "Analytics-driven vendor performance scoring",
    ],
    cta: "Explore Rx Manager →",
    link: "/rx-manager", // Added redirect link
    image: "/public/pexels-edward-jenner-4031689.jpg", 
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-terra-500">
        <line x1="8" y1="12" x2="32" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="8" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="8" y1="28" x2="24" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "suite",
    label: "Rx Suite",
    tag: "IT & TOOLS",
    headline: "Your pharmacy's IT department. Finally.",
    body: "Cloud backups, cyber protection, VoIP, eFax, AI chatbot, and digital forms — all managed for you. Stop worrying about your data. Start focusing on your patients.",
    bullets: [
      "AES-256 encrypted cloud backups",
      "Pharmacy-grade VoIP & secure eFax",
      "AI chatbot for patient-facing queries",
    ],
    cta: "Explore Rx Suite →",
    link: "/rx-suite", // Added redirect link
    image: "/public/pexels-mikhail-nilov-8851727.jpg", 
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-terra-500">
        <rect x="6" y="8" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <line x1="14" y1="32" x2="26" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="20" y1="28" x2="20" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "incident",
    label: "Rx Incident",
    tag: "COMPLIANCE",
    headline: "Anonymous reporting. Zero fear.",
    body: "NAPRA-aligned CQI+ incident reporting — anonymous, automated, and Canada-hosted. AI identifies trends before they become patterns. Your team reports. Your practice improves.",
    bullets: [
      "Anonymous near-miss reporting",
      "Automated NIDR submissions, ACP-aligned",
      "AI root-cause trend analysis",
    ],
    cta: "Explore Rx Incident →",
    link: "/rx-incident", // Added redirect link
    image: "/public/pexels-diego-romero-471613950-17515225.jpg", 
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-terra-500">
        <rect x="10" y="4" width="20" height="32" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <polyline points="16,20 19,23 25,17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="14" y1="10" x2="26" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const PhotoShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedTab, setDisplayedTab] = useState(0);
  const tabScrollRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  const handleTabSwitch = (index: number) => {
    if (index === activeTab || isTransitioning) return;
    setIsTransitioning(true);
    setActiveTab(index);
    setTimeout(() => {
      setDisplayedTab(index);
      setIsTransitioning(false);
    }, 200);
  };

  const current = MODULE_DATA[displayedTab];

  return (
    <section
      ref={sectionRef}
      className="relative bg-terra-950 overflow-hidden"
      style={{ paddingTop: 100, paddingBottom: 100 }}
    >
      {/* Header */}
      <div
        className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <span className="text-[11px] tracking-[0.12em] uppercase font-body text-terra-500 block mb-4">
          SEE IT IN ACTION
        </span>
        <h2 className="font-display text-4xl md:text-[48px] font-bold text-white leading-tight mb-5">
          See what OneRx actually does.
        </h2>
        <p className="font-body text-lg text-terra-300 max-w-[560px] mx-auto leading-relaxed px-5">
          No sales pitch. No stock photos. Just a Canadian pharmacist's actual workflow — automated.
        </p>
      </div>

      {/* Tab Navigation */}
      <div
        className={`flex justify-center mb-12 px-5 transition-all duration-500 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div
          ref={tabScrollRef}
          className="inline-flex items-center bg-terra-800 rounded-full p-1.5 overflow-x-auto no-scrollbar max-w-full gap-1"
        >
          {MODULE_DATA.map((mod, i) => (
            <button
              key={mod.id}
              onClick={() => handleTabSwitch(i)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full font-body text-sm font-medium transition-colors duration-200 shrink-0 ${
                activeTab === i
                  ? "bg-terra-500 text-white"
                  : "text-terra-400 hover:text-terra-300"
              }`}
            >
              {mod.label}
            </button>
          ))}
        </div>
      </div>

      {/* Image + Content Panel */}
      <div className="container-wide">
        <div
          className={`flex flex-col lg:flex-row gap-10 lg:gap-14 transition-all duration-500 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Photo Panel — 60% */}
          <div className="lg:w-[60%] w-full">
            <div
              className={`relative bg-terra-800 rounded-2xl lg:rounded-[16px] border border-terra-700 overflow-hidden transition-opacity duration-200 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
              style={{
                boxShadow: "0 32px 64px rgba(0,0,0,0.4)",
                aspectRatio: "16/9",
              }}
            >
              {/* Image element */}
              <img 
                src={current.image} 
                alt={`${current.label} interface preview`} 
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Bottom bar overlay for the image */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-3 z-10 bg-gradient-to-t from-black/60 to-transparent">
                <span className="bg-terra-500 text-white text-xs font-body px-3 py-1 rounded-full">
                  {current.label}
                </span>
              </div>
            </div>
          </div>

          {/* Content Panel — 40% */}
          <div className="lg:w-[40%] w-full flex items-center">
            <div
              className={`transition-all duration-200 ${
                isTransitioning
                  ? "opacity-0 translate-y-2"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <div className="mb-4">{current.icon}</div>
              <span className="text-[10px] tracking-[0.12em] uppercase font-body text-terra-500 block mb-3">
                {current.tag}
              </span>
              <h3 className="font-display text-2xl md:text-[28px] font-bold text-white leading-tight mb-4">
                {current.headline}
              </h3>
              <p className="font-body text-base text-terra-300 leading-[1.7] mb-6">
                {current.body}
              </p>
              <ul className="space-y-3 mb-8">
                {current.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-terra-500 shrink-0" />
                    <span className="font-body text-[15px] text-terra-200">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
              {/* Dynamic href tag */}
              <a
                href={current.link}
                className="font-body text-[15px] font-medium text-terra-500 hover:underline transition-all"
              >
                {current.cta}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="mt-16 bg-terra-800 h-12 flex items-center justify-center">
        <p className="font-body text-[13px] text-terra-400 text-center px-5">
          All photos show real OneRx workflows · Canada-hosted · No demo environment
        </p>
      </div>
    </section>
  );
};

export default PhotoShowcase;