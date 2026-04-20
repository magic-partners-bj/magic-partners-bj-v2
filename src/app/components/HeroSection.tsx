import { motion } from 'motion/react';
import { Button } from './Button';
import { ShootingStar } from './ShootingStar';

interface HeroSectionProps {
  onNavigate?: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#000]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep Radial Gradient */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #00703B 0%, #000000 70%)'
          }}
        />
        
        {/* Subtle Starfield */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: Math.random() }}
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              className="absolute w-0.5 h-0.5 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Floating Glowing Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-amazon-green rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-spectra-yellow rounded-full blur-[150px]"
        />
      </div>

      {/* Shooting Star Animation */}
      <ShootingStar />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-white drop-shadow-sm">
            Inspirer, Innover, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8B11C] to-[#FFFFFF] animate-pulse-slow">
              Rayonner
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Votre partenaire pour des expériences média, communication et événementielles à 360° qui marquent les esprits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button 
            onClick={() => onNavigate?.('services')}
            className="px-8 py-5 text-base bg-amazon-green hover:bg-amazon-green/90 text-white shadow-[0_0_20px_rgba(0,112,59,0.3)] transition-all hover:scale-105"
          >
            Nos Services
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => onNavigate?.('contact')}
            className="px-8 py-5 text-base bg-transparent border-2 border-spectra-yellow/50 text-spectra-yellow hover:bg-spectra-yellow hover:text-black transition-all hover:scale-105"
          >
            Nous Contacter
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs uppercase tracking-widest">Découvrir</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1"
          >
            <div className="w-1 h-1 bg-spectra-yellow rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}