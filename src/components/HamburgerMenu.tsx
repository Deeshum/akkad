import { useState } from 'react';
import { Menu, X, Home, Layers, Users, Mail, FileText, Award } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

const navigationItems = [
  { title: "HOME", url: "/v4", icon: Home },
  { title: "PROJECTS", url: "/v4/projects", icon: Layers },
  { title: "STUDIO", url: "/v4/studio", icon: Users },
  { title: "AWARDS", url: "/v4/awards", icon: Award },
  { title: "JOURNAL", url: "/v4/journal", icon: FileText },
  { title: "CONTACT", url: "/v4/contact", icon: Mail },
];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 p-3 bg-white/80 backdrop-blur-sm rounded-full border border-[hsl(var(--v4-charcoal))]/10 hover:bg-[hsl(var(--v4-terracotta))]/10 transition-all duration-300 group"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X 
            size={24} 
            className="text-[hsl(var(--v4-charcoal))] group-hover:text-[hsl(var(--v4-terracotta))] transition-colors" 
          />
        ) : (
          <Menu 
            size={24} 
            className="text-[hsl(var(--v4-charcoal))] group-hover:text-[hsl(var(--v4-terracotta))] transition-colors" 
          />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-[hsl(var(--v4-charcoal))]/50 backdrop-blur-sm z-40"
          onClick={closeMenu}
        />
      )}

      {/* Menu Panel */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white border-l border-[hsl(var(--v4-charcoal))]/10 z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Header */}
        <div className="p-8 border-b border-[hsl(var(--v4-charcoal))]/10">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/35ae7eeb-a93a-45fb-b51f-5f1c2433c7e8.png" 
              alt="Akkad" 
              className="h-8 w-auto"
            />
            <div className="text-[hsl(var(--v4-charcoal))] font-bold text-lg tracking-wide">
              AKKAD
            </div>
          </div>
          <div className="text-[hsl(var(--v4-charcoal))]/60 text-xs font-medium tracking-widest uppercase mt-2">
            ARCHITECTURAL CONSULTANTS
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-6">
          <div className="text-[hsl(var(--v4-charcoal))]/60 text-xs font-semibold tracking-widest uppercase mb-6">
            NAVIGATION
          </div>
          
          <ul className="space-y-3">
            {navigationItems.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.url}
                  onClick={closeMenu}
                  className={`flex items-center space-x-4 px-4 py-3 rounded-lg transition-all duration-200 group ${
                    isActive(item.url)
                      ? 'bg-[hsl(var(--v4-terracotta))] text-white font-medium'
                      : 'hover:bg-[hsl(var(--v4-terracotta))]/10 text-[hsl(var(--v4-charcoal))]'
                  }`}
                >
                  <item.icon 
                    size={20} 
                    className={`${
                      isActive(item.url) 
                        ? 'text-white' 
                        : 'text-[hsl(var(--v4-charcoal))]/60 group-hover:text-[hsl(var(--v4-terracotta))]'
                    } transition-colors`} 
                  />
                  <span className="font-medium tracking-wide text-sm">
                    {item.title}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Latest Project Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="p-4 bg-[hsl(var(--v4-charcoal))]/5 rounded-lg">
            <div className="text-[hsl(var(--v4-charcoal))]/80 text-xs font-medium tracking-wide uppercase mb-2">
              LATEST PROJECT
            </div>
            <div className="text-[hsl(var(--v4-charcoal))] text-sm font-semibold mb-1">
              Al Noor Cultural Center
            </div>
            <div className="text-[hsl(var(--v4-charcoal))]/60 text-xs">
              Abu Dhabi, UAE
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;