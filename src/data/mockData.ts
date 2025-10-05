import { Place, MenuItem, Review, Menu } from '../types';

export const mockPlaces: Place[] = [
  {
    id: '20',
    name: 'Paradise - VEG',
    cuisine: 'Hyderabadi',
    rating: 4.5,
    reviewCount: 400,
    distance: 2.0,
    image: '/images/paradise.jpg',
    address: 'Secunderabad, Hitec City',
    phone: 'N/A',
    hours: '11 AM - 11 PM',
    description: 'Famous for Hyderabadi Veg Biryani, Veg Haleem.',
    priceRange: 'Rs. 200',
    isFavorite: false
  },
  {
    id: '21',
    name: 'Bawarchi (RTC Cross Roads)',
    cuisine: 'Hyderabadi',
    rating: 4.4,
    reviewCount: 250,
    distance: 2.5,
    image: '/images/bawarchi.jpg',
    address: 'RTC Cross Roads',
    phone: 'N/A',
    hours: '11 AM - 11 PM',
    description: 'Known for Hyderabadi Veg Biryani.',
    priceRange: 'Rs. 200',
    isFavorite: false
  },
  {
    id: '22',
    name: 'Chutneys (Banjara Hills, Himayatnagar)',
    cuisine: 'South Indian',
    rating: 4.6,
    reviewCount: 320,
    distance: 2.2,
    image: '/images/chutneys.jpg',
    address: 'Banjara Hills, Himayatnagar',
    phone: 'N/A',
    hours: '7 AM - 11 PM',
    description: 'Bagara Baingan, Khatti Dal, Pesarattu Upma, Guthi Vankaya Curry, South Indian Breakfast.',
    priceRange: 'Rs. 200',
    isFavorite: false
  },
  {
    id: '23',
    name: 'Jewel of Nizam (Masab Tank)',
    cuisine: 'Hyderabadi',
    rating: 4.7,
    reviewCount: 180,
    distance: 3.0,
    image: '/images/jewelofnizam.jpg',
    address: 'Masab Tank',
    phone: 'N/A',
    hours: '12 PM - 11 PM',
    description: 'Bagara Baingan, Qubani ka Meetha.',
    priceRange: 'Rs. 200',
    isFavorite: false
  },
  {
    id: '24',
    name: 'Minerva Coffee Shop (Himayatnagar)',
    cuisine: 'South Indian',
    rating: 4.3,
    reviewCount: 210,
    distance: 2.8,
    image: '/images/minerva.jpg',
    address: 'Himayatnagar',
    phone: 'N/A',
    hours: '7 AM - 11 PM',
    description: 'Khatti Dal, South Indian Breakfast.',
    priceRange: 'Rs. 200',
    isFavorite: false
  },
  {
    id: '25',
    name: 'Govind Dosa (Gachibowli, Charminar)',
    cuisine: 'South Indian',
    rating: 4.2,
    reviewCount: 100,
    distance: 3.5,
    image: '/images/govinddosa.jpg',
    address: 'Gachibowli, Charminar',
    phone: 'N/A',
    hours: '6 AM - 12 PM',
    description: 'South Indian Breakfast.',
    priceRange: '',
    isFavorite: false
  },
  {
    id: '26',
    name: 'Ulavacharu (Jubilee Hills)',
    cuisine: 'Andhra',
    rating: 4.5,
    reviewCount: 160,
    distance: 4.0,
    image: '/images/ulavacharu.jpg',
    address: 'Jubilee Hills',
    phone: 'N/A',
    hours: '12 PM - 11 PM',
    description: 'Andhra Meals, Ragi Sangati, Guthi Vankaya Curry.',
    priceRange: 'Rs. 200',
    isFavorite: false
  },
  {
    id: '27',
    name: 'Rayalaseema Ruchulu (Lakdikapul)',
    cuisine: 'Andhra',
    rating: 4.4,
    reviewCount: 140,
    distance: 4.2,
    image: '/images/rayalaseema.jpg',
    address: 'Lakdikapul',
    phone: 'N/A',
    hours: '12 PM - 11 PM',
    description: 'Andhra Meals, Ragi Sangati, Guthi Vankaya Curry.',
    priceRange: 'Rs. 200',
    isFavorite: false
  },
  {
    id: '28',
    name: 'Rajdhani Thali (Banjara Hills, Forum Mall Kukatpally)',
    cuisine: 'Gujarati',
    rating: 4.3,
    reviewCount: 110,
    distance: 4.5,
    image: '/images/rajdhani.jpg',
    address: 'Banjara Hills, Forum Mall Kukatpally',
    phone: 'N/A',
    hours: '12 PM - 11 PM',
    description: 'Dhokla and Gujarati Thali.',
    priceRange: 'Rs. 200',
    isFavorite: false
  },
  {
    id: '29',
    name: 'Jai Jalaram Foods',
    cuisine: 'North Indian',
    rating: 4.2,
    reviewCount: 90,
    distance: 4.8,
    image: '/images/jaijalaram.jpg',
    address: 'Banjara Hills',
    phone: 'N/A',
    hours: '12 PM - 11 PM',
    description: 'North Indian Snacks',
    priceRange: 'Rs. 200',
    isFavorite: false
  },
  {
    id: '30',
    name: 'Gokul Chat (Koti)',
    cuisine: 'Street Food',
    rating: 4.1,
    reviewCount: 200,
    distance: 5.0,
    image: '/images/gokulchat.jpg',
    address: 'Koti',
    phone: 'N/A',
    hours: '12 PM - 10 PM',
    description: 'Chat items like Dahi Puri, Bhel, Ragda Patties.',
    priceRange: '',
    isFavorite: false
  },
  {
    id: '18',
    name: 'Ram ki Bandi',
    cuisine: 'South Indian',
    rating: 4.8,
    reviewCount: 300,
    distance: 0.5,
    image: '/images/ramkibandi.jpg',
    address: 'Nampally, Hyderabad',
    phone: 'N/A',
    hours: '5 AM - 11 AM',
    description: 'Famous for Pizza Dosa and unique breakfast items.',
    priceRange: '',
    isFavorite: false
  },
  {
    id: '19',
    name: 'Krishna Idli & Dosa',
    cuisine: 'South Indian',
    rating: 4.5,
    reviewCount: 180,
    distance: 1.0,
    image: '/images/krishnaidli.jpg',
    address: 'Ameerpet, Hyderabad',
    phone: 'N/A',
    hours: '6 AM - 12 PM',
    description: 'Home of the 24 Carat Gold Idli.',
    priceRange: '',
    isFavorite: false
  },
  {
    id: '12',
    name: 'Hari Dosa',
    cuisine: 'South Indian',
    rating: 4.2,
    reviewCount: 60,
    distance: 1.2,
    image: '/images/hari.jpg',
    address: 'Hyderabad',
    phone: 'N/A',
    hours: '6 AM - 12 PM',
    description: 'Famous for Kaju Dosa.',
    priceRange: '',
    isFavorite: false
  },
  {
    id: '13',
    name: 'Taaza Kitchen',
    cuisine: 'South Indian',
    rating: 4.3,
    reviewCount: 75,
    distance: 1.4,
    image: '/images/taaza.jpg',
    address: 'Hyderabad',
    phone: 'N/A',
    hours: '6 AM - 12 PM',
    description: 'Known for Masala Dosa.',
    priceRange: '',
    isFavorite: false
  },
  {
    id: '14',
    name: 'Panchakattu Dosa',
    cuisine: 'South Indian',
    rating: 4.1,
    reviewCount: 50,
    distance: 1.6,
    image: '/images/panchakattu.jpg',
    address: 'Hyderabad',
    phone: 'N/A',
    hours: '6 AM - 12 PM',
    description: 'Specialty in Upma Perasattu.',
    priceRange: '',
    isFavorite: false
  },
  {
    id: '15',
    name: "Udupi's Upahar",
    cuisine: 'South Indian',
    rating: 4.4,
    reviewCount: 90,
    distance: 1.8,
    image: '/images/udupi.jpg',
    address: 'Hyderabad',
    phone: 'N/A',
    hours: '6 AM - 12 PM',
    description: 'Sambar Vada specialists.',
    priceRange: '',
    isFavorite: false
  },
  {
    id: '16',
    name: 'Poorna Hotel (Lakdikapul)',
    cuisine: 'South Indian',
    rating: 4.0,
    reviewCount: 55,
    distance: 2.0,
    image: '/images/poorna.jpg',
    address: 'Lakdikapul, Hyderabad',
    phone: 'N/A',
    hours: '6 AM - 12 PM',
    description: 'Famous for Puri.',
    priceRange: '',
    isFavorite: false
  },
  {
    id: '17',
    name: 'Mahalaxmi Tiffin Nampally',
    cuisine: 'South Indian',
    rating: 4.1,
    reviewCount: 65,
    distance: 2.2,
    image: '/images/mahalaxmi.jpg',
    address: 'Nampally, Hyderabad',
    phone: 'N/A',
    hours: '6 AM - 12 PM',
    description: 'Known for Mysore Bonda.',
    priceRange: '',
    isFavorite: false
  },
  {
    id: '1',
    name: 'Shadaab Hotel',
    cuisine: 'Hyderabadi',
    rating: 4.6,
    reviewCount: 210,
    distance: 1.0,
    image: '/images/shadab.jpg',
    address: 'Madina Building, Hyderabad',
    phone: '040-24565949',
    hours: '12 PM - 11 PM',
    description: 'Authentic Mughlai cuisine and famous biryani.',
    priceRange: 'Rs. 200',
    isFavorite: true
  },
  {
    id: '2',
    name: 'Mandi@36',
    cuisine: 'Arabian',
    rating: 4.4,
    reviewCount: 180,
    distance: 2.0,
    image: '/images/mandi36.jpg',
    address: 'Banjara Hills, Hyderabad',
    phone: '040-23333336',
    hours: '12 PM - 11 PM',
    description: 'Best Mutton Juicy Mandi in Hyderabad.',
    priceRange: 'Rs. 200',
    isFavorite: false
  },
  {
    id: '3',
    name: 'Capital Restaurant',
    cuisine: 'Hyderabadi',
    rating: 4.2,
    reviewCount: 100,
    distance: 2.2,
    image: '/images/capital.jpg',
    address: 'Hyderabad',
    phone: 'N/A',
    hours: '12 PM - 11 PM',
    description: 'Known for Mutton Marg.',
    priceRange: 'Rs. 200',
    isFavorite: false
  },
  {
    id: '4',
    name: 'Nawabs Restaurant',
    cuisine: 'Hyderabadi',
    rating: 4.1,
    reviewCount: 80,
    distance: 2.5,
    image: '/images/nawabas.jpg',
    address: 'Hyderabad',
    phone: 'N/A',
    hours: '12 PM - 11 PM',
    description: 'Specialty in Pattor ka Gosht.',
    priceRange: 'Rs. 200',
    isFavorite: false
  },
  {
    id: '5',
    name: 'Paradise Biryani',
    cuisine: 'Hyderabadi',
    rating: 4.3,
    reviewCount: 220,
    distance: 1.8,
    image: '/images/paradise.jpg',
    address: 'Secunderabad, Hyderabad',
    phone: 'N/A',
    hours: '12 PM - 11 PM',
    description: 'Iconic biryani destination.',
    priceRange: 'Rs. 200',
    isFavorite: false
  },
  {
    id: '6',
    name: 'Cafe Bahar',
    cuisine: 'Hyderabadi',
    rating: 4.0,
    reviewCount: 90,
    distance: 2.7,
    image: '/images/bahar.jpg',
    address: 'Hyderabad',
    phone: 'N/A',
    hours: '12 PM - 11 PM',
    description: 'Famous for Tandoori Khabed.',
    priceRange: 'Rs. 200',
    isFavorite: false
  },
  {
    id: '7',
    name: 'Nayaab Hotel',
    cuisine: 'Hyderabadi',
    rating: 4.5,
    reviewCount: 150,
    distance: 2.9,
    image: '/images/nayaab.jpg',
    address: 'Hyderabad',
    phone: 'N/A',
    hours: '12 PM - 11 PM',
    description: 'Malai Paya and Gurda Fry specialists.',
    priceRange: 'Rs. 200',
    isFavorite: false
  },
  {
    id: '8',
    name: 'Bawarchi Restaurant',
    cuisine: 'Hyderabadi',
    rating: 4.4,
    reviewCount: 200,
    distance: 3.0,
    image: '/images/bawarchi.jpg',
    address: 'Hyderabad',
    phone: 'N/A',
    hours: '12 PM - 11 PM',
    description: 'Boti Kebab and Chicken Curry.',
    priceRange: 'Rs. 200',
    isFavorite: false
  },
  {
    id: '9',
    name: 'Shah Ghouse Cafe',
    cuisine: 'Hyderabadi',
    rating: 4.3,
    reviewCount: 110,
    distance: 3.2,
    image: '/images/shahghouse.jpg',
    address: 'Hyderabad',
    phone: 'N/A',
    hours: '12 PM - 11 PM',
    description: 'Khichdi Keema Khatta specialists.',
    priceRange: 'Rs. 200',
    isFavorite: false
  },
  {
    id: '10',
    name: 'Blue Sea Restaurant',
    cuisine: 'Hyderabadi',
    rating: 4.2,
    reviewCount: 70,
    distance: 3.5,
    image: '/images/bluesea.jpg',
    address: 'Hyderabad',
    phone: 'N/A',
    hours: '12 PM - 11 PM',
    description: 'Fish Fry Biryani specialists.',
    priceRange: 'Rs. 200',
    isFavorite: false
  },
  {
    id: '11',
    name: 'Pista House',
    cuisine: 'Hyderabadi',
    rating: 4.5,
    reviewCount: 300,
    distance: 2.5,
    image: '/images/pistahouse.jpg',
    address: 'Charminar, Hyderabad',
    phone: '040-24567890',
    hours: '11 AM - 10 PM',
    description: 'World famous for Haleem and Biryani.',
    priceRange: 'Rs. 200',
    isFavorite: false
  }
];

