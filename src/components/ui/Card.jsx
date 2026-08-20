function Card({ children, className = "" }) {
  return (
    <div className={`bg-surface border border-border rounded-xl p-6 hover:bg-surface-hover transition-colors ${className}`}>
      {children}
    </div>
  );
}

export default Card;