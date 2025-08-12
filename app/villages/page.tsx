'use client';

import React from 'react';
import Link from 'next/link';
import {
  Map,
  Home,
  Mountain,
  Shield,
  Users,
  Star,
  TrendingUp,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function VillagesPage() {
  const villages = [
    {
      name: 'The Ridges',
      type: 'Luxury Golf Community',
      homes: 450,
      avgPrice: '$2.8M',
      priceRange: '$1M - $25M',
      rating: 4.9,
      features: [
        'Golf Course',
        'Guard Gated',
        'Custom Estates',
        'Red Rock Views',
      ],
      description:
        'Premier golf course community with custom estates and panoramic views',
      slug: 'the-ridges',
      image: '/villages/ridges.jpg',
      status: 'Active Sales',
      hoaRange: '$200 - $800/month',
    },
    {
      name: 'The Summit',
      type: 'Mountain Living',
      homes: 600,
      avgPrice: '$1.2M',
      priceRange: '$800K - $5M',
      rating: 4.8,
      features: ['Mountain Views', 'Parks', 'Trails', 'Recreation Center'],
      description: 'Elevated living with panoramic mountain and city views',
      slug: 'the-summit',
      image: '/villages/summit.jpg',
      status: 'Active Sales',
      hoaRange: '$150 - $400/month',
    },
    {
      name: 'Red Rock Country Club',
      type: 'Private Golf Club',
      homes: 350,
      avgPrice: '$1.8M',
      priceRange: '$750K - $8M',
      rating: 5.0,
      features: ['Private Golf', 'Dining', 'Fitness Center', 'Spa'],
      description:
        'Exclusive country club lifestyle with world-class amenities',
      slug: 'red-rock-country-club',
      image: '/villages/red-rock.jpg',
      status: 'Limited Inventory',
      hoaRange: '$300 - $1,200/month',
    },
    {
      name: 'Reverence',
      type: 'Active Adult 55+',
      homes: 300,
      avgPrice: '$850K',
      priceRange: '$500K - $2M',
      rating: 4.7,
      features: ['Golf Course', 'Recreation Center', 'Pool', 'Tennis'],
      description: 'Premier active adult community with resort-style amenities',
      slug: 'reverence',
      image: '/villages/reverence.jpg',
      status: 'New Construction',
      hoaRange: '$250 - $450/month',
    },
    {
      name: 'The Paseos',
      type: 'Family Community',
      homes: 200,
      avgPrice: '$950K',
      priceRange: '$600K - $1.5M',
      rating: 4.6,
      features: ['Parks', 'Trails', 'Village Center', 'Schools'],
      description:
        'Family-friendly community with excellent schools and amenities',
      slug: 'the-paseos',
      image: '/villages/paseos.jpg',
      status: 'Active Sales',
      hoaRange: '$120 - $300/month',
    },
    {
      name: 'The Vistas',
      type: 'Golf Course Living',
      homes: 180,
      avgPrice: '$1.1M',
      priceRange: '$700K - $3M',
      rating: 4.8,
      features: ['TPC Las Vegas', 'Golf Views', 'Mountain Vistas', 'Pool'],
      description: 'Golf course community with TPC Las Vegas access',
      slug: 'the-vistas',
      image: '/villages/vistas.jpg',
      status: 'Active Sales',
      hoaRange: '$180 - $500/month',
    },
    {
      name: 'Mesa',
      type: 'Family Community',
      homes: 150,
      avgPrice: '$750K',
      priceRange: '$500K - $1.2M',
      rating: 4.5,
      features: ['Mesa Park', 'Trails', 'Family Amenities', 'Schools'],
      description: 'Affordable family living with great amenities',
      slug: 'mesa',
      image: '/villages/mesa.jpg',
      status: 'Active Sales',
      hoaRange: '$100 - $250/month',
    },
    {
      name: 'Stonebridge',
      type: 'Family Community',
      homes: 120,
      avgPrice: '$800K',
      priceRange: '$550K - $1.3M',
      rating: 4.6,
      features: ['Community Pool', 'Parks', 'Trails', 'Family Focused'],
      description: 'Family-oriented community with excellent amenities',
      slug: 'stonebridge',
      image: '/villages/stonebridge.jpg',
      status: 'Limited Inventory',
      hoaRange: '$130 - $280/month',
    },
    {
      name: 'Redpoint',
      type: 'Mixed Use',
      homes: 80,
      avgPrice: '$650K',
      priceRange: '$400K - $900K',
      rating: 4.4,
      features: ['Retail Access', 'Restaurants', 'Convenience', 'Urban Feel'],
      description: 'Convenient urban living with retail and dining access',
      slug: 'redpoint',
      image: '/villages/redpoint.jpg',
      status: 'Limited Inventory',
      hoaRange: '$90 - $200/month',
    },
    {
      name: 'Shelbourne',
      type: 'Family Community',
      homes: 60,
      avgPrice: '$700K',
      priceRange: '$450K - $1M',
      rating: 4.5,
      features: ['Community Pool', 'Parks', 'Family Amenities', 'Quiet Living'],
      description: 'Quiet, family-friendly community with great amenities',
      slug: 'shelbourne',
      image: '/villages/shelbourne.jpg',
      status: 'Limited Inventory',
      hoaRange: '$110 - $240/month',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-500 to-red-500 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Summerlin West Villages - Luxury Communities in Las Vegas
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Discover the unique character and luxury lifestyle of each village
            in Summerlin West
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="rounded-full bg-white/20 px-4 py-2">
              22,500 Acres
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2">
              10 Unique Villages
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2">
              Guard Gated
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2">
              Red Rock Views
            </span>
          </div>
        </div>
      </section>

      {/* Geographic Overview */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold">
              Summerlin West Geographic Boundaries & Location
            </h2>
            <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-3 font-semibold text-amber-600">
                  Boundaries
                </h3>
                <ul className="space-y-2 text-left text-sm">
                  <li>
                    <strong>North:</strong> Sahara Avenue
                  </li>
                  <li>
                    <strong>South:</strong> Charleston Boulevard
                  </li>
                  <li>
                    <strong>East:</strong> 215 Beltway
                  </li>
                  <li>
                    <strong>West:</strong> Red Rock Canyon
                  </li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-3 font-semibold text-amber-600">Coverage</h3>
                <ul className="space-y-2 text-left text-sm">
                  <li>
                    <strong>Primary Zip:</strong> 89135
                  </li>
                  <li>
                    <strong>Partial Zip:</strong> 89138
                  </li>
                  <li>
                    <strong>Total Area:</strong> 22,500 acres
                  </li>
                  <li>
                    <strong>Villages:</strong> 10 unique communities
                  </li>
                </ul>
              </div>
            </div>
            <p className="mx-auto max-w-2xl text-gray-600">
              Summerlin West is strategically located between the 215 Beltway
              and Red Rock Canyon, offering the perfect balance of accessibility
              and natural beauty.
            </p>
          </div>
        </div>
      </section>

      {/* RealScout Home Value Widget Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Check Home Values Across Summerlin West Villages
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get instant property value estimates for any village in Summerlin West
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
      </section>

      {/* Villages Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Explore Summerlin West Villages & Communities</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Each village offers unique amenities, lifestyle options, and price
              points to match your preferences
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {villages.map((village) => (
              <div
                key={village.name}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="relative h-48 bg-gradient-to-br from-amber-400 to-orange-500">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-medium backdrop-blur">
                      {village.status}
                    </span>
                  </div>
                  <div className="absolute right-4 top-4">
                    <div className="flex items-center space-x-1 rounded-full bg-white/90 px-2 py-1 backdrop-blur">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium">
                        {village.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {village.name}
                      </h3>
                      <p className="font-semibold text-amber-600">
                        {village.type}
                      </p>
                    </div>
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                      {village.homes} Homes
                    </span>
                  </div>

                  <p className="mb-4 text-gray-600">{village.description}</p>

                  <div className="mb-6 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Avg Price</p>
                      <p className="font-semibold text-gray-900">
                        {village.avgPrice}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">HOA Range</p>
                      <p className="font-semibold text-gray-900">
                        {village.hoaRange}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="mb-2 text-sm font-semibold text-gray-700">
                      Key Features:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {village.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700"
                        >
                          {feature}
                        </span>
                      ))}
                      {village.features.length > 3 && (
                        <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700">
                          +{village.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={`/villages/${village.slug}`}
                      className="flex-1 rounded-lg bg-amber-600 py-3 text-center font-medium text-white transition-colors hover:bg-amber-700"
                    >
                      Explore Village
                    </Link>
                    <Link
                      href={`/properties/search?village=${village.slug}`}
                      className="flex-1 rounded-lg border border-amber-600 py-3 text-center font-medium text-amber-600 transition-colors hover:bg-amber-50"
                    >
                      View Homes
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-4 text-3xl font-bold">
            Ready to Find Your Perfect Village?
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            Let us help you discover the perfect Summerlin West village for your
            lifestyle and budget
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/properties/search"
              className="rounded-lg bg-amber-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-700"
            >
              Search All Properties
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border-2 border-amber-600 px-8 py-3 font-semibold text-amber-600 transition-colors hover:bg-amber-50"
            >
              Schedule Village Tour
            </Link>
          </div>
        </div>
      </section>

      {/* RealScout Listings Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h3 className="mb-4 text-3xl font-bold">
              Available Properties in Summerlin West
            </h3>
            <p className="mx-auto max-w-2xl text-gray-600">
              Browse current listings in all Summerlin West villages with
              real-time MLS data
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
