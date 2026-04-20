import { motion } from 'motion/react';
import { Tv, Megaphone, Calendar, CheckCircle } from 'lucide-react';

interface ServicesPageProps {
  onNavigate?: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      id: 'media',
      icon: Tv,
      title: 'Média',
      description: 'Nous créons des contenus audiovisuels percutants qui captivent votre audience et amplifient votre message. De la conception à la diffusion, nous maîtrisons toute la chaîne de production médiatique.',
      details: [
        'Notre expertise en production audiovisuelle nous permet de créer des contenus qui marquent les esprits. Que ce soit pour la télévision, le web ou les réseaux sociaux, nous adaptons notre approche à vos besoins spécifiques.',
        'Nous travaillons avec les dernières technologies et techniques de production pour garantir une qualité professionnelle à chaque projet. Notre équipe créative transforme vos idées en récits visuels captivants.',
        'De la pré-production au montage final, nous vous accompagnons à chaque étape pour assurer que votre vision prenne vie exactement comme vous l\'imaginez.',
      ],
      services: [
        'Production vidéo et documentaire',
        'Spots publicitaires TV et web',
        'Reportages et interviews',
        'Motion design et animation',
        'Diffusion multi-plateformes',
        'Post-production et montage',
      ],
      image: 'https://images.unsplash.com/photo-1654288891700-95f67982cbcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      imagePosition: 'left',
      bgColor: 'bg-white',
    },
    {
      id: 'communication',
      icon: Megaphone,
      title: 'Communication',
      description: 'Développez votre marque avec des stratégies de communication innovantes et percutantes. Nous vous aidons à construire une identité forte et à engager votre audience de manière authentique.',
      details: [
        'La communication moderne nécessite une approche stratégique et créative. Nous élaborons des plans de communication sur mesure qui reflètent votre identité et atteignent vos objectifs commerciaux.',
        'Notre équipe combine expertise stratégique et créativité pour développer des campagnes qui résonnent avec votre public cible. Nous analysons, conceptualisons et exécutons avec précision.',
        'De la gestion de crise à la communication quotidienne, nous sommes votre partenaire de confiance pour toutes vos initiatives de communication.',
      ],
      services: [
        'Stratégie de communication 360°',
        'Gestion de marque et identité visuelle',
        'Community management',
        'Relations presse et publiques',
        'Campagnes publicitaires',
        'Content marketing et storytelling',
      ],
      image: 'https://images.unsplash.com/photo-1648260295961-2773afba56ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      imagePosition: 'right',
      bgColor: 'bg-[#F9F9F9]',
    },
    {
      id: 'evenementiel',
      icon: Calendar,
      title: 'Événementiel',
      description: 'Créez des expériences mémorables avec nos services d\'organisation d\'événements clés en main. Du concept à l\'exécution, nous transformons vos idées en moments inoubliables.',
      details: [
        'L\'événementiel est notre passion. Nous concevons et organisons des événements qui dépassent les attentes, qu\'il s\'agisse de conférences d\'entreprise, de lancements de produits ou de festivals culturels.',
        'Chaque détail compte dans la création d\'une expérience mémorable. Notre équipe gère tous les aspects logistiques, créatifs et techniques pour garantir le succès de votre événement.',
        'Nous travaillons en étroite collaboration avec vous pour comprendre votre vision et la transformer en réalité, tout en respectant votre budget et vos délais.',
      ],
      services: [
        'Événements corporatifs et séminaires',
        'Lancements de produits',
        'Festivals et événements culturels',
        'Conférences et forums',
        'Galas et cérémonies',
        'Logistique et coordination complète',
      ],
      image: 'https://images.unsplash.com/photo-1653821355226-6def361cc7ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      imagePosition: 'left',
      bgColor: 'bg-white',
    },
  ];

  const processSteps = [
    { number: 1, title: 'Consultation', description: 'Analyse de vos besoins et objectifs' },
    { number: 2, title: 'Stratégie', description: 'Développement du plan d\'action' },
    { number: 3, title: 'Création', description: 'Production et mise en œuvre' },
    { number: 4, title: 'Exécution', description: 'Déploiement et suivi' },
    { number: 5, title: 'Évaluation', description: 'Analyse des résultats' },
  ];

  return (
    <div className="bg-white">
      {/* Page Hero */}
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
              {' / Services'}
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Des solutions complètes en média, communication et événementiel pour donner vie à vos projets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          className={`py-20 lg:py-32 px-8 lg:px-20 ${service.bgColor}`}
        >
          <div className="max-w-[1440px] mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              service.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: service.imagePosition === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={service.imagePosition === 'right' ? 'lg:order-2' : ''}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00703B] mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                  {service.title}
                </h2>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed font-semibold">
                  {service.description}
                </p>

                {/**{service.details.map((detail, i) => (
                  <p key={i} className="text-base text-gray-600 mb-4 leading-relaxed">
                    {detail}
                  </p>
                ))}*/}

                <div className="mt-8">
                  <h3 className="font-semibold text-xl text-black mb-4">
                    Nos prestations :
                  </h3>
                  <ul className="space-y-3">
                    {service.services.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#00703B] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onNavigate?.('pme-boost')}
                  className="mt-8 inline-flex items-center gap-2 text-[#00703B] font-semibold hover:gap-4 transition-all duration-300"
                >
                  Découvrir PME Boost →
                </button>
              </motion.div>

              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: service.imagePosition === 'left' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={service.imagePosition === 'right' ? 'lg:order-1' : ''}
              >
                <div className="relative group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 border-4 border-[#F8B11C] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Timeline */}
      <section className="py-20 lg:py-32 px-8 lg:px-20 bg-gradient-to-b from-white to-[#00703B]/5">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
              Notre Processus
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Une approche structurée pour garantir le succès de chaque projet
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-[#F8B11C] hidden lg:block" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  {/* Number Circle */}
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#00703B] text-white font-bold text-2xl mb-4 z-10">
                    {step.number}
                  </div>

                  <h3 className="font-semibold text-xl text-black mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 px-8 lg:px-20 bg-[#00703B]">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Discutons de votre projet et découvrons comment nous pouvons vous aider
          </p>
          <button
            onClick={() => onNavigate?.('contact')}
            className="bg-white text-[#00703B] px-12 py-5 rounded font-semibold text-lg hover:bg-[#F8B11C] hover:text-black transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
          >
            Contactez-nous
          </button>
        </div>
      </section>
    </div>
  );
}
