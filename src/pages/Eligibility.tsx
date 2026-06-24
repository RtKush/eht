import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Check, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Eligibility() {
  const steps = [
    { num: 1, title: "Check Eligibility", desc: "Ensure you meet the age & education criteria." },
    { num: 2, title: "Prepare Documents", desc: "Gather all required paperwork & photos." },
    { num: 3, title: "Admission", desc: "Submit form & complete fee payment." },
    { num: 4, title: "Start Training", desc: "Begin your professional hospitality journey." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        {/* Page Hero */}
        <section className="relative h-[30vh] min-h-[250px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 z-0" />
          <div className="relative z-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground font-serif tracking-tight">Eligibility & Admission</h1>
            <div className="w-24 h-1 bg-primary mx-auto mt-6" />
          </div>
        </section>

        {/* Process Flow */}
        <section className="py-24 bg-card/30 border-y border-border">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold font-serif text-center mb-16">Admission Process</h2>
            
            <div className="grid md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-8 left-12 right-12 h-0.5 bg-border -z-10" />
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-card border-2 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-bold font-serif mb-6 shadow-xl">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Criteria & Documents */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-0 border border-border rounded-2xl overflow-hidden bg-background shadow-xl">
                
                {/* Left Column - Criteria */}
                <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-border bg-card/50">
                  <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3 font-serif">
                    <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={20} />
                    </span>
                    Eligibility Criteria
                  </h3>
                  
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-primary"></div></div>
                      <div>
                        <h4 className="font-bold text-foreground">Minimum Qualification</h4>
                        <p className="text-muted-foreground">10th / 12th Pass or Graduate</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-primary"></div></div>
                      <div>
                        <h4 className="font-bold text-foreground">Age Requirement</h4>
                        <p className="text-muted-foreground">18 – 28 Years</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-primary"></div></div>
                      <div>
                        <h4 className="font-bold text-foreground">Communication</h4>
                        <p className="text-muted-foreground">Basic English Preferred</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-primary"></div></div>
                      <div>
                        <h4 className="font-bold text-foreground">Physical Fitness</h4>
                        <p className="text-muted-foreground">Medically Fit</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Right Column - Documents */}
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3 font-serif">
                    <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <FileText size={20} />
                    </span>
                    Required Documents
                  </h3>
                  
                  <ul className="space-y-4">
                    {[
                      "10th / 12th Marksheet & Certificate",
                      "Graduation Certificate (if applicable)",
                      "Aadhaar Card",
                      "Passport Size Photos (4)",
                      "Address Proof",
                      "Medical Fitness Certificate"
                    ].map((doc, idx) => (
                      <li key={idx} className="flex items-center gap-3 bg-card border border-border p-3 rounded-lg">
                        <span className="font-mono text-primary font-bold text-sm w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-foreground font-medium">{doc}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-12 text-center">
                    <Button asChild size="lg" className="w-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 h-14 text-lg">
                      <Link href="/contact">Apply Now</Link>
                    </Button>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
