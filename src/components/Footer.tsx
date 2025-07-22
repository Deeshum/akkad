const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', url: '#', handle: '@studio' },
    { name: 'Twitter', url: '#', handle: '@studio' },
    { name: 'Behance', url: '#', handle: 'studio' },
    { name: 'Email', url: 'mailto:hello@studio.com', handle: 'hello@studio.com' },
  ];

  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          {/* Studio Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-serif text-2xl font-bold mb-2">
              AVANT-GARDE STUDIO
            </h3>
            <p className="text-muted-foreground max-w-md">
              Creating bold, experimental experiences that push the boundaries 
              of design and interaction.
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
          <p>© 2024 Avant-Garde Studio. All rights reserved.</p>
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