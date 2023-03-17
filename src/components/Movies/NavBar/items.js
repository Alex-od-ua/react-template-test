import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Home ',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'Movies',
    link: '/Movies',
  },
  // {
  //   id: nanoid(),
  //   text: 'Contacts page',
  //   link: '/contacts',
  // },
];

export default items;
