import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Home, Image, Info, MapPin, Users, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero', icon: Home, type: 'scroll' },
    { name: 'Gallery', href: '#gallery', icon: Image, type: 'scroll' },
    { name: 'About', href: '/about', icon: Info, type: 'route' },
    { name: 'Amenities', href: '#amenities', icon: Users, type: 'scroll' },
    { name: 'Location', href: '#location', icon: MapPin, type: 'scroll' },
    { name: 'Contact', href: '#contact', icon: Phone, type: 'scroll' },
  ];

  const handleNavigation = (href: string, type: string) => {
    if (type === 'route') {
      navigate(href);
      setIsOpen(false);
      return;
    }
    
    // For scroll type navigation
    if (location.pathname === '/') {
      // Already on home page, just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On different page, navigate to home with hash
      navigate(`/${href}`, { replace: true });
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/"
              className="font-heading font-bold text-xl md:text-2xl text-primary-700 hover:text-primary-600 transition-colors duration-300"
              aria-label="Kohomba Gaha Residencies - Home"
            >
              Kohomba Gaha Residencies
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              item.type === 'route' ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group"
                  aria-label={`Navigate to ${item.name} page`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href, item.type)}
                  className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group"
                  aria-label={`Scroll to ${item.name} section`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              )
            ))}
            <button 
              onClick={() => navigate('/booking')}
              className="btn-primary ml-4"
              aria-label="Book your stay now"
            >
              Book Now
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-700 hover:text-primary-600 transition-colors duration-300 p-2"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`} role="navigation" aria-label="Mobile navigation">
          <div className="py-4 space-y-2 border-t border-neutral-200">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                item.type === 'route' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 w-full text-left px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-sand-50 rounded-lg transition-all duration-300"
                    aria-label={`Navigate to ${item.name} page`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href, item.type)}
                    className="flex items-center space-x-3 w-full text-left px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-sand-50 rounded-lg transition-all duration-300"
                    aria-label={`Scroll to ${item.name} section`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                )
              );
            })}
            <div className="pt-4 px-4">
              <button 
                onClick={() => navigate('/booking')}
                className="btn-primary w-full"
                aria-label="Book your stay now"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;