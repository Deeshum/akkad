import { useEffect, useRef } from 'react';
import p5 from 'p5';

const P5V6Animation = () => {
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
      let rotationAngle = 0;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.angleMode(p.DEGREES);
        p.textAlign(p.CENTER, p.CENTER);
        p.noStroke();

        // Floating white city-light dots
        for (let i = 0; i < 80; i++) {
          dots.push({
            x: p.random(p.width),
            y: p.random(p.height),
            size: p.random(2, 5),
            speed: p.random(0.2, 0.6)
          });
        }
      };

      p.draw = () => {
        p.background(38, 40, 45); // Charcoal Gray

        // Floating white dots (stars/city lights)
        p.fill(255);
        for (let d of dots) {
          p.circle(d.x, d.y, d.size);
          d.y += d.speed;
          if (d.y > p.height) {
            d.y = 0;
            d.x = p.random(p.width);
          }
        }

        // Move origin to center for the geometric sun/moon animation
        p.translate(p.width / 2, p.height / 2);

        // Rotate whole geometry
        rotationAngle += 0.2;
        p.rotate(rotationAngle);

        // Radiating Terracotta Orange lines
        p.stroke(233, 95, 50); // Terracotta Orange
        p.strokeWeight(2);
        for (let i = 0; i < 36; i++) {
          let angle = i * 10;
          let x = p.cos(angle) * 180;
          let y = p.sin(angle) * 180;
          p.line(0, 0, x, y);
        }

        // Inner White Circle (modern city core)
        p.noStroke();
        p.fill(255);
        p.circle(0, 0, 70);

        // Orbiting Terracotta Circle (symbolic desert sun)
        p.fill(233, 95, 50);
        let orbitX = p.cos(p.frameCount * 2) * 220;
        let orbitY = p.sin(p.frameCount * 2) * 220;
        p.circle(orbitX, orbitY, 40);

        // --------- TEXT CONTENT INTEGRATION ---------
        p.rotate(-rotationAngle); // Counter-rotate text to keep it upright

        p.fill(255); // White for main heading
        p.textSize(48);
        p.text("AKKAD DESIGN", 0, -40);

        p.fill(233, 95, 50); // Terracotta Orange for tagline
        p.textSize(24);
        p.text("Value in Vision. Designing Abu Dhabi's Skyline", 0, 20);
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