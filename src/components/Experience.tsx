import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    role: "Product Owner",
    company: "CG Communication",
    period: "Present",
    skills: [
      "Product Roadmap Planning",
      "Agile/Scrum Leadership",
      "Stakeholder Communication",
      "User Story Development",
      "Sprint Planning & Execution",
      "Data-Driven Decision Making",
      "Feature Prioritization",
      "Cross-functional Team Management"
    ],
  },
  {
    role: "Marketing Intern",
    company: "Lord Buddha Education Foundation",
    period: "Previous Role",
    skills: [
      "Digital Marketing Campaigns",
      "Social Media Management",
      "Market Research & Analysis",
      "Content Strategy",
      "Brand Awareness Initiatives",
      "Customer Engagement",
      "Campaign Performance Tracking",
      "SEO & SEM Basics"
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Work <span className="gradient-text">Experience</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 text-center">
            Professional journey and key responsibilities
          </p>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={exp.company}
                className="glass-card border-border hover:glow-effect transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-1">{exp.role}</CardTitle>
                        <CardDescription className="text-base font-semibold">
                          {exp.company}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
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
