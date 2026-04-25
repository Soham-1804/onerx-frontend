import { Link } from "react-router-dom";
import OneRxLogo from "./OneRxLogo";

const footerLinks = {
  Company: [
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Press", path: "/press" },
    {name : "FAQ" , path : "/faq"},
    {name : "Contact", path : "/contact"},
  
  ],
  Modules: [
    { name: "Rx Intelligence", path: "/rx-intelligence" },
    { name: "Rx Manager", path: "/rx-manager" },
    { name: "Rx Suite", path: "/rx-suite" },
    { name: "Rx Incident", path: "/rx-incident" },
    { name: "Rx Scribe", path: "/rx-scribe" },
    { name: "Rx Brands", path: "/rx-brands" },
  ],
  Resources: [
    { name: "Blog", path: "/insights" },
    { name: "Support", path: "/documentation" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-terra-950 section-padding pb-8">
      <div className="container-wide">

        {/* TOP GRID */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">

          {/* BRAND */}
          <div className="col-span-2 md:col-span-1">
            <OneRxLogo variant="dark" />
            <p className="text-terra-400 text-sm mt-4 leading-relaxed max-w-xs">
              Empowering independent pharmacies with AI-driven tools to simplify operations,
              increase margins, and scale smarter.
            </p>
          </div>

          {/* LINKS */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-terra-300 font-medium text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-terra-400 text-sm hover:text-terra-300 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CONTACT */}
          <div>
            <h4 className="text-terra-300 font-medium text-sm mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-terra-400">
              <li>
                <a href="mailto:admin@myonerx.ca" className="hover:text-terra-300">
                  admin@myonerx.ca
                </a>
              </li>
              <li>
                <a href="https://www.myonerx.ca" target="_blank" className="hover:text-terra-300">
                  onerx.ca
                </a>
              </li>
            </ul>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6">
              <a href="https://www.linkedin.com/company/onerx-inc/" className="hover:opacity-80">LinkedIn</a>
              
            </div>
          </div>
        </div>

        {/* CTA STRIP */}
        <div className="bg-terra-900 rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-terra-200 text-lg font-medium">
              Ready to transform your pharmacy?
            </h3>
            <p className="text-terra-400 text-sm">
              Join the AI-first platform built for independent pharmacies.
            </p>
          </div>
          <Link
            to="/pricing"
            className="bg-terra-300 text-terra-900 px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90"
          >
            Get Started
          </Link>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-terra-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-terra-400">
          <p>© 2025 OneRx. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-terra-300">Privacy</Link>
            <Link to="/terms" className="hover:text-terra-300">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;