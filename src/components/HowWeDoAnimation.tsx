import { useEffect, useRef } from 'react';

const HowWeDoAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    container.innerHTML = '';

    // Create concentric rectangles
    for (let i = 0; i < 4; i++) {
      const rect = document.createElement('div');
      const size = 100 + i * 60;
      
      rect.className = 'concentric-rect';
      rect.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border: 1px solid rgba(255, 255, 255, 0.6);
        background: transparent;
        transform: translate(-50%, -50%);
        animation: expandRect 4s ease-out infinite;
        animation-delay: ${i * 0.5}s;
      `;
      rect.style.setProperty('--target-size', `${size}px`);
      container.appendChild(rect);

      // Add corner dots that appear when rectangle is fully expanded
      setTimeout(() => {
        const corners = [
          { x: `calc(50% - ${size/2}px)`, y: `calc(50% - ${size/2}px)` },
          { x: `calc(50% + ${size/2}px)`, y: `calc(50% - ${size/2}px)` },
          { x: `calc(50% + ${size/2}px)`, y: `calc(50% + ${size/2}px)` },
          { x: `calc(50% - ${size/2}px)`, y: `calc(50% + ${size/2}px)` }
        ];

        corners.forEach((corner, index) => {
          const dot = document.createElement('div');
          dot.style.cssText = `
            position: absolute;
            width: 6px;
            height: 6px;
            background: rgba(233, 95, 50, 0.8);
            border-radius: 50%;
            left: ${corner.x};
            top: ${corner.y};
            transform: translate(-50%, -50%);
            animation: pulseDot 2s ease-in-out infinite;
            animation-delay: ${index * 0.2}s;
          `;
          container.appendChild(dot);
        });
      }, (i * 0.5 + 2) * 1000);
    }

    // Add diagonal drifting particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 2 + 1}px;
        height: ${Math.random() * 2 + 1}px;
        background: rgba(255, 255, 255, ${Math.random() * 0.4 + 0.2});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: driftDiagonal ${Math.random() * 15 + 10}s linear infinite;
        animation-delay: ${Math.random() * 5}s;
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

export default HowWeDoAnimation;