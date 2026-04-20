import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // const navigate = useNavigate(); // For redirecting after login

  useEffect(() => {
    document.title = "Sign In | OneRx";
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication request
    setTimeout(() => {
      setIsLoading(false);
      // navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-white page-fade">
      
      {/* Left Panel: Branding & Context (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-5/12 bg-terra-950 text-white flex-col justify-between p-12 relative overflow-hidden">
        {/* Abstract structural background */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#CC785C 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-terra-700 rounded-full opacity-20 blur-3xl -mr-20 -mt-20"></div>

        <div className="relative z-10 flex items-center gap-3">
          <div className="w-8 h-8 bg-white text-terra-950 rounded flex items-center justify-center font-display font-bold text-lg">
            1Rx
          </div>
          <span className="font-display text-xl tracking-wide">OneRx</span>
        </div>

        <div className="relative z-10 max-w-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-[11px] uppercase tracking-widest text-terra-300 font-medium">All Systems Operational</span>
          </div>
          <h2 className="font-display text-[40px] leading-tight mb-6">The operating system for modern pharmacy.</h2>
          <p className="text-[16px] text-terra-300">
            Secure, cloud-native infrastructure designed to protect patient data while maximizing operational margins.
          </p>
        </div>

        <div className="relative z-10 text-[12px] text-terra-500 font-mono">
          OneRx
        </div>
      </div>

      {/* Right Panel: Authentication Form */}
      <div className="w-full lg:w-7/12 flex items-center justify-center p-8 sm:p-12 md:p-24 relative">
        
        {/* Mobile Header (Only visible on small screens) */}
        <div className="absolute top-8 left-8 flex lg:hidden items-center gap-3">
          <div className="w-8 h-8 bg-terra-950 text-white rounded flex items-center justify-center font-display font-bold text-lg">
            1Rx
          </div>
          <span className="font-display text-xl tracking-wide text-terra-950">OneRx</span>
        </div>

        <div className="w-full max-w-md animate-fade-up">
          <div className="mb-10">
            <h1 className="font-display text-[32px] text-terra-950 mb-2">Welcome back</h1>
            <p className="text-[15px] text-terra-500">Sign in to your OneRx workspace.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-[12px] font-medium text-terra-700 uppercase tracking-wide">Work Email</label>
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3.5 bg-terra-50 border border-terra-200 rounded-lg focus:outline-none focus:border-terra-500 focus:bg-white transition-colors text-terra-950"
                placeholder="name@pharmacy.com"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-[12px] font-medium text-terra-700 uppercase tracking-wide">Password</label>
                <Link to="/forgot-password" className="text-[12px] text-terra-500 hover:text-terra-700 transition-colors">Forgot password?</Link>
              </div>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-4 pr-12 py-3.5 bg-terra-50 border border-terra-200 rounded-lg focus:outline-none focus:border-terra-500 focus:bg-white transition-colors text-terra-950"
                  placeholder="••••••••"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-terra-400 hover:text-terra-600 focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  )}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading || !email || !password}
              className={`w-full py-3.5 rounded-lg text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 mt-2 ${
                isLoading || !email || !password ? 'bg-terra-300 cursor-not-allowed' : 'bg-terra-950 hover:bg-terra-800 shadow-md hover:shadow-lg'
              }`}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Authenticating...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Enterprise SSO Divider */}
          <div className="mt-8 mb-8 flex items-center">
            <div className="flex-grow border-t border-terra-100"></div>
            <span className="mx-4 text-[11px] uppercase tracking-widest text-terra-400 font-medium">Or</span>
            <div className="flex-grow border-t border-terra-100"></div>
          </div>

          <button className="w-full py-3.5 rounded-lg text-terra-950 font-medium bg-white border border-terra-200 hover:border-terra-400 hover:bg-terra-50 transition-all flex items-center justify-center gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            Sign in with Enterprise SSO
          </button>

          <p className="mt-12 text-center text-[13px] text-terra-500">
            Don't have an account? <Link to="/contact" className="text-terra-900 font-medium hover:underline">Contact your administrator</Link>
          </p>

        </div>
      </div>
    </div>
  );
}