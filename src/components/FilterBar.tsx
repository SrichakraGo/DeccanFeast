import React from 'react';

interface FilterBarProps {
  selectedCuisine: string;
  onCuisineChange: (cuisine: string) => void;
  selectedRating: number;
  onRatingChange: (rating: number) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  selectedCuisine,
  onCuisineChange,
  selectedRating,
  onRatingChange
}) => {
  const cuisines = ['All', 'Mexican', 'Asian', 'American', 'Indian', 'Italian'];
  const ratings = [0, 3, 4, 4.5];

  return (
    <div className="bg-white border-b border-gray-100 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="flex space-x-6 overflow-x-auto">
          <div className="flex items-center space-x-2 min-w-max">
            <span className="text-sm font-medium text-gray-700">Cuisine:</span>
            <select
              value={selectedCuisine}
              onChange={(e) => onCuisineChange(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-orange-500"
            >
              {cuisines.map(cuisine => (
                <option key={cuisine} value={cuisine}>{cuisine}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-2 min-w-max">
            <span className="text-sm font-medium text-gray-700">Rating:</span>
            <select
              value={selectedRating}
              onChange={(e) => onRatingChange(Number(e.target.value))}
              className="border border-gray-200 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-orange-500"
            >
              <option value={0}>All Ratings</option>
              {ratings.slice(1).map(rating => (
                <option key={rating} value={rating}>{rating}+ Stars</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;