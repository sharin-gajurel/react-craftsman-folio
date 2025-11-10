import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Resume = () => {
  const handleDownload = () => {
    // Create a link to download the CV
    const link = document.createElement('a');
    link.href = '"D:\Sharin Gajurel CV.pdf"'; // You'll need to add your CV PDF to the public folder
    link.download = 'Sharin_Gajurel_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Resume</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            Download my complete CV to learn more about my experience and achievements
          </p>

          <div className="glass-card p-12 rounded-xl border border-border">
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="w-10 h-10 text-primary" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Product Owner CV</h3>
                <p className="text-muted-foreground">
                  Complete professional experience, skills, and achievements
                </p>
              </div>

              <Button 
                size="lg" 
                onClick={handleDownload}
                className="gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
