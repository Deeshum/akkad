import { useEffect, useRef } from 'react';
import p5 from 'p5';

const P5V6Frame4 = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      let rectangles: Array<{
        size: number;
        maxSize: number;
        alpha: number;
        growing: boolean;
      }> = [];
      let particles: Array<{
        x: number;
        y: number;
        speed: number;
        size: number;
      }> = [];

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.colorMode(p.RGB);
        p.rectMode(p.CENTER);

        // Create concentric rectangles
        for (let i = 0; i < 6; i++) {
          rectangles.push({
            size: 0,
            maxSize: 100 + (i * 80),
            alpha: 255,
            growing: true
          });
        }

        // Create background particles
        for (let i = 0; i < 30; i++) {
          particles.push({
            x: p.random(p.width),
            y: p.random(p.height),
            speed: p.random(0.3, 0.8),
            size: p.random(2, 4)
          });
        }
      };

      p.draw = () => {
        p.background(38, 40, 45); // Charcoal Gray

        // Draw and update background particles
        p.fill(255, 100); // Semi-transparent white
        p.noStroke();
        for (let particle of particles) {
          p.circle(particle.x, particle.y, particle.size);
          particle.y += particle.speed;
          if (particle.y > p.height) {
            particle.y = 0;
            particle.x = p.random(p.width);
          }
        }

        // Draw concentric rectangles
        p.translate(p.width / 2, p.height / 2);
        
        for (let i = 0; i < rectangles.length; i++) {
          let rect = rectangles[i];
          
          // Update rectangle animation
          if (rect.growing && rect.size < rect.maxSize) {
            rect.size += 1.5;
          } else if (rect.size >= rect.maxSize) {
            rect.growing = false;
            rect.alpha -= 2;
            if (rect.alpha <= 0) {
              rect.size = 0;
              rect.alpha = 255;
              rect.growing = true;
            }
          }

          // Draw rectangle outline
          p.stroke(255, rect.alpha);
          p.strokeWeight(1);
          p.noFill();
          p.rect(0, 0, rect.size, rect.size);

          // Draw terracotta corner dots
          if (rect.size > rect.maxSize * 0.8) {
            p.fill(233, 95, 50, rect.alpha * 0.8); // Terracotta Orange
            p.noStroke();
            let half = rect.size / 2;
            p.circle(-half, -half, 6);
            p.circle(half, -half, 6);
            p.circle(half, half, 6);
            p.circle(-half, half, 6);
          }
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    if (canvasRef.current) {
      p5Instance.current = new p5(sketch, canvasRef.current);
    }

    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
      }
    };
  }, []);

  return (
    <div 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
};

export default P5V6Frame4;