import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const modules = [
  { prefix: "Rx", name: "Intelligence", cat: "ANALYTICS", desc: "AI-driven dispensing insights, claim approval tracking, and revenue analytics.", icon: "chart" },
  { prefix: "Rx", name: "Manager", cat: "WORKFLOW", desc: "Task management, scheduling, and pharmacy operations in one view.", icon: "tasks" },
  { prefix: "Rx", name: "POS", cat: "SALES", desc: "Point-of-sale built for pharmacy — ODB integration, DINs, and real-time pricing.", icon: "receipt" },
  { prefix: "Rx", name: "Alert", cat: "NOTIFICATIONS", desc: "Drug recalls, shortage alerts, and regulatory updates. Never miss what matters.", icon: "bell" },
  { prefix: "Rx", name: "Incident", cat: "COMPLIANCE", desc: "Incident reporting, audit trails, and NAPRA-compliant documentation.", icon: "clipboard" },
  { prefix: "Rx", name: "Relief", cat: "STAFFING", desc: "Relief pharmacist matching and shift management across your network.", icon: "people" },
  { prefix: "Rx", name: "Scribe", cat: "CLINICAL", desc: "Clinical documentation, MedsChecks notes, and patient consultations.", icon: "pen" },
  { prefix: "Rx", name: "Brands", cat: "PURCHASING", desc: "Generic molecule selection, brand comparison, and net cost transparency.", icon: "tag" },
  { prefix: "Rx", name: "Marketplace", cat: "NETWORK", desc: "Connect with verified distributors and negotiate better terms together.", icon: "network" },
];

const ModuleIcon = ({ type }: { type: string }) => {
  const cls = "w-10 h-10 text-terra-500";
  switch (type) {
    case "chart":
      return <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="4,32 12,22 20,26 28,14 36,8"/><circle cx="36" cy="8" r="2" fill="currentColor"/></svg>;
    case "tasks":
      return <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="10" x2="36" y2="10"/><line x1="12" y1="20" x2="36" y2="20"/><line x1="12" y1="30" x2="36" y2="30"/><rect x="4" y="7" width="4" height="4" rx="1" fill="currentColor" opacity="0.3"/><rect x="4" y="17" width="4" height="4" rx="1" fill="currentColor" opacity="0.3"/><rect x="4" y="27" width="4" height="4" rx="1" fill="currentColor" opacity="0.3"/></svg>;
    case "receipt":
      return <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M10,4 H30 V36 L27,33 L24,36 L21,33 L18,36 L15,33 L12,36 L10,34 Z"/><line x1="15" y1="12" x2="25" y2="12"/><line x1="15" y1="18" x2="25" y2="18"/><line x1="15" y1="24" x2="20" y2="24"/></svg>;
    case "bell":
      return <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20,4 C14,4 10,9 10,15 V24 L6,28 H34 L30,24 V15 C30,9 26,4 20,4 Z"/><path d="M16,28 C16,31 18,34 20,34 C22,34 24,31 24,28"/><circle cx="30" cy="8" r="4" fill="#CC785C" stroke="none"/></svg>;
    case "clipboard":
      return <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="6" width="24" height="30" rx="2"/><path d="M14,6 V4 C14,2.5 16,2 20,2 C24,2 26,2.5 26,4 V6"/><polyline points="14,20 18,24 26,16"/></svg>;
    case "people":
      return <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="15" cy="12" r="5"/><circle cx="28" cy="14" r="4"/><path d="M4,32 C4,24 9,20 15,20 C19,20 22,22 24,25"/><path d="M24,25 C26,22 28,20 28,20 C33,20 36,24 36,30"/></svg>;
    case "pen":
      return <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8,32 L6,36 L10,34 L32,12 L28,8 Z"/><line x1="26" y1="10" x2="30" y2="14"/></svg>;
    case "tag":
      return <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4,4 H18 L36,22 L22,36 L4,18 Z"/><circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3"/></svg>;
    case "network":
      return <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="20" cy="6" r="4"/><circle cx="8" cy="32" r="4"/><circle cx="32" cy="32" r="4"/><line x1="20" y1="10" x2="8" y2="28"/><line x1="20" y1="10" x2="32" y2="28"/><line x1="8" y1="32" x2="32" y2="32"/></svg>;
    default:
      return null;
  }
};

const ModuleGrid = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="modules" className="bg-terra-950 section-padding">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Smart Solutions for Modern Canadian Pharmacies
          </h2>
          <p className="text-terra-400 mt-4 text-lg">
            Nine integrated modules. One unified platform. Zero silos.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod, i) => (
            <div
              key={mod.name}
              className={`group bg-terra-800 rounded-xl p-6 border border-transparent hover:border-b-terra-500 hover:border-b-[3px] hover:-translate-y-1 transition-all duration-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 60}ms`, transitionDuration: "600ms" }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-terra-500 italic font-display text-sm">{mod.prefix}</span>
                  <span className="text-white font-bold font-display text-lg ml-1">{mod.name}</span>
                  <div className="text-[10px] tracking-[0.15em] uppercase text-terra-400 mt-1">{mod.cat}</div>
                </div>
                <div className="group-hover:brightness-125 transition-all">
                  <ModuleIcon type={mod.icon} />
                </div>
              </div>
              <p className="text-terra-300 text-sm leading-relaxed mb-4">{mod.desc}</p>
              <a href="#" className="text-terra-400 text-sm flex items-center gap-1 hover:text-terra-300 transition-colors">
                View Module <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModuleGrid;
