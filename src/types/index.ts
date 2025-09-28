export interface Place {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  reviewCount: number;
  distance: number;
  image: string;
  address: string;
  phone: string;
  hours: string;
  description: string;
  priceRange: string;
  isFavorite: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  image?: string;
}

export interface Review {
  id: string;
  placeId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  photos?: string[];
}

export interface Menu {
  placeId: string;
  categories: string[];
  items: MenuItem[];
}