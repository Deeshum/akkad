import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CompanySlideshow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !slidesRef.current) return;

    const slides = slidesRef.current;
    const slideWidth = window.innerWidth;
    const totalWidth = slideWidth * 3; // 3 slides

    // Set up horizontal scroll
    gsap.set(slides, { width: totalWidth });

    // Create scroll trigger for horizontal movement
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: `+=${totalWidth - slideWidth}`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const xPos = -progress * (totalWidth - slideWidth);
        gsap.set(slides, { x: xPos });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      <div 
        ref={slidesRef}
        className="flex h-screen"
        style={{ width: '300vw' }}
      >
        {/* WHO WE ARE Slide */}
        <div className="w-screen h-screen flex-shrink-0 bg-[#26282D] text-white relative flex items-center justify-center p-8">
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

        {/* WHAT WE DO Slide */}
        <div className="w-screen h-screen flex-shrink-0 bg-white text-[#26282D] relative flex items-center justify-center p-8">
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

        {/* HOW WE DO IT Slide */}
        <div className="w-screen h-screen flex-shrink-0 bg-[#26282D] text-white relative flex items-center justify-center p-8">
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
      </div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-4 text-white/60 text-sm font-sans">
          <span>Scroll to explore</span>
          <div className="w-8 h-0.5 bg-white/60" />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 space-y-4">
        <div className="w-2 h-8 bg-white/30 rounded-full"></div>
        <div className="w-2 h-8 bg-white/30 rounded-full"></div>
        <div className="w-2 h-8 bg-white/30 rounded-full"></div>
      </div>
    </section>
  );
};

export default CompanySlideshow;