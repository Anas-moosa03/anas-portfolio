import { motion } from "framer-motion";
import { Trophy, Medal, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import profileImg from "@assets/WhatsApp_Image_2025-10-06_at_4.20.23_PM_1766475362288.jpeg";
import olympiadAwardImg from "@assets/image_1766475608892.png";
import gjuCompetitionImg from "@assets/image_1766475698056.png";
import innovationAwardImg from "@assets/image_1766475747834.png";

const achievements = [
  {
    title: "1st Place - Innovation & Technology for People with Disability",
    description: "IEEE Jordan Section - 2025 Innovation Award",
    category: "Social Impact & Technology",
    date: "2025",
    icon: <Trophy className="w-6 h-6 text-amber-400" />
  },
  {
    title: "1st Place - AI Competition",
    description: "AI & Its Applications Competition at GJU 3030",
    category: "Machine Learning",
    date: "2025",
    icon: <Medal className="w-6 h-6 text-amber-400" />
  },
  {
    title: "2nd Place - AI Arab Olympiad",
    description: "Machine Learning Category - AI Olympiad 2025",
    category: "National Competition",
    date: "2025",
    icon: <Star className="w-6 h-6 text-amber-400" />
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Achievements & Awards</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Recognition for innovation and excellence in AI, Machine Learning, and Data Science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="overflow-hidden border-primary/30 glow bg-gradient-to-br from-card via-secondary/20 to-card h-full">
              <div className="p-6">
                <div className="relative mb-6 overflow-hidden rounded-lg border-2 border-primary/40 bg-gradient-to-b from-secondary/20 to-background">
                  <img 
                    src={profileImg} 
                    alt="Anas Moosa"
                    className="w-full h-80 object-contain object-center p-2"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Anas Moosa</h3>
                <p className="text-primary font-semibold mb-4">AI Engineer & Data Scientist</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">University</p>
                    <p className="font-medium">University of Jordan</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Degree</p>
                    <p className="font-medium">Bachelor in Data Science</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Abu Dhabi, UAE</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Awards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-primary/30 hover:border-primary/60 transition-all duration-300 glow overflow-hidden group bg-gradient-to-br from-card via-secondary/20 to-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-amber-950/40 border border-amber-600/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {achievement.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{achievement.description}</p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge className="bg-primary/20 text-primary border-primary/40 font-normal text-xs">
                            {achievement.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{achievement.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Award Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Innovation & Technology Award */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl border border-primary/30 glow"
          >
            <div className="relative h-72 overflow-hidden bg-gradient-to-b from-transparent to-background/50">
              <img 
                src={innovationAwardImg} 
                alt="Innovation and Technology for People with Disability - 1st Place"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-bold mb-1">Innovation Award</h3>
                <p className="text-muted-foreground text-sm">
                  1st Place - Technology for People with Disability
                </p>
              </div>
            </div>
          </motion.div>

          {/* GJU 3030 Competition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden rounded-xl border border-primary/30 glow"
          >
            <div className="relative h-72 overflow-hidden bg-gradient-to-b from-transparent to-background/50">
              <img 
                src={gjuCompetitionImg} 
                alt="GJU 3030 Competition - 1st Place"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-bold mb-1">GJU 3030 Competition</h3>
                <p className="text-muted-foreground text-sm">
                  1st Place - AI & Its Applications
                </p>
              </div>
            </div>
          </motion.div>

          {/* AI Arab Olympiad */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-xl border border-primary/30 glow"
          >
            <div className="relative h-72 overflow-hidden bg-gradient-to-b from-transparent to-background/50">
              <img 
                src={olympiadAwardImg} 
                alt="AI Arab Olympiad - 2nd Place"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-bold mb-1">AI Arab Olympiad 2025</h3>
                <p className="text-muted-foreground text-sm">
                  2nd Place - Machine Learning Category
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
