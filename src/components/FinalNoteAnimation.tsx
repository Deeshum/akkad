import { useEffect, useRef } from 'react';
import p5 from 'p5';

const FinalNoteAnimation = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const sketch = (p: p5) => {
      let pulsePhase = 0;
      let particles: Array<{
        x: number;
        y: number;
        size: number;
        opacity: number;
        fadeRate: number;
      }> = [];

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.colorMode(p.RGB);

        // Create particles that will fade out
        for (let i = 0; i < 40; i++) {
          particles.push({
            x: p.random(p.width),
            y: p.random(p.height),
            size: p.random(1, 4),
            opacity: p.random(50, 150),
            fadeRate: p.random(0.2, 0.8)
          });
        }
      };

      p.draw = () => {
        p.clear(); // Transparent background

        // Draw pulsing horizontal line
        pulsePhase += 0.05;
        let lineOpacity = p.map(p.sin(pulsePhase), -1, 1, 80, 200);
        
        p.stroke(233, 95, 50, lineOpacity);
        p.strokeWeight(3);
        let lineY = p.height / 2;
        p.line(50, lineY, p.width - 50, lineY);

        // Draw fading particles
        p.noStroke();
        for (let particle of particles) {
          p.fill(255, 255, 255, particle.opacity);
          p.circle(particle.x, particle.y, particle.size);

          // Fade out particles gradually
          particle.opacity -= particle.fadeRate;
          if (particle.opacity <= 0) {
            particle.opacity = p.random(50, 150);
            particle.x = p.random(p.width);
            particle.y = p.random(p.height);
          }
        }

        // Add subtle corner accent lines
        p.stroke(233, 95, 50, 60);
        p.strokeWeight(2);
        p.line(0, 0, 100, 0);
        p.line(0, 0, 0, 100);
        p.line(p.width, 0, p.width - 100, 0);
        p.line(p.width, 0, p.width, 100);
        p.line(0, p.height, 100, p.height);
        p.line(0, p.height, 0, p.height - 100);
        p.line(p.width, p.height, p.width - 100, p.height);
        p.line(p.width, p.height, p.width, p.height - 100);
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    try {
      p5Instance.current = new p5(sketch, canvasRef.current);
    } catch (error) {
      console.error('Error initializing FinalNoteAnimation:', error);
    }

    return () => {
      if (p5Instance.current) {
        try {
          p5Instance.current.remove();
          p5Instance.current = null;
        } catch (error) {
          console.error('Error removing FinalNoteAnimation instance:', error);
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

export default FinalNoteAnimation;