export interface Job {
  id: string;
  origin: string;
  destination: string;
  price: number;
  distance: number;
  weight: number; // in kg
  cargoType: string;
  urgent: boolean;
  isAiSuggested?: boolean;
  companyName: string;
  rating: number;
  description?: string;
}

export interface UserStats {
  totalTrips: number;
  monthlyEarnings: number;
  rating: number;
  ratingCount: number;
  activeJobId: string | null;
}

export enum Tab {
  HOME = 'HOME',
  SEARCH = 'SEARCH',
  ROUTE = 'ROUTE',
  PROFILE = 'PROFILE'
}

export interface FuelPrice {
  city: string;
  diesel: number;
}



