import Button from "../ui/Button";

function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle background ambient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs font-mono text-text-secondary mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Haramaya University &bull; Software Engineering (3rd Year)</span>
        </div>

        {/* Heading Hierarchy: single h1 */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-6">
          Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent-hover to-accent">Daniel Gelchu</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-accent font-medium mb-6">
          Software Engineering Student &amp; Full-Stack Developer
        </p>

        {/* Value Prop */}
        <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          I build and ship production-ready, full-stack software designed to solve real-world problems with scalable architecture and clean code.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="#projects" variant="primary" className="text-base px-6 py-3">
            View Projects
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </Button>

          <Button href="#contact" variant="outline" className="text-base px-6 py-3">
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
