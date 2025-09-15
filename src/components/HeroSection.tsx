import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToGallery = () => {
    const element = document.querySelector('#gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/kohomba-gaha-residencies-exterior.png)'
        }}
        role="img"
        aria-label="Luxury home exterior in Colombo 7"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 via-neutral-800/70 to-primary-900/75"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary-400/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-6xl mx-auto animate-fade-in pt-20 sm:pt-0">
        <div className="mb-6">
          <span className="inline-block bg-white/10 backdrop-blur-sm text-secondary-200 px-4 py-2 rounded-full text-sm font-medium border border-white/20">
            ✨ Luxury Short-Term Rental
          </span>
        </div>
        
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold mb-3 sm:mb-4 md:mb-6 leading-tight shadow-2xl" itemProp="name">
          <span className="text-white">Modern Urban Oasis in</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-primary-300">
            Prestigious Colombo 7
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 text-neutral-200 max-w-3xl mx-auto font-body leading-relaxed" itemProp="description">
          A serene 3-bedroom luxury home with tropical charm and city convenience, 
          where modern elegance meets Sri Lankan hospitality
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link 
            to="/booking"
            className="group bg-primary-500 hover:bg-primary-600 text-white px-10 py-4 rounded-xl font-heading font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3"
            aria-label="Book your stay at Kohomba Gaha Residencies"
          >
            Book Your Stay
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          
          <button 
            onClick={scrollToGallery}
            className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-10 py-4 rounded-xl font-heading font-semibold text-lg transition-all duration-300 flex items-center gap-3"
            aria-label="View property gallery"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            View Gallery
          </button>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-secondary-300 mb-2">3,000</div>
            <div className="text-sm text-neutral-300 font-medium">Sq Ft</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-secondary-300 mb-2">6</div>
            <div className="text-sm text-neutral-300 font-medium">Guests</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-secondary-300 mb-2">3</div>
            <div className="text-sm text-neutral-300 font-medium">Bedrooms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-secondary-300 mb-2">2</div>
            <div className="text-sm text-neutral-300 font-medium">Bathrooms</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;