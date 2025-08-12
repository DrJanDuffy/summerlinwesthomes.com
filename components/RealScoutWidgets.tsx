'use client';

import React from 'react';

interface RealScoutOfficeListingsProps {
  'agent-encoded-id': string;
  'sort-order'?: string;
  'listing-status'?: string;
  'property-types'?: string;
  'price-min'?: string;
  'price-max'?: string;
  'beds-min'?: string;
  'baths-min'?: string;
  'sqft-min'?: string;
  'sqft-max'?: string;
  'sort-by'?: string;
  limit?: string;
  'show-filters'?: string;
  'show-sort'?: string;
  'show-pagination'?: string;
  theme?: string;
}

interface RealScoutPropertySearchProps {
  'agent-encoded-id': string;
  'show-filters'?: string;
  'show-sort'?: string;
  theme?: string;
  placeholder?: string;
}

interface RealScoutPropertyDetailsProps {
  'listing-id'?: string;
  'agent-encoded-id': string;
  'show-contact-form'?: string;
  'show-similar'?: string;
  theme?: string;
}

export function RealScoutOfficeListings(props: RealScoutOfficeListingsProps) {
  return React.createElement('realscout-office-listings', props);
}

export function RealScoutPropertySearch(props: RealScoutPropertySearchProps) {
  return React.createElement('realscout-property-search', props);
}

export function RealScoutPropertyDetails(props: RealScoutPropertyDetailsProps) {
  return React.createElement('realscout-property-details', props);
}
