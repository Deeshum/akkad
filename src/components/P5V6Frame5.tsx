import { useEffect, useRef } from 'react';
import p5 from 'p5';

const P5V6Frame5 = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      let imageFrames: Array<{
        x: number;
        targetX: number;
        width: number;
        height: number;
        revealed: boolean;
        underlineWidth: number;
        targetUnderlineWidth: number;
      }> = [];
      let diagonalParticles: Array<{
        x: number;
        y: number;
        speedX: number;
        speedY: number;
        size: number;
        alpha: number;
      }> = [];

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.colorMode(p.RGB);

        // Create image frames
        for (let i = 0; i < 4; i++) {
          imageFrames.push({
            x: -300,
            targetX: 50 + (i * 280),
            width: 250,
            height: 180,
            revealed: false,
            underlineWidth: 0,
            targetUnderlineWidth: 200
          });
        }

        // Create diagonal particles
        for (let i = 0; i < 20; i++) {
          diagonalParticles.push({
            x: p.random(-100, p.width),
            y: p.random(-100, p.height),
            speedX: p.random(0.3, 0.8),
            speedY: p.random(-0.5, -0.2),
            size: p.random(2, 5),
            alpha: p.random(50, 150)
          });
        }
      };

      p.draw = () => {
        p.background(38, 40, 45); // Charcoal Gray

        // Update and draw diagonal particles
        p.fill(255, 80); // Low opacity white
        p.noStroke();
        for (let particle of diagonalParticles) {
          p.fill(255, particle.alpha);
          p.circle(particle.x, particle.y, particle.size);
          
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          // Reset particle when it goes off screen
          if (particle.x > p.width + 50 || particle.y < -50) {
            particle.x = p.random(-100, 0);
            particle.y = p.random(p.height, p.height + 100);
          }
        }

        // Update and draw image frames
        for (let i = 0; i < imageFrames.length; i++) {
          let frame = imageFrames[i];
          
          // Slide in animation with delay
          let startTime = i * 30; // Stagger the animations
          if (p.frameCount > startTime && frame.x < frame.targetX) {
            frame.x += 4;
            if (frame.x >= frame.targetX) {
              frame.x = frame.targetX;
              frame.revealed = true;
            }
          }

          // Draw image frame placeholder
          if (frame.x > -frame.width) {
            p.fill(60, 62, 67); // Slightly lighter than background
            p.stroke(255, 100);
            p.strokeWeight(1);
            p.rect(frame.x, 200, frame.width, frame.height);
            
            // Project titles
            if (frame.revealed) {
              p.fill(255);
              p.textAlign(p.LEFT, p.TOP);
              p.textSize(14);
              p.noStroke();
              
              const projectNames = ["Villa Luxe", "Retail Plaza", "Commercial Tower", "Desert Resort"];
              p.text(projectNames[i], frame.x, frame.height + 220);
              
              // Animated terracotta underline
              if (frame.underlineWidth < frame.targetUnderlineWidth) {
                frame.underlineWidth += 3;
              }
              
              p.stroke(233, 95, 50); // Terracotta Orange
              p.strokeWeight(2);
              p.line(frame.x, frame.height + 240, frame.x + frame.underlineWidth, frame.height + 240);
            }
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

export default P5V6Frame5;