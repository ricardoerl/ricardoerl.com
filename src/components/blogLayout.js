/**
 * Blog Layout component
 */

import React from 'react';

const BlogLayout = ({ children }) => {
  return (
    <div className="container mx-auto pt-6 px-4">
      <div className="grid grid-cols-5 gap-6">
        <div className="col-span-5 md:col-start-2 md:col-span-3">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
