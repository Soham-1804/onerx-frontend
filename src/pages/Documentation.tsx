import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ModuleCTA from "../components/ModuleCTA";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Documentation() {
  useEffect(() => {
    document.title = "Documentation & Support | OneRx";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Comprehensive guides, API documentation, and support resources for the OneRx platform.');
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const { ref: categoriesRef, isVisible: categoriesVis } = useScrollAnimation();
  const { ref: popularRef, isVisible: popularVis } = useScrollAnimation();

  const docCategories = [
    {
      title: "Getting Started",
      description: "Platform fundamentals, user roles, and initial setup guides for new pharmacies.",
      icon: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5a2.5 2.5 0 0 0-2.5 2.5v15Z" />,
      link: "/docs/getting-started"
    },
    {
      title: "Rx Suite (Dispensing)",
      description: "Workflows for prescription intake, verification, filling, and clinical checks.",
      icon: <path d="M10 22v-6.57L4 11.5v-9h16v9l-6 3.93V22M14 22H10" />,
      link: "/docs/rx-suite"
    },
    {
      title: "Rx Manager (POS)",
      description: "Front-shop operations, inventory management, and payment terminal integrations.",
      icon: <path d="M3 6h18M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M12 11v6M9 14h6" />,
      link: "/docs/rx-manager"
    },
    {
      title: "Rx Intelligence",
      description: "Understanding your dashboards, ODB reconciliation, and custom reporting.",
      icon: <path d="M21 21H3M3 21V3M21 9l-6-6-4 4-6-6" />,
      link: "/docs/rx-intelligence"
    },
    {
      title: "Security & Compliance",
      description: "NAPRA compliance settings, audit logs, and data privacy configurations.",
      icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
      link: "/docs/compliance"
    },
    {
      title: "API Reference",
      description: "Developer documentation for custom integrations and data webhooks.",
      icon: <path d="m18 16 4-4-4-4M6 8 2 12l4 4M14.5 4l-5 16" />,
      link: "/docs/api"
    }
  ];

  const popularArticles = [
    { title: "How to process a third-party claim reversal", time: "3 min read" },
    { title: "Configuring multi-store inventory transfers", time: "5 min read" },
    { title: "Setting up automated ODB reconciliation", time: "4 min read" },
    { title: "Managing staff permissions and audit logs", time: "6 min read" },
    { title: "Hardware requirements for Rx Manager POS", time: "2 min read" },
  ];

  return (
    <div className="page-fade bg-terra-50 min-h-screen flex flex-col">
      <Navigation />

      {/* Hero / Search Section */}
      <header className="bg-gradient-to-r from-terra-950 to-terra-800 text-white pt-32 pb-24 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container-wide relative z-10 text-center max-w-4xl mx-auto">
          <div className="uppercase tracking-widest text-[11px] text-terra-400 mb-4">ONERX SUPPORT CENTER</div>
          <h1 className="font-display text-[48px] md:text-[56px] leading-tight mb-8">How can we help you?</h1>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-terra-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-terra-300 focus:outline-none focus:bg-white focus:text-terra-950 focus:placeholder-terra-500 transition-all text-lg shadow-lg backdrop-blur-sm"
              placeholder="Search for guides, API endpoints, or error codes..."
            />
            {/* Mock search dropdown (visible only when typing for realism) */}
            {searchQuery && (
              <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-xl border border-terra-100 text-left overflow-hidden z-50">
                <div className="px-4 py-3 text-xs uppercase tracking-widest text-terra-400 border-b border-terra-50 bg-terra-50/50">Suggested Results</div>
                <div className="px-4 py-3 hover:bg-terra-50 cursor-pointer text-terra-950 border-b border-terra-50 flex items-center gap-3">
                  <svg className="w-4 h-4 text-terra-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  Resolving ODB Error Code <strong>{searchQuery}</strong>
                </div>
                <div className="px-4 py-3 hover:bg-terra-50 cursor-pointer text-terra-950 flex items-center gap-3">
                  <svg className="w-4 h-4 text-terra-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  Search all documentation for "{searchQuery}"
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="flex-grow pb-20">
        <div className="container-wide -mt-10 relative z-20">
          
          {/* Main Content Grid */}
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Left Column: Categories */}
            <div ref={categoriesRef as any} className={`w-full lg:w-2/3 ${categoriesVis ? 'animate-fade-up' : 'opacity-0'}`}>
              <h2 className="font-display text-[28px] text-terra-950 mb-6 px-2">Browse by Topic</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {docCategories.map((category, idx) => (
                  <Link 
                    key={idx} 
                    to={category.link}
                    className="group bg-white p-6 rounded-xl border border-terra-200 shadow-sm hover:border-terra-400 hover:shadow-md transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="w-10 h-10 bg-terra-100 text-terra-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-terra-600 group-hover:text-white transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        {category.icon}
                      </svg>
                    </div>
                    <h3 className="font-display text-[20px] text-terra-950 mb-2 group-hover:text-terra-600 transition-colors">{category.title}</h3>
                    <p className="text-[14px] text-terra-600 mb-4 flex-grow">{category.description}</p>
                    <div className="text-[12px] font-medium text-terra-500 flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                      View docs <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column: Popular & Support */}
            <div ref={popularRef as any} className={`w-full lg:w-1/3 space-y-8 mt-2 lg:mt-0 ${popularVis ? 'animate-fade-up' : 'opacity-0 delay-100'}`}>
              
              {/* Popular Articles */}
              <div className="bg-white p-6 rounded-xl border border-terra-200 shadow-sm">
                <h3 className="text-[11px] uppercase tracking-widest text-terra-500 mb-5 font-medium">Frequently Read</h3>
                <ul className="space-y-4">
                  {popularArticles.map((article, idx) => (
                    <li key={idx} className="group">
                      <Link to="#" className="flex flex-col gap-1">
                        <span className="text-[15px] text-terra-950 group-hover:text-terra-600 transition-colors leading-snug">{article.title}</span>
                        <span className="text-[12px] text-terra-400 flex items-center gap-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                          {article.time}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Need Help Card */}
              <div className="bg-terra-900 p-8 rounded-xl border border-terra-700 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-terra-700 rounded-full opacity-20 blur-2xl"></div>
                <h3 className="font-display text-[24px] mb-3 relative z-10">Still need help?</h3>
                <p className="text-terra-300 text-[14px] mb-6 relative z-10">
                  Our technical support and pharmacy implementation teams are available to assist you.
                </p>
                <div className="space-y-3 relative z-10">
                  <a href="mailto:support@myonerx.ca" className="flex items-center justify-center w-full py-2.5 bg-terra-500 text-white rounded hover:bg-terra-400 transition-colors font-medium text-sm">
                    Open a Support Ticket
                  </a>
                  <a href="#system-status" className="flex items-center justify-center w-full py-2.5 bg-transparent border border-terra-600 text-terra-200 rounded hover:bg-terra-800 transition-colors font-medium text-sm">
                    Check System Status
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* Reusing the CTA from the other pages to keep the sales loop open */}
      <div className="bg-white">
        <ModuleCTA />
      </div>
      <Footer />
    </div>
  );
}