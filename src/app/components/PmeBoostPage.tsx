import { motion } from 'motion/react';
import { ArrowRight, CalendarRange, CheckCircle2, Clock3, Globe2, Mic, Radio, Sparkles, Tv2 } from 'lucide-react';
import { Button } from './Button';

interface PmeBoostPageProps {
  onNavigate?: (page: string) => void;
}

type OfferPackage = {
  name: string;
  price: string;
  summary: string;
  features: string[];
  result: string;
};

const ponctualPackages: OfferPackage[] = [
  {
    name: 'Pack Starter',
    price: '150.000 FCFA TTC',
    summary: "Une formule d'entrée pour une première exposition médiatique rapide.",
    features: [
      '1 jingle vidéo',
      '1 spot vidéo court (20 à 30 secondes)',
      '15 passages sur MAGIC+ et les canaux digitaux',
      '10 passages de squeeze back publicitaire',
    ],
    result: "Première exposition médiatique, amélioration de l'image de marque et test de visibilité sur un public ciblé.",
  },
  {
    name: 'Pack Essentiel',
    price: '350.000 FCFA TTC',
    summary: 'Une formule plus complète pour installer la marque sur une courte période.',
    features: [
      '1 jingle audio',
      '1 jingle vidéo',
      '1 spot vidéo court (20 à 30 secondes)',
      '35 passages sur MAGIC+ et les canaux digitaux',
      '25 passages de squeeze back publicitaire',
      '1 landing page avec présentation, référencement et Google Maps',
    ],
    result: 'Meilleure mémorisation de la marque, visibilité régulière et crédibilité commerciale renforcée.',
  },
  {
    name: 'Pack Premium',
    price: '650.000 FCFA TTC',
    summary: 'Une offre à forte présence médiatique pour un positionnement premium.',
    features: [
      '1 jingle audio',
      '1 jingle vidéo',
      '1 spot vidéo court (20 à 30 secondes)',
      '1 spot vidéo long (45 à 60 secondes)',
      '80 passages sur MAGIC+ et les canaux digitaux',
      '50 passages de squeeze back publicitaire',
      '1 site web multipages',
    ],
    result: 'Forte présence médiatique, positionnement premium et augmentation significative de la notoriété.',
  },
];

const recurringThreeMonths: OfferPackage[] = [
  {
    name: 'Pack Visibilité',
    price: '350.000 FCFA',
    summary: "Pour garder une présence continue et ancrer la marque dans l'esprit du public.",
    features: [
      '1 jingle audio par mois',
      '1 spot vidéo court par mois',
      '50 passages de diffusion sur MAGIC+ et les canaux digitaux',
      '50 passages de squeeze back',
    ],
    result: "Présence continue, visibilité de rappel et maintien de la marque dans l'esprit du public.",
  },
  {
    name: 'Pack Notoriété',
    price: '700.000 FCFA',
    summary: "Pour renforcer l'image de marque et gagner en crédibilité.",
    features: [
      '1 jingle audio par mois',
      '1 jingle vidéo par mois',
      '1 spot vidéo court par mois',
      '100 passages sur MAGIC+ et les canaux digitaux',
      '120 passages de squeeze back',
      '1 landing page avec présentation, référencement et Google Maps',
    ],
    result: 'Reconnaissance accrue de la marque, image professionnelle renforcée et meilleure crédibilité.',
  },
  {
    name: 'Pack Influence',
    price: '1.000.000 FCFA',
    summary: "Pour une domination visuelle plus forte et un impact plus direct sur l'achat.",
    features: [
      '1 jingle audio par mois',
      '1 jingle vidéo par mois',
      '1 spot vidéo court par mois',
      '1 spot vidéo long par mois',
      '180 passages sur MAGIC+ et les canaux digitaux',
      '200 passages de squeeze back',
      '12 passages de placement produit',
      '1 site web multipages',
    ],
    result: "Forte domination visuelle, influence sur la décision d'achat et image de leader.",
  },
];

