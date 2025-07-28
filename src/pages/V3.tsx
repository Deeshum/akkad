import { useState, useRef } from 'react';
import P5Background from '@/components/P5Background';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PortfolioSlideshow from '@/components/PortfolioSlideshow';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const V3 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const portfolioRef = useRef<HTMLDivElement>(null);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  const handleEnterClick = () => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (isLoading) {
    return <P5Background isPreloader={true} onPreloaderComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-white text-charcoal relative">
      {/* Background Animation */}
      <P5Background />
      
      {/* Site Content */}
      <div className="relative z-10">
        <CustomCursor />
        <Header />
        
        <main>
          <HeroSection onEnterClick={handleEnterClick} />
          
          <div ref={portfolioRef}>
            <PortfolioSlideshow />
          </div>
          
          <ContactForm />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default V3;