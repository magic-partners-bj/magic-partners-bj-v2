import { motion } from 'motion/react';
import { ArrowRight, CalendarRange, Megaphone, Radio } from 'lucide-react';

interface PmeBoostSectionProps {
  onNavigate?: (page: string) => void;
}

export function PmeBoostSection({ onNavigate }: PmeBoostSectionProps) {
  const offers = [
    {
      icon: Megaphone,
      title: 'Offres ponctuelles',
      description: 'Des packs rapides pour lancer votre visibilité, tester un canal ou soutenir une campagne à court terme.',
      highlight: 'À partir de 150.000 FCFA TTC',
    },
    {
      icon: CalendarRange,
      title: 'Offres récurrentes',
      description: 'Des engagements de 3 ou 6 mois pour installer votre marque dans la durée et obtenir des résultats mesurables.',
      highlight: '3 mois et 6 mois',
    },
    {
      icon: Radio,
      title: 'Placement produit',
      description: 'Une intégration naturelle de vos produits dans les émissions et contenus audiovisuels de MAGIC+.',
      highlight: 'À partir de 60.000 FCFA TTC',
    },
  ];

  return (
    <section className="py-20 lg:py-32 px-8 lg:px-20 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Background Typographic Accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[25vw] font-black text-white/[0.03] leading-none uppercase tracking-tighter">
          BOOST
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-[#F8B11C] mb-5">
              PME Boost
            </p>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Une offre pensée pour booster la visibilité des PME
            </h2>
            <p className="text-lg lg:text-xl text-white/75 max-w-2xl leading-relaxed mb-10">
              Découvrez des formules ponctuelles, récurrentes et de placement produit conçues pour accélérer votre présence médiatique et digitale.
            </p>

            <button
              onClick={() => onNavigate?.('pme-boost')}
              className="inline-flex items-center gap-3 bg-[#F8B11C] text-black px-8 py-4 rounded font-semibold hover:bg-white transition-colors"
            >
              Découvrir l'offre PME Boost
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          <div className="grid gap-5">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
              >
                <div className="w-12 h-12 rounded-full bg-[#F8B11C] text-black flex items-center justify-center mb-4">
                  <offer.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-white/70 leading-relaxed mb-4">{offer.description}</p>
                <p className="text-sm uppercase tracking-[0.18em] text-[#F8B11C]">{offer.highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
