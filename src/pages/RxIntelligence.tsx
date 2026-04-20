import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TrustFeaturesRow from "../components/TrustFeaturesRow";
import ModuleCTA from "../components/ModuleCTA";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function RxIntelligence() {
  useEffect(() => {
    document.title = "Rx Intelligence — Data-Driven Pharmacy Analytics | OneRx";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Rx Intelligence turns raw purchasing and operational data into clear, actionable insight.');
  }, []);

  const { ref: introRef, isVisible: introVis } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVis } = useScrollAnimation();
  const { ref: workflowRef, isVisible: workflowVis } = useScrollAnimation();

  const modules = [
    { label: "Rx Intelligence", to: "/rx-intelligence" },
    { label: "Rx Manager", to: "/rx-manager" },
    { label: "Rx Suite", to: "/rx-suite" },
    { label: "Rx Incident", to: "/rx-incident" },
  ];

  return (
    <div className="page-fade bg-white">
      <Navigation />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-terra-950 to-terra-800 text-white pt-32 pb-16">
        <div className="container-wide flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="w-full lg:w-1/2">
            <div className="text-sm text-terra-400 mb-3 flex items-center gap-2">
              <Link to="/" className="hover:text-white transition-colors">OneRx Hub</Link> 
              <span>/</span> 
              <span className="text-white">Rx Intelligence</span>
            </div>
            <div className="uppercase tracking-widest text-[11px] text-terra-500 mb-4 font-medium">AI &amp; ANALYTICS</div>
            <h1 className="font-display text-[48px] md:text-[56px] leading-tight">The brain of your pharmacy operating system.</h1>
            <p className="text-[18px] text-terra-300 mt-6 max-w-lg">
              Rx Intelligence turns raw purchasing and operational data into clear, actionable insight — so every decision is backed by data, not intuition.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 bg-terra-500 rounded text-white font-medium hover:bg-terra-400 transition-colors">Contact Sales</a>
              <Link to="/products" className="px-6 py-3 border border-white/30 rounded text-white hover:bg-white/10 transition-colors">See All Modules</Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            {/* Floating Dashboard UI Widget */}
            <div className="bg-terra-900 border border-terra-700 rounded-xl p-6 w-full max-w-md animate-[float_4s_ease-in-out_infinite] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-terra-500/10 rounded-full blur-2xl"></div>
              
              <div className="text-[11px] uppercase tracking-widest text-terra-400 mb-5 border-b border-terra-800 pb-2">Analytics Overview · Last 30 Days</div>
              
              <div className="flex justify-between text-white mb-6">
                <div>
                  <div className="font-display text-[32px] leading-none">1,284</div>
                  <div className="text-[11px] uppercase tracking-wider text-terra-400 mt-1">Rxs dispensed</div>
                </div>
                <div>
                  <div className="font-display text-[32px] leading-none">98.4%</div>
                  <div className="text-[11px] uppercase tracking-wider text-terra-400 mt-1">Claim approval</div>
                </div>
                <div>
                  <div className="font-display text-[32px] leading-none text-terra-300">$94.2K</div>
                  <div className="text-[11px] uppercase tracking-wider text-terra-400 mt-1">Revenue MTD</div>
                </div>
              </div>
              
              {/* Abstract Sparkline */}
              <div className="mb-6">
                <svg className="w-full h-10 overflow-visible" viewBox="0 0 100 20" fill="none">
                  <path d="M0,20 Q10,15 20,18 T40,10 T60,12 T80,5 T100,2" stroke="#CC785C" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="100" cy="2" r="2" fill="#CC785C" className="animate-play-pulse" />
                </svg>
              </div>
              
              <div className="font-mono text-[12px] text-terra-200 space-y-3">
                <div className="flex items-center justify-between p-2 bg-terra-800/50 rounded">
                  <span>Metformin 500mg · Qty: 90</span>
                  <span className="bg-green-500/20 text-green-400 text-[10px] uppercase px-2 py-0.5 rounded border border-green-500/20">Active</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-terra-800/50 rounded">
                  <span>Lisinopril 10mg · Qty: 30</span>
                  <span className="bg-amber-500/20 text-amber-400 text-[10px] uppercase px-2 py-0.5 rounded border border-amber-500/20">Refill Due</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-terra-800/50 rounded">
                  <span>Atorvastatin 20mg · Qty: 30</span>
                  <span className="bg-green-500/20 text-green-400 text-[10px] uppercase px-2 py-0.5 rounded border border-green-500/20">Active</span>
                </div>
              </div>
              
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-terra-400 rounded-full animate-pulse" />
                <div className="text-[10px] uppercase tracking-widest text-terra-400">Live</div>
              </div>
            </div>
          </div>
        </div>

        {/* Module switcher strip */}
        <div className="mt-12 bg-terra-950/50 border-t border-terra-800 py-4">
          <div className="container-wide flex flex-wrap items-center justify-center gap-3 md:gap-6">
            {modules.map((m) => (
              <Link 
                key={m.label} 
                to={m.to} 
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  m.to === "/rx-intelligence" 
                    ? "bg-terra-500 text-white shadow-lg" 
                    : "text-terra-300 hover:text-white hover:bg-terra-800"
                }`}
              >
                {m.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main>
        {/* Intro & Core Value */}
        <section ref={introRef as any} className={`py-24 ${introVis ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="text-[11px] uppercase tracking-widest text-terra-500 mb-3 font-medium">SMARTER DECISIONS. BETTER MARGINS.</div>
              <h2 className="font-display text-[40px] text-terra-950 mb-6 leading-tight">Beyond reporting. True pharmacy analytics.</h2>
              <p className="text-[16px] text-terra-600 mb-4 leading-relaxed">
                In today's margin-compressed pharmacy environment, success requires more than high prescription volume — it demands intelligent decision-making. Rx Intelligence converts everyday purchasing and operational data into a strategic advantage.
              </p>
              <p className="text-[16px] text-terra-600 leading-relaxed">
                By moving beyond basic reporting to true analytics, the platform lets owners understand exactly where dollars are gained or lost, ensuring every decision is backed by data rather than intuition.
              </p>
            </div>
            
            {/* Value Stat Grid */}
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-terra-50 border border-terra-100 p-8 rounded-xl flex flex-col justify-center items-center text-center">
                <div className="font-display text-[48px] text-terra-500 mb-2">20%</div>
                <div className="text-[13px] text-terra-700 font-medium">Average margin improvement</div>
              </div>
              <div className="bg-terra-50 border border-terra-100 p-8 rounded-xl flex flex-col justify-center items-center text-center">
                <div className="font-display text-[48px] text-terra-500 mb-2">1</div>
                <div className="text-[13px] text-terra-700 font-medium">Consolidated dashboard view</div>
              </div>
              <div className="bg-terra-50 border border-terra-100 p-8 rounded-xl flex flex-col justify-center items-center text-center">
                <div className="font-display text-[32px] text-terra-500 mb-2 mt-3">Live</div>
                <div className="text-[13px] text-terra-700 font-medium">Data filtering by molecule</div>
              </div>
              <div className="bg-terra-50 border border-terra-100 p-8 rounded-xl flex flex-col justify-center items-center text-center">
                <div className="font-display text-[48px] text-terra-500 mb-2">0</div>
                <div className="text-[13px] text-terra-700 font-medium">Spreadsheets required</div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section ref={featuresRef as any} className={`py-24 bg-terra-50 border-y border-terra-100 ${featuresVis ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide">
            <h3 className="text-center font-display text-[36px] text-terra-950 mb-16">Key Insights &amp; Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-white border-t-4 border-terra-500 p-8 rounded-b-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-terra-100 text-terra-600 rounded-lg flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                </div>
                <div className="text-[24px] font-display text-terra-950 mb-3">Savings Simulation</div>
                <p className="text-[15px] text-terra-600">Stop guessing about purchasing changes. Model purchasing scenarios and forecast potential savings based on your real pharmacy data — before you commit to a single order.</p>
              </div>

              <div className="bg-white border-t-4 border-terra-500 p-8 rounded-b-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-terra-100 text-terra-600 rounded-lg flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                </div>
                <div className="text-[24px] font-display text-terra-950 mb-3">Actionable Reports</div>
                <p className="text-[15px] text-terra-600">Pinpoint exactly where performance gaps exist and what to do about them. Reports are built to improve your bottom line — not just fill a compliance checkbox.</p>
              </div>

              <div className="bg-white border-t-4 border-terra-500 p-8 rounded-b-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-terra-100 text-terra-600 rounded-lg flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
                <div className="text-[24px] font-display text-terra-950 mb-3">Multi-Store Visibility</div>
                <p className="text-[15px] text-terra-600">For owners with multiple locations, a consolidated dashboard delivers a full financial view across your entire network from a single screen. No tab-switching. No reconciliation.</p>
              </div>

              <div className="bg-white border-t-4 border-terra-500 p-8 rounded-b-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-terra-100 text-terra-600 rounded-lg flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div className="text-[24px] font-display text-terra-950 mb-3">Real-Time Analytics</div>
                <p className="text-[15px] text-terra-600">Filter pharmacy-level data instantly by molecule, vendor, distributor, or time period. Find answers in seconds — not in next week's report.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Workflow & ODB Focus */}
        <section ref={workflowRef as any} className={`py-24 bg-white ${workflowVis ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide space-y-24">
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="bg-terra-900 p-8 md:p-10 rounded-2xl text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-terra-700 rounded-full opacity-20 -mr-10 -mt-10 blur-2xl"></div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <span className="text-[12px] uppercase tracking-widest text-terra-300 font-medium">System Alert</span>
                  </div>
                  <div className="font-display text-[24px] mb-4">3 ODB Discrepancies Flagged</div>
                  <div className="text-[40px] font-display text-terra-300 mb-6">$847.20 <span className="text-[16px] text-terra-400 font-sans tracking-normal">at risk</span></div>
                  <button className="w-full py-3 bg-white text-terra-900 rounded font-medium hover:bg-terra-100 transition-colors">
                    Review & Reconcile Now
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="text-[11px] uppercase tracking-widest text-terra-500 mb-3 font-medium">COMPLIANCE & RECONCILIATION</div>
                <h3 className="font-display text-[32px] text-terra-950 mb-6 leading-tight">Your ODB claims reconcile automatically. Discrepancies flagged before they cost you.</h3>
                <p className="text-terra-600 text-[16px] mb-6 leading-relaxed">
                  Rx Intelligence monitors every claim submission against expected outcomes. When there's a mismatch, you're notified immediately — not when you find out from the adjudicator weeks later.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-terra-700">
                    <svg className="text-terra-500 shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Automated ODB reconciliation
                  </li>
                  <li className="flex items-center gap-3 text-terra-700">
                    <svg className="text-terra-500 shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    NAPRA-aligned reporting standards
                  </li>
                  <li className="flex items-center gap-3 text-terra-700">
                    <svg className="text-terra-500 shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Provincial network integration ready
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="w-full lg:w-1/2">
                <div className="text-[11px] uppercase tracking-widest text-terra-500 mb-3 font-medium">ENTERPRISE SCALE</div>
                <h3 className="font-display text-[32px] text-terra-950 mb-6 leading-tight">One screen. Every location. Complete clarity.</h3>
                <p className="text-terra-600 text-[16px] leading-relaxed">
                  Whether you own two stores or twelve, Rx Intelligence consolidates performance data across your entire network. Compare stores, identify underperformers, and apply winning strategies network-wide without exporting a single CSV file.
                </p>
              </div>
              <div className="w-full lg:w-1/2 bg-terra-50 border border-terra-100 rounded-2xl p-8 flex items-end justify-between h-64">
                {/* Abstract Bar Chart */}
                {[40, 75, 30, 90, 50, 85].map((height, i) => (
                  <div key={i} className="w-1/6 px-2 flex flex-col items-center justify-end h-full group">
                    <div className="opacity-0 group-hover:opacity-100 text-[10px] text-terra-500 mb-2 transition-opacity">${height}k</div>
                    <div 
                      className={`w-full rounded-t-sm transition-all duration-500 ${i === 3 ? 'bg-terra-500' : 'bg-terra-200 group-hover:bg-terra-300'}`}
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Benefits Bar */}
        <section className="py-12 bg-terra-950 text-white border-b border-terra-900">
          <div className="container-wide flex flex-wrap gap-8 justify-between">
            <div className="flex-1 min-w-[200px]">
              <div className="text-[18px] font-display mb-2 text-terra-300">Reveal Hidden Margins</div>
              <div className="text-sm text-terra-400">Uncover improvements within your existing prescription volume.</div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="text-[18px] font-display mb-2 text-terra-300">Operate Smarter</div>
              <div className="text-sm text-terra-400">Make informed, optimized purchasing decisions automatically.</div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="text-[18px] font-display mb-2 text-terra-300">Turn Data into Growth</div>
              <div className="text-sm text-terra-400">Convert raw purchasing data into tangible operational savings.</div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="text-[18px] font-display mb-2 text-terra-300">Scale Consistency</div>
              <div className="text-sm text-terra-400">Apply data-driven strategies flawlessly across all locations.</div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-24 bg-terra-50 text-center">
          <div className="container-wide">
            <div className="relative max-w-4xl mx-auto">
              <div className="text-terra-200 text-[120px] font-serif leading-none absolute -top-16 left-1/2 -translate-x-1/2">“</div>
              <p className="font-display text-[28px] md:text-[36px] text-terra-950 leading-snug relative z-10">
                "Rx Intelligence completes the OneRx ecosystem. It ensures that while your pharmacy runs efficiently, it also grows profitably. It is the difference between simply filling scripts and fulfilling your business potential."
              </p>
              <div className="mt-8 flex flex-col items-center">
                <div className="w-12 h-12 bg-terra-800 rounded-full flex items-center justify-center text-white font-display mb-3 shadow-lg">1Rx</div>
                <div className="text-[14px] font-medium text-terra-900 uppercase tracking-widest">OneRx Platform Team</div>
              </div>
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