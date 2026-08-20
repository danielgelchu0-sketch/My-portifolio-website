function SectionHeading({ eyebrow, title, subtitle, className = "" }) {
  return (
    <div className={`mb-10 ${className}`}>
      {eyebrow && (
        <p className="text-sm font-mono text-accent mb-2 tracking-wide">{eyebrow}</p>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-text-secondary max-w-2xl text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;