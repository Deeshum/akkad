import { useEffect, useRef } from 'react';
import p5 from 'p5';

const P5V6Frame6 = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      let lineAlpha = 255;
      let textScale = 0;
      let textAlpha = 0;
      let particles: Array<{
        x: number;
        y: number;
        speed: number;
        size: number;
        alpha: number;
      }> = [];

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.colorMode(p.RGB);
        p.textAlign(p.CENTER, p.CENTER);

        // Create fading particles
        for (let i = 0; i < 40; i++) {
          particles.push({
            x: p.random(p.width),
            y: p.random(p.height),
            speed: p.random(0.2, 0.5),
            size: p.random(2, 4),
            alpha: p.random(100, 200)
          });
        }
      };

      p.draw = () => {
        p.background(38, 40, 45); // Charcoal Gray

        // Update and draw fading particles
        for (let particle of particles) {
          p.fill(255, particle.alpha);
          p.noStroke();
          p.circle(particle.x, particle.y, particle.size);
          
          particle.y += particle.speed;
          particle.alpha -= 0.5; // Gradually fade out
          
          if (particle.y > p.height || particle.alpha <= 0) {
            particle.y = 0;
            particle.x = p.random(p.width);
            particle.alpha = p.random(100, 200);
          }
        }

        // Pulsing horizontal line
        let pulseIntensity = p.sin(p.frameCount * 0.02) * 0.3 + 0.7;
        p.stroke(233, 95, 50, lineAlpha * pulseIntensity); // Terracotta Orange with pulse
        p.strokeWeight(3);
        p.line(p.width * 0.1, p.height / 2, p.width * 0.9, p.height / 2);

        // Animated text scaling and fading in
        if (textScale < 1) {
          textScale += 0.01;
        }
        if (textAlpha < 255) {
          textAlpha += 2;
        }

        // Final tagline text
        p.push();
        p.translate(p.width / 2, p.height / 2 + 60);
        p.scale(textScale);
        p.fill(255, textAlpha); // White
        p.textSize(36);
        p.noStroke();
        p.text("Built to Inspire.", 0, -20);
        
        p.fill(233, 95, 50, textAlpha); // Terracotta Orange
        p.textSize(24);
        p.text("Designed to Perform.", 0, 20);
        p.pop();
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

export default P5V6Frame6;