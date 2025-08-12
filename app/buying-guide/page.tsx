'use client';

import React, { useState } from 'react';
import {
  Home,
  Search,
  FileText,
  Calculator,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Star,
} from 'lucide-react';

export default function BuyingGuidePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'search', label: 'Search Process', icon: Search },
    { id: 'financing', label: 'Financing', icon: Calculator },
    { id: 'closing', label: 'Closing Process', icon: FileText },
  ];

  const buyingSteps = [
    {
      step: 1,
      title: 'Get Pre-Approved',
      description: 'Secure your financing before starting your search',
      details: [
        'Gather financial documents (W-2s, tax returns, bank statements)',
        'Check your credit score and address any issues',
        'Get pre-approved for a mortgage to know your budget',
        'Understand different loan types and down payment requirements',
      ],
    },
    {
      step: 2,
      title: 'Define Your Criteria',
      description: 'Identify your must-haves and nice-to-haves',
      details: [
        'Determine your preferred neighborhoods and communities',
        'Set your budget range and monthly payment target',
        'List essential features (bedrooms, bathrooms, square footage)',
        'Consider lifestyle factors (golf, amenities, schools)',
      ],
    },
    {
      step: 3,
      title: 'Start Your Search',
      description: 'Use our advanced search tools and expert guidance',
      details: [
        'Browse available properties with RealScout integration',
        'Set up property alerts for new listings',
        'Schedule viewings of promising properties',
        'Compare properties side-by-side',
      ],
    },
    {
      step: 4,
      title: 'Make an Offer',
      description: 'Submit a competitive offer with expert negotiation',
      details: [
        'Review comparable sales and market conditions',
        'Work with your agent to craft a strong offer',
        'Include appropriate contingencies and timelines',
        'Negotiate terms and price effectively',
      ],
    },
    {
      step: 5,
      title: 'Due Diligence',
      description: 'Thoroughly investigate the property before closing',
      details: [
        'Schedule professional home inspection',
        'Review seller disclosures and property history',
        'Conduct neighborhood research and school ratings',
        'Verify property boundaries and easements',
      ],
    },
    {
      step: 6,
      title: 'Close the Deal',
      description: 'Complete the transaction and get your keys',
      details: [
        'Finalize financing and insurance',
        'Complete final walkthrough',
        'Sign closing documents and transfer ownership',
        'Receive keys and move into your new home',
      ],
    },
  ];

  const financingOptions = [
    {
      type: 'Conventional Loan',
      description: 'Traditional mortgage with 20% down payment',
      pros: ['Lower interest rates', 'No PMI required', 'Flexible terms'],
      cons: ['Higher down payment', 'Stricter credit requirements'],
      bestFor: 'Buyers with strong credit and substantial savings',
    },
    {
      type: 'FHA Loan',
      description: 'Government-backed loan with lower down payment',
      pros: [
        '3.5% down payment',
        'Lower credit score requirements',
        'Competitive rates',
      ],
      cons: ['PMI required', 'Property restrictions', 'Loan limits'],
      bestFor: 'First-time buyers with limited down payment',
    },
    {
      type: 'VA Loan',
      description: 'Veterans Affairs guaranteed loan',
      pros: [
        '0% down payment',
        'No PMI',
        'Competitive rates',
        'Limited closing costs',
      ],
      cons: [
        'VA funding fee',
        'Eligibility requirements',
        'Property restrictions',
      ],
      bestFor: 'Veterans, active service members, and spouses',
    },
    {
      type: 'Jumbo Loan',
      description: 'Loan amount exceeding conventional limits',
      pros: [
        'Higher loan amounts',
        'Luxury property financing',
        'Flexible terms',
      ],
      cons: [
        'Higher interest rates',
        'Stricter requirements',
        'Larger down payment',
      ],
      bestFor: 'Luxury home buyers in high-cost areas',
    },
  ];

  const closingCosts = [
    {
      item: 'Loan Origination Fee',
      typical: '$1,000 - $3,000',
      description: 'Lender processing fee',
    },
    {
      item: 'Appraisal Fee',
      typical: '$400 - $600',
      description: 'Property value assessment',
    },
    {
      item: 'Title Insurance',
      typical: '$1,000 - $2,000',
      description: 'Protection against title issues',
    },
    {
      item: 'Escrow Fees',
      typical: '$500 - $1,000',
      description: 'Third-party transaction handling',
    },
    {
      item: 'Recording Fees',
      typical: '$100 - $300',
      description: 'County recording costs',
    },
    {
      item: 'Home Inspection',
      typical: '$300 - $500',
      description: 'Property condition assessment',
    },
    {
      item: 'Property Taxes',
      typical: 'Pro-rated',
      description: 'Prepaid property taxes',
    },
    {
      item: 'Homeowners Insurance',
      typical: '1 year prepaid',
      description: 'Insurance premium',
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
            Complete Guide to Buying in Summerlin West
          </h1>
          <p className="mx-auto max-w-4xl text-xl text-gray-600">
            Everything you need to know about purchasing your dream home in Las
            Vegas&apos;s premier master-planned community. From financing to
            closing, we&apos;ll guide you every step of the way.
          </p>
        </div>

        {/* RealScout Advanced Search Widget */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Start Your Property Search
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Use our advanced search tools to find your perfect Summerlin West home
            </p>
          </div>
          
          {/* RealScout Advanced Search Widget */}
          <div className="flex justify-center">
            <div
              dangerouslySetInnerHTML={{
                __html: '<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>'
              }}
            />
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 rounded-lg px-6 py-3 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mx-auto max-w-6xl">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-12">
              {/* Why Summerlin West */}
              <div className="rounded-xl bg-white p-8 shadow-xl">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Why Choose Summerlin West?
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="rounded-full bg-amber-100 p-2">
                        <Star className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Premier Location
                        </h3>
                        <p className="text-sm text-gray-600">
                          Nestled against the Red Rock Canyon with stunning
                          mountain views
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="rounded-full bg-amber-100 p-2">
                        <MapPin className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          World-Class Amenities
                        </h3>
                        <p className="text-sm text-gray-600">
                          Golf courses, shopping, dining, and outdoor recreation
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="rounded-full bg-amber-100 p-2">
                        <Home className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Luxury Homes
                        </h3>
                        <p className="text-sm text-gray-600">
                          Custom estates, modern villas, and premium properties
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="rounded-full bg-amber-100 p-2">
                        <CheckCircle className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Investment Value
                        </h3>
                        <p className="text-sm text-gray-600">
                          Strong appreciation and rental demand in the luxury
                          market
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buying Steps Overview */}
              <div className="rounded-xl bg-white p-8 shadow-xl">
                <h2 className="mb-8 text-3xl font-bold text-gray-900">
                  The 6-Step Buying Process
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {buyingSteps.map((step) => (
                    <div
                      key={step.step}
                      className="rounded-lg border border-gray-200 p-6"
                    >
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-600 font-bold text-white">
                        {step.step}
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Market Overview */}
              <div className="rounded-xl bg-amber-50 p-8">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Summerlin West Market Overview
                </h3>
                <div className="grid gap-6 md:grid-cols-4">
                  <div className="rounded-lg bg-white p-4 text-center">
                    <div className="text-2xl font-bold text-amber-600">
                      $1,247
                    </div>
                    <div className="text-sm text-gray-600">Price per sq ft</div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center">
                    <div className="text-2xl font-bold text-amber-600">45</div>
                    <div className="text-sm text-gray-600">Days on market</div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center">
                    <div className="text-2xl font-bold text-amber-600">
                      +12.3%
                    </div>
                    <div className="text-sm text-gray-600">
                      Year over year growth
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center">
                    <div className="text-2xl font-bold text-amber-600">
                      98.7%
                    </div>
                    <div className="text-sm text-gray-600">
                      List to sale ratio
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Search Process Tab */}
          {activeTab === 'search' && (
            <div className="space-y-12">
              <div className="rounded-xl bg-white p-8 shadow-xl">
                <h2 className="mb-8 text-3xl font-bold text-gray-900">
                  How to Search for Your Dream Home
                </h2>

                <div className="space-y-8">
                  {buyingSteps.slice(1, 4).map((step) => (
                    <div
                      key={step.step}
                      className="border-l-4 border-amber-500 pl-6"
                    >
                      <h3 className="mb-4 text-xl font-semibold text-gray-900">
                        Step {step.step}: {step.title}
                      </h3>
                      <p className="mb-4 text-gray-600">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                            <span className="text-sm text-gray-700">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Search Tools */}
                <div className="mt-12 rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">
                    Our Advanced Search Tools
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-center space-x-3">
                      <Search className="h-5 w-5 text-amber-600" />
                      <span className="text-sm text-gray-700">
                        RealScout MLS Integration
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-amber-600" />
                      <span className="text-sm text-gray-700">
                        Interactive Map Search
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-amber-600" />
                      <span className="text-sm text-gray-700">
                        Detailed Property Reports
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-amber-600" />
                      <span className="text-sm text-gray-700">
                        Personal Agent Guidance
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Financing Tab */}
          {activeTab === 'financing' && (
            <div className="space-y-12">
              <div className="rounded-xl bg-white p-8 shadow-xl">
                <h2 className="mb-8 text-3xl font-bold text-gray-900">
                  Financing Your Summerlin West Home
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                  {financingOptions.map((option, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-gray-200 p-6"
                    >
                      <h3 className="mb-3 text-lg font-semibold text-gray-900">
                        {option.type}
                      </h3>
                      <p className="mb-4 text-sm text-gray-600">
                        {option.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="mb-2 font-medium text-gray-900">
                          Pros:
                        </h4>
                        <ul className="space-y-1">
                          {option.pros.map((pro, idx) => (
                            <li
                              key={idx}
                              className="flex items-center space-x-2 text-sm"
                            >
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-gray-700">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="mb-2 font-medium text-gray-900">
                          Cons:
                        </h4>
                        <ul className="space-y-1">
                          {option.cons.map((con, idx) => (
                            <li
                              key={idx}
                              className="flex items-center space-x-2 text-sm"
                            >
                              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                                ×
                              </div>
                              <span className="text-gray-700">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-lg bg-amber-50 p-3">
                        <span className="text-sm font-medium text-amber-800">
                          Best for: {option.bestFor}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Closing Costs */}
                <div className="mt-12">
                  <h3 className="mb-6 text-2xl font-bold text-gray-900">
                    Understanding Closing Costs
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-2 text-left font-semibold text-gray-700">
                            Item
                          </th>
                          <th className="py-2 text-right font-semibold text-gray-700">
                            Typical Cost
                          </th>
                          <th className="py-2 text-left font-semibold text-gray-700">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {closingCosts.map((cost, index) => (
                          <tr key={index} className="border-b border-gray-100">
                            <td className="py-2 font-medium text-gray-900">
                              {cost.item}
                            </td>
                            <td className="py-2 text-right text-gray-700">
                              {cost.typical}
                            </td>
                            <td className="py-2 text-gray-600">
                              {cost.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Closing Process Tab */}
          {activeTab === 'closing' && (
            <div className="space-y-12">
              <div className="rounded-xl bg-white p-8 shadow-xl">
                <h2 className="mb-8 text-3xl font-bold text-gray-900">
                  The Closing Process
                </h2>

                <div className="space-y-8">
                  {buyingSteps.slice(4, 6).map((step) => (
                    <div
                      key={step.step}
                      className="border-l-4 border-amber-500 pl-6"
                    >
                      <h3 className="mb-4 text-xl font-semibold text-gray-900">
                        Step {step.step}: {step.title}
                      </h3>
                      <p className="mb-4 text-gray-600">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                            <span className="text-sm text-gray-700">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Timeline */}
                <div className="mt-12 rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-6 text-xl font-semibold text-gray-900">
                    Typical Closing Timeline
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">
                        1
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">
                          Offer Accepted
                        </span>
                        <span className="ml-2 text-sm text-gray-600">
                          Day 0
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">
                        2
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">
                          Inspection & Due Diligence
                        </span>
                        <span className="ml-2 text-sm text-gray-600">
                          Days 1-10
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">
                        3
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">
                          Loan Processing
                        </span>
                        <span className="ml-2 text-sm text-gray-600">
                          Days 11-25
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">
                        4
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">
                          Final Walkthrough
                        </span>
                        <span className="ml-2 text-sm text-gray-600">
                          Day 26
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">
                        5
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">
                          Closing
                        </span>
                        <span className="ml-2 text-sm text-gray-600">
                          Day 30
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-4xl rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 p-12 text-white">
            <h2 className="mb-6 text-3xl font-bold">
              Ready to Start Your Home Search?
            </h2>
            <p className="mb-8 text-xl text-amber-100">
              Our expert team is here to guide you through every step of the
              buying process.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-lg bg-white px-8 py-4 font-semibold text-amber-600 transition-colors hover:bg-gray-100">
                Start Your Search
              </button>
              <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-amber-600">
                Contact Our Team
              </button>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>(702) 555-0100</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>info@summerlinwesthomes.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
