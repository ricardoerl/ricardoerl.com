/**
 * Layout component
 */

import React from 'react';
import { Link } from 'gatsby';
import Avatar from './avatar';

const IndexLayout = ({ children }) => {
  return (
    <div className="container mx-auto pt-6 px-4">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 md:col-span-1">
          <header>
            <div className="vcard">
              <div className="rounded-full">
                <Avatar />
              </div>
              <h1 className="mt-3 mb-4 font-semibold text-lg">
                Ricardo Ramírez
              </h1>
              <p className="my-4">
                Front End Developer at Applaudo Studios and HorchataJS
                organizer. Loves building websites, hiking and watching movies.
              </p>
            </div>
            <ul className="my-4">
              <li className="my-1">
                <Link
                  className="no-underline"
                  activeClassName="text-primary underline"
                  to="/"
                >
                  Blog
                </Link>
              </li>
              <li className="my-1">
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
          <footer className="text-xs">
            &copy; 2020 &mdash; {new Date().getFullYear()} Ricardo Ramírez.
          </footer>
        </div>
        <div className="col-span-3 md:col-span-2">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default IndexLayout;
