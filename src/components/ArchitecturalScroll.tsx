import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

const scrollItems: ScrollItem[] = [
  {
    id: 1,
    title: "BENDING LIGHT",
    subtitle: "Desert Pavilion Study",
    image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=1200&h=800&fit=crop",
    description: "Where shadow becomes architecture"
  },
  {
    id: 2,
    title: "GEOMETRY OF HEAT",
    subtitle: "Abu Dhabi Cultural Center",
    image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?w=1200&h=800&fit=crop",
    description: "Thermal dynamics in concrete poetry"
  },
  {
    id: 3,
    title: "MODERN RUINS",
    subtitle: "Heritage Reimagined",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&h=800&fit=crop",
    description: "Time suspended in stone and steel"
  },
  {
    id: 4,
    title: "MIRAGE EFFECT",
    subtitle: "Residential Complex",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1200&h=800&fit=crop",
    description: "Reality bends at the horizon"
  },
  {
    id: 5,
    title: "WIND CARVED",
    subtitle: "Desert Architecture",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=1200&h=800&fit=crop",
    description: "Nature as the ultimate architect"
  }
];

const ArchitecturalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !scrollRef.current) return;

    const container = containerRef.current;
    const scrollContainer = scrollRef.current;
    const items = scrollContainer.querySelectorAll('.scroll-item');
    
    let ctx = gsap.context(() => {
      // Create horizontal scroll animation
      const scrollWidth = scrollContainer.scrollWidth - window.innerWidth;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const index = Math.round(progress * (items.length - 1));
            setCurrentIndex(index);
            
            // Update progress bar
            if (progressRef.current) {
              gsap.set(progressRef.current, { scaleX: progress });
            }
          }
        }
      });

      // Horizontal scroll
      tl.to(scrollContainer, {
        x: -scrollWidth,
        ease: "none"
      });

      // Parallax effects for individual items
      items.forEach((item, index) => {
        const image = item.querySelector('.scroll-image');
        const overlay = item.querySelector('.scroll-overlay');
        const caption = item.querySelector('.scroll-caption');

        // Image parallax
        gsap.fromTo(image, 
          { scale: 1.2, x: 100 },
          {
            scale: 1,
            x: 0,
            scrollTrigger: {
              trigger: item,
              start: "left right",
              end: "right left",
              scrub: 1,
              containerAnimation: tl
            }
          }
        );

        // Caption fade-in
        gsap.fromTo(caption,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: item,
              start: "left center",
              end: "center center",
              scrub: 1,
              containerAnimation: tl
            }
          }
        );

        // Shimmer effect on overlay
        gsap.fromTo(overlay,
          { opacity: 0.3, background: "linear-gradient(45deg, transparent 30%, rgba(233, 95, 50, 0.1) 50%, transparent 70%)" },
          {
            opacity: 0.6,
            background: "linear-gradient(45deg, transparent 20%, rgba(233, 95, 50, 0.2) 50%, transparent 80%)",
            scrollTrigger: {
              trigger: item,
              start: "left center",
              end: "right center",
              scrub: 1,
              containerAnimation: tl
            }
          }
        );
      });

      // Create desert wind particle effect
      const particles = container.querySelectorAll('.particle');
      particles.forEach((particle, index) => {
        gsap.to(particle, {
          x: "100vw",
          y: `${Math.random() * 50 - 25}px`,
          opacity: 0,
          duration: 8 + Math.random() * 4,
          delay: index * 0.5,
          repeat: -1,
          ease: "none"
        });
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden bg-[hsl(var(--v4-charcoal))]">
      {/* Desert particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-[hsl(var(--v4-terracotta))]/20 rounded-full"
            style={{
              left: '-10px',
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      {/* Horizontal scroll container */}
      <div 
        ref={scrollRef}
        className="flex h-full items-center"
        style={{ width: `${scrollItems.length * 100}vw` }}
      >
        {scrollItems.map((item, index) => (
          <div
            key={item.id}
            className="scroll-item relative w-screen h-full flex items-center justify-center px-16"
          >
            {/* Background image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="scroll-image w-full h-full object-cover"
              />
              <div className="scroll-overlay absolute inset-0 bg-gradient-to-r from-[hsl(var(--v4-charcoal))]/60 via-transparent to-[hsl(var(--v4-charcoal))]/40" />
              <div className="absolute inset-0 bg-[hsl(var(--v4-charcoal))]/20" />
            </div>

            {/* Content */}
            <div className="scroll-caption relative z-10 text-center max-w-4xl mx-auto">
              <div className="text-[hsl(var(--v4-terracotta))] text-sm font-medium tracking-[0.3em] uppercase mb-4 opacity-80">
                {item.subtitle}
              </div>
              
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none tracking-tight">
                {item.title}
              </h2>
              
              <p className="text-xl md:text-2xl text-white/80 mb-8 font-light italic">
                {item.description}
              </p>

              <div className="flex items-center justify-center space-x-2">
                <div className="w-12 h-px bg-[hsl(var(--v4-terracotta))]" />
                <span className="text-white/60 text-sm font-medium tracking-widest uppercase">
                  {String(index + 1).padStart(2, '0')} / {String(scrollItems.length).padStart(2, '0')}
                </span>
                <div className="w-12 h-px bg-[hsl(var(--v4-terracotta))]" />
              </div>
            </div>

            {/* Hover effects */}
            <div className="absolute inset-0 bg-[hsl(var(--v4-terracotta))]/0 hover:bg-[hsl(var(--v4-terracotta))]/5 transition-all duration-700 cursor-pointer group">
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-16 h-16 border border-white/30 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/10 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-8 right-8 z-20">
        <div className="flex items-center justify-between mb-4">
          <div className="text-white/60 text-sm font-medium tracking-widest uppercase">
            ARCHITECTURAL VISIONS
          </div>
          <div className="text-[hsl(var(--v4-terracotta))] text-sm font-medium tracking-widest uppercase">
            SCROLL TO EXPLORE
          </div>
        </div>
        
        <div className="relative h-px bg-white/20">
          <div 
            ref={progressRef}
            className="absolute left-0 top-0 h-full bg-[hsl(var(--v4-terracotta))] origin-left scale-x-0"
          />
        </div>
      </div>

      {/* Current slide indicator */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-20">
        <div className="flex flex-col space-y-2">
          {scrollItems.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[hsl(var(--v4-terracotta))] scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Ambient gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[hsl(var(--v4-charcoal))]/20 to-[hsl(var(--v4-charcoal))]/60 pointer-events-none" />
    </div>
  );
};

export default ArchitecturalScroll;