import React from 'react';
import { 
  Home, 
  Users, 
  Bed, 
  Bath, 
  KeySquare, 
  Car, 
  Wifi, 
  Briefcase 
} from 'lucide-react';

const QuickFactsBar: React.FC = () => {
  const quickFacts = [
    { icon: Home, label: 'Entire Home', color: 'text-primary-600' },
    { icon: Users, label: 'Sleeps 6', color: 'text-secondary-600' },
    { icon: Bed, label: '3 Bedrooms', color: 'text-accent-600' },
    { icon: Bath, label: '2 Bathrooms', color: 'text-primary-600' },
    { icon: KeySquare, label: 'Self Check-In', color: 'text-secondary-600' },
    { icon: Car, label: 'Free Parking', color: 'text-accent-600' },
    { icon: Wifi, label: 'Wi-Fi', color: 'text-primary-600' },
    { icon: Briefcase, label: 'Workspace', color: 'text-secondary-600' }
  ];

  return (
    <section id="quick-facts" className="py-16 bg-gradient-to-r from-sand-50 to-neutral-50" aria-label="Property quick facts">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-800 mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover the premium amenities and features that make your stay exceptional
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6" role="list" aria-label="Property amenities">
          {quickFacts.map((fact, index) => {
            const IconComponent = fact.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                role="listitem"
              >
                <div className="bg-white p-6 rounded-2xl shadow-md group-hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-sand-50 transition-all duration-500 mb-4 border border-neutral-100 group-hover:border-primary-200 transform group-hover:-translate-y-2">
                  <IconComponent className={`w-8 h-8 ${fact.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <span className="text-sm font-heading font-semibold text-neutral-700 group-hover:text-primary-600 transition-all duration-300 group-hover:scale-105">
                  {fact.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickFactsBar;