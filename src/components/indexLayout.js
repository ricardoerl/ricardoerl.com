/**
 * Layout component
 */

import React from 'react';
import Header from './header';
import Footer from './footer';

const IndexLayout = ({ children }) => {
  return (
    <div className="container mx-auto pt-6 px-6">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default IndexLayout;
