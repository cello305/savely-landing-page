import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Chrome, Flame, Check } from 'lucide-react';

const benefits = [
  'Completely free forever',
  'No credit card required',
  'Works with 1000+ brands'
];

export default function CTASection() {
  const [browserName, setBrowserName] = useState('Chrome');
  const [browserFamily, setBrowserFamily] = useState('chromium');

  // Detect browser (consistent with HeroSection)
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isEdge = ua.includes('edg');
    const isOpera = ua.includes('opr') || ua.includes('opera');
    const isFirefox = ua.includes('firefox') || ua.includes('fxios');
    const isChromeLike = (ua.includes('chrome') || ua.includes('crios')) && !isEdge && !isOpera;
    const isSafari = ua.includes('safari') && !isChromeLike && !isEdge && !isOpera;

    if (isFirefox) {
      setBrowserName('Firefox');
      setBrowserFamily('firefox');
    } else if (isEdge) {
      setBrowserName('Edge');
      setBrowserFamily('chromium');
    } else if (isOpera) {
      setBrowserName('Opera');
      setBrowserFamily('chromium');
    } else if (isChromeLike) {
      setBrowserName('Chrome');
      setBrowserFamily('chromium');
    } else if (isSafari) {
      setBrowserName('Safari');
      setBrowserFamily('safari');
    } else {
      setBrowserName('Chrome');
      setBrowserFamily('chromium');
    }
  }, []);

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto relative text-center space-y-8">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Ready to start saving?
        </h2>
        
        <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto font-light">
          Join thousands of smart shoppers who save money on every purchase
        </p>

        <div className="pt-6">
          <Button 
            size="lg"
            disabled={browserFamily === 'safari'}
            className="group bg-white text-blue-700 hover:bg-gray-50 px-10 py-7 text-xl rounded-2xl shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105"
          >
            {browserFamily === 'firefox' ? (
              <Flame className="w-6 h-6 mr-3 transition-transform group-hover:animate-spin" />
            ) : browserFamily === 'chromium' ? (
              <Chrome className="w-6 h-6 mr-3 transition-transform group-hover:animate-spin" />
            ) : null}
            {browserFamily === 'safari' ? 'Safari is not supported' : `Add to ${browserName} - Free Forever`}
          </Button>
        </div>

        <div className="pt-8">
          <div className="flex flex-wrap justify-center items-center gap-6 text-blue-100">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-2"
              >
                <div className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 text-white" />
                </div>
                <span className="font-medium text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Removed compatibility line per request */}
      </div>
    </section>
  );
}