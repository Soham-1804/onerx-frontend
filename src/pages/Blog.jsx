import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ─── Data ─────────────────────────────────────────────────────────────────────
const CATEGORIES = ["All", "Compliance", "Operations", "Technology", "Industry News", "CQI+"];

const FEATURED = {
  slug: "anonymous-incident-reporting",
  category: "Compliance",
  tag: "NAPRA-Aligned",
  date: "April 17, 2026",
  readTime: "6 min read",
  title: "Why Anonymous Incident Reporting Is the Future of Pharmacy Safety in Canada",
  excerpt: "Fear of punitive consequences silences near-miss reports across Canadian pharmacies — and that silence costs patient lives. Here's how CQI+ frameworks, paired with AI analytics, are changing the culture.",
  author: "OneRx Editorial",
  authorRole: "Compliance Team",
};

// UPDATED: Now using URL-friendly 'slugs' instead of numerical IDs
const POSTS = [
  { slug: "molecule-selection-2026", category: "Operations", date: "April 14, 2026", readTime: "4 min read", title: "Molecule Selection in 2026: Stop Juggling Vendor Catalogs", excerpt: "Independent pharmacies waste an average of 90 minutes per week on manual molecule sourcing. Rx Manager eliminates that with intelligent, real-time formulary matching." },
  { slug: "ai-root-cause-analysis", category: "Technology", date: "April 10, 2026", readTime: "5 min read", title: "How AI Root-Cause Analysis Is Transforming Pharmacy CQI Programs", excerpt: "Pattern recognition across hundreds of incidents reveals what humans miss. We break down how Rx Incident's AI layer surfaces actionable insights from anonymized data." },
  { slug: "acp-updated-cqi-guidelines", category: "Industry News", date: "April 7, 2026", readTime: "3 min read", title: "ACP's Updated CQI+ Guidelines: What Every Alberta Pharmacy Needs to Know", excerpt: "The Alberta College of Pharmacy updated its CQI+ expectations effective Q1 2026. Here's a plain-language breakdown and how OneRx already keeps you aligned." },
  { slug: "paperless-workflow-transition", category: "Compliance", date: "April 2, 2026", readTime: "7 min read", title: "NIDR Submissions Without the Paperwork: A Step-by-Step Look", excerpt: "Manual NIDR submissions take pharmacists away from patient care. We walk through how automated workflows cut submission time from 45 minutes to under 90 seconds." },
  { slug: "data-sovereignty-canadian-pharmacy", category: "Technology", date: "March 28, 2026", readTime: "5 min read", title: "Data Sovereignty in Canadian Pharmacy: Why Hosting Location Matters", excerpt: "Your patient data should never cross borders. We explain what AES-256 encryption and Canada-hosted infrastructure actually mean for your practice — in plain English." },
  { slug: "independent-buying-advantage", category: "Operations", date: "March 22, 2026", readTime: "4 min read", title: "The Independent Pharmacy Buying Advantage You Didn't Know You Had", excerpt: "Collective negotiation isn't just for chains. OneRx's network model gives independent pharmacies banner-level purchasing leverage — without surrendering independence." },
  { slug: "building-just-culture", category: "CQI+", date: "March 18, 2026", readTime: "6 min read", title: "Building a Just Culture in Your Pharmacy: A Practical Framework", excerpt: "Just Culture isn't a slogan — it's a clinical safety standard. This guide shows pharmacy owners how to embed it into daily operations through policy, process, and the right tools." },
  { slug: "independents-vs-banners-margin", category: "Industry News", date: "March 12, 2026", readTime: "3 min read", title: "Independents vs. Banners: Who Really Wins on Margin in 2026?", excerpt: "A new analysis of Canadian pharmacy economics reveals independents using collective purchasing platforms are outperforming banner pharmacies on net margin by up to 11%." },
];

