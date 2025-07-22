import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [currentSquare, setCurrentSquare] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const squares = 16; // 4x4 grid
    const interval = setInterval(() => {
      setCurrentSquare(prev => {
        if (prev >= squares - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 800); // Wait for pixelate animation
          }, 500);
          return prev;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  const squares = Array.from({ length: 16 }, (_, i) => (
    <div
      key={i}
      className={`w-8 h-8 bg-foreground transition-all duration-300 ${
        i <= currentSquare ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}
      style={{
        transitionDelay: `${i * 50}ms`,
      }}
    />
  ));

  return (
    <div className={`fixed inset-0 bg-background z-50 flex items-center justify-center ${isComplete ? 'pixelate-out' : ''}`}>
      <div className="grid grid-cols-4 gap-2">
        {squares}
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-sm font-sans tracking-widest opacity-60">
          LOADING STUDIO...
        </div>
      </div>
    </div>
  );
};

export default Preloader;