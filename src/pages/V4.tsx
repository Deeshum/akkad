import { useState, useRef } from 'react';
import ArchitecturalScroll from '@/components/ArchitecturalScroll';
import HamburgerMenu from '@/components/HamburgerMenu';
import P5V4Animation from '@/components/P5V4Animation';

const V4 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const portfolioRef = useRef<HTMLDivElement>(null);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  const handleScrollToProjects = () => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (isLoading) {
    return <P5V4Animation isPreloader={true} onPreloaderComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Background Animation */}
      <P5V4Animation />
      
      {/* Hamburger Menu */}
      <HamburgerMenu />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-8">
          {/* Top Right Badge */}
          <div className="absolute top-6 left-6 text-[hsl(var(--v4-charcoal))]/60 text-sm font-medium tracking-widest uppercase z-20">
            ABU DHABI — BAGHDAD
          </div>
          
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-[hsl(var(--v4-charcoal))]/40 text-sm font-medium tracking-[0.3em] uppercase mb-6">
              ARCHITECTURAL CONSULTANTS
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-[hsl(var(--v4-charcoal))] mb-8 leading-none tracking-tight">
              AKKAD
              <span className="block text-[hsl(var(--v4-terracotta))] italic">STUDIO</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[hsl(var(--v4-charcoal))]/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              We create spaces that blend geometry, emotion, and cultural heritage across the Middle East. 
              Our experimental approach challenges conventional architecture.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={handleScrollToProjects}
                className="px-8 py-4 bg-[hsl(var(--v4-terracotta))] text-white font-semibold tracking-wide uppercase hover:bg-[hsl(var(--v4-terracotta))]/90 transition-all duration-300 transform hover:scale-105"
              >
                EXPLORE PROJECTS
              </button>
              
              <button className="px-8 py-4 border-2 border-[hsl(var(--v4-charcoal))] text-[hsl(var(--v4-charcoal))] font-semibold tracking-wide uppercase hover:bg-[hsl(var(--v4-charcoal))] hover:text-white transition-all duration-300">
                OUR PHILOSOPHY
              </button>
            </div>
          </div>
        </section>

            {/* Architectural Visions Horizontal Scroll */}
            <ArchitecturalScroll />

            {/* Featured Projects Section */}
            <section ref={portfolioRef} className="py-24 px-8 bg-white/60 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-6xl font-bold text-[hsl(var(--v4-charcoal))] mb-4 tracking-tight">
                    FEATURED WORKS
                  </h2>
                  <div className="w-24 h-1 bg-[hsl(var(--v4-terracotta))] mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { title: "AL NOOR CULTURAL CENTER", location: "ABU DHABI", year: "2024" },
                    { title: "DESERT PAVILION", location: "DUBAI", year: "2023" },
                    { title: "BAGHDAD HERITAGE TOWER", location: "BAGHDAD", year: "2023" },
                    { title: "SHARJAH ART MUSEUM", location: "SHARJAH", year: "2022" },
                    { title: "COASTAL RESIDENCE", location: "ABU DHABI", year: "2022" },
                    { title: "URBAN OASIS", location: "DUBAI", year: "2021" }
                  ].map((project, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="aspect-[4/5] bg-[hsl(var(--v4-charcoal))]/10 mb-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[hsl(var(--v4-terracotta))]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="text-xs font-medium tracking-wide uppercase">{project.location}</div>
                          <div className="text-lg font-bold">{project.title}</div>
                        </div>
                      </div>
                      <div className="text-[hsl(var(--v4-charcoal))]/60 text-xs font-medium tracking-widest uppercase mb-1">
                        {project.location} — {project.year}
                      </div>
                      <h3 className="text-[hsl(var(--v4-charcoal))] text-lg font-bold tracking-wide">
                        {project.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 px-8 bg-[hsl(var(--v4-charcoal))] text-white">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                  ARCHITECTURE AS <span className="text-[hsl(var(--v4-terracotta))]">ART</span>
                </h2>
                
                <p className="text-xl leading-relaxed mb-12 opacity-90">
                  We believe architecture is more than shelter—it's a dialogue between space and soul, 
                  tradition and innovation. Our work reflects the rich cultural tapestry of the Middle East 
                  while pushing the boundaries of contemporary design.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-[hsl(var(--v4-terracotta))] mb-2">25+</div>
                    <div className="text-sm font-medium tracking-wide uppercase opacity-80">PROJECTS COMPLETED</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[hsl(var(--v4-terracotta))] mb-2">8</div>
                    <div className="text-sm font-medium tracking-wide uppercase opacity-80">INTERNATIONAL AWARDS</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[hsl(var(--v4-terracotta))] mb-2">2</div>
                    <div className="text-sm font-medium tracking-wide uppercase opacity-80">OFFICE LOCATIONS</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 px-8 bg-white/80 backdrop-blur-sm">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-6xl font-bold text-[hsl(var(--v4-charcoal))] mb-4 tracking-tight">
                    GET IN TOUCH
                  </h2>
                  <div className="w-24 h-1 bg-[hsl(var(--v4-terracotta))] mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div>
                    <h3 className="text-2xl font-bold text-[hsl(var(--v4-charcoal))] mb-8 tracking-wide">
                      ABU DHABI HEAD OFFICE
                    </h3>
                    <div className="space-y-4 text-[hsl(var(--v4-charcoal))]/70">
                      <p>1603 Office, C88 Commercial Building</p>
                      <p>Baghdad Street, Abu Dhabi</p>
                      <p>United Arab Emirates</p>
                      <p className="pt-4 font-semibold">+971 2 562 0979</p>
                      <p className="text-[hsl(var(--v4-terracotta))] font-medium">info@akkadconsultants.com</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-[hsl(var(--v4-charcoal))] mb-8 tracking-wide">
                      BAGHDAD OFFICE
                    </h3>
                    <div className="space-y-4 text-[hsl(var(--v4-charcoal))]/70">
                      <p>Office 101 A, AI Arasat St</p>
                      <p>Baghdad, Iraq</p>
                      <p className="pt-4 font-semibold">+964 773 2008881</p>
                      <p className="text-[hsl(var(--v4-terracotta))] font-medium">info@akkadconsultants.com</p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-16">
                  <div className="flex justify-center space-x-6">
                    <a href="https://www.linkedin.com/company/akkad-consultants/" 
                       className="text-[hsl(var(--v4-charcoal))]/60 hover:text-[hsl(var(--v4-terracotta))] transition-colors font-medium tracking-wide uppercase text-sm">
                      LINKEDIN
                    </a>
                    <a href="https://www.instagram.com/akkadconsultants/" 
                       className="text-[hsl(var(--v4-charcoal))]/60 hover:text-[hsl(var(--v4-terracotta))] transition-colors font-medium tracking-wide uppercase text-sm">
                      INSTAGRAM
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100086450161108" 
                       className="text-[hsl(var(--v4-charcoal))]/60 hover:text-[hsl(var(--v4-terracotta))] transition-colors font-medium tracking-wide uppercase text-sm">
                      FACEBOOK
                    </a>
                  </div>
                </div>
              </div>
            </section>
        </main>
    </div>
  );
};

export default V4;