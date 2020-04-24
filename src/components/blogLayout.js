/**
 * Blog Layout component
 */

import React from 'react';

const BlogLayout = ({ children }) => {
  return (
    <div className="container mx-auto pt-6 px-4">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 lg:col-start-2 lg:col-span-4">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
