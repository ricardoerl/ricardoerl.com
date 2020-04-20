/**
 * Layout component
 */

import React from 'react';

import './layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}</footer>
    </>
  );
};

export default Layout;
