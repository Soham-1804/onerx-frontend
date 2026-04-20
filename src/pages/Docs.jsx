import React, { useState, useEffect, useRef } from "react";

// ─── Data ──────────────────────────────────────────────────────────────────────
const NAV_SECTIONS = [
  {
    group: "Getting Started",
    items: [
      { id: "introduction",    label: "Introduction" },
      { id: "quickstart",      label: "Quick Start" },
      { id: "account-setup",   label: "Account Setup" },
    ],
  },
  {
    group: "Modules",
    items: [
      { id: "rx-intelligence", label: "Rx Intelligence" },
      { id: "rx-manager",      label: "Rx Manager" },
      { id: "rx-marketplace",  label: "Rx Marketplace" },
      { id: "rx-suite",        label: "Rx Suite" },
      { id: "rx-incident",     label: "Rx Incident" },
    ],
  },
  {
    group: "Compliance & Security",
    items: [
      { id: "napra",           label: "NAPRA Alignment" },
      { id: "cqi-plus",        label: "CQI+ Workflows" },
      { id: "data-security",   label: "Data Security" },
    ],
  },
  {
    group: "API Reference",
    items: [
      { id: "api-overview",    label: "Overview" },
      { id: "authentication",  label: "Authentication" },
      { id: "endpoints",       label: "Endpoints" },
    ],
  },
  {
    group: "Support",
    items: [
      { id: "faq",             label: "FAQ" },
      { id: "contact-support", label: "Contact Support" },
    ],
  },
];

// ─── Inline components ─────────────────────────────────────────────────────────
function Tag({ children, color = "terra" }) {
  const styles = {
    terra:   { bg: "rgba(154,74,40,0.18)",  text: "#d5a48d", border: "rgba(154,74,40,0.35)" },
    red:     { bg: "rgba(127,29,29,0.22)",  text: "#f87171", border: "rgba(239,68,68,0.3)" },
    blue:    { bg: "rgba(30,58,138,0.22)",  text: "#60a5fa", border: "rgba(59,130,246,0.3)" },
    green:   { bg: "rgba(6,78,59,0.22)",    text: "#34d399", border: "rgba(16,185,129,0.3)" },
    violet:  { bg: "rgba(76,29,149,0.22)",  text: "#a78bfa", border: "rgba(139,92,246,0.3)" },
    amber:   { bg: "rgba(120,53,15,0.22)",  text: "#fbbf24", border: "rgba(245,158,11,0.3)" },
  };
  const s = styles[color];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", padding: "2px 9px", borderRadius: 4, background: s.bg, color: s.text, border: `1px solid ${s.border}`, fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
      {children}
    </span>
  );
}

function CodeBlock({ language = "bash", children }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(children).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };
  return (
    <div style={{ position: "relative", margin: "1.25rem 0", borderRadius: 10, overflow: "hidden", border: "1px solid var(--t800)" }}>
      <div style={{ background: "var(--t800)", padding: "0.45rem 1rem", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--t700)" }}>
        <span style={{ fontSize: 11, color: "var(--t500)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{language}</span>
        <button onClick={copy} style={{ background: "none", border: "1px solid var(--t700)", borderRadius: 5, color: copied ? "#34d399" : "var(--t400)", fontSize: 11, padding: "2px 10px", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", transition: "all 0.2s" }}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre style={{ background: "var(--t900)", margin: 0, padding: "1.1rem 1.25rem", overflowX: "auto", fontSize: 13, lineHeight: 1.7, color: "#e2d4ca", fontFamily: "'JetBrains Mono','Fira Code',monospace" }}>
        <code>{children}</code>
      </pre>
    </div>
  );
}

function Callout({ type = "info", children }) {
  const map = {
    info:    { border: "#3b82f6", bg: "rgba(30,58,138,0.15)", icon: "ℹ", color: "#60a5fa" },
    warning: { border: "#f59e0b", bg: "rgba(120,53,15,0.2)",  icon: "⚠", color: "#fbbf24" },
    success: { border: "#10b981", bg: "rgba(6,78,59,0.18)",   icon: "✓", color: "#34d399" },
    napra:   { border: "#9a4a28", bg: "rgba(154,74,40,0.14)", icon: "🍁", color: "#d5a48d" },
  };
  const s = map[type] || map.info;
  return (
    <div style={{ display: "flex", gap: 12, padding: "1rem 1.1rem", borderRadius: 9, background: s.bg, borderLeft: `3px solid ${s.border}`, margin: "1.25rem 0" }}>
      <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1, color: s.color }}>{s.icon}</span>
      <div style={{ fontSize: 14, lineHeight: 1.7, color: "var(--t200)" }}>{children}</div>
    </div>
  );
}

function StepItem({ number, title, children }) {
  return (
    <div style={{ display: "flex", gap: 16, marginBottom: "1.5rem" }}>
      <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--t500)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{number}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, color: "#fff", marginBottom: 6, fontSize: 15 }}>{title}</div>
        <div style={{ fontSize: 14, color: "var(--t300)", lineHeight: 1.7 }}>{children}</div>
      </div>
    </div>
  );
}

