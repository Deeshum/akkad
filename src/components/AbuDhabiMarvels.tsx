import { useEffect, useRef } from 'react';
import sheikhZayedMosque from '@/assets/sheikh-zayed-mosque.jpg';
import louvreAbuDhabi from '@/assets/louvre-abu-dhabi.jpg';
import emiratesPalace from '@/assets/emirates-palace.jpg';
import etihadTowers from '@/assets/etihad-towers.jpg';
import aldarHeadquarters from '@/assets/aldar-headquarters.jpg';

const AbuDhabiMarvels = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const marvels = [
    {
      title: "Sheikh Zayed Grand Mosque",
      description: "Architectural masterpiece blending Islamic design with modern engineering",
      year: "2007",
      architect: "Yousef Abdelky",
      feature: "World's largest hand-knotted carpet",
      image: sheikhZayedMosque
    },
    {
      title: "Louvre Abu Dhabi",
      description: "Floating dome creating rain of light through geometric perforations",
      year: "2017", 
      architect: "Jean Nouvel",
      feature: "557-meter diameter dome",
      image: louvreAbuDhabi
    },
    {
      title: "Emirates Palace",
      description: "Palatial luxury hotel with golden domes and Arabian grandeur",
      year: "2005",
      architect: "John Elliott RIBA",
      feature: "114 domes covered in gold",
      image: emiratesPalace
    },
    {
      title: "Etihad Towers",
      description: "Five towers of varying heights creating dynamic skyline composition",
      year: "2011",
      architect: "DBI Design",
      feature: "300-meter tallest tower",
      image: etihadTowers
    },
    {
      title: "Aldar Headquarters",
      description: "Circular skyscraper - world's first circular building of its kind",
      year: "2010",
      architect: "MZ Architects",
      feature: "Completely circular design",
      image: aldarHeadquarters
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.marvel-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-light tracking-wider text-[#E95F32] mb-4">
            ABU DHABI
          </h2>
          <p className="text-xl md:text-2xl font-light text-[#E95F32]/70 tracking-wide">
            Architectural Marvels of the Capital
          </p>
          <div className="w-24 h-1 bg-[#E95F32] mx-auto mt-8"></div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-8 px-8 overflow-x-auto scrollbar-hide pb-8"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {marvels.map((marvel, index) => (
          <div
            key={index}
            className="marvel-card flex-shrink-0 w-80 md:w-96 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 opacity-0"
            style={{ scrollSnapAlign: 'center' }}
          >
            {/* Actual Image */}
            <div className="h-64 relative overflow-hidden rounded-t-lg">
              <img 
                src={marvel.image} 
                alt={marvel.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-[#E95F32]">
                {marvel.year}
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-xl font-bold mb-1 leading-tight">
                  {marvel.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {marvel.architect}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-700 mb-4 leading-relaxed">
                {marvel.description}
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#E95F32] uppercase tracking-wide">
                    Key Feature
                  </span>
                  <span className="text-sm text-gray-600">
                    {marvel.feature}
                  </span>
                </div>
              </div>

              {/* Hover Animation Element */}
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-[#E95F32] to-[#E95F32]/40 transition-all duration-500 group-hover:w-full"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-8 gap-2">
        {marvels.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-[#E95F32]/30 hover:bg-[#E95F32] transition-colors duration-300 cursor-pointer"
            onClick={() => {
              const card = document.querySelectorAll('.marvel-card')[index];
              card?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
            }}
          ></div>
        ))}
      </div>

      {/* Background Geometric Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-[#E95F32]/20 rotate-45 opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-[#E95F32]/20 rotate-12 opacity-20"></div>
    </section>
  );
};

export default AbuDhabiMarvels;