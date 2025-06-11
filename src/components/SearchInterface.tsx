
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Bell, ShoppingCart, Star } from 'lucide-react';

interface MedicationResult {
  id: string;
  name: string;
  genericName: string;
  price: number;
  originalPrice?: number;
  pharmacy: string;
  distance: string;
  availability: number;
  expirationDate: string;
  hasDiscount: boolean;
  rating: number;
  image: string;
}

interface SearchInterfaceProps {
  onShowMap: () => void;
  onShowNotifications: () => void;
}

const SearchInterface = ({ onShowMap, onShowNotifications }: SearchInterfaceProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<MedicationResult[]>([]);

  // Mock data for demonstration
  const mockResults: MedicationResult[] = [
    {
      id: '1',
      name: 'Liver Cleanse Detox & Repair',
      genericName: 'SAN Pharma',
      price: 18.99,
      originalPrice: 22.00,
      pharmacy: 'Farmacia San Pablo',
      distance: '0.3 km',
      availability: 120,
      expirationDate: '2025-08-15',
      hasDiscount: true,
      rating: 4.8,
      image: '/lovable-uploads/9378204d-3189-486c-b22a-f6e6321bee46.png'
    },
    {
      id: '2',
      name: 'Non-Drowsy Cold & Flu Relief',
      genericName: 'Daytime',
      price: 21.99,
      pharmacy: 'Farmacia del Ahorro',
      distance: '0.7 km',
      availability: 52,
      expirationDate: '2025-06-20',
      hasDiscount: false,
      rating: 4.6,
      image: '/lovable-uploads/9378204d-3189-486c-b22a-f6e6321bee46.png'
    },
    {
      id: '3',
      name: "Men's Energy Multivitamins",
      genericName: '21st Century Store',
      price: 24.99,
      originalPrice: 29.99,
      pharmacy: 'Farmacias Similares',
      distance: '1.2 km',
      availability: 68,
      expirationDate: '2025-12-10',
      hasDiscount: true,
      rating: 4.4,
      image: '/lovable-uploads/9378204d-3189-486c-b22a-f6e6321bee46.png'
    }
  ];

  const categories = [
    { name: 'Medicines', icon: '💊', color: 'bg-blue-100' },
    { name: 'Supplements', icon: '🧬', color: 'bg-green-100' },
    { name: 'Health Devices', icon: '🩺', color: 'bg-purple-100' },
    { name: 'Personal Care', icon: '🧴', color: 'bg-pink-100' }
  ];

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setResults(mockResults);
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/9378204d-3189-486c-b22a-f6e6321bee46.png" 
              alt="FYG" 
              className="w-8 h-8"
            />
            <span className="text-lg font-semibold text-gray-800">9:41</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={onShowNotifications}>
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <ShoppingCart className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search medicine..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-12 py-3 bg-gray-100 border-0 rounded-xl"
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <Button 
            onClick={onShowMap}
            variant="ghost" 
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            <MapPin className="w-5 h-5" />
          </Button>
        </div>

        {/* Discount Banner */}
        <Card className="bg-gradient-to-r from-blue-400 to-blue-500 text-white p-4 rounded-2xl mb-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">15% OFF</div>
              <div className="text-sm opacity-90">Medicine at Your Doorstep</div>
              <Button variant="secondary" size="sm" className="mt-2 bg-white text-blue-500 hover:bg-gray-100">
                Shop Now
              </Button>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">👨‍⚕️</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Content */}
      <div className="px-4 space-y-6">
        {/* Categories */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-800">Categories</h2>
            <Button variant="ghost" size="sm" className="text-blue-500">See All</Button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {categories.map((category, index) => (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                  <span className="text-lg">{category.icon}</span>
                </div>
                <span className="text-xs text-gray-600">{category.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Search Results or Bestseller Products */}
        <div>
          {isSearching && (
            <div className="text-center py-8">
              <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600">Searching medicines...</p>
            </div>
          )}

          {results.length > 0 && !isSearching ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-800">Search Results</h2>
                <span className="text-sm text-gray-600">{results.length} found</span>
              </div>
              
              {results.map((result) => (
                <Card key={result.id} className="p-4 bg-white rounded-2xl shadow-sm">
                  <div className="flex space-x-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                      <img src={result.image} alt={result.name} className="w-12 h-12 object-contain" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-800 text-sm">{result.name}</h3>
                          <p className="text-xs text-gray-500">{result.genericName}</p>
                        </div>
                        {result.hasDiscount && (
                          <Badge variant="secondary" className="bg-red-100 text-red-600 text-xs">
                            Sale
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-1 mb-2">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-gray-600">{result.rating}</span>
                        <span className="text-xs text-gray-400">({result.availability} reviews)</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-gray-800">${result.price}</span>
                          {result.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">${result.originalPrice}</span>
                          )}
                        </div>
                        
                        <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-full">
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : !isSearching && !searchQuery ? (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-gray-800">Bestseller Products</h2>
                <Button variant="ghost" size="sm" className="text-blue-500">See All</Button>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {mockResults.slice(0, 2).map((product) => (
                  <Card key={product.id} className="p-3 bg-white rounded-2xl shadow-sm">
                    <div className="w-full h-20 bg-gray-100 rounded-xl flex items-center justify-center mb-3">
                      <img src={product.image} alt={product.name} className="w-16 h-16 object-contain" />
                    </div>
                    
                    <h3 className="font-medium text-gray-800 text-sm mb-1 line-clamp-2">{product.name}</h3>
                    <p className="text-xs text-gray-500 mb-2">{product.genericName}</p>
                    
                    <div className="flex items-center space-x-1 mb-2">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-gray-600">{product.rating}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-800">${product.price}</span>
                      <Button size="sm" variant="outline" className="w-8 h-8 p-0 rounded-full">
                        <ShoppingCart className="w-3 h-3" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-600">No medicines found</p>
              <p className="text-sm text-gray-400 mt-2">Try searching with different keywords</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <Button variant="ghost" className="flex flex-col items-center p-2">
            <div className="w-6 h-6 bg-blue-500 rounded mb-1"></div>
            <span className="text-xs text-blue-500">Home</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center p-2">
            <ShoppingCart className="w-6 h-6 text-gray-400 mb-1" />
            <span className="text-xs text-gray-400">Cart</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center p-2">
            <div className="w-6 h-6 bg-gray-300 rounded mb-1"></div>
            <span className="text-xs text-gray-400">Wishlist</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center p-2">
            <div className="w-6 h-6 bg-gray-300 rounded mb-1"></div>
            <span className="text-xs text-gray-400">Orders</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center p-2">
            <div className="w-6 h-6 bg-gray-300 rounded mb-1"></div>
            <span className="text-xs text-gray-400">Profile</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchInterface;
