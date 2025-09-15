import React from 'react';
import { Shield, Sun, ChefHat, Bath, MapPin } from 'lucide-react';

const AboutProperty: React.FC = () => {
  const propertyFeatures = [
    {
      icon: Shield,
      title: '24/7 Security & CCTV',
      description: 'Feel safe and secure with round-the-clock security and comprehensive surveillance systems throughout the property.',
      color: 'text-primary-600',
      bgColor: 'bg-primary-50'
    },
    {
      icon: Sun,
      title: 'Cozy Balcony + Outdoor Dining',
      description: 'Enjoy your morning coffee or evening meals in our beautiful outdoor space with stunning city views.',
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-50'
    },
    {
      icon: ChefHat,
      title: 'Sleek Modern Kitchen',
      description: 'Cook like a pro with premium appliances, modern amenities, and everything you need for culinary adventures.',
      color: 'text-accent-600',
      bgColor: 'bg-accent-50'
    },
    {
      icon: Bath,
      title: 'Spa-Style Bathrooms',
      description: 'Relax and unwind in our luxurious bathrooms featuring premium fixtures and fresh, high-quality linens.',
      color: 'text-primary-600',
      bgColor: 'bg-primary-50'
    },
    {
      icon: MapPin,
      title: 'Prime Colombo 7 Location',
      description: 'Located in a safe, quiet neighborhood with easy access to shops, restaurants, and major attractions.',
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-50'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-sand-50 to-neutral-50" itemScope itemType="https://schema.org/LodgingBusiness">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-800 mb-6" itemProp="name">
            About Kohomba Gaha Residencies
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed" itemProp="description">
            Experience the perfect blend of modern luxury and Sri Lankan hospitality in our 
            thoughtfully designed 3,000 sq ft home, where every detail has been carefully 
            curated for your comfort and enjoyment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {propertyFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 card-hover border border-neutral-100"
              >
                <div className="flex items-start gap-6">
                  <div className={`${feature.bgColor} p-4 rounded-xl flex-shrink-0`}>
                    <IconComponent className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold mb-3 text-neutral-800">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Additional Info Card */}
        <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg border border-neutral-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-heading font-bold text-primary-600 mb-2" itemProp="floorSize" itemScope itemType="https://schema.org/QuantitativeValue">
                <span itemProp="value">3,000</span>
                <meta itemProp="unitCode" content="FTK" />
              </div>
              <div className="text-neutral-600 font-medium">Square Feet of Luxury</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-secondary-600 mb-2">100%</div>
              <div className="text-neutral-600 font-medium">Air Conditioned</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-accent-600 mb-2" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                <span itemProp="ratingValue">5</span>★
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="worstRating" content="1" />
                <meta itemProp="reviewCount" content="127" />
              </div>
              <div className="text-neutral-600 font-medium">Guest Rating</div>
            </div>
          </div>
        </div>
        
        {/* Hidden structured data */}
        <div style={{ display: 'none' }}>
          <span itemProp="telephone">+94766190315</span>
          <span itemProp="email">kohombagaharesidencies@gmail.com</span>
          <span itemProp="numberOfRooms">3</span>
          <span itemProp="checkinTime">15:00</span>
          <span itemProp="checkoutTime">11:00</span>
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="addressLocality">Colombo</span>
            <span itemProp="addressRegion">Western Province</span>
            <span itemProp="addressCountry">LK</span>
            <span itemProp="postalCode">00700</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProperty;