const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', url: '#', handle: '@dune.architects' },
    { name: 'LinkedIn', url: '#', handle: 'dune-architects' },
    { name: 'Behance', url: '#', handle: 'dune-architects' },
    { name: 'Email', url: 'mailto:info@dunearchitects.ae', handle: 'info@dunearchitects.ae' },
  ];

  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          {/* Studio Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-serif text-2xl font-bold mb-2">
              DUNE ARCHITECTS
            </h3>
            <p className="text-muted-foreground max-w-md">
              Innovative architectural firm in Abu Dhabi creating sustainable, 
              culturally-inspired designs that honor heritage while embracing the future.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="interactive block hover:text-accent transition-colors duration-300"
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className="font-sans text-sm tracking-wider">
                  {link.name} → {link.handle}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-sm text-muted-foreground">
          <p>© 2024 Dune Architects. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="interactive hover:text-accent transition-colors">
              Privacy
            </a>
            <a href="#" className="interactive hover:text-accent transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;