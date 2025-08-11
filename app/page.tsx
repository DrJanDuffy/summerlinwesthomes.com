'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, Home, Search, Phone, Mail, MapPin, Bed, Bath, Square, Heart, Star, Users, Shield, TrendingUp, Menu, X, Calendar, Clock, Award, Map } from 'lucide-react';
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
        fullAddress: '12345 Ridges Peak Dr, Las Vegas, NV 89135'
      },
      details: {
        bedrooms: 5,
        bathrooms: 6,
        squareFeet: 5200,
        lotSize: 0.75,
        yearBuilt: 2023,
        propertyType: 'luxury',
        status: 'for-sale'
      },
      features: ['Golf Course View', 'Custom Kitchen', 'Wine Cellar', 'Home Theater', 'Pool & Spa'],
      images: [],
      coordinates: { latitude: 36.1699, longitude: -115.1398 },
      agent: {
        id: '1',
        name: 'Sarah Johnson',
        email: 'sarah@summerlinwesthomes.com',
        phone: '(702) 555-0101',
        photo: '/agents/sarah-johnson.jpg',
        bio: 'Top producer specializing in luxury estates',
        specialties: ['Luxury Estates', 'Golf Course Properties', 'New Construction'],
        yearsOfExperience: 15,
        licenseNumber: 'NV12345'
      },
      createdAt: new Date(),
      updatedAt: new Date()
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
        fullAddress: '6789 Summit View Ln, Las Vegas, NV 89135'
      },
      details: {
        bedrooms: 4,
        bathrooms: 4,
        squareFeet: 4100,
        lotSize: 0.5,
        yearBuilt: 2022,
        propertyType: 'single-family',
        status: 'for-sale'
      },
      features: ['Mountain Views', 'Smart Home', 'Chef\'s Kitchen', '3-Car Garage', 'Private Patio'],
      images: [],
      coordinates: { latitude: 36.1699, longitude: -115.1398 },
      agent: {
        id: '2',
        name: 'Michael Chen',
        email: 'michael@summerlinwesthomes.com',
        phone: '(702) 555-0102',
        photo: '/agents/michael-chen.jpg',
        bio: 'Expert in modern luxury homes',
        specialties: ['Modern Homes', 'New Construction', 'Investment Properties'],
        yearsOfExperience: 12,
        licenseNumber: 'NV12346'
      },
      createdAt: new Date(),
      updatedAt: new Date()
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
        fullAddress: '9876 Golf Club Dr, Las Vegas, NV 89135'
      },
      details: {
        bedrooms: 6,
        bathrooms: 7,
        squareFeet: 6800,
        lotSize: 1.2,
        yearBuilt: 2021,
        propertyType: 'luxury',
        status: 'for-sale'
      },
      features: ['Golf Course Frontage', 'Butler\'s Pantry', 'Elevator', 'Guest House', 'Tennis Court'],
      images: [],
      coordinates: { latitude: 36.1699, longitude: -115.1398 },
      agent: {
        id: '1',
        name: 'Sarah Johnson',
        email: 'sarah@summerlinwesthomes.com',
        phone: '(702) 555-0101',
        photo: '/agents/sarah-johnson.jpg',
        bio: 'Top producer specializing in luxury estates',
        specialties: ['Luxury Estates', 'Golf Course Properties', 'New Construction'],
        yearsOfExperience: 15,
        licenseNumber: 'NV12345'
      },
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  const toggleSaved = (propertyId: string) => {
    setSavedProperties(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
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
      {activeSection === 'communities' && <CommunitiesSection />}
      {activeSection === 'about' && <AboutSection />}
      
      {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
      
      <Footer />
    </div>
  );
}

// Enhanced Header Component with Mobile Navigation
function Header({ 
  activeSection, 
  setActiveSection, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen 
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
    { id: 'communities', label: 'Communities' },
    { id: 'about', label: 'About' }
  ];

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-2 rounded-lg">
              <Home className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Summerlin West</h1>
              <p className="text-xs text-gray-600">Luxury Real Estate</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={cn(
                  'font-medium transition-all duration-200 pb-1 border-b-2',
                  activeSection === section.id 
                    ? 'text-amber-600 border-amber-600' 
                    : 'text-gray-700 border-transparent hover:text-amber-600 hover:border-amber-300'
                )}
              >
                {section.label}
              </button>
            ))}
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone className="h-4 w-4 text-amber-600" />
              <span className="font-semibold">(702) 555-0100</span>
            </div>
            <button className="bg-amber-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors">
              Schedule Tour
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
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
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    'text-left px-4 py-2 font-medium transition-colors',
                    activeSection === section.id 
                      ? 'text-amber-600 bg-amber-50' 
                      : 'text-gray-700 hover:text-amber-600 hover:bg-gray-50'
                  )}
                >
                  {section.label}
                </button>
              ))}
              <div className="px-4 pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-gray-700 mb-3">
                  <Phone className="h-4 w-4 text-amber-600" />
                  <span className="font-semibold">(702) 555-0100</span>
                </div>
                <button className="w-full bg-amber-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors">
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
  savedProperties 
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
    <section className="relative h-screen flex items-center justify-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-500 to-red-500 opacity-90"></div>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-medium">
            Nevada's #1 Luxury Community
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Welcome to <br />Summerlin West
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
          Discover exceptional luxury homes in Las Vegas' most prestigious master-planned community
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <Search className="h-5 w-5" />
            <span>Browse Properties</span>
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-200">
            Download Community Guide
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="h-8 w-8 text-white rotate-90" />
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
    { value: '$1.2M', label: 'Avg Home Price', icon: TrendingUp }
  ];

  return (
    <section className="bg-white py-8 shadow-lg relative z-20 -mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center mb-2">
                <stat.icon className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-amber-600">{stat.value}</div>
              <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// RealScout Search Integration Section
function RealScoutSearchEmbed() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">Find Your Dream Home</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Use our advanced search powered by RealScout to explore available properties with real-time MLS data
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl p-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-12 text-center border-2 border-dashed border-amber-300">
            <Search className="h-16 w-16 text-amber-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">RealScout Search Integration</h4>
            <p className="text-gray-600 mb-6">
              Interactive map search with advanced filters will load here
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors">
                Launch Full Search
              </button>
              <button className="border border-amber-600 text-amber-600 px-6 py-3 rounded-lg font-medium hover:bg-amber-50 transition-colors">
                View Map
              </button>
            </div>
          </div>
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
  savedProperties 
}: {
  properties: Property[];
  setActiveSection: (section: string) => void;
  toggleSaved: (id: string) => void;
  savedProperties: string[];
}) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h3 className="text-3xl font-bold">Featured Properties</h3>
            <p className="text-gray-600 mt-2">Hand-picked luxury homes available now</p>
          </div>
          <button 
            onClick={() => setActiveSection('properties')}
            className="text-amber-600 font-semibold flex items-center space-x-2 hover:text-amber-700"
          >
            <span>View All Properties</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
  onToggleSaved 
}: {
  property: Property;
  isSaved: boolean;
  onToggleSaved: () => void;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
      <div className="relative h-64 bg-gradient-to-br from-amber-400 to-orange-500">
        <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity"></div>
        <button
          onClick={onToggleSaved}
          aria-label={isSaved ? 'Remove from favorites' : 'Add to favorites'}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full hover:bg-white transition-all duration-200"
        >
          <Heart className={cn(
            'h-5 w-5',
            isSaved ? 'fill-red-500 text-red-500' : 'text-gray-600'
          )} />
        </button>
        <span className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {property.details.status === 'for-sale' ? 'For Sale' : property.details.status}
        </span>
      </div>
      
      <div className="p-6">
        <h4 className="text-2xl font-bold text-amber-600 mb-2">{property.priceFormatted}</h4>
        <p className="text-gray-800 font-medium mb-4">{property.title}</p>
        <p className="text-gray-600 text-sm mb-4">{property.address.fullAddress}</p>
        
        <div className="flex justify-between text-sm text-gray-600 mb-6">
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
        
        <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors duration-200">
          View Details
        </button>
      </div>
    </div>
  );
}

