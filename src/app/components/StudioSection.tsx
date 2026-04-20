import { motion } from 'motion/react';
import { ArrowRight, Camera, Mic, MonitorPlay, Wifi } from 'lucide-react';
import studioLogo from '@/assets/mpstudio-logo.png';

interface StudioSectionProps {
  onNavigate?: (page: string) => void;
}

export function StudioSection({ onNavigate }: StudioSectionProps) {
  const features = [
    {
      icon: Mic,
      title: 'Podcasts et voix off',
      description: 'Un cadre adapté aux enregistrements audio, interviews et capsules de marque.',
    },
    {
      icon: Camera,
      title: 'Tournage vidéo',
      description: 'Des configurations souples pour vos contenus courts, émissions et productions multicaméras.',
    },
    {
      icon: MonitorPlay,
      title: 'Streaming et diffusion',
      description: 'Des dispositifs prévus pour la captation, le monitoring et la diffusion live.',
    },
    {
      icon: Wifi,
      title: 'Connectivité studio',
      description: 'Un environnement professionnel conçu pour des usages fluides et répétables.',
    },
  ];

  return (
    <section className="py-20 lg:py-32 px-8 lg:px-20 bg-[#111111] text-white relative overflow-hidden">
      {/* Background Typographic Accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[25vw] font-black text-white/[0.03] leading-none uppercase tracking-tighter">
          STUDIO
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#F8B11C]/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 right-0 w-56 h-56 bg-[#00703B]/20 rounded-full blur-3xl" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#1A1A1A]">
              <div className="aspect-[4/5] relative">
                <img
                  src="https://images.unsplash.com/photo-1709846485906-30b28e7ed651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200"
                  alt="MAGIC STUDIO"
                  className="w-full h-full object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <img src={studioLogo} alt="MAGIC STUDIO" className="h-16 md:h-20 w-auto mb-4" />
                  <p className="text-sm uppercase tracking-[0.25em] text-[#F8B11C]">Production audiovisuelle</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-[#F8B11C] mb-5">
              Studio
            </p>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Un espace studio dédié à vos productions audio, vidéo et live
            </h2>
            <p className="text-lg lg:text-xl text-white/72 max-w-2xl leading-relaxed mb-10">
              Le studio MAGIC PARTNERS prolonge l'offre agence avec un espace conçu pour enregistrer, filmer, diffuser et mettre vos contenus en scène dans un cadre professionnel.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="w-11 h-11 rounded-full bg-[#F8B11C] text-black flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/65 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => onNavigate?.('studio')}
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded font-semibold hover:bg-[#F8B11C] transition-colors"
            >
              Découvrir le studio
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
