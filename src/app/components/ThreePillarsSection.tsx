import { motion } from 'motion/react';
import { Card } from './Card';
import { Tv, Megaphone, Calendar, ArrowRight } from 'lucide-react';

interface ThreePillarsSectionProps {
  onNavigate?: (page: string) => void;
}

export function ThreePillarsSection({ onNavigate }: ThreePillarsSectionProps) {
  const pillars = [
    {
      id: 'media',
      icon: Tv,
      title: 'Média',
      description: 'Production audiovisuelle, création de contenu et diffusion multi-plateformes pour amplifier votre message.',
    },
    {
      id: 'communication',
      icon: Megaphone,
      title: 'Communication',
      description: 'Stratégies de communication innovantes, gestion de marque et campagnes percutantes pour votre entreprise.',
    },
    {
      id: 'evenementiel',
      icon: Calendar,
      title: 'Événementiel',
      description: 'Organisation d\'événements corporatifs, culturels et promotionnels clés en main, du concept à la réalisation.',
    },
  ];

  return (
    <section className="py-20 lg:py-32 px-8 lg:px-20 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="group cursor-pointer h-full flex flex-col">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00703B]/10 group-hover:bg-[#00703B] transition-colors duration-300">
                  <pillar.icon className="w-8 h-8 text-[#00703B] group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-3xl font-semibold text-black mb-4">
                  {pillar.title}
                </h3>
                
                <p className="text-base text-gray-700 mb-6 flex-grow leading-relaxed">
                  {pillar.description}
                </p>
                
                <button
                  onClick={() => onNavigate?.(pillar.id)}
                  className="inline-flex items-center gap-2 text-[#00703B] font-medium group-hover:gap-4 transition-all duration-300"
                >
                  En savoir plus
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
