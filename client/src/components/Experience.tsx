import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Business Analyst",
    company: "Vision71 Technologies",
    period: "Aug 2025 – Present",
    description: "Developing functional specifications and collaborating with cross-functional teams to define feature requirements. Designing data-collection frameworks to ensure accuracy of operational data.",
    skills: ["Requirements Analysis", "Documentation", "Process Mapping"]
  },
  {
    role: "AI Intern",
    company: "Coach You",
    period: "Jun 2025 – Present",
    description: "Contributing to real-world AI projects and participating in an internship program sponsored by the Ministry of Digital Economy, Jordan.",
    skills: ["Applied AI", "Technical Research", "Soft Skills"]
  },
  {
    role: "Data Analyst Intern",
    company: "SHAI Company",
    period: "Oct 2023 – Feb 2024",
    description: "Built and automated Python-SQL pipelines, reducing data cleaning time. Designed Power BI dashboards for project managers to facilitate data-driven decisions.",
    skills: ["Python", "SQL", "Power BI", "Data Automation"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Professional Experience</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-primary/30 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary bg-background shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 glow">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>

              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 hover:shadow-xl transition-all duration-300 border-primary/30 bg-gradient-to-br from-card via-card to-secondary/20 glow">
                <CardHeader className="p-0 mb-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <CardTitle className="text-xl font-bold text-foreground">{exp.role}</CardTitle>
                    <div className="flex items-center text-sm text-primary bg-primary/20 px-3 py-1 rounded-full w-fit border border-primary/40">
                      <Calendar className="w-3 h-3 mr-2" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="text-primary font-semibold">{exp.company}</div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} className="font-normal text-xs bg-primary/20 text-primary border-primary/40">
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
