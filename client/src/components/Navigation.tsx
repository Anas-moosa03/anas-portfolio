import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "About", href: "about" },
    { name: "Experience", href: "experience" },
    { name: "Projects", href: "projects" },
    { name: "Skills", href: "skills" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-background/70 backdrop-blur-lg border-primary/20 shadow-lg" 
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          className="text-xl font-display font-bold text-primary cursor-pointer glow"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ANAS MOOSA
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
          <div className="flex items-center space-x-4 pl-4 border-l border-primary/20">
            <a href="https://github.com/Anas-moosa03" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/anas-moosa1/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/90 backdrop-blur-md border-b border-primary/20 absolute w-full px-6 py-4 flex flex-col space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-left text-sm font-medium text-foreground py-2 border-b border-primary/20 last:border-0"
            >
              {link.name}
            </button>
          ))}
          <div className="flex items-center space-x-6 pt-2">
            <a href="https://github.com/Anas-moosa03" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/anas-moosa1/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
