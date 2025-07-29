import { useEffect, useRef } from 'react';
import p5 from 'p5';

const Play = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const sketch = (p: p5) => {
      let blocks: Array<{x: number, y: number, w: number, h: number}> = [];
      let currentBlock: {x: number, y: number, w: number, h: number, dir: number};
      let blockWidth = 120;
      let blockHeight = 30;
      let speed = 4;
      let score = 0;
      let gameOver = false;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.rectMode(p.CENTER);
        p.textAlign(p.CENTER, p.CENTER);
        newBlock();
      };

      p.draw = () => {
        p.background("#26282D"); // Charcoal Gray background

        // Draw base (ground)
        p.fill("#E95F32"); // Terracotta base
        p.rect(p.width / 2, p.height - 20, p.width, 40);

        // Draw existing blocks
        for (let b of blocks) {
          p.fill("#FFFFFF");
          p.rect(b.x, b.y, b.w, b.h);
        }

        if (!gameOver) {
          // Move current block
          currentBlock.x += currentBlock.dir * speed;
          if (currentBlock.x > p.width - currentBlock.w / 2 || currentBlock.x < currentBlock.w / 2) {
            currentBlock.dir *= -1; // Bounce horizontally
          }

          // Draw current moving block
          p.fill("#E95F32");
          p.rect(currentBlock.x, currentBlock.y, currentBlock.w, currentBlock.h);

          // Instructions & score
          p.fill("#FFFFFF");
          p.textSize(24);
          p.text("Press SPACE to Drop the Block", p.width / 2, 50);
          p.text("Score: " + score, p.width / 2, 90);
        } else {
          p.fill("#FFFFFF");
          p.textSize(36);
          p.text("Game Over! Score: " + score, p.width / 2, p.height / 2);
          p.textSize(24);
          p.text("Press R to Restart", p.width / 2, p.height / 2 + 50);
        }
      };

      p.keyPressed = () => {
        if (p.key === ' ' && !gameOver) {
          // Drop block
          blocks.push({...currentBlock});
          
          // Check if block is on top of previous block
          if (blocks.length > 1) {
            let prev = blocks[blocks.length - 2];
            if (p.abs(currentBlock.x - prev.x) > prev.w / 2) {
              // Missed → Game over
              gameOver = true;
              return;
            } else {
              // Reduce width for difficulty
              currentBlock.w = p.max(40, currentBlock.w - p.random(5, 20));
              score++;
            }
          } else {
            score++;
          }

          newBlock();
        }

        if (p.key === 'R' || p.key === 'r') {
          resetGame();
        }
      };

      function newBlock() {
        currentBlock = {
          x: p.width / 2,
          y: p.height - 60 - blocks.length * blockHeight,
          w: blockWidth,
          h: blockHeight,
          dir: p.random() < 0.5 ? -1 : 1
        };
      }

      function resetGame() {
        blocks = [];
        score = 0;
        blockWidth = 120;
        gameOver = false;
        newBlock();
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    p5Instance.current = new p5(sketch, canvasRef.current);

    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
      }
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <div ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default Play;