import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ModuleCTA from "../components/ModuleCTA";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Insights() {
  useEffect(() => {
    document.title = "Insights & Resources | OneRx";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Expert perspectives on digital pharmacy, operational efficiency, and data-driven healthcare.');
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");

  const { ref: gridRef, isVisible: gridVis } = useScrollAnimation();
  const { ref: newsletterRef, isVisible: newsletterVis } = useScrollAnimation();

  const categories = ["All", "Analytics", "Operations", "Compliance", "Product Updates"];

  const featuredArticle = {
    category: "Analytics",
    readTime: "8 min read",
    title: "The Hidden Margins: Rethinking ODB Reconciliation in High-Volume Pharmacies",
    excerpt: "For years, manual reconciliation has been accepted as the cost of doing business. Discover how automated matching is reclaiming thousands of dollars in previously written-off claims.",
    slug: "/insights/odb-reconciliation-margins",
    date: "April 15, 2026"
  };

  const articles = [
    {
      category: "Operations",
      readTime: "5 min read",
      title: "Transitioning to a Paperless Workflow Without Disrupting Dispensing",
      excerpt: "A tactical guide to migrating your staff from legacy hardcopy systems to a fully digital, cloud-native operational environment.",
      slug: "/insights/paperless-workflow-transition",
      date: "April 02, 2026"
    },
    {
      category: "Compliance",
      readTime: "6 min read",
      title: "Navigating the New NAPRA Audit Requirements for 2026",
      excerpt: "What pharmacy owners need to know about the upcoming digital traceability mandates and how to ensure your software stack is compliant.",
      slug: "/insights/napra-audit-requirements-2026",
      date: "March 28, 2026"
    },
    {
      category: "Product Updates",
      readTime: "3 min read",
      title: "Introducing Rx Manager 2.0: The Intelligent POS Integration",
      excerpt: "Our latest release bridges the gap between the dispensary and the front shop, providing unified financial reporting across your entire operation.",
      slug: "/insights/rx-manager-pos-integration",
      date: "March 15, 2026"
    },
    {
      category: "Analytics",
      readTime: "7 min read",
      title: "Why Generic Purchasing Contracts Are Costing You Money",
      excerpt: "How real-time vendor simulation can identify hidden rebate discrepancies and optimize your ordering logic automatically.",
      slug: "/insights/optimizing-generic-contracts",
      date: "March 04, 2026"
    }
  ];

  const filteredArticles = activeCategory === "All" 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  return (
    <div className="page-fade">
      <Navigation />

      {/* Hero / Featured Article Section */}
      <header className="bg-gradient-to-r from-terra-950 to-terra-800 text-white pt-28 pb-0">
        <div className="container-wide pb-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-display text-[56px] leading-tight">Insights & Resources</h1>
            <p className="text-[18px] text-terra-300 mt-4">
              Expert perspectives on pharmacy operations, margin optimization, and the future of data-driven healthcare.
            </p>
          </div>

          {/* Featured Article Card */}
          <Link to={featuredArticle.slug} className="group block bg-terra-900 border border-terra-700 rounded-xl overflow-hidden hover:border-terra-500 transition-colors duration-500 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-terra-500 to-terra-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-terra-400 mb-4">
                  <span className="bg-terra-800 px-3 py-1 rounded-full">{featuredArticle.category}</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
                <h2 className="font-display text-[36px] text-white leading-tight mb-4 group-hover:text-terra-300 transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-terra-300 text-[16px] mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm text-terra-500 font-medium">
                  Read Article 
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                {/* Abstract Data Visualization graphic representing the article */}
                <div className="w-full max-w-sm h-64 bg-terra-800 rounded-lg border border-terra-700 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-terra-500 via-transparent to-transparent animate-play-pulse" />
                  <svg className="w-3/4 h-3/4 text-terra-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M10 90 L30 60 L50 70 L90 20" strokeWidth="2" />
                    <circle cx="90" cy="20" r="3" fill="#CC785C" />
                    <circle cx="30" cy="60" r="3" fill="#CC785C" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Category Filter Strip */}
        <div className="bg-terra-800 py-4 border-t border-terra-700">
          <div className="container-wide flex items-center gap-2 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  activeCategory === cat 
                    ? "bg-terra-500 text-white" 
                    : "text-terra-300 hover:text-white hover:bg-terra-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="bg-terra-50 py-20">
        <div className="container-wide">
          
          {/* Article Grid */}
          <div ref={gridRef as any} className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${gridVis ? 'animate-fade-up' : 'opacity-0'}`}>
            {filteredArticles.map((article, idx) => (
              <Link 
                key={idx} 
                to={article.slug}
                className="group bg-white border border-terra-200 p-8 rounded-xl flex flex-col h-full hover:border-terra-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] uppercase tracking-widest text-terra-500 font-medium">{article.category}</span>
                  <span className="text-[12px] text-terra-400">{article.date}</span>
                </div>
                
                <h3 className="font-display text-[24px] text-terra-950 mb-3 group-hover:text-terra-600 transition-colors leading-snug">
                  {article.title}
                </h3>
                
                <p className="text-terra-600 text-[15px] mb-8 flex-grow">
                  {article.excerpt}
                </p>
                
                <div className="mt-auto flex items-center justify-between border-t border-terra-100 pt-5">
                  <span className="text-xs text-terra-500">{article.readTime}</span>
                  <span className="text-terra-500 group-hover:translate-x-1 transition-transform">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20 text-terra-500">
              No articles found for this category.
            </div>
          )}
        </div>
      </main>

      {/* Newsletter Subscription */}
      <section ref={newsletterRef as any} className={`py-24 bg-white border-b border-terra-100 ${newsletterVis ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="container-wide max-w-4xl text-center">
          <div className="w-16 h-16 bg-terra-50 text-terra-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </div>
          <h3 className="font-display text-[36px] text-terra-950 mb-4">Stay ahead of the curve.</h3>
          <p className="text-[16px] text-terra-600 mb-8 max-w-2xl mx-auto">
            Get the latest insights on pharmacy operations, technology updates, and industry compliance delivered directly to your inbox once a month. No spam, just value.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your professional email" 
              className="flex-grow px-4 py-3 border border-terra-200 rounded focus:outline-none focus:border-terra-500 bg-terra-50 text-terra-950"
              required
            />
            <button type="submit" className="px-6 py-3 bg-terra-950 text-white rounded hover:bg-terra-800 transition-colors font-medium whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <ModuleCTA />
      <Footer />
    </div>
  );
}