// Communities Preview Section
function CommunitiesPreview({ setActiveSection }: { setActiveSection: (section: string) => void }) {
  const communities = [
    { name: 'The Ridges', type: 'Golf Course Living', homes: 450, rating: 4.9, priceRange: '$1M - $25M' },
    { name: 'The Summit', type: 'Mountain Views', homes: 600, rating: 4.8, priceRange: '$800K - $5M' },
    { name: 'Red Rock Country Club', type: 'Private Golf Club', homes: 350, rating: 5.0, priceRange: '$750K - $8M' },
    { name: 'Mesa Ridge', type: 'Family Community', homes: 200, rating: 4.7, priceRange: '$500K - $2M' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Explore Communities</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each community offers unique amenities and lifestyle options
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communities.map((community) => (
            <div key={community.name} className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="h-32 bg-gradient-to-br from-amber-200 to-orange-300 rounded-lg mb-4"></div>
              <h4 className="font-bold text-lg mb-1">{community.name}</h4>
              <p className="text-gray-600 text-sm mb-2">{community.type}</p>
              <p className="text-amber-600 text-sm font-medium mb-3">{community.priceRange}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{community.homes} homes</span>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-medium">{community.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button 
            onClick={() => setActiveSection('communities')}
            className="bg-amber-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors"
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
      rating: 5
    },
    { 
      name: 'Michael Chen', 
      role: 'Investor', 
      text: 'Professional, knowledgeable, and always available. Best real estate experience.',
      rating: 5
    },
    { 
      name: 'The Williams Family', 
      role: 'New Residents', 
      text: 'They found us the perfect home in The Ridges. Couldn\'t be happier!',
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-gray-50 rounded-xl p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
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
    <section className="py-16 bg-gradient-to-br from-amber-600 to-orange-600">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold text-white mb-4">Ready to Find Your Dream Home?</h3>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied homeowners who have found their perfect property in Summerlin West
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all">
            Start Your Search
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-all">
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
  toggleSaved 
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
        fullAddress: '123 Desert Rose Dr, Las Vegas, NV 89135'
      },
      details: {
        bedrooms: 4,
        bathrooms: 3,
        squareFeet: 3200,
        lotSize: 0.4,
        yearBuilt: 2020,
        propertyType: 'single-family',
        status: 'for-sale'
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
        specialties: ['Luxury Estates', 'Golf Course Properties', 'New Construction'],
        yearsOfExperience: 15,
        licenseNumber: 'NV12345'
      },
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Add more properties here...
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Available Properties</h2>
          <div className="flex flex-wrap gap-4">
            {['all', 'single-family', 'condo', 'townhouse', 'luxury'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={cn(
                  'px-4 py-2 rounded-lg font-medium transition-colors',
                  filterType === type 
                    ? 'bg-amber-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                {type === 'all' ? 'All Types' : type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

// Communities Section Component
function CommunitiesSection() {
  const allCommunities = [
    { 
      name: 'The Ridges', 
      type: 'Luxury Golf Community', 
      homes: 450, 
      amenities: ['Golf Course', 'Club House', 'Tennis Courts', 'Spa'],
      priceRange: '$1M - $25M',
      description: 'Premier golf course community with custom estates'
    },
    { 
      name: 'The Summit', 
      type: 'Mountain Living', 
      homes: 600, 
      amenities: ['Parks', 'Trails', 'Recreation Center', 'Pool'],
      priceRange: '$800K - $5M',
      description: 'Elevated living with panoramic mountain views'
    },
    { 
      name: 'Red Rock Country Club', 
      type: 'Private Golf Club', 
      homes: 350, 
      amenities: ['Private Golf', 'Dining', 'Fitness Center', 'Spa'],
      priceRange: '$750K - $8M',
      description: 'Exclusive country club lifestyle'
    },
    { 
      name: 'Reverence', 
      type: 'Active Adult 55+', 
      homes: 300, 
      amenities: ['Golf Course', 'Recreation Center', 'Pool', 'Tennis'],
      priceRange: '$500K - $2M',
      description: 'Premier active adult community'
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Summerlin West Communities</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {allCommunities.map((community) => (
            <div key={community.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-amber-400 to-orange-500"></div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{community.name}</h3>
                    <p className="text-amber-600 font-semibold">{community.type}</p>
                  </div>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    {community.homes} Homes
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{community.description}</p>
                <p className="font-semibold text-gray-900 mb-4">Price Range: {community.priceRange}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Community Amenities:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {community.amenities.map((amenity) => (
                      <span key={amenity} className="text-sm text-gray-600 flex items-center space-x-1">
                        <ChevronRight className="h-3 w-3 text-amber-500" />
                        <span>{amenity}</span>
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-amber-600 text-white py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors">
                  Explore {community.name}
                </button>
              </div>
            </div>
          ))}
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Summerlin West</h2>
          
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              Summerlin West represents the pinnacle of luxury living in Las Vegas. As the western portion of the master-planned 
              community of Summerlin, this area encompasses over 22,500 acres of stunning desert landscape transformed into 
              one of the nation's premier residential developments.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="font-bold mb-2">Expert Team</h4>
                <p className="text-sm">Dedicated professionals with deep local knowledge</p>
              </div>
              
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="font-bold mb-2">Trusted Service</h4>
                <p className="text-sm">20+ years serving the Summerlin community</p>
              </div>
              
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="font-bold mb-2">Market Leaders</h4>
                <p className="text-sm">#1 in luxury home sales in Las Vegas</p>
              </div>
            </div>
            
            <p>
              Our team specializes in connecting discerning buyers with exceptional properties throughout Summerlin West's 
              diverse communities. From golf course estates to modern luxury condos, we provide unparalleled service and 
              expertise in navigating this prestigious market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Modal Component
function ContactModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-8">
        <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
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
        <button onClick={onClose} className="mt-6 w-full bg-amber-600 text-white py-3 rounded-lg font-medium hover:bg-amber-700">
          Close
        </button>
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4 text-amber-400">Summerlin West Homes</h4>
            <p className="text-gray-400 text-sm">Your trusted partner in luxury real estate</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Properties</li>
              <li className="hover:text-white cursor-pointer">Communities</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Popular Communities</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">The Ridges</li>
              <li className="hover:text-white cursor-pointer">The Summit</li>
              <li className="hover:text-white cursor-pointer">Red Rock CC</li>
              <li className="hover:text-white cursor-pointer">View All</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <p className="text-sm text-gray-400">
              1980 Festival Plaza Dr<br />
              Suite 300<br />
              Las Vegas, NV 89135<br />
              (702) 555-0100
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Summerlin West Homes. All rights reserved. | Powered by RealScout | DRE #01234567</p>
        </div>
      </div>
    </footer>
  );
}
