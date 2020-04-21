/**
 * Layout component
 */

import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <div className="vcard">
          <div className="vcard__avatar"></div>
          <h1 className="vcard__name">Ricardo Ramírez</h1>
          <div className="vcard__description">
            <p>
              Front End Developer at Applaudo Studios and HorchataJS organizer.
              Loves building websites, hiking and watching movies.
            </p>
          </div>
        </div>
        <ul className="menu">
          <li>Artículos</li>
          <li>Acerca de</li>
        </ul>
      </header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}</footer>
    </>
  );
};

export default Layout;
