import React from 'react';

const WhoWeAreAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="float-slow absolute top-1/4 left-1/4 w-4 h-4 bg-[#E95F32]/20 transform rotate-45"></div>
      <div className="float-medium absolute top-1/3 right-1/4 w-3 h-3 bg-white/10 rounded-full"></div>
      <div className="float-fast absolute bottom-1/3 left-1/3 w-2 h-8 bg-[#E95F32]/15"></div>
      <div className="float-slow absolute bottom-1/4 right-1/3 w-6 h-1 bg-white/20"></div>
      <div className="float-medium absolute top-1/2 left-1/6 w-1 h-12 bg-[#E95F32]/25"></div>
      <div className="float-fast absolute top-3/4 right-1/6 w-5 h-5 border border-white/15 transform rotate-12"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{
             backgroundImage: `
               linear-gradient(to right, #E95F32 1px, transparent 1px),
               linear-gradient(to bottom, #E95F32 1px, transparent 1px)
             `,
             backgroundSize: '40px 40px'
           }}>
      </div>
    </div>
  );
};

export default WhoWeAreAnimation;