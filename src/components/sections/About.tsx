import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Award, Users, Building2, Handshake } from "lucide-react";

export function About() {
  const features = [
    {
      title: "Industry Certified",
      description: "Globally recognized certifications accepted by top hotel chains.",
      icon: <Award className="w-8 h-8 text-primary" />,
    },
    {
      title: "Expert Faculty",
      description: "Trainers with 10+ years of live hospitality industry experience.",
      icon: <Users className="w-8 h-8 text-primary" />,
    },
    {
      title: "Modern Infrastructure",
      description: "State-of-the-art mock kitchens, service labs & reception setups.",
      icon: <Building2 className="w-8 h-8 text-primary" />,
    },
    {
      title: "Industry Partners",
      description: "Direct tie-ups with Marriott, Taj, Hyatt, Oberoi & more.",
      icon: <Handshake className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span className="text-primary font-bold tracking-widest uppercase text-sm">About Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Shaping Future <br />Hospitality Leaders
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Excellent Hospitality Training (EHT) is a premier institute dedicated to providing world-class hospitality education from HITEC City, Hyderabad. With over 15 years of experience, we have shaped thousands of professionals who now thrive in top hotels, resorts, and hospitality establishments worldwide.
            </p>
            
            <div className="bg-card border border-border p-6 md:p-8 rounded-2xl mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="text-primary">Our Mission</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower aspiring hospitality professionals with industry-relevant skills, practical knowledge, and ethical values — enabling them to excel in the global hospitality industry. We bridge academic learning with real-world demands.
              </p>
            </div>
            
            <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic">
              <p className="text-2xl font-serif text-foreground">"Unique Place to Sure Success"</p>
            </blockquote>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <Card key={idx} className="bg-background border-border hover:border-primary/50 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-primary/10 border border-primary/20 rounded-2xl p-8 md:p-10 flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-4 text-center lg:text-left"
        >
          <div className="flex flex-col items-center lg:items-start gap-2">
            <span className="text-3xl font-bold text-primary">50+</span>
            <span className="text-sm font-semibold uppercase tracking-wider text-foreground">Industry Partners</span>
          </div>
          <div className="hidden lg:block w-px h-12 bg-border"></div>
          <div className="flex flex-col items-center lg:items-start gap-2">
            <span className="text-3xl font-bold text-primary">5</span>
            <span className="text-sm font-semibold uppercase tracking-wider text-foreground">Placement Cities</span>
          </div>
          <div className="hidden lg:block w-px h-12 bg-border"></div>
          <div className="flex flex-col items-center lg:items-start gap-2">
            <span className="text-3xl font-bold text-primary">10</span>
            <span className="text-sm font-semibold uppercase tracking-wider text-foreground">Specialist Courses</span>
          </div>
          <div className="hidden lg:block w-px h-12 bg-border"></div>
          <div className="flex flex-col items-center lg:items-start gap-2">
            <span className="text-3xl font-bold text-primary">24/7</span>
            <span className="text-sm font-semibold uppercase tracking-wider text-foreground">Student Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
