import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "sharingajurel156@gmail.com",
    href: "mailto:sharingajurel156@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+977 9842473877",
    href: "tel:+9779842473877",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Nepal",
    href: "https://maps.app.goo.gl/UCuLQgNX1ShD5BtX8",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sharingajurel/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/sharin-gajurel",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:sharingajurel156@gmail.com",
  },
];

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Replace with your actual EmailJS credentials
  const SERVICE_ID = "service_v8mwfph";
  const TEMPLATE_ID = "template_23p42vz";
  const PUBLIC_KEY = "SIkZxAXlv5TOe_p1g";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error!",
        description: "Something went wrong while sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-12 text-center">
            Let's discuss your next project or opportunity
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <Card
                key={item.title}
                className="glass-card border-border hover:glow-effect transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="glass-card border-border animate-slide-up">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background/50"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Card className="glass-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                  <div className="flex gap-4 justify-center">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                        aria-label={social.label}
                      >
                        <social.icon className="w-6 h-6 text-primary group-hover:text-primary/80" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Let's Collaborate</h3>
                  <p className="text-muted-foreground">
                    I'm always open to discussing product development work, partnership opportunities, or just a friendly chat about technology and innovation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
