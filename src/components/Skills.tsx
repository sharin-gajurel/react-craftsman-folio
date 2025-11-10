const skills = [
  "Agile/Scrum",
  "Product Strategy",
  "Stakeholder Management",
  "User Story Writing",
  "Data Analysis",
  "Market Research",
  "Trello",
  "Roadmap Planning",
  "Backlog Management",
  "Sprint Planning",
  "A/B Testing",
  "KPI Tracking",
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            My <span className="gradient-text">Skills</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 text-center">
            Core competencies that drive successful product delivery
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="glass-card p-4 text-center rounded-lg border border-border hover:glow-effect transition-all duration-300">
                  <span className="font-semibold text-foreground">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
