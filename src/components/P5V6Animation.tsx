import { useEffect, useRef } from 'react';
import p5 from 'p5';

const P5V6Animation = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      let particles: Array<{
        x: number;
        y: number;
        z: number;
        size: number;
        speed: number;
      }> = [];
      let angle = 0;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        p.colorMode(p.RGB);
        p.noStroke();

        // Create floating particles for architectural ambiance
        for (let i = 0; i < 300; i++) {
          particles.push({
            x: p.random(-1000, 1000),
            y: p.random(-600, 600),
            z: p.random(-1000, 1000),
            size: p.random(2, 8),
            speed: p.random(0.5, 2)
          });
        }
      };

      p.draw = () => {
        p.background(245, 245, 245); // Light Gray
        
        p.rotateY(p.radians(angle));
        p.rotateX(p.radians(angle * 0.3));

        // Architectural grid (white lines)
        p.push();
        p.stroke(45, 45, 45); // Dark Gray
        p.strokeWeight(0.8);
        for (let x = -500; x <= 500; x += 50) {
          for (let z = -500; z <= 500; z += 50) {
            p.line(x, 0, z, x, -200, z); // Vertical architectural lines
          }
        }
        p.pop();

        // Rotating skyline-like frames
        p.push();
        p.stroke(30, 30, 30); // Very Dark Gray
        p.strokeWeight(1.5);
        p.noFill();
        for (let i = 0; i < 10; i++) {
          p.rotateY(p.radians(p.frameCount * 0.02 + i));
          p.box(400 - i * 30, 200 + i * 20, 400 - i * 30);
        }
        p.pop();

        // Floating particles (Terracotta Orange)
        p.noStroke();
        for (let particle of particles) {
          p.fill(233, 95, 50); // Terracotta Orange
          p.push();
          p.translate(particle.x, particle.y, particle.z);
          p.sphere(particle.size);
          p.pop();

          // Move particles forward
          particle.z += particle.speed;
          if (particle.z > 500) {
            particle.z = -1000;
            particle.x = p.random(-1000, 1000);
            particle.y = p.random(-600, 600);
          }
        }

        // Subtle rotation for camera
        angle += 0.2;
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

export default P5V6Animation;