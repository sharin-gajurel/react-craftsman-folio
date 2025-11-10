import { GraduationCap, School } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Lord Buddha Education Foundation",
    affiliation: "Affiliated to Asia Pacific University of Technology & Innovation",
    level: "Undergraduate",
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary Education (+2)",
    institution: "Himalaya College",
    affiliation: "",
    level: "Secondary",
    icon: School,
  },
  {
    degree: "Primary Education",
    institution: "Aims International Academy",
    affiliation: "",
    level: "Primary",
    icon: School,
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="gradient-text">Education</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 text-center">
            Academic background and qualifications
          </p>

          <div className="space-y-6">
            {education.map((edu, index) => {
              const IconComponent = edu.icon;
              return (
                <Card
                  key={edu.institution}
                  className="glass-card border-border hover:glow-effect transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{edu.degree}</CardTitle>
                        <CardDescription className="text-base font-semibold">
                          {edu.institution}
                        </CardDescription>
                        {edu.affiliation && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {edu.affiliation}
                          </p>
                        )}
                      </div>
                      <div className="hidden sm:block">
                        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                          {edu.level}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
