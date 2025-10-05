import React from 'react';
import { motion } from 'framer-motion';

interface FilterBarProps {
  selectedCuisine: string;
  onCuisineChange: (cuisine: string) => void;
  selectedRating: number;
  onRatingChange: (rating: number) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ selectedCuisine, onCuisineChange, selectedRating, onRatingChange }) => {
  const cuisines = ['All', 'Hyderabadi', 'North Indian', 'South Indian', 'Street Food', 'Andhra'];
  const ratings = [0, 3, 4, 4.5];

  return (
    <div className="bg-white border-b border-gray-100 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="flex space-x-6 overflow-x-auto">
          <motion.div className="flex items-center space-x-2 min-w-max" whileHover={{ scale: 1.05 }}>
            <span className="text-sm font-medium text-gray-700">Cuisine:</span>
            <select value={selectedCuisine} onChange={(e) => onCuisineChange(e.target.value)} className="border border-gray-200 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-orange-500">
              {cuisines.map(cuisine => <option key={cuisine} value={cuisine}>{cuisine}</option>)}
            </select>
          </motion.div>

          <motion.div className="flex items-center space-x-2 min-w-max" whileHover={{ scale: 1.05 }}>
            <span className="text-sm font-medium text-gray-700">Rating:</span>
            <select value={selectedRating} onChange={(e) => onRatingChange(Number(e.target.value))} className="border border-gray-200 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-orange-500">
              <option value={0}>All Ratings</option>
              {ratings.slice(1).map(r => <option key={r} value={r}>{r}+ Stars</option>)}
            </select>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
