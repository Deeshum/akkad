import { useEffect, useRef } from 'react';
import p5 from 'p5';

const WhoWeAreAnimation = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const sketch = (p: p5) => {
      let particles: Array<{
        x: number;
        y: number;
        size: number;
        speed: number;
        opacity: number;
      }> = [];

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.colorMode(p.RGB);

        // Create subtle floating particles
        for (let i = 0; i < 50; i++) {
          particles.push({
            x: p.random(p.width),
            y: p.random(p.height),
            size: p.random(1, 3),
            speed: p.random(0.1, 0.3),
            opacity: p.random(30, 80)
          });
        }
      };

      p.draw = () => {
        p.clear(); // Transparent background
        
        // Floating white particles for subtle movement
        p.noStroke();
        for (let particle of particles) {
          p.fill(255, 255, 255, particle.opacity);
          p.circle(particle.x, particle.y, particle.size);
          
          // Move particles slowly upward
          particle.y -= particle.speed;
          if (particle.y < 0) {
            particle.y = p.height;
            particle.x = p.random(p.width);
          }
        }

        // Subtle geometric grid overlay
        p.stroke(255, 255, 255, 20);
        p.strokeWeight(0.5);
        for (let x = 0; x < p.width; x += 100) {
          p.line(x, 0, x, p.height);
        }
        for (let y = 0; y < p.height; y += 100) {
          p.line(0, y, p.width, y);
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    try {
      p5Instance.current = new p5(sketch, canvasRef.current);
    } catch (error) {
      console.error('Error initializing WhoWeAreAnimation:', error);
    }

    return () => {
      if (p5Instance.current) {
        try {
          p5Instance.current.remove();
          p5Instance.current = null;
        } catch (error) {
          console.error('Error removing WhoWeAreAnimation instance:', error);
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

export default WhoWeAreAnimation;