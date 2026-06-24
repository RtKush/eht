import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Users, Star, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Placements() {
  const cities = [
    {
      name: "Hyderabad",
      country: "India",
      desc: "IT hub with premium 5-star hotels & convention centers",
      positions: "200+ Positions/Year",
      status: "active"
    },
    {
      name: "Bengaluru",
      country: "India",
      desc: "Silicon Valley of India with a thriving hospitality scene",
      positions: "150+ Positions/Year",
      status: "active"
    },
    {
      name: "Goa",
      country: "India",
      desc: "Tourism paradise with world-class beach resorts",
      positions: "100+ Positions/Year",
      status: "active"
    },
    {
      name: "Dubai",
      country: "UAE",
      desc: "Global hospitality destination with tax-free salaries",
      positions: "250+ Positions/Year",
      status: "active"
    },
    {
      name: "Mumbai",
      country: "India",
      desc: "India's financial capital & Bollywood hub with luxury hotels",
      positions: "Coming Soon",
      status: "planned"
    }
  ];

  const partners = [
    "Marriott", "Taj Hotels", "ITC Hotels", "Oberoi Group", 
    "Hyatt", "Hilton", "Radisson", "Leela Palaces"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        {/* Page Hero */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=80" 
            alt="Placements" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white font-serif tracking-tight">Placement Support</h1>
            <p className="text-white/80 mt-4 text-lg">Your launchpad to a global career.</p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6" />
          </div>
        </section>

        {/* Stats Row */}
        <section className="py-12 bg-card border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
              {[
                { val: "700+", label: "Positions/Year" },
                { val: "5", label: "Cities" },
                { val: "4", label: "Countries" },
                { val: "4.9/5", label: "Student Rating" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="text-3xl font-bold text-primary font-serif">{stat.val}</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold font-serif text-center mb-16">Where Our Students Go</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {cities.map((city, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-6 rounded-2xl border ${city.status === 'active' ? 'bg-card border-border hover:border-primary/50' : 'bg-background border-dashed border-muted-foreground/30 opacity-80'} transition-all hover:-translate-y-1 relative overflow-hidden group`}
                >
                  {city.status === 'planned' && (
                    <div className="absolute inset-0 bg-secondary/10 flex items-center justify-center backdrop-blur-[1px] z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Badge variant="outline" className="bg-background">Expansion Planned</Badge>
                    </div>
                  )}
                  <MapPin size={24} className={city.status === 'active' ? "text-primary mb-4" : "text-muted-foreground mb-4"} />
                  <h3 className="text-xl font-bold text-foreground mb-1 font-serif">{city.name}</h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">{city.country}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">{city.desc}</p>
                  <div className="mt-auto pt-4 border-t border-border">
                    <span className="text-sm font-semibold text-foreground">{city.positions}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recruitment Partners */}
        <section className="py-16 bg-card/50 overflow-hidden border-y border-border">
          <div className="container mx-auto px-4 mb-10 text-center">
            <h2 className="text-2xl font-bold font-serif">Our Recruitment Partners</h2>
          </div>
          <div className="relative flex w-full overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap min-w-max">
              {[...partners, ...partners].map((partner, i) => (
                <div key={i} className="mx-4 bg-background border border-border px-8 py-4 rounded-lg shadow-sm min-w-[200px] flex items-center justify-center">
                  <span className="font-bold text-primary font-serif tracking-wider text-xl">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold font-serif text-center mb-16">Placement Process</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
              {['Training', 'Screening', 'Interviews', 'Offer'].map((step, i) => (
                <div key={i} className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary text-primary flex items-center justify-center font-bold text-xl font-serif mb-4 mx-auto">
                      {i + 1}
                    </div>
                    <span className="font-bold">{step}</span>
                  </div>
                  {i < 3 && <ArrowRight className="text-muted-foreground hidden md:block" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Banner */}
        <section className="py-24 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">Join 5000+ alumni working at top brands.</h2>
            <p className="text-xl mb-10">Rated 4.9/5 by placed students.</p>
            <Button asChild size="lg" className="bg-background text-foreground font-bold hover:bg-background/90 h-14 px-10 rounded-full">
              <Link href="/courses">Start Your Journey Today</Link>
            </Button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
