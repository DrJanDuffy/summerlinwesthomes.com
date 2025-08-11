'use client';

import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Minus, BarChart3, Home, DollarSign, Calendar, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function MarketDataPage() {
  const [selectedVillage, setSelectedVillage] = useState('all');
  const [timeframe, setTimeframe] = useState('monthly');

  const villages = [
    'All Villages', 'The Ridges', 'The Summit', 'Red Rock Country Club', 'Reverence',
    'The Paseos', 'The Vistas', 'Mesa', 'Stonebridge', 'Redpoint', 'Shelbourne'
  ];

  const marketData = {
    'all': {
      totalProperties: 247,
      averagePrice: 1250000,
      averageDaysOnMarket: 28,
      pricePerSqft: 385,
      marketTrend: 'rising',
      monthOverMonth: 2.3,
      yearOverYear: 8.7,
      inventoryChange: -12,
      newListings: 23,
      soldProperties: 18
    },
    'The Ridges': {
      totalProperties: 45,
      averagePrice: 2800000,
      averageDaysOnMarket: 35,
      pricePerSqft: 480,
      marketTrend: 'rising',
      monthOverMonth: 3.2,
      yearOverYear: 12.5,
      inventoryChange: -8,
      newListings: 5,
      soldProperties: 3
    },
    'The Summit': {
      totalProperties: 60,
      averagePrice: 1200000,
      averageDaysOnMarket: 22,
      pricePerSqft: 395,
      marketTrend: 'stable',
      monthOverMonth: 0.8,
      yearOverYear: 6.2,
      inventoryChange: -5,
      newListings: 8,
      soldProperties: 7
    },
    'Red Rock Country Club': {
      totalProperties: 35,
      averagePrice: 1800000,
      averageDaysOnMarket: 42,
      pricePerSqft: 471,
      marketTrend: 'rising',
      monthOverMonth: 4.1,
      yearOverYear: 15.3,
      inventoryChange: -3,
      newListings: 3,
      soldProperties: 2
    }
  };

  const currentData = marketData[selectedVillage as keyof typeof marketData] || marketData.all;

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'rising':
        return <TrendingUp className="h-5 w-5 text-green-600" />;
      case 'declining':
        return <TrendingDown className="h-5 w-5 text-red-600" />;
      default:
        return <Minus className="h-5 w-5 text-gray-600" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'rising':
        return 'text-green-600';
      case 'declining':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const recentSales = [
    {
      address: '12345 Ridges Peak Dr',
      village: 'The Ridges',
      price: 2495000,
      pricePerSqft: 480,
      sqft: 5200,
      daysOnMarket: 12,
      soldDate: '2024-01-15'
    },
    {
      address: '6789 Summit View Ln',
      village: 'The Summit',
      price: 1850000,
      pricePerSqft: 451,
      sqft: 4100,
      daysOnMarket: 8,
      soldDate: '2024-01-18'
    },
    {
      address: '9876 Golf Club Dr',
      village: 'Red Rock Country Club',
      price: 3200000,
      pricePerSqft: 471,
      sqft: 6800,
      daysOnMarket: 15,
      soldDate: '2024-01-20'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-500 to-red-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Summerlin West Market Data
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Real-time market insights and trends exclusively for Summerlin West properties
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">Real-time MLS Data</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Village-Specific Analysis</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Price Trends</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Inventory Levels</span>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            {/* Village Selection */}
            <div className="lg:w-1/3">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Village</label>
              <select
                value={selectedVillage}
                onChange={(e) => setSelectedVillage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                aria-label="Select village for market data"
              >
                {villages.map(village => (
                  <option key={village} value={village === 'All Villages' ? 'all' : village}>
                    {village}
                  </option>
                ))}
              </select>
            </div>

            {/* Timeframe Selection */}
            <div className="lg:w-1/3">
              <label className="block text-sm font-medium text-gray-700 mb-2">Timeframe</label>
              <select
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                aria-label="Select timeframe for market data"
              >
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>

            {/* Last Updated */}
            <div className="lg:w-1/3">
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Updated</label>
              <div className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-600">
                {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <Home className="h-8 w-8" />
                <div className="flex items-center space-x-1">
                  {getTrendIcon(currentData.marketTrend)}
                  <span className={cn('text-sm font-medium', getTrendColor(currentData.marketTrend))}>
                    {currentData.marketTrend === 'rising' ? '+' : currentData.marketTrend === 'declining' ? '-' : ''}
                    {currentData.monthOverMonth}%
                  </span>
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{currentData.totalProperties}</div>
              <div className="text-blue-100 text-sm">Active Listings</div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <DollarSign className="h-8 w-8" />
                <div className="flex items-center space-x-1">
                  {getTrendIcon(currentData.marketTrend)}
                  <span className={cn('text-sm font-medium', getTrendColor(currentData.marketTrend))}>
                    +{currentData.yearOverYear}%
                  </span>
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">
                ${(currentData.averagePrice / 1000000).toFixed(1)}M
              </div>
              <div className="text-green-100 text-sm">Average Price</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <BarChart3 className="h-8 w-8" />
                <div className="flex items-center space-x-1">
                  {getTrendIcon(currentData.marketTrend)}
                  <span className={cn('text-sm font-medium', getTrendColor(currentData.marketTrend))}>
                    +{currentData.yearOverYear}%
                  </span>
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">${currentData.pricePerSqft}</div>
              <div className="text-purple-100 text-sm">Price per Sq Ft</div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <Calendar className="h-8 w-8" />
                <div className="flex items-center space-x-1">
                  {getTrendIcon(currentData.marketTrend)}
                  <span className={cn('text-sm font-medium', getTrendColor(currentData.marketTrend))}>
                    {currentData.inventoryChange > 0 ? '+' : ''}{currentData.inventoryChange}%
                  </span>
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{currentData.averageDaysOnMarket}</div>
              <div className="text-orange-100 text-sm">Days on Market</div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Market Trends & Analysis</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Price Trends */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Price Trends</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Month over Month</span>
                  <span className={cn('font-semibold', currentData.monthOverMonth > 0 ? 'text-green-600' : 'text-red-600')}>
                    {currentData.monthOverMonth > 0 ? '+' : ''}{currentData.monthOverMonth}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Year over Year</span>
                  <span className={cn('font-semibold', currentData.yearOverYear > 0 ? 'text-green-600' : 'text-red-600')}>
                    +{currentData.yearOverYear}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Market Trend</span>
                  <div className="flex items-center space-x-2">
                    {getTrendIcon(currentData.marketTrend)}
                    <span className={cn('font-semibold capitalize', getTrendColor(currentData.marketTrend))}>
                      {currentData.marketTrend}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Inventory Analysis */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Inventory Analysis</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">New Listings</span>
                  <span className="font-semibold text-green-600">{currentData.newListings}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sold Properties</span>
                  <span className="font-semibold text-blue-600">{currentData.soldProperties}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Inventory Change</span>
                  <span className={cn('font-semibold', currentData.inventoryChange > 0 ? 'text-red-600' : 'text-green-600')}>
                    {currentData.inventoryChange > 0 ? '+' : ''}{currentData.inventoryChange}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Sales */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Recent Sales in Summerlin West</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Address</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Village</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Price</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Price/Sq Ft</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Sq Ft</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Days on Market</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Sold Date</th>
                </tr>
              </thead>
              <tbody>
                {recentSales.map((sale, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="font-medium text-gray-900">{sale.address}</div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        {sale.village}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-semibold text-gray-900">
                      ${(sale.price / 1000000).toFixed(2)}M
                    </td>
                    <td className="py-3 px-4 text-gray-600">${sale.pricePerSqft}</td>
                    <td className="py-3 px-4 text-gray-600">{sale.sqft.toLocaleString()}</td>
                    <td className="py-3 px-4 text-gray-600">{sale.daysOnMarket}</td>
                    <td className="py-3 px-4 text-gray-600">
                      {new Date(sale.soldDate).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Geographic Focus */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Summerlin West Geographic Focus</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-amber-600">Boundaries</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-amber-500" />
                      <span><strong>North:</strong> Sahara Avenue</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-amber-500" />
                      <span><strong>South:</strong> Charleston Boulevard</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-amber-500" />
                      <span><strong>East:</strong> 215 Beltway</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-amber-500" />
                      <span><strong>West:</strong> Red Rock Canyon</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-amber-600">Coverage</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Primary Zip:</strong> 89135</li>
                    <li><strong>Partial Zip:</strong> 89138 (Summerlin West portions only)</li>
                    <li><strong>Total Area:</strong> 22,500 acres</li>
                    <li><strong>Villages:</strong> 10 unique communities</li>
                    <li><strong>Excluded:</strong> Spanish Trail, Queensridge, Tournament Hills</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Need Detailed Market Analysis?</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Get personalized market reports for specific villages or property types in Summerlin West
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all">
              Request Custom Report
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-all">
              Schedule Market Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
