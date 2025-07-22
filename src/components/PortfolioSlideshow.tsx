import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import portfolio images
import portfolio01 from '@/assets/portfolio-01.jpg';
import portfolio02 from '@/assets/portfolio-02.jpg';
import portfolio03 from '@/assets/portfolio-03.jpg';
import portfolio04 from '@/assets/portfolio-04.jpg';
import portfolio05 from '@/assets/portfolio-05.jpg';
import portfolio06 from '@/assets/portfolio-06.jpg';

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  { id: 1, title: 'Al Sahra Tower', image: portfolio01, description: 'Mixed-Use Development' },
  { id: 2, title: 'Heritage Cultural Center', image: portfolio02, description: 'Cultural Architecture' },
  { id: 3, title: 'Eco Oasis Residences', image: portfolio03, description: 'Sustainable Housing' },
  { id: 4, title: 'Desert Bloom Villas', image: portfolio04, description: 'Luxury Residential' },
  { id: 5, title: 'Innovation Hub', image: portfolio05, description: 'Commercial Complex' },
  { id: 6, title: 'Waterfront Promenade', image: portfolio06, description: 'Urban Planning' },
];

const PortfolioSlideshow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !slidesRef.current) return;

    const slides = slidesRef.current;
    const slideWidth = window.innerWidth;
    const totalWidth = slideWidth * portfolioItems.length;

    // Set up horizontal scroll
    gsap.set(slides, { width: totalWidth });

    // Create scroll trigger for horizontal movement
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: `+=${totalWidth - slideWidth}`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const xPos = -progress * (totalWidth - slideWidth);
        gsap.set(slides, { x: xPos });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden" id="work">
      <div 
        ref={slidesRef}
        className="flex h-screen"
        style={{ width: `${portfolioItems.length * 100}vw` }}
      >
        {portfolioItems.map((item, index) => (
          <div
            key={item.id}
            className="portfolio-slide relative w-screen h-screen flex-shrink-0 interactive"
            data-index={index}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 hover:bg-black/60 transition-all duration-500" />
            
            {/* Content */}
            <div className="absolute bottom-12 left-12 z-10">
              <h3 className="text-5xl md:text-6xl font-sans font-bold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-xl text-white/80 font-sans">
                {item.description}
              </p>
            </div>

            {/* Project Number */}
            <div className="absolute top-12 right-12 z-10">
              <span className="text-white/60 font-sans text-sm tracking-widest">
                {String(index + 1).padStart(2, '0')} / {String(portfolioItems.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-4 text-white/60 text-sm font-sans">
          <span>Scroll to explore</span>
          <div className="w-8 h-0.5 bg-white/60" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSlideshow;