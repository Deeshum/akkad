import { useEffect, useRef } from 'react';

const WhoWeAreAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create floating particles using CSS
    const container = containerRef.current;
    
    // Clear any existing particles
    container.innerHTML = '';
    
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 3 + 1}px;
        height: ${Math.random() * 3 + 1}px;
        background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: floatUp ${Math.random() * 10 + 5}s linear infinite;
        animation-delay: ${Math.random() * 5}s;
      `;
      container.appendChild(particle);
    }

    // Create grid lines
    for (let i = 0; i < 5; i++) {
      const line = document.createElement('div');
      line.className = 'grid-line-vertical';
      line.style.cssText = `
        position: absolute;
        width: 1px;
        height: 100%;
        background: rgba(255, 255, 255, 0.1);
        left: ${(i + 1) * 20}%;
        top: 0;
        animation: fadeInOut 4s ease-in-out infinite;
        animation-delay: ${i * 0.5}s;
      `;
      container.appendChild(line);
    }

    for (let i = 0; i < 3; i++) {
      const line = document.createElement('div');
      line.className = 'grid-line-horizontal';
      line.style.cssText = `
        position: absolute;
        width: 100%;
        height: 1px;
        background: rgba(255, 255, 255, 0.1);
        left: 0;
        top: ${(i + 1) * 25}%;
        animation: fadeInOut 4s ease-in-out infinite;
        animation-delay: ${i * 0.7}s;
      `;
      container.appendChild(line);
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

export default WhoWeAreAnimation;