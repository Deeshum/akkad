import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intro animation trigger
    setTimeout(() => setIsLoaded(true), 500);

    // Set up intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observerRef.current?.observe(section));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    // Canvas line drawing animation
    if (!canvasRef.current || !isLoaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 400;

    let animationFrame = 0;
    const maxFrames = 180;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'hsl(45, 90%, 60%)';
      ctx.lineWidth = 2;

      const progress = animationFrame / maxFrames;

      // Draw architectural elements progressively
      ctx.beginPath();
      
      // Floor plan lines
      if (progress > 0.1) {
        ctx.moveTo(100, 300);
        ctx.lineTo(100 + 600 * Math.min((progress - 0.1) / 0.3, 1), 300);
        ctx.moveTo(100, 100);
        ctx.lineTo(100 + 600 * Math.min((progress - 0.2) / 0.3, 1), 100);
        ctx.moveTo(100, 100);
        ctx.lineTo(100, 100 + 200 * Math.min((progress - 0.3) / 0.3, 1));
        ctx.moveTo(700, 100);
        ctx.lineTo(700, 100 + 200 * Math.min((progress - 0.4) / 0.3, 1));
      }

      // Building silhouette
      if (progress > 0.5) {
        const buildingProgress = (progress - 0.5) / 0.4;
        ctx.moveTo(200, 300);
        ctx.lineTo(200, 300 - 150 * buildingProgress);
        ctx.lineTo(200 + 100 * buildingProgress, 300 - 150 * buildingProgress);
        ctx.lineTo(200 + 100 * buildingProgress, 300 - 100 * buildingProgress);
        ctx.lineTo(300, 300 - 100 * buildingProgress);
        ctx.lineTo(300, 300);
      }

      // AKKAD text outline
      if (progress > 0.9) {
        ctx.font = '48px serif';
        ctx.strokeText('AKKAD', 250, 200);
      }

      ctx.stroke();

      // Particles
      if (progress > 0.95) {
        for (let i = 0; i < 20; i++) {
          const x = 250 + Math.random() * 200;
          const y = 150 + Math.random() * 100;
          const size = Math.random() * 3;
          
          ctx.fillStyle = `hsla(45, 90%, 60%, ${Math.random()})`;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (animationFrame < maxFrames) {
        animationFrame++;
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isLoaded]);

  const values = [
    {
      title: "Design with Intent",
      description: "Every line serves a purpose",
      icon: "pencil"
    },
    {
      title: "Ingenuity Meets Discipline",
      description: "Innovation grounded in expertise",
      icon: "gears"
    },
    {
      title: "Client as Partner",
      description: "Collaborative excellence",
      icon: "handshake"
    },
    {
      title: "Sustainability as Strategy",
      description: "Future-conscious design",
      icon: "leaf"
    },
    {
      title: "Timeless Impact",
      description: "Legacy through design",
      icon: "clock"
    },
    {
      title: "Precision & Excellence",
      description: "Uncompromising quality",
      icon: "diamond"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Intro Animation */}
      <section className="h-screen relative flex items-center justify-center bg-luxury-charcoal">
        <canvas 
          ref={canvasRef}
          className={`absolute inset-0 m-auto transition-opacity duration-2000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Shimmer particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-luxury-gold rounded-full shimmer-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className={`text-center z-10 transition-all duration-2000 delay-3000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl font-serif mb-6 text-luxury-gold">AKKAD</h1>
          <p className="text-xl tracking-widest">Value in Vision.</p>
        </div>
      </section>

      {/* Who We Are */}
      <section 
        id="who-we-are"
        data-animate
        className="min-h-screen relative flex items-center justify-center py-20 bg-gradient-to-b from-luxury-charcoal to-black"
      >
        {/* Floating 3D Geometry */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-luxury-gold/20 float-geometry"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                width: `${50 + Math.random() * 100}px`,
                height: `${50 + Math.random() * 100}px`,
                animationDelay: `${Math.random() * 6}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>

        <div className={`max-w-4xl mx-auto px-8 z-10 transition-all duration-1000 ${visibleSections.has('who-we-are') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-5xl font-serif mb-12 text-center text-luxury-gold">Who We Are</h2>
          <p className="text-xl leading-relaxed text-center hover:text-luxury-gold/80 transition-colors duration-300 cursor-default">
            Akkad is a boutique architectural design and supervision firm based in Dubai, 
            exclusively focused on the luxury real estate sector. We partner with developers 
            and investors to create exceptional properties that are as profitable as they are beautiful.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section 
        id="mission-vision"
        data-animate
        className="min-h-screen flex items-center py-20 bg-black"
      >
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Mission and Vision */}
          <div className={`space-y-12 transition-all duration-1000 delay-300 ${visibleSections.has('mission-vision') ? 'slide-in-left opacity-100' : 'opacity-0'}`}>
            <div className="group cursor-pointer">
              <h3 className="text-3xl font-serif mb-4 text-luxury-gold group-hover:text-white transition-colors duration-300 relative">
                Mission
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-luxury-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </h3>
              <p className="text-lg text-gray-300">
                To create architectural excellence that transcends expectations, 
                delivering spaces that inspire and generate lasting value.
              </p>
            </div>
            
            <div className="group cursor-pointer">
              <h3 className="text-3xl font-serif mb-4 text-luxury-gold group-hover:text-white transition-colors duration-300 relative">
                Vision
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-luxury-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </h3>
              <p className="text-lg text-gray-300">
                To be the definitive architectural partner for luxury real estate, 
                shaping Dubai's skyline with timeless design.
              </p>
            </div>
          </div>

          {/* Right: Cinematic Transitions */}
          <div className={`relative h-96 transition-all duration-1000 delay-600 ${visibleSections.has('mission-vision') ? 'slide-in-right opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-charcoal to-black rounded-lg overflow-hidden">
              <div className="absolute inset-0 morph-building">
                <div className="w-full h-full bg-luxury-gold/10 flex items-center justify-center text-6xl text-luxury-gold">
                  🏗️
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section 
        id="values"
        data-animate
        className="min-h-screen py-20 bg-gradient-to-b from-black to-luxury-charcoal"
      >
        <div className="max-w-6xl mx-auto px-8">
          <h2 className={`text-5xl font-serif mb-16 text-center text-luxury-gold transition-all duration-1000 ${visibleSections.has('values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`luxury-card bg-black/50 border border-luxury-gold/20 p-8 rounded-lg hover:border-luxury-gold hover:bg-luxury-gold/5 transition-all duration-1000 ${
                  visibleSections.has('values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-3xl mb-4 text-luxury-gold">
                  {value.icon === 'pencil' && '✏️'}
                  {value.icon === 'gears' && '⚙️'}
                  {value.icon === 'handshake' && '🤝'}
                  {value.icon === 'leaf' && '🌱'}
                  {value.icon === 'clock' && '⏰'}
                  {value.icon === 'diamond' && '💎'}
                </div>
                <h3 className="text-xl font-serif mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section 
        id="different"
        data-animate
        className="min-h-screen relative py-20 bg-gradient-to-b from-luxury-charcoal via-black to-luxury-charcoal overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute h-0.5 bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-30"
              style={{
                top: `${20 + i * 15}%`,
                left: '-100%',
                right: '-100%',
                animation: `slideInRight ${3 + i}s ease-in-out infinite alternate`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
          <h2 className={`text-5xl font-serif mb-12 text-luxury-gold transition-all duration-1000 ${visibleSections.has('different') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            What Makes Us Different
          </h2>
          
          {/* Floating Keywords */}
          <div className={`mb-16 transition-all duration-1000 delay-500 ${visibleSections.has('different') ? 'opacity-100' : 'opacity-0'}`}>
            {['Elegance', 'Precision', 'Legacy'].map((word, index) => (
              <span
                key={word}
                className="inline-block text-2xl text-luxury-gold/70 mx-8 my-4 shimmer-particle"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {word}
              </span>
            ))}
          </div>

          <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${visibleSections.has('different') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <p className="text-xl leading-relaxed text-white">
              "We believe the true measure of design is the value it generates — 
              financially, functionally, and emotionally."
            </p>
          </div>
        </div>
      </section>

      {/* Footer & CTA */}
      <section className="py-20 bg-luxury-charcoal text-center">
        <div className="max-w-4xl mx-auto px-8">
          <Link to="/v4">
            <Button 
              className="bg-transparent border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black text-lg px-12 py-6 rounded-none transition-all duration-300 gold-pulse relative overflow-hidden group"
            >
              <span className="relative z-10">Return to Home</span>
              {/* Particle trail effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-luxury-gold rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `shimmer 1s ease-in-out infinite ${Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;