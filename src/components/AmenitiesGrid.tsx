import React from 'react';
import { 
  AirVent, 
  Sun, 
  Shirt, 
  WashingMachine, 
  Briefcase,
  Plug,
  ChefHat,
  Microwave,
  Utensils,
  Wifi,
  Tv,
  Car
} from 'lucide-react';

const AmenitiesGrid: React.FC = () => {
  const amenities = {
    'Comfort & Convenience': {
      items: [
        { icon: AirVent, label: 'Air Conditioning', color: 'text-primary-600' },
        { icon: Sun, label: 'Blackout Curtains', color: 'text-secondary-600' },
        { icon: Shirt, label: 'Fresh Linens', color: 'text-accent-600' },
        { icon: WashingMachine, label: 'Washing Machine', color: 'text-primary-600' },
        { icon: Briefcase, label: 'Workspace', color: 'text-secondary-600' },
        { icon: Plug, label: 'International Plugs', color: 'text-accent-600' }
      ],
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-200'
    },
    'Kitchen': {
      items: [
        { icon: ChefHat, label: 'Full Oven', color: 'text-secondary-600' },
        { icon: Microwave, label: 'Microwave', color: 'text-accent-600' },
        { icon: Utensils, label: 'Dishwasher', color: 'text-primary-600' },
        { icon: ChefHat, label: 'Air Fryer', color: 'text-secondary-600' },
        { icon: ChefHat, label: 'Rice Cooker', color: 'text-accent-600' },
        { icon: Utensils, label: 'Full Dinnerware', color: 'text-primary-600' }
      ],
      bgColor: 'bg-secondary-50',
      borderColor: 'border-secondary-200'
    },
    'Tech & Entertainment': {
      items: [
        { icon: Wifi, label: 'High-Speed Wi-Fi', color: 'text-accent-600' },
        { icon: Tv, label: 'Smart TV', color: 'text-primary-600' }
      ],
      bgColor: 'bg-accent-50',
      borderColor: 'border-accent-200'
    },
    'Extras': {
      items: [
        { icon: Car, label: 'Free Parking', color: 'text-primary-600' },
        { icon: Shirt, label: 'Optional Cleaning Service', color: 'text-secondary-600' }
      ],
      bgColor: 'bg-neutral-50',
      borderColor: 'border-neutral-200'
    }
  };

  return (
    <section id="amenities" className="py-20 bg-white" aria-label="Property amenities and features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-800 mb-6">
            Premium Amenities
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Every amenity has been carefully selected to ensure your stay is comfortable, 
            convenient, and memorable
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12" role="list">
          {Object.entries(amenities).map(([category, categoryData]) => (
            <div 
              key={category} 
              className={`${categoryData.bgColor} p-8 rounded-2xl border ${categoryData.borderColor} card-hover`}
              role="listitem"
            >
              <h3 className="text-2xl font-heading font-semibold mb-8 text-neutral-800 text-center">
                {category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
                {categoryData.items.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100"
                      role="listitem"
                    >
                      <div className="bg-neutral-50 p-3 rounded-lg">
                        <IconComponent className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <span className="font-medium text-neutral-700 font-body">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        {/* Feature Highlight */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 p-8 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-heading font-bold mb-4">
            Everything You Need for the Perfect Stay
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            From high-speed internet for remote work to a fully equipped kitchen for home-cooked meals, 
            we've thought of every detail to make your stay exceptional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesGrid;