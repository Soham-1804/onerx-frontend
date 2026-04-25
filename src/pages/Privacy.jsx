import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

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

  const CheckIcon = () => (
    <svg style={iconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  );

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
            Privacy Policy
          </h1>
          <p style={{ color: theme.colors.textMuted, fontSize: '1.125rem', lineHeight: '1.7', margin: '0 auto', maxWidth: '600px' }}>
            How we protect your information, secure your data, and safeguard your independent pharmacy.
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
                Welcome to OneRx. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://www.myonerx.ca/" style={{ color: theme.colors.accent, textDecoration: 'none' }}>https://www.myonerx.ca/</a> or use our services.
              </p>
              <p style={textStyle}>
                Please read this policy carefully to understand how we handle your personal data.
              </p>
            </div>

            {/* 1. Information We Collect */}
            <div style={bottomBorder}>
              <h2 style={sectionTitleStyle}>1. Information We Collect</h2>
              
              <h3 style={{ color: theme.colors.textMain, fontSize: '1.125rem', fontWeight: '500', marginBottom: '16px' }}>a. Personal Information</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                {['Full name', 'Email address', 'Phone number', 'Subject / Inquiry details', 'Business or pharmacy name', 'Postal address'].map((item, i) => (
                  <li key={i} style={listItemStyle}><DotIcon /> {item}</li>
                ))}
              </ul>

              <h3 style={{ color: theme.colors.textMain, fontSize: '1.125rem', fontWeight: '500', marginBottom: '16px' }}>b. Technical and Usage Information</h3>
              <p style={textStyle}>When you access our site, we may collect:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                {['IP address', 'Browser type and version', 'Device information', 'Operating system', 'Date/time of access', 'Pages visited'].map((item, i) => (
                  <li key={i} style={listItemStyle}><DotIcon /> {item}</li>
                ))}
              </ul>

              <h3 style={{ color: theme.colors.textMain, fontSize: '1.125rem', fontWeight: '500', marginBottom: '16px' }}>c. Cookies and Tracking Technologies</h3>
              <p style={{ ...textStyle, marginBottom: 0 }}>We use cookies and similar tracking technologies to track activity on our service and hold certain information to improve your experience.</p>
            </div>

            {/* 2. How We Use Your Information */}
            <div style={bottomBorder}>
              <h2 style={sectionTitleStyle}>2. How We Use Your Information</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'To provide and manage our services',
                  'To respond to your inquiries or customer service requests',
                  'To personalize your user experience',
                  'To send transactional or marketing emails (with your consent)',
                  'To improve website performance and analytics',
                  'To comply with legal obligations'
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}><CheckIcon /> {item}</li>
                ))}
              </ul>
            </div>

            {/* 3. How We Share Your Information */}
            <div style={bottomBorder}>
              <h2 style={sectionTitleStyle}>3. How We Share Your Information</h2>
              <p style={textStyle}>We do not sell your personal data. We may share information with:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Trusted third-party vendors (e.g., IT providers, email marketing platforms)',
                  'Trusted processors, for subscription billing',
                  'Trusted bodies, if required by law or legal process',
                  'Business partners, with your consent, as part of service delivery'
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}><DotIcon /> {item}</li>
                ))}
              </ul>
            </div>

            {/* 4. Data Security */}
            <div style={bottomBorder}>
              <h2 style={sectionTitleStyle}>4. Data Security</h2>
              <p style={textStyle}>We use administrative, technical, and physical security measures to help protect your personal information, including:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={listItemStyle}><CheckIcon /> Regular system audits and updates</li>
                <li style={listItemStyle}><CheckIcon /> Secure data encryption and strict access controls</li>
              </ul>
            </div>

            {/* 5. Your Rights and Choices */}
            <div style={bottomBorder}>
              <h2 style={sectionTitleStyle}>5. Your Rights and Choices</h2>
              <p style={textStyle}>You have the right to:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Access or correct your personal information',
                  'Withdraw consent for marketing communications',
                  'Request data deletion, subject to legal and business requirements',
                  'File a complaint with a privacy authority if you believe your data is being misused'
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}><CheckIcon /> {item}</li>
                ))}
              </ul>
            </div>

            {/* 6. Data Retention */}
            <div style={bottomBorder}>
              <h2 style={sectionTitleStyle}>6. Data Retention</h2>
              <p style={{ ...textStyle, marginBottom: 0 }}>
                We retain personal data only as long as necessary to fulfill the purposes outlined in this policy, comply with our legal obligations, and maintain secure backups.
              </p>
            </div>

            {/* 7 & 8. Third-Party Links & Data Transfers */}
            <div style={bottomBorder}>
              <h2 style={sectionTitleStyle}>7. Third-Party Links & Data Transfers</h2>
              <p style={{ ...textStyle, marginBottom: 0 }}>
                While our operations are based in Canada, some data may be processed or stored in other jurisdictions. We ensure that appropriate safeguards are in place for such transfers to maintain your data privacy.
              </p>
            </div>

            {/* 9. Updates to This Policy */}
            <div style={bottomBorder}>
              <h2 style={sectionTitleStyle}>8. Updates to This Policy</h2>
              <p style={{ ...textStyle, marginBottom: 0 }}>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Please review this page periodically to stay informed.
              </p>
            </div>

            {/* 10. Contact Us */}
            <div>
              <h2 style={sectionTitleStyle}>9. Contact Us</h2>
              <p style={textStyle}>
                If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.05)', padding: '16px 24px', borderRadius: '8px', border: `1px solid ${theme.colors.border}` }}>
                <svg style={{ width: '24px', height: '24px', color: theme.colors.accent, marginRight: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <div>
                  <p style={{ margin: '0 0 4px 0', fontSize: '0.875rem', color: theme.colors.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em' }}>OneRx Privacy Team</p>
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
              Take the next step in transforming your pharmacy's future.
            </h2>
            <button 
              onClick={() => navigate('/pricing')}
              style={{ 
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