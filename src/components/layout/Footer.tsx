import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 lg:col-span-1">
            <div className="flex flex-col mb-4">
              <Link href="/" className="flex items-center gap-2 cursor-pointer">
                <span className="text-3xl font-bold text-primary tracking-wider font-serif">EHT</span>
              </Link>
              <span className="text-base font-semibold text-foreground mt-1">
                Excellent Hospitality Training
              </span>
              <span className="text-xs text-primary uppercase tracking-widest font-medium mt-1">
                Unique Place to Sure Success
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Hyderabad's premier hospitality training institute, empowering aspiring professionals with industry-relevant skills and guaranteed placement assistance since 2009.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Courses', path: '/courses' },
                { name: 'Eligibility', path: '/eligibility' },
                { name: 'Placements', path: '/placements' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 cursor-pointer">
                    <span className="text-primary text-xs">▹</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-6 font-serif">Popular Courses</h4>
            <ul className="space-y-3">
              {[
                { name: 'Diploma in Hotel Management', slug: 'hotel-management' },
                { name: 'Diploma in Food Production', slug: 'food-production' },
                { name: 'Diploma in F&B Service', slug: 'fb-service' },
                { name: 'Basic to Advanced Bartender', slug: 'bartender-training-advanced' },
                { name: 'Hospitality Foundation', slug: 'hospitality-foundation' }
              ].map((course) => (
                <li key={course.slug}>
                  <Link href={`/courses/${course.slug}`} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 cursor-pointer">
                    <span className="text-primary text-xs">▹</span> {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-6 font-serif">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">HITEC City, Hyderabad, <br/>Telangana, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:8825178251" className="text-muted-foreground hover:text-primary transition-colors">8825178251</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:info@ehttraining.com" className="text-muted-foreground hover:text-primary transition-colors">info@ehttraining.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Excellent Hospitality Training. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
