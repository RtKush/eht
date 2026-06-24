import { motion } from "framer-motion";

export function WhyChooseUs() {
  const advantages = [
    {
      num: "01",
      title: "Industry-Relevant Curriculum",
      desc: "Courses designed with hospitality industry experts to match current job requirements and standards."
    },
    {
      num: "02",
      title: "Practical Hands-On Training",
      desc: "Real-world experience in simulated hotel kitchens, front desks, and service floors."
    },
    {
      num: "03",
      title: "Seasoned Faculty",
      desc: "Learn from instructors with decades of live hospitality industry experience."
    },
    {
      num: "04",
      title: "Placement Guarantee",
      desc: "Dedicated placement cell with a 100% success rate track record and lifetime alumni placement support."
    },
    {
      num: "05",
      title: "Affordable Fees & Scholarships",
      desc: "Quality education with flexible payment options and merit-based scholarships available."
    },
    {
      num: "06",
      title: "Global Career Opportunities",
      desc: "International placement support in Dubai, Malaysia, Singapore, and more."
    }
  ];

  return (
    <section className="py-24 bg-card/50 relative overflow-hidden">
      {/* Decorative large EHT text in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-background opacity-50 pointer-events-none select-none -z-10 tracking-tighter">
        EHT
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
            <span className="w-8 h-[2px] bg-primary"></span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The EHT Advantage
          </h2>
          <p className="text-muted-foreground text-lg">
            We don't just teach — we transform students into hospitality professionals ready for day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((adv, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 relative group"
            >
              <div className="absolute top-0 right-8 w-12 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-300"></div>
              
              <div className="text-5xl font-black text-secondary-foreground/20 mb-6 group-hover:text-primary/20 transition-colors font-serif italic">
                {adv.num}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {adv.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {adv.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
