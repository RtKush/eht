import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChevronRight, ChevronLeft, GraduationCap, Award, Briefcase, Handshake, CheckCircle2, Clock, Quote } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { courses } from "@/data/courses";

function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Home() {
  const slides = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1920&q=80",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const partners = [
    "Marriott", "Taj Hotels", "ITC Hotels", "Oberoi Group", "Hyatt", "Hilton", "Radisson", "Leela Palaces"
  ];
  // Duplicate for seamless marquee
  const marqueePartners = [...partners, ...partners];

  const testimonials = [
    {
      quote: "EHT completely transformed my career. Within 3 months of completing the Diploma in Hotel Management, I got placed at Marriott Hyderabad. The faculty's real-world experience made all the difference.",
      name: "Priya Sharma",
      course: "Hotel Management Alumni",
      company: "Now at Marriott",
      initials: "PS"
    },
    {
      quote: "The bartender training program was hands-on from day one. I'm now working at a 5-star property in Dubai with a package I never imagined. Best decision of my life.",
      name: "Rahul Verma",
      course: "Bartender Training Alumni",
      company: "Now in Dubai",
      initials: "RV"
    },
    {
      quote: "Coming from a non-hospitality background, I was nervous. EHT's foundation course helped me understand the industry basics and I landed a front office role at Taj Hotels in 2 months.",
      name: "Sneha Reddy",
      course: "Hospitality Foundation Alumni",
      company: "Now at Taj Hotels",
      initials: "SR"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
          {/* Image Slider */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="sync">
              <motion.img
                key={currentSlide}
                src={slides[currentSlide]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Hospitality Background"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <span className="inline-block text-primary/90 text-sm md:text-base uppercase tracking-[0.3em] font-semibold mb-6">
                Hyderabad's Premier Hospitality Institute · Est. 2009
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 font-serif">
                Your Gateway to a <br />
                <span className="text-primary italic">Stellar Hospitality Career</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Industry-recognized certification programs at Hyderabad's premier hospitality training institute — with guaranteed placement support across India and Dubai.
              </p>

              <Badge variant="outline" className="border-primary/50 text-white bg-black/20 backdrop-blur-md mb-8 py-2 px-6 text-sm font-medium">
                ⚙️ 100% Placement Assistance
              </Badge>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                  <a href="tel:8825178251">📞 Call: 8825178251</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full border-white text-white hover:bg-white hover:text-black transition-all">
                  <Link href="/courses">Explore Courses →</Link>
                </Button>
              </div>

              {/* Floating Stats Bar */}
              <div className="hidden md:flex items-center justify-center gap-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-4 px-10 max-w-max mx-auto shadow-2xl">
                <span className="text-white font-medium">5000+ Students Trained</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-white font-medium">100% Success Rate</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-white font-medium">15+ Years Experience</span>
              </div>
            </motion.div>
          </div>

          {/* Slider Controls */}
          <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center items-center gap-4">
            <button onClick={prevSlide} className="p-2 rounded-full bg-black/30 text-white hover:bg-primary transition-colors backdrop-blur-sm">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentSlide ? "bg-primary w-8" : "bg-white/50"}`}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="p-2 rounded-full bg-black/30 text-white hover:bg-primary transition-colors backdrop-blur-sm">
              <ChevronRight size={20} />
            </button>
          </div>
        </section>

        {/* STATS BAR (Counters) */}
        <section className="bg-[#0f172a] border-y border-border/50 py-12 relative z-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
              <div className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-black text-primary font-serif">
                  <AnimatedCounter end={5000} suffix="+" />
                </span>
                <span className="text-sm font-semibold text-white/70 uppercase tracking-wider">Students Trained</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-black text-primary font-serif">
                  <AnimatedCounter end={100} suffix="%" />
                </span>
                <span className="text-sm font-semibold text-white/70 uppercase tracking-wider">Success Rate</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-black text-primary font-serif">
                  <AnimatedCounter end={15} suffix="+" />
                </span>
                <span className="text-sm font-semibold text-white/70 uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-black text-primary font-serif">
                  <AnimatedCounter end={50} suffix="+" />
                </span>
                <span className="text-sm font-semibold text-white/70 uppercase tracking-wider">Industry Partners</span>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE EHT PREVIEW */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center gap-4 mb-4">
                <span className="w-12 h-px bg-primary"></span>
                <span className="text-primary font-bold tracking-widest uppercase text-xs">About Us</span>
                <span className="w-12 h-px bg-primary"></span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-serif">
                Shaping Future Hospitality Leaders
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="bg-card p-8 rounded-2xl border border-border text-center hover:border-primary/40 transition-colors">
                <Award className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold font-serif mb-3">Industry Certified</h3>
                <p className="text-muted-foreground text-sm">Globally recognized certifications accepted by top hotel chains.</p>
              </motion.div>
              <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1}} className="bg-card p-8 rounded-2xl border border-border text-center hover:border-primary/40 transition-colors">
                <Briefcase className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold font-serif mb-3">Expert Faculty</h3>
                <p className="text-muted-foreground text-sm">Trainers with 10+ years of live hospitality industry experience.</p>
              </motion.div>
              <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.2}} className="bg-card p-8 rounded-2xl border border-border text-center hover:border-primary/40 transition-colors">
                <Handshake className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold font-serif mb-3">Placement Support</h3>
                <p className="text-muted-foreground text-sm">Direct tie-ups with Marriott, Taj, Hyatt, Oberoi & more.</p>
              </motion.div>
            </div>
            <div className="text-center">
              <Button asChild variant="link" className="text-primary font-bold">
                <Link href="/about">Learn More About EHT →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FEATURED COURSES */}
        <section className="py-24 bg-card/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center gap-4 mb-4">
                <span className="w-12 h-px bg-primary"></span>
                <span className="text-primary font-bold tracking-widest uppercase text-xs">Featured Programs</span>
                <span className="w-12 h-px bg-primary"></span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-serif">
                Start Your Journey
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {courses.slice(0, 4).map((course, idx) => (
                <motion.div 
                  key={course.slug} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="h-full flex flex-col overflow-hidden bg-card border-border hover:border-primary/40 transition-all hover:-translate-y-1 shadow-lg hover:shadow-primary/5">
                    <div className="h-48 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/40 z-10 transition-opacity hover:opacity-20" />
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                      {course.isNew && (
                        <Badge className="absolute top-4 left-4 z-20 bg-destructive text-white uppercase font-bold px-2 py-0.5">NEW</Badge>
                      )}
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold font-serif leading-tight mb-3">{course.title}</h3>
                      <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                        <Clock size={14} className="text-primary" /> {course.duration}
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-6 flex-1">{course.desc}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-lg font-bold text-primary">{course.price}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-0 border-t border-border">
                      <Link href={`/courses/${course.slug}`} className="w-full text-center py-4 text-sm font-bold text-foreground hover:bg-secondary transition-colors uppercase tracking-wider">
                        View Details
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 font-bold rounded-full px-8">
                <Link href="/courses">View All 10 Courses →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* PLACEMENT HIGHLIGHTS */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold font-serif mb-8">
                100% Placement Support · 5 Cities · 700+ Positions/Year
              </h2>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {["Hyderabad", "Bengaluru", "Goa", "Dubai", "Mumbai"].map((city) => (
                  <Badge key={city} variant="outline" className="text-base py-2 px-6 border-primary/30 bg-card text-foreground">
                    {city}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-center gap-2 mb-10 text-xl font-medium">
                <span className="text-primary">★</span>
                <span>Rated 4.9/5 by placed students</span>
              </div>

              <Button asChild variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8">
                <Link href="/placements">View Placement Details →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <section className="py-12 border-y border-border bg-card/50 overflow-hidden">
          <div className="container mx-auto px-4 mb-8">
            <h3 className="text-center text-sm font-bold tracking-widest text-muted-foreground uppercase">Our Industry Partners</h3>
          </div>
          <div className="relative flex w-full overflow-hidden group">
            <div className="flex animate-marquee whitespace-nowrap min-w-max">
              {marqueePartners.map((partner, i) => (
                <div key={i} className="mx-4 bg-background border border-border px-8 py-4 rounded-lg shadow-sm min-w-[200px] flex items-center justify-center">
                  <span className="font-bold text-primary font-serif tracking-wider text-xl">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center gap-4 mb-4">
                <span className="w-12 h-px bg-primary"></span>
                <span className="text-primary font-bold tracking-widest uppercase text-xs">Success Stories</span>
                <span className="w-12 h-px bg-primary"></span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-serif">
                Hear From Our Alumni
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card p-8 rounded-2xl border border-border relative mt-8"
                >
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg">
                    <Quote size={20} className="fill-current" />
                  </div>
                  <p className="text-muted-foreground italic mb-8 mt-4 leading-relaxed line-clamp-4 hover:line-clamp-none transition-all">"{t.quote}"</p>
                  <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                    <div className="w-12 h-12 rounded-full bg-secondary text-primary font-bold flex items-center justify-center font-serif text-lg">
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{t.name}</h4>
                      <p className="text-xs text-muted-foreground">{t.course}</p>
                      <p className="text-xs font-bold text-primary mt-1">{t.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 font-serif">
              Ready to Begin Your Hospitality Career?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
              Join 5000+ successful alumni. Apply today and get 100% placement support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 font-bold rounded-full px-10 h-14">
                <Link href="/contact">Enquire Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold rounded-full px-10 h-14">
                <Link href="/courses">View Courses</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
