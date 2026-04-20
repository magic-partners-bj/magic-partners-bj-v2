import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, MessageCircle, ExternalLink } from 'lucide-react';

interface ContactPageProps {
  onNavigate?: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61584628495728', label: 'Facebook' },
    { icon: MessageCircle, href: 'https://wa.me/2290192899999', label: 'WhatsApp' },
    { icon: Instagram, href: 'https://www.instagram.com/magicpartnersbj/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/magic-partners-sas/', label: 'LinkedIn' },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Téléphone',
      values: ['+229 01 21 30 72 37'],
      href: 'tel:+2290121307237',
      label: 'Nous appeler',
    },
    {
      icon: Mail,
      title: 'Email',
      values: ['contact@magic-partners.bj'],
      href: 'mailto:contact@magic-partners.bj',
      label: 'Nous écrire',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      values: ['+229 01 92 89 99 99'],
      href: 'https://wa.me/2290192899999',
      label: 'Démarrer une discussion',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      values: ['Cotonou, Bénin'],
      href: 'https://www.google.com/maps/search/MAGIC+PARTNERS+SAS+Cotonou',
      label: 'Voir sur Google Maps',
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Page Hero */}
      <section className="py-20 px-8 lg:px-20 bg-gradient-to-b from-[#00703B]/5 to-white">
        <div className="max-w-[1440px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-gray-600 mb-4">
              <button onClick={() => onNavigate?.('accueil')} className="hover:text-[#00703B] cursor-pointer bg-transparent border-none p-0">
                Accueil
              </button>
              {' / Contact'}
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Nous sommes là pour répondre à toutes vos questions et discuter de vos projets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-8 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden rounded-2xl shadow-2xl border border-gray-100">
            {/* Left Side - Brand & Info */}
            <div className="lg:col-span-2 bg-[#00703B] text-white p-12 lg:p-16 relative overflow-hidden">
              {/* Background Decorations */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-[#F8B11C] rounded-full opacity-20 blur-3xl" />
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#F8B11C] rounded-full opacity-20 blur-2xl" />

              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6">
                  Prêt à lancer votre projet ?
                </h2>
                <p className="text-white/80 mb-12 leading-relaxed text-lg">
                  Notre équipe d'experts est à votre disposition pour transformer vos idées en réalité. N'hésitez pas à nous contacter via l'un des moyens ci-contre.
                </p>

                {/* Business Hours */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <span className="w-10 h-1 bg-[#F8B11C] rounded-full" />
                    Horaires d'ouverture
                  </h3>
                  <div className="space-y-4 text-white/90">
                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span>Lundi - Vendredi</span>
                      <span className="font-bold">9h00 - 18h30</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span>Samedi</span>
                      <span className="font-bold">10h00 - 16h00</span>
                    </div>
                    <div className="flex justify-between items-center text-white/40">
                      <span>Dimanche</span>
                      <span>Fermé</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-semibold mb-6">Suivez notre actualité</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F8B11C] transition-all duration-300 group"
                      >
                        <social.icon className="w-5 h-5 text-white group-hover:text-black" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Cards */}
            <div className="lg:col-span-3 bg-gray-50 p-12 lg:p-16">
              <h3 className="text-3xl font-bold text-black mb-10">
                Nos coordonnées
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-14 h-14 bg-amazon-green/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amazon-green group-hover:text-white transition-all duration-300 text-amazon-green">
                        <method.icon className="w-7 h-7" />
                      </div>
                      <h4 className="text-xl font-bold text-black mb-3">{method.title}</h4>
                      <div className="space-y-1">
                        {method.values.map((v) => (
                          <p key={v} className="text-gray-600 font-medium break-all md:break-normal">
                            {v}
                          </p>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-8 flex items-center text-amazon-green font-bold text-xs uppercase tracking-widest">
                      {method.label}
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-12 p-8 bg-white rounded-2xl border border-dashed border-gray-200 text-center">
                <p className="text-gray-600">
                  Besoin d'un accompagnement personnalisé ? <br className="hidden sm:block" />
                  Passez nous voir à notre agence pour en discuter de vive voix.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.2470827224392!2d2.425918939209756!3d6.374918287090394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10235500589ddaeb%3A0x5a4a69f0946b5163!2sMAGIC%20PARTNERS%20SAS!5e0!3m2!1sen!2sbj!4v1764257356126!5m2!1sen!2sbj"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="MAGIC PARTNERS Location"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute bottom-8 right-8 bg-white p-4 rounded-lg shadow-lg border border-gray-100 hidden md:block">
          <p className="font-bold text-black mb-1">MAGIC PARTNERS SAS</p>
          <p className="text-sm text-gray-600">Cotonou, Bénin</p>
        </div>
      </section>
    </div>
  );
}
