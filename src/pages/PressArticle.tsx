import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// Complete Database of all Press Releases
const fullArticleData = [
  {
    slug: "rx-intelligence-nationwide-rollout",
    date: "April 10, 2026",
    title: "OneRx Announces Nationwide Rollout of Rx Intelligence Module",
    publication: "Press Release",
    content: `
      <p><strong>TORONTO, ON</strong> — OneRx, the leading operating system for independent pharmacies, today announced the nationwide availability of its flagship module, Rx Intelligence.</p>
      <p>Following a highly successful beta period involving over 50 high-volume dispensaries across Ontario and British Columbia, the platform is now available to independent pharmacies Canada-wide.</p>
      <h3>Eradicating Margin Leakage</h3>
      <p>Rx Intelligence tackles one of the most persistent problems in pharmacy operations: hidden margin leakage. By automatically reconciling provincial claims and cross-referencing vendor purchasing agreements in real-time, the module provides unprecedented visibility into true net profitability.</p>
      <p>"Independent pharmacies are fighting battles on multiple fronts—from shrinking margins to staffing shortages," said the product lead at OneRx. "Rx Intelligence isn't just an analytics dashboard; it's a financial safeguard that actively finds money that belongs to the pharmacy."</p>
      <h3>Seamless Integration and Simulation</h3>
      <p>Unlike legacy systems that require manual data exports and complex spreadsheet math, Rx Intelligence integrates directly with existing post-login environments. It allows pharmacy owners to simulate purchasing strategies and identify the most profitable vendor choices before committing to a daily order.</p>
      <p>Early beta testers reported an average recovery of 4-6% in lost margins within the first sixty days of deployment, purely by optimizing their generic molecule purchasing algorithms through the OneRx interface.</p>
    `
  },
  {
    slug: "strategic-funding-modernize-infrastructure",
    date: "February 22, 2026",
    title: "OneRx Secures Strategic Funding to Modernize Pharmacy Infrastructure",
    publication: "TechCrunch",
    content: `
      <p>The digital transformation of the pharmacy sector has largely skipped the independent owner. While massive retail chains deploy sophisticated enterprise software, independent pharmacies have been trapped using fragmented, decades-old legacy systems.</p>
      <p>Toronto-based OneRx wants to change that, and they've just secured a significant strategic funding round to accelerate their mission.</p>
      <h3>Building a Cloud-Native OS</h3>
      <p>The new capital will be directly allocated to expanding OneRx's engineering and product design teams, with a specific focus on their core infrastructure: building a unified, cloud-native operating system that handles everything from inventory management to clinical documentation.</p>
      <p>"We are stripping away the complexity of traditional pharmacy IT," a company spokesperson noted. "Pharmacists are highly trained clinical professionals who currently spend hours a day acting as amateur procurement officers and IT troubleshooters. Our software is designed to run quietly and elegantly in the background, fully automating the business side of the pharmacy."</p>
      <h3>What's Next for OneRx?</h3>
      <p>The funding will accelerate the rollout of the 'Rx Suite' and 'Rx Manager' modules, which aim to consolidate VoIP, secure e-faxing, point-of-sale integrations, and compliance documentation into a single, beautifully designed interface. As the pharmacy industry pivots heavily toward clinical services, OneRx's timing—arming independent owners with enterprise-grade efficiency tools—appears to be a highly calculated move.</p>
    `
  },
  {
    slug: "solving-technician-shortage-automation",
    date: "November 05, 2025",
    title: "How OneRx is Solving the Pharmacy Technician Shortage with Automation",
    publication: "Healthcare IT News",
    content: `
      <p>The Canadian pharmacy sector is facing an unprecedented staffing crisis. With prescription volumes rising and the clinical scope of pharmacists expanding across multiple provinces, pharmacy technicians are stretched thinner than ever. Burnout is high, and recruitment is increasingly difficult.</p>
      <p>Enter OneRx, a digital health platform that believes the solution to the staffing shortage isn't just hiring more people—it's writing better software.</p>
      <h3>Automating the Mundane</h3>
      <p>In a typical independent pharmacy, technicians spend up to 30% of their day managing inventory: checking wholesaler portals, comparing drug prices, tracking backorders, and managing inter-store transfers. OneRx's workflow engine targets these exact bottlenecks.</p>
      <p>By automating vendor catalog syncs and providing AI-driven predictive ordering, OneRx essentially acts as a digital inventory clerk. The system alerts staff to shortages before they happen and suggests the next-best generic alternatives based on real-time net-cost transparency.</p>
      <h3>Returning Focus to the Patient</h3>
      <p>"When you automate the supply chain logistics, you fundamentally change the atmosphere behind the counter," the OneRx team explained. "Dispensary staff go from being reactive and stressed to being proactive and patient-focused."</p>
      <p>Clinics utilizing the OneRx suite have reported a drastic reduction in manual data entry, allowing their human technicians to focus on what technology cannot do: direct patient care, complex compounding, and clinical consultations.</p>
    `
  },
  {
    slug: "distributor-partnerships-real-time-inventory",
    date: "September 14, 2025",
    title: "OneRx Partners with Leading Canadian Distributors for Real-Time Inventory",
    publication: "Press Release",
    content: `
      <p><strong>TORONTO, ON</strong> — In a move that fundamentally upgrades how independent pharmacies manage their supply chain, OneRx today announced deep API integrations with several of Canada's leading pharmaceutical distributors.</p>
      <p>This partnership enables the OneRx platform to provide real-time inventory levels, dynamic pricing, and instant backorder notifications directly within the Rx Manager dashboard.</p>
      <h3>Ending the 'Portal Fatigue'</h3>
      <p>Historically, pharmacy buyers have suffered from "portal fatigue"—the need to log in to three or four different distributor websites to source a single out-of-stock medication or compare generic rebate tiers. OneRx eliminates this friction entirely.</p>
      <p>With these new direct integrations, independent owners can view aggregate inventory across all their contracted vendors in one unified screen. Furthermore, the platform's proprietary algorithms automatically calculate the true net cost of a drug by factoring in off-invoice discounts, quarterly volume rebates, and prompt-pay incentives.</p>
      <h3>Empowering Independent Buying</h3>
      <p>"Our goal is to give the independent pharmacy the exact same purchasing leverage and supply chain visibility as a massive corporate chain," said OneRx leadership. "By partnering directly with these key distributors, we ensure that our users never overpay for a molecule, and never miss an opportunity to optimize their inventory."</p>
      <p>The integrated purchasing features are now live for all users subscribed to the Rx Empowered and Rx Flex tiers.</p>
    `
  }
];

