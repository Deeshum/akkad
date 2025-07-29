import { useEffect, useRef } from 'react';
import p5 from 'p5';

const HowWeDoAnimation = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const sketch = (p: p5) => {
      let rectangles: Array<{
        size: number;
        maxSize: number;
        opacity: number;
        growing: boolean;
        cornerDots: Array<{ x: number; y: number; opacity: number; phase: number }>;
      }> = [];
      let particles: Array<{
        x: number;
        y: number;
        vx: number;
        vy: number;
        size: number;
        opacity: number;
      }> = [];

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.colorMode(p.RGB);
        p.rectMode(p.CENTER);

        // Create concentric rectangles
        for (let i = 0; i < 5; i++) {
          let maxSize = 100 + i * 80;
          rectangles.push({
            size: 0,
            maxSize: maxSize,
            opacity: 255,
            growing: true,
            cornerDots: []
          });
        }

        // Create diagonal drifting particles
        for (let i = 0; i < 30; i++) {
          particles.push({
            x: p.random(p.width),
            y: p.random(p.height),
            vx: p.random(-0.5, 0.5),
            vy: p.random(-0.5, 0.5),
            size: p.random(1, 3),
            opacity: p.random(20, 60)
          });
        }
      };

      p.draw = () => {
        p.clear(); // Transparent background

        let centerX = p.width / 2;
        let centerY = p.height / 2;

        // Draw concentric rectangles
        for (let i = 0; i < rectangles.length; i++) {
          let rect = rectangles[i];
          
          // Grow rectangles with delay
          if (rect.growing && p.frameCount > i * 30) {
            if (rect.size < rect.maxSize) {
              rect.size += 1.5;
            } else {
              // Start fading
              rect.opacity -= 2;
              if (rect.opacity <= 0) {
                rect.size = 0;
                rect.opacity = 255;
              }
            }
          }

          // Draw rectangle outline
          p.stroke(255, 255, 255, rect.opacity * 0.6);
          p.strokeWeight(1);
          p.noFill();
          p.rect(centerX, centerY, rect.size, rect.size);

          // Add corner dots when rectangle reaches full size
          if (rect.size >= rect.maxSize - 10) {
            let half = rect.size / 2;
            let corners = [
              { x: centerX - half, y: centerY - half },
              { x: centerX + half, y: centerY - half },
              { x: centerX + half, y: centerY + half },
              { x: centerX - half, y: centerY + half }
            ];

            for (let corner of corners) {
              let pulsePhase = p.frameCount * 0.1 + i;
              let dotOpacity = p.map(p.sin(pulsePhase), -1, 1, 50, 200);
              p.fill(233, 95, 50, dotOpacity);
              p.noStroke();
              p.circle(corner.x, corner.y, 6);
            }
          }
        }

        // Draw drifting particles
        for (let particle of particles) {
          p.fill(255, 255, 255, particle.opacity);
          p.noStroke();
          p.circle(particle.x, particle.y, particle.size);

          // Move particles diagonally
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Wrap around screen
          if (particle.x < 0) particle.x = p.width;
          if (particle.x > p.width) particle.x = 0;
          if (particle.y < 0) particle.y = p.height;
          if (particle.y > p.height) particle.y = 0;
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    try {
      p5Instance.current = new p5(sketch, canvasRef.current);
    } catch (error) {
      console.error('Error initializing HowWeDoAnimation:', error);
    }

    return () => {
      if (p5Instance.current) {
        try {
          p5Instance.current.remove();
          p5Instance.current = null;
        } catch (error) {
          console.error('Error removing HowWeDoAnimation instance:', error);
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

export default HowWeDoAnimation;