const CAT_STYLE = {
  Compliance:      { dot: "#ef4444", bg: "rgba(127,29,29,0.25)",   text: "#f87171", strip: "#7f1d1d" },
  Operations:      { dot: "#f59e0b", bg: "rgba(120,53,15,0.25)",   text: "#fbbf24", strip: "#78350f" },
  Technology:      { dot: "#3b82f6", bg: "rgba(30,58,138,0.25)",   text: "#60a5fa", strip: "#1e3a5f" },
  "Industry News": { dot: "#10b981", bg: "rgba(6,78,59,0.25)",     text: "#34d399", strip: "#064e3b" },
  "CQI+":          { dot: "#8b5cf6", bg: "rgba(76,29,149,0.25)",   text: "#a78bfa", strip: "#4c1d95" },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function Badge({ category }) {
  const s = CAT_STYLE[category] || { dot: "#9a4a28", bg: "rgba(154,74,40,0.2)", text: "#d5a48d" };
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "2px 8px", borderRadius: 4, background: s.bg, color: s.text, fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: s.dot, flexShrink: 0 }} />
      {category}
    </span>
  );
}

function PostCard({ post }) {
  const [hovered, setHovered] = useState(false);
  const s = CAT_STYLE[post.category] || {};
  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--t900)", border: `1px solid ${hovered ? "var(--t600)" : "var(--t800)"}`,
        borderRadius: 12, overflow: "hidden", display: "flex", flexDirection: "column",
        transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-3px)" : "none",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div style={{ height: 3, background: s.strip || "var(--t500)", flexShrink: 0 }} />
      <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <Badge category={post.category} />
          <span style={{ fontSize: 11, color: "var(--t500)" }}>{post.readTime}</span>
        </div>
        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(15px, 2.2vw, 18px)", lineHeight: 1.35, color: hovered ? "var(--t300)" : "#fff", margin: "0 0 10px", transition: "color 0.2s" }}>
          {post.title}
        </h3>
        <p style={{ color: "var(--t400)", fontSize: 13, lineHeight: 1.7, margin: 0, flex: 1 }}>{post.excerpt}</p>
        <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--t800)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 11, color: "var(--t500)" }}>{post.date}</span>
          
          <Link 
            to={`/insights/${post.slug}`}
            style={{ fontSize: 12, color: hovered ? "#fff" : "var(--t400)", display: "flex", alignItems: "center", gap: 4, transition: "color 0.2s", textDecoration: "none" }}
          >
            Read
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery]       = useState("");
  const [menuOpen, setMenuOpen]             = useState(false);
  const [visible, setVisible]               = useState(false);

  useEffect(() => {
    document.title = "Insights — Pharmacy Knowledge | OneRx";
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const filtered = POSTS.filter(p => {
    const catOk  = activeCategory === "All" || p.category === activeCategory;
    const q      = searchQuery.toLowerCase();
    const textOk = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
    return catOk && textOk;
  });

  return (
    <div style={{ minHeight: "100vh", background: "var(--t950)", color: "#fff", opacity: visible ? 1 : 0, transition: "opacity 0.5s", fontFamily: "'DM Sans',sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --t50:#fdf8f6; --t100:#f5e9e2; --t200:#e8c9bb; --t300:#d5a48d;
          --t400:#b87355; --t500:#9a4a28; --t600:#7a3a1e; --t700:#5e2c17;
          --t800:#3d1e10; --t900:#261308; --t950:#150a04;
        }
        body { margin:0; background:var(--t950); }

        .cw { max-width:1200px; margin:0 auto; padding:0 1.25rem; }
        @media(min-width:640px){ .cw { padding:0 1.75rem; } }
        @media(min-width:1024px){ .cw { padding:0 2.5rem; } }

        ::-webkit-scrollbar { width:5px; }
        ::-webkit-scrollbar-track { background:var(--t950); }
        ::-webkit-scrollbar-thumb { background:var(--t700); border-radius:3px; }

        .s-input { width:100%; background:var(--t900); border:1px solid var(--t800); color:#fff; border-radius:8px; padding:0.55rem 0.75rem 0.55rem 2.35rem; font-family:'DM Sans',sans-serif; font-size:14px; outline:none; transition:border-color 0.2s; }
        .s-input:focus { border-color:var(--t500); }
        .s-input::placeholder { color:var(--t500); }

        .nl-input { flex:1; min-width:0; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); color:#fff; border-radius:8px; padding:0.65rem 1rem; font-family:'DM Sans',sans-serif; font-size:14px; outline:none; transition:border-color 0.2s; }
        .nl-input:focus { border-color:var(--t500); }
        .nl-input::placeholder { color:rgba(255,255,255,0.3); }

        .pill { padding:0.3rem 0.85rem; border-radius:999px; font-size:12px; font-weight:600; letter-spacing:0.04em; cursor:pointer; border:1px solid transparent; transition:all 0.2s; white-space:nowrap; font-family:'DM Sans',sans-serif; }
        .pill-on  { background:var(--t500); color:#fff; border-color:var(--t500); }
        .pill-off { background:transparent; color:var(--t400); border-color:var(--t800); }
        .pill-off:hover { border-color:var(--t600); color:#fff; }

        .pill-row { display:flex; gap:6px; overflow-x:auto; -webkit-overflow-scrolling:touch; scrollbar-width:none; padding-bottom:2px; }
        .pill-row::-webkit-scrollbar { display:none; }

        .mlink { padding:0.38rem 0.9rem; border:1px solid var(--t700); border-radius:6px; font-size:13px; color:var(--t400); text-decoration:none; transition:all 0.2s; white-space:nowrap; }
        .mlink:hover { border-color:var(--t500); color:#fff; }

        .flink { color:var(--t600); font-size:12px; text-decoration:none; transition:color 0.2s; }
        .flink:hover { color:var(--t400); }
        .nlink { color:var(--t400); font-size:14px; text-decoration:none; transition:color 0.2s; }
        .nlink:hover { color:#fff; }

        .hamburger { display:flex; flex-direction:column; gap:5px; cursor:pointer; padding:6px; background:none; border:none; }
        .hamburger span { display:block; width:22px; height:2px; background:#fff; border-radius:2px; transition:all 0.28s; }

        .desk-nav { display:flex; gap:1.5rem; align-items:center; }
        @media(max-width:767px){ .desk-nav { display:none !important; } }
        .mob-btn { display:block; }
        @media(min-width:768px){ .mob-btn { display:none !important; } }

        .mob-menu { position:fixed; inset:0; top:56px; background:var(--t950); z-index:99; display:flex; flex-direction:column; padding:2rem 1.5rem; gap:1.25rem; border-top:1px solid var(--t800); overflow-y:auto; }

        .hdr-row { display:flex; flex-direction:column; gap:1.5rem; }
        @media(min-width:640px){ .hdr-row { flex-direction:row; align-items:flex-end; justify-content:space-between; } }

        .feat-inner { display:flex; flex-direction:column; }
        @media(min-width:768px){ .feat-inner { flex-direction:row; } }

        .feat-tags { display:flex; flex-wrap:wrap; gap:8px; align-items:center; justify-content:flex-start; background:linear-gradient(180deg,rgba(154,74,40,0.14) 0%,rgba(154,74,40,0.04) 100%); border-top:1px solid var(--t700); padding:1rem 1.25rem; }
        @media(min-width:768px){ .feat-tags { flex-direction:column; flex-wrap:nowrap; border-top:none; border-left:1px solid var(--t700); width:150px; padding:1.75rem 1.25rem; justify-content:center; } }

        .filter-bar { display:flex; flex-direction:column; gap:0.7rem; }
        @media(min-width:640px){ .filter-bar { flex-direction:row; align-items:center; flex-wrap:wrap; } }

        .post-grid { display:grid; gap:1.1rem; grid-template-columns:1fr; }
        @media(min-width:480px){ .post-grid { grid-template-columns:repeat(2,1fr); } }
        @media(min-width:900px){ .post-grid { grid-template-columns:repeat(3,1fr); } }
        @media(min-width:1150px){ .post-grid { grid-template-columns:repeat(4,1fr); } }

        .nl-grid { display:grid; grid-template-columns:1fr; gap:1.75rem; }
        @media(min-width:700px){ .nl-grid { grid-template-columns:1fr 1fr; } }

        .mod-strip { display:flex; flex-direction:column; gap:1rem; }
        @media(min-width:640px){ .mod-strip { flex-direction:row; align-items:center; justify-content:space-between; } }

        .mod-links { display:flex; gap:8px; flex-wrap:wrap; }

        .ftr-row { display:flex; flex-direction:column; align-items:center; text-align:center; gap:0.75rem; }
        @media(min-width:640px){ .ftr-row { flex-direction:row; justify-content:space-between; text-align:left; } }
      `}</style>

      {/* ── Navbar ── */}
      <nav style={{ background: "var(--t950)", borderBottom: "1px solid var(--t800)", position: "sticky", top: 0, zIndex: 50 }}>
        <div className="cw" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
          <a href="/" style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: "#fff", textDecoration: "none", flexShrink: 0 }}>
            One<span style={{ color: "var(--t400)" }}>Rx</span>
          </a>

          <div className="desk-nav">
            {["Home", "About", "OneRx Hub", "Membership", "Contact"].map(l => (
              <a key={l} href="/" className="nlink">{l}</a>
            ))}
            <a href="/login" style={{ background: "var(--t500)", color: "#fff", padding: "0.35rem 0.9rem", borderRadius: 6, fontSize: 13, textDecoration: "none", fontWeight: 600 }}>Login</a>
          </div>

          <button className="hamburger mob-btn" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle navigation">
            <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>

        {menuOpen && (
          <div className="mob-menu">
            {["Home", "About", "OneRx Hub", "Membership", "Contact"].map(l => (
              <a key={l} href="/" className="nlink" style={{ fontSize: 18, fontWeight: 500, paddingBottom: "0.25rem", borderBottom: "1px solid var(--t800)" }} onClick={() => setMenuOpen(false)}>{l}</a>
            ))}
            <a href="/login" style={{ background: "var(--t500)", color: "#fff", padding: "0.7rem 1.2rem", borderRadius: 8, fontSize: 15, textDecoration: "none", fontWeight: 600, textAlign: "center" }} onClick={() => setMenuOpen(false)}>Login</a>
          </div>
        )}
      </nav>

      {/* ── Header ── */}
      <header style={{ background: "linear-gradient(135deg, var(--t950) 0%, #1c0c05 55%, var(--t900) 100%)", borderBottom: "1px solid var(--t800)", padding: "clamp(2rem,6vw,3.5rem) 0 clamp(1.75rem,5vw,3rem)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -80, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle,rgba(154,74,40,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -50, left: -40, width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle,rgba(154,74,40,0.07) 0%,transparent 70%)", pointerEvents: "none" }} />

        <div className="cw" style={{ position: "relative" }}>
          <div style={{ fontSize: 12, color: "var(--t500)", marginBottom: "1.1rem" }}>
            <a href="/" style={{ color: "var(--t500)", textDecoration: "none" }}>OneRx Hub</a>
            <span style={{ margin: "0 6px" }}>/</span>
            <span style={{ color: "var(--t300)" }}>Insights</span>
          </div>

          <div className="hdr-row">
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, marginBottom: "1rem" }}>
                <span style={{ background: "var(--t500)", color: "#fff", padding: "2px 10px", borderRadius: 4, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Pharmacy Intelligence</span>
                <span style={{ color: "var(--t500)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 700 }}>INSIGHTS & NEWS</span>
              </div>
              <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px, 6vw, 52px)", lineHeight: 1.1, marginBottom: "1rem" }}>
                Pharmacy knowledge,<br />
                <span style={{ color: "var(--t400)", fontStyle: "italic" }}>delivered clearly.</span>
              </h1>
              <p style={{ color: "var(--t300)", fontSize: "clamp(14px, 2vw, 17px)", lineHeight: 1.75, maxWidth: 480 }}>
                Compliance updates, operational strategies, and technology insights — written by pharmacists, for independent pharmacy owners across Canada.
              </p>
            </div>

            <div style={{ display: "flex", gap: "clamp(1rem,3vw,2rem)", alignSelf: "flex-end" }}>
              {[["8+","Articles"],["5","Categories"],["Weekly","Updates"]].map(([v,l]) => (
                <div key={l} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(20px,4vw,28px)", fontWeight: 700, color: "var(--t400)" }}>{v}</div>
                  <div style={{ fontSize: 10, color: "var(--t500)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* ── Featured Article ── */}
        <section style={{ background: "var(--t900)", borderBottom: "1px solid var(--t800)", padding: "clamp(1.75rem,4vw,2.75rem) 0" }}>
          <div className="cw">
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.25rem" }}>
              <div style={{ width: 3, height: 16, background: "var(--t500)", borderRadius: 2, flexShrink: 0 }} />
              <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--t500)", fontWeight: 700 }}>Featured Article</span>
            </div>

            <div style={{ background: "var(--t800)", border: "1px solid var(--t700)", borderRadius: 14, overflow: "hidden", boxShadow: "0 0 50px rgba(154,74,40,0.1)" }}>
              <div className="feat-inner">
                <div style={{ padding: "clamp(1.25rem,4vw,2.25rem)", flex: 1 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, marginBottom: "1.1rem" }}>
                    <Badge category={FEATURED.category} />
                    <span style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.45)", padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{FEATURED.tag}</span>
                    <span style={{ color: "var(--t500)", fontSize: 12 }}>{FEATURED.readTime}</span>
                  </div>
                  <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(18px,3.5vw,30px)", lineHeight: 1.25, marginBottom: "0.85rem" }}>
                    {FEATURED.title}
                  </h2>
                  <p style={{ color: "var(--t300)", fontSize: "clamp(13px,1.8vw,15px)", lineHeight: 1.75, marginBottom: "1.5rem", maxWidth: 560 }}>
                    {FEATURED.excerpt}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}>
                    
                    <Link 
                      to={`/insights/${FEATURED.slug}`} 
                      style={{ background: "var(--t500)", color: "#fff", padding: "0.55rem 1.2rem", borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 5 }}
                    >
                      Read Article
                      <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>

                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--t700)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>O</div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{FEATURED.author}</div>
                        <div style={{ fontSize: 11, color: "var(--t500)" }}>{FEATURED.authorRole} · {FEATURED.date}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="feat-tags">
                  {["NAPRA","ACP","NIDR","CQI+"].map(tag => (
                    <div key={tag} style={{ background: "rgba(154,74,40,0.15)", border: "1px solid rgba(154,74,40,0.3)", borderRadius: 6, padding: "6px 14px", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "var(--t300)", textTransform: "uppercase", textAlign: "center", whiteSpace: "nowrap" }}>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Sticky Filter Bar ── */}
        <div style={{ background: "rgba(21,10,4,0.94)", backdropFilter: "blur(14px)", borderBottom: "1px solid var(--t800)", position: "sticky", top: 56, zIndex: 40, padding: "0.85rem 0" }}>
          <div className="cw">
            <div className="filter-bar">
              <div style={{ position: "relative", width: "100%", maxWidth: 220 }}>
                <svg style={{ position: "absolute", left: 9, top: "50%", transform: "translateY(-50%)", color: "var(--t500)", pointerEvents: "none" }} width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input className="s-input" placeholder="Search articles…" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
              </div>

              <div className="pill-row" style={{ flex: 1 }}>
                {CATEGORIES.map(cat => (
                  <button key={cat} onClick={() => setActiveCategory(cat)} className={`pill ${activeCategory === cat ? "pill-on" : "pill-off"}`}>
                    {cat}
                  </button>
                ))}
              </div>

              <span style={{ fontSize: 11, color: "var(--t500)", whiteSpace: "nowrap", flexShrink: 0 }}>
                {filtered.length} article{filtered.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>

        {/* ── Post Grid ── */}
        <section style={{ padding: "clamp(1.75rem,4vw,3rem) 0", background: "var(--t950)" }}>
          <div className="cw">
            {filtered.length === 0 ? (
              <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--t500)" }}>
                <div style={{ fontSize: 36, marginBottom: "1rem" }}>🔍</div>
                <div style={{ fontSize: 18, fontWeight: 600, color: "var(--t300)", marginBottom: 8 }}>No articles found</div>
                <div style={{ fontSize: 14 }}>Try a different search or category.</div>
              </div>
            ) : (
              <div className="post-grid">
                {filtered.map(post => <PostCard key={post.slug} post={post} />)}
              </div>
            )}
          </div>
        </section>

        {/* ── Newsletter ── */}
        <section style={{ background: "var(--t800)", borderTop: "1px solid var(--t700)", padding: "clamp(2rem,5vw,3rem) 0" }}>
          <div className="cw">
            <div className="nl-grid">
              <div>
                <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--t500)", fontWeight: 700, marginBottom: "0.6rem" }}>Stay Informed</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(19px,3vw,26px)", marginBottom: "0.65rem" }}>
                  Pharmacy insights, delivered weekly.
                </h3>
                <p style={{ color: "var(--t400)", fontSize: 14, lineHeight: 1.7 }}>
                  Compliance updates, operational strategies, and OneRx product news — no fluff, no spam. Built for busy pharmacists.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 10 }}>
                <div style={{ display: "flex", gap: 8 }}>
                  <input className="nl-input" placeholder="your@pharmacy.ca" />
                  <button style={{ background: "var(--t500)", color: "#fff", border: "none", padding: "0 1.1rem", borderRadius: 8, fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0 }}>
                    Subscribe
                  </button>
                </div>
                <p style={{ color: "var(--t500)", fontSize: 12 }}>🔒 Canada-hosted. Unsubscribe anytime. No data sharing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Module Strip ── */}
        <section style={{ background: "var(--t950)", borderTop: "1px solid var(--t800)", padding: "clamp(1.5rem,4vw,2.25rem) 0" }}>
          <div className="cw">
            <div className="mod-strip">
              <div>
                <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(14px,2.5vw,19px)", fontStyle: "italic", marginBottom: 4 }}>
                  "The check signals resolution, not crisis."
                </p>
                <p style={{ color: "var(--t500)", fontSize: 12 }}>— OneRx Brand Kit, Rx Incident</p>
              </div>
              <div className="mod-links">
                {[["Rx Intelligence","/rx-intelligence"],["Rx Manager","/rx-manager"],["Rx Incident","/rx-incident"],["Rx Suite","/rx-suite"]].map(([label, to]) => (
                  <a key={label} href={to} className="mlink">{label}</a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer style={{ background: "#0a0402", borderTop: "1px solid var(--t900)", padding: "1.75rem 0" }}>
        <div className="cw">
          <div className="ftr-row">
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 700 }}>
              One<span style={{ color: "var(--t500)" }}>Rx</span>
            </div>
            <div style={{ color: "var(--t600)", fontSize: 12 }}>© 2026 OneRx. Canada-hosted. Pharmacy-first.</div>
            <div style={{ display: "flex", gap: "1.1rem" }}>
              {["Privacy","Terms","Contact"].map(l => (
                <a key={l} href="#" className="flink">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}