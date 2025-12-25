import { motion } from "framer-motion";
import { ExternalLink, Github, Trophy, Zap, FileDown } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import aiSignsImg from "@assets/image_1766476840475.png";
import eduPlannerImg from "@assets/generated_images/edu_planner_dashboard_interface.png";
import mobilePriceImg from "@assets/generated_images/mobile_price_prediction_ml_dashboard.png";
import sentimentImg from "@assets/generated_images/arabic_sentiment_analysis_dashboard.png";
import fetalImg from "@assets/generated_images/fetal_health_classification_system.png";
import roadsSegmentationImg from "@assets/image_1766475883492.png";
import powerBiImg from "@assets/image_1766476001980.png";

const projects = [
  {
    title: "AI Signs",
    description: "Real-time deep learning model for Arabic Sign Language translation using MediaPipe + LSTM. Created a novel dataset of hand and pose landmarks for accurate model training.",
    tags: ["Deep Learning", "Computer Vision", "LSTM", "Python"],
    achievement: "1st Place - 12th Technology National Parade",
    featured: true,
    github: "https://github.com/Anas-moosa03/AI-Signs",
    image: aiSignsImg
  },
  {
    title: "Roads Segmentation",
    description: "Advanced semantic segmentation model using U-Net, DeepLabV3+, and DinkNet for extracting road networks from satellite and aerial imagery. Achieves F1 scores up to 0.925 using hybrid loss functions and systematic data augmentation.",
    tags: ["Semantic Segmentation", "Deep Learning", "Computer Vision", "Python"],
    achievement: "University Project - High Performance Results",
    github: "https://github.com/Anas-moosa03",
    image: roadsSegmentationImg,
    pdf: "/road_segmentation.pdf"
  },
  {
    title: "Data Analytics & Business Intelligence",
    description: "Comprehensive Power BI dashboards for analyzing key business metrics and performance indicators. Visualizes complex data relationships with interactive charts, KPIs, and actionable insights for data-driven decision making.",
    tags: ["Power BI", "Data Visualization", "Business Analytics", "Dashboard Design"],
    achievement: "Professional Dashboard Design",
    github: "https://github.com/Anas-moosa03",
    image: powerBiImg
  },
  {
    title: "Arabic Sentiment Analysis",
    description: "NLP model for analyzing online market reviews in Arabic using Python and sklearn. Achieved strong predictive performance on Arabic text classification.",
    tags: ["NLP", "Sentiment Analysis", "Python", "Sklearn"],
    github: "https://github.com/Anas-moosa03/Evolving-Arabic-Sentiment-Analysis",
    image: sentimentImg
  },
  {
    title: "EDU Planner",
    description: "A comprehensive educational platform for University of Jordan students. Unified system for course planning, task management, GPA calculation, and academic resource access.",
    tags: ["HTML/CSS", "Web App", "Education Tech", "Schedule Management"],
    achievement: "University Project",
    github: "https://github.com/Anas-moosa03/EDU-Planner-",
    image: eduPlannerImg
  },
  {
    title: "Mobile Price Classification",
    description: "Advanced ML & time series model for predicting mobile prices and traffic patterns. Deployed via Flask and Docker for production-grade scalability.",
    tags: ["Machine Learning", "Flask", "Docker", "Time Series"],
    github: "https://github.com/Anas-moosa03/ML-project",
    image: mobilePriceImg
  },
  {
    title: "Fetal Health Classification",
    description: "Deep learning classification system for fetal health monitoring. Deployed with Flask frontend and Docker containerization for mobile accessibility.",
    tags: ["Deep Learning", "Flask", "Docker", "Healthcare"],
    github: "https://github.com/Anas-moosa03/Fetal-Health-Classification--Using-Flutter-Docker",
    image: fetalImg
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl">
            A showcase of AI, ML, and full-stack projects that demonstrate expertise in solving real-world problems.
          </p>
        </motion.div>

        {/* Featured Project - AI Signs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="overflow-hidden border-primary/40 glow bg-gradient-to-br from-card via-secondary/20 to-card ring-1 ring-primary/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img 
                  src={projects[0].image} 
                  alt={projects[0].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/20" />
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="px-3 py-1.5 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/40 rounded-full w-fit mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-primary">FEATURED PROJECT</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-3">{projects[0].title}</h3>
                  
                  <div className="flex items-center text-sm text-amber-400 bg-amber-950/40 px-3 py-1.5 rounded w-fit mb-4 border border-amber-600/30">
                    <Trophy className="w-4 h-4 mr-2" />
                    {projects[0].achievement}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed text-base">
                    {projects[0].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {projects[0].tags.map((tag) => (
                      <Badge key={tag} className="font-normal text-xs bg-primary/20 text-primary border-primary/40">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={index + 1}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:border-primary/50 transition-all duration-300 border-primary/30 glow overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-secondary/20">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/40" />
                </div>
                
                {/* Content */}
                <CardHeader>
                  <CardTitle className="text-lg font-bold">{project.title}</CardTitle>
                  {project.achievement && (
                    <div className="flex items-center text-xs text-amber-400 bg-amber-950/40 px-2 py-1 rounded w-fit mt-2 border border-amber-600/30">
                      <Trophy className="w-3 h-3 mr-1" />
                      {project.achievement}
                    </div>
                  )}
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} className="font-normal text-xs bg-primary/20 text-primary border-primary/40">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                {project.pdf && (
                  <CardFooter className="pt-3 border-t border-primary/20 gap-2">
                    <Button variant="ghost" size="sm" className="flex-1 text-xs" asChild>
                      <a href={project.pdf} target="_blank" rel="noopener noreferrer">
                        <FileDown className="w-3 h-3 mr-1.5" />
                        PDF
                      </a>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
