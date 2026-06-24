import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ChevronRight, Award, GraduationCap, Briefcase } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-background pointer-events-none -z-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none -z-10"></div>
      
      {/* Decorative blurred shapes */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start max-w-2xl"
          >
            <Badge variant="outline" className="bg-secondary/50 text-foreground border-primary/30 mb-6 py-1.5 px-4 font-medium backdrop-blur-sm flex items-center gap-2">
              <span className="text-lg leading-none">⚙️</span> 100% Placement Assistance
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight mb-6">
              Your Gateway to a <br />
              <span className="text-primary relative inline-block mt-2">
                Stellar Hospitality Career
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Industry-recognized certification programs at Hyderabad's premier hospitality training institute — with guaranteed placement support across India and Dubai.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
              <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:scale-105">
                <a href="tel:8825178251">📞 Call: 8825178251</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base font-bold rounded-full border-border hover:bg-secondary hover:text-foreground transition-all">
                <a href="#courses" className="flex items-center gap-2">
                  Explore Courses <ChevronRight size={18} />
                </a>
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-border w-full">
              <div className="flex flex-col gap-1">
                <span className="text-2xl sm:text-3xl font-bold text-foreground">5000+</span>
                <span className="text-xs sm:text-sm text-muted-foreground font-medium flex items-center gap-1.5">
                  <GraduationCap size={14} className="text-primary hidden sm:block" /> Students Trained
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl sm:text-3xl font-bold text-foreground">100%</span>
                <span className="text-xs sm:text-sm text-muted-foreground font-medium flex items-center gap-1.5">
                  <Award size={14} className="text-primary hidden sm:block" /> Success Rate
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl sm:text-3xl font-bold text-foreground">15+</span>
                <span className="text-xs sm:text-sm text-muted-foreground font-medium flex items-center gap-1.5">
                  <Briefcase size={14} className="text-primary hidden sm:block" /> Years Experience
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
          >
            {/* Dashboard Mockup Card */}
            <div className="relative w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm z-10 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="h-12 bg-secondary/80 border-b border-border flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-chart-4"></div>
                <div className="w-3 h-3 rounded-full bg-chart-3"></div>
                <div className="mx-auto text-xs font-mono text-muted-foreground bg-background px-3 py-1 rounded-md">ehttraining.com/programs</div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Top Programs</h3>
                    <p className="text-xs text-muted-foreground">Admissions Open 2024</p>
                  </div>
                  <Badge className="bg-primary/20 text-primary border-0 hover:bg-primary/20">Featured</Badge>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: "Diploma in Hotel Management", price: "₹85,000", duration: "12 Months" },
                    { name: "Food Production & Culinary", price: "₹55,000", duration: "6 Months" },
                    { name: "F&B Service Specialist", price: "₹45,000", duration: "6 Months" },
                    { name: "Adv. Bartender Training", price: "₹14,999", duration: "6 Months", tag: "NEW" },
                  ].map((course, i) => (
                    <div key={i} className="flex justify-between items-center p-3 rounded-lg border border-border/50 bg-background/50 hover:bg-secondary/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center text-primary">
                          <CheckCircle2 size={18} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium text-foreground">{course.name}</p>
                            {course.tag && <span className="text-[10px] font-bold bg-primary text-primary-foreground px-1.5 py-0.5 rounded-sm">{course.tag}</span>}
                          </div>
                          <p className="text-xs text-muted-foreground">{course.duration}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-foreground">{course.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 lg:bottom-12 lg:-right-10 bg-primary text-primary-foreground py-3 px-6 rounded-xl shadow-xl shadow-primary/20 border-2 border-primary-foreground z-20 flex flex-col items-center"
            >
              <span className="text-lg font-bold">EHT</span>
              <span className="text-xs font-semibold uppercase tracking-widest">Est. 2009</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
