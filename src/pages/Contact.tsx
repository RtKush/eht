import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
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
import { courses } from "@/data/courses";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  course: z.string().min(1, { message: "Please select a course." }),
  message: z.string().optional(),
});

export default function Contact() {
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
    toast({
      title: "Success",
      description: "Thank you! We'll contact you shortly.",
      variant: "default",
      className: "bg-primary text-primary-foreground border-none"
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        {/* Page Hero */}
        <section className="relative h-[30vh] min-h-[250px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 z-0" />
          <div className="relative z-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground font-serif tracking-tight">Contact Us</h1>
            <div className="w-24 h-1 bg-primary mx-auto mt-6" />
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              
              {/* Left - Info */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <h2 className="text-3xl font-bold font-serif mb-8">Get In Touch</h2>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-1">Call Us</p>
                      <a href="tel:8825178251" className="text-xl font-bold text-foreground hover:text-primary transition-colors">8825178251</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-1">Email Us</p>
                      <a href="mailto:info@ehttraining.com" className="text-lg font-medium text-foreground hover:text-primary transition-colors">info@ehttraining.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-1">Visit Us</p>
                      <p className="text-lg font-medium text-foreground">HITEC City, Hyderabad,<br/>Telangana, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-1">Working Hours</p>
                      <p className="text-lg font-medium text-foreground">Mon – Sat: 9:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Map Card */}
                <div className="h-48 border border-primary/30 rounded-xl bg-card flex items-center justify-center mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5"></div>
                  <div className="text-center relative z-10 px-4">
                    <MapPin className="text-primary mx-auto mb-2" size={24}/>
                    <p className="font-serif font-bold text-lg">HITEC City, Hyderabad, Telangana, India</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-4">Connect With Us</p>
                  <div className="flex gap-4">
                    {[FaFacebook, FaInstagram, FaLinkedin, FaYoutube].map((Icon, i) => (
                      <a key={i} href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right - Form */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3 bg-card border border-border p-8 md:p-12 rounded-2xl shadow-xl relative"
              >
                <h3 className="text-2xl font-bold font-serif mb-8">Quick Enquiry</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="bg-background border-border h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 9876543210" className="bg-background border-border h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" className="bg-background border-border h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="course"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Course Interested In *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background border-border h-12">
                                <SelectValue placeholder="Select a course" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {courses.map((course) => (
                                <SelectItem key={course.title} value={course.title}>
                                  {course.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?" 
                              className="bg-background border-border min-h-[120px] resize-y" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 h-14 text-lg">
                      Submit Enquiry
                    </Button>
                  </form>
                </Form>
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
