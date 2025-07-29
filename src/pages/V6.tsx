import P5V6Animation from '@/components/P5V6Animation';
import PortfolioSlideshow from '@/components/PortfolioSlideshow';
import WhatWeDoAnimation from '@/components/WhatWeDoAnimation';
import HowWeDoAnimation from '@/components/HowWeDoAnimation';
import WhoWeAreAnimation from '@/components/WhoWeAreAnimation';

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

      {/* WHO WE ARE Section */}
      <div className="min-h-screen bg-[#26282D] text-white relative flex items-center justify-center p-8">
        <WhoWeAreAnimation />
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider text-[#E95F32] text-center mb-12">
            WHO WE ARE
          </h2>
          <h3 className="text-2xl md:text-3xl font-light tracking-wide text-center mb-8">
            Design-Led. Strategically Built.
          </h3>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              At Akkad, we believe that beauty, functionality, and feasibility are not trade-offs — they are the foundation of good design. Our work starts with vision: a design rooted in creative intelligence and executed through material, engineering, and market awareness.
            </p>
            
            <p>
              Our strength lies in our people. The Akkad team is composed of seasoned industry professionals and ambitious young designers. This balanced collaboration ensures we stay grounded in architectural tradition while continually building for the future.
            </p>
            
            <p>
              Our Executive Director brings decades of experience from the GCC to the United States, leading major developments with foresight and precision. Alongside him, our Lead Designer — an award-winning creative — injects each project with distinction and innovation.
            </p>
            
            <p>
              As much as we are in the field of architecture, we are in the business of design. That means excelling in a craft, while pursuing a practice. We do that by honing our skills, planning our moves, and striving for growth.
            </p>
          </div>
        </div>
      </div>

      {/* WHAT WE DO Section */}
      <div className="min-h-screen bg-white text-[#26282D] relative flex items-center justify-center p-8">
        <WhatWeDoAnimation />
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider text-[#E95F32] text-center mb-12">
            WHAT WE DO
          </h2>
          <h3 className="text-2xl md:text-3xl font-light tracking-wide text-center mb-12">
            Services with Substance
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-[#E95F32]">Architecture & Design</h4>
              <p className="leading-relaxed">
                We create modern, high-performance architectural concepts for luxury villas, residential buildings, boutique hotels, commercial spaces, and branded environments.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-[#E95F32]">Development Supervision</h4>
              <p className="leading-relaxed">
                We oversee the construction process with a rigorous eye — ensuring that every design decision is honored during execution, with value optimization at the forefront.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-[#E95F32]">Design Strategy & ROI Consulting</h4>
              <p className="leading-relaxed">
                We work closely with developers and investors to design spaces that maximize return — through market-aligned design, cost-efficient planning, and timeless aesthetic choices.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-[#E95F32]">Custom Solutions</h4>
              <p className="leading-relaxed">
                We tailor each engagement based on the project's goals — whether it's feasibility analysis, material selection, or layout planning for specific operational workflows.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* HOW WE DO IT Section */}
      <div className="min-h-screen bg-[#26282D] text-white relative flex items-center justify-center p-8">
        <HowWeDoAnimation />
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider text-[#E95F32] text-center mb-12">
            HOW WE DO IT
          </h2>
          <h3 className="text-2xl md:text-3xl font-light tracking-wide text-center mb-12">
            Portfolio & Design Methodology
          </h3>
          
          <div className="space-y-8">
            <p className="text-lg leading-relaxed">
              Every Akkad project is built on a deep understanding of its context — the market, the user, and the brand. Our process balances strategic planning with bold design thinking to deliver outcomes that are as impressive on paper as they are in person.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-medium text-[#E95F32] mb-4">Commercial Design</h4>
                <p className="leading-relaxed mb-4">
                  In our approach to commercial spaces, we design to enable performance. That means understanding each business's workflow, then tailoring spatial planning to optimize operations. Departments are positioned not just logically, but holistically — every zone complements the next, allowing for fluid teamwork and long-term efficiency. Every material, pathway, and structural choice supports the business behind it.
                </p>
                <p className="leading-relaxed font-medium">
                  We don't just design spaces for work. We design environments that work.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-medium text-[#E95F32] mb-4">Retail Design</h4>
                <p className="leading-relaxed mb-4">
                  Retail is about identity, expression, and experience. Our design approach projects your brand essence into a physical setting that speaks directly to your audience. We shape layouts that enhance product flow, elevate visual storytelling, and allow staff to operate with confidence and speed. The result: a space that performs as well commercially as it does visually.
                </p>
                <p className="leading-relaxed font-medium">
                  In today's retail market, design is not decoration — it's strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                  <h5 className="font-medium text-white">Abu Dhabi</h5>
                  <p className="text-gray-300 text-sm">
                    Al Mariah Island<br/>
                    Abu Dhabi, UAE<br/>
                    +971 2 123 4567
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-white">Baghdad</h5>
                  <p className="text-gray-300 text-sm">
                    Al-Karada District<br/>
                    Baghdad, Iraq<br/>
                    +964 1 987 6543
                  </p>
                </div>
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-6">
              <h4 className="text-lg font-medium text-[#E95F32]">Connect</h4>
              <div className="space-y-3">
                <a href="mailto:info@akkad.design" className="block text-gray-300 hover:text-[#E95F32] transition-colors">
                  info@akkad.design
                </a>
                <a href="https://instagram.com/akkad.design" className="block text-gray-300 hover:text-[#E95F32] transition-colors">
                  Instagram
                </a>
                <a href="https://linkedin.com/company/akkad-design" className="block text-gray-300 hover:text-[#E95F32] transition-colors">
                  LinkedIn
                </a>
                <a href="https://behance.net/akkad" className="block text-gray-300 hover:text-[#E95F32] transition-colors">
                  Behance
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