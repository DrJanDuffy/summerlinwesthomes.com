'use client';

import React, { useState, useEffect } from 'react';
import {
  Search,
  Filter,
  Map,
  Home,
  Bed,
  Bath,
  Square,
  DollarSign,
  MapPin,
  Sliders,
} from 'lucide-react';
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
    view: 'list',
  });

  const [filters, setFilters] = useState({
    showFilters: false,
    golfCourse: false,
    guardGated: false,
    redRockViews: false,
    newConstruction: false,
    pool: false,
    mountainViews: false,
  });

  const villages = [
    'The Ridges',
    'The Summit',
    'Red Rock Country Club',
    'Reverence',
    'The Paseos',
    'The Vistas',
    'Mesa',
    'Stonebridge',
    'Redpoint',
    'Shelbourne',
  ];

  const propertyTypes = [
    'Single Family',
    'Luxury Estate',
    'Golf Course Home',
    'Condo',
    'Townhome',
    '55+ Active Adult',
  ];

  const priceRanges = [
    'Under $700K',
    '$700K - $1M',
    '$1M - $2M',
    '$2M - $5M',
    '$5M+',
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
      features: [
        'Golf Course View',
        'Guard Gated',
        'Red Rock Views',
        'Pool & Spa',
      ],
      image: '/properties/ridges-estate.jpg',
      daysOnMarket: 12,
      pricePerSqft: 480,
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
      features: [
        'Mountain Views',
        'Smart Home',
        "Chef's Kitchen",
        '3-Car Garage',
      ],
      image: '/properties/summit-villa.jpg',
      daysOnMarket: 8,
      pricePerSqft: 451,
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
      features: [
        'Golf Course Frontage',
        'Private Golf Club',
        "Butler's Pantry",
        'Guest House',
      ],
      image: '/properties/red-rock-estate.jpg',
      daysOnMarket: 15,
      pricePerSqft: 471,
    },
  ]);

  const [filteredProperties, setFilteredProperties] = useState(properties);

  useEffect(() => {
    // Apply filters
    const filtered = properties.filter((property) => {
      if (searchParams.village && property.village !== searchParams.village)
        return false;
      if (
        searchParams.minPrice &&
        property.price < parseInt(searchParams.minPrice)
      )
        return false;
      if (
        searchParams.maxPrice &&
        property.price > parseInt(searchParams.maxPrice)
      )
        return false;
      if (
        searchParams.minBeds &&
        property.beds < parseInt(searchParams.minBeds)
      )
        return false;
      if (
        searchParams.minBaths &&
        property.baths < parseInt(searchParams.minBaths)
      )
        return false;
      if (
        searchParams.minSqft &&
        property.sqft < parseInt(searchParams.minSqft)
      )
        return false;
      if (
        searchParams.propertyType &&
        property.propertyType !== searchParams.propertyType
      )
        return false;
      if (searchParams.status && property.status !== searchParams.status)
        return false;
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
    setSearchParams((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-500 to-red-500 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Find Your Dream Home in Summerlin West - Luxury Real Estate Search
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Search exclusive properties within Summerlin West boundaries - from
            luxury estates to family homes
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="rounded-full bg-white/20 px-4 py-2">
              Exclusive to Summerlin West
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2">
              Real-time MLS Data
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2">
              Guard Gated Communities
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2">
              Red Rock Canyon Views
            </span>
          </div>
        </div>
      </section>

      {/* Search Form */}
      <section className="relative z-20 -mt-8 bg-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <form
            onSubmit={handleSearch}
            className="rounded-xl bg-white p-6 shadow-xl"
          >
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {/* Village Selection */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Village
                </label>
                <select
                  value={searchParams.village}
                  onChange={(e) => updateSearchParam('village', e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-amber-500"
                  aria-label="Select village"
                >
                  <option value="">All Villages</option>
                  {villages.map((village) => (
                    <option key={village} value={village}>
                      {village}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Min Price
                </label>
                <select
                  value={searchParams.minPrice}
                  onChange={(e) =>
                    updateSearchParam('minPrice', e.target.value)
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-amber-500"
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
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Min Beds
                </label>
                <select
                  value={searchParams.minBeds}
                  onChange={(e) => updateSearchParam('minBeds', e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-amber-500"
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
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Type
                </label>
                <select
                  value={searchParams.propertyType}
                  onChange={(e) =>
                    updateSearchParam('propertyType', e.target.value)
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-amber-500"
                  aria-label="Select property type"
                >
                  <option value="">All Types</option>
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Advanced Filters Toggle */}
            <div className="mb-6 flex items-center justify-between">
              <button
                type="button"
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    showFilters: !prev.showFilters,
                  }))
                }
                className="flex items-center space-x-2 font-medium text-amber-600 hover:text-amber-700"
              >
                <Sliders className="h-4 w-4" />
                <span>Advanced Filters</span>
              </button>

              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => updateSearchParam('view', 'list')}
                  className={cn(
                    'rounded-lg px-3 py-2 font-medium transition-colors',
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
                    'rounded-lg px-3 py-2 font-medium transition-colors',
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
              <div className="mb-6 grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters.golfCourse}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        golfCourse: e.target.checked,
                      }))
                    }
                    className="rounded text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-sm">Golf Course</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters.guardGated}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        guardGated: e.target.checked,
                      }))
                    }
                    className="rounded text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-sm">Guard Gated</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters.redRockViews}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        redRockViews: e.target.checked,
                      }))
                    }
                    className="rounded text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-sm">Red Rock Views</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters.newConstruction}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        newConstruction: e.target.checked,
                      }))
                    }
                    className="rounded text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-sm">New Construction</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters.pool}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        pool: e.target.checked,
                      }))
                    }
                    className="rounded text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-sm">Pool</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters.mountainViews}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        mountainViews: e.target.checked,
                      }))
                    }
                    className="rounded text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-sm">Mountain Views</span>
                </label>
              </div>
            )}

            {/* Search Button */}
            <div className="text-center">
              <button
                type="submit"
                className="mx-auto flex items-center justify-center space-x-2 rounded-lg bg-amber-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-700"
              >
                <Search className="h-5 w-5" />
                <span>Search Properties</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* RealScout Home Value Widget Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Check Home Values in Summerlin West
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Get instant property value estimates while you search for your
              dream home
            </p>
          </div>

          {/* RealScout Home Value Widget */}
          <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-lg">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>',
              }}
            />
          </div>
        </div>

        {/* RealScout Advanced Search Widget */}
        <div className="mt-12 text-center">
          <h3 className="mb-6 text-2xl font-bold text-gray-900">
            Advanced Property Search
          </h3>
          <p className="mb-8 text-lg text-gray-600">
            Use our powerful search tools alongside the basic search above
          </p>
          <div className="flex justify-center">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>',
              }}
            />
          </div>
        </div>

        {/* RealScout Simple Search Widget */}
        <div className="mt-12 text-center">
          <h3 className="mb-6 text-2xl font-bold text-gray-900">
            Quick Property Search
          </h3>
          <p className="mb-8 text-lg text-gray-600">
            Start your search with our simple and intuitive search tool
          </p>
          <div className="flex justify-center">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>',
              }}
            />
          </div>

          {/* Functional Search Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() =>
                window.open(
                  'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
            >
              Search by Price Range
            </button>
            <button
              onClick={() =>
                window.open(
                  'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="rounded-lg bg-green-600 px-6 py-3 text-white transition-colors hover:bg-green-700"
            >
              Search by Bedrooms
            </button>
            <button
              onClick={() =>
                window.open(
                  'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="rounded-lg bg-purple-600 px-6 py-3 text-white transition-colors hover:bg-purple-700"
            >
              Search by Location
            </button>
            <button
              onClick={() =>
                window.open(
                  'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="rounded-lg bg-orange-600 px-6 py-3 text-white transition-colors hover:bg-orange-700"
            >
              Search by Property Type
            </button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Results Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-gray-900">
                Search Results
              </h2>
              <p className="text-gray-600">
                {filteredProperties.length} properties found in Summerlin West
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                <MapPin className="mr-1 inline-block h-4 w-4" />
                Summerlin West Area
              </div>
              <div className="text-sm text-gray-500">
                <DollarSign className="mr-1 inline-block h-4 w-4" />
                MLS Powered
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="relative h-64 bg-gradient-to-br from-amber-400 to-orange-500">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute left-4 top-4">
                    <span className="rounded bg-amber-600 px-2 py-1 text-xs font-semibold text-white">
                      MLS: {property.mls}
                    </span>
                  </div>
                  <div className="absolute right-4 top-4">
                    <span className="rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-white">
                      {property.daysOnMarket} Days
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-amber-600">
                    {property.priceFormatted}
                  </h3>
                  <p className="mb-2 font-medium text-gray-800">
                    {property.title}
                  </p>
                  <p className="mb-3 text-sm text-gray-600">
                    {property.address}
                  </p>
                  <p className="mb-4 text-sm font-semibold text-amber-600">
                    {property.village}
                  </p>

                  <div className="mb-6 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="mb-1 flex items-center justify-center space-x-1 text-gray-600">
                        <Bed className="h-4 w-4" />
                        <span className="text-sm">{property.beds}</span>
                      </div>
                      <span className="text-xs text-gray-500">Beds</span>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-center space-x-1 text-gray-600">
                        <Bath className="h-4 w-4" />
                        <span className="text-sm">{property.baths}</span>
                      </div>
                      <span className="text-xs text-gray-500">Baths</span>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-center space-x-1 text-gray-600">
                        <Square className="h-4 w-4" />
                        <span className="text-sm">
                          {property.sqft.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">Sq Ft</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-gray-500">Price per Sq Ft:</span>
                      <span className="font-semibold">
                        ${property.pricePerSqft}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Lot Size:</span>
                      <span className="font-semibold">
                        {property.lotSize} acres
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="mb-2 text-sm font-semibold text-gray-700">
                      Key Features:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {property.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="rounded bg-amber-100 px-2 py-1 text-xs text-amber-800"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full rounded-lg bg-gray-900 py-3 font-medium text-white transition-colors duration-200 hover:bg-amber-600">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProperties.length === 0 && (
            <div className="py-16 text-center">
              <Search className="mx-auto mb-4 h-16 w-16 text-gray-400" />
              <h3 className="mb-2 text-xl font-semibold text-gray-600">
                No Properties Found
              </h3>
              <p className="mb-6 text-gray-500">
                Try adjusting your search criteria or contact us for
                personalized assistance.
              </p>
              <button
                onClick={() =>
                  setSearchParams({
                    village: '',
                    minPrice: '',
                    maxPrice: '',
                    minBeds: '',
                    minBaths: '',
                    minSqft: '',
                    propertyType: '',
                    status: 'for-sale',
                    view: 'list',
                  })
                }
                className="rounded-lg bg-amber-600 px-6 py-3 font-medium text-white transition-colors hover:bg-amber-700"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* RealScout Listings Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h3 className="mb-4 text-3xl font-bold">
              Live MLS Listings in Summerlin West
            </h3>
            <p className="mx-auto max-w-2xl text-gray-600">
              Browse real-time property listings with up-to-date MLS data and
              advanced search capabilities
            </p>
          </div>
          <div className="mx-auto max-w-6xl rounded-xl bg-white p-8 shadow-xl">
            {React.createElement('realscout-office-listings', {
              'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
              'sort-order': 'STATUS_AND_SIGNIFICANT_CHANGE',
              'listing-status': 'For Sale',
              'property-types': 'SFR,MF',
              'price-min': '600000',
              'price-max': '750000',
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
