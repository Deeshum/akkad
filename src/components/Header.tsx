import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="font-serif text-xl font-bold tracking-tight interactive">
          DUNE
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="interactive w-8 h-8 flex flex-col justify-center items-center space-y-1"
          aria-label="Toggle menu"
        >
          <span 
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span 
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span 
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 interactive w-8 h-8 flex flex-col justify-center items-center space-y-1"
          >
            <span className="w-6 h-0.5 bg-foreground rotate-45 translate-y-1.5" />
            <span className="w-6 h-0.5 bg-foreground -rotate-45 -translate-y-1.5" />
          </button>
          
          <nav className="text-center">
            <a href="#work" className="block text-4xl font-serif mb-8 interactive hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#about" className="block text-4xl font-serif mb-8 interactive hover:text-accent transition-colors">
              Studio
            </a>
            <a href="#contact" className="block text-4xl font-serif mb-8 interactive hover:text-accent transition-colors">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;