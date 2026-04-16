import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TrustFeaturesRow from "../components/TrustFeaturesRow";
import ModuleCTA from "../components/ModuleCTA";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function RxManager() {
  useEffect(() => {
    document.title = "Rx Manager — The Pharmacy Operating System | OneRx";
  }, []);

  const { ref: oRef, isVisible: oVis } = useScrollAnimation();

  const modules = [
    { label: "Rx Intelligence", to: "/rx-intelligence" },
    { label: "Rx Manager", to: "/rx-manager" },
    { label: "Rx Suite", to: "/rx-suite" },
    { label: "Rx Incident", to: "/rx-incident" },
  ];

  return (
    <div className="page-fade">
      <Navigation />
      <header className="bg-terra-950 text-white pt-28 pb-16">
        <div className="container-wide flex flex-col lg:flex-row items-start gap-8">
          <div className="lg:w-1/2">
            <div className="text-sm text-terra-400 mb-3"><Link to="/">OneRx Hub</Link> / <span>Rx Manager</span></div>
            <div className="uppercase tracking-widest text-[10px] text-terra-500 mb-4">OPERATIONS</div>
            <h1 className="font-display text-[56px]">The pharmacy operating system. Finally, one place for everything.</h1>
            <p className="text-[18px] text-terra-300 mt-4">Rx Manager eliminates fragmented software and disconnected vendor portals — replacing manual spreadsheets and scattered logins with a single intelligent command center.</p>
            <div className="mt-6 flex gap-3"><a href="#contact" className="px-5 py-2 bg-terra-500 rounded text-white">Contact Us</a><Link to="/" className="px-5 py-2 border border-white rounded">See All Modules</Link></div>
          </div>
          <div className="lg:w-1/2 flex justify-end">
            <div className="bg-terra-800 p-4 rounded-lg max-w-md">
              <div className="text-xs text-terra-400">Rx Manager · Operations Overview</div>
              <div className="mt-2 space-y-2 text-white">
                <div className="flex justify-between"><span>Morning order review</span><span className="text-green-400">Complete</span></div>
                <div className="flex justify-between"><span>Formulary update — Metformin generics</span><span className="text-amber-400">In Progress</span></div>
                <div className="flex justify-between"><span>Vendor comparison — McKesson vs. Kohl</span><span className="text-red-400">Action Required</span></div>
              </div>
              <div className="mt-3 text-sm text-terra-400">Purchase Planning — • • •</div>
              <div className="mt-2 text-xs text-terra-400">12 tasks automated today</div>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-terra-800 py-3">
          <div className="container-wide flex items-center justify-center gap-3">
            {modules.map((m) => (
              <Link key={m.label} to={m.to} className={`px-4 py-1 rounded-full text-sm ${m.to === "/rx-manager" ? "bg-terra-500 text-white" : "text-terra-300"}`}>{m.label}</Link>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section ref={oRef as any} className={`py-16 ${oVis ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="font-display text-[32px]">From reactive dispensary to proactive health hub.</h2>
              <p className="text-terra-600 mt-4">Centralize procurement, scheduling, clinical documentation, and marketing automation. Rx Manager replaces a patchwork of tools with an all-in-one approach that scales with your business.</p>
              <p className="text-terra-600 mt-3">Automate routine tasks and surface the work that truly needs human attention — enabling your staff to focus on patient care.</p>
            </div>
            <div className="space-y-4">
              <div className="bg-terra-100 p-6 rounded"><div className="text-terra-500 font-display text-[28px]">6–8 systems replaced</div></div>
              <div className="bg-terra-100 p-6 rounded"><div className="text-terra-500 font-display text-[28px]">100% operational visibility</div></div>
              <div className="bg-terra-100 p-6 rounded"><div className="text-terra-500 font-display text-[28px]">0 manual spreadsheets needed</div></div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container-wide">
            <h3 className="font-display text-[28px]">Key Benefits</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="p-6 bg-terra-50 rounded">Total Operational Visibility — Monitor performance metrics, inventory costs, staff activity, and clinical workflows at a glance.</div>
              <div className="p-6 bg-terra-50 rounded">Reduced Administrative Burden — Automate routine tasks: price comparisons, appointment reminders, documentation workflows.</div>
              <div className="p-6 bg-terra-50 rounded">Smarter Purchasing & Growth — Maximize margins through intelligent buying tools while boosting revenue with integrated marketing.</div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-terra-50">
          <div className="container-wide">
            <h4 className="font-display text-[24px]">THE CONTROL CENTER</h4>
            <div className="space-y-6 mt-6">
              <div className="grid lg:grid-cols-2 gap-6 items-center bg-white p-6 rounded">
                <div>
                  <h5 className="font-display">Procurement Intelligence</h5>
                  <p className="text-terra-600">Formulary intelligence identifies opportunity buys and ensures cost-effective inventory ordering across trusted vendors and distributors.</p>
                </div>
                <div className="bg-terra-800 p-4 text-white rounded">Vendor comparison table mockup</div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div className="bg-terra-800 p-4 text-white rounded">Appointment calendar mockup</div>
                <div>
                  <h5 className="font-display">Patient Appointment Scheduling</h5>
                  <p className="text-terra-600">Centralize patient appointment scheduling — no third-party booking software required. Every appointment tied to the patient record.</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 items-center bg-white p-6 rounded">
                <div>
                  <h5 className="font-display">Clinical Documentation</h5>
                  <p className="text-terra-600">Manage clinical service documentation and automated workflows. Every interaction recorded, reportable, and audit-ready.</p>
                </div>
                <div className="bg-terra-800 p-4 text-white rounded">Documentation form mockup</div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div className="bg-terra-800 p-4 text-white rounded">Campaign performance card mockup</div>
                <div>
                  <h5 className="font-display">Marketing Automation</h5>
                  <p className="text-terra-600">Automated targeted marketing campaigns drive service uptake and front-store performance. Promote high-value clinical services to the right patients automatically.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-terra-950 text-white text-center">
          <div className="container-wide max-w-3xl mx-auto">
            <p className="font-display italic text-[24px]">"Every financial, operational, and clinical decision is supported by live data and executed from a single unified interface — replacing guesswork with actionable intelligence."</p>
          </div>
        </section>

        <TrustFeaturesRow />
        <ModuleCTA />
      </main>

      <Footer />
    </div>
  );
}
