import { useState } from 'react';
import { 
  Camera, 
  Radio, 
  Lightbulb, 
  Monitor, 
  Headphones, 
  Wind, 
  Wifi, 
  Check, 
  ChevronLeft, 
  ChevronRight,
  Plus,
  Minus,
  ZoomIn
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Masonry from 'react-responsive-masonry';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Button } from './Button';
import studioLogo from '@/assets/mpstudio-logo.png';

// Local Studio Images
import studioHero from '@/assets/studio-website/IMG_1955.png';
import config1 from '@/assets/studio-website/IMG_1956.png';
import config2 from '@/assets/studio-website/IMG_1957.png';
import config3 from '@/assets/studio-website/IMG_1958.png';
import config4 from '@/assets/studio-website/IMG_1959.png';
import grid1 from '@/assets/studio-website/IMG_1960.png';
import grid2 from '@/assets/studio-website/IMG_1961.png';
import grid3 from '@/assets/studio-website/IMG_1962.png';
import img5762 from '@/assets/studio-website/IMG_5762.png';
import img5763 from '@/assets/studio-website/IMG_5763.png';
import img5764 from '@/assets/studio-website/IMG_5764.png';
import img5765 from '@/assets/studio-website/IMG_5765.png';
import img5766 from '@/assets/studio-website/IMG_5766.png';
import img5767 from '@/assets/studio-website/IMG_5767.png';
import img5768 from '@/assets/studio-website/IMG_5768.png';
import img5769 from '@/assets/studio-website/IMG_5769.png';
import img5770 from '@/assets/studio-website/IMG_5770.png';
import img1963 from '@/assets/studio-website/IMG_1963.png';
import img1964 from '@/assets/studio-website/IMG_1964.png';

interface StudioPageProps {
  onNavigate?: (page: string) => void;
}

