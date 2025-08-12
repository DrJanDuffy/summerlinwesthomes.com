'use client';

import React, { useState } from 'react';
import {
  Car,
  Bus,
  Plane,
  Train,
  MapPin,
  Clock,
  Phone,
  Globe,
  Navigation,
  Parking,
  GasPump,
  Wifi,
  CreditCard,
  Info,
} from 'lucide-react';

export default function TransportationPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const transportationOptions = [
    {
      name: '215 Beltway (Bruce Woodbury Beltway)',
      category: 'highway',
      type: 'Major Highway',
      description: 'Primary east-west corridor connecting Summerlin West to the entire Las Vegas Valley',
      access: 'Multiple on/off ramps throughout Summerlin West',
      travelTime: {
        'Downtown Las Vegas': '15-20 minutes',
        'Las Vegas Strip': '25-30 minutes',
        'McCarran Airport': '35-40 minutes',
        'Red Rock Canyon': '5-10 minutes',
      },
      features: [
        '6-8 lanes',
        'HOV lanes available',
        'Electronic toll collection',
        'Emergency services',
        'Rest areas',
      ],
      tips: 'Best travel times: 6-8 AM and 4-6 PM. Avoid 12-2 PM for fastest travel.',
    },
    {
      name: 'Charleston Boulevard (SR 159)',
      category: 'arterial',
      type: 'Major Arterial',
      description: 'Historic route connecting Summerlin West to downtown and Red Rock Canyon',
      access: 'Primary east-west route through Summerlin West',
      travelTime: {
        'Downtown Las Vegas': '20-25 minutes',
        'Red Rock Canyon': '10-15 minutes',
        'Summerlin Hospital': '5-8 minutes',
        'Downtown Summerlin': '3-5 minutes',
      },
      features: [
        '4-6 lanes',
        'Bike lanes',
        'Bus routes',
        'Traffic signals',
        'Pedestrian crossings',
      ],
      tips: 'Heavy traffic during peak hours. Consider alternate routes during events.',
    },
    {
      name: 'Hualapai Way',
      category: 'arterial',
      type: 'Major Arterial',
      description: 'North-south corridor connecting Summerlin West communities',
      access: 'Connects all major Summerlin West villages',
      travelTime: {
        'The Ridges': '3-5 minutes',
        'The Summit': '5-8 minutes',
        'Red Rock Country Club': '8-10 minutes',
        'Downtown Summerlin': '2-3 minutes',
      },
      features: [
        '4-6 lanes',
        'Bike lanes',
        'Bus routes',
        'Traffic signals',
        'School zones',
      ],
      tips: 'Watch for school zone speed limits during school hours.',
    },
    {
      name: 'RTC Transit - Route 206',
      category: 'public',
      type: 'Public Bus',
      description: 'Regional Transportation Commission bus service through Summerlin West',
      route: 'Downtown Summerlin ↔ Downtown Las Vegas',
      schedule: 'Every 15-20 minutes, 6:00 AM - 10:00 PM',
      fare: '$2.00 single ride, $5.00 day pass',
      stops: [
        'Downtown Summerlin Transit Center',
        'Summerlin Hospital',
        'Charleston & Hualapai',
        'Downtown Las Vegas',
      ],
      features: [
        'Air-conditioned buses',
        'Bike racks',
        'Wheelchair accessible',
        'Real-time tracking',
        'Mobile ticketing',
      ],
      phone: '(702) 228-7433',
      website: 'https://www.rtcsnv.com',
    },
    {
      name: 'McCarran International Airport (LAS)',
      category: 'airport',
      type: 'International Airport',
      description: 'Primary airport serving Las Vegas and the surrounding region',
      distance: '25 miles from Summerlin West',
      travelTime: '35-45 minutes via 215 Beltway',
      airlines: 'Major carriers including Southwest, American, Delta, United',
      destinations: 'Direct flights to 100+ domestic and international cities',
      services: [
        'Car rentals',
        'Ground transportation',
        'Parking (short and long-term)',
        'Dining and shopping',
        'Business services',
      ],
      phone: '(702) 261-5211',
      website: 'https://www.mccarran.com',
    },
    {
      name: 'Downtown Summerlin Transit Center',
      category: 'hub',
      type: 'Transit Hub',
      description: 'Central transportation hub for Summerlin West area',
      location: '1980 Festival Plaza Dr, Las Vegas, NV 89135',
      services: [
        'RTC bus connections',
        'Park and ride facility',
        'Bike parking',
        'Real-time arrival displays',
        'Customer service',
      ],
      hours: '6:00 AM - 10:00 PM daily',
      parking: 'Free parking available',
      phone: '(702) 228-7433',
    },
    {
      name: 'Red Rock Canyon Scenic Drive',
      category: 'scenic',
      type: 'Scenic Route',
      description: '13-mile scenic drive through Red Rock Canyon National Conservation Area',
      access: 'Via Charleston Boulevard (SR 159)',
      distance: '2.3 miles from Summerlin West',
      travelTime: '5-10 minutes from Summerlin West',
      features: [
        'Scenic overlooks',
        'Hiking trail access',
        'Rock climbing areas',
        'Wildlife viewing',
        'Visitor center',
      ],
      hours: '6:00 AM - 8:00 PM (varies by season)',
      fee: '$15 per vehicle (7-day pass)',
      tips: 'Best times: Early morning or late afternoon. Avoid midday heat.',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Options', icon: Navigation },
    { id: 'highway', name: 'Highways', icon: Car },
    { id: 'arterial', name: 'Major Roads', icon: MapPin },
    { id: 'public', name: 'Public Transit', icon: Bus },
    { id: 'airport', name: 'Airport', icon: Plane },
    { id: 'hub', name: 'Transit Hubs', icon: Train },
    { id: 'scenic', name: 'Scenic Routes', icon: Navigation },
  ];

  const filteredOptions = transportationOptions.filter(option => {
    if (selectedCategory === 'all') return true;
    return option.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Summerlin West Transportation - Easy Access
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Navigate Summerlin West with ease through our comprehensive transportation guide
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="rounded-full bg-white/20 px-4 py-2">
              Major Highways
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2">
              Public Transit
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2">
              Airport Access
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2">
              Scenic Routes
            </span>
          </div>
        </div>
      </section>

      {/* Quick Access Info */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Quick Transportation Reference
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-blue-50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Car className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 font-bold text-blue-900">To Downtown</h3>
                <p className="text-sm text-blue-700">15-20 minutes via 215 Beltway</p>
              </div>
              <div className="rounded-lg bg-green-50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Plane className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 font-bold text-green-900">To Airport</h3>
                <p className="text-sm text-green-700">35-45 minutes via 215 Beltway</p>
              </div>
              <div className="rounded-lg bg-purple-50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="mb-2 font-bold text-purple-900">To Red Rock</h3>
                <p className="text-sm text-purple-700">5-10 minutes via Charleston</p>
              </div>
              <div className="rounded-lg bg-orange-50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                  <Bus className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="mb-2 font-bold text-orange-900">Public Transit</h3>
                <p className="text-sm text-orange-700">RTC Route 206 every 15-20 min</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-center">
            <h2 className="mb-4 text-2xl font-bold">Filter by Category</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 rounded-lg px-4 py-2 transition-all ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transportation Options Grid */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              {filteredOptions.length} Transportation Options in Summerlin West
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Multiple ways to get around and access the entire Las Vegas Valley
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {filteredOptions.map((option) => (
              <div
                key={option.name}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-6 text-white">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold">{option.name}</h3>
                    <p className="mt-2 text-purple-100">{option.type}</p>
                  </div>
                  <p className="text-white/90">{option.description}</p>
                </div>

                <div className="p-6">
                  {option.travelTime && (
                    <div className="mb-4">
                      <h4 className="mb-2 font-semibold text-gray-900">Travel Times:</h4>
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        {Object.entries(option.travelTime).map(([destination, time]) => (
                          <div key={destination} className="flex justify-between">
                            <span className="text-gray-600">{destination}:</span>
                            <span className="font-medium text-gray-900">{time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {option.features && (
                    <div className="mb-4">
                      <h4 className="mb-2 font-semibold text-gray-900">Features:</h4>
                      <ul className="space-y-1">
                        {option.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {option.tips && (
                    <div className="mb-4 rounded-lg bg-blue-50 p-3">
                      <div className="flex items-center space-x-2">
                        <Info className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-900">Travel Tip</span>
                      </div>
                      <p className="mt-1 text-sm text-blue-700">{option.tips}</p>
                    </div>
                  )}

                  {option.phone && (
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <a
                          href={`tel:${option.phone}`}
                          className="flex items-center space-x-1 rounded-lg bg-purple-600 px-3 py-2 text-sm text-white transition-colors hover:bg-purple-700"
                        >
                          <Phone className="h-3 w-3" />
                          <span>Call</span>
                        </a>
                        {option.website && (
                          <a
                            href={option.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                          >
                            <Globe className="h-3 w-3" />
                            <span>Website</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Need Help Navigating Summerlin West?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/90">
            Our team can provide detailed directions and transportation recommendations for your visit
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-8 py-3 font-semibold text-purple-600 transition-all hover:shadow-xl">
              Get Directions
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:bg-white hover:text-purple-600">
              Download Transportation Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
