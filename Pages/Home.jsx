import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Sparkles,
    Shield,
    Zap,
    TrendingDown,
    Chrome,
    Search,
    ShoppingBag,
    Wallet,
    ArrowRight,
    Check
} from 'lucide-react';

import HeroSection from './Components/landing/HeroSection';
import HowItWorks from './Components/landing/HowItWorks';
import BrandsSection from './Components/landing/BrandsSection';
import CTASection from './Components/landing/CTASection';

export default function Home() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/20">
            {/* Floating gradient orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
                    style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                />
                <div
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
                    style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
                />
            </div>

            {/* Content */}
            <div className="relative">
                {/* Top-left logo */}
                <header className="fixed top-5 left-6 z-50">
                    <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl px-6 py-4 shadow-sm">
                        <div className="text-3xl">💳</div>
                        <span className="text-gray-900 font-semibold text-xl">Savely</span>
                    </div>
                </header>
                <HeroSection />
                <HowItWorks />
                <BrandsSection />
                <CTASection />

                {/* Footer */}
                <footer className="border-t border-gray-200/50 backdrop-blur-sm bg-white/30 py-6">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <p className="text-gray-600 text-sm">
                            © 2024 Savely. Save smarter, shop better.
                        </p>
                    </div>
                </footer>
            </div>

            <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
        </div>
    );
}