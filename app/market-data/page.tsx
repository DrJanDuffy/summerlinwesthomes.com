'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Minus,
  BarChart3,
  Home,
  DollarSign,
  Calendar,
  MapPin,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function MarketDataPage() {
  const [selectedVillage, setSelectedVillage] = useState('all');
  const [timeframe, setTimeframe] = useState('monthly');

  const villages = [
    'All Villages',
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

  const marketData = {
    all: {
      totalProperties: 247,
      averagePrice: 1250000,
      averageDaysOnMarket: 28,
      pricePerSqft: 385,
      marketTrend: 'rising',
      monthOverMonth: 2.3,
      yearOverYear: 8.7,
      inventoryChange: -12,
      newListings: 23,
      soldProperties: 18,
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
      soldProperties: 3,
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
      soldProperties: 7,
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
      soldProperties: 2,
    },
  };

  const currentData =
    marketData[selectedVillage as keyof typeof marketData] || marketData.all;

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
      soldDate: '2024-01-15',
    },
    {
      address: '6789 Summit View Ln',
      village: 'The Summit',
      price: 1850000,
      pricePerSqft: 451,
      sqft: 4100,
      daysOnMarket: 8,
      soldDate: '2024-01-18',
    },
    {
      address: '9876 Golf Club Dr',
      village: 'Red Rock Country Club',
      price: 3200000,
      pricePerSqft: 471,
      sqft: 6800,
      daysOnMarket: 15,
      soldDate: '2024-01-20',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-500 to-red-500 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Summerlin West Market Data
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Real-time market insights and trends exclusively for Summerlin West
            properties
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="rounded-full bg-white/20 px-4 py-2">
              Real-time MLS Data
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2">
              Village-Specific Analysis
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2">
              Price Trends
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2">
              Inventory Levels
            </span>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col gap-8 lg:flex-row">
            {/* Village Selection */}
            <div className="lg:w-1/3">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Select Village
              </label>
              <select
                value={selectedVillage}
                onChange={(e) => setSelectedVillage(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-amber-500"
                aria-label="Select village for market data"
              >
                {villages.map((village) => (
                  <option
                    key={village}
                    value={village === 'All Villages' ? 'all' : village}
                  >
                    {village}
                  </option>
                ))}
              </select>
            </div>

            {/* Timeframe Selection */}
            <div className="lg:w-1/3">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Timeframe
              </label>
              <select
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-amber-500"
                aria-label="Select timeframe for market data"
              >
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>

            {/* Last Updated */}
            <div className="lg:w-1/3">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Last Updated
              </label>
              <div className="rounded-lg bg-gray-100 px-3 py-2 text-gray-600">
                {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-100">Total Properties</p>
                  <p className="text-3xl font-bold">
                    {currentData.totalProperties}
                  </p>
                </div>
                <Home className="h-8 w-8 text-blue-200" />
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-green-500 to-green-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-100">Average Price</p>
                  <p className="text-3xl font-bold">
                    ${(currentData.averagePrice / 1000000).toFixed(1)}M
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-green-200" />
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-100">Days on Market</p>
                  <p className="text-3xl font-bold">
                    {currentData.averageDaysOnMarket}
                  </p>
                </div>
                <Calendar className="h-8 w-8 text-purple-200" />
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-amber-100">Price per Sq Ft</p>
                  <p className="text-3xl font-bold">
                    ${currentData.pricePerSqft}
                  </p>
                </div>
                <BarChart3 className="h-8 w-8 text-amber-200" />
              </div>
            </div>
          </div>

          {/* Market Trend */}
          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">
                Market Trend
              </h3>
              <div
                className={cn(
                  'flex items-center space-x-2',
                  getTrendColor(currentData.marketTrend)
                )}
              >
                {getTrendIcon(currentData.marketTrend)}
                <span className="font-medium capitalize">
                  {currentData.marketTrend}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="text-center">
                <p className="mb-1 text-sm text-gray-600">Month over Month</p>
                <p
                  className={cn(
                    'text-2xl font-bold',
                    currentData.monthOverMonth > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  )}
                >
                  {currentData.monthOverMonth > 0 ? '+' : ''}
                  {currentData.monthOverMonth}%
                </p>
              </div>
              <div className="text-center">
                <p className="mb-1 text-sm text-gray-600">Year over Year</p>
                <p
                  className={cn(
                    'text-2xl font-bold',
                    currentData.yearOverYear > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  )}
                >
                  {currentData.yearOverYear > 0 ? '+' : ''}
                  {currentData.yearOverYear}%
                </p>
              </div>
              <div className="text-center">
                <p className="mb-1 text-sm text-gray-600">Inventory Change</p>
                <p
                  className={cn(
                    'text-2xl font-bold',
                    currentData.inventoryChange > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  )}
                >
                  {currentData.inventoryChange > 0 ? '+' : ''}
                  {currentData.inventoryChange}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Sales */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Recent Sales</h2>
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">
                      Address
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">
                      Village
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">
                      Price
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">
                      Price/Sq Ft
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">
                      Square Feet
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">
                      Days on Market
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">
                      Sold Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentSales.map((sale, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3">
                        <div className="font-medium text-gray-900">
                          {sale.address}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                          {sale.village}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-semibold text-gray-900">
                        ${(sale.price / 1000000).toFixed(2)}M
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        ${sale.pricePerSqft}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {sale.sqft.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {sale.daysOnMarket}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {new Date(sale.soldDate).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Focus */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Summerlin West Geographic Focus
          </h2>

          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-bold text-amber-600">
                    Boundaries
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-amber-500" />
                      <span>
                        <strong>North:</strong> Sahara Avenue
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-amber-500" />
                      <span>
                        <strong>South:</strong> Charleston Boulevard
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-amber-500" />
                      <span>
                        <strong>East:</strong> 215 Beltway
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-amber-500" />
                      <span>
                        <strong>West:</strong> Red Rock Canyon
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-amber-600">
                    Coverage
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Primary Zip:</strong> 89135
                    </li>
                    <li>
                      <strong>Partial Zip:</strong> 89138 (Summerlin West
                      portions only)
                    </li>
                    <li>
                      <strong>Total Area:</strong> 22,500 acres
                    </li>
                    <li>
                      <strong>Villages:</strong> 10 unique communities
                    </li>
                    <li>
                      <strong>Excluded:</strong> Spanish Trail, Queensridge,
                      Tournament Hills
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-amber-600 to-orange-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-4 text-3xl font-bold text-white">
            Need Detailed Market Analysis?
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-white/90">
            Get personalized market reports for specific villages or property
            types in Summerlin West
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-8 py-3 font-semibold text-amber-600 transition-all hover:shadow-xl">
              Request Custom Report
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:bg-white hover:text-amber-600">
              Schedule Market Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
