import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "MAGIC PARTNERS a transformé notre vision en une campagne exceptionnelle qui a dépassé toutes nos attentes.",
      name: "Aminata Diallo",
      company: "Directrice Marketing, TechBénin",
    },
    {
      id: 2,
      quote: "Un professionnalisme remarquable et une créativité sans limite. Notre événement fut un succès retentissant.",
      name: "Jean-Baptiste Koffi",
      company: "PDG, Innovations SA",
    },
    {
      id: 3,
      quote: "L'équipe comprend parfaitement nos besoins et livre des résultats qui font vraiment la différence.",
      name: "Marie-Claire Assogba",
      company: "Responsable Communication, AfriBank",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 px-8 lg:px-20 bg-[#F9F9F9]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Ce que nos clients disent
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#F5F5F5] rounded-lg p-12 lg:p-20 relative">
            {/* Quote Mark */}
            <div className="text-[#F8B11C] text-8xl lg:text-9xl font-serif leading-none mb-6 opacity-50">
              "
            </div>

            {/* Testimonial Content */}
            <div className="relative min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-xl lg:text-2xl text-black mb-8 leading-relaxed">
                    {testimonials[currentIndex].quote}
                  </p>
                  <div>
                    <p className="text-lg font-semibold text-[#00703B] mb-1">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={goToPrevious}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#00703B] hover:bg-[#00703B] hover:text-white transition-all duration-300 shadow-md"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? 'w-8 h-3 bg-[#00703B]'
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#00703B] hover:bg-[#00703B] hover:text-white transition-all duration-300 shadow-md"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
