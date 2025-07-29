import { useEffect, useRef } from 'react';
import p5 from 'p5';

const P5V6Frame3 = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      let pillars: Array<{
        x: number;
        targetHeight: number;
        currentHeight: number;
        highlighted: boolean;
        highlightTimer: number;
      }> = [];

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.colorMode(p.RGB);
        
        // Create 5 pillars for services
        for (let i = 0; i < 5; i++) {
          pillars.push({
            x: p.width * 0.2 + (i * p.width * 0.15),
            targetHeight: p.random(p.height * 0.3, p.height * 0.7),
            currentHeight: 0,
            highlighted: false,
            highlightTimer: 0
          });
        }
      };

      p.draw = () => {
        p.background(38, 40, 45); // Charcoal Gray

        // Update and draw pillars
        for (let i = 0; i < pillars.length; i++) {
          let pillar = pillars[i];
          
          // Grow pillar smoothly
          if (pillar.currentHeight < pillar.targetHeight) {
            pillar.currentHeight += 2;
          }
          
          // Trigger highlight when pillar reaches peak
          if (pillar.currentHeight >= pillar.targetHeight && !pillar.highlighted) {
            pillar.highlighted = true;
            pillar.highlightTimer = 60; // 1 second at 60fps
          }
          
          // Draw pillar
          p.fill(255); // White
          p.noStroke();
          p.rect(pillar.x - 20, p.height - pillar.currentHeight, 40, pillar.currentHeight);
          
          // Draw terracotta highlight edge
          if (pillar.highlightTimer > 0) {
            p.stroke(233, 95, 50); // Terracotta Orange
            p.strokeWeight(3);
            p.line(pillar.x + 20, p.height - pillar.currentHeight, 
                   pillar.x + 20, p.height);
            pillar.highlightTimer--;
          }
        }

        // Service text (fades in with pillar growth)
        p.fill(255); // White
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(16);
        p.noStroke();
        
        const services = [
          "Architecture",
          "Design", 
          "Development",
          "ROI Consulting",
          "Custom Solutions"
        ];
        
        for (let i = 0; i < pillars.length; i++) {
          if (pillars[i].currentHeight > pillars[i].targetHeight * 0.5) {
            let alpha = p.map(pillars[i].currentHeight, pillars[i].targetHeight * 0.5, pillars[i].targetHeight, 0, 255);
            p.fill(255, alpha);
            p.text(services[i], pillars[i].x, p.height - pillars[i].targetHeight - 30);
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

export default P5V6Frame3;