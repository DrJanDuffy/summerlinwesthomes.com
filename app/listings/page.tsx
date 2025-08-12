'use client';

import React, { useState } from 'react';
import { Home, Filter, Settings, Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ListingsPage() {
  const [showFilters, setShowFilters] = useState(true);
  const [showSort, setShowSort] = useState(true);
  const [showPagination, setShowPagination] = useState(true);

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

        {/* Widget Controls */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">
              <Settings className="mr-2 inline-block h-6 w-6 text-amber-600" />
              Widget Configuration
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={cn(
                  'flex items-center space-x-2 rounded-lg px-4 py-2 font-medium transition-colors',
                  showFilters
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                {showFilters ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
                <span>Filters</span>
              </button>
              <button
                onClick={() => setShowSort(!showSort)}
                className={cn(
                  'flex items-center space-x-2 rounded-lg px-4 py-2 font-medium transition-colors',
                  showSort
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                {showSort ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
                <span>Sort</span>
              </button>
              <button
                onClick={() => setShowPagination(!showPagination)}
                className={cn(
                  'flex items-center space-x-2 rounded-lg px-4 py-2 font-medium transition-colors',
                  showPagination
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                {showPagination ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
                <span>Pagination</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 text-sm text-gray-600 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <strong>Agent ID:</strong> {agentId}
            </div>
            <div>
              <strong>Property Types:</strong> SFR, MF, TH
            </div>
            <div>
              <strong>Status:</strong> For Sale
            </div>
            <div>
              <strong>Sort Order:</strong> Status & Recent Changes
            </div>
            <div>
              <strong>Price Range:</strong> $600K - $7.5M
            </div>
            <div>
              <strong>Location:</strong> Summerlin West, Las Vegas
            </div>
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
          <div
            dangerouslySetInnerHTML={{
              __html: `<realscout-office-listings 
                agent-encoded-id="${agentId}"
                sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
                listing-status="For Sale"
                property-types="SFR,MF"
                price-min="600000"
                price-max="750000"
              ></realscout-office-listings>`,
            }}
          />
        </div>

        {/* Additional Widgets Section */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Property Search Widget */}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              <Filter className="mr-2 inline-block h-5 w-5 text-amber-600" />
              Advanced Property Search
            </h3>
            <div
              dangerouslySetInnerHTML={{
                __html: `<realscout-property-search 
                  agent-encoded-id="${agentId}"
                  show-filters="true"
                  show-sort="true"
                  theme="light"
                  placeholder="Search Summerlin West properties..."
                ></realscout-property-search>`,
              }}
            />
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

        {/* Integration Notes */}
        <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-3 text-lg font-semibold text-blue-900">
            RealScout Integration Notes
          </h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li>
              • Replace the agent ID with your actual RealScout agent encoded ID
            </li>
            <li>
              • Customize property types, price ranges, and filters as needed
            </li>
            <li>• The widget automatically syncs with MLS data in real-time</li>
            <li>
              • All listings include professional photos, virtual tours, and
              detailed information
            </li>
            <li>
              • Contact forms are automatically integrated for lead generation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
