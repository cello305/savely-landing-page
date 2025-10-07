import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap, TrendingDown, Wallet, Search, ShoppingBag } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Savings',
    description: 'Get automatic discounts as you shop without any extra effort',
    color: 'yellow'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your data stays private. We never store your personal information',
    color: 'green'
  },
  {
    icon: TrendingDown,
    title: 'Best Prices',
    description: 'We find the lowest prices from trusted gift card providers',
    color: 'blue'
  },
  {
    icon: Wallet,
    title: 'No Fees',
    description: 'Completely free to use. No hidden charges or subscriptions',
    color: 'purple'
  },
  {
    icon: Search,
    title: 'Smart Detection',
    description: 'Automatically detects when gift cards can save you money',
    color: 'red'
  },
  {
    icon: ShoppingBag,
    title: 'Wide Selection',
    description: 'Works with 1000+ popular brands and retailers',
    color: 'indigo'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-purple-100 text-purple-900 border-purple-200 px-4 py-2">
            Why Choose Savely
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Everything you need to save
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Powerful features that make saving money effortless and automatic
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-${feature.color}-400 to-${feature.color}-600 p-3 mb-6 group-hover:rotate-12 transition-transform duration-500`}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
