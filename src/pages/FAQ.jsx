import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function FAQ() {
  // 🎨 BULLETPROOF THEME CONFIGURATION
  const theme = {
    colors: {
      background: '#1a0d08',
      accent: '#df7e5a',
      cardBg: 'rgba(255, 255, 255, 0.03)',
      cardHover: 'rgba(255, 255, 255, 0.05)',
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
      // Container dynamically adapts padding for mobile vs desktop
      container: { 
        maxWidth: '900px', 
        margin: '0 auto', 
        padding: '0 clamp(16px, 5vw, 24px)', 
        width: '100%', 
        boxSizing: 'border-box' 
      },
      // Card dynamically adapts padding for mobile vs desktop
      card: { 
        padding: 'clamp(24px, 5vw, 48px)', 
        borderRadius: '16px', 
        boxSizing: 'border-box' 
      },
    }
  };

  const glassCard = {
    ...theme.layout.card,
    backgroundColor: theme.colors.cardBg,
    border: `1px solid ${theme.colors.border}`,
    position: 'relative',
    overflow: 'hidden'
  };

  const bottomBorder = { borderBottom: `1px solid ${theme.colors.divider}` };

  // --- FAQ DATA ---
  const faqData = [
    {
      letter: "A",
      title: "Business Model & Transparency",
      questions: [
        { q: "1. What is the OneRx business model?", a: "OneRx operates on a fully transparent model, offering infrastructure and analytics without hidden spreads or kickbacks. Our revenue is generated solely through transparent membership fees." },
        { q: "2. Why does OneRx charge a membership fee?", a: "Charging a membership fee ensures our incentives are 100% aligned with your pharmacy. We don't skim rebates or take hidden margins from your purchases; you get the true net cost." },
        { q: "3. How will the founder make this model sustainable in the long term?", a: "By scaling our membership base across Canada, we build collective negotiating power. The infrastructure costs are distributed, allowing us to maintain a low fee while providing enterprise-level tools." }
      ]
    },
    {
      letter: "B",
      title: "Membership & Independence",
      questions: [
        { q: "4. Is OneRx a banner, a buying group, or something entirely different?", a: "OneRx is an operating system and neutral connector for independent pharmacies. We are not a banner, wholesaler, or compliance enforcer." },
        { q: "5. Do I need to sign a long-term contract to join OneRx?", a: "No. We believe in earning your business every day. We offer flexible terms that don't lock you into restrictive, multi-year obligations." },
        { q: "6. Are there penalties or exit fees if I leave OneRx?", a: "Zero exit fees. You retain your independence. If the platform isn't working for you, you are free to leave without penalty." },
        { q: "7. Do I need to change my store branding or signage to join?", a: "Absolutely not. Your pharmacy remains 100% your own brand." },
        { q: "8. Will OneRx force me to buy from specific vendors or follow a mandatory formulary?", a: "No. We provide the intelligence and the network, but purchasing decisions ultimately remain in your hands." },
        { q: "9. Does OneRx restrict my choice of distributor - and if yes, why?", a: "We integrate with verified distributors to guarantee data transparency and optimal pricing, but we do not enforce arbitrary restrictions." },
        { q: "10. Why does OneRx support a limited number of Primary and Secondary Vendors?", a: "Focusing on a select group of verified vendors allows us to consolidate purchasing volume, securing the deep discounts usually reserved for massive corporate chains." }
      ]
    },
    {
      letter: "C",
      title: "Vendor Access & Pricing",
      questions: [
        { q: "11. How does OneRx select Primary and Secondary Vendors?", a: "Vendors are vetted based on pricing transparency, supply reliability, and willingness to integrate with our open data layer." },
        { q: "12. Will I have access to multiple generic manufacturers?", a: "Yes, you will have visibility and access to multiple generic options to ensure you can optimize for the best molecular cost." },
        { q: "13. How does OneRx ensure competitive pricing for members?", a: "By aggregating the data and purchasing power of hundreds of independents, we negotiate directly on your behalf using real-time market intelligence." },
        { q: "14. How does OneRx handle discrepancies?", a: "Our Rx Intelligence module automatically audits rebates and ODB claims, flagging discrepancies before they cost you money." }
      ]
    },
    {
      letter: "E",
      title: "Technology & Data",
      questions: [
        { q: "15. What technology platform does OneRx provide?", a: "OneRx provides a unified suite of 9 modules, including Rx Intelligence (analytics), Rx Manager (workflow), and Rx Marketplace (purchasing), replacing 6-8 disconnected legacy systems." },
        { q: "16. How secure is my purchasing and pricing data?", a: "Your data is encrypted and siloed. We adhere strictly to NAPRA and provincial privacy standards to ensure total data security." },
        { q: "17. Does OneRx share my data with vendors or distributors?", a: "No. Your individual store data is yours. We only utilize aggregate, anonymized data to negotiate better terms for the collective network." },
        { q: "18. Will new platform features and tools be added regularly?", a: "Yes. OneRx is an evolving operating system. Updates and new features are pushed regularly and included in your membership." }
      ]
    },
    {
      letter: "F",
      title: "Workflow, Operations & Support",
      questions: [
        { q: "19. What onboarding and setup support does OneRx provide?", a: "We provide comprehensive, white-glove onboarding. Our team handles the integration, data migration, and team training." },
        { q: "20. How long does onboarding take?", a: "Most pharmacies are fully integrated and trained within a few days, depending on the complexity of your existing legacy systems." },
        { q: "21. Is there a dedicated support line or WhatsApp group?", a: "Yes, members get direct access to our support team for rapid resolution of operational issues." },
        { q: "22. Will OneRx review my purchases and suggest savings opportunities?", a: "Yes. Rx Intelligence automatically flags molecular cost optimization opportunities and suggests smarter purchasing paths." },
        { q: "23. Can OneRx help shift my purchase strategy for maximum benefits?", a: "Absolutely. Our tools provide the visibility needed to transition your purchasing strategy from reactive to highly optimized." },
        { q: "24. Does OneRx support multi-store owners or small pharmacy groups?", a: "Yes, our dashboard provides a unified view across multiple locations, making group management effortless." }
      ]
    },
    {
      letter: "G",
      title: "Membership Plans & Fees",
      questions: [
        { q: "25. What membership levels does OneRx offer?", a: "We offer tailored plans ranging from Rx Start to Rx Empowered, designed to fit the size and needs of your specific operation." },
        { q: "26. What is the difference between the tiers?", a: "Higher tiers include deeper integrations, advanced analytics capabilities, and premium module access like Rx Scribe and Rx Relief." },
        { q: "27. Are multi-location pharmacies eligible for discounts?", a: "Yes. We offer optimized pricing structures for owners bringing multiple locations onto the platform." },
        { q: "28. Is membership billed monthly or annually?", a: "We offer both options. Choosing annual billing provides a 20% discount on the subscription cost." }
      ]
    },
    {
      letter: "H",
      title: "General Pharmacy Business Concerns",
      questions: [
        { q: "29. How does OneRx help independents compete with corporate chains?", a: "We level the playing field by giving you the same enterprise software, purchasing intelligence, and negotiating leverage that massive chains use." },
        { q: "30. Will OneRx negotiate better vendor terms as membership grows?", a: "Yes. The larger our network grows, the stronger our collective bargaining power becomes, resulting in better terms for everyone." },
        { q: "31. How does OneRx protect independents from market consolidation?", a: "By fixing your margins and modernizing your operations, we ensure your pharmacy remains highly profitable and independent, removing the pressure to sell out." },
        { q: "32. Does OneRx support new pharmacy startups or first-time owners?", a: "Yes. Launching with OneRx ensures your pharmacy is built on modern, scalable infrastructure from day one." },
        { q: "33. What is OneRx's view on PBMs, and what can Canada learn from the U.S.?", a: "We believe extreme transparency is the only defense against the margin-compression tactics seen in the U.S. market." },
        { q: "34. How does OneRx help me if I already run a completely independent pharmacy?", a: "We remove the operational friction. You save time on reconciliations, ordering, and compliance, allowing you to focus purely on clinical care and growth." }
      ]
    }
  ];

  // --- INTERACTIVE ACCORDION COMPONENT ---
  const FaqItem = ({ item, isLast }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={isLast ? {} : bottomBorder}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{ 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            background: 'none', 
            border: 'none', 
            padding: 'clamp(16px, 4vw, 24px) 0', 
            cursor: 'pointer',
            textAlign: 'left',
            color: isOpen ? theme.colors.textMain : theme.colors.textMuted,
            transition: 'color 0.2s ease',
            boxSizing: 'border-box'
          }}
        >
          <span style={{ 
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', 
            fontWeight: isOpen ? '600' : '400', 
            fontFamily: theme.fonts.body, 
            paddingRight: '16px', 
            lineHeight: '1.5' 
          }}>
            {item.q}
          </span>
          <svg 
            style={{ 
              width: '20px', 
              height: '20px', 
              flexShrink: 0, 
              color: isOpen ? theme.colors.accent : theme.colors.textMuted,
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease, color 0.2s ease'
            }} 
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {/* Expandable Answer: Uses Grid for perfect fluid height animation on any screen size */}
        <div 
          style={{ 
            display: 'grid',
            gridTemplateRows: isOpen ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.4s ease-in-out, opacity 0.4s ease-in-out',
            opacity: isOpen ? 1 : 0
          }}
        >
          <div style={{ overflow: 'hidden' }}>
            <p style={{ 
              paddingBottom: 'clamp(24px, 5vw, 32px)', 
              color: theme.colors.textMuted, 
              fontSize: 'clamp(0.9375rem, 2vw, 1rem)', 
              lineHeight: '1.7', 
              fontFamily: theme.fonts.body, 
              margin: 0 
            }}>
              {item.a}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="page-fade" style={{ backgroundColor: theme.colors.background, color: theme.colors.textMain, fontFamily: theme.fonts.body, minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <Navigation />

      {/* 1. HERO SECTION */}
      <section style={{ 
        paddingTop: 'clamp(120px, 15vw, 180px)', 
        paddingBottom: 'clamp(64px, 10vw, 96px)', 
        ...bottomBorder 
      }}>
        <div style={{ ...theme.layout.container, textAlign: 'center', maxWidth: '800px' }}>
          <p style={{ color: theme.colors.accent, fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Knowledge Base
          </p>
          <h1 style={{ 
            fontFamily: theme.fonts.display, 
            fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', 
            fontWeight: '500', 
            lineHeight: '1.1', 
            margin: '0 0 24px 0' 
          }}>
            Frequently Asked Questions
          </h1>
          <p style={{ 
            color: theme.colors.textMuted, 
            fontSize: 'clamp(1rem, 3vw, 1.125rem)', 
            lineHeight: '1.7', 
            margin: '0 auto', 
            maxWidth: '600px' 
          }}>
            Everything you need to know about OneRx, our transparency model, and how we empower independent Canadian pharmacies.
          </p>
        </div>
      </section>

      {/* 2. FAQ ACCORDION SECTIONS */}
      <section style={{ padding: 'clamp(48px, 8vw, 80px) 0 clamp(80px, 12vw, 120px) 0' }}>
        <div style={theme.layout.container}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(32px, 5vw, 48px)' }}>
            {faqData.map((category, index) => (
              <div key={index} style={glassCard}>
                {/* Highlight bar on card */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', backgroundColor: theme.colors.accent }}></div>
                
                {/* Category Header */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: 'clamp(24px, 5vw, 40px)', 
                  paddingBottom: 'clamp(24px, 5vw, 32px)', 
                  ...bottomBorder 
                }}>
                  <div style={{ 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    width: 'clamp(32px, 6vw, 40px)', 
                    height: 'clamp(32px, 6vw, 40px)', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(223, 126, 90, 0.15)', 
                    color: theme.colors.accent, 
                    fontWeight: 'bold', 
                    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                    marginRight: 'clamp(12px, 3vw, 20px)', 
                    flexShrink: 0
                  }}>
                    {category.letter}
                  </div>
                  <h2 style={{ 
                    fontFamily: theme.fonts.display, 
                    fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
                    fontWeight: '500', 
                    margin: 0, 
                    color: theme.colors.textMain 
                  }}>
                    {category.title}
                  </h2>
                </div>

                {/* Questions List */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {category.questions.map((item, qIndex) => (
                    <FaqItem 
                      key={qIndex} 
                      item={item} 
                      isLast={qIndex === category.questions.length - 1} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FINAL CTA */}
      <section style={{ padding: '0 0 clamp(80px, 12vw, 128px) 0' }}>
        <div style={{ 
          ...theme.layout.container, 
          textAlign: 'center', 
          maxWidth: '800px', 
          ...glassCard, 
          padding: 'clamp(40px, 8vw, 64px) clamp(24px, 5vw, 48px)' 
        }}>
          <h2 style={{ 
            fontFamily: theme.fonts.display, 
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', 
            fontWeight: '500', 
            lineHeight: '1.2', 
            marginBottom: '24px', 
            marginTop: 0 
          }}>
            Still have questions?
          </h2>
          <p style={{ 
            color: theme.colors.textMuted, 
            fontSize: 'clamp(1rem, 3vw, 1.125rem)', 
            marginBottom: 'clamp(24px, 6vw, 40px)' 
          }}>
            We’re here to help. Reach out to our team to get the answers you need or schedule a full platform demonstration.
          </p>
          <button style={{ 
            backgroundColor: '#ffffff', 
            color: '#1a0d08', 
            fontFamily: theme.fonts.body, 
            fontSize: '1rem', 
            fontWeight: 'bold', 
            padding: '16px 32px', 
            borderRadius: '50px', 
            border: 'none', 
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            transition: 'transform 0.2s ease',
            whiteSpace: 'nowrap'
          }}>
            Contact Us 
            <svg style={{ width: '20px', height: '20px', marginLeft: '12px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}