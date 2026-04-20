import { motion } from 'motion/react';
import { Mail, Sparkles } from 'lucide-react';

interface CareersPageProps {
  onNavigate?: (page: string) => void;
}

export function CareersPage({ onNavigate }: CareersPageProps) {
  const benefits = [
    { icon: '💼', title: 'Projets Passionnants', description: 'Travaillez sur des projets créatifs et innovants' },
    { icon: '🌍', title: 'Impact Réel', description: 'Contribuez à des projets qui font la différence' },
    { icon: '📚', title: 'Formation Continue', description: 'Développez vos compétences avec nos formations' },
    { icon: '🤝', title: 'Équipe Dynamique', description: 'Rejoignez une équipe passionnée et collaborative' },
    { icon: '⚖️', title: 'Équilibre Vie Pro/Perso', description: 'Horaires flexibles et télétravail possible' },
    { icon: '🎯', title: 'Évolution de Carrière', description: "Opportunités d'avancement et de développement" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 lg:py-32 px-8 lg:px-20 bg-gradient-to-b from-[#00703B]/5 to-white">
        <div className="max-w-[1440px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-gray-600 mb-4">
              <button onClick={() => onNavigate?.('accueil')} className="hover:text-[#00703B]">
                Accueil
              </button>
              {' / Carrières'}
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6">
              Rejoignez l'équipe
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
              MAGIC PARTNERS reste ouvert aux talents qui partagent notre énergie, notre exigence et notre goût pour les projets bien exécutés.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200"
              alt="MAGIC PARTNERS Team"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32 px-8 lg:px-20 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-4xl font-bold text-black mb-8">Pourquoi nous rejoindre</h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="flex gap-4"
                  >
                    <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg text-black mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-black mb-8">Notre culture</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Chez MAGIC PARTNERS, nous croyons que la créativité et l'innovation naissent d'un environnement de travail positif, exigeant et stimulant.
                </p>
                <div className="bg-[#F8B11C]/10 border-l-4 border-[#F8B11C] p-6 my-6">
                  <p className="text-black font-semibold italic text-lg">
                    "Nous cherchons des personnes capables d'apporter de l'énergie, des idées et un vrai sens du travail bien fait."
                  </p>
                </div>
                <p>
                  Même sans campagne de recrutement en cours, nous aimons identifier des profils qui pourraient s'inscrire dans notre développement futur.
                </p>
                <p>
                  Si vous pensez pouvoir contribuer à nos activités media, communication, événementiel ou production, nous serons heureux de découvrir votre parcours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 px-8 lg:px-20 bg-[#F9F9F9]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
              Postes disponibles
            </h2>
            <p className="text-lg text-gray-700">
              Nous n'avons pas d'offres en cours pour le moment
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto rounded-[2rem] bg-white border border-black/5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-10 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#00703B]/10 text-[#00703B] flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-black mb-4">
              Aucune offre ouverte actuellement
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Nous ne recrutons pas activement en ce moment, mais nous restons attentifs aux candidatures spontanées pertinentes.
            </p>
            <a
              href="mailto:recrutement@magic-partners.bj?subject=Candidature%20spontanee"
              className="inline-flex items-center gap-3 bg-[#00703B] text-white px-8 py-4 rounded font-semibold hover:bg-[#005a30] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Envoyer une candidature spontanée
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-20 bg-[#00703B]">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Candidature spontanée
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Vous pouvez nous envoyer votre CV et quelques lignes de présentation à recrutement@magic-partners.bj.
          </p>
          <a
            href="mailto:recrutement@magic-partners.bj?subject=Candidature%20spontanee"
            className="inline-flex items-center gap-3 bg-white text-[#00703B] px-12 py-5 rounded font-semibold text-lg hover:bg-[#F8B11C] hover:text-black transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
          >
            <Mail className="w-5 h-5" />
            Envoyez votre CV
          </a>
        </div>
      </section>
    </div>
  );
}
