import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import abstractBg from "@assets/generated_images/abstract_data_visualization_background_with_teal_and_blue_nodes.png";

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/90 z-10" />
        <img 
          src={abstractBg} 
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Available for Opportunities
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              Business Analyst & <br/>
              <span className="text-primary">AI Engineer</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Transforming complex data into actionable business insights. 
              Specializing in Python, Machine Learning, and Data Visualization to solve real-world problems.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-base"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto text-base"
                onClick={() => window.open('/assets/cv.pdf', '_blank')} 
              >
                <FileText className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
}
