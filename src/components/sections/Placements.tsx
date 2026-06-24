import { motion } from "framer-motion";
import { MapPin, Star, Building, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Placements() {
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
    <section id="placements" className="py-24 bg-background overflow-hidden relative">
      {/* Decorative background map pattern could go here */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, var(--color-primary) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Placement Assistance</span>
            <span className="w-8 h-[2px] bg-primary"></span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            100% Placement Support
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide guaranteed placement assistance across India and abroad through our extensive network of hospitality industry partners.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-20">
          {cities.map((city, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 rounded-2xl border ${city.status === 'active' ? 'bg-card border-border hover:border-primary/50' : 'bg-background border-dashed border-muted-foreground/30 opacity-80'} transition-all hover:-translate-y-1 relative overflow-hidden group`}
            >
              {city.status === 'planned' && (
                <div className="absolute inset-0 bg-secondary/10 flex items-center justify-center backdrop-blur-[1px] z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Badge variant="outline" className="bg-background">Expansion Planned</Badge>
                </div>
              )}
              <MapPin size={24} className={city.status === 'active' ? "text-primary mb-4" : "text-muted-foreground mb-4"} />
              <h3 className="text-xl font-bold text-foreground mb-1">{city.name}</h3>
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">{city.country}</p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">{city.desc}</p>
              <div className="mt-auto pt-4 border-t border-border">
                <span className="text-sm font-semibold text-foreground">{city.positions}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recruitment Partners */}
        <div className="mb-20">
          <h3 className="text-center text-sm font-bold tracking-widest text-muted-foreground uppercase mb-8">
            Our Recruitment Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {partners.map((partner, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-card border border-border px-6 py-4 rounded-xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex items-center justify-center min-w-[140px]"
              >
                <span className="font-bold text-foreground/80 tracking-wide text-lg">{partner}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-card to-card/50 border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl"
        >
          <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Users size={32} className="text-primary" />
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-foreground">Join 5000+ alumni</p>
              <p className="text-muted-foreground">working at top hospitality brands</p>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-16 bg-border"></div>
          
          <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Star size={32} className="text-primary fill-primary" />
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-foreground">Rated 4.9 / 5</p>
              <p className="text-muted-foreground">by our placed students</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
