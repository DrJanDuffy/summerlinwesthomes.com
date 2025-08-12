// RealScout TypeScript declarations
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'agent-encoded-id'?: string;
          'sort-order'?: string;
          'listing-status'?: string;
          'property-types'?: string;
          'price-min'?: string;
          'price-max'?: string;
          'show-filters'?: string;
          'show-sort'?: string;
          'show-pagination'?: string;
          'page-size'?: string;
          'hide-search'?: string;
          'hide-listing-date'?: string;
          'hide-listing-type'?: string;
          'hide-map'?: string;
        },
        HTMLElement
      >;
      'realscout-property-search': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'agent-encoded-id'?: string;
        },
        HTMLElement
      >;
      'realscout-property-details': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'property-id'?: string;
        },
        HTMLElement
      >;
    }
  }
}

export {};
