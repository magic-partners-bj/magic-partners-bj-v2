import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import apsBeninLogo from '@/assets/aps-benin.png';
import numerisLogo from '@/assets/numeris.png';
import mafitaHelperLogo from '@/assets/mafita.png';
import florisNegocesLogo from '@/assets/floris-negoces.png';
import instadLogo from '@/assets/instad.png';

interface Partner {
  name: string;
  category: string;
  logo: string;
}

export function PartnersSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const partners: Partner[] = [
    {
      name: 'APS-BENIN',
      category: 'Media Partner',
      logo: apsBeninLogo
    },
    {
      name: 'NUMERIS',
      category: 'Media Partner',
      logo: numerisLogo
    },
    {
      name: 'MAFITA HELPER',
      category: 'Corporate Client',
      logo: mafitaHelperLogo
    },
    {
      name: 'FLORIS NEGOCES',
      category: 'Corporate Client',
      logo: florisNegocesLogo
    },
    {
      name: 'INStaD',
      category: 'Government Partner',
      logo: instadLogo
    },
    {
      name: 'APS-BENIN',
      category: 'Media Partner',
      logo: apsBeninLogo
    },
    {
      name: 'NUMERIS',
      category: 'Media Partner',
      logo: numerisLogo
    },
    {
      name: 'MAFITA HELPER',
      category: 'Corporate Client',
      logo: mafitaHelperLogo
    },
    {
      name: 'FLORIS NEGOCES',
      category: 'Corporate Client',
      logo: florisNegocesLogo
    },
    {
      name: 'INStaD',
      category: 'Government Partner',
      logo: instadLogo
    }
  ];

  // Duplicate the partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-20 bg-[#F9F9F9] border-t border-b border-[#E0E0E0]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center text-black mb-4"
        >
          Ils nous font confiance
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-[#666] text-center mb-10"
        >
          Partenaires & Clients
        </motion.p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative overflow-hidden">
        <div className="flex">
          <motion.div
            className="flex gap-[60px] pr-[60px]"
            animate={{
              x: [0, -1 * (partners.length * (200 + 60))]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear"
              }
            }}
            style={{
              display: 'flex',
              willChange: 'transform'
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-lg overflow-hidden group cursor-pointer"
                style={{ width: '200px', height: '120px' }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="w-full h-full flex items-center justify-center p-6">
                  <ImageWithFallback
                    src={partner.logo}
                    alt={partner.name}
                    className={`max-w-full max-h-full object-contain transition-all duration-300 ${
                      hoveredIndex === index 
                        ? 'grayscale-0 scale-110' 
                        : 'grayscale'
                    }`}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays for smooth edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#F9F9F9] to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#F9F9F9] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}