import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pillars = [
  { title: "AI-First", desc: "Intelligence built into the core — not bolted on." },
  { title: "Canadian", desc: "NAPRA, ODB, PharmaNet, bilingual. Built for how Canadian pharmacy actually works." },
  { title: "Independent", desc: "Not chains. Not hospitals. Built for the 4,200+ independent community pharmacies." },
  { title: "Integrated", desc: "No silos. One data layer. Every module knows what the others know." },
];

const WhoWeAre = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="bg-terra-50 section-padding">
      <div ref={ref} className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-terra-500">Who We Are</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-terra-950 mt-4 leading-tight">
            Built by pharmacists, for independent pharmacies.
          </h2>
          <p className="mt-5 text-warm-600 leading-relaxed max-w-lg">
            OneRx is a pharmacy-first platform that empowers independent pharmacies to streamline purchasing, gain actionable insights, and connect with a verified network of vendors and distributors.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`bg-terra-100 border-l-4 border-terra-500 rounded-lg p-5 transition-all duration-600 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <h3 className="font-display font-bold text-terra-950 text-lg">{p.title}</h3>
                <p className="text-sm text-warm-600 mt-1.5 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Abstract geometric */}
        <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
          <div className="relative w-80 h-80">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-terra-200 opacity-60" />
            <div className="absolute bottom-8 left-4 w-36 h-36 rounded-full bg-terra-400 opacity-40" />
            <div className="absolute top-20 left-16 w-24 h-24 rounded-full bg-terra-500 opacity-50" />
            <div className="absolute bottom-0 right-12 w-20 h-20 rounded-2xl bg-terra-300 opacity-50 rotate-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
