import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TrustFeaturesRow from "../components/TrustFeaturesRow";
import ModuleCTA from "../components/ModuleCTA";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function RxSuite() {
  useEffect(() => {
    document.title = "Rx Suite — Clinical Dispensing Software | OneRx";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'A modern, lightning-fast dispensing system designed to reduce cognitive load and eliminate workflow bottlenecks.');
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
              <Link to="/" className="hover:text-white transition-colors"></Link> 
              <span></span> 
              <span className="text-white">Rx Suite</span>
            </div>
            <div className="uppercase tracking-widest text-[11px] text-terra-500 mb-4 font-medium">CLINICAL DISPENSING ENGINE</div>
            <h1 className="font-display text-[48px] md:text-[56px] leading-tight">Lightning fast. Zero cognitive clutter.</h1>
            <p className="text-[18px] text-terra-300 mt-6 max-w-lg">
              We replaced the 50-click workflows of legacy software with a keyboard-first, meticulously designed interface. Process prescriptions faster, catch errors sooner, and go home on time.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 bg-terra-500 rounded text-white font-medium hover:bg-terra-400 transition-colors">Request Demo</a>
              <Link to="/pricing" className="px-6 py-3 border border-white/30 rounded text-white hover:bg-white/10 transition-colors">View Pricing</Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            {/* Floating Dispensing UI Widget */}
            <div className="bg-terra-900 border border-terra-700 rounded-xl w-full max-w-md animate-[float_4s_ease-in-out_infinite] shadow-2xl relative overflow-hidden flex flex-col">
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-terra-600/10 rounded-full blur-3xl"></div>
              
              {/* Header */}
              <div className="p-5 border-b border-terra-800 flex justify-between items-center bg-terra-950/50">
                <div>
                  <div className="text-[14px] text-white font-medium">Rx #8492023</div>
                  <div className="text-[11px] text-terra-400 mt-1">Status: Pharmacist Verification</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-terra-800 flex items-center justify-center text-[12px] text-terra-300 font-display">MC</div>
              </div>
              
              {/* Patient & Drug Info */}
              <div className="p-6 flex-grow space-y-6">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-terra-500 mb-2">Patient Profile</div>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-white text-[16px] font-medium">Alexander, Michael</div>
                      <div className="text-[13px] text-terra-300">DOB: 14-Aug-1982 (43y)</div>
                    </div>
                    <div className="bg-terra-800/80 text-terra-200 text-[10px] uppercase px-2 py-1 rounded">No Allergies</div>
                  </div>
                </div>

                <div className="p-4 bg-terra-800/40 border border-terra-700/50 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-white font-medium">Rosuvastatin 10mg Tab</div>
                    <div className="text-[12px] text-terra-400 font-mono">DIN: 02337984</div>
                  </div>
                  <div className="text-[13px] text-terra-300 mb-3">Take one tablet daily by mouth at bedtime.</div>
                  <div className="flex gap-4 border-t border-terra-700 pt-3">
                    <div>
                      <div className="text-[10px] text-terra-500 uppercase tracking-wider">Qty</div>
                      <div className="text-white">90</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-terra-500 uppercase tracking-wider">Days</div>
                      <div className="text-white">90</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-terra-500 uppercase tracking-wider">Refills</div>
                      <div className="text-white">3</div>
                    </div>
                  </div>
                </div>

                {/* System check indicator */}
                <div className="flex items-center gap-3 text-[13px] text-terra-300 bg-terra-950/40 p-3 rounded">
                  <svg className="text-green-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  Clinical checks passed. No interactions.
                </div>
              </div>
              
              {/* Keyboard Shortcut Footer */}
              <div className="p-4 border-t border-terra-800 bg-terra-950/80 flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-terra-800 text-terra-300 rounded text-[10px] font-mono">ESC</span>
                  <span className="text-[11px] text-terra-400 mt-1">Reject</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[11px] text-terra-400 mt-1">Verify</span>
                  <span className="px-2 py-1 bg-terra-500 text-white rounded text-[10px] font-mono shadow-[0_0_10px_rgba(204,120,92,0.4)]">ENTER</span>
                </div>
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
                  m.to === "/rx-suite" 
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
        {/* Intro Section */}
        <section ref={introRef as any} className={`py-24 ${introVis ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="text-[11px] uppercase tracking-widest text-terra-500 mb-3 font-medium">DESIGNED FOR VOLUME</div>
              <h2 className="font-display text-[40px] text-terra-950 mb-6 leading-tight">Built for the 500+ Rx/day reality.</h2>
              <p className="text-[16px] text-terra-600 mb-4 leading-relaxed">
                When you process hundreds of prescriptions a day, every mouse click is a tax on your time and focus. We built Rx Suite to function completely via intuitive keyboard shortcuts, eliminating the need to drag a cursor across the screen.
              </p>
              <p className="text-[16px] text-terra-600 leading-relaxed">
                By stripping away visual clutter and presenting data in a clean, hierarchical format, we drastically reduce the cognitive fatigue that leads to dispensing errors.
              </p>
            </div>
            
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-terra-50 border border-terra-100 p-8 rounded-xl flex flex-col justify-center items-center text-center">
                <div className="font-display text-[48px] text-terra-500 mb-2">40%</div>
                <div className="text-[13px] text-terra-700 font-medium">Fewer clicks per fill</div>
              </div>
              <div className="bg-terra-50 border border-terra-100 p-8 rounded-xl flex flex-col justify-center items-center text-center">
                <div className="font-display text-[48px] text-terra-500 mb-2">Zero</div>
                <div className="text-[13px] text-terra-700 font-medium">Pop-up window fatigue</div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section ref={featuresRef as any} className={`py-24 bg-terra-50 border-y border-terra-100 ${featuresVis ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide">
            <h3 className="text-center font-display text-[36px] text-terra-950 mb-16">Clinical & Operational Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-white border-t-4 border-terra-500 p-8 rounded-b-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-terra-100 text-terra-600 rounded-lg flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><path d="M6 8h.01"></path><path d="M10 8h.01"></path><path d="M14 8h.01"></path><path d="M18 8h.01"></path><path d="M6 12h.01"></path><path d="M10 12h.01"></path><path d="M14 12h.01"></path><path d="M18 12h.01"></path><path d="M8 16h8"></path></svg>
                </div>
                <div className="text-[24px] font-display text-terra-950 mb-3">Keyboard-First Architecture</div>
                <p className="text-[15px] text-terra-600">Power users can navigate patient profiles, process refills, and verify clinical checks without ever touching the mouse. Accelerate your workflow immensely.</p>
              </div>

              <div className="bg-white border-t-4 border-terra-500 p-8 rounded-b-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-terra-100 text-terra-600 rounded-lg flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M8 11h8"></path><path d="M12 7v8"></path></svg>
                </div>
                <div className="text-[24px] font-display text-terra-950 mb-3">Intelligent Clinical Checking</div>
                <p className="text-[15px] text-terra-600">Rx Suite uses an advanced rules engine to check for drug-drug interactions, duplicate therapies, and allergy conflicts in the background, only interrupting you when it matters.</p>
              </div>

              <div className="bg-white border-t-4 border-terra-500 p-8 rounded-b-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-terra-100 text-terra-600 rounded-lg flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <div className="text-[24px] font-display text-terra-950 mb-3">PrescribeIT & e-Rx Integration</div>
                <p className="text-[15px] text-terra-600">Natively receives electronic prescriptions directly into your filling queue. Eliminate transcription errors and manual fax handling entirely.</p>
              </div>

              <div className="bg-white border-t-4 border-terra-500 p-8 rounded-b-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-terra-100 text-terra-600 rounded-lg flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div className="text-[24px] font-display text-terra-950 mb-3">Smart Queue Management</div>
                <p className="text-[15px] text-terra-600">Workflows are separated logically (Intake, Filling, Verification). Technicians and pharmacists stay in their respective lanes, creating a smooth, assembly-line efficiency.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Workflow / Visual Section */}
        <section ref={workflowRef as any} className={`py-24 bg-white ${workflowVis ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide space-y-24">
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="w-full lg:w-1/2 order-2 lg:order-1 bg-terra-50 p-8 md:p-12 rounded-2xl border border-terra-100">
                {/* Abstract Workflow Graphic */}
                <div className="flex flex-col gap-4 relative before:absolute before:inset-y-6 before:left-[19px] before:w-0.5 before:bg-terra-200">
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-terra-200 border-4 border-terra-50 flex items-center justify-center text-terra-600 shadow-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg>
                    </div>
                    <div>
                      <div className="text-[14px] font-medium text-terra-950">Intake Queue</div>
                      <div className="text-[12px] text-terra-500">Auto-triage from e-Rx or Fax</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-terra-200 border-4 border-terra-50 flex items-center justify-center text-terra-600 shadow-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                    </div>
                    <div>
                      <div className="text-[14px] font-medium text-terra-950">Data Entry & Adjudication</div>
                      <div className="text-[12px] text-terra-500">Real-time third-party billing</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-terra-500 border-4 border-terra-50 flex items-center justify-center text-white shadow-md animate-pulse">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    </div>
                    <div>
                      <div className="text-[14px] font-medium text-terra-950">Pharmacist Verification</div>
                      <div className="text-[12px] text-terra-500">Clinical & Therapeutic check</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-white border-4 border-terra-50 flex items-center justify-center text-terra-300 shadow-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                    </div>
                    <div className="opacity-50">
                      <div className="text-[14px] font-medium text-terra-950">Ready for Pickup</div>
                      <div className="text-[12px] text-terra-500">Syncs to Rx Manager POS</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="text-[11px] uppercase tracking-widest text-terra-500 mb-3 font-medium">BOTTLE-NECK FREE</div>
                <h3 className="font-display text-[32px] text-terra-950 mb-6 leading-tight">A perfectly orchestrated assembly line.</h3>
                <p className="text-terra-600 text-[16px] mb-6 leading-relaxed">
                  Rx Suite divides the prescription lifecycle into distinct, highly focused stages. By separating data entry from clinical verification, your staff works in parallel rather than waiting on each other.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-terra-700">
                    <svg className="text-terra-500 shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Eliminate cross-talk and confusion at the bench
                  </li>
                  <li className="flex items-center gap-3 text-terra-700">
                    <svg className="text-terra-500 shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Prioritize waiting patients automatically
                  </li>
                  <li className="flex items-center gap-3 text-terra-700">
                    <svg className="text-terra-500 shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Catch billing issues before the label ever prints
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Benefits Bar */}
        <section className="py-12 bg-terra-950 text-white border-b border-terra-900">
          <div className="container-wide flex flex-wrap gap-8 justify-between">
            <div className="flex-1 min-w-[200px]">
              <div className="text-[18px] font-display mb-2 text-terra-300">Cloud-Native Backups</div>
              <div className="text-sm text-terra-400">No on-premise servers to maintain. Always backed up, securely.</div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="text-[18px] font-display mb-2 text-terra-300">Hardcopy Management</div>
              <div className="text-sm text-terra-400">Scan and attach hardcopies directly to the digital Rx file.</div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="text-[18px] font-display mb-2 text-terra-300">Batch Refilling</div>
              <div className="text-sm text-terra-400">Process nursing home or compliance packaging batches instantly.</div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="text-[18px] font-display mb-2 text-terra-300">Auto-Adjudication</div>
              <div className="text-sm text-terra-400">Direct connections to provincial and private third-party payers.</div>
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