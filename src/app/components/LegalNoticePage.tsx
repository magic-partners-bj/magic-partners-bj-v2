import { motion } from 'motion/react';

interface LegalNoticePageProps {
  onNavigate: (page: string) => void;
}

export function LegalNoticePage({ onNavigate }: LegalNoticePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 px-8 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Mentions Légales
            </h1>
            <div className="h-1 w-32 bg-[#F8B11C] mb-8" />
            <p className="text-xl text-white/80 max-w-3xl">
              Informations légales concernant MAGIC PARTNERS et le site web
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-8 lg:px-20">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">1. Éditeur du site</h2>
              <ul className="list-none space-y-2 text-[#666]">
                <li><strong className="text-black">Raison sociale :</strong> MAGIC PARTNERS SAS</li>
                <li><strong className="text-black">Forme juridique :</strong> Société par Actions Simplifiée</li>
                <li><strong className="text-black">Adresse :</strong> Ilot 266, Parcelle « C », Maison RAOUF PARAIZO, Jéricho Sud, Cotonou, République du Bénin</li>
                <li><strong className="text-black">Capital social :</strong> 14.000.000 FCFA</li>
                <li><strong className="text-black">RCCM :</strong> RB/COT/25 B 40823</li>
                <li><strong className="text-black">Identifiant Fiscal Unique :</strong> 3202565418042</li>
                <li><strong className="text-black">Directeur de la publication :</strong> HESSOU Elvis - Directeur Général</li>
                <li>
                  <strong className="text-black">Contact :</strong>{' '}
                  <a href="mailto:contact@magic-partners.bj" className="text-[#00703B] hover:text-[#F8B11C] transition-colors">
                    contact@magic-partners.bj
                  </a>
                  {' / '}
                  <a href="tel:+2290121307237" className="text-[#00703B] hover:text-[#F8B11C] transition-colors">
                    01 21 30 72 37
                  </a>
                  {' - '}
                  <a href="tel:+2290192899999" className="text-[#00703B] hover:text-[#F8B11C] transition-colors">
                    01 92 89 99 99
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">2. Hébergeur</h2>
              <ul className="list-none space-y-2 text-[#666]">
                <li><strong className="text-black">Raison sociale :</strong> Contabo GmbH</li>
                <li><strong className="text-black">Forme sociale :</strong> GmbH</li>
                <li><strong className="text-black">Adresse :</strong> Aschauer Straße 32a · D-81549 München - Allemagne</li>
                <li>
                  <strong className="text-black">Email :</strong>{' '}
                  <a href="mailto:skrill@contabo.com" className="text-[#00703B] hover:text-[#F8B11C] transition-colors">
                    skrill@contabo.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">3. Objet du site</h2>
              <p className="text-[#666] leading-relaxed mb-4">
                Le site a pour objet principal de :
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#666]">
                <li>présenter les activités et services de MAGIC PARTNERS (communication, marketing, production audiovisuelle, événementiel, plateforme OTT, etc.);</li>
                <li>proposer des contenus éditoriaux et audiovisuels liés au sport et au divertissement;</li>
                <li>le cas échéant, permettre la souscription à des services payants (abonnements, billets, partenariats, etc.)</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">4. Propriété intellectuelle</h2>
              <p className="text-[#666] leading-relaxed mb-4">
                L'ensemble des éléments composant le site (textes, images, logos, vidéos, sons, graphismes, interface, bases de données, etc.) sont, sauf mention contraire, la propriété exclusive de MAGIC PARTNERS ou de ses partenaires qui lui ont concédé les droits nécessaires.
              </p>
              <p className="text-[#666] leading-relaxed mb-4">
                Toute reproduction, représentation, modification, adaptation, traduction, exploitation, extraction, diffusion ou redistribution de tout ou partie du Site, sur quelque support que ce soit, sans l'autorisation écrite préalable de MAGIC PARTNERS, est strictement interdite et peut constituer une infraction au sens du Code du numérique et des textes applicables en matière de propriété intellectuelle.
              </p>
              <p className="text-[#666] leading-relaxed">
                Les marques, logos et autres signes distinctifs apparaissant sur le Site sont protégés. Leur utilisation sans autorisation écrite est interdite.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">5. Liens hypertextes</h2>
              <p className="text-[#666] leading-relaxed mb-4">
                Le site peut contenir des liens vers des sites ou services tiers qui ne sont pas exploités par MAGIC PARTNERS. MAGIC PARTNERS n'exerce aucun contrôle sur le contenu de ces sites et décline toute responsabilité quant à leur contenu, leur fonctionnement ou l'éventuelle collecte et traitement de données personnelles par ces derniers.
              </p>
              <p className="text-[#666] leading-relaxed">
                Toute mise en place d'un lien hypertexte vers le Site est soumise à l'autorisation préalable et écrite de MAGIC PARTNERS, sauf cas de liens simples vers la page d'accueil ne présentant ni caractère trompeur ni préjudiciable.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">6. Responsabilité</h2>
              <p className="text-[#666] leading-relaxed mb-4">
                MAGIC PARTNERS met en œuvre les moyens raisonnables pour assurer l'exactitude et la mise à jour des informations diffusées sur le Site, ainsi que l'accessibilité du Site. Toutefois :
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#666]">
                <li>MAGIC PARTNERS ne garantit pas l'absence d'erreurs, d'interruptions, de pannes ou de dysfonctionnements;</li>
                <li>L'accès au Site peut être suspendu à tout moment pour maintenance, mise à jour ou toute autre raison technique;</li>
                <li>MAGIC PARTNERS ne saurait être tenue responsable des dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser le Site, sauf disposition légale impérative contraire.</li>
              </ul>
              <p className="text-[#666] leading-relaxed mt-4">
                L'utilisateur demeure responsable de son équipement, de ses données et de la sécurité de sa connexion internet.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">7. Données personnelles</h2>
              <p className="text-[#666] leading-relaxed mb-4">
                MAGIC PARTNERS est susceptible de traiter des données personnelles concernant les utilisateurs du Site (formulaires de contact, création de compte, abonnement, participation à un jeu ou événement, etc.), dans le respect de la réglementation béninoise, en particulier la loi n° 2017-20 portant Code du numérique et les dispositions spécifiques relatives à la protection des données à caractère personnel.
              </p>
              <p className="text-[#666] leading-relaxed">
                Pour plus d'informations, l'utilisateur est invité à consulter la{' '}
                <button
                  onClick={() => onNavigate('confidentialite')}
                  className="text-[#00703B] hover:text-[#F8B11C] transition-colors underline font-semibold"
                >
                  Politique de confidentialité
                </button>
                {' '}de MAGIC PARTNERS, accessible depuis chaque page du Site.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">8. Cookies et traceurs</h2>
              <p className="text-[#666] leading-relaxed mb-4">
                Le site peut utiliser des cookies et technologies similaires à des fins de fonctionnement, de mesure d'audience, de personnalisation des contenus et, le cas échéant, de publicité.
              </p>
              <p className="text-[#666] leading-relaxed">
                Les modalités d'utilisation des cookies et les choix offerts aux utilisateurs sont détaillés dans la rubrique « Cookies » et/ou dans la{' '}
                <button
                  onClick={() => onNavigate('confidentialite')}
                  className="text-[#00703B] hover:text-[#F8B11C] transition-colors underline font-semibold"
                >
                  Politique de confidentialité
                </button>.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">9. Droit applicable</h2>
              <p className="text-[#666] leading-relaxed">
                Les présentes mentions légales sont régies par le droit béninois. En cas de litige, et à défaut de règlement amiable, les tribunaux compétents de Cotonou seront seuls compétents, sous réserve de dispositions légales impératives contraires.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 p-8 bg-gradient-to-r from-[#00703B] to-[#00703B]/90 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Besoin d'informations ?</h3>
              <p className="text-white/90 mb-6">
                Pour toute question concernant les mentions légales ou les conditions d'utilisation du site, n'hésitez pas à nous contacter.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-[#F8B11C] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#F8B11C]/90 transition-all duration-300"
              >
                Nous contacter
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
