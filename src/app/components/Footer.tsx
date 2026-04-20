import { Instagram, Facebook, Linkedin, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import logoImage from '@/assets/mp-logo-star.png';
import cgvPdf from '@/assets/conditions-générales-de-vente.pdf';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const services = [
    { id: 'media', label: 'Média' },
    { id: 'communication', label: 'Communication' },
    { id: 'evenementiel', label: 'Événementiel' },
    { id: 'studio', label: 'Studio' },
  ];

  const company = [
    { id: 'about', label: 'À Propos' },
    { id: 'pme-boost', label: 'PME Boost' },
    { id: 'studio', label: 'Studio' },
    { id: 'carrieres', label: 'Carrières' },
    { id: 'contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61584628495728', label: 'Facebook' },
    { icon: MessageCircle, href: 'https://wa.me/2290192899999', label: 'WhatsApp' },
    { icon: Instagram, href: 'https://www.instagram.com/magicpartnersbj/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/magic-partners-sas/', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div>
            <button
              type="button"
              onClick={() => onNavigate?.('accueil')}
              className="flex items-center gap-3 mb-4"
              aria-label="MAGIC PARTNERS"
            >
              <img 
                src={logoImage} 
                alt="MAGIC PARTNERS" 
                className="h-16"
              />
            </button>
            
            <p className="text-white/70 text-sm leading-relaxed">
              Votre partenaire pour des expériences média, communication et événementielles à 360° qui marquent les esprits.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onNavigate?.(service.id)}
                    className="text-white/70 hover:text-[#F8B11C] transition-colors duration-300 text-sm"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Entreprise</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate?.(item.id)}
                    className="text-white/70 hover:text-[#F8B11C] transition-colors duration-300 text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#00703B] flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <a href="tel:+2290192899999" className="text-white/70 hover:text-[#F8B11C] transition-colors block">
                    +229 01 92 89 99 99
                  </a>
                  <a href="tel:+2290121307237" className="text-white/70 hover:text-[#F8B11C] transition-colors block">
                    +229 01 21 30 72 37
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00703B] flex-shrink-0" />
                <a href="mailto:contact@magicpartners.bj" className="text-white/70 hover:text-[#F8B11C] transition-colors text-sm">
                  contact@magic-partners.bj
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00703B] flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Cotonou, Bénin
                </span>
              </li>
            </ul>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#F8B11C] hover:text-black transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#F8B11C]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>© 2025 MAGIC PARTNERS. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a 
                href={cgvPdf} 
                download="Conditions_generales_de_vente_MAGIC_PARTNERS.pdf"
                className="hover:text-[#F8B11C] transition-colors cursor-pointer"
              >
                Conditions générales de vente
              </a>
              <button
                onClick={() => onNavigate?.('mentions-legales')}
                className="hover:text-[#F8B11C] transition-colors"
              >                Mentions légales
              </button>
              <button 
                onClick={() => onNavigate?.('confidentialite')}
                className="hover:text-[#F8B11C] transition-colors"
              >
                Confidentialité
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
