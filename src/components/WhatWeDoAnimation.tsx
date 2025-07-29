import { useEffect, useRef } from 'react';

const WhatWeDoAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    container.innerHTML = '';

    // Create rising pillars
    for (let i = 0; i < 8; i++) {
      const pillar = document.createElement('div');
      const height = Math.random() * 200 + 100;
      
      pillar.className = 'rising-pillar';
      pillar.style.cssText = `
        position: absolute;
        bottom: 0;
        left: ${(i + 1) * 12}%;
        width: 20px;
        height: 0;
        background: rgba(255, 255, 255, 0.3);
        border-right: 2px solid rgba(233, 95, 50, 0.8);
        animation: growPillar 3s ease-out forwards;
        animation-delay: ${i * 0.3}s;
      `;
      
      pillar.style.setProperty('--target-height', `${height}px`);
      container.appendChild(pillar);

      // Add terracotta highlight that pulses after pillar grows
      const highlight = document.createElement('div');
      highlight.className = 'pillar-highlight';
      highlight.style.cssText = `
        position: absolute;
        bottom: 0;
        left: ${(i + 1) * 12 + 2}%;
        width: 3px;
        height: 0;
        background: rgba(233, 95, 50, 0.9);
        animation: growPillar 3s ease-out forwards, pulseTerracotta 2s ease-in-out infinite;
        animation-delay: ${i * 0.3}s, ${i * 0.3 + 3}s;
      `;
      highlight.style.setProperty('--target-height', `${height}px`);
      container.appendChild(highlight);
    }

    // Add subtle background particles
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(233, 95, 50, 0.4);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: twinkle 3s ease-in-out infinite;
        animation-delay: ${Math.random() * 3}s;
      `;
      container.appendChild(particle);
    }

  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    />
  );
};

export default WhatWeDoAnimation;