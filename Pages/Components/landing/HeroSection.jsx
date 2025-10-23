import { Button } from '@/components/ui/button';
import { Chrome } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const topBrands = [
  { name: 'Amazon', discount: 'Up to 12% off' },
  { name: 'Target', discount: 'Up to 10% off' },
  { name: 'Walmart', discount: 'Up to 11% off' },
  { name: 'Best Buy', discount: 'Up to 13% off' },
  { name: 'Home Depot', discount: 'Up to 15% off' },
  { name: "Lowe's", discount: 'Up to 14% off' },
  { name: 'Nike', discount: 'Up to 10% off' },
  { name: 'Adidas', discount: 'Up to 11% off' },
  { name: 'Starbucks', discount: 'Up to 8% off' },
  { name: 'Apple', discount: 'Up to 6% off' },
  { name: 'Uber', discount: 'Up to 9% off' },
  { name: 'DoorDash', discount: 'Up to 7% off' }
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
        <section id="hero" className="relative flex items-start lg:items-center justify-center px-6 overflow-visible pt-28 sm:pt-32 md:pt-36 lg:pt-20 pb-16 md:pb-24 lg:min-h-screen" style={{ minHeight: '100vh' }}>
            <div className="max-w-7xl mx-auto w-full">
                <div className="lg:flex lg:items-center lg:gap-20 xl:gap-24">
                    {/* Left column - Text content */}
                    <div className="flex-1 space-y-8 sm:space-y-10 lg:space-y-12 animate-fade-in text-center lg:text-left lg:max-w-xl xl:max-w-2xl">
                    {/* Badge (removed savings claim per request) */}

                    {/* Main headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight font-clash">
                            <span className="bg-blue-600 bg-clip-text text-transparent whitespace-normal md:whitespace-nowrap">
                                Shop Smarter.
                            </span>
                            <br />
                            <span className="text-gray-900">Save More.</span>
                        </h1>

                    {/* Subheadline */}
                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Savely automatically finds discounted gift cards while you shop,
                            helping you save money on every online purchase instantly and effortlessly.
                        </p>

                    {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center lg:items-start pt-6">
                            <Button
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 text-base sm:px-10 sm:py-8 sm:text-xl rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 group"
                            >
                                <Chrome className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                                Add to {browserName} - It's Free!
                            </Button>
                        </div>
                    </div>

                    {/* Right column - Visual */}
                    <div className="flex-1 mt-10 sm:mt-14 lg:mt-0 relative">
                        <div className="relative max-w-6xl lg:max-w-none mx-auto lg:mx-0 w-full sm:w-[460px] md:w-[560px] lg:w-[640px] xl:w-[720px]">
                            
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-blue-500/20 to-blue-700/20 blur-3xl transform -rotate-1" />
                            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 p-5 sm:p-6 md:p-10 transform md:hover:scale-[1.02] transition-transform duration-500 overflow-hidden w-full" style={{ aspectRatio: isMobile ? '16 / 16' : '16 / 12' }}>
                                {/* Browser header */}
                                <div className="flex items-center gap-3 pb-4 border-b border-gray-200 mb-6">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                    <div className="ml-4 flex-1 bg-gray-100 rounded-lg px-4 py-2 text-sm text-gray-600">
                                        example.com/product/electronics
                                    </div>
                                </div>

                                {/* Product page layout - Show popup centered on md, full layout on lg */}
                                <div className="hidden md:flex md:justify-center md:gap-6 lg:justify-start lg:gap-8">
                                    {/* Left side - Product info (grayed out) */}
                                    <div className="hidden lg:block flex-1 space-y-6 opacity-40">
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
                                        <div className="bg-blue-600 rounded-2xl p-5 md:p-6 border border-blue-700 shadow-2xl ring-4 ring-blue-500/20 ring-opacity-50 w-[280px] h-[240px] md:w-[300px] md:h-[260px] lg:w-[320px] lg:h-[280px]">
                                            {/* Header */}
                                            <div className="flex items-center justify-between mb-6">
                                                <div className="flex items-center gap-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                                        <path d="M16 10a4 4 0 0 1-8 0"/>
                                                        <path d="M3.103 6.034h17.794"/>
                                                        <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/>
                                                    </svg>
                                                    <span className="text-white font-semibold text-lg">Savely</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                                                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                                                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                                                </div>
                                            </div>

                                            {/* Main Content */}
                                            <div className="text-center space-y-3">
                                                <h3 className="text-white text-lg md:text-xl font-bold min-h-[1.5rem] flex items-center justify-center">
                                                    {currentText}
                                                    <span className="animate-pulse">|</span>
                                                </h3>
                                                <div className="text-3xl md:text-4xl font-bold text-white">
                                                    {topBrands[currentBrandIndex].discount}
                                                </div>
                                                
                                                <button className="w-full bg-white text-blue-600 font-bold py-2.5 md:py-3 px-5 md:px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                                                    Get Discount
                                                    <span className="text-base md:text-lg">→</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile-only Savely popup - Shown on small screens */}
                                <div className="md:hidden flex justify-center">
                                    <div className="bg-blue-600 rounded-2xl p-6 sm:p-7 border border-blue-700 shadow-2xl ring-4 ring-blue-500/20 ring-opacity-50 w-full max-w-[340px]" style={{ height: '260px' }}>
                                        {/* Header */}
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="flex items-center gap-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                                    <path d="M16 10a4 4 0 0 1-8 0"/>
                                                    <path d="M3.103 6.034h17.794"/>
                                                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/>
                                                </svg>
                                                <span className="text-white font-semibold text-xl">Savely</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                                                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                                                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                                            </div>
                                        </div>

                                        {/* Main Content */}
                                        <div className="text-center space-y-3">
                                            <h3 className="text-white text-lg font-bold min-h-[1.5rem] flex items-center justify-center">
                                                {currentText}
                                                <span className="animate-pulse">|</span>
                                            </h3>
                                            <div className="text-3xl font-bold text-white">
                                                {topBrands[currentBrandIndex].discount}
                                            </div>
                                            
                                            <button className="w-full bg-white text-blue-600 font-bold py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm">
                                                Get Discount
                                                <span className="text-base">→</span>
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