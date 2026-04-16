interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

const OneRxLogo = ({ variant = "dark", className = "" }: LogoProps) => {
  const oneColor = variant === "dark" ? "text-terra-400" : "text-terra-800";
  const rxColor = variant === "dark" ? "text-white" : "text-terra-950";
  const glyphColor = variant === "dark" ? "#CC785C" : "#8B3E20";

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <text x="2" y="19" fontFamily="DM Sans, sans-serif" fontWeight="900" fontSize="18" fill={glyphColor}>℞</text>
      </svg>
      <span className="text-xl tracking-tight">
        <span className={`${oneColor} font-bold`}>One</span>
        <span className={`${rxColor} font-black`}>Rx</span>
      </span>
    </div>
  );
};

export default OneRxLogo;
