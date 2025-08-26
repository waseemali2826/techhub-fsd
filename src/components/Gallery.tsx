import React, { useState, useEffect } from 'react';
import "animate.css";
import { X, ChevronLeft, ChevronRight, Users, Calendar, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    { id: 1, type: 'classroom', title: 'Modern Computer Lab', description: 'State-of-the-art computer lab with latest hardware and software' },
    { id: 2, type: 'graduation', title: 'Graduation Ceremony 2024', description: 'Celebrating our successful graduates with certificate distribution' },
    { id: 3, type: 'workshop', title: 'Web Development Workshop', description: 'Hands-on workshop session for advanced web development' },
    { id: 4, type: 'presentation', title: 'Student Project Presentation', description: 'Students presenting their final year projects to industry experts' },
    { id: 5, type: 'lab', title: 'Cybersecurity Lab', description: 'Specialized lab for cybersecurity and ethical hacking courses' },
    { id: 6, type: 'seminar', title: 'Industry Expert Seminar', description: 'Guest lecture by leading tech industry professionals' },
    { id: 7, type: 'training', title: 'Practical Training Session', description: 'Students working on real-world projects with mentor guidance' },
    { id: 8, type: 'award', title: 'Best Student Awards', description: 'Recognition ceremony for outstanding student performance' },
    { id: 9, type: 'collaboration', title: 'Industry Partnership', description: 'Signing MOU with leading technology companies' }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'classroom': return 'bg-blue-100 text-blue-800';
      case 'graduation': return 'bg-green-100 text-green-800';
      case 'workshop': return 'bg-orange-100 text-orange-800';
      case 'presentation': return 'bg-purple-100 text-purple-800';
      case 'lab': return 'bg-red-100 text-red-800';
      case 'seminar': return 'bg-indigo-100 text-indigo-800';
      case 'training': return 'bg-yellow-100 text-yellow-800';
      case 'award': return 'bg-pink-100 text-pink-800';
      case 'collaboration': return 'bg-teal-100 text-teal-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const generatePlaceholderImage = (type: string) => {
    const colors = {
      classroom: 'from-blue-400 to-blue-600',
      graduation: 'from-green-400 to-green-600',
      workshop: 'from-orange-400 to-orange-600',
      presentation: 'from-purple-400 to-purple-600',
      lab: 'from-red-400 to-red-600',
      seminar: 'from-indigo-400 to-indigo-600',
      training: 'from-yellow-400 to-yellow-600',
      award: 'from-pink-400 to-pink-600',
      collaboration: 'from-teal-400 to-teal-600'
    };

    const icons = {
      classroom: '💻',
      graduation: '🎓',
      workshop: '🛠️',
      presentation: '📊',
      lab: '🔬',
      seminar: '👨‍🏫',
      training: '📚',
      award: '🏆',
      collaboration: '🤝'
    };

    return (
      <div className={`w-full h-64 bg-gradient-to-br ${colors[type as keyof typeof colors]} flex items-center justify-center text-6xl`}>
        {icons[type as keyof typeof icons]}
      </div>
    );
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1);
    }
  };

  // Add keyframes for rotation
  const rotate360 = {
    animation: 'spin 2s linear infinite'
  };

  return (
    <section className="w-full bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Heading */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explore Our Campus & Activities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A glimpse into the vibrant life at our institutes, training sessions, graduation ceremonies, 
            and the vibrant learning environment at Tech Hub Faisalabad.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <Card 
              key={item.id} 
              className={`group cursor-pointer overflow-hidden hover-lift hover:shadow-xl transition-all duration-300 animate__animated ${
                index % 3 === 0 ? 'animate__backInUp' :
                index % 3 === 1 ? 'animate__zoomIn' :
                index % 3 === 2 ? 'animate__flipInX' : ''
              } animate__slow animate__delay-${index + 1}s`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden">
                {generatePlaceholderImage(item.type)}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-lg font-semibold mb-2">View Details</div>
                    <div className="text-sm opacity-90">Click to expand</div>
                  </div>
                </div>
                <Badge className={`absolute top-4 right-4 ${getTypeColor(item.type)}`}>
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </Badge>
              </div>
              <div className="p-4 bg-background">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center hover-lift hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInLeft">
            <Users className="mx-auto text-primary mb-4 animate-spin" size={32} />
            <div className="font-display text-2xl font-bold mb-2">5000+</div>
            <div className="text-muted-foreground">Students Trained</div>
          </Card>
          <Card className="p-6 text-center hover-lift hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp">
            <Calendar className="mx-auto text-primary mb-4 animate-spin" size={32} />
            <div className="font-display text-2xl font-bold mb-2">150+</div>
            <div className="text-muted-foreground">Events Conducted</div>
          </Card>
          <Card className="p-6 text-center hover-lift hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInRight">
            <Award className="mx-auto text-primary mb-4 animate-spin" size={32} />
            <div className="font-display text-2xl font-bold mb-2">95%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </Card>
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl w-full max-h-[90vh] bg-background rounded-lg overflow-hidden animate-scale-in" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
              >
                <ChevronRight size={20} />
              </button>

              <div className="h-96">{generatePlaceholderImage(galleryItems[selectedImage].type)}</div>
              
              <div className="p-6">
                <Badge className={`mb-4 ${getTypeColor(galleryItems[selectedImage].type)}`}>
                  {galleryItems[selectedImage].type.charAt(0).toUpperCase() + galleryItems[selectedImage].type.slice(1)}
                </Badge>
                <h3 className="font-display text-2xl font-bold mb-2">{galleryItems[selectedImage].title}</h3>
                <p className="text-muted-foreground">{galleryItems[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

<style>{`
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
`}</style>