import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Home ',
    link: '/',
    private: false,
  },
  {
    id: nanoid(),
    text: 'Contacts',
    link: '/contacts',
    private: true,
  },
  {
    id: nanoid(),
    text: 'Image Finder',
    link: '/image-finder',
    private: true,
  },
  {
    id: nanoid(),
    text: 'Trending Movies',
    link: '/tranding-movies',
    private: true,
  },
  {
    id: nanoid(),
    text: 'Movies Finder',
    link: '/movies-finder',
    private: true,
  },
];

export default items;
