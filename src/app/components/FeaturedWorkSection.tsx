import { motion } from 'motion/react';
import { useState } from 'react';

interface FeaturedWorkSectionProps {
  onNavigate?: (page: string) => void;
}

export function FeaturedWorkSection({ onNavigate }: FeaturedWorkSectionProps) {
  const [activeFilter, setActiveFilter] = useState('tout');

  const filters = [
    { id: 'tout', label: 'Tout' },
    { id: 'media', label: 'Média' },
    { id: 'communication', label: 'Communication' },
    { id: 'evenementiel', label: 'Événementiel' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Campagne Nationale TV',
      category: 'media',
      categoryLabel: 'Média',
      image: 'https://images.unsplash.com/photo-1760895653496-b28ed02f3705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      id: 2,
      title: 'Stratégie de Marque 360°',
      category: 'communication',
      categoryLabel: 'Communication',
      image: 'https://images.unsplash.com/photo-1762718900539-14ba899e6dda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      id: 3,
      title: 'Festival Culturel International',
      category: 'evenementiel',
      categoryLabel: 'Événementiel',
      image: 'https://images.unsplash.com/photo-1765344550212-a3b963d63c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      id: 4,
      title: 'Production Documentaire',
      category: 'media',
      categoryLabel: 'Média',
      image: 'https://images.unsplash.com/photo-1758519289200-384c7ef2d163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      id: 5,
      title: 'Lancement de Produit',
      category: 'evenementiel',
      categoryLabel: 'Événementiel',
      image: 'https://images.unsplash.com/photo-1768508662901-03fff1c146c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      id: 6,
      title: 'Campagne Réseaux Sociaux',
      category: 'communication',
      categoryLabel: 'Communication',
      image: 'https://images.unsplash.com/photo-1644432501788-c3e823f12211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
  ];

  const filteredProjects = activeFilter === 'tout'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="py-20 lg:py-32 px-8 lg:px-20 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Nos Réalisations
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets qui ont marqué les esprits
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-[#00703B] text-white shadow-lg'
                  : 'bg-white text-[#00703B] border-2 border-[#00703B] hover:bg-[#00703B] hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => onNavigate?.('projets')}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-[#F8B11C] text-black text-xs font-medium rounded-full mb-3">
                    {project.categoryLabel}
                  </span>
                  <h3 className="text-white text-xl font-semibold">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Border effect on hover */}
              <div className="absolute inset-0 border-4 border-[#F8B11C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate?.('projets')}
            className="text-[#00703B] font-semibold text-lg hover:text-[#005a30] transition-colors inline-flex items-center gap-2 group"
          >
            Voir tous nos projets
            <span className="transform group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
