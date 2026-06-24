import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Eligibility", href: "/eligibility" },
    { name: "Placements", href: "/placements" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" onClick={handleNavClick} className="flex flex-col cursor-pointer group">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary tracking-wider font-serif">EHT</span>
            <span className="text-lg font-semibold text-foreground hidden sm:block border-l border-muted pl-2">
              Excellent Hospitality Training
            </span>
          </div>
          <span className="text-[10px] text-primary uppercase tracking-widest font-medium mt-0.5 group-hover:text-foreground transition-colors">
            Unique Place to Sure Success
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = location === link.href || (link.href !== '/' && location.startsWith(link.href));
            return (
              <Link key={link.name} href={link.href} className="relative py-2 text-sm font-medium transition-colors group">
                <span className={isActive ? "text-primary" : "text-foreground group-hover:text-primary"}>
                  {link.name}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-6 shadow-lg shadow-primary/20">
            <a href="tel:8825178251">📞 Call Now</a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = location === link.href || (link.href !== '/' && location.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className={`text-base font-medium p-2 border-b border-border/50 flex items-center justify-between ${
                  isActive ? "text-primary border-primary/30" : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
              </Link>
            );
          })}
          <Button asChild className="w-full bg-primary text-primary-foreground font-bold mt-2 shadow-lg shadow-primary/20">
            <a href="tel:8825178251" onClick={handleNavClick}>📞 Call Now</a>
          </Button>
        </div>
      )}
    </header>
  );
}