function Table({ headers, rows }) {
  return (
    <div style={{ overflowX: "auto", margin: "1.25rem 0", borderRadius: 9, border: "1px solid var(--t800)" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 400 }}>
        <thead>
          <tr style={{ background: "var(--t800)" }}>
            {headers.map(h => <th key={h} style={{ padding: "0.65rem 1rem", textAlign: "left", color: "var(--t300)", fontWeight: 600, fontSize: 12, letterSpacing: "0.05em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderTop: "1px solid var(--t800)", background: i % 2 === 0 ? "var(--t950)" : "var(--t900)" }}>
              {row.map((cell, j) => <td key={j} style={{ padding: "0.6rem 1rem", color: j === 0 ? "#fff" : "var(--t400)", fontFamily: j === 0 ? "'JetBrains Mono','Fira Code',monospace" : "'DM Sans',sans-serif", fontSize: j === 0 ? 12 : 13 }}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SectionHeading({ id, level = 2, children }) {
  const Tag = `h${level}`;
  return (
    <Tag id={id} style={{
      fontFamily: "'Playfair Display',serif",
      fontSize: level === 2 ? "clamp(20px,3vw,26px)" : "clamp(16px,2.5vw,19px)",
      fontWeight: level === 2 ? 700 : 600,
      color: "#fff",
      marginBottom: "0.75rem",
      marginTop: level === 2 ? "2.25rem" : "1.75rem",
      paddingTop: level === 2 ? "0.25rem" : 0,
      scrollMarginTop: 120,
      lineHeight: 1.25,
    }}>
      {children}
    </Tag>
  );
}

function Para({ children }) {
  return <p style={{ fontSize: 14, color: "var(--t300)", lineHeight: 1.8, marginBottom: "1rem" }}>{children}</p>;
}

// ─── Page sections (content) ───────────────────────────────────────────────────
function Introduction() {
  return (
    <section>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, marginBottom: "1.25rem" }}>
        <Tag color="terra">v2.4.0</Tag>
        <Tag color="green">Stable</Tag>
        <Tag color="blue">NAPRA-Aligned</Tag>
      </div>
      <SectionHeading id="introduction">Welcome to OneRx Documentation</SectionHeading>
      <Para>OneRx is Canada's AI-powered pharmacy platform built exclusively for independent pharmacies. This documentation covers everything from onboarding your first pharmacy to configuring advanced CQI+ incident workflows and integrating with the OneRx API.</Para>
      <Para>Whether you're a pharmacy owner, administrator, or a developer building on top of the OneRx platform, you'll find everything you need here.</Para>
      <Callout type="napra">All OneRx modules are designed to meet or exceed NAPRA standards. Data is stored exclusively on Canadian servers with AES-256 encryption.</Callout>
      <SectionHeading id="intro-modules" level={3}>What's included</SectionHeading>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "1rem", margin: "1rem 0 1.5rem" }}>
        {[
          { name: "Rx Intelligence", desc: "AI-powered analytics & dashboards", color: "blue" },
          { name: "Rx Manager",      desc: "Purchasing control & formulary",    color: "amber" },
          { name: "Rx Marketplace",  desc: "Vendor catalog & order management", color: "green" },
          { name: "Rx Suite",        desc: "IT tools, VoIP, security & SEO",   color: "terra" },
          { name: "Rx Incident",     desc: "Anonymous CQI+ incident reporting", color: "red" },
        ].map(m => (
          <div key={m.name} style={{ padding: "1rem", background: "var(--t900)", border: "1px solid var(--t800)", borderRadius: 9 }}>
            <Tag color={m.color}>{m.name}</Tag>
            <p style={{ fontSize: 13, color: "var(--t400)", marginTop: 8, marginBottom: 0, lineHeight: 1.6 }}>{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function QuickStart() {
  return (
    <section>
      <SectionHeading id="quickstart">Quick Start</SectionHeading>
      <Para>Get your pharmacy live on OneRx in under 10 minutes. Follow these steps to complete your onboarding.</Para>
      <StepItem number={1} title="Create your account">Visit <span style={{ color: "var(--t400)", fontFamily: "monospace" }}>myonerx.ca/register</span> and enter your pharmacy's license number, owner name, and contact email. You'll receive a verification email within 2 minutes.</StepItem>
      <StepItem number={2} title="Select your modules">Choose which OneRx modules you need. You can start with a single module and add more at any time from your dashboard.</StepItem>
      <StepItem number={3} title="Connect your dispensary software">OneRx integrates with all major Canadian dispensary platforms. Follow the integration guide for your specific software.</StepItem>
      <StepItem number={4} title="Invite your team">Add pharmacists, technicians, and managers. Role-based access ensures everyone only sees what they need.</StepItem>
      <Callout type="success">Most pharmacies complete onboarding in under 15 minutes. Your dedicated onboarding specialist will be in touch within one business day.</Callout>
    </section>
  );
}

function AccountSetup() {
  return (
    <section>
      <SectionHeading id="account-setup">Account Setup</SectionHeading>
      <Para>After registration, configure your account to match your pharmacy's operational structure.</Para>
      <SectionHeading id="roles" level={3}>User Roles</SectionHeading>
      <Table
        headers={["Role", "Access Level", "Can Submit Incidents", "Can View Reports"]}
        rows={[
          ["owner",       "Full admin",        "Yes", "Yes"],
          ["manager",     "Operational",       "Yes", "Yes"],
          ["pharmacist",  "Clinical",          "Yes", "Limited"],
          ["technician",  "Workflow",          "Yes", "No"],
          ["read-only",   "Viewer",            "No",  "Yes"],
        ]}
      />
      <SectionHeading id="mfa" level={3}>Two-Factor Authentication</SectionHeading>
      <Para>2FA is mandatory for all accounts with access to incident data or financial reports. Supported methods: Authenticator app (TOTP) or SMS.</Para>
      <CodeBlock language="bash">{`# Example: Generate a session token via CLI tool
onerx auth login --email admin@mypharmacy.ca --2fa totp
# → Enter your 6-digit code: ______
# ✓ Authenticated. Token saved to ~/.onerx/credentials`}</CodeBlock>
    </section>
  );
}

function RxIntelligence() {
  return (
    <section>
      <SectionHeading id="rx-intelligence">Rx Intelligence</SectionHeading>
      <Tag color="blue">Analytics Module</Tag>
      <Para style={{ marginTop: 12 }}>Rx Intelligence is your pharmacy's data command center — surfacing actionable insights from purchasing history, formulary trends, and vendor performance across single or multi-store operations.</Para>
      <SectionHeading id="rxi-dashboards" level={3}>Dashboards</SectionHeading>
      <Para>The main dashboard shows real-time KPIs including top-spend DINs, savings vs. target, stock-out frequency, and vendor fill rates. All widgets are interactive — click any metric to drill down.</Para>
      <SectionHeading id="rxi-reports" level={3}>Scheduled Reports</SectionHeading>
      <Para>Configure automated reports delivered to your inbox or exported to your accounting software on a daily, weekly, or monthly basis.</Para>
      <Table
        headers={["Report Type", "Frequency", "Format"]}
        rows={[
          ["Purchasing Summary",  "Weekly",  "PDF, CSV"],
          ["Savings Analysis",    "Monthly", "PDF, XLSX"],
          ["Vendor Scorecard",    "Monthly", "PDF"],
          ["DIN Price Variance",  "Daily",   "CSV"],
        ]}
      />
      <Callout type="info">Multi-store owners can enable a consolidated network view that aggregates data across all licensed locations.</Callout>
    </section>
  );
}

function RxManager() {
  return (
    <section>
      <SectionHeading id="rx-manager">Rx Manager</SectionHeading>
      <Tag color="amber">Purchasing Module</Tag>
      <Para>Rx Manager gives pharmacists and buyers a unified interface for managing formulary decisions, purchase orders, and vendor relationships — replacing spreadsheets and phone calls with intelligent automation.</Para>
      <SectionHeading id="rxm-formulary" level={3}>Dynamic Formulary</SectionHeading>
      <Para>The formulary engine constantly monitors your purchase history, vendor pricing updates, and network-level contract terms to surface the best available option for each DIN in real-time.</Para>
      <CodeBlock language="json">{`// Example formulary decision response
{
  "din": "02345678",
  "molecule": "Atorvastatin 40mg",
  "recommended_vendor": "McKesson",
  "net_price": 12.45,
  "savings_vs_last_order": 1.82,
  "contract_rebate_eligible": true,
  "alternatives": [
    { "vendor": "AmerisourceBergen", "net_price": 13.10 },
    { "vendor": "Kohl & Frisch",     "net_price": 12.98 }
  ]
}`}</CodeBlock>
      <SectionHeading id="rxm-po" level={3}>Purchase Orders</SectionHeading>
      <Para>Generate, review, and approve purchase orders directly within Rx Manager. Orders sync automatically with your dispensary system upon approval.</Para>
    </section>
  );
}

function RxMarketplace() {
  return (
    <section>
      <SectionHeading id="rx-marketplace">Rx Marketplace</SectionHeading>
      <Tag color="green">Vendor Network</Tag>
      <Para>Rx Marketplace connects your pharmacy directly to a curated network of verified Canadian distributors and specialty vendors — with group-negotiated pricing and bi-weekly statement reconciliation.</Para>
      <SectionHeading id="rxmp-vendors" level={3}>Vendor Onboarding</SectionHeading>
      <Para>All vendors on the Marketplace undergo compliance verification before listing. To request a new vendor addition, submit a request through your dashboard.</Para>
      <Callout type="warning">Vendor-managed catalog pricing is updated in real-time. Always confirm the displayed price before finalizing an order, as flash promotions may expire without notice.</Callout>
      <SectionHeading id="rxmp-statements" level={3}>Bi-Weekly Statements</SectionHeading>
      <Para>Statements consolidate all Marketplace purchases, applicable rebates, and group savings into a single reconciled document. Statements are available in PDF and CSV format on the 1st and 15th of each month.</Para>
    </section>
  );
}

function RxSuite() {
  return (
    <section>
      <SectionHeading id="rx-suite">Rx Suite</SectionHeading>
      <Tag color="terra">IT & Tools</Tag>
      <Para>Rx Suite bundles the operational technology your pharmacy needs — cloud backup, VoIP, cybersecurity training, digital forms, SEO, and an AI chatbot — under one subscription with dedicated Canadian support.</Para>
      <Table
        headers={["Tool", "Description", "Availability"]}
        rows={[
          ["Cloud Backup",    "Automated, encrypted daily backups",       "All plans"],
          ["VoIP Phone",      "Secure, scalable pharmacy phone system",   "Pro+"],
          ["eFax",            "Paperless, PHIPA-compliant faxing",        "All plans"],
          ["AI Chatbot",      "Patient-facing pharmacy Q&A assistant",    "Pro+"],
          ["Digital Forms",   "Mobile-friendly intake & consent forms",   "All plans"],
          ["Cyber Training",  "Staff phishing & security awareness",      "All plans"],
          ["SEO & Web",       "Google presence & reputation management",  "Pro+"],
        ]}
      />
    </section>
  );
}

function RxIncident() {
  return (
    <section>
      <SectionHeading id="rx-incident">Rx Incident</SectionHeading>
      <Tag color="red">CQI+ Compliance</Tag>
      <Para>Rx Incident delivers NAPRA-aligned anonymous incident and near-miss reporting. Staff report without fear. AI analytics identify patterns. NIDR submissions happen automatically.</Para>
      <SectionHeading id="rxi-submit" level={3}>Submitting an Incident</SectionHeading>
      <StepItem number={1} title="Open the report form">Access via the Rx Incident tab in your dashboard, or through the direct link shared by your manager. No login is required for anonymous submissions.</StepItem>
      <StepItem number={2} title="Select incident type">Choose from: Near-miss, Adverse drug event, Wrong patient, Wrong drug, Wrong dose, Dispensing error, or Other.</StepItem>
      <StepItem number={3} title="Complete the structured form">Fields are pre-mapped to NIDR reporting requirements. Required fields are marked — the form takes approximately 90 seconds to complete.</StepItem>
      <StepItem number={4} title="Submit">Your submission is encrypted, anonymized, and automatically forwarded to the National Incident Data Repository (NIDR). A confirmation number is provided for your records.</StepItem>
      <Callout type="napra">Rx Incident is aligned with NAPRA's Model Standards for Pharmacy Compounding and ACP's CQI+ requirements. All data is Canada-hosted with AES-256 encryption and role-based access controls.</Callout>
    </section>
  );
}

function NAPRASection() {
  return (
    <section>
      <SectionHeading id="napra">NAPRA Alignment</SectionHeading>
      <Para>OneRx is designed from the ground up to align with the National Association of Pharmacy Regulatory Authorities (NAPRA) model standards. This section outlines how each module maps to key NAPRA requirements.</Para>
      <Table
        headers={["NAPRA Standard", "OneRx Module", "Coverage"]}
        rows={[
          ["Model Standards for Pharmacy Practice",  "Rx Manager, Rx Intelligence", "Formulary, purchasing, traceability"],
          ["CQI+ Program Requirements",              "Rx Incident",                 "Anonymous reporting, trend analysis"],
          ["NIDR Submission",                        "Rx Incident",                 "Automated, structured submission"],
          ["Data Protection & Privacy",              "All Modules",                 "AES-256, Canada-hosted, PHIPA-ready"],
          ["Medication Reconciliation",              "Rx Manager",                  "Cross-vendor DIN tracking"],
        ]}
      />
    </section>
  );
}

function CQIPlus() {
  return (
    <section>
      <SectionHeading id="cqi-plus">CQI+ Workflows</SectionHeading>
      <Para>Continuous Quality Improvement Plus (CQI+) is the standard framework for pharmacy incident management in Canada. Rx Incident implements the full CQI+ cycle automatically.</Para>
      <SectionHeading id="cqi-cycle" level={3}>The CQI+ Cycle in Rx Incident</SectionHeading>
      <StepItem number={1} title="Report">Staff submits an anonymous near-miss or incident report via structured form.</StepItem>
      <StepItem number={2} title="Capture">System captures incident data with timestamp, incident type, and contributing factors — no personal identifiers stored.</StepItem>
      <StepItem number={3} title="Analyze">AI engine identifies root causes and cross-references against your pharmacy's historical incident data to flag emerging patterns.</StepItem>
      <StepItem number={4} title="Act">Management receives an anonymized insight report with recommended process improvements. Actions can be logged for audit trail purposes.</StepItem>
      <StepItem number={5} title="Submit">NIDR submission is generated and transmitted automatically. Confirmation number logged for your records.</StepItem>
    </section>
  );
}

function DataSecurity() {
  return (
    <section>
      <SectionHeading id="data-security">Data Security</SectionHeading>
      <Para>OneRx operates a security-first infrastructure aligned with Canadian privacy law (PHIPA, PIPEDA) and pharmacy regulatory requirements.</Para>
      <Table
        headers={["Control", "Standard", "Details"]}
        rows={[
          ["Encryption at rest",    "AES-256",       "All pharmacy and incident data"],
          ["Encryption in transit", "TLS 1.3",       "All API and browser connections"],
          ["Data residency",        "Canada-only",   "No cross-border data transfer"],
          ["Access control",        "RBAC",          "Role-based, per-module permissions"],
          ["Audit logging",         "Immutable",     "All access events logged"],
          ["Backup retention",      "90 days",       "Encrypted, geo-redundant"],
          ["2FA",                   "TOTP / SMS",    "Mandatory for privileged roles"],
        ]}
      />
      <Callout type="info">OneRx undergoes annual third-party security audits. To request the latest audit summary, contact <span style={{ color: "var(--t400)", fontFamily: "monospace" }}>security@myonerx.ca</span>.</Callout>
    </section>
  );
}

function APIOverview() {
  return (
    <section>
      <SectionHeading id="api-overview">API Overview</SectionHeading>
      <Tag color="violet">Developer Reference</Tag>
      <Para>The OneRx API allows developers to integrate pharmacy data, incident reporting, and purchasing workflows into third-party systems. The API is RESTful, returns JSON, and uses token-based authentication.</Para>
      <CodeBlock language="bash">{`# Base URL
https://api.myonerx.ca/v2

# All requests require an Authorization header
curl -H "Authorization: Bearer YOUR_TOKEN" \\
     https://api.myonerx.ca/v2/pharmacy/profile`}</CodeBlock>
      <Para>Rate limits apply per token: 1000 requests/hour for standard plans, 10,000/hour for enterprise.</Para>
    </section>
  );
}

function Authentication() {
  return (
    <section>
      <SectionHeading id="authentication">Authentication</SectionHeading>
      <Para>All API requests must include a valid Bearer token in the Authorization header. Tokens are scoped to your pharmacy and specific module permissions.</Para>
      <SectionHeading id="auth-token" level={3}>Generating a Token</SectionHeading>
      <CodeBlock language="http">{`POST https://api.myonerx.ca/v2/auth/token
Content-Type: application/json

{
  "client_id":     "your_client_id",
  "client_secret": "your_client_secret",
  "scope":         "incidents.read incidents.write purchasing.read"
}`}</CodeBlock>
      <CodeBlock language="json">{`// Response
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type":   "Bearer",
  "expires_in":   3600,
  "scope":        "incidents.read incidents.write purchasing.read"
}`}</CodeBlock>
      <Callout type="warning">Never expose your <code style={{ fontFamily: "monospace", fontSize: 12, color: "var(--t300)" }}>client_secret</code> in client-side code or public repositories. Rotate your credentials immediately if compromised.</Callout>
    </section>
  );
}

function Endpoints() {
  return (
    <section>
      <SectionHeading id="endpoints">Endpoints</SectionHeading>
      <Para>Core API endpoints for the most common integration scenarios.</Para>
      {[
        { method: "GET",    path: "/pharmacy/profile",            desc: "Retrieve pharmacy details and module subscriptions" },
        { method: "GET",    path: "/incidents",                   desc: "List incidents (paginated, anonymized)" },
        { method: "POST",   path: "/incidents",                   desc: "Submit a new incident report" },
        { method: "GET",    path: "/incidents/{id}",              desc: "Retrieve a single incident by ID" },
        { method: "GET",    path: "/purchasing/orders",           desc: "List purchase orders" },
        { method: "POST",   path: "/purchasing/orders",           desc: "Create a new purchase order" },
        { method: "GET",    path: "/formulary/recommendations",   desc: "Get formulary recommendations for a DIN" },
        { method: "GET",    path: "/reports/savings",             desc: "Retrieve savings summary report" },
      ].map(e => {
        const methodColor = { GET: "#34d399", POST: "#60a5fa", PUT: "#fbbf24", DELETE: "#f87171" }[e.method] || "#ccc";
        return (
          <div key={e.path} style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0.75rem", padding: "0.75rem 0", borderBottom: "1px solid var(--t800)" }}>
            <span style={{ fontFamily: "'JetBrains Mono','Fira Code',monospace", fontSize: 11, fontWeight: 700, color: methodColor, minWidth: 42 }}>{e.method}</span>
            <span style={{ fontFamily: "'JetBrains Mono','Fira Code',monospace", fontSize: 13, color: "#fff", flex: "1 1 180px" }}>{e.path}</span>
            <span style={{ fontSize: 13, color: "var(--t400)", flex: "2 1 200px" }}>{e.desc}</span>
          </div>
        );
      })}
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Is OneRx compliant with provincial pharmacy regulations?", a: "Yes. OneRx modules are designed to align with NAPRA model standards and provincial regulatory requirements (ACP, OCP, CPSBC, etc.). Rx Incident specifically supports ACP-aligned CQI+ workflows and automated NIDR submissions." },
    { q: "Where is my pharmacy's data stored?", a: "All data is stored exclusively on Canadian servers. OneRx does not transfer any pharmacy or patient data outside of Canada. Data at rest is encrypted with AES-256." },
    { q: "Can I use OneRx with my existing dispensary software?", a: "OneRx integrates with most major Canadian dispensary systems including Kroll, PharmaClik, MedOffice, and others. Contact our support team if you need help with a specific integration." },
    { q: "How does anonymous incident reporting work?", a: "Reports submitted through Rx Incident contain no personal identifiers by design. The system captures incident data (type, date/time, contributing factors) but never stores the reporter's identity. Even administrators cannot identify who submitted a report." },
    { q: "How do I add or remove modules?", a: "You can manage your module subscriptions at any time from the Billing section of your OneRx dashboard. Changes take effect immediately; billing is prorated to your next cycle." },
  ];
  return (
    <section>
      <SectionHeading id="faq">Frequently Asked Questions</SectionHeading>
      <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
        {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
      </div>
    </section>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--t800)" }}>
      <button onClick={() => setOpen(o => !o)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "1rem 0", background: "none", border: "none", cursor: "pointer", color: "#fff", textAlign: "left", fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 600 }}>
        <span>{q}</span>
        <span style={{ fontSize: 18, color: "var(--t500)", flexShrink: 0, transform: open ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
      </button>
      {open && <p style={{ fontSize: 14, color: "var(--t300)", lineHeight: 1.8, paddingBottom: "1rem", margin: 0 }}>{a}</p>}
    </div>
  );
}

function ContactSupport() {
  return (
    <section>
      <SectionHeading id="contact-support">Contact Support</SectionHeading>
      <Para>Our support team is staffed by pharmacists and pharmacy technicians who understand your workflow — not generic help desk agents.</Para>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: "1rem", margin: "1.25rem 0" }}>
        {[
          { label: "Email", value: "admin@myonerx.ca",        icon: "✉" },
          { label: "Hours", value: "Mon–Fri, 8am–8pm ET",     icon: "🕐" },
          { label: "Response", value: "< 4 hours (business)", icon: "⚡" },
          { label: "Emergency", value: "24/7 on-call for incidents", icon: "🆘" },
        ].map(c => (
          <div key={c.label} style={{ padding: "1rem", background: "var(--t900)", border: "1px solid var(--t800)", borderRadius: 9 }}>
            <div style={{ fontSize: 20, marginBottom: 6 }}>{c.icon}</div>
            <div style={{ fontSize: 11, color: "var(--t500)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{c.label}</div>
            <div style={{ fontSize: 13, color: "var(--t300)" }}>{c.value}</div>
          </div>
        ))}
      </div>
      <Callout type="info">For urgent issues related to incident reporting or regulatory submissions, use the emergency support line available in your dashboard.</Callout>
    </section>
  );
}

const SECTION_MAP = {
  introduction:   <Introduction />,
  quickstart:     <QuickStart />,
  "account-setup":<AccountSetup />,
  "rx-intelligence":<RxIntelligence />,
  "rx-manager":   <RxManager />,
  "rx-marketplace":<RxMarketplace />,
  "rx-suite":     <RxSuite />,
  "rx-incident":  <RxIncident />,
  napra:          <NAPRASection />,
  "cqi-plus":     <CQIPlus />,
  "data-security":<DataSecurity />,
  "api-overview": <APIOverview />,
  authentication: <Authentication />,
  endpoints:      <Endpoints />,
  faq:            <FAQ />,
  "contact-support":<ContactSupport />,
};

// ─── Main ──────────────────────────────────────────────────────────────────────
export default function Docs() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [searchQuery, setSearchQuery]     = useState("");
  const [menuOpen, setMenuOpen]           = useState(false);
  const [sidebarOpen, setSidebarOpen]     = useState(false);
  const [visible, setVisible]             = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    document.title = "Documentation | OneRx";
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 768) setMenuOpen(false);
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Filter nav by search
  const filteredNav = NAV_SECTIONS.map(group => ({
    ...group,
    items: group.items.filter(item =>
      !searchQuery || item.label.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(g => g.items.length > 0);

  const allNavItems = NAV_SECTIONS.flatMap(g => g.items);

  const navigate = (id) => {
    setActiveSection(id);
    setSidebarOpen(false);
    if (contentRef.current) contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--t950)", color: "#fff", opacity: visible ? 1 : 0, transition: "opacity 0.4s", fontFamily: "'DM Sans',sans-serif", display: "flex", flexDirection: "column" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=JetBrains+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --t50:#fdf8f6; --t100:#f5e9e2; --t200:#e8c9bb; --t300:#d5a48d;
          --t400:#b87355; --t500:#9a4a28; --t600:#7a3a1e; --t700:#5e2c17;
          --t800:#3d1e10; --t900:#261308; --t950:#150a04;
        }
        body { margin:0; background:var(--t950); }

        ::-webkit-scrollbar { width:5px; height:5px; }
        ::-webkit-scrollbar-track { background:var(--t950); }
        ::-webkit-scrollbar-thumb { background:var(--t700); border-radius:3px; }

        .nlink { color:var(--t400); font-size:14px; text-decoration:none; transition:color 0.2s; }
        .nlink:hover { color:#fff; }
        .flink { color:var(--t600); font-size:12px; text-decoration:none; transition:color 0.2s; }
        .flink:hover { color:var(--t400); }

        /* Sidebar nav item */
        .sitem { display:block; width:100%; text-align:left; padding:0.38rem 0.75rem; border-radius:6px; font-size:13px; cursor:pointer; border:none; background:none; font-family:'DM Sans',sans-serif; transition:all 0.15s; }
        .sitem-on  { background:rgba(154,74,40,0.2); color:var(--t300); font-weight:600; border-left:2px solid var(--t500); }
        .sitem-off { color:var(--t500); }
        .sitem-off:hover { color:var(--t300); background:rgba(255,255,255,0.04); }

        /* Search */
        .s-input { width:100%; background:var(--t900); border:1px solid var(--t800); color:#fff; border-radius:7px; padding:0.5rem 0.75rem 0.5rem 2.2rem; font-family:'DM Sans',sans-serif; font-size:13px; outline:none; transition:border-color 0.2s; }
        .s-input:focus { border-color:var(--t500); }
        .s-input::placeholder { color:var(--t600); }

        /* Hamburger */
        .hamburger { display:flex; flex-direction:column; gap:5px; cursor:pointer; padding:6px; background:none; border:none; }
        .hamburger span { display:block; width:22px; height:2px; background:#fff; border-radius:2px; transition:all 0.28s; }
        .desk-nav { display:flex; gap:1.5rem; align-items:center; }
        @media(max-width:767px){ .desk-nav { display:none !important; } }
        .mob-btn { display:block; }
        @media(min-width:768px){ .mob-btn { display:none !important; } }
        .mob-menu { position:fixed; inset:0; top:56px; background:var(--t950); z-index:99; display:flex; flex-direction:column; padding:2rem 1.5rem; gap:1.25rem; border-top:1px solid var(--t800); overflow-y:auto; }

        /* Layout */
        .docs-layout { display:flex; flex:1; overflow:hidden; height:calc(100vh - 56px); }

        /* Sidebar */
        .sidebar { width:240px; flex-shrink:0; background:var(--t950); border-right:1px solid var(--t800); overflow-y:auto; padding:1.25rem 0.75rem; display:flex; flex-direction:column; gap:0.25rem; }
        @media(max-width:899px){ .sidebar { position:fixed; inset:56px 0 0 0; z-index:45; width:260px; transform:translateX(-100%); transition:transform 0.3s; padding-bottom:3rem; } }
        .sidebar-open { transform:translateX(0) !important; }

        /* Sidebar overlay */
        .soverlay { display:none; position:fixed; inset:0; top:56px; background:rgba(0,0,0,0.6); z-index:44; }
        @media(max-width:899px){ .soverlay { display:block; } }

        /* Main content */
        .doc-content { flex:1; overflow-y:auto; padding:2.5rem clamp(1.25rem,4vw,3rem); max-width:900px; }
        @media(max-width:640px){ .doc-content { padding:1.5rem 1.1rem 3rem; } }

        /* Mobile sidebar toggle */
        .sidebar-toggle { display:none; position:fixed; bottom:1.5rem; right:1.5rem; z-index:50; background:var(--t500); color:#fff; border:none; border-radius:50%; width:48px; height:48px; font-size:20px; cursor:pointer; box-shadow:0 4px 20px rgba(0,0,0,0.5); align-items:center; justify-content:center; }
        @media(max-width:899px){ .sidebar-toggle { display:flex; } }

        /* Breadcrumb */
        .bc { font-size:12px; color:var(--t500); margin-bottom:1.5rem; display:flex; align-items:center; flex-wrap:wrap; gap:4px; }
        .bc a { color:var(--t500); text-decoration:none; }
        .bc a:hover { color:var(--t300); }

        /* Prev/Next nav */
        .doc-nav { display:flex; gap:1rem; margin-top:3rem; padding-top:2rem; border-top:1px solid var(--t800); flex-wrap:wrap; }
        .doc-nav-btn { flex:1; min-width:140px; padding:0.9rem 1rem; border:1px solid var(--t800); border-radius:9px; text-decoration:none; background:var(--t900); transition:all 0.2s; display:flex; flex-direction:column; gap:3px; }
        .doc-nav-btn:hover { border-color:var(--t600); background:var(--t800); }
        .doc-nav-btn .label { font-size:11px; color:var(--t500); text-transform:uppercase; letter-spacing:0.08em; font-weight:700; }
        .doc-nav-btn .title { font-size:14px; color:#fff; font-weight:600; }

        /* On-this-page TOC (right rail) */
        .toc-rail { width:180px; flex-shrink:0; padding:1.5rem 0 1.5rem 1.5rem; position:sticky; top:0; max-height:calc(100vh - 56px); overflow-y:auto; align-self:flex-start; display:block; }
        @media(max-width:1199px){ .toc-rail { display:none; } }
        .toc-item { display:block; font-size:12px; color:var(--t600); text-decoration:none; padding:3px 0 3px 10px; border-left:2px solid var(--t800); margin-bottom:3px; transition:all 0.15s; }
        .toc-item:hover { color:var(--t300); border-left-color:var(--t500); }

        /* Content wrapper */
        .content-wrap { display:flex; flex:1; overflow:hidden; }
      `}</style>

      {/* ── Navbar ── */}
      <nav style={{ background: "var(--t950)", borderBottom: "1px solid var(--t800)", position: "sticky", top: 0, zIndex: 50, flexShrink: 0 }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <a href="/" style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: "#fff", textDecoration: "none", flexShrink: 0 }}>
              One<span style={{ color: "var(--t400)" }}>Rx</span>
            </a>
            <span style={{ color: "var(--t700)", fontSize: 18, display: "none" }} className="desk-sep" />
            <span style={{ background: "rgba(154,74,40,0.18)", color: "var(--t300)", padding: "2px 10px", borderRadius: 4, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }} className="desk-tag">
              <style>{`@media(max-width:480px){.desk-tag{display:none}}`}</style>
              DOCS
            </span>
          </div>

          <div className="desk-nav">
            {["Home","About","OneRx Hub","Blog","Membership","Contact"].map(l => (
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
            {["Home","About","OneRx Hub","Blog","Membership","Contact"].map(l => (
              <a key={l} href="/" className="nlink" style={{ fontSize: 18, fontWeight: 500, paddingBottom: "0.25rem", borderBottom: "1px solid var(--t800)" }} onClick={() => setMenuOpen(false)}>{l}</a>
            ))}
            <a href="/login" style={{ background: "var(--t500)", color: "#fff", padding: "0.7rem 1.2rem", borderRadius: 8, fontSize: 15, textDecoration: "none", fontWeight: 600, textAlign: "center" }} onClick={() => setMenuOpen(false)}>Login</a>
          </div>
        )}
      </nav>

      {/* ── Docs Layout ── */}
      <div className="docs-layout">

        {/* Sidebar overlay (mobile) */}
        {sidebarOpen && <div className="soverlay" onClick={() => setSidebarOpen(false)} />}

        {/* ── Sidebar ── */}
        <aside className={`sidebar${sidebarOpen ? " sidebar-open" : ""}`}>
          {/* Search */}
          <div style={{ position: "relative", marginBottom: "1rem" }}>
            <svg style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", color: "var(--t600)", pointerEvents: "none" }} width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input className="s-input" placeholder="Search docs…" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          </div>

          {filteredNav.map(group => (
            <div key={group.group} style={{ marginBottom: "1.25rem" }}>
              <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--t600)", padding: "0 0.75rem", marginBottom: "0.4rem" }}>
                {group.group}
              </div>
              {group.items.map(item => (
                <button key={item.id} onClick={() => navigate(item.id)}
                  className={`sitem ${activeSection === item.id ? "sitem-on" : "sitem-off"}`}>
                  {item.label}
                </button>
              ))}
            </div>
          ))}

          {filteredNav.length === 0 && (
            <div style={{ fontSize: 13, color: "var(--t600)", padding: "0.5rem 0.75rem" }}>No results found.</div>
          )}
        </aside>

        {/* ── Content + TOC ── */}
        <div className="content-wrap">
          <main className="doc-content" ref={contentRef}>
            {/* Breadcrumb */}
            <div className="bc">
              <a href="/">OneRx Hub</a>
              <span>/</span>
              <a href="/docs">Docs</a>
              <span>/</span>
              <span style={{ color: "var(--t300)" }}>{allNavItems.find(i => i.id === activeSection)?.label}</span>
            </div>

            {/* Section content */}
            {SECTION_MAP[activeSection] || <Para>Section not found.</Para>}

            {/* Prev / Next navigation */}
            {(() => {
              const idx = allNavItems.findIndex(i => i.id === activeSection);
              const prev = allNavItems[idx - 1];
              const next = allNavItems[idx + 1];
              return (
                <div className="doc-nav">
                  {prev ? (
                    <button onClick={() => navigate(prev.id)} className="doc-nav-btn" style={{ textAlign: "left", cursor: "pointer" }}>
                      <span className="label">← Previous</span>
                      <span className="title">{prev.label}</span>
                    </button>
                  ) : <div style={{ flex: 1 }} />}
                  {next && (
                    <button onClick={() => navigate(next.id)} className="doc-nav-btn" style={{ textAlign: "right", cursor: "pointer" }}>
                      <span className="label">Next →</span>
                      <span className="title">{next.label}</span>
                    </button>
                  )}
                </div>
              );
            })()}
          </main>

          {/* ── TOC right rail (desktop xl only) ── */}
          <div className="toc-rail">
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--t600)", marginBottom: "0.75rem" }}>On this page</div>
            {NAV_SECTIONS.flatMap(g => g.items).filter(i => i.id === activeSection).map(() =>
              NAV_SECTIONS.flatMap(g => g.items).slice(
                NAV_SECTIONS.flatMap(g => g.items).findIndex(i => i.id === activeSection),
                NAV_SECTIONS.flatMap(g => g.items).findIndex(i => i.id === activeSection) + 4
              ).map(item => (
                <button key={item.id} onClick={() => navigate(item.id)} className="toc-item" style={{ display: "block", background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", textAlign: "left", width: "100%" }}>
                  {item.label}
                </button>
              ))
            )}
            <div style={{ marginTop: "2rem", paddingTop: "1rem", borderTop: "1px solid var(--t800)" }}>
              <a href="mailto:admin@myonerx.ca" style={{ fontSize: 12, color: "var(--t500)", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
                <span>✉</span> Get help
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating sidebar toggle (mobile) */}
      <button className="sidebar-toggle" onClick={() => setSidebarOpen(o => !o)} aria-label="Toggle sidebar">
        {sidebarOpen ? "✕" : "☰"}
      </button>
    </div>
  );
}