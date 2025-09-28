import React from 'react';
import { Search, MapPin, Heart, Menu } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  showFavorites: boolean;
  onToggleFavorites: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  searchTerm, 
  onSearchChange, 
  showFavorites, 
  onToggleFavorites 
}) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            {/* Logo placeholder */}
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              {<img src="/src/images/logo.png" alt="Deccan Feast Logo" className="w-8 h-8" />}
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Deccan Feast</h1>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-600">Downtown Area</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for restaurants, cuisines..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          
          <button
            onClick={onToggleFavorites}
            className={`flex items-center px-4 py-3 rounded-xl transition-all ${
              showFavorites 
                ? 'bg-red-500 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Heart className={`w-5 h-5 ${showFavorites ? 'fill-current' : ''}`} />
            <span className="ml-2 hidden sm:inline">Favorites</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;