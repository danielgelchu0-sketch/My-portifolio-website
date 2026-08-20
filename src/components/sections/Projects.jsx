import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="02 / Selected Work"
        title="Featured Projects"
        subtitle="Real, working software applications built with end-to-end functionality, practical architectures, and production deployments."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="flex flex-col justify-between group hover:border-accent/40 transition-all duration-300"
          >
            <div>
              {/* Header: Title and Status/Role */}
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-hover transition-colors">
                  {project.title}
                </h3>
                {project.status && (
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-surface-hover text-text-secondary border border-border">
                    {project.status}
                  </span>
                )}
              </div>

              {/* Role */}
              <p className="text-xs font-mono text-accent mb-4">
                {project.role}
              </p>

              {/* Summary */}
              <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                {project.summary}
              </p>

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-2.5">
                    Key Features &amp; Capabilities
                  </h4>
                  <ul className="space-y-2 text-xs text-text-secondary">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent mt-0.5 select-none" aria-hidden="true">&bull;</span>
                        <span className="leading-normal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-border/50">
              {/* Tech Stack Badges */}
              {project.techStack && project.techStack.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              )}

              {/* Action Links */}
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <Button
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    className="text-xs py-2 px-3.5"
                    aria-label={`View live site for ${project.title} (opens in new tab)`}
                  >
                    <span>Live Demo</span>
                    <svg
                      className="w-3.5 h-3.5 ml-1.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Button>
                )}

                {project.repoUrl && (
                  <Button
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    className="text-xs py-2 px-3.5"
                    aria-label={`View source code repository for ${project.title} (opens in new tab)`}
                  >
                    <span>Source Code</span>
                    <svg
                      className="w-3.5 h-3.5 ml-1.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;
