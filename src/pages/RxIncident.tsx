import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TrustFeaturesRow from "../components/TrustFeaturesRow";
import ModuleCTA from "../components/ModuleCTA";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function RxIncident() {
  useEffect(() => {
    document.title = "Rx Incident — Quality Improvement & Safety | OneRx";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Cultivate a blame-free safety culture. Seamlessly log near misses, perform root cause analysis, and ensure NAPRA CQI compliance.');
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
              <span className="text-white">Rx Incident</span>
            </div>
            <div className="uppercase tracking-widest text-[11px] text-terra-500 mb-4 font-medium">CONTINUOUS QUALITY IMPROVEMENT</div>
            <h1 className="font-display text-[48px] md:text-[56px] leading-tight">Turn near misses into systemic safety.</h1>
            <p className="text-[18px] text-terra-300 mt-6 max-w-lg">
              Cultivate a blame-free culture of continuous learning. Rx Incident makes it effortless to log medication errors, uncover root causes, and maintain flawless regulatory compliance without disrupting your workflow.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 bg-terra-500 rounded text-white font-medium hover:bg-terra-400 transition-colors">Contact Sales</a>
              <Link to="/pricing" className="px-6 py-3 border border-white/30 rounded text-white hover:bg-white/10 transition-colors">View Pricing</Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            {/* Floating Incident Report UI Widget */}
            <div className="bg-terra-900 border border-terra-700 rounded-xl w-full max-w-md animate-[float_4s_ease-in-out_infinite] shadow-2xl relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
              
              {/* Header */}
              <div className="p-5 border-b border-terra-800 flex justify-between items-center bg-terra-950/50">
                <div>
                  <div className="text-[14px] text-white font-medium">Incident #CQI-4092</div>
                  <div className="text-[11px] text-terra-400 mt-1">Logged: 10 mins ago</div>
                </div>
                <div className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] uppercase tracking-widest px-3 py-1 rounded">Near Miss</div>
              </div>
              
              {/* Report Body */}
              <div className="p-6 flex-grow space-y-5">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-terra-500 mb-1">Event Type</div>
                  <div className="text-white text-[15px] font-medium">Incorrect Strength Selected</div>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-widest text-terra-500 mb-1">Stage of Discovery</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-terra-500 rounded-full"></div>
                    <span className="text-terra-200 text-[14px]">Pharmacist Clinical Verification</span>
                  </div>
                </div>

                <div className="p-4 bg-terra-800/40 border border-terra-700/50 rounded-lg">
                  <div className="text-[11px] uppercase tracking-widest text-terra-400 mb-2">Root Cause Analysis (5 Whys)</div>
                  <div className="text-[13px] text-terra-300 space-y-2">
                    <p><span className="text-terra-500 font-medium">Why?</span> Look-alike/sound-alike drop-down selection.</p>
                    <p><span className="text-terra-500 font-medium">Why?</span> Amlodipine 5mg and 10mg appear adjacent in quick-search.</p>
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="p-4 border-t border-terra-800 bg-terra-950/80 flex justify-between items-center">
                <div className="flex items-center gap-2 text-[12px] text-terra-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  Anonymous Submission
                </div>
                <button className="px-4 py-1.5 bg-terra-800 hover:bg-terra-700 text-white rounded text-[11px] transition-colors font-medium">
                  Begin Review
                </button>
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
                  m.to === "/rx-incident" 
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
              <div className="text-[11px] uppercase tracking-widest text-terra-500 mb-3 font-medium">PSYCHOLOGICAL SAFETY</div>
              <h2 className="font-display text-[40px] text-terra-950 mb-6 leading-tight">Drop the spreadsheets. Embrace the culture.</h2>
              <p className="text-[16px] text-terra-600 mb-4 leading-relaxed">
                When error reporting is tedious or punitive, staff stop reporting near misses. This deprives your pharmacy of vital data needed to prevent actual patient harm.
              </p>
              <p className="text-[16px] text-terra-600 leading-relaxed">
                Rx Incident is deeply integrated into the dispensing workflow. By allowing anonymous, one-click reporting directly from the verification screen, we remove the friction and fear from continuous quality improvement.
              </p>
            </div>
            
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-terra-50 border border-terra-100 p-8 rounded-xl flex flex-col justify-center items-center text-center">
                <div className="font-display text-[48px] text-terra-500 mb-2">3x</div>
                <div className="text-[13px] text-terra-700 font-medium">Increase in near-miss reporting</div>
              </div>
              <div className="bg-terra-50 border border-terra-100 p-8 rounded-xl flex flex-col justify-center items-center text-center">
                <div className="font-display text-[48px] text-terra-500 mb-2">100%</div>
                <div className="text-[13px] text-terra-700 font-medium">NAPRA / ISMP Compliant</div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section ref={featuresRef as any} className={`py-24 bg-terra-50 border-y border-terra-100 ${featuresVis ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide">
            <h3 className="text-center font-display text-[36px] text-terra-950 mb-16">Systemic Safety Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-white border-t-4 border-terra-500 p-8 rounded-b-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-terra-100 text-terra-600 rounded-lg flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle><line x1="3" y1="3" x2="21" y2="21"></line></svg>
                </div>
                <div className="text-[24px] font-display text-terra-950 mb-3">Anonymous Quick-Log</div>
                <p className="text-[15px] text-terra-600">Staff can flag a near miss or workflow issue with a single click, completely anonymously. The system auto-captures the context (drug, stage, time) without assigning blame.</p>
              </div>

              <div className="bg-white border-t-4 border-terra-500 p-8 rounded-b-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-terra-100 text-terra-600 rounded-lg flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                </div>
                <div className="text-[24px] font-display text-terra-950 mb-3">Guided Root Cause Analysis</div>
                <p className="text-[15px] text-terra-600">Move beyond "human error." Our built-in wizard guides pharmacy managers through the "5 Whys" methodology to identify environmental, systemic, or software factors.</p>
              </div>

              <div className="bg-white border-t-4 border-terra-500 p-8 rounded-b-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-terra-100 text-terra-600 rounded-lg flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M8 13h2"></path><path d="M8 17h2"></path><path d="M14 13h2"></path><path d="M14 17h2"></path></svg>
                </div>
                <div className="text-[24px] font-display text-terra-950 mb-3">Automated Audit Reporting</div>
                <p className="text-[15px] text-terra-600">When your provincial college requests your annual CQI review, generate a comprehensive, redacted, and formatted PDF report in seconds.</p>
              </div>

              <div className="bg-white border-t-4 border-terra-500 p-8 rounded-b-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-terra-100 text-terra-600 rounded-lg flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>
                </div>
                <div className="text-[24px] font-display text-terra-950 mb-3">Network-Wide Alerts</div>
                <p className="text-[15px] text-terra-600">If a look-alike/sound-alike error occurs at one location, instantly broadcast a safety alert to the dispensing screens of all other pharmacies in your enterprise network.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Workflow / Visual Section */}
        <section ref={workflowRef as any} className={`py-24 bg-white ${workflowVis ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide space-y-24">
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="bg-terra-50 p-8 rounded-2xl border border-terra-100">
                  <h4 className="font-display text-[20px] text-terra-950 mb-6 text-center">The CQI Lifecycle</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded border border-terra-200 flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-terra-100 text-terra-600 flex items-center justify-center font-bold">1</div>
                      <div>
                        <div className="text-[14px] font-medium text-terra-950">Identification</div>
                        <div className="text-[12px] text-terra-500">Error caught during verification.</div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded border border-terra-200 flex items-center gap-4 shadow-[0_0_15px_rgba(204,120,92,0.15)] border-l-4 border-l-terra-500 scale-105 transition-transform">
                      <div className="w-8 h-8 rounded-full bg-terra-500 text-white flex items-center justify-center font-bold">2</div>
                      <div>
                        <div className="text-[14px] font-medium text-terra-950">Frictionless Logging</div>
                        <div className="text-[12px] text-terra-500">Data auto-captured in Rx Suite.</div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded border border-terra-200 flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-terra-100 text-terra-600 flex items-center justify-center font-bold">3</div>
                      <div>
                        <div className="text-[14px] font-medium text-terra-950">Investigation</div>
                        <div className="text-[12px] text-terra-500">Manager completes Root Cause Analysis.</div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded border border-terra-200 flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-terra-100 text-terra-600 flex items-center justify-center font-bold">4</div>
                      <div>
                        <div className="text-[14px] font-medium text-terra-950">Systemic Resolution</div>
                        <div className="text-[12px] text-terra-500">Workflow updated. Network alerted.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="text-[11px] uppercase tracking-widest text-terra-500 mb-3 font-medium">INTEGRATED WORKFLOW</div>
                <h3 className="font-display text-[32px] text-terra-950 mb-6 leading-tight">Don't break focus to be compliant.</h3>
                <p className="text-terra-600 text-[16px] mb-6 leading-relaxed">
                  In legacy systems, logging an incident means opening a separate portal, finding the patient, re-typing the drug information, and disrupting the queue. 
                </p>
                <p className="text-terra-600 text-[16px] mb-6 leading-relaxed">
                  Because Rx Incident is a native module of the OneRx ecosystem, a pharmacist can flag a near-miss with one keystroke during verification. The system captures the context instantly, allowing the pharmacist to resume checking without missing a beat.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Benefits Bar */}
        <section className="py-12 bg-terra-950 text-white border-b border-terra-900">
          <div className="container-wide flex flex-wrap gap-8 justify-between">
            <div className="flex-1 min-w-[200px]">
              <div className="text-[18px] font-display mb-2 text-terra-300">Staff Empowerment</div>
              <div className="text-sm text-terra-400">Shift from "who made the mistake" to "why did the system fail."</div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="text-[18px] font-display mb-2 text-terra-300">Data Analytics</div>
              <div className="text-sm text-terra-400">Visualize error trends by time of day, drug class, or workflow stage.</div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="text-[18px] font-display mb-2 text-terra-300">Patient Communication</div>
              <div className="text-sm text-terra-400">Built-in templates for transparent, empathetic patient disclosures.</div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="text-[18px] font-display mb-2 text-terra-300">Action Plan Tracking</div>
              <div className="text-sm text-terra-400">Assign follow-up tasks to staff and track completion automatically.</div>
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