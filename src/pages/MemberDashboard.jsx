import React, { useState } from "react";
// import Navigation from "../components/Navigation";
// import Footer from "../components/Footer";

export default function MemberDashboard() {
  // --- UI STATE ---
  const [activeTab, setActiveTab] = useState("overview"); 
  const [reportSubTab, setReportSubTab] = useState("molecules");
  const [highlightKpi, setHighlightKpi] = useState(false);
  
  const [autoRenewSettings, setAutoRenewSettings] = useState({
    rx_intelligence: true,
    rx_manager: true,
    rx_suite: false,
    rx_incident: true
  });

  const toggleAutoRenew = (id) => {
    setAutoRenewSettings(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // --- INTERACTIVE DATA STATE ---
  const [financials, setFinancials] = useState({
    marginIncrease: 4.2,
    hunterSavings: 4150,
    automatedActions: 1204
  });

  const [aiActionItems, setAiActionItems] = useState([
    {
      id: "act_1",
      priority: 1,
      title: "Margin Hunter™: Molecule Switch",
      description: "Switch your primary Atorvastatin generic to Vendor B. This aligns with new group volume tiers.",
      math: "Current: $1.40/unit → Optimal: $0.92/unit",
      impact: 480,
      confidence: "98%",
      networkData: "74 network pharmacies executed this switch today.",
      type: "Purchasing",
      actionText: "Execute Switch"
    },
    {
      id: "act_2",
      priority: 2,
      title: "Silent Sentry™: Stock-out Warning",
      description: "Amoxicillin susp. trending 40% above 90-day average. Auto-order threshold adjusted.",
      math: "Current Stock: 4 days → Recommended: 14 days",
      impact: 150,
      confidence: "92%",
      networkData: "Regional shortage detected in your postal code.",
      type: "Inventory",
      actionText: "Verify Adjustment"
    }
  ]);

  const [auditLog, setAuditLog] = useState([
    { id: "SYS-9942", time: "10:42:15 AM", user: "System Auto", action: "OneRx Vault Backup", detail: "Daily encrypted cloud backup to AWS-East-1 verified.", status: "System" },
    { id: "SNT-1108", time: "09:15:02 AM", user: "Silent Sentry™", action: "Variance Alert", detail: "Pricing shift detected on secondary distributor catalog.", status: "Alert" },
    { id: "SHD-8821", time: "08:30:45 AM", user: "Firewall", action: "Threat Blocked", detail: "Intercepted 14 unauthorized remote login attempts (IP: 192.168.x).", status: "Security" },
    { id: "CQI-4091", time: "07:00:12 AM", user: "Pharm_Tech_02", action: "CQI+ Report", detail: "Anonymous near-miss logged securely. NIDR queued.", status: "Compliance" },
  ]);

  // --- EXECUTION LOGIC ---
  const executeAction = (directive) => {
    // 1. Update Financials
    setFinancials(prev => ({
      marginIncrease: parseFloat((prev.marginIncrease + 0.3).toFixed(1)),
      hunterSavings: prev.hunterSavings + directive.impact,
      automatedActions: prev.automatedActions + 1
    }));

    // 2. Remove from Engine
    setAiActionItems(prev => prev.filter(d => d.id !== directive.id));

    // 3. Update Audit Log
    const newLog = {
      id: `ACT-${Math.floor(1000 + Math.random() * 9000)}`,
      time: new Date().toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      user: "Dr. Jenkins (You)",
      action: "Directive Executed",
      detail: `Successfully processed: ${directive.title}. Captured $${directive.impact}.`,
      status: "Success"
    };
    setAuditLog(prev => [newLog, ...prev]);

    // 4. Trigger UI Flash
    setHighlightKpi(true);
    setTimeout(() => setHighlightKpi(false), 800);
  };

  // --- STATIC DATA MOCKS ---
  const savingsChartData = [
    { month: "Jan", rebates: 40, workflow: 20, inventory: 15, total: "$2,100" },
    { month: "Feb", rebates: 55, workflow: 25, inventory: 20, total: "$3,450" },
    { month: "Mar", rebates: 45, workflow: 30, inventory: 35, total: "$3,100" },
    { month: "Apr", rebates: 75, workflow: 35, inventory: 40, total: "$4,150" },
  ];

  const moleculeLedger = [
    { din: "02244221", name: "Atorvastatin 20mg Tab", volume: "14,200", currentVendor: "Vendor A", currentCost: "$0.14", recVendor: "Vendor B", recCost: "$0.09", impact: "$710.00", status: "Action Needed" },
    { din: "02229440", name: "Pantoprazole 40mg Ent", volume: "8,450", currentVendor: "Vendor C", currentCost: "$0.11", recVendor: "Vendor A", recCost: "$0.07", impact: "$338.00", status: "Action Needed" },
    { din: "02238251", name: "Metformin 500mg Tab", volume: "22,100", currentVendor: "Vendor A", currentCost: "$0.04", recVendor: "Vendor D", recCost: "$0.02", impact: "$442.00", status: "Optimized" },
  ];

  const rebateReconciliation = {
    totalPending: "$12,402.50",
    clearedYTD: "$48,910.00",
    disputed: "$840.00",
    breakdown: [
      { vendor: "Primary Distributor (Mck)", expected: "$8,200.00", status: "Processing", date: "Apr 30, 2026" },
      { vendor: "Vendor B Direct", expected: "$3,152.50", status: "Cleared", date: "Apr 21, 2026" },
      { vendor: "Vendor C Volume Bonus", expected: "$1,050.00", status: "Disputed - Volume Mismatch", date: "Pending" }
    ]
  };

  const activeModules = [
    {
      id: "rx_intelligence", name: "Rx Intelligence", tagline: "The Brain of the Pharmacy", status: "Active",
      renewalDate: "Oct 15, 2026", cost: "Rx Empowered ($149/mo)", usage: 85, usageLabel: "Data processing capacity",
      metrics: [{ label: "Margin Hunter Saves", value: "$12,450" }, { label: "Savings Simulations", value: "14" }]
    },
    {
      id: "rx_manager", name: "Rx Manager", tagline: "Smart Operations Hub", status: "Active",
      renewalDate: "Nov 01, 2026", cost: "Included in Core", usage: 62, usageLabel: "Workflow automation used",
      metrics: [{ label: "Procurement Savings", value: "$4,200" }, { label: "Appointments Booked", value: "142" }]
    },
    {
      id: "rx_incident", name: "Rx Incident", tagline: "Anonymous CQI+ Intelligence", status: "Active",
      renewalDate: "Included", cost: "Free with Core Hub", usage: 100, usageLabel: "Compliance Rate",
      metrics: [{ label: "NIDR Submissions", value: "Automated" }, { label: "Root Causes ID'd", value: "2" }]
    },
    {
      id: "rx_suite", name: "Rx Suite", tagline: "IT & Pharmacy Infrastructure", status: "Action Required", 
      renewalDate: "May 01, 2026", cost: "$49 / month", usage: 42, usageLabel: "Vault storage utilized",
      metrics: [{ label: "Shield Threats Blocked", value: "1,204" }, { label: "Connect VoIP Uptime", value: "99.9%" }]
    }
  ];

  const availableModules = [
    { id: "rx_marketplace", name: "Rx Marketplace", tagline: "Direct Vendor Dropship Access", description: "Bypass the middleman entirely. Get direct access to vendor catalogs, group negotiated savings, and priority allocations.", potentialValue: "Est. 12-18% Margin Increase", price: "Direct Access" },
    { id: "rx_flex", name: "Upgrade to Rx Flex", tagline: "The Enterprise Optimizer Model", description: "Built for multi-store owners. Includes Auto-Pilot Procurement logic engine that automatically swaps inventory choices for highest yield with zero clicks.", potentialValue: "Maximum Automation & Output", price: "From $199/mo" }
  ];

  return (
    <div className="page-fade bg-[#FAFAFA] min-h-screen flex flex-col font-sans">
      {/* Global System Health Ribbon */}
      <div className="bg-terra-950 text-terra-300 py-1.5 px-6 text-[11px] uppercase tracking-widest font-mono flex justify-between items-center border-b border-terra-900">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-green-400">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            ALL SYSTEMS OPERATIONAL
          </span>
          <span className="hidden sm:inline">| Latency: 14ms</span>
          <span className="hidden sm:inline">| Kroll API: Synced (0s ago)</span>
        </div>
        <div>OneRx Infrastructure v2.4.1</div>
      </div>

      <main className="flex-grow pt-12 pb-32">
        <div className="container-wide max-w-7xl mx-auto px-6">
          
          {/* Top Bar Navigation */}
          <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-terra-200">
            <div>
              <h1 className="font-display text-[40px] text-terra-950 leading-tight mb-2">
                OneRx Command
              </h1>
              <div className="flex items-center gap-2 text-[14px] font-bold text-terra-700 bg-terra-100 hover:bg-terra-200 cursor-pointer px-4 py-1.5 rounded-lg transition-colors inline-flex">
                Apex Pharmacy • Store #042 (Main)
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden md:block mr-4">
                <div className="text-[12px] uppercase tracking-widest font-bold text-terra-950">Dr. Sarah Jenkins</div>
                <div className="text-[11px] text-terra-500 font-mono">Owner / Admin Access</div>
              </div>
              <div className="w-10 h-10 rounded-full border border-terra-200 flex items-center justify-center text-terra-950 hover:bg-terra-100 transition relative cursor-pointer">
                <div className="w-5 h-5 bg-terra-950 text-white rounded-full flex items-center justify-center font-display text-[12px]">1</div>
              </div>
            </div>
          </header>

          {/* Navigation Tabs */}
          <div className="flex border-b border-terra-200 mb-8 overflow-x-auto no-scrollbar gap-8">
            {['overview', 'memberships', 'reports'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-[13px] uppercase tracking-wider font-bold whitespace-nowrap transition-colors relative ${
                  activeTab === tab ? 'text-terra-950' : 'text-terra-400 hover:text-terra-700'
                }`}
              >
                {tab === 'overview' ? 'Executive Overview' : 
                 tab === 'memberships' ? 'Module Infrastructure' : 'Margin Hunter™ Reports'}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-terra-950" />
                )}
              </button>
            ))}
          </div>

          {/* DYNAMIC KPI ROW (Visible across tabs) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            
            <div className={`bg-white border rounded-xl p-6 shadow-sm transition-all duration-500 ${highlightKpi ? 'border-green-400 bg-green-50' : 'border-terra-200'}`}>
              <div className="text-[10px] uppercase tracking-widest text-terra-500 mb-3 font-bold">Net Margin Increase</div>
              <div className={`font-display text-[32px] mb-1 leading-none transition-colors duration-500 ${highlightKpi ? 'text-green-700' : 'text-terra-950'}`}>
                +{financials.marginIncrease}%
              </div>
              <div className="text-[11px] text-terra-400 font-medium mb-1">vs. previous 30 days</div>
            </div>

            <div className={`bg-white border rounded-xl p-6 shadow-sm transition-all duration-500 ${highlightKpi ? 'border-green-400 bg-green-50' : 'border-terra-200'}`}>
              <div className="text-[10px] uppercase tracking-widest text-terra-500 mb-3 font-bold">Margin Hunter™ Savings</div>
              <div className={`font-display text-[32px] mb-1 leading-none transition-colors duration-500 ${highlightKpi ? 'text-green-700' : 'text-terra-950'}`}>
                ${financials.hunterSavings.toLocaleString()}
              </div>
              <div className="text-[11px] text-terra-400 font-medium mb-1">Identified & Captured YTD</div>
            </div>

            <div className={`bg-white border rounded-xl p-6 shadow-sm transition-all duration-500 ${highlightKpi ? 'border-green-400 bg-green-50' : 'border-terra-200'}`}>
              <div className="text-[10px] uppercase tracking-widest text-terra-500 mb-3 font-bold">Automated Actions</div>
              <div className={`font-display text-[32px] mb-1 leading-none transition-colors duration-500 ${highlightKpi ? 'text-green-700' : 'text-terra-950'}`}>
                {financials.automatedActions.toLocaleString()}
              </div>
              <div className="text-[11px] text-terra-400 font-medium mb-1">Manual clicks saved</div>
            </div>

            <div className="bg-white border border-terra-200 rounded-xl p-6 shadow-sm">
              <div className="text-[10px] uppercase tracking-widest text-terra-500 mb-3 font-bold">Pending Rebates</div>
              <div className="font-display text-[32px] text-terra-950 mb-1 leading-none">$12,402</div>
              <div className="text-[11px] text-terra-400 font-medium mb-1">Awaiting vendor clearing</div>
            </div>

          </div>

          {/* =========================================
              TAB 1: EXECUTIVE OVERVIEW 
              ========================================= */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fade-up">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* INTERACTIVE SMART ENGINE */}
                <div className="lg:col-span-1 flex flex-col gap-6">
                  <div className="bg-terra-950 rounded-xl border border-terra-900 p-6 shadow-md flex-grow flex flex-col relative overflow-hidden">
                    <div className="relative z-10 mb-6 flex justify-between items-start">
                      <div>
                        <h3 className="font-display text-[22px] text-white">Rx Intelligence</h3>
                        <p className="text-[12px] text-terra-400 mt-1 uppercase tracking-widest">Automated Directives</p>
                      </div>
                      <div className="text-[10px] font-mono bg-terra-900 text-terra-300 px-2 py-1 rounded">{aiActionItems.length} PENDING</div>
                    </div>

                    {aiActionItems.length === 0 ? (
                      <div className="flex-grow flex flex-col items-center justify-center text-center p-6 border border-dashed border-terra-800 rounded-lg">
                        <div className="w-12 h-12 bg-terra-900 rounded-full flex items-center justify-center text-green-400 mb-4">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"></path></svg>
                        </div>
                        <h4 className="text-white font-display text-[18px]">All Systems Optimized</h4>
                        <p className="text-[12px] text-terra-400 mt-2">Zero pending actions. Your pharmacy is running at peak efficiency.</p>
                      </div>
                    ) : (
                      <div className="space-y-4 flex-grow relative z-10">
                        {aiActionItems.map((action) => (
                          <div key={action.id} className="bg-terra-900/40 border border-terra-800 rounded-lg p-5 hover:bg-terra-800 transition-colors">
                            <div className="flex justify-between items-start mb-3">
                              <span className="text-[10px] uppercase tracking-widest text-terra-300 font-bold bg-terra-950 px-2 py-1 rounded border border-terra-800 flex items-center gap-2">
                                {action.type}
                              </span>
                              <div className="flex gap-2 items-center">
                                <span className="text-[10px] font-mono text-green-400">Conf: {action.confidence}</span>
                                {action.priority === 1 && <span className="flex items-center justify-center w-5 h-5 rounded bg-white text-terra-950 font-display text-[12px]">1</span>}
                              </div>
                            </div>
                            
                            <h4 className="text-[15px] font-display text-white mb-2 leading-snug">{action.title}</h4>
                            <p className="text-[12px] text-terra-300 mb-3 leading-relaxed">{action.description}</p>
                            
                            <div className="bg-terra-950 p-2.5 rounded text-[11px] font-mono text-terra-400 mb-3 border border-terra-800 flex flex-col gap-1">
                              <div className="text-white">{action.math}</div>
                            </div>

                            <div className="flex items-center gap-2 text-[10px] text-terra-400 mb-4 bg-terra-900/30 p-2 rounded">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                              {action.networkData}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-terra-800">
                              <span className="text-[13px] font-bold text-green-400">+${action.impact}</span>
                              <div className="flex gap-2">
                                <button onClick={() => executeAction(action)} className="text-[10px] uppercase tracking-widest text-terra-950 font-bold bg-white px-4 py-2 rounded hover:bg-green-400 transition-colors shadow-sm active:scale-95">
                                  {action.actionText}
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* MIDDLE RIGHT: Audit Log & Chart */}
                <div className="lg:col-span-2 flex flex-col gap-8">
                  
                  {/* Financial Matrix Chart */}
                  <div className="bg-white border border-terra-200 rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-display text-[18px] text-terra-950">YTD Margin Recovery Matrix</h3>
                        <p className="text-[12px] text-terra-500 mt-1">Cross-referenced savings by operational category.</p>
                      </div>
                      <span className="text-[11px] uppercase tracking-widest font-bold text-terra-950 border border-terra-200 bg-terra-50 px-3 py-1.5 rounded">Trailing 4 Months</span>
                    </div>
                    <div className="h-48 flex items-end gap-4 pt-4 border-b border-terra-100 pb-2">
                      {savingsChartData.map((data, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end group cursor-pointer relative">
                          <div className="w-full flex flex-col-reverse items-center gap-1 opacity-85 group-hover:opacity-100 transition-opacity">
                            <div className="w-full bg-terra-300 rounded-sm" style={{ height: `${data.inventory}%` }}></div>
                            <div className="w-full bg-terra-500 rounded-sm" style={{ height: `${data.workflow}%` }}></div>
                            <div className="w-full bg-terra-950 rounded-sm" style={{ height: `${data.rebates}%` }}></div>
                          </div>
                          <div className="text-center mt-3 text-[11px] uppercase tracking-widest text-terra-500 font-bold group-hover:text-terra-950 transition-colors">{data.month}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-6 mt-5 justify-center">
                      <div className="flex items-center gap-2 text-[11px] text-terra-600 font-medium"><span className="w-3 h-3 bg-terra-950 rounded-sm"></span> Direct Rebates</div>
                      <div className="flex items-center gap-2 text-[11px] text-terra-600 font-medium"><span className="w-3 h-3 bg-terra-500 rounded-sm"></span> Workflow Efficiency</div>
                      <div className="flex items-center gap-2 text-[11px] text-terra-600 font-medium"><span className="w-3 h-3 bg-terra-300 rounded-sm"></span> Inventory Optimization</div>
                    </div>
                  </div>

                  {/* High-Density System Audit Log (LIVE) */}
                  <div className="bg-white border border-terra-200 rounded-xl shadow-sm overflow-hidden flex-grow flex flex-col">
                    <div className="px-6 py-4 border-b border-terra-100 bg-terra-50 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <h3 className="font-display text-[18px] text-terra-950">Ecosystem Audit Trail</h3>
                        <span className="bg-terra-200 text-terra-700 text-[10px] font-mono px-2 py-0.5 rounded animate-pulse">LIVE</span>
                      </div>
                      <div className="flex gap-3">
                        <button className="text-[11px] text-terra-500 uppercase tracking-widest hover:text-terra-950 font-bold border border-terra-200 px-3 py-1 rounded bg-white">Export CSV</button>
                      </div>
                    </div>
                    <div className="p-0 overflow-x-auto max-h-[300px] overflow-y-auto">
                      <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                          <tr className="bg-white border-b border-terra-100 text-[10px] uppercase tracking-widest text-terra-400 sticky top-0">
                            <th className="py-3 pl-6 font-medium">Ref ID / Time</th>
                            <th className="py-3 px-4 font-medium">Actor</th>
                            <th className="py-3 px-4 font-medium">Event Detail</th>
                            <th className="py-3 pr-6 font-medium text-right">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {auditLog.map((log, idx) => (
                            <tr key={idx} className={`border-b border-terra-50 transition-colors group ${log.user.includes('You') ? 'bg-green-50/50 hover:bg-green-50' : 'hover:bg-terra-50'}`}>
                              <td className="py-3.5 pl-6 w-32">
                                <div className="text-[11px] text-terra-900 font-mono font-bold mb-0.5">{log.id}</div>
                                <div className="text-[10px] text-terra-400 font-mono">{log.time}</div>
                              </td>
                              <td className="py-3.5 px-4 w-36">
                                <div className={`text-[11px] font-bold inline-block px-2 py-1 rounded border ${log.user.includes('You') ? 'text-green-700 bg-green-100 border-green-200' : 'text-terra-700 bg-terra-100/50 border-terra-100'}`}>
                                  {log.user}
                                </div>
                              </td>
                              <td className="py-3.5 px-4">
                                <div className="text-[13px] font-bold text-terra-950 mb-0.5">{log.action}</div>
                                <div className="text-[12px] text-terra-500 line-clamp-1">{log.detail}</div>
                              </td>
                              <td className="py-3.5 pr-6 text-right">
                                <span className={`text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-md font-bold shadow-sm border ${
                                  log.status === 'Success' || log.status === 'Compliance' ? 'bg-green-50 text-green-700 border-green-100' :
                                  log.status === 'Alert' ? 'bg-amber-50 text-amber-700 border-amber-100' :
                                  log.status === 'Security' ? 'bg-red-50 text-red-700 border-red-100' :
                                  'bg-white text-terra-600 border-terra-200'
                                }`}>
                                  {log.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* =========================================
              TAB 2: MODULE INFRASTRUCTURE 
              ========================================= */}
          {activeTab === 'memberships' && (
             <div className="animate-fade-up">
              <div className="mb-10 flex justify-between items-end">
                <div>
                  <h2 className="font-display text-[28px] text-terra-950">Deployed Infrastructure</h2>
                  <p className="text-[14px] text-terra-600 mt-1">Manage billing, access controls, and view live telemetry across the OneRx stack.</p>
                </div>
              </div>

              <div className="space-y-6 mb-20">
                {activeModules.map((module) => (
                  <div key={module.id} className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${module.status === 'Action Required' ? 'border-amber-300 shadow-md ring-1 ring-amber-100' : 'border-terra-200 shadow-sm hover:shadow-md'}`}>
                    
                    <div className="p-6 md:p-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-terra-100 bg-gradient-to-r from-white to-terra-50/30">
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-lg bg-terra-950 text-white flex items-center justify-center font-display text-[24px] flex-shrink-0">1</div>
                        <div>
                          <h3 className="font-display text-[22px] text-terra-950 flex items-center gap-3">
                            {module.name}
                            <span className={`text-[9px] px-2 py-0.5 rounded-full uppercase tracking-widest font-bold border ${module.status === 'Action Required' ? 'bg-amber-100 text-amber-700 border-amber-200' : 'bg-green-100 text-green-700 border-green-200'}`}>
                              {module.status}
                            </span>
                          </h3>
                          <div className="text-[12px] text-terra-500 uppercase tracking-widest mt-1.5 font-medium">{module.tagline}</div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-white px-6 py-4 rounded-lg border border-terra-200 shadow-sm">
                        <div>
                          <div className="text-[10px] uppercase tracking-widest text-terra-400 mb-1 font-bold">Current Plan</div>
                          <div className="text-[14px] font-bold text-terra-950">{module.cost}</div>
                        </div>
                        <div className="h-10 w-[1px] bg-terra-100 hidden sm:block"></div>
                        <div className="flex items-center gap-3">
                          <span className="text-[12px] font-bold text-terra-700">Auto-Renew</span>
                          <button onClick={() => toggleAutoRenew(module.id)} className={`w-12 h-6 rounded-full transition-colors relative flex items-center border border-transparent ${autoRenewSettings[module.id] ? 'bg-green-600' : 'bg-terra-200 border-terra-300'}`}>
                            <div className={`w-4 h-4 bg-white rounded-full shadow-md transition-transform transform ${autoRenewSettings[module.id] ? 'translate-x-7' : 'translate-x-1'}`} />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 md:p-8 bg-white grid grid-cols-1 lg:grid-cols-2 gap-12">
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest text-terra-400 font-bold mb-5">Verified 30-Day Impact</h4>
                        <div className="space-y-4">
                          {module.metrics.map((metric, idx) => (
                            <div key={idx} className="flex justify-between items-end">
                              <span className="text-[12px] text-terra-600 font-medium">{metric.label}</span>
                              <span className="font-display text-[18px] text-terra-950">{metric.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                         <h4 className="text-[10px] uppercase tracking-widest text-terra-400 font-bold mb-5">System Telemetry</h4>
                         <div>
                           <div className="flex justify-between items-end mb-2">
                             <span className="text-[12px] font-bold text-terra-950">{module.usageLabel}</span>
                             <span className="text-[12px] font-mono font-bold text-terra-600">{module.usage}%</span>
                           </div>
                           <div className="w-full h-2 bg-terra-100 rounded-full overflow-hidden shadow-inner border border-terra-200">
                             <div className={`h-full rounded-full transition-all duration-1000 ${module.usage > 80 ? 'bg-amber-500' : 'bg-terra-950'}`} style={{ width: `${module.usage}%` }}></div>
                           </div>
                         </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* MARKETPLACE SECTION */}
              <div className="pt-12 border-t border-terra-200">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <h2 className="font-display text-[28px] text-terra-950">Module Marketplace</h2>
                    <p className="text-[14px] text-terra-600 mt-1">Upgrade your tier or unlock additional capabilities to scale efficiency.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {availableModules.map((module) => (
                    <div key={module.id} className="bg-white rounded-xl border border-terra-300 border-dashed p-8 flex flex-col justify-between hover:border-terra-400 hover:shadow-sm transition-all duration-300 group">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-12 h-12 rounded-lg bg-terra-100 text-terra-400 flex items-center justify-center font-display text-[20px] group-hover:bg-terra-950 group-hover:text-white transition-colors">1</div>
                          <span className="bg-terra-100 text-terra-700 text-[11px] uppercase tracking-widest px-3 py-1 rounded-full font-medium">{module.price}</span>
                        </div>
                        <h3 className="font-display text-[22px] text-terra-950 mb-1">{module.name}</h3>
                        <p className="text-[12px] text-terra-500 uppercase tracking-widest mb-4">{module.tagline}</p>
                        <p className="text-[14px] text-terra-600 leading-relaxed mb-6">{module.description}</p>
                      </div>
                      <div className="pt-6 border-t border-terra-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                          <div className="text-[11px] uppercase tracking-widest text-terra-400 mb-1">Potential Value</div>
                          <div className="font-medium text-green-700">{module.potentialValue}</div>
                        </div>
                        <button className="w-full sm:w-auto px-6 py-2.5 bg-terra-950 text-white text-[13px] font-medium rounded-lg hover:bg-black transition-colors">
                          Upgrade &rarr;
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
             </div>
          )}

          {/* =========================================
              TAB 3: ADVANCED ANALYTICS (REPORTS)
              ========================================= */}
          {activeTab === 'reports' && (
             <div className="animate-fade-up">
              
              <div className="flex gap-4 mb-6">
                {['molecules', 'rebates'].map((sub) => (
                  <button 
                    key={sub} 
                    onClick={() => setReportSubTab(sub)}
                    className={`px-4 py-2 rounded-lg text-[12px] uppercase tracking-widest font-bold transition-all ${
                      reportSubTab === sub ? 'bg-terra-950 text-white shadow-md' : 'bg-white text-terra-500 border border-terra-200 hover:text-terra-950'
                    }`}
                  >
                    {sub === 'molecules' ? 'Molecule Optimization' : 'Rebate Reconciliation'}
                  </button>
                ))}
              </div>

              {reportSubTab === 'molecules' && (
                <div className="bg-white border border-terra-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
                  <div className="px-6 py-5 border-b border-terra-100 bg-terra-50 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <div>
                      <h3 className="font-display text-[20px] text-terra-950">Formulary Shift Ledger</h3>
                      <p className="text-[12px] text-terra-500 mt-1">Live DIN-level comparison based on your 30-day dispensing volume.</p>
                    </div>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[900px]">
                      <thead>
                        <tr className="bg-white border-b border-terra-200 text-[10px] uppercase tracking-widest text-terra-400">
                          <th className="py-4 pl-6 font-bold">DIN / Molecule</th>
                          <th className="py-4 px-4 font-bold text-right">30D Volume</th>
                          <th className="py-4 px-4 font-bold">Current Allocation</th>
                          <th className="py-4 px-4 font-bold bg-green-50/50">OneRx Recommendation</th>
                          <th className="py-4 px-4 font-bold text-right text-green-700">Monthly Impact</th>
                          <th className="py-4 pr-6 font-bold text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {moleculeLedger.map((row, idx) => (
                          <tr key={idx} className="border-b border-terra-50 hover:bg-terra-50/50 transition-colors group">
                            <td className="py-4 pl-6">
                              <div className="text-[10px] text-terra-500 font-mono mb-0.5">{row.din}</div>
                              <div className="text-[13px] font-bold text-terra-950">{row.name}</div>
                            </td>
                            <td className="py-4 px-4 text-right font-mono text-[12px] text-terra-600">{row.volume}</td>
                            <td className="py-4 px-4">
                              <div className="text-[12px] font-bold text-terra-700">{row.currentVendor}</div>
                              <div className="text-[11px] text-terra-500 font-mono">{row.currentCost} / unit</div>
                            </td>
                            <td className="py-4 px-4 bg-green-50/30">
                              <div className="text-[12px] font-bold text-green-800">{row.recVendor}</div>
                              <div className="text-[11px] text-green-600 font-mono">{row.recCost} / unit</div>
                            </td>
                            <td className="py-4 px-4 text-right">
                              <div className="text-[14px] font-display text-green-700">{row.impact}</div>
                            </td>
                            <td className="py-4 pr-6 text-center">
                              {row.status === 'Action Needed' ? (
                                <button className="text-[10px] uppercase tracking-widest font-bold bg-terra-950 text-white px-3 py-1.5 rounded shadow-sm hover:bg-terra-800 w-full">Switch</button>
                              ) : (
                                <span className="text-[10px] uppercase tracking-widest font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded border border-green-200 block">Optimized</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {reportSubTab === 'rebates' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1 flex flex-col gap-6">
                    <div className="bg-white border border-terra-200 rounded-xl p-6 shadow-sm">
                      <h3 className="text-[10px] uppercase tracking-widest text-terra-500 font-bold mb-4">Rebate Status Engine</h3>
                      <div className="space-y-6">
                        <div>
                          <div className="text-[12px] text-terra-600 font-medium mb-1">Total Pending Clearance</div>
                          <div className="font-display text-[36px] text-terra-950 leading-none">{rebateReconciliation.totalPending}</div>
                        </div>
                        <div className="pt-4 border-t border-terra-100">
                          <div className="text-[12px] text-terra-600 font-medium mb-1">Cleared YTD</div>
                          <div className="font-display text-[24px] text-green-700 leading-none">{rebateReconciliation.clearedYTD}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="bg-white border border-terra-200 rounded-xl shadow-sm overflow-hidden h-full">
                      <div className="px-6 py-5 border-b border-terra-100 bg-terra-50">
                        <h3 className="font-display text-[20px] text-terra-950">Distributor Reconciliation Ledger</h3>
                      </div>
                      <div className="p-0">
                        <table className="w-full text-left border-collapse">
                          <tbody>
                            {rebateReconciliation.breakdown.map((row, idx) => (
                              <tr key={idx} className="border-b border-terra-50 hover:bg-terra-50/50 transition-colors">
                                <td className="py-4 pl-6">
                                  <div className="text-[13px] font-bold text-terra-950">{row.vendor}</div>
                                  <div className="text-[11px] text-terra-500 font-mono mt-0.5">Est. Date: {row.date}</div>
                                </td>
                                <td className="py-4 px-4 text-right">
                                  <div className="text-[16px] font-display text-terra-900">{row.expected}</div>
                                </td>
                                <td className="py-4 pr-6 text-right">
                                  <span className={`text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-md font-bold ${
                                    row.status === 'Cleared' ? 'bg-green-50 text-green-700 border border-green-200' :
                                    row.status === 'Processing' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                                    'bg-amber-50 text-amber-700 border border-amber-200'
                                  }`}>
                                    {row.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}

             </div>
          )}

        </div>
      </main>
    </div>
  );
}