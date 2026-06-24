import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Clock, CheckCircle2 } from "lucide-react";

export function Courses() {
  const courses = [
    {
      title: "Diploma in Hotel Management",
      duration: "12 Months",
      price: "₹85,000",
      isNew: false,
      desc: "Comprehensive training covering front office, housekeeping, food & beverage service, and kitchen operations.",
      features: ["Internship Included", "Industry Certification", "100% Placement Support"]
    },
    {
      title: "Diploma in Food Production",
      duration: "6 Months",
      price: "₹55,000",
      isNew: false,
      desc: "Specialized culinary arts program covering Indian, Continental, and Bakery & Confectionery.",
      features: ["Live Kitchen Training", "Master Chef Sessions", "Recipe Portfolio"]
    },
    {
      title: "Diploma in F&B Service",
      duration: "6 Months",
      price: "₹45,000",
      isNew: false,
      desc: "Expert training in restaurant operations, bar management, and guest service excellence.",
      features: ["Practical Training", "Wine & Beverage Studies", "Guest Relations"]
    },
    {
      title: "Certificate in Front Office",
      duration: "3 Months",
      price: "₹35,000",
      isNew: false,
      desc: "Focused program on reception operations, reservation systems, and professional guest communication.",
      features: ["PMS Software Training", "Communication Skills", "Grooming & Etiquette"]
    },
    {
      title: "Certificate in Housekeeping",
      duration: "3 Months",
      price: "₹30,000",
      isNew: false,
      desc: "Training in room upkeep, laundry operations, and maintaining the highest hygiene standards.",
      features: ["Practical Lab Sessions", "Chemical Safety Training", "Supervision Skills"]
    },
    {
      title: "Basic to Advanced Bartender Training",
      duration: "6 Months",
      price: "₹14,999",
      isNew: true,
      desc: "Comprehensive bartending program from foundational mixology to advanced cocktail crafting and bar management.",
      features: ["Classic & Signature Cocktails", "Bar Setup & Management", "FSSAI Hygiene Standards"]
    },
    {
      title: "Hospitality Foundation Course",
      duration: "3 Months",
      price: "₹12,999",
      isNew: true,
      desc: "An entry-level course covering the core principles of hospitality — service standards, guest communication, and industry basics.",
      features: ["Guest Handling Basics", "Service Standards", "Industry Orientation"]
    },
    {
      title: "Basic to Advanced Hospitality Training",
      duration: "6 Months",
      price: "₹18,999",
      isNew: true,
      desc: "A complete hospitality training journey — from entry-level fundamentals to advanced service delivery and leadership skills.",
      features: ["Full Hospitality Curriculum", "Leadership & Supervision", "100% Placement Support"]
    },
    {
      title: "Basic Bartender Training Program",
      duration: "3 Months",
      price: "₹8,999",
      isNew: true,
      desc: "Foundational bartending skills including mocktails, classic cocktails, bar hygiene, and customer service in bar settings.",
      features: ["Cocktail & Mocktail Basics", "Bar Equipment Training", "Customer Service Skills"]
    },
    {
      title: "Basic English Spoken Course",
      duration: "2 Months",
      price: "₹3,999",
      isNew: true,
      desc: "Practical English communication training designed for hospitality professionals — covering spoken fluency and professional etiquette.",
      features: ["Spoken Fluency", "Hospitality Vocabulary", "Interview Preparation"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="courses" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Courses Offered</span>
            <span className="w-8 h-[2px] bg-primary"></span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Industry-Aligned Training Programs
          </h2>
          <p className="text-muted-foreground text-lg">
            Specialized hospitality courses designed to meet industry standards and employer expectations — from foundations to leadership.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
        >
          {courses.map((course, idx) => (
            <motion.div key={idx} variants={itemVariants} className="h-full">
              <Card className="h-full flex flex-col bg-card border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-primary to-primary/50 w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <CardContent className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="text-xl font-bold text-foreground leading-tight">
                      {course.title}
                    </h3>
                    {course.isNew && (
                      <Badge className="bg-destructive text-destructive-foreground hover:bg-destructive uppercase text-[10px] font-bold px-2 py-0.5 shrink-0 animate-pulse">
                        New
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium mb-4 bg-secondary/50 self-start px-3 py-1.5 rounded-md">
                    <Clock size={16} className="text-primary" />
                    {course.duration}
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6 flex-1">
                    {course.desc}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {course.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 md:p-8 pt-0 border-t border-border mt-auto flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1">Course Fee</p>
                    <p className="text-xl font-bold text-primary">{course.price}</p>
                  </div>
                  <Button asChild variant="outline" className="border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground font-semibold">
                    <a href="#contact">Enquire</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
