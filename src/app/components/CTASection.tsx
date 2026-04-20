import { Button } from './Button';

interface CTASectionProps {
  onNavigate?: (page: string) => void;
}

export function CTASection({ onNavigate }: CTASectionProps) {
  return (
    <section className="relative py-20 lg:py-32 px-8 lg:px-20 bg-amazon-green overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-spectra-yellow rounded-full opacity-10 blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-spectra-yellow rounded-full opacity-10 blur-3xl animate-pulse-slow" />

      <div className="max-w-[1440px] mx-auto text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Prêt à démarrer votre projet?
        </h2>
        
        <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
          Contactez-nous aujourd'hui et découvrons ensemble comment donner vie à vos ambitions.
        </p>
        
        <Button
          onClick={() => onNavigate?.('contact')}
          className="bg-white text-amazon-green hover:bg-spectra-yellow hover:text-black border-2 border-white hover:border-spectra-yellow transition-all hover:scale-105 px-12 py-5 text-lg shadow-xl hover:shadow-spectra-yellow/20"
        >
          Discutons
        </Button>
      </div>
    </section>
  );
}
