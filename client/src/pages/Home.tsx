import Navigation from "@/components/Navigation";
import Hero3D from "@/components/Hero3D";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navigation />
      <main>
        <Hero3D />
        <Achievements />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
