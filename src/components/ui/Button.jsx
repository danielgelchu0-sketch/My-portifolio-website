function Button({
  children,
  variant = "primary",
  className = "",
  as: Component = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium transition-all focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 cursor-pointer";

  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover shadow-sm",
    outline:
      "bg-transparent border border-border text-text-primary hover:border-accent hover:text-accent",
    ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-hover",
  };

  const Comp = props.href ? "a" : Component;

  return (
    <Comp
      className={`${base} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}

export default Button;

