import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';

const topBrands = [
  { name: 'Amazon', logo: '🛒', isImage: true, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' },
  { name: 'Target', logo: '🎯', isImage: true, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Target_logo.svg/432px-Target_logo.svg.png' },
  { name: 'Walmart', logo: '🏪', isImage: true, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Walmart_logo_%282008%29.svg/960px-Walmart_logo_%282008%29.svg.png' },
  { name: 'Best Buy', logo: '📱', isImage: true, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Best_Buy_Logo.svg/800px-Best_Buy_Logo.svg.png' },
  { name: 'Home Depot', logo: '🏠', isImage: true, imageUrl: 'https://download.logo.wine/logo/The_Home_Depot/The_Home_Depot-Logo.wine.png' },
  { name: "Lowe's", logo: '🔨', isImage: true, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Lowes_Companies_Logo.svg/2560px-Lowes_Companies_Logo.svg.png' },
  { name: 'Nike', logo: '👟', isImage: true, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
  { name: 'Adidas', logo: '⚽', isImage: true, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg' },
  { name: 'Starbucks', logo: '☕', isImage: true, imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1185px-Starbucks_Corporation_Logo_2011.svg.png' },
  { name: 'Apple', logo: '🍎', isImage: true, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Uber', logo: '🚗', isImage: true, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' },
  { name: 'DoorDash', logo: '🍔', isImage: true, imageUrl: 'https://cdn.prod.website-files.com/60414b21f1ffcdbb0d5ad688/63c95ba382cdf0a911766466_5e8ce484664eae0004085467.png' }
];

export default function BrandsSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-white text-purple-900 border-purple-200 px-4 py-2 shadow-sm">
            <Sparkles className="w-3 h-3 mr-2" />
            1000+ Brands Supported
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Shop your favorite brands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Save on gift cards from top retailers and enjoy discounts everywhere you shop
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12 justify-items-center">
          {topBrands.map((brand, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-4 text-center border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ width: '140px', height: '100px' }}
            >
              <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ height: '70px' }}>
                {brand.isImage ? (
                  <img 
                    src={brand.imageUrl} 
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain"
                    style={{ 
                      maxWidth: brand.name === 'Apple' ? '90px' : brand.name === 'Home Depot' ? '120px' : '100px', 
                      maxHeight: brand.name === 'Apple' ? '60px' : brand.name === 'Home Depot' ? '90px' : '80px',
                      transform: brand.name === 'Apple' ? 'translateY(-5px)' : 'none'
                    }}
                  />
                ) : (
                  <div className="text-4xl">
                    {brand.logo}
                  </div>
                )}
              </div>
              {!brand.isImage && (
                <p className="text-sm font-semibold text-gray-900">
                  {brand.name}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-500 font-medium mb-4">
            ...and 1000+ more brands
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
            {['Google Play', 'Steam', 'Xbox', 'PlayStation', 'Sephora', 'Nordstrom', 'Gap', 'Old Navy', 'Chipotle', 'Panera', 'Southwest Airlines'].map((brand, i) => (
              <Badge key={i} variant="outline" className="bg-white border-gray-300 text-gray-700 px-3 py-1">
                {brand}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}