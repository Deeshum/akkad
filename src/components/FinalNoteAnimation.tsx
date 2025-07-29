import { useEffect, useRef } from 'react';

const FinalNoteAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    container.innerHTML = '';

    // Create pulsing horizontal line
    const line = document.createElement('div');
    line.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50px;
      right: 50px;
      height: 3px;
      background: rgba(233, 95, 50, 0.8);
      transform: translateY(-50%);
      animation: pulseLine 3s ease-in-out infinite;
    `;
    container.appendChild(line);

    // Create fading particles
    for (let i = 0; i < 25; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 3 + 1}px;
        height: ${Math.random() * 3 + 1}px;
        background: rgba(255, 255, 255, ${Math.random() * 0.6 + 0.3});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: fadeParticle ${Math.random() * 4 + 3}s ease-in-out infinite;
        animation-delay: ${Math.random() * 3}s;
      `;
      container.appendChild(particle);
    }

    // Add corner accent lines
    const corners = [
      { position: 'top: 0; left: 0; width: 100px; height: 2px;' },
      { position: 'top: 0; left: 0; width: 2px; height: 100px;' },
      { position: 'top: 0; right: 0; width: 100px; height: 2px;' },
      { position: 'top: 0; right: 0; width: 2px; height: 100px;' },
      { position: 'bottom: 0; left: 0; width: 100px; height: 2px;' },
      { position: 'bottom: 0; left: 0; width: 2px; height: 100px;' },
      { position: 'bottom: 0; right: 0; width: 100px; height: 2px;' },
      { position: 'bottom: 0; right: 0; width: 2px; height: 100px;' }
    ];

    corners.forEach((corner, index) => {
      const accent = document.createElement('div');
      accent.style.cssText = `
        position: absolute;
        ${corner.position}
        background: rgba(233, 95, 50, 0.6);
        animation: fadeInOut 4s ease-in-out infinite;
        animation-delay: ${index * 0.2}s;
      `;
      container.appendChild(accent);
    });

  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    />
  );
};

export default FinalNoteAnimation;