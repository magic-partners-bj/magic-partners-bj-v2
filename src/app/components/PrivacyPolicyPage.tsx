import { motion } from 'motion/react';

interface PrivacyPolicyPageProps {
  onNavigate: (page: string) => void;
}

export function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
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
              Politique de Confidentialité
            </h1>
            <div className="h-1 w-32 bg-[#F8B11C] mb-8" />
            <p className="text-xl text-white/80 max-w-3xl">
              MAGIC PARTNERS attache une importance particulière à la protection de vos données personnelles
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
              <h2 className="text-3xl font-bold text-black mb-4">1. Responsable du traitement</h2>
              <p className="text-[#666] leading-relaxed mb-4">
                Le responsable du traitement des données personnelles collectées via le Site et les services associés est :
              </p>
              <ul className="list-none space-y-2 text-[#666]">
                <li><strong className="text-black">Raison sociale :</strong> MAGIC PARTNERS SAS</li>
                <li><strong className="text-black">RCCM :</strong> RB/COT/25 B 40823</li>
                <li><strong className="text-black">Identifiant Fiscal Unique :</strong> 3202565418042</li>
                <li><strong className="text-black">Siège social :</strong> Ilot 266, Parcelle « C », Maison RAOUF PARAIZO, Jéricho Sud, Cotonou, République du Bénin</li>
                <li><strong className="text-black">E-mail :</strong> <a href="mailto:privacy@magic-partners.bj" className="text-[#00703B] hover:text-[#F8B11C] transition-colors">privacy@magic-partners.bj</a> (ou <a href="mailto:contact@magic-partners.bj" className="text-[#00703B] hover:text-[#F8B11C] transition-colors">contact@magic-partners.bj</a> à défaut)</li>
                <li><strong className="text-black">Téléphone :</strong> +229 01 21 30 72 37 / +229 01 92 89 99 99</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">2. Données collectées</h2>
              <p className="text-[#666] leading-relaxed mb-4">
                MAGIC PARTNERS peut collecter différentes catégories de données :
              </p>
              <ul className="list-disc list-inside space-y-3 text-[#666]">
                <li><strong className="text-black">Données d'identification :</strong> nom, prénom, civilité, organisation, fonction, coordonnées (e-mail, téléphone, adresse), identifiants de compte.</li>
                <li><strong className="text-black">Données de connexion et d'utilisation :</strong> logs de connexion, adresse IP, identifiants de terminal, pages consultées, durée de connexion, préférences de contenu</li>
                <li><strong className="text-black">Données contractuelles et de facturation :</strong> historiques de commandes ou d'abonnements, moyens de paiement (via prestataire sécurisé), données nécessaires à la facturation.</li>
                <li><strong className="text-black">Données liées aux événements et opérations promotionnelles :</strong> inscriptions à des événements, participation à des jeux ou concours, réponses à des sondages.</li>
                <li><strong className="text-black">Données de communication :</strong> contenu de vos messages (formulaire de contact, support client, réseaux sociaux associés).</li>
              </ul>
              <p className="text-[#666] leading-relaxed mt-4">
                Les données marquées comme obligatoires dans les formulaires sont nécessaires à la fourniture du service ou au traitement de la demande. À défaut, la demande pourrait ne pas être traitée ou le service ne pas être fourni.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">3. Finalités et bases juridiques</h2>
              <p className="text-[#666] leading-relaxed mb-4">
                Les traitements de données réalisés par MAGIC PARTNERS poursuivent notamment les finalités suivantes :
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Fourniture des services et exécution du contrat</h3>
                  <p className="text-[#666] leading-relaxed">
                    Gestion des comptes utilisateurs, abonnements, commandes, accès aux contenus OTT, organisation d'événements ; service client et assistance.
                  </p>
                  <p className="text-sm text-[#00703B] mt-2">
                    <strong>Base juridique :</strong> exécution du contrat ou de mesures précontractuelles
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Gestion de la relation commerciale et marketing</h3>
                  <p className="text-[#666] leading-relaxed">
                    Envoi d'informations relatives aux services, actualités, événements, newsletters ; prospection commerciale auprès des clients et prospects dans le respect des règles applicables.
                  </p>
                  <p className="text-sm text-[#00703B] mt-2">
                    <strong>Base juridique :</strong> intérêt légitime de MAGIC PARTNERS à développer son activité, ou consentement lorsque la loi l'exige.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Amélioration des services et statistiques</h3>
                  <p className="text-[#666] leading-relaxed">
                    Analyse de l'utilisation du Site et des contenus, mesure d'audience, études statistiques.
                  </p>
                  <p className="text-sm text-[#00703B] mt-2">
                    <strong>Base juridique :</strong> intérêt légitime (amélioration des services), ou consentement lorsque requis (certains cookies)
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Sécurité du Site et prévention des fraudes</h3>
                  <p className="text-[#666] leading-relaxed">
                    Sécurisation des accès, détection d'activités anormales ou frauduleuses, prévention de la cybercriminalité.
                  </p>
                  <p className="text-sm text-[#00703B] mt-2">
                    <strong>Base juridique :</strong> intérêt légitime à assurer la sécurité des services, respect d'obligations légales liées à la sécurité des réseaux
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Respect des obligations légales et réglementaires</h3>
                  <p className="text-[#666] leading-relaxed">
                    Obligations comptables, fiscales, de conservation de certaines données, demandes des autorités compétentes, obligations spécifiques du Code du numérique et de la législation sur la protection des données.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">4. Destinataires des données</h2>
              <p className="text-[#666] leading-relaxed mb-4">
                Les données personnelles sont principalement destinées aux services internes de MAGIC PARTNERS habilités à les traiter (équipes commerciale, marketing, production, technique, finance, support, etc.).
              </p>
              <p className="text-[#666] leading-relaxed mb-4">
                Elles peuvent également être communiquées, pour les seuls besoins des finalités décrites ci-dessus, à :
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#666]">
                <li>des prestataires techniques (hébergeur, infogérance, solutions e-mailing, prestataires de paiement, outils d'analytics) ;</li>
                <li>des partenaires intervenant dans l'exécution d'un contrat ou d'un événement (co-organisateurs, partenaires média, etc.), lorsque cela est nécessaire ;</li>
                <li>des autorités administratives ou judiciaires lorsque la loi l'exige ou pour l'exercice ou la défense de droits en justice.</li>
              </ul>
              <p className="text-[#666] leading-relaxed mt-4">
                MAGIC PARTNERS exige de ses prestataires et partenaires qu'ils présentent des garanties suffisantes en matière de sécurité et de confidentialité des données traitées pour son compte.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">5. Transferts hors du Bénin</h2>
              <p className="text-[#666] leading-relaxed mb-4">
                Certaines données peuvent être hébergées ou traitées dans des pays autres que le Bénin (par exemple, si l'hébergeur ou certains outils SAAS sont localisés hors du territoire national).
              </p>
              <p className="text-[#666] leading-relaxed">
                Dans ce cas, MAGIC PARTNERS s'engage à encadrer ces transferts conformément au Code du numérique et, le cas échéant, aux recommandations de l'Autorité de Protection des Données Personnelles (APDP), afin d'assurer un niveau de protection adéquat.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">6. Durée de conservation</h2>
              <p className="text-[#666] leading-relaxed mb-4">
                Les données personnelles sont conservées pendant une durée n'excédant pas celle nécessaire aux finalités poursuivies, à savoir notamment :
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#666]">
                <li><strong className="text-black">Gestion de la relation client :</strong> pendant la durée de la relation contractuelle, puis pour la durée de prescription applicable (souvent 5 ans) à compter de la fin de la relation, sauf obligations plus longues.</li>
                <li><strong className="text-black">Prospection :</strong> jusqu'à 3 ans après le dernier contact actif émanant de la personne concernée, sauf retrait du consentement ou opposition.</li>
                <li><strong className="text-black">Données techniques (logs, sécurité) :</strong> quelques mois à quelques années selon les exigences légales et besoins de sécurité.</li>
              </ul>
              <p className="text-[#666] leading-relaxed mt-4">
                Les durées peuvent être adaptées en fonction des évolutions légales ou des recommandations de l'APDP.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">7. Droits des personnes</h2>
              <p className="text-[#666] leading-relaxed mb-4">
                Conformément à la réglementation béninoise relative à la protection des données à caractère personnel, et notamment au Code du numérique et à la loi sur la protection des données, les personnes concernées disposent, dans les conditions prévues par les textes, des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#666]">
                <li><strong className="text-black">Droit d'information :</strong> recevoir des informations claires sur les traitements effectués.</li>
                <li><strong className="text-black">Droit d'accès :</strong> obtenir la confirmation que des données les concernant sont ou ne sont pas traitées, et accéder auxdites données.</li>
                <li><strong className="text-black">Droit de rectification :</strong> demander la correction de données inexactes ou incomplètes.</li>
                <li><strong className="text-black">Droit d'opposition :</strong> s'opposer, pour des raisons légitimes, à certains traitements, notamment à des fins de prospection.</li>
                <li><strong className="text-black">Droit d'effacement (dans certains cas) :</strong> demander la suppression de données, notamment lorsqu'elles ne sont plus nécessaires au regard des finalités poursuivies ou en cas de retrait du consentement.</li>
                <li><strong className="text-black">Droit à la limitation du traitement</strong> dans certains cas prévus par la loi.</li>
                <li><strong className="text-black">Droit de retirer son consentement</strong> lorsque le traitement est fondé sur le consentement (par exemple, newsletter, certains cookies).</li>
              </ul>
              <p className="text-[#666] leading-relaxed mt-4">
                Les personnes disposent également du droit d'introduire une réclamation auprès de l'Autorité de Protection des Données Personnelles (APDP) si elles estiment que leurs droits n'ont pas été respectés.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">8. Exercice des droits</h2>
              <p className="text-[#666] leading-relaxed mb-4">
                Pour exercer leurs droits, les utilisateurs peuvent adresser une demande écrite :
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#666]">
                <li><strong className="text-black">par e-mail :</strong> <a href="mailto:privacy@magic-partners.bj" className="text-[#00703B] hover:text-[#F8B11C] transition-colors">privacy@magic-partners.bj</a> (ou <a href="mailto:contact@magic-partners.bj" className="text-[#00703B] hover:text-[#F8B11C] transition-colors">contact@magic-partners.bj</a>)</li>
                <li><strong className="text-black">ou par courrier :</strong> MAGIC PARTNERS SAS – Données personnelles, Ilot 266, Parcelle « C », Maison RAOUF PARAIZO, Jéricho Sud, Cotonou, République du Bénin.</li>
              </ul>
              <p className="text-[#666] leading-relaxed mt-4">
                La demande doit préciser l'identité du demandeur (et, le cas échéant, joindre une copie d'un document d'identité) ainsi que la nature du ou des droits qu'il souhaite exercer. MAGIC PARTNERS s'efforcera d'y répondre dans un délai raisonnable, conformément aux exigences légales.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">9. Sécurité</h2>
              <p className="text-[#666] leading-relaxed mb-4">
                MAGIC PARTNERS met en œuvre des mesures techniques et organisationnelles raisonnables pour protéger les données personnelles contre la destruction accidentelle ou illicite, la perte accidentelle, l'altération, la divulgation ou l'accès non autorisés (contrôle d'accès, sauvegardes, mesures de sécurité des systèmes d'information, sensibilisation du personnel, etc.).
              </p>
              <p className="text-[#666] leading-relaxed">
                Toutefois, aucun système n'étant totalement sûr, MAGIC PARTNERS ne peut garantir une sécurité absolue des données transmises ou stockées.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">10. Cookies</h2>
              <p className="text-[#666] leading-relaxed mb-4">
                Les modalités d'utilisation des cookies et autres traceurs (types de cookies utilisés, finalités, durée de conservation, paramétrage possible par l'utilisateur) sont détaillées dans une rubrique spécifique « Cookies » ou dans une section dédiée de la présente politique.
              </p>
              <p className="text-[#666] leading-relaxed">
                L'utilisateur peut accepter ou refuser certains cookies (hors cookies strictement nécessaires au fonctionnement du Site), via les paramètres de son navigateur et/ou via un bandeau ou module de gestion des cookies, lorsque celui-ci est mis en place.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">11. Mise à jour de la politique</h2>
              <p className="text-[#666] leading-relaxed mb-4">
                La présente politique de confidentialité peut être amenée à évoluer, notamment pour tenir compte :
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#666]">
                <li>des modifications légales ou réglementaires ;</li>
                <li>des recommandations de l'APDP ;</li>
                <li>des évolutions des services ou des traitements mis en œuvre.</li>
              </ul>
              <p className="text-[#666] leading-relaxed mt-4">
                La version en vigueur est celle accessible en ligne à la date de consultation. La date de dernière mise à jour figure en tête du document.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 p-8 bg-gradient-to-r from-[#00703B] to-[#00703B]/90 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Des questions ?</h3>
              <p className="text-white/90 mb-6">
                Pour toute question concernant notre politique de confidentialité ou l'exercice de vos droits, n'hésitez pas à nous contacter.
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
