import React from 'react';
import { Star, MapPin, Clock, Heart, Phone } from 'lucide-react';
import { Place } from '../types';

interface PlaceCardProps {
  place: Place;
  onClick: () => void;
  onToggleFavorite: (id: string) => void;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place, onClick, onToggleFavorite }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={place.image} 
          alt={place.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(place.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
            place.isFavorite 
              ? 'bg-red-500 text-white' 
              : 'bg-white/80 text-gray-600 hover:bg-white'
          }`}
        >
          <Heart className={`w-5 h-5 ${place.isFavorite ? 'fill-current' : ''}`} />
        </button>
        <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
          {place.priceRange}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-800 line-clamp-1">{place.name}</h3>
          <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-lg text-xs font-medium ml-2">
            {place.cuisine}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{place.description}</p>
        
        <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-medium">{place.rating}</span>
            <span>({place.reviewCount})</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span>{place.distance}mi away</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{place.hours}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Phone className="w-4 h-4" />
            <span>{place.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;