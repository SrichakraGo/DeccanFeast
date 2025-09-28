import React, { useState } from 'react';
import { ArrowLeft, Star, MapPin, Clock, Phone, Heart } from 'lucide-react';
import { Place } from '../types';
import MenuSection from './MenuSection';
import ReviewSection from './ReviewSection';

interface PlaceDetailProps {
  place: Place;
  onBack: () => void;
  onToggleFavorite: (id: string) => void;
}

const PlaceDetail: React.FC<PlaceDetailProps> = ({ place, onBack, onToggleFavorite }) => {
  const [activeTab, setActiveTab] = useState<'menu' | 'reviews'>('menu');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        <img 
          src={place.image} 
          alt={place.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        <button
          onClick={onBack}
          className="absolute top-4 left-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        
        <button
          onClick={() => onToggleFavorite(place.id)}
          className={`absolute top-4 right-4 p-2 rounded-full transition-all ${
            place.isFavorite 
              ? 'bg-red-500 text-white' 
              : 'bg-white/90 text-gray-700 hover:bg-white'
          }`}
        >
          <Heart className={`w-6 h-6 ${place.isFavorite ? 'fill-current' : ''}`} />
        </button>
        
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h1 className="text-3xl font-bold mb-2">{place.name}</h1>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-medium">{place.rating}</span>
              <span>({place.reviewCount} reviews)</span>
            </div>
            <span className="bg-orange-500 px-2 py-1 rounded text-xs font-medium">
              {place.cuisine}
            </span>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <p className="text-gray-700 mb-4">{place.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>{place.address}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{place.hours}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>{place.phone}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('menu')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'menu'
                  ? 'bg-orange-50 text-orange-600 border-b-2 border-orange-500'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Menu
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'reviews'
                  ? 'bg-orange-50 text-orange-600 border-b-2 border-orange-500'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Reviews ({place.reviewCount})
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'menu' && <MenuSection placeId={place.id} />}
            {activeTab === 'reviews' && <ReviewSection placeId={place.id} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;