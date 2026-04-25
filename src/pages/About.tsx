import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TrustFeaturesRow from "../components/TrustFeaturesRow";
import ModuleCTA from "../components/ModuleCTA";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function About() {
  useEffect(() => {
    document.title = "About Us | OneRx";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'We are rebuilding pharmacy infrastructure from the ground up. Learn about the OneRx mission and team.');
  }, []);

  const { ref: storyRef, isVisible: storyVis } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVis } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVis } = useScrollAnimation();
  const { ref: investorsRef, isVisible: investorsVis } = useScrollAnimation();

  const values = [
    {
      title: "Systemic Elegance",
      description: "Healthcare software is notoriously clunky. We believe that stripping away visual and operational clutter reduces cognitive load, leading to fewer dispensing errors and happier staff."
    },
    {
      title: "Uncompromising Accuracy",
      description: "In our industry, data integrity isn't a feature; it's a mandate. Our architecture is built on absolute precision, ensuring every claim, inventory count, and clinical check is flawless."
    },
    {
      title: "Operator-First Design",
      description: "We don't build features in a vacuum. Every module in the OneRx ecosystem is stress-tested against the realities of a high-volume, 500+ Rx/day dispensary workflow."
    }
  ];

  const leadership = [
    {
      name: "Sarah Jenkins",
      role: "Chief Executive Officer",
      background: "Former VP of Operations at HealthTech Solutions.",
      initials: "SJ"
    },
    {
      name: "Dr. Marcus Chen, PharmD",
      role: "Chief Pharmacy Officer",
      background: "15+ years managing high-volume enterprise dispensaries.",
      initials: "MC"
    },
    {
      name: "Elena Rostova",
      role: "Head of Product & Design",
      background: "Led design systems at top-tier fintech infrastructure firms.",
      initials: "ER"
    },
    {
      name: "David Alarie",
      role: "Chief Technology Officer",
      background: "Architected distributed cloud systems for global logistics.",
      initials: "DA"
    }
  ];

  const stats = [
    { value: "$2.4B+", label: "Claims Processed Annually" },
    { value: "450+", label: "Pharmacies Powered" },
    { value: "99.99%", label: "Platform Uptime" },
    { value: "0 ms", label: "Tolerance for Inefficiency" }
  ];

  return (
    <div className="page-fade bg-white">
      <Navigation />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-terra-950 to-terra-800 text-white pt-32 pb-24 relative overflow-hidden">
        {/* Subtle architectural lines in background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container-wide relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="uppercase tracking-widest text-[11px] text-terra-400 mb-6 font-medium">OUR STORY</div>
          <h1 className="font-display text-[52px] md:text-[64px] leading-tight mb-6">
            Pharmacy operations,<br />fundamentally reimagined.
          </h1>
          <p className="text-[18px] text-terra-300 max-w-2xl">
            We are a collective of pharmacists, engineers, and designers who refused to accept that legacy software was the best our industry could do.
          </p>
        </div>
      </header>

      <main>
        {/* The Problem / Solution Narrative */}
        <section ref={storyRef as any} className={`py-24 ${storyVis ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="font-display text-[36px] text-terra-950 mb-6">The infrastructure was broken. So we built our own.</h2>
              <div className="space-y-4 text-[16px] text-terra-600">
                <p>
                  For decades, Canadian pharmacies have been forced to run their businesses on fragmented, archaic systems. Dispensing software didn't talk to the point-of-sale. Analytics required exporting raw data to manual spreadsheets. Reconciliation was a guessing game.
                </p>
                <p>
                  This fragmentation led to margin compression, staff burnout, and ultimately, less time spent on patient care.
                </p>
                <p className="font-medium text-terra-900 border-l-2 border-terra-500 pl-4 py-1 mt-6">
                  OneRx was founded on a singular premise: pharmacy software should be a strategic asset, not an operational bottleneck.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              {/* Abstract minimalist graphic representing unified systems */}
              <div className="relative w-full max-w-md aspect-square bg-terra-50 rounded-full flex items-center justify-center border border-terra-100 p-8">
                <div className="absolute w-[80%] h-[80%] border border-terra-200 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute w-[60%] h-[60%] border border-terra-300 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                <div className="w-24 h-24 bg-terra-950 rounded-full flex items-center justify-center shadow-2xl relative z-10">
                  <span className="font-display text-white text-xl">OneRx</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-terra-900 text-white border-y border-terra-800">
          <div className="container-wide">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-terra-800/50">
              {stats.map((stat, idx) => (
                <div key={idx} className={`flex flex-col items-center text-center ${idx === 0 ? '' : 'pl-8'}`}>
                  <div className="font-display text-[40px] md:text-[48px] text-terra-300 mb-1">{stat.value}</div>
                  <div className="text-[13px] uppercase tracking-widest text-terra-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Philosophy */}
        <section ref={valuesRef as any} className={`py-24 bg-terra-50 ${valuesVis ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="font-display text-[40px] text-terra-950">Our Philosophy</h2>
              <p className="text-terra-600 mt-3 max-w-2xl mx-auto">The guiding principles that dictate every line of code we write and every pixel we design.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="bg-white p-8 md:p-10 rounded-xl border border-terra-200 hover:border-terra-400 transition-colors duration-500 group">
                  <div className="text-[40px] font-display text-terra-200 mb-4 group-hover:text-terra-500 transition-colors duration-500">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display text-[24px] text-terra-950 mb-4">{value.title}</h3>
                  <p className="text-[15px] text-terra-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
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