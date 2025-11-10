import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Enterprise Communication Platform",
    description: "Led the development of CG Communication's flagship product, increasing user engagement by 45%",
    tags: ["Product Strategy", "Agile", "User Research", "Analytics"],
    github: "#",
    live: "#",
  },
  {
    title: "Customer Portal Redesign",
    description: "Transformed user experience resulting in 60% reduction in support tickets",
    tags: ["UX Design", "A/B Testing", "Stakeholder Management", "Metrics"],
    github: "#",
    live: "#",
  },
  {
    title: "Mobile App Launch",
    description: "Delivered cross-platform app reaching 100K+ downloads in first quarter",
    tags: ["Go-to-Market", "Sprint Planning", "KPI Tracking", "Product Launch"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Integration Initiative",
    description: "Spearheaded AI-powered features that improved workflow efficiency by 35%",
    tags: ["Innovation", "Roadmapping", "Technical Discovery", "ROI Analysis"],
    github: "#",
    live: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 text-center">
            Key product initiatives and successful deliveries
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="glass-card border-border hover:glow-effect transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Details
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Case Study
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
