import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TrustFeaturesRow from "../components/TrustFeaturesRow";
import ModuleCTA from "../components/ModuleCTA";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function RxSuite() {
  useEffect(() => { document.title = "Rx Suite — Smart IT & Tools for Independent Pharmacies | OneRx"; }, []);
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
      <header className="bg-terra-800 text-white pt-28 pb-16">
        <div className="container-wide lg:flex items-start gap-8">
          <div className="lg:w-1/2">
            <div className="text-sm text-terra-400 mb-3"><Link to="/">OneRx Hub</Link> / <span>Rx Suite</span></div>
            <div className="uppercase tracking-widest text-[10px] text-terra-500 mb-4">IT &amp; TOOLS</div>
            <h1 className="font-display text-[56px]">Your pharmacy's IT department. Without the IT department.</h1>
            <p className="text-[18px] text-terra-300 mt-4">Rx Suite delivers smart technology solutions — from cloud security and VoIP to AI chatbots and SEO — so your pharmacy runs like a modern business, not a legacy operation.</p>
            <div className="mt-6 flex gap-3"><a href="#contact" className="px-5 py-2 bg-terra-500 rounded text-white">Contact Us</a><Link to="/" className="px-5 py-2 border border-white rounded">See All Modules</Link></div>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <div className="grid grid-cols-4 gap-3 max-w-md ml-auto">
              {['Cloud','Cyber','SEO','Automate','VoIP','eFax','Forms','Chatbot'].map((t)=> (
                <div key={t} className="bg-terra-800 p-4 rounded text-center text-terra-300">{t}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 bg-terra-800 py-3">
          <div className="container-wide flex items-center justify-center gap-3">
            {modules.map((m) => (
              <Link key={m.label} to={m.to} className={`px-4 py-1 rounded-full text-sm ${m.to === "/rx-suite" ? "bg-terra-500 text-white" : "text-terra-300"}`}>{m.label}</Link>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section ref={ref as any} className={`py-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide max-w-3xl mx-auto text-center">
            <h2 className="font-display text-[28px]">Eight tools. One subscription. Zero IT headaches.</h2>
            <p className="text-terra-600 mt-4">Rx Suite protects your pharmacy's data with secure cloud backups and advanced threat protection. Automated tools boost productivity and streamline operations. Enhance your online presence with expert SEO and web design.</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container-wide">
            <h3 className="text-center font-display text-[36px] text-terra-950 mb-8">Everything Included in Rx Suite</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-terra-50 p-5 rounded">Secure Cloud Backups — Your pharmacy's vital data backed up automatically, encrypted, and recoverable.</div>
              <div className="bg-terra-50 p-5 rounded">Advanced Threat Protection — Proactive cybersecurity and staff training.</div>
              <div className="bg-terra-50 p-5 rounded">SEO & Web Presence — Boost visibility with expert SEO and web design.</div>
              <div className="bg-terra-50 p-5 rounded">Operations Automation — Automate daily operations and improve staff productivity.</div>
              <div className="bg-terra-50 p-5 rounded">Pharmacy VoIP — Secure, reliable, scalable communication.</div>
              <div className="bg-terra-50 p-5 rounded">Secure eFax — Send and receive faxes digitally and compliantly.</div>
              <div className="bg-terra-50 p-5 rounded">Digital Forms — Mobile-friendly digital forms for faster documentation.</div>
              <div className="bg-terra-50 p-5 rounded">AI Chatbot — An AI-powered chatbot answers patient questions instantly.</div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-terra-800 text-white">
          <div className="container-wide grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>Smart tech for smarter shelf decisions.</div>
            <div>Integrated IT that optimizes every operation.</div>
            <div>Digital tools that enhance every patient interaction.</div>
            <div>Data-driven insights built into every feature.</div>
          </div>
        </section>

        <section className="py-16 bg-terra-50">
          <div className="container-wide max-w-3xl mx-auto bg-white p-6 rounded">
            <h4 className="font-display">Canada-hosted. Encrypted. AWS-grade security.</h4>
            <p className="text-terra-600 mt-3">Your pharmacy data never leaves Canadian infrastructure. AES-256 encryption at rest and in transit. GDPR-compliant architecture with role-based access controls.</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-terra-950 text-white p-3 rounded">AES-256 Encryption</div>
              <div className="bg-terra-950 text-white p-3 rounded">AWS Canada Region</div>
              <div className="bg-terra-950 text-white p-3 rounded">GDPR Compliant</div>
              <div className="bg-terra-950 text-white p-3 rounded">Role-Based Access</div>
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
