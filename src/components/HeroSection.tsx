import { useEffect, useState } from 'react';
import SplitText from './SplitText';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onEnterClick: () => void;
}

const HeroSection = ({ onEnterClick }: HeroSectionProps) => {
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    // Show logo after a brief delay
    const timer = setTimeout(() => {
      setLogoVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
      {/* Animated Studio Logo */}
      <div className={`mb-12 transition-all duration-1000 ${logoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <img 
          src="/lovable-uploads/35ae7eeb-a93a-45fb-b51f-5f1c2433c7e8.png" 
          alt="Akkad Logo" 
          className="h-16 object-contain"
        />
      </div>

      {/* Main Headline */}
      <h1 className="text-6xl md:text-8xl lg:text-[110px] font-serif font-bold text-center leading-none mb-8 max-w-6xl">
        <SplitText 
          text="ARCHITECTURAL EXCELLENCE ACROSS CONTINENTS"
          delay={800}
          staggerDelay={30}
        />
      </h1>

      {/* Sub-headline */}
      <p className="text-lg md:text-xl opacity-0 animate-fade-in text-center max-w-2xl mb-16" 
         style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}>
        Leading architectural consultancy bridging Abu Dhabi and Baghdad, 
        creating innovative designs that honor regional heritage while embracing modern excellence.
      </p>

      {/* Enter Button */}
      <button
        onClick={onEnterClick}
        className="interactive group flex flex-col items-center opacity-0 animate-fade-in hover:text-accent transition-colors duration-300"
        style={{ animationDelay: '2.2s', animationFillMode: 'forwards' }}
        aria-label="Enter and view projects"
      >
        <span className="text-sm font-sans tracking-widest mb-4 uppercase">Enter</span>
        <ChevronDown className="w-8 h-8 arrow-wiggle group-hover:text-accent" />
      </button>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;