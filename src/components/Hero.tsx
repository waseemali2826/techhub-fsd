import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/ui/optimized-image';
import React, { useState, useEffect, useCallback, useMemo } from 'react';

const switchImages = [
  { src: '/images/front.webp', alt: 'Tech Hub Course Preview 1' },
  { src: '/images/front2.webp', alt: 'Tech Hub Course Preview 2' },
  { src: '/images/front3.webp', alt: 'Tech Hub Course Preview 3' },
];

const ImageSwitcher = React.memo(() => {
  const [index, setIndex] = useState(0);

  const nextImage = useCallback(() => {
    setIndex((prev) => (prev + 1) % switchImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextImage, 3000);
    return () => clearInterval(timer);
  }, [nextImage]);

  const currentImage = useMemo(() => switchImages[index], [index]);

  return (
    <div className="relative w-full max-w-xl h-64 sm:h-80 md:h-96 overflow-hidden rounded-xl shadow-lg flex items-center justify-center bg-slate-100 gpu-accelerated" aria-label="Course Preview Images">
      <OptimizedImage
        src={currentImage.src}
        alt={currentImage.alt}
        className="object-cover w-full h-64 sm:h-80 md:h-96 rounded-xl shadow-lg transition-opacity duration-500"
        width={600}
        height={400}
        priority={index === 0}
      />
    </div>
  );
});

const Hero = React.memo(() => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section id="home" className="relative bg-gradient-subtle flex flex-col items-center pt-4 pb-10 scroll-mt-20" aria-label="Hero Section">
      {/* Scrolling Images Carousel */}
      <nav aria-label="Partners and Sponsors" className="w-full flex justify-start overflow-hidden mb-6">
        <div className="relative w-full h-12 sm:h-20">
          <div
            className="flex gap-8 animate-scroll-x items-center gpu-accelerated"
            tabIndex={0}
            aria-label="Scrolling partner logos"
          >
            {/* Logos scrolling */}
            <OptimizedImage src="/logo.webp" alt="Tech Hub Logo" className="h-12 sm:h-16 w-auto rounded-xl shadow-lg" width={64} height={64} />
            <OptimizedImage src="/navtec-removebg-preview.webp" alt="Navtec Partner Logo" className="h-12 sm:h-16 w-auto rounded-xl shadow-lg" width={64} height={64} />
            <OptimizedImage src="/pseb-logo.webp" alt="PSEB Partner Logo" className="h-12 sm:h-16 w-auto rounded-xl shadow-lg" width={64} height={64} />
            <OptimizedImage src="/images/HEC Logo.webp" alt="HEC Partner Logo" className="h-12 sm:h-16 w-auto rounded-xl shadow-lg" width={64} height={64} />
            {/* Repeat for loop effect */}
            <OptimizedImage src="/logo.webp" alt="Tech Hub Logo" className="h-12 sm:h-16 w-auto rounded-xl shadow-lg" width={64} height={64} />
            <OptimizedImage src="/navtec-removebg-preview.webp" alt="Navtec Partner Logo" className="h-12 sm:h-16 w-auto rounded-xl shadow-lg" width={64} height={64} />
            <OptimizedImage src="/pseb-logo.webp" alt="PSEB Partner Logo" className="h-12 sm:h-16 w-auto rounded-xl shadow-lg" width={64} height={64} />
            <OptimizedImage src="/images/HEC Logo.webp" alt="HEC Partner Logo" className="h-12 sm:h-16 w-auto rounded-xl shadow-lg" width={64} height={64} />
          </div>
        </div>
      </nav>


      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side Text */}
          <header className="space-y-8 animate-fade-in-fast" aria-label="Hero Text">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              <span className="animate-text-alternate font-bold">Faisalabad's</span>{' '}
              <span className="animate-text-pulse font-bold">Largest IT Learning Institute</span>
            </h1>
            <p className="text-lg sm:text-xl mt-4 sm:mt-6 leading-relaxed text-black">
              <span className="font-bold text-black">TECH HUB</span>{' '}
              empowers young minds with cutting-edge IT skills through expert-led courses. 
              We aim to drive innovation and contribute to economic growth. Join us to shape the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 sm:pt-4 stagger-children">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-primary transition-all duration-300 group hover-lift-fast btn-pulse focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => scrollToSection('free-courses')}
                aria-label="Enroll in Free Courses"
              >
                Enroll in Free Courses
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-scale-fast focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => scrollToSection('paid-courses')}
                aria-label="View Paid Courses"
              >
                View Paid Courses
              </Button>
            </div>
          </header>

          {/* Right Side Carousel */}
          <div className="flex justify-center items-center animate-scale-in-fast">
            <ImageSwitcher />
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
