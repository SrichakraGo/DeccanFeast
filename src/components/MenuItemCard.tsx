import React from "react";

interface MenuItem {
  id: string;
  name: string;
  price: number;
}

interface MenuItemCardProps {
  item: MenuItem;
  placeId: string;
  onAddToCart: (placeId: string, item: MenuItem) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, placeId, onAddToCart }) => {
  return (
    <div className="bg-white p-3 rounded-lg shadow hover:shadow-lg flex justify-between items-center">
      <div>
        <h4 className="font-medium">{item.name}</h4>
        <span className="text-gray-500">${item.price}</span>
      </div>
      <button
        className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600"
        onClick={() => onAddToCart(placeId, item)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default MenuItemCard;
