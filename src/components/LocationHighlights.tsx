import React from 'react';
import { MapPin, Clock, ShoppingBag, Train, Palette, Coffee, Utensils, Camera } from 'lucide-react';

const LocationHighlights: React.FC = () => {
  const locationHighlights = [
    { 
      icon: MapPin, 
      label: 'Galle Face Beach', 
      time: '15 min walk',
      description: 'Famous oceanfront promenade',
      color: 'text-primary-600',
      bgColor: 'bg-primary-50'
    },
    { 
      icon: ShoppingBag, 
      label: 'Boutique Shops', 
      time: '5 min walk',
      description: 'Local markets and stores',
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-50'
    },
    { 
      icon: Train, 
      label: 'Public Transit', 
      time: '10 min walk',
      description: 'Easy city connections',
      color: 'text-accent-600',
      bgColor: 'bg-accent-50'
    },
    { 
      icon: Palette, 
      label: 'Cultural Hotspots', 
      time: '12 min walk',
      description: 'Museums and galleries',
      color: 'text-primary-600',
      bgColor: 'bg-primary-50'
    },
    { 
      icon: Coffee, 
      label: 'Cafés & Restaurants', 
      time: '3 min walk',
      description: 'Local and international cuisine',
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-50'
    },
    { 
      icon: Utensils, 
      label: 'Fine Dining', 
      time: '8 min walk',
      description: 'Premium restaurant district',
      color: 'text-accent-600',
      bgColor: 'bg-accent-50'
    }
  ];

  const neighborhoodFeatures = [
    'Safe, well-lit streets with 24/7 security',
    'Walking distance to major attractions',
    'Easy access to business district',
    'Quiet residential area with local charm',
    'Close to diplomatic quarter',
    'Excellent public transportation links'
  ];

  return (
    <section id="location" className="py-20 bg-gradient-to-br from-sand-50 via-neutral-50 to-primary-50" aria-label="Location and nearby attractions">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-800 mb-6">
            Prime Colombo 7 Location
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
            Discover Sri Lanka's most prestigious neighborhood, where modern convenience 
            meets cultural richness in the heart of the capital
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Location Highlights */}
          <div className="space-y-6" role="list" aria-label="Nearby attractions">
            <h3 className="text-2xl font-heading font-semibold text-neutral-800 mb-8">
              What's Nearby
            </h3>
            {locationHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 card-hover border border-neutral-100"
                  role="listitem"
                >
                  <div className={`${highlight.bgColor} p-4 rounded-xl`}>
                    <IconComponent className={`w-7 h-7 ${highlight.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-heading font-semibold text-lg text-neutral-800">
                        {highlight.label}
                      </h4>
                      <span className="text-sm font-medium text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                        {highlight.time}
                      </span>
                    </div>
                    <p className="text-neutral-600">{highlight.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Neighborhood Image and Features */}
          <div className="space-y-8">
            <div className="relative">
              <img 
                src="/colombo-7 copy.jpg" 
                alt="Colombo 7 Location"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-heading font-bold mb-2">Colombo 7</h3>
                <p className="text-lg font-body opacity-90">Sri Lanka's Premier District</p>
              </div>
            </div>
            
            {/* Neighborhood Features */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-neutral-100">
              <h4 className="text-xl font-heading font-semibold text-neutral-800 mb-6">
                Neighborhood Highlights
              </h4>
              <div className="space-y-3">
                {neighborhoodFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                    <span className="text-neutral-600 font-body">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Location Stats */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg border border-neutral-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-heading font-bold text-primary-600 mb-2">5</div>
              <div className="text-neutral-600 font-body font-medium">Minutes to City Center</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-secondary-600 mb-2">15</div>
              <div className="text-neutral-600 font-body font-medium">Minutes to Airport</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-accent-600 mb-2">50+</div>
              <div className="text-neutral-600 font-body font-medium">Nearby Restaurants</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-neutral-600 font-body font-medium">Neighborhood Security</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHighlights;