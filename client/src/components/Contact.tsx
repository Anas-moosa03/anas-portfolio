import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">Let's Work Together</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-12" />
            
            <div className="space-y-8 mb-12">
              <a href="mailto:anasmousa003@gmail.com" className="flex items-center justify-center space-x-4 text-foreground hover:text-primary transition-colors group">
                <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow glow">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xl font-medium">anasmousa003@gmail.com</span>
              </a>
              
              <div className="flex items-center justify-center space-x-4 text-foreground group">
                <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow glow">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xl font-medium">+971 50 501 1322</span>
              </div>
              
              <div className="flex items-center justify-center space-x-4 text-foreground group">
                <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow glow">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xl font-medium">Abu Dhabi, UAE</span>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 glow-primary" asChild>
                <a href="https://www.linkedin.com/in/anas-moosa1/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 border-primary/50 hover:bg-primary/10" asChild>
                <a href="https://github.com/Anas-moosa03" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <footer className="mt-24 border-t border-primary/20 pt-8 text-center text-muted-foreground text-sm">
        <div className="container mx-auto px-6 pb-8">
          <p>© {new Date().getFullYear()} Anas Moosa. Building the future with AI & Data Science.</p>
        </div>
      </footer>
    </section>
  );
}
