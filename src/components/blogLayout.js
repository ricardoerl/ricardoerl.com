/**
 * Blog Layout component
 */

import React from 'react';
import { Link } from 'gatsby';
import Avatar from './avatar';

const BlogLayout = ({ children }) => {
  return (
    <div className="container mx-auto pt-6 px-4">
      <div className="grid grid-cols-5 gap-6">
        <div className="col-span-5 md:col-start-2 md:col-span-3">
          <header className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="mr-2">
                <Avatar size="small" />
              </div>
              <h1 className="font-semibold text-lg">Ricardo Ramírez</h1>
            </div>
            <ul className="flex">
              <li className="mx-1 md:mx-2">
                <Link
                  className="no-underline"
                  activeClassName="text-primary underline"
                  to="/"
                  partiallyActive
                >
                  Blog
                </Link>
              </li>
              <li className="mx-1 md:mx-2">
                <Link
                  className="no-underline"
                  activeClassName="text-primary"
                  to="/about"
                >
                  About me
                </Link>
              </li>
            </ul>
          </header>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
