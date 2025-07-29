import React from 'react';
import modernArchitecture from '@/assets/modern-architecture.jpg';

const WhatWeDoAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Immersive architectural background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage: `url(${modernArchitecture})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      >
        {/* Gradient overlay for better text readability on white background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40"></div>
      </div>
    </div>
  );
};

export default WhatWeDoAnimation;