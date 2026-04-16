const CtaBanner = () => {
  return (
    <section className="bg-terra-500 relative overflow-hidden section-padding">
      {/* Watermark glyph */}
      <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 text-[300px] font-display font-black text-white/[0.08] leading-none select-none" aria-hidden="true">
        ℞
      </div>

      <div className="container-wide relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
          Your pharmacy deserves better than patchwork software.
        </h2>
        <p className="text-white/80 text-lg mt-4">
          One platform. Nine modules. Built for Canadian independents.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center h-12 px-8 bg-white text-terra-950 font-medium rounded-lg hover:bg-terra-50 transition-colors active:scale-[0.97]"
          >
            Get started today
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center h-12 px-8 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
          >
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
