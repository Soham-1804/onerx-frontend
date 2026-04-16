import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function About() {
  // 🎨 BULLETPROOF THEME & LAYOUT CONFIGURATION 
  // Hardcoding these values guarantees the layout will not break, 
  // completely bypassing your missing Tailwind utilities.
  const theme = {
    colors: {
      background: '#1a0d08',
      accent: '#df7e5a',
      cardBg: 'rgba(255, 255, 255, 0.03)',
      border: 'rgba(255, 255, 255, 0.08)',
      divider: 'rgba(255, 255, 255, 0.05)',
      textMain: 'rgba(255, 255, 255, 0.95)',
      textMuted: 'rgba(255, 255, 255, 0.65)',
    },
    fonts: {
      display: '"DM Sans", sans-serif',
      body: '"Inter", sans-serif',
    },
    layout: {
      sectionPadding: '96px 0',
      container: { maxWidth: '1080px', margin: '0 auto', padding: '0 24px', width: '100%', boxSizing: 'border-box' },
      card: { padding: '48px', borderRadius: '16px', boxSizing: 'border-box' },
      iconMargin: '16px'
    }
  };

  // Reusable style objects
  const glassCard = {
    ...theme.layout.card,
    backgroundColor: theme.colors.cardBg,
    border: `1px solid ${theme.colors.border}`,
  };
  
  const bottomBorder = { borderBottom: `1px solid ${theme.colors.divider}` };

  return (
    <div className="page-fade" style={{ backgroundColor: theme.colors.background, color: theme.colors.textMain, fontFamily: theme.fonts.body, minHeight: '100vh' }}>
      <Navigation />

      {/* 1. HERO SECTION */}
      <section style={{ paddingTop: '180px', paddingBottom: '96px', ...bottomBorder }}>
        <div style={{ ...theme.layout.container, textAlign: 'center', maxWidth: '800px' }}>
          <h1 style={{ fontFamily: theme.fonts.display, fontSize: '3.5rem', fontWeight: '500', lineHeight: '1.1', margin: '0 0 24px 0' }}>
            We Didn’t Start a Company.
            <span style={{ display: 'block', color: theme.colors.accent, marginTop: '12px' }}>
              We Started a Correction.
            </span>
          </h1>
          <p style={{ color: theme.colors.textMuted, fontSize: '1.125rem', lineHeight: '1.7', margin: '0 auto', maxWidth: '600px' }}>
            OneRx was built to correct a structure that quietly stripped independence
            away from the very pharmacies that built Canadian healthcare.
          </p>
        </div>
      </section>

      {/* 2. OUR MANDATE */}
      <section style={{ padding: theme.layout.sectionPadding }}>
        <div style={theme.layout.container}>
          <div style={{ ...glassCard, position: 'relative', overflow: 'hidden' }}>
            {/* Top highlight bar */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', backgroundColor: theme.colors.accent }}></div>
            
            <p style={{ color: theme.colors.accent, fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Our Mandate
            </p>
            <h2 style={{ fontFamily: theme.fonts.display, fontSize: '2.5rem', fontWeight: '500', marginBottom: '24px', marginTop: 0 }}>
              Why We Exist
            </h2>
            <p style={{ color: theme.colors.textMuted, fontSize: '1.25rem', marginBottom: '48px', maxWidth: '600px' }}>
              The system isn’t broken — it’s working exactly as designed.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <svg style={{ color: theme.colors.accent, width: '24px', height: '24px', marginRight: theme.layout.iconMargin, flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                  <span style={{ fontSize: '1.125rem' }}>Hidden margins layered between pharmacy and manufacturer</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <svg style={{ color: theme.colors.accent, width: '24px', height: '24px', marginRight: theme.layout.iconMargin, flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
                  </svg>
                  <span style={{ fontSize: '1.125rem' }}>Benefits filtered before reaching the counter</span>
                </li>
              </ul>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <svg style={{ color: theme.colors.accent, width: '24px', height: '24px', marginRight: theme.layout.iconMargin, flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                  <span style={{ fontSize: '1.125rem' }}>Compliance programs disguised as “support”</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <svg style={{ color: theme.colors.accent, width: '24px', height: '24px', marginRight: theme.layout.iconMargin, flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span style={{ fontSize: '1.125rem' }}>“Free” services silently funded with pharmacy profits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LOCKED MECHANICS */}
      <section style={{ padding: theme.layout.sectionPadding, ...bottomBorder }}>
        <div style={theme.layout.container}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 64px auto' }}>
            <p style={{ color: theme.colors.accent, fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Behind the Door
            </p>
            <h2 style={{ fontFamily: theme.fonts.display, fontSize: '2.5rem', fontWeight: '500', marginBottom: '24px', marginTop: 0 }}>
              The Locked Mechanics
            </h2>
            <p style={{ color: theme.colors.textMuted, fontSize: '1.125rem', lineHeight: '1.7' }}>
              That door concealed the contracts, pricing structures, and benefits flows
              that determined pharmacy economics without the pharmacy ever being invited inside.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={glassCard}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', flexDirection: 'column', paddingBottom: '32px', marginBottom: '32px', ...bottomBorder }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: '500', marginBottom: '8px' }}>Pricing negotiations</span>
                  <span style={{ color: theme.colors.accent, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold' }}>You never see</span>
                </li>
                <li style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: '500', marginBottom: '8px' }}>Rebate calculations</span>
                  <span style={{ color: theme.colors.accent, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold' }}>You never validate</span>
                </li>
              </ul>
            </div>

            <div style={glassCard}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', flexDirection: 'column', paddingBottom: '32px', marginBottom: '32px', ...bottomBorder }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: '500', marginBottom: '8px' }}>Preferred products</span>
                  <span style={{ color: theme.colors.accent, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold' }}>Chosen without your input</span>
                </li>
                <li style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: '500', marginBottom: '8px' }}>Compliance mandates</span>
                  <span style={{ color: theme.colors.accent, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold' }}>Protect everyone but you</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE INFRASTRUCTURE */}
      <section style={{ padding: theme.layout.sectionPadding, ...bottomBorder }}>
        <div style={theme.layout.container}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', gap: '32px' }}>
            <div style={{ maxWidth: '600px' }}>
              <p style={{ color: theme.colors.accent, fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>
                The Infrastructure
              </p>
              <h2 style={{ fontFamily: theme.fonts.display, fontSize: '2.5rem', fontWeight: '500', margin: 0 }}>
                The Operating System for Independent Pharmacy
              </h2>
            </div>
            <div style={{ maxWidth: '300px', paddingLeft: '24px', borderLeft: `2px solid ${theme.colors.border}` }}>
              <p style={{ color: theme.colors.textMuted, fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
                We looked at the industry and asked a dangerous question: 
                <span style={{ display: 'block', color: theme.colors.textMain, fontWeight: '500', marginTop: '8px' }}>What happens if we turn the lights on?</span>
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={glassCard}>
              <h3 style={{ fontFamily: theme.fonts.display, fontSize: '2rem', fontWeight: '500', marginBottom: '40px', marginTop: 0 }}>Enterprise Power</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '1.125rem' }}>
                <li style={{ display: 'flex', alignItems: 'center' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.colors.accent, marginRight: theme.layout.iconMargin }}></div> Same purchasing intelligence as chains</li>
                <li style={{ display: 'flex', alignItems: 'center' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.colors.accent, marginRight: theme.layout.iconMargin }}></div> Same negotiating leverage</li>
                <li style={{ display: 'flex', alignItems: 'center' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.colors.accent, marginRight: theme.layout.iconMargin }}></div> Same data transparency</li>
              </ul>
            </div>

            <div style={glassCard}>
              <h3 style={{ fontFamily: theme.fonts.display, fontSize: '2rem', fontWeight: '500', marginBottom: '40px', marginTop: 0 }}>Key Features</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '1.125rem' }}>
                <li style={{ display: 'flex', alignItems: 'center' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.colors.accent, marginRight: theme.layout.iconMargin }}></div> Real-time pricing visibility</li>
                <li style={{ display: 'flex', alignItems: 'center' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.colors.accent, marginRight: theme.layout.iconMargin }}></div> Molecular cost optimization</li>
                <li style={{ display: 'flex', alignItems: 'center' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.colors.accent, marginRight: theme.layout.iconMargin }}></div> Automation tools & Rebate auditing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WE ARE / WE ARE NOT */}
      <section style={{ padding: theme.layout.sectionPadding, ...bottomBorder }}>
        <div style={theme.layout.container}>
          <p style={{ color: theme.colors.accent, fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', marginBottom: '64px' }}>
            Our Role in the Ecosystem
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={glassCard}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '32px', display: 'flex', alignItems: 'center', marginTop: 0 }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(223, 126, 90, 0.15)', marginRight: '16px' }}>
                  <svg style={{ width: '16px', height: '16px', color: theme.colors.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                We Are
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1.125rem' }}>
                {['Operating system for pharmacy', 'Analytics platform', 'Negotiation engine', 'Neutral connector'].map((item, i, arr) => (
                  <li key={i} style={{ padding: '20px 0', ...(i === arr.length - 1 ? {} : bottomBorder) }}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={{ ...glassCard, opacity: 0.8 }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '32px', display: 'flex', alignItems: 'center', color: theme.colors.textMuted, marginTop: 0 }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.05)', marginRight: '16px' }}>
                  <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                We Are Not
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1.125rem', color: theme.colors.textMuted }}>
                {['A banner', 'A wholesaler', 'A broker', 'A compliance enforcer'].map((item, i, arr) => (
                  <li key={i} style={{ padding: '20px 0', ...(i === arr.length - 1 ? {} : bottomBorder) }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BUSINESS MODEL (THE PLEDGE) */}
      <section style={{ padding: theme.layout.sectionPadding, ...bottomBorder }}>
        <div style={{ ...theme.layout.container, textAlign: 'center' }}>
          <p style={{ color: theme.colors.accent, fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>
            The OneRx Pledge
          </p>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: '2.5rem', fontWeight: '500', marginBottom: '24px', marginTop: 0 }}>
            Our Business Model Is Our Ethics
          </h2>
          <p style={{ color: theme.colors.textMuted, fontSize: '1.25rem', marginBottom: '64px' }}>
            We work for pharmacies, not others.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', textAlign: 'left' }}>
            <div style={{ ...theme.layout.card, border: `1px solid ${theme.colors.border}` }}>
              <h3 style={{ color: theme.colors.textMuted, fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '32px', marginTop: 0 }}>
                The Problem with "Free"
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1.125rem' }}>
                {['Hidden markups', 'Vendor incentives', 'You become the product'].map((item, i, arr) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', padding: '20px 0', ...(i === arr.length - 1 ? {} : bottomBorder) }}>
                    <span style={{ color: 'rgba(255,255,255,0.2)', marginRight: '20px', fontWeight: 'bold' }}>—</span>
                    <span style={{ color: theme.colors.textMuted }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={glassCard}>
              <h3 style={{ color: theme.colors.textMain, fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '32px', marginTop: 0 }}>
                Our Transparent Model
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1.125rem' }}>
                {['No hidden spreads', 'No kickbacks', 'No rebate skim', 'Full transparency'].map((item, i, arr) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', ...(i === arr.length - 1 ? {} : bottomBorder) }}>
                    <span>{item}</span>
                    <svg style={{ color: theme.colors.accent, width: '20px', height: '20px', flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p style={{ color: theme.colors.accent, fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.3em', marginTop: '80px' }}>
            100% transparency — or we don’t participate.
          </p>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section style={{ padding: '128px 0' }}>
        <div style={{ ...theme.layout.container, textAlign: 'center', maxWidth: '800px' }}>
          <p style={{ color: theme.colors.accent, fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '32px' }}>
            A Founder’s Stand
          </p>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: '2.5rem', fontWeight: '500', lineHeight: '1.2', marginBottom: '48px', marginTop: 0 }}>
            “Shopify didn’t build its empire by taxing small businesses — it built it by giving them infrastructure.”
          </h2>
          <button style={{ 
            backgroundColor: '#ffffff', 
            color: '#1a0d08', 
            fontFamily: theme.fonts.body, 
            fontSize: '1rem', 
            fontWeight: 'bold', 
            padding: '20px 40px', 
            borderRadius: '50px', 
            border: 'none', 
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center'
          }}>
            Welcome to OneRx 
            <svg style={{ width: '20px', height: '20px', marginLeft: '12px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}