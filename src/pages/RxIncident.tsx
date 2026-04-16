import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TrustFeaturesRow from "../components/TrustFeaturesRow";
import ModuleCTA from "../components/ModuleCTA";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function RxIncident() {
  useEffect(() => { document.title = "Rx Incident — Anonymous CQI+ Reporting | OneRx"; }, []);
  const { ref, isVisible } = useScrollAnimation();
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
        <div className="container-wide lg:flex items-start gap-8">
          <div className="lg:w-1/2">
            <div className="text-sm text-terra-400 mb-3"><Link to="/">OneRx Hub</Link> / <span>Rx Incident</span></div>
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="bg-terra-500 text-white px-2 py-1 text-[11px] rounded">NAPRA-Aligned</span>
              <div className="uppercase tracking-widest text-[10px] text-terra-500">COMPLIANCE</div>
            </div>
            <h1 className="font-display text-[56px]">Anonymous incident reporting. Zero fear. Full compliance.</h1>
            <p className="text-[18px] text-terra-300 mt-4">Rx Incident delivers NAPRA-aligned CQI+ reporting — anonymous, automated, and Canada-hosted. Your team reports without fear. Your practice improves without bureaucracy.</p>
            <div className="mt-6 flex gap-3"><a href="#contact" className="px-5 py-2 bg-terra-500 rounded text-white">Contact Us</a><Link to="/" className="px-5 py-2 border border-white rounded">See All Modules</Link></div>
          </div>
          <div className="lg:w-1/2 flex justify-end mt-6 lg:mt-0">
            <div className="bg-terra-800 p-4 rounded-lg max-w-md border-l-4 border-red-700">
              <div className="text-xs text-terra-400">New Incident Report · Anonymous · CQI+</div>
              <div className="mt-3 text-terra-200 text-sm">Incident type: Near-miss — Wrong drug selected</div>
              <div className="text-terra-200 text-sm">Date/Time: April 14, 2026 · 14:32</div>
              <div className="text-terra-200 text-sm">Reporter: Anonymous</div>
              <div className="text-terra-200 text-sm">Status: Submitted to NIDR</div>
              <div className="mt-3 text-[12px] text-[#5B21B6]">AI Analysis: Root cause identified — Lookalike packaging</div>
              <div className="mt-3 text-green-400">ACP-aligned workflow complete ✓</div>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-terra-800 py-3">
          <div className="container-wide flex items-center justify-center gap-3">
            {modules.map((m) => (
              <Link key={m.label} to={m.to} className={`px-4 py-1 rounded-full text-sm ${m.to === "/rx-incident" ? "bg-terra-500 text-white" : "text-terra-300"}`}>{m.label}</Link>
            ))}
          </div>
        </div>
      </header>

      <main>
        <div className="w-full border-t border-terra-800 bg-[rgba(153,27,27,0.06)] py-4 text-center">
          <div className="container-wide text-terra-950 text-[15px]">Anonymous reporting protects your team. Data-driven analysis protects your patients. Both happen automatically.</div>
        </div>

        <section ref={ref as any} className={`py-16 bg-terra-50 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide grid lg:grid-cols-2 gap-8">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-terra-500">CQI+ INCIDENT INTELLIGENCE</div>
              <h2 className="font-display text-[32px] mt-3">Report without fear. Improve without blame.</h2>
              <p className="text-terra-600 mt-3">Rx Incident creates a psychologically safe environment for near-miss and incident reporting — without fear of punitive consequences. When your team feels safe to report, your practice gets better data to improve on.</p>
              <p className="text-terra-600 mt-3">Automated NIDR submissions with ACP-aligned CQI+ workflows mean your team spends seconds reporting — not an hour on paperwork. AI analytics then identify trends and root causes before they become patterns.</p>
            </div>
            <div className="p-6 bg-white rounded">
              <ol className="space-y-4 text-terra-700">
                <li><strong>1.</strong> Staff reports incident anonymously</li>
                <li><strong>2.</strong> System auto-submits to NIDR</li>
                <li><strong>3.</strong> AI analyzes for trends</li>
                <li><strong>4.</strong> Actionable insights surface to management</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-terra-50 rounded">Anonymous Reporting — Anonymous incident and near-miss reporting without fear of professional consequences.</div>
              <div className="p-6 bg-terra-50 rounded">Automated NIDR Submissions — ACP-aligned CQI+ workflows generate NIDR submissions automatically.</div>
              <div className="p-6 bg-terra-50 rounded">AI-Powered Analytics — AI identifies trends and root causes across your incident data.</div>
              <div className="p-6 bg-terra-50 rounded">Secure Canadian Hosting — All incident data is Canada-hosted with AES-256 encryption.</div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-terra-800 text-white">
          <div className="container-wide grid md:grid-cols-3 gap-6">
            <div>
              <h5 className="font-display">Regulatory Alignment</h5>
              <ul className="mt-2 space-y-2 text-terra-100"> <li>NAPRA</li><li>ACP</li><li>NIDR</li><li>CQI+</li></ul>
            </div>
            <div>
              <h5 className="font-display">Data Security</h5>
              <ul className="mt-2 space-y-2 text-terra-100"><li>AES-256 Encryption</li><li>Canada-hosted infrastructure</li><li>Role-based access</li></ul>
            </div>
            <div>
              <h5 className="font-display">Reporting Capabilities</h5>
              <ul className="mt-2 space-y-2 text-terra-100"><li>Anonymous near-miss reporting</li><li>Serious adverse event tracking</li><li>AI root-cause analysis</li></ul>
            </div>
          </div>
        </section>

        <section className="py-20 bg-terra-950 text-white text-center">
          <div className="container-wide max-w-3xl mx-auto">
            <p className="font-display italic text-[28px]">"The check signals resolution, not crisis. A defensible record created."</p>
            <div className="text-terra-400 mt-3">— OneRx Brand Kit, Rx Incident</div>
            <p className="text-terra-300 mt-4">Every report submitted through Rx Incident is a step toward a safer pharmacy.</p>
          </div>
        </section>

        <TrustFeaturesRow />
        <ModuleCTA />
      </main>

      <Footer />
    </div>
  );
}
