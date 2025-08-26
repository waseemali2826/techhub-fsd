import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { Link } from 'react-router-dom';
import logo from '/logo.webp';

const Header = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    // Smooth scroll to top when any nav link is clicked
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    closeMobileMenu();
    // Add a small delay to ensure the scroll happens after the route change
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 0);
  };

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-md'
          : 'bg-background'
      }`}
    >
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between mx-auto">
          
          <div className="flex items-center animate-fade-in-fast">
            <div className="p-2 rounded-lg">
              <OptimizedImage
                src={logo}
                alt="Tech Hub Logo"
                className="w-[116px] h-auto object-contain"
                width={116}
                height={40}
                priority
              />
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6 stagger-children">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium hover-scale-fast"
              onClick={handleNavClick}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors font-medium hover-scale-fast"
              onClick={handleNavClick}
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-foreground hover:text-primary transition-colors font-medium hover-scale-fast"
              onClick={handleNavClick}
            >
              Services
            </Link>
            <Link
              to="/courses/free"
              className="text-foreground hover:text-primary transition-colors font-medium hover-scale-fast"
              onClick={handleNavClick}
            >
              Free Courses
            </Link>
            <Link
              to="/courses/paid"
              className="text-foreground hover:text-primary transition-colors font-medium hover-scale-fast"
              onClick={handleNavClick}
            >
              Paid Courses
            </Link>
            <Link
              to="/gallery"
              className="text-foreground hover:text-primary transition-colors font-medium hover-scale-fast"
              onClick={handleNavClick}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium hover-scale-fast"
              onClick={handleNavClick}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button
              asChild
              className="bg-gradient-primary hover:shadow-primary transition-all duration-300 btn-pulse hover-lift-fast"
            >
              <Link to="/courses/free" onClick={handleNavClick}>Enroll Now</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 hover-scale-fast"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in-fast">
            <nav className="flex flex-col space-y-4 stagger-children">
              <Link to="/" className="block py-2 px-4 text-foreground hover:bg-muted rounded-md hover-scale-fast" onClick={handleNavClick}>
                Home
              </Link>
              <Link to="/about" className="block py-2 px-4 text-foreground hover:bg-muted rounded-md hover-scale-fast" onClick={handleNavClick}>
                About
              </Link>
              <Link to="/services" className="block py-2 px-4 text-foreground hover:bg-muted rounded-md hover-scale-fast" onClick={handleNavClick}>
                Services
              </Link>
              <Link to="/courses/free" className="block py-2 px-4 text-foreground hover:bg-muted rounded-md hover-scale-fast" onClick={handleNavClick}>
                Free Courses
              </Link>
              <Link to="/courses/paid" className="block py-2 px-4 text-foreground hover:bg-muted rounded-md hover-scale-fast" onClick={handleNavClick}>
                Paid Courses
              </Link>
              <Link to="/gallery" className="block py-2 px-4 text-foreground hover:bg-accent/10 rounded-md hover-scale-fast" onClick={closeMobileMenu}>
                Gallery
              </Link>
              <Link to="/contact" className="block py-2 px-4 text-foreground hover:bg-accent/10 rounded-md hover-scale-fast" onClick={closeMobileMenu}>
                Contact
              </Link>
              <Button asChild className="bg-gradient-primary w-full btn-pulse hover-lift-fast">
                <Link to="/courses/free" onClick={handleNavClick}>Enroll Now</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
