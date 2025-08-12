'use client';

import React, { useState } from 'react';
import { Calculator, Home, TrendingUp, MapPin, Phone, Mail, Users } from 'lucide-react';

export default function HomeValuationPage() {
  const [formData, setFormData] = useState({
    address: '',
    city: 'Las Vegas',
    state: 'NV',
    zipCode: '',
    propertyType: 'single-family',
    bedrooms: '',
    bathrooms: '',
    squareFeet: '',
    yearBuilt: '',
    name: '',
    email: '',
    phone: '',
    timeline: 'within-6-months',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with your CRM
    console.log('Valuation request:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get Your Home&apos;s True Market Value
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Professional home valuation for Summerlin West properties
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              <span>Instant Estimates</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>Market Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Local Expertise</span>
            </div>
          </div>
        </div>
      </div>

      {/* RealScout Home Value Widget Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Instant Home Value Estimate
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get an accurate, data-driven estimate of your home&apos;s current market value using our advanced RealScout technology
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
      </div>

      {/* Manual Valuation Form Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Need a Detailed Professional Valuation?
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below for a comprehensive market analysis and personalized consultation
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Property Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Property Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="123 Luxury Lane"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="89135"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                      Property Type
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="single-family">Single Family</option>
                      <option value="condo">Condo</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="luxury">Luxury Home</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-2">
                      Bedrooms
                    </label>
                    <input
                      type="number"
                      id="bedrooms"
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleChange}
                      min="1"
                      max="10"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="4"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-2">
                      Bathrooms
                    </label>
                    <input
                      type="number"
                      id="bathrooms"
                      name="bathrooms"
                      value={formData.bathrooms}
                      onChange={handleChange}
                      min="1"
                      max="10"
                      step="0.5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="3.5"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="squareFeet" className="block text-sm font-medium text-gray-700 mb-2">
                      Square Feet
                    </label>
                    <input
                      type="number"
                      id="squareFeet"
                      name="squareFeet"
                      value={formData.squareFeet}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="3,200"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="yearBuilt" className="block text-sm font-medium text-gray-700 mb-2">
                      Year Built
                    </label>
                    <input
                      type="number"
                      id="yearBuilt"
                      name="yearBuilt"
                      value={formData.yearBuilt}
                      onChange={handleChange}
                      min="1900"
                      max={new Date().getFullYear()}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="2020"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(702) 555-0123"
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline to Sell
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="within-6-months">Within 6 months</option>
                        <option value="6-12-months">6-12 months</option>
                        <option value="1-2-years">1-2 years</option>
                        <option value="just-curious">Just curious</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your property, any special features, or specific questions you have..."
                    />
                  </div>
                </div>

                <div className="border-t pt-6">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Get Professional Valuation
                  </button>
                  <p className="text-sm text-gray-500 text-center mt-4">
                    By submitting this form, you agree to receive communications from Summerlin West Homes
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Summerlin West Homes for Your Valuation?
              </h2>
              <p className="text-lg text-gray-600">
                Expert local knowledge combined with cutting-edge technology for accurate market insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of Summerlin West market trends and property values
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
                <p className="text-gray-600">
                  Data-driven insights using the latest real estate technology and market data
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Service</h3>
                <p className="text-gray-600">
                  One-on-one consultation and ongoing support throughout your selling journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Discover Your Home&apos;s True Value?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get started with our instant valuation tool above, or contact us for a comprehensive analysis
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+1-702-555-0100"
              className="bg-white text-blue-900 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-200 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (702) 555-0100
            </a>
            <a
              href="mailto:info@summerlinwesthomes.com"
              className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-200 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
