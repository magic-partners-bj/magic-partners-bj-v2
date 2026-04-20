import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';

interface CookieConsentProps {
  onNavigate?: (page: string) => void;
}

export function CookieConsent({ onNavigate }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="bg-white rounded-2xl shadow-[0_-8px_30px_rgb(0,0,0,0.12)] border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-black mb-2">
                  Nous respectons votre vie privée
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site, analyser le trafic et vous proposer des contenus personnalisés. En cliquant sur "Accepter", vous consentez à l'utilisation de tous les cookies. Vous pouvez également choisir de les refuser. Pour en savoir plus, consultez notre{' '}
                  <button 
                    onClick={() => onNavigate?.('confidentialite')}
                    className="text-[#00703B] font-semibold hover:underline"
                  >
                    politique de confidentialité
                  </button>.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                <button
                  onClick={handleDecline}
                  className="px-6 py-3 text-sm font-semibold text-gray-600 hover:text-black transition-colors"
                >
                  Continuer sans accepter
                </button>
                <Button 
                  onClick={handleAccept}
                  variant="primary"
                  className="px-8 py-3 !bg-[#00703B] hover:!bg-[#005a2f]"
                >
                  Accepter tout
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
