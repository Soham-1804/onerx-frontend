import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Contact() {
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

  const labelStyle = {
    display: 'block',
    color: theme.colors.textMain,
    fontSize: '0.875rem',
    fontWeight: '500',
    marginBottom: '8px',
    fontFamily: theme.fonts.body,
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="page-fade" style={{ backgroundColor: theme.colors.background, color: theme.colors.textMain, fontFamily: theme.fonts.body, minHeight: '100vh' }}>
      <Navigation />

      {/* 1. HERO SECTION */}
      <section style={{ paddingTop: '180px', paddingBottom: '64px' }}>
        <div style={{ ...theme.layout.container, textAlign: 'center', maxWidth: '800px' }}>
          <p style={{ color: theme.colors.accent, fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Get in touch
          </p>
          <h1 style={{ fontFamily: theme.fonts.display, fontSize: '3.5rem', fontWeight: '500', lineHeight: '1.1', margin: '0 0 24px 0' }}>
            How can we help you?
          </h1>
          <p style={{ color: theme.colors.textMuted, fontSize: '1.125rem', lineHeight: '1.7', margin: '0 auto', maxWidth: '600px' }}>
            Whether you have questions about our modules, need technical support, or want to join the network, our team is ready to assist.
          </p>
        </div>
      </section>

      {/* 2. CONTACT CONTENT */}
      <section style={{ paddingBottom: '128px' }}>
        <div style={{ ...theme.layout.container, maxWidth: '1200px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '48px', alignItems: 'flex-start' }}>
            
            {/* LEFT COLUMN: Contact Info */}
            <div style={{ padding: '24px 0' }}>
              <div style={glassCard}>
                <h3 style={{ fontFamily: theme.fonts.display, fontSize: '1.5rem', fontWeight: '500', marginBottom: '24px', marginTop: 0 }}>
                  Direct Contact
                </h3>
                
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px' }}>
                  <div style={{ 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    width: '48px', height: '48px', borderRadius: '50%', 
                    backgroundColor: 'rgba(223, 126, 90, 0.15)', 
                    marginRight: '20px', flexShrink: 0
                  }}>
                    <svg style={{ width: '20px', height: '20px', color: theme.colors.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontSize: '0.875rem', color: theme.colors.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email Us</p>
                    <a href="mailto:admin@myonerx.ca" style={{ margin: 0, fontSize: '1.125rem', fontWeight: '500', color: theme.colors.textMain, textDecoration: 'none' }}>
                      admin@myonerx.ca
                    </a>
                  </div>
                </div>

                <div style={{ borderTop: `1px solid ${theme.colors.divider}`, paddingTop: '32px', marginTop: '32px' }}>
                  <h4 style={{ margin: '0 0 16px 0', fontSize: '1rem', fontWeight: '500', color: theme.colors.textMain }}>Support Hours</h4>
                  <p style={{ margin: '0 0 8px 0', color: theme.colors.textMuted }}>Monday - Friday</p>
                  <p style={{ margin: 0, color: theme.colors.textMain, fontWeight: '500' }}>9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div style={glassCard}>
               {/* Top highlight bar */}
               <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', backgroundColor: theme.colors.accent }}></div>
               
              <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                {/* Email Field */}
                <div>
                  <label htmlFor="email" style={labelStyle}>Email address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email address" 
                    required 
                    style={inputStyle} 
                    onFocus={(e) => e.target.style.borderColor = theme.colors.accent}
                    onBlur={(e) => e.target.style.borderColor = theme.colors.border}
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" style={labelStyle}>Phone number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="Enter your phone number" 
                    required 
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = theme.colors.accent}
                    onBlur={(e) => e.target.style.borderColor = theme.colors.border}
                  />
                </div>

                {/* Subject Dropdown */}
                <div>
                  <label htmlFor="subject" style={labelStyle}>Subject *</label>
                  <div style={{ position: 'relative' }}>
                    <select 
                      id="subject" 
                      required 
                      style={{ 
                        ...inputStyle, 
                        appearance: 'none', 
                        cursor: 'pointer',
                        color: theme.colors.textMuted // Slightly muted until selected
                      }}
                      onFocus={(e) => e.target.style.borderColor = theme.colors.accent}
                      onBlur={(e) => e.target.style.borderColor = theme.colors.border}
                      onChange={(e) => e.target.style.color = theme.colors.textMain}
                    >
                      <option value="" disabled selected>Select a Subject -</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="vendor">Vendor Relations</option>
                      <option value="other">Other</option>
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                      <svg style={{ width: '16px', height: '16px', color: theme.colors.textMuted }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" style={labelStyle}>Message *</label>
                  <textarea 
                    id="message" 
                    placeholder="Enter your message" 
                    required 
                    style={{ ...inputStyle, minHeight: '160px', resize: 'vertical' }}
                    onFocus={(e) => e.target.style.borderColor = theme.colors.accent}
                    onBlur={(e) => e.target.style.borderColor = theme.colors.border}
                  ></textarea>
                </div>

                {/* Terms and Conditions Checkbox */}
                <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '8px' }}>
                  <input 
                    type="checkbox" 
                    id="terms" 
                    required 
                    style={{ marginTop: '4px', marginRight: '12px', cursor: 'pointer', accentColor: theme.colors.accent }}
                  />
                  <label htmlFor="terms" style={{ color: theme.colors.textMuted, fontSize: '0.875rem', lineHeight: '1.5', cursor: 'pointer' }}>
                    I accept the terms & conditions and I understand that my data will be held securely in accordance with the privacy policy.
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{ 
                    marginTop: '16px',
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
                  SEND MESSAGE 
                  <span style={{ 
                    marginLeft: '12px', 
                    transform: isHovered ? 'translateX(4px)' : 'translateX(0)', 
                    transition: 'transform 0.3s ease' 
                  }}>
                    →
                  </span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}