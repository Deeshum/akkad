import P5V6Animation from '@/components/P5V6Animation';
import AbuDhabiMarvels from '@/components/AbuDhabiMarvels';

const V6 = () => {
  return (
    <div className="min-h-screen bg-white text-white relative overflow-hidden">
      {/* 3D Architecture Animation Background */}
      <P5V6Animation />
      
      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4 p-8">
          <h1 className="text-4xl md:text-6xl font-light tracking-wider text-[#E95F32]">
            ARCHITECTURAL
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide text-[#E95F32]/80">
            Three-Dimensional Vision
          </p>
        </div>
      </div>

      {/* Second Scroll Content - Abu Dhabi Marvels */}
      <AbuDhabiMarvels />
    </div>
  );
};

export default V6;