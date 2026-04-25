import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function RxBrands() {
  // 🎨 BULLETPROOF THEME CONFIGURATION 
  const theme = {
    colors: {
      background: '#1a0d08',
      accent: '#df7e5a',
      cardBg: 'rgba(255, 255, 255, 0.03)',
      border: 'rgba(255, 255, 255, 0.08)',
      inputBg: 'rgba(0, 0, 0, 0.2)',
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
    }
  };

  const glassCard = {
    ...theme.layout.card,
    backgroundColor: theme.colors.cardBg,
    border: `1px solid ${theme.colors.border}`,
    position: 'relative',
    overflow: 'hidden'
  };

  const inputStyle = {
    width: '100%',
    backgroundColor: theme.colors.inputBg,
    border: `1px solid ${theme.colors.border}`,
    color: theme.colors.textMain,
    fontFamily: theme.fonts.body,
    fontSize: '1rem',
    padding: '16px 20px',
    borderRadius: '8px',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  };

  const [isHovered, setIsHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.title = "Rx Brands | Coming Soon | OneRx";
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="page-fade" style={{ backgroundColor: theme.colors.background, color: theme.colors.textMain, fontFamily: theme.fonts.body, minHeight: '100vh', opacity: visible ? 1 : 0, transition: 'opacity 0.5s' }}>
      <Navigation />

      {/* 1. HERO SECTION */}
      <section style={{ paddingTop: '180px', paddingBottom: '64px' }}>
        <div style={{ ...theme.layout.container, textAlign: 'center', maxWidth: '800px' }}>
          
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: "16px" }}>
            <span style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${theme.colors.border}`, color: theme.colors.textMain, padding: "4px 12px", borderRadius: 6, fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Module Preview
            </span>
            <span style={{ background: "rgba(223, 126, 90, 0.15)", border: `1px solid ${theme.colors.accent}40`, color: theme.colors.accent, padding: "4px 12px", borderRadius: 6, fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              In Development
            </span>
          </div>

          <h1 style={{ fontFamily: theme.fonts.display, fontSize: '3.5rem', fontWeight: '500', lineHeight: '1.1', margin: '0 0 24px 0' }}>
            Rx Brands
          </h1>
          <p style={{ color: theme.colors.textMuted, fontSize: '1.125rem', lineHeight: '1.7', margin: '0 auto', maxWidth: '600px' }}>
            Generic molecule selection, brand comparison, and true net cost transparency — mapped perfectly to your vendor contracts.
          </p>
        </div>
      </section>

      {/* 2. COMING SOON CONTENT */}
      <section style={{ paddingBottom: '128px' }}>
        <div style={{ ...theme.layout.container, maxWidth: '1200px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '48px', alignItems: 'flex-start' }}>
            
            {/* LEFT COLUMN: Info */}
            <div style={{ padding: '24px 0' }}>
              <div style={glassCard}>
                <div style={{ 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    width: '56px', height: '56px', borderRadius: '50%', 
                    backgroundColor: 'rgba(223, 126, 90, 0.15)', 
                    marginBottom: '24px'
                  }}>
                  <svg style={{ width: '24px', height: '24px', color: theme.colors.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>

                <h3 style={{ fontFamily: theme.fonts.display, fontSize: '1.75rem', fontWeight: '500', marginBottom: '16px', marginTop: 0 }}>
                  Coming Soon.
                </h3>
                
                <p style={{ color: theme.colors.textMuted, fontSize: '1rem', lineHeight: '1.7', marginBottom: '32px' }}>
                  We are building an intelligent procurement tool that stops you from manually juggling vendor catalogs. Enter your email to join the waitlist and gain early access to Rx Brands.
                </p>

                <div style={{ borderTop: `1px solid ${theme.colors.divider}`, paddingTop: '32px' }}>
                  <Link to="/" style={{ color: theme.colors.accent, textDecoration: 'none', fontSize: '1rem', fontWeight: '500', display: 'inline-flex', alignItems: 'center' }}>
                    <svg style={{ width: '16px', height: '16px', marginRight: '8px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Return to Hub
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Waitlist Form */}
            <div style={glassCard}>
               {/* Top highlight bar */}
               <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', backgroundColor: theme.colors.accent }}></div>
               
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                {/* Email Field */}
                <div>
                  <label htmlFor="email" style={{ display: 'block', color: theme.colors.textMain, fontSize: '0.875rem', fontWeight: '500', marginBottom: '8px', fontFamily: theme.fonts.body }}>
                    Email address *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your pharmacy email" 
                    required 
                    style={inputStyle} 
                    onFocus={(e) => e.target.style.borderColor = theme.colors.accent}
                    onBlur={(e) => e.target.style.borderColor = theme.colors.border}
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{ 
                    marginTop: '8px',
                    backgroundColor: isHovered ? '#ffffff' : theme.colors.accent, 
                    color: isHovered ? '#1a0d08' : '#ffffff', 
                    fontFamily: theme.fonts.body, 
                    fontSize: '1rem', 
                    fontWeight: 'bold', 
                    padding: '20px 32px', 
                    borderRadius: '8px', 
                    border: 'none', 
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    width: '100%'
                  }}
                >
                  JOIN WAITLIST
                  <span style={{ 
                    marginLeft: '12px', 
                    transform: isHovered ? 'translateX(4px)' : 'translateX(0)', 
                    transition: 'transform 0.3s ease' 
                  }}>
                    →
                  </span>
                </button>

                <p style={{ color: theme.colors.textMuted, fontSize: '0.75rem', textAlign: 'center', margin: 0 }}>
                  🔒 Canada-hosted. Unsubscribe anytime. No data sharing.
                </p>

              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}