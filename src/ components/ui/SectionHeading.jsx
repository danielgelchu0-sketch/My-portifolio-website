function Badge({ children }) {
  return (
    <span className="inline-block px-2.5 py-1 rounded-md text-xs font-mono bg-accent-muted text-accent-hover">
      {children}
    </span>
  );
}

export default Badge;