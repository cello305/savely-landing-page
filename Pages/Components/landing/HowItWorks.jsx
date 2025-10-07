import React from 'react';
import { Card } from '@/components/ui/card';
import { Chrome, ShoppingBag, Sparkles } from 'lucide-react';

const colorMap = {
  purple: { from: '#a78bfa', to: '#7c3aed', ring: '#a78bfa' },
  blue: { from: '#60a5fa', to: '#2563eb', ring: '#60a5fa' },
  green: { from: '#34d399', to: '#059669', ring: '#34d399' }
};

const steps = [
  {
    number: '01',
    icon: Chrome,
    title: 'Install Savely',
    description: 'Add the free extension to your Firefox browser in seconds',
    color: 'purple'
  },
  {
    number: '02',
    icon: ShoppingBag,
    title: 'Shop as Usual',
    description: 'Browse and shop at your favorite online stores like you normally do',
    color: 'blue'
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Buy a discounted gift card',
    description: 'Savely offers a discounted gift card—buy it and redeem at checkout.',
    color: 'green'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Colorful glow accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.7), rgba(167,139,250,0))' }} />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.7), rgba(96,165,250,0))' }} />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-teal-300 bg-clip-text text-transparent">How it works</span>
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto font-light">
            Start saving in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-purple-400/70 via-blue-400/40 to-transparent" />
              )}

              <Card className="relative bg-white/10 backdrop-blur-lg border-white/20 p-8 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl font-bold text-white/10">
                  {step.number}
                </div>
                
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl p-4 group-hover:rotate-12 transition-transform duration-500 border"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${colorMap[step.color].from}, ${colorMap[step.color].to})`,
                    borderColor: colorMap[step.color].ring
                  }}
                >
                  <step.icon className="w-full h-full text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-purple-200 leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}