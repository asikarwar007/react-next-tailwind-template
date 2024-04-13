export type Item = {
  name: string;
  
  href: string;
  description?: string;
};

export const footerLinks: { name: string; href: string;disabled: boolean; items: Item[] }[] = [
  {
    name: 'Resources',
    href: '/resources',
    disabled: false,
    items: [
      {
        name: 'What’s New',
        href: '/resources/what-new',
      },
      {
        name: 'Developers',
        href: '/resources/developers',
      },
      {
        name: 'Releases',
        href: '/resources/releases',
      },
      {
        name: 'Support',
        href: '/resources/support',
      },
    ],
  },
];