const recurringSixMonths: OfferPackage[] = [
  {
    name: 'Pack Visibilité',
    price: '600.000 FCFA',
    summary: 'Une visibilité durable avec un coût optimisé sur six mois.',
    features: [
      '1 jingle audio par mois',
      '1 spot vidéo court par mois',
      '100 passages sur MAGIC+ et les canaux digitaux',
      '100 passages de squeeze back',
    ],
    result: 'Visibilité durable et coût optimisé.',
  },
  {
    name: 'Pack Notoriété',
    price: '1.200.000 FCFA',
    summary: 'Une formule intermédiaire pour ancrer la marque à moyen terme.',
    features: [
      '1 jingle audio par mois',
      '1 jingle vidéo par mois',
      '1 spot vidéo court par mois',
      '200 passages sur MAGIC+ et les canaux digitaux',
      '240 passages de squeeze back',
      '1 site web multipages',
    ],
    result: 'Ancrage de marque sur le moyen terme.',
  },
  {
    name: 'Pack Influence',
    price: '2.500.000 FCFA',
    summary: 'Le niveau le plus fort pour une récurrence élevée et un leadership médiatique.',
    features: [
      '1 jingle audio par mois',
      '1 jingle vidéo par mois',
      '1 spot vidéo court par mois',
      '1 spot vidéo long par mois',
      '360 passages sur MAGIC+ et les canaux digitaux',
      '400 passages de squeeze back',
      '64 passages de placement produit',
      '1 site web multipages',
    ],
    result: 'Leadership médiatique et forte récurrence.',
  },
];

const placementPackages: OfferPackage[] = [
  {
    name: 'Placement Muet',
    price: '60.000 FCFA TTC',
    summary: "Une présence discrète mais répétée du produit à l'écran.",
    features: [
      '3 apparitions',
      "Présence visuelle du produit à l'écran",
      "Exposition durant toute la durée de l'émission",
      'Sans mention verbale',
      'Produit visible sur table, décor ou arrière-plan',
    ],
    result: "Association à l'image de l'émission et mémorisation visuelle renforcée.",
  },
  {
    name: 'Placement En Exergue',
    price: '150.000 FCFA TTC',
    summary: 'Une visibilité plus active avec mise en avant et mention simple.',
    features: [
      '6 apparitions',
      'Produit visible avec mise en avant cadrée',
      'Exposition de 45 à 90 secondes',
      "Mention simple par l'animateur",
      'Présentation courte ou commentaire valorisant',
    ],
    result: 'Visibilité active, recommandation implicite et valorisation qualitative de la marque.',
  },
  {
    name: 'Placement Capsule',
    price: '300.000 FCFA TTC',
    summary: 'Une mini séquence dédiée pour porter un produit stratégique.',
    features: [
      '10 apparitions',
      '1 capsule dédiée',
      'Mini séquence de 1 à 2 minutes',
      'Présentation détaillée',
      'Démonstration, dégustation ou argumentaire',
    ],
    result: "Forte exposition, argumentaire clair et impact direct sur la décision d'achat.",
  },
];