export const mockMenus: Menu[] = [
  {
    placeId: '20',
    categories: ['Veg Special'],
    items: [
      { id: '29', name: 'Hyderabadi Veg Biryani', description: '', price: 220, category: 'Veg Special', image: '/images/vegbiryani.jpg' },
      { id: '30', name: 'Mirchi ka Salan', description: '', price: 80, category: 'Veg Special', image: '/images/mirchisalan.jpg' },
      { id: '31', name: 'Double Ka Meetha', description: '', price: 90, category: 'Veg Special', image: '/images/doublemeetha.jpg' },
      { id: '32', name: 'Qubani ka Meetha', description: '', price: 100, category: 'Veg Special', image: '/images/qubanimeetha.jpg' },
      { id: '33', name: 'Veg Haleem', description: '', price: 120, category: 'Veg Special', image: '/images/veghaleem.jpg' }
    ]
  },
  {
    placeId: '21',
    categories: ['Veg Special'],
    items: [
      { id: '34', name: 'Hyderabadi Veg Biryani', description: '', price: 220, category: 'Veg Special', image: '/images/vegbiryani.jpg' }
    ]
  },
  {
    placeId: '22',
    categories: ['Veg Special', 'Breakfast'],
    items: [
      { id: '35', name: 'Bagara Baingan', description: '', price: 110, category: 'Veg Special', image: '/images/bagarabaingan.jpg' },
      { id: '36', name: 'Khatti Dal', description: '', price: 70, category: 'Veg Special', image: '/images/khattidal.jpg' },
      { id: '37', name: 'Pesarattu Upma', description: '', price: 80, category: 'Veg Special', image: '/images/pesarattu.jpg' },
      { id: '38', name: 'Guthi Vankaya Curry', description: '', price: 120, category: 'Veg Special', image: '/images/guthivankaya.jpg' },
      { id: '39', name: 'South Indian Breakfast', description: '', price: 100, category: 'Breakfast', image: '/images/upma.jpg' }
    ]
  },
  {
    placeId: '23',
    categories: ['Veg Special'],
    items: [
      { id: '40', name: 'Bagara Baingan', description: '', price: 120, category: 'Veg Special', image: '/images/bagarabaingan.jpg' },
      { id: '41', name: 'Qubani ka Meetha', description: '', price: 110, category: 'Veg Special', image: '/images/qubanimeetha.jpg' }
    ]
  },
  {
    placeId: '24',
    categories: ['Veg Special', 'Breakfast'],
    items: [
      { id: '42', name: 'Khatti Dal', description: '', price: 70, category: 'Veg Special', image: '/images/khattidal.jpg' },
      { id: '43', name: 'South Indian Breakfast', description: '', price: 100, category: 'Breakfast', image: '/images/upma.jpg' }
    ]
  },
  {
    placeId: '25',
    categories: ['Breakfast'],
    items: [
      { id: '44', name: 'South Indian Breakfast', description: '', price: 100, category: 'Breakfast', image: '/images/upma.jpg' }
    ]
  },
  {
    placeId: '26',
    categories: ['Veg Special'],
    items: [
      { id: '45', name: 'Andhra Meals', description: '', price: 180, category: 'Veg Special', image: '/images/andhrameals.jpg' },
      { id: '46', name: 'Ragi Sangati with Veg Curries', description: '', price: 150, category: 'Veg Special', image: '/images/ragisangati.jpg' },
      { id: '47', name: 'Guthi Vankaya Curry', description: '', price: 120, category: 'Veg Special', image: '/images/guthivankaya.jpg' }
    ]
  },
  {
    placeId: '27',
    categories: ['Veg Special'],
    items: [
      { id: '48', name: 'Andhra Meals', description: '', price: 180, category: 'Veg Special', image: '/images/andhrameals.jpg' },
      { id: '49', name: 'Ragi Sangati with Veg Curries', description: '', price: 150, category: 'Veg Special', image: '/images/ragisangati.jpg' },
      { id: '50', name: 'Guthi Vankaya Curry', description: '', price: 120, category: 'Veg Special', image: '/images/guthivankaya.jpg' }
    ]
  },
  {
    placeId: '28',
    categories: ['Veg Special'],
    items: [
      { id: '51', name: 'Dhokla', description: '', price: 60, category: 'Veg Special', image: '/images/dhokla.jpg' },
      { id: '52', name: 'Gujarati Thali', description: '', price: 180, category: 'Veg Special', image: '/images/gujaratithali.jpg' }
    ]
  },
  {
    placeId: '29',
    categories: ['Veg Special'],
    items: [
      { id: '53', name: 'Bombay Vada Pav', description: '', price: 200, category: 'Veg Special', image: '/images/vadapav.jpg' }
    ]
  },
  {
    placeId: '30',
    categories: ['Street Food'],
    items: [
      { id: '54', name: 'Dahi Puri', description: '', price: 40, category: 'Street Food', image: '/images/dahipuri.jpg' },
      { id: '55', name: 'Bhel', description: '', price: 35, category: 'Street Food', image: '/images/bhel.jpg' },
      { id: '56', name: 'Ragda Patties', description: '', price: 45, category: 'Street Food', image: '/images/ragda.jpg' }
    ]
  },
  {
    placeId: '12',
    categories: ['Breakfast'],
    items: [
      { id: '23', name: 'Kaju Dosa', description: '', price: 90, category: 'Breakfast', image: '/images/kajudosa.jpg' }
    ]
  },
  {
    placeId: '13',
    categories: ['Breakfast'],
    items: [
      { id: '24', name: 'Masala Dosa', description: '', price: 60, category: 'Breakfast', image: '/images/masaladosa.jpg' }
    ]
  },
  {
    placeId: '14',
    categories: ['Breakfast'],
    items: [
      { id: '25', name: 'Upma Perasattu', description: '', price: 50, category: 'Breakfast', image: '/images/pesarattu.jpg' }
    ]
  },
  {
    placeId: '15',
    categories: ['Breakfast'],
    items: [
      { id: '26', name: 'Sambar Vada', description: '', price: 40, category: 'Breakfast', image: '/images/sambarvada.jpg' }
    ]
  },
  {
    placeId: '16',
    categories: ['Breakfast'],
    items: [
      { id: '27', name: 'Puri', description: '', price: 35, category: 'Breakfast', image: '/images/puri.jpg' }
    ]
  },
  {
    placeId: '17',
    categories: ['Breakfast'],
    items: [
      { id: '28', name: 'Mysore Bonda', description: '', price: 30, category: 'Breakfast', image: '/images/bonda.jpg' }
    ]
  },
  {
    placeId: '1',
    categories: ['Non Veg Lunch'],
    items: [
      { id: '1', name: 'Hyderabad Dum Biryani', description: '', price: 250, category: 'Non Veg Lunch', image: '/images/biryani.jpg' }
    ]
  },
  {
    placeId: '2',
    categories: ['Non Veg Lunch'],
    items: [
      { id: '2', name: 'Mutton Juicy Mandi', description: '', price: 350, category: 'Non Veg Lunch', image: '/images/mandi36.jpg' }
    ]
  },
  {
    placeId: '3',
    categories: ['Non Veg Lunch'],
    items: [
      { id: '3', name: 'Mutton Marg', description: '', price: 220, category: 'Non Veg Lunch', image: '/images/marg.jpg' }
    ]
  },
  {
    placeId: '4',
    categories: ['Non Veg Lunch'],
    items: [
      { id: '4', name: 'Pattor ka Gosht', description: '', price: 300, category: 'Non Veg Lunch', image: '/images/pattorgosht.jpg' }
    ]
  },
  {
    placeId: '5',
    categories: ['Non Veg Lunch'],
    items: [
      { id: '5', name: 'Paradise Biryani', description: '', price: 240, category: 'Non Veg Lunch', image: '/images/biryani.jpg' }
    ]
  },
  {
    placeId: '6',
    categories: ['Non Veg Lunch'],
    items: [
      { id: '6', name: 'Tandoori Khabed', description: '', price: 200, category: 'Non Veg Lunch', image: '/images/tandoori.jpg' }
    ]
  },
  {
    placeId: '7',
    categories: ['Non Veg Lunch'],
    items: [
      { id: '7', name: 'Malai Paya', description: '', price: 210, category: 'Non Veg Lunch', image: '/images/paya.jpg' },
      { id: '11', name: 'Gurda (Brain & Bheja) Fry', description: '', price: 230, category: 'Non Veg Lunch', image: '/images/gurda.jpg' },
      { id: '14', name: 'Egg Masala Curry', description: '', price: 150, category: 'Non Veg Lunch', image: '/images/eggmasala.jpg' }
    ]
  },
  {
    placeId: '8',
    categories: ['Non Veg Lunch'],
    items: [
      { id: '9', name: 'Boti Kebab', description: '', price: 190, category: 'Non Veg Lunch', image: '/images/boti.jpg' },
      { id: '13', name: 'Chicken Curry', description: '', price: 180, category: 'Non Veg Lunch', image: '/images/chickencurry.jpg' }
    ]
  },
  {
    placeId: '9',
    categories: ['Non Veg Lunch'],
    items: [
      { id: '10', name: 'Khichdi Keema Khatta', description: '', price: 170, category: 'Non Veg Lunch', image: '/images/khichdi.jpg' }
    ]
  },
  {
    placeId: '10',
    categories: ['Non Veg Lunch'],
    items: [
      { id: '12', name: 'Fish Fry Biryani', description: '', price: 260, category: 'Non Veg Lunch', image: '/images/fishbiryani.jpg' }
    ]
  },
  {
    placeId: '11',
    categories: ['Non Veg Lunch'],
    items: [
      { id: '8', name: 'Haleem', description: '', price: 180, category: 'Non Veg Lunch', image: '/images/haleem.jpg' }
    ]
  },
  {
    placeId: '4',
    categories: ['Breakfast'],
    items: [
      { id: '15', name: 'Pizza Dosa', description: '', price: 80, category: 'Breakfast', image: '/images/pizzadosa.jpg' },
      { id: '16', name: '24 Carat Gold Idli', description: '', price: 120, category: 'Breakfast', image: '/images/goldidli.jpg' },
      { id: '17', name: 'Kaju Dosa', description: '', price: 90, category: 'Breakfast', image: '/images/kajudosa.jpg' },
      { id: '18', name: 'Masala Dosa', description: '', price: 60, category: 'Breakfast', image: '/images/masaladosa.jpg' },
      { id: '19', name: 'Upma Perasattu', description: '', price: 50, category: 'Breakfast', image: '/images/pesarattu.jpg' },
      { id: '20', name: 'Sambar Vada', description: '', price: 40, category: 'Breakfast', image: '/images/sambarvada.jpg' },
      { id: '21', name: 'Puri', description: '', price: 35, category: 'Breakfast', image: '/images/puri.jpg' },
      { id: '22', name: 'Mysore Bonda', description: '', price: 30, category: 'Breakfast', image: '/images/bonda.jpg' }
    ]
  },
  {
  placeId: '18', // Ram ki Bandi
  categories: ['Breakfast'],
  items: [
    { id: '57', name: 'Masala Dosa', description: '', price: 60, category: 'Breakfast', image: '/images/masaladosa.jpg' },
    { id: '58', name: 'Teenmar Dosa', description: '', price: 70, category: 'Breakfast', image: '/images/teenmaar.jpg' }
  ]
},
{
  placeId: '19', // Krishna Idli & Dosa
  categories: ['Breakfast'],
  items: [
    { id: '59', name: 'Ghee Idly', description: '', price: 50, category: 'Breakfast', image: '/images/gheeidly.jpg' },
    { id: '60', name: 'Upma Dosa', description: '', price: 60, category: 'Breakfast', image: '/images/upmadosa.jpg' }
  ]
}

];

export const mockReviews: Review[] = [
  {
    id: '1',
    placeId: '1',
    userName: 'Sarah M.',
    rating: 5,
    comment: 'Amazing tacos! The beef is perfectly seasoned and the tortillas are so fresh. Will definitely come back!',
    date: '2024-01-15',
    photos: ['https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg']
  },
  {
    id: '2',
    placeId: '1',
    userName: 'Mike D.',
    rating: 4,
    comment: 'Great food and friendly service. The spicy chicken taco has the perfect kick to it.',
    date: '2024-01-10'
  },
  {
    id: '3',
    placeId: '2',
    userName: 'Lisa K.',
    rating: 5,
    comment: 'Best noodles in the city! Fresh, flavorful, and generous portions. Highly recommend!',
    date: '2024-01-12'
  }
  
];