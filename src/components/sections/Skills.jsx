import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

const SKILL_CATEGORIES = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5", status: "comfortable" },
      { name: "CSS3", status: "comfortable" },
      { name: "JavaScript (ES6+)", status: "comfortable" },
      { name: "React", status: "learning" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Python", status: "comfortable" },
      { name: "Django", status: "comfortable" },
      { name: "Node.js", status: "learning" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", status: "comfortable" },
      { name: "SQLite", status: "comfortable" },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git", status: "comfortable" },
      { name: "GitHub", status: "comfortable" },
    ],
  },
  {
    category: "Computer Science Concepts",
    skills: [
      { name: "Algorithms & Data Structures", status: "comfortable" },
      { name: "Database Fundamentals", status: "comfortable" },
      { name: "Computer Organization", status: "comfortable" },
      { name: "Software Engineering Principles", status: "comfortable" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="03 / Technical Toolkit"
        title="Skills & Technologies"
        subtitle="Practical engineering foundations with active growth in modern web technologies."
      />

      {/* Legend / Status note */}
      <div className="flex flex-wrap items-center gap-4 mb-8 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded bg-accent inline-block" />
          <span className="text-text-primary">Comfortable / Proficient</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded bg-surface-hover border border-border inline-block" />
          <span className="text-text-secondary">Currently Learning / Building Experience</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((group) => (
          <Card key={group.category} className="space-y-4">
            <h3 className="text-base font-semibold text-text-primary">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-1">
                  <Badge
                    variant={skill.status === "learning" ? "learning" : "comfortable"}
                    className={
                      skill.status === "learning"
                        ? "border-dashed border-border text-text-secondary"
                        : ""
                    }
                  >
                    {skill.name}
                    {skill.status === "learning" && (
                      <span className="ml-1 text-[10px] text-accent font-sans">
                        (learning)
                      </span>
                    )}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Skills;
