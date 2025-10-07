import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Star, Check } from 'lucide-react';

const providers = [
  {
    name: 'Raise',
    logo: '🎯',
    rating: 4.8,
    savings: 'Up to 20%',
    description: 'Trusted marketplace for discounted gift cards',
    features: ['Instant delivery', '24/7 support', 'Money-back guarantee']
  },
  {
    name: 'CardCash',
    logo: '💳',
    rating: 4.7,
    savings: 'Up to 25%',
    description: 'Premium gift card marketplace with verified sellers',
    features: ['Verified sellers', 'Fast delivery', 'Secure payments']
  },
  {
    name: 'GiftCardGranny',
    logo: '👵',
    rating: 4.6,
    savings: 'Up to 30%',
    description: 'Family-owned business with the best prices',
    features: ['Best prices', 'Personal service', 'Lifetime warranty']
  }
];

export default function ProvidersSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-white text-purple-900 border-purple-200 px-4 py-2 shadow-sm">
            <Shield className="w-3 h-3 mr-2" />
            Trusted Partners
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Verified gift card providers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            We partner with trusted, verified gift card marketplaces to ensure you get the best deals safely
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {providers.map((provider, index) => (
            <Card 
              key={index}
              className="p-8 bg-white border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {provider.logo}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {provider.name}
                </h3>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(provider.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{provider.rating}</span>
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-200 mb-4">
                  Save {provider.savings}
                </Badge>
              </div>

              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                {provider.description}
              </p>

              <div className="space-y-3">
                {provider.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            All providers are verified and trusted by thousands of customers
          </p>
        </div>
      </div>
    </section>
  );
}
