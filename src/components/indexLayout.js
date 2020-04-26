/**
 * Layout component
 */

import React from 'react';
import { Link } from 'gatsby';

const IndexLayout = ({ children }) => {
  return (
    <div className="container mx-auto pt-6 px-4">
      <div className="grid grid-cols-5 gap-6">
        <div className="col-span-5 md:col-span-2 lg:col-span-1">
          <header>
            <div className="vcard">
              <div className="vcard__avatar"></div>
              <h1 className="vcard__name">Ricardo Ramírez</h1>
              <div className="vcard__description">
                <p>
                  Front End Developer at Applaudo Studios and HorchataJS
                  organizer. Loves building websites, hiking and watching
                  movies.
                </p>
              </div>
            </div>
            <ul className="menu">
              <li>Articles</li>
              <li>
                <Link to="/about">About me</Link>
              </li>
            </ul>
          </header>
          <footer>© {new Date().getFullYear()}</footer>
        </div>
        <div className="col-span-5 md:col-span-3">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default IndexLayout;
