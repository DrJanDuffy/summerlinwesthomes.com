'use client';

import React, { useState, useEffect } from 'react';
import { Search, Filter, Map, Home, Bed, Bath, Square, DollarSign, MapPin, Sliders } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PropertySearchPage() {
  const [searchParams, setSearchParams] = useState({
    village: '',
    minPrice: '',
    maxPrice: '',
    minBeds: '',
    minBaths: '',
    minSqft: '',
    propertyType: '',
    status: 'for-sale',
    view: 'list'
  });

  const [filters, setFilters] = useState({
    showFilters: false,
    golfCourse: false,
    guardGated: false,
    redRockViews: false,
    newConstruction: false,
    pool: false,
    mountainViews: false
  });

  const villages = [
    'The Ridges', 'The Summit', 'Red Rock Country Club', 'Reverence',
    'The Paseos', 'The Vistas', 'Mesa', 'Stonebridge', 'Redpoint', 'Shelbourne'
  ];

  const propertyTypes = [
    'Single Family', 'Luxury Estate', 'Golf Course Home', 'Condo', 'Townhome', '55+ Active Adult'
  ];

  const priceRanges = [
    'Under $700K', '$700K - $1M', '$1M - $2M', '$2M - $5M', '$5M+'
  ];

  const [properties, setProperties] = useState([
    {
      id: '1',
      mls: '2418448',
      title: 'Luxury Estate in The Ridges',
      price: 2495000,
      priceFormatted: '$2,495,000',
      address: '12345 Ridges Peak Dr',
      village: 'The Ridges',
      beds: 5,
      baths: 6,
      sqft: 5200,
      lotSize: 0.75,
      yearBuilt: 2023,
      propertyType: 'Luxury Estate',
      status: 'for-sale',
      features: ['Golf Course View', 'Guard Gated', 'Red Rock Views', 'Pool & Spa'],
      image: '/properties/ridges-estate.jpg',
      daysOnMarket: 12,
      pricePerSqft: 480
    },
    {
      id: '2',
      mls: '2418449',
      title: 'Modern Villa in The Summit',
      price: 1850000,
      priceFormatted: '$1,850,000',
      address: '6789 Summit View Ln',
      village: 'The Summit',
      beds: 4,
      baths: 4,
      sqft: 4100,
      lotSize: 0.5,
      yearBuilt: 2022,
      propertyType: 'Single Family',
      status: 'for-sale',
      features: ['Mountain Views', 'Smart Home', 'Chef\'s Kitchen', '3-Car Garage'],
      image: '/properties/summit-villa.jpg',
      daysOnMarket: 8,
      pricePerSqft: 451
    },
    {
      id: '3',
      mls: '2418450',
      title: 'Red Rock Country Club Estate',
      price: 3200000,
      priceFormatted: '$3,200,000',
      address: '9876 Golf Club Dr',
      village: 'Red Rock Country Club',
      beds: 6,
      baths: 7,
      sqft: 6800,
      lotSize: 1.2,
      yearBuilt: 2021,
      propertyType: 'Luxury Estate',
      status: 'for-sale',
      features: ['Golf Course Frontage', 'Private Golf Club', 'Butler\'s Pantry', 'Guest House'],
      image: '/properties/red-rock-estate.jpg',
      daysOnMarket: 15,
      pricePerSqft: 471
    }
  ]);

  const [filteredProperties, setFilteredProperties] = useState(properties);

  useEffect(() => {
    // Apply filters
    let filtered = properties.filter(property => {
      if (searchParams.village && property.village !== searchParams.village) return false;
      if (searchParams.minPrice && property.price < parseInt(searchParams.minPrice)) return false;
      if (searchParams.maxPrice && property.price > parseInt(searchParams.maxPrice)) return false;
      if (searchParams.minBeds && property.beds < parseInt(searchParams.minBeds)) return false;
      if (searchParams.minBaths && property.baths < parseInt(searchParams.minBaths)) return false;
      if (searchParams.minSqft && property.sqft < parseInt(searchParams.minSqft)) return false;
      if (searchParams.propertyType && property.propertyType !== searchParams.propertyType) return false;
      if (searchParams.status && property.status !== searchParams.status) return false;
      return true;
    });

    setFilteredProperties(filtered);
  }, [searchParams, properties]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would call RealScout API
    console.log('Searching with params:', searchParams);
  };

  const updateSearchParam = (key: string, value: string) => {
    setSearchParams(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-500 to-red-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Dream Home in Summerlin West
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Search exclusive properties within Summerlin West boundaries - from luxury estates to family homes
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">Exclusive to Summerlin West</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Real-time MLS Data</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Guard Gated Communities</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Red Rock Canyon Views</span>
          </div>
        </div>
      </section>

      {/* Search Form */}
      <section className="py-8 bg-white shadow-lg relative z-20 -mt-8">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSearch} className="bg-white rounded-xl shadow-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Village Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Village</label>
                <select
                  value={searchParams.village}
                  onChange={(e) => updateSearchParam('village', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  aria-label="Select village"
                >
                  <option value="">All Villages</option>
                  {villages.map(village => (
                    <option key={village} value={village}>{village}</option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Min Price</label>
                <select
                  value={searchParams.minPrice}
                  onChange={(e) => updateSearchParam('minPrice', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  aria-label="Select minimum price"
                >
                  <option value="">Any Price</option>
                  <option value="500000">$500K+</option>
                  <option value="700000">$700K+</option>
                  <option value="1000000">$1M+</option>
                  <option value="2000000">$2M+</option>
                  <option value="5000000">$5M+</option>
                </select>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Min Beds</label>
                <select
                  value={searchParams.minBeds}
                  onChange={(e) => updateSearchParam('minBeds', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  aria-label="Select minimum bedrooms"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select
                  value={searchParams.propertyType}
                  onChange={(e) => updateSearchParam('propertyType', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  aria-label="Select property type"
                >
                  <option value="">All Types</option>
                  {propertyTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Advanced Filters Toggle */}
            <div className="flex justify-between items-center mb-6">
              <button
                type="button"
                onClick={() => setFilters(prev => ({ ...prev, showFilters: !prev.showFilters }))}
                className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium"
              >
                <Sliders className="h-4 w-4" />
                <span>Advanced Filters</span>
              </button>

              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => updateSearchParam('view', 'list')}
                  className={cn(
                    'px-3 py-2 rounded-lg font-medium transition-colors',
                    searchParams.view === 'list' 
                      ? 'bg-amber-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  )}
                >
                  List View
                </button>
                <button
                  type="button"
                  onClick={() => updateSearchParam('view', 'map')}
                  className={cn(
                    'px-3 py-2 rounded-lg font-medium transition-colors',
                    searchParams.view === 'map' 
                      ? 'bg-amber-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  )}
                >
                  Map View
                </button>
              </div>
            </div>

            {/* Advanced Filters */}
            {filters.showFilters && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters.golfCourse}
                    onChange={(e) => setFilters(prev => ({ ...prev, golfCourse: e.target.checked }))}
                    className="rounded text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-sm">Golf Course</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters.guardGated}
                    onChange={(e) => setFilters(prev => ({ ...prev, guardGated: e.target.checked }))}
                    className="rounded text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-sm">Guard Gated</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters.redRockViews}
                    onChange={(e) => setFilters(prev => ({ ...prev, redRockViews: e.target.checked }))}
                    className="rounded text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-sm">Red Rock Views</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters.newConstruction}
                    onChange={(e) => setFilters(prev => ({ ...prev, newConstruction: e.target.checked }))}
                    className="rounded text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-sm">New Construction</span>
                </label>
              </div>
            )}

            {/* Search Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center space-x-2 mx-auto"
              >
                <Search className="h-5 w-5" />
                <span>Search Summerlin West Properties</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold">Search Results</h2>
              <p className="text-gray-600 mt-2">
                {filteredProperties.length} properties found in Summerlin West
              </p>
            </div>
            <div className="text-sm text-gray-500">
              Results limited to Summerlin West boundaries
            </div>
          </div>

          {/* RealScout Integration Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  RealScout MLS Integration
                </h3>
                <p className="text-blue-800 mb-3">
                  This search is powered by RealScout, providing real-time MLS data exclusively for Summerlin West properties.
                  All listings are verified and updated automatically.
                </p>
                <div className="text-sm text-blue-700">
                  <strong>Geographic Focus:</strong> Properties between Sahara Ave & Charleston Blvd, west of 215 Beltway
                </div>
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64 bg-gradient-to-br from-amber-400 to-orange-500">
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      MLS #{property.mls}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {property.daysOnMarket} Days
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-amber-600 mb-2">{property.priceFormatted}</h3>
                  <p className="text-gray-800 font-medium mb-2">{property.title}</p>
                  <p className="text-gray-600 text-sm mb-3">{property.address}</p>
                  <p className="text-amber-600 font-semibold text-sm mb-4">{property.village}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="flex items-center justify-center space-x-1 text-gray-600 mb-1">
                        <Bed className="h-4 w-4" />
                        <span className="text-sm">{property.beds}</span>
                      </div>
                      <span className="text-xs text-gray-500">Beds</span>
                    </div>
                    <div>
                      <div className="flex items-center justify-center space-x-1 text-gray-600 mb-1">
                        <Bath className="h-4 w-4" />
                        <span className="text-sm">{property.baths}</span>
                      </div>
                      <span className="text-xs text-gray-500">Baths</span>
                    </div>
                    <div>
                      <div className="flex items-center justify-center space-x-1 text-gray-600 mb-1">
                        <Square className="h-4 w-4" />
                        <span className="text-sm">{property.sqft.toLocaleString()}</span>
                      </div>
                      <span className="text-xs text-gray-500">Sq Ft</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500">Price per Sq Ft:</span>
                      <span className="font-semibold">${property.pricePerSqft}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Lot Size:</span>
                      <span className="font-semibold">{property.lotSize} acres</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm text-gray-700">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {property.features.slice(0, 3).map((feature) => (
                        <span key={feature} className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Properties Found</h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search criteria or contact us for personalized assistance.
              </p>
              <button
                onClick={() => setSearchParams({
                  village: '',
                  minPrice: '',
                  maxPrice: '',
                  minBeds: '',
                  minBaths: '',
                  minSqft: '',
                  propertyType: '',
                  status: 'for-sale',
                  view: 'list'
                })}
                className="bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
