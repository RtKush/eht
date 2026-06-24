import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useParams, Link } from "wouter";
import { courses } from "@/data/courses";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find(c => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 font-serif">Course not found</h1>
          <Button asChild><Link href="/courses">Back to Courses</Link></Button>
        </div>
      </div>
    );
  }

  const otherCourses = courses.filter(c => c.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        {/* Page Hero */}
        <section className="relative h-[50vh] min-h-[400px] flex items-end pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img 
            src={course.image} 
            alt={course.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="container mx-auto px-4 md:px-6 relative z-20">
            {course.isNew && <Badge className="bg-destructive text-white mb-4 uppercase font-bold">New Program</Badge>}
            <h1 className="text-4xl md:text-6xl font-bold text-white font-serif tracking-tight mb-4 max-w-4xl">{course.title}</h1>
            <div className="flex flex-wrap gap-4 text-white/90">
              <span className="flex items-center gap-2"><Clock size={18} className="text-primary"/> {course.duration}</span>
              <span className="flex items-center gap-2"><Briefcase size={18} className="text-primary"/> 100% Placement Support</span>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold font-serif mb-6">Course Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{course.desc}</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold font-serif mb-6">Key Highlights</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                      <CheckCircle2 className="text-primary shrink-0" size={24} />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                    <CheckCircle2 className="text-primary shrink-0" size={24} />
                    <span className="font-medium">Industry Expert Faculty</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                    <CheckCircle2 className="text-primary shrink-0" size={24} />
                    <span className="font-medium">Modern Infrastructure Lab</span>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold font-serif mb-4 text-primary">Placement Support</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  100% guaranteed placement across India and Dubai. Our dedicated placement cell ensures every graduate finds their ideal position in top-tier hotels and hospitality establishments.
                </p>
                <Link href="/placements" className="text-foreground font-bold hover:text-primary uppercase tracking-wider text-sm">View Placement Track Record →</Link>
              </div>
            </div>

            {/* Sidebar Sticky */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                
                {/* Quick Info Card */}
                <div className="p-6 rounded-2xl bg-card border border-border shadow-xl">
                  <h3 className="font-bold font-serif text-2xl mb-6">Program Details</h3>
                  <div className="space-y-4 mb-8 divide-y divide-border">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-bold">{course.duration}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Course Fee</span>
                      <span className="font-bold text-primary text-xl">{course.price}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Eligibility</span>
                      <span className="font-bold text-right text-sm">10th/12th Pass<br/>18-28 Years</span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold font-serif text-xl mb-4">Quick Enquiry</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <Input placeholder="Full Name" className="bg-background border-border" />
                    <Input placeholder="Phone Number" className="bg-background border-border" />
                    <Input disabled value={course.title} className="bg-secondary text-muted-foreground border-border" />
                    <Button className="w-full bg-primary text-primary-foreground font-bold">Apply Now</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Other Courses */}
        <section className="py-24 bg-card/30 border-t border-border">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold font-serif mb-10 text-center">Explore Other Programs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {otherCourses.map(c => (
                <Link key={c.slug} href={`/courses/${c.slug}`} className="group block h-full">
                  <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-colors h-full flex flex-col">
                    <div className="h-32 bg-secondary relative overflow-hidden">
                      <img src={c.image} alt={c.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-bold font-serif text-lg mb-2 group-hover:text-primary transition-colors">{c.title}</h3>
                      <div className="text-sm text-muted-foreground mb-4"><Clock size={14} className="inline mr-1 text-primary"/> {c.duration}</div>
                      <span className="mt-auto font-bold text-primary">{c.price}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
