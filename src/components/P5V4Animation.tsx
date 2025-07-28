import { useEffect, useRef } from 'react';
import p5 from 'p5';

interface P5V4AnimationProps {
  isPreloader?: boolean;
  onPreloaderComplete?: () => void;
}

const P5V4Animation = ({ isPreloader = false, onPreloaderComplete }: P5V4AnimationProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const sketch = (p: p5) => {
      let time = 0;
      let preloaderProgress = 0;
      let meshPoints: any[] = [];
      let gridNodes: any[] = [];
      let mouseX = 0;
      let mouseY = 0;
      
      // V4 Brand Colors
      const colors = {
        terracotta: [233, 95, 50],    // #E95F32
        charcoal: [38, 40, 45],       // #26282D
        white: [255, 255, 255]        // #FFFFFF
      };

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.parent(canvasRef.current!);
        
        if (isPreloader) {
          initPreloaderMesh();
        } else {
          initBackgroundGrid();
        }
      };

      const initPreloaderMesh = () => {
        meshPoints = [];
        const centerX = p.width / 2;
        const centerY = p.height / 2;
        const radius = Math.min(p.width, p.height) * 0.2;
        
        // Create architectural mesh points
        for (let i = 0; i < 12; i++) {
          const angle = (i / 12) * p.TWO_PI;
          meshPoints.push({
            x: centerX + Math.cos(angle) * radius,
            y: centerY + Math.sin(angle) * radius,
            originalAngle: angle,
            radius: radius,
            size: p.random(8, 20),
            rotationSpeed: p.random(0.02, 0.05)
          });
        }
      };

      const initBackgroundGrid = () => {
        gridNodes = [];
        const spacing = 80;
        const cols = Math.ceil(p.width / spacing) + 2;
        const rows = Math.ceil(p.height / spacing) + 2;
        
        for (let i = -1; i < cols; i++) {
          for (let j = -1; j < rows; j++) {
            gridNodes.push({
              x: i * spacing,
              y: j * spacing,
              originalX: i * spacing,
              originalY: j * spacing,
              offsetX: 0,
              offsetY: 0,
              angle: p.random(p.TWO_PI),
              speed: p.random(0.005, 0.015),
              amplitude: p.random(5, 15)
            });
          }
        }
      };

      p.draw = () => {
        time += 0.016;
        
        if (isPreloader) {
          drawPreloaderAnimation();
        } else {
          drawBackgroundAnimation();
        }
      };

      const drawPreloaderAnimation = () => {
        // Charcoal background
        p.background(colors.charcoal[0], colors.charcoal[1], colors.charcoal[2]);
        
        preloaderProgress += 0.6; // Will complete in ~5 seconds
        
        const centerX = p.width / 2;
        const centerY = p.height / 2;
        
        // Main rotating architectural form
        p.push();
        p.translate(centerX, centerY);
        p.rotate(time * 0.5);
        
        // Draw connecting mesh lines
        p.stroke(colors.white[0], colors.white[1], colors.white[2], 150);
        p.strokeWeight(2);
        
        for (let i = 0; i < meshPoints.length; i++) {
          const point1 = meshPoints[i];
          const nextIndex = (i + 1) % meshPoints.length;
          const point2 = meshPoints[nextIndex];
          
          // Animated radius based on progress
          const animatedRadius = point1.radius * (1 + Math.sin(time * 2 + i) * 0.3);
          const x1 = Math.cos(point1.originalAngle + time * point1.rotationSpeed) * animatedRadius;
          const y1 = Math.sin(point1.originalAngle + time * point1.rotationSpeed) * animatedRadius;
          
          const animatedRadius2 = point2.radius * (1 + Math.sin(time * 2 + nextIndex) * 0.3);
          const x2 = Math.cos(point2.originalAngle + time * point2.rotationSpeed) * animatedRadius2;
          const y2 = Math.sin(point2.originalAngle + time * point2.rotationSpeed) * animatedRadius2;
          
          p.line(x1, y1, x2, y2);
          
          // Draw nodes
          p.fill(colors.terracotta[0], colors.terracotta[1], colors.terracotta[2]);
          p.noStroke();
          p.ellipse(x1, y1, 8, 8);
        }
        
        // Inner rotating elements
        p.rotate(-time * 1.2);
        p.stroke(colors.terracotta[0], colors.terracotta[1], colors.terracotta[2], 200);
        p.strokeWeight(3);
        p.noFill();
        
        for (let i = 0; i < 6; i++) {
          const radius = 40 + i * 15;
          const segments = 6 + i;
          
          p.beginShape();
          for (let j = 0; j <= segments; j++) {
            const angle = (j / segments) * p.TWO_PI;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            p.vertex(x, y);
          }
          p.endShape();
        }
        
        p.pop();
        
        // Progress text
        const progress = Math.min(1, preloaderProgress / 300);
        p.fill(colors.white[0], colors.white[1], colors.white[2], 200);
        p.textAlign(p.CENTER);
        p.textSize(14);
        p.text('LOADING ARCHITECTURE...', centerX, centerY + 150);
        
        // Progress bar
        const barWidth = 200;
        const barX = centerX - barWidth / 2;
        const barY = centerY + 180;
        
        p.stroke(colors.white[0], colors.white[1], colors.white[2], 100);
        p.strokeWeight(1);
        p.noFill();
        p.rect(barX, barY, barWidth, 2);
        
        p.fill(colors.terracotta[0], colors.terracotta[1], colors.terracotta[2]);
        p.noStroke();
        p.rect(barX, barY, barWidth * progress, 2);
        
        // Auto-complete after 5 seconds or when progress reaches 100%
        if (progress >= 1 || time > 5) {
          setTimeout(() => {
            onPreloaderComplete?.();
          }, 500);
        }
      };

      const drawBackgroundAnimation = () => {
        // White background with very subtle overlay
        p.background(colors.white[0], colors.white[1], colors.white[2]);
        p.fill(colors.charcoal[0], colors.charcoal[1], colors.charcoal[2], 3);
        p.noStroke();
        p.rect(0, 0, p.width, p.height);
        
        // Update mouse position with smooth interpolation
        mouseX = p.lerp(mouseX, p.mouseX, 0.05);
        mouseY = p.lerp(mouseY, p.mouseY, 0.05);
        
        // Draw subtle geometric grid
        gridNodes.forEach((node, index) => {
          // Calculate wave motion
          node.offsetX = Math.sin(time * node.speed + node.angle) * node.amplitude;
          node.offsetY = Math.cos(time * node.speed * 0.7 + node.angle) * node.amplitude * 0.5;
          
          // Mouse influence
          const mouseDistance = p.dist(mouseX, mouseY, node.x, node.y);
          const influence = Math.max(0, 1 - mouseDistance / 200);
          const mouseForceX = (mouseX - node.x) * influence * 0.1;
          const mouseForceY = (mouseY - node.y) * influence * 0.1;
          
          const finalX = node.originalX + node.offsetX + mouseForceX;
          const finalY = node.originalY + node.offsetY + mouseForceY;
          
          // Draw connecting lines with very low opacity
          if (index < gridNodes.length - 1) {
            const nextNode = gridNodes[index + 1];
            const distance = p.dist(finalX, finalY, nextNode.originalX, nextNode.originalY);
            
            if (distance < 120) {
              const alpha = p.map(distance, 0, 120, 25, 0);
              p.stroke(colors.charcoal[0], colors.charcoal[1], colors.charcoal[2], alpha);
              p.strokeWeight(0.5);
              p.line(finalX, finalY, nextNode.originalX + nextNode.offsetX, nextNode.originalY + nextNode.offsetY);
            }
          }
          
          // Draw nodes
          p.fill(colors.terracotta[0], colors.terracotta[1], colors.terracotta[2], 15);
          p.noStroke();
          p.ellipse(finalX, finalY, 2, 2);
        });
        
        // Flowing desert-inspired curves
        p.stroke(colors.terracotta[0], colors.terracotta[1], colors.terracotta[2], 20);
        p.strokeWeight(1);
        p.noFill();
        
        for (let i = 0; i < 3; i++) {
          p.beginShape();
          for (let x = -50; x < p.width + 50; x += 20) {
            const y = p.height * 0.3 + 
              Math.sin(x * 0.008 + time + i * 2) * 60 +
              Math.sin(x * 0.003 + time * 0.5 + i) * 30;
            p.vertex(x, y + i * p.height * 0.2);
          }
          p.endShape();
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        if (isPreloader) {
          initPreloaderMesh();
        } else {
          initBackgroundGrid();
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

export default P5V4Animation;