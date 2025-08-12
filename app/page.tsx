'use client';

import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  Home,
  Search,
  Phone,
  Mail,
  MapPin,
  Bed,
  Bath,
  Square,
  Heart,
  Star,
  Users,
  Shield,
  TrendingUp,
  Menu,
  X,
  Calendar,
  Clock,
  Award,
  Map,
  Filter,
  Settings,
  Eye,
  EyeOff,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatPrice, formatSquareFeet } from '@/lib/utils';
import type { Property, Agent } from '@/types/real-estate';

// Main App Component - Summerlin West Homes
export default function SummerlinWestHomes() {
  const [activeSection, setActiveSection] = useState('home');
  const [savedProperties, setSavedProperties] = useState<string[]>([]);
  const [showContactModal, setShowContactModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sample data - In production, this would come from your CMS/API
  const featuredProperties: Property[] = [
    {
      id: '1',
      title: 'Luxury Estate in The Ridges',
      description: 'Spectacular custom estate with panoramic views',
      price: 2495000,
      priceFormatted: '$2,495,000',
      address: {
        street: '12345 Ridges Peak Dr',
        city: 'Las Vegas',
        state: 'NV',
        zipCode: '89135',
        fullAddress: '12345 Ridges Peak Dr, Las Vegas, NV 89135',
      },
      details: {
        bedrooms: 5,
        bathrooms: 6,
        squareFeet: 5200,
        lotSize: 0.75,
        yearBuilt: 2023,
        propertyType: 'luxury',
        status: 'for-sale',
      },
      features: [
        'Golf Course View',
        'Custom Kitchen',
        'Wine Cellar',
        'Home Theater',
        'Pool & Spa',
      ],
      images: [],
      coordinates: { latitude: 36.1699, longitude: -115.1398 },
      agent: {
        id: '1',
        name: 'Sarah Johnson',
        email: 'sarah@summerlinwesthomes.com',
        phone: '(702) 555-0101',
        photo: '/agents/sarah-johnson.jpg',
        bio: 'Top producer specializing in luxury estates',
        specialties: [
          'Luxury Estates',
          'Golf Course Properties',
          'New Construction',
        ],
        yearsOfExperience: 15,
        licenseNumber: 'NV12345',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      title: 'Modern Villa in The Summit',
      description: 'Contemporary luxury with mountain vistas',
      price: 1850000,
      priceFormatted: '$1,850,000',
      address: {
        street: '6789 Summit View Ln',
        city: 'Las Vegas',
        state: 'NV',
        zipCode: '89135',
        fullAddress: '6789 Summit View Ln, Las Vegas, NV 89135',
      },
      details: {
        bedrooms: 4,
        bathrooms: 4,
        squareFeet: 4100,
        lotSize: 0.5,
        yearBuilt: 2022,
        propertyType: 'single-family',
        status: 'for-sale',
      },
      features: [
        'Mountain Views',
        'Smart Home',
        "Chef's Kitchen",
        '3-Car Garage',
        'Private Patio',
      ],
      images: [],
      coordinates: { latitude: 36.1699, longitude: -115.1398 },
      agent: {
        id: '2',
        name: 'Michael Chen',
        email: 'michael@summerlinwesthomes.com',
        phone: '(702) 555-0102',
        photo: '/agents/michael-chen.jpg',
        bio: 'Expert in modern luxury homes',
        specialties: [
          'Modern Homes',
          'New Construction',
          'Investment Properties',
        ],
        yearsOfExperience: 12,
        licenseNumber: 'NV12346',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '3',
      title: 'Red Rock Country Club Estate',
      description: 'Exclusive golf course mansion',
      price: 3200000,
      priceFormatted: '$3,200,000',
      address: {
        street: '9876 Golf Club Dr',
        city: 'Las Vegas',
        state: 'NV',
        zipCode: '89135',
        fullAddress: '9876 Golf Club Dr, Las Vegas, NV 89135',
      },
      details: {
        bedrooms: 6,
        bathrooms: 7,
        squareFeet: 6800,
        lotSize: 1.2,
        yearBuilt: 2021,
        propertyType: 'luxury',
        status: 'for-sale',
      },
      features: [
        'Golf Course Frontage',
        "Butler's Pantry",
        'Elevator',
        'Guest House',
        'Tennis Court',
      ],
      images: [],
      coordinates: { latitude: 36.1699, longitude: -115.1398 },
      agent: {
        id: '1',
        name: 'Sarah Johnson',
        email: 'sarah@summerlinwesthomes.com',
        phone: '(702) 555-0101',
        photo: '/agents/sarah-johnson.jpg',
        bio: 'Top producer specializing in luxury estates',
        specialties: [
          'Luxury Estates',
          'Golf Course Properties',
          'New Construction',
        ],
        yearsOfExperience: 15,
        licenseNumber: 'NV12345',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const toggleSaved = (propertyId: string) => {
    setSavedProperties((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {activeSection === 'home' && (
        <HomePage
          setActiveSection={setActiveSection}
          featuredProperties={featuredProperties}
          toggleSaved={toggleSaved}
          savedProperties={savedProperties}
        />
      )}
      {activeSection === 'properties' && (
        <PropertiesSection
          savedProperties={savedProperties}
          setSavedProperties={setSavedProperties}
          toggleSaved={toggleSaved}
        />
      )}
      {activeSection === 'listings' && <ListingsSection />}
      {activeSection === 'villages' && <VillagesSection />}
      {activeSection === 'market-data' && <MarketDataSection />}
      {activeSection === 'about' && <AboutSection />}

      {showContactModal && (
        <ContactModal onClose={() => setShowContactModal(false)} />
      )}

      <Footer />
    </div>
  );
}

// Enhanced Header Component with Mobile Navigation
function Header({
  activeSection,
  setActiveSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'properties', label: 'Properties' },
    { id: 'listings', label: 'Listings' },
    { id: 'villages', label: 'Villages' },
    { id: 'market-data', label: 'Market Data' },
    { id: 'about', label: 'About' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 p-2">
              <Home className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Summerlin West
              </h1>
              <p className="text-xs text-gray-600">Luxury Real Estate</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            {navigationItems.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={cn(
                  'border-b-2 pb-1 font-medium transition-all duration-200',
                  activeSection === section.id
                    ? 'border-amber-600 text-amber-600'
                    : 'border-transparent text-gray-700 hover:border-amber-300 hover:text-amber-600'
                )}
              >
                {section.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center space-x-4 lg:flex">
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone className="h-4 w-4 text-amber-600" />
              <span className="font-semibold">(702) 555-0100</span>
            </div>
            <button className="rounded-lg bg-amber-600 px-4 py-2 font-medium text-white transition-colors hover:bg-amber-700">
              Schedule Tour
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white py-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    'px-4 py-2 text-left font-medium transition-colors',
                    activeSection === section.id
                      ? 'bg-amber-50 text-amber-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-amber-600'
                  )}
                >
                  {section.label}
                </button>
              ))}
              <div className="border-t border-gray-200 px-4 pt-4">
                <div className="mb-3 flex items-center space-x-2 text-gray-700">
                  <Phone className="h-4 w-4 text-amber-600" />
                  <span className="font-semibold">(702) 555-0100</span>
                </div>
                <button className="w-full rounded-lg bg-amber-600 px-4 py-2 font-medium text-white transition-colors hover:bg-amber-700">
                  Schedule Tour
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// Enhanced Home Page with RealScout Integration
function HomePage({
  setActiveSection,
  featuredProperties,
  toggleSaved,
  savedProperties,
}: {
  setActiveSection: (section: string) => void;
  featuredProperties: Property[];
  toggleSaved: (id: string) => void;
  savedProperties: string[];
}) {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <RealScoutSearchEmbed />
      <FeaturedProperties
        properties={featuredProperties}
        setActiveSection={setActiveSection}
        toggleSaved={toggleSaved}
        savedProperties={savedProperties}
      />
      <CommunitiesPreview setActiveSection={setActiveSection} />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

// Hero Section with Enhanced Visual Appeal
function HeroSection() {
  return (
    <section className="relative flex h-screen items-center justify-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-500 to-red-500 opacity-90"></div>
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center text-white">
        <div className="mb-6">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
            Nevada&apos;s #1 Luxury Community
          </span>
        </div>
        <h2 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
          Welcome to <br />
          Summerlin West
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-xl text-white/90 md:text-2xl">
          Discover exceptional luxury homes in Las Vegas&apos; most prestigious
          master-planned community
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex transform items-center justify-center space-x-2 rounded-lg bg-white px-8 py-4 font-semibold text-amber-600 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
          >
            <Search className="h-5 w-5" />
            <span>Browse Properties</span>
          </button>
          <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-200 hover:bg-white hover:text-amber-600">
            Download Community Guide
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
        <ChevronRight className="h-8 w-8 rotate-90 text-white" />
      </div>
    </section>
  );
}

// Enhanced Stats Bar with Real Data
function StatsBar() {
  const stats = [
    { value: '2,500+', label: 'Luxury Homes', icon: Home },
    { value: '22,500', label: 'Acres', icon: Map },
    { value: '30+', label: 'Communities', icon: Users },
    { value: '$1.2M', label: 'Avg Home Price', icon: TrendingUp },
  ];

  return (
    <section className="relative z-20 -mt-20 bg-white py-8 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-2 flex justify-center">
                <stat.icon className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-amber-600">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// RealScout Office Listings Section
function RealScoutSearchEmbed() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h3 className="mb-4 text-3xl font-bold">Find Your Dream Home</h3>
          <p className="mx-auto max-w-2xl text-gray-600">
            Browse our current listings powered by RealScout with real-time MLS
            data
          </p>
        </div>

        <div className="mx-auto max-w-6xl rounded-xl bg-white p-8 shadow-xl">
          {/* @ts-ignore - RealScout custom web component */}
          <realscout-office-listings
            agent-encoded-id="QWdlbnQtMjI1MDUw"
            sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
            listing-status="For Sale"
            page-size="30"
            hide-search="false"
            hide-listing-date="false"
            hide-listing-type="false"
            hide-map="false"
          />
        </div>
      </div>
    </section>
  );
}

// Enhanced Featured Properties with Real Data
function FeaturedProperties({
  properties,
  setActiveSection,
  toggleSaved,
  savedProperties,
}: {
  properties: Property[];
  setActiveSection: (section: string) => void;
  toggleSaved: (id: string) => void;
  savedProperties: string[];
}) {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-bold">Featured Properties</h3>
            <p className="mt-2 text-gray-600">
              Hand-picked luxury homes available now
            </p>
          </div>
          <button
            onClick={() => setActiveSection('properties')}
            className="flex items-center space-x-2 font-semibold text-amber-600 hover:text-amber-700"
          >
            <span>View All Properties</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              isSaved={savedProperties.includes(property.id)}
              onToggleSaved={() => toggleSaved(property.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Enhanced Property Card Component
function PropertyCard({
  property,
  isSaved,
  onToggleSaved,
}: {
  property: Property;
  isSaved: boolean;
  onToggleSaved: () => void;
}) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
      <div className="relative h-64 bg-gradient-to-br from-amber-400 to-orange-500">
        <div className="absolute inset-0 bg-black opacity-20 transition-opacity group-hover:opacity-10"></div>
        <button
          onClick={onToggleSaved}
          aria-label={isSaved ? 'Remove from favorites' : 'Add to favorites'}
          className="absolute right-4 top-4 rounded-full bg-white/90 p-2 backdrop-blur transition-all duration-200 hover:bg-white"
        >
          <Heart
            className={cn(
              'h-5 w-5',
              isSaved ? 'fill-red-500 text-red-500' : 'text-gray-600'
            )}
          />
        </button>
        <span className="absolute left-4 top-4 rounded-full bg-amber-600 px-3 py-1 text-sm font-semibold text-white">
          {property.details.status === 'for-sale'
            ? 'For Sale'
            : property.details.status}
        </span>
      </div>

      <div className="p-6">
        <h4 className="mb-2 text-2xl font-bold text-amber-600">
          {property.priceFormatted}
        </h4>
        <p className="mb-4 font-medium text-gray-800">{property.title}</p>
        <p className="mb-4 text-sm text-gray-600">
          {property.address.fullAddress}
        </p>

        <div className="mb-6 flex justify-between text-sm text-gray-600">
          <span className="flex items-center space-x-1">
            <Bed className="h-4 w-4" />
            <span>{property.details.bedrooms} Beds</span>
          </span>
          <span className="flex items-center space-x-1">
            <Bath className="h-4 w-4" />
            <span>{property.details.bathrooms} Baths</span>
          </span>
          <span className="flex items-center space-x-1">
            <Square className="h-4 w-4" />
            <span>{formatSquareFeet(property.details.squareFeet)} sqft</span>
          </span>
        </div>

        <button className="w-full rounded-lg bg-gray-900 py-3 font-medium text-white transition-colors duration-200 hover:bg-amber-600">
          View Details
        </button>
      </div>
    </div>
  );
}

// Communities Preview Section
function CommunitiesPreview({
  setActiveSection,
}: {
  setActiveSection: (section: string) => void;
}) {
  const communities = [
    {
      name: 'The Ridges',
      type: 'Golf Course Living',
      homes: 450,
      rating: 4.9,
      priceRange: '$1M - $25M',
    },
    {
      name: 'The Summit',
      type: 'Mountain Views',
      homes: 600,
      rating: 4.8,
      priceRange: '$800K - $5M',
    },
    {
      name: 'Red Rock Country Club',
      type: 'Private Golf Club',
      homes: 350,
      rating: 5.0,
      priceRange: '$750K - $8M',
    },
    {
      name: 'Mesa Ridge',
      type: 'Family Community',
      homes: 200,
      rating: 4.7,
      priceRange: '$500K - $2M',
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h3 className="mb-4 text-3xl font-bold">Explore Communities</h3>
          <p className="mx-auto max-w-2xl text-gray-600">
            Each community offers unique amenities and lifestyle options
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {communities.map((community) => (
            <div
              key={community.name}
              className="rounded-xl bg-white p-6 transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="mb-4 h-32 rounded-lg bg-gradient-to-br from-amber-200 to-orange-300"></div>
              <h4 className="mb-1 text-lg font-bold">{community.name}</h4>
              <p className="mb-2 text-sm text-gray-600">{community.type}</p>
              <p className="mb-3 text-sm font-medium text-amber-600">
                {community.priceRange}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {community.homes} homes
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-medium">
                    {community.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => setActiveSection('communities')}
            className="rounded-lg bg-amber-600 px-8 py-3 font-medium text-white transition-colors hover:bg-amber-700"
          >
            Explore All Communities
          </button>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      text: 'The team made our dream of owning in Summerlin West a reality. Exceptional service!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Investor',
      text: 'Professional, knowledgeable, and always available. Best real estate experience.',
      rating: 5,
    },
    {
      name: 'The Williams Family',
      role: 'New Residents',
      text: "They found us the perfect home in The Ridges. Couldn't be happier!",
      rating: 5,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h3 className="mb-12 text-center text-3xl font-bold">
          What Our Clients Say
        </h3>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-xl bg-gray-50 p-6">
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="mb-4 italic text-gray-600">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="bg-gradient-to-br from-amber-600 to-orange-600 py-16">
      <div className="container mx-auto px-4 text-center">
        <h3 className="mb-4 text-3xl font-bold text-white">
          Ready to Find Your Dream Home?
        </h3>
        <p className="mx-auto mb-8 max-w-2xl text-white/90">
          Join thousands of satisfied homeowners who have found their perfect
          property in Summerlin West
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-lg bg-white px-8 py-3 font-semibold text-amber-600 transition-all hover:shadow-xl">
            Start Your Search
          </button>
          <button className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:bg-white hover:text-amber-600">
            Contact an Agent
          </button>
        </div>
      </div>
    </section>
  );
}

// Properties Section Component
function PropertiesSection({
  savedProperties,
  setSavedProperties,
  toggleSaved,
}: {
  savedProperties: string[];
  setSavedProperties: (properties: string[]) => void;
  toggleSaved: (id: string) => void;
}) {
  const [filterType, setFilterType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const properties: Property[] = [
    {
      id: '4',
      title: 'Desert Rose Estate',
      description: 'Beautiful single family home with mountain views',
      price: 1250000,
      priceFormatted: '$1,250,000',
      address: {
        street: '123 Desert Rose Dr',
        city: 'Las Vegas',
        state: 'NV',
        zipCode: '89135',
        fullAddress: '123 Desert Rose Dr, Las Vegas, NV 89135',
      },
      details: {
        bedrooms: 4,
        bathrooms: 3,
        squareFeet: 3200,
        lotSize: 0.4,
        yearBuilt: 2020,
        propertyType: 'single-family',
        status: 'for-sale',
      },
      features: ['Mountain Views', 'Updated Kitchen', 'Pool', '3-Car Garage'],
      images: [],
      coordinates: { latitude: 36.1699, longitude: -115.1398 },
      agent: {
        id: '3',
        name: 'Sarah Johnson',
        email: 'sarah@summerlinwesthomes.com',
        phone: '(702) 555-0101',
        photo: '/agents/sarah-johnson.jpg',
        bio: 'Top producer specializing in luxury estates',
        specialties: [
          'Luxury Estates',
          'Golf Course Properties',
          'New Construction',
        ],
        yearsOfExperience: 15,
        licenseNumber: 'NV12345',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // Add more properties here...
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="mb-4 text-3xl font-bold">Available Properties</h2>
          <div className="flex flex-wrap gap-4">
            {['all', 'single-family', 'condo', 'townhouse', 'luxury'].map(
              (type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={cn(
                    'rounded-lg px-4 py-2 font-medium transition-colors',
                    filterType === type
                      ? 'bg-amber-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  )}
                >
                  {type === 'all'
                    ? 'All Types'
                    : type
                        .replace('-', ' ')
                        .replace(/\b\w/g, (l) => l.toUpperCase())}
                </button>
              )
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              isSaved={savedProperties.includes(property.id)}
              onToggleSaved={() => toggleSaved(property.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Villages Section Component
function VillagesSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 text-3xl font-bold">Summerlin West Villages</h2>
        <p className="mx-auto mb-12 max-w-2xl text-gray-600">
          Discover the unique character and luxury lifestyle of each village in
          Summerlin West
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/villages"
            className="rounded-lg bg-amber-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-700"
          >
            Explore All Villages
          </a>
          <a
            href="/properties/search"
            className="rounded-lg border-2 border-amber-600 px-8 py-3 font-semibold text-amber-600 transition-colors hover:bg-amber-50"
          >
            Search Properties
          </a>
        </div>
      </div>
    </section>
  );
}

// Market Data Section Component
function MarketDataSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 text-3xl font-bold">Market Data & Trends</h2>
        <p className="mx-auto mb-12 max-w-2xl text-gray-600">
          Real-time market insights and trends exclusively for Summerlin West
          properties
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/market-data"
            className="rounded-lg bg-amber-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-700"
          >
            View Market Data
          </a>
          <a
            href="/properties/search"
            className="rounded-lg border-2 border-amber-600 px-8 py-3 font-semibold text-amber-600 transition-colors hover:bg-amber-50"
          >
            Search Properties
          </a>
        </div>
      </div>
    </section>
  );
}

// About Section Component
function AboutSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            About Summerlin West
          </h2>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              Summerlin West represents the pinnacle of luxury living in Las
              Vegas. As the western portion of the master-planned community of
              Summerlin, this area encompasses over 22,500 acres of stunning
              desert landscape transformed into one of the nation&apos;s premier
              residential developments.
            </p>

            <div className="my-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="mb-2 font-bold">Expert Team</h4>
                <p className="text-sm">
                  Dedicated professionals with deep local knowledge
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Shield className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="mb-2 font-bold">Trusted Service</h4>
                <p className="text-sm">
                  20+ years serving the Summerlin community
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <TrendingUp className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="mb-2 font-bold">Market Leaders</h4>
                <p className="text-sm">#1 in luxury home sales in Las Vegas</p>
              </div>
            </div>

            <p>
              Our team specializes in connecting discerning buyers with
              exceptional properties throughout Summerlin West&apos;s diverse
              communities. From golf course estates to modern luxury condos, we
              provide unparalleled service and expertise in navigating this
              prestigious market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Listings Section Component with RealScout Integration
function ListingsSection() {
  const [showFilters, setShowFilters] = useState(true);
  const [showSort, setShowSort] = useState(true);
  const [showPagination, setShowPagination] = useState(true);

  // Sample agent ID - replace with your actual RealScout agent ID
  const agentId = 'QWdlbnQtMjI1MDUw'; // Example: Agent-225050

  return (
    <section className="bg-gray-50 pb-16 pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Summerlin West Properties
          </h2>
          <p className="max-w-3xl text-xl text-gray-600">
            Discover luxury homes and properties in Summerlin West, Las Vegas.
            Browse our curated selection of premium real estate listings powered
            by RealScout.
          </p>
        </div>

        {/* Widget Controls */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-gray-900">
              <Settings className="mr-2 inline-block h-6 w-6 text-amber-600" />
              Widget Configuration
            </h3>
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
            <h3 className="mb-2 text-2xl font-semibold text-gray-900">
              <Home className="mr-2 inline-block h-6 w-6 text-amber-600" />
              Current Listings
            </h3>
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
            <h4 className="mb-4 text-xl font-semibold text-gray-900">
              <Filter className="mr-2 inline-block h-5 w-5 text-amber-600" />
              Advanced Property Search
            </h4>
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
            <h4 className="mb-4 text-xl font-semibold text-gray-900">
              <Home className="mr-2 inline-block h-5 w-5 text-amber-600" />
              Featured Property
            </h4>
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
          <h4 className="mb-3 text-lg font-semibold text-blue-900">
            RealScout Integration Notes
          </h4>
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
    </section>
  );
}

// Contact Modal Component
function ContactModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8">
        <h3 className="mb-6 text-2xl font-bold">Contact Us</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-amber-600" />
            <span>(702) 555-0100</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-amber-600" />
            <span>info@summerlinwesthomes.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-amber-600" />
            <span>1980 Festival Plaza Dr, Las Vegas</span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-amber-600 py-3 font-medium text-white hover:bg-amber-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h4 className="mb-4 font-bold text-amber-400">
              Summerlin West Homes
            </h4>
            <p className="text-sm text-gray-400">
              Your trusted partner in luxury real estate
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="cursor-pointer hover:text-white">Properties</li>
              <li className="cursor-pointer hover:text-white">Communities</li>
              <li className="cursor-pointer hover:text-white">About Us</li>
              <li className="cursor-pointer hover:text-white">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Popular Communities</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="cursor-pointer hover:text-white">The Ridges</li>
              <li className="cursor-pointer hover:text-white">The Summit</li>
              <li className="cursor-pointer hover:text-white">Red Rock CC</li>
              <li className="cursor-pointer hover:text-white">View All</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Contact Info</h4>
            <p className="text-sm text-gray-400">
              1980 Festival Plaza Dr
              <br />
              Suite 300
              <br />
              Las Vegas, NV 89135
              <br />
              (702) 555-0100
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; 2024 Summerlin West Homes. All rights reserved. | Powered by
            RealScout | DRE #01234567
          </p>
        </div>
      </div>
    </footer>
  );
}
