import { motion } from 'motion/react';
import { useState } from 'react';
import { Calendar } from 'lucide-react';

interface PortfolioPageProps {
  onNavigate?: (page: string) => void;
}

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [activeFilter, setActiveFilter] = useState('tout');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { id: 'tout', label: 'Tout' },
    { id: 'media', label: 'Média' },
    { id: 'communication', label: 'Communication' },
    { id: 'evenementiel', label: 'Événementiel' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Campagne Nationale TV - Télécom Bénin',
      category: 'media',
      categoryLabel: 'Média',
      date: 'Janvier 2025',
      description: 'Production d\'une série de spots publicitaires pour le lancement d\'une nouvelle offre mobile.',
      image: 'https://images.unsplash.com/photo-1760895653496-b28ed02f3705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      id: 2,
      title: 'Stratégie de Marque 360° - AfriBank',
      category: 'communication',
      categoryLabel: 'Communication',
      date: 'Décembre 2024',
      description: 'Refonte complète de l\'identité visuelle et stratégie de communication digitale.',
      image: 'https://images.unsplash.com/photo-1648260295961-2773afba56ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      id: 3,
      title: 'Festival Culturel International',
      category: 'evenementiel',
      categoryLabel: 'Événementiel',
      date: 'Novembre 2024',
      description: 'Organisation complète d\'un festival de 3 jours avec 50+ artistes internationaux.',
      image: 'https://images.unsplash.com/photo-1765344550212-a3b963d63c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      id: 4,
      title: 'Documentaire "Artisans du Bénin"',
      category: 'media',
      categoryLabel: 'Média',
      date: 'Octobre 2024',
      description: 'Production documentaire de 45 minutes sur les artisans traditionnels du Bénin.',
      image: 'https://images.unsplash.com/photo-1654288891700-95f67982cbcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      id: 5,
      title: 'Lancement de Produit - TechStart',
      category: 'evenementiel',
      categoryLabel: 'Événementiel',
      date: 'Septembre 2024',
      description: 'Événement de lancement avec 200+ invités et couverture médiatique complète.',
      image: 'https://images.unsplash.com/photo-1768508662901-03fff1c146c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      id: 6,
      title: 'Campagne Réseaux Sociaux - Fashion Week',
      category: 'communication',
      categoryLabel: 'Communication',
      date: 'Août 2024',
      description: 'Gestion complète des réseaux sociaux et création de contenu viral.',
      image: 'https://images.unsplash.com/photo-1762718900539-14ba899e6dda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      id: 7,
      title: 'Série Web "Entrepreneurs d\'Afrique"',
      category: 'media',
      categoryLabel: 'Média',
      date: 'Juillet 2024',
      description: 'Production d\'une série web de 10 épisodes sur les entrepreneurs africains.',
      image: 'https://images.unsplash.com/photo-1758519289200-384c7ef2d163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      id: 8,
      title: 'Campagne RSE - GreenBénin',
      category: 'communication',
      categoryLabel: 'Communication',
      date: 'Juin 2024',
      description: 'Stratégie de communication pour une campagne environnementale nationale.',
      image: 'https://images.unsplash.com/photo-1644432501788-c3e823f12211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      id: 9,
      title: 'Conférence Internationale Business',
      category: 'evenementiel',
      categoryLabel: 'Événementiel',
      date: 'Mai 2024',
      description: 'Organisation d\'une conférence de 2 jours avec 500+ participants.',
      image: 'https://images.unsplash.com/photo-1653821355226-6def361cc7ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'tout' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Page Hero */}
      <section className="py-20 lg:py-32 px-8 lg:px-20 bg-gradient-to-b from-[#00703B]/5 to-white">
        <div className="max-w-[1440px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-gray-600 mb-4">
              <button onClick={() => onNavigate?.('accueil')} className="hover:text-[#00703B]">
                Accueil
              </button>
              {' / Projets'}
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6">
              Nos Réalisations
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre portfolio de projets qui ont marqué les esprits
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-20 z-40 bg-white border-b border-gray-200 py-6 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-[#00703B] text-white shadow-lg scale-105'
                      : 'bg-white text-[#00703B] border-2 border-[#00703B] hover:bg-[#00703B] hover:text-white'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="w-full lg:w-auto">
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full lg:w-80 px-4 py-2.5 border-2 border-gray-300 rounded-full focus:border-[#00703B] focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-16 px-8 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">Aucun projet trouvé</p>
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    
                    {/* Border effect */}
                    <div className="absolute inset-0 border-4 border-[#F8B11C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-[#F8B11C] text-black text-xs font-medium rounded-full">
                        {project.categoryLabel}
                      </span>
                      <span className="flex items-center gap-1 text-white/80 text-xs">
                        <Calendar className="w-3.5 h-3.5" />
                        {project.date}
                      </span>
                    </div>
                    
                    <h3 className="text-white text-xl font-semibold mb-2 leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/80 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 lg:px-20 bg-[#F9F9F9]">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Votre projet sera le prochain
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Travaillons ensemble pour créer quelque chose d'extraordinaire
          </p>
          <button
            onClick={() => onNavigate?.('contact')}
            className="bg-[#00703B] text-white px-12 py-5 rounded font-semibold text-lg hover:bg-[#005a30] transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
          >
            Démarrer un projet
          </button>
        </div>
      </section>
    </div>
  );
}
