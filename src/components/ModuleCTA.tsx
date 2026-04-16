import React from "react";
import { Link } from "react-router-dom";

export default function ModuleCTA() {
  return (
    <section className="w-full bg-[rgb(var(--terra-500))] py-12">
      <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-white font-display text-[32px]">Ready to transform your pharmacy?</h3>
          <p className="text-terra-100 mt-2">Join Canadian independent pharmacies already on OneRx.</p>
        </div>
        <div className="flex gap-3">
          <Link to="/" className="px-5 py-2 bg-white text-terra-950 rounded-md">Get Started</Link>
          <a href="#" className="px-5 py-2 border border-white text-white rounded-md">Book a Demo</a>
        </div>
      </div>
    </section>
  );
}
