'use client';

import React, { useState } from 'react';
import { Home, Filter, Settings, Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import { RealScoutOfficeListings, RealScoutPropertySearch } from '@/components/RealScoutWidgets';

export default function ListingsPage() {
  const [showFilters, setShowFilters] = useState(true);
  const [showSort, setShowSort] = useState(true);
  const [showPagination, setShowPagination] = useState(true);
  
  // Sample agent ID - replace with your actual RealScout agent ID
  const agentId = "QWdlbnQtMjI1MDUw"; // Example: Agent-225050
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Summerlin West Properties
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover luxury homes and properties in Summerlin West, Las Vegas. 
            Browse our curated selection of premium real estate listings.
          </p>
        </div>

        {/* Widget Controls */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              <Settings className="inline-block w-6 h-6 mr-2 text-amber-600" />
              Widget Configuration
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2",
                  showFilters 
                    ? "bg-amber-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                {showFilters ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                <span>Filters</span>
              </button>
              <button
                onClick={() => setShowSort(!showSort)}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2",
                  showSort 
                    ? "bg-amber-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                {showSort ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                <span>Sort</span>
              </button>
              <button
                onClick={() => setShowPagination(!showPagination)}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2",
                  showPagination 
                    ? "bg-amber-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                {showPagination ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                <span>Pagination</span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600">
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
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              <Home className="inline-block w-6 h-6 mr-2 text-amber-600" />
              Current Listings
            </h2>
            <p className="text-gray-600">
              Powered by RealScout MLS integration - showing real-time property data
            </p>
          </div>
          
          {/* RealScout Office Listings Widget */}
          <RealScoutOfficeListings 
            agent-encoded-id={agentId}
            sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
            listing-status="For Sale"
            property-types="SFR,MF,TH"
            price-min="600000"
            price-max="7500000"
            beds-min="2"
            baths-min="2"
            sqft-min="1500"
            sort-by="PRICE_DESC"
            limit="20"
            show-filters={showFilters.toString()}
            show-sort={showSort.toString()}
            show-pagination={showPagination.toString()}
            theme="light"
          />
        </div>

        {/* Additional Widgets Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Property Search Widget */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              <Filter className="inline-block w-5 h-5 mr-2 text-amber-600" />
              Advanced Property Search
            </h3>
            <RealScoutPropertySearch 
              agent-encoded-id={agentId}
              show-filters="true"
              show-sort="true"
              theme="light"
              placeholder="Search Summerlin West properties..."
            />
          </div>

          {/* Featured Property Details */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              <Home className="inline-block w-5 h-5 mr-2 text-amber-600" />
              Featured Property
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-gray-600 mb-2">
                Property details widget will appear here when a listing is selected
              </p>
              <p className="text-sm text-gray-500">
                Click on any listing above to view detailed information
              </p>
            </div>
          </div>
        </div>

        {/* Integration Notes */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            RealScout Integration Notes
          </h3>
          <ul className="text-blue-800 space-y-2 text-sm">
            <li>• Replace the agent ID with your actual RealScout agent encoded ID</li>
            <li>• Customize property types, price ranges, and filters as needed</li>
            <li>• The widget automatically syncs with MLS data in real-time</li>
            <li>• All listings include professional photos, virtual tours, and detailed information</li>
            <li>• Contact forms are automatically integrated for lead generation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
