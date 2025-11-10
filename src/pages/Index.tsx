import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Certifications />
      <Resume />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>&copy; © 2025 Sharin Gajurel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
