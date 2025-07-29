import { useState } from 'react';
import P5V6Animation from '@/components/P5V6Animation';
import P5V6Frame2 from '@/components/P5V6Frame2';

const V6 = () => {
  const [currentFrame, setCurrentFrame] = useState(1);

  return (
    <div className="min-h-screen bg-charcoal text-white relative overflow-hidden">
      {/* Animation Backgrounds */}
      {currentFrame === 1 && <P5V6Animation />}
      {currentFrame === 2 && <P5V6Frame2 />}
      
      {/* Frame Switcher */}
      <div className="fixed top-4 right-4 z-20 flex gap-2">
        <button
          onClick={() => setCurrentFrame(1)}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            currentFrame === 1 
              ? 'bg-terracotta text-white' 
              : 'bg-white/20 text-white/70 hover:bg-white/30'
          }`}
        >
          3D Architecture
        </button>
        <button
          onClick={() => setCurrentFrame(2)}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            currentFrame === 2 
              ? 'bg-terracotta text-white' 
              : 'bg-white/20 text-white/70 hover:bg-white/30'
          }`}
        >
          Geometric Sun
        </button>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4 p-8">
          <h1 className="text-4xl md:text-6xl font-light tracking-wider text-white/90">
            {currentFrame === 1 ? 'ARCHITECTURAL' : 'GEOMETRIC'}
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/70 tracking-wide">
            {currentFrame === 1 ? 'Three-Dimensional Vision' : 'Interactive Solar Design'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default V6;