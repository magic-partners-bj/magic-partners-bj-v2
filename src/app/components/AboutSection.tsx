import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Tv, Megaphone, Calendar, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onNavigate?: (page: string) => void;
}

export function AboutSection({ onNavigate }: AboutSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    <section className="py-24 lg:py-40 px-8 lg:px-20 bg-[#F9F9F9] relative overflow-hidden" ref={ref}>
      {/* Background Typographic Accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[25vw] font-black text-black/[0.02] leading-none uppercase tracking-tighter">
          MAGIC
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Side: Manifesto Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="mb-8">
              <span className="text-sm font-bold text-[#00703B] tracking-[0.4em] uppercase">
                À PROPOS
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-black mb-10 leading-[1.1] tracking-tight">
              Transformons ensemble <br /> vos idées en <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00703B] to-[#F8B11C]">succès</span>
            </h2>
            
            <div className="space-y-8 text-lg lg:text-xl text-gray-600 font-light leading-relaxed max-w-xl">
              <p>
                Nous accompagnons les entreprises et organisations dans la réalisation de leurs projets créatifs et stratégiques.
              </p>
              <p>
                Notre équipe d'experts passionnés combine créativité, innovation et excellence opérationnelle pour donner vie à vos ambitions. De la conception à l'exécution, nous créons des expériences mémorables qui inspirent et rayonnent.
              </p>
              <p className="text-black font-medium border-t border-black/5 pt-8">
                Parce que chaque projet est unique, nous développons des solutions sur mesure qui reflètent votre identité et atteignent vos objectifs.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Vertical Service Cards */}
          <div className="space-y-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group cursor-pointer bg-white p-8 rounded-3xl border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1"
                onClick={() => onNavigate?.(pillar.id)}
              >
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#00703B]/5 flex items-center justify-center group-hover:bg-[#00703B] transition-colors duration-300">
                    <pillar.icon className="w-7 h-7 text-[#00703B] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-black">
                        {pillar.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-[#00703B] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
