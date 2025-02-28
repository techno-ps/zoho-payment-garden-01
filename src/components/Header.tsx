
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        scrolled ? 'bg-white/80 shadow-sm backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-zoho-text">BillSlayer</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-zoho-text hover:text-zoho-primary transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium text-zoho-text hover:text-zoho-primary transition-colors">
            Pricing
          </a>
          <a href="#addons" className="text-sm font-medium text-zoho-text hover:text-zoho-primary transition-colors">
            Add-ons
          </a>
          <a href="#contact" className="text-sm font-medium text-zoho-text hover:text-zoho-primary transition-colors">
            Contact
          </a>
        </nav>
        
        <div className="hidden md:block">
          <button className="btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
