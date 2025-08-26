import React from 'react';
import 'animate.css';
import { ArrowRight, Facebook, Instagram, ExternalLink } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Free Courses', href: '/courses/free' },
    { label: 'Paid Courses', href: '/courses/paid' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  const courses = [
    'Full Stack Development',
    'Cybersecurity',
    'Digital Marketing',
    'Graphic Design',
    'Data Science',
    'Cloud Computing',
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/techhubfaisalabad' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/techhubfaisalabad' },
    { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/923001234567' },
  ];

  const handleNavigation = (e: React.MouseEvent, path: string) => {
    e.preventDefault();

    // Handle external links
    if (path.startsWith('http')) {
      window.open(path, '_blank');
      return;
    }

    // Handle anchor links (links starting with # or /#)
    if (path.startsWith('#') || path.includes('/#')) {
      const [basePath, hash] = path.split('#');
      const targetId = hash || basePath.substring(1);
      
      // If we're already on the home page, just scroll
      if (location.pathname === '/') {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home first, then scroll
        navigate('/', {
          state: { scrollTo: targetId }
        });
      }
      return;
    }

    // Handle internal navigation (non-anchor links)
    if (path.startsWith('/')) {
      // Handle normal page navigation
      navigate(path);
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h1 className="font-display font-bold text-xl text-background mb-2 animate__animated animate__fadeInLeft animate__faster">Tech Hub</h1>
            <p className="text-sm text-muted opacity-80 mb-6 animate__animated animate__fadeInLeft animate__faster">Faisalabad</p>
            <p className="text-muted mb-6 leading-relaxed animate__animated animate__fadeInLeft animate__faster">
              Faisalabad's largest IT learning institute empowering young minds with 
              cutting-edge IT skills through expert-led courses and industry partnerships.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-background animate__animated animate__fadeInDown animate__faster">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavigation(e, link.href)}
                    className="flex items-center gap-2 group transition-all duration-300 text-background hover:underline cursor-pointer"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform flex-shrink-0 animate__animated animate__rotateIn animate__faster" />
                    <span className="animate__animated animate__fadeIn animate__faster group-hover:animate__pulse">{link.label}</span>
                    {link.href.startsWith('http') && <ExternalLink size={12} className="opacity-70" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-background animate__animated animate__fadeInDown animate__faster">Popular Courses</h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a
                    href="/courses/free"
                    onClick={(e) => handleNavigation(e, '/courses/free')}
                    className="flex items-center gap-2 group transition-all duration-300 text-left text-background w-full hover:underline cursor-pointer"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform flex-shrink-0 animate__animated animate__rotateIn animate__faster" />
                    <span className="text-sm animate__animated animate__fadeIn animate__faster group-hover:animate__pulse">{course}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-background animate__animated animate__fadeInDown animate__faster">Stay Updated</h3>
            <p className="text-muted mb-4 text-sm animate__animated animate__fadeIn animate__faster">
              Subscribe to get updates about new courses, events, and opportunities.
            </p>
            <div className="space-y-3">
              <Input
                placeholder="Enter your email"
                className="bg-background/10 border-muted text-background placeholder:text-muted/70"
              />
              <Button className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300 animate__animated animate__pulse animate_slow" onClick={e => { e.currentTarget.classList.add('animate__zoomIn'); setTimeout(() => e.currentTarget.classList.remove('animate__zoomIn'), 700); }}>
                Subscribe
                <ArrowRight size={16} className="ml-2 animate__animated animate__rotateIn animate__faster" />
              </Button>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-3 text-background animate__animated animate__fadeInDown animate__faster">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <social.icon size={18} className="group-hover:scale-110 transition-transform animate__animated animate__rotateIn animate__faster group-hover:animate__pulse" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Partner Info */}
        <div className="bg-gradient-primary rounded-lg p-6 mb-8 text-center animate__animated animate__fadeInUp animate__faster">
          <h3 className="font-display text-xl font-bold text-accent-foreground mb-2 animate__animated animate__fadeIn animate__faster">
            Official Partner of NAVTTC
          </h3>
          <p className="text-accent-foreground/80 text-sm animate__animated animate__fadeIn animate__faster">
            National Vocational & Technical Training Commission - Government of Pakistan
          </p>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-muted/20 pt-8 animate__animated animate__fadeIn animate__faster">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="text-muted text-sm animate__animated animate__fadeIn animate__faster">
              © {currentYear} Tech Hub Faisalabad. All rights reserved.
            </div>
            <div className="text-muted text-sm animate__animated animate__fadeIn animate__faster">
               Developed by <a href="https://waseemportfolioweb.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-primary/80 transition-colors font-bold">Waseem</a> &amp; <a href="https://alihassan-online.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-primary/80 transition-colors font-bold">Ali</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;