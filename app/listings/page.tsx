'use client';

import React from 'react';
import { Home, Filter } from 'lucide-react';

export default function ListingsPage() {
  // Sample agent ID - replace with your actual RealScout agent ID
  const agentId = 'QWdlbnQtMjI1MDUw'; // Example: Agent-225050

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Summerlin West Properties
          </h1>
          <p className="max-w-3xl text-xl text-gray-600">
            Discover luxury homes and properties in Summerlin West, Las Vegas.
            Browse our curated selection of premium real estate listings.
          </p>
        </div>

        {/* RealScout Home Value Widget Section */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Check Home Values in Summerlin West
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get instant property value estimates while browsing our listings
            </p>
          </div>
          
          {/* RealScout Home Value Widget */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <div
              dangerouslySetInnerHTML={{
                __html: '<realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>'
              }}
            />
          </div>
        </div>

        {/* RealScout Widget */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">
              <Home className="mr-2 inline-block h-6 w-6 text-amber-600" />
              Current Listings
            </h2>
            <p className="text-gray-600">
              Powered by RealScout MLS integration - showing real-time property
              data
            </p>
          </div>

          {/* RealScout Office Listings Widget */}
          {React.createElement('realscout-office-listings', {
            'agent-encoded-id': agentId,
            'sort-order': 'STATUS_AND_SIGNIFICANT_CHANGE',
            'listing-status': 'For Sale',
            'property-types': 'SFR,MF,TH',
            'price-min': '600000',
            'price-max': '7500000',
            'show-filters': 'true',
            'show-sort': 'true',
            'show-pagination': 'true'
          })}
        </div>

        {/* Additional Widgets Section */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Property Search Widget */}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              <Filter className="mr-2 inline-block h-5 w-5 text-amber-600" />
              Advanced Property Search
            </h3>
            {React.createElement('realscout-property-search', {
              'agent-encoded-id': agentId,
              'show-filters': 'true',
              'show-sort': 'true',
              'theme': 'light',
              'placeholder': 'Search Summerlin West properties...'
            })}
          </div>

          {/* Featured Property Details */}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              <Home className="mr-2 inline-block h-5 w-5 text-amber-600" />
              Featured Property
            </h3>
            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <p className="mb-2 text-gray-600">
                Property details widget will appear here when a listing is
                selected
              </p>
              <p className="text-sm text-gray-500">
                Click on any listing above to view detailed information
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
