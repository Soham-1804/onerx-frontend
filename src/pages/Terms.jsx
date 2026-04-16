import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function TermsAndConditions() {
  // 🎨 BULLETPROOF THEME CONFIGURATION 
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
      container: { maxWidth: '1000px', margin: '0 auto', padding: '0 24px', width: '100%', boxSizing: 'border-box' },
      card: { padding: '56px 64px', borderRadius: '16px', boxSizing: 'border-box' },
    }
  };

  const glassCard = {
    ...theme.layout.card,
    backgroundColor: theme.colors.cardBg,
    border: `1px solid ${theme.colors.border}`,
  };
  
  const bottomBorder = { borderBottom: `1px solid ${theme.colors.divider}`, paddingBottom: '40px', marginBottom: '40px' };

  const sectionTitleStyle = {
    fontFamily: theme.fonts.display,
    fontSize: '1.75rem',
    fontWeight: '500',
    color: theme.colors.textMain,
    marginBottom: '20px',
    marginTop: 0
  };

  const textStyle = {
    color: theme.colors.textMuted,
    fontSize: '1.125rem',
    lineHeight: '1.8',
    marginBottom: '24px',
    fontFamily: theme.fonts.body
  };

  const listItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '16px',
    color: theme.colors.textMuted,
    fontSize: '1.125rem',
    lineHeight: '1.6'
  };

  const iconStyle = {
    width: '20px',
    height: '20px',
    color: theme.colors.accent,
    marginRight: '16px',
    marginTop: '4px',
    flexShrink: 0
  };

  const DotIcon = () => (
    <div style={{ ...iconStyle, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: theme.colors.accent }}></div>
    </div>
  );

  return (
    <div className="page-fade" style={{ backgroundColor: theme.colors.background, color: theme.colors.textMain, fontFamily: theme.fonts.body, minHeight: '100vh' }}>
      <Navigation />

      {/* 1. HERO SECTION */}
      <section style={{ paddingTop: '180px', paddingBottom: '64px' }}>
        <div style={{ ...theme.layout.container, textAlign: 'center', maxWidth: '800px' }}>
          <p style={{ color: theme.colors.accent, fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Legal Information
          </p>
          <h1 style={{ fontFamily: theme.fonts.display, fontSize: '3.5rem', fontWeight: '500', lineHeight: '1.1', margin: '0 0 24px 0' }}>
            Terms & Conditions
          </h1>
          <p style={{ color: theme.colors.textMuted, fontSize: '1.125rem', lineHeight: '1.7', margin: '0 auto', maxWidth: '600px' }}>
            Understand our service guidelines and the terms governing your use of the OneRx platform.
          </p>
        </div>
      </section>

      {/* 2. POLICY CONTENT */}
      <section style={{ paddingBottom: '128px' }}>
        <div style={theme.layout.container}>
          <div style={{ ...glassCard, position: 'relative', overflow: 'hidden' }}>
            {/* Top highlight bar */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', backgroundColor: theme.colors.accent }}></div>
            
            {/* Introduction */}
            <div style={bottomBorder}>
              <p style={{ ...textStyle, fontSize: '1.25rem', color: theme.colors.textMain }}>
                Welcome to OneRx. By accessing our website <a href="https://www.myonerx.ca/" style={{ color: theme.colors.accent, textDecoration: 'none' }}>https://www.myonerx.ca/</a> or using our services, you agree to be bound by the following terms and conditions. [cite: 351]
              </p>
              <p style={textStyle}>
                Please read them carefully.
              </p>
            </div>

            {/* 1. Acceptance of Terms */}
            <div style={bottomBorder}>
              <h2 style={sectionTitleStyle}>1. Acceptance of Terms</h2>
              <p style={textStyle}>
                OneRx offers pharmacy-focused digital solutions including website creation, digital marketing, VoIP systems, eFax services, workflow automation, and cybersecurity protection. [cite: 357] All services are subject to change or discontinuation at our sole discretion. [cite: 358]
              </p>
            </div>

            {/* 3. User Responsibilities */}
            <div style={bottomBorder}>
              <h2 style={sectionTitleStyle}>3. User Responsibilities</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                <li style={listItemStyle}>
                  <DotIcon /> 
                  <span>You agree to provide accurate and current information when registering or using our services. [cite: 360]</span>
                </li>
                <li style={listItemStyle}>
                  <DotIcon /> 
                  <span>You are responsible for maintaining the confidentiality of your account information. [cite: 361]</span>
                </li>
                <li style={listItemStyle}>
                  <DotIcon /> 
                  <span>You agree not to misuse or interfere with our services or access them using a method other than the interface provided. [cite: 362]</span>
                </li>
              </ul>
            </div>

            {/* 4. Intellectual Property */}
            <div style={bottomBorder}>
              <h2 style={sectionTitleStyle}>4. Intellectual Property </h2>
              <p style={textStyle}>
                All content, trademarks, and technology on our site are the property of OneRx or its licensors. [cite: 364] You may not copy, reproduce, or distribute any content without prior written permission. [cite: 365]
              </p>
            </div>

            {/* 5. Subscription & Payment */}
            <div style={bottomBorder}>
              <h2 style={sectionTitleStyle}>5. Subscription & Payment </h2>
              <p style={textStyle}>
                Some services may require a subscription or payment. By subscribing, you agree to pay all applicable fees and taxes and abide by the billing terms provided at checkout. [cite: 367]
              </p>
            </div>

            {/* 7. Disclaimers */}
            <div style={bottomBorder}>
              <h2 style={sectionTitleStyle}>7. Disclaimers </h2>
              <p style={textStyle}>
                Our services are provided "as is" and "as available." We do not guarantee uninterrupted or error-free service. [cite: 373] We are not responsible for delays, inaccuracies, or failures caused by external systems or user error. [cite: 374]
              </p>
            </div>

            {/* 8. Limitation of Liability */}
            <div style={bottomBorder}>
              <h2 style={sectionTitleStyle}>8. Limitation of Liability </h2>
              <p style={textStyle}>
                OneRx shall not be liable for any indirect, incidental, or consequential damages arising out of your use or inability to use our services, even if we have been advised of the possibility of such damages.
              </p>
            </div>

            {/* 9. Changes to Terms */}
            <div style={bottomBorder}>
              <h2 style={sectionTitleStyle}>9. Changes to Terms </h2>
              <p style={textStyle}>
                We may update these Terms & Conditions at any time. Changes will be posted on this page with a revised effective date. Continued use of our services after changes implies your acceptance of the revised terms.
              </p>
            </div>

            {/* 10. Governing Law */}
            <div style={bottomBorder}>
              <h2 style={sectionTitleStyle}>10. Governing Law </h2>
              <p style={textStyle}>
                Specific jurisdictional guidelines and governing laws apply to the use of OneRx services across Canada.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 style={sectionTitleStyle}>Contact Us</h2>
              <p style={textStyle}>
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.05)', padding: '16px 24px', borderRadius: '8px', border: `1px solid ${theme.colors.border}` }}>
                <svg style={{ width: '24px', height: '24px', color: theme.colors.accent, marginRight: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <div>
                  <p style={{ margin: '0 0 4px 0', fontSize: '0.875rem', color: theme.colors.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em' }}>OneRx Legal Team</p>
                  <a href="mailto:admin@myonerx.ca" style={{ margin: 0, fontSize: '1.125rem', fontWeight: '500', color: theme.colors.textMain, textDecoration: 'none' }}>
                    admin@myonerx.ca
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: '0 0 128px 0' }}>
        <div style={{ ...theme.layout.container, textAlign: 'center', maxWidth: '800px' }}>
          <div style={{ ...glassCard, padding: '64px 48px', border: `1px solid ${theme.colors.accent}40` }}>
            <h2 style={{ fontFamily: theme.fonts.display, fontSize: '2rem', fontWeight: '500', lineHeight: '1.3', marginBottom: '32px', marginTop: 0, color: theme.colors.textMain }}>
              TAKE THE NEXT STEP IN TRANSFORMING YOUR PHARMACY'S FUTURE.
            </h2>
            <button style={{ 
              backgroundColor: theme.colors.accent, 
              color: '#ffffff', 
              fontFamily: theme.fonts.body, 
              fontSize: '1rem', 
              fontWeight: 'bold', 
              padding: '16px 32px', 
              borderRadius: '50px', 
              border: 'none', 
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              transition: 'transform 0.2s ease'
            }}>
              BECOME A MEMBER
              <svg style={{ width: '20px', height: '20px', marginLeft: '12px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}