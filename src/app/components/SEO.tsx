import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO_CONFIG: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'MAGIC PARTNERS - Média, Communication, Evénementiel & Studio Audiovisuel',
    description: 'MAGIC PARTNERS est votre partenaire pour des expériences média, communication et événementielles à 360° à Cotonou, Bénin.',
  },
  '/accueil': {
    title: 'MAGIC PARTNERS - Média, Communication, Evénementiel & Studio Audiovisuel',
    description: 'MAGIC PARTNERS est votre partenaire pour des expériences média, communication et événementielles à 360° à Cotonou, Bénin.',
  },
  '/services': {
    title: 'Nos Services - Média, Communication & Événementiel | MAGIC PARTNERS',
    description: 'Découvrez nos pôles d\'expertise : Média, Communication, Événementiel et Studio Audiovisuel.',
  },
  '/media': {
    title: 'Pôle Média - Stratégie & Diffusion | MAGIC PARTNERS',
    description: 'Expertise média pour une visibilité optimale et un impact garanti sur vos cibles.',
  },
  '/communication': {
    title: 'Pôle Communication - Image & Branding | MAGIC PARTNERS',
    description: 'Sublimez votre image de marque avec nos solutions créatives et stratégiques.',
  },
  '/evenementiel': {
    title: 'Pôle Événementiel - Expériences Uniques | MAGIC PARTNERS',
    description: 'Organisation d\'événements mémorables qui marquent les esprits.',
  },
  '/projets': {
    title: 'Nos Réalisations - Portfolio | MAGIC PARTNERS',
    description: 'Découvrez les projets et collaborations qui font notre fierté.',
  },
  '/studio': {
    title: 'MP STUDIO - Studio Audiovisuel & Production | MAGIC PARTNERS',
    description: 'Production audiovisuelle de haute qualité, captation, montage et création de contenus.',
  },
  '/carrieres': {
    title: 'Carrières - Rejoignez l\'aventure | MAGIC PARTNERS',
    description: 'Vous êtes passionné par les médias et la communication ? Rejoignez l\'équipe MAGIC PARTNERS.',
  },
  '/contact': {
    title: 'Contactez-nous | MAGIC PARTNERS',
    description: 'Une idée ? Un projet ? Contactez-nous pour en discuter. Nous sommes à Cotonou, Bénin.',
  },
  '/pme-boost': {
    title: 'PME Boost - Accélérateur de Croissance | MAGIC PARTNERS',
    description: 'Le programme d\'accompagnement dédié à la visibilité et au développement des PME.',
  },
  '/confidentialite': {
    title: 'Politique de Confidentialité | MAGIC PARTNERS',
    description: 'Informations sur le traitement de vos données personnelles.',
  },
  '/mentions-legales': {
    title: 'Mentions Légales | MAGIC PARTNERS',
    description: 'Informations légales concernant la société MAGIC PARTNERS SAS.',
  },
};

export function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const config = SEO_CONFIG[pathname] || SEO_CONFIG['/'];
    
    // Update Title
    document.title = config.title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', config.description);

    // Update OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', config.title);
    }

    // Update OG Description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', config.description);
    }
    
    // Update OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://magic-partners.bj${pathname}`);
    }

    // Update Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://magic-partners.bj${pathname}`);
    }

  }, [pathname]);

  return null;
}
