import React from 'react';
import { Link } from 'gatsby';
import Avatar from './avatar';

const Header = () => {
  const { pathname } = typeof window !== 'undefined' ? window.location : '';
  const isHome = pathname == '/';
  return (
    <header className="h-12 flex justify-between items-center mb-4">
      <Link className="flex items-center" to="/">
        {!isHome && <Avatar size="small" className="mr-2 rounded-full" />}
        <h1 className="font-semibold text-lg">Ricardo Ramírez</h1>
      </Link>
      <ul className="flex">
        <li className="mx-1 md:mx-2">
          <Link className="no-underline" to="/">
            Blog
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
