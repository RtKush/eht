import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Award, Users, Building2, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
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
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        {/* Page Hero */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80" 
            alt="About EHT" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white font-serif tracking-tight">About Us</h1>
            <div className="w-24 h-1 bg-primary mx-auto mt-6" />
          </div>
        </section>

        {/* Overview & Features */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className="inline-flex items-center gap-4 mb-4">
                  <span className="w-8 h-px bg-primary"></span>
                  <span className="text-primary font-bold tracking-widest uppercase text-xs">Institute Overview</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-serif">
                  Shaping Future Hospitality Leaders
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Excellent Hospitality Training (EHT) is a premier institute dedicated to providing world-class hospitality education from HITEC City, Hyderabad. With over 15 years of experience, we have shaped thousands of professionals who now thrive in top hotels, resorts, and hospitality establishments worldwide.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 grid sm:grid-cols-2 gap-6"
              >
                {features.map((feature, idx) => (
                  <Card key={idx} className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5">
                        {feature.icon}
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-2 font-serif">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 bg-card/50 border-y border-border">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
            <h2 className="text-3xl font-bold font-serif mb-8 text-primary">Our Mission</h2>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-12">
              "To empower aspiring hospitality professionals with industry-relevant skills, practical knowledge, and ethical values — enabling them to excel in the global hospitality industry. We bridge academic learning with real-world demands."
            </p>
            <blockquote className="text-3xl md:text-4xl font-serif italic text-primary font-bold">
              "Unique Place to Sure Success"
            </blockquote>
          </div>
        </section>

        {/* Stats Row */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
              {[
                { val: "5000+", label: "Students Trained" },
                { val: "100%", label: "Success Rate" },
                { val: "15+", label: "Years Experience" },
                { val: "50+", label: "Partners" },
                { val: "5", label: "Placement Cities" },
                { val: "10", label: "Courses" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="text-4xl font-bold text-primary font-serif">{stat.val}</span>
                  <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
