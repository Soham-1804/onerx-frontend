import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Press() {
  useEffect(() => {
    document.title = "Press & Newsroom | OneRx";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Official news, press releases, and media assets for the OneRx digital pharmacy platform.');
  }, []);

  const { ref: releasesRef, isVisible: releasesVis } = useScrollAnimation();

  const pressReleases = [
    {
      date: "April 10, 2026",
      title: "OneRx Announces Nationwide Rollout of Rx Intelligence Module",
      publication: "Press Release",
      excerpt: "The new analytics engine automatically reconciles ODB claims and identifies margin leakages for high-volume Canadian pharmacies.",
      slug: "rx-intelligence-nationwide-rollout"
    },
    {
      date: "February 22, 2026",
      title: "OneRx Secures Strategic Funding to Modernize Pharmacy Infrastructure",
      publication: "TechCrunch",
      excerpt: "With new backing, the Toronto-based healthcare startup aims to replace fragmented legacy pharmacy systems with a unified, cloud-native OS.",
      slug: "strategic-funding-modernize-infrastructure"
    },
    {
      date: "November 05, 2025",
      title: "How OneRx is Solving the Pharmacy Technician Shortage with Automation",
      publication: "Healthcare IT News",
      excerpt: "By reducing manual data entry and automating clinical checks, OneRx allows dispensary staff to focus on direct patient care.",
      slug: "solving-technician-shortage-automation"
    },
    {
      date: "September 14, 2025",
      title: "OneRx Partners with Leading Canadian Distributors for Real-Time Inventory",
      publication: "Press Release",
      excerpt: "Direct API integrations allow pharmacies to simulate purchasing margins and automate restocking without leaving the OneRx dashboard.",
      slug: "distributor-partnerships-real-time-inventory"
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
                    {/* Changed from <a> to <Link> for React Router dynamic routing */}
                    <Link to={`/press/${pr.slug}`} className="block">
                      <h3 className="font-display text-[24px] text-terra-950 group-hover:text-terra-600 transition-colors leading-snug mb-3">
                        {pr.title}
                      </h3>
                      <p className="text-[16px] text-terra-600 mb-4">
                        {pr.excerpt}
                      </p>
                      <span className="text-[14px] text-terra-500 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read full article <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              
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
              admin@myonerx.ca
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}