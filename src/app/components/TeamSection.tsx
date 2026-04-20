import { useState } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import briceHessouImage from '@/assets/president.png';
import elvisHessouImage from '@/assets/directeur-general.png';
import bourgeotEniImage from '@/assets/agent-comptable.png';
import abibArounaImage from '@/assets/directeur-branding.png';
import keniaHounmenouImage from '@/assets/office-manager.jpg';
import latreLawsonImage from '@/assets/commerciale.jpeg';
import amenTogbanImage from '@/assets/journaliste-ri.jpg';
import freddyAkpoImage from '@/assets/journaliste-sportif.jpg';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  email?: string;
}

export function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: 'Brice HESSOU',
      role: 'Président du Consel d\'Administration',
      image: briceHessouImage,
      linkedin: '#',
      email: 'mailto:brice@magic-partners.bj'
    },
    {
      name: 'Elvis HESSOU',
      role: 'Directeur Général',
      image: elvisHessouImage,
      linkedin: '#',
      email: 'mailto:elvis@magic-partners.bj'
    },
    {
      name: 'Abib AROUNA',
      role: 'Responsable Branding et Communication',
      image: abibArounaImage,
      linkedin: '#',
      email: 'mailto:abib@magic-partners.bj'
    },
    {
      name: 'Kénia HOUNMENOU',
      role: 'Office Manager',
      image: keniaHounmenouImage,
      linkedin: '#',
      email: 'mailto:keniah@magic-partners.bj'
    },
    {
      name: 'Latré Délali LAWSON',
      role: 'Commerciale B2B',
      image: latreLawsonImage,
      linkedin: '#',
      email: 'mailto:dlawson@magic-partners.bj'
    },
    {
      name: 'Amen TOGBAN',
      role: 'Journaliste Reporter d\'Images',
      image: amenTogbanImage,
      linkedin: '#',
      email: 'mailto:atogban@magic-partners.bj'
    },
    {
      name: 'Freddy AKPO',
      role: 'Journaliste Sportif',
      image: freddyAkpoImage,
      linkedin: '#',
      email: 'mailto:fakpo@magic-partners.bj'
    },
    {
      name: 'Bourgeot ENI',
      role: 'Agent Comptable',
      image: bourgeotEniImage,
      linkedin: '#',
      email: 'mailto:beni@magicpartners.bj'
    }
  ];

  return (
    <section className="py-[80px] md:py-[120px] px-0 md:px-8 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-black mb-12 md:mb-20"
        >
          Notre équipe
        </motion.h2>
      </div>

      {/* Team Container with Horizontal Scroll on Mobile */}
      <div className="px-8 md:px-0">
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible no-scrollbar pb-8 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-0 bg-white rounded-lg overflow-hidden group cursor-pointer transition-all duration-400 hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)] hover:-translate-y-2 snap-center"
            >
              {/* Photo Container */}
              <div className="relative aspect-square overflow-hidden">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover transition-all duration-400 ${
                    hoveredMember === index ? 'grayscale-0 scale-105' : 'grayscale scale-100'
                  }`}
                />
                
                {/* Yellow Overlay */}
                <div 
                  className={`absolute inset-0 bg-[#F8B11C] transition-opacity duration-400 ${
                    hoveredMember === index ? 'opacity-20' : 'opacity-0'
                  }`}
                />
              </div>

              {/* Text Content */}
              <div className="p-6">
                <div className="flex justify-between items-start gap-4 mb-1">
                  <h3 className="text-lg md:text-xl font-semibold text-black leading-tight">
                    {member.name}
                  </h3>
                  
                  {/* Icons Group */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {member.email && (
                      <a
                        href={member.email}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#00703B]/5 text-[#00703B] hover:bg-[#00703B] hover:text-white transition-all duration-300"
                        aria-label={`Email de ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#00703B]/5 text-[#00703B] hover:bg-[#00703B] hover:text-white transition-all duration-300"
                        aria-label={`LinkedIn de ${member.name}`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-sm md:text-base text-[#00703B] font-medium">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}