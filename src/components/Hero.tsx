import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Sharin Gajurel</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Product Owner
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Driving product vision and strategy to deliver innovative solutions that exceed customer expectations and business goals
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="glow-effect" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            <div className="flex gap-6 justify-center">
              <a
                href="https://github.com/sharin-gajurel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sharingajurel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:sharingajurel156@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};
