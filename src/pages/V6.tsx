import P5V6Animation from '@/components/P5V6Animation';
import P5V6Frame3 from '@/components/P5V6Frame3';
import P5V6Frame4 from '@/components/P5V6Frame4';
import P5V6Frame5 from '@/components/P5V6Frame5';
import P5V6Frame6 from '@/components/P5V6Frame6';
import PortfolioSlideshow from '@/components/PortfolioSlideshow';

const V6 = () => {
  return (
    <div className="min-h-screen bg-[#26282D] text-white relative">
      {/* Frame 1 & 2: Hero Section */}
      <div className="min-h-screen relative overflow-hidden">
        <P5V6Animation />
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
      </div>

      {/* Portfolio Slideshow */}
      <PortfolioSlideshow />

      {/* Frame 3: Services Section */}
      <section className="min-h-screen relative overflow-hidden">
        <P5V6Frame3 />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center space-y-8 p-8">
            <h2 className="text-3xl md:text-5xl font-light tracking-wider text-white">
              What We Do
            </h2>
            <p className="text-lg md:text-xl font-light tracking-wide text-[#E95F32]">
              Services with Substance
            </p>
          </div>
        </div>
      </section>

      {/* Frame 4: Methodology Section */}
      <section className="min-h-screen relative overflow-hidden">
        <P5V6Frame4 />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center space-y-8 p-8">
            <h2 className="text-3xl md:text-5xl font-light tracking-wider text-white">
              How We Do It
            </h2>
            <p className="text-lg md:text-xl font-light tracking-wide text-[#E95F32]">
              Portfolio & Design Methodology
            </p>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-white/80 leading-relaxed">
                Communicates process and design methodology. 
                Covers Commercial & Retail Design philosophy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frame 5: Portfolio Gallery Section */}
      <section className="min-h-screen relative overflow-hidden">
        <P5V6Frame5 />
        <div className="relative z-10 flex items-center justify-start min-h-screen">
          <div className="text-left space-y-8 p-8 ml-8">
            <h2 className="text-3xl md:text-5xl font-light tracking-wider text-white">
              Portfolio Gallery
            </h2>
            <p className="text-lg md:text-xl font-light tracking-wide text-[#E95F32]">
              Visual showcase of luxury villas, commercial spaces, retail interiors
            </p>
          </div>
        </div>
      </section>

      {/* Frame 6: Final Note Section */}
      <section className="min-h-screen relative overflow-hidden">
        <P5V6Frame6 />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center space-y-8 p-8">
            <h2 className="text-2xl md:text-3xl font-light tracking-wider text-white/60">
              Final Note
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default V6;