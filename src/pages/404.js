import React from 'react';
import { Link } from 'gatsby';

import IndexLayout from '../components/indexLayout';

const NotFoundPage = () => (
  <IndexLayout>
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-6 md:col-start-2 sm:col-span-1">
        <h2 className="text-4xl mb-4">404</h2>
      </div>
      <div className="col-span-6 sm:col-span-3">
        <Link to="/" className="text-primary">
          Regresar al inicio
        </Link>
      </div>
    </div>
  </IndexLayout>
);

export default NotFoundPage;
