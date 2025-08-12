'use client';

import React, { useState } from 'react';
import {
  GraduationCap,
  MapPin,
  Star,
  Users,
  Award,
  Phone,
  Globe,
  BookOpen,
  Shield,
  TrendingUp,
} from 'lucide-react';

export default function SchoolsPage() {
  const [selectedSchoolType, setSelectedSchoolType] = useState('all');

  const schools = [
    {
      name: 'Palo Verde High School',
      type: 'Public High School',
      grade: '9-12',
      rating: 9.2,
      address: '333 S Pavilion Center Dr, Las Vegas, NV 89144',
      distance: '2.1 miles',
      enrollment: '2,847',
      features: [
        'Advanced Placement Programs',
        'International Baccalaureate',
        'STEM Academy',
        'Arts & Music Programs',
        'Athletics Excellence',
      ],
      achievements: [
        'National Blue Ribbon School',
        'Nevada High School of Excellence',
        'Top 10% in Nevada',
      ],
      phone: '(702) 799-1450',
      website: 'https://www.paloverde.ccsd.net',
      description:
        'Premier public high school serving Summerlin West with exceptional academic programs and college preparation.',
    },
    {
      name: 'Sig Rogich Middle School',
      type: 'Public Middle School',
      grade: '6-8',
      rating: 8.8,
      address: '1050 N Hualapai Way, Las Vegas, NV 89144',
      distance: '1.8 miles',
      enrollment: '1,234',
      features: [
        'Gifted & Talented Program',
        'STEM Focus',
        'Band & Orchestra',
        'Sports Programs',
        'Technology Integration',
      ],
      achievements: [
        'Nevada Middle School of Excellence',
        'STEM Recognition',
        'High Academic Performance',
      ],
      phone: '(702) 799-1220',
      website: 'https://www.sigrogich.ccsd.net',
      description:
        'Excellence in middle school education with strong focus on STEM and gifted programs.',
    },
    {
      name: 'Walter V. Long Elementary',
      type: 'Public Elementary',
      grade: 'K-5',
      rating: 9.0,
      address: '5850 N Tenaya Way, Las Vegas, NV 89149',
      distance: '0.9 miles',
      enrollment: '756',
      features: [
        'Early Childhood Education',
        'Reading Excellence',
        'Math & Science Focus',
        'Arts Integration',
        'Parent Involvement',
      ],
      achievements: [
        'Nevada Elementary School of Excellence',
        'Reading Achievement Award',
        'High Parent Satisfaction',
      ],
      phone: '(702) 799-1220',
      website: 'https://www.waltervlong.ccsd.net',
      description:
        'Outstanding elementary education with strong foundation in reading and mathematics.',
    },
    {
      name: 'Faith Lutheran Middle & High School',
      type: 'Private Christian School',
      grade: '6-12',
      rating: 9.5,
      address: '2015 S Hualapai Way, Las Vegas, NV 89117',
      distance: '3.2 miles',
      enrollment: '1,200',
      features: [
        'Christian Education',
        'College Preparatory',
        'Advanced Placement',
        'Fine Arts Programs',
        'Athletics Excellence',
      ],
      achievements: [
        'National Blue Ribbon School',
        'Top Private School in Nevada',
        '100% College Acceptance',
      ],
      phone: '(702) 804-4400',
      website: 'https://www.faithlutheranlv.org',
      description:
        'Premier private Christian education with exceptional academic and spiritual development.',
    },
    {
      name: 'The Meadows School',
      type: 'Private College Prep',
      grade: 'PK-12',
      rating: 9.8,
      address: '8601 Scholar Ln, Las Vegas, NV 89128',
      distance: '4.1 miles',
      enrollment: '800',
      features: [
        'College Preparatory',
        'International Baccalaureate',
        'Small Class Sizes',
        'Arts & Athletics',
        'Global Education',
      ],
      achievements: [
        'Top Private School in Nevada',
        'International Baccalaureate World School',
        'Excellence in College Preparation',
      ],
      phone: '(702) 254-1610',
      website: 'https://www.themeadowsschool.org',
      description:
        'Elite private education with world-class college preparation and global perspective.',
    },
  ];

  const schoolTypes = [
    'all',
    'public',
    'private',
    'elementary',
    'middle',
    'high',
  ];

  const filteredSchools = schools.filter((school) => {
    if (selectedSchoolType === 'all') return true;
    if (selectedSchoolType === 'public') return school.type.includes('Public');
    if (selectedSchoolType === 'private')
      return school.type.includes('Private');
    if (selectedSchoolType === 'elementary')
      return school.grade.includes('K-5');
    if (selectedSchoolType === 'middle') return school.grade.includes('6-8');
    if (selectedSchoolType === 'high') return school.grade.includes('9-12');
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Summerlin West Schools - Excellence in Education
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Discover top-rated public and private schools serving the Summerlin
            West community
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="rounded-full bg-white/20 px-4 py-2">
              Top-Rated Schools
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2">
              Public & Private Options
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2">
              College Preparation
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2">
              STEM Excellence
            </span>
          </div>
        </div>
      </section>

      {/* School District Information */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold">
              Clark County School District - Summerlin West
            </h2>
            <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-blue-50 p-6">
                <div className="mb-4 flex justify-center">
                  <Shield className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-blue-900">
                  District Excellence
                </h3>
                <p className="text-blue-700">
                  Nationally recognized school district serving over 300,000
                  students
                </p>
              </div>
              <div className="rounded-lg bg-green-50 p-6">
                <div className="mb-4 flex justify-center">
                  <TrendingUp className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-green-900">
                  Academic Achievement
                </h3>
                <p className="text-green-700">
                  High graduation rates and college acceptance percentages
                </p>
              </div>
              <div className="rounded-lg bg-purple-50 p-6">
                <div className="mb-4 flex justify-center">
                  <Award className="h-12 w-12 text-purple-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-purple-900">
                  Program Variety
                </h3>
                <p className="text-purple-700">
                  Advanced Placement, STEM, Arts, and Athletics programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Filter */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Filter Schools by Type
            </label>
            <select
              value={selectedSchoolType}
              onChange={(e) => setSelectedSchoolType(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              aria-label="Filter schools by type"
            >
              <option value="all">All Schools</option>
              <option value="public">Public Schools</option>
              <option value="private">Private Schools</option>
              <option value="elementary">Elementary Schools</option>
              <option value="middle">Middle Schools</option>
              <option value="high">High Schools</option>
            </select>
          </div>
        </div>
      </section>

      {/* Schools Grid */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              {filteredSchools.length} Schools Found in Summerlin West
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Each school offers unique programs and opportunities for your
              child's education
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {filteredSchools.map((school) => (
              <div
                key={school.name}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 text-white">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{school.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-5 w-5 fill-yellow-300 text-yellow-300" />
                      <span className="text-lg font-semibold">
                        {school.rating}
                      </span>
                    </div>
                  </div>
                  <div className="mb-2 flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>{school.type}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4" />
                    <span>Grades {school.grade}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4 flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{school.address}</span>
                  </div>
                  <div className="mb-4 flex items-center space-x-2 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">
                      {school.enrollment} students
                    </span>
                  </div>

                  <p className="mb-4 text-gray-700">{school.description}</p>

                  <div className="mb-4">
                    <h4 className="mb-2 font-semibold text-gray-900">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {school.features.slice(0, 3).map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center space-x-2 text-sm text-gray-600"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="mb-2 font-semibold text-gray-900">
                      Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {school.achievements
                        .slice(0, 2)
                        .map((achievement, index) => (
                          <li
                            key={index}
                            className="flex items-center space-x-2 text-sm text-gray-600"
                          >
                            <Award className="h-3 w-3 text-yellow-500" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <a
                        href={`tel:${school.phone}`}
                        className="flex items-center space-x-1 rounded-lg bg-blue-600 px-3 py-2 text-sm text-white transition-colors hover:bg-blue-700"
                      >
                        <Phone className="h-3 w-3" />
                        <span>Call</span>
                      </a>
                      <a
                        href={school.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                      >
                        <Globe className="h-3 w-3" />
                        <span>Website</span>
                      </a>
                    </div>
                    <span className="text-sm text-gray-500">
                      {school.distance}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Need Help Finding the Right School?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/90">
            Our team can help you understand school boundaries, programs, and
            enrollment options in Summerlin West
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-all hover:shadow-xl">
              School Consultation
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:bg-white hover:text-blue-600">
              Download School Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
