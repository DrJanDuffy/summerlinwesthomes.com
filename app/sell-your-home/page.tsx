'use client';

import React, { useState } from 'react';
import {
  Home,
  DollarSign,
  TrendingUp,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
} from 'lucide-react';

export default function SellYourHomePage() {
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
    estimatedValue: '',
    timeline: 'within-3-months',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with your CRM
    console.log('Sell request:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sellingProcess = [
    {
      step: 1,
      title: 'Free Consultation',
      description:
        'Schedule a no-obligation meeting to discuss your selling goals and timeline',
      icon: Phone,
    },
    {
      step: 2,
      title: 'Market Analysis',
      description:
        'Receive a comprehensive market analysis and recommended listing price',
      icon: TrendingUp,
    },
    {
      step: 3,
      title: 'Property Preparation',
      description:
        'Get expert advice on staging, repairs, and improvements to maximize value',
      icon: Home,
    },
    {
      step: 4,
      title: 'Marketing Strategy',
      description:
        'Professional photography, virtual tours, and targeted marketing campaigns',
      icon: Award,
    },
    {
      step: 5,
      title: 'Showings & Offers',
      description:
        'Manage showings, negotiate offers, and guide you through the closing process',
      icon: CheckCircle,
    },
  ];

  const whyChooseUs = [
    {
      icon: TrendingUp,
      title: 'Higher Sale Prices',
      description: 'Our properties sell for 8.2% more than the market average',
    },
    {
      icon: Clock,
      title: 'Faster Sales',
      description: 'Homes sell 23% faster with our marketing strategies',
    },
    {
      icon: Award,
      title: 'Expert Negotiation',
      description: 'Professional negotiation to maximize your return',
    },
    {
      icon: MapPin,
      title: 'Local Market Mastery',
      description: 'Deep knowledge of Summerlin West market trends',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-amber-100 p-4">
              <Home className="h-12 w-12 text-amber-600" />
            </div>
          </div>
          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
            Sell Your Summerlin West Home
          </h1>
          <p className="mx-auto mb-8 max-w-4xl text-xl text-gray-600">
            Get maximum value for your luxury property with our proven selling
            strategies. Our team has helped hundreds of Summerlin West
            homeowners achieve exceptional results.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div className="rounded-lg bg-white px-6 py-4 shadow-lg">
              <div className="text-2xl font-bold text-amber-600">8.2%</div>
              <div className="text-sm text-gray-600">Higher Sale Price</div>
            </div>
            <div className="rounded-lg bg-white px-6 py-4 shadow-lg">
              <div className="text-2xl font-bold text-amber-600">23%</div>
              <div className="text-sm text-gray-600">Faster Sale</div>
            </div>
            <div className="rounded-lg bg-white px-6 py-4 shadow-lg">
              <div className="text-2xl font-bold text-amber-600">$2.1M</div>
              <div className="text-sm text-gray-600">Average Sale Price</div>
            </div>
          </div>
        </div>

        {/* RealScout Home Value Widget Section */}
        <div className="mx-auto mb-16 max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Get Your Home&apos;s Current Market Value
            </h2>
            <p className="text-lg text-gray-600">
              Discover what your Summerlin West property is worth before you
              sell
            </p>
          </div>

          {/* RealScout Home Value Widget */}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>',
              }}
            />
          </div>

          {/* RealScout Advanced Search Widget */}
          <div className="mt-12 text-center">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Advanced Property Search
            </h3>
            <p className="mb-8 text-lg text-gray-600">
              Explore the market while you learn about selling your home
            </p>
            <div className="flex justify-center">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>',
                }}
              />
            </div>
          </div>

          {/* RealScout Simple Search Widget */}
          <div className="mt-12 text-center">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Quick Property Search
            </h3>
            <p className="mb-8 text-lg text-gray-600">
              Start your search with our simple and intuitive search tool
            </p>
            <div className="flex justify-center">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>',
                }}
              />
            </div>

            {/* Functional Search Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() =>
                  window.open(
                    'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
                className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
              >
                Search by Price Range
              </button>
              <button
                onClick={() =>
                  window.open(
                    'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
                className="rounded-lg bg-green-600 px-6 py-3 text-white transition-colors hover:bg-green-700"
              >
                Search by Bedrooms
              </button>
              <button
                onClick={() =>
                  window.open(
                    'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
                className="rounded-lg bg-purple-600 px-6 py-3 text-white transition-colors hover:bg-purple-700"
              >
                Search by Location
              </button>
              <button
                onClick={() =>
                  window.open(
                    'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
                className="rounded-lg bg-orange-600 px-6 py-3 text-white transition-colors hover:bg-orange-700"
              >
                Search by Property Type
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Main Content */}
            <div className="space-y-12">
              {/* Why Choose Us */}
              <div>
                <h2 className="mb-8 text-3xl font-bold text-gray-900">
                  Why Choose Summerlin West Homes?
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {whyChooseUs.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-lg bg-white p-6 shadow-lg"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                        <item.icon className="h-6 w-6 text-amber-600" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Selling Process */}
              <div>
                <h2 className="mb-8 text-3xl font-bold text-gray-900">
                  Our Proven 5-Step Selling Process
                </h2>
                <div className="space-y-6">
                  {sellingProcess.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-600 font-bold text-white">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Market Insights */}
              <div className="rounded-xl bg-amber-50 p-8">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Summerlin West Market Insights
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-white p-4">
                    <div className="text-2xl font-bold text-amber-600">
                      $1,247
                    </div>
                    <div className="text-sm text-gray-600">Price per sq ft</div>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <div className="text-2xl font-bold text-amber-600">45</div>
                    <div className="text-sm text-gray-600">Days on market</div>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <div className="text-2xl font-bold text-amber-600">
                      98.7%
                    </div>
                    <div className="text-sm text-gray-600">
                      List to sale ratio
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <div className="text-2xl font-bold text-amber-600">
                      +12.3%
                    </div>
                    <div className="text-sm text-gray-600">
                      Year over year growth
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-8">
              <div className="rounded-xl bg-white p-8 shadow-xl">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Get Your Free Home Evaluation
                </h2>
                <p className="mb-6 text-gray-600">
                  Tell us about your property and we&apos;ll provide a detailed
                  market analysis and recommended selling strategy.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Property Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Property Details
                    </h3>

                    <div>
                      <label
                        htmlFor="address"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
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
                        <label
                          htmlFor="city"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
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
                        <label
                          htmlFor="state"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
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
                        <label
                          htmlFor="zipCode"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
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
                        <label
                          htmlFor="propertyType"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
                          Property Type
                        </label>
                        <select
                          id="propertyType"
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        >
                          <option value="single-family">
                            Single Family Home
                          </option>
                          <option value="townhouse">Townhouse</option>
                          <option value="condo">Condominium</option>
                          <option value="luxury">Luxury Estate</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="estimatedValue"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
                          Estimated Value
                        </label>
                        <input
                          type="text"
                          id="estimatedValue"
                          name="estimatedValue"
                          value={formData.estimatedValue}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                          placeholder="$2,000,000"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label
                          htmlFor="bedrooms"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
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
                        <label
                          htmlFor="bathrooms"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
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
                        <label
                          htmlFor="squareFeet"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
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
                    <h3 className="text-lg font-semibold text-gray-800">
                      Contact Information
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
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
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
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
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
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
                      <label
                        htmlFor="timeline"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        When do you want to sell?
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
                        <option value="just-exploring">
                          Just exploring options
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Additional Details (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        placeholder="Tell us about your selling goals, timeline, or any special circumstances..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-amber-600 px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  >
                    Get My Free Home Evaluation
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    By submitting this form, you agree to receive communications
                    from Summerlin West Homes. We respect your privacy and will
                    never share your information.
                  </p>
                </form>
              </div>

              {/* CTA Box */}
              <div className="rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">
                  Ready to Get Started?
                </h3>
                <p className="mb-6 text-amber-100">
                  Schedule a free consultation to discuss your selling strategy
                  and timeline.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5" />
                    <span>(702) 555-0100</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5" />
                    <span>info@summerlinwesthomes.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
