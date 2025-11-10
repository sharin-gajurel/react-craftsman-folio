import { Target, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Strategic Vision",
    description: "Defining clear product roadmaps aligned with business objectives",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Identifying opportunities and driving creative solutions",
  },
  {
    icon: Users,
    title: "Stakeholder Management",
    description: "Bridging communication between teams, clients, and leadership",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            As a Product Owner at CG Communication, I bridge the gap between business goals 
            and technical execution. I excel at translating customer needs into actionable product 
            strategies, managing backlogs, and ensuring maximum value delivery through agile methodologies.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 rounded-lg hover:glow-effect transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
