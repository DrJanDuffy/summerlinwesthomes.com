'use client';

import React, { useState } from 'react';
import { Calculator, Home, TrendingUp, MapPin, Phone, Mail } from 'lucide-react';

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-amber-100 p-4">
              <Calculator className="h-12 w-12 text-amber-600" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Get Your Home&apos;s Current Market Value
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Discover what your Summerlin West property is worth in today&apos;s market. 
            Get a professional, data-driven valuation from our local real estate experts.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Valuation Form */}
            <div className="rounded-xl bg-white p-8 shadow-xl">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Free Home Valuation Request
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Property Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Property Details</h3>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                      placeholder="12345 Luxury Lane"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        readOnly
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        readOnly
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
                        required
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        placeholder="89135"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                        Property Type
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                      >
                        <option value="single-family">Single Family Home</option>
                        <option value="townhouse">Townhouse</option>
                        <option value="condo">Condominium</option>
                        <option value="luxury">Luxury Estate</option>
                      </select>
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
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        placeholder="2020"
                        min="1900"
                        max={new Date().getFullYear()}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
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
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        placeholder="4"
                        min="1"
                        max="10"
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
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        placeholder="3"
                        min="1"
                        max="10"
                        step="0.5"
                      />
                    </div>
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
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        placeholder="2500"
                        min="500"
                        max="20000"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        placeholder="(702) 555-0100"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                      placeholder="john.doe@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      When are you planning to sell?
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                    >
                      <option value="immediately">Immediately</option>
                      <option value="within-3-months">Within 3 months</option>
                      <option value="within-6-months">Within 6 months</option>
                      <option value="within-year">Within 1 year</option>
                      <option value="just-curious">Just curious</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                      placeholder="Tell us about any special features, recent upgrades, or specific questions..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-amber-600 px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  Get My Free Home Valuation
                </button>

                <p className="text-center text-sm text-gray-500">
                  By submitting this form, you agree to receive communications from Summerlin West Homes. 
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </div>

            {/* Benefits & Information */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <div className="rounded-xl bg-white p-8 shadow-xl">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Why Choose Our Valuation Service?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="rounded-full bg-amber-100 p-2">
                      <TrendingUp className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Market Data Driven</h4>
                      <p className="text-sm text-gray-600">
                        Our valuations are based on real-time MLS data and recent sales in Summerlin West
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="rounded-full bg-amber-100 p-2">
                      <MapPin className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Local Expertise</h4>
                      <p className="text-sm text-gray-600">
                        Specialized knowledge of Summerlin West neighborhoods and market trends
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="rounded-full bg-amber-100 p-2">
                      <Home className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Comprehensive Analysis</h4>
                      <p className="text-sm text-gray-600">
                        We consider location, amenities, upgrades, and market conditions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What You&apos;ll Receive */}
              <div className="rounded-xl bg-white p-8 shadow-xl">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  What You&apos;ll Receive
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                    <span>Detailed market analysis report</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                    <span>Comparable property sales data</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                    <span>Recommended listing price range</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                    <span>Market timing recommendations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                    <span>Personal consultation with our experts</span>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="rounded-xl bg-amber-50 p-8">
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Questions? Contact Us Directly
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-700">(702) 555-0100</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-700">info@summerlinwesthomes.com</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Our team is available to answer your questions and provide personalized guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
