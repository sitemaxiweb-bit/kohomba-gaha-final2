import React from 'react';
import Navbar from '../components/Navbar';
import { Shield, Sun, ChefHat, Bath, MapPin, Mail, Phone, MessageCircle, Calendar, Star, Award } from 'lucide-react';
import AmenitiesGrid from '../components/AmenitiesGrid';
import LocationHighlights from '../components/LocationHighlights';

const AboutPage: React.FC = () => {
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

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email Us',
      value: 'kohombagaharesidencies@gmail.com',
      action: 'mailto:kohombagaharesidencies@gmail.com',
      color: 'text-primary-600',
      bgColor: 'bg-primary-50'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+94 76 619 0315',
      action: 'https://wa.me/94766190315',
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-50'
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: '+94 76 619 0315',
      action: 'tel:+94766190315',
      color: 'text-accent-600',
      bgColor: 'bg-accent-50'
    }
  ];
  
  return (
    <main className="min-h-screen bg-neutral-50" itemScope itemType="https://schema.org/LodgingBusiness">
      <Navbar />
      
      {/* About Property Section */}
      <section className="py-20 bg-gradient-to-br from-sand-50 to-neutral-50 mt-20" aria-label="About our property">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-neutral-800 mb-6" itemProp="name">
              About Kohomba Gaha Residencies
            </h1>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed" itemProp="description">
              Experience the perfect blend of modern luxury and Sri Lankan hospitality in our 
              thoughtfully designed 3,000 sq ft home, where every detail has been carefully 
              curated for your comfort and enjoyment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" role="list" aria-label="Property features">
            {propertyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 card-hover border border-neutral-100"
                  role="listitem"
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
      
      {/* Amenities Section */}
      <AmenitiesGrid />
      
      {/* Location Section */}
      <LocationHighlights />
      
      {/* Contact Section */}
      <section id="contact-section" className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden" itemScope itemType="https://schema.org/ContactPage">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 bg-secondary-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to book your luxury stay? We're here to help make your Sri Lankan getaway unforgettable.
            </p>
            
            {/* Highlights */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Star className="w-5 h-5 text-secondary-200" />
                <span className="text-white font-medium">Guest Rating</span>
                <span className="text-secondary-200 font-semibold">4.9/5</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Award className="w-5 h-5 text-secondary-200" />
                <span className="text-white font-medium">Superhost</span>
                <span className="text-secondary-200 font-semibold">2023</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Calendar className="w-5 h-5 text-secondary-200" />
                <span className="text-white font-medium">Instant Book</span>
                <span className="text-secondary-200 font-semibold">Available</span>
              </div>
            </div>
          </div>
          
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" role="list" aria-label="Contact methods">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={index}
                  href={method.action}
                  className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 text-center card-hover"
                  role="listitem"
                  aria-label={`Contact us via ${method.label}`}
                  itemProp="contactPoint"
                  itemScope
                  itemType="https://schema.org/ContactPoint"
                >
                  <meta itemProp="contactType" content="customer service" />
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-3">
                    {method.label}
                  </h3>
                  <p className="text-white/80 group-hover:text-white transition-colors duration-300" itemProp={method.label === 'Email Us' ? 'email' : 'telephone'}>
                    {method.value}
                  </p>
                </a>
              );
            })}
          </div>
          
          {/* Footer Info */}
          <div className="text-center border-t border-white/20 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
              <div>
                <h4 className="font-heading font-semibold text-white mb-3">Property</h4>
                <p itemProp="name">Kohomba Gaha Residencies</p>
                <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <p>
                    <span itemProp="addressLocality">Colombo 7</span>, 
                    <span itemProp="addressCountry">Sri Lanka</span>
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-white mb-3">Quick Info</h4>
                <p><span itemProp="numberOfRooms">3</span> Bedrooms • 2 Bathrooms</p>
                <p>Sleeps 6 • 3,000 sq ft</p>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-white mb-3">Support</h4>
                <p>24/7 Guest Support</p>
                <p>Instant Response Guarantee</p>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white/60">
                © 2024 Kohomba Gaha Residencies. All rights reserved. 
                <span className="mx-2">•</span>
                Luxury short-term rentals in Colombo 7, Sri Lanka.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;