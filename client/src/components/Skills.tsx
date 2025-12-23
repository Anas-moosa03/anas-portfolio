import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, BarChart3, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & ML",
    icon: <Code className="w-6 h-6 text-primary" />,
    skills: ["Python", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Flask", "Docker"]
  },
  {
    title: "Data & Analytics",
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: ["SQL", "Data Analysis", "Reporting", "Statistics", "Data Cleaning"]
  },
  {
    title: "Tools & Visualization",
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    skills: ["Power BI", "Matplotlib", "Seaborn", "Excel", "Git"]
  },
  {
    title: "Soft Skills",
    icon: <Brain className="w-6 h-6 text-primary" />,
    skills: ["Problem Solving", "Communication", "Critical Thinking", "Team Collaboration", "Research"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Technical Expertise</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            A comprehensive toolkit for end-to-end data solutions, from raw data processing to advanced model deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-primary/30 hover:border-primary/60 transition-all duration-300 glow overflow-hidden group bg-gradient-to-br from-card via-card to-secondary/20">
                <CardContent className="pt-6">
                  <div className="mb-4 bg-primary/20 border border-primary/40 w-14 h-14 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} className="bg-primary/20 hover:bg-primary/30 text-primary border-primary/40 font-normal text-xs transition-all">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
