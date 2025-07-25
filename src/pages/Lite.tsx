import { useState, useRef } from 'react';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PortfolioSlideshow from '@/components/PortfolioSlideshow';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Lite = () => {
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
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-white text-black">
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
  );
};

export default Lite;