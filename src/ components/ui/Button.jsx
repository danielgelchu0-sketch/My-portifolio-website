function Button({ children, variant = "primary", ...props }) {
  const base = "inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium transition-colors";

  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover",
    outline: "border border-border text-text-primary hover:border-accent hover:text-accent",
    ghost: "text-text-secondary hover:text-text-primary",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}

export default Button;