import { Job, UserStats, FuelPrice } from './types';

export const CURRENT_USER: UserStats = {
  totalTrips: 142,
  monthlyEarnings: 84500,
  rating: 4.8,
  ratingCount: 56,
  activeJobId: 'job-123'
};

export const MOCK_FUEL_PRICES: FuelPrice[] = [
  { city: 'İstanbul', diesel: 41.20 },
  { city: 'Ankara', diesel: 41.55 },
  { city: 'İzmir', diesel: 41.40 },
];

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    origin: 'İstanbul, Tuzla',
    destination: 'Ankara, Gölbaşı',
    price: 18500,
    distance: 450,
    weight: 12000,
    cargoType: 'Elektronik Parça',
    urgent: true,
    companyName: 'Tekno Lojistik',
    rating: 4.9,
    description: 'Kırılabilir yük. Hassas taşıma gerektirir.'
  },
  {
    id: '2',
    origin: 'Bursa, Nilüfer',
    destination: 'İzmir, Bornova',
    price: 14200,
    distance: 330,
    weight: 24000,
    cargoType: 'Otomotiv Yedek Parça',
    urgent: false,
    companyName: 'OtoTrans',
    rating: 4.5
  },
  {
    id: '3',
    origin: 'Ankara, Kazan',
    destination: 'İstanbul, Gebze',
    price: 16000,
    distance: 420,
    weight: 8000,
    cargoType: 'Tekstil',
    urgent: false,
    isAiSuggested: true,
    companyName: 'Moda Lojistik',
    rating: 4.2,
    description: 'Dönüş rotanız için en uygun yük.'
  },
  {
    id: '4',
    origin: 'Adana, Organize',
    destination: 'Gaziantep, Şehitkamil',
    price: 9500,
    distance: 220,
    weight: 26000,
    cargoType: 'İnşaat Malzemesi',
    urgent: false,
    companyName: 'YapıTrans',
    rating: 3.8
  }
];



