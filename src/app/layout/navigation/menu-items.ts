import { MenuItem } from 'primeng/api';

export const menuItems: MenuItem[] = [
  {
    label: 'Home',
    routerLink: '/',
  },
  {
    label: 'Genre',
    items: [
      {
        label: 'Techno',
        routerLink: '/genre/techno',
      },
      {
        label: 'House',
        routerLink: '/genre/house',
      },
      {
        label: 'Electro',
        routerLink: '/genre/electro',
      },
      {
        label: 'Breaks',
        routerLink: '/genre/breaks',
      },
    ],
  },
  {
    label: 'Contact',
    routerLink: '/contact',
  },
];
