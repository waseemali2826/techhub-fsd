import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import 'animate.css';
import { Link } from 'react-router-dom';
import logo from '/logo.webp';

const Header = () => {
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
          
          <div className="flex items-center animate-fade-in">
            <div className="p-2 rounded-lg">
              <img
                src={logo}
                alt="Tech Hub Logo"
                className="w-[116px] h-auto object-contain"
              />
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium animate__animated animate__fadeInDown animate__faster"
              onClick={e => { e.currentTarget.classList.add('animate__zoomIn', 'animate__slow'); handleNavClick(e); setTimeout(() => { e.currentTarget.classList.remove('animate__zoomIn', 'animate__slow'); }, 1200); }}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary transition-colors font-medium animate__animated animate__fadeInDown animate__faster"
              onClick={e => { e.currentTarget.classList.add('animate__zoomIn', 'animate__slow'); handleNavClick(e); setTimeout(() => { e.currentTarget.classList.remove('animate__zoomIn', 'animate__slow'); }, 1200); }}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-foreground hover:text-primary transition-colors font-medium animate__animated animate__fadeInDown animate__faster"
              onClick={e => { e.currentTarget.classList.add('animate__zoomIn', 'animate__slow'); handleNavClick(e); setTimeout(() => { e.currentTarget.classList.remove('animate__zoomIn', 'animate__slow'); }, 1200); }}
            >
              Services
            </Link>
            <Link 
              to="/courses/free" 
              className="text-foreground hover:text-primary transition-colors font-medium animate__animated animate__fadeInDown animate__faster"
              onClick={e => { e.currentTarget.classList.add('animate__zoomIn', 'animate__slow'); handleNavClick(e); setTimeout(() => { e.currentTarget.classList.remove('animate__zoomIn', 'animate__slow'); }, 1200); }}
            >
              Free Courses
            </Link>
            <Link 
              to="/courses/paid" 
              className="text-foreground hover:text-primary transition-colors font-medium animate__animated animate__fadeInDown animate__faster"
              onClick={e => { e.currentTarget.classList.add('animate__zoomIn', 'animate__slow'); handleNavClick(e); setTimeout(() => { e.currentTarget.classList.remove('animate__zoomIn', 'animate__slow'); }, 1200); }}
            >
              Paid Courses
            </Link>
            <Link 
              to="/gallery" 
              className="text-foreground hover:text-primary transition-colors font-medium animate__animated animate__fadeInDown animate__faster"
              onClick={e => { e.currentTarget.classList.add('animate__zoomIn', 'animate__slow'); handleNavClick(e); setTimeout(() => { e.currentTarget.classList.remove('animate__zoomIn', 'animate__slow'); }, 1200); }}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-primary transition-colors font-medium animate__animated animate__fadeInDown animate__faster"
              onClick={e => { e.currentTarget.classList.add('animate__zoomIn', 'animate__slow'); handleNavClick(e); setTimeout(() => { e.currentTarget.classList.remove('animate__zoomIn', 'animate__slow'); }, 1200); }}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button
              asChild
              className="bg-gradient-primary hover:shadow-primary transition-all duration-300 animate__animated animate__pulse animate__infinite"
              onClick={e => { e.currentTarget.classList.add('animate__zoomIn'); setTimeout(() => e.currentTarget.classList.remove('animate__zoomIn'), 100); }}
            >
              <Link to="/courses/free" onClick={handleNavClick}>Enroll Now</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="block py-2 px-4 text-foreground hover:bg-muted rounded-md animate__animated animate__fadeInLeft animate__faster" onClick={e => { e.currentTarget.classList.add('animate__zoomIn'); handleNavClick(e); setTimeout(() => e.currentTarget.classList.remove('animate__zoomIn'), 700); }}>
                Home
              </Link>
              <Link to="/about" className="block py-2 px-4 text-foreground hover:bg-muted rounded-md animate__animated animate__fadeInLeft animate__faster" onClick={e => { e.currentTarget.classList.add('animate__zoomIn'); handleNavClick(e); setTimeout(() => e.currentTarget.classList.remove('animate__zoomIn'), 700); }}>
                About
              </Link>
              <Link to="/services" className="block py-2 px-4 text-foreground hover:bg-muted rounded-md animate__animated animate__fadeInLeft animate__faster" onClick={e => { e.currentTarget.classList.add('animate__zoomIn'); handleNavClick(e); setTimeout(() => e.currentTarget.classList.remove('animate__zoomIn'), 700); }}>
                Services
              </Link>
              <Link to="/courses/free" className="block py-2 px-4 text-foreground hover:bg-muted rounded-md animate__animated animate__fadeInLeft animate__faster" onClick={e => { e.currentTarget.classList.add('animate__zoomIn'); handleNavClick(e); setTimeout(() => e.currentTarget.classList.remove('animate__zoomIn'), 700); }}>
                Free Courses
              </Link>
              <Link to="/courses/paid" className="block py-2 px-4 text-foreground hover:bg-muted rounded-md animate__animated animate__fadeInLeft animate__faster" onClick={e => { e.currentTarget.classList.add('animate__zoomIn'); handleNavClick(e); setTimeout(() => e.currentTarget.classList.remove('animate__zoomIn'), 700); }}>
                Paid Courses
              </Link>
              <Link to="/gallery" className="block py-2 px-4 text-foreground hover:bg-accent/10 rounded-md animate__animated animate__fadeInLeft animate__faster" onClick={e => { e.currentTarget.classList.add('animate__zoomIn'); closeMobileMenu(); setTimeout(() => e.currentTarget.classList.remove('animate__zoomIn'), 700); }}>
                Gallery
              </Link>
              <Link to="/contact" className="block py-2 px-4 text-foreground hover:bg-accent/10 rounded-md animate__animated animate__fadeInLeft animate__faster" onClick={e => { e.currentTarget.classList.add('animate__zoomIn'); closeMobileMenu(); setTimeout(() => e.currentTarget.classList.remove('animate__zoomIn'), 700); }}>
                Contact
              </Link>
              <Button asChild className="bg-gradient-primary w-full animate__animated animate__pulse animate__infinite"
                onClick={e => { e.currentTarget.classList.add('animate__zoomIn'); setTimeout(() => e.currentTarget.classList.remove('animate__zoomIn'), 1200); }}>
                <Link to="/courses/free" onClick={handleNavClick}>Enroll Now</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;