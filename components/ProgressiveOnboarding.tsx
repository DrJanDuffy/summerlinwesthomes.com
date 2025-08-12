'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, Home, MapPin, DollarSign, Bed, ChevronRight, X, Check } from 'lucide-react';
import { useOnboarding } from './OnboardingContext';

interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface UserPreferences {
  budget: string;
  bedrooms: string;
  location: string;
}

export function ProgressiveOnboarding() {
  const { isModalOpen, closeModal } = useOnboarding();
  const [currentStep, setCurrentStep] = useState(0);
  const [userPreferences, setUserPreferences] = useState<UserPreferences>({
    budget: '',
    bedrooms: '',
    location: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showStickySearch, setShowStickySearch] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const onboardingSteps: OnboardingStep[] = [
    {
      id: 'budget',
      title: 'What\'s your budget?',
      description: 'Help us find properties within your price range',
      completed: false
    },
    {
      id: 'bedrooms',
      title: 'How many bedrooms?',
      description: 'Choose your ideal bedroom count',
      completed: false
    },
    {
      id: 'location',
      title: 'Preferred location?',
      description: 'Select your preferred Summerlin West area',
      completed: false
    }
  ];

  const budgetOptions = [
    { value: '500k-750k', label: '$500K - $750K', icon: DollarSign },
    { value: '750k-1m', label: '$750K - $1M', icon: DollarSign },
    { value: '1m-1.5m', label: '$1M - $1.5M', icon: DollarSign },
    { value: '1.5m+', label: '$1.5M+', icon: DollarSign }
  ];

  const bedroomOptions = [
    { value: '2', label: '2 Bedrooms', icon: Bed },
    { value: '3', label: '3 Bedrooms', icon: Bed },
    { value: '4', label: '4 Bedrooms', icon: Bed },
    { value: '5+', label: '5+ Bedrooms', icon: Bed }
  ];

  const locationOptions = [
    { value: 'redrock', label: 'Red Rock Country Club', icon: MapPin },
    { value: 'summerlin-park', label: 'Summerlin Park', icon: MapPin },
    { value: 'the-ridges', label: 'The Ridges', icon: MapPin },
    { value: 'any', label: 'Any Summerlin West Area', icon: MapPin }
  ];

  const searchSuggestions = [
    'Luxury homes in Red Rock Country Club',
    'Properties with mountain views',
    'Golf course frontage homes',
    'New construction in Summerlin West',
    'Homes with pools and spas',
    'Gated community properties'
  ];

  // Show sticky search bar after hero scroll
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setShowStickySearch(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeModal]);

  const handlePreferenceSelect = (type: keyof UserPreferences, value: string) => {
    setUserPreferences(prev => ({ ...prev, [type]: value }));
    
    // Mark current step as completed
    const updatedSteps = onboardingSteps.map((step, index) => 
      index === currentStep ? { ...step, completed: true } : step
    );
    
    // Move to next step or complete onboarding
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding and show search tools
      completeOnboarding();
    }
  };

  const completeOnboarding = () => {
    // Here you would typically show the relevant RealScout search tools
    // For now, we'll just close the modal and show a success message
    closeModal();
    // You could also redirect to a specific search page or show search results
  };

  const getCompletionPercentage = () => {
    const completed = onboardingSteps.filter(step => step.completed).length;
    return (completed / onboardingSteps.length) * 100;
  };

  const renderStepContent = () => {
    const step = onboardingSteps[currentStep];
    
    switch (step.id) {
      case 'budget':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {budgetOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handlePreferenceSelect('budget', option.value)}
                  className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
                >
                  <option.icon className="h-8 w-8 text-blue-600 mb-2" />
                  <span className="font-medium text-gray-900">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        );
      
      case 'bedrooms':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {bedroomOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handlePreferenceSelect('bedrooms', option.value)}
                  className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
                >
                  <option.icon className="h-8 w-8 text-blue-600 mb-2" />
                  <span className="font-medium text-gray-900">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        );
      
      case 'location':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {locationOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handlePreferenceSelect('location', option.value)}
                  className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
                >
                  <option.icon className="h-8 w-8 text-blue-600 mb-2" />
                  <span className="font-medium text-gray-900">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      {/* Sticky Floating Search Bar */}
      {showStickySearch && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-2xl px-4">
          <div className="relative">
            <div className="bg-white rounded-full shadow-2xl border border-gray-200">
              <div className="flex items-center px-6 py-4">
                <Search className="h-5 w-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search for your dream home..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  className="flex-1 outline-none text-gray-900 placeholder-gray-500"
                />
                <button
                  onClick={() => {
                    // This will be handled by the context
                    // The modal will open when triggered from elsewhere
                  }}
                  className="ml-3 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Quick Start
                </button>
              </div>
            </div>
            
            {/* Search Suggestions */}
            {showSuggestions && searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 max-h-60 overflow-y-auto">
                {searchSuggestions
                  .filter(suggestion => 
                    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((suggestion, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-6 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                      onClick={() => {
                        setSearchQuery(suggestion);
                        setShowSuggestions(false);
                      }}
                    >
                      <div className="flex items-center">
                        <Search className="h-4 w-4 text-gray-400 mr-3" />
                        <span className="text-gray-700">{suggestion}</span>
                      </div>
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Onboarding Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div 
            ref={modalRef}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Find Your Dream Home in 60 Seconds</h2>
                <p className="text-gray-600 mt-1">Let&apos;s get started with a few quick questions</p>
              </div>
                                            <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close modal"
                title="Close modal"
              >
                  <X className="h-6 w-6" />
                </button>
            </div>

            {/* Progress Bar */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Step {currentStep + 1} of {onboardingSteps.length}
                </span>
                <span className="text-sm text-gray-500">
                  {Math.round(getCompletionPercentage())}% Complete
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${getCompletionPercentage()}%` }}
                ></div>
              </div>
            </div>

            {/* Step Indicators */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                {onboardingSteps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                      index < currentStep 
                        ? 'bg-green-500 border-green-500 text-white' 
                        : index === currentStep 
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : 'bg-gray-200 border-gray-300 text-gray-500'
                    }`}>
                      {index < currentStep ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <span className="text-sm font-medium">{index + 1}</span>
                      )}
                    </div>
                    {index < onboardingSteps.length - 1 && (
                      <div className={`w-12 h-0.5 mx-2 ${
                        index < currentStep ? 'bg-green-500' : 'bg-gray-300'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step Content */}
            <div className="p-6">
              {renderStepContent()}
            </div>

            {/* Navigation */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="h-4 w-4 rotate-180 mr-2" />
                  Previous
                </button>
                
                <div className="text-sm text-gray-500">
                  {currentStep < onboardingSteps.length - 1 
                    ? `Next: ${onboardingSteps[currentStep + 1]?.title}`
                    : 'Complete onboarding to see your personalized search results'
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
