export type Item = {
  name: string;
  
  slug: string;
  description?: string;
};

export const publicLinks: { name: string; href: string;disabled: boolean; items: Item[] }[] = [
  {
    name: 'Voter Search',
    href: '/voter-search',
    disabled: false,
    items: [
      {
        name: 'All Accessibility Features',
        slug: 'pals',
        description: 'Create UI that is shared across routes',
      },
      {
        name: 'All Keybinds',
        slug: 'items',
        description: 'Organize routes without affecting URL paths',
      },
      {
        name: 'Co-op & Joining Friends',
        slug: 'breeding',
        description: 'Render multiple pages in the same layout',
      },
      {
        name: ' Essence Traders Locations ',
        slug: 'calculate-iv',
        description: 'Render multiple pages in the same layout',
      },
      {
        name: ' Move, Copy, Delete Structures ',
        slug: 'calculate-iv',
        description: 'Render multiple pages in the same layout',
      },
      {
        name: ' Tips & Tricks ',
        slug: 'calculate-iv',
        description: 'Render multiple pages in the same layout',
      },
    ],
  },
  {
    name: 'Database',
    href: '/wiki',
    disabled: false,
    items: [
      {
        name: 'Pals',
        slug: 'pals',
        description: 'Create UI that is shared across routes',
      },
      {
        name: 'Items',
        slug: 'items',
        description: 'Organize routes without affecting URL paths',
      },
      {
        name: 'Breeding Calculator',
        slug: 'breeding',
        description: 'Render multiple pages in the same layout',
      },
      {
        name: 'Calculator IV',
        slug: 'calculate-iv',
        description: 'Render multiple pages in the same layout',
      },
    ],
  }
];
