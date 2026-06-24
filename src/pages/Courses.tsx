import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { Link } from "wouter";
import { courses } from "@/data/courses";

export default function Courses() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        {/* Page Hero */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=80" 
            alt="Courses at EHT" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white font-serif tracking-tight">Our Courses</h1>
            <p className="text-white/80 mt-4 text-lg max-w-2xl mx-auto px-4">
              Industry-aligned training programs designed to launch your global hospitality career.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6" />
          </div>
        </section>

        {/* Course Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, idx) => (
                <motion.div 
                  key={course.slug} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 3) * 0.1 }}
                >
                  <Card className="h-full flex flex-col overflow-hidden bg-card border-border hover:border-primary/40 transition-all hover:-translate-y-1 shadow-lg hover:shadow-primary/5 cursor-pointer group">
                    <Link href={`/courses/${course.slug}`} className="flex flex-col h-full">
                      <div className="h-48 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/40 z-10 transition-opacity group-hover:opacity-20" />
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                        {course.isNew && (
                          <Badge className="absolute top-4 left-4 z-20 bg-destructive text-white uppercase font-bold px-2 py-0.5">NEW</Badge>
                        )}
                      </div>
                      <CardContent className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold font-serif leading-tight mb-3 group-hover:text-primary transition-colors">{course.title}</h3>
                        <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                          <Clock size={14} className="text-primary" /> {course.duration}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-6 flex-1">{course.desc}</p>
                        <div className="space-y-2">
                          {course.features.slice(0, 2).map((feature, i) => (
                            <div key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-primary" /> {feature}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0 border-t border-border flex justify-between items-center bg-card mt-auto">
                        <span className="text-lg font-bold text-primary">{course.price}</span>
                        <span className="text-sm font-bold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">Details →</span>
                      </CardFooter>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
