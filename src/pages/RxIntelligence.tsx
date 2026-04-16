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
    if (meta) meta.setAttribute('content', 'Rx Intelligence turns purchasing and operational data into clear, actionable insight.');
  }, []);

  const { ref: oRef, isVisible: oVis } = useScrollAnimation();
  const { ref: kRef, isVisible: kVis } = useScrollAnimation();

  const modules = [
    { label: "Rx Intelligence", to: "/rx-intelligence" },
    { label: "Rx Manager", to: "/rx-manager" },
    { label: "Rx Suite", to: "/rx-suite" },
    { label: "Rx Incident", to: "/rx-incident" },
  ];

  return (
    <div className="page-fade">
      <Navigation />

      <header className="bg-gradient-to-r from-terra-950 to-terra-800 text-white pt-28 pb-16">
        <div className="container-wide flex flex-col lg:flex-row items-start gap-8">
          <div className="w-full lg:w-1/2">
            <div className="text-sm text-terra-400 mb-3"><Link to="/">OneRx Hub</Link> / <span>Rx Intelligence</span></div>
            <div className="uppercase tracking-widest text-[10px] text-terra-500 mb-4">AI &amp; ANALYTICS</div>
            <h1 className="font-display text-[56px] leading-tight">The brain of your pharmacy operating system.</h1>
            <p className="text-[18px] text-terra-300 mt-4">Rx Intelligence turns raw purchasing and operational data into clear, actionable insight — so every decision is backed by data, not intuition.</p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="px-5 py-2 bg-terra-500 rounded text-white">Contact Us</a>
              <Link to="/" className="px-5 py-2 border border-white rounded">See All Modules</Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-end">
            <div className="bg-terra-800 border border-terra-700 rounded-xl p-4 w-full max-w-md animate-[float_4s_ease-in-out_infinite]">
              <div className="text-xs text-terra-400 mb-3">Rx Intelligence · Analytics overview — Last 30 days</div>
              <div className="flex gap-3 text-white mb-2">
                <div>
                  <div className="font-display text-[28px]">1,284</div>
                  <div className="text-xs text-terra-300">Rxs dispensed</div>
                </div>
                <div>
                  <div className="font-display text-[28px]">98.4%</div>
                  <div className="text-xs text-terra-300">Claim approval rate</div>
                </div>
                <div>
                  <div className="font-display text-[28px]">$94.2K</div>
                  <div className="text-xs text-terra-300">Revenue MTD</div>
                </div>
              </div>
              <svg className="w-full h-8" viewBox="0 0 100 20" fill="none"><polyline points="0,15 20,12 40,8 60,6 80,3 100,2" stroke="#CC785C" strokeWidth="1.5"/></svg>
              <div className="mt-2 font-mono text-[12px] text-terra-200">
                <div className="flex items-center justify-between py-1"><span>Metformin 500mg · 02243128 · Qty: 90</span><span className="bg-green-700 text-xs px-2 rounded text-white">Active</span></div>
                <div className="flex items-center justify-between py-1"><span>Lisinopril 10mg · 02231612 · Qty: 30</span><span className="bg-amber-800 text-xs px-2 rounded text-white">Refill due</span></div>
                <div className="flex items-center justify-between py-1"><span>Atorvastatin 20mg · 02247034 · Qty: 30</span><span className="bg-green-700 text-xs px-2 rounded text-white">Active</span></div>
              </div>
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-[#5B21B6] rounded-full animate-play-pulse" />
                <div className="text-[10px] text-terra-300">AI processing</div>
              </div>
            </div>
          </div>
        </div>

        {/* Module switcher strip */}
        <div className="mt-6 bg-terra-800 py-3">
          <div className="container-wide flex items-center justify-center gap-3">
            {modules.map((m) => (
              <Link key={m.label} to={m.to} className={`px-4 py-1 rounded-full text-sm ${m.to === "/rx-intelligence" ? "bg-terra-500 text-white" : "text-terra-300"}`}>{m.label}</Link>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section ref={oRef as any} className={`py-16 ${oVis ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/5">
              <div className="text-[11px] uppercase tracking-widest text-terra-500">SMARTER DECISIONS. BETTER MARGINS.</div>
              <h2 className="font-display text-[40px] text-terra-950 mt-3">Beyond reporting. True pharmacy analytics.</h2>
              <p className="text-[16px] text-terra-600 mt-4">In today's margin-compressed pharmacy environment, success requires more than high prescription volume — it demands intelligent decision-making. Rx Intelligence converts everyday purchasing and operational data into a strategic advantage.</p>
              <p className="text-[16px] text-terra-600 mt-3">By moving beyond basic reporting to true analytics, the platform lets owners understand exactly where dollars are gained or lost, ensuring every decision is backed by data rather than intuition.</p>
            </div>
            <div className="lg:w-2/5 grid grid-cols-2 gap-4">
              <div className="bg-terra-100 p-6 rounded">
                <div className="font-display text-[36px] text-terra-500">20%</div>
                <div className="text-[13px] text-terra-600 mt-1">Average margin improvement</div>
              </div>
              <div className="bg-terra-100 p-6 rounded">
                <div className="font-display text-[36px] text-terra-500">1 dashboard</div>
                <div className="text-[13px] text-terra-600 mt-1">Multi-store consolidated view</div>
              </div>
              <div className="bg-terra-100 p-6 rounded">
                <div className="font-display text-[36px] text-terra-500">Real-time</div>
                <div className="text-[13px] text-terra-600 mt-1">Data filtering by molecule, vendor, time</div>
              </div>
              <div className="bg-terra-100 p-6 rounded">
                <div className="font-display text-[36px] text-terra-500">0 spreadsheets</div>
                <div className="text-[13px] text-terra-600 mt-1">Required to get answers</div>
              </div>
            </div>
          </div>
        </section>

        <section ref={kRef as any} className={`py-16 bg-white ${kVis ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide">
            <h3 className="text-center font-display text-[36px] text-terra-950 mb-8">Key Insights &amp; Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-terra-50 border-l-4 border-terra-500 p-7 rounded-lg">
                <div className="text-[20px] font-display text-terra-950">Savings Simulation</div>
                <p className="text-[15px] text-terra-600 mt-2">Stop guessing about purchasing changes. Model purchasing scenarios and forecast potential savings based on your real pharmacy data — before you commit to a single order.</p>
              </div>
              <div className="bg-terra-50 border-l-4 border-terra-500 p-7 rounded-lg">
                <div className="text-[20px] font-display text-terra-950">Actionable Reports</div>
                <p className="text-[15px] text-terra-600 mt-2">Pinpoint exactly where performance gaps exist and what to do about them. Reports are built to improve your bottom line — not just fill a compliance checkbox.</p>
              </div>
              <div className="bg-terra-50 border-l-4 border-terra-500 p-7 rounded-lg">
                <div className="text-[20px] font-display text-terra-950">Multi-Store Visibility</div>
                <p className="text-[15px] text-terra-600 mt-2">For owners with multiple locations, a consolidated dashboard delivers a full financial view across your entire network from a single screen. No tab-switching. No reconciliation.</p>
              </div>
              <div className="bg-terra-50 border-l-4 border-terra-500 p-7 rounded-lg">
                <div className="text-[20px] font-display text-terra-950">Real-Time Analytics</div>
                <p className="text-[15px] text-terra-600 mt-2">Filter pharmacy-level data instantly by molecule, vendor, distributor, or time period. Find answers in seconds — not in next week's report.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-terra-800 text-white">
          <div className="container-wide flex gap-6 justify-between">
            <div className="flex-1 text-center">
              <div className="text-[16px] font-display">Reveal Hidden Margins</div>
              <div className="text-sm text-terra-300">Uncover improvements within your existing volume.</div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-[16px] font-display">Operate Smarter</div>
              <div className="text-sm text-terra-300">Informed, optimized purchasing decisions — automatically.</div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-[16px] font-display">Turn Data into Growth</div>
              <div className="text-sm text-terra-300">Convert purchasing data into tangible operational savings.</div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-[16px] font-display">Scale Consistency</div>
              <div className="text-sm text-terra-300">Apply data-driven strategies across all locations.</div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-terra-50">
          <div className="container-wide grid gap-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-[11px] uppercase tracking-widest text-terra-500">HOW IT WORKS</div>
                <h3 className="font-display text-[28px] text-terra-950 mt-3">Your ODB claims reconcile automatically. Discrepancies flagged before they cost you.</h3>
                <p className="text-terra-600 mt-3">Rx Intelligence monitors every claim submission against expected outcomes. When there's a mismatch, you're notified immediately — not when you find out from the adjudicator weeks later. Canadian regulatory compliance built in.</p>
                <ul className="mt-4 text-terra-500 space-y-2">
                  <li>ODB reconciliation · NAPRA-aligned reporting · PharmaNet integration ready</li>
                </ul>
              </div>
              <div className="bg-terra-800 p-6 rounded text-white">3 ODB discrepancies flagged · $847 at risk · Review now</div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center bg-white p-8 rounded">
              <div className="bg-terra-50 p-6 rounded">
                <h4 className="font-display text-[20px] text-terra-950">One screen. Every location. Complete clarity.</h4>
                <p className="text-terra-600 mt-3">Whether you own two stores or twelve, Rx Intelligence consolidates performance data across your entire network. Compare stores, identify underperformers, and apply winning strategies network-wide.</p>
              </div>
              <div className="p-6">
                <svg className="w-full h-40" viewBox="0 0 200 80"><rect x="10" y="20" width="20" height="40" fill="rgba(76,85,99,0.08)"/><rect x="40" y="5" width="20" height="55" fill="rgba(204,120,92,0.9)"/><rect x="70" y="30" width="20" height="30" fill="rgba(76,85,99,0.08)"/><rect x="100" y="15" width="20" height="45" fill="rgba(76,85,99,0.08)"/><rect x="130" y="35" width="20" height="25" fill="rgba(76,85,99,0.08)"/></svg>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-terra-950 text-white text-center">
          <div className="container-wide">
            <div className="relative max-w-3xl mx-auto">
              <div className="opacity-20 text-[80px] absolute -top-10 left-1/2 -translate-x-1/2">“</div>
              <p className="font-display italic text-[28px]">"Rx Intelligence completes the OneRx ecosystem. It ensures that while your pharmacy runs efficiently, it also grows profitably. It is the difference between simply filling scripts and fulfilling your business potential."</p>
              <div className="text-terra-400 mt-4">— OneRx Platform Team</div>
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
