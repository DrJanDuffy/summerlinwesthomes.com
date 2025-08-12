/// <reference types="react" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'agent-encoded-id'?: string;
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
        'limit'?: string;
        'show-filters'?: string;
        'show-sort'?: string;
        'show-pagination'?: string;
        'theme'?: string;
      }, HTMLElement>;
      
      'realscout-property-search': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'agent-encoded-id'?: string;
        'show-filters'?: string;
        'show-sort'?: string;
        'theme'?: string;
        'placeholder'?: string;
      }, HTMLElement>;
      
      'realscout-property-details': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'listing-id'?: string;
        'agent-encoded-id'?: string;
        'show-contact-form'?: string;
        'show-similar'?: string;
        'theme'?: string;
      }, HTMLElement>;
    }
  }
}

export {};