function OfferCard({ offer, onContact }: { offer: OfferPackage; onContact?: () => void }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="flex flex-col h-full rounded-3xl border border-black/10 bg-white p-6 md:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)]"
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div>
          <h3 className="text-2xl font-bold text-black group-hover:text-[#00703B] transition-colors">{offer.name}</h3>
          <p className="text-gray-600 mt-2 leading-relaxed text-sm md:text-base">{offer.summary}</p>
        </div>
        <div className="sm:text-right flex flex-col items-start sm:items-end shrink-0 bg-[#00703B]/5 p-3 rounded-2xl sm:bg-transparent sm:p-0">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#00703B] font-bold mb-1">Tarif</p>
          <p className="text-xl font-black text-black whitespace-nowrap">{offer.price}</p>
        </div>
      </div>

      <div className="space-y-4 mb-8 flex-grow">
        {offer.features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#00703B]/10 flex items-center justify-center">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00703B]" />
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">{feature}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div className="rounded-2xl bg-[#F8B11C]/10 border border-[#F8B11C]/20 p-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#00703B] font-bold mb-2">Résultats attendus</p>
          <p className="text-black text-sm leading-relaxed font-medium">{offer.result}</p>
        </div>
      </div>
    </motion.div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl mb-12">
      <div className="inline-block px-4 py-1.5 rounded-full bg-[#00703B]/10 mb-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00703B]">{eyebrow}</p>
      </div>
      <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6 leading-tight">{title}</h2>
      <p className="text-lg text-gray-700 leading-relaxed font-light">{description}</p>
    </div>
  );
}

export function PmeBoostPage({ onNavigate }: PmeBoostPageProps) {
  const highlights = [
    {
      icon: Sparkles,
      label: 'Activation rapide',
      text: 'Des offres ponctuelles pour lancer vite une campagne ou tester un canal.',
    },
    {
      icon: CalendarRange,
      label: 'Régularité',
      text: 'Des engagements récurrents de 3 ou 6 mois pour installer durablement votre présence.',
    },
    {
      icon: Radio,
      label: 'Intégration naturelle',
      text: 'Des formules de placement produit intégrées aux contenus audiovisuels.',
    },
    {
      icon: Globe2,
      label: 'Appui digital',
      text: 'Landing pages, sites multipages, référencement et intégration Google Maps selon les packs.',
    },
  ];

  const handleContact = () => {
    onNavigate?.('contact');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <section className="relative overflow-hidden bg-[#0F172A] text-white py-24 lg:py-32 px-8 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(248,177,28,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(0,112,59,0.28),_transparent_35%)]" />
        <div className="relative max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="text-sm text-white/70 mb-5">
              <button onClick={() => onNavigate?.('accueil')} className="hover:text-[#F8B11C]">
                Accueil
              </button>
              {' / PME Boost'}
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F8B11C] mb-5">PME Boost</p>
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Des offres taillées pour la visibilité, la notoriété et la croissance des PME
            </h1>
            <p className="text-xl text-white/75 max-w-3xl leading-relaxed mb-10">
              MAGIC PARTNERS réunit dans PME Boost des offres ponctuelles, des engagements récurrents et des formules de placement produit pour vous aider à gagner en exposition et en crédibilité.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => onNavigate?.('contact')} className="bg-[#F8B11C] text-black hover:bg-white">
                Demander une proposition
              </Button>
              <Button variant="secondary" onClick={() => onNavigate?.('services')} className="border-white/40 text-white hover:bg-white hover:text-black">
                Voir nos autres services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-8 lg:px-20">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-3xl bg-white border border-black/5 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
            >
              <div className="w-12 h-12 rounded-full bg-[#00703B]/10 flex items-center justify-center text-[#00703B] mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">{item.label}</h3>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-8 lg:py-12 px-8 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeader
            eyebrow="Offres ponctuelles"
            title="Des packs rapides pour lancer une campagne et tester votre visibilité"
            description="Ces formules PME Boost permettent de bénéficier d'une visibilité rapide et efficace à travers des contenus audiovisuels professionnels et une diffusion ciblée, sans engagement de longue durée."
          />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {ponctualPackages.map((offer) => (
              <OfferCard key={offer.name} offer={offer} onContact={handleContact} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-20 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeader
            eyebrow="Engagement 3 mois"
            title="Construire une présence régulière et mesurable"
            description="Les offres récurrentes sur trois mois reposent sur la régularité. Elles permettent d'assurer une présence constante, d'optimiser les actions dans le temps et de viser des résultats mesurables."
          />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {recurringThreeMonths.map((offer) => (
              <OfferCard key={offer.name} offer={offer} onContact={handleContact} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeader
            eyebrow="Engagement 6 mois"
            title="Ancrer la marque sur la durée"
            description="Les formules de six mois renforcent la fréquence, augmentent les volumes de diffusion et offrent un cadre plus solide pour installer durablement votre image dans l'esprit du public."
          />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {recurringSixMonths.map((offer) => (
              <OfferCard key={offer.name} offer={offer} onContact={handleContact} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-20 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeader
            eyebrow="Placement produit"
            title="Intégrer votre produit dans les émissions MAGIC+"
            description="L'offre de placement produit vise une visibilité naturelle et impactante dans les contenus audiovisuels de MAGIC PARTNERS, avec des formats adaptés au niveau d'exposition souhaité."
          />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {placementPackages.map((offer) => (
              <OfferCard key={offer.name} offer={offer} onContact={handleContact} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="rounded-3xl bg-[#0F172A] text-white p-8 lg:p-12">
            <div className="grid sm:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <Tv2 className="w-6 h-6 text-[#F8B11C]" />
                </div>
                <p className="text-xl font-bold mb-2">Diffusion MAGIC+</p>
                <p className="text-white/60">Présence TV et digitale selon le pack choisi.</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <Clock3 className="w-6 h-6 text-[#F8B11C]" />
                </div>
                <p className="text-xl font-bold mb-2">Formats flexibles</p>
                <p className="text-white/60">Jingles, spots, capsules et placements produits.</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <ArrowRight className="w-6 h-6 text-[#F8B11C]" />
                </div>
                <p className="text-xl font-bold mb-2">Objectifs mesurables</p>
                <p className="text-white/60">Volumes de diffusion ajustables selon vos besoins.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center border-t border-white/10 pt-10">
              <Button onClick={() => onNavigate?.('contact')} className="w-full sm:w-auto bg-[#F8B11C] text-black hover:bg-white px-10">
                Nous contacter pour PME Boost
              </Button>
              <Button variant="secondary" onClick={() => onNavigate?.('studio')} className="w-full sm:w-auto border-white/40 text-white hover:bg-white hover:text-black px-10">
                Découvrir le studio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
