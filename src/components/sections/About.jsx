import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";

function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeading eyebrow="01 / About Me" title="Background & Focus" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 space-y-4">
          <p className="text-text-primary text-base sm:text-lg leading-relaxed">
            I am driven by the belief that with ambition and dedication, software development empowers anyone to build meaningful solutions that connect and serve communities. As technology increasingly shapes our world, I chose the tech field to actively build tools that address real needs.
          </p>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Currently, I am a 3rd-year Software Engineering student at Haramaya University in Ethiopia, focusing on end-to-end full-stack development and practical software engineering.
          </p>
        </Card>

        <Card className="space-y-4 flex flex-col justify-center">
          <h3 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
            Quick Facts
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-text-muted text-xs">Role</p>
              <p className="text-text-primary font-medium">Software Engineering Student</p>
            </div>
            <div>
              <p className="text-text-muted text-xs">Institution</p>
              <p className="text-text-primary font-medium">Haramaya University</p>
            </div>
            <div>
              <p className="text-text-muted text-xs">Academic Standing</p>
              <p className="text-text-primary font-medium">3rd-Year Undergraduate</p>
            </div>
            <div>
              <p className="text-text-muted text-xs">Location</p>
              <p className="text-text-primary font-medium">Ethiopia</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default About;
