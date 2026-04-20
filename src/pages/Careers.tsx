import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TrustFeaturesRow from "../components/TrustFeaturesRow";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Careers() {
  useEffect(() => {
    document.title = "Careers | Join the OneRx Team";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Build the future of digital pharmacy. Explore open roles at OneRx.');
  }, []);

  const { ref: cultureRef, isVisible: cultureVis } = useScrollAnimation();
  const { ref: rolesRef, isVisible: rolesVis } = useScrollAnimation();
  const { ref: benefitsRef, isVisible: benefitsVis } = useScrollAnimation();

  const openRoles = [
    {
      department: "Engineering",
      title: "Senior Frontend Developer",
      location: "Remote / Hybrid",
      type: "Full-time",
      link: "#apply-frontend"
    },
    {
      department: "Design",
      title: "Lead Product Designer",
      location: "Remote / Hybrid",
      type: "Full-time",
      link: "#apply-design"
    },
    {
      department: "Customer Success",
      title: "Pharmacy Implementation Specialist",
      location: "Toronto, ON",
      type: "Full-time",
      link: "#apply-success"
    },
    {
      department: "Engineering",
      title: "Backend Data Engineer",
      location: "Remote",
      type: "Full-time",
      link: "#apply-backend"
    }
  ];

  return (
    <div className="page-fade">
      <Navigation />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-terra-950 to-terra-800 text-white pt-28 pb-16">
        <div className="container-wide flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-3/5">
            <div className="uppercase tracking-widest text-[10px] text-terra-500 mb-4">JOIN ONERX</div>
            <h1 className="font-display text-[56px] leading-tight">Crafting the future of digital pharmacy.</h1>
            <p className="text-[18px] text-terra-300 mt-4 max-w-2xl">
              We are building the operating system that powers modern healthcare. Join a team dedicated to clean code, beautiful design, and tools that make a tangible difference in patient care.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#open-roles" className="px-6 py-3 bg-terra-500 rounded text-white font-medium hover:bg-terra-400 transition-colors">
                View Open Roles
              </a>
            </div>
          </div>

          <div className="w-full lg:w-2/5 flex justify-end">
            <div className="bg-terra-800 border border-terra-700 rounded-xl p-6 w-full max-w-md animate-[float_4s_ease-in-out_infinite] shadow-2xl">
              <div className="text-xs text-terra-400 mb-4 uppercase tracking-widest">Life at OneRx</div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-terra-700 rounded-full flex items-center justify-center text-terra-300 font-display text-xl">1</div>
                  <div>
                    <div className="text-white font-medium">Build with Purpose</div>
                    <div className="text-xs text-terra-300">Software that impacts real lives.</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-terra-700 rounded-full flex items-center justify-center text-terra-300 font-display text-xl">2</div>
                  <div>
                    <div className="text-white font-medium">Refined Aesthetics</div>
                    <div className="text-xs text-terra-300">We sweat the UI/UX details.</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-terra-700 rounded-full flex items-center justify-center text-terra-300 font-display text-xl">3</div>
                  <div>
                    <div className="text-white font-medium">Autonomy & Trust</div>
                    <div className="text-xs text-terra-300">Hire smart people, let them work.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Culture & Values Section */}
        <section ref={cultureRef as any} className={`py-20 bg-white ${cultureVis ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide">
            <div className="text-[11px] uppercase tracking-widest text-terra-500 text-center mb-3">OUR PHILOSOPHY</div>
            <h2 className="font-display text-[40px] text-terra-950 text-center mb-12">Meaningful work, meticulously designed.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-terra-50 p-8 rounded-lg border border-terra-100">
                <div className="font-display text-[24px] text-terra-950 mb-3">Quiet Excellence</div>
                <p className="text-[15px] text-terra-600">We don't do hype. We focus on building rock-solid, elegant solutions that solve complex operational problems quietly and efficiently in the background.</p>
              </div>
              <div className="bg-terra-50 p-8 rounded-lg border border-terra-100">
                <div className="font-display text-[24px] text-terra-950 mb-3">Design as a Feature</div>
                <p className="text-[15px] text-terra-600">Enterprise software doesn't have to be ugly. We treat our frontend architecture and design systems with the same reverence as our backend databases.</p>
              </div>
              <div className="bg-terra-50 p-8 rounded-lg border border-terra-100">
                <div className="font-display text-[24px] text-terra-950 mb-3">Sustainable Pace</div>
                <p className="text-[15px] text-terra-600">Great software is a marathon, not a sprint. We value deep, focused work over endless meetings, ensuring our team has the space to breathe and create.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Roles Section */}
        <section id="open-roles" ref={rolesRef as any} className={`py-20 bg-terra-50 ${rolesVis ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide">
            <h3 className="font-display text-[36px] text-terra-950 mb-10">Open Positions</h3>
            
            <div className="flex flex-col gap-4">
              {openRoles.map((role, idx) => (
                <a 
                  key={idx} 
                  href={role.link}
                  className="group bg-white border border-terra-200 p-6 rounded-lg flex flex-col md:flex-row md:items-center justify-between hover:border-terra-500 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-terra-500 mb-1">{role.department}</div>
                    <div className="font-display text-[22px] text-terra-950 group-hover:text-terra-600 transition-colors">{role.title}</div>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center gap-6">
                    <div className="flex flex-col md:items-end">
                      <span className="text-sm text-terra-600">{role.location}</span>
                      <span className="text-xs text-terra-400">{role.type}</span>
                    </div>
                    <div className="hidden md:flex w-10 h-10 rounded-full bg-terra-100 items-center justify-center text-terra-500 group-hover:bg-terra-500 group-hover:text-white transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-terra-600 mb-4">Don't see a perfect fit? We're always looking for exceptional talent.</p>
              <a href="mailto:careers@myonerx.ca" className="inline-block px-6 py-2 border border-terra-300 rounded text-terra-700 hover:bg-terra-100 transition-colors">
                Send a General Application
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Banner */}
        <section ref={benefitsRef as any} className={`py-12 bg-terra-800 text-white ${benefitsVis ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide flex flex-wrap gap-6 justify-between items-center">
            <div className="flex-1 min-w-[200px]">
              <div className="text-[18px] font-display mb-1">Comprehensive Health</div>
              <div className="text-sm text-terra-300">Top-tier medical, dental, and vision coverage for you and your dependents.</div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="text-[18px] font-display mb-1">Flexible Workspace</div>
              <div className="text-sm text-terra-300">Work where you work best. Generous remote-first policies and home office stipends.</div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="text-[18px] font-display mb-1">Continuous Growth</div>
              <div className="text-sm text-terra-300">Annual learning budgets for conferences, courses, and premium resources.</div>
            </div>
          </div>
        </section>

        <TrustFeaturesRow />
      </main>

      <Footer />
    </div>
  );
}