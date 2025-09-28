import React from 'react';
import { Leaf, Flame } from 'lucide-react';
import { mockMenus } from '../data/mockData';

interface MenuSectionProps {
  placeId: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({ placeId }) => {
  const menu = mockMenus.find(m => m.placeId === placeId);
  
  if (!menu) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>Menu not available at the moment.</p>
        <p className="text-sm mt-2">Please contact the restaurant directly for menu information.</p>
      </div>
    );
  }

  const itemsByCategory = menu.categories.reduce((acc, category) => {
    acc[category] = menu.items.filter(item => item.category === category);
    return acc;
  }, {} as Record<string, typeof menu.items>);

  return (
    <div className="space-y-6">
      {menu.categories.map(category => (
        <div key={category}>
          <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
            {category}
          </h3>
          <div className="grid gap-4">
            {itemsByCategory[category]?.map(item => (
              <div key={item.id} className="flex items-start space-x-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                {item.image && (
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                )}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800 flex items-center space-x-2">
                      <span>{item.name}</span>
                      {item.isVegetarian && <Leaf className="w-4 h-4 text-green-500" />}
                      {item.isSpicy && <Flame className="w-4 h-4 text-red-500" />}
                    </h4>
                    <span className="text-lg font-bold text-orange-600">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuSection;