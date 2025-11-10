import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Ultimate Product Management Course: Build, Launch, Succeed",
    issuer: "Udemy",
    date: "2025",
    description: "Product Management Core Skills and Concepts",
    link: "https://www.udemy.com/certificate/UC-663c5df5-4051-4602-90d7-d315750e2f67/",
  },
  {
    title: "Python Data Structures",
    issuer: "Coursera",
    date: "2023",
    description: "Fundamental Pyrhon certification",
    link: "https://www.coursera.org/account/accomplishments/verify/APAY37N53HXS",
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "Coursera",
    date: "2023",
    description: "Understanding the basics of Python",
    link: "https://www.coursera.org/account/accomplishments/verify/CG9EWHJQ2YUG",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 text-center">
            Committed to continuous learning and professional development
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={cert.title}
                className="glass-card border-border hover:glow-effect transition-all duration-300 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                      <p className="text-sm text-primary mb-2">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground mb-3">
                        {cert.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {cert.date}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          asChild
                        >
                          <a href={cert.link} target="_blank" rel="noopener noreferrer">
                            Verify
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </Button>
                      </div>
                    </div>
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
