import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | OneRx";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Get in touch with the OneRx team for sales inquiries, platform demonstrations, and enterprise support.');
  }, []);

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pharmacyName: "",
    locations: "1",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { ref: contentRef, isVisible: contentVis } = useScrollAnimation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="page-fade bg-terra-50 min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-wide">
          
          <div ref={contentRef as any} className={`flex flex-col lg:flex-row gap-16 lg:gap-24 ${contentVis ? 'animate-fade-up' : 'opacity-0'}`}>
            
            {/* Left Column: Context & Contact Info */}
            <div className="w-full lg:w-5/12 flex flex-col">
              <div className="uppercase tracking-widest text-[11px] text-terra-500 mb-4 font-medium">GET IN TOUCH</div>
              <h1 className="font-display text-[48px] text-terra-950 leading-tight mb-6">Let's build the future of pharmacy.</h1>
              <p className="text-[18px] text-terra-600 mb-12 max-w-md">
                Whether you're looking to optimize a single location or overhaul an enterprise network, our deployment team is ready to help you unlock hidden margins.
              </p>

              <div className="space-y-10 mt-auto">
                {/* Direct Contact Blocks */}
                <div>
                  <h3 className="font-display text-[20px] text-terra-950 mb-3">Enterprise Sales</h3>
                  <p className="text-[14px] text-terra-600 mb-1">Discuss custom deployments and volume pricing.</p>
                  <a href="mailto:sales@myonerx.ca" className="text-[15px] font-medium text-terra-500 hover:text-terra-700 transition-colors">sales@myonerx.ca</a>
                </div>

                <div className="border-t border-terra-200 pt-6">
                  <h3 className="font-display text-[20px] text-terra-950 mb-3">Technical Support</h3>
                  <p className="text-[14px] text-terra-600 mb-1">Current clients requiring immediate system assistance.</p>
                  <div className="flex items-center gap-4">
                    <a href="mailto:support@myonerx.ca" className="text-[15px] font-medium text-terra-500 hover:text-terra-700 transition-colors">support@myonerx.ca</a>
                    <span className="text-terra-300">|</span>
                    <a href="tel:+18005550199" className="text-[15px] font-medium text-terra-500 hover:text-terra-700 transition-colors">1-800-555-0199</a>
                  </div>
                </div>

                <div className="border-t border-terra-200 pt-6">
                  <h3 className="font-display text-[20px] text-terra-950 mb-3">Headquarters</h3>
                  <address className="text-[15px] text-terra-600 not-italic leading-relaxed">
                    100 Wellington Street West<br />
                    Suite 2200<br />
                    Toronto, ON M5K 1J3<br />
                    Canada
                  </address>
                </div>
              </div>
            </div>

            {/* Right Column: The Form */}
            <div className="w-full lg:w-7/12">
              <div className="bg-white p-8 md:p-12 rounded-2xl border border-terra-200 shadow-xl shadow-terra-900/5">
                
                {isSubmitted ? (
                  <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center animate-fade-up">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-6">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </div>
                    <h3 className="font-display text-[32px] text-terra-950 mb-4">Request Received</h3>
                    <p className="text-[16px] text-terra-600 max-w-sm mx-auto">
                      Thank you for reaching out. A platform specialist will review your details and contact you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-sm text-terra-500 hover:text-terra-700 font-medium transition-colors"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="font-display text-[28px] text-terra-950">Request a Demo</h2>
                      <p className="text-[14px] text-terra-500 mt-1">Fill out the form below and our team will be in touch shortly.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-[12px] font-medium text-terra-700 uppercase tracking-wide">First Name</label>
                          <input 
                            type="text" 
                            id="firstName"
                            name="firstName"
                            required
                            value={formState.firstName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-terra-50 border border-terra-200 rounded-lg focus:outline-none focus:border-terra-500 focus:bg-white transition-colors text-terra-950"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-[12px] font-medium text-terra-700 uppercase tracking-wide">Last Name</label>
                          <input 
                            type="text" 
                            id="lastName"
                            name="lastName"
                            required
                            value={formState.lastName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-terra-50 border border-terra-200 rounded-lg focus:outline-none focus:border-terra-500 focus:bg-white transition-colors text-terra-950"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-[12px] font-medium text-terra-700 uppercase tracking-wide">Work Email</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-terra-50 border border-terra-200 rounded-lg focus:outline-none focus:border-terra-500 focus:bg-white transition-colors text-terra-950"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="pharmacyName" className="text-[12px] font-medium text-terra-700 uppercase tracking-wide">Pharmacy / Group Name</label>
                          <input 
                            type="text" 
                            id="pharmacyName"
                            name="pharmacyName"
                            required
                            value={formState.pharmacyName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-terra-50 border border-terra-200 rounded-lg focus:outline-none focus:border-terra-500 focus:bg-white transition-colors text-terra-950"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="locations" className="text-[12px] font-medium text-terra-700 uppercase tracking-wide">Number of Locations</label>
                          <select 
                            id="locations"
                            name="locations"
                            value={formState.locations}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-terra-50 border border-terra-200 rounded-lg focus:outline-none focus:border-terra-500 focus:bg-white transition-colors text-terra-950 appearance-none"
                            style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="none" stroke="%236B7280" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg>')`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.2em 1.2em' }}
                          >
                            <option value="1">1 Location</option>
                            <option value="2-5">2 - 5 Locations</option>
                            <option value="6-15">6 - 15 Locations</option>
                            <option value="16+">16+ Locations</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-[12px] font-medium text-terra-700 uppercase tracking-wide">How can we help? (Optional)</label>
                        <textarea 
                          id="message"
                          name="message"
                          rows={4}
                          value={formState.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-terra-50 border border-terra-200 rounded-lg focus:outline-none focus:border-terra-500 focus:bg-white transition-colors text-terra-950 resize-none"
                          placeholder="Tell us about your current operational challenges..."
                        />
                      </div>

                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`w-full py-4 rounded-lg text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                          isSubmitting ? 'bg-terra-400 cursor-not-allowed' : 'bg-terra-950 hover:bg-terra-800'
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Processing...
                          </>
                        ) : (
                          "Submit Request"
                        )}
                      </button>
                      
                      <p className="text-[11px] text-terra-400 text-center mt-4">
                        By submitting this form, you agree to our Privacy Policy. We will never share your data.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}