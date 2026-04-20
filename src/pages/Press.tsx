import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ModuleCTA from "../components/ModuleCTA";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Press() {
  useEffect(() => {
    document.title = "Press & Newsroom | OneRx";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Official news, press releases, and media assets for the OneRx digital pharmacy platform.');
  }, []);

  const { ref: releasesRef, isVisible: releasesVis } = useScrollAnimation();
  const { ref: assetsRef, isVisible: assetsVis } = useScrollAnimation();

  const pressReleases = [
    {
      date: "April 10, 2026",
      title: "OneRx Announces Nationwide Rollout of Rx Intelligence Module",
      publication: "Press Release",
      excerpt: "The new analytics engine automatically reconciles ODB claims and identifies margin leakages for high-volume Canadian pharmacies.",
      link: "#pr-rx-intelligence"
    },
    {
      date: "February 22, 2026",
      title: "OneRx Secures Strategic Funding to Modernize Pharmacy Infrastructure",
      publication: "TechCrunch",
      excerpt: "With new backing, the Toronto-based healthcare startup aims to replace fragmented legacy pharmacy systems with a unified, cloud-native OS.",
      link: "#pr-funding"
    },
    {
      date: "November 05, 2025",
      title: "How OneRx is Solving the Pharmacy Technician Shortage with Automation",
      publication: "Healthcare IT News",
      excerpt: "By reducing manual data entry and automating clinical checks, OneRx allows dispensary staff to focus on direct patient care.",
      link: "#pr-automation"
    },
    {
      date: "September 14, 2025",
      title: "OneRx Partners with Leading Canadian Distributors for Real-Time Inventory",
      publication: "Press Release",
      excerpt: "Direct API integrations allow pharmacies to simulate purchasing margins and automate restocking without leaving the OneRx dashboard.",
      link: "#pr-distributor-partnership"
    }
  ];

  const brandAssets = [
    {
      title: "Primary Logos",
      description: "Full-color, monochrome, and reversed variants in SVG and PNG formats.",
      size: "12.4 MB"
    },
    {
      title: "Brand Guidelines",
      description: "Official typography, color palettes, and usage rules for the OneRx brand.",
      size: "4.1 MB"
    },
    {
      title: "Product Screenshots",
      description: "High-resolution interface captures of Rx Suite, Rx Manager, and Rx Intelligence.",
      size: "28.5 MB"
    },
    {
      title: "Executive Headshots",
      description: "High-resolution portrait photography of the OneRx leadership team.",
      size: "45.2 MB"
    }
  ];

  return (
    <div className="page-fade bg-white">
      <Navigation />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-terra-950 to-terra-800 text-white pt-32 pb-20">
        <div className="container-wide flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="uppercase tracking-widest text-[11px] text-terra-500 mb-4">THE NEWSROOM</div>
            <h1 className="font-display text-[48px] md:text-[56px] leading-tight mb-4">Shaping the narrative of modern pharmacy.</h1>
            <p className="text-[18px] text-terra-300">
              Official announcements, media coverage, and brand assets for journalists and partners.
            </p>
          </div>
          <div className="shrink-0 pb-2">
            <a href="#download-press-kit" className="inline-flex items-center gap-2 px-6 py-3 bg-terra-500 rounded text-white font-medium hover:bg-terra-400 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Full Media Kit
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Press Releases Timeline */}
        <section ref={releasesRef as any} className={`py-20 ${releasesVis ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide max-w-5xl">
            <h2 className="font-display text-[32px] text-terra-950 mb-12 border-b border-terra-200 pb-4">Latest News & Coverage</h2>
            
            <div className="space-y-10">
              {pressReleases.map((pr, idx) => (
                <article key={idx} className="group flex flex-col md:flex-row gap-4 md:gap-12 items-start">
                  <div className="w-full md:w-1/4 shrink-0 mt-1">
                    <div className="text-[14px] text-terra-500 font-medium mb-1">{pr.date}</div>
                    <div className="text-[11px] uppercase tracking-widest text-terra-400 bg-terra-50 inline-block px-2 py-1 rounded">{pr.publication}</div>
                  </div>
                  <div className="w-full md:w-3/4">
                    <a href={pr.link} className="block">
                      <h3 className="font-display text-[24px] text-terra-950 group-hover:text-terra-600 transition-colors leading-snug mb-3">
                        {pr.title}
                      </h3>
                      <p className="text-[16px] text-terra-600 mb-4">
                        {pr.excerpt}
                      </p>
                      <span className="text-[14px] text-terra-500 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read full article <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <button className="px-6 py-2 border border-terra-300 rounded text-terra-700 hover:bg-terra-50 transition-colors">
                Load Older Releases
              </button>
            </div>
          </div>
        </section>

        {/* Media Assets Grid */}
        <section ref={assetsRef as any} className={`py-24 bg-terra-50 ${assetsVis ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10">
              <div>
                <h2 className="font-display text-[32px] text-terra-950">Brand Assets</h2>
                <p className="text-terra-600 mt-2">Download official logos, screenshots, and guidelines for publication.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {brandAssets.map((asset, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-terra-200 flex flex-col h-full group hover:border-terra-400 transition-colors">
                  <div className="w-12 h-12 bg-terra-100 rounded-lg flex items-center justify-center text-terra-600 mb-5 group-hover:bg-terra-500 group-hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  </div>
                  <h3 className="font-display text-[18px] text-terra-950 mb-2">{asset.title}</h3>
                  <p className="text-[13px] text-terra-600 mb-6 flex-grow">{asset.description}</p>
                  <div className="flex items-center justify-between border-t border-terra-100 pt-4 mt-auto">
                    <span className="text-[11px] text-terra-400 font-mono">{asset.size} / ZIP</span>
                    <a href="#download" className="text-[13px] font-medium text-terra-600 hover:text-terra-800">Download</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Contact Block */}
        <section className="py-20 bg-terra-900 text-white text-center">
          <div className="container-wide max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-terra-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CC785C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <h2 className="font-display text-[32px] mb-4">Media Inquiries</h2>
            <p className="text-terra-300 text-[16px] mb-8">
              For press inquiries, interview requests with our leadership team, or further information regarding OneRx products, please contact our communications team.
            </p>
            <a href="mailto:press@myonerx.ca" className="inline-block px-8 py-3 bg-white text-terra-950 rounded font-medium hover:bg-terra-100 transition-colors">
              press@myonerx.ca
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}