export function StudioPage({ onNavigate }: StudioPageProps) {
  const [activeConfiguration, setActiveConfiguration] = useState(0);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const configurations = [
    {
      name: 'Interview / Podcast',
      description: 'Configuration optimale pour enregistrements audio et vidéo professionnels',
      equipment: 'Micros HF, caméras 4K, éclairage trois points',
      image: config1
    },
    {
      name: 'Tournage Vidéo',
      description: 'Espace modulable avec fond vert et équipement complet',
      equipment: 'Multi-caméras, fond vert, projecteurs RGB, régie vidéo',
      image: config3
    },
    {
      name: 'Événement Live',
      description: 'Configuration streaming pour diffusions en direct professionnelles',
      equipment: 'Multi-caméras, régie streaming, connexion fibre, monitoring',
      image: grid1
    },
    {
      name: 'Production Multi-caméras',
      description: 'Setup professionnel pour productions complexes',
      equipment: '4 caméras 4K, régie complète, monitoring multi-écrans',
      image: grid3
    }
  ];

  const galleryImages = [
    studioHero, config1, config2, config3, config4, 
    grid1, grid2, grid3, img1963, img1964,
    img5762, img5763, img5764, img5765, img5766, 
    img5767, img5768, img5769, img5770
  ];

  const nextConfiguration = () => {
    setActiveConfiguration((prev) => (prev + 1) % configurations.length);
  };

  const prevConfiguration = () => {
    setActiveConfiguration((prev) => (prev - 1 + configurations.length) % configurations.length);
  };

  return (
    <div className="bg-[#0A0A0A]">
      {/* Page Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={studioHero}
            alt="MAGIC+ Studio"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/60 to-black/95" />
          {/* Noise Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
        
        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6"
          >
            <img 
              src={studioLogo} 
              alt="MAGIC+ Studio" 
              className="h-20 md:h-36 lg:h-44 w-auto filter drop-shadow-[0_0_30px_rgba(248,177,28,0.3)]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-[10px] md:text-base font-bold text-[#F8B11C] tracking-[4px] md:tracking-[8px] uppercase">
              L'Excellence Audiovisuelle
            </h1>
            <p className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              Un sanctuaire de création équipé des technologies de pointe pour vos visions les plus ambitieuses.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-white/30 uppercase tracking-[4px]">Découvrir</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#F8B11C] to-transparent" />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F8B11C] to-transparent opacity-50" />
      </section>

      {/* Studio Overview Section */}
      <section className="py-[80px] md:py-[160px] px-6 lg:px-20 bg-[#0A0A0A] relative overflow-hidden">
        {/* Decorative background text */}
        <div className="absolute -top-10 md:-top-20 -left-10 text-[30vw] md:text-[20vw] font-bold text-white/[0.02] select-none pointer-events-none">
          STUDIO
        </div>

        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-[55%_45%] gap-12 md:gap-[80px] items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-[#F8B11C]" />
                <p className="text-sm font-bold text-[#F8B11C] uppercase tracking-[4px]">
                  01. L'Espace
                </p>
              </div>
              <h2 className="text-[32px] md:text-[56px] font-bold text-white leading-[1.2] md:leading-[1.1] mb-8">
                Un environnement <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30">conçu pour l'excellence</span>
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-10">
                <p>
                  Le MAGIC+ Studio est un espace audiovisuel professionnel de dernière génération, 
                  pensé pour les créateurs qui refusent les compromis. Chaque m² a été optimisé pour 
                  offrir une acoustique parfaite et une modularité totale.
                </p>
                <p>
                  Du podcast intimiste au tournage multi-caméras complexe, notre infrastructure 
                  s'adapte instantanément à votre workflow. Plus qu'un simple studio, c'est le 
                  prolongement technique de votre créativité.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 md:gap-8 mb-12">
                {[
                  { label: 'Surface', value: '120m²' },
                  { label: 'Acoustique', value: '-45dB' },
                  { label: 'Connectivité', value: 'Fibre 1Gbps' }
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-[10px] uppercase tracking-[2px] text-gray-500 font-bold">{stat.label}</p>
                    <p className="text-xl md:text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>

              <Button 
                onClick={() => onNavigate?.('contact')}
                className="w-full md:w-auto bg-white text-black hover:bg-[#F8B11C] transition-all px-12 py-5 text-base font-bold rounded-none"
              >
                Vérifier les disponibilités
              </Button>
            </motion.div>

            {/* Right Column - Asymmetrical Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-12 gap-3 md:gap-4 h-[400px] md:h-[600px]">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="col-span-8 h-full relative group overflow-hidden"
                >
                  <ImageWithFallback
                    src={img5766}
                    alt="Studio Main View"
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>
                
                <div className="col-span-4 flex flex-col gap-3 md:gap-4 h-full">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-1/2 relative group overflow-hidden"
                  >
                    <ImageWithFallback
                      src={img5767}
                      alt="Studio Gear"
                      className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="h-1/2 relative group overflow-hidden"
                  >
                    <ImageWithFallback
                      src={img5768}
                      alt="Studio Lighting"
                      className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </motion.div>
                </div>
              </div>
              
              {/* Floating accent element */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-16 h-16 md:w-32 md:h-32 border-r-2 border-b-2 border-[#F8B11C]/30 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Studio Features Section */}
      <section className="py-[80px] md:py-[120px] px-6 lg:px-20 bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: Camera,
                title: 'Modularité',
                subtitle: 'Espace adaptable à tout format'
              },
              {
                icon: Radio,
                title: 'Audio Pro',
                subtitle: 'Chaîne audio haut de gamme'
              },
              {
                icon: Lightbulb,
                title: 'Light Design',
                subtitle: 'Éclairage RGB & Cinéma'
              },
              {
                icon: Monitor,
                title: 'Régie 4K',
                subtitle: 'Capturation & Stream UHD'
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/[0.03] backdrop-blur-sm border border-white/5 p-6 md:p-8 group hover:bg-[#F8B11C] transition-all duration-500"
                >
                  <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-[#F8B11C] group-hover:text-black transition-colors duration-500 mb-6" strokeWidth={1.5} />
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-black transition-colors duration-500 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 group-hover:text-black/70 transition-colors duration-500">
                    {feature.subtitle}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services inclus - Refined */}
      <section className="py-16 md:py-20 px-6 lg:px-20 bg-[#0F0F0F] border-y border-white/5">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 md:gap-12">
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold text-white mb-2">Services inclus</h2>
            <p className="text-sm text-gray-500">Chaque réservation bénéficie de nos standards premium sans surcoût.</p>
          </div>
          
          <div className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Headphones, title: 'Assistance', desc: 'Expert technique dédié' },
              { icon: Wind, title: 'Confort', desc: 'Climatisation & Insonorisation' },
              { icon: Wifi, title: 'Fibre', desc: 'Streaming 100% stable' }
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#F8B11C] transition-colors duration-500">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-[#F8B11C]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs md:text-sm uppercase tracking-wider">{s.title}</h4>
                    <p className="text-[10px] md:text-xs text-gray-500">{s.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Studio Configurations Carousel */}
      <section className="py-[80px] md:py-[120px] px-6 lg:px-20 bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-10 md:mb-[60px]">
            Configurations possibles
          </h2>

          <div className="relative max-w-[900px] mx-auto">
            {/* Carousel Image */}
            <div className="relative rounded-xl overflow-hidden h-[400px] md:h-[600px] border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeConfiguration}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <ImageWithFallback
                    src={configurations[activeConfiguration].image}
                    alt={configurations[activeConfiguration].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
                    <h3 className="text-xl md:text-[32px] font-bold mb-2 md:mb-3">
                      {configurations[activeConfiguration].name}
                    </h3>
                    <p className="text-sm md:text-base text-white/80 mb-2 max-w-2xl">
                      {configurations[activeConfiguration].description}
                    </p>
                    <p className="text-[10px] md:text-sm text-white/60">
                      {configurations[activeConfiguration].equipment}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows - Simplified for mobile */}
              <button
                onClick={prevConfiguration}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F8B11C] flex items-center justify-center hover:bg-[#e0a010] transition-colors z-10"
                aria-label="Previous configuration"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-black" />
              </button>
              <button
                onClick={nextConfiguration}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F8B11C] flex items-center justify-center hover:bg-[#e0a010] transition-colors z-10"
                aria-label="Next configuration"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-black" />
              </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-6 md:mt-8">
              {configurations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveConfiguration(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                    index === activeConfiguration 
                      ? 'bg-[#F8B11C] w-6 md:w-8' 
                      : 'bg-white/20'
                  }`}
                  aria-label={`Go to configuration ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Specifications Section - Commented out
      <section className="py-[80px] md:py-[120px] px-6 lg:px-20 bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-10 md:mb-[60px]">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1px] bg-[#F8B11C]" />
                <p className="text-sm font-bold text-[#F8B11C] uppercase tracking-[4px]">
                  02. Équipement
                </p>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Spécifications <span className="text-white/30">Techniques</span>
              </h2>
            </div>
            
            <p className="text-gray-500 max-w-md text-xs md:text-sm font-light leading-relaxed">
              Nous utilisons exclusivement du matériel de classe mondiale pour garantir une qualité de production sans compromis.
            </p>
          </div>

          <Tabs defaultValue="video" className="w-full">
            <TabsList className="flex flex-wrap justify-start items-center mb-8 md:mb-12 bg-transparent gap-4 md:gap-8 p-0 border-b border-white/5 w-full overflow-x-auto no-scrollbar pb-1">
              {[
                { id: 'video', label: 'Vidéo' },
                { id: 'audio', label: 'Audio' },
                { id: 'eclairage', label: 'Lumières' },
                { id: 'regie', label: 'Régie' }
              ].map((tab) => (
                <TabsTrigger 
                  key={tab.id}
                  value={tab.id} 
                  className="px-0 py-3 md:py-4 bg-none text-gray-500 data-[state=active]:text-[#F8B11C] rounded-none font-bold text-[10px] md:text-sm uppercase tracking-[2px] relative group transition-all whitespace-nowrap"
                >
                  {tab.label}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F8B11C] scale-x-0 data-[state=active]:scale-x-100 transition-transform origin-left group-data-[state=active]:scale-x-100" />
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="video" className="mt-0 outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {[
                  {
                    name: 'Sony α7 IV - Cinematic Body',
                    image: 'https://images.unsplash.com/photo-1634812930988-141ddf8ecab3?w=400',
                    specs: { Resolution: '4K UHD 60fps', Sensor: 'Full-Frame Exmor R', Quantite: '04 Unités' }
                  },
                  {
                    name: 'Sony G Master Prime Series',
                    image: 'https://images.unsplash.com/photo-1634812930988-141ddf8ecab3?w=400',
                    specs: { Focal: '24mm, 35mm, 50mm, 85mm', Aperture: 'f/1.2 - f/1.8', Coating: 'Nano AR' }
                  }
                ].map((equipment, index) => (
                  <div key={index} className="bg-white/[0.02] border border-white/5 overflow-hidden group hover:border-[#F8B11C]/30 transition-colors">
                    <div className="flex flex-col sm:flex-row h-full">
                      <div className="w-full sm:w-1/3 h-48 sm:h-auto relative overflow-hidden">
                        <ImageWithFallback
                          src={equipment.image}
                          alt={equipment.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                      <div className="w-full sm:w-2/3 p-6 md:p-8">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-base md:text-lg font-bold text-white group-hover:text-[#F8B11C] transition-colors">{equipment.name}</h3>
                        </div>
                        <div className="space-y-3">
                          {Object.entries(equipment.specs).map(([key, value]) => (
                            <div key={key} className="flex justify-between border-b border-white/[0.03] pb-2">
                              <span className="text-[8px] md:text-[10px] uppercase tracking-wider text-gray-500 font-bold">{key}</span>
                              <span className="text-[10px] md:text-xs text-gray-300 font-light">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="audio" className="mt-0 outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {[
                  {
                    name: 'Shure ULXD Digital Wireless',
                    image: 'https://images.unsplash.com/photo-1709846485906-30b28e7ed651?w=400',
                    specs: { Type: 'Micro HF Pro', Latency: '< 2.9 ms', Quantite: '06 Canaux' }
                  },
                  {
                    name: 'Yamaha QL5 Digital Console',
                    image: 'https://images.unsplash.com/photo-1615268734097-12b6b02ca8ff?w=400',
                    specs: { Channels: '64 Mono, 8 Stereo', Dante: 'Built-in 64x64', Quantite: '01 Unité' }
                  }
                ].map((equipment, index) => (
                  <div key={index} className="bg-white/[0.02] border border-white/5 overflow-hidden group hover:border-[#F8B11C]/30 transition-colors">
                    <div className="flex flex-col sm:flex-row h-full">
                      <div className="w-full sm:w-1/3 h-48 sm:h-auto relative overflow-hidden">
                        <ImageWithFallback
                          src={equipment.image}
                          alt={equipment.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                      <div className="w-full sm:w-2/3 p-6 md:p-8">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-base md:text-lg font-bold text-white group-hover:text-[#F8B11C] transition-colors">{equipment.name}</h3>
                        </div>
                        <div className="space-y-3">
                          {Object.entries(equipment.specs).map(([key, value]) => (
                            <div key={key} className="flex justify-between border-b border-white/[0.03] pb-2">
                              <span className="text-[8px] md:text-[10px] uppercase tracking-wider text-gray-500 font-bold">{key}</span>
                              <span className="text-[10px] md:text-xs text-gray-300 font-light">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="eclairage" className="mt-0 outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {[
                  {
                    name: 'Aputure LS C300d II',
                    image: 'https://images.unsplash.com/photo-1765372860684-69f0e2524694?w=400',
                    specs: { Power: '300W LED', "CRI/TLCI": '96+', Quantite: '08 Unités' }
                  },
                  {
                    name: 'Aladdin Fabric-Lite',
                    image: 'https://images.unsplash.com/photo-1655195215472-c2d66f170e10?w=400',
                    specs: { Type: 'LED Flexible RGB', Power: '200W', Quantite: '04 Unités' }
                  }
                ].map((equipment, index) => (
                  <div key={index} className="bg-white/[0.02] border border-white/5 overflow-hidden group hover:border-[#F8B11C]/30 transition-colors">
                    <div className="flex flex-col sm:flex-row h-full">
                      <div className="w-full sm:w-1/3 h-48 sm:h-auto relative overflow-hidden">
                        <ImageWithFallback
                          src={equipment.image}
                          alt={equipment.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                      <div className="w-full sm:w-2/3 p-6 md:p-8">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-base md:text-lg font-bold text-white group-hover:text-[#F8B11C] transition-colors">{equipment.name}</h3>
                        </div>
                        <div className="space-y-3">
                          {Object.entries(equipment.specs).map(([key, value]) => (
                            <div key={key} className="flex justify-between border-b border-white/[0.03] pb-2">
                              <span className="text-[8px] md:text-[10px] uppercase tracking-wider text-gray-500 font-bold">{key}</span>
                              <span className="text-[10px] md:text-xs text-gray-300 font-light">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="regie" className="mt-0 outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {[
                  {
                    name: 'Blackmagic ATEM Console',
                    image: 'https://images.unsplash.com/photo-1760780567530-389d8a3fba75?w=400',
                    specs: { Inputs: '20 x 12G-SDI', Multi: '2 x 4K', Quantite: '01 Unité' }
                  },
                  {
                    name: 'LG UltraFine 5K Display',
                    image: 'https://images.unsplash.com/photo-1760780567530-389d8a3fba75?w=400',
                    specs: { Size: '27-inch', Resolution: '5120 x 2880', Color: 'DCI-P3 99%' }
                  }
                ].map((equipment, index) => (
                  <div key={index} className="bg-white/[0.02] border border-white/5 overflow-hidden group hover:border-[#F8B11C]/30 transition-colors">
                    <div className="flex flex-col sm:flex-row h-full">
                      <div className="w-full sm:w-1/3 h-48 sm:h-auto relative overflow-hidden">
                        <ImageWithFallback
                          src={equipment.image}
                          alt={equipment.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                      <div className="w-full sm:w-2/3 p-6 md:p-8">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-base md:text-lg font-bold text-white group-hover:text-[#F8B11C] transition-colors">{equipment.name}</h3>
                        </div>
                        <div className="space-y-3">
                          {Object.entries(equipment.specs).map(([key, value]) => (
                            <div key={key} className="flex justify-between border-b border-white/[0.03] pb-2">
                              <span className="text-[8px] md:text-[10px] uppercase tracking-wider text-gray-500 font-bold">{key}</span>
                              <span className="text-[10px] md:text-xs text-gray-300 font-light">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      */}

      {/* Pricing & Booking Section */}
      <section id="booking-section" className="py-[80px] md:py-[120px] px-6 lg:px-20 bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Tarifs & Réservation
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              Des formules adaptées à l'envergure de vos projets
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            {[
              {
                title: "À l'heure",
                price: "30 000",
                duration: "1 heure",
                desc: "Idéal pour podcast, interview courte ou voix off.",
                features: [
                  'Accès studio & équipements',
                  'Assistance technique',
                  'Wifi Fibre inclus'
                ]
              },
              {
                title: "Demi-journée",
                price: "150 000",
                duration: "4 heures",
                desc: "Parfait pour des sessions de tournage ou shootings intensifs.",
                features: [
                  'Usage exclusif (4h)',
                  'Éclairage complet inclus',
                  'Espace loge & maquillage',
                  'Économie de 10%'
                ],
                highlight: true
              },
              {
                title: "Journée complète",
                price: "250 000",
                duration: "8 heures",
                desc: "La solution ultime pour vos productions d'envergure.",
                features: [
                  'Usage exclusif (8h)',
                  'Configuration multi-cam',
                  'Assistance technique dédiée',
                  'Économie de 20%'
                ]
              }
            ].map((plan, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={`flex flex-col rounded-3xl p-8 md:p-10 border transition-all duration-300 ${
                  plan.highlight 
                    ? 'bg-[#1A1A1A] border-[#F8B11C] shadow-[0_20px_40px_rgba(248,177,28,0.1)]' 
                    : 'bg-[#161616] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-black text-[#F8B11C]">{plan.price}</span>
                    <span className="text-gray-500 font-bold uppercase text-[10px] tracking-wider">FCFA</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed min-h-[48px]">
                    {plan.desc}
                  </p>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2">
                    Inclus dans l'offre
                  </p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[#00703B]" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => onNavigate?.('contact')}
                  className={`w-full py-6 rounded-xl font-bold transition-all ${
                    plan.highlight
                      ? 'bg-[#F8B11C] text-black hover:bg-white shadow-lg'
                      : 'bg-white/5 text-white hover:bg-white hover:text-black border border-white/10'
                  }`}
                >
                  Réserver
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-[80px] md:py-[120px] px-6 lg:px-20 bg-black">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-10 md:mb-[60px]">
            Le studio en images
          </h2>

          <Masonry columnsCount={window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3} gutter="16px">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg cursor-pointer group"
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
                whileHover={{ scale: 1.02 }}
              >
                <ImageWithFallback
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-auto"
                />
                <AnimatePresence>
                  {hoveredImage === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-[#F8B11C]/80 to-transparent flex flex-col justify-end p-6"
                    >
                      <p className="text-white font-medium text-base">Studio MAGIC+</p>
                      <ZoomIn className="absolute top-4 right-4 w-8 h-8 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[80px] md:py-[100px] px-6 lg:px-20 bg-[#111111]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-3xl md:text-[40px] font-bold text-center text-white mb-10 md:mb-[60px]">
            Questions fréquentes
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: "Quels sont les horaires de disponibilité ?",
                a: "Le studio est disponible 7 jours sur 7, de 8h à 22h. Pour les créneaux en dehors de ces horaires, merci de nous contacter pour vérifier la disponibilité."
              },
              {
                q: "Peut-on apporter notre propre équipement ?",
                a: "Oui, vous pouvez apporter votre propre matériel. Notre équipe technique peut vous aider à l'intégrer dans la configuration du studio. Nous recommandons de nous en informer à l'avance pour préparer l'espace en conséquence."
              },
              {
                q: "Y a-t-il un parking disponible ?",
                a: "Oui, nous disposons d'un parking sécurisé gratuit pour nos clients, avec un accès facile pour le chargement et déchargement du matériel."
              },
              {
                q: "Combien de personnes le studio peut-il accueillir ?",
                a: "Le studio peut confortablement accueillir jusqu'à 15 personnes (équipe de production incluse). Pour des configurations spécifiques ou des événements plus importants, contactez-nous pour discuter des possibilités."
              },
              {
                q: "Les logiciels de montage sont-ils inclus ?",
                a: "Oui, nous mettons à disposition des postes de travail équipés avec Adobe Creative Suite (Premiere Pro, After Effects, Audition) ainsi que DaVinci Resolve pour vos besoins de post-production basiques."
              },
              {
                q: "Puis-je visiter le studio avant de réserver ?",
                a: "Absolument ! Nous encourageons les visites préalables. Contactez-nous pour planifier une visite du studio où notre équipe vous présentera les équipements et répondra à toutes vos questions."
              },
              {
                q: "Quelles sont les conditions d'annulation ?",
                a: "Vous pouvez annuler ou modifier votre réservation jusqu'à 48 heures avant la date prévue pour un remboursement complet. Les annulations dans les 48 heures précédant la réservation sont soumises à des frais de 50%."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                <AccordionTrigger className="py-4 md:py-6 text-base md:text-lg font-semibold text-white hover:text-[#F8B11C] transition-colors px-0 hover:no-underline text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-400 pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative py-[120px] px-8 bg-[#00703B] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-[#F8B11C] rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[60%] bg-black rounded-full blur-[120px]" />
        </div>

        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-[56px] font-bold text-white mb-6">
            Donnez vie à vos projets
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Prêt à réserver le MAGIC+ Studio ou besoin d'une configuration sur mesure ? Notre équipe est là pour vous accompagner.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              onClick={() => onNavigate?.('contact')}
              className="bg-[#F8B11C] text-black hover:bg-white hover:scale-105 transition-all px-12 py-[18px] text-lg font-bold h-auto shadow-xl"
            >
              Réserver maintenant
            </Button>
            <Button 
              onClick={() => onNavigate?.('contact')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#00703B] px-12 py-4 text-lg font-bold h-auto transition-all"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
