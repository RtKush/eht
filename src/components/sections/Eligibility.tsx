import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, FileText } from "lucide-react";

export function Eligibility() {
  return (
    <section id="eligibility" className="py-24 bg-card/30 border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Eligibility</span>
            <span className="w-8 h-[2px] bg-primary"></span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Who Can Apply?
          </h2>
          <p className="text-muted-foreground text-lg">
            Simple eligibility criteria designed to welcome aspiring hospitality professionals from all backgrounds.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 border border-border rounded-2xl overflow-hidden bg-background">
            
            {/* Left Column - Criteria */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Check size={20} />
                </span>
                Eligibility Criteria
              </h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Minimum Qualification</h4>
                    <p className="text-muted-foreground">10th / 12th Pass or Graduate</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Age Requirement</h4>
                    <p className="text-muted-foreground">18 – 28 Years</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Communication</h4>
                    <p className="text-muted-foreground">Basic English Preferred</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Physical Fitness</h4>
                    <p className="text-muted-foreground">Medically Fit</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Right Column - Documents */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 md:p-12 bg-secondary/30"
            >
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
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
                  <li key={idx} className="flex items-center gap-3 bg-background border border-border p-3 rounded-lg">
                    <span className="font-mono text-primary font-bold text-sm w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-foreground font-medium">{doc}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-border/50 text-center">
                <Button asChild size="lg" className="w-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-lg shadow-primary/20">
                  <a href="#contact">Apply Now</a>
                </Button>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
