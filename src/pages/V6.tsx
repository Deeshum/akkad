import P5V6Animation from '@/components/P5V6Animation';

const V6 = () => {
  return (
    <div className="min-h-screen bg-charcoal text-white relative overflow-hidden">
      {/* P5.js Animation Background */}
      <P5V6Animation />
      
      {/* Optional overlay content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4 p-8">
          <h1 className="text-4xl md:text-6xl font-light tracking-wider text-white/90">
            ARCHITECTURAL
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/70 tracking-wide">
            Three-Dimensional Vision
          </p>
        </div>
      </div>
    </div>
  );
};

export default V6;