import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  course: z.string().min(1, { message: "Please select a course." }),
  message: z.string().optional(),
});

const courseOptions = [
  "Diploma in Hotel Management",
  "Diploma in Food Production",
  "Diploma in F&B Service",
  "Certificate in Front Office",
  "Certificate in Housekeeping",
  "Basic to Advanced Bartender Training",
  "Hospitality Foundation Course",
  "Basic to Advanced Hospitality Training",
  "Basic Bartender Training Program",
  "Basic English Spoken Course"
];

export function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      course: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Success",
      description: "Thank you! We'll contact you shortly.",
      variant: "default",
      className: "bg-primary text-primary-foreground border-none"
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Left - Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Contact Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Start Your Journey Today
            </h2>
            
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Reach out to learn about our programs, batch schedules, and enrollment process.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-1">Call Us</p>
                  <a href="tel:8825178251" className="text-xl font-semibold text-foreground hover:text-primary transition-colors">8825178251</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-1">Email Us</p>
                  <a href="mailto:info@ehttraining.com" className="text-lg font-medium text-foreground hover:text-primary transition-colors">info@ehttraining.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-1">Visit Us</p>
                  <p className="text-lg font-medium text-foreground">HITEC City, Hyderabad,<br/>Telangana, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-1">Working Hours</p>
                  <p className="text-lg font-medium text-foreground">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-4">Connect With Us</p>
              <div className="flex gap-4">
                {[FaFacebook, FaInstagram, FaLinkedin, FaYoutube].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-card border border-border p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            
            <h3 className="text-2xl font-bold text-foreground mb-8">Quick Enquiry</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-background border-border focus-visible:ring-primary h-12" {...field} />
                        </FormControl>
                        <FormMessage className="text-destructive" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 9876543210" className="bg-background border-border focus-visible:ring-primary h-12" {...field} />
                        </FormControl>
                        <FormMessage className="text-destructive" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" className="bg-background border-border focus-visible:ring-primary h-12" {...field} />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="course"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Course Interested In *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background border-border focus-visible:ring-primary h-12 text-foreground">
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-card border-border">
                          {courseOptions.map((course) => (
                            <SelectItem key={course} value={course} className="text-foreground hover:bg-secondary focus:bg-secondary">
                              {course}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you?" 
                          className="bg-background border-border focus-visible:ring-primary min-h-[120px] resize-y" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 h-14 text-lg mt-4 shadow-lg shadow-primary/20">
                  Submit Enquiry
                </Button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
