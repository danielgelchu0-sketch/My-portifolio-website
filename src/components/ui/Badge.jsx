function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default: "bg-accent-muted text-accent-hover border border-accent/20",
    comfortable: "bg-accent-muted text-accent-hover border border-accent/30",
    learning: "bg-surface-hover text-text-secondary border border-border",
  };

  return (
    <span
      className={`inline-block px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;