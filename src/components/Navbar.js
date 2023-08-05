import React from 'react';
import { Nav } from '@fluentui/react';

const links = [
  {
    name: 'Home',
    url: '/',
    key: 'key1',
  },
  {
    name: 'Login',
    url: '/login',
    key: 'key2',
  },
  {
    name: 'Register',
    url: '/register',
    key: 'key3',
  },
];

const Navbar = () => (
  <Nav groups={[{ links }]} />
);

export default Navbar;
