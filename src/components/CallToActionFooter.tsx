import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MessageCircle, Calendar, Star, Award } from 'lucide-react';

const CallToActionFooter: React.FC = () => {
  const navigate = useNavigate();

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

  const highlights = [
    { icon: Star, label: '5-Star Rating', value: '4.9/5' },
    { icon: Award, label: 'Superhost', value: '2023' },
    { icon: Calendar, label: 'Instant Book', value: 'Available' }
  ];

  return (
    <footer id="contact" className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden" role="contentinfo" itemScope itemType="https://schema.org/ContactPage">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-secondary-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Your Luxury Stay Awaits in<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-200 to-accent-200">
              Colombo 7
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience the perfect blend of modern comfort and tropical charm in Sri Lanka's 
            most prestigious neighborhood. Book your unforgettable stay today.
          </p>
          
          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <IconComponent className="w-5 h-5 text-secondary-200" />
                  <span className="text-white font-medium">{highlight.label}</span>
                  <span className="text-secondary-200 font-semibold">{highlight.value}</span>
                </div>
              );
            })}
          </div>
          
          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button 
              onClick={() => navigate('/booking')}
              className="group bg-white text-primary-700 hover:bg-neutral-50 px-10 py-4 rounded-xl font-heading font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3"
            >
              <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              Check Availability
            </button>
            <button 
              onClick={() => navigate('/booking')}
              className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-700 px-10 py-4 rounded-xl font-heading font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              Instant Booking
            </button>
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
              <p>Kohomba Gaha Residencies</p>
              <p>Colombo 7, Sri Lanka</p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-white mb-3">Quick Info</h4>
              <p>3 Bedrooms • 2 Bathrooms</p>
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
    </footer>
  );
};

export default CallToActionFooter;