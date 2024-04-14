export type Item = {
  name: string;
  
  slug: string;
  description?: string;
};

export const publicLinks: { name: string; href: string;disabled: boolean; items: Item[] }[] = [
  {
    name: 'Search by EPIC',
    href: '/voter-search-epic',
    disabled: false,
    items: [],
  },
  {
    name: 'Search by Mobile',
    href: '/voter-search-mobile',
    disabled: false,
    items: [],
  },
  {
    name: 'Search by Details',
    href: '/voter-search-details',
    disabled: false,
    items: [],
  },
];
