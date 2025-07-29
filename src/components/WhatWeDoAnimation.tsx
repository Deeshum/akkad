import { useEffect, useRef } from 'react';
import p5 from 'p5';

const WhatWeDoAnimation = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const sketch = (p: p5) => {
      let pillars: Array<{
        x: number;
        targetHeight: number;
        currentHeight: number;
        growing: boolean;
        pulsePhase: number;
      }> = [];

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.colorMode(p.RGB);

        // Create pillars for skyline effect
        for (let i = 0; i < 12; i++) {
          pillars.push({
            x: (p.width / 13) * (i + 1),
            targetHeight: p.random(100, 300),
            currentHeight: 0,
            growing: true,
            pulsePhase: p.random(0, p.TWO_PI)
          });
        }
      };

      p.draw = () => {
        p.clear(); // Transparent background

        // Draw growing pillars
        for (let pillar of pillars) {
          // Grow pillars
          if (pillar.growing && pillar.currentHeight < pillar.targetHeight) {
            pillar.currentHeight += 2;
          }

          // Main pillar body
          p.fill(255, 255, 255, 40);
          p.noStroke();
          p.rect(pillar.x - 15, p.height - pillar.currentHeight, 30, pillar.currentHeight);

          // Terracotta edge highlight with pulse effect
          if (pillar.currentHeight >= pillar.targetHeight) {
            pillar.pulsePhase += 0.05;
            let pulseAlpha = p.map(p.sin(pillar.pulsePhase), -1, 1, 50, 150);
            p.fill(233, 95, 50, pulseAlpha);
            p.rect(pillar.x + 12, p.height - pillar.currentHeight, 3, pillar.currentHeight);
          }
        }

        // Subtle background particles
        p.fill(255, 255, 255, 30);
        for (let i = 0; i < 20; i++) {
          let x = p.random(p.width);
          let y = p.random(p.height);
          p.circle(x, y, 2);
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    try {
      p5Instance.current = new p5(sketch, canvasRef.current);
    } catch (error) {
      console.error('Error initializing WhatWeDoAnimation:', error);
    }

    return () => {
      if (p5Instance.current) {
        try {
          p5Instance.current.remove();
          p5Instance.current = null;
        } catch (error) {
          console.error('Error removing WhatWeDoAnimation instance:', error);
        }
      }
    };
  }, []);

  return (
    <div 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default WhatWeDoAnimation;