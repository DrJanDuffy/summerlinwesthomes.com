export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  priceFormatted: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    fullAddress: string;
  };
  details: {
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    lotSize: number;
    yearBuilt: number;
    propertyType: PropertyType;
    status: PropertyStatus;
  };
  features: string[];
  images: PropertyImage[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
  agent: Agent;
  createdAt: Date;
  updatedAt: Date;
}

export interface PropertyImage {
  id: string;
  url: string;
  alt: string;
  isPrimary: boolean;
  order: number;
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  bio: string;
  specialties: string[];
  yearsOfExperience: number;
  licenseNumber: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyId?: string;
  preferredContactMethod: 'email' | 'phone' | 'text';
}

export interface SearchFilters {
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
  minBathrooms?: number;
  minSquareFeet?: number;
  maxSquareFeet?: number;
  propertyType?: PropertyType[];
  status?: PropertyStatus[];
  location?: string;
}

export type PropertyType =
  | 'single-family'
  | 'condo'
  | 'townhouse'
  | 'luxury'
  | 'new-construction'
  | 'foreclosure'
  | 'short-sale';

export type PropertyStatus =
  | 'for-sale'
  | 'under-contract'
  | 'sold'
  | 'coming-soon'
  | 'off-market';

export interface Neighborhood {
  id: string;
  name: string;
  description: string;
  amenities: string[];
  schools: School[];
  crimeRate: 'low' | 'medium' | 'high';
  walkScore: number;
  transitScore: number;
}

export interface School {
  id: string;
  name: string;
  type: 'elementary' | 'middle' | 'high';
  rating: number;
  distance: number;
}

export interface MarketData {
  averagePrice: number;
  averageDaysOnMarket: number;
  totalProperties: number;
  pricePerSquareFoot: number;
  marketTrend: 'rising' | 'stable' | 'declining';
  lastUpdated: Date;
}
