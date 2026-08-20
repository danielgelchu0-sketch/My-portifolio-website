import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";

function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeading eyebrow="04 / Academic Background" title="Education" />

      <div className="max-w-3xl">
        <Card className="space-y-4 border-l-4 border-l-accent">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-text-primary">
                Haramaya University
              </h3>
              <p className="text-sm font-medium text-accent mt-0.5">
                B.Sc. in Software Engineering
              </p>
            </div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-accent-muted text-accent-hover w-fit">
              3rd-Year Student
            </span>
          </div>

          <div className="text-sm text-text-secondary space-y-2 pt-2 border-t border-border/60">
            <p className="flex items-center gap-2">
              <span className="text-text-muted text-xs font-mono">Location:</span>
              <span className="text-text-primary">Ethiopia</span>
            </p>
            <p className="leading-relaxed text-xs sm:text-sm">
              Focusing on computer science fundamentals, data structures &amp; algorithms, database systems, software architecture, and full-stack software development methodologies.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Education;
