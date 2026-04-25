import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// ─── Data ─────────────────────────────────────────────────────────────────────
const ALL_POSTS = [
  {
    slug: "anonymous-incident-reporting",
    category: "Compliance",
    tag: "NAPRA-Aligned",
    date: "April 17, 2026",
    readTime: "6 min read",
    title: "Why Anonymous Incident Reporting Is the Future of Pharmacy Safety in Canada",
    author: "OneRx Editorial",
    authorRole: "Compliance Team",
    content: `
      <p>Fear of punitive consequences silences near-miss reports across Canadian pharmacies — and that silence costs patient lives. Here's how CQI+ frameworks, paired with AI analytics, are changing the culture.</p>
      <h3>The Culture of Blame</h3>
      <p>Historically, pharmacy operations have operated under a culture of blame. When a dispensing error or near-miss occurs, the immediate reaction of staff is often to hide the mistake rather than report it, fearing disciplinary action from management or provincial colleges.</p>
      <p>This creates a dangerous blind spot. You cannot fix systemic workflow flaws if you don't know they exist.</p>
      <h3>The Shift to Just Culture</h3>
      <p>A "Just Culture" model shifts the focus from <em>who</em> made the error to <em>why</em> the error occurred. By implementing anonymous incident reporting tools, pharmacies see a massive spike in reported near-misses. This isn't because more errors are happening; it's because staff finally feel safe enough to document them.</p>
      <p>With tools like OneRx's Rx Incident module, these reports are scrubbed of identifying information and aggregated. Our AI engine then analyzes this data to find root causes—perhaps medications with look-alike packaging are stored too closely together, or fatigue is spiking during the 3:00 PM rush.</p>
      <p>True patient safety doesn't come from punishing staff; it comes from engineering workflows where errors are impossible to make.</p>
    `
  },
  { 
    slug: "molecule-selection-2026", 
    category: "Operations", 
    date: "April 14, 2026", 
    readTime: "4 min read", 
    title: "Molecule Selection in 2026: Stop Juggling Vendor Catalogs", 
    author: "OneRx Editorial",
    authorRole: "Operations Team",
    content: `
      <p>Independent pharmacies waste an average of 90 minutes per week on manual molecule sourcing. Rx Manager eliminates that with intelligent, real-time formulary matching.</p>
      <h3>The Portal Fatigue Problem</h3>
      <p>It is a scenario every pharmacy buyer knows too well: logging into three different distributor portals just to find which vendor has the best net cost on a specific generic molecule, only to find out it's on backorder.</p>
      <p>This manual juggling act drains time that should be spent on clinical services. In 2026, relying on handwritten notes and memory to navigate generic rebate tiers is a fast track to margin erosion.</p>
      <h3>Centralized Transparency</h3>
      <p>By centralizing vendor catalogs into a single, unified dashboard, independent owners can instantly simulate purchasing margins. You can immediately identify the most profitable vendor choices before committing to an order.</p>
      <p>We are seeing pharmacies recover up to 4% in lost margin purely by routing their purchases through an intelligent, consolidated portal rather than relying on fragmented legacy systems.</p>
    `
  },
  { 
    slug: "ai-root-cause-analysis", 
    category: "Technology", 
    date: "April 10, 2026", 
    readTime: "5 min read", 
    title: "How AI Root-Cause Analysis Is Transforming Pharmacy CQI Programs",
    author: "Dr. Sarah Jenkins",
    authorRole: "Clinical Director", 
    content: `
      <p>Pattern recognition across hundreds of incidents reveals what human managers almost always miss. We break down how Rx Incident's AI layer surfaces actionable insights from anonymized data.</p>
      <h3>Beyond the Spreadsheets</h3>
      <p>For years, Continuous Quality Improvement (CQI) meant logging errors into a giant Excel spreadsheet and reviewing it once a quarter. By the time a trend was noticed, the damage was already done.</p>
      <p>Modern AI changes this paradigm. When an incident is logged anonymously, the system doesn't just store it; it cross-references it against every other incident logged in the network. The AI looks for hidden variables: Time of day, specific drug combinations, prescription volume at the time of the error, and staffing levels.</p>
      <h3>Actionable Operational Changes</h3>
      <p>Instead of a manager guessing why errors happen, the AI delivers a specific insight: <em>"60% of your near-misses involve Amoxicillin and happen between 4:00 PM and 5:00 PM."</em> This allows the owner to take immediate action, such as scheduling a shift overlap during that exact hour or separating look-alike medications on the shelf.</p>
    ` 
  },
  { 
    slug: "acp-updated-cqi-guidelines", 
    category: "Industry News", 
    date: "April 7, 2026", 
    readTime: "3 min read", 
    title: "ACP's Updated CQI+ Guidelines: What Every Alberta Pharmacy Needs to Know",
    author: "OneRx Editorial",
    authorRole: "Regulatory Affairs", 
    content: `
      <p>The Alberta College of Pharmacy (ACP) updated its CQI expectations. Here is a plain-language breakdown of what changed and how OneRx already keeps you aligned.</p>
      <h3>The Shift to Mandatory Proactivity</h3>
      <p>The new guidelines move away from passive reporting. Pharmacies are now expected to demonstrate that they are actively reviewing their incident data and holding documented staff meetings to discuss workflow improvements.</p>
      <h3>How to Stay Compliant</h3>
      <p>First, ensure your reporting tool is truly anonymous to encourage high participation. Second, you need an audit trail. The ACP wants to see that an incident was not just logged, but that a "Root Cause" was identified and an "Action Plan" was executed.</p>
      <p>OneRx's CQI+ module automates this entire lifecycle, generating compliance-ready PDF reports with one click, ensuring you are never caught off-guard during a college audit.</p>
    ` 
  },
  { 
    slug: "paperless-workflow-transition", 
    category: "Compliance", 
    date: "April 2, 2026", 
    readTime: "7 min read", 
    title: "NIDR Submissions Without the Paperwork: A Step-by-Step Look",
    author: "OneRx Editorial",
    authorRole: "Compliance Team", 
    content: `
      <p>Manual National Incident Data Repository (NIDR) submissions take pharmacists away from patient care. We walk through how automated workflows cut submission time from 45 minutes to under 90 seconds.</p>
      <h3>The Burden of Data Entry</h3>
      <p>Submitting to the NIDR is crucial for national health safety, but the legacy process is punishing. Pharmacists often find themselves re-typing the exact same patient and drug data from their local system into a separate provincial or federal web portal.</p>
      <h3>The API Solution</h3>
      <p>Through secure API integrations, OneRx maps your local incident report directly to the NIDR formatting requirements. When you hit "Resolve and Submit" in the OneRx dashboard, the data is encrypted, anonymized, and pushed directly to the national database.</p>
      <p>No double-entry. No lost paperwork. Just seamless, invisible compliance that lets your team get back to the bench.</p>
    ` 
  },
  { 
    slug: "data-sovereignty-canadian-pharmacy", 
    category: "Technology", 
    date: "March 28, 2026", 
    readTime: "5 min read", 
    title: "Data Sovereignty in Canadian Pharmacy: Why Hosting Location Matters",
    author: "Michael Chen",
    authorRole: "Lead Security Architect", 
    content: `
      <p>Your patient data should never cross borders. We explain what AES-256 encryption and Canada-hosted infrastructure actually mean for your practice — in plain English.</p>
      <h3>The Patriot Act Problem</h3>
      <p>Many popular SaaS tools used by small businesses route their data through servers in the United States. Under US law, this data can be subject to subpoena, regardless of where the company is headquartered. For Canadian healthcare providers bound by PIPEDA and PHIPA, this is a massive legal liability.</p>
      <h3>True Data Sovereignty</h3>
      <p>Data Sovereignty means that your digital information is subject strictly to the laws of the country in which it is located. OneRx operates exclusively on Canadian soil. From our database clusters in Toronto to our backup nodes in Montreal, patient data never leaves the country.</p>
      <p>Combined with military-grade AES-256 encryption at rest and in transit, independent pharmacies can leverage cloud technology without compromising their ethical or legal obligations to their patients.</p>
    ` 
  },
  { 
    slug: "napra-audit-requirements-2026", // THIS MUST EXACTLY MATCH THE LINK YOU CLICKED
    category: "Compliance", 
    date: "April 20, 2026", 
    readTime: "5 min read", 
    title: "NAPRA Audit Requirements for 2026: What You Need to Know",
    author: "OneRx Editorial",
    authorRole: "Regulatory Affairs",
    content: `
      <p>As we move deeper into 2026, the National Association of Pharmacy Regulatory Authorities (NAPRA) has introduced stricter audit parameters regarding digital record-keeping and incident logging.</p>
      <h3>Digital Audit Trails</h3>
      <p>Gone are the days when a paper binder of incident reports would suffice. NAPRA auditors are now explicitly looking for immutable digital audit trails. They want to see exactly when an incident was logged, who reviewed it, and what corrective action was taken.</p>
      <p>If your pharmacy is still relying on manual entry, you are at a significantly higher risk of an audit penalty this year.</p>
      <h3>How OneRx Keeps You Compliant</h3>
      <p>The OneRx Incident module was built specifically with these 2026 NAPRA guidelines in mind. Every action taken within the module is time-stamped and securely backed up on Canadian servers, allowing you to generate a comprehensive, auditor-friendly report in under 10 seconds.</p>
    ` 
  },
  { 
    slug: "optimizing-generic-contracts", 
    category: "Operations", 
    date: "April 25, 2026", 
    readTime: "5 min read", 
    title: "Optimizing Generic Contracts: How to Stop Leaving Money on the Table",
    author: "OneRx Editorial",
    authorRole: "Financial Analytics",
    content: `
      <p>Generic medications form the financial backbone of most independent pharmacies. Yet, an alarming number of owners sign their primary vendor agreements and then put them in a drawer, operating on autopilot while margin slowly erodes.</p>
      
      <h3>The Set-and-Forget Trap</h3>
      <p>The generic market is highly volatile. Molecule availability shifts, new manufacturers enter the space, and provincial pricing regulations change constantly. If you negotiated a flat 65% off-invoice rebate two years ago, you are almost certainly leaving money on the table today.</p>
      <p>Furthermore, many contracts contain hidden compliance thresholds. If your pharmacy's purchasing volume dips below a certain percentage on a specific category of generics, your overall rebate tier could be downgraded at the end of the quarter, wiping out thousands of dollars in anticipated profit.</p>
      
      <h3>Moving to Dynamic Purchasing</h3>
      <p>Optimizing generic contracts requires moving away from static agreements toward dynamic purchasing. This means actively monitoring your compliance thresholds daily—not quarterly.</p>
      <p>The OneRx platform automates this entire process. Rx Intelligence actively tracks your purchasing volume against your specific vendor agreements. If you are 2% away from hitting your highest rebate tier with Vendor A, the system will flag it and automatically suggest shifting specific, high-margin molecules to that vendor to hit your target before the quarter closes.</p>
      
      <h3>Transparency is Leverage</h3>
      <p>When it is time to renegotiate, data is your greatest leverage. Instead of accepting the standard renewal terms from your distributor, you can use Rx Intelligence to generate a precise "Purchasing Impact Report." This shows the distributor exactly how much volume you moved, your exact compliance rates, and simulates what those numbers would look like if awarded better terms.</p>
      <p>Stop treating generic purchasing as a passive activity. With the right tools, it is a highly controllable profit center.</p>
    ` 
  },
  { 
    slug: "odb-reconciliation-margins", 
    category: "Financials", 
    date: "April 28, 2026", 
    readTime: "6 min read", 
    title: "ODB Reconciliation: Plugging the Silent Leaks in Your Profit Margin",
    author: "OneRx Editorial",
    authorRole: "Financial Analytics",
    content: `
      <p>For independent pharmacy owners in Ontario, managing claims submitted to the Ontario Drug Benefit (ODB) program is a necessary, yet often frustrating, reality. While the submission process itself is mostly automated, the <em>reconciliation</em> process—ensuring you actually get paid what you are owed—is where significant margin leakage occurs.</p>
      
      <h3>The Reality of Partial Payments</h3>
      <p>A submitted claim is not a guaranteed payment. ODB rejections, partial payments due to pricing discrepancies, and clawbacks are common. Unfortunately, many pharmacies simply lack the time or resources to manually cross-reference every submitted claim against their bi-weekly ODB remittance statements.</p>
      <p>This "trust but don't verify" approach means that underpayments often go completely unnoticed. When a $40 claim is only paid out at $36 due to a generic pricing update mismatch, that $4 difference vanishes from your bottom line.</p>
      
      <h3>Automating the Audit</h3>
      <p>The solution isn't hiring more administrative staff; it's deploying smarter software. The OneRx platform utilizes advanced reconciliation algorithms that automatically ingest your ODB remittance files and cross-reference them against your local dispensing data.</p>
      <p>When a discrepancy is detected, the system immediately flags it on your dashboard, categorizing it by error code. Instead of spending hours hunting for discrepancies in massive spreadsheets, your team receives a concise, prioritized list of underpaid claims to investigate and resubmit.</p>
      
      <h3>Recovering Lost Margin</h3>
      <p>The impact of automated reconciliation is immediate and tangible. Pharmacies that transition from manual audits to automated reconciliation software typically recover an average of 1.5% to 3% in previously lost net margin within the first three months of implementation.</p>
      <p>In 2026, you cannot afford to leave money on the table. If you are not actively reconciling every single ODB claim, you are subsidizing the provincial drug program out of your own pocket.</p>
    ` 
  },
  { 
    slug: "rx-manager-pos-integration", 
    category: "Technology", 
    date: "April 22, 2026", 
    readTime: "4 min read", 
    title: "Seamless Rx Manager & POS Integration: Ending the Double-Entry Nightmare",
    author: "OneRx Editorial",
    authorRole: "Technology Team",
    content: `
      <p>For too long, independent pharmacies have operated with a massive divide between their back-of-house dispensing software and their front-of-house Point of Sale (POS) systems. This disconnect forces staff into a continuous, exhausting cycle of double-entry.</p>
      <h3>The Cost of Disconnected Systems</h3>
      <p>When Rx management and POS systems don't talk to each other, pricing discrepancies become inevitable. A cost update from a vendor might get entered into the purchasing system but missed at the register, leading to immediate margin leakage.</p>
      <p>Furthermore, cashiers and pharmacy technicians waste hours manually reconciling end-of-day sales, tracking ODB (Ontario Drug Benefit) co-pays, and updating OTC (Over-The-Counter) inventory levels.</p>
      <h3>The OneRx Solution: Unified Commerce</h3>
      <p>By fully integrating Rx Manager directly with your POS system, OneRx eliminates the gap. When a drug's net cost updates via your vendor catalog, the retail pricing at the register automatically adjusts to protect your set margins.</p>
      <p>Prescription co-pays flow seamlessly to the front till, requiring zero manual entry by the cashier. This integration doesn't just save time—it entirely eliminates human error at the checkout, ensuring your inventory is accurate and your margins are fiercely protected.</p>
    ` 
  },
  
  { 
    slug: "independent-buying-advantage", 
    category: "Operations", 
    date: "March 22, 2026", 
    readTime: "4 min read", 
    title: "The Independent Pharmacy Buying Advantage You Didn't Know You Had",
    author: "OneRx Editorial",
    authorRole: "Market Analysis", 
    content: `
      <p>Collective negotiation isn't just for chains. OneRx's network model gives independent pharmacies banner-level purchasing leverage — without surrendering independence.</p>
      <h3>The Myth of the Corporate Giant</h3>
      <p>It is widely believed that large retail banners always get the best drug pricing. While their sheer volume commands discounts, it also creates massive corporate overhead. Franchise fees, mandatory marketing spends, and locked-in vendor contracts often eat up the very margins those volume discounts created.</p>
      <h3>The Lean Network Advantage</h3>
      <p>Independent pharmacies operate lean. By utilizing a digital marketplace like OneRx, independent owners can pool their purchasing power to unlock Tier-1 generic rebates, without having to pay a 4% top-line franchise fee to a corporate head office.</p>
      <p>When you combine aggressive, collective purchasing with zero corporate overhead, the independent pharmacy actually achieves a higher net profitability per script than their banner counterparts.</p>
    ` 
  },
  { 
    slug: "building-just-culture", 
    category: "CQI+", 
    date: "March 18, 2026", 
    readTime: "6 min read", 
    title: "Building a Just Culture in Your Pharmacy: A Practical Framework",
    author: "Dr. Sarah Jenkins",
    authorRole: "Clinical Director", 
    content: `
      <p>Just Culture isn't a slogan — it's a clinical safety standard. This guide shows pharmacy owners how to embed it into daily operations through policy, process, and the right tools.</p>
      <h3>1. Decouple Reporting from Discipline</h3>
      <p>The first step to building a Just Culture is drawing a hard line between human error and reckless behavior. If a staff member makes a genuine mistake due to fatigue or confusing software, they should be praised for reporting it, not punished. Discipline should be reserved solely for intentional, malicious disregard of safety protocols.</p>
      <h3>2. Implement Anonymous Channels</h3>
      <p>Trust takes time to build. Until your staff fully believes in the Just Culture model, you must provide a way for them to report systemic issues anonymously. Software platforms that scrub identifying data are critical in the early stages of this cultural shift.</p>
      <h3>3. Share the Wins</h3>
      <p>When an incident report leads to a workflow change (like moving two similar drugs apart on the shelf), announce it to the team. Show them that their reports actively make their jobs easier and safer.</p>
    ` 
  },
  { 
    slug: "independents-vs-banners-margin", 
    category: "Industry News", 
    date: "March 12, 2026", 
    readTime: "3 min read", 
    title: "Independents vs. Banners: Who Really Wins on Margin in 2026?",
    author: "OneRx Editorial",
    authorRole: "Financial Analytics", 
    content: `
      <p>A new analysis of Canadian pharmacy economics reveals independents using collective purchasing platforms are outperforming banner pharmacies on net margin by up to 11%.</p>
      <h3>The Hidden Costs of the Banner Model</h3>
      <p>Banner programs offer the illusion of safety, but at a steep cost. Beyond the visible franchise fees, banner pharmacies often suffer from opaque rebate structures, where the corporate office retains a significant percentage of the back-end generic allowances before passing the remainder down to the franchisee.</p>
      <h3>The Tech-Enabled Independent</h3>
      <p>The landscape has shifted. A fully independent pharmacy armed with modern cloud software (like Rx Intelligence) now has the exact same supply-chain visibility as a corporate VP. They can see the true net cost of every DIN across every wholesaler in real-time.</p>
      <p>Because the tech-enabled independent keeps 100% of their negotiated rebates and pays zero franchise fees, they are quietly becoming the most lucrative business model in the Canadian pharmacy sector.</p>
    ` 
  }
];

