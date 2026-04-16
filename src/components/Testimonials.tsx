import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "We replaced five different vendor systems overnight. Our ODB claims reconcile automatically now — that alone saved us 12 hours a week.",
    name: "Dr. Priya Sharma",
    pharmacy: "MediCare Pharmacy",
    location: "Toronto, ON",
  },
  {
    quote: "OneRx gave us the purchasing power we only thought chains had. Our generic costs dropped 18% in the first quarter.",
    name: "Marc-André Tremblay",
    pharmacy: "Pharmacie Tremblay",
    location: "Montréal, QC",
  },
  {
    quote: "The Rx Intelligence dashboard changed how I run my pharmacy. I can see exactly which molecules are profitable and which are eating margin.",
    name: "Sarah Chen",
    pharmacy: "Westside Health Pharmacy",
    location: "Vancouver, BC",
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-terra-800 section-padding">
      <div ref={ref} className="container-wide">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white text-center mb-14">
          Canadian pharmacists trust OneRx
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative bg-terra-950/50 rounded-xl p-7 transition-all duration-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute top-4 left-6 font-display text-6xl text-terra-700 leading-none select-none" aria-hidden="true">"</div>
              <blockquote className="relative z-10 font-display italic text-terra-200 text-base leading-relaxed mt-8 mb-6">
                {t.quote}
              </blockquote>
              <div>
                <div className="text-terra-300 font-medium text-sm">{t.name}</div>
                <div className="text-terra-400 text-xs mt-0.5">{t.pharmacy} · {t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
