const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/akkad-consultants/', handle: 'akkad-consultants' },
    { name: 'Instagram', url: 'https://www.instagram.com/akkadconsultants/', handle: '@akkadconsultants' },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100086450161108', handle: 'akkad-consultants' },
    { name: 'Email', url: 'mailto:info@akkadconsultants.com', handle: 'info@akkadconsultants.com' },
  ];

  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Studio Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              AKKAD
            </h3>
            <p className="text-muted-foreground">
              Leading architectural consultancy bridging Abu Dhabi and Baghdad, 
              creating innovative designs across the Middle East.
            </p>
          </div>

          {/* Abu Dhabi Office */}
          <div>
            <h4 className="font-sans text-lg font-semibold mb-3 text-accent">
              ABU DHABI HEAD OFFICE
            </h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>1603 Office, C88 Commercial Building,</p>
              <p>Baghdad Street, Abu Dhabi,</p>
              <p>United Arab Emirates</p>
              <p className="mt-2">+971 2 562 0979</p>
              <p>info@akkadconsultants.com</p>
            </div>
          </div>

          {/* Baghdad Office */}
          <div>
            <h4 className="font-sans text-lg font-semibold mb-3 text-accent">
              BAGHDAD OFFICE
            </h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Office 101 A, AI Arasat St,</p>
              <p>Baghdad Iraq</p>
              <p className="mt-2">+964 773 2008881</p>
              <p>info@akkadconsultants.com</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="interactive hover:text-accent transition-colors duration-300"
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span className="font-sans text-sm tracking-wider">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-sm text-muted-foreground">
          <p>© 2024 Akkad Consultants. All rights reserved.</p>
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