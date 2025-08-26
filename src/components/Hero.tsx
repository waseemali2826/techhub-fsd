import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import React, { useState, useEffect } from 'react';

const switchImages = [
  { src: '/images/front.webp', alt: 'Image 1' },
  { src: '/images/front2.webp', alt: 'Image 2' },
  { src: '/images/front3.webp', alt: 'Image 3' },
];

function ImageSwitcher() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % switchImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-xl h-64 sm:h-80 md:h-96 overflow-hidden rounded-xl shadow-lg flex items-center justify-center bg-slate-100" aria-label="Course Preview Images" aria-live="polite">
      <img
        src={switchImages[index].src}
        alt={`Tech Hub Course Preview ${index + 1}`}
        className="object-cover w-full h-64 sm:h-80 md:h-96 rounded-xl shadow-lg transition-all duration-500"
        key={switchImages[index].src}
        loading="lazy"
        role="img"
        width="600"
        height="400"
      />
    </div>
  );
}

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-subtle flex flex-col items-center pt-4 pb-10 scroll-mt-20" aria-label="Hero Section">
      {/* Scrolling Images Carousel */}
      <nav aria-label="Partners and Sponsors" className="w-full flex justify-start overflow-hidden mb-6">
        <div className="relative w-full h-12 sm:h-20">
          <div
            className="flex gap-8 animate-scroll-x-ltr items-center"
            style={{ animation: 'scrollXLTR 18s linear infinite' }}
            tabIndex={0}
            aria-label="Scrolling partner logos"
          >
            {/* Logos scrolling */}
            <img src="/logo.webp" alt="Tech Hub Logo" className="h-12 sm:h-16 w-auto rounded-xl shadow-lg" loading="lazy" role="img" width="64" height="64" />
            <img src="/navtec-removebg-preview.webp" alt="Navtec Partner Logo" className="h-12 sm:h-16 w-auto rounded-xl shadow-lg" loading="lazy" role="img" width="64" height="64" />
            <img src="/pseb-logo.webp" alt="PSEB Partner Logo" className="h-12 sm:h-16 w-auto rounded-xl shadow-lg" loading="lazy" role="img" width="64" height="64" />
            <img src="/images/HEC Logo.webp" alt="HEC Partner Logo" className="h-12 sm:h-16 w-auto rounded-xl shadow-lg" loading="lazy" role="img" width="64" height="64" />
            {/* Repeat for loop effect */}
            <img src="/logo.webp" alt="Tech Hub Logo" className="h-12 sm:h-16 w-auto rounded-xl shadow-lg" loading="lazy" role="img" width="64" height="64" />
            <img src="/navtec-removebg-preview.webp" alt="Navtec Partner Logo" className="h-12 sm:h-16 w-auto rounded-xl shadow-lg" loading="lazy" role="img" width="64" height="64" />
            <img src="/pseb-logo.webp" alt="PSEB Partner Logo" className="h-12 sm:h-16 w-auto rounded-xl shadow-lg" loading="lazy" role="img" width="64" height="64" />
            <img src="/images/HEC Logo.webp" alt="HEC Partner Logo" className="h-12 sm:h-16 w-auto rounded-xl shadow-lg" loading="lazy" role="img" width="64" height="64" />
          </div>
        </div>
      </nav>

      <style>{`
        @keyframes scrollXLTR {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(calc(100vw - 320px)); }
        }
        .animate-scroll-x-ltr {
          min-width: 100vw;
        }
        @keyframes faisalabadBlue {
          0%, 49% { color: #2563eb; }
          50%, 100% { color: #111; }
        }
        @keyframes instituteBlue {
          0%, 49% { color: #111; }
          50%, 100% { color: #2563eb; }
        }
        .faisalabad-animate {
          animation: faisalabadBlue 2.5s infinite;
          font-weight: bold;
        }
        .institute-animate {
          animation: instituteBlue 2.5s infinite;
          font-weight: bold;
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side Text */}
          <header className="space-y-8 animate__animated animate__fadeIn animate__faster" aria-label="Hero Text">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              <span className="faisalabad-animate">Faisalabad's</span>{' '}
              <span className="institute-animate">Largest IT Learning Institute</span>
            </h1>
            <p className="text-lg sm:text-xl mt-4 sm:mt-6 leading-relaxed text-black">
              <span className="font-bold text-black">TECH HUB</span>{' '}
              empowers young minds with cutting-edge IT skills through expert-led courses. 
              We aim to drive innovation and contribute to economic growth. Join us to shape the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 sm:pt-4">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-primary transition-all duration-300 group animate__animated animate__fadeInLeft animate__faster focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => scrollToSection('free-courses')}
                aria-label="Enroll in Free Courses"
              >
                Enroll in Free Courses
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground animate__animated animate__fadeInRight animate__faster focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => scrollToSection('paid-courses')}
                aria-label="View Paid Courses"
              >
                View Paid Courses
              </Button>
            </div>
          </header>

          {/* Right Side Carousel */}
          <div className="flex justify-center items-center animate__animated animate__fadeInRight animate__faster">
            <ImageSwitcher />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
