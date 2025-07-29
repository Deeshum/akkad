import P5V6Animation from '@/components/P5V6Animation';
import PortfolioSlideshow from '@/components/PortfolioSlideshow';
import CompanySlideshow from '@/components/CompanySlideshow';

const V6 = () => {
  return (
    <div className="min-h-screen bg-white text-white relative overflow-hidden">
      {/* Hero Section with 3D Animation Background */}
      <div className="min-h-screen relative">
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
      </div>

      {/* Company Slideshow - WHO WE ARE, WHAT WE DO, HOW WE DO IT */}
      <CompanySlideshow />

      {/* Second Scroll Content - Portfolio Slideshow */}
      <PortfolioSlideshow />

      {/* Final Note / Footer Section */}
      <div className="min-h-screen bg-white text-[#26282D] relative flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-light tracking-wider text-[#E95F32]">
            Built to Inspire. Designed to Perform.
          </h2>
          <p className="text-xl md:text-2xl font-light tracking-wide">
            Let Akkad help you bring vision, value, and beauty together — in one seamless project.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#26282D] text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light tracking-wider text-[#E95F32]">AKKAD</h3>
              <p className="text-gray-300 leading-relaxed">
                Design-led architecture firm creating modern, high-performance spaces that balance beauty, functionality, and strategic value.
              </p>
            </div>

            {/* Offices */}
            <div className="space-y-6">
              <h4 className="text-lg font-medium text-[#E95F32]">Our Offices</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-white">Abu Dhabi Head Office</h5>
                  <p className="text-gray-300 text-sm">
                    1603 Office, C88 Commercial Building,<br/>
                    Baghdad Street, Abu Dhabi,<br/>
                    United Arab Emirates<br/>
                    +971 2 562 0979<br/>
                    info@akkadconsultants.com
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-white">Baghdad Office</h5>
                  <p className="text-gray-300 text-sm">
                    Office 101 A, AI Arasat St,<br/>
                    Baghdad Iraq<br/>
                    +964 773 2008881<br/>
                    info@akkadconsultants.com
                  </p>
                </div>
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-6">
              <h4 className="text-lg font-medium text-[#E95F32]">Connect</h4>
              <div className="space-y-3">
                <a href="https://www.instagram.com/akkadconsultants/" className="block text-gray-300 hover:text-[#E95F32] transition-colors" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <a href="https://www.facebook.com/profile.php?id=100086450161108" className="block text-gray-300 hover:text-[#E95F32] transition-colors" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
                <a href="https://www.linkedin.com/company/akkad-consultants/" className="block text-gray-300 hover:text-[#E95F32] transition-colors" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Akkad Architecture. All rights reserved. | 
              <a href="#" className="hover:text-[#E95F32] transition-colors ml-2">Privacy</a> | 
              <a href="#" className="hover:text-[#E95F32] transition-colors ml-2">Terms</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default V6;