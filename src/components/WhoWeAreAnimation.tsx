import React from 'react';
import glassBuilding from '@/assets/glass-building-interior.jpg';

const WhoWeAreAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Immersive architectural background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${glassBuilding})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      >
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#26282D]/60 via-transparent to-[#26282D]/60"></div>
      </div>
    </div>
  );
};

export default WhoWeAreAnimation;