const CAT_STYLE = {
  Compliance:      { dot: "#ef4444", bg: "rgba(127,29,29,0.25)",   text: "#f87171" },
  Operations:      { dot: "#f59e0b", bg: "rgba(120,53,15,0.25)",   text: "#fbbf24" },
  Technology:      { dot: "#3b82f6", bg: "rgba(30,58,138,0.25)",   text: "#60a5fa" },
  "Industry News": { dot: "#10b981", bg: "rgba(6,78,59,0.25)",     text: "#34d399" },
  "CQI+":          { dot: "#8b5cf6", bg: "rgba(76,29,149,0.25)",   text: "#a78bfa" },
};

function Badge({ category }) {
  const s = CAT_STYLE[category] || { dot: "#9a4a28", bg: "rgba(154,74,40,0.2)", text: "#d5a48d" };
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 4, background: s.bg, color: s.text, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: s.dot, flexShrink: 0 }} />
      {category}
    </span>
  );
}

export default function BlogArticle() {
  const params = useParams();
  const navigate = useNavigate();
  
  const routeIdentifier = params.id || params.slug || Object.values(params)[0];
  const post = ALL_POSTS.find(p => p.slug === routeIdentifier);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | OneRx Insights`;
      window.scrollTo(0, 0);
    }
  }, [post]);

  if (!post) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--t950)", color: "#fff", display: "flex", flexDirection: "column", fontFamily: "'DM Sans',sans-serif" }}>
        <Navigation />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", textAlign: "center" }}>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 40, marginBottom: "1rem" }}>Article Not Found</h1>
          <p style={{ color: "var(--t400)", marginBottom: "2rem" }}>The insight you are looking for does not exist or has been moved.</p>
          <button onClick={() => navigate('/insights')} style={{ background: "var(--t500)", color: "#fff", border: "none", padding: "0.75rem 1.5rem", borderRadius: 8, fontWeight: 600, cursor: "pointer" }}>
            Return to Insights
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--t950)", color: "#fff", fontFamily: "'DM Sans',sans-serif" }}>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
        :root {
          --t50:#fdf8f6; --t100:#f5e9e2; --t200:#e8c9bb; --t300:#d5a48d;
          --t400:#b87355; --t500:#9a4a28; --t600:#7a3a1e; --t700:#5e2c17;
          --t800:#3d1e10; --t900:#261308; --t950:#150a04;
        }
        
        .article-content p {
          color: rgba(255, 255, 255, 0.85);
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        
        .article-content h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          color: #fff;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }
        
        .article-content a {
          color: var(--t400);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }
        
        .article-content a:hover {
          border-bottom-color: var(--t400);
        }
      `}</style>

      <Navigation />

      <main style={{ padding: "clamp(3rem, 8vw, 6rem) 1.5rem", maxWidth: 800, margin: "0 auto" }}>
        
        <Link to="/insights" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--t500)", textDecoration: "none", fontSize: 14, fontWeight: 600, marginBottom: "3rem", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--t400)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--t500)'}>
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Insights
        </Link>

        <header style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.5rem" }}>
            <Badge category={post.category} />
            <span style={{ color: "var(--t500)", fontSize: 13, fontWeight: 500 }}>{post.date}</span>
            <span style={{ color: "var(--t700)" }}>•</span>
            <span style={{ color: "var(--t500)", fontSize: 13, fontWeight: 500 }}>{post.readTime}</span>
          </div>
          
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.15, marginBottom: "2rem", color: "#fff" }}>
            {post.title}
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: "2rem", borderBottom: "1px solid var(--t800)" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--t800)", border: "1px solid var(--t700)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, color: "var(--t300)" }}>
              {post.author ? post.author.charAt(0) : "O"}
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#fff" }}>{post.author || "OneRx Editorial"}</div>
              <div style={{ fontSize: 13, color: "var(--t500)" }}>{post.authorRole || "Staff Writer"}</div>
            </div>
          </div>
        </header>

        <article 
          className="article-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--t800)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ color: "var(--t500)", fontSize: 14 }}>
            Enjoyed this insight? Share it with your network.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <button style={{ background: "var(--t900)", border: "1px solid var(--t800)", color: "#fff", width: 40, height: 40, borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              in
            </button>
            <button style={{ background: "var(--t900)", border: "1px solid var(--t800)", color: "#fff", width: 40, height: 40, borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              X
            </button>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}