import React from 'react';
import { Link } from 'gatsby';

import IndexLayout from '../components/indexLayout';

const SecondPage = () => (
  <IndexLayout>
    <h1>Welcome to About me</h1>
    <Link to="/">Go back home</Link>
  </IndexLayout>
);

export default SecondPage;
