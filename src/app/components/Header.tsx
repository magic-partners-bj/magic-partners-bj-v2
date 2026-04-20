import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from '@/assets/mp-logo.png';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Header({ currentPage = 'accueil', onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'services', label: 'Services' },
    { id: 'pme-boost', label: 'PME Boost' },
    { id: 'studio', label: 'Studio' },
    { id: 'carrieres', label: 'Carrières' },
  ];

  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'h-16 shadow-md' : 'h-20'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20 h-full flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick('accueil')}
          className="flex items-center gap-3"
          aria-label="MAGIC PARTNERS"
        >
          <img 
            src={logoImage} 
            alt="MAGIC PARTNERS - Inspirer, Innover, Rayonner" 
            className="h-16"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-medium text-base relative py-2 transition-colors duration-300 ${
                currentPage === item.id
                  ? 'text-[#00703B]'
                  : 'text-black hover:text-[#00703B]'
              }`}
            >
              {item.label}
              {currentPage === item.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00703B]"
                  layoutId="activeNav"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {currentPage !== item.id && (
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00703B] transition-all duration-300 group-hover:w-full" />
              )}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button onClick={() => handleNavClick('contact')}>
            Nous contacter
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className="w-6 h-6 text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <nav className="flex flex-col px-8 py-6 gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left font-medium py-2 ${
                    currentPage === item.id
                      ? 'text-[#00703B] border-l-4 border-[#00703B] pl-4'
                      : 'text-black pl-4'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => handleNavClick('contact')}
                className="w-full mt-4"
              >
                Nous contacter
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
