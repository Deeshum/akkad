import { useEffect, useRef } from 'react';
import p5 from 'p5';

const P5V6Frame2 = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      let dots: Array<{
        x: number;
        y: number;
        size: number;
        speed: number;
      }> = [];

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.angleMode(p.DEGREES);
        p.noStroke();

        // Floating white city-light dots
        for (let i = 0; i < 80; i++) {
          dots.push({
            x: p.random(p.width),
            y: p.random(p.height),
            size: p.random(2, 5),
            speed: p.random(0.2, 0.7)
          });
        }
      };

      p.draw = () => {
        p.background(38, 40, 45); // Charcoal Gray

        // Floating dots for subtle motion
        p.fill(255);
        for (let d of dots) {
          p.circle(d.x, d.y, d.size);
          d.y += d.speed;
          if (d.y > p.height) {
            d.y = 0;
            d.x = p.random(p.width);
          }
        }

        // Translate to center for sun/moon geometric animation
        p.translate(p.width / 2, p.height / 2);

        // Rotate with mouse for interactivity
        p.rotate(p.frameCount * 0.2 + p.map(p.mouseX, 0, p.width, -15, 15));

        // Radiating Terracotta lines (architectural feel)
        p.stroke(233, 95, 50); // Terracotta Orange
        p.strokeWeight(2);
        for (let i = 0; i < 36; i++) {
          let angle = i * 10;
          let x = p.cos(angle) * 150;
          let y = p.sin(angle) * 150;
          p.line(0, 0, x, y);
        }

        // Inner white circle (modern core / city center)
        p.noStroke();
        p.fill(255);
        p.circle(0, 0, 60);

        // Rotating terracotta circle around
        p.fill(233, 95, 50);
        let orbitX = p.cos(p.frameCount * 2) * 200;
        let orbitY = p.sin(p.frameCount * 2) * 200;
        p.circle(orbitX, orbitY, 40);
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

export default P5V6Frame2;