import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Chrome, Sparkles, TrendingDown } from 'lucide-react';

const topBrands = [
  { name: 'Amazon', discount: 'Up to 8.5% off' },
  { name: 'Target', discount: 'Up to 6.2% off' },
  { name: 'Walmart', discount: 'Up to 7.8% off' },
  { name: 'Best Buy', discount: 'Up to 7.0% off' },
  { name: 'Home Depot', discount: 'Up to 9.1% off' },
  { name: "Lowe's", discount: 'Up to 8.3% off' },
  { name: 'Nike', discount: 'Up to 5.5% off' },
  { name: 'Adidas', discount: 'Up to 6.8% off' },
  { name: 'Starbucks', discount: 'Up to 4.2% off' },
  { name: 'Apple', discount: 'Up to 3.9% off' },
  { name: 'Uber', discount: 'Up to 5.1% off' },
  { name: 'DoorDash', discount: 'Up to 4.7% off' }
];

export default function HeroSection() {
    const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [browserName, setBrowserName] = useState('Firefox');
    const [isMobile, setIsMobile] = useState(false);

    // Detect browser and screen size
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.includes('chrome') && !userAgent.includes('edg')) {
            setBrowserName('Chrome');
        } else if (userAgent.includes('firefox')) {
            setBrowserName('Firefox');
        } else if (userAgent.includes('edg')) {
            setBrowserName('Edge');
        } else {
            setBrowserName('Firefox'); // Default fallback
        }

        // Check if mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentBrand = topBrands[currentBrandIndex];
            
            if (!isDeleting) {
                // Typing
                if (currentText.length < currentBrand.name.length) {
                    setCurrentText(currentBrand.name.slice(0, currentText.length + 1));
                } else {
                    // Finished typing, wait then start deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Deleting
                if (currentText.length > 0) {
                    setCurrentText(currentText.slice(0, -1));
                } else {
                    // Finished deleting, move to next brand
                    setIsDeleting(false);
                    setCurrentBrandIndex((prev) => (prev + 1) % topBrands.length);
                }
            }
        }, isDeleting ? 50 : 100); // Faster when deleting

        return () => clearTimeout(timeout);
    }, [currentText, currentBrandIndex, isDeleting]);

    return (
        <section className="relative pt-20 pb-32 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="lg:flex lg:items-center lg:gap-12">
                    {/* Left column - Text content */}
                    <div className="flex-1 space-y-8 animate-fade-in text-center lg:text-left">
                    {/* Badge (removed savings claim per request) */}

                    {/* Main headline */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 bg-clip-text text-transparent whitespace-normal md:whitespace-nowrap">
                                Shop Smarter.
                            </span>
                            <br />
                            <span className="text-gray-900">Save More.</span>
                        </h1>

                    {/* Subheadline */}
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto lg:mx-0 leading-relaxed font-light">
                            Savely automatically finds discounted gift cards while you shop,
                            helping you save money on every online purchase—instantly and effortlessly.
                        </p>

                    {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:items-start pt-4">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 group"
                            >
                                <Chrome className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                Add to {browserName} - It's Free!
                            </Button>
                        </div>
                    </div>

                    {/* Right column - Visual */}
                    <div className="flex-1 mt-16 lg:mt-0 relative">
                        <div className="relative max-w-6xl lg:max-w-none mx-auto lg:mx-0 w-full lg:w-[720px] xl:w-[820px]">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl transform -rotate-1" />
                            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 p-8 transform hover:scale-[1.02] transition-transform duration-500 overflow-hidden w-full" style={{ aspectRatio: isMobile ? '16 / 26' : '16 / 10' }}>
                                {/* Browser header */}
                                <div className="flex items-center gap-3 pb-4 border-b border-gray-200 mb-6">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                    <div className="ml-4 flex-1 bg-gray-100 rounded-lg px-4 py-2 text-sm text-gray-600">
                                        example.com/product/electronics
                                    </div>
                                </div>

                                {/* Product page layout - Hidden on mobile, shown on larger screens */}
                                <div className="hidden md:flex gap-8">
                                    {/* Left side - Product info (grayed out) */}
                                    <div className="flex-1 space-y-6 opacity-40">
                                        <div className="space-y-4">
                                            <div className="w-full h-40 md:h-48 bg-gray-300 rounded-lg flex items-center justify-center">
                                                <div className="text-center">
                                                    <div className="w-16 h-16 bg-gray-400 rounded-lg mx-auto mb-2"></div>
                                                    <span className="text-gray-600 text-sm">Sample Product</span>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <h2 className="text-2xl font-bold text-gray-600">Sample Product</h2>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-3xl font-bold text-gray-600">$199.99</span>
                                                    <span className="text-lg text-gray-400 line-through">$249.99</span>
                                                    <span className="bg-gray-200 text-gray-500 px-2 py-1 rounded text-sm font-medium">Save $50</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <div key={i} className="w-4 h-4 text-gray-300">★</div>
                                                    ))}
                                                    <span className="text-sm text-gray-400 ml-2">4.5 (856 reviews)</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-3">
                                            <h3 className="font-semibold text-gray-500">Product Features:</h3>
                                            <ul className="space-y-1 text-sm text-gray-400">
                                                <li>• High-quality materials</li>
                                                <li>• Long-lasting battery life</li>
                                                <li>• Easy to use interface</li>
                                                <li>• Premium build quality</li>
                                            </ul>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex gap-2">
                                                <button className="flex-1 bg-gray-300 text-gray-500 py-3 px-6 rounded-lg font-medium cursor-not-allowed">
                                                    Add to Cart
                                                </button>
                                                <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-400">
                                                    ♡
                                                </button>
                                            </div>
                                            <div className="text-xs text-gray-400">
                                                Free shipping • Returns available • Warranty included
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right side - Savely popup */}
                                    <div className="relative">
                                        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-6 border border-blue-700 shadow-2xl ring-4 ring-blue-500/20 ring-opacity-50" style={{ width: '300px', height: '340px' }}>
                                            {/* Header */}
                                            <div className="flex items-center justify-between mb-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="text-2xl">💳</div>
                                                    <span className="text-white font-semibold text-lg">Savely</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                                                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                                                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                                                </div>
                                            </div>

                                            {/* Main Content */}
                                            <div className="text-center space-y-4">
                                                <h3 className="text-white text-xl font-bold min-h-[1.5rem] flex items-center justify-center">
                                                    {currentText}
                                                    <span className="animate-pulse">|</span>
                                                </h3>
                                                <div className="text-4xl font-bold text-yellow-400">
                                                    {topBrands[currentBrandIndex].discount}
                                                </div>
                                                
                                                <div className="bg-blue-700 border border-blue-600 rounded-lg px-4 py-2">
                                                    <span className="text-blue-200 text-sm">CardCookie</span>
                                                </div>
                                                
                                                <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                                                    Get Discount
                                                    <span className="text-lg">→</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile-only Savely popup - Shown on small screens */}
                                <div className="md:hidden flex justify-center">
                                    <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 border border-blue-700 shadow-2xl ring-4 ring-blue-500/20 ring-opacity-50 w-full max-w-sm" style={{ height: '420px' }}>
                                        {/* Header */}
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="flex items-center gap-3">
                                                <div className="text-3xl">💳</div>
                                                <span className="text-white font-semibold text-xl">Savely</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                                                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                                                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                                            </div>
                                        </div>

                                        {/* Main Content */}
                                        <div className="text-center space-y-6">
                                            <h3 className="text-white text-2xl font-bold min-h-[2rem] flex items-center justify-center">
                                                {currentText}
                                                <span className="animate-pulse">|</span>
                                            </h3>
                                            <div className="text-5xl font-bold text-yellow-400">
                                                {topBrands[currentBrandIndex].discount}
                                            </div>
                                            
                                            <div className="bg-blue-700 border border-blue-600 rounded-lg px-6 py-3">
                                                <span className="text-blue-200 text-base font-medium">CardCookie</span>
                                            </div>
                                            
                                            <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-lg">
                                                Get Discount
                                                <span className="text-xl">→</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
        </section>
    );
}