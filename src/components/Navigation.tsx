import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OneRxLogo from "./OneRxLogo";
import { Menu, X, ChevronDown } from "lucide-react";

const hubItems = [
  { label: "Rx Intelligence", to: "/rx-intelligence" },
  { label: "Rx Manager", to: "/rx-manager" },
  { label: "Rx Suite", to: "/rx-suite" },
  { label: "Rx Incident", to: "/rx-incident" },
];

const navLinks = [
  { label: "Home", href: "/" }, // Updated to route to the root
  { label: "About", href: "/about" },
  { label: "OneRx Hub", href: "#modules", hasDropdown: true },
  { label: "Membership", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hubOpen, setHubOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-terra-950/95 backdrop-blur-md shadow-lg" : "bg-terra-950"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-wide flex items-center justify-between h-16 lg:h-18">
        
        {/* Desktop Logo - Wrapped in Link to Landing Page */}
        <Link to="/" aria-label="OneRx Home" className="transition-opacity hover:opacity-80">
          <OneRxLogo variant="dark" />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <a
                href={link.href}
                className="text-sm text-terra-200 hover:text-white transition-colors flex items-center gap-1"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </a>
              {link.hasDropdown && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-terra-950 border border-terra-800 rounded-lg shadow-xl py-2 min-w-[200px]">
                    {hubItems.map((item) => (
                      item.to.startsWith("/") ? (
                        <Link key={item.label} to={item.to} className="block px-4 py-2.5 text-sm text-terra-300 hover:text-white hover:bg-terra-800/50 transition-colors">
                          {item.label}
                        </Link>
                      ) : (
                        <a key={item.label} href={item.to} className="block px-4 py-2.5 text-sm text-terra-300 hover:text-white hover:bg-terra-800/50 transition-colors">
                          {item.label}
                        </a>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          
          <a href="/pricing" className="px-5 py-2 text-sm bg-terra-500 text-white rounded-lg hover:bg-terra-600 transition-colors active:scale-[0.97]">
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-terra-950 flex flex-col lg:hidden">
          <div className="flex items-center justify-between px-5 h-16">
            
            {/* Mobile Logo - Wrapped in Link to Landing Page & closes menu on click */}
            <Link to="/" onClick={() => setMobileOpen(false)} aria-label="OneRx Home">
              <OneRxLogo variant="dark" />
            </Link>

            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-white p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 flex flex-col gap-1 px-5 pt-8">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setHubOpen(!hubOpen)}
                      className="w-full text-left text-lg text-terra-200 py-3 flex items-center justify-between"
                    >
                      {link.label}
                      <ChevronDown className={`w-5 h-5 transition-transform ${hubOpen ? "rotate-180" : ""}`} />
                    </button>
                    {hubOpen && (
                      <div className="pl-4 flex flex-col gap-1">
                        {hubItems.map((item) => (
                          item.to.startsWith("/") ? (
                            <Link key={item.label} to={item.to} onClick={() => setMobileOpen(false)} className="text-terra-400 py-2 text-base">
                              {item.label}
                            </Link>
                          ) : (
                            <a key={item.label} href={item.to} onClick={() => setMobileOpen(false)} className="text-terra-400 py-2 text-base">
                              {item.label}
                            </a>
                          )
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a href={link.href} onClick={() => setMobileOpen(false)} className="text-lg text-terra-200 py-3 block">
                    {link.label}
                  </a>
                )}
              </div>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <Link to="/login" onClick={() => setMobileOpen(false)} className="text-center px-5 py-3 border border-terra-500 text-white rounded-lg">Login</Link>
              <a href="#pricing" onClick={() => setMobileOpen(false)} className="text-center px-5 py-3 bg-terra-500 text-white rounded-lg">Get Started</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;