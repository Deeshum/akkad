import { useEffect, useRef } from 'react';
import p5 from 'p5';

interface P5BackgroundProps {
  isPreloader?: boolean;
  onPreloaderComplete?: () => void;
}

const P5Background = ({ isPreloader = false, onPreloaderComplete }: P5BackgroundProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const sketch = (p: p5) => {
      let nodes: any[] = [];
      let mouseInfluence = 0;
      let time = 0;
      let preloaderProgress = 0;
      let gridComplete = false;
      
      // Color palette inspired by Abu Dhabi architecture
      const colors = {
        sand: [240, 230, 210],
        charcoal: [45, 45, 45],
        white: [255, 255, 255],
        copper: [184, 115, 51],
        accent: [205, 133, 63]
      };

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.parent(canvasRef.current!);
        
        // Initialize nodes for grid pattern
        initializeNodes();
      };

      const initializeNodes = () => {
        nodes = [];
        const spacing = isPreloader ? 80 : 120;
        const cols = Math.ceil(p.width / spacing);
        const rows = Math.ceil(p.height / spacing);
        
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            nodes.push({
              x: i * spacing,
              y: j * spacing,
              originalX: i * spacing,
              originalY: j * spacing,
              angle: p.random(p.TWO_PI),
              speed: p.random(0.005, 0.02),
              size: p.random(2, 8),
              opacity: isPreloader ? 0 : p.random(0.3, 0.8),
              revealed: false,
              revealTime: i * 50 + j * 30
            });
          }
        }
      };

      p.draw = () => {
        // Background
        if (isPreloader) {
          p.background(colors.charcoal[0], colors.charcoal[1], colors.charcoal[2]);
        } else {
          p.background(colors.white[0], colors.white[1], colors.white[2], 20);
        }

        time += 0.016;
        
        if (isPreloader) {
          drawPreloaderAnimation();
        } else {
          drawBackgroundAnimation();
        }
      };

      const drawPreloaderAnimation = () => {
        preloaderProgress += 0.8;
        
        // Draw animated grid revealing pattern
        nodes.forEach((node, index) => {
          if (preloaderProgress > node.revealTime) {
            node.revealed = true;
            node.opacity = p.min(1, (preloaderProgress - node.revealTime) / 100);
          }
          
          if (node.revealed) {
            // Geometric shapes inspired by Islamic architecture
            p.push();
            p.translate(node.x, node.y);
            p.rotate(time * node.speed + node.angle);
            
            // Set color with opacity
            p.fill(colors.copper[0], colors.copper[1], colors.copper[2], node.opacity * 255);
            p.noStroke();
            
            // Draw diamond/rhombus shapes
            p.beginShape();
            p.vertex(0, -node.size);
            p.vertex(node.size, 0);
            p.vertex(0, node.size);
            p.vertex(-node.size, 0);
            p.endShape(p.CLOSE);
            
            p.pop();
          }
        });

        // Draw connecting lines between revealed nodes
        p.stroke(colors.sand[0], colors.sand[1], colors.sand[2], 100);
        p.strokeWeight(1);
        
        for (let i = 0; i < nodes.length; i++) {
          if (!nodes[i].revealed) continue;
          
          for (let j = i + 1; j < nodes.length; j++) {
            if (!nodes[j].revealed) continue;
            
            const dist = p.dist(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            if (dist < 150) {
              const alpha = p.map(dist, 0, 150, 100, 0);
              p.stroke(colors.copper[0], colors.copper[1], colors.copper[2], alpha * nodes[i].opacity);
              p.line(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            }
          }
        }

        // Check if preloader is complete
        const revealedCount = nodes.filter(n => n.revealed).length;
        if (revealedCount === nodes.length && !gridComplete) {
          gridComplete = true;
          setTimeout(() => {
            onPreloaderComplete?.();
          }, 1000);
        }

        // Progress indicator
        const progress = Math.min(1, revealedCount / nodes.length);
        drawProgressIndicator(progress);
      };

      const drawBackgroundAnimation = () => {
        // Mouse influence
        const targetInfluence = p.dist(p.mouseX, p.mouseY, p.width/2, p.height/2) / (p.width/2);
        mouseInfluence = p.lerp(mouseInfluence, targetInfluence, 0.02);

        // Subtle flowing lines
        p.stroke(colors.sand[0], colors.sand[1], colors.sand[2], 40);
        p.strokeWeight(1);
        p.noFill();

        // Draw parametric curves
        for (let i = 0; i < 5; i++) {
          p.beginShape();
          for (let x = 0; x < p.width; x += 10) {
            const y = p.height/2 + 
              Math.sin(x * 0.01 + time + i) * 50 * (1 + mouseInfluence * 0.5) +
              Math.sin(x * 0.005 + time * 0.7 + i * 2) * 20;
            p.vertex(x, y + i * 30);
          }
          p.endShape();
        }

        // Floating geometric elements
        nodes.forEach(node => {
          // Update position with subtle movement
          node.x = node.originalX + Math.sin(time + node.angle) * 10;
          node.y = node.originalY + Math.cos(time * 0.7 + node.angle) * 8;

          // Draw subtle dots
          p.fill(colors.charcoal[0], colors.charcoal[1], colors.charcoal[2], 30);
          p.noStroke();
          p.ellipse(node.x, node.y, 2, 2);
        });
      };

      const drawProgressIndicator = (progress: number) => {
        const barWidth = 200;
        const barHeight = 2;
        const x = (p.width - barWidth) / 2;
        const y = p.height * 0.8;

        // Background bar
        p.fill(colors.sand[0], colors.sand[1], colors.sand[2], 100);
        p.noStroke();
        p.rect(x, y, barWidth, barHeight);

        // Progress bar
        p.fill(colors.copper[0], colors.copper[1], colors.copper[2]);
        p.rect(x, y, barWidth * progress, barHeight);

        // Text
        p.fill(colors.sand[0], colors.sand[1], colors.sand[2], 200);
        p.textAlign(p.CENTER);
        p.textSize(12);
        p.text('LOADING STUDIO...', p.width/2, y + 30);
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        initializeNodes();
      };

      p.mouseMoved = () => {
        if (!isPreloader) {
          // Add subtle mouse interaction
          nodes.forEach(node => {
            const dist = p.dist(p.mouseX, p.mouseY, node.x, node.y);
            if (dist < 100) {
              const force = p.map(dist, 0, 100, 10, 0);
              const angle = p.atan2(node.y - p.mouseY, node.x - p.mouseX);
              node.x += Math.cos(angle) * force * 0.1;
              node.y += Math.sin(angle) * force * 0.1;
            }
          });
        }
      };
    };

    p5Instance.current = new p5(sketch);

    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
        p5Instance.current = null;
      }
    };
  }, [isPreloader, onPreloaderComplete]);

  return (
    <div 
      ref={canvasRef} 
      className={`${isPreloader ? 'fixed inset-0 z-50' : 'fixed inset-0 -z-10'}`}
      style={{ pointerEvents: isPreloader ? 'auto' : 'none' }}
    />
  );
};

export default P5Background;