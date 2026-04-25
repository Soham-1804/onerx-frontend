import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TrustFeaturesRow from "../components/TrustFeaturesRow";
import ModuleCTA from "../components/ModuleCTA";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function RxManager() {
  useEffect(() => {
    document.title = "Rx Manager — Modern Pharmacy POS & Inventory | OneRx";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Unify your dispensary and front shop with Rx Manager. A cloud-native POS and inventory management system.');
  }, []);

  const { ref: introRef, isVisible: introVis } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVis } = useScrollAnimation();
  const { ref: workflowRef, isVisible: workflowVis } = useScrollAnimation();

  const modules = [
    { label: "Rx Intelligence", to: "/rx-intelligence" },
    { label: "Rx Manager", to: "/rx-manager" },
    { label: "Rx Suite", to: "/rx-suite" },
    { label: "Rx Incident", to: "/rx-incident" },
  ];

  return (
    <div className="page-fade bg-white">
      <Navigation />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-terra-950 to-terra-800 text-white pt-32 pb-16">
        <div className="container-wide flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="w-full lg:w-1/2">
            <div className="text-sm text-terra-400 mb-3 flex items-center gap-2">
              <Link to="/" className="hover:text-white transition-colors"></Link> 
              <span></span> 
              <span className="text-white">Rx Manager</span>
            </div>
            <div className="uppercase tracking-widest text-[11px] text-terra-500 mb-4 font-medium">POINT OF SALE & INVENTORY</div>
            <h1 className="font-display text-[48px] md:text-[56px] leading-tight">The bridge between dispensary and front shop.</h1>
            <p className="text-[18px] text-terra-300 mt-6 max-w-lg">
              Eliminate the disconnect between your prescription software and your cash register. Rx Manager is a cloud-native POS that unifies checkout, controls inventory, and simplifies financial reporting.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 bg-terra-500 rounded text-white font-medium hover:bg-terra-400 transition-colors">Book a Demo</a>
              <Link to="/pricing" className="px-6 py-3 border border-white/30 rounded text-white hover:bg-white/10 transition-colors">View Pricing</Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            {/* Floating POS Transaction UI Widget */}
            <div className="bg-terra-900 border border-terra-700 rounded-xl p-6 w-full max-w-md animate-[float_4s_ease-in-out_infinite] shadow-2xl relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-40 h-40 bg-terra-500/10 rounded-full blur-3xl"></div>
              
              <div className="flex justify-between items-center mb-6 border-b border-terra-800 pb-3">
                <div className="text-[11px] uppercase tracking-widest text-terra-400">Transaction #8402</div>
                <div className="text-[11px] text-terra-500">Till 02 · Cashier: E. Clark</div>
              </div>
              
              <div className="flex-grow space-y-4 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-white text-[14px] font-medium">Rx: Amoxicillin 500mg</div>
                    <div className="text-[11px] text-terra-400">Patient Copay · Jane Doe</div>
                  </div>
                  <div className="text-white font-mono text-[14px]">$12.50</div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-white text-[14px] font-medium">Tylenol Extra Strength</div>
                    <div className="text-[11px] text-terra-400">OTC · UPC: 062600941235</div>
                  </div>
                  <div className="text-white font-mono text-[14px]">$8.99</div>
                </div>
                <div className="flex justify-between items-start opacity-50">
                  <div>
                    <div className="text-white text-[14px] font-medium line-through">Vitamins D3 1000IU</div>
                    <div className="text-[11px] text-terra-400">Voided by Manager</div>
                  </div>
                  <div className="text-white font-mono text-[14px] line-through">$14.99</div>
                </div>
              </div>
              
              <div className="border-t border-terra-800 pt-4 mt-auto">
                <div className="flex justify-between items-end mb-4">
                  <div className="text-[12px] text-terra-400 uppercase tracking-widest">Total Due</div>
                  <div className="font-display text-[36px] text-white leading-none">$21.49</div>
                </div>
                <div className="w-full bg-terra-500 text-white text-center py-2.5 rounded text-[13px] font-medium flex items-center justify-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                  Tap to Pay
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Module switcher strip */}
        <div className="mt-12 bg-terra-950/50 border-t border-terra-800 py-4">
          <div className="container-wide flex flex-wrap items-center justify-center gap-3 md:gap-6">
            {modules.map((m) => (
              <Link 
                key={m.label} 
                to={m.to} 
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  m.to === "/rx-manager" 
                    ? "bg-terra-500 text-white shadow-lg" 
                    : "text-terra-300 hover:text-white hover:bg-terra-800"
                }`}
              >
                {m.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main>
        {/* Intro Section */}
        <section ref={introRef as any} className={`py-24 ${introVis ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="text-[11px] uppercase tracking-widest text-terra-500 mb-3 font-medium">UNIFIED WORKFLOWS</div>
              <h2 className="font-display text-[40px] text-terra-950 mb-6 leading-tight">Stop maintaining two separate ledgers.</h2>
              <p className="text-[16px] text-terra-600 mb-4 leading-relaxed">
                Most pharmacies run legacy dispensing software alongside a generic retail POS. This causes friction: cashiers manually type in prescription copays, inventory counts drift out of sync, and end-of-day reconciliation takes hours.
              </p>
              <p className="text-[16px] text-terra-600 leading-relaxed">
                Rx Manager integrates directly with Rx Suite. When a prescription is filled, the copay instantly appears at the front till. One scan, one transaction, zero manual entry errors.
              </p>
            </div>
            
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-terra-50 border border-terra-100 p-8 rounded-xl flex flex-col justify-center items-center text-center">
                <div className="font-display text-[48px] text-terra-500 mb-2">100%</div>
                <div className="text-[13px] text-terra-700 font-medium">Rx to POS Sync Rate</div>
              </div>
              <div className="bg-terra-50 border border-terra-100 p-8 rounded-xl flex flex-col justify-center items-center text-center">
                <div className="font-display text-[48px] text-terra-500 mb-2">15m</div>
                <div className="text-[13px] text-terra-700 font-medium">Saved daily on till reconciliation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section ref={featuresRef as any} className={`py-24 bg-terra-50 border-y border-terra-100 ${featuresVis ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide">
            <h3 className="text-center font-display text-[36px] text-terra-950 mb-16">Point of Sale & Inventory Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-white border-t-4 border-terra-500 p-8 rounded-b-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-terra-100 text-terra-600 rounded-lg flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                </div>
                <div className="text-[24px] font-display text-terra-950 mb-3">Unified Checkout</div>
                <p className="text-[15px] text-terra-600">Scan front-shop OTC items alongside prescription bags in a single transaction. Automatically calculate mixed-tax scenarios without cashier intervention.</p>
              </div>

              <div className="bg-white border-t-4 border-terra-500 p-8 rounded-b-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-terra-100 text-terra-600 rounded-lg flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <div className="text-[24px] font-display text-terra-950 mb-3">Automated Inventory Management</div>
                <p className="text-[15px] text-terra-600">Set min/max levels for front-shop SKUs. Rx Manager automatically generates vendor purchase orders when stock runs low, eliminating manual shelf-counting.</p>
              </div>

              <div className="bg-white border-t-4 border-terra-500 p-8 rounded-b-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-terra-100 text-terra-600 rounded-lg flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                </div>
                <div className="text-[24px] font-display text-terra-950 mb-3">Hardware Agnostic</div>
                <p className="text-[15px] text-terra-600">No need to buy proprietary hardware. Rx Manager runs in the cloud and integrates with your existing barcode scanners, receipt printers, and Moneris/Chase payment terminals.</p>
              </div>

              <div className="bg-white border-t-4 border-terra-500 p-8 rounded-b-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-terra-100 text-terra-600 rounded-lg flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div className="text-[24px] font-display text-terra-950 mb-3">Granular Staff Permissions</div>
                <p className="text-[15px] text-terra-600">Protect your margins. Require manager PIN overrides for price modifications, returns, voids, or opening the cash drawer outside of a transaction.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Workflow & Hardware Section */}
        <section ref={workflowRef as any} className={`py-24 bg-white ${workflowVis ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="container-wide space-y-24">
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="w-full lg:w-1/2 order-2 lg:order-1 bg-terra-50 p-12 rounded-2xl border border-terra-100 flex items-center justify-center">
                {/* Abstract Barcode / Hardware Graphic */}
                <div className="relative w-full max-w-sm h-48 bg-white border border-terra-200 rounded shadow-md flex items-center justify-center overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-terra-500 animate-[scan_2s_ease-in-out_infinite] shadow-[0_0_8px_rgba(204,120,92,0.8)]"></div>
                  <div className="flex gap-2 h-16 opacity-30 group-hover:opacity-60 transition-opacity">
                    {[1, 3, 2, 4, 1, 5, 2, 1, 3, 4, 2].map((w, i) => (
                      <div key={i} className="bg-terra-950 h-full" style={{ width: `${w * 4}px` }}></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="text-[11px] uppercase tracking-widest text-terra-500 mb-3 font-medium">SEAMLESS INTEGRATION</div>
                <h3 className="font-display text-[32px] text-terra-950 mb-6 leading-tight">Works with the hardware you already own.</h3>
                <p className="text-terra-600 text-[16px] mb-6 leading-relaxed">
                  Transitioning to a new POS shouldn't require thousands of dollars in new hardware. Rx Manager is browser-based and designed to communicate with standard USB/Bluetooth peripherals.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-terra-700">
                    <svg className="text-terra-500 shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Direct payment terminal integration (No double-entry)
                  </li>
                  <li className="flex items-center gap-3 text-terra-700">
                    <svg className="text-terra-500 shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Epson, Star, and Citizen receipt printer support
                  </li>
                  <li className="flex items-center gap-3 text-terra-700">
                    <svg className="text-terra-500 shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Honeywell and Zebra barcode scanner ready
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Benefits Bar */}
        <section className="py-12 bg-terra-950 text-white border-b border-terra-900">
          <div className="container-wide flex flex-wrap gap-8 justify-between">
            <div className="flex-1 min-w-[200px]">
              <div className="text-[18px] font-display mb-2 text-terra-300">Zero Pricing Errors</div>
              <div className="text-sm text-terra-400">Centrally manage front-shop pricing across all locations.</div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="text-[18px] font-display mb-2 text-terra-300">Offline Mode</div>
              <div className="text-sm text-terra-400">Keep ringing in sales even if your internet connection drops.</div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="text-[18px] font-display mb-2 text-terra-300">Customer Accounts</div>
              <div className="text-sm text-terra-400">Manage A/R, house accounts, and nursing home billing easily.</div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="text-[18px] font-display mb-2 text-terra-300">End-of-Day Simplified</div>
              <div className="text-sm text-terra-400">One-click batching and discrepancy reporting for cashiers.</div>
            </div>
          </div>
        </section>

        <TrustFeaturesRow />
        <ModuleCTA />
      </main>

      <Footer />
    </div>
  );
}