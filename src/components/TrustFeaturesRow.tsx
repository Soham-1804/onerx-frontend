import React from "react";

const cards = [
  { title: "AI-Driven Savings", desc: "Save up to 20% through automated buying insights.", icon: (<> <svg className="w-10 h-10 text-terra-500" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor"/></svg> </>) },
  { title: "Smarter Ordering", desc: "Intelligent reporting and smart reminders eliminate manual work.", icon: (<> <svg className="w-10 h-10 text-terra-500" viewBox="0 0 24 24" fill="none"><rect x="4" y="6" width="16" height="12" stroke="currentColor"/></svg> </>) },
  { title: "Smarter Vendor Choices", desc: "Compare drug prices and rewards across vendors instantly.", icon: (<> <svg className="w-10 h-10 text-terra-500" viewBox="0 0 24 24" fill="none"><path d="M6 7h12M6 12h8M6 17h4" stroke="currentColor"/></svg> </>) },
  { title: "Effortless Data Import", desc: "Import billing data via CSV. System auto-calculates rewards.", icon: (<> <svg className="w-10 h-10 text-terra-500" viewBox="0 0 24 24" fill="none"><path d="M12 3v12" stroke="currentColor"/><path d="M8 11l4 4 4-4" stroke="currentColor"/></svg> </>) },
  { title: "Powerful Analytics Dashboard", desc: "Track purchases, rewards, and performance visually.", icon: (<> <svg className="w-10 h-10 text-terra-500" viewBox="0 0 24 24" fill="none"><path d="M4 20v-8h4v8h-4zM12 20v-12h4v12h-4zM20 20v-4h0" stroke="currentColor"/></svg> </>) },
  { title: "Multi-Store Flexibility", desc: "Manage single or multiple stores with role-based access.", icon: (<> <svg className="w-10 h-10 text-terra-500" viewBox="0 0 24 24" fill="none"><path d="M3 11h18v10H3zM7 11V6h10v5" stroke="currentColor"/></svg> </>) },
  { title: "Real-Time Notifications", desc: "Email alerts and dashboard updates on every change.", icon: (<> <svg className="w-10 h-10 text-terra-500" viewBox="0 0 24 24" fill="none"><path d="M12 22c1.1 0 2-.9 2-2H10c0 1.1.9 2 2 2z" stroke="currentColor"/><path d="M18 16v-5a6 6 0 10-12 0v5l-2 2h16l-2-2z" stroke="currentColor"/></svg> </>) },
  { title: "Secure & Compliant", desc: "AWS cloud, encrypted database, GDPR-compliant infrastructure.", icon: (<> <svg className="w-10 h-10 text-terra-500" viewBox="0 0 24 24" fill="none"><path d="M12 2l4 4v4a4 4 0 11-8 0V6l4-4z" stroke="currentColor"/></svg> </>) },
];

export default function TrustFeaturesRow() {
  return (
    <section className="bg-terra-50 py-16">
      <div className="container-wide">
        <h3 className="text-center text-[36px] font-display text-terra-950 mb-10">What Makes OneRx Your Trusted Partner</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="bg-terra-100 p-5 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-none">{c.icon}</div>
                <div>
                  <h4 className="text-[16px] font-display text-terra-950">{c.title}</h4>
                  <p className="text-sm text-terra-600 mt-1">{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
