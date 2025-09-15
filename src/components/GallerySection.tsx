import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';

const GallerySection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const galleryImages = [
    {
      url: '/room-2 copy copy.jpg',
      title: 'Second Bedroom',
      description: 'Stylish bedroom with teal headboard and ocean artwork'
    },
    {
      url: '/room-3.jpg',
      title: 'Third Bedroom',
      description: 'Elegant bedroom with teal headboard and ocean artwork'
    },
    {
      url: '/living-area.jpg',
      title: 'Living Area',
      description: 'Spacious living room with modern furnishings and dining area'
    },
    {
      url: '/room-1.jpg',
      title: 'Master Bedroom',
      description: 'Comfortable bedroom with modern amenities'
    },
    {
      url: '/kitchen.jpg',
      title: 'Kitchen',
      description: 'Modern kitchen with premium appliances and sleek design'
    },
    {
      url: '/ChatGPT%20Image%20Aug%2020,%202025,%2003_49_07%20PM.png',
      title: 'Dining Area',
      description: 'Outdoor dining space with garden views'
    },
    {
      url: '/Chilling_Area.jpg',
      title: 'Chilling Area',
      description: 'Relaxing outdoor space with comfortable seating and garden views'
    },
    {
      url: '/bathroom.jpg',
      title: 'Bathroom',
      description: 'Luxurious marble bathroom with glass shower and modern fixtures'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-20 bg-white" aria-label="Property photo gallery">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-800 mb-6">
            Property Gallery
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Take a virtual tour through our beautifully designed spaces, 
            where every corner reflects luxury and comfort
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="grid" aria-label="Property images">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer aspect-square card-hover"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`View ${image.title} - ${image.description}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading={index < 3 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <h4 className="font-heading font-semibold text-lg mb-1 text-white">{image.title}</h4>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-black/70 backdrop-blur-sm p-4 rounded-full border border-white/30">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          <div className="relative max-w-6xl max-h-full">
            <button 
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-neutral-300 z-10 bg-black/50 backdrop-blur-sm p-2 rounded-full transition-all duration-300"
              aria-label="Close gallery"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="relative">
              <img 
                src={galleryImages[currentImageIndex].url} 
                alt={galleryImages[currentImageIndex].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 text-white bg-black/50 backdrop-blur-sm p-4 rounded-lg">
                <h4 className="font-heading font-semibold text-lg mb-1">
                  {galleryImages[currentImageIndex].title}
                </h4>
                <p className="text-sm text-neutral-200">
                  {galleryImages[currentImageIndex].description}
                </p>
              </div>
            </div>
            
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-neutral-300 bg-black/50 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-neutral-300 bg-black/50 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;