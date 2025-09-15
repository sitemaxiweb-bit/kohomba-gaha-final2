import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { 
  Calendar, 
  Users, 
  Mail, 
  Phone, 
  MessageCircle, 
  Star, 
  Award, 
  CheckCircle,
  ArrowLeft,
  Clock,
  MapPin,
  Wifi,
  Car,
  ChefHat,
  Bath
} from 'lucide-react';

const BookingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      // Send data to webhook
      const response = await fetch('https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTY1MDYzNTA0MzU1MjY5NTUzMTUxMzIi_pc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          propertyName: 'Kohomba Gaha Residencies',
          location: 'Colombo 7, Sri Lanka'
        })
      });

      if (response.ok) {
        alert('Thank you for your booking request! We have received your information and will contact you shortly to confirm your reservation.');
        // Reset form after successful submission
        setFormData({
          checkIn: '',
          checkOut: '',
          guests: '2',
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit booking request');
      }
    } catch (error) {
      console.error('Error submitting booking request:', error);
      alert('Sorry, there was an error submitting your booking request. Please try again or contact us directly via phone or email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const propertyHighlights = [
    { icon: Users, label: 'Sleeps 6', color: 'text-primary-600' },
    { icon: MapPin, label: 'Colombo 7', color: 'text-secondary-600' },
    { icon: Wifi, label: 'Free WiFi', color: 'text-accent-600' },
    { icon: Car, label: 'Free Parking', color: 'text-primary-600' },
    { icon: ChefHat, label: 'Full Kitchen', color: 'text-secondary-600' },
    { icon: Bath, label: '2 Bathrooms', color: 'text-accent-600' }
  ];

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kohombagaharesidencies@gmail.com',
      action: 'mailto:kohombagaharesidencies@gmail.com'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+94 76 619 0315',
      action: 'https://wa.me/94766190315'
    },
    {
      icon: Phone,
      label: 'Call',
      value: '+94 76 619 0315',
      action: 'tel:+94766190315'
    }
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 bg-secondary-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center text-white mb-8">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Book Your Stay
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Reserve your luxury getaway at Kohomba Gaha Residencies
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-secondary-200" />
                <span className="text-white font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-secondary-200" />
                <span className="text-white font-medium">Superhost 2023</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-secondary-200" />
                <span className="text-white font-medium">Instant Confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Property Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100 sticky top-8">
                <div className="mb-6">
                  <img 
                    src="/kohomba-gaha-residencies-exterior.png"
                    alt="Kohomba Gaha Residencies"
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-2xl font-heading font-bold text-neutral-800 mb-2">
                    Kohomba Gaha Residencies
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    Luxury 3-bedroom home in prestigious Colombo 7
                  </p>
                  
                  {/* Property Highlights */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {propertyHighlights.map((highlight, index) => {
                      const IconComponent = highlight.icon;
                      return (
                        <div key={index} className="flex items-center gap-2">
                          <IconComponent className={`w-4 h-4 ${highlight.color}`} />
                          <span className="text-sm font-medium text-neutral-700">
                            {highlight.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Pricing Info */}
                  <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-4 rounded-xl border border-primary-200">
                    <div className="text-center">
                      <div className="text-2xl font-heading font-bold text-primary-700 mb-1">
                        Contact for Rates
                      </div>
                      <div className="text-sm text-neutral-600">
                        Competitive pricing • No hidden fees
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100">
                <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-8">
                  Request Your Booking
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Dates and Guests */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="checkIn" className="block text-sm font-semibold text-neutral-700 mb-2">
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="checkOut" className="block text-sm font-semibold text-neutral-700 mb-2">
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        id="checkOut"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="guests" className="block text-sm font-semibold text-neutral-700 mb-2">
                        Guests
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6">6 Guests</option>
                      </select>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                      placeholder="+94 76 619 0315"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Special Requests or Questions
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300 resize-none"
                      placeholder="Any special requests, dietary requirements, or questions about your stay..."
                    />
                  </div>

                  {/* Important Info */}
                  <div className="bg-sand-50 p-6 rounded-xl border border-sand-200">
                    <div className="flex items-start gap-3">
                      <Clock className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-heading font-semibold text-neutral-800 mb-2">
                          Booking Information
                        </h4>
                        <ul className="text-sm text-neutral-600 space-y-1">
                          <li>• Check-in: 3:00 PM onwards</li>
                          <li>• Check-out: 11:00 AM</li>
                          <li>• Minimum stay: 2 nights</li>
                          <li>• Instant confirmation via email</li>
                          <li>• Free cancellation up to 48 hours before check-in</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 disabled:from-neutral-400 disabled:to-neutral-500 disabled:cursor-not-allowed text-white font-heading font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                  >
                    <Calendar className="w-6 h-6" />
                    {isSubmitting ? 'Sending Request...' : 'Send Booking Request'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 bg-gradient-to-br from-sand-50 to-neutral-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-4">
              Prefer to Book Directly?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Contact us directly for immediate assistance and personalized service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={index}
                  href={method.action}
                  className="group bg-white hover:bg-gradient-to-br hover:from-primary-50 hover:to-secondary-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center card-hover border border-neutral-100 hover:border-primary-200"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 group-hover:bg-primary-100 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-neutral-800 mb-3">
                    {method.label}
                  </h3>
                  <p className="text-neutral-600 group-hover:text-primary-700 transition-colors duration-300">
                    {method.value}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookingPage;