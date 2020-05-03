/**
 * Layout component
 */

import React from 'react';
import Header from './header';
import Footer from './footer';

const IndexLayout = ({ children }) => {
  return (
    <div className="container max-w-xl mx-auto pt-6 px-4">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default IndexLayout;
