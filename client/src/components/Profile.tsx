import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import profileImg from "@assets/generated_images/my_photo2.jpg";

export default function Profile() {
  return (
    <section id="profile" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-primary/30 glow bg-gradient-to-br from-card via-secondary/20 to-card">
                <div className="flex flex-col lg:flex-row items-stretch">
                  {/* Image column (left on large screens) */}
                  <div className="lg:w-1/3 bg-transparent">
                    <div className="h-80 lg:h-full lg:min-h-[360px] w-full overflow-hidden">
                      <img
                        src={profileImg}
                        alt="Anas Moosa"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Info column (right) */}
                  <div className="lg:w-2/3 p-6 flex flex-col justify-center">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">Anas Moosa</h3>
                    <p className="text-primary font-semibold mb-6 text-lg">AI Engineer & Data Scientist</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
                      <div>
                        <p className="text-sm text-muted-foreground">University</p>
                        <p className="font-medium">University of Jordan</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Degree</p>
                        <p className="font-medium">Bachelor in Data Science</p>
                      </div>
                      <div className="sm:col-span-2">
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">Abu Dhabi, UAE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}