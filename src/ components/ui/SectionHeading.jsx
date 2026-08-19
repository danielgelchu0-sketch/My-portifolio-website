function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="text-sm font-mono text-accent mb-2">{eyebrow}</p>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-text-primary">{title}</h2>
    </div>
  );
}

export default SectionHeading;