import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const SecondPage = () => (
  <Layout>
    <h1>Welcome to About me</h1>
    <Link to="/">Go back home</Link>
  </Layout>
);

export default SecondPage;
