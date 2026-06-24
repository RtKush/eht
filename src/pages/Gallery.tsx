import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const images = [
    { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80", category: "Front Office" },
    { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", category: "Events" },
    { url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80", category: "Bartending" },
    { url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", category: "Food Production" },
    { url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80", category: "Events" },
    { url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80", category: "Front Office" },
    { url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80", category: "Housekeeping" },
    { url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80", category: "Classroom" },
    { url: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&q=80", category: "Bartending" },
    { url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80", category: "Classroom" },
    { url: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&q=80", category: "Events" },
    { url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=600&q=80", category: "Food Production" },
  ];

  const categories = ["All", "Classroom", "Bartending", "Food Production", "Front Office", "Housekeeping", "Events"];
  const [filter, setFilter] = useState("All");

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = filter === "All" ? images : images.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-24">
        <section className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Gallery</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-10" />
            
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                    filter === c ? "bg-primary text-primary-foreground" : "bg-card border border-border text-foreground hover:bg-secondary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            {filteredImages.map((img, idx) => (
              <motion.div
                key={`${filter}-${idx}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid"
              >
                <div 
                  className="rounded-xl overflow-hidden cursor-pointer group relative border border-border"
                  onClick={() => openLightbox(idx)}
                >
                  <img src={img.url} alt={img.category} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold tracking-widest uppercase text-sm border border-white px-4 py-2 backdrop-blur-sm">View</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
            <button className="absolute top-6 right-6 text-white/70 hover:text-white p-2" onClick={closeLightbox}>
              <X size={32} />
            </button>
            <button className="absolute left-6 text-white/70 hover:text-white p-4" onClick={prevImage}>
              <ChevronLeft size={48} />
            </button>
            <button className="absolute right-6 text-white/70 hover:text-white p-4" onClick={nextImage}>
              <ChevronRight size={48} />
            </button>
            
            <img 
              src={filteredImages[currentIndex].url} 
              alt="Gallery Preview" 
              className="max-w-[90vw] max-h-[85vh] object-contain select-none"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 text-white/70 font-bold uppercase tracking-widest text-sm">
              {filteredImages[currentIndex].category}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
