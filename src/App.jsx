import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Badge from "./components/ui/Badge";
import SectionHeading from "./components/ui/SectionHeading";

function App() {
  return (
    <div className="min-h-screen bg-background p-10">
      <SectionHeading eyebrow="01 / Preview" title="Design System Check" />
      <div className="flex gap-4 mb-6">
        <Button>Primary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <Card className="max-w-md">
        <p className="text-text-secondary mb-3">Card content sample</p>
        <div className="flex gap-2">
          <Badge>React</Badge>
          <Badge>Node.js</Badge>
          <Badge>PostgreSQL</Badge>
        </div>
      </Card>
    </div>
  );
}

export default App;