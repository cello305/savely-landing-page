import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Chrome, Flame, Globe, Lock, Zap } from 'lucide-react';
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

const supportedBrands = [
    'Amazon',
    'Target',
    'Walmart',
    'Best Buy',
    'Home Depot',
    'Nike'
];

export default function HeroSection() {
    const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [browserName, setBrowserName] = useState('Chrome');
    const [browserFamily, setBrowserFamily] = useState('chromium');
    const [downloadUrl, setDownloadUrl] = useState('');

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();

        // Detect browser for CTA copy
        const ua = navigator.userAgent.toLowerCase();
        const isEdge = ua.includes('edg');
        const isOpera = ua.includes('opr') || ua.includes('opera');
        const isFirefox = ua.includes('firefox') || ua.includes('fxios');
        const isChromeLike = (ua.includes('chrome') || ua.includes('crios')) && !isEdge && !isOpera; // chromium-family
        const isSafari = ua.includes('safari') && !isChromeLike && !isEdge && !isOpera; // pure Safari

        if (isFirefox) {
            setBrowserName('Firefox');
            setBrowserFamily('firefox');
            setDownloadUrl('https://addons.mozilla.org/en-US/firefox/addon/savely/');
        } else if (isEdge) {
            setBrowserName('Edge');
            setBrowserFamily('chromium');
            setDownloadUrl('https://microsoftedge.microsoft.com/addons/detail/savely/hldcionlpdbhbfjeebklhdindhliekff');
        } else if (isOpera) {
            setBrowserName('Opera');
            setBrowserFamily('chromium');
            setDownloadUrl('https://microsoftedge.microsoft.com/addons/detail/savely/hldcionlpdbhbfjeebklhdindhliekff');
        } else if (isChromeLike) {
            setBrowserName('Chrome');
            setBrowserFamily('chromium');
            setDownloadUrl('https://chromewebstore.google.com/detail/savely/your-extension-id');
        } else if (isSafari) {
            setBrowserName('Safari');
            setBrowserFamily('safari');
            setDownloadUrl('');
        } else {
            setBrowserName('Chrome');
            setBrowserFamily('chromium');
            setDownloadUrl('https://chromewebstore.google.com/detail/savely/your-extension-id');
        }

        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleDownloadClick = () => {
        console.log('Hero button clicked!', { browserName, browserFamily, downloadUrl });
        if (downloadUrl) {
            window.open(downloadUrl, '_blank');
        } else {
            console.log('No download URL available');
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentBrand = topBrands[currentBrandIndex];
            if (!isDeleting) {
                if (currentText.length < currentBrand.name.length) {
                    setCurrentText(currentBrand.name.slice(0, currentText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 1600);
                }
            } else {
                if (currentText.length > 0) {
                    setCurrentText(currentText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentBrandIndex((prev) => (prev + 1) % topBrands.length);
                }
            }
        }, isDeleting ? 50 : 100);
        return () => clearTimeout(timeout);
    }, [currentText, currentBrandIndex, isDeleting]);

    return (
        <section id="hero" className="relative px-6 pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                            {browserFamily === 'firefox' ? (
                                <Flame className="w-4 h-4" />
                            ) : (
                                <Chrome className="w-4 h-4" />
                            )}
                            <span>{browserFamily === 'safari' ? 'Coming Soon' : `Free ${browserName} Extension`}</span>
                        </div>

                        {/* Headline and Subtext */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
                                <span className="text-blue-600">Shop Smarter.</span>
                                <br />
                                <span className="text-gray-900">Save More.</span>
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Savely automatically finds discounted gift cards while you shop, helping you save
                                money on every online purchase instantly and effortlessly.
                            </p>
                        </div>

                        {/* CTA */}
                        <div>
                            <Button 
                                size="lg" 
                                className={`group px-8 py-6 text-lg h-auto ${
                                    browserFamily === 'safari' 
                                        ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                                }`}
                                onClick={browserFamily === 'safari' ? undefined : handleDownloadClick}
                                disabled={browserFamily === 'safari'}
                            >
                                {browserFamily === 'firefox' ? (
                                    <Flame className="w-6 h-6 mr-3 transition-transform group-hover:animate-spin" />
                                ) : browserFamily === 'chromium' ? (
                                    <Chrome className="w-6 h-6 mr-3 transition-transform group-hover:animate-spin" />
                                ) : null}
                                {browserFamily === 'safari' ? 'Coming Soon' : `Get Started - It's Free!`}
                            </Button>
                        </div>

                        {/* Key Features */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t">
                            <div className="space-y-2">
                                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mx-auto lg:mx-0">
                                    <Zap className="w-5 h-5 text-blue-600" />
                                </div>
                                <p className="text-sm font-medium text-gray-900">Instant Savings</p>
                                <p className="text-xs text-gray-500">Automatic discount detection</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mx-auto lg:mx-0">
                                    <Lock className="w-5 h-5 text-blue-600" />
                                </div>
                                <p className="text-sm font-medium text-gray-900">100% Secure</p>
                                <p className="text-xs text-gray-500">Your data stays private</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mx-auto lg:mx-0">
                                    <Globe className="w-5 h-5 text-blue-600" />
                                </div>
                                <p className="text-sm font-medium text-gray-900">500+ Stores</p>
                                <p className="text-xs text-gray-500">Major retailers supported</p>
                            </div>
                        </div>

                        {/* Supported Brands */}
                        <div className="space-y-3">
                            <p className="text-sm font-medium text-gray-500">Works with 500+ brands including:</p>
                            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                                {supportedBrands.map((brand) => (
                                    <Badge key={brand} variant="" className="px-3 py-1 bg-gray-100 text-gray-900">
                                        {brand}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Restore previous browser mockup */}
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
        </section>
    );
}