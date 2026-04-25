import HeroDashboard from "./HeroDashboard";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-terra-950 overflow-hidden pt-16">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#8B3E20 1px, transparent 1px), linear-gradient(90deg, #8B3E20 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }} />

      <div className="container-wide relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
        {/* Left text */}
        <div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.08] tracking-tight">
            One platform.
            <br />
            Every pharmacy need.
            <br />
            <span className="text-terra-400">Built for Canadian independents.</span>
          </h1>
          <p className="mt-6 text-terra-300 text-lg lg:text-xl max-w-lg leading-relaxed">
            One subscription. Nine integrated modules. Replaces 6–8 disconnected vendor systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/pricing"
              className="inline-flex items-center justify-center h-12 px-8 bg-terra-500 text-white font-medium rounded-lg hover:bg-terra-600 transition-colors active:scale-[0.97] text-base"
            >
              Get started
            </a>
            <a
              href="#modules"
              className="inline-flex items-center justify-center h-12 px-8 border border-terra-400 text-terra-400 font-medium rounded-lg hover:bg-terra-400/10 transition-colors text-base"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Right dashboard */}
        <div className="flex justify-center lg:justify-end">
          <HeroDashboard />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-terra-500 animate-bounce">
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
};

export default Hero;
