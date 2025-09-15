import React from 'react';
import { Clock, Users, AlertCircle, CheckCircle, Stars as Stairs, Luggage } from 'lucide-react';

const GuestAccess: React.FC = () => {
  const accessInfo = [
    {
      icon: Stairs,
      title: 'Access via Stairs',
      description: 'Please note that the property is accessed via stairs - no elevator is available.',
      type: 'warning',
      color: 'text-accent-600',
      bgColor: 'bg-accent-50',
      borderColor: 'border-accent-200'
    },
    {
      icon: Luggage,
      title: 'Luggage Assistance',
      description: 'Our team is available to help with luggage upon arrival and departure.',
      type: 'info',
      color: 'text-primary-600',
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-200'
    },
    {
      icon: Clock,
      title: 'Flexible Check-in',
      description: 'Self check-in available 24/7 with detailed instructions provided before arrival.',
      type: 'success',
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-50',
      borderColor: 'border-secondary-200'
    }
  ];

  const checkInDetails = [
    { label: 'Check-in Time', value: '3:00 PM onwards', icon: Clock },
    { label: 'Check-out Time', value: '11:00 AM', icon: Clock },
    { label: 'Maximum Guests', value: '6 people', icon: Users },
    { label: 'Minimum Stay', value: '2 nights', icon: CheckCircle }
  ];

  return (
    <section id="guest-access" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-800 mb-6">
            Guest Access Information
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Everything you need to know for a smooth arrival and comfortable stay
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {accessInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div 
                key={index}
                className={`${info.bgColor} p-8 rounded-2xl border ${info.borderColor} card-hover`}
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-md mb-6">
                    <IconComponent className={`w-8 h-8 ${info.color}`} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-4 text-neutral-800">
                    {info.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {info.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Check-in Details */}
        <div className="bg-gradient-to-r from-sand-50 to-neutral-50 p-8 rounded-2xl border border-neutral-200">
          <h3 className="text-2xl font-heading font-semibold text-center mb-8 text-neutral-800">
            Check-in & Stay Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {checkInDetails.map((detail, index) => {
              const IconComponent = detail.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-50 rounded-xl mb-4">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="text-sm font-medium text-neutral-500 mb-2">
                    {detail.label}
                  </div>
                  <div className="text-lg font-heading font-semibold text-neutral-800">
                    {detail.value}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Important Notice */}
        <div className="mt-12 bg-primary-50 border border-primary-200 p-8 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <AlertCircle className="w-8 h-8 text-primary-600" />
            </div>
            <div>
              <h4 className="text-xl font-heading font-semibold text-primary-800 mb-3">
                Important Information
              </h4>
              <div className="space-y-2 text-primary-700">
                <p>• Property is located on upper floors with stair access only</p>
                <p>• Luggage assistance is complimentary - please let us know if you need help</p>
                <p>• Detailed check-in instructions will be sent 24 hours before arrival</p>
                <p>• 24/7 support available via WhatsApp for any questions or assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestAccess;