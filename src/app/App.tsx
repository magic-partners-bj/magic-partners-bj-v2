import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { SEO } from './components/SEO';
import { HeroSection } from './components/HeroSection';
import { ThreePillarsSection } from './components/ThreePillarsSection';
import { AboutSection } from './components/AboutSection';
import { PmeBoostSection } from './components/PmeBoostSection';
import { StudioSection } from './components/StudioSection';
import { TeamSection } from './components/TeamSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PartnersSection } from './components/PartnersSection';
import { CTASection } from './components/CTASection';
import { ServicesPage } from './components/ServicesPage';
import { PortfolioPage } from './components/PortfolioPage';
import { CareersPage } from './components/CareersPage';
import { ContactPage } from './components/ContactPage';
import { StudioPage } from './components/StudioPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { LegalNoticePage } from './components/LegalNoticePage';
import { PmeBoostPage } from './components/PmeBoostPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const VALID_PAGES = new Set([
  'accueil',
  'services',
  'media',
  'communication',
  'evenementiel',
  'projets',
  'studio',
  'carrieres',
  'contact',
  'pme-boost',
  'confidentialite',
  'mentions-legales',
  'about',
]);

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Map pathname to current page for legacy components
  const getCurrentPage = () => {
    const path = location.pathname.slice(1) || 'accueil';
    return VALID_PAGES.has(path) ? path : 'accueil';
  };

  const handleNavigate = (page: string) => {
    if (page === 'about') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      } else {
        document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    if (page === 'accueil') {
      navigate('/');
    } else {
      navigate(`/${page}`);
    }
  };

  const HomePage = () => (
    <>
      <HeroSection onNavigate={handleNavigate} />
      <section id="about-section">
        <AboutSection onNavigate={handleNavigate} />
      </section>
      <PmeBoostSection onNavigate={handleNavigate} />
      <StudioSection onNavigate={handleNavigate} />
      <TeamSection />
      {/* <TestimonialsSection /> */}
      <PartnersSection />
      <CTASection onNavigate={handleNavigate} />
    </>
  );

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <SEO />
      <Header currentPage={getCurrentPage()} onNavigate={handleNavigate} />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/accueil" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage onNavigate={handleNavigate} />} />
          <Route path="/media" element={<ServicesPage onNavigate={handleNavigate} />} />
          <Route path="/communication" element={<ServicesPage onNavigate={handleNavigate} />} />
          <Route path="/evenementiel" element={<ServicesPage onNavigate={handleNavigate} />} />
          <Route path="/projets" element={<PortfolioPage onNavigate={handleNavigate} />} />
          <Route path="/studio" element={<StudioPage onNavigate={handleNavigate} />} />
          <Route path="/carrieres" element={<CareersPage onNavigate={handleNavigate} />} />
          <Route path="/contact" element={<ContactPage onNavigate={handleNavigate} />} />
          <Route path="/pme-boost" element={<PmeBoostPage onNavigate={handleNavigate} />} />
          <Route path="/confidentialite" element={<PrivacyPolicyPage onNavigate={handleNavigate} />} />
          <Route path="/mentions-legales" element={<LegalNoticePage onNavigate={handleNavigate} />} />
          {/* Fallback for any other route */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer onNavigate={handleNavigate} />
      <CookieConsent onNavigate={handleNavigate} />
    </div>
  );
}