export default function PressArticle() {
  const { slug } = useParams();
  
  // Find the article that matches the slug from the URL
  const article = fullArticleData.find((a) => a.slug === slug);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | OneRx Press`;
      window.scrollTo(0, 0); // Reset scroll to top on load
    }
  }, [article]);

  if (!article) {
    return (
      <div className="page-fade bg-white min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display text-[40px] text-terra-950 mb-4">Article Not Found</h1>
          <p className="text-terra-600 mb-8">The press release you are looking for does not exist or has been removed.</p>
          <Link to="/press" className="px-6 py-2 bg-terra-500 rounded text-white hover:bg-terra-400 transition-colors">
            Return to Newsroom
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-fade bg-white">
      <Navigation />

      <main className="pt-32 pb-20">
        <article className="container-wide max-w-3xl mx-auto">
          
          {/* Back Button */}
          <Link to="/press" className="inline-flex items-center gap-2 text-terra-500 hover:text-terra-600 font-medium mb-10 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back to Newsroom
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[14px] text-terra-500 font-medium">{article.date}</span>
              <span className="w-1 h-1 rounded-full bg-terra-300"></span>
              <span className="text-[11px] uppercase tracking-widest text-terra-600 bg-terra-50 px-2 py-1 rounded">{article.publication}</span>
            </div>
            <h1 className="font-display text-[40px] md:text-[52px] leading-tight text-terra-950 mb-6">
              {article.title}
            </h1>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg prose-terra max-w-none text-terra-800 
            prose-headings:font-display prose-headings:text-terra-950 prose-headings:mt-10 prose-headings:mb-4
            prose-p:leading-relaxed prose-p:mb-6 
            prose-a:text-terra-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-terra-950 prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Share / Footer of Article */}
          <div className="mt-16 pt-8 border-t border-terra-200 flex items-center justify-between">
            <div className="text-sm text-terra-500">
              For media inquiries, please contact <a href="mailto:press@myonerx.ca" className="text-terra-600 font-medium hover:underline">press@myonerx.ca</